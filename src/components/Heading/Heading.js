import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import styles from '../../themes'

const HeadingStyled = styled.h1`
	${styles.fontFamily}
	${styles.fontWeight}
	${styles.fontStyle}
	${styles.fontSize}
	${styles.lineHeight}
	${styles.textAlign}
	${styles.textDecoration}
	${styles.textTransform}
	${styles.spacing}
	${styles.color}
	${(props) => props.$css}
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
		themeElement,
		css,
		...rest
	} = props

	return (
		<HeadingStyled
			as={`h${level}`}
			$element={themeElement}
			$level={level}
			$color={color}
			$align={align}
			$weight={weight}
			$italic={italic}
			$transform={transform}
			$decoration={decoration}
			$size={size || 6 - level}
			$margin={margin}
			$padding={padding}
			$css={css}
			{...rest}
		/>
	)
}

Heading.propTypes = {
	/** Any number of renderable nodes. */
	children: PropTypes.node,

	/** The level of the heading. Corresponds to h1, h2, h3, h4, h5, h6 DOM elements. */
	level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,

	/** Text color. */
	color: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.shape({
			value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
			shade: PropTypes.number,
			tint: PropTypes.number,
		}),
	]),

	/** Font weight. */
	weight: PropTypes.oneOfType([PropTypes.oneOf(['normal', 'bold']), PropTypes.number]),

	/** Heading alignment. */
	align: PropTypes.oneOf(['left', 'right', 'center']),

	/** Use italic variant of the font. */
	italic: PropTypes.bool,

	/** Text transformation. */
	transform: PropTypes.oneOf(['none', 'uppercase', 'lowercase', 'capitalize', 'full-width']),

	/** Text decoration. */
	decoration: PropTypes.oneOf(['none', 'underline', 'overline', 'line-through']),

	/** Size of the heading. */
	size: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.object,
		PropTypes.array,
	]),

	/** The amount of margin around the heading. */
	margin: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.object,
		PropTypes.array,
	]),

	/** The amount of padding around the heading. */
	padding: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.object,
		PropTypes.array,
	]),

	/** Theme element. */
	themeElement: PropTypes.string,

	/** Custom styles passed to styled-components. */
	css: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
}

Heading.defaultProps = {
	children: null,
	color: 0,
	weight: 'normal',
	align: 'left',
	italic: false,
	transform: 'none',
	decoration: 'none',
	size: null,
	margin: { bottom: 0 },
	padding: 'none',
	themeElement: 'Heading',
	css: null,
}

export default Heading
