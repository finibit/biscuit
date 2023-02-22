import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import styles from '../../themes'

const ImageStyled = styled.img`
  ${styles.spacing}

  flex: 1 1;
  overflow: hidden;
  object-fit: ${(props) => props.$fit};
  box-sizing: border-box;
  display: block;

  width: ${(props) => props.$width};
  max-width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  max-height: ${(props) => props.$height};

  ${(props) => props.$css}
`

/** An image. */
const Image = (props) => {
  const {
    fit,
    margin,
    width,
    height,
    themeElement,
    css,
    ...rest
  } = props

  return (
    <ImageStyled
      $element={themeElement}
      $fit={fit}
      $padding='none'
      $margin={margin}
      $width={width}
      $height={height}
      $css={css}
      {...rest}
    />
  )
}

Image.propTypes = {
  /** How the image should fill the container. */
  fit: PropTypes.oneOf(['cover', 'contain']),

  /** The amount of margin around the image. */
  margin: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** Fixed width of the image. */
  width: PropTypes.string,

  /** Fixed height of the image. */
  height: PropTypes.string,

  /** Theme element. */
  themeElement: PropTypes.string,

  /** Custom styles passed to styled-components. */
  css: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array])
}

Image.defaultProps = {
  fit: 'contain',
  margin: 'none',
  width: 'auto',
  height: 'auto',
  themeElement: 'Image',
  css: null
}

export default Image
