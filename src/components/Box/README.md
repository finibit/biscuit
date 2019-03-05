### Usage

#### Space

```jsx
<Box color={6} margin={2} padding={2} />
```

#### Size

```jsx
<Box color={6} width="50%" height="50px" />
```

#### Color

```jsx
<Box padding={1} color={6} />
```
```jsx
<Box padding={1} color="#dcba98" />
```
```jsx
<Box padding={1} color="bisque" />
```

### Border

```jsx
<Box padding={1} border={0} />
```
```jsx
<Box padding={1} border={{ width: '1px', style: 'dashed', color: 0 }} />
```

### Elevation

```jsx
<Box padding={1} color={6} elevation={1} />
```
```jsx
<Box padding={1} color={6}  elevation={2} />
```
```jsx
<Box padding={1} color={6}  elevation={3} />
```
```jsx
<Box padding={1} color={6}  elevation={4} />
```
```jsx
<Box padding={1} color={6}  elevation={6} />
```

#### Overflow

```jsx
<Box color={6} height="40px" overflow="auto">The sky calls to us Tunguska event cosmic fugue hydrogen atoms prime number take root and flourish. Made in the interiors of collapsing stars hearts of the stars across the centuries concept of the number one realm of the galaxies the only home we've ever known.</Box>
```
```jsx
<Box color={6} height="40px" overflow="scroll">The sky calls to us Tunguska event cosmic fugue hydrogen atoms prime number take root and flourish. Made in the interiors of collapsing stars hearts of the stars across the centuries concept of the number one realm of the galaxies the only home we've ever known.</Box>
```
```jsx
<Box color={6} height="40px" overflow="hidden">The sky calls to us Tunguska event cosmic fugue hydrogen atoms prime number take root and flourish. Made in the interiors of collapsing stars hearts of the stars across the centuries concept of the number one realm of the galaxies the only home we've ever known.</Box>
```
```jsx
<Box color={6} height="40px" overflow="visible">The sky calls to us Tunguska event cosmic fugue hydrogen atoms prime number take root and flourish. Made in the interiors of collapsing stars hearts of the stars across the centuries concept of the number one realm of the galaxies the only home we've ever known.</Box>
```

#### Direction

```jsx
<Box direction="row">
  <Box margin={1} padding={1} color={6}>1</Box>
  <Box margin={1} padding={1} color={6}>2</Box>
  <Box margin={1} padding={1} color={6}>3</Box>
</Box>
```
```jsx
<Box direction="column">
  <Box margin={1} padding={1} color={6}>1</Box>
  <Box margin={1} padding={1} color={6}>2</Box>
  <Box margin={1} padding={1} color={6}>3</Box>
</Box>
```

#### Wrap

```jsx
<Box direction="row" width="10%" wrap>
  <Box margin={1} padding={1} color={6}>1</Box>
  <Box margin={1} padding={1} color={6}>2</Box>
  <Box margin={1} padding={1} color={6}>3</Box>
</Box>
```

#### Order

```jsx
<Box direction="row" width="10%">
  <Box margin={1} padding={1} color={6} order={3}>1</Box>
  <Box margin={1} padding={1} color={6} order={2}>2</Box>
  <Box margin={1} padding={1} color={6} order={1}>3</Box>
</Box>
```
#### Justify

```jsx
<Box direction="row" justify="start">
  <Box margin={1} padding={1} color={6}>1</Box>
  <Box margin={1} padding={1} color={6}>2</Box>
  <Box margin={1} padding={1} color={6}>3</Box>
</Box>
```
```jsx
<Box direction="row" justify="end">
  <Box margin={1} padding={1} color={6}>1</Box>
  <Box margin={1} padding={1} color={6}>2</Box>
  <Box margin={1} padding={1} color={6}>3</Box>
</Box>
```
```jsx
<Box direction="row" justify="center">
  <Box margin={1} padding={1} color={6}>1</Box>
  <Box margin={1} padding={1} color={6}>2</Box>
  <Box margin={1} padding={1} color={6}>3</Box>
</Box>
```
```jsx
<Box direction="row" justify="between">
  <Box margin={1} padding={1} color={6}>1</Box>
  <Box margin={1} padding={1} color={6}>2</Box>
  <Box margin={1} padding={1} color={6}>3</Box>
</Box>
```
```jsx
<Box direction="row" justify="around">
  <Box margin={1} padding={1} color={6}>1</Box>
  <Box margin={1} padding={1} color={6}>2</Box>
  <Box margin={1} padding={1} color={6}>3</Box>
</Box>
```
```jsx
<Box direction="row" justify="evenly">
  <Box margin={1} padding={1} color={6}>1</Box>
  <Box margin={1} padding={1} color={6}>2</Box>
  <Box margin={1} padding={1} color={6}>3</Box>
</Box>
```

#### Align

```jsx
<Box direction="row" align="start">
  <Box margin={1} padding={1} color={6}>1</Box>
  <Box margin={1} padding={3} color={6}>2</Box>
  <Box margin={1} padding={2} color={6}>3</Box>
</Box>
```
```jsx
<Box direction="row" align="end">
  <Box margin={1} padding={1} color={6}>1</Box>
  <Box margin={1} padding={3} color={6}>2</Box>
  <Box margin={1} padding={2} color={6}>3</Box>
</Box>
```
```jsx
<Box direction="row" align="center">
  <Box margin={1} padding={1} color={6}>1</Box>
  <Box margin={1} padding={3} color={6}>2</Box>
  <Box margin={1} padding={2} color={6}>3</Box>
</Box>
```
```jsx
<Box direction="row" align="stretch">
  <Box margin={1} padding={1} color={6}>1</Box>
  <Box margin={1} padding={3} color={6}>2</Box>
  <Box margin={1} padding={2} color={6}>3</Box>
</Box>
```

#### Css
```jsx
import { css } from 'styled-components';

const style = css`
  transform: skewX(-20deg);
`;

<Box color={6} height="40px" css={style} />
```
