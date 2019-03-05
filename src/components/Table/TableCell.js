import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TableCellStyled = styled.td`
	width: ${(props) => props.$width};
	max-width: ${(props) => props.$width};
	margin: 0;
	padding: 0;

	${(props) => props.$css}
`

const TableCell = (props) => {
	const {
		width,
		css,
		...rest
	} = props

	return (
		<TableCellStyled
			$width={width}
			$css={css}
			{...rest}
		/>
	)
}

TableCell.propTypes = {
	/** Any number of renderable nodes. */
	children: PropTypes.node,

	/** How many columns the cell extends. */
	colSpan: PropTypes.number,

	/** How many rows the cell extends. */
	rowSpan: PropTypes.number,

	/** Fixed width of the cell. */
	width: PropTypes.string,

	/** Custom styles passed to styled-components. */
	css: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
}

TableCell.defaultProps = {
	children: null,
	colSpan: 1,
	rowSpan: 1,
	width: 'initial',
	css: null,
}

export default TableCell
