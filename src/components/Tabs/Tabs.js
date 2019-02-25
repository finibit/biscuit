import React, { Children } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import TabsItem from './TabsItem'
import { themeColor, themePadding, responsiveArray } from '../../themes/themeUtils'

const TabsStyled = styled.div`
	width: 100%;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
`

const TabsNavStyled = styled.ul`
	margin: 0;
	padding: 0;
	width: 100%;
	list-style: none;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flext-start;
	border-bottom: 2px solid ${(props) => themeColor(props.theme, 'light-0')};
	box-sizing: border-box;
`

const TabsNavItemStyled = styled.li`
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	white-space: nowrap;
`

const inactiveStyles = css`
	border-bottom: 2px solid transparent;

	&:hover, &:active {
		border-bottom: 2px solid ${(props) => themeColor(props.theme, 'light-4')};
	}
`

const activeStyles = css`
	border-bottom: 2px solid ${(props) => themeColor(props.theme, 'dark-0')};

	&:hover, &:active {
		border-bottom: 2px solid ${(props) => themeColor(props.theme, 'dark-0')};
	}
`

const disabledStyles = css`
	border-bottom: 2px solid transparent;

	&:hover, &:active {
		border-bottom: 2px solid ${(props) => themeColor(props.theme, 'light-0')};
	}

	color: ${(props) => themeColor(props.theme, 'light-4')} !important;
`

const TabsButtonStyled = styled.a`
	display: inline-block;
	cursor: pointer;
	color: ${(props) => themeColor(props.theme, 'dark-0')};
	font-family: ${(props) => props.theme.global.fontFamily};
	font-weight: normal;
	text-decoration: none;
	box-sizing: border-box;
	line-height: 1;
	vertical-align: middle;

	margin: 0 0 -2px 0;
	padding: ${(props) => themePadding(props.theme, 'tabs', props.$padding[0])};

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.sm}) {
		padding: ${(props) => themePadding(props.theme, 'tabs', props.$padding[1])};
	}

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.md}) {
		padding: ${(props) => themePadding(props.theme, 'tabs', props.$padding[2])};
	}

	@media only screen and (min-width: ${(props) => props.theme.global.breakpoints.lg}) {
		padding: ${(props) => themePadding(props.theme, 'tabs', props.$padding[3])};
	}

	${(props) => {
		if (props.$disabled) {
			return disabledStyles
		}

		if (props.$active) {
			return activeStyles
		}

		return inactiveStyles
	}};
`

const TabsButton = (props) => {
	const {
		index,
		active,
		disabled,
		padding,
		children,
		onClick,
		...rest
	} = props

	return (
		<TabsButtonStyled
			$active={active}
			$disabled={disabled}
			$padding={responsiveArray(padding)}
			{...rest}
			onClick={(event) => {
				if (!disabled) {
					event.preventDefault()
					onClick(event, index)
				}
			}}
		>
			{children}
		</TabsButtonStyled>
	)
}

TabsButton.propTypes = {
	children: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	active: PropTypes.bool.isRequired,
	disabled: PropTypes.bool.isRequired,
	padding: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
	onClick: PropTypes.func,
}

TabsButton.defaultProps = {
	padding: 'none',
	onClick: () => {},
}

const Tabs = (props) => {
	const {
		children,
		padding,
		activeIndex,
		onTabChange,
		...rest
	} = props

	return (
		<TabsStyled
			{...rest}
		>
			<TabsNavStyled>
				{Children.map(children, (child, index) => (
					<TabsNavItemStyled
						key={child.props.title}
					>
						<TabsButton
							index={index}
							active={index === activeIndex}
							disabled={child.props.disabled}
							padding={padding}
							onClick={(event) => {
								onTabChange(event, index)
							}}
						>
							{child.props.title}
						</TabsButton>
					</TabsNavItemStyled>
				))}
			</TabsNavStyled>
			{Children.toArray(props.children)[activeIndex]}
		</TabsStyled>
	)
}

Tabs.propTypes = {
	/** At least one `Tabs.Item` components. */
	children: PropTypes.node.isRequired,

	/** The amount of padding around the tab navigation. */
	padding: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),

	/** Active item index. */
	activeIndex: PropTypes.number.isRequired,

	/**
	 * Called when tab change is requested.
	 *
	 * @param {SyntheticEvent} event - React's original SyntheticEvent
	 * @param {number} index - Proposed new activeIndex
	 */
	onTabChange: PropTypes.func.isRequired,
}

Tabs.defaultProps = {
	padding: 'md',
}

Tabs.Item = TabsItem

export default Tabs
