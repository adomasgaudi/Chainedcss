<p align="center">
  <a href="https://github.com/adomasgaudi/Chainedcss" target="_blank">
    <h1 align="center">ChainedCSS</h1>
  </a>
</p>
<p align="center">
    Minimalistic <strong>Method Chaining CSS</strong> - TailwindStyle
<br/>
    <a href="https://github.com/adomasgaudi/Chainedcss">github</a>
    <a href="https://www.npmjs.com/package/chainedcss">npm</a>
</p>

---

# Installation

<br>
Currently, ChainedCSS works only with emotion.js
<br>
Install these packages:
<br>

```js
// for npm
npm i chainedcss @emotion/react @emotion/css

// for yarn
yarn add chainedcss @emotion/react @emotion/css

// for pnpm
pnpm add chainedcss @emotion/react @emotion/css
```

<br>
<br>

## Usage for React and Next (up to Next.js 12)

At the top of every component

```js
/** @jsxImportSource @emotion/react */
import { _ } from 'chainedcss';
```

<br>
<br>

## Use with Next 13 App directory

If you're using next 13, make sure to add "use client" at the top and not in the root component - app.tsx, only in the child components of root. ( might only aply if you're using the app dir)

```js
'use client';
/** @jsxImportSource @emotion/react */
import { _ } from 'chainedcss';
```

<br>
<br>

# Rationale

**✨ You already know how to use it** - for the majority of basic styles ChainedCSS uses identical styling to Tailwind, to make sure users don't have to relearn everything again.

**✨ The power of objects and methods** - utilise the full power of js using objects and methods. Flexibility and Programability, far beyond css.

**✨ Clean minimalistic look** - ChainedCSS avoids all uneccesary symbols and extra code to bring css in js as close as possible to Tailwind css. CSS is too long, we've come to realise this after Tailwind became so popular. JSS, CSS in JS is even worse. ChainedCSS fixes this.

**✨ Custom functions** - Tailwind only has pre-determined classes. Is that a bug or a feature? If you thinks that is a feature then use ChainedCSS styles which are basically the same, however if the user wants to, she can customize many of them, because they are functions and can receive an input.

<br>

# Get Started

**✨ Use Tailwind-ish styles** - for the majority of basic styles ChainedCSS uses identical styling to Tailwind, to make sure users don't have to relearn everything again.

```js
/** @jsxImportSource @emotion/react */
import { _ } from 'chainedcss';

const Component = () => {
  return (
    <h1 {..._.fontRed400().border().px4().py2()}>Hello</h1>
  );
};

export default Component;
```

<br>
<br>

**✨ Use numbers and variables in the styles functions**

```js
const paddingX = 4;
return (
  <h1 {..._.fontRed400().border().px(paddingX).py(2)}>Hello</h1>
);
```

<br>

**✨ Use backticks `` for cleaner function syntax** - string are interpolated into the css, so you can use any valid css.

```js
return (
  <h1 {..._.px`10%`.py('5vh')}>Hello</h1>
);
```

<br>

**✨ Define styles wherever confortable**

```js
const paddingStyles = () => _.p3().px`10vw`;
const Component = () => {
  return (
    <h1 {...paddingStyles()}>Hello</h1>
  );
```
