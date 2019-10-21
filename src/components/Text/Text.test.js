import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Theme from '../Theme'
import Text from './Text'

describe('Text', () => {
	test('font size', () => {
		const component = renderer.create((
			<Theme>
        <Text fontSize={0} />
        <Text fontSize={1} />
        <Text fontSize={2} />
        <Text fontSize={3} />
        <Text fontSize={4} />
        <Text fontSize={5} />
        <Text fontSize={6} />
        <Text fontSize={50} />
        <Text fontSize="60px" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
  })

  test('font family', () => {
    const component = renderer.create((
      <Theme>
        <Text fontFamily="primary" />
        <Text fontFamily="secondary" />
        <Text fontFamily="sans-serif" />
        <Text fontFamily="serif" />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('font weight', () => {
    const component = renderer.create((
      <Theme>
        <Text fontWeight="light" />
        <Text fontWeight="normal" />
        <Text fontWeight="medium" />
        <Text fontWeight="semi-bold" />
        <Text fontWeight="bold" />
        <Text fontWeight={500} />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('font style', () => {
    const component = renderer.create((
      <Theme>
        <Text fontStyle="normal" />
        <Text fontStyle="italic" />
        <Text fontStyle="oblique" />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('with transform', () => {
    const component = renderer.create((
      <Theme>
        <Text textTransform="capitalize" />
        <Text textTransform="uppercase" />
        <Text textTransform="lowercase" />
        <Text textTransform="full-width" />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('with decoration', () => {
    const component = renderer.create((
      <Theme>
        <Text textDecoration="overline" />
        <Text textDecoration="line-through" />
        <Text textDecoration="underline" />
        <Text textDecoration="underline overline" />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('with decoration', () => {
    const component = renderer.create((
      <Theme>
        <Text color="black" />
        <Text color="white" />
        <Text color="light" />
        <Text color="primary" />
        <Text color="info" />
        <Text color="danger" />
        <Text color="success" />
        <Text color="warning" />
        <Text color="#001122" />
        <Text color="cyan" />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })
})