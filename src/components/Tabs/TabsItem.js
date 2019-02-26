import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themePadding, responsiveArray } from '../../themes/themeUtils'

const TabsItemStyled = styled.div`
	box-sizing: border-box;

	margin: 0;
	padding: ${(props) => themePadding(props.theme, 'tabs', props.$padding[0])};

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.sm}) {
		padding: ${(props) => themePadding(props.theme, 'tabs', props.$padding[1])};
	}

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.md}) {
		padding: ${(props) => themePadding(props.theme, 'tabs', props.$padding[2])};
	}

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.lg}) {
		padding: ${(props) => themePadding(props.theme, 'tabs', props.$padding[3])};
	}
`

const TabsItem = (props) => {
	const {
		padding,
		...rest
	} = props

	return (
		<TabsItemStyled
			$padding={responsiveArray(padding)}
			{...rest}
		/>
	)
}

TabsItem.propTypes = {
	/** Any number of renderable nodes. */
	children: PropTypes.node,

	/** The title of the tab. */
	title: PropTypes.string.isRequired,

	/** Is this tab disabled? */
	disabled: PropTypes.bool,

	/** The amount of padding around the tab content. */
	padding: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
}

TabsItem.defaultProps = {
	children: null,
	disabled: false,
	padding: { horizontal: 'none', vertical: 'md' },
}

export default TabsItem
