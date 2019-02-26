import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TableRowStyled = styled.tr`
	margin: 0;
	padding: 0;

	${(props) => props.$css};
`

const TableRow = (props) => {
	const {
		css,
		...rest
	} = props

	return (
		<TableRowStyled
			$css={css}
			{...rest}
		/>
	)
}

TableRow.propTypes = {
	/** Any number of renderable nodes. */
	children: PropTypes.node,

	/** Custom styles passed to styled-components. */
	css: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
}

TableRow.defaultProps = {
	children: null,
	css: null,
}

export default TableRow
