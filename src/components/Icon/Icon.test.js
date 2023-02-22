import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Theme from '../Theme'
import Icon from '../Icon'

describe('Icon', () => {
  test('is rendered', () => {
    const component = renderer.create((
      <Theme>
        <Icon type='arrow-up' />
        <Icon type='arrow-left' />
        <Icon type='arrow-down' />
        <Icon type='arrow-right' />
        <Icon type='check-mark' />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })
})
