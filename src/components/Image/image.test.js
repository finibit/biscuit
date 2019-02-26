import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Theme from '../Theme'
import Image from '../Image'

describe('Image', () => {
	test('renders', () => {
		const component = renderer.create((
			<Theme>
				<Image src="image.png" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('renders with fixed width', () => {
		const component = renderer.create((
			<Theme>
				<Image
					src="image.png"
					width="100px"
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('renders with fixed height', () => {
		const component = renderer.create((
			<Theme>
				<Image
					src="image.png"
					height="100px"
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('renders with custom margin', () => {
		const component = renderer.create((
			<Theme>
				<Image
					src="image.png"
					margin="xl"
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})
})
