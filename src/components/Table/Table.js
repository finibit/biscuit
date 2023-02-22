import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TableBody from './TableBody'
import TableCell from './TableCell'
import TableFooter from './TableFooter'
import TableHeader from './TableHeader'
import TableHeaderCell from './TableHeaderCell'
import TableRow from './TableRow'
import styles from '../../themes'

const CaptionStyled = styled.caption`
  ${styles.fontFamily}
  font-weight: normal;
  text-align: left;
`

const TableStyled = styled.table`
  ${styles.margin}

  table-layout: fixed;
  border-collapse: collapse;
  border: none;
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: normal;
  width: ${(props) => props.$width};

  padding: 0;

  ${(props) => props.$css}
`

/** A table of data. */
const Table = (props) => {
  const {
    caption,
    width,
    margin,
    css,
    children,
    ...rest
  } = props

  return (
    <TableStyled
      $element='Table'
      $width={width}
      $margin={margin}
      $css={css}
      {...rest}
    >
      {caption
        ? (
          <CaptionStyled>{caption}</CaptionStyled>
          )
        : null}
      {children}
    </TableStyled>
  )
}

Table.propTypes = {
  /** Any number of renderable nodes. */
  children: PropTypes.node,

  /** Description of the table. */
  caption: PropTypes.string,

  /** Fixed width of the table. */
  width: PropTypes.string,

  /** The amount of margin around the table. */
  margin: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** Custom styles passed to styled-components. */
  css: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object])
}

Table.defaultProps = {
  children: null,
  caption: '',
  width: 'initial',
  margin: 'none',
  css: null
}

Table.Body = TableBody
Table.Cell = TableCell
Table.Footer = TableFooter
Table.Header = TableHeader
Table.HeaderCell = TableHeaderCell
Table.Row = TableRow

export default Table
