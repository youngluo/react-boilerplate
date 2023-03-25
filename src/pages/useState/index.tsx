import { FC, useState, useCallback } from 'react'
import { Button } from 'antd'
import { Code } from '@/components'

const UseState: FC = () => {
  const [state, setState] = useState(0)

  const onMultipleUpdater = useCallback(() => {
    setState((c) => c + 1)
    setState((c) => c + 1)
    setState((c) => c + 1)
  }, [])

  return (
    <>
      <Code>
        {`
          const [state, setState] = useState(0)
          const onMultipleUpdater = useCallback(() => {
            setState((c) => c + 1)
            setState((c) => c + 1)
            setState((c) => c + 1)
          }, [])
        `}
      </Code>
      <Button onClick={onMultipleUpdater} type="primary">
        {state}
      </Button>
    </>
  )
}

export default UseState
