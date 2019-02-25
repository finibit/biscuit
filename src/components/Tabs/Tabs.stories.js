import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'

import { Theme, Tabs } from '../../../src'

class ControlledTabs extends Component {
	constructor(props) {
		super(props)

		this.state = {
			activeIndex: 1,
		}

		this.onTabChange = this.onTabChange.bind(this)
	}

	onTabChange(event, index) {
		this.setState({
			activeIndex: index,
		})
	}

	render() {
		return (
			<Tabs
				activeIndex={this.state.activeIndex}
				onTabChange={this.onTabChange}
			>
				<Tabs.Item title="Tab 1">
				Tab content 1
				</Tabs.Item>
				<Tabs.Item title="Tab 2">
					Tab content 2
				</Tabs.Item>
				<Tabs.Item title="Tab 3">
					Tab content 3
				</Tabs.Item>
				<Tabs.Item title="Tab 4" disabled>
					Tab content 4
				</Tabs.Item>
				<Tabs.Item title="Tab 5" disabled>
					Tab content 5
				</Tabs.Item>
			</Tabs>
		)
	}
}

storiesOf('Tabs', module)
	.add('default', () => (
		<Theme>
			<Tabs
				activeIndex={1}
				onTabChange={(event, index) => {}}
			>
				<Tabs.Item title="Tab 1">
					Tab content 1
				</Tabs.Item>
				<Tabs.Item title="Tab 2">
					Tab content 2
				</Tabs.Item>
				<Tabs.Item title="Tab 3">
					Tab content 3
				</Tabs.Item>
				<Tabs.Item title="Tab 4" disabled>
					Tab content 4
				</Tabs.Item>
				<Tabs.Item title="Tab 5" disabled>
					Tab content 5
				</Tabs.Item>
			</Tabs>
		</Theme>
	))
	.add('controlled', () => (
		<Theme>
			<ControlledTabs />
		</Theme>
	))
