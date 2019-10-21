import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeGet } from '../../../themes'

const TabsItemStyled = styled.div`
	margin: 0;
	padding: 0${props => themeGet.padding(2)} 0;
`

const TabsItem = (props) => (
	<TabsItemStyled
		{...props}
	/>
)

TabsItem.propTypes = {
	title: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	hidden: PropTypes.bool,
}

TabsItem.defaultProps = {
	disabled: false,
	hidden: false,
}

export default TabsItem
