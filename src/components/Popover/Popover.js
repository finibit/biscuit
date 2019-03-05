import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PopoverArrow from './parts/PopoverArrow'
import PopoverContent from './parts/PopoverContent'

const PopoverStyled = styled.div`
	box-sizing: border-box;
	position: relative;
	display: inline-block;
`

const Popover = (props) => {
	const {
		trigger,
		content,
		width,
		height,
		padding,
		...rest
	} = props

	return (
		<PopoverStyled
			{...rest}
		>
			{trigger}
			<PopoverContent
				$element="Popover"
				$parent={PopoverStyled}
				$color={0}
				$bgColor={1}
				$margin="none"
				$padding={padding}
				$width={width}
				$height={height}
				$border={0}
				$elevation={2}
			>
				{content}
				<PopoverArrow
					$element="Popover"
					$bgColor={1}
					$elevation={1}
				/>
			</PopoverContent>
		</PopoverStyled>
	)
}

Popover.propTypes = {
	/** Popover trigger. */
	trigger: PropTypes.element.isRequired,

	/** Popover content. */
	content: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]),

	/** Fixed popover width. */
	width: PropTypes.string,

	/** Fixed popover height. */
	height: PropTypes.string,

	/** The amount of padding around the popover. */
	padding: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.object,
		PropTypes.array,
	]),
}

Popover.defaultProps = {
	content: null,
	width: 'initial',
	height: 'initial',
	padding: 2,
}

export default Popover
