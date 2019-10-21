import React from 'react'
import PropTypes from 'prop-types'

const TableFooter = (props) => (
	<tfoot {...props} />
)

TableFooter.propTypes = {
	children: PropTypes.node,
}

TableFooter.defaultProps = {
	children: null,
}

export default TableFooter
