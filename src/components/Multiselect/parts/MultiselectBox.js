import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Icon from '../../Icon'
import { themeColor, themePadding, responsiveArray } from '../../../themes/themeUtils'

const textWrapStyles = css`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`

const MultiselectBoxStyled = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	position: relative;

	cursor: default;
	border: 1px solid ${(props) => themeColor(props.theme, 'light-4')};

	margin: 0;
	padding: ${(props) => themePadding(props.theme, 'select', props.$padding[0])};

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.sm}) {
		padding: ${(props) => themePadding(props.theme, 'select', props.$padding[1])};
	}

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.md}) {
		padding: ${(props) => themePadding(props.theme, 'select', props.$padding[2])};
	}

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.lg}) {
		padding: ${(props) => themePadding(props.theme, 'select', props.$padding[3])};
	}

	border-top-left-radius: ${(props) => props.theme.global.rounding};
	border-top-right-radius: ${(props) => props.theme.global.rounding};
	border-bottom-left-radius: ${(props) => props.$isOpen ? '0' : props.theme.global.rounding};
	border-bottom-right-radius: ${(props) => props.$isOpen ? '0' : props.theme.global.rounding};
`

const PlaceholderStyled = styled.span`
	color: ${(props) => themeColor(props.theme, 'light-6')};
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
		...rest
	} = props

	return (
		<MultiselectBoxStyled
			$width={width}
			$padding={responsiveArray(padding)}
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
				<PlaceholderStyled>
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
				color="light-6"
				margin={{ left: 'xs' }}
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
	padding: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]).isRequired,
}

export default MultiselectBox

