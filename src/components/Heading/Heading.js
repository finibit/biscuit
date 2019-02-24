import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeColor, themeSize, themeMargin, themePadding, responsiveArray } from '../../themes/themeUtils'

const sizeMap = [
	'xl',
	'lg',
	'md',
	'sm',
	'xs',
	0,
]

const HeadingStyled = styled.h1`
	font-family: ${(props) => props.theme.global.fontFamily};
	font-weight: ${(props) => props.$weight};
	font-style: ${(props) => props.$italic ? 'italic' : 'normal'};
	color: ${(props) => themeColor(props.theme, props.$color)};

	text-align: ${(props) => props.$align};
	text-decoration: ${(props) => props.$decoration};
	text-transform: ${(props) => props.$transform};

	font-size: ${(props) => themeSize(props.theme, 'heading', props.$size[0])};
	margin: ${(props) => themeMargin(props.theme, 'heading', props.$margin[0])};
	padding: ${(props) => themePadding(props.theme, 'heading', props.$padding[0])};

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.sm}) {
		font-size: ${(props) => themeSize(props.theme, 'heading', props.$size[1])};
		margin: ${(props) => themeMargin(props.theme, 'heading', props.$margin[1])};
		padding: ${(props) => themePadding(props.theme, 'heading', props.$padding[1])};
	}

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.md}) {
		font-size: ${(props) => themeSize(props.theme, 'heading', props.$size[2])};
		margin: ${(props) => themeMargin(props.theme, 'heading', props.$margin[2])};
		padding: ${(props) => themePadding(props.theme, 'heading', props.$padding[2])};
	}

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.lg}) {
		font-size: ${(props) => themeSize(props.theme, 'heading', props.$size[3])};
		margin: ${(props) => themeMargin(props.theme, 'heading', props.$margin[3])};
		padding: ${(props) => themePadding(props.theme, 'heading', props.$padding[3])};
	}

	${(props) => props.$css};
`

/** A text heading. */
const Heading = (props) => {
	const {
		level,
		color,
		align,
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

	let propSize = size

	if (propSize === null) {
		propSize = sizeMap[level - 1]
	}

	return (
		<HeadingStyled
			as={`h${level}`}
			$level={level}
			$color={color}
			$align={align}
			$weight={weight}
			$italic={italic}
			$transform={transform}
			$decoration={decoration}
			$size={responsiveArray(propSize)}
			$margin={responsiveArray(margin)}
			$padding={responsiveArray(padding)}
			$css={css}
			{...rest}
		/>
	)
}

Heading.propTypes = {
	/** Any number of renderable nodes. */
	children: PropTypes.node,
	/** Level of the heading. Corresponds to h1, h2, h3, h4, h5, h6 DOM elements. */
	level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
	/** Custom color value or theme color identifier of the heading color. */
	color: PropTypes.string,
	/** Text alignment. */
	align: PropTypes.oneOf(['left', 'right', 'center']),
	/** Font weight. */
	weight: PropTypes.oneOfType([PropTypes.oneOf(['normal', 'bold']), PropTypes.number]),
	/** Use italic version of the font. */
	italic: PropTypes.bool,
	/** Text transformation. */
	transform: PropTypes.oneOf(['none', 'uppercase', 'lowercase', 'capitalize', 'full-width']),
	/** Text decoration. */
	decoration: PropTypes.oneOf(['none', 'underline', 'overline', 'line-through']),
	/** Size of the heading. */
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
	/** The amount of margin around the heading. */
	margin: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
	/** The amount of padding around the heading. */
	padding: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
	/** Custom styles passed to styled-components. */
	css: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

Heading.defaultProps = {
	children: null,
	color: 'dark-0',
	align: 'left',
	weight: 'normal',
	italic: false,
	transform: 'none',
	decoration: 'none',
	size: null,
	margin: { horizontal: 'none', top: 'none', bottom: 'xs' },
	padding: 'none',
	css: null,
}

export default Heading
