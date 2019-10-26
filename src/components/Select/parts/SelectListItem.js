import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { themeGet } from '../../../themes'
import styles from '../../../styles'

const nowrapStyles = css`
  ${styles.nowrap({ nowrap: true })};
`

const SelectListItemStyled = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  color: inherit;
  padding: ${props => themeGet.padding(1)} ${props => themeGet.padding(2)};

  &:hover {
    background-color: ${themeGet.colorTint('primary', 0.8, '#000000')};
  }

  background-color: ${props => props.selected && themeGet.colorTint('black', 0.97, '#000000')};
`

const SelectListItemTitleStyled = styled.span`
  ${nowrapStyles};
`

const SelectListItem = (props) => {
  const {
    item,
    selected,
    ...rest
  } = props

  return (
    <SelectListItemStyled
      selected={selected}
      {...rest}
    >
      <SelectListItemTitleStyled>
        {item}
      </SelectListItemTitleStyled>
    </SelectListItemStyled>
  )
}

SelectListItem.propTypes = {
  item: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  selected: PropTypes.bool.isRequired
}

export default SelectListItem
