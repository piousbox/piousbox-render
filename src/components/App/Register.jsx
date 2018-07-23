import React from 'react'
import ReactDOM from 'react-dom'

import { 
  Grid, Row, Col,
  Modal,
  FormGroup, FormControl, ControlLabel,
  Button,
} from 'react-bootstrap'
import { Link } from 'react-router'

import AppRouter from './AppRouter'

class Register extends React.Component {
  render () {
    return (
      <div className="Register">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Registration</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Sedux.net is a private resource, and registration process involves an approval process. We want to make sure we know who every user is; for this reason we require a credit card purchase. We also need to offset server and development costs, for this reason the account is not free, but rather a reasonable $1/mo recurring charge. To create an account, please (1) buy the subscription, (2) submit your contact information, and optionally (3) wait for a note from us if further steps are required. If you do not feel comfortable with the $1/mo charge, just remember that you can always de-authorize it (thus losing subscription access), and you have Visa 100% fraud protection at your service.</p>
            <Grid style={{ width: '100%' }} >
              <Row>
                <Col xs={12} className='left-half' >
                  <form>
                    <div className="group">
                      <FormGroup>
                        <FormControl type="text" placeholder="Name (First and Last)" />
                      </FormGroup>
                      <FormGroup>
                        <FormControl type="text" placeholder="Email" />
                      </FormGroup>
                      <FormGroup>
                        <FormControl type="text" placeholder="Phone Number" />
                      </FormGroup>
                    </div>
                    <div className="group">
                      <FormGroup inline>
                        <Row>
                          <Col xs={9}><FormControl type="text" placeholder="Credit Card" /></Col>
                          <Col xs={3}><FormControl type="text" placeholder="CCV" /></Col>
                        </Row>
                      </FormGroup>
                      <div className="center">
                        <Button>Continue</Button>
                      </div>
                    </div>
                  </form>
                </Col>
              </Row>
            </Grid>
            <div style={{ textAlign: 'right' }}>
              <Link to={AppRouter.rootPath}>Go Back</Link>
            </div>
          </Modal.Body>
        </Modal.Dialog>
      </div>)
  }
}

export default Register

