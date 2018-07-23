import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link, browserHistory } from 'react-router'

import AppRouter from '../App/AppRouter'

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className="MainFooter" >
        <div className="inner">
          Copyright (c) 2018 | All Rights Reserved
        </div>
      </div>
    )
  }
}

export default Footer
