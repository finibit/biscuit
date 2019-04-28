import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import styles from '../../../themes'

const ListItemStyled = styled.div`
	${styles.padding}
	${styles.border}

	margin: 0;
	border-left: none;
	border-top: none;
	border-right: none;

	&:last-child {
		border-bottom: none;
	}
`

/** A single list item. */
const ListItem = (props) => {
	const {
		themeElement,
		...rest
	} = props

	return (
		<ListItemStyled
			$element={themeElement}
			$padding={{ vertical: 1, horizontal: 3 }}
			$border={0}
			{...rest}
		/>
	)
}

ListItem.propTypes = {
	themeElement: PropTypes.string,
}

ListItem.defaultProps = {
	themeElement: 'List',
}

export default ListItem
