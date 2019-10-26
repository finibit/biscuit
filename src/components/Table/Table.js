import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeGet } from '../../themes'
import styles from '../../styles'
import types from '../../types'
import * as parts from './parts'

const CaptionStyled = styled.caption`
  font-family: ${themeGet.fontFamily('primary')};
  font-size: ${themeGet.fontSize(1)};
  font-weight: normal;
  text-align: left;
  padding: ${themeGet.padding(1)} ${themeGet.padding(2)};
`

const TableStyled = styled.table`
  box-sizing: border-box;
  table-layout: fixed;
  border-collapse: collapse;
  font-family: ${themeGet.fontFamily('primary')};
  font-size: ${themeGet.fontSize(1)};
  font-weight: normal;
  padding: 0;
  line-height: ${themeGet.lineHeight('lg')};

  tr {
    border-bottom: ${themeGet.border('light')};
  }

  th, td {
    text-align: left;
    padding: ${themeGet.padding(1)} ${themeGet.padding(2)};
  }

  ${styles.compose(
    styles.border,
    styles.layout
  )};

  ${styles.css};
`

const Table = (props) => {
  const {
    caption,
    children,
    ...rest
  } = props

  return (
    <TableStyled
      {...rest}
    >
      {caption ? (
        <CaptionStyled
          {...rest}
        >
          {caption}
        </CaptionStyled>
      ) : null}
      {children}
    </TableStyled>
  )
}

Table.propTypes = {
  caption: PropTypes.string,
  ...types.border,
  ...types.size,
  ...types.layout,
  ...types.margin
}

Table.Body = parts.TableBody
Table.Cell = parts.TableCell
Table.Footer = parts.TableFooter
Table.Header = parts.TableHeader
Table.HeaderCell = parts.TableHeaderCell
Table.Row = parts.TableRow

export default Table
