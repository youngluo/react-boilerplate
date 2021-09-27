import { FC, useState, lazy, Suspense } from 'react'

const LazyD2 = lazy(() => import(/* webpackChunkName: "dynamic1" */ './D2'))

const Dashboard: FC = () => {
  const [state, setState] = useState(0)

  return (
    <div onClick={() => setState((v) => v + 1)}>
      dashboard
      {state}
      <Suspense fallback="...">
        <LazyD2 />
      </Suspense>
    </div>
  )
}

export default Dashboard
