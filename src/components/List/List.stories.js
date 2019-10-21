import React from 'react'
import { storiesOf } from '@storybook/react'
import Wrapper from '../../Wrapper'
import List from './List'

storiesOf('List', module)
  .addDecorator(Wrapper)
  .add('with items', () => (
    <List items={[
      "Invent the universe rich in mystery are creatures of the cosmos (...)",
      "Rogue tingling of the spine another world tesseract at the edge of forever culture?",
      "Of brilliant syntheses cosmos vanquish the impossible white dwarf Rig Veda (...)",
      "The sky calls to us dream of the mind's eye hundreds of thousands (...)"
    ]} />
  ))