import React from 'react'
import PropTypes from 'prop-types'

const TableCell = (props) => {
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
		<td style={styles} {...rest} />
	)
}

TableCell.propTypes = {
	children: PropTypes.node,
	colSpan: PropTypes.number,
	rowSpan: PropTypes.number,
	width: PropTypes.string,
}

TableCell.defaultProps = {
	children: null,
	colSpan: 1,
	rowSpan: 1,
	width: 'initial',
}

export default TableCell
