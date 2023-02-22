import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import styles, { utils } from '../../themes'

const upArrowStyles = css`
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid ${(props) => utils.resolveColor(props.theme, props.$element, props.$color)};
`

const downArrowStyles = css`
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid ${(props) => utils.resolveColor(props.theme, props.$element, props.$color)};
`

const rightArrowStyles = css`
  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 4px solid ${(props) => utils.resolveColor(props.theme, props.$element, props.$color)};
`

const leftArrowStyles = css`
  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-right: 4px solid ${(props) => utils.resolveColor(props.theme, props.$element, props.$color)};
`

const checkMarkStyles = css`
  &:after {
    content: '';
    display: block;
    width: 4px;
    height: 9px;
    border: solid ${(props) => utils.resolveColor(props.theme, props.$element, props.$color)};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`

const IconStyled = styled.div`
  ${(props) => {
    switch (props.$type) {
    case 'arrow-up':
      return upArrowStyles
    case 'arrow-left':
      return leftArrowStyles
    case 'arrow-down':
      return downArrowStyles
    case 'arrow-right':
      return rightArrowStyles
    case 'check-mark':
      return checkMarkStyles
    default:
      return ''
    }
  }}

  display: inline-block;

  ${styles.spacing}
  ${(props) => props.$css}
`

/** Semantic CSS graphics. */
const Icon = (props) => {
  const {
    type,
    color,
    margin,
    padding,
    themeElement,
    css,
    ...rest
  } = props

  return (
    <IconStyled
      $element={themeElement}
      $type={type}
      $color={color}
      $margin={margin}
      $padding={padding}
      $css={css}
      {...rest}
    />
  )
}

Icon.propTypes = {
  /** Type of the icon. */
  type: PropTypes.oneOf([
    'arrow-up',
    'arrow-left',
    'arrow-down',
    'arrow-right',
    'check-mark'
  ]).isRequired,

  /** Color of the icon. */
  color: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      shade: PropTypes.number,
      tint: PropTypes.number
    })
  ]),

  /** The amount of margin around the icon. */
  margin: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** The amount of padding around the icon. */
  padding: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** Theme element. */
  themeElement: PropTypes.string,

  /** Custom styles passed to styled-components. */
  css: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

Icon.defaultProps = {
  color: 0,
  margin: 'none',
  padding: 'none',
  themeElement: 'Icon',
  css: null
}

export default Icon
