import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeGet } from '../../themes'
import styles from '../../styles'
import types from '../../types'
import { useOutsideClick } from '../../hooks'
import { MultiselectBox, MultiselectList } from './parts'

const MultiselectStyled = styled.div`
	box-sizing: border-box;
	user-select: none;
	position: relative;
	color: ${themeGet.color('black')};
	font-family: ${themeGet.fontFamily('secondary')};
	line-height: ${themeGet.lineHeight('lg')};

	${styles.compose(
		styles.layout,
		styles.margin,
	)};
`

const Multiselect = (props) => {
	const {
		placeholder,
		emptyPlaceholder,
		items,
		selectedIndices,
		isOpen,
		onOpen,
		onClose,
		onSelect,
		onDeselect,
		...rest
	} = props

	const ref = useRef()

	useOutsideClick(ref, () => {
		onClose()
	})

	const selectedItems = selectedIndices.map((value) => (
		items[value]
	))

	return (
		<MultiselectStyled
			ref={ref}
			{...rest}
		>
			<MultiselectBox
				placeholder={placeholder}
				selectedItems={selectedItems}
				isOpen={isOpen}
				onOpen={onOpen}
				onClose={onClose}
			/>
			<MultiselectList
				placeholder={emptyPlaceholder}
				items={items}
				selectedIndices={selectedIndices}
				isOpen={isOpen}
				onSelect={(event, item, index) => {
					onSelect(event, item, index)
					onClose()
				}}
				onDeselect={(event, item, index) => {
					onDeselect(event, item, index)
					onClose()
				}}
			/>
		</MultiselectStyled>
	)
}

Multiselect.propTypes = {
	/** A text displayed in the select box when no item is selected. */
	placeholder: PropTypes.string,

	/** A text displayed in the select list when the list is empty. */
	emptyPlaceholder: PropTypes.string,

	/** An array of items to display in the select list. */
	items: PropTypes.arrayOf(PropTypes.node).isRequired,

	/** An array of indices of selected items. */
	selectedIndices: PropTypes.arrayOf(PropTypes.number).isRequired,

	/** A value indicating if the select list is open. */
	isOpen: PropTypes.bool.isRequired,

	/** A function invoked when opening the select list was requested. */
	onOpen: PropTypes.func.isRequired,

	/** A function invoked when closing the select list was requested. */
	onClose: PropTypes.func.isRequired,

	/** A function invoked when selecting an item was requested. */
	onSelect: PropTypes.func.isRequired,

	/** A function invoked when deselecting an item was requested. */
	onDeselect: PropTypes.func.isRequired,

	...types.layout,
	...types.margin,
}

Multiselect.defaultProps = {
	width: '100%',
	placeholder: 'Select an item',
	emptyPlaceholder: 'No items',
}

export default Multiselect