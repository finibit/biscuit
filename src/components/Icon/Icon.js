import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { themeColor, themeMargin, themePadding, responsiveArray } from '../../themes/themeUtils'

const upArrowStyles = css`
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid ${(props) => themeColor(props.theme, props.$color)};
`

const downArrowStyles = css`
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid ${(props) => themeColor(props.theme, props.$color)};
`

const rightArrowStyles = css`
  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 4px solid ${(props) => themeColor(props.theme, props.$color)};
`

const leftArrowStyles = css`
  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-right: 4px solid ${(props) => themeColor(props.theme, props.$color)};
`

const checkMarkStyles = css`
	&:after {
		content: '';
		display: block;
		width: 4px;
		height: 9px;
		border: solid ${(props) => themeColor(props.theme, props.$color)};
		border-width: 0 2px 2px 0;
		transform: rotate(45deg);
	}
`

const IconStyled = styled.div`
	${(props) => {
		switch (props.$type) {
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

	margin: ${(props) => themeMargin(props.theme, 'icon', props.$margin[0])};
	padding: ${(props) => themePadding(props.theme, 'icon', props.$padding[0])};

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.sm}) {
		margin: ${(props) => themeMargin(props.theme, 'icon', props.$margin[1])};
		padding: ${(props) => themePadding(props.theme, 'icon', props.$padding[1])};
	}

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.md}) {
		margin: ${(props) => themeMargin(props.theme, 'icon', props.$margin[2])};
		padding: ${(props) => themePadding(props.theme, 'icon', props.$padding[2])};
	}

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.lg}) {
		margin: ${(props) => themeMargin(props.theme, 'icon', props.$margin[3])};
		padding: ${(props) => themePadding(props.theme, 'icon', props.$padding[3])};
	}

	${(props) => props.$css};
`

/** Semantic CSS graphics. */
const Icon = (props) => {
	const {
		type,
		color,
		margin,
		padding,
		css,
		...rest
	} = props

	return (
		<IconStyled
			$type={type}
			$color={color}
			$margin={responsiveArray(margin)}
			$padding={responsiveArray(padding)}
			$css={css}
			{...rest}
		/>
	)
}

Icon.propTypes = {
	/** Type of the icon. */
	type: PropTypes.oneOf([
		'arrow-up',
		'arrow-left',
		'arrow-down',
		'arrow-right',
		'check-mark',
	]).isRequired,

	/** Color of the icon. */
	color: PropTypes.string,

	/** The amount of margin around the icon. */
	margin: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),

	/** The amount of padding around the icon. */
	padding: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),

	/** Custom styles passed to styled-components. */
	css: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

Icon.defaultProps = {
	color: 'dark-0',
	margin: 'none',
	padding: 'none',
	css: null,
}

export default Icon
