import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Theme from '../Theme'
import Popover from '../Popover'

describe('Popover', () => {
	test('renders trigger', () => {
		const component = renderer.create((
			<Theme>
				<Popover
					trigger={<h1>Trigger</h1>}
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('renders content', () => {
		const component = renderer.create((
			<Theme>
				<Popover
					trigger={<h1>Trigger</h1>}
					content={<p>Content</p>}
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('renders with fixed width', () => {
		const component = renderer.create((
			<Theme>
				<Popover
					trigger={<h1>Trigger</h1>}
					content={<p>Content</p>}
					width="100px"
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('renders with fixed height', () => {
		const component = renderer.create((
			<Theme>
				<Popover
					trigger={<h1>Trigger</h1>}
					content={<p>Content</p>}
					height="100px"
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('renders with custom padding', () => {
		const component = renderer.create((
			<Theme>
				<Popover
					trigger={<h1>Trigger</h1>}
					content={<p>Content</p>}
					padding="10rem"
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})
})
