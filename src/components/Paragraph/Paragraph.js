import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import styles from '../../themes'

const ParagraphStyled = styled.p`
	${styles.fontFamily}
	${styles.fontSize}
	${styles.textAlign}
	${styles.spacing}
	${styles.color}

	font-weight: normal;

	${(props) => props.$css}
`

/** A paragraph. */
const Paragraph = (props) => {
	const {
		color,
		align,
		size,
		margin,
		padding,
		themeElement,
		css,
		...rest
	} = props

	return (
		<ParagraphStyled
			$element={themeElement}
			$color={color}
			$align={align}
			$size={size}
			$margin={margin}
			$padding={padding}
			$css={css}
			{...rest}
		/>
	)
}

Paragraph.propTypes = {
	/** Any number of renderable nodes. */
	children: PropTypes.node,

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

	/** Text alignment. */
	align: PropTypes.oneOf(['left', 'center', 'right']),

	/** Size of the paragraph. */
	size: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.object,
		PropTypes.array,
	]),

	/** The amount of margin around the paragraph. */
	margin: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.object,
		PropTypes.array,
	]),

	/** The amount of padding around the paragraph. */
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

Paragraph.defaultProps = {
	children: null,
	color: 0,
	align: 'left',
	size: 2,
	margin: { bottom: 0 },
	padding: 'none',
	themeElement: 'Paragraph',
	css: null,
}

export default Paragraph
