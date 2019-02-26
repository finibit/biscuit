import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { themeColor, themeMargin, themePadding, responsiveArray } from '../../themes/themeUtils'
import Icon from '../Icon'

const SelectBoxStyled = styled.div`
	align-items: center;
	cursor: default;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	border: 1px solid ${(props) => themeColor(props.theme, 'light-4')};

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

	border-top-left-radius: ${(props) => props.theme.global.rounding};
	border-top-right-radius: ${(props) => props.theme.global.rounding};
	border-bottom-left-radius: ${(props) => props.$isOpen ? '0' : props.theme.global.rounding};
	border-bottom-right-radius: ${(props) => props.$isOpen ? '0' : props.theme.global.rounding};
`

const SelectBoxTitleStyled = styled.div`
	font-weight: normal;
	margin: 0;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`

const MultiselectStyled = styled.div`
	user-select: none;
	position: relative;
	width: ${(props) => props.$width};
	maxWidth: ${(props) => props.$width};

	margin: ${(props) => themeMargin(props.theme, 'select', props.$margin[0])};
	padding: 0;

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.sm}) {
		margin: ${(props) => themeMargin(props.theme, 'select', props.$margin[1])};
	}

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.md}) {
		margin: ${(props) => themeMargin(props.theme, 'select', props.$margin[2])};
	}

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.lg}) {
		margin: ${(props) => themeMargin(props.theme, 'select', props.$margin[3])};
	}
`

const ListStyled = styled.ul`
	z-index: 10;
	position: absolute;
	top: 100%;
	left: 0;
	width: ${(props) => props.$width};
	maxWidth: ${(props) => props.$width};
	height: ${(props) => props.$height};
	maxHeight: ${(props) => props.$height};
	box-sizing: border-box;
	border-left: 1px solid ${(props) => themeColor(props.theme, 'light-4')};
	border-right: 1px solid ${(props) => themeColor(props.theme, 'light-4')};
	border-bottom: 1px solid ${(props) => themeColor(props.theme, 'light-4')};
	background-color: ${(props) => themeColor(props.theme, 'light-0')};
	box-shadow: 0 2px 5px -1px ${(props) => themeColor(props.theme, 'light-3')};
	padding: 0;
	margin: 0;
	overflow-y: ${(props) => props.$height === 'auto' ? 'hidden' : 'scroll'};
	-webkit-overflow-scrolling: touch;
`

const baseListItemStyles = css`
	width: 100%;
	font-weight: normal;
	line-height: 1rem;
	cursor: default;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	box-sizing: border-box;
	margin: 0;

	background-color: ${(props) => themeColor(props.theme, 'light-0')};

	&:hover {
		background-color: ${(props) => themeColor(props.theme, 'light-1')};
	}
`

const responsiveListItemStyles = css`
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

const ListItemStyled = styled.li`
	${baseListItemStyles};
	${responsiveListItemStyles};
	border-bottom: 1px solid ${(props) => themeColor(props.theme, 'light-1')};
`

const SelectBoxTitle = (props) => {
	const {
		placeholder,
		display,
		selectedItems,
	} = props

	if (display === 'selected-items') {
		return (
			<SelectBoxTitleStyled>
				{selectedItems.length === 0 ? (
					`${placeholder}`
				) : (selectedItems.map((item, index) => (
					<span key={item.title}>{`${item.title}${index === (selectedItems.length - 1) ? '' : ', '}`}</span>
				)))}
			</SelectBoxTitleStyled>
		)
	}

	return (
		<SelectBoxTitleStyled>
			{placeholder} {`(${selectedItems.length})`}
		</SelectBoxTitleStyled>
	)
}

SelectBoxTitle.propTypes = {
	placeholder: PropTypes.string.isRequired,
	display: PropTypes.string.isRequired,
	selectedItems: PropTypes.oneOfType([PropTypes.array]).isRequired,
}

/** Multiple options selector. */
const Multiselect = (props) => {
	const {
		placeholder,
		display,
		items,
		isOpen,
		onOpen,
		onSelect,
		margin,
		padding,
		width,
		height,
		...rest
	} = props

	const selectedItems = items.filter((item) => item.selected)

	return (
		<MultiselectStyled
			$margin={responsiveArray(margin)}
			$width={width}
			{...rest}
		>
			<SelectBoxStyled
				$padding={responsiveArray(padding)}
				$isOpen={isOpen}
				onClick={onOpen}
			>
				<SelectBoxTitle
					display={display}
					placeholder={placeholder}
					selectedItems={selectedItems}
				/>
				<Icon type={isOpen ? 'arrow-up' : 'arrow-down'} margin={{ left: 'xs' }} />
			</SelectBoxStyled>
			{isOpen &&
				<ListStyled
					onClick={(event) => event.stopPropagation()}
					$width={width}
					$height={height}
				>
					{items.map((item) => (
						<ListItemStyled
							key={item.title}
							onClick={() => onSelect(item.value, item.title, !item.selected)}
							$padding={responsiveArray(padding)}
							$selected={item.selected}
						>
							{item.title} {item.selected && <Icon type="check-mark" margin={{ left: 'xs' }} /> }
						</ListItemStyled>
					))}
				</ListStyled>}
		</MultiselectStyled>
	)
}

Multiselect.propTypes = {
	/** Text to display when no item is selected. */
	placeholder: PropTypes.string,

	/** What should be displayed in the select box. */
	display: PropTypes.oneOf(['selected-items', 'selected-count']),

	/** List of items. */
	items: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string,
		value: PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.string,
			PropTypes.object,
			PropTypes.array,
		]),
		selected: PropTypes.bool,
	})).isRequired,

	isOpen: PropTypes.bool.isRequired,

	/** Called when opening the list was requested. */
	onOpen: PropTypes.func.isRequired,

	/** Called when an item is selected. */
	onSelect: PropTypes.func.isRequired,

	/** The amount of margin around the select box. */
	margin: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),

	/** The amount of padding around the select box. */
	padding: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),

	/** Fixed width of the select box and the items list. */
	width: PropTypes.string,

	/** Fixed height of the items list. */
	height: PropTypes.string,
}

Multiselect.defaultProps = {
	placeholder: '',
	display: 'selected-items',
	margin: 'none',
	padding: { horizontal: 'sm', vertical: 'xs' },
	width: '100%',
	height: 'auto',
}

export default Multiselect