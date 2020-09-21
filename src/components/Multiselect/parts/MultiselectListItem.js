import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { themeGet } from '../../../themes'
import styles from '../../../styles'
import Icon from '../../Icon'

const nowrapStyles = css`
  ${styles.nowrap({ nowrap: true })};
`

const MultiselectListItemStyled = styled.div`
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

const MultiselectListItemTitleStyled = styled.span`
	margin-top: .3em;
  ${nowrapStyles};
`

const MultiselectListItem = (props) => {
  const {
    item,
    selected,
    ...rest
  } = props

  return (
    <MultiselectListItemStyled
      selected={selected}
      {...rest}
    >
      <MultiselectListItemTitleStyled>
        {item}
      </MultiselectListItemTitleStyled>
      <Icon
        type='check-mark'
        color={themeGet.colorText('white', 0.85)(props)}
        css={{ visibility: selected ? 'visible' : 'hidden' }}
      />
    </MultiselectListItemStyled>
  )
}

MultiselectListItem.propTypes = {
  item: PropTypes.node.isRequired,
  selected: PropTypes.bool.isRequired
}

export default MultiselectListItem
