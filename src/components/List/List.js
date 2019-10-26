import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import shortid from 'shortid'
import styles from '../../styles'
import types from '../../types'
import ListItem from './parts/ListItem'

const ListStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  color: ${themeGet.color('black')};
  border: ${themeGet.border('light')};
  border-radius: ${themeGet.borderRadius('md')};
  font-family: ${themeGet.fontFamily('secondary')};
  line-height: ${themeGet.lineHeight('lg')};

  ${styles.compose(
    styles.margin
  )};
`

const List = (props) => {
  const {
    items,
    renderItem,
    size,
    ...rest
  } = props

  return (
    <ListStyled
      {...rest}
    >
      {items.map(item => {
        const elem = renderItem ? renderItem(item) : (
          <ListItem>
            {item}
          </ListItem>
        )

        if (elem.key != null) {
          return elem
        }

        return React.cloneElement(elem, { key: shortid() })
      })}
    </ListStyled>
  )
}

List.Item = ListItem

List.propTypes = {
  items: PropTypes.any,
  renderItem: PropTypes.func,
  ...types.margin
}

List.defaultProps = {
  items: []
}

export default List
