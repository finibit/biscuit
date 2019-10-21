import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Theme from '../Theme'
import Button from './Button'

describe('Button', () => {
	test('with color', () => {
		const component = renderer.create((
			<Theme>
				<Button color="black" />
				<Button color="white" />
				<Button color="light" />
				<Button color="primary" />
				<Button color="info" />
				<Button color="danger" />
				<Button color="success" />
				<Button color="warning" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('disabled', () => {
		const component = renderer.create((
			<Theme>
				<Button color="black" disabled />
				<Button color="white" disabled />
				<Button color="light" disabled />
				<Button color="primary" disabled />
				<Button color="info" disabled />
				<Button color="danger" disabled />
				<Button color="success" disabled />
				<Button color="warning" disabled />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('with margin', () => {
		const component = renderer.create((
			<Theme>
				<Button m={1} />
				<Button m={32} />
				<Button m="5%" />
				<Button mt={1} />
				<Button mt={32} />
				<Button mt="5%" />
				<Button ml={1} />
				<Button ml={32} />
				<Button ml="5%" />
				<Button mb={1} />
				<Button mb={32} />
				<Button mb="5%" />
				<Button mr={1} />
				<Button mr={32} />
				<Button mr="5%" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})
})
