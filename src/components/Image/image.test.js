import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Theme from '../Theme'
import Image from './Image'

describe('Image', () => {
	test('with margin', () => {
		const component = renderer.create((
			<Theme>
				<Image src="" alt="" m={1} />
				<Image src="" alt="" m={32} />
				<Image src="" alt="" m="5%" />
				<Image src="" alt="" mt={1} />
				<Image src="" alt="" mt={32} />
				<Image src="" alt="" mt="5%" />
				<Image src="" alt="" ml={1} />
				<Image src="" alt="" ml={32} />
				<Image src="" alt="" ml="5%" />
				<Image src="" alt="" mb={1} />
				<Image src="" alt="" mb={32} />
				<Image src="" alt="" mb="5%" />
				<Image src="" alt="" mr={1} />
				<Image src="" alt="" mr={32} />
				<Image src="" alt="" mr="5%" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
	})

	test('with padding', () => {
		const component = renderer.create((
			<Theme>
				<Image src="" alt="" p={1} />
				<Image src="" alt="" p={32} />
				<Image src="" alt="" p="5%" />
				<Image src="" alt="" pt={1} />
				<Image src="" alt="" pt={32} />
				<Image src="" alt="" pt="5%" />
				<Image src="" alt="" pl={1} />
				<Image src="" alt="" pl={32} />
				<Image src="" alt="" pl="5%" />
				<Image src="" alt="" pb={1} />
				<Image src="" alt="" pb={32} />
				<Image src="" alt="" pb="5%" />
				<Image src="" alt="" pr={1} />
				<Image src="" alt="" pr={32} />
				<Image src="" alt="" pr="5%" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
  })
  
	test('with size', () => {
		const component = renderer.create((
			<Theme>
				<Image src="" alt="" size="sm" />
				<Image src="" alt="" size={64} />
				<Image src="" alt="" size="5%" />
				<Image src="" alt="" width="sm" />
				<Image src="" alt="" width={64} />
				<Image src="" alt="" width="5%" />
				<Image src="" alt="" height="sm" />
				<Image src="" alt="" height={64} />
				<Image src="" alt="" height="5%" />
				<Image src="" alt="" minWidth={1} />
				<Image src="" alt="" minWidth={64} />
				<Image src="" alt="" minWidth="5%" />
				<Image src="" alt="" minHeight={1} />
				<Image src="" alt="" minHeight={64} />
				<Image src="" alt="" minHeight="5%" />
				<Image src="" alt="" maxWidth={1} />
				<Image src="" alt="" maxWidth={32} />
				<Image src="" alt="" maxWidth="5%" />
				<Image src="" alt="" maxHeight={1} />
				<Image src="" alt="" maxHeight={32} />
				<Image src="" alt="" maxHeight="5%" />
			</Theme>
		))
		expect(component.toJSON()).toMatchSnapshot()
  })
})