import { FC, useState } from 'react'

const Dashboard: FC = () => {
  const [state, setState] = useState(0)

  return (
    <div onClick={() => setState((v) => v + 1)}>
      dashboard
      {state}
    </div>
  )
}

export default Dashboard
