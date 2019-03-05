import merge from 'deepmerge'
import check from 'check-types'
import { shade, tint } from 'polished'

const resolveValueImpl = (theme, element, prop, value, next) => {
	if (!check.assigned(element)) {
		return null
	}

	let result = theme[element]

	if (!check.assigned(result)) {
		return resolveValueImpl(theme, next, prop, value)
	}

	result = result[prop]

	if (!check.assigned(result)) {
		return resolveValueImpl(theme, next, prop, value)
	}

	result = result[value]

	if (!check.assigned(result)) {
		return resolveValueImpl(theme, next, prop, value)
	}

	return result
}

export const _resolveValue = (theme, element, prop, value) => (
	resolveValueImpl(theme, element, prop, value, 'global')
)

const resolveColorImpl = (theme, element, value, next) => {
	if (!check.assigned(element)) {
		return null
	}

	if (value === 'none') {
		return null
	}

	let result = resolveValueImpl(theme, element, 'colors', value, next)

	if (!check.assigned(result)) {
		if (check.string(value)) {
			return value
		}

		if (check.assigned(value.value)) {
			result = value
			result.value = resolveColorImpl(theme, element, value.value, next)
		}
		else {
			return null
		}
	}

	if (check.assigned(result) && check.number(result)) {
		return resolveColorImpl(theme, next, result)
	}

	if (check.assigned(result.value)) {
		result.value = resolveColorImpl(theme, next, result.value)
	}
	else {
		result = { value: result }
	}

	if (!check.assigned(result)) {
		return null
	}

	let color = result.value

	if (check.assigned(result.shade)) {
		color = shade(result.shade, result.value)
	}

	if (check.assigned(result.tint)) {
		color = tint(result.tint, result.value)
	}

	return color
}

export const _resolveColor = (theme, element, value) => (
	resolveColorImpl(theme, element, value, 'global')
)

const sizeStyles = (props, value, key, css) => {
	if (value === null || value === undefined) {
		return css ? `${css}: 0;` : '0'
	}

	if (check.number(value)) {
		let array = props.theme[props.$element][key]

		if (!check.array(array) || (array === undefined) || array.length === 0) {
			array = props.theme.global[key]
		}

		let computed = props.theme.global.typeScale ** array[value]

		if (check.number(computed)) {
			if (!Number.isInteger(computed)) {
				computed = computed.toFixed(3)
			}

			return css ? `${css}: ${computed}rem;` : `${computed}rem`
		}
	}

	if (check.string(value)) {
		if (value === 'none') {
			return css ? `${css}: 0;` : '0'
		}

		return css ? `${css}: ${value};` : `${value}rem`
	}

	if (check.array(value)) {
		let styles = ''

		value.forEach((breakpointValue, idx) => {
			const breakpointStyle = sizeStyles(props, breakpointValue, key, css)

			if (idx === 0) {
				styles += breakpointStyle
				return
			}

			styles += `
			@media only screen and (min-width: ${props.theme.global.breakpoints[idx]}) {
				${breakpointStyle}
			}`
		})

		return styles
	}

	if (check.object(value)) {
		let {
			top,
			left,
			bottom,
			right,
		} = value

		if (top === undefined) {
			top = value.vertical
		}

		if (left === undefined) {
			left = value.horizontal
		}

		if (bottom === undefined) {
			bottom = value.vertical
		}

		if (right === undefined) {
			right = value.horizontal
		}

		if (top !== undefined || left !== undefined || bottom !== undefined || right !== undefined) {
			return `${css}: ${sizeStyles(props, top, key)} ${sizeStyles(props, right, key)} ${sizeStyles(props, bottom, key)} ${sizeStyles(props, left, key)};`
		}
	}

	return `${css}: initial;`
}

const _fontFamily = (props) => {
	if (props.$fontFamily) {
		return `font-family: ${props.$fontFamily};`
	}

	return `font-family: ${props.theme.global.fontFamily};`
}

const _fontWeight = (props) => {
	if (props.$weight) {
		return `font-weight: ${props.$weight};`
	}

	return `font-weight: ${props.theme[props.$element].weight || props.$weight};`
}

const _fontStyle = (props) => {
	if (props.$italic) {
		return 'font-style: italic;'
	}

	return 'font-style: normal;'
}

const _fontSize = (props) => (
	sizeStyles(props, props.$size, 'size', 'font-size')
)

const _textAlign = (props) => {
	if (props.$align) {
		return `text-align: ${props.$align};`
	}

	return 'text-align: left;'
}

const _textDecoration = (props) => {
	if (props.$decoration) {
		return `text-decoration: ${props.$decoration};`
	}

	return 'text-decoration: none;'
}

const _textTransform = (props) => {
	if (props.$transform) {
		return `text-transform: ${props.$transform};`
	}

	return 'text-transform: none;'
}

const _border = (props) => {
	const { $element, $border } = props

	if (!check.assigned($border)) {
		return 'border: none;'
	}

	let border = _resolveValue(props.theme, $element, 'borders', $border)

	if (!check.assigned(border)) {
		if (check.object($border)) {
			border = $border
		}
		else {
			return 'border: none;'
		}
	}

	return `
		border: ${border.width} ${border.style} ${_resolveColor(props.theme, $element, border.color)};
		border-radius: ${border.radius};`
}

const _color = (props) => {
	const color = _resolveColor(props.theme, props.$element, props.$color)

	if (check.assigned(color)) {
		return `color: ${color};`
	}

	return 'color: initial;'
}

const _bgColor = (props) => {
	const color = _resolveColor(props.theme, props.$element, props.$bgColor)

	if (check.assigned(color)) {
		return `background-color: ${color};`
	}

	return 'background-color: initial;'
}

const elevationMap = [
	'',
	'box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);',
	'box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);',
	'box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);',
	'box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);',
	'box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);',
]

const _elevation = (props) => {
	const { $element, $elevation } = props

	if ($element == null || $elevation == null) {
		return ''
	}

	const elevation = elevationMap[$elevation]
	return ((elevation == null) ? '' : elevation)
}

const _padding = (props) => (
	sizeStyles(props, props.$padding, 'spacing', 'padding')
)

const _margin = (props) => (
	sizeStyles(props, props.$margin, 'spacing', 'margin')
)

const _spacing = (props) => (
	_margin(props) + _padding(props)
)

const styles = {
	fontFamily: _fontFamily,
	fontWeight: _fontWeight,
	fontStyle: _fontStyle,
	fontSize: _fontSize,
	textAlign: _textAlign,
	textDecoration: _textDecoration,
	textTransform: _textTransform,
	border: _border,
	color: _color,
	bgColor: _bgColor,
	elevation: _elevation,
	padding: _padding,
	margin: _margin,
	spacing: _spacing,
}

export const utils = {
	resolveValue: _resolveValue,
	resolveColor: _resolveColor,
}

export default styles

export const mergeTheme = (theme1, theme2) => (
	merge(theme1, theme2)
)
