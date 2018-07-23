import React from 'react'

class SectionHeader extends React.Component {
  render () {
    return (
      <div style={{ textAlign: 'center' }} >
        <h2 className="text-uppercase">{ this.props.children }</h2>
        <div className="dez-separator-outer ">
          <div className="dez-separator bg-primary style-skew"></div>
        </div>
      </div>
    )
  }
}

export default SectionHeader
