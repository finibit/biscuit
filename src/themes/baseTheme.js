const systemFontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'

const colors = {
	black: '#1e272e',
	white: '#ffffff',
	light: '#f1f2f6',
	primary: '#ffdd59',
	info: '#0fbcf9',
	danger: '#ff3f34',
	success: '#05c46b',
	warning: '#ffa801',
}

const baseTheme = {
	breakpoints: [
		'48rem',
		'64rem',
		'75rem',
	],
	colors: colors,
	space: [
		'0',
		'8px',
		'16px',
		'32px',
		'64px',
		'128px',
	],
	fonts: {
		primary: systemFontFamily,
		secondary: systemFontFamily,
	},
	fontSizes: [
		'0.833rem',
		'1rem',
		'1.2em',
		'1.44em',
		'1.728em',
		'2.074em',
		'2.488em',
	],
	fontWeights: {
		'light': 300,
		'normal': 400,
		'medium': 500,
		'semi-bold': 600,
		'bold': 700,
	},
	lineHeights: {
		sm: '1.125',
		md: '1.25',
		lg: '1.5',
	},
	borders: {
		black: `1px solid ${colors.black}`,
		white: `1px solid ${colors.white}`,
		light: `1px solid #D9DADD`,
		primary: `1px solid ${colors.primary}`,
		info: `1px solid ${colors.info}`,
		danger: `1px solid ${colors.danger}`,
		success: `1px solid ${colors.success}`,
		warning: `1px solid ${colors.warning}`,
	},
	radii: {
		sm: '2px',
		md: '4px',
		lg: '6px',
	},
	shadows: {
		sm: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.05);',
		md: '0 3px 6px rgba(0,0,0,0.08), 0 3px 6px rgba(0,0,0,0.05);',
		lg: '0 10px 20px rgba(0,0,0,0.09), 0 6px 6px rgba(0,0,0,0.05);',
	},
	sizes: {
		sm: '32px',
		md: '64px',
		lg: '128px',
	},
}

export default baseTheme
