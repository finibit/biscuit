import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import styles, { utils } from '../../themes'

const backgroundColorsMap = {
  default: 1,
  primary: 3,
  info: 4,
  danger: 5,
  success: 6,
  warning: 7
}

const textColorsMap = {
  default: 0,
  primary: 1,
  info: 1,
  danger: 1,
  success: 1,
  warning: 1
}

const borderColorsMap = {
  default: 0,
  primary: 1,
  info: 2,
  danger: 3,
  success: 4,
  warning: 5
}

const ButtonStyled = styled.button`
  ${styles.fontFamily}
  ${styles.fontSize}
  ${styles.lineHeight}
  ${styles.textAlign}
  ${styles.spacing}
  ${styles.border}
  ${styles.color}
  ${styles.bgColor}
  ${styles.fontWeight}

  &:hover {
    background-color: ${(props) => (
      utils.resolveColor(props.theme, props.$element, { value: props.$bgColor, shade: 0.03 })
    )};
  }

  &:active {
    background-color: ${(props) => (
      utils.resolveColor(props.theme, props.$element, { value: props.$bgColor, shade: 0.1 })
    )};
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border:0;
  }

  display: inline-block;
  cursor: pointer;
  border-top-left-radius: ${(props) => props.theme.Button.borders[0].radius};
  border-top-right-radius: ${(props) => props.theme.Button.borders[0].radius};
  border-bottom-left-radius: ${(props) => props.theme.Button.borders[0].radius};
  border-bottom-right-radius: ${(props) => props.theme.Button.borders[0].radius};

  ${(props) => props.$css}
`

/** A button. */
const Button = (props) => {
  const {
    children,
    type,
    margin,
    padding,
    themeElement,
    css,
    ...rest
  } = props

  return (
    <ButtonStyled
      $element={themeElement}
      $size={2}
      $weight='normal'
      $border={borderColorsMap[type]}
      $color={textColorsMap[type]}
      $bgColor={backgroundColorsMap[type]}
      $align='center'
      $margin={margin}
      $padding={padding}
      $css={css}
      {...rest}
    >
      {children}
    </ButtonStyled>
  )
}

Button.propTypes = {
  /** Any number of renderable nodes. */
  children: PropTypes.node,

  /** Type of the button. */
  type: PropTypes.oneOf([
    'default',
    'primary',
    'info',
    'danger',
    'success',
    'warning'
  ]),

  /** The amount of margin around the button. */
  margin: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** The amount of padding around the button. */
  padding: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** Theme element. */
  themeElement: PropTypes.string,

  /** Custom styles passed to styled-components. */
  css: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ])
}

Button.defaultProps = {
  children: null,
  type: 'default',
  margin: { right: 0 },
  padding: { vertical: 0, horizontal: 3 },
  themeElement: 'Button',
  css: null
}

export default Button
