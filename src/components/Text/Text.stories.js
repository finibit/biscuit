import React from 'react'
import { storiesOf } from '@storybook/react'

import { Theme, Text } from '../../../src'

storiesOf('Text', module)
	.add('default', () => (
		<Theme>
			<Text>Hearts of the stars rings of Uranus the sky calls to us another world star stuff harvesting star light inconspicuous motes of rock and gas.</Text>
		</Theme>
	))
	.add('as', () => (
		<Theme>
			<Text as="p">Hearts of the stars rings of Uranus the sky calls to us another world star stuff harvesting star light inconspicuous motes of rock and gas.</Text>
		</Theme>
	))
	.add('color', () => (
		<Theme>
			<Text color="light-4">Hearts of the stars rings of Uranus the sky </Text>
			<Text color="#caaffe">calls to us another world star stuff harvesting star light inconspicuous motes of rock and gas.</Text>
		</Theme>
	))
	.add('align', () => (
		<Theme>
			<Text align="left" as="div">Hearts of the stars rings of Uranus</Text>
			<Text align="center" as="div">the sky calls to us another world star stuff</Text>
			<Text align="right" as="div">harvesting star light</Text>
		</Theme>
	))
	.add('nowrap', () => (
		<Theme>
			<div style={{ width: '150px' }}>
				<Text as="div" nowrap>Hearts of the stars rings of Uranus the sky calls to us another world star stuff harvesting star light inconspicuous motes of rock and gas.</Text>
			</div>
		</Theme>
	))
	.add('weight', () => (
		<Theme>
			<Text weight="normal">Hearts of the stars rings of Uranus the sky calls to us another world star</Text>
			<Text weight="bold"> stuff harvesting star light inconspicuous motes of rock and gas.</Text>
		</Theme>
	))
	.add('italic', () => (
		<Theme>
			<Text italic>Hearts of the stars rings of Uranus the sky calls to us another world star stuff harvesting star light inconspicuous motes of rock and gas.</Text>
		</Theme>
	))
	.add('transform', () => (
		<Theme>
			<Text transform="none">Hearts of the stars rings</Text>
			<Text transform="uppercase"> of Uranus the sky calls to us</Text>
			<Text transform="lowercase"> ANOTHER world star stuff harvesting</Text>
			<Text transform="capitalize"> star light inconspicuous motes</Text>
			<Text transform="full-width"> of rock and gas.</Text>
		</Theme>
	))
	.add('decoration', () => (
		<Theme>
			<Text decoration="none">Hearts of the stars rings</Text>
			<Text decoration="underline"> of Uranus the sky calls to us</Text>
			<Text decoration="overline"> another world star stuff harvesting</Text>
			<Text decoration="line-through"> star light inconspicuous motes of rock and gas.</Text>
		</Theme>
	))
	.add('size', () => (
		<Theme>
			<Text size="xs">Hearts of the stars rings of Uranus the sky calls to us another world star stuff harvesting star light inconspicuous motes of rock and gas.</Text>
			<Text size="sm">Hearts of the stars rings of Uranus the sky calls to us another world star stuff harvesting star light inconspicuous motes of rock and gas.</Text>
			<Text size="md">Hearts of the stars rings of Uranus the sky calls to us another world star stuff harvesting star light inconspicuous motes of rock and gas.</Text>
			<Text size="lg">Hearts of the stars rings of Uranus the sky calls to us another world star stuff harvesting star light inconspicuous motes of rock and gas.</Text>
			<Text size="xl">Hearts of the stars rings of Uranus the sky calls to us another world star stuff harvesting star light inconspicuous motes of rock and gas.</Text>
		</Theme>
	))
	.add('size responsive', () => (
		<Theme>
			<Text size={['md', 'md', 'lg', 'xl']}>Hearts of the stars rings of Uranus the sky calls to us another world star stuff harvesting star light inconspicuous motes of rock and gas.</Text>
		</Theme>
	))
	.add('padding', () => (
		<Theme>
			<Text padding="md" css="background-color: violet;">Hearts of the stars rings of Uranus the sky calls to us another world star stuff harvesting star light inconspicuous motes of rock and gas.</Text>
		</Theme>
	))
	.add('padding responsive', () => (
		<Theme>
			<Text padding={['none', 'xs', 'sm', 'md']} css="background-color: violet;">Hearts of the stars rings of Uranus the sky calls to us another world star stuff harvesting star light inconspicuous motes of rock and gas.</Text>
		</Theme>
	))
	.add('margin', () => (
		<Theme>
			<Text margin="md" css="background-color: violet;">Hearts of the stars rings of Uranus the sky calls to us another world star stuff harvesting star light inconspicuous motes of rock and gas.</Text>
			<Text margin="md" css="background-color: violet;">Hearts of the stars rings of Uranus the sky calls to us another world star stuff harvesting star light inconspicuous motes of rock and gas.</Text>
		</Theme>
	))
	.add('margin responsive', () => (
		<Theme>
			<Text margin={['none', 'xs', 'sm', 'md']} css="background-color: violet;">Hearts of the stars rings of Uranus the sky calls to us another world star stuff harvesting star light inconspicuous motes of rock and gas.</Text>
			<Text margin={['none', 'xs', 'sm', 'md']} css="background-color: violet;">Hearts of the stars rings of Uranus the sky calls to us another world star stuff harvesting star light inconspicuous motes of rock and gas.</Text>
		</Theme>
	))
