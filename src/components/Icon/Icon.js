import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import themeGet from '@styled-system/theme-get'
import styles from '../../styles'
import types from '../../types'

const upArrowStyles = css`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
	border-bottom: 5px solid ${props => themeGet(props.color, props.color)};
`

const downArrowStyles = css`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid ${props => themeGet(props.color, props.color)};
`

const rightArrowStyles = css`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid ${props => themeGet(props.color, props.color)};
`

const leftArrowStyles = css`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid ${props => themeGet(props.color, props.color)};
`

const checkMarkStyles = css`
	&:after {
		content: '';
		display: block;
		width: 4px;
		height: 9px;
		border: solid ${props => themeGet(props.color, props.color)};
		border-width: 0 2px 2px 0;
		transform: rotate(45deg);
	}
`

const IconStyled = styled.div`
	${(props) => {
		switch (props.type) {
		case 'arrow-up':
			return upArrowStyles
		case 'arrow-left':
			return leftArrowStyles
		case 'arrow-down':
			return downArrowStyles
		case 'arrow-right':
			return rightArrowStyles
		case 'check-mark':
			return checkMarkStyles
		default:
			return ''
		}
	}}

	display: inline-block;

	${styles.compose(
		styles.space,
	)};
	${styles.css}
`

const Icon = (props) => (
	<IconStyled
		{...props}
	/>
)

Icon.propTypes = {
	type: PropTypes.oneOf([
		'arrow-up',
		'arrow-left',
		'arrow-down',
		'arrow-right',
		'check-mark',
	]).isRequired,

	...types.color,
	...types.space,
	...types.css,
}

Icon.defaultProps = {
}

export default Icon
