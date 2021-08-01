import { lazy } from 'react'
import _ from 'lodash-es'

const routes = require
  .context('@/pages', true, /router\.ts$/)
  .keys()
  .map((path: string) => require(`@/pages/${path.slice(2)}`).default)

export default _.flatten(routes).map((route) => ({ ...route, component: lazy(route.component) }))