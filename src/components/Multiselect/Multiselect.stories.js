import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import Wrapper from '../../Wrapper'
import Multiselect from './Multiselect'

const MultiselectWithState = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndices, setSelectedIndices] = useState([])

  return (
    <Multiselect
      width={200}
      isOpen={isOpen}
      onOpen={() => { setIsOpen(true) }}
      onClose={() => { setIsOpen(false) }}
      onSelect={(event, item, index) => { setSelectedIndices(selectedIndices.concat([index])) }}
      onDeselect={(event, item, index) => {
        selectedIndices.splice(selectedIndices.findIndex(i => i === index), 1)
        setSelectedIndices(selectedIndices)
      }}
      selectedIndices={selectedIndices}
      {...props}
    />
  )
}

storiesOf('Multiselect', module)
  .addDecorator(Wrapper)
  .add('empty', () => (
    <MultiselectWithState
      items={[]}
    />
  ))
  .add('with items', () => (
    <MultiselectWithState
      items={[
        'Apples',
        'Bananas',
        'Oranges',
      ]}
    />
  ))