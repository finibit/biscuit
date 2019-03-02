import React from 'react'
import PropTypes from 'prop-types'
import Theme from './components/Theme'

const Wrapper = (props) => (
	<Theme global={false}>
		{props.children}
	</Theme>
)

Wrapper.propTypes = {
	children: PropTypes.node,
}

Wrapper.defaultProps = {
	children: null,
}

export default Wrapper
