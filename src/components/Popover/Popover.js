import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useHover } from '../../hooks'
import { PopoverContent, PopoverArrow } from './parts'

const Popover = (props) => {
  const {
    trigger,
    content,
    placement,
    isVisible,
    onHide,
    onShow
  } = props

  const hoverRef = useRef()

  useHover(hoverRef, onShow, onHide)

  return (
    <>
      <div
        ref={hoverRef}
        style={{ display: 'inline-block' }}
      >
        {trigger}
      </div>
      {(hoverRef.current && isVisible) && (
        <PopoverContent
          placement={placement}
          rect={hoverRef.current.getBoundingClientRect()}
        >
          {content}
          <PopoverArrow
            placement={placement}
          />
        </PopoverContent>
      )}
    </>
  )
}

Popover.propTypes = {
  trigger: PropTypes.element.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]),
  placement: PropTypes.oneOf([
    'top-left',
    'top',
    'top-right',
    'right-top',
    'right',
    'right-bottom',
    'bottom-right',
    'bottom',
    'bottom-left',
    'left-bottom',
    'left',
    'left-top'
  ]),
  isVisible: PropTypes.bool.isRequired,
  onShow: PropTypes.func,
  onHide: PropTypes.func
}

Popover.defaultProps = {
  content: null,
  placement: 'top-left'
}

export default Popover
