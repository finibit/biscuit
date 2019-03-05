### Usage

#### As

```jsx
<Text as="div">Text</Text>
```

#### Color

```jsx
<Text color="info">Text</Text>
```
```jsx
<Text color="#009900">Text</Text>
```
```jsx
<Text color="violet">Text</Text>
```

#### Weight

```jsx
<Text weight="bold">Text</Text>
```
```jsx
<Text weight={700}>Text</Text>
```

#### Align

```jsx
<Text as="div" align="left">Text</Text>
```
```jsx
<Text as="div" align="right">Text</Text>
```
```jsx
<Text as="div" align="center">Text</Text>
```

#### Italic

```jsx
<Text italic>Text</Text>
```

#### Transform

```jsx
<Text transform="uppercase">Text</Text>
```

```jsx
<Text transform="lowercase">HEADING</Text>
```

```jsx
<Text transform="capitalize">heading</Text>
```

```jsx
<Text transform="full-width">Text</Text>
```

#### Decoration

```jsx
<Text decoration="underline">Text</Text>
```

```jsx
<Text decoration="overline">Text</Text>
```

```jsx
<Text decoration="line-through">Text</Text>
```

#### No wrap

```jsx
<Text as="div" nowrap>Bits of moving fluff tesseract vastness is bearable only through love quasar rich in heavy atoms Euclid. The only home we've ever known realm of the galaxies ship of the imagination realm of the galaxies the carbon in our apple pies finite but unbounded? Encyclopaedia galactica are creatures of the cosmos across the centuries citizens of distant epochs citizens of distant epochs a mote of dust suspended in a sunbeam and billions upon billions upon billions upon billions upon billions upon billions upon billions.</Text>
```

#### Size

```jsx
<Text size={4}>Text</Text>
```
```jsx
<Text size="2rem">Text</Text>
```
```jsx
<Text size={[0, 1, 2, 3]}>Text</Text>
```

#### Margin

```jsx
<Text as="div" margin="50px">Text</Text>
```

```jsx
<Text as="div" margin={3}>Text</Text>
```

```jsx
<Text as="div" margin={[0, 1, 2, 3]}>Text</Text>
```

#### Padding

```jsx
<Text as="div" padding={3}>Text</Text>
```

#### Css

```jsx
<Text css="border 1px solid #000;">Text</Text>
```

```jsx
<Text css={{ border: "1px solid #000;" }}>Text</Text>
```

```jsx
import { css } from 'styled-components';

const style = css`
  color: ${(props) => props.theme.global.colors.info};
  border: 1px solid ${(props) => props.theme.global.colors.info};
`;

<Text css={style}>Text</Text>
```
