import './index.html'
import 'babel-core/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import { Newsitems, NewsitemGallery } from './index'

class Scaffold extends React.Component {
  render () {
    let newsitems = [
      { item_type: 'gallery',
        name: 'test-name-8',
      }
    ]

    return (
      <div>
        <Newsitems newsitems={newsitems} />
        <NewsitemGallery item={{ name: 'test name' }} />
      </div>
    )
  }
}

ReactDOM.render( <Scaffold />, document.getElementById('app') )
