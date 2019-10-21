import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Theme from '../Theme'
import Box from './Box'

describe('Box', () => {
	test('default', () => {
		const component = renderer.create((
			<Theme>
				<Box />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('with margin', () => {
		const component = renderer.create((
			<Theme>
				<Box m={1} />
				<Box m={32} />
				<Box m="5%" />
				<Box mt={1} />
				<Box mt={32} />
				<Box mt="5%" />
				<Box ml={1} />
				<Box ml={32} />
				<Box ml="5%" />
				<Box mb={1} />
				<Box mb={32} />
				<Box mb="5%" />
				<Box mr={1} />
				<Box mr={32} />
				<Box mr="5%" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('with padding', () => {
		const component = renderer.create((
			<Theme>
				<Box p={1} />
				<Box p={32} />
				<Box p="5%" />
				<Box pt={1} />
				<Box pt={32} />
				<Box pt="5%" />
				<Box pl={1} />
				<Box pl={32} />
				<Box pl="5%" />
				<Box pb={1} />
				<Box pb={32} />
				<Box pb="5%" />
				<Box pr={1} />
				<Box pr={32} />
				<Box pr="5%" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('with size', () => {
		const component = renderer.create((
			<Theme>
				<Box size="sm" />
				<Box size={64} />
				<Box size="5%" />
				<Box width="sm" />
				<Box width={64} />
				<Box width="5%" />
				<Box height="sm" />
				<Box height={64} />
				<Box height="5%" />
				<Box minWidth={1} />
				<Box minWidth={64} />
				<Box minWidth="5%" />
				<Box minHeight={1} />
				<Box minHeight={64} />
				<Box minHeight="5%" />
				<Box maxWidth={1} />
				<Box maxWidth={32} />
				<Box maxWidth="5%" />
				<Box maxHeight={1} />
				<Box maxHeight={32} />
				<Box maxHeight="5%" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('with overflow', () => {
		const component = renderer.create((
			<Theme>
				<Box overflow="hidden" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('with color background', () => {
		const component = renderer.create((
			<Theme>
				<Box bg="primary" />
				<Box bg="#012345" />
				<Box bg="cyan" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('with image background', () => {
		const component = renderer.create((
			<Theme>
				<Box backgroundImage="url('https://picsum.photos/128')" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('with border', () => {
		const component = renderer.create((
			<Theme>
				<Box border="primary" />
				<Box border="1px solid #012345" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('with shadow', () => {
		const component = renderer.create((
			<Theme>
				<Box boxShadow="md" />
				<Box boxShadow="10px 10px 5px 0px rgba(0,0,0,0.75)" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('with position', () => {
		const component = renderer.create((
			<Theme>
				<Box position="relative" />
				<Box top={1} />
				<Box top={32} />
				<Box top="5%" />
				<Box left={1} />
				<Box left={32} />
				<Box left="5%" />
				<Box bottom={1} />
				<Box bottom={32} />
				<Box bottom="5%" />
				<Box right={1} />
				<Box right={32} />
				<Box right="5%" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('with z-index', () => {
		const component = renderer.create((
			<Theme>
				<Box zIndex={1} />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('is flex', () => {
		const component = renderer.create((
			<Theme>
				<Box flex="1 1 auto" />
				<Box alignItems="center" />
				<Box alignContent="center" />
				<Box justifyContent="center" />
				<Box flexWrap="wrap" />
				<Box flexBasis="auto" />
				<Box flexDirection="column" />
				<Box justifySelf="center" />
				<Box alignSelf="center" />
				<Box order="2" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})
})
