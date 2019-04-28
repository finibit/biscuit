import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import shortid from 'shortid'
import styles from '../../themes'
import ListItem from './parts/ListItem'

const ListStyled = styled.div`
	${styles.margin}
	${styles.border}

	padding: 0;
	display: flex;
	flex-direction: column;
	border-top-left-radius: ${(props) => props.theme.global.borders[0].radius};
	border-top-right-radius: ${(props) => props.theme.global.borders[0].radius};
	border-bottom-left-radius: ${(props) => props.theme.global.borders[0].radius};
	border-bottom-right-radius: ${(props) => props.theme.global.borders[0].radius};
`

/** A list of items. */
const List = (props) => {
	const {
		items,
		renderItem,
		margin,
		themeElement,
		...rest
	} = props

	return (
		<ListStyled
			$element={themeElement}
			$margin={margin}
			$border={0}
			{...rest}
		>
			{items.map((item) => {
				const elem = renderItem(item)

				if (elem.key != null) {
					return elem
				}

				return React.cloneElement(elem, { key: shortid() })
			})}
		</ListStyled>
	)
}

List.propTypes = {
	/** Array of items. */
	items: PropTypes.arrayOf(PropTypes.any),

	/** Item renderer. */
	renderItem: PropTypes.func,

	/** The amount of margin around the list. */
	margin: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.object,
		PropTypes.array,
	]),

	/** Theme element. */
	themeElement: PropTypes.string,
}

List.Item = ListItem

List.defaultProps = {
	items: [],
	renderItem: (item) => (<List.Item>{item}</List.Item>),
	margin: 'none',
	themeElement: 'List',
}

export default List
