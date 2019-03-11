import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SelectListItem from './SelectListItem'
import styles from '../../../themes'

const SelectListStyled = styled.div`
	${styles.elevation}
	${styles.border}
	${styles.bgColor}

	box-sizing: border-box;
	position: absolute;
	top: 100%;
	left: 0;
	z-index: 1;
	width: ${(props) => props.$width};
	min-width: 100%;
	max-width: ${(props) => props.$width};
	height: ${(props) => props.$height};
	max-height: ${(props) => props.$height};
	margin: 0;
	padding: 0;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
	border-bottom-left-radius: ${(props) => props.$isOpen ? '0' : props.theme.global.borders[0].radius};
	border-bottom-right-radius: ${(props) => props.$isOpen ? '0' : props.theme.global.borders[0].radius};
	border-top: none !important;
	overflow: hidden;
	overflow-y: ${(props) => props.$height === 'auto' ? 'hidden' : 'scroll'};
	-webkit-overflow-scrolling: touch;
`

const SelectListPlaceholderStyled = styled.div`
	${styles.color}
	${styles.spacing}
	${styles.fontFamily}

	text-align: center;
`

const SelectList = (props) => {
	const {
		items,
		placeholder,
		isOpen,
		width,
		height,
		padding,
		onSelect,
		themeElement,
		...rest
	} = props

	if (!isOpen) {
		return null
	}

	return (
		<SelectListStyled
			$element={themeElement}
			$border={0}
			$bgColor="listBackground"
			$width={width}
			$height={height}
			$elevation={1}
			onClick={(event) => event.stopPropagation()}
			{...rest}
		>
			{(items.length === 0) ? (
				<SelectListPlaceholderStyled
					$element={themeElement}
					$color={{ value: 1, shade: 0.2 }}
					$margin="none"
					$padding={padding}
				>
					{placeholder}
				</SelectListPlaceholderStyled>
			) : (
				items.map((item, idx) => (
					<SelectListItem
						key={item.title}
						item={item}
						padding={padding}
						onClick={(event) => onSelect(event, item, idx)}
						themeElement={themeElement}
					/>
				))
			)}
		</SelectListStyled>
	)
}

SelectList.propTypes = {
	items: PropTypes.oneOfType([PropTypes.array]).isRequired,
	placeholder: PropTypes.string.isRequired,
	isOpen: PropTypes.bool.isRequired,
	width: PropTypes.string.isRequired,
	height: PropTypes.string.isRequired,
	padding: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.object,
		PropTypes.array,
	]).isRequired,
	onSelect: PropTypes.func.isRequired,
	themeElement: PropTypes.string.isRequired,
}

export default SelectList
