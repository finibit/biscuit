import styled from 'styled-components'
import styles from '../../../themes'

const PopoverContent = styled.div`
	${styles.spacing}
	${styles.color}
	${styles.bgColor}
	${styles.border}
	${styles.elevation}

	display: none;
	position: absolute;
	z-index: 99;
	width: ${(props) => props.$width};
	height: ${(props) => props.$height};
	left: 0;
	bottom: 0;
	transform: translateY(-56px);

	${(props) => props.$parent}:hover & {
		display: block;
	}
`

export default PopoverContent
