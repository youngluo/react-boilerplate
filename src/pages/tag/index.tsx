import { FC, useState } from 'react'

const Dashboard: FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div onClick={() => setCount((c) => c + 1)}>
      {count}
    </div>
  )
}

export default Dashboard
