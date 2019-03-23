import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Theme from '../Theme'
import Select from '../Select'

const items = [
	{
		title: 'Item 1',
		value: 1,
		selected: false,
	},
	{
		title: 'Item 2',
		value: 2,
		selected: false,
	},
	{
		title: 'Item 3',
		value: 3,
		selected: false,
	},
]

const selectedItems = [
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
	{
		title: 'Item 3',
		value: 3,
		selected: false,
	},
]

describe('Select', () => {
	test('renders empty closed', () => {
		const component = renderer.create((
			<Theme>
				<Select
					items={[]}
					isOpen={false}
					onOpen={() => {}}
					onClose={() => {}}
					onSelect={() => {}}
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('renders empty opened', () => {
		const component = renderer.create((
			<Theme>
				<Select
					items={[]}
					isOpen
					onOpen={() => {}}
					onClose={() => {}}
					onSelect={() => {}}
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('renders empty with custom placeholders', () => {
		const component = renderer.create((
			<Theme>
				<Select
					items={[]}
					placeholder="Custom placeholder"
					emptyPlaceholder="Custom empty placeholder"
					isOpen
					onOpen={() => {}}
					onClose={() => {}}
					onSelect={() => {}}
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('renders with no items selected', () => {
		const component = renderer.create((
			<Theme>
				<Select
					items={items}
					isOpen
					onOpen={() => {}}
					onClose={() => {}}
					onSelect={() => {}}
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('renders with some items selected', () => {
		const component = renderer.create((
			<Theme>
				<Select
					items={selectedItems}
					isOpen
					onOpen={() => {}}
					onClose={() => {}}
					onSelect={() => {}}
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('renders with fixed width', () => {
		const component = renderer.create((
			<Theme>
				<Select
					items={items}
					isOpen
					onOpen={() => {}}
					onClose={() => {}}
					onSelect={() => {}}
					width="400px"
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('renders with fixed height', () => {
		const component = renderer.create((
			<Theme>
				<Select
					items={items}
					isOpen
					onOpen={() => {}}
					onClose={() => {}}
					onSelect={() => {}}
					height="400px"
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('renders selected items in select box', () => {
		const component = renderer.create((
			<Theme>
				<Select
					items={selectedItems}
					isOpen={false}
					onOpen={() => {}}
					onClose={() => {}}
					onSelect={() => {}}
					display="selected-items"
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('renders selected items count in select box', () => {
		const component = renderer.create((
			<Theme>
				<Select
					items={selectedItems}
					isOpen={false}
					onOpen={() => {}}
					onClose={() => {}}
					onSelect={() => {}}
					display="selected-count"
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('renders with margin', () => {
		const component = renderer.create((
			<Theme>
				<Select
					items={selectedItems}
					isOpen
					onOpen={() => {}}
					onClose={() => {}}
					onSelect={() => {}}
					margin="xl"
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('renders with responsive margin', () => {
		const component = renderer.create((
			<Theme>
				<Select
					items={selectedItems}
					isOpen
					onOpen={() => {}}
					onClose={() => {}}
					onSelect={() => {}}
					margin={['xs', 'sm', 'md', 'lg']}
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})
})

