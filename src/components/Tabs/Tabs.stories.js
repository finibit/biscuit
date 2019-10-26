import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import Wrapper from '../../Wrapper'
import Tabs from './Tabs'

const TabsWithState = (props) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <Tabs
      activeIndex={activeIndex}
      onTabChange={(event, index) => setActiveIndex(index)}
      {...props}
    >
      {props.children}
    </Tabs>
  )
}

storiesOf('Tabs', module)
  .addDecorator(Wrapper)
  .add('with items', () => (
    <TabsWithState>
      <Tabs.Item title='Tab 1'>
        Content of Tab 1
      </Tabs.Item>
      <Tabs.Item title='Tab 2'>
        Content of Tab 2
      </Tabs.Item>
      <Tabs.Item title='Tab 3'>
        Content of Tab 3
      </Tabs.Item>
      <Tabs.Item title='Tab 4' disabled>
        Content of Tab 4
      </Tabs.Item>
      <Tabs.Item title='Tab 5' hidden>
        Content of Tab 5
      </Tabs.Item>
    </TabsWithState>
  ))
