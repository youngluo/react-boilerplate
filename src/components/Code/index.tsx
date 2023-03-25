import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { js_beautify as jsBeautify } from 'js-beautify'
import { Prism } from 'react-syntax-highlighter'
import { FC, ReactNode, useMemo } from 'react'
import _ from 'lodash'
import styles from './index.scss'

interface CodeProps {
  children: ReactNode
}

const Code: FC<CodeProps> = ({ children }) => {
  const child = useMemo(
    () =>
      jsBeautify(_.toString(children), {
        space_in_empty_paren: true,
        indent_size: 2
      }),
    [children]
  )

  return (
    <Prism
      className={styles.container}
      language="javascript"
      style={tomorrow}
      showLineNumbers>
      {child}
    </Prism>
  )
}

export default Code
