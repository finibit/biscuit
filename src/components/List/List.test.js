import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Theme from '../Theme'
import List from './List'

describe('List', () => {
  test('empty', () => {
    const component = renderer.create((
      <Theme>
        <List items={[]} />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('with items', () => {
    const component = renderer.create((
      <Theme>
        <List items={[
          'Item 1',
          'Item 2',
          'Item 3'
        ]}
        />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })
})
