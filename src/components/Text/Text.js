import React from 'react'
import styled from 'styled-components'
import styles from '../../styles'
import types from '../../types'

const TextStyled = styled.span`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;

  ${styles.compose(
    styles.space,
    styles.color,
    styles.typography,
    styles.text
  )};

  ${styles.nowrap}
`

const Text = (props) => (
  <TextStyled
    {...props}
  />
)

Text.propTypes = {
  ...types.base,
  ...types.color,
  ...types.typography,
  ...types.text,
  ...types.space
}

Text.defaultProps = {
  color: 'black',
  fontSize: 'md',
  fontFamily: 'secondary',
  fontWeight: 400,
  fontStyle: 'normal',
  textAlign: 'left',
  textTransform: 'none',
  textDecoration: 'none',
  lineHeight: 'lg'
}

export default Text
