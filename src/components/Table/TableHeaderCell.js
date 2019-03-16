import React from 'react'
import PropTypes from 'prop-types'

const TableHeaderCell = (props) => {
	const {
		width,
		children,
		...rest
	} = props

	const styles = {
		width: width,
		minWidth: width,
		maxWidth: width,
	}

	return (
		<th style={styles} {...rest}>
			{children}
		</th>
	)
}

TableHeaderCell.propTypes = {
	/** Any number of renderable nodes. */
	children: PropTypes.node,

	/** The scope of the cell. */
	scope: PropTypes.oneOf(['row', 'col', 'rowgroup', 'colgroup', 'auto']),

	/** How many columns the cell extends. */
	colSpan: PropTypes.number,

	/** How many rows the cell extends. */
	rowSpan: PropTypes.number,

	/** Fixed width of the cell. */
	width: PropTypes.string,
}

TableHeaderCell.defaultProps = {
	children: null,
	scope: 'auto',
	colSpan: 1,
	rowSpan: 1,
	width: 'initial',
}

export default TableHeaderCell
