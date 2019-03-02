import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import baseTheme from '../../themes/baseTheme'
import mergeTheme from '../../themes/themeUtils'

const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
	}

	html, body {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		font-size: ${(props) => props.theme.global.baseSize}px;
		font-family: ${(props) => props.theme.global.fontFamily};
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}
`

const Theme = (props) => {
	const {
		theme,
		global,
	} = props

	return (
		<ThemeProvider theme={mergeTheme(baseTheme, theme)}>
			<div>
				{ global && <GlobalStyle /> }
				{props.children}
			</div>
		</ThemeProvider>
	)
}

Theme.propTypes = {
	/** Any number of renderable nodes. */
	children: PropTypes.node,

	/** A custom theme object. */
	theme: PropTypes.oneOfType([PropTypes.object]),

	/** Should some styles like font-size, font-family be applied globally? */
	global: PropTypes.bool,
}

Theme.defaultProps = {
	children: null,
	theme: baseTheme,
	global: true,
}

export default Theme
