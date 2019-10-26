import React from 'react'
import PropTypes from 'prop-types'

const TableRow = (props) => (
  <tr {...props} />
)

TableRow.propTypes = {
  children: PropTypes.node
}

TableRow.defaultProps = {
  children: null
}

export default TableRow
