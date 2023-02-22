import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { css } from 'styled-components'

import Theme from '../Theme'
import Table from '../Table'

describe('Table', () => {
  test('is rendered', () => {
    const component = renderer.create((
      <Theme>
        <Table />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('table is rendered with custom css', () => {
    const component = renderer.create((
      <Theme>
        <Table css={{ backgroundColor: '#000' }} />
        <Table css='background-color: #111;' />
        <Table css={css`background-color: #222;`} />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('caption is rendered', () => {
    const component = renderer.create((
      <Theme>
        <Table caption='Caption' />
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('header is rendered', () => {
    const component = renderer.create((
      <Theme>
        <Table>
          <Table.Header />
        </Table>
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('header with rows is rendered', () => {
    const component = renderer.create((
      <Theme>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Cell scope='header' />
              <Table.Cell scope='header' />
            </Table.Row>
            <Table.Row>
              <Table.Cell scope='header' />
              <Table.Cell scope='header' />
            </Table.Row>
          </Table.Header>
        </Table>
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('body is rendered', () => {
    const component = renderer.create((
      <Theme>
        <Table>
          <Table.Body />
        </Table>
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('body with rows is rendered', () => {
    const component = renderer.create((
      <Theme>
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell scope='body' />
              <Table.Cell scope='body' />
            </Table.Row>
            <Table.Row>
              <Table.Cell scope='body' />
              <Table.Cell scope='body' />
            </Table.Row>
          </Table.Body>
        </Table>
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('footer is rendered', () => {
    const component = renderer.create((
      <Theme>
        <Table>
          <Table.Footer />
        </Table>
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('footer with rows is rendered', () => {
    const component = renderer.create((
      <Theme>
        <Table>
          <Table.Footer>
            <Table.Row>
              <Table.Cell scope='footer' />
              <Table.Cell scope='footer' />
            </Table.Row>
          </Table.Footer>
        </Table>
      </Theme>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })
})
