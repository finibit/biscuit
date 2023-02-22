import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Icon from '../../Icon'
import styles from '../../../themes'

const borderStyles = css`
  border-top-left-radius: ${(props) => props.theme.global.borders[0].radius};
  border-top-right-radius: ${(props) => props.theme.global.borders[0].radius};
  border-bottom-left-radius: ${(props) => props.$isOpen ? '0' : props.theme.global.borders[0].radius};
  border-bottom-right-radius: ${(props) => props.$isOpen ? '0' : props.theme.global.borders[0].radius};
`

const SelectBoxStyled = styled.div`
  ${styles.border}
  ${styles.bgColor}
  ${borderStyles}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: default;
`

const PlaceholderStyled = styled.span`
  ${styles.margin}
  ${styles.color}
  ${styles.noWrap}
`

const SelectedItemStyled = styled.span`
  ${styles.margin}
  ${styles.noWrap}
`

const SelectBox = (props) => {
  const {
    placeholder,
    selectedItem,
    width,
    isOpen,
    onOpen,
    onClose,
    themeElement,
    ...rest
  } = props

  return (
    <SelectBoxStyled
      $element={themeElement}
      $bgColor='boxBackground'
      $border={0}
      $width={width}
      $isOpen={isOpen}
      {...rest}
      onClick={() => {
        if (isOpen) {
          onClose()
        } else {
          onOpen()
        }
      }}
    >
      {(selectedItem == null)
        ? (
          <PlaceholderStyled
            $element={themeElement}
            $color='boxPlaceholder'
            $margin={{ left: 1 }}
          >
            {placeholder}
          </PlaceholderStyled>
          )
        : (
          <SelectedItemStyled
            $element={themeElement}
            $margin={{ left: 1 }}
          >
            {selectedItem.title}
          </SelectedItemStyled>
          )}
      <Icon
        type={isOpen ? 'arrow-up' : 'arrow-down'}
        color='boxPlaceholder'
        margin={{ left: 0, right: 1 }}
        themeElement={themeElement}
      />
    </SelectBoxStyled>
  )
}

SelectBox.propTypes = {
  placeholder: PropTypes.string.isRequired,
  selectedItem: PropTypes.oneOfType([PropTypes.object]),
  width: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  themeElement: PropTypes.string.isRequired
}

SelectBox.defaultProps = {
  selectedItem: null
}

export default SelectBox
