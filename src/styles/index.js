import { css } from 'styled-components'
import themeGet from '@styled-system/theme-get'

import {
  system,
  compose,
  color,
  space,
  flexbox,
  margin,
  padding,
  layout,
  size,
  position,
  typography,
  border,
  shadow,
  background,
} from 'styled-system'


const textAlignStyles = system({
  textAlign: true,
})

const textDecorationStyles = system({
  textDecoration: true,
})

const textTransformStyles = system({
  textTransform: true,
})

const objectFitStyles = system({
  objectFit: true,
})

const nowrapStyles = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const styles = {
  compose: compose,
  color: color,
  space: space,
  margin: margin,
  padding: padding,
  position: position,
  layout: layout,
  flexbox: flexbox,
  typography: typography,
  text: compose(textDecorationStyles, textTransformStyles, textAlignStyles),
  nowrap: (props) => (props.nowrap && nowrapStyles),
  border: border,
  shadow: shadow,
  background: background,
  objectFit: objectFitStyles,
  size: size,
  css: props => props.css,
}

export default styles