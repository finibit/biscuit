import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeColor, themeSize, themeMargin, themePadding, responsiveArray } from '../../themes/themeUtils'

const ParagraphStyled = styled.p`
	color: ${(props) => themeColor(props.theme, props.$color)};
	font-family: ${(props) => props.theme.global.fontFamily};
	font-size: ${(props) => themeSize(props.theme, 'paragraph', props.$size[0])};
	font-style: normal;
	font-weight: normal;
	text-decoration: none;
	text-transform: none;
	text-align: ${(props) => props.$align};

	margin: ${(props) => themeMargin(props.theme, 'paragraph', props.$margin[0])};
	padding: ${(props) => themePadding(props.theme, 'paragraph', props.$padding[0])};

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.sm}) {
		font-size: ${(props) => themeSize(props.theme, 'paragraph', props.$size[1])};
		margin: ${(props) => themeMargin(props.theme, 'paragraph', props.$margin[1])};
		padding: ${(props) => themePadding(props.theme, 'paragraph', props.$padding[1])};
	}

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.md}) {
		font-size: ${(props) => themeSize(props.theme, 'paragraph', props.$size[2])};
		margin: ${(props) => themeMargin(props.theme, 'paragraph', props.$margin[2])};
		padding: ${(props) => themePadding(props.theme, 'paragraph', props.$padding[2])};
	}

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.lg}) {
		font-size: ${(props) => themeSize(props.theme, 'paragraph', props.$size[3])};
		margin: ${(props) => themeMargin(props.theme, 'paragraph', props.$margin[3])};
		padding: ${(props) => themePadding(props.theme, 'paragraph', props.$padding[3])};
	}

	${(props) => props.$css};
`

/** A paragraph. */
const Paragraph = (props) => {
	const {
		color,
		align,
		size,
		margin,
		padding,
		css,
		...rest
	} = props

	return (
		<ParagraphStyled
			$color={color}
			$align={align}
			$size={responsiveArray(size)}
			$margin={responsiveArray(margin)}
			$padding={responsiveArray(padding)}
			$css={css}
			{...rest}
		/>
	)
}

Paragraph.propTypes = {
	/** Custom color value or theme color identifier of the heading color. */
	color: PropTypes.string,
	/** Text alignment. */
	align: PropTypes.oneOf(['left', 'center', 'right']),
	/** Size of the heading. */
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
	/** The amount of margin around the box. */
	margin: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
	/** The amount of padding around the box. */
	padding: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
	/** Custom styles passed to styled-components. */
	css: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

Paragraph.defaultProps = {
	color: 'dark-0',
	align: 'left',
	size: 'md',
	margin: { horizontal: 'none', top: 'none', bottom: 'xs' },
	padding: 'none',
	css: null,
}

export default Paragraph
