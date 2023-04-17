<p align="center">
  <a href="https://github.com/adomasgaudi/Chainedcss" target="_blank">
    <h1 align="center">ChainedCSS</h1>
  </a>
</p>

<p align="center">
    Minimalistic <strong>Method Chaining CSS</strong> - TailwindStyle
    <a href="https://github.com/adomasgaudi/Chainedcss">github</a>
    <a href="https://www.npmjs.com/package/chainedcss">npm</a>
</p>

---

## Instalation

Install with

```js
npm i chainedcss @emotion/react @emotion/css
```

At the top of every component

```js
/** @jsxImportSource @emotion/react */
import { _ } from 'chainedcss';
```

in next13 make sure to "use client" and not in the root component - app.tsx ( might only aply if you're using the app dir)

Style jsx elements using Tailwind classes:

```js
/** @jsxImportSource @emotion/react */
import { _ } from 'chainedcss';

const Component = () => {
  return (
    <h1
      {..._.fontRed400()
        .border()
        .px4()
        .py2()
        .bgGreen200()}
    ></h1>
  );
};
```

Nest Twin’s `tw` import within a css prop to add conditional styles:

```js
import tw from 'twin.macro';

const Input = ({ hasHover }) => (
  <input css={[tw`border`, hasHover && tw`hover:border-black`]} />
);
```

Or mix sass styles with the css import:

```js
import tw, { css } from 'twin.macro';

const hoverStyles = css`
  &:hover {
    border-color: black;
    ${tw`text-black`}
  }
`;
const Input = ({ hasHover }) => (
  <input css={[tw`border`, hasHover && hoverStyles]} />
);
```

### Styled Components

You can also use the tw import to create and style new components:

```js
import tw from 'twin.macro';

const Input = tw.input`border hover:border-black`;
```

And clone and style existing components:

```js
const PurpleInput = tw(Input)`border-purple-500`;
```

Switch to the styled import to add conditional styling:

```js
import tw, { styled } from 'twin.macro';

const StyledInput = styled.input(({ hasBorder }) => [
  `color: black;`,
  hasBorder && tw`border-purple-500`,
]);
const Input = () => <StyledInput hasBorder />;
```

Or use backticks to mix with sass styles:

```js
import tw, { styled } from 'twin.macro';

const StyledInput = styled.input`
  color: black;
  ${({ hasBorder }) => hasBorder && tw`border-purple-500`}
`;
const Input = () => <StyledInput hasBorder />;
```

## How it works

When babel runs over your javascript or typescript files at compile time, twin grabs your classes and converts them into css objects.
These css objects are then passed into your chosen css-in-js library without the need for an extra client-side bundle:

```js
import tw from 'twin.macro'

tw`text-sm md:text-lg`

// ↓ ↓ ↓ ↓ ↓ ↓

{
  fontSize: '0.875rem',
  '@media (min-width: 768px)': {
    fontSize: '1.125rem',
  },
}
```

## Features

**👌 Simple imports** - Twin collapses imports from common styling libraries into a single import:

```diff
- import styled from '@emotion/styled'
- import css from '@emotion/react'
+ import { styled, css } from 'twin.macro'
```

**🐹 Adds no size to your build** - Twin converts the classes you’ve used into css objects using Babel and then compiles away, leaving no runtime code

**🍱 Apply variants to multiple classes at once with variant groups**
