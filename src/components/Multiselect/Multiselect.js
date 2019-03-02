import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeMargin, responsiveArray } from '../../themes/themeUtils'
import MultiselectBox from './parts/MultiselectBox'
import MultiselectList from './parts/MultiselectList'

const MultiselectStyled = styled.div`
	user-select: none;
	position: relative;

	width: ${(props) => props.$width};
	max-width: ${(props) => props.$width};

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

/** Multiple options select box. */
class Multiselect extends React.PureComponent {
	constructor(props) {
		super(props)
		this.onClose = this.onClose.bind(this)
	}

	componentDidUpdate() {
		setTimeout(() => {
			if (this.props.isOpen) {
				window.addEventListener('click', this.onClose)
			}
			else {
				window.removeEventListener('click', this.onClose)
			}
		})
	}

	componentWillUnmount() {
		window.removeEventListener('click', this.onClose)
	}

	onClose() {
		if (this.props.isOpen) {
			this.props.onClose()
		}
	}

	render() {
		const {
			placeholder,
			emptyPlaceholder,
			display,
			items,
			isOpen,
			onOpen,
			onClose,
			onSelect,
			margin,
			padding,
			width,
			height,
			...rest
		} = this.props

		const selectedItems = items
			.filter((item) => item.selected)
			.map((item) => item.title)

		return (
			<MultiselectStyled
				$margin={responsiveArray(margin)}
				$width={width}
				{...rest}
			>
				<MultiselectBox
					placeholder={placeholder}
					selectedItems={selectedItems}
					display={display}
					width={width}
					padding={responsiveArray(padding)}
					isOpen={isOpen}
					onOpen={onOpen}
					onClose={onClose}
				/>
				<MultiselectList
					items={items}
					placeholder={emptyPlaceholder}
					isOpen={isOpen}
					width={width}
					height={height}
					padding={padding}
					onSelect={onSelect}
				/>
			</MultiselectStyled>
		)
	}
}

Multiselect.propTypes = {
	/** What to display in the select box when no item is selected. */
	placeholder: PropTypes.string,

	/** What to display on the list when there are no items. */
	emptyPlaceholder: PropTypes.string,

	/** How to display selected items in the select box. */
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

	/** Is the select list open? */
	isOpen: PropTypes.bool.isRequired,

	/** Called when the select list should be opened. */
	onOpen: PropTypes.func.isRequired,

	/** Called when the select list should be closed. */
	onClose: PropTypes.func.isRequired,

	/** Called when an item should be selected. */
	onSelect: PropTypes.func.isRequired,

	/** The amount of margin around the select box. */
	margin: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),

	/** The amount of padding around the select box and the select list. */
	padding: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),

	/** Fixed width of the select box and the select list. */
	width: PropTypes.string,

	/** Fixed height of the select list. */
	height: PropTypes.string,
}

Multiselect.defaultProps = {
	placeholder: 'Select an item',
	emptyPlaceholder: 'No items',
	display: 'selected-items',
	margin: 'none',
	padding: { horizontal: 'sm', vertical: 'xs' },
	width: '100%',
	height: 'auto',
}

export default Multiselect
