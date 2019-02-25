import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Theme from '../Theme'
import Multiselect from '../Multiselect'

const items = [
	{
		title: 'Item 1',
		value: 1,
		selected: false,
	},
	{
		title: 'Item 2',
		value: 2,
		selected: true,
	},
]

describe('Multiselect', () => {
	test('renders without items', () => {
		const component = renderer.create((
			<Theme>
				<Multiselect
					items={[]}
					isOpen={false}
					onOpen={() => {}}
					onSelect={() => {}}
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('renders closed', () => {
		const component = renderer.create((
			<Theme>
				<Multiselect
					items={items}
					isOpen={false}
					onOpen={() => {}}
					onSelect={() => {}}
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('renders opened', () => {
		const component = renderer.create((
			<Theme>
				<Multiselect
					items={items}
					isOpen
					onOpen={() => {}}
					onSelect={() => {}}
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('renders selected items count', () => {
		const component = renderer.create((
			<Theme>
				<Multiselect
					items={items}
					display="selected-count"
					isOpen
					onOpen={() => {}}
					onSelect={() => {}}
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('renders selected items', () => {
		const component = renderer.create((
			<Theme>
				<Multiselect
					items={items}
					display="selected-items"
					isOpen
					onOpen={() => {}}
					onSelect={() => {}}
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('renders with padding', () => {
		const component = renderer.create((
			<Theme>
				<Multiselect
					items={items}
					isOpen
					onOpen={() => {}}
					onSelect={() => {}}
					padding="lg"
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('renders with margin', () => {
		const component = renderer.create((
			<Theme>
				<Multiselect
					items={items}
					isOpen
					onOpen={() => {}}
					onSelect={() => {}}
					margin="lg"
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('renders with fixed width', () => {
		const component = renderer.create((
			<Theme>
				<Multiselect
					items={items}
					isOpen
					onOpen={() => {}}
					onSelect={() => {}}
					width="100px"
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('renders with fixed height', () => {
		const component = renderer.create((
			<Theme>
				<Multiselect
					items={items}
					isOpen
					onOpen={() => {}}
					onSelect={() => {}}
					width="100px"
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})
})
