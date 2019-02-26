import React from 'react'
import { storiesOf } from '@storybook/react'

import { Theme, Popover } from '../../../src'

storiesOf('Popover', module)
	.add('default', () => (
		<Theme>
			<Popover
				trigger={<h4>Hover me</h4>}
				content="Hello!"
			/>
		</Theme>
	))
	.add('fixed size', () => (
		<Theme>
			<Popover
				trigger={<h4>Hover me</h4>}
				content="This popover is 300px wide and 100px tall."
				width="300px"
				height="100px"
			/>
		</Theme>
	))
	.add('padding', () => (
		<Theme>
			<Popover
				trigger={<h4>Hover me</h4>}
				content="This popover has custom padding."
				padding="xl"
			/>
		</Theme>
	))
