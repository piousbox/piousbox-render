import React     from 'react'
import PropTypes from 'prop-types'

class AbstractPage extends React.Component {
  render () {
    return (
    <i>abstractpage{ this.props.children }</i>
    )
  }
}

AbstractPage.propTypes = {
  children: PropTypes.node.isRequred,
}

export default AbstractPage
