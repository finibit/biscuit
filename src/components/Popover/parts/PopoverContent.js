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
	border-top-left-radius: ${(props) => props.theme.global.borders[0].radius};
	border-top-right-radius: ${(props) => props.theme.global.borders[0].radius};
	border-bottom-left-radius: ${(props) => props.theme.global.borders[0].radius};
	border-bottom-right-radius: ${(props) => props.theme.global.borders[0].radius};

	${(props) => props.$parent}:hover & {
		display: block;
	}
`

export default PopoverContent
