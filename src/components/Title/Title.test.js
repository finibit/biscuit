import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Theme from '../Theme'
import Title from './Title'

describe('Title', () => {
	test('with size', () => {
		const component = renderer.create((
			<Theme>
        <Title size={1} />
        <Title size={2} />
        <Title size={3} />
        <Title size={4} />
        <Title size={5} />
        <Title size={6} />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
  })
  
  test('with color', () => {
    const component = renderer.create((
      <Theme>
        <Title size={1} color="black" />
        <Title size={1} color="white" />
        <Title size={1} color="light" />
        <Title size={1} color="primary" />
        <Title size={1} color="info" />
        <Title size={1} color="danger" />
        <Title size={1} color="success" />
        <Title size={1} color="warning" />
        <Title size={1} color="#001122" />
        <Title size={1} color="cyan" />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('with decoration', () => {
    const component = renderer.create((
      <Theme>
        <Title size={1} textDecoration="overline" />
        <Title size={1} textDecoration="underline" />
        <Title size={1} textDecoration="line-through" />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('transform', () => {
    const component = renderer.create((
      <Theme>
        <Title size={1} textTransform="uppercase" />
        <Title size={1} textTransform="lowercase" />
        <Title size={1} textTransform="capitalize" />
        <Title size={1} textTransform="full-width" />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('align', () => {
    const component = renderer.create((
      <Theme>
        <Title size={1} textAlign="left" />
        <Title size={1} textAlign="right" />
        <Title size={1} textAlign="center" />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('nowrap', () => {
    const component = renderer.create((
      <Theme>
        <Title size={3} nowrap />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })
})