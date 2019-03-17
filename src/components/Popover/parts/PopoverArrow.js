import styled from 'styled-components'
import styles from '../../../themes'

const position = (props) => {
	const placement = props.$placement.split('-')
	placement.push('')

	let top = 0
	let left = 0
	let tx = 0
	let ty = 0
	let a = 0

	if (placement[0] === 'top') {
		top = 100
		ty = -50
		a = 45

		if (placement[1] === 'left') {
			tx = 200
		}
		else if (placement[1] === '') {
			left = 50
			tx = -50
		}
		else if (placement[1] === 'right') {
			left = 100
			tx = -300
		}
	}
	else if (placement[0] === 'right') {
		tx = -50
		a = 135

		if (placement[1] === 'top') {
			top = 0
			ty = 200
		}
		else if (placement[1] === '') {
			top = 50
			ty = -50
		}
		else if (placement[1] === 'bottom') {
			top = 100
			ty = -300
		}
	}
	else if (placement[0] === 'bottom') {
		top = 0
		ty = -50
		a = -135

		if (placement[1] === 'left') {
			tx = 200
		}
		else if (placement[1] === '') {
			left = 50
			tx = -50
		}
		else if (placement[1] === 'right') {
			left = 100
			tx = -300
		}
	}
	else if (placement[0] === 'left') {
		left = 100
		tx = -50
		a = -45

		if (placement[1] === 'top') {
			top = 0
			ty = 200
		}
		else if (placement[1] === '') {
			top = 50
			ty = -50
		}
		else if (placement[1] === 'bottom') {
			top = 100
			ty = -300
		}
	}

	return `top: ${top}%; left: ${left}%; transform: translate(${tx}%, ${ty}%) rotate(${a}deg);`
}

const PopoverArrow = styled.div`
	${styles.bgColor}
	${position}

	width: 10px;
	height: 10px;
	position: absolute;
	box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.2);
`

export default PopoverArrow
