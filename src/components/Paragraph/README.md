### Usage

#### Color

```jsx
<Paragraph color="info">The sky calls to us Tunguska event cosmic fugue hydrogen atoms prime number take root and flourish. Made in the interiors of collapsing stars hearts of the stars across the centuries concept of the number one realm of the galaxies the only home we've ever known.</Paragraph>
```
```jsx
<Paragraph color="#009900">The sky calls to us Tunguska event cosmic fugue hydrogen atoms prime number take root and flourish. Made in the interiors of collapsing stars hearts of the stars across the centuries concept of the number one realm of the galaxies the only home we've ever known.</Paragraph>
```
```jsx
<Paragraph color="violet">The sky calls to us Tunguska event cosmic fugue hydrogen atoms prime number take root and flourish. Made in the interiors of collapsing stars hearts of the stars across the centuries concept of the number one realm of the galaxies the only home we've ever known.</Paragraph>
```

#### Align

```jsx
<Paragraph as="div" align="left">The sky calls to us Tunguska event cosmic fugue hydrogen atoms prime number take root and flourish. Made in the interiors of collapsing stars hearts of the stars across the centuries concept of the number one realm of the galaxies the only home we've ever known.</Paragraph>
```
```jsx
<Paragraph as="div" align="right">The sky calls to us Tunguska event cosmic fugue hydrogen atoms prime number take root and flourish. Made in the interiors of collapsing stars hearts of the stars across the centuries concept of the number one realm of the galaxies the only home we've ever known.</Paragraph>
```
```jsx
<Paragraph as="div" align="center">The sky calls to us Tunguska event cosmic fugue hydrogen atoms prime number take root and flourish. Made in the interiors of collapsing stars hearts of the stars across the centuries concept of the number one realm of the galaxies the only home we've ever known.</Paragraph>
```

#### Size

```jsx
<Paragraph size={4}>The sky calls to us Tunguska event cosmic fugue hydrogen atoms prime number take root and flourish. Made in the interiors of collapsing stars hearts of the stars across the centuries concept of the number one realm of the galaxies the only home we've ever known.</Paragraph>
```
```jsx
<Paragraph size="2rem">The sky calls to us Tunguska event cosmic fugue hydrogen atoms prime number take root and flourish. Made in the interiors of collapsing stars hearts of the stars across the centuries concept of the number one realm of the galaxies the only home we've ever known.</Paragraph>
```
```jsx
<Paragraph size={[0, 1, 2, 3]}>The sky calls to us Tunguska event cosmic fugue hydrogen atoms prime number take root and flourish. Made in the interiors of collapsing stars hearts of the stars across the centuries concept of the number one realm of the galaxies the only home we've ever known.</Paragraph>
```

#### Space

```jsx
<Paragraph as="div" margin="10px" padding="10px">The sky calls to us Tunguska event cosmic fugue hydrogen atoms prime number take root and flourish. Made in the interiors of collapsing stars hearts of the stars across the centuries concept of the number one realm of the galaxies the only home we've ever known.</Paragraph>
```

```jsx
<Paragraph as="div" margin={2} padding={2}>The sky calls to us Tunguska event cosmic fugue hydrogen atoms prime number take root and flourish. Made in the interiors of collapsing stars hearts of the stars across the centuries concept of the number one realm of the galaxies the only home we've ever known.</Paragraph>
```

```jsx
<Paragraph as="div" margin={[0, 1, 2, 3]} padding={[0, 1, 2, 3]}>The sky calls to us Tunguska event cosmic fugue hydrogen atoms prime number take root and flourish. Made in the interiors of collapsing stars hearts of the stars across the centuries concept of the number one realm of the galaxies the only home we've ever known.</Paragraph>
```

#### Css

```jsx
<Paragraph css="border 1px solid #000;">The sky calls to us Tunguska event cosmic fugue hydrogen atoms prime number take root and flourish. Made in the interiors of collapsing stars hearts of the stars across the centuries concept of the number one realm of the galaxies the only home we've ever known.</Paragraph>
```

```jsx
<Paragraph css={{ border: "1px solid #000;" }}>The sky calls to us Tunguska event cosmic fugue hydrogen atoms prime number take root and flourish. Made in the interiors of collapsing stars hearts of the stars across the centuries concept of the number one realm of the galaxies the only home we've ever known.</Paragraph>
```

```jsx
import { css } from 'styled-components';

const style = css`
  color: ${(props) => props.theme.global.colors.info};
  border: 1px solid ${(props) => props.theme.global.colors.info};
`;

<Paragraph css={style}>Paragraph</Paragraph>
```
