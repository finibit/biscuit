import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MultiselectListItem from './MultiselectListItem'
import styles from '../../../themes'

const MultiselectListStyled = styled.div`
	${styles.shadow}
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
	border-top: none !important;
	border-top-left-radius: 0 !important;
	border-top-right-radius: 0 !important;
	overflow: hidden;
	overflow-y: ${(props) => props.$height === 'auto' ? 'hidden' : 'scroll'};
	-webkit-overflow-scrolling: touch;
`

const MultiselectListPlaceholderStyled = styled.div`
	${styles.color}
	${styles.spacing}
	${styles.fontFamily}

	text-align: center;
`

const MultiselectList = (props) => {
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
		<MultiselectListStyled
			$element={themeElement}
			$border={0}
			$bgColor="listBackground"
			$width={width}
			$height={height}
			onClick={(event) => event.stopPropagation()}
			{...rest}
		>
			{(items.length === 0) ? (
				<MultiselectListPlaceholderStyled
					$element={themeElement}
					$color={{ value: 1, shade: 0.2 }}
					$margin="none"
					$padding={padding}
				>
					{placeholder}
				</MultiselectListPlaceholderStyled>
			) : (
				items.map((item) => (
					<MultiselectListItem
						key={item.title}
						item={item}
						padding={padding}
						onClick={(event) => onSelect(event, item)}
						themeElement={themeElement}
					/>
				))
			)}
		</MultiselectListStyled>
	)
}

MultiselectList.propTypes = {
	items: PropTypes.oneOfType([PropTypes.array]).isRequired,
	placeholder: PropTypes.string.isRequired,
	isOpen: PropTypes.bool.isRequired,
	width: PropTypes.string.isRequired,
	height: PropTypes.string.isRequired,
	padding: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]).isRequired,
	onSelect: PropTypes.func.isRequired,
	themeElement: PropTypes.string.isRequired,
}

export default MultiselectList
