import React from 'react'
import PropTypes from 'prop-types'

const TableRow = (props) => {
  const {
    children,
    ...rest
  } = props

  return (
    <tr {...rest}>
      {children}
    </tr>
  )
}

TableRow.propTypes = {
  /** Any number of renderable nodes. */
  children: PropTypes.node
}

TableRow.defaultProps = {
  children: null
}

export default TableRow
