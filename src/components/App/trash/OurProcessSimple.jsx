import React from 'react';
import {
  Grid, Row, Col, Button, 
} from 'react-bootstrap'
import { Link } from 'react-router'

import Center from '../Center'
import AppRouter from './AppRouter'

class OurProcess extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Grid id="ourProcessContent" >
        <Row style={{ position: 'relative' }} >
          <Col xs={12}>
            <div style={{height: '200px'}} />
            <Center>
              <h2 className="text-uppercase">Our Process</h2>
              <div className="dez-separator-outer ">
                <div className="dez-separator bg-primary style-skew"></div>
              </div>
            </Center>
          </Col>
          <Col xs={10} xsOffset={1} md={8} mdOffset={2}>
            <p >We work in iterative cycles. The methodology we use is sprint and kanban. Our preferred sprint length is the industry-standard 2 weeks. Kanban refers to keeping tracks of small, accomplishable tasks by means of cards, and moving the cards through lanes. Our typical lanes are "todo", "doing" and "done", although this varies as the complexity grows.</p>
            <Center><Link to={AppRouter.ourProcessLink()}><Button bsStyle="success" >Read More</Button></Link></Center>
            <div style={{height: '200px'}} />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default OurProcess

