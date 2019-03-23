import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import styles from '../../themes'
import SelectBox from './parts/SelectBox'
import SelectList from './parts/SelectList'

const SelectStyled = styled.div`
	${styles.margin}
	${styles.fontFamily}
	${styles.lineHeight}
	box-sizing: border-box;
	user-select: none;
	position: relative;
	width: ${(props) => props.$width};
	max-width: ${(props) => props.$width};
`

/** Single option select box. */
class Select extends React.PureComponent {
	componentWillMount() {
		window.addEventListener('click', this.onClickOutside, false)
	}

	componentWillUnmount() {
		window.removeEventListener('click', this.onClickOutside, false)
	}

	onClickOutside = (e) => {
		if (this.node.contains(e.target)) {
			return
		}

		this.props.onClose()
	}

	onSelect = (event, item, index) => {
		this.props.onSelect(event, item, index)
		this.props.onClose()
	}

	render() {
		const {
			placeholder,
			emptyPlaceholder,
			items,
			isOpen,
			onOpen,
			onClose,
			onSelect,
			margin,
			width,
			height,
			themeElement,
			...rest
		} = this.props

		const selectedItem = items.find((item) => (item.selected))

		return (
			<SelectStyled
				ref={(node) => {
					this.node = node
					return this.node
				}}
				$element={themeElement}
				$margin={margin}
				$width={width}
				{...rest}
			>
				<SelectBox
					placeholder={placeholder}
					selectedItem={selectedItem}
					width={width}
					isOpen={isOpen}
					onOpen={onOpen}
					onClose={onClose}
					themeElement={themeElement}
				/>
				<SelectList
					items={items}
					placeholder={emptyPlaceholder}
					isOpen={isOpen}
					width={width}
					height={height}
					onSelect={this.onSelect}
					themeElement={themeElement}
				/>
			</SelectStyled>
		)
	}
}

Select.propTypes = {
	/** What to display in the select box when no item is selected. */
	placeholder: PropTypes.string,

	/** What to display on the list when there are no items. */
	emptyPlaceholder: PropTypes.string,

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
	margin: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.object,
		PropTypes.array,
	]),

	/** Fixed width of the select box and the select list. */
	width: PropTypes.string,

	/** Fixed height of the select list. */
	height: PropTypes.string,

	/** Theme element. */
	themeElement: PropTypes.string,
}

Select.defaultProps = {
	placeholder: 'Select an item',
	emptyPlaceholder: 'No items',
	margin: 'none',
	width: '100%',
	height: 'auto',
	themeElement: 'Select',
}

export default Select
