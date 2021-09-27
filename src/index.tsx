import ReactDOM from 'react-dom'
import Root from '@/containers/Root'
import '@/config/interceptors'
import './app.global.scss'

ReactDOM.render(
  <Root />,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept()
}
