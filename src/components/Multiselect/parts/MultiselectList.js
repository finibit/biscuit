import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MultiselectListItem from './MultiselectListItem'
import { themeColor, themePadding, responsiveArray } from '../../../themes/themeUtils'

const MultiselectListStyled = styled.div`
	position: absolute;
	top: 100%;
	left: 0;
	z-index: 1;

	width: ${(props) => props.$width};
	min-width: 100%;
	max-width: ${(props) => props.$width};
	height: ${(props) => props.$height};
	max-height: ${(props) => props.$height};

	margin: 0;
	padding: 0;

	overflow: hidden;
	overflow-y: ${(props) => props.$height === 'auto' ? 'hidden' : 'scroll'};
	-webkit-overflow-scrolling: touch;

	border-left: 1px solid ${(props) => themeColor(props.theme, 'light-4')};
	border-right: 1px solid ${(props) => themeColor(props.theme, 'light-4')};
	border-bottom: 1px solid ${(props) => themeColor(props.theme, 'light-4')};
	border-bottom-left-radius: ${(props) => props.$isOpen ? '0' : props.theme.global.rounding};
	border-bottom-right-radius: ${(props) => props.$isOpen ? '0' : props.theme.global.rounding};
	background-color: ${(props) => themeColor(props.theme, 'light-0')};
	box-shadow: 0 2px 5px -1px ${(props) => themeColor(props.theme, 'light-3')};
`

const MultiselectListPlaceholderStyled = styled.div`
	text-align: center;
	color: ${(props) => themeColor(props.theme, 'light-6')};

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

const MultiselectList = (props) => {
	const {
		items,
		placeholder,
		isOpen,
		width,
		height,
		padding,
		onSelect,
		...rest
	} = props

	if (!isOpen) {
		return null
	}

	return (
		<MultiselectListStyled
			$width={width}
			$height={height}
			onClick={(event) => event.stopPropagation()}
			{...rest}
		>
			{(items.length === 0) ? (
				<MultiselectListPlaceholderStyled
					$padding={responsiveArray(padding)}
				>
					{placeholder}
				</MultiselectListPlaceholderStyled>
			) : (
				items.map((item) => (
					<MultiselectListItem
						key={item.title}
						item={item}
						padding={padding}
						onClick={(event) => onSelect(event, item)}
					/>
				))
			)}
		</MultiselectListStyled>
	)
}

MultiselectList.propTypes = {
	items: PropTypes.oneOfType([PropTypes.array]).isRequired,
	placeholder: PropTypes.string.isRequired,
	isOpen: PropTypes.bool.isRequired,
	width: PropTypes.string.isRequired,
	height: PropTypes.string.isRequired,
	padding: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]).isRequired,
	onSelect: PropTypes.func.isRequired,
}

export default MultiselectList
