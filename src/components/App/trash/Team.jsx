import React from 'react'
import ReactDOM from 'react-dom'

import { Grid, Row, Col,
         Panel,
} from 'react-bootstrap'

import Center from '../Center'
import SectionHeader from './SectionHeader'

import victor  from './images/team/victor_500x500.jpg'
import oleg    from './images/team/oleg2.jpg'
import kim     from './images/team/kim_500x500.jpg'
import brad    from './images/team/brad_500x500.jpg'
import steve   from './images/team/steve_500x500.jpg'
import bondar  from './images/team/bondar_500x500.jpg'
import zach    from './images/team/zach_500x500.jpg'
import d       from './images/team/default_500x500.jpg'
import bugra   from './images/team/bugra_500x500.jpg'

class TeamMember extends React.Component {
  render () {
    let description = []
    this.props.member.description.map((p, idx) => {
      description.push(<p key={idx} >{p}</p>)
    })

    let icons = []
    let links = []
    if (this.props.member.links) {
      this.props.member.links.map((icon, idx) => {
        icons.push(<li key={idx} ><a style={{ marginBottom: 10 }} href={icon.link} className={`fa ${icon.icon}`}></a></li>)
        links.push(<li key={idx} ><a style={{ marginBottom: 10 }} href={icon.link} className="btn btn-default" >{icon.title}</a></li>)
      })
    }

    return (
      <div className="dez-box team-member drop-shadow" >
        <div className="dez-media" >
          <div style={{ position: 'relative', width: '80%', paddingTop: '80%', margin: '10%' }} >
            <img style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, borderRadius: '100%' }} src={this.props.member.image}  alt='' />
          </div>
        </div>
        <div className="dez-info p-a20 p-t40 border-1">
          <h4 className="dez-title m-tb0"><a href="#">{this.props.member.name}</a></h4>
          { icons.length > 0 ? <div className="bg-primary skew-content-box"><ul className="dez-social-icon">{ icons }</ul></div> : null }
          <p><em>{this.props.member.title}</em></p>
          { links.length > 0 ? <ul className="readable-links">{ links }</ul> : null }
          { description }
        </div>
        <br /><br />
      </div>
    )
  }
}

class Team extends React.Component {
  constructor(props) {
    super(props)
    this.state = { team: {
      zach: {
        image: zach,
        name: 'Zach Mulholland',
        title: 'CEO',
        description: [],
      },
      steve: {
        image: steve,
        name: 'Stephen Kim',
        title: 'CFO',    // Legal Advisor
        description: [], // 'Stephen is the legal advisor to the team.' ],
        links: [],       // { icon: 'fa-globe', title: 'Website', link: 'https://skim.law' }, ],
      },
      oleg: { image: oleg,
              name: 'Oleg Pudeyev',
              title: 'CTO', // 'Principal Software Developer',
              description: [],
              desciption_trash: [
                "Full stack engineer and tech lead with 12 years of Web development experience with a focus on Ruby on Rails applications. Experienced in hands-on development, design and architecture, technical leadership, mentoring, project management and planning.",
                "His objective is to write code that is beautiful, maintainable and delights customers when it is deployed."
              ],
              links: [],
              links_trash: [
                { icon: 'fa-file-pdf-o', title: 'Resume',   link: 'http://olegp.com/resume/oleg-pudeyev-resume.pdf' },
                { icon: 'fa-github',     title: 'Github',   link: 'https://github.com/p' },
                { icon: 'fa-linkedin',   title: 'LinkedIn', link: 'https://www.linkedin.com/in/olegpudeyev/' },
              ],
      },
      bondar: {
        image: bondar,
        name: 'Julia Bondar',
        title: 'CMO', // Cultural Advisor',
        description: [],
        links: [],
        links_trash: [
          { icon: 'fa-file-pdf-o', title: 'Resume', link: 'https://s3.amazonaws.com/ish-archive/2017/hunter/20171231_bondar_resume.pdf' },
        ],
      },

      // principals and engineers
      victor: { image: victor,
                name: 'Victor Pudeyev',
                title: 'Principal Software Developer',
                description: [
                  "A full-stack engineer focusing on Ruby on Rails, Javascript, devops, and web application development for startups and agile teams."
                ],
                description_trash: [
                  "Victor Piousbox, the great russian bear rider, owner of wooden rubles, conqueror of rivers and dataflows, fearless thinker and tinker, has been with Operaevent since the beginning. He has been honestly producing the technical foundation on which the platform relies for a while now. Before then, he has rotated many software engineering roles in a variety of companies in the Bay Area and elsewhere. In his spare time, he likes to run around in the forest shooting guns in the manner of a sport exercise, ride his motorcycle into the sunset, and read technical documentation to better his skill in technology bending.",
                ],
                links: [
                  { icon: 'fa-file-pdf-o', title: 'Resume',   link: 'https://s3.amazonaws.com/ish-archive/2018/hunter/201806-VictorPudeyev-Resume.pdf' },
                  { icon: 'fa-github',     title: 'Github',   link: 'https://github.com/piousbox' },
                  // { icon: 'fa-linkedin',   title: 'LinkedIn', link: 'https://www.linkedin.com/in/victor-pudeyev-ba9008107/' },
                ],
      },

      kim: { image: kim,
             name: 'Kim Sinton',
             title: 'Principal Software Developer',
             description: [
               "Kim is a front-end engineer with a vast professional experience. He finds innovative strategic solutions to the growing pains of the team and contributes invaluably to our overall vision."
             ],
             links: [
               { icon: 'fa-linkedin', title: 'LinkedIn', link: 'https://www.linkedin.com/in/kim-sinton-3a8848/', },
             ],
      },
      brad: { image: brad,
              name: 'Bradford Prothman-Roberts',
              title: 'Business Developer', // economic advisor
              description: [],
              description_trash: [
                'Brad is a University of South Carolina graduate. He participates in studies of product feasibility, as well as import/export to Latin America.' ],
              links: [
                { icon: 'fa-linkedin', title: 'LinkedIn', link: 'https://www.linkedin.com/in/broadfjord/' },
              ],
      },
      jonathan: {
        image: d,
        name: 'Jonathan Castellano',
        title: 'Business Developer', // public relations specialist
        description: [],
      },
      bugra: {
        image: bugra,
        name: 'Bugra Akturk',
        title: 'Software Developer',
        description: [ 'A dedicated and results-driven Business Development Executive and E-Commerce Consultant with a highly successful background in the achievement of profitable business development through the creation and execution of outstanding e-commerce, travel, fin-tech projects and strategies.',
                       // 'Experienced in working with leading domestic and international brands in the airline and travel industries with the primary focus on exceeding expectations for internet sales and business objectives. Also applied a Square App business model to Turkey fin-tech market successfully.',
                       // 'Possesses excellent interpersonal communication and leadership skills and the ability to develop and maintain mutually beneficial internal and external relationships. Enjoys being part of, as well as managing, motivating and training, a successful and productive team, and thrives in highly pressurized and challenging working environments.'
        ],
        links: [
          { icon: 'fa-file-pdf-o', title: 'Resume', link: 'https://s3.amazonaws.com/ish-archive/2018/hunter/20180406_bugra.pdf' }
        ]
      },
      theresa: {
        image: d,
        name: 'Theresa Campbel',
        title: 'Graphic Designer',
        description: [],
      },
      bibas: {
        image: d,
        name: 'Bibaswan Bhawal',
        title: 'Software Developer',
        description: [],
      },
      casio: {
        image: d,
        name: 'Casio Batista',
        title: 'International Relations',
        description: [],
      },
    } }
  }

