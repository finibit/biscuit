import React from 'react'
import { storiesOf } from '@storybook/react'
import Wrapper from '../../Wrapper'
import Title from './Title'
import Box from '../Box'

storiesOf('Title', module)
  .addDecorator(Wrapper)
  .add('with level', () => (
    <>
      <Title level={1}>Title 1</Title>
      <Title level={2}>Title 2</Title>
      <Title level={3}>Title 3</Title>
      <Title level={4}>Title 4</Title>
      <Title level={5}>Title 5</Title>
      <Title level={6}>Title 6</Title>
    </>
  ))
  .add('with color', () => (
    <>
      <Title level={3} color='black'>Black</Title>
      <Title level={3} color='white' bg='black'>White</Title>
      <Title level={3} color='light'>Light</Title>
      <Title level={3} color='primary'>Primary</Title>
      <Title level={3} color='info'>Info</Title>
      <Title level={3} color='danger'>Danger</Title>
      <Title level={3} color='success'>Success</Title>
      <Title level={3} color='warning'>Warning</Title>
    </>
  ))
  .add('with decoration', () => (
    <>
      <Title level={3} textDecoration='overline'>Overline</Title>
      <Title level={3} textDecoration='underline'>Underline</Title>
      <Title level={3} textDecoration='line-through'>Through</Title>
    </>
  ))
  .add('transform', () => (
    <>
      <Title level={3} textTransform='uppercase'>uppercase</Title>
      <Title level={3} textTransform='lowercase'>LOWERCASE</Title>
      <Title level={3} textTransform='capitalize'>capitalize</Title>
      <Title level={3} textTransform='full-width'>Full-width</Title>
    </>
  ))
  .add('align', () => (
    <>
      <Title level={3} textAlign='left'>This title is aligned to the left</Title>
      <Title level={3} textAlign='right'>This is aligned to the right</Title>
      <Title level={3} textAlign='center'>This one is centered</Title>
    </>
  ))
  .add('nowrap', () => (
    <Box width='8rem'>
      <Title level={3} nowrap>Very long title</Title>
    </Box>
  ))
