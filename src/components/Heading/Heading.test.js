import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Theme from '../Theme'
import Heading from '../Heading'

describe('Heading', () => {
	test('level', () => {
		const component = renderer.create((
			<Theme>
				<Heading level={1} />
				<Heading level={2} />
				<Heading level={3} />
				<Heading level={4} />
				<Heading level={5} />
				<Heading level={6} />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('color', () => {
		const component = renderer.create((
			<Theme>
				<Heading level={1} color="light-0" />
				<Heading level={2} color="#aabbcc" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('align', () => {
		const component = renderer.create((
			<Theme>
				<Heading level={1} align="left" />
				<Heading level={1} align="right" />
				<Heading level={1} align="center" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('weight', () => {
		const component = renderer.create((
			<Theme>
				<Heading level={1} weight="normal" />
				<Heading level={2} weight="bold" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('italic', () => {
		const component = renderer.create((
			<Theme>
				<Heading level={1} italic />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('transform', () => {
		const component = renderer.create((
			<Theme>
				<Heading level={1} transform="none" />
				<Heading level={2} transform="uppercase" />
				<Heading level={3} transform="lowercase" />
				<Heading level={4} transform="capitalize" />
				<Heading level={5} transform="full-width" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('decoration', () => {
		const component = renderer.create((
			<Theme>
				<Heading level={1} decoration="none" />
				<Heading level={2} decoration="underline" />
				<Heading level={3} decoration="overline" />
				<Heading level={4} decoration="line-through" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('size', () => {
		const component = renderer.create((
			<Theme>
				<Heading level={1} size="xs" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('size responsive', () => {
		const component = renderer.create((
			<Theme>
				<Heading level={1} size={['xs', 'sm', 'md', 'lg']} />
				<Heading level={1} size={{ xs: 'xs', sm: 'sm', md: 'md', lg: 'lg' }} />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('padding', () => {
		const component = renderer.create((
			<Theme>
				<Heading level={1} padding="xs" />
				<Heading level={1} padding={{}} />
				<Heading level={1} padding={{ top: 'xs' }} />
				<Heading level={1} padding={{ right: 'xs' }} />
				<Heading level={1} padding={{ bottom: 'xs' }} />
				<Heading level={1} padding={{ left: 'xs' }} />
				<Heading level={1} padding={{ horizontal: 'xs' }} />
				<Heading level={1} padding={{ vertical: 'xs' }} />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('padding responsive', () => {
		const component = renderer.create((
			<Theme>
				<Heading level={1} padding={['xs', 'sm', 'md', 'lg']} />
				<Heading level={1} padding={{ xs: 'xs', sm: 'sm', md: 'md', lg: 'lg' }} />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('margin', () => {
		const component = renderer.create((
			<Theme>
				<Heading level={1} margin="xs" />
				<Heading level={1} margin={{}} />
				<Heading level={1} margin={{ top: 'xs' }} />
				<Heading level={1} margin={{ right: 'xs' }} />
				<Heading level={1} margin={{ bottom: 'xs' }} />
				<Heading level={1} margin={{ left: 'xs' }} />
				<Heading level={1} margin={{ horizontal: 'xs' }} />
				<Heading level={1} margin={{ vertical: 'xs' }} />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('margin responsive', () => {
		const component = renderer.create((
			<Theme>
				<Heading level={1} margin={['xs', 'sm', 'md', 'lg']} />
				<Heading level={1} margin={{ xs: 'xs', sm: 'sm', md: 'md', lg: 'lg' }} />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('css', () => {
		const component = renderer.create((
			<Theme>
				<Heading level={1} css="background-color: #000;" />
				<Heading level={2} css={{ backgroundColor: '#000' }} />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})
})
