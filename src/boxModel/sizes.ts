const sizesCommandsArray: any = [];


const createCommandSize = (ccssName: string, cssRule: string) => ({
  name: ccssName,
  func: (x: string | number) => (typeof x === 'number' || /^\d+$/.test(x)) ? `${cssRule}: ${x}px` : `${cssRule}: ${x}`,
});

const createCommandBasic = (name: string, cssRule: string) => ({
  name: name,
  func: () => cssRule,
});
const createCommandMedia = (name: string, size: string) => ({
  name: name,
  func: (x: any) => `@media (min-width: ${size}px) {${x};}`,
});

const createCommandCustom = (name: string, func: any) => ({
  name, func
});


const sizes: any = [
  { name: "Full", effect: "100%" },
  { name: "Half", effect: "50%" },
  { name: "Third", effect: "33.333333%" },
  { name: "Quarter", effect: "25%" },
  { name: "Fifth", effect: "20%" },
];


//

//

//

//

// :::::::::      :::    :::       ::::::::       :::    ::: 
// :+:    :+:     :+:    :+:      :+:    :+:      :+:    :+:  
// +:+    +:+     +:+    +:+      +:+             +:+    +:+   
// +#++:++#+      +#+    +:+      +#++:++#++      +#++:++#++    
// +#+            +#+    +#+             +#+      +#+    +#+     
// #+#            #+#    #+#      #+#    #+#      #+#    #+#      
// ###             ########        ########       ###    ###       

sizesCommandsArray.push(
  createCommandMedia('sm', '640'),
  createCommandMedia('md', '768'),
  createCommandMedia('lg', '1024'),
  createCommandMedia('xl', '1280'),
);

sizesCommandsArray.push(
  createCommandSize('w', 'width'),
  createCommandSize('h', 'height'),
  createCommandSize('minH', 'min-height'),
  createCommandSize('minW', 'min-width'),

  createCommandBasic('hFull', 'height: 100%'),
  createCommandBasic('wFull', 'width: 100%'),
  createCommandBasic('overflowHidden', 'overflow: hidden'),
);

sizesCommandsArray.push(
  createCommandCustom('wPc', (x: any) => `width: ${x}%`),
);


sizes.forEach(({ name, cssRule }: any) => {
  sizesCommandsArray.push(sizesCommandsArray.push(createCommandBasic(`w${name}`, `width: ${cssRule}`)))
});

export { sizesCommandsArray };
