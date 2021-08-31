import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import Root from '@/containers/Root'
import '@/config/http.config'
import store from './redux/store'
import './app.global.scss'

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept()
}
