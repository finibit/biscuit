import React from 'react'
import PropTypes from 'prop-types'

const TableHeader = (props) => (
  <thead {...props} />
)

TableHeader.propTypes = {
  children: PropTypes.node
}

TableHeader.defaultProps = {
  children: null
}

export default TableHeader
