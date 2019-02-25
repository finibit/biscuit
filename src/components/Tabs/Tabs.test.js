import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Theme from '../Theme'
import Tabs from '../Tabs'

describe('Tabs', () => {
	test('navigation is rendered', () => {
		const component = renderer.create((
			<Theme>
				<Tabs
					activeIndex={1}
					onTabChange={() => {}}
				>
					<Tabs.Item title="" />
					<Tabs.Item title="" />
				</Tabs>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('navigation is rendered with custom padding', () => {
		const component = renderer.create((
			<Theme>
				<Tabs
					activeIndex={0}
					onTabChange={() => {}}
					padding="xl"
				>
					<Tabs.Item title="" />
				</Tabs>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('disabled navigation item is rendered', () => {
		const component = renderer.create((
			<Theme>
				<Tabs
					activeIndex={0}
					onTabChange={() => {}}
				>
					<Tabs.Item title="" />
					<Tabs.Item title="" disabled />
				</Tabs>
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})
})

describe('TabsItem', () => {
	test('is rendered', () => {
		const component = renderer.create((
			<Theme>
				<Tabs.Item title="Item" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('is rendered with custom padding', () => {
		const component = renderer.create((
			<Theme>
				<Tabs.Item title="Item" padding="none" />
				<Tabs.Item title="Item" padding="1rem" />
				<Tabs.Item title="Item" padding="xs" />
				<Tabs.Item title="Item" padding={{ horizontal: 'xs', vertical: 'sm' }} />
				<Tabs.Item title="Item" padding={{ top: 'xs', left: 'sm', bottom: 'lg', right: 'xl' }} />
				<Tabs.Item title="Item" padding={['xs', 'sm', 'lg', 'xl']} />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})
})
