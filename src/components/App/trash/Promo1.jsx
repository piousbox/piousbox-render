import React from 'react'

import Contact from './ContactUs2'

import bg4 from './images/background/bg4.jpg'

class Promo1 extends React.Component {
  render () {
    return (
      <div className="page-content">

        <div className="dez-bnr-inr overlay-black-middle bg-img-fix" 
          style={{ backgroundImage: `url(${bg4})` }}>
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <div style={{ height: '100px' }} />
              <h1 className="text-white">Mobile Apps & React Web Development</h1>
              <p className="text-white">No matter what your requirement is, <br />
                we can help you fill it, or refer you to other specialists <br />
                in our network who can address the challenges that your business faces.</p>
            </div>
          </div>
        </div>

        <div className="content-area">
          <div className="container">
            <div className="row">

              <div className="col-lg-12 col-xs-12">
                <p>We can help build the following for you:</p>
                <h2 className="text-uppercase">Informational & Marketing SPA's</h2>
                <div className="dez-separator-outer "><div className="dez-separator bg-primary style-skew"></div></div>

                <p>Single-page apps drive engagement, brand recognition, and result in sales.</p>
                <ul className="list-check-circle primary">
                  <li>Marketing Pages</li>
                  <li>Landing Pages</li>
                  <li>Other Promotional Material</li>
                </ul>
              </div>

            </div>{ /* row */ }
            <div className="row">

              <div className="col-lg-12 col-xs-12">
                <div className="section-head text-center">
                  <h2 className="text-uppercase">eCommerce</h2>
                  <div className="dez-separator-outer "><div className="dez-separator bg-primary style-skew"></div></div>
                  
                  <div className="row">
                    <div className="col-xs-3"></div>
                    <div className="col-xs-6" style={{ textAlign: 'left' }}>
                      <p>We build shopping carts in a variety of technologies - maintainable, & customizable according to your business needs.</p>
                      <ul className="list-check-circle primary" >
                        <li>Spree Commerce (Formerly Solidus)</li>
                        <li>Shopify</li>
                        <li>Magento</li>
                        <li>Custom Shopping Carts</li>
                      </ul>
                    </div>
                    <div className="col-xs-3"></div>
                  </div>{ /* row */ }
                </div>
              </div>

            </div>{ /* row */ }
            <div className="row">

              <div className="col-lg-12 col-xs-12">
                <div className="section-head text-right">
                  <h2 className="text-uppercase">Legacy Migration & Maintenance</h2>
                  <div className="dez-separator-outer "><div className="dez-separator bg-primary style-skew"></div></div>
                  
                  <div className="row">
                    <div className="col-xs-6"></div>
                    <div className="col-xs-6" style={{ textAlign: 'left' }}>
                      <p>Complex systems are built on simpler systems. We can take over maintenance of legacy systems, ongoing feature implementation, and migration to modern tech stacks.</p>
                      <ul className="list-check-circle primary" >
                        <li>Wordpress sites</li>
                        <li>PHP sites</li>
                        <li>Python</li>
                        <li>Iterative feature implementation in modern technologies</li>
                      </ul>
                    </div>
                  </div>{ /* row */ }
                </div>
              </div>

            </div>{ /* row */ }
          </div>
        </div>

        <Contact />
      </div>
    )
  }
}

export default Promo1
