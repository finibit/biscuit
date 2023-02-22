import React from 'react'
import PropTypes from 'prop-types'
import styled, { css as styledCss } from 'styled-components'
import styles from '../../themes'

const nowrapStyles = styledCss`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const TextStyled = styled.span`
  ${styles.fontFamily}
  ${styles.fontWeight}
  ${styles.fontStyle}
  ${styles.fontSize}
  ${styles.lineHeight}
  ${styles.textAlign}
  ${styles.textDecoration}
  ${styles.textTransform}
  ${styles.spacing}
  ${styles.color}
  ${(props) => props.$nowrap && nowrapStyles}
  ${(props) => props.$css}
`

/** A non-semantic text. */
const Text = (props) => {
  const {
    color,
    align,
    nowrap,
    weight,
    italic,
    transform,
    decoration,
    size,
    margin,
    padding,
    themeElement,
    css,
    ...rest
  } = props

  return (
    <TextStyled
      $element={themeElement}
      $color={color}
      $align={align}
      $nowrap={nowrap}
      $weight={weight}
      $italic={italic}
      $transform={transform}
      $decoration={decoration}
      $size={size}
      $margin={margin}
      $padding={padding}
      $css={css}
      {...rest}
    />
  )
}

Text.propTypes = {
  /** Any number of renderable nodes. */
  children: PropTypes.node,

  /** DOM element to use. */
  as: PropTypes.string,

  /** Text color. */
  color: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      shade: PropTypes.number,
      tint: PropTypes.number
    })
  ]),

  /** Text alignment. */
  align: PropTypes.oneOf(['left', 'center', 'right']),

  /** Should the text wrap if it doesn't fit into container. */
  nowrap: PropTypes.bool,

  /** Font weight. */
  weight: PropTypes.oneOfType([PropTypes.oneOf(['normal', 'bold']), PropTypes.number]),

  /** Use italic version of the font. */
  italic: PropTypes.bool,

  /** Text transformation. */
  transform: PropTypes.oneOf(['none', 'uppercase', 'lowercase', 'capitalize', 'full-width']),

  /** Text decoration. */
  decoration: PropTypes.oneOf(['none', 'underline', 'overline', 'line-through']),

  /** Size of the text. */
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** The amount of margin around the text. */
  margin: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** The amount of padding around the text. */
  padding: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** Theme element. */
  themeElement: PropTypes.string,

  /** Custom styles passed to styled-components. */
  css: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array])
}

Text.defaultProps = {
  children: null,
  as: 'span',
  color: 0,
  weight: 'normal',
  align: 'left',
  italic: false,
  transform: 'none',
  decoration: 'none',
  nowrap: false,
  size: 2,
  margin: 'none',
  padding: 'none',
  themeElement: 'Text',
  css: null
}

export default Text
