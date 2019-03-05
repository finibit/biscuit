import { utils } from '../themes/themeUtils'

describe('utils.resolveValue', () => {
	test('given an index returns value defined for an element', () => {
		expect(utils.resolveValue({
			element: { values: ['element'] },
		}, 'element', 'values', 0)).toEqual('element')
	})

	test('given a string returns value defined for an element', () => {
		expect(utils.resolveValue({
			element: { values: { value: 'element' } },
		}, 'element', 'values', 'value')).toEqual('element')
	})

	test('given an index returns value defined globally', () => {
		expect(utils.resolveValue({
			global: { values: ['global'] },
		}, 'element', 'values', 0)).toEqual('global')

		expect(utils.resolveValue({
			global: { values: ['global'] },
			element: { values: [] },
		}, 'element', 'values', 0)).toEqual('global')
	})

	test('given an index returns null if value cannot be resolved', () => {
		expect(utils.resolveValue({
			global: {},
		}, 'element', 'values', 0)).toBeNull()

		expect(utils.resolveValue({
			global: {},
			element: {},
		}, 'element', 'values', 0)).toBeNull()
	})

	test('given a string returns value defined globally', () => {
		expect(utils.resolveValue({
			global: { values: { value: 'global' } },
		}, 'element', 'values', 'value')).toEqual('global')

		expect(utils.resolveValue({
			global: { values: { value: 'global' } },
			element: { values: {} },
		}, 'element', 'values', 'value')).toEqual('global')
	})

	test('given a string returns null if value cannot be resolved', () => {
		expect(utils.resolveValue({
			global: {},
		}, 'element', 'values', 'value')).toBeNull()

		expect(utils.resolveValue({
			global: {},
			element: {},
		}, 'element', 'values', 'value')).toBeNull()
	})
})

describe('utils.resolveColor', () => {
	test('given an index returns value defined for an element', () => {
		expect(utils.resolveColor({
			element: { colors: ['#ff0000'] },
		}, 'element', 0)).toEqual('#ff0000')
	})

	test('given an index returns value defined globally', () => {
		expect(utils.resolveColor({
			global: { colors: ['#ff0000'] },
			element: { colors: [] },
		}, 'element', 0)).toEqual('#ff0000')
	})

	test('given a string returns value defined for an element', () => {
		expect(utils.resolveColor({
			element: { colors: { value: '#ff0000' } },
		}, 'element', 'value')).toEqual('#ff0000')
	})

	test('given a string with color returns that string', () => {
		expect(utils.resolveColor({
			global: { colors: {} },
		}, 'element', 'value')).toEqual('value')
	})

	test('return global color value if element color is a number', () => {
		expect(utils.resolveColor({
			global: { colors: ['#ff0000', '#00ff00'] },
			element: { colors: [1] },
		}, 'element', 0)).toEqual('#00ff00')
	})

	test('given object with index returns value defined for an element', () => {
		expect(utils.resolveColor({
			element: { colors: ['#ff0000'] },
		}, 'element', { value: 0 })).toEqual('#ff0000')
	})
})
