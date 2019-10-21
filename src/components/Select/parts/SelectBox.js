import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { themeGet } from '../../../themes'
import styles from '../../../styles'
import Icon from '../../Icon'

const nowrapStyles = css`
	${styles.nowrap({ nowrap: true })};
`

const spaceStyles = css`
	margin: 0;
	padding: ${props => themeGet.padding(1)} ${props => themeGet.padding(2)};
`

const colorStyles = css`
	color: ${themeGet.colorText('black')};
	background-color: ${themeGet.color('white', '#fff')};
`

const borderStyles = css`
	border: ${themeGet.border('light')};
	border-radius: ${themeGet.borderRadius('md')};
`

const SelectBoxStyled = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	position: relative;
	cursor: pointer;
	line-height: ${themeGet.lineHeight('lg')};

	${spaceStyles};
	${colorStyles};
	${borderStyles};
`

const PlaceholderStyled = styled.span`
	box-sizing: border-box;
	color: ${themeGet.colorText('white', 0.7)};
	${nowrapStyles};
`

const SelectedItemStyled = styled.span`
	box-sizing: border-box;
	color: ${themeGet.colorText('white')};
	${nowrapStyles};
`

const SelectBox = (props) => {
	const {
		placeholder,
		selectedItem,
		isOpen,
		onOpen,
		onClose,
	} = props

	return (
		<SelectBoxStyled
			isOpen={isOpen}
			onClick={() => {
				if (isOpen) {
					onClose()
				}
				else {
					onOpen()
				}
			}}
		>
 			{(selectedItem == null) ? (
 				<PlaceholderStyled>
 					{placeholder}
 				</PlaceholderStyled>
 			) : (
 				<SelectedItemStyled>
 					<span>{selectedItem}</span>
 				</SelectedItemStyled>
			 )}
			 <Icon
				type={isOpen ? 'arrow-up' : 'arrow-down'}
				color={themeGet.colorText('white', 0.85)(props)}
				marginLeft={2}
 			 />
		</SelectBoxStyled>
	)
}

SelectBox.propTypes = {
	placeholder: PropTypes.string.isRequired,
	selectedItem: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	isOpen: PropTypes.bool.isRequired,
	onOpen: PropTypes.func.isRequired,
	onClose: PropTypes.func.isRequired,	
}

SelectBox.defaultProps = {
	selectedItem: null,
}

export default SelectBox
