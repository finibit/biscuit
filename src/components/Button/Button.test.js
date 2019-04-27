import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Theme from '../Theme'
import Button from '../Button'

describe('Button', () => {
	test('renders type', () => {
		const component = renderer.create((
			<Theme>
				<Button>Default</Button>
				<Button type="default">Default</Button>
				<Button type="primary">Primary</Button>
				<Button type="info">Info</Button>
				<Button type="danger">Danger</Button>
				<Button type="success">Success</Button>
				<Button type="warning">Warning</Button>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('renders with margin', () => {
		const component = renderer.create((
			<Theme>
				<Button margin={{ right: 3 }} />
				<Button margin="20px" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('renders with padding', () => {
		const component = renderer.create((
			<Theme>
				<Button padding={{ horizontal: 2, vertical: 1 }} />
				<Button padding="20px" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('renders with css', () => {
		const component = renderer.create((
			<Theme>
				<Button css="transition: all 1s;" />
				<Button css={{ transition: 'all 2s' }} />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})
})
