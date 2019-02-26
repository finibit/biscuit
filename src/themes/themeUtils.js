import merge from 'deepmerge'

export const scaleValue = (theme, value) => (
	theme.global.typeScale ** value
)

export const themeSpacing = (theme, elem, prop, size) => {
	if (size === null || size === undefined || size === 'none') {
		return '0'
	}

	if (typeof size === 'number') {
		return `${scaleValue(theme, size)}rem`
	}

	if (typeof size === 'string') {
		if (typeof theme[elem][prop][size] !== 'string' && theme[elem][prop][size] !== undefined) {
			return `${scaleValue(theme, theme[elem][prop][size])}rem`
		}

		if (theme.global && typeof theme.global[prop][size] !== 'string' && theme.global[prop][size] !== undefined) {
			return `${scaleValue(theme, theme.global[prop][size])}rem`
		}

		return theme[elem][prop][size] || (theme.global && theme.global[prop][size]) || size
	}

	return `${themeSpacing(theme, elem, prop, size.top || size.vertical)} ${themeSpacing(theme, elem, prop, size.right || size.horizontal)} ${themeSpacing(theme, elem, prop, size.bottom || size.vertical)} ${themeSpacing(theme, elem, prop, size.left || size.horizontal)}`
}

export const themeMargin = (theme, elem, size) => (
	themeSpacing(theme, elem, 'margin', size)
)

export const themePadding = (theme, elem, size) => (
	themeSpacing(theme, elem, 'padding', size)
)

export const themeSize = (theme, elem, size) => (
	themeSpacing(theme, elem, 'size', size)
)

export const themeRounding = (theme) => (
	scaleValue(theme, -2)
)

export const responsiveArray = (size) => {
	if (size === null || size === undefined) {
		return ['none', 'none', 'none', 'none']
	}

	if (typeof size === 'string') {
		return [size, size, size, size]
	}

	if (typeof size === 'number') {
		return [size, size, size, size]
	}

	if (size instanceof Array) {
		return [
			size[0] || 'none',
			size[1] || size[0] || 'none',
			size[2] || size[1] || size[0] || 'none',
			size[3] || size[2] || size[1] || size[0] || 'none',
		]
	}

	if (size.top || size.bottom || size.right || size.left || size.horizontal || size.vertical) {
		return [size, size, size, size]
	}

	return [
		size.xs || 'none',
		size.sm || size.xs || 'none',
		size.md || size.sm || size.xs || 'none',
		size.lg || size.md || size.sm || size.xs || 'none',
	]
}

export const themeColor = (theme, color) => (
	theme.global.colors[color] || color
)

export const themeColorRGBA = (theme, color, alpha) => {
	let hexColor = themeColor(theme, color)

	if (hexColor.length === 3) {
		hexColor += hexColor.slice(1, 3)
	}

	const r = parseInt(hexColor.slice(1, 3), 16)
	const g = parseInt(hexColor.slice(3, 5), 16)
	const b = parseInt(hexColor.slice(5, 7), 16)
	const a = alpha

	if (alpha) {
		return `rgba(${r},${g},${b},${a})`
	}

	return `rgb(${r},${g},${b})`
}

const mergeTheme = (theme1, theme2) => (
	merge(theme1, theme2)
)

export default mergeTheme
