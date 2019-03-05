import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import styles from '../../themes'

const TableFooterStyled = styled.tfoot`
	margin: 0;
	padding: 0;
	${styles.fontFamily}
	${(props) => props.$css}
`

const TableFooter = (props) => {
	const {
		css,
		...rest
	} = props

	return (
		<TableFooterStyled
			$css={css}
			{...rest}
		/>
	)
}

TableFooter.propTypes = {
	/** Any number of renderable nodes. */
	children: PropTypes.node,

	/** Custom styles passed to styled-components. */
	css: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
}

TableFooter.defaultProps = {
	children: null,
	css: null,
}

export default TableFooter
