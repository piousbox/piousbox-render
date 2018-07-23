import React     from 'react'
import {
  Router, Route, hashHistory, browserHistory,
} from 'react-router'
import { connect } from 'react-redux'

import { CONST } from '../../constants'

import { Newsitems, NewsitemGallery } from './index'

import Home       from './Home'
import Navigation from './Navigation'
import AppRouter  from './AppRouter'
import Register   from './Register'
import { AbstractPage, TermsPage } from '../Pages'

const routes = [
  { path: AppRouter.rootPath,
    component: Navigation,
    indexRoute: { component: Home },
    childRoutes: [
      { path: AppRouter.registerPath,     component: Register },
    ],
  },
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>The scaffold!</h1>
        <NewsitemGallery item={{ name: 'test gallery name' }} />
      </div>
    )
  }
}

App.propTypes = {
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

export default connect(mapStateToProps)(App)

