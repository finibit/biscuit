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

const MultiselectBoxStyled = styled.div`
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

	border-top-left-radius: ${(props) => props.theme.global.rounding} !important;
	border-top-right-radius: ${(props) => props.theme.global.rounding} !important;
	border-bottom-left-radius: ${(props) => props.$isOpen ? '0' : props.theme.global.rounding} !important;
	border-bottom-right-radius: ${(props) => props.$isOpen ? '0' : props.theme.global.rounding} !important;
`

const PlaceholderStyled = styled.span`
	${styles.color}
	${textWrapStyles}
`

const SelectedItemStyled = styled.span`
	${textWrapStyles};
`

const MultiselectBox = (props) => {
	const {
		placeholder,
		selectedItems,
		width,
		isOpen,
		onOpen,
		onClose,
		display,
		padding,
		themeElement,
		...rest
	} = props

	return (
		<MultiselectBoxStyled
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
			{(selectedItems.length === 0) ? (
				<PlaceholderStyled
					$element="Select"
					$color="boxPlaceholder"
				>
					{(display === 'selected-count') ? (
						`${placeholder} (${selectedItems.length})`
					) : (
						placeholder
					)}
				</PlaceholderStyled>
			) : (
				<SelectedItemStyled>
					{(display === 'selected-items') ? (
						selectedItems.map((item, index) => (
							<span key={item}>
								{`${item}${index === (selectedItems.length - 1) ? '' : ', '}`}
							</span>
						))
					) : (
						<span>
							{`${placeholder} (${selectedItems.length})`}
						</span>
					)}
				</SelectedItemStyled>
			)}
			<Icon
				type={isOpen ? 'arrow-up' : 'arrow-down'}
				color="boxPlaceholder"
				margin={{ left: 0 }}
				themeElement={themeElement}
			/>
		</MultiselectBoxStyled>
	)
}

MultiselectBox.propTypes = {
	placeholder: PropTypes.string.isRequired,
	selectedItems: PropTypes.oneOfType([PropTypes.array]).isRequired,
	width: PropTypes.string.isRequired,
	isOpen: PropTypes.bool.isRequired,
	onOpen: PropTypes.func.isRequired,
	onClose: PropTypes.func.isRequired,
	display: PropTypes.oneOf(['selected-items', 'selected-count']).isRequired,
	padding: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.object,
		PropTypes.array,
	]).isRequired,
	themeElement: PropTypes.string.isRequired,
}

export default MultiselectBox

