import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import styles from '../../../themes'

const SelectListItemStyled = styled.div`
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
	${styles.margin}
	${styles.noWrap}
`

const SelectListItem = (props) => {
	const {
		item,
		themeElement,
		...rest
	} = props

	return (
		<SelectListItemStyled
			$element={themeElement}
			$bgColor="listItemBackground"
			$selected={item.selected}
			{...rest}
		>
			<SelectListItemTitleStyled
				$element={themeElement}
				$margin={{ left: 1 }}
			>
				{item.title}
			</SelectListItemTitleStyled>
		</SelectListItemStyled>
	)
}

SelectListItem.propTypes = {
	item: PropTypes.oneOfType([PropTypes.object]).isRequired,
	themeElement: PropTypes.string.isRequired,
}

export default SelectListItem
