import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import Wrapper from '../../Wrapper'
import Popover from './Popover'
import Text from '../Text'

const content = "Intelligent beings dream of the mind's eye tendrils of gossamer clouds circumnavigated billions upon billions a mote of dust suspended in a sunbeam?"

const PopoverStateful = (props) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <Popover
      isVisible={isVisible}
      onShow={() => setIsVisible(true)}
      onHide={() => setIsVisible(false)}
      {...props}
    />
  )
}

storiesOf('Popover', module)
  .addDecorator(Wrapper)
  .add('with placement', () => (
    <>
      <PopoverStateful
        placement='top-left'
        trigger={<Text mr={3}>Top left</Text>}
        content={content}
      />
      <PopoverStateful
        placement='top'
        trigger={<Text mr={3}>Top</Text>}
        content={content}
      />
      <PopoverStateful
        placement='top-right'
        trigger={<Text mr={3}>Top right</Text>}
        content={content}
      />
      <PopoverStateful
        placement='right-top'
        trigger={<Text mr={3}>Right top</Text>}
        content={content}
      />
      <PopoverStateful
        placement='right'
        trigger={<Text mr={3}>Right</Text>}
        content={content}
      />
      <PopoverStateful
        placement='right-bottom'
        trigger={<Text mr={3}>Right bottom</Text>}
        content={content}
      />
      <PopoverStateful
        placement='bottom-right'
        trigger={<Text mr={3}>Bottom right</Text>}
        content={content}
      />
      <PopoverStateful
        placement='bottom'
        trigger={<Text mr={3}>Bottom</Text>}
        content={content}
      />
      <PopoverStateful
        placement='bottom-left'
        trigger={<Text mr={3}>Bottom left</Text>}
        content={content}
      />
      <PopoverStateful
        placement='left-bottom'
        trigger={<Text mr={3}>Left bottom</Text>}
        content={content}
      />
      <PopoverStateful
        placement='left'
        trigger={<Text mr={3}>Left</Text>}
        content={content}
      />
      <PopoverStateful
        placement='left-top'
        trigger={<Text mr={3}>Left top</Text>}
        content={content}
      />
    </>
  ))
