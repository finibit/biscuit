import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Icon from '../../Icon'
import styles from '../../../themes'

const textWrapStyles = css`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`

const SelectBoxStyled = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	position: relative;
	cursor: default;

	${styles.border}
	${styles.bgColor}
	${styles.spacing}
	${styles.fontFamily}
	${styles.lineHeight}

	border-top-left-radius: ${(props) => props.theme.global.borders[0].radius};
	border-top-right-radius: ${(props) => props.theme.global.borders[0].radius};
	border-bottom-left-radius: ${(props) => props.$isOpen ? '0' : props.theme.global.borders[0].radius};
	border-bottom-right-radius: ${(props) => props.$isOpen ? '0' : props.theme.global.borders[0].radius};
`

const PlaceholderStyled = styled.span`
	${styles.color}
	${textWrapStyles}
`

const SelectedItemStyled = styled.span`
	${textWrapStyles};
`

const SelectBox = (props) => {
	const {
		placeholder,
		selectedItem,
		width,
		isOpen,
		onOpen,
		onClose,
		padding,
		themeElement,
		...rest
	} = props

	return (
		<SelectBoxStyled
			$element={themeElement}
			$bgColor="boxBackground"
			$border={0}
			$width={width}
			$margin="none"
			$padding={padding}
			$isOpen={isOpen}
			{...rest}
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
				<PlaceholderStyled
					$element="Select"
					$color="boxPlaceholder"
				>
					{placeholder}
				</PlaceholderStyled>
			) : (
				<SelectedItemStyled>
					{selectedItem.title}
				</SelectedItemStyled>
			)}
			<Icon
				type={isOpen ? 'arrow-up' : 'arrow-down'}
				color="boxPlaceholder"
				margin={{ left: 0 }}
				themeElement={themeElement}
			/>
		</SelectBoxStyled>
	)
}

SelectBox.propTypes = {
	placeholder: PropTypes.string.isRequired,
	selectedItem: PropTypes.oneOfType([PropTypes.object]),
	width: PropTypes.string.isRequired,
	isOpen: PropTypes.bool.isRequired,
	onOpen: PropTypes.func.isRequired,
	onClose: PropTypes.func.isRequired,
	padding: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.object,
		PropTypes.array,
	]).isRequired,
	themeElement: PropTypes.string.isRequired,
}

SelectBox.defaultProps = {
	selectedItem: null,
}

export default SelectBox

