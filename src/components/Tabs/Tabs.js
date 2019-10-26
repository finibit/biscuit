import React, { Children } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import shortid from 'shortid'
import { themeGet } from '../../themes'
import * as parts from './parts'

const TabsStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
  font-family: ${themeGet('fonts.secondary', 'sans-serif')};
  font-size: ${props => themeGet('fontSizes.md', '1em')};
  color: ${themeGet('colors.black', '#000')};
  line-height: ${themeGet.lineHeight('lg')};
`

const TabsNavStyled = styled.ul`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  border-bottom: ${themeGet.border('light')};
`

const TabsNavItemStyled = styled.li`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  white-space: nowrap;
  font-size: inherit;
`

const inactiveStyles = css`
  border-top: ${themeGet.border('white')};
  border-left: ${themeGet.border('white')};
  border-right: ${themeGet.border('white')};
  border-bottom: ${themeGet.border('light')};
  border-top-left-radius: ${themeGet.borderRadius('md')};
  border-top-right-radius: ${themeGet.borderRadius('md')};

  &:hover, &:active {
    background-color: ${themeGet.color('light')};
  }
`

const activeStyles = css`
  border-top: ${themeGet.border('light')};
  border-left: ${themeGet.border('light')};
  border-right: ${themeGet.border('light')};
  border-bottom: ${themeGet.border('white')};
  border-top-left-radius: ${themeGet.borderRadius('md')};
  border-top-right-radius: ${themeGet.borderRadius('md')};
  cursor: default;
`

const disabledStyles = css`
  border-top: ${themeGet.border('white')};
  border-left: ${themeGet.border('white')};
  border-right: ${themeGet.border('white')};
  border-bottom: ${themeGet.border('light')};
  cursor: default;
  color: ${themeGet.colorText('white', 0.7)};
`

const TabsButtonStyled = styled.a`
  display: inline-block;
  cursor: pointer;
  font-weight: normal;
  text-decoration: none;
  box-sizing: border-box;
  vertical-align: middle;
  user-select: none;
  margin: 0 2px -1px 0;

  ${(props) => {
    if (props.disabled) {
      return disabledStyles
    }

    if (props.active) {
      return activeStyles
    }

    return inactiveStyles
  }};

  padding: ${props => themeGet.padding(1)} ${props => themeGet.padding(2)};
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

  const border = {}

  if (active) {
    border.top = 0
    border.right = 0
    border.bottom = 1
    border.left = 0
  } else if (!disabled) {
    border.top = 1
    border.right = 1
    border.left = 1
  }

  return (
    <TabsButtonStyled
      active={active}
      disabled={disabled}
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

const Tabs = (props) => {
  const {
    children,
    activeIndex,
    onTabChange,
    ...rest
  } = props

  return (
    <TabsStyled
      {...rest}
    >
      <TabsNavStyled>
        {Children.map(children, (child, index) => (
          (child.props.hidden) ? (null) : (
            <TabsNavItemStyled
              key={shortid()}
            >
              <TabsButton
                index={index}
                active={index === activeIndex}
                disabled={child.props.disabled}
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
  activeIndex: PropTypes.number.isRequired,
  onTabChange: PropTypes.func.isRequired
}

Tabs.Item = parts.TabsItem

export default Tabs
