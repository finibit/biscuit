import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Theme from '../Theme'
import Paragraph from '../Paragraph'

describe('Paragraph', () => {
  test('default', () => {
    const component = renderer.create((
      <Theme>
        <Paragraph />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('color', () => {
    const component = renderer.create((
      <Theme>
        <Paragraph color='light-0' />
        <Paragraph color='#aabbcc' />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('align', () => {
    const component = renderer.create((
      <Theme>
        <Paragraph align='left' />
        <Paragraph align='right' />
        <Paragraph align='center' />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('size', () => {
    const component = renderer.create((
      <Theme>
        <Paragraph size='xs' />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('size responsive', () => {
    const component = renderer.create((
      <Theme>
        <Paragraph size={['xs', 'sm', 'md', 'lg']} />
        <Paragraph size={{ xs: 'xs', sm: 'sm', md: 'md', lg: 'lg' }} />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('padding', () => {
    const component = renderer.create((
      <Theme>
        <Paragraph padding='xs' />
        <Paragraph padding={{}} />
        <Paragraph padding={{ top: 'xs' }} />
        <Paragraph padding={{ right: 'xs' }} />
        <Paragraph padding={{ bottom: 'xs' }} />
        <Paragraph padding={{ left: 'xs' }} />
        <Paragraph padding={{ horizontal: 'xs' }} />
        <Paragraph padding={{ vertical: 'xs' }} />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('padding responsive', () => {
    const component = renderer.create((
      <Theme>
        <Paragraph padding={['xs', 'sm', 'md', 'lg']} />
        <Paragraph padding={{ xs: 'xs', sm: 'sm', md: 'md', lg: 'lg' }} />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('margin', () => {
    const component = renderer.create((
      <Theme>
        <Paragraph margin='xs' />
        <Paragraph margin={{}} />
        <Paragraph margin={{ top: 'xs' }} />
        <Paragraph margin={{ right: 'xs' }} />
        <Paragraph margin={{ bottom: 'xs' }} />
        <Paragraph margin={{ left: 'xs' }} />
        <Paragraph margin={{ horizontal: 'xs' }} />
        <Paragraph margin={{ vertical: 'xs' }} />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('margin responsive', () => {
    const component = renderer.create((
      <Theme>
        <Paragraph margin={['xs', 'sm', 'md', 'lg']} />
        <Paragraph margin={{ xs: 'xs', sm: 'sm', md: 'md', lg: 'lg' }} />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('css', () => {
    const component = renderer.create((
      <Theme>
        <Paragraph css='background-color: #000;' />
        <Paragraph css={{ backgroundColor: '#000' }} />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })
})
