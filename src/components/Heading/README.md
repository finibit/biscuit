### Usage

#### Level

```jsx
<Heading level={1}>h1. Heading</Heading>
<Heading level={2}>h2. Heading</Heading>
<Heading level={3}>h3. Heading</Heading>
<Heading level={4}>h4. Heading</Heading>
<Heading level={5}>h5. Heading</Heading>
<Heading level={6}>h6. Heading</Heading>
```

#### Color

```jsx
<Heading level={1} color="info">Heading</Heading>
```
```jsx
<Heading level={1} color="#009900">Heading</Heading>
```
```jsx
<Heading level={1} color="violet">Heading</Heading>
```

#### Weight

```jsx
<Heading level={1} weight="bold">Heading</Heading>
```
```jsx
<Heading level={1} weight={700}>Heading</Heading>
```

#### Align

```jsx
<Heading level={1} align="left">Heading</Heading>
```
```jsx
<Heading level={1} align="right">Heading</Heading>
```
```jsx
<Heading level={1} align="center">Heading</Heading>
```

#### Italic

```jsx
<Heading level={1} italic>Heading</Heading>
```

#### Transform

```jsx
<Heading level={1} transform="uppercase">Heading</Heading>
```

```jsx
<Heading level={1} transform="lowercase">HEADING</Heading>
```

```jsx
<Heading level={1} transform="capitalize">heading</Heading>
```

```jsx
<Heading level={1} transform="full-width">Heading</Heading>
```

#### Decoration

```jsx
<Heading level={1} decoration="underline">Heading</Heading>
```

```jsx
<Heading level={1} decoration="overline">Heading</Heading>
```

```jsx
<Heading level={1} decoration="line-through">Heading</Heading>
```

#### Size

```jsx
<Heading level={1} size={2}>Heading</Heading>
```
```jsx
<Heading level={1} size="2rem">Heading</Heading>
```
```jsx
<Heading level={1} size={[0, 1, 2, 3]}>Heading</Heading>
```

#### Margin

```jsx
<Heading level={1} margin="50px">Heading</Heading>
```

```jsx
<Heading level={1} margin={3}>Heading</Heading>
```

```jsx
<Heading level={1} margin={[0, 1, 2, 3]}>Heading</Heading>
```

#### Padding

```jsx
<Heading level={1} padding={3}>Heading</Heading>
```

#### Css

```jsx
<Heading level={1} css="border 1px solid #000;">Heading</Heading>
```

```jsx
<Heading level={1} css={{ border: "1px solid #000;" }}>Heading</Heading>
```

```jsx
import { css } from 'styled-components';

const style = css`
  color: ${(props) => props.theme.global.colors.info};
  border: 1px solid ${(props) => props.theme.global.colors.info};
`;

<Heading level={1} css={style}>Heading</Heading>
```
