import React from 'react'
import { storiesOf } from '@storybook/react'
import Wrapper from '../../Wrapper'
import Title from './Title'
import Box from '../Box'

storiesOf('Title', module)
  .addDecorator(Wrapper)
  .add('with size', () => (
    <>
      <Title size={1}>Title 1</Title>
      <Title size={2}>Title 2</Title>
      <Title size={3}>Title 3</Title>
      <Title size={4}>Title 4</Title>
      <Title size={5}>Title 5</Title>
      <Title size={6}>Title 6</Title>
    </>
  ))
  .add('with color', () => (
    <>
      <Title size={3} color="black">Black</Title>
      <Title size={3} color="white" bg="black">White</Title>
      <Title size={3} color="light">Light</Title>
      <Title size={3} color="primary">Primary</Title>
      <Title size={3} color="info">Info</Title>
      <Title size={3} color="danger">Danger</Title>
      <Title size={3} color="success">Success</Title>
      <Title size={3} color="warning">Warning</Title>
    </>
  ))
  .add('with decoration', () => (
    <>
      <Title size={3} textDecoration="overline">Overline</Title>
      <Title size={3} textDecoration="underline">Underline</Title>
      <Title size={3} textDecoration="line-through">Through</Title>
    </>
  ))
  .add('transform', () => (
    <>
      <Title size={3} textTransform="uppercase">uppercase</Title>
      <Title size={3} textTransform="lowercase">LOWERCASE</Title>
      <Title size={3} textTransform="capitalize">capitalize</Title>
      <Title size={3} textTransform="full-width">Full-width</Title>
    </>
  ))
  .add('align', () => (
    <>
      <Title size={3} textAlign="left">This title is aligned to the left</Title>
      <Title size={3} textAlign="right">This is aligned to the right</Title>
      <Title size={3} textAlign="center">This one is centered</Title>
    </>
  ))
  .add('nowrap', () => (
    <Box width="8rem">
      <Title size={3} nowrap>Very long title</Title>
    </Box>
  ))