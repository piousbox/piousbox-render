import React from 'react';

import { Grid, Row, Col, } from 'react-bootstrap'

import Center from '../Center'

import assembly from './images/background/assembly.jpg'
import scrum    from './images/agile-scrum.jpg'

class OurProcess extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <div style={{ backgroundImage: `url(${assembly})` }} className="dez-bnr-inr overlay-black-middle">
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">Our Process</h1>
            </div>
          </div>
        </div>

        <Grid id="ourProcessContent" className="description" >
          <Row>
            <Col xs={12} xsOffset={0} md={8} mdOffset={2}>
              <br /><br />
              <p >We work in iterative cycles. The methodology we use is sprint and kanban. Our preferred sprint length is the industry-standard 2 weeks. Kanban refers to keeping tracks of small, accomplishable tasks by means of cards, and moving the cards through lanes. Our typical lanes are "todo", "doing" and "done", although this varies as the complexity grows. If the work is split by team function, this is reflected by the lanes. There can be additional lanes for "content", "Q/A", "graphics", "marketing", and "sales". Our iterative cycle consists of the following steps:</p>

              <div className="star-wrapper">
                <div className="star">
                  <div>
                    <h5>Step 1: Scope & Mockup</h5>
                    <div className="arrow"></div>
                  </div>
                  <div>
                    <h5>Step 2: Develop & Test</h5>
                    <div className="arrow"></div>
                  </div>
                  <div>
                    <h5>Step 3: Deploy & Automate</h5>
                    <div className="arrow"></div>
                  </div>
                  <div>
                    <h5>Step 4: Monitor & Collect Feedback</h5>
                    <div className="arrow"></div>
                  </div>
                  <div>
                    <h5>Step 5: Benchmark & Pentest</h5>
                    <div className="arrow"></div>
                  </div>
                  <em>Agile<br />Scrum</em>
                </div>
              </div>

              { /* <ul style={{ color: 'white' }} >
                <li>Scope & Mockup</li>
                <li>Develop & Test</li>
                <li>Deploy & Automate</li>
                <li>Monitor & Collect Feedback</li>
                <li>Benchmark & Pentest</li>
              </ul> */ }

              <p>Kanban and spring planning help us split the work into accomplishable tasks. We would rather deliver early, than allow scope creep and deliver late. It is important to note that the work is iterative, as opposed to waterfall. After some scoping and mocking is done, and some software is built and deployed, and accepted, there is typically more scoping and more development. This relieves the stress on the shareholders, who aren't required to specify the scope correctly at the onset of the project. In prototyping and delivering viable early-stage products, it is critical to keep the scope flexible, as it inevitably changes during the project run.</p>
            </Col>
          </Row>
          <Row style={{ position: 'relative' }} >
            { /* <Col xs={12}>
              <Center>
                <h2 className="text-uppercase">Our Process</h2>
                <div className="dez-separator-outer ">
                  <div className="dez-separator bg-primary style-skew"></div>
                </div>
              </Center>
            </Col> */ }
            <ul className="timeline">
              <Col xs={11} xsOffset={1} md={6} mdOffset={6} >
                <li className="inverted" >
                  <div className="badge"><i className="glyphicon glyphicon-blackboard"></i></div>
                  <div className="panel">
                    <div className="timeline-heading">
                      <h4 className="title">Step 1. Scope & Mockup</h4>
                    </div>
                    <div className="body">
                      <p>We are good at estimating how long it will take to deliver code. It is a part of our job. In order to arrive at accurate estimates, we break down the work into accomplishable, measurable chunks. Optionally, we calculate the velocity of the team (how quickly stuff gets done) to adjust future estimates.</p>
                      <p>We separate graphic design from backend development. We strive to have different team members handling each category of tasks, although in a small enough team that is not possible. We prefer to sign off on mockups before they are implemented, to relieve the stress on the developers. We understand that frontend work and backend work involve very different ways of thinking, and prefer to hand off front- and back-end tasks to different team members.</p>
                    </div>
                  </div>
                </li>
                <li className="inverted" >
                  <div className="badge" ><i className="glyphicon glyphicon-wrench"></i></div>
                  <div className=' panel' >
                    <div className="timeline-heading">
                      <h4 className="title">Step 2. Develop & Test</h4>
                    </div>
                    <div className='body' >
                      <p>The majority of work happens in this step.</p>
                      <p>Although Quality Assurance (Q/A) is often a separate step from development, we think of it as one. The developer writes the tests for her own code, in the process called test-driven development (TDD). Depending on the client needs, we may also implement behavior-driven development (BDD). If we add a separate Q/A step to the development cycle, as per client needs, we still keep development test-driven.</p>
                    </div>
                  </div>
                </li>
                <li className='inverted' >
                  <div className="badge info"><i className="glyphicon glyphicon-modal-window"></i></div>
                  <div className='panel' >
                    <div className="timeline-heading">
                      <h4 className="title">Step 3. Deploy & Automate</h4>
                    </div>
                    <div className="body">
                      <p>Delivering software can be more difficult than making it. That is why we build and use automation tools as a part of our job. Seamless deployments, automatic deployments relieve stress on the team and reduce mistakes and bugs. We balance application complexity against automation complexity: where it is appropriate, we increase automation; at other times, we increase the application layer.</p>
                    </div>
                  </div>
                </li>
                <li className="inverted">
                  <div className="badge info"><i className="glyphicon glyphicon-thumbs-up"></i></div>
                  <div className="panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Step 4. Monitor & Collect Feedback</h4>
                    </div>
                    <div className="body">
                      <p>Monitoring here refers to automatic health checks that are built into the infrastructure. Backups and disaster recovery are also done during this step. Collecting feedback is more human: we sit with stakeholders and end users and discuss how the software is performing, what should be changed and improved upon. Collecting and acting on feedback from the actual users is a critical component of our development cycle.</p>
                    </div>
                  </div>
                </li>
                <li className="inverted">
                  <div className="badge info"><i className="glyphicon glyphicon-hand-right"></i></div>
                  <div className='panel'>
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Step 5. Benchmark & Pentest</h4>
                    </div>
                    <div className="body">
                      <p>Depending on client needs we benchmark the performance of the application. This is an early step in getting it ready to scale. Some scaling decisions are made during the development step: we always strive to make scalable technology decisions. In order to actually scale, we measure throughput and application performance, and tweak settings and components. The make informed decisions, backed by data, when addressing specific scaling issues.</p>
                      <p>Privacy and security are a part of our job. We perform penetration testing and security testing according to client needs and latest industry standards.</p>
                      <p>At the end of step 5, we are ready to sit with stakeholders to address the current needs and outline the next tasks, that go into the next sprint. Our preferred sprint length is the industry-standard 2 weeks.</p>
                    </div>
                  </div>
                </li>
              </Col>
              <div className="clearfix" />
            </ul>
          </Row>
          <Row>
            <Col xs={12} xsOffset={0} md={8} mdOffset={2}>
            <p>At the end of step 5, we are ready to sit with stakeholders to address the current needs and outline the next tasks, that go into the next sprint. Our preferred sprint length is the industry-standard 2 weeks.</p>
            </Col>
          </Row>
          <div style={{ margin: 'auto', textAlign: 'center' }}><img src={scrum} alt='agile scrum' /></div>
          <div style={{ height: '100px' }} />
        </Grid>
      </div>
    )
  }
}

export default OurProcess

