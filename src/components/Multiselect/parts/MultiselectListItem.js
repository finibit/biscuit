import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import styles from '../../../themes'

const MultiselectListItemStyled = styled.div`
  color: ${({ theme }) => theme.global.colors[0]};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.global.colors[2]};
    background-color: ${({ theme }) => theme.global.colors[3]};
  }

  ${(props) => props.$selected && css`
    color: ${({ theme }) => theme.global.colors[2]};
    background-color: ${({ theme }) => theme.global.colors[3]};
  `}
`

const MultiselectListItemTitleStyled = styled.span`
  ${styles.margin}
  ${styles.noWrap}
`

const IconStyled = styled.svg`
  width: 1rem;
  height: 1rem;
  margin-left: 0;
  margin-right: .5rem;
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
      <IconStyled
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
        style={{ visibility: item.selected ? 'visible' : 'hidden' }}
      >
        <path
          fillRule='evenodd'
          d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
          clipRule='evenodd'
        />
      </IconStyled>
    </MultiselectListItemStyled>
  )
}

MultiselectListItem.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object]).isRequired,
  themeElement: PropTypes.string.isRequired
}

export default MultiselectListItem
