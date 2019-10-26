import React from 'react'
import { storiesOf } from '@storybook/react'
import Wrapper from '../../Wrapper'
import Button from './Button'

storiesOf('Button', module)
  .addDecorator(Wrapper)
  .add('with color', () => (
    <>
      <Button color='black' mr={1} mb={1}>Black</Button>
      <Button color='white' mr={1} mb={1}>White</Button>
      <Button color='light' mr={1} mb={1}>Light</Button>
      <Button color='primary' mr={1} mb={1}>Primary</Button>
      <Button color='info' mr={1} mb={1}>Info</Button>
      <Button color='danger' mr={1} mb={1}>Danger</Button>
      <Button color='success' mr={1} mb={1}>Success</Button>
      <Button color='warning' mr={1} mb={1}>Warning</Button>
    </>
  ))
  .add('disabled', () => (
    <>
      <Button color='black' mr={1} mb={1} disabled>Black</Button>
      <Button color='white' mr={1} mb={1} disabled>White</Button>
      <Button color='light' mr={1} mb={1} disabled>Light</Button>
      <Button color='primary' mr={1} mb={1} disabled>Primary</Button>
      <Button color='info' mr={1} mb={1} disabled>Info</Button>
      <Button color='danger' mr={1} mb={1} disabled>Danger</Button>
      <Button color='success' mr={1} mb={1} disabled>Success</Button>
      <Button color='warning' mr={1} mb={1} disabled>Warning</Button>
    </>
  ))
  .add('with margin', () => (
    <>
      <Button color='black' m={2}>Black</Button>
      <Button color='white' m={2}>White</Button>
      <Button color='light' m={2}>Light</Button>
      <Button color='primary' m={2}>Primary</Button>
      <Button color='info' m={2}>Info</Button>
      <Button color='danger' m={2}>Danger</Button>
      <Button color='success' m={2}>Success</Button>
      <Button color='warning' m={2}>Warning</Button>
    </>
  ))
