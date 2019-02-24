import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { themeColor, themeSize, themeMargin, themePadding, responsiveArray } from '../../themes/themeUtils'

const nowrapStyles = css`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`

const TextStyled = styled.span`
	font-family: ${(props) => props.theme.global.fontFamily};
	font-weight: ${(props) => props.$weight};
	font-style: ${(props) => props.$italic ? 'italic' : 'normal'};
	color: ${(props) => themeColor(props.theme, props.$color)};

	text-align: ${(props) => props.$align};
	text-decoration: ${(props) => props.$decoration};
	text-transform: ${(props) => props.$transform};

	font-size: ${(props) => themeSize(props.theme, 'text', props.$size[0])};
	margin: ${(props) => themeMargin(props.theme, 'text', props.$margin[0])};
	padding: ${(props) => themePadding(props.theme, 'text', props.$padding[0])};

	${(props) => props.$nowrap && nowrapStyles};

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.sm}) {
		font-size: ${(props) => themeSize(props.theme, 'text', props.$size[1])};
		margin: ${(props) => themeMargin(props.theme, 'text', props.$margin[1])};
		padding: ${(props) => themePadding(props.theme, 'text', props.$padding[1])};
	}

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.md}) {
		font-size: ${(props) => themeSize(props.theme, 'text', props.$size[2])};
		margin: ${(props) => themeMargin(props.theme, 'text', props.$margin[2])};
		padding: ${(props) => themePadding(props.theme, 'text', props.$padding[2])};
	}

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.lg}) {
		font-size: ${(props) => themeSize(props.theme, 'text', props.$size[3])};
		margin: ${(props) => themeMargin(props.theme, 'text', props.$margin[3])};
		padding: ${(props) => themePadding(props.theme, 'text', props.$padding[3])};
	}

	${(props) => props.$css};
`

/** A non-semantic text. */
const Text = (props) => {
	const {
		color,
		align,
		nowrap,
		weight,
		italic,
		transform,
		decoration,
		size,
		margin,
		padding,
		css,
		...rest
	} = props

	return (
		<TextStyled
			$color={color}
			$align={align}
			$nowrap={nowrap}
			$weight={weight}
			$italic={italic}
			$transform={transform}
			$decoration={decoration}
			$size={responsiveArray(size)}
			$margin={responsiveArray(margin)}
			$padding={responsiveArray(padding)}
			$css={css}
			{...rest}
		/>
	)
}

Text.propTypes = {
	/** DOM element to use. */
	as: PropTypes.string,
	/** Custom color value or theme color identifier of the text color. */
	color: PropTypes.string,
	/** Text alignment. */
	align: PropTypes.oneOf(['left', 'center', 'right']),
	/** Should the text wrap if it doesn't fit into container. */
	nowrap: PropTypes.bool,
	/** Font weight. */
	weight: PropTypes.oneOfType([PropTypes.oneOf(['normal', 'bold']), PropTypes.number]),
	/** Use italic version of the font. */
	italic: PropTypes.bool,
	/** Text transformation. */
	transform: PropTypes.oneOf(['none', 'uppercase', 'lowercase', 'capitalize', 'full-width']),
	/** Text decoration. */
	decoration: PropTypes.oneOf(['none', 'underline', 'overline', 'line-through']),
	/** Size of the text. */
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
	/** The amount of margin around the box. */
	margin: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
	/** The amount of padding around the box. */
	padding: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
	/** Custom styles passed to styled-components. */
	css: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

Text.defaultProps = {
	as: 'span',
	color: 'dark-0',
	align: 'left',
	nowrap: false,
	weight: 'normal',
	italic: false,
	transform: 'none',
	decoration: 'none',
	size: 'md',
	margin: 'none',
	padding: 'none',
	css: null,
}

export default Text
