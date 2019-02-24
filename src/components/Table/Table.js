import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TableBody from './TableBody'
import TableCell from './TableCell'
import TableFooter from './TableFooter'
import TableHeader from './TableHeader'
import TableHeaderCell from './TableHeaderCell'
import TableRow from './TableRow'
import { responsiveArray, themeMargin } from '../../themes/themeUtils'

const CaptionStyled = styled.caption`
	font-family: ${(props) => props.theme.global.fontFamily};
	font-weight: normal;
	text-align: left;
`

const TableStyled = styled.table`
	table-layout: fixed;
	border-collapse: collapse;
	border: none;

	margin: ${(props) => themeMargin(props.theme, 'heading', props.$margin[0])};
	padding: 0;

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.sm}) {
		margin: ${(props) => themeMargin(props.theme, 'heading', props.$margin[1])};
	}

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.md}) {
		margin: ${(props) => themeMargin(props.theme, 'heading', props.$margin[2])};
	}

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.lg}) {
		margin: ${(props) => themeMargin(props.theme, 'heading', props.$margin[3])};
	}

	${(props) => props.$css};
`

/** A table of data. */
const Table = (props) => {
	const {
		caption,
		margin,
		css,
		children,
		...rest
	} = props

	return (
		<TableStyled
			$margin={responsiveArray(margin)}
			$css={css}
			{...rest}
		>
			{caption ? (
				<CaptionStyled>{caption}</CaptionStyled>
			) : null}
			{children}
		</TableStyled>
	)
}

Table.propTypes = {
	/** Any number of renderable nodes. */
	children: PropTypes.node,
	/** Description of the table. */
	caption: PropTypes.string,
	/** The amount of margin around the table. */
	margin: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
	/** Custom styles passed to styled-components. */
	css: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
}

Table.defaultProps = {
	children: null,
	caption: '',
	margin: 'none',
	css: null,
}

Table.Body = TableBody
Table.Cell = TableCell
Table.Footer = TableFooter
Table.Header = TableHeader
Table.HeaderCell = TableHeaderCell
Table.Row = TableRow

export default Table
