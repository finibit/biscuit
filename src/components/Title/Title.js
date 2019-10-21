import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import styles from '../../styles'
import types from '../../types'

const TitleStyled = styled.h1`
	box-sizing: border-box;
	font-family: ${themeGet('title.font', themeGet('fonts.primary', 'sans-serif'))};
	font-weight: ${themeGet('title.fontWeight', themeGet('fontWeights.semi-bold', 700))};
	font-size: ${props => themeGet(`fontSizes.${7 - props.size}`, `${props.size}em`)};
	line-height: ${props => props.nowrap ? themeGet(`lineHeight.lg`, '1.5em') : themeGet(`lineHeights.sm`, '1.3em')};
	padding: 0;
	margin: 0 0 ${themeGet('title.margin', themeGet('space.2'), '0.75rem')};

	${styles.compose(
		styles.color,
		styles.text,
	)};

	${styles.nowrap};
`

const Title = (props) => (
	<TitleStyled
		{...props}
	/>
)

Title.propTypes = {
	size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
	...types.base,
	...types.color,
	...types.text,
	...types.nowrap,
}

Title.defaultProps = {
	color: 'black',
	textAlign: 'left',
	textTransform: 'none',
	textDecoration: 'none',
	nowrap: false,
}

export default Title
