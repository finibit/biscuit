import React from 'react'
import PropTypes from 'prop-types'

const TableBody = (props) => (
  <tbody props={props}>
    {props.children}
  </tbody>
)

TableBody.propTypes = {
  /** Any number of renderable nodes. */
  children: PropTypes.node
}

TableBody.defaultProps = {
  children: null
}

export default TableBody
