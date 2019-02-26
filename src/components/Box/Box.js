import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeColor, themeMargin, themePadding, responsiveArray } from '../../themes/themeUtils'

const directionMap = {
	row: 'row',
	'row-reverse': 'row-reverse',
	col: 'column',
	'col-reverse': 'column-reverse',
}

const justifyMap = {
	start: 'flex-start',
	end: 'flex-end',
	center: 'center',
	between: 'space-between',
	around: 'space-around',
	evenly: 'space-evenly',
}

const alignMap = {
	start: 'flex-start',
	end: 'flex-end',
	center: 'center',
	stretch: 'stretch',
}

const alignContentMap = {
	start: 'flex-start',
	end: 'flex-end',
	center: 'center',
	between: 'space-between',
	around: 'space-around',
	evenly: 'space-evenly',
	stretch: 'stretch',
}

const BoxStyled = styled.div`
	box-sizing: border-box;
	overflow: ${(props) => props.$overflow};
	display: flex;
	flex-direction: ${(props) => directionMap[props.$direction]};
	flex-wrap: ${(props) => props.$wrap ? 'wrap' : 'nowrap'};
	order: ${(props) => props.$order};
	justify-content: ${(props) => justifyMap[props.$justify]};
	align-items: ${(props) => alignMap[props.$align]};
	align-self: ${(props) => alignMap[props.$alignSelf]};
	align-content: ${(props) => alignContentMap[props.$alignContent]};
	background-color: ${(props) => themeColor(props.theme, props.$color)};
	width: ${(props) => props.$width};
	max-width: ${(props) => props.$width};
	height: ${(props) => props.$height};
	max-height: ${(props) => props.$height};

	margin: ${(props) => themeMargin(props.theme, 'box', props.$margin[0])};
	padding: ${(props) => themePadding(props.theme, 'box', props.$padding[0])};

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.sm}) {
		margin: ${(props) => themeMargin(props.theme, 'box', props.$margin[1])};
		padding: ${(props) => themePadding(props.theme, 'box', props.$padding[1])};
	}

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.md}) {
		margin: ${(props) => themeMargin(props.theme, 'box', props.$margin[2])};
		padding: ${(props) => themePadding(props.theme, 'box', props.$padding[2])};
	}

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.lg}) {
		margin: ${(props) => themeMargin(props.theme, 'box', props.$margin[3])};
		padding: ${(props) => themePadding(props.theme, 'box', props.$padding[3])};
	}

	${(props) => props.$css};
`
/** A flexbox container. */
const Box = (props) => {
	const {
		color,
		margin,
		padding,
		width,
		height,
		overflow,
		direction,
		wrap,
		order,
		justify,
		align,
		alignSelf,
		alignContent,
		css,
		...rest
	} = props

	return (
		<BoxStyled
			$color={color}
			$margin={responsiveArray(margin)}
			$padding={responsiveArray(padding)}
			$width={width}
			$height={height}
			$overflow={overflow}
			$direction={direction}
			$wrap={wrap}
			$order={order}
			$justify={justify}
			$align={align}
			$alignSelf={alignSelf}
			$alignContent={alignContent}
			$css={css}
			{...rest}
		/>
	)
}

Box.propTypes = {
	/** Any number of renderable nodes. */
	children: PropTypes.node,
	/** DOM element to use. */
	as: PropTypes.string,
	/** Custom color value or theme color identifier of the box background. */
	color: PropTypes.string,
	/** The amount of margin around the box. */
	margin: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
	/** The amount of padding around the box. */
	padding: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
	/** A fixed width of the box including padding. */
	width: PropTypes.string,
	/** A fixed height of the box including padding. */
	height: PropTypes.string,
	/** What to do when children do not fit in the box. */
	overflow: PropTypes.oneOf(['auto', 'scroll', 'hidden', 'visible']),
	/** The direction in which children will be laid out. */
	direction: PropTypes.oneOf(['row', 'row-reverse', 'col', 'col-reverse']),
	/** Whether children elements should wrap if they cannot fit inside the parent box. */
	wrap: PropTypes.bool,
	/** The order of the box as it is laid out in the parent box. */
	order: PropTypes.number,
	/** How the contents will be aligned along the main axis. */
	justify: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'evenly']),
	/** How the contents will be aligned along the cross axis. */
	align: PropTypes.oneOf(['start', 'end', 'center', 'stretch']),
	/** How to align self when inside another box. */
	alignSelf: PropTypes.oneOf(['auto', 'start', 'end', 'center', 'stretch']),
	/** How the contents will be aligned when there is extra space on the cross axis. */
	alignContent: PropTypes.oneOf(['start', 'end', 'center', 'stretch', 'between', 'around']),
	/** Custom styles passed to styled-components. */
	css: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

Box.defaultProps = {
	children: null,
	as: 'div',
	color: 'none',
	margin: 'none',
	padding: 'none',
	width: 'auto',
	height: 'auto',
	overflow: 'visible',
	direction: 'row',
	wrap: false,
	order: 0,
	justify: 'start',
	align: 'stretch',
	alignSelf: 'auto',
	alignContent: 'stretch',
	css: null,
}

export default Box
