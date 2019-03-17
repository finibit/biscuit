import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import styles from '../../themes'

const TabsItemStyled = styled.div`
	${styles.spacing};
	box-sizing: border-box;
`

const TabsItem = (props) => {
	const {
		title,
		padding,
		disabled,
		hidden,
		...rest
	} = props

	return (
		<TabsItemStyled
			$element="Tabs"
			$margin="none"
			$padding={padding}
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

	/** Should the tab be hidden? */
	hidden: PropTypes.bool,

	/** The amount of padding around the tab content. */
	padding: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.object,
		PropTypes.array,
	]),
}

TabsItem.defaultProps = {
	children: null,
	disabled: false,
	hidden: false,
	padding: { horizontal: 'none', vertical: 2 },
}

export default TabsItem
