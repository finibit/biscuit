import styled from 'styled-components'
import styles from '../../../themes'

const PopoverArrow = styled.div`
	${styles.bgColor}

	width: 12px;
	height: 12px;
	position: absolute;
	left: 18px;
	bottom: 0;
	transform: translateY(50%) rotate(45deg);
	box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.2);
`

export default PopoverArrow
