import React from 'react'
import styled from 'styled-components'
import styles from '../../styles'
import types from '../../types'

const BoxStyled = styled.div`
  box-sizing: border-box;

  ${styles.compose(
    styles.color,
    styles.background,
    styles.border,
    styles.shadow,
    styles.space,
    styles.layout,
    styles.position,
    styles.flexbox
  )};
`

const Box = (props) => (
  <BoxStyled
    {...props}
  />
)

Box.propTypes = {
  ...types.base,
  ...types.color,
  ...types.background,
  ...types.border,
  ...types.shadow,
  ...types.space,
  ...types.layout,
  ...types.position,
  ...types.flexbox
}

Box.defaultProps = {
  children: null,
  as: 'div'
}

export default Box
