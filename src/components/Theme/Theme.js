import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { mergeTheme, baseTheme, themeGet } from '../../themes'
import types from '../../types'

const GlobalStyle = createGlobalStyle`
	html, body {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}

	body {
		color: ${themeGet.color('black', 'inherit')};
		font-family: ${themeGet.fontFamily('secondary')};
		-webkit-font-smoothing: antialiased;
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
	global: PropTypes.bool,
	...types.theme,
}

Theme.defaultProps = {
	global: true,
	theme: baseTheme,
}

export default Theme
