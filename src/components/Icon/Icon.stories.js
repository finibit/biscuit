import React from 'react'
import { storiesOf } from '@storybook/react'

import { Theme, Icon } from '../../../src'

storiesOf('Icon', module)
	.add('types', () => (
		<Theme>
			<Icon type="arrow-up" margin="xs" />
			<Icon type="arrow-left" margin="xs" />
			<Icon type="arrow-down" margin="xs" />
			<Icon type="arrow-right" margin="xs" />
			<Icon type="check-mark" margin="xs" />
		</Theme>
	))
