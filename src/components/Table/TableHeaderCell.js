import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TableHeaderCellStyled = styled.th`
	width: ${(props) => props.$width};
	max-width: ${(props) => props.$width};
	margin: 0;
	padding: 0;

	${(props) => props.$css};
`

const TableHeaderCell = (props) => {
	const {
		width,
		css,
		...rest
	} = props

	return (
		<TableHeaderCellStyled
			$width={width}
			$css={css}
			{...rest}
		/>
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

	/** Custom styles passed to styled-components. */
	css: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
}

TableHeaderCell.defaultProps = {
	children: null,
	scope: 'auto',
	colSpan: 1,
	rowSpan: 1,
	width: 'initial',
	css: null,
}

export default TableHeaderCell
