import styled from 'styled-components'
import styles, { utils } from '../../../themes'

const position = (props) => {
  const rect = props.$rect
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft
  const baseSize = props.theme.global.baseSize
  const typeScale = props.theme.global.typeScale
  const offset = (baseSize * (typeScale ** utils.resolveValue(props.theme, 'global', 'spacing', 2)))

  let top = 0
  let left = 0
  let tx = 0
  let ty = 0

  const placement = props.$placement.split('-')
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

const PopoverContent = styled.div`
  ${styles.spacing}
  ${styles.color}
  ${styles.bgColor}
  ${styles.border}
  ${styles.elevation}
  ${position}

  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  position: absolute;
  z-index: 99;
  border-top-left-radius: ${(props) => props.theme.global.borders[0].radius};
  border-top-right-radius: ${(props) => props.theme.global.borders[0].radius};
  border-bottom-left-radius: ${(props) => props.theme.global.borders[0].radius};
  border-bottom-right-radius: ${(props) => props.theme.global.borders[0].radius};
`

export default PopoverContent
