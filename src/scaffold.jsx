import './scaffold.html'
// import 'babel-core/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

class App extends React.Component {
  render () {
    return (
      <div>App!</div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
