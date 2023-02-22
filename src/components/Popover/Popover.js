import React from 'react'
import PropTypes from 'prop-types'
import PopoverArrow from './parts/PopoverArrow'
import PopoverContent from './parts/PopoverContent'

class Popover extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      visible: (props.visible != null) ? props.visible : false
    }
    this.triggerRef = React.createRef()
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  handleMouseOver () {
    this.setState({
      visible: true
    })
  }

  handleMouseLeave () {
    this.setState({
      visible: false
    })
  }

  componentDidMount () {
    this.setState({
      visible: false
    })
  }

  render () {
    const {
      trigger,
      content,
      width,
      height,
      padding,
      placement
    } = this.props

    return (
      <>
        <div
          ref={this.triggerRef}
          onMouseOver={this.handleMouseOver}
          onMouseLeave={this.handleMouseLeave}
          style={{ display: 'inline-block' }}
        >
          {trigger}
        </div>
        {(this.triggerRef.current && (this.props.visible || this.state.visible)) && (
          <PopoverContent
            $element='Popover'
            $color={0}
            $bgColor={1}
            $margin='none'
            $padding={padding}
            $width={width}
            $height={height}
            $border={0}
            $elevation={2}
            $rect={this.triggerRef.current.getBoundingClientRect()}
            $placement={placement}
          >
            {content}
            <PopoverArrow
              $element='Popover'
              $bgColor={1}
              $placement={placement}
            />
          </PopoverContent>
        )}
      </>
    )
  }
}

Popover.propTypes = {
  /** Popover trigger. */
  trigger: PropTypes.element.isRequired,

  /** Popover content. */
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]),

  /** Fixed popover width. */
  width: PropTypes.string,

  /** Fixed popover height. */
  height: PropTypes.string,

  /** The amount of padding around the popover. */
  padding: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** Placement of the content. */
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

  visible: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf([null])])
}

Popover.defaultProps = {
  content: null,
  width: 'initial',
  height: 'initial',
  padding: 2,
  placement: 'top-left',
  visible: null
}

export default Popover
