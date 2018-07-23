import React from 'react'
import { Link } from 'react-router-dom'
import { Panel, } from 'react-bootstrap'

class Features extends React.Component {
  render () {
    return (
      <div>Features</div>
    )
  }
}

class Feature extends React.Component {
  render () {
    return (
      <div>One Feature</div>
    )
  }
}

class Meta extends React.Component {
  render () {
    return (
      <div>
        <span>Meta:</span>
        {this.props.children}
      </div>
    )
  }
}

class Newsitems extends React.Component {
  render () {
    console.log('+++ Newsitems render', this.props, this.state)
    if (!this.props.newsitems) { return(null) } 
    let newsitems = []
    let idx = 0
    this.props.newsitems.map(i => {
      if (i.item_type === 'report') {
        newsitems.push(<div key={idx++}><NewsitemReport item={i} /></div>)
      } else if (i.item_type === 'gallery') {
        newsitems.push(<div key={idx++}><NewsitemGallery item={i} /></div>)
      } else if (i.item_type === 'video') {
        newsitems.push(<div key={idx++}><NewsitemVideo item={i} /></div>)
      } else if (i.item_type === 'photo') {
        newsitems.push(<div key={idx++}><NewsitemPhoto item={i} /></div>)
      }
    })
    return (
      <div>{ newsitems }</div>
    )
  }
}

class Newsitem extends React.Component {
  render () {
    // console.log('+++ Newsitem render')
    if (!this.props.item) { return (null) }
    let i = this.props.item
    switch(i.item_type) {
      case 'report':
        return (<NewsitemReport item={i} />)
      case 'gallery':
        return (<NewsitemGallery item={i} />)
      case 'video':
        return (<NewsitemVideo item={i} />)
      case 'photo':
        return (<NewsitemPhoto item={i} />)
      default:
        console.log('+++ 23e This shouldnt happen')
    }
  }
}

class NewsitemGallery extends React.Component {
  render () {
    // console.log('+++ NewsitemGallery render')
    return (
      <div>
        <Panel>
          {this.props.item.name}
        </Panel>
      </div>
    )
  }
}

class NewsitemPhoto extends React.Component {
  render () {
    // console.log('+++ NewsitemPhoto render')
    return (
      <div>newsitemPhoto</div>
    )
  }
}

class NewsitemVideo extends React.Component {
  render () {
    // console.log('+++ NewsitemVideo render', this.props, this.state)

    let linkPath = `/en/videos/show/${this.props.item.youtube_id}` // @TODO: abstract
    return (
      <Panel className="Newsitem NewsitemVideo" >
        <Link to={linkPath}><img src={`https://img.youtube.com/vi/${this.props.item.youtube_id}/0.jpg`} width="100%" alt='' /></Link>
        <h3><Link to={linkPath}>{ this.props.item.name }</Link></h3>
        <Meta item={this.props.item} />
      </Panel>
    )
  }
}

class NewsitemReport extends React.Component {
  render () {
    // console.log('+++ NewsitemReport:', this.props, this.state)

    if (!this.props.item) { return(null) }

    return (
      <Panel className="Newsitem NewsitemReport" >
        <h2>{this.props.item.name}</h2>
        <Meta item={this.props.item} />
        { /* <img style={{ border: '10px solid gray', padding: '10px', width: '100%' }} src={this.props.item.photo_url} alt=''  /> */ }
      </Panel>
    )
  }
}

/**
 * First newsitem of a tag, most likely, for homepage
 */
class TagFeature extends React.Component {
  constructor(props) {
    super(props)
    this.state = { router: props.router }
  }
  render () {
    // console.log('+++ TagFeature:', this.props, this.state)
    if (!this.props.item) { return(null) }
    let tag = this.props.item

    return (
      <div className="TagFeature">
        <div className="inner">
          <div className="title">
            <h1><Link to={this.state.router.tagLink(tag)}>{ tag.name }</Link></h1>
          </div>
          <Newsitem item={tag.newsitems[0]} />
          <Link to={this.state.router.tagLink(tag)}>See More</Link>
        </div>
      </div>
    )
  }
}

export { Features, Feature, Meta }
export { Newsitems, Newsitem, NewsitemGallery, NewsitemPhoto, NewsitemVideo, NewsitemReport }
export { TagFeature }






