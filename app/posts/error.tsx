'use client'

import { useEffect } from 'react'

interface ErrorProps {
  error: Error
  reset: () => void
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <h2>Something went wrong...</h2>
      <button onClick={() => reset()}>Try again</button>
    </>
  )
}

export default Error
