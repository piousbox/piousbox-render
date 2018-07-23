import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Grid, Row, Col } from 'react-bootstrap'

import wImg      from './images/w_30x30.png'

class MyMapPoint extends React.Component {
  render () {
    return (<div style={this.props.style} ></div>)
  }
}

class MapInner extends React.Component {
  constructor(props) {
    super(props)
    this.state = { mapKey: "AIzaSyDq4uuB3LCutinm_3OvMoPeb6vzBdhOpyc" }
  }
  render () {
    return (
      <div>
        <h4>Our Location</h4>
        <div style={{ height: 450, width: '100%' }}>
          <GoogleMapReact defaultCenter={{ lat: 37.3195624, lng: -121.9141499 }} defaultZoom={14}
                          key={this.state.mapKey} bootstrapURLKeys={{ key: this.state.mapKey}} >
            <MyMapPoint 
              style={{ background: `url(${wImg})`, width: 30, height: 30 }} 
              lat={37.3195624} lng={-121.9141499} />
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}

class Map extends React.Component {
  render () {
    // console.log('+++ rendering map')

    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <MapInner />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Map
export {
  MapInner,
  Map,
}


