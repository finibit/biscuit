import React, { Children } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import TabsItem from './TabsItem'
import styles, { utils } from '../../themes'

const TabsStyled = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`

const TabsNavStyled = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  box-sizing: border-box;
  border-bottom: 1px solid ${({ theme }) => theme.global.colors[4]};
`

const TabsNavItemStyled = styled.li`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  white-space: nowrap;
`

const inactiveStyles = css`
  &:hover, &:active {
    color: ${({ theme }) => theme.global.colors[2]};
    background-color: ${({ theme }) => theme.global.colors[3]};
    border-bottom: 1px solid ${({ theme }) => theme.global.colors[3]};
  }
`

const activeStyles = css`
  cursor: default;
  border-top: 1px solid ${({ theme }) => theme.global.colors[4]};
  border-left: 1px solid ${({ theme }) => theme.global.colors[4]};
  border-bottom: 1px solid ${({ theme }) => theme.global.colors[1]};
  border-right: 1px solid ${({ theme }) => theme.global.colors[4]};
`

const disabledStyles = css`
  color: ${(props) => utils.resolveColor(props.theme, props.$element, 'disabledTabTitle')} !important;
  cursor: default;
`

const TabsButtonStyled = styled.a`
  ${styles.fontFamily}
  ${styles.lineHeight}
  ${styles.padding}

  border-top-left-radius: ${(props) => props.theme.global.borders[0].radius};
  border-top-right-radius: ${(props) => props.theme.global.borders[0].radius};

  color: ${({ theme }) => theme.global.colors[0]};
  display: inline-block;
  cursor: pointer;
  font-size: 1rem;
  font-weight: normal;
  text-decoration: none;
  box-sizing: border-box;
  vertical-align: middle;
  user-select: none;

  margin: 0 2px -1px 0;

  ${(props) => {
    if (props.$disabled) {
      return disabledStyles
    }

    if (props.$active) {
      return activeStyles
    }

    return inactiveStyles
  }};
`

const TabsButton = (props) => {
  const {
    index,
    active,
    disabled,
    padding,
    children,
    onClick,
    ...rest
  } = props

  return (
    <TabsButtonStyled
      $element='Tabs'
      $active={active}
      $disabled={disabled}
      $padding={padding}
      {...rest}
      onClick={(event) => {
        if (!disabled) {
          event.preventDefault()
          onClick(event, index)
        }
      }}
    >
      {children}
    </TabsButtonStyled>
  )
}

TabsButton.propTypes = {
  children: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  padding: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),
  onClick: PropTypes.func
}

TabsButton.defaultProps = {
  padding: 'none',
  onClick: () => {}
}

const Tabs = (props) => {
  const {
    children,
    padding,
    activeIndex,
    onTabChange,
    themeElement,
    ...rest
  } = props

  return (
    <TabsStyled
      $element={themeElement}
      {...rest}
    >
      <TabsNavStyled
        $element={themeElement}
        $border={{ bottom: 0 }}
      >
        {Children.map(children, (child, index) => (
          (child.props.disabled && child.props.hidden)
            ? (
                null)
            : (
              <TabsNavItemStyled
                key={child.props.title}
                $element={themeElement}
              >
                <TabsButton
                  $element={themeElement}
                  index={index}
                  active={index === activeIndex}
                  disabled={child.props.disabled}
                  padding={padding}
                  onClick={(event) => {
                    onTabChange(event, index)
                  }}
                >
                  {child.props.title}
                </TabsButton>
              </TabsNavItemStyled>
              )
        ))}
      </TabsNavStyled>
      {Children.toArray(props.children)[activeIndex]}
    </TabsStyled>
  )
}

Tabs.propTypes = {
  /** At least one `Tabs.Item` components. */
  children: PropTypes.node.isRequired,

  /** The amount of padding around the tab navigation. */
  padding: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** Active item index. */
  activeIndex: PropTypes.number.isRequired,

  /**
   * Called when tab change is requested.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent
   * @param {number} index - Proposed new activeIndex
   */
  onTabChange: PropTypes.func.isRequired,

  /** Theme element. */
  themeElement: PropTypes.string
}

Tabs.defaultProps = {
  padding: { horizontal: 2, vertical: 1 },
  themeElement: 'Tabs'
}

Tabs.Item = TabsItem

export default Tabs
