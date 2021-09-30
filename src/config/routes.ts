import { ReactNode, ComponentType } from 'react'
import _ from 'lodash'

export interface IRouter {
  component: () => Promise<{ default: ComponentType<any> }>
  exact?: boolean
  icon: ReactNode
  title: string
  path: string
}

export const loadRoutes = (): IRouter[] => {
  const requireContext = require.context('@/pages', true, /router\.tsx?$/)
  const modules = requireContext
    .keys()
    .map((path) => requireContext(path).default)

  return _.flatten(modules)
}

/**
 * 类型定义辅助函数
 */
export const createRouter = (router: IRouter[]) => router
