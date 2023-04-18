import { css } from '@emotion/react';
import { customCommandsArray } from './custom';
import { boxModelCommandsArray } from './boxModel';
import { colorCommandsArray } from './colors/colorStyles';
import { textCommandsArray } from './fonts';

const allCommands = [
  ...boxModelCommandsArray,
  ...colorCommandsArray,
  ...textCommandsArray,
  ...customCommandsArray,
];

//logic
const addStyleLogic = (editedStyle: any) => editedStyle ? ` ${editedStyle};` : ''
class OssomClass {
  css: any;
  o: any;
  constructor(initialStyle: any) {
    const self: any = this;
    this.css = null;
    this.o = { s: '', f: () => '' };

    self.__proto__.style = (cssStyle: any) => {
      self.o.s += addStyleLogic(cssStyle)
      self.o.f = () => self.o.s;
      self.css = css`
        ${self.o.s}
      `;
      return self;
    };

    // add initial style
    self.__proto__.style(initialStyle);

    //add all styles
    allCommands.forEach((item: any) => {
      self.__proto__[item.name] = (pass?: any) => {
        self.__proto__.style(item.func(pass));
        return self;
      };
    });
  }
}
class OSSClass {
  oss: any;
  constructor(initialStyle: any) {
    const self: any = this;
    this.oss = '';

    self.__proto__.style = (cssStyle: any) => {
      self.oss += cssStyle ? ` ${cssStyle};` : '';
      return self;
    };

    // add initial style
    self.__proto__.style(initialStyle);

    //add all styles
    allCommands.forEach((item: any) => {
      self.__proto__[item.name] = (pass?: any) => {
        self.__proto__.style(item.func(pass));
        return self;
      };
    });
  }
}

const Ossom: any = OssomClass;
const OSS: any = OSSClass;

const _: any = {};
const __: any = {};

// create a new instance of Ossom with a style
allCommands.forEach((command: any) => {
  _[command.name] = (pass: string) => new Ossom(command.func(pass));
  __[command.name] = (pass: string) => new OSS(command.func(pass));
});
_.blank = () => new Ossom('');
_.style = (style: any) => new Ossom(style);
__.blank = () => new OSS('');
__.style = (style: any) => new OSS(style);

export { _, __ };
