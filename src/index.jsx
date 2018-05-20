
class Panel {
  render () {
    return (
      <div className="dropShadow">
        <div className="inner">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export { Panel }

