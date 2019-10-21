import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import styles from '../../styles'
import types from '../../types'
import { themeGet } from '../../themes'

const typographyStyles = css`
	text-decoration: none;
	font-family: ${themeGet.fontFamily('primary')};
	font-weight: ${themeGet.fontWeight('normal')};
	font-size: ${themeGet.fontSize(1)};
	line-height: ${themeGet.lineHeight('lg')};
`

const normalStyles = css`
	color: ${props => themeGet.colorText(props.color)};
	background-color: ${props => themeGet.color(props.color)};

	&:hover {
		cursor: pointer;
		background-color: ${props => themeGet.colorShade(props.color, .05)};
	}

	&:focus {
		box-shadow: 0px 0px 0px 2px ${props => themeGet.colorShadeOrTint(props.color, .05, .7)};
	}
`

const disabledStyles = css`
	color: ${props => themeGet.colorText(props.color, .5)};
	background-color: ${props => themeGet.colorTint(props.color, .5)};
`

const appearanceStyles = css`
	${props => props.disabled ? disabledStyles : normalStyles};
	border: none;
	border-radius: ${themeGet.borderRadius('md')};
	box-shadow: none;
	text-align: center;
	vertical-align: middle;
	&::-moz-focus-inner { border: 0; }
	&:focus { outline: none; }
	padding: ${props => themeGet.padding(1)} ${props => themeGet.padding(2)};
`

const ButtonStyled = styled.button`
	display: inline-block;
	box-sizing: border-box;
	${typographyStyles}
	${appearanceStyles}

	${styles.compose(
		styles.margin,
	)};
`

const Button = (props) => (
	<ButtonStyled
		{...props}
	/>
)

Button.propTypes = {
	...types.base,
	...types.disabled,
	...types.margin,
	color: PropTypes.string,
}

Button.defaultProps = {
	color: 'primary',
}

export default Button
