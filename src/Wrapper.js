import React from 'react'
import PropTypes from 'prop-types'
import Theme from './components/Theme'
import biscuitTheme from './themes/biscuitTheme'

const Wrapper = (props) => (
  <Theme theme={biscuitTheme} global={false}>
    {props.children}
  </Theme>
)

Wrapper.propTypes = {
  children: PropTypes.node
}

Wrapper.defaultProps = {
  children: null
}

export default Wrapper
