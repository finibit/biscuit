import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import styles from '../../../themes'

const SelectListItemStyled = styled.div`
	${styles.lineHeight}
	${styles.fontFamily}
	${styles.spacing}

	cursor: pointer;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;

	&:hover {
		${styles.bgColor}
	}

	${(props) => props.$selected && styles.bgColor}
`

const SelectListItemTitleStyled = styled.span`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`

const SelectListItem = (props) => {
	const {
		item,
		padding,
		themeElement,
		...rest
	} = props

	return (
		<SelectListItemStyled
			$element={themeElement}
			$bgColor="listItemBackground"
			$margin="none"
			$padding={padding}
			$selected={item.selected}
			{...rest}
		>
			<SelectListItemTitleStyled>
				{item.title}
			</SelectListItemTitleStyled>
		</SelectListItemStyled>
	)
}

SelectListItem.propTypes = {
	item: PropTypes.oneOfType([PropTypes.object]).isRequired,
	padding: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.object,
		PropTypes.array,
	]).isRequired,
	themeElement: PropTypes.string.isRequired,
}

export default SelectListItem
