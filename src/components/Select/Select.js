import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeGet } from '../../themes'
import styles from '../../styles'
import types from '../../types'
import { useOutsideClick } from '../../hooks'
import { SelectBox, SelectList } from './parts'

const SelectStyled = styled.div`
  box-sizing: border-box;
  user-select: none;
  position: relative;
  color: ${themeGet.color('black')};
  font-family: ${themeGet.fontFamily('secondary')};

  ${styles.compose(
    styles.layout,
    styles.margin
  )};
`

const Select = (props) => {
  const {
    placeholder,
    emptyPlaceholder,
    items,
    selectedIndex,
    isOpen,
    onOpen,
    onClose,
    onSelect,
    ...rest
  } = props

  const ref = useRef()

  useOutsideClick(ref, () => {
    onClose()
  })

  return (
    <SelectStyled
      ref={ref}
      {...rest}
    >
      <SelectBox
        placeholder={placeholder}
        selectedItem={items[selectedIndex]}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
      <SelectList
        placeholder={emptyPlaceholder}
        items={items}
        selectedIndex={selectedIndex}
        isOpen={isOpen}
        onSelect={(event, item, index) => {
          onSelect(event, item, index)
          onClose()
        }}
      />
    </SelectStyled>
  )
}

Select.propTypes = {
  /** A text displayed in the select box when no item is selected. */
  placeholder: PropTypes.string,

  /** A text displayed in the select list when the list is empty. */
  emptyPlaceholder: PropTypes.string,

  /** An array of items to display in the select list. */
  items: PropTypes.arrayOf(PropTypes.node).isRequired,

  /** An index of the element in the items array that is currently selected. */
  selectedIndex: PropTypes.number.isRequired,

  /** A value indicating if the select list is open. */
  isOpen: PropTypes.bool.isRequired,

  /** A function invoked when opening the select list was requested. */
  onOpen: PropTypes.func.isRequired,

  /** A function invoked when closing the select list was requested. */
  onClose: PropTypes.func.isRequired,

  /** A function invoked when selecting an item was requested. */
  onSelect: PropTypes.func.isRequired,

  ...types.layout,
  ...types.margin
}

Select.defaultProps = {
  width: '100%',
  placeholder: 'Select an item',
  emptyPlaceholder: 'No items'
}

export default Select
