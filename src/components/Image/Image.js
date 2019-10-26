import React from 'react'
import styled from 'styled-components'
import styles from '../../styles'
import types from '../../types'

const ImageStyled = styled.img`
  box-sizing: border-box;
  flex: 1 1;
  overflow: hidden;
  display: block;

  ${styles.compose(
    styles.objectFit,
    styles.space,
    styles.layout
  )};
`

const Image = (props) => (
  <ImageStyled
    {...props}
  />
)

Image.propTypes = {
  ...types.objectFit,
  ...types.space,
  ...types.layout,
  src: types.string.isRequired,
  alt: types.string.isRequired
}

export default Image
