import React from 'react'
import { storiesOf } from '@storybook/react'
import Wrapper from '../../Wrapper'
import Image from './Image'

storiesOf('Image', module)
  .addDecorator(Wrapper)
  .add('with size', () => (
    <Image src="https://picsum.photos/128" alt="picsum" size={64} />
  ))
  .add('with space', () => (
    <>
      <Image src="https://picsum.photos/128" alt="picsum" p={4} />
      <Image src="https://picsum.photos/128" alt="picsum" m={4} />
      <Image src="https://picsum.photos/128" alt="picsum" p={4} />
    </>
  ))