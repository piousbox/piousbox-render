import React from 'react'

import { Grid, Row, Col } from 'react-bootstrap'

import logo3 from './images/logo-4.png' // Wásya Co

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      swipeAnim: 'swipe-anim-pre',
    }

    this.componentDidMount    = this.componentDidMount.bind(this)
    this.componentWillUnmount = this.componentWillUnmount.bind(this)
    this.handleScroll         = this.handleScroll.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll (e) {
    if (window.scrollY > 10) {
      this.setState({ swipeAnim: 'swipe-anim', })
    }
  }

  render () {
    // console.log('+++ About render:', this.props, this.state)

    return (
      <div id="aboutContent" className="p-a30 bg-white m-b40">
        <div className="section-head text-center">
          <h2 className={`text-uppercase ${this.state.swipeAnim}`} ><img src={ logo3 } alt='wasya co' /></h2>
          <div className="dez-separator-outer "><div className="dez-separator style-icon"><i className="fa fa-leaf"></i></div></div>
          <br />
          <p className="justify">We are a software consulting firm that specializes in full-cycle web application development. We service startups and small local businesses that are focused on technology. We utilize modern best development practices and provide our clients with cost-effective and performant tools.</p>
        </div>
        <div className="section-content"></div>
      </div>
    )
  }
}

export default About

