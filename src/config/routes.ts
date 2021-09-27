import _ from 'lodash'

export const loadModules = async () => {
  const requireContext = require.context('@/pages', true, /router\.tsx?$/, 'lazy')
  const modules = await Promise.all(
    requireContext
      .keys()
      .map((path) => requireContext(path))
  )

  return _.flatten(_.map(modules, 'default'))
}
