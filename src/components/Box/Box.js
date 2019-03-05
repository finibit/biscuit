import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import styles from '../../themes'

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
	${styles.bgColor}
	${styles.border}
	${styles.elevation}
	${styles.spacing}

	display: flex;
	flex-direction: ${(props) => props.$direction};
	flex-wrap: ${(props) => props.$wrap ? 'wrap' : 'nowrap'};
	order: ${(props) => props.$order};
	justify-content: ${(props) => justifyMap[props.$justify]};
	align-items: ${(props) => alignMap[props.$align]};
	align-self: ${(props) => alignMap[props.$alignSelf]};
	align-content: ${(props) => alignContentMap[props.$alignContent]};
	width: ${(props) => props.$width};
	max-width: ${(props) => props.$width};
	height: ${(props) => props.$height};
	max-height: ${(props) => props.$height};
	overflow: ${(props) => props.$overflow};

	${(props) => props.$css}
`
/** A flexbox container. */
const Box = (props) => {
	const {
		color,
		border,
		elevation,
		width,
		height,
		margin,
		padding,
		overflow,
		direction,
		wrap,
		order,
		justify,
		align,
		alignSelf,
		alignContent,
		themeElement,
		css,
		...rest
	} = props

	return (
		<BoxStyled
			$element={themeElement}
			$bgColor={color}
			$border={border}
			$elevation={elevation}
			$width={width}
			$height={height}
			$margin={margin}
			$padding={padding}
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

	/** Background color. */
	color: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.shape({
			value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
			shade: PropTypes.number,
			tint: PropTypes.number,
		}),
	]),

	/** Border of the box. */
	border: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.shape({
			color: PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.number,
				PropTypes.object,
			]),
			width: PropTypes.string,
			style: PropTypes.string,
		}),
	]),

	/** Elevation of the box. */
	elevation: PropTypes.number,

	/** A fixed width of the box. */
	width: PropTypes.string,

	/** A fixed height of the box. */
	height: PropTypes.string,

	/** The amount of margin around the box. */
	margin: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.object,
		PropTypes.array,
	]),

	/** The amount of padding around the box. */
	padding: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.object,
		PropTypes.array,
	]),

	/** What to do when children do not fit in the box. */
	overflow: PropTypes.oneOf(['auto', 'scroll', 'hidden', 'visible']),

	/** The direction in which children will be laid out. */
	direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),

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

	/** Theme element. */
	themeElement: PropTypes.string,

	/** Custom styles passed to styled-components. */
	css: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
}

Box.defaultProps = {
	children: null,
	as: 'div',
	color: 'none',
	border: 'none',
	elevation: 0,
	width: 'auto',
	height: 'auto',
	margin: 'none',
	padding: 'none',
	overflow: 'visible',
	direction: 'row',
	wrap: false,
	order: 0,
	justify: 'start',
	align: 'stretch',
	alignSelf: 'auto',
	alignContent: 'stretch',
	themeElement: 'Box',
	css: null,
}

export default Box
