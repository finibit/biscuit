import React from 'react'
import PropTypes from 'prop-types'

const TableCell = (props) => {
  const {
    width,
    children,
    ...rest
  } = props

  const styles = {
    width,
    minWidth: width,
    maxWidth: width
  }

  return (
    <td style={styles} {...rest}>
      {children}
    </td>
  )
}

TableCell.propTypes = {
  /** Any number of renderable nodes. */
  children: PropTypes.node,

  /** How many columns the cell extends. */
  colSpan: PropTypes.number,

  /** How many rows the cell extends. */
  rowSpan: PropTypes.number,

  /** Fixed width of the cell. */
  width: PropTypes.string
}

TableCell.defaultProps = {
  children: null,
  colSpan: 1,
  rowSpan: 1,
  width: 'initial'
}

export default TableCell
