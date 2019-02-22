import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withOptions } from '@storybook/addon-options'
import centered from '@storybook/addon-centered'
import Theme from '../src/components/Theme/Theme'

const req = require.context('../src/components', true, /\.stories\.js$/)

addDecorator(withInfo({
	propTablesExclude: [
		Theme,
	]
}))

addDecorator(withOptions({
	name: 'Biscuit',
}))

addDecorator(centered)

function loadStories() {
	req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
