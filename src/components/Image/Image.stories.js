import React from 'react'
import { storiesOf } from '@storybook/react'

import { Theme, Image } from '../../../src'

storiesOf('Image', module)
	.add('default', () => (
		<Theme>
			<Image src="https://picsum.photos/200" />
		</Theme>
	))
	.add('fixed size', () => (
		<Theme>
			<Image
				src="https://picsum.photos/200"
				width="500px"
				height="400px"
			/>
		</Theme>
	))
