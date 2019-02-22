import { scaleValue, themeMargin } from './themeUtils'

describe('Theme utils', () => {
	test.each([
		[{ global: { typeScale: 2 } }, -2, 0.25],
		[{ global: { typeScale: 2 } }, -1, 0.5],
		[{ global: { typeScale: 2 } }, 0, 1],
		[{ global: { typeScale: 2 } }, 1, 2],
		[{ global: { typeScale: 2 } }, 2, 4],
	])('Specified value is scaled by typeScale property of theme object', (theme, value, expected) => {
		expect(scaleValue(theme, value)).toEqual(expected)
	})

	test.each([
		[{ elem: { margin: { } } }, 'none', '0'],
		[{ elem: { margin: { xs: '1rem' } } }, 'xs', '1rem'],
		[{ elem: { margin: { sm: '2rem' } } }, 'sm', '2rem'],
		[{ elem: { margin: { md: '3rem' } } }, 'md', '3rem'],
		[{ elem: { margin: { lg: '4rem' } } }, 'lg', '4rem'],
		[{ elem: { margin: { xl: '5rem' } } }, 'xl', '5rem'],
		[{
			elem: {
				margin: {
					xs: '1rem',
					sm: '2rem',
					md: '3rem',
					lg: '4rem',
				},
			},
		}, {
			top: 'xs',
			right: 'sm',
			bottom: 'md',
			left: 'lg',
		}, '1rem 2rem 3rem 4rem'],
		[{
			elem: {
				margin: {
					xs: '1rem',
					md: '3rem',
				},
			},
		}, {
			vertical: 'xs',
			horizontal: 'md',
		}, '1rem 3rem 1rem 3rem'],
		[{ global: { typeScale: 2 }, elem: { margin: { xs: -2 } } }, 'xs', '0.25rem'],
		[{ global: { typeScale: 2 }, elem: { margin: { sm: -1 } } }, 'sm', '0.5rem'],
		[{ global: { typeScale: 2 }, elem: { margin: { md: 0 } } }, 'md', '1rem'],
		[{ global: { typeScale: 2 }, elem: { margin: { lg: 1 } } }, 'lg', '2rem'],
		[{ global: { typeScale: 2 }, elem: { margin: { xl: 2 } } }, 'xl', '4rem'],
	])('A string is returned that can be set to CSS margin property', (theme, size, expected) => {
		expect(themeMargin(theme, 'elem', size)).toEqual(expected)
	})
})
