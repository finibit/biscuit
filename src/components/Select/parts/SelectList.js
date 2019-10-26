import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { themeGet } from '../../../themes'
import styles from '../../../styles'
import SelectListItem from './SelectListItem'

const nowrapStyles = css`
  ${styles.nowrap({ nowrap: true })};
`

const spaceStyles = css`
  margin: 0;
`

const borderStyles = css`
  border: ${themeGet.border('light')};
  border-radius: ${themeGet.borderRadius('md')};
`

const SelectListStyled = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  transform: translateY(${themeGet.space(1)});
  width: 100%;
  overflow: hidden;
  background-color: ${themeGet.color('white')};
  -webkit-overflow-scrolling: touch;
  line-height: ${themeGet.lineHeight('lg')};

  box-shadow: ${themeGet.shadow('md')};

  ${spaceStyles}
  ${borderStyles};
`

const PlaceholderStyled = styled.div`
  box-sizing: border-box;
  color: ${themeGet.colorText('white', 0.7)};
  text-align: center;
  padding: ${props => themeGet.padding(1)} ${props => themeGet.padding(2)};
  ${nowrapStyles};
`

const SelectList = (props) => {
  const {
    items,
    selectedIndex,
    placeholder,
    isOpen,
    onSelect,
    ...rest
  } = props

  if (!isOpen) {
    return null
  }

  return (
    <SelectListStyled
      onClick={event => event.stopPropagation()}
      isOpen={isOpen}
      {...rest}
    >
      {(items.length === 0) ? (
        <PlaceholderStyled>
          {placeholder}
        </PlaceholderStyled>
      ) : (
        items.map((item, idx) => (
          <SelectListItem
            key={item}
            item={item}
            selected={selectedIndex === idx}
            onClick={(event) => onSelect(event, item, idx)}
          />
        ))
      )}
    </SelectListStyled>
  )
}

SelectList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  selectedIndex: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default SelectList
