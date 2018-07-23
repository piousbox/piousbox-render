import React     from 'react'
import PropTypes from 'prop-types'

import { Grid, Row, Col,
} from 'react-bootstrap'
import { Link } from 'react-router'

import graffiti from './images/graffiti.jpg'

import AppRouter from '../App/AppRouter'

class TermsPage extends React.Component {
  render () {
    return (
      <div>
        <div style={{ backgroundImage: `url(${graffiti})` }} className="dez-bnr-inr overlay-black-middle">
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">Terms of Service</h1>
            </div>
          </div>
        </div>

        { /* <div className="breadcrumb-row">
          <div className="container">
            <ul className="list-inline">
              <li><Link to={AppRouter.rootPath} >Home</Link></li>
              <li> Terms of Service</li>
            </ul>
          </div>
        </div> */ }

        <Grid>
        <Row>
          <Col md={9} sm={12} className="m-b30">
            <br />
            <h1 className="m-b20 m-t0">Terms of Service</h1>
            <div className="dez-separator bg-primary"></div>
            <h2>
                    Web Site Terms and Conditions of Use
            </h2>

            <h3>
                    1. Terms
            </h3>

            <p className="text-justify" >
                    By accessing this web site, you are agreeing to be bound by these 
                    web site Terms and Conditions of Use, all applicable laws and regulations, 
                    and agree that you are responsible for compliance with any applicable local 
                    laws. If you do not agree with any of these terms, you are prohibited from 
                    using or accessing this site. The materials contained in this web site are 
                    protected by applicable copyright and trade mark law.
            </p>

            <h3>
                    2. Use License
            </h3>

            <ol type="a" style={{ marginLeft: '1.2em' }} >
                    <li>
                            Permission is granted to temporarily download one copy of the materials 
                            (information or software) on Wasya co's web site for personal, 
                            non-commercial transitory viewing only. This is the grant of a license, 
                            not a transfer of title, and under this license you may not:
                            
                            <ol type="i" style={{ marginLeft: '1.2em' }} >
                                    <li>modify or copy the materials;</li>
                                    <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                                    <li>attempt to decompile or reverse engineer any software contained on Wasya co's web site;</li>
                                    <li>remove any copyright or other proprietary notations from the materials; or</li>
                                    <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                            </ol>
                    </li>
                    <li>
                            This license shall automatically terminate if you violate any of these restrictions and may be terminated by Wasya co at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
                    </li>
            </ol>

            <h3>
                    3. Disclaimer
            </h3>

            <p className="text-justify" >
                          The materials on Wasya co's web site are provided "as is". Wasya co makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Wasya co does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.
            </p>

            <h3>
                    4. Limitations
            </h3>

            <p className="text-justify" >
                    In no event shall Wasya co or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on Wasya co's Internet site, even if Wasya co or a Wasya co authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
            </p>
                              
            <h3>
                    5. Revisions and Errata
            </h3>

            <p className="text-justify" >
                    The materials appearing on Wasya co's web site could include technical, typographical, or photographic errors. Wasya co does not warrant that any of the materials on its web site are accurate, complete, or current. Wasya co may make changes to the materials contained on its web site at any time without notice. Wasya co does not, however, make any commitment to update the materials.
            </p>

            <h3>
                    6. Links
            </h3>

            <p className="text-justify" >
                    Wasya co has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Wasya co of the site. Use of any such linked web site is at the user's own risk.
            </p>

            <h3>
                    7. Site Terms of Use Modifications
            </h3>

            <p className="text-justify" >
                    Wasya co may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
            </p>

            <h3>
                    8. Governing Law
            </h3>

            <p className="text-justify" >
                    Any claim relating to Wasya co's web site shall be governed by the laws of the State of California without regard to its conflict of law provisions.
            </p>

            <p className="text-justify" >
                    General Terms and Conditions applicable to Use of a Web Site.
            </p>



            <h1>
                    Privacy Policy
            </h1>
            <div className="dez-separator bg-primary"></div>

            <p className="text-justify" >
                    Your privacy is very important to us. Accordingly, we have developed this Policy in order for you to understand how we collect, use, communicate and disclose and make use of personal information. The following outlines our privacy policy.
            </p>

            <ul className="list-check-circle primary" >
                    <li>
                            Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.
                    </li>
                    <li>
                            We will collect and use of personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law.           
                    </li>
                    <li>
                            We will only retain personal information as long as necessary for the fulfillment of those purposes. 
                    </li>
                    <li>
                            We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned. 
                    </li>
                    <li>
                            Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date. 
                    </li>
                    <li>
                            We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.
                    </li>
                    <li>
                            We will make readily available to customers information about our policies and practices relating to the management of personal information. 
                    </li>
            </ul>

            <p className="text-justify" >
                    We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained. 
            </p>                

                              
          </Col>
        </Row>
        </Grid>
      </div>
    )
  }
}

export default TermsPage
