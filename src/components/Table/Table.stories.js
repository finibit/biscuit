import React from 'react'
import { storiesOf } from '@storybook/react'
import Wrapper from '../../Wrapper'
import Table from './Table'

const planets = [
  {
    name: 'Mercury',
    volume: '60,827,208,742',
    density: '5.427',
    mass: '330,104,000,000,000,000,000,000'
  },
  {
    name: 'Venus',
    volume: '928,415,345,893',
    density: '5.243',
    mass: '4,867,320,000,000,000,000,000,000'
  },
  {
    name: 'Earth',
    volume: '1,083,206,916,846',
    density: '5.513',
    mass: '5,972,190,000,000,000,000,000,000'
  },
  {
    name: 'Mars',
    volume: '163,115,609,799',
    density: '3.934',
    mass: '641,693,000,000,000,000,000,000'
  },
  {
    name: 'Jupiter',
    volume: '1,431,281,810,739,360',
    density: '1.326',
    mass: '1,898,130,000,000,000,000,000,000,000'
  },
  {
    name: 'Saturn',
    volume: '827,129,915,150,897',
    density: '0.687',
    mass: '568,319,000,000,000,000,000,000,000'
  },
  {
    name: 'Uranus',
    volume: '68,334,355,695,584',
    density: '1.270',
    mass: '86,810,300,000,000,000,000,000,000'
  },
  {
    name: 'Neptune',
    volume: '62,525,703,987,421',
    density: '1.638',
    mass: '102,410,000,000,000,000,000,000,000'
  }
]

storiesOf('Table', module)
  .addDecorator(Wrapper)
  .add('with data', () => (
    <Table caption='Planets of the solar system'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Volume (km3)</Table.HeaderCell>
          <Table.HeaderCell>Density (g/cm3)</Table.HeaderCell>
          <Table.HeaderCell>Mass (kg)</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {planets.map((planet) => (
          <Table.Row key={planet.name}>
            <Table.Cell>{planet.name}</Table.Cell>
            <Table.Cell>{planet.volume}</Table.Cell>
            <Table.Cell>{planet.density}</Table.Cell>
            <Table.Cell>{planet.mass}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell>Foot 1</Table.Cell>
          <Table.Cell>Foot 2</Table.Cell>
          <Table.Cell>Foot 3</Table.Cell>
          <Table.Cell>Foot 4</Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
  ))
