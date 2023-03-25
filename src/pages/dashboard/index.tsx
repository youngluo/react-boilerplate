import { FC, useState, useCallback } from 'react'

const Dashboard: FC = () => {
  const [state, setState] = useState(0)

  const onClick = useCallback(() => {
    setTimeout(() => {
      setState((c) => c + 1)
      setState((c) => c + 1)
      setState((c) => c + 1)
    }, 0)
  }, [])

  return (
    <div onClick={onClick}>
      dashboard
      {state}
    </div>
  )
}

export default Dashboard
