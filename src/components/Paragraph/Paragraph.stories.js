import React from 'react'
import { storiesOf } from '@storybook/react'

import { Theme, Paragraph } from '../../../src'

storiesOf('Paragraph', module)
	.add('default', () => (
		<Theme>
			<Paragraph>Finite but unbounded vastness is bearable only through love star stuff harvesting star light rogue laws of physics a billion trillion? Network of wormholes at the edge of forever the only home we've ever known billions upon billions white dwarf the sky calls to us. Permanence of the stars bits of moving fluff courage of our questions hearts of the stars citizens of distant epochs Cambrian explosion. Emerged into consciousness invent the universe inconspicuous motes of rock and gas globular star cluster descended from astronomers concept of the number one and billions upon billions upon billions upon billions upon billions upon billions upon billions.</Paragraph>
		</Theme>
	))
	.add('color', () => (
		<Theme>
			<Paragraph color="light-4">Ship of the imagination from which we spring courage of our questions as a patch of light vanquish the impossible concept of the number one. Network of wormholes not a sunrise but a galaxyrise laws of physics how far away invent the universe the only home we've ever known. Network of wormholes made in the interiors of collapsing stars emerged into consciousness encyclopaedia galactica the sky calls to us trillion.</Paragraph>
			<Paragraph color="#caaffe">Invent the universe with pretty stories for which there's little good evidence hearts of the stars birth quasar gathered by gravity. Rich in heavy atoms as a patch of light concept of the number one rich in heavy atoms another world not a sunrise but a galaxyrise. Are creatures of the cosmos dispassionate extraterrestrial observer a still more glorious dawn awaits two ghostly white figures in coveralls and helmets are soflty dancing concept of the number one made in the interiors of collapsing stars and billions upon billions upon billions upon billions upon billions upon billions upon billions.</Paragraph>
		</Theme>
	))
	.add('align', () => (
		<Theme>
			<Paragraph align="left">Ship of the imagination from which we spring courage of our questions as a patch of light vanquish the impossible concept of the number one. Network of wormholes not a sunrise but a galaxyrise laws of physics how far away invent the universe the only home we've ever known. Network of wormholes made in the interiors of collapsing stars emerged into consciousness encyclopaedia galactica the sky calls to us trillion.</Paragraph>
			<Paragraph align="right">Invent the universe with pretty stories for which there's little good evidence hearts of the stars birth quasar gathered by gravity. Rich in heavy atoms as a patch of light concept of the number one rich in heavy atoms another world not a sunrise but a galaxyrise. Are creatures of the cosmos dispassionate extraterrestrial observer a still more glorious dawn awaits two ghostly white figures in coveralls and helmets are soflty dancing concept of the number one made in the interiors of collapsing stars and billions upon billions upon billions upon billions upon billions upon billions upon billions.</Paragraph>
			<Paragraph align="center">Ship of the imagination from which we spring courage of our questions as a patch of light vanquish the impossible concept of the number one. Network of wormholes not a sunrise but a galaxyrise laws of physics how far away invent the universe the only home we've ever known. Network of wormholes made in the interiors of collapsing stars emerged into consciousness encyclopaedia galactica the sky calls to us trillion.</Paragraph>
		</Theme>
	))
	.add('size', () => (
		<Theme>
			<Paragraph size="xs">Brain is the seed of intelligence paroxysm of global death two ghostly white figures in coveralls and helmets are soflty dancing are creatures of the cosmos the carbon in our apple pies courage of our questions. The sky calls to us as a patch of light ship of the imagination vanquish the impossible a very small stage in a vast cosmic arena gathered by gravity.</Paragraph>
			<Paragraph size="sm">Brain is the seed of intelligence paroxysm of global death two ghostly white figures in coveralls and helmets are soflty dancing are creatures of the cosmos the carbon in our apple pies courage of our questions. The sky calls to us as a patch of light ship of the imagination vanquish the impossible a very small stage in a vast cosmic arena gathered by gravity.</Paragraph>
			<Paragraph size="md">Brain is the seed of intelligence paroxysm of global death two ghostly white figures in coveralls and helmets are soflty dancing are creatures of the cosmos the carbon in our apple pies courage of our questions. The sky calls to us as a patch of light ship of the imagination vanquish the impossible a very small stage in a vast cosmic arena gathered by gravity.</Paragraph>
			<Paragraph size="lg">Brain is the seed of intelligence paroxysm of global death two ghostly white figures in coveralls and helmets are soflty dancing are creatures of the cosmos the carbon in our apple pies courage of our questions. The sky calls to us as a patch of light ship of the imagination vanquish the impossible a very small stage in a vast cosmic arena gathered by gravity.</Paragraph>
			<Paragraph size="xl">Brain is the seed of intelligence paroxysm of global death two ghostly white figures in coveralls and helmets are soflty dancing are creatures of the cosmos the carbon in our apple pies courage of our questions. The sky calls to us as a patch of light ship of the imagination vanquish the impossible a very small stage in a vast cosmic arena gathered by gravity.</Paragraph>
		</Theme>
	))
	.add('size responsive', () => (
		<Theme>
			<Paragraph size={['md', 'md', 'lg', 'xl']}>Brain is the seed of intelligence paroxysm of global death two ghostly white figures in coveralls and helmets are soflty dancing are creatures of the cosmos the carbon in our apple pies courage of our questions. The sky calls to us as a patch of light ship of the imagination vanquish the impossible a very small stage in a vast cosmic arena gathered by gravity.</Paragraph>
		</Theme>
	))
	.add('padding', () => (
		<Theme>
			<Paragraph padding="md" css="background-color: violet;">Radio telescope dispassionate extraterrestrial observer Cambrian explosion hearts of the stars paroxysm of global death vastness is bearable only through love? White dwarf circumnavigated not a sunrise but a galaxyrise encyclopaedia galactica are creatures of the cosmos finite but unbounded.</Paragraph>
		</Theme>
	))
	.add('padding responsive', () => (
		<Theme>
			<Paragraph padding={['none', 'xs', 'sm', 'md']} css="background-color: violet;">Radio telescope dispassionate extraterrestrial observer Cambrian explosion hearts of the stars paroxysm of global death vastness is bearable only through love? White dwarf circumnavigated not a sunrise but a galaxyrise encyclopaedia galactica are creatures of the cosmos finite but unbounded.</Paragraph>
		</Theme>
	))
	.add('margin', () => (
		<Theme>
			<Paragraph margin="md" css="background-color: violet;">Radio telescope dispassionate extraterrestrial observer Cambrian explosion hearts of the stars paroxysm of global death vastness is bearable only through love? White dwarf circumnavigated not a sunrise but a galaxyrise encyclopaedia galactica are creatures of the cosmos finite but unbounded.</Paragraph>
			<Paragraph margin="md" css="background-color: violet;">Dream of the mind's eye kindling the energy hidden in matter brain is the seed of intelligence two ghostly white figures in coveralls and helmets are soflty dancing from which we spring with pretty stories for which there's little good evidence and billions upon billions upon billions upon billions upon billions upon billions upon billions.</Paragraph>
		</Theme>
	))
	.add('margin responsive', () => (
		<Theme>
			<Paragraph margin={['none', 'xs', 'sm', 'md']} css="background-color: violet;">Radio telescope dispassionate extraterrestrial observer Cambrian explosion hearts of the stars paroxysm of global death vastness is bearable only through love? White dwarf circumnavigated not a sunrise but a galaxyrise encyclopaedia galactica are creatures of the cosmos finite but unbounded.</Paragraph>
			<Paragraph margin={['none', 'xs', 'sm', 'md']} css="background-color: violet;">Dream of the mind's eye kindling the energy hidden in matter brain is the seed of intelligence two ghostly white figures in coveralls and helmets are soflty dancing from which we spring with pretty stories for which there's little good evidence and billions upon billions upon billions upon billions upon billions upon billions upon billions.</Paragraph>
		</Theme>
	))
