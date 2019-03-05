import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import styles from '../../themes'

const TableBodyStyled = styled.tbody`
	margin: 0;
	padding: 0;
	${styles.fontFamily};
	${(props) => props.$css}
`

const TableBody = (props) => {
	const {
		css,
		...rest
	} = props

	return (
		<TableBodyStyled
			$css={css}
			{...rest}
		/>
	)
}

TableBody.propTypes = {
	/** Any number of renderable nodes. */
	children: PropTypes.node,

	/** Custom styles passed to styled-components. */
	css: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
}

TableBody.defaultProps = {
	children: null,
	css: null,
}

export default TableBody
