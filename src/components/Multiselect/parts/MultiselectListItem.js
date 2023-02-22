import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from '../../Icon'
import styles from '../../../themes'

const MultiselectListItemStyled = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  &:hover {
    ${styles.bgColor}
  }

  ${(props) => props.$selected && styles.bgColor}
`

const MultiselectListItemTitleStyled = styled.span`
  ${styles.margin}
  ${styles.noWrap}
`

const MultiselectListItem = (props) => {
  const {
    item,
    themeElement,
    ...rest
  } = props

  return (
    <MultiselectListItemStyled
      $element={themeElement}
      $bgColor='listItemBackground'
      $margin='none'
      $selected={item.selected}
      {...rest}
    >
      <MultiselectListItemTitleStyled
        $element={themeElement}
        $margin={{ left: 1 }}
      >
        {item.title}
      </MultiselectListItemTitleStyled>
      <Icon
        type='check-mark'
        color='listPlaceholder'
        $element={themeElement}
        $margin={{ left: 2, right: 1 }}
        css={{ visibility: item.selected ? 'visible' : 'hidden' }}
        themeElement={themeElement}
      />
    </MultiselectListItemStyled>
  )
}

MultiselectListItem.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object]).isRequired,
  themeElement: PropTypes.string.isRequired
}

export default MultiselectListItem
