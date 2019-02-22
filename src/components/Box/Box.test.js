import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Theme from '../Theme'
import Box from './Box'

describe('Box', () => {
	test('default', () => {
		const box = renderer.create((
			<Theme>
				<Box />
			</Theme>
		))
		expect(box.toJSON()).toMatchSnapshot()
	})

	test('as', () => {
		const box = renderer.create((
			<Theme>
				<Box as="section" />
			</Theme>
		))
		expect(box.toJSON()).toMatchSnapshot()
	})

	test('theme', () => {
		const box = renderer.create((
			<Theme theme={{ global: { colors: { brand: '#aabbcc' } } }}>
				<Box color="brand" />
				<Box color="#cafeee" />
			</Theme>
		))
		expect(box.toJSON()).toMatchSnapshot()
	})

	test('margin', () => {
		const box = renderer.create((
			<Theme>
				<Box margin="xs" />
				<Box margin={{ vertical: 'xs', horizontal: 'sm' }} />
				<Box margin={{ top: 'xs', left: 'sm', bottom: 'lg', right: 'xl' }} />
				<Box margin={{ vertical: 'xs', left: 'sm', right: 'lg' }} />
				<Box margin={{ horizontal: 'xs', top: 'sm', bottom: 'lg' }} />
				<Box margin="1em" />
				<Box margin={{ vertical: '1em', horizontal: '2em' }} />
				<Box margin={{ top: '1em', left: '2em', bottom: '3em', right: '4em' }} />
				<Box margin={{ vertical: '1em', left: '2em', right: '3em' }} />
				<Box margin={{ horizontal: '1em', top: '2em', bottom: '3em' }} />
				<Box margin={[]} />
				<Box margin={['xs']} />
				<Box margin={['xs', 'sm']} />
				<Box margin={['xs', 'sm', 'lg']} />
				<Box margin={['xs', 'sm', 'lg', 'xl']} />
			</Theme>
		))
		expect(box.toJSON()).toMatchSnapshot()
	})

	test('padding', () => {
		const box = renderer.create((
			<Theme>
				<Box padding="xs" />
				<Box padding={{ vertical: 'xs', horizontal: 'sm' }} />
				<Box padding={{ top: 'xs', left: 'sm', bottom: 'lg', right: 'xl' }} />
				<Box padding={{ vertical: 'xs', left: 'sm', right: 'lg' }} />
				<Box padding={{ horizontal: 'xs', top: 'sm', bottom: 'lg' }} />
				<Box padding="1em" />
				<Box padding={{ vertical: '1em', horizontal: '2em' }} />
				<Box padding={{ top: '1em', left: '2em', bottom: '3em', right: '4em' }} />
				<Box padding={{ vertical: '1em', left: '2em', right: '3em' }} />
				<Box padding={{ horizontal: '1em', top: '2em', bottom: '3em' }} />
				<Box padding={[]} />
				<Box padding={['xs']} />
				<Box padding={['xs', 'sm']} />
				<Box padding={['xs', 'sm', 'lg']} />
				<Box padding={['xs', 'sm', 'lg', 'xl']} />
			</Theme>
		))
		expect(box.toJSON()).toMatchSnapshot()
	})

	test('width', () => {
		const box = renderer.create((
			<Theme>
				<Box width="100px" />
			</Theme>
		))
		expect(box.toJSON()).toMatchSnapshot()
	})

	test('height', () => {
		const box = renderer.create((
			<Theme>
				<Box height="100px" />
			</Theme>
		))
		expect(box.toJSON()).toMatchSnapshot()
	})

	test('overflow', () => {
		const box = renderer.create((
			<Theme>
				<Box overflow="auto" />
				<Box overflow="scroll" />
				<Box overflow="hidden" />
				<Box overflow="visible" />
			</Theme>
		))
		expect(box.toJSON()).toMatchSnapshot()
	})

	test('direction', () => {
		const box = renderer.create((
			<Theme>
				<Box direction="row" />
				<Box direction="row-reverse" />
				<Box direction="col" />
				<Box direction="col-reverse" />
			</Theme>
		))
		expect(box.toJSON()).toMatchSnapshot()
	})

	test('wrap', () => {
		const box = renderer.create((
			<Theme>
				<Box wrap />
			</Theme>
		))
		expect(box.toJSON()).toMatchSnapshot()
	})

	test('order', () => {
		const box = renderer.create((
			<Theme>
				<Box order={1} />
			</Theme>
		))
		expect(box.toJSON()).toMatchSnapshot()
	})

	test('justify', () => {
		const box = renderer.create((
			<Theme>
				<Box justify="start" />
				<Box justify="end" />
				<Box justify="center" />
				<Box justify="between" />
				<Box justify="around" />
				<Box justify="evenly" />
			</Theme>
		))
		expect(box.toJSON()).toMatchSnapshot()
	})

	test('align', () => {
		const box = renderer.create((
			<Theme>
				<Box align="start" />
				<Box align="end" />
				<Box align="center" />
				<Box align="stretch" />
			</Theme>
		))
		expect(box.toJSON()).toMatchSnapshot()
	})

	test('alignSelf', () => {
		const box = renderer.create((
			<Theme>
				<Box alignSelf="auto" />
				<Box alignSelf="start" />
				<Box alignSelf="end" />
				<Box alignSelf="center" />
				<Box alignSelf="stretch" />
			</Theme>
		))
		expect(box.toJSON()).toMatchSnapshot()
	})

	test('alignContent', () => {
		const box = renderer.create((
			<Theme>
				<Box alignContent="start" />
				<Box alignContent="end" />
				<Box alignContent="center" />
				<Box alignContent="stretch" />
				<Box alignContent="between" />
				<Box alignContent="around" />
			</Theme>
		))
		expect(box.toJSON()).toMatchSnapshot()
	})
})
