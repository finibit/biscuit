import React from 'react'
import { storiesOf } from '@storybook/react'
import Wrapper from '../../Wrapper'
import Text from './Text'
import Box from '../Box'

storiesOf('Text', module)
  .addDecorator(Wrapper)
  .add('font size', () => (
    <>
      <Text fontSize={0} mr={1}>Size 0</Text>
      <Text fontSize={1} mr={1}>Size 1</Text>
      <Text fontSize={2} mr={1}>Size 2</Text>
      <Text fontSize={3} mr={1}>Size 3</Text>
      <Text fontSize={4} mr={1}>Size 4</Text>
      <Text fontSize={5} mr={1}>Size 5</Text>
      <Text fontSize={6} mr={1}>Size 6</Text>
      <Text fontSize={50} mr={1}>Size 50px</Text>
      <Text fontSize="60px" mr={1}>Size 60px</Text>
    </>
  ))
  .add('font family', () => (
    <>
      <Text fontFamily="primary" mr={1}>Primary</Text>
      <Text fontFamily="secondary" mr={1}>Secondary</Text>
      <Text fontFamily="sans-serif" mr={1}>Sans-serif</Text>
      <Text fontFamily="serif" mr={1}>Serif</Text>
    </>
  ))
  .add('font weight', () => (
    <>
      <Text fontWeight="light" mr={1}>Light</Text>
      <Text fontWeight="normal" mr={1}>Normal</Text>
      <Text fontWeight="medium" mr={1}>Medium</Text>
      <Text fontWeight="semi-bold" mr={1}>Semi-bold</Text>
      <Text fontWeight="bold" mr={1}>Bold</Text>
    </>
  ))
  .add('font style', () => (
    <>
      <Text fontStyle="normal" mr={1}>Normal</Text>
      <Text fontStyle="italic" mr={1}>Italic</Text>
      <Text fontStyle="oblique" mr={1}>Oblique</Text>
    </>
  ))
  .add('with transform', () => (
    <>
      <Text textTransform="capitalize" mr={1}>capitalize</Text>
      <Text textTransform="uppercase" mr={1}>uppercase</Text>
      <Text textTransform="lowercase" mr={1}>LOWERCASE</Text>
      <Text textTransform="full-width" mr={1}>full-width</Text>
    </>
  ))
  .add('with decoration', () => (
    <>
      <Text textDecoration="overline" mr={1}>Overline</Text>
      <Text textDecoration="line-through" mr={1}>Line-through</Text>
      <Text textDecoration="underline" mr={1}>Underline</Text>
      <Text textDecoration="underline overline" mr={1}>Underline + overline</Text>
    </>
  ))
  .add('with color', () => (
    <>
      <Text color="black" mr={1}>Black</Text>
      <Text color="white" bg="black" mr={1}>White</Text>
      <Text color="light" mr={1}>Light</Text>
      <Text color="primary" mr={1}>Primary</Text>
      <Text color="info" mr={1}>Info</Text>
      <Text color="danger" mr={1}>Danger</Text>
      <Text color="success" mr={1}>Success</Text>
      <Text color="warning" mr={1}>Warning</Text>
    </>
  ))