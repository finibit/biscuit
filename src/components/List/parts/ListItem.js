import React from 'react'
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import types from '../../../types'

const ListItemStyled = styled.div`
	margin: 0;
	padding: ${props => themeGet.padding(1)} ${props => themeGet.padding(2)};
	border-left: none;
	border-top: none;
	border-right: none;
	border-bottom: ${themeGet('borders.light')};
	color: inherit;
	font-family: inherit;

	&:last-child {
		border-bottom: none;
	}
`

const ListItem = (props) => (
	<ListItemStyled
		{...props}
	/>
)

ListItem.propTypes = {
	...types.size,
}

export default ListItem
