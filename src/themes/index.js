import merge from 'deepmerge'

export { default as baseTheme } from './baseTheme'
export { default as themeGet } from './themeGet'

export const mergeTheme = (theme1, theme2) => (
	merge(theme1, theme2)
)