import React, { Component } from 'react'
// eslint-disable-next-line
import { storiesOf } from '@storybook/react'
import { Theme, Multiselect } from '../../../src'

const colors = [
	{
		title: 'Red',
		value: '#ff0000',
		selected: false,
	},
	{
		title: 'Green',
		value: '#00ff00',
		selected: false,
	},
	{
		title: 'Blue',
		value: '#0000ff',
		selected: true,
	},
	{
		title: 'Cyan',
		value: '#00ffff',
		selected: false,
	},
	{
		title: 'Magenta',
		value: '#ff00ff',
		selected: false,
	},
	{
		title: 'Orange',
		value: '#ff8000',
		selected: false,
	},
]

class ColorsMultiselect extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isOpen: false,
			items: colors,
		}

		this.onOpen = this.onOpen.bind(this)
		this.onSelect = this.onSelect.bind(this)
	}

	onOpen() {
		this.setState((prevState) => ({
			isOpen: !prevState.isOpen,
		}))
	}

	onSelect(value, title, selected) {
		this.setState((prevState) => ({
			items: prevState.items.map((item) => ({
				title: item.title,
				value: item.value,
				selected: (item.title === title ? selected : item.selected),
			})),
		}))
	}

	render() {
		return (
			<Multiselect
				placeholder="Colors"
				items={this.state.items}
				isOpen={this.state.isOpen}
				onOpen={this.onOpen}
				onSelect={this.onSelect}
			/>
		)
	}
}

storiesOf('Multiselect', module)
	.add('default', () => (
		<Theme>
			<Multiselect
				placeholder="Colors"
				items={colors}
				isOpen
				onOpen={() => {}}
				onSelect={() => {}}
			/>
		</Theme>
	))
	.add('controlled', () => (
		<Theme>
			<ColorsMultiselect />
		</Theme>
	))
