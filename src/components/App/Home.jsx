
import React from 'react'
import ReactDOM from 'react-dom'
import { connect }     from 'react-redux'

import { 
  Grid, Row, Col,
  Modal,
  FormGroup, FormControl, ControlLabel,
  Button,
} from 'react-bootstrap'
import { Link } from 'react-router'
import FacebookLogin from 'react-facebook-login'

import { Newsitems } from 'piousbox-render'

import AppRouter from './AppRouter'
import { SET, } from '../../constants'
import { getNewsitems } from '../../actions'

class Home extends React.Component {

  constructor (props) {
    super(props)
    this.responseFacebook = this.responseFacebook.bind(this)
  }

  responseFacebook (response) {
    console.log("+++ fb response", response)
    this.props.dispatch({ type: SET.currentUser, currentUser: response })
    this.props.dispatch(getNewsitems({ currentUser: response }))
  }

  componentWillReceiveProps (nextProps) {
    // console.log('+++ Home nextProps:', nextProps)
  }

  render () {
    // console.log('+++ render home:', this.props)

    if (this.props.newsitems.length > 0) {
      return (
        <div>
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Newsitems</Modal.Title>
            </Modal.Header>
            <Modal.Body><Newsitems newsitems={this.props.newsitems} /></Modal.Body>
          </Modal.Dialog>
        </div>
      )
    }

    return (
      <div className="Home" >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Please Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>This website is a private resource. Please log in to your account, or register to request an account.</p>
            <Grid style={{ width: '100%' }} >
              <Row>
                <Col xs={12} md={6} className='left-half' >
                  <form>
                    <FormGroup>
                      <FormControl type="text" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                      <FormControl type="password" placeholder="Password" />
                    </FormGroup>
                    <Button>Login</Button><br /><br />
                  </form>
                </Col>
                <Col xs={12} md={6} className='right-half' >
                  <FacebookLogin appId="226374318085481" autoLoad={true} fields="name,email"
                    callback={this.responseFacebook} />
                </Col>
              </Row>
              <div className="divider" />
              <div className='request-account'>
                 <Button><Link to={AppRouter.registerLink()}>Request an account</Link></Button>
              </div>
            </Grid>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    )
  }
}

const mapS = (state, ownProps) => {
  return {
    newsitems: state.newsitems,
  }
}

export default connect(mapS)(Home)
