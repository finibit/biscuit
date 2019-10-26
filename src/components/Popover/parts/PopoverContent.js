import React from 'react'
import styled from 'styled-components'
import types from '../../../types'
import { themeGet } from '../../../themes'

const position = (props) => {
  const rect = props.rect
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft
  const offset = 8

  let top = 0
  let left = 0
  let tx = 0
  let ty = 0

  const placement = props.placement.split('-')
  placement.push('')

  if (placement[0] === 'top') {
    top = scrollTop + rect.top - offset
    left = scrollLeft + rect.left
    ty = '-100'

    if (placement[1] === '') {
      left += rect.width / 2
      tx = '-50'
    } else if (placement[1] === 'right') {
      left += rect.width
      tx = '-100'
    }
  } else if (placement[0] === 'right') {
    top = scrollTop + rect.top
    left = scrollLeft + rect.left + rect.width + offset

    if (placement[1] === '') {
      top += rect.height / 2
      ty = '-50'
    } else if (placement[1] === 'bottom') {
      top += rect.height
      ty = '-100'
    }
  } else if (placement[0] === 'bottom') {
    top = scrollTop + (rect.top + rect.height) + offset
    left = scrollLeft + rect.left

    if (placement[1] === '') {
      left += rect.width / 2
      tx = '-50'
    } else if (placement[1] === 'right') {
      left += rect.width
      tx = '-100'
    }
  } else if (placement[0] === 'left') {
    top = scrollTop + rect.top
    left = scrollLeft + rect.left - offset
    tx = -100

    if (placement[1] === '') {
      top += rect.height / 2
      ty = '-50'
    } else if (placement[1] === 'bottom') {
      top += rect.height
      ty = '-100'
    }
  }

  return `top: ${top}px; left: ${left}px; transform: translate(${tx}%, ${ty}%);`
}

const PopoverContentStyled = styled.div`
  box-sizing: border-box;
  position: absolute;
  z-index: 99;
  margin: 0;
  padding: ${props => themeGet.padding(1)} ${props => themeGet.padding(2)};
  background-color: ${themeGet.color('white', '#fff')};
  border: ${themeGet.border('light')};
  border-radius: ${themeGet.borderRadius('md')};
  box-shadow: ${themeGet.shadow('lg')};
  line-height: ${themeGet.lineHeight('lg')};
  ${position};
`

const PopoverContent = (props) => (
  <PopoverContentStyled
    {...props}
  />
)

PopoverContent.propTypes = {
  ...types.size
}

export default PopoverContent
