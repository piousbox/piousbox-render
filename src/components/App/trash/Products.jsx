import React from 'react'
import ReactDom from 'react-dom'

import { Grid, Row, Col } from 'react-bootstrap'

import styles from './_App.scss'

import { Footer } from '../Footer'

import bg from './images/noisy_grid.png'

class Products extends React.Component {
  render () {
    return (
      <div style={{ backgroundImage: `url(${bg})` }}>
        <br /><br /><br />
        <h1 style={{ textAlign: 'center' }}>Our Products</h1>
        <Grid>
          <Row>
            <Col xs={6}>
              <h1>Microstes3 Cluster</h1>
              A modern content management system (CMS). It's modular and componentized. Written in ruby on rails.
              <p><a href="http://wiki.wasya.co/index.php/Microsites_Cluster">http://wiki.wasya.co/index.php/Microsites_Cluster</a></p>
            </Col>
            <Col xs={6}>
              <h1>Bootstraps</h1>
              <p>Free to use! When starting a project, you can use a boostrap or seed, such as angular seed. We publish the ones we use for starting projects in-house. They are similar, but not the same, as some bootstraps available publicly for the same frameworks.</p>
              <ul>
                <li><a href="https://github.com/piousbox/wasya_co_react/tree/0.0.6">React bootstrap</a></li>
                <li><a href="https://github.com/piousbox/wired-rails-project">Ruby on Rails bootstrap</a></li>
              </ul>
            </Col>
          
            <Col xs={6}>
              <h1>Haikubox</h1>
              <p>A simple password manager that keeps track of n-tubles of three: location, username, password. The 3-line stanza is like a haiku.</p>
              <p><a href="https://github.com/Computational-arts-corp/Haikubox">https://github.com/Computational-arts-corp/Haikubox</a></p>
            </Col>
            <Col xs={6}>
              <h1>Ushare</h1>
              <p>Music server written in php. Upload your mp3 collection as a folder, and access it via wifi.</p>
              <p>But careful! Streaming high-quality mp3s in the house will congest the network and your roommates might complain ;-)</p>
              <p><a href="https://github.com/piousbox/music.piousbox.com">https://github.com/piousbox/music.piousbox.com</a></p>
            </Col>

            <Col xs={6}>
              <h1>O0F2</h1>
              <p>Java image processing filters (like Instagram before Instagram was cool)/</p>
              <p><a href='https://github.com/piousbox/O0F2'>https://github.com/piousbox/O0F2</a></p>
            </Col>
          </Row>
        </Grid>
        <Footer />
      </div>
    )
  }
}

export default Products

