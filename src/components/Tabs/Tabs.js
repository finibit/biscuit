import React, { Children } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import TabsItem from './TabsItem'
import styles, { utils } from '../../themes'

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
	border-bottom: 2px solid ${(props) => utils.resolveColor(props.theme, props.$element, 'inactiveTabBorder')};
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
		border-bottom: 2px solid ${(props) => utils.resolveColor(props.theme, props.$element, 'hoverTabBorder')};
	}
`

const activeStyles = css`
	border-bottom: 2px solid ${(props) => utils.resolveColor(props.theme, props.$element, 'activeTabBorder')};

	&:hover, &:active {
		border-bottom: 2px solid ${(props) => utils.resolveColor(props.theme, props.$element, 'activeTabBorder')};
	}
`

const disabledStyles = css`
	border-bottom: 2px solid transparent;

	&:hover, &:active {
		border-bottom: 2px solid ${(props) => utils.resolveColor(props.theme, props.$element, 'disabledTabBorder')};
	}

	color: ${(props) => utils.resolveColor(props.theme, props.$element, 'disabledTabTitle')} !important;
`

const TabsButtonStyled = styled.a`
	${styles.fontFamily}
	${styles.padding}

	color: ${(props) => props.theme.global.colors['dark-0']};
	display: inline-block;
	cursor: pointer;
	font-size: 1rem;
	font-weight: normal;
	text-decoration: none;
	box-sizing: border-box;
	line-height: 1;
	vertical-align: middle;

	margin: 0 0 -2px 0;

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
			$element="Tabs"
			$active={active}
			$disabled={disabled}
			$padding={padding}
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
	padding: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.object,
		PropTypes.array,
	]),
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
		themeElement,
		...rest
	} = props

	return (
		<TabsStyled
			$element={themeElement}
			{...rest}
		>
			<TabsNavStyled
				$element={themeElement}
			>
				{Children.map(children, (child, index) => (
					<TabsNavItemStyled
						key={child.props.title}
						$element={themeElement}
					>
						<TabsButton
							$element={themeElement}
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
	padding: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.object,
		PropTypes.array,
	]),

	/** Active item index. */
	activeIndex: PropTypes.number.isRequired,

	/**
	 * Called when tab change is requested.
	 *
	 * @param {SyntheticEvent} event - React's original SyntheticEvent
	 * @param {number} index - Proposed new activeIndex
	 */
	onTabChange: PropTypes.func.isRequired,

	/** Theme element. */
	themeElement: PropTypes.string,
}

Tabs.defaultProps = {
	padding: { horizontal: 2, vertical: 1 },
	themeElement: 'Tabs',
}

Tabs.Item = TabsItem

export default Tabs
