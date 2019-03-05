const path = require('path')

module.exports = {
	title: 'Biscuit',
	skipComponentsWithoutExample: true,
	pagePerSection: true,
	sections: [
		{
			name: 'Introduction',
			content: 'src/README.md',
		},
		{
			name: 'Documentation',
			sections: [
				{
					name: 'Components',
					content: 'src/components/README.md',
					components: 'src/components/**/[A-Z]*.js',
					exampleMode: 'expand',
					usageMode: 'collapse',
				},
			],
			sectionDepth: 2,
		},
	],
	ignore: [
		'**/__snapshots__/**',
		'**/parts/**',
		'**/*.test.{js,jsx,ts,tsx}',
		'**/*.spec.{js,jsx,ts,tsx}',
		'**/*.d.ts',
	],
	styleguideComponents: {
		Wrapper: path.join(__dirname, 'src/Wrapper'),
	},
	getComponentPathLine: (componentPath) => {
		const name = path.basename(componentPath, '.js')
		return `import { ${name} } from '@finibit/biscuit'`
	},
}
