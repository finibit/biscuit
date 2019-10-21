import React from 'react'
import PropTypes from 'prop-types'

const TableHeaderCell = (props) => {
	const {
		width,
		...rest
	} = props

	const styles = {
		width: width,
		minWidth: width,
		maxWidth: width,
	}

	return (
		<th style={styles} {...rest} />
	)
}

TableHeaderCell.propTypes = {
	children: PropTypes.node,
	scope: PropTypes.oneOf([
		'row',
		'col',
		'rowgroup',
		'colgroup',
		'auto'
	]),
	colSpan: PropTypes.number,
	rowSpan: PropTypes.number,
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
