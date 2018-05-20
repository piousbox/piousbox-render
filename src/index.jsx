import React from 'react'

class Newsitems extends React.Component {
  render () {
    console.log('+++ Newsitems render')
    return (
      <div>newsitems</div>
    )
  }
}

class Newsitem extends React.Component {
  render () {
    console.log('+++ Newsitem render')
    return (
      <div>newsitem</div>
    )
  }
}

class NewsitemGallery extends React.Component {
  render () {
    console.log('+++ NewsitemGallery render')
    return (
      <div>newsitemGallery</div>
    )
  }
}

class NewsitemVideo extends React.Component {
  render () {
    console.log('+++ NewsitemVideo render')
    return (
      <div>newsitem video</div>
    )
  }
}

class NewsitemReport extends React.Component {
  render () {
    console.log('+++ NewsitemReport render')
    return (
      <div>newsitem report</div>
    )
  }
}

export Newsitems
export Newsitem

  /* export default {
  Newsitems,
  Newsitem,
  NewsitemGallery,
  NewsitemReport,
  NewsitemVideo
} */


        
