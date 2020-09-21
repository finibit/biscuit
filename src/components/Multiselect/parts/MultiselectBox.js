import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import shortid from 'shortid'
import themeGet from '@styled-system/theme-get'
import styles from '../../../styles'
import Icon from '../../Icon'

const nowrapStyles = css`
  ${styles.nowrap({ nowrap: true })};
`

const spaceStyles = css`
  margin: 0;
  padding: ${props => themeGet.padding(1)} ${props => themeGet.padding(2)};
`

const colorStyles = css`
  color: ${themeGet.colorText('black')};
  background-color: ${themeGet.color('white', '#fff')};
`

const borderStyles = css`
  border: ${themeGet.border('light')};
  border-radius: ${themeGet.borderRadius('md')};
`

const MultiselectBoxStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;

  ${spaceStyles};
  ${colorStyles};
  ${borderStyles};
`

const PlaceholderStyled = styled.span`
	margin-top: .3em;
  box-sizing: border-box;
  color: ${themeGet.colorText('white', 0.7)};
  ${nowrapStyles};
`

const SelectedItemStyled = styled.span`
	margin-top: .3em;
  box-sizing: border-box;
  color: ${themeGet.colorText('white')};
  ${nowrapStyles};
`

const MultiselectBox = (props) => {
  const {
    placeholder,
    selectedItems,
    isOpen,
    onOpen,
    onClose
  } = props

  return (
    <MultiselectBoxStyled
      isOpen={isOpen}
      onClick={() => {
        if (isOpen) {
          onClose()
        } else {
          onOpen()
        }
      }}
    >
      {(selectedItems.length === 0) ? (
        <PlaceholderStyled>
          {placeholder}
        </PlaceholderStyled>
      ) : (
        <SelectedItemStyled>
          {selectedItems.map((item, index) => (
            <span key={shortid.generate()}>
              {`${item}${index === (selectedItems.length - 1) ? '' : ', '}`}
            </span>
          ))}
        </SelectedItemStyled>
      )}
      <Icon
        type={isOpen ? 'arrow-up' : 'arrow-down'}
        color={themeGet.colorText('white', 0.85)(props)}
        marginLeft={2}
      />
    </MultiselectBoxStyled>
  )
}

MultiselectBox.propTypes = {
  selectedItems: PropTypes.arrayOf(PropTypes.node).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
}

export default MultiselectBox
