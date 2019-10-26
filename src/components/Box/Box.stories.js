import React from 'react'
import { storiesOf } from '@storybook/react'
import Wrapper from '../../Wrapper'
import Box from './Box'

storiesOf('Box', module)
  .addDecorator(Wrapper)
  .add('with padding', () => (
    <>
      <Box p={0} bg='primary'>0</Box>
      <Box p={1} bg='primary'>1</Box>
      <Box p={2} bg='primary'>2</Box>
      <Box p={3} bg='primary'>3</Box>
    </>
  ))
  .add('with margin', () => (
    <>
      <Box m={0} bg='primary'>0</Box>
      <Box m={1} bg='primary'>1</Box>
      <Box m={2} bg='primary'>2</Box>
      <Box m={3} bg='primary'>3</Box>
    </>
  ))
  .add('with color', () => (
    <>
      <Box bg='black' color='white' p={3} mb={1}>Black</Box>
      <Box bg='white' p={3} mb={1}>White</Box>
      <Box bg='light' p={3} mb={1}>Light</Box>
      <Box bg='primary' p={3} mb={1}>Primary</Box>
      <Box bg='info' p={3} mb={1}>Info</Box>
      <Box bg='danger' p={3} mb={1}>Danger</Box>
      <Box bg='success' p={3} mb={1}>Success</Box>
      <Box bg='warning' p={3} mb={1}>Warning</Box>
    </>
  ))
  .add('with image', () => (
    <Box size='lg' backgroundImage="url('https://picsum.photos/128')" />
  ))
  .add('with border', () => (
    <>
      <Box border='black' p={3} mb={1}>Black</Box>
      <Box border='white' p={3} mb={1}>White</Box>
      <Box border='light' p={3} mb={1}>Light</Box>
      <Box border='primary' p={3} mb={1}>Primary</Box>
      <Box border='info' p={3} mb={1}>Info</Box>
      <Box border='danger' p={3} mb={1}>Danger</Box>
      <Box border='success' p={3} mb={1}>Success</Box>
      <Box border='warning' p={3} mb={1}>Warning</Box>
    </>
  ))
  .add('with shadow', () => (
    <>
      <Box boxShadow='sm' p={3} mb={3}>Small</Box>
      <Box boxShadow='md' p={3} mb={3}>Medium</Box>
      <Box boxShadow='lg' p={3} mb={3}>Large</Box>
    </>
  ))
  .add('with size', () => (
    <>
      <Box width='50%' bg='primary' p={1} m={1}>width = 50%</Box>
      <Box height='100px' bg='primary' p={1} m={1}>height = 100px</Box>
      <Box size='sm' bg='primary' p={1} m={1}>Small</Box>
      <Box size='md' bg='primary' p={1} m={1}>Medium</Box>
      <Box size='lg' bg='primary' p={1} m={1}>Large</Box>
    </>
  ))
  .add('with position', () => (
    <>
      <Box size='md' bg='primary' position='relative'>
        <Box size='sm' bg='info' position='absolute' top='50%' left='50%' />
      </Box>
    </>
  ))
  .add('is flex', () => (
    <>
      <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
        <Box size='sm' bg='primary' m={1} p={1}>1</Box>
        <Box size='md' bg='primary' m={1} p={1}>2</Box>
        <Box size='lg' bg='primary' m={1} p={1}>3</Box>
      </Box>
    </>
  ))
