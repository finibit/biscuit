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

const Theme = (props) => (
	<ThemeProvider theme={mergeTheme(baseTheme, props.theme)}>
		<div>
			<GlobalStyle />
			{props.children}
		</div>
	</ThemeProvider>
)

Theme.propTypes = {
	children: PropTypes.node,
	theme: PropTypes.oneOfType([PropTypes.object]),
}

Theme.defaultProps = {
	children: null,
	theme: baseTheme,
}

export default Theme
