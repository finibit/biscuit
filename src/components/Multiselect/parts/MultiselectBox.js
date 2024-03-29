import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Icon from '../../Icon'
import styles from '../../../themes'

const borderStyles = css`
  border: 1px solid ${({ theme }) => theme.global.colors[4]};
  border-top-left-radius: ${(props) => props.theme.global.borders[0].radius};
  border-top-right-radius: ${(props) => props.theme.global.borders[0].radius};
  border-bottom-left-radius: ${(props) => props.$isOpen ? '0' : props.theme.global.borders[0].radius};
  border-bottom-right-radius: ${(props) => props.$isOpen ? '0' : props.theme.global.borders[0].radius};
`

const MultiselectBoxStyled = styled.div`
  ${borderStyles}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: default;
  background-color: ${({ theme }) => theme.global.colors[1]};
`

const PlaceholderStyled = styled.span`
  ${styles.margin}
  ${styles.noWrap}
  margin-top: 0.2rem;
  color: ${({ theme }) => theme.global.colors[0]};
`

const SelectedItemStyled = styled.span`
  ${styles.margin}
  ${styles.noWrap}
  margin-top: 0.2rem;
  color: ${({ theme }) => theme.global.colors[0]};
`

const MultiselectBox = (props) => {
  const {
    placeholder,
    selectedItems,
    width,
    isOpen,
    onOpen,
    onClose,
    display,
    themeElement,
    ...rest
  } = props

  return (
    <MultiselectBoxStyled
      $element={themeElement}
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
      {(selectedItems.length === 0)
        ? (
          <PlaceholderStyled
            $element={themeElement}
            $margin={{ left: 1 }}
          >
            {(display === 'selected-count')
              ? (
            `${placeholder} (${selectedItems.length})`
                )
              : (
                  placeholder
                )}
          </PlaceholderStyled>
          )
        : (
          <SelectedItemStyled
            $element={themeElement}
            $margin={{ left: 1 }}
          >
            {(display === 'selected-items')
              ? (
                  selectedItems.map((item, index) => (
                    <span key={item}>
                      {`${item}${index === (selectedItems.length - 1) ? '' : ', '}`}
                    </span>
                  ))
                )
              : (
            `${placeholder} (${selectedItems.length})`
                )}
          </SelectedItemStyled>
          )}
      <Icon
        type={isOpen ? 'arrow-up' : 'arrow-down'}
        color={5}
        margin={{ left: 0, right: 1, top: '0.2' }}
      />
    </MultiselectBoxStyled>
  )
}

MultiselectBox.propTypes = {
  placeholder: PropTypes.string.isRequired,
  selectedItems: PropTypes.oneOfType([PropTypes.array]).isRequired,
  width: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  display: PropTypes.oneOf(['selected-items', 'selected-count']).isRequired,
  themeElement: PropTypes.string.isRequired
}

export default MultiselectBox
