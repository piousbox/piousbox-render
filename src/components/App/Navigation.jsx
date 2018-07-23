import React           from 'react'
import PropTypes       from 'prop-types'
import scrollToElement from 'scroll-to-element'
import { connect }     from 'react-redux'
import { browserHistory } from 'react-router'

import Footer from './Footer'

class Header extends React.Component {
  render () {
    return (
      <div className="MainHeader" >
        <div className="inner">
          Hi
        </div>
      </div>)
  }
}

class Navigation extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    // console.log('+++ Navigation:', this.props, this.state)

    return (
      <div className="massiveBg" >
        <Header />
        <div className="page-content" >
          { this.props.children }
        </div>
        <Footer />
      </div>
    )
  }
}

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
}

const mapS = (state, ownProps) => {
  return {
    navCollapse: state.navCollapse,
    currentUser: state.currentUser,
  }
}

export default connect(mapS)(Navigation)

