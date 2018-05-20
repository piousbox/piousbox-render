import React from 'react'

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

class Panel extends React.Component {
  render () {
    // console.log('+++ rendering pi Panel:', this.props)
    return (
      <div className="dropShadow">
        <div className="inner">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export { Meta }
export { Panel }

