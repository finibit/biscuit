import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Icon from '../Icon'
import { themePadding, themeColor, responsiveArray } from '../../themes/themeUtils'

const hoverStyles = css`
	background-color: ${(props) => themeColor(props.theme, 'light-1')};
`

const MultiselectListItemStyled = styled.div`
	cursor: pointer;

	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;

	&:hover {
		${hoverStyles}
	}

	${(props) => props.$selected && hoverStyles};

	margin: 0;
	padding: ${(props) => themePadding(props.theme, 'select', props.$padding[0])};

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.sm}) {
		padding: ${(props) => themePadding(props.theme, 'select', props.$padding[1])};
	}

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.md}) {
		padding: ${(props) => themePadding(props.theme, 'select', props.$padding[2])};
	}

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.lg}) {
		padding: ${(props) => themePadding(props.theme, 'select', props.$padding[3])};
	}
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
		...rest
	} = props

	return (
		<MultiselectListItemStyled
			$padding={responsiveArray(padding)}
			$selected={item.selected}
			{...rest}
		>
			<MultiselectListItemTitleStyled>
				{item.title}
			</MultiselectListItemTitleStyled>
			<Icon
				type="check-mark"
				color="light-6"
				css={{ visibility: item.selected ? 'visible' : 'hidden' }}
			/>
		</MultiselectListItemStyled>
	)
}

MultiselectListItem.propTypes = {
	item: PropTypes.oneOfType([PropTypes.object]).isRequired,
	padding: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]).isRequired,
}

export default MultiselectListItem
