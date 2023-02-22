import React from 'react'
import PropTypes from 'prop-types'

const TableHeader = (props) => (
  <thead props={props}>
    {props.children}
  </thead>
)

TableHeader.propTypes = {
  /** Any number of renderable nodes. */
  children: PropTypes.node
}

TableHeader.defaultProps = {
  children: null
}

export default TableHeader
