import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeColor, themeColorRGBA, themePadding, responsiveArray } from '../../themes/themeUtils'

const ArrowDownStyled = styled.div`
	width: 12px;
	height: 12px;
	box-shadow: 1px 1px 0 0 ${(props) => themeColor(props.theme, 'light-6')};
	background-color ${(props) => themeColor(props.theme, 'light-0')};
	position: absolute;
	left: 18px;
	bottom: 0;
	transform: translateY(50%) rotate(45deg);
`

const PopoverStyled = styled.div`
	box-sizing: border-box;
	position: relative;
	display: inline-block;
`

const PopoverContentStyled = styled.div`
	box-sizing: border-box;
	display: none;
	background-color: ${(props) => themeColor(props.theme, 'light-0')};
	color: ${(props) => themeColor(props.theme, 'dark-0')};
	box-shadow: 0px 3px 5px 0px ${(props) => themeColorRGBA(props.theme, 'dark-0', 0.08)};
	border: 1px solid ${(props) => themeColor(props.theme, 'light-3')};
	border-radius: ${(props) => props.theme.global.rounding};
	position: absolute;
	z-index: 99;

	width: ${(props) => props.$width};
	height: ${(props) => props.$height};

	bottom: 0;
	left: 0;
	transform: translateY(-56px);

	margin: 0;
	padding: ${(props) => themePadding(props.theme, 'popover', props.$padding[0])};

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.sm}) {
		padding: ${(props) => themePadding(props.theme, 'popover', props.$padding[1])};
	}

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.md}) {
		padding: ${(props) => themePadding(props.theme, 'popover', props.$padding[2])};
	}

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.lg}) {
		padding: ${(props) => themePadding(props.theme, 'popover', props.$padding[3])};
	}

	${PopoverStyled}:hover & {
		display: block;
	}
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
			<PopoverContentStyled
				$width={width}
				$height={height}
				$padding={responsiveArray(padding)}
			>
				{content}
				<ArrowDownStyled />
			</PopoverContentStyled>
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
	padding: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
}

Popover.defaultProps = {
	content: null,
	width: 'auto',
	height: 'auto',
	padding: 'md',
}

export default Popover
