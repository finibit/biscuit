import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Theme from '../Theme'
import Title from './Title'

describe('Title', () => {
  test('with level', () => {
    const component = renderer.create((
      <Theme>
        <Title level={1} />
        <Title level={2} />
        <Title level={3} />
        <Title level={4} />
        <Title level={5} />
        <Title level={6} />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('with color', () => {
    const component = renderer.create((
      <Theme>
        <Title level={1} color='black' />
        <Title level={1} color='white' />
        <Title level={1} color='light' />
        <Title level={1} color='primary' />
        <Title level={1} color='info' />
        <Title level={1} color='danger' />
        <Title level={1} color='success' />
        <Title level={1} color='warning' />
        <Title level={1} color='#001122' />
        <Title level={1} color='cyan' />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('with decoration', () => {
    const component = renderer.create((
      <Theme>
        <Title level={1} textDecoration='overline' />
        <Title level={1} textDecoration='underline' />
        <Title level={1} textDecoration='line-through' />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('transform', () => {
    const component = renderer.create((
      <Theme>
        <Title level={1} textTransform='uppercase' />
        <Title level={1} textTransform='lowercase' />
        <Title level={1} textTransform='capitalize' />
        <Title level={1} textTransform='full-width' />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('align', () => {
    const component = renderer.create((
      <Theme>
        <Title level={1} textAlign='left' />
        <Title level={1} textAlign='right' />
        <Title level={1} textAlign='center' />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('nowrap', () => {
    const component = renderer.create((
      <Theme>
        <Title level={3} nowrap />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })
})
