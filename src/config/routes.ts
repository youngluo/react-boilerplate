import _ from 'lodash'

const routes = require
  .context('@/pages', true, /router\.ts$/)
  .keys()
  .map((path: string) => require(`@/pages/${path.slice(2)}`).default)

export default _.flatten(routes)