import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from '../../Icon'
import styles from '../../../themes'

const MultiselectListItemStyled = styled.div`
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
	${styles.fontFamily}
	${styles.spacing}
`

const MultiselectListItemTitleStyled = styled.span`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`

const MultiselectListItem = (props) => {
	const {
		item,
		padding,
		themeElement,
		...rest
	} = props

	return (
		<MultiselectListItemStyled
			$element={themeElement}
			$bgColor="listItemBackground"
			$margin="none"
			$padding={padding}
			$selected={item.selected}
			{...rest}
		>
			<MultiselectListItemTitleStyled>
				{item.title}
			</MultiselectListItemTitleStyled>
			<Icon
				type="check-mark"
				color="listPlaceholder"
				margin={{ left: 0 }}
				css={{ visibility: item.selected ? 'visible' : 'hidden' }}
				themeElement={themeElement}
			/>
		</MultiselectListItemStyled>
	)
}

MultiselectListItem.propTypes = {
	item: PropTypes.oneOfType([PropTypes.object]).isRequired,
	padding: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]).isRequired,
	themeElement: PropTypes.string.isRequired,
}

export default MultiselectListItem
