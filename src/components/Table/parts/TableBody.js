import React from 'react'
import PropTypes from 'prop-types'

const TableBody = (props) => (
	<tbody {...props} />
)

TableBody.propTypes = {
	children: PropTypes.node,
}

TableBody.defaultProps = {
	children: null,
}

export default TableBody
