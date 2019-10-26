import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import Wrapper from '../../Wrapper'
import Select from './Select'

const SelectWithState = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <Select
      width={200}
      isOpen={isOpen}
      onOpen={() => { setIsOpen(true) }}
      onClose={() => { setIsOpen(false) }}
      onSelect={(event, item, index) => { setSelectedIndex(index) }}
      selectedIndex={selectedIndex}
      {...props}
    />
  )
}

storiesOf('Select', module)
  .addDecorator(Wrapper)
  .add('empty', () => (
    <SelectWithState
      items={[]}
    />
  ))
  .add('with items', () => (
    <SelectWithState
      items={[
        'Apples',
        'Bananas',
        'Oranges'
      ]}
    />
  ))
