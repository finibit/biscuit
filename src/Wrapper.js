import React from 'react'
import Theme from './components/Theme'

const Wrapper = (storyFn) => (
  <div style={{
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <Theme>{storyFn()}</Theme>
  </div>
)

export default Wrapper
