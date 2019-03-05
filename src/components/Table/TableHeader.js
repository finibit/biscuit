import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import styles from '../../themes'

const TableHeaderStyled = styled.thead`
	margin: 0;
	padding: 0;
	${styles.fontFamily};
	${(props) => props.$css}
`

const TableHeader = (props) => {
	const {
		css,
		...rest
	} = props

	return (
		<TableHeaderStyled
			$css={css}
			{...rest}
		/>
	)
}

TableHeader.propTypes = {
	/** Any number of renderable nodes. */
	children: PropTypes.node,

	/** Custom styles passed to styled-components. */
	css: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
}

TableHeader.defaultProps = {
	children: null,
	css: null,
}

export default TableHeader
