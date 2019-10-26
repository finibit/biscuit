import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import shortid from 'shortid'
import { themeGet } from '@styled-system/theme-get'
import styles from '../../../styles'
import MultiselectListItem from './MultiselectListItem'

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

const MultiselectList = (props) => {
  const {
    items,
    selectedIndices,
    placeholder,
    isOpen,
    onSelect,
    onDeselect,
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
        items.map((item, idx) => {
          const selected = (selectedIndices.findIndex(i => i === idx) !== -1)
          return (
            <MultiselectListItem
              key={shortid.generate()}
              item={item}
              selected={selected}
              onClick={(event) => {
                if (selected) {
                  onDeselect(event, item, idx)
                } else {
                  onSelect(event, item, idx)
                }
              }}
            />
          )
        })
      )}
    </SelectListStyled>
  )
}

MultiselectList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array]).isRequired,
  selectedIndices: PropTypes.arrayOf(PropTypes.number).isRequired,
  placeholder: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  onDeselect: PropTypes.func.isRequired
}

export default MultiselectList
