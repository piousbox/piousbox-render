import React from 'react'
import { Row, Col, Grid } from 'react-bootstrap'

import Center from '../Center'

import handshake from './images/handshake.jpg'
import world     from './images/background/world3.jpg'

class ContactUs2 extends React.Component {
  /* constructor(props) {
    super(props)
    this.state = { mapKey: "AIzaSyDq4uuB3LCutinm_3OvMoPeb6vzBdhOpyc" }
  } */
  render () {
    return (
      <div className="page-content" id="contactUsContent">

        <div className="dez-bnr-inr overlay-black-middle bg-img-fix" style={{ backgroundImage: `url(${handshake})` }}>
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">Contact Us</h1>
              <p className="text-white">We are commited to replying to your request within 90 minutes</p>
            </div>
          </div>
        </div>

        <div className="content-area">
          <div className="container">
            <p>Schedule a call at <a className="a-border" href="https://calendly.com/victorp/30min">https://calendly.com/victorp/30min</a> or fill out the form below.</p>
            <div className="row">
              <div className="col-lg-9 col-md-8 col-sm-7 col-xs-12">
                <h4>Contact form</h4>
                <div className="dzFormMsg"></div>
                <div className="p-a30 bg-white clearfix m-b30">
                  <form method="post" className="dzForm" id="contactForm" action="/contact_us.php" >
                    <input type="hidden" value="Contact" name="dzToDo" />
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <div className="input-group"> <span className="input-group-addon"><i className="fa fa-user"></i></span>
                              <input name="name" type="text" required="" className="form-control" placeholder="Your Name" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <div className="input-group"> <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                              <input name="email" type="email" className="form-control" required="" placeholder="Email" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-addon">
                                What is 7 + 5?
                              </span>
                              <input name="verification" type="number" className="form-control" required="" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <div className="input-group"> <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                              <input name="phone" type="text" className="form-control" placeholder="Phone" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <div className="input-group"> <span className="input-group-addon v-align-t"><i className="fa fa-pencil"></i></span>
                              <textarea name="descr" rows="4" className="form-control" required="" placeholder="Your Message"></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button name="submit" type="submit" value="Submit" className="site-button"> <span>Submit</span> </button>
                        </div>
                      </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-5 col-xs-12" >
                <h4>Contact Info</h4>
                <div className="p-a30 bg-white m-b30">
                  <ul className="no-margin">
                    <li className="icon-bx-wraper left m-b30">
                      <div className="icon-bx-xs bg-primary"> <a href="#" className="icon-cell"><i className="fa fa-envelope"></i></a> </div>
                      <div className="icon-content">
                        <h6 className="text-uppercase m-b0 dez-tilte">EMAIL</h6>
                        <p>victor@wasya.co</p>
                      </div>
                    </li>
                    <li className="icon-bx-wraper left m-b30">
                      <div className="icon-bx-xs bg-primary"> <a href="#" className="icon-cell"><i className="fa fa-phone"></i></a> </div>
                      <div className="icon-content">
                        <h6 className="text-uppercase m-b0 dez-tilte"><a className="a-border" href="https://calendly.com/victorp/30min">SCHEDULE A CALL</a></h6>
                        <p>&nbsp;</p>{ /* <p><a href="https://calendly.com/victorp/30min">SCHEDULE A CALL</a></p> */ }
                      </div>
                    </li>
                    <li className="icon-bx-wraper left m-b30">
                      <div className="icon-bx-xs bg-primary"> <a href="#" className="icon-cell"><i className="fa fa-phone"></i></a> </div>
                      <div className="icon-content">
                        <h6 className="text-uppercase m-b0 dez-tilte">PHONE</h6>
                        <p>+1 877 216 3525</p>
                      </div>
                    </li>
                    <li className="icon-bx-wraper left m-b30">
                      <div className="icon-bx-xs bg-primary"> <a href="#" className="icon-cell"><i className="fa fa-map-marker"></i></a> </div>
                      <div className="icon-content">
                        <h6 className="text-uppercase m-b0 dez-tilte">Mailing Address</h6>
                        <p>Wasya co <br />
                          P O Box 26234<br />
                          San Jose, CA 95159</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-12">
                { /* <h4>Our Location</h4>
                <div style={{ height: 450, width: '100%' }}>
                  <GoogleMapReact defaultCenter={{ lat: 37.3195624, lng: -121.9141499 }} defaultZoom={14}
                                  key={this.state.mapKey} bootstrapURLKeys={{ key: this.state.mapKey}} >
                    <MyMapPoint style={{ background: `url(${wImg})`, width: 30, height: 30 }} lat={37.3195624} lng={-121.9141499} />
                  </GoogleMapReact>
                </div> */ }
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactUs2
