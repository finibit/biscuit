const baseTheme = {
	global: {
		baseSize: 14,
		typeScale: 1.2,
		fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
		lineHeight: '1.2em',

		colors: [
			'#000000', // black
			'#ffffff', // white
			'#3498db', // info
			'#f22613', // danger
			'#26a65b', // success
			'#f9690e', // warning
		],

		borders: [
			{
				color: { value: 1, shade: 0.15 },
				width: '1px',
				style: 'solid',
				radius: `${1.2 ** -5}rem`,
			},
			{
				color: 1,
				width: '1px',
				style: 'solid',
				radius: `${1.2 ** -5}rem`,
			},
		],

		breakpoints: ['0', '48rem', '64rem', '75rem'],
		size: [-2, -1, 0, 1, 2],
		spacing: [-5, -2, 0, 2, 5],
	},

	Box: {
		spacing: [],
	},

	Button: {
		spacing: [],
		colors: [
			0, // black
			1, // white,
			'#dfdfdf', // default
			'#a7bd0d', // primary
			2, // info
			3, // danger
			4, // success
			5, // warning
		],
	},

	Heading: {
		size: [0, 1, 2, 3, 4, 5],
		spacing: [],
	},

	Paragraph: {
		size: [],
		spacing: [],
		lineHeight: '1.5em',
	},

	Text: {
		size: [],
		spacing: [],
	},

	Image: {
		spacing: [],
	},

	Icon: {
		spacing: [],
	},

	Popover: {
		spacing: [],
	},

	Select: {
		spacing: [],
		lineHeight: '2rem',
		colors: {
			boxBackground: 1,
			boxPlaceholder: { value: 1, shade: 0.2 },
			listBackground: 1,
			listPlaceholder: { value: 1, shade: 0.2 },
			listItemBackground: { value: 1, shade: 0.03 },
		},
	},

	Tabs: {
		spacing: [],
		colors: {
			activeTabTitle: { value: 0 },
			inactiveTabTitle: { value: 1 },
			disabledTabTitle: { value: 1, shade: 0.2 },
			hoverTabBg: { value: 1, shade: 0.03 },
		},
	},

	Table: {
		spacing: [],
	},
}

export default baseTheme
