import { useEffect } from 'react'

const useHover = (ref, onMouseOver, onMouseOut) => {
  useEffect(() => {
    ref.current.addEventListener('mouseover', onMouseOver)
    ref.current.addEventListener('mouseout', onMouseOut)

    return () => {
      ref.current.removeEventListener('mouseover', onMouseOver)
      ref.current.removeEventListener('mouseout', onMouseOut)
    }
  })
}

export default useHover