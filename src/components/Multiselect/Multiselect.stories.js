import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
		selected: false,
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

class CustomMultiselect extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isOpen: false,
			items: props.items,
		}

		this.onOpen = this.onOpen.bind(this)
		this.onClose = this.onClose.bind(this)
		this.onSelect = this.onSelect.bind(this)
	}

	onOpen() {
		this.setState({
			isOpen: true,
		})
	}

	onClose() {
		this.setState({
			isOpen: false,
		})
	}

	onSelect(event, item) {
		this.setState((prevState) => ({
			items: prevState.items.map((stateItem) => ({
				title: stateItem.title,
				value: stateItem.value,
				selected: (stateItem.title === item.title ? !stateItem.selected : stateItem.selected),
			})),
		}))
	}

	render() {
		const {
			items,
			...rest
		} = this.props

		return (
			<Multiselect
				items={this.state.items}
				isOpen={this.state.isOpen}
				onOpen={this.onOpen}
				onClose={this.onClose}
				onSelect={this.onSelect}
				{...rest}
			/>
		)
	}
}

CustomMultiselect.propTypes = {
	items: PropTypes.oneOfType([PropTypes.array]),
}

CustomMultiselect.defaultProps = {
	items: [],
}

storiesOf('Multiselect', module)
	.add('default', () => (
		<Theme>
			<CustomMultiselect />
		</Theme>
	))
	.add('placeholders', () => (
		<Theme>
			<CustomMultiselect
				placeholder="Please select a color"
				emptyPlaceholder="We do not have any colors yet :-("
			/>
		</Theme>
	))
	.add('width', () => (
		<Theme>
			<CustomMultiselect
				items={colors}
				width="500px"
			/>
		</Theme>
	))
	.add('height', () => (
		<Theme>
			<CustomMultiselect
				items={colors}
				height="100px"
			/>
		</Theme>
	))
	.add('spacing', () => (
		<Theme>
			<CustomMultiselect
				items={colors}
				padding="md"
				margin={{ bottom: 'md' }}
			/>

			<CustomMultiselect
				padding="md"
			/>
		</Theme>
	))
	.add('responsive', () => (
		<Theme>
			<CustomMultiselect
				items={colors}
				padding={['xs', 'sm', 'md', 'lg']}
				margin={['xs', 'sm', 'md', 'lg']}
			/>

			<CustomMultiselect />
		</Theme>
	))
	.add('display', () => (
		<Theme>
			<CustomMultiselect
				items={colors}
				margin={{ bottom: 'md' }}
				display="selected-items"
			/>

			<CustomMultiselect
				items={colors}
				margin={{ bottom: 'md' }}
				display="selected-count"
			/>
		</Theme>
	))
