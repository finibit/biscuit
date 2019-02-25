import React from 'react'
import { storiesOf } from '@storybook/react'

import { Theme, Heading } from '../../../src'

storiesOf('Heading', module)
	.add('level', () => (
		<Theme>
			<Heading level={1}>H1 heading</Heading>
			<Heading level={2}>H2 heading</Heading>
			<Heading level={3}>H3 heading</Heading>
			<Heading level={4}>H4 heading</Heading>
			<Heading level={5}>H5 heading</Heading>
			<Heading level={6}>H6 heading</Heading>
		</Theme>
	))
	.add('color', () => (
		<Theme>
			<Heading level={1} color="light-6">H1 heading</Heading>
			<Heading level={2} color="light-5">H2 heading</Heading>
			<Heading level={3} color="light-4">H3 heading</Heading>
			<Heading level={4} color="light-3">H4 heading</Heading>
			<Heading level={5} color="light-2">H5 heading</Heading>
			<Heading level={6} color="light-1">H6 heading</Heading>
		</Theme>
	))
	.add('align', () => (
		<Theme>
			<Heading level={1} align="left">H1 heading aligned to left</Heading>
			<Heading level={1} align="right">H1 heading on right</Heading>
			<Heading level={1} align="center">H1 heading centered</Heading>
		</Theme>
	))
	.add('weight', () => (
		<Theme>
			<Heading level={1} weight="bold">H1 heading</Heading>
			<Heading level={2} weight="bold">H2 heading</Heading>
			<Heading level={3} weight="bold">H3 heading</Heading>
			<Heading level={4} weight="bold">H4 heading</Heading>
			<Heading level={5} weight="bold">H5 heading</Heading>
			<Heading level={6} weight="bold">H6 heading</Heading>
		</Theme>
	))
	.add('italic', () => (
		<Theme>
			<Heading level={1} italic>H1 heading</Heading>
			<Heading level={2} italic>H2 heading</Heading>
			<Heading level={3} italic>H3 heading</Heading>
			<Heading level={4} italic>H4 heading</Heading>
			<Heading level={5} italic>H5 heading</Heading>
			<Heading level={6} italic>H6 heading</Heading>
		</Theme>
	))
	.add('transform', () => (
		<Theme>
			<Heading level={1} transform="none">No transform</Heading>
			<Heading level={1} transform="uppercase">uppercase</Heading>
			<Heading level={1} transform="lowercase">LOWERCASE</Heading>
			<Heading level={1} transform="capitalize">capitalize</Heading>
			<Heading level={1} transform="full-width">Full-width</Heading>
		</Theme>
	))
	.add('decoration', () => (
		<Theme>
			<Heading level={1} decoration="none">No decoration</Heading>
			<Heading level={1} decoration="underline">Underline</Heading>
			<Heading level={1} decoration="overline">Overline</Heading>
			<Heading level={1} decoration="line-through">Line-through</Heading>
		</Theme>
	))
	.add('size', () => (
		<Theme>
			<Heading level={1} size="xs">H1 heading</Heading>
			<Heading level={2} size="sm">H2 heading</Heading>
			<Heading level={3} size="md">H3 heading</Heading>
			<Heading level={4} size="lg">H4 heading</Heading>
			<Heading level={5} size="xl">H5 heading</Heading>
			<Heading level={6} size="xl">H6 heading</Heading>
		</Theme>
	))
	.add('size responsive', () => (
		<Theme>
			<Heading level={1} size={['xs', 'sm', 'md', 'lg']}>H1 heading</Heading>
			<Heading level={1} size={{ xs: 'xs', sm: 'sm', md: 'md', lg: 'lg' }}>H1 heading</Heading>
		</Theme>
	))
	.add('padding', () => (
		<Theme>
			<Heading level={1} padding="lg" css="background-color: violet;">Padding around heading</Heading>
		</Theme>
	))
	.add('padding responsive', () => (
		<Theme>
			<Heading level={1} padding={['xs', 'sm', 'md', 'lg']} css="background-color: violet;">H1 heading</Heading>
			<Heading level={1} padding={{ xs: 'xs', sm: 'sm', md: 'md', lg: 'lg' }} css="background-color: violet;">H1 heading</Heading>
		</Theme>
	))
	.add('margin', () => (
		<Theme>
			<Heading level={1} margin="lg">H1 heading</Heading>
			<Heading level={2} margin="lg">H2 heading</Heading>
			<Heading level={3} margin="lg">H3 heading</Heading>
			<Heading level={4} margin="lg">H4 heading</Heading>
			<Heading level={5} margin="lg">H5 heading</Heading>
			<Heading level={6} margin="lg">H6 heading</Heading>
		</Theme>
	))
	.add('margin responsive', () => (
		<Theme>
			<Heading level={1} margin={['xs', 'sm', 'md', 'lg']} css="background-color: violet;">H1 heading</Heading>
			<Heading level={1} margin={{ xs: 'xs', sm: 'sm', md: 'md', lg: 'lg' }} css="background-color: violet;">H1 heading</Heading>
		</Theme>
	))
	.add('css', () => (
		<Theme>
			<Heading level={1} css="background-color: #000; color: #fff !important;">H1 heading with custom CSS</Heading>
		</Theme>
	))
