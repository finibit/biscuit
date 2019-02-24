import React from 'react'
import { storiesOf } from '@storybook/react'

import { Theme, Box } from '../../../src'

storiesOf('Box', module)
	.add('default', () => (
		<Theme>
			<Box>
				This is a default Box component
			</Box>
		</Theme>
	))
	.add('as', () => (
		<Theme>
			<Box as="section">
				Uses `section` instead of `div` as DOM element
			</Box>
		</Theme>
	))
	.add('color', () => (
		<Theme>
			<Box color="info">
				Background color set to value from theme.
			</Box>
			<Box color="#cafeee">
				Background color set to custom value.
			</Box>
		</Theme>
	))
	.add('margin', () => (
		<Theme>
			<Box margin="md" color="light-0">
				The amount of margin is the same for all sides.
			</Box>
			<Box margin={{ vertical: 'xl', horizontal: 'md' }} color="light-0">
				The amount of margin is different vertically and horizontally.
			</Box>
			<Box margin={['xs', 'sm', 'md', { vertical: 'xl', horizontal: 'md' }]} color="light-0">
				The amount of margin changes at each responsive breakpoint.
			</Box>
		</Theme>
	))
	.add('padding', () => (
		<Theme>
			<Box padding="md" color="light-0">
				The amount of padding is the same for all sides.
			</Box>
			<Box padding={{ vertical: 'xl', horizontal: 'md' }} color="light-1">
				The amount of padding is different vertically and horizontally.
			</Box>
			<Box padding={['xs', 'sm', 'md', { vertical: 'xl', horizontal: 'md' }]} color="light-2">
				The amount of padding changes at each responsive breakpoint.
			</Box>
		</Theme>
	))
	.add('width', () => (
		<Theme>
			<Box width="300px" color="light-0">
				300px wide
			</Box>
		</Theme>
	))
	.add('height', () => (
		<Theme>
			<Box height="300px" color="light-0">
				300px tall
			</Box>
		</Theme>
	))
	.add('overflow', () => (
		<Theme>
			<Box overflow="auto" width="100px" height="100px">
				The behavior of auto overflow depends on the browser.
			</Box>
			<Box overflow="scroll" width="100px" height="100px">
				Scroll bars will be added to the box to allow for scrolling the contents that is too long to fit into the box.
			</Box>
			<Box overflow="hidden" width="100px" height="100px">
				No scroll bars will be added and the content will be clipped to the size of the box.
			</Box>
			<Box overflow="visible" width="100px" height="100px">
				No scroll bars will be added and the content will overflow the box.
			</Box>
		</Theme>
	))
	.add('direction', () => (
		<Theme>
			<Box direction="row" padding="md" color="light-0">
				<Box padding="md" color="light-1">
					The first box is on the left hand side of the second one.
				</Box>
				<Box padding="md" color="light-1">
					The second box is on the right hand side of the first one.
				</Box>
			</Box>
			<Box direction="row-reverse" padding="md" color="light-0">
				<Box color="light-1" padding="md">
					First box in reversed row direction
				</Box>
				<Box color="light-1" padding="md">
					Second box in reversed row direction
				</Box>
			</Box>
			<Box direction="col" padding="md" color="light-0">
				<Box color="light-1" padding="md">
					First box in column direction
				</Box>
				<Box color="light-2" padding="md">
					Second box in column direction
				</Box>
			</Box>
			<Box direction="col-reverse" padding="md" color="light-0">
				<Box color="light-1" padding="md">
					First box in reversed column direction
				</Box>
				<Box color="light-2" padding="md">
					Second box in reversed column direction
				</Box>
			</Box>
		</Theme>
	))
	.add('wrap', () => (
		<Theme>
			<Box wrap>
				<Box padding="md" color="light-0">
					This is the first box in a wrapping container
				</Box>
				<Box padding="md" color="light-1">
					This is the second box in a wrapping container
				</Box>
				<Box padding="md" color="light-2">
					This is the third box in a wrapping container
				</Box>
			</Box>
		</Theme>
	))
	.add('order', () => (
		<Theme>
			<Box>
				<Box order={3} padding="md" color="light-0">
					The first box but is displayed as the last one
				</Box>
				<Box order={2} padding="md" color="light-1">
					The second box is displayed in the middle
				</Box>
				<Box order={1} padding="md" color="light-2">
					The last box but is displayed as the first one
				</Box>
			</Box>
		</Theme>
	))
	.add('justify', () => (
		<Theme>
			<Box justify="center" width="400px" color="light-0">
				<Box padding="md" color="light-1">
					Box #1
				</Box>
				<Box padding="md" color="light-1">
					Box #2
				</Box>
			</Box>
		</Theme>
	))
	.add('align', () => (
		<Theme>
			<Box height="500px" align="center" color="light-0">
				<Box padding="md" color="light-1">
					First box
				</Box>
				<Box padding="md" color="light-2">
					Second box
				</Box>
			</Box>
		</Theme>
	))
	.add('alignSelf', () => (
		<Theme>
			<Box direction="row">
				<Box height="300px" color="light-0" padding="md">
					First box with auto alignment
				</Box>
				<Box height="100px" color="light-1" padding="md" alignSelf="center">
					Second box with center alignment
				</Box>
				<Box height="300px" color="light-2" padding="md">
					Third box with auto alignment
				</Box>
			</Box>
		</Theme>
	))
	.add('alignContent', () => (
		<Theme>
			<Box direction="row" width="400px" height="400px" wrap alignContent="evenly" color="light-0">
				<Box color="light-1" padding="md" width="200px">
					First box
				</Box>
				<Box color="light-2" padding="md" width="200px">
					Second box
				</Box>
				<Box color="light-3" padding="md" width="200px">
					Third box
				</Box>
			</Box>
		</Theme>
	))
	.add('css', () => (
		<Theme>
			<Box width="100px" height="100px" css="border: 1px solid #000;" />
		</Theme>
	))
