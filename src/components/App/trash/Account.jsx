import React from 'react'

import {
  Grid, Row, Col,
  Button, Panel,
  Form, FormGroup, ControlLabel, FormControl,
  Modal,
} from 'react-bootstrap'
import FacebookLogin      from 'react-facebook-login'
import {
  Elements, StripeProvider, injectStripe, CardElement,
} from 'react-stripe-elements'

import config from 'config'
import AppRouter from './AppRouter'

const responseFacebook = (r) => {
  console.log("+++ response:", r)
}

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showConfirm: false, showError: false, showSuccess: false }
    this.handleChange = this.handleChange.bind(this)
    this.doPay        = this.doPay.bind(this) 
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.stripe.createToken().then(({token}) => {
      console.log('+++ received token:', token)
      if (token) {
        let validateInvoiceUrl = `${config.apiUrl}${AppRouter.findInvoice}`
        fetch(validateInvoiceUrl, {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json',
          }),
          body: JSON.stringify({ email: this.state.invoiceEmail, number: this.state.invoiceNumber, amount: this.state.invoiceAmount })
        }).then(r => r.json()).then(_data => {
          if (_data.status === 'ok') {
            this.setState({ showConfirm: true, token })
          } else {
            throw ('+++ cannot validate invoice2:', _data)
          }
        }).catch(_err => {
          console.log('+++ cannot validate invoice:', _err)
          this.setState({ showError: true })
        })
      }
    })
  }

  handleChange (event) {
    let s = {}
    s[event.target.id] = event.target.value
    this.setState(s)
  }

  doPay () {
    let payload = Object.assign({}, { token: this.state.token,
                                      email: this.state.invoiceEmail, number: this.state.invoiceNumber,
                                      amount: this.state.invoiceAmount, })
    let url = `${config.apiUrl}${AppRouter.makePayment}`
    fetch(url, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(payload)
    }).then(r => r.json()).then(_data => {
      console.log('+++ made payment:', _data)
      this.setState({ showSuccess: true, showConfirm: false })
    }).catch(_err => {
      console.log('+++ cannot pay:', _err)
      this.setState({ showError: true, showConfirm: false })
    })
  }

  render () {
    return (
      <Form horizontal onSubmit={this.handleSubmit}>

        <Modal show={this.state.showError} onHide={() => {this.setState({ showError: false }) }}>
          <Modal.Header closeButton>
            <Modal.Title>Something went wrong</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>It looks like you cannot pay this invoice. Please try again.</p>
          </Modal.Body>
        </Modal>

        <Modal show={this.state.showSuccess} onHide={() => {this.setState({ showSuccess: false }) }}>
          <Modal.Header closeButton>
            <Modal.Title>Success!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Your payment has been recorded.</p>
          </Modal.Body>
        </Modal>

        <Modal show={this.state.showConfirm} onHide={() => {this.setState({ showConfirm: false }) }}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Payment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Your email: {this.state.invoiceEmail}</p>
            <p>Invoice #: {this.state.invoiceNumber}</p>
            <p>Amount: {this.state.invoiceAmount}</p>
            <Button bsStyle="info" onClick={this.doPay}>Confirm payment</Button>
          </Modal.Body>
        </Modal>

        <FormGroup controlId="invoiceEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" onChange={this.handleChange} />
          </Col>
        </FormGroup>
        <FormGroup controlId="invoiceNumber">
          <Col componentClass={ControlLabel} sm={2}>
            Invoice #
          </Col>
          <Col sm={10}>
            <FormControl type="number" placeholder="" onChange={this.handleChange} />
          </Col>
        </FormGroup>
        <FormGroup controlId="invoiceAmount">
          <Col componentClass={ControlLabel} sm={2}>
            Amount
          </Col>
          <Col sm={10}>
            <FormControl type="number" placeholder="" step="0.01" onChange={this.handleChange} />
          </Col>
        </FormGroup>
        <CardElement />
        <div style={{ clear: 'both' }} >
          <Button bsStyle="info" type="submit" style={{ marginTop: '1em' }} >Next</Button>
        </div>
      </Form>
    )
  }
}

const MyCheckoutForm = injectStripe(CheckoutForm)

class Account extends React.Component {
  render () {
    return (
      <Grid >
        <Row>
          <Col xs={12}>
            <h1>Account</h1>
            <hr />
            <Panel>
              <Row>
                <Col xs={6} xsOffset={3}>
                  <h5 style={{ textAlign: 'center' }}>Pay Invoice</h5>
                  <StripeProvider apiKey={config.stripeKey} >
                    <Elements>
                      <MyCheckoutForm />
                    </Elements>
                  </StripeProvider>
                </Col>
              </Row>
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Account
