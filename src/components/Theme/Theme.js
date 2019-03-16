import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import baseTheme from '../../themes/baseTheme'
import { mergeTheme } from '../../themes/themeUtils'

const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	html, body {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		font-family: ${(props) => props.theme.global.fontFamily};
		font-size: ${(props) => props.theme.global.baseSize}px;
	}

	table, thead, tbody, tfoot, th, tr, td {
		font-family: ${(props) => props.theme.global.fontFamily};
		font-size: ${(props) => props.theme.global.baseSize}px;
		font-weight: normal;
		margin: 0;
		padding: 0;
	}

	${(props) => props.$css}
`

const Theme = (props) => {
	const {
		theme,
		global,
		css,
	} = props

	return (
		<ThemeProvider theme={mergeTheme(baseTheme, theme)}>
			<div>
				{ global && <GlobalStyle $css={css} /> }
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

	/** Custom global styles passed to styled-components. */
	css: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
}

Theme.defaultProps = {
	children: null,
	theme: baseTheme,
	global: true,
	css: null,
}

export default Theme
