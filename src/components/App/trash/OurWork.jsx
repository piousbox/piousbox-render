import React from 'react';
import {
  Grid, Row, Col, 
  Panel, Button,
} from 'react-bootstrap'

import Center from '../Center'
import Testimonials from './Testimonials'

import skyscrapers from './images/background/skyscrapers.jpg'

import oeImg       from './images/our-work/operaevent.png'
import creekImg    from './images/our-work/creek.png'
import habiticaImg from './images/our-work/habitica.png'
import sturfeeImg  from './images/our-work/sturfee.png'
import serroImg    from './images/our-work/serro.png'
import nexentaImg  from './images/our-work/nexenta.png'

class OurWork extends React.Component {
  constructor(props) {
    super(props)
    let oe       = { title: 'Operaevent - The Portal (2017)',
                     description: [ 'Operaevent is a leader in chatbots for twitch.tv, and platform tools for streamers. Wasya helped Operaevent design and build its flagship product, the Gather platform. The platform introduces a game ecosystem, minigames, spendable currency, and quests and character progression to the stream.' ],
                     image: oeImg, }
    let creek    = { title: 'Creek Enterprise - The Invoicing Tool (2017)',
                     description: [ "Wasya Co build the modern version of Creek's internal invoicing tool. The invoicing tool is used to manage estimates and payments to hundreds of contractors in North America." ],
                     image: creekImg }
    let habitica = { title: 'Habitica - Modifications to the Core Platform (2016)',
                     description: [ 'We helped Habitica with backend work, developing the next version of the habitica.com platform.' ],
                     image: habiticaImg }
    let sturfee  = { title: 'Sturfee - A Build Automation Pipeline (2016) ',
                     description: [ 'Sturfee is a computer vision startup in San Francsico. They use map and image statistical analysis tools to derive "learned" properties from images. Sturfee derives "learned" information such as building position, dimensions, window count, and syncs with other metadata such as business entities and events that happen in a particular geographical location. Applications of this technology include travel & tourism, construction, and self-driving cars & urban navigation.',
                                    'Wasya Co helped Sturfee build a build-and-deploy pipeline that automates deployments to selected code version to a selected environment. This ultimately results in much higher team efficiency, as engineers can take a hands-off approach to infrastructure management, and focus instead on research and development, and building out the actual product.' ],
                     image: sturfeeImg }
    let serro    = { title: 'Serro LLC - The Project Management Tool (2014)',
                     description: [ 'Serro builds datacenters for enterprise clients in North America. Managing multiple construction projects is challenging, and Serro designed a custom project management tool to accomplish this task. Wasya Co built and deployed the tool over 4 months.' ],
                     image: serroImg }
    let nexenta  = { title: 'Nexenta - The Horizon Dashboard (2014)',
                     description: [ 'Among other projects, Nexenta required building a front-end component to one of its storage adapters. Nexenta plugs into Swift, a component of OpenStack, to provide object storage to the OpenStack cluster. The Nexenta Horizon Dashboard is the User Interface component that allows admins to install and monitor it. We implemented the dashboard in agile, iterative manner over the course of one month.' ],
                     image: nexentaImg,
                     imageStyle: { border: '2px solid black' } }

    this.state = { samples: [ oe, creek, habitica, sturfee, serro, nexenta, ] }
  }

  render () {
    let ourWork = []
    this.state.samples.map((sample, idx) => {
      let ps = []
      sample.description.map((p, idx2) => {
        ps.push(<p key={idx2}>{p}</p>)
      })

      ourWork.push(
        <Col key={idx} xs={12} md={6}>
          <div className="drop-shadow">
            <Panel>
              <h3 style={{ textAlign: 'center' }} >{sample.title}</h3>
              <img style={sample.imageStyle} src={sample.image} alt={sample.title} />
              <br /><br />
              { ps }
            </Panel>
          </div>
        </Col>)
    })

    return (
      <div>
        <div style={{ backgroundImage: `url(${skyscrapers})` }} className="dez-bnr-inr overlay-black-middle">
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">Our Work</h1>
            </div>
          </div>
        </div>

        <Grid id="ourWorkContent" className="description" >
          <Row>
            <Col xs={12} xsOffset={0} md={12} mdOffset={0} >
              <br /><br />
              <p >Some of our clients over the years have included the following.</p>
            </Col>
          </Row>
          <Row>{ ourWork }</Row>
          <Testimonials />
          <div style={{ height: '100px' }} />
        </Grid>
      </div>
    )
  }
}

export default OurWork

