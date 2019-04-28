import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Theme from '../Theme'
import List from '../List'

const items = ['Red', 'Green', 'Blue']

describe('List', () => {
	test('renders empty', () => {
		const component = renderer.create((
			<Theme>
				<List
					items={[]}
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})
})

describe('List', () => {
	test('renders items default', () => {
		const component = renderer.create((
			<Theme>
				<List
					items={items}
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})
})

describe('List', () => {
	test('renders items custom', () => {
		const component = renderer.create((
			<Theme>
				<List
					items={items}
					renderItem={(item) => (<List.Item>{`Custom ${item}`}</List.Item>)}
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})
})

describe('List', () => {
	test('renders with custom margin', () => {
		const component = renderer.create((
			<Theme>
				<List
					margin={3}
				/>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})
})
