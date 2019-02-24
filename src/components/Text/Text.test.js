import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Theme from '../Theme'
import Text from '../Text'

describe('Text', () => {
	test('default', () => {
		const component = renderer.create((
			<Theme>
				<Text />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('as', () => {
		const component = renderer.create((
			<Theme>
				<Text as="div" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('color', () => {
		const component = renderer.create((
			<Theme>
				<Text color="light-0" />
				<Text color="#ffaa00" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('align', () => {
		const component = renderer.create((
			<Theme>
				<Text align="left" />
				<Text align="right" />
				<Text align="center" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('nowrap', () => {
		const component = renderer.create((
			<Theme>
				<Text nowrap />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('weight', () => {
		const component = renderer.create((
			<Theme>
				<Text weight="normal" />
				<Text weight="bold" />
				<Text weight={600} />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('italic', () => {
		const component = renderer.create((
			<Theme>
				<Text italic />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('transform', () => {
		const component = renderer.create((
			<Theme>
				<Text transform="none" />
				<Text transform="uppercase" />
				<Text transform="lowercase" />
				<Text transform="capitalize" />
				<Text transform="full-width" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('decoration', () => {
		const component = renderer.create((
			<Theme>
				<Text decoration="none" />
				<Text decoration="underline" />
				<Text decoration="overline" />
				<Text decoration="line-through" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('size', () => {
		const component = renderer.create((
			<Theme>
				<Text size="xs" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('size responsive', () => {
		const component = renderer.create((
			<Theme>
				<Text size={['xs', 'sm', 'md', 'lg']} />
				<Text size={{ xs: 'xs', sm: 'sm', md: 'md', lg: 'lg' }} />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('padding', () => {
		const component = renderer.create((
			<Theme>
				<Text padding="xs" />
				<Text padding={{}} />
				<Text padding={{ top: 'xs' }} />
				<Text padding={{ right: 'xs' }} />
				<Text padding={{ bottom: 'xs' }} />
				<Text padding={{ left: 'xs' }} />
				<Text padding={{ horizontal: 'xs' }} />
				<Text padding={{ vertical: 'xs' }} />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('padding responsive', () => {
		const component = renderer.create((
			<Theme>
				<Text padding={['xs', 'sm', 'md', 'lg']} />
				<Text padding={{ xs: 'xs', sm: 'sm', md: 'md', lg: 'lg' }} />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('margin', () => {
		const component = renderer.create((
			<Theme>
				<Text margin="xs" />
				<Text margin={{}} />
				<Text margin={{ top: 'xs' }} />
				<Text margin={{ right: 'xs' }} />
				<Text margin={{ bottom: 'xs' }} />
				<Text margin={{ left: 'xs' }} />
				<Text margin={{ horizontal: 'xs' }} />
				<Text margin={{ vertical: 'xs' }} />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('margin responsive', () => {
		const component = renderer.create((
			<Theme>
				<Text margin={['xs', 'sm', 'md', 'lg']} />
				<Text margin={{ xs: 'xs', sm: 'sm', md: 'md', lg: 'lg' }} />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('css', () => {
		const component = renderer.create((
			<Theme>
				<Text css="background-color: #000;" />
				<Text css={{ backgroundColor: '#000' }} />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})
})