  render () {
    return (
      <Grid id="teamContent" >

        <Row>
          <Col xs={12}>
            <SectionHeader>Our Team</SectionHeader>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="section-head text-left">
              <h2 className="text-uppercase">Our Leadership</h2>
              <div className="dez-separator-outer ">
                <div className="dez-separator bg-primary style-skew"></div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={8} xsOffset={2} sm={6} smOffset={3} md={3} mdOffset={0} ><TeamMember member={this.state.team.zach} /></Col>
          <Col xs={8} xsOffset={2} sm={6} smOffset={3} md={3} mdOffset={0} ><TeamMember member={this.state.team.steve} /></Col>
          <Col xs={8} xsOffset={2} sm={6} smOffset={3} md={3} mdOffset={0} ><TeamMember member={this.state.team.oleg} /></Col>
          <Col xs={8} xsOffset={2} sm={6} smOffset={3} md={3} mdOffset={0} ><TeamMember member={this.state.team.bondar} /></Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="section-head text-left">
              <h2 className="text-uppercase">Development Team</h2>
              <div className="dez-separator-outer ">
                <div className="dez-separator bg-primary style-skew"></div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={8} xsOffset={2} sm={6} smOffset={0} md={3} mdOffset={0} ><TeamMember member={this.state.team.victor} /></Col>
          <Col xs={8} xsOffset={2} sm={6} smOffset={0} md={3} mdOffset={0} ><TeamMember member={this.state.team.kim} /></Col>
          <Col xs={8} xsOffset={2} sm={6} smOffset={3} md={3} mdOffset={0} ><TeamMember member={this.state.team.brad} /></Col>
          <Col xs={8} xsOffset={2} sm={6} smOffset={0} md={3} mdOffset={0} ><TeamMember member={this.state.team.bugra} /></Col>
        </Row>
        <Row>
          <Col xs={8} xsOffset={2} sm={6} smOffset={0} md={3} mdOffset={0} ><TeamMember member={this.state.team.jonathan} /></Col>
          <Col xs={8} xsOffset={2} sm={6} smOffset={0} md={3} mdOffset={0} ><TeamMember member={this.state.team.theresa} /></Col>
          <Col xs={8} xsOffset={2} sm={6} smOffset={0} md={3} mdOffset={0} ><TeamMember member={this.state.team.bibas} /></Col>
          <Col xs={8} xsOffset={2} sm={6} smOffset={0} md={3} mdOffset={0} ><TeamMember member={this.state.team.casio} /></Col>
        </Row>
        { /* <Row>
          <Col xs={12}>
            <div className="section-head text-left">
              <h2 className="text-uppercase">Advisors</h2>
              <div className="dez-separator-outer ">
                <div className="dez-separator bg-primary style-skew"></div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={8} xsOffset={2} sm={6} smOffset={3} md={3} mdOffset={0} ><TeamMember member={this.state.team.bondar} /></Col>
        </Row> */ }
      </Grid>
    )
  }
}

export default Team
