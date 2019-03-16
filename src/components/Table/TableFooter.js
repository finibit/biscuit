import React from 'react'
import PropTypes from 'prop-types'

const TableFooter = (props) => (
	<tfoot props={props}>
		{props.children}
	</tfoot>
)

TableFooter.propTypes = {
	/** Any number of renderable nodes. */
	children: PropTypes.node,
}

TableFooter.defaultProps = {
	children: null,
}

export default TableFooter
