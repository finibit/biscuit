import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeMargin, responsiveArray } from '../../themes/themeUtils'

const ImageStyled = styled.img`
	flex: 1 1;
	overflow: hidden;
	object-fit: ${(props) => props.$fit};
	box-sizing: border-box;
	display: block;

	width: ${(props) => props.$width};
	max-width: ${(props) => props.$width};
	height: ${(props) => props.$height};
	max-height: ${(props) => props.$height};

	margin: ${(props) => themeMargin(props.theme, 'image', props.$margin[0])};
	padding: 0;

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.sm}) {
		margin: ${(props) => themeMargin(props.theme, 'image', props.$margin[1])};
	}

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.md}) {
		margin: ${(props) => themeMargin(props.theme, 'image', props.$margin[2])};
	}

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.lg}) {
		margin: ${(props) => themeMargin(props.theme, 'image', props.$margin[3])};
	}
`

/** An image. */
const Image = (props) => {
	const {
		fit,
		margin,
		width,
		height,
		...rest
	} = props

	return (
		<ImageStyled
			$fit={fit}
			$margin={responsiveArray(margin)}
			$width={width}
			$height={height}
			{...rest}
		/>
	)
}

Image.propTypes = {
	/** How the image should fill the container. */
	fit: PropTypes.oneOf(['cover', 'contain']),

	/** The amount of margin around the image. */
	margin: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),

	/** Fixed width of the image. */
	width: PropTypes.string,

	/** Fixed height of the image. */
	height: PropTypes.string,
}

Image.defaultProps = {
	fit: 'contain',
	margin: 'none',
	width: 'auto',
	height: 'auto',
}

export default Image
