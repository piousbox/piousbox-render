'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagFeature = exports.Panel = exports.NewsitemReport = exports.NewsitemVideo = exports.NewsitemPhoto = exports.NewsitemGallery = exports.Newsitem = exports.Newsitems = exports.Meta = exports.Feature = exports.Features = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Features = function (_React$Component) {
  _inherits(Features, _React$Component);

  function Features() {
    _classCallCheck(this, Features);

    return _possibleConstructorReturn(this, (Features.__proto__ || Object.getPrototypeOf(Features)).apply(this, arguments));
  }

  _createClass(Features, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'Features'
      );
    }
  }]);

  return Features;
}(_react2.default.Component);

var Feature = function (_React$Component2) {
  _inherits(Feature, _React$Component2);

  function Feature() {
    _classCallCheck(this, Feature);

    return _possibleConstructorReturn(this, (Feature.__proto__ || Object.getPrototypeOf(Feature)).apply(this, arguments));
  }

  _createClass(Feature, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'One Feature'
      );
    }
  }]);

  return Feature;
}(_react2.default.Component);

var Meta = function (_React$Component3) {
  _inherits(Meta, _React$Component3);

  function Meta() {
    _classCallCheck(this, Meta);

    return _possibleConstructorReturn(this, (Meta.__proto__ || Object.getPrototypeOf(Meta)).apply(this, arguments));
  }

  _createClass(Meta, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'span',
          null,
          'Meta:'
        ),
        this.props.children
      );
    }
  }]);

  return Meta;
}(_react2.default.Component);

var Newsitems = function (_React$Component4) {
  _inherits(Newsitems, _React$Component4);

  function Newsitems() {
    _classCallCheck(this, Newsitems);

    return _possibleConstructorReturn(this, (Newsitems.__proto__ || Object.getPrototypeOf(Newsitems)).apply(this, arguments));
  }

  _createClass(Newsitems, [{
    key: 'render',
    value: function render() {
      // console.log('+++ Newsitems render', this.props, this.state)
      if (!this.props.items) {
        return null;
      }
      var newsitems = [];
      var idx = 0;
      this.props.items.map(function (i) {
        if (i.item_type === 'report') {
          newsitems.push(_react2.default.createElement(
            'div',
            { key: idx++ },
            _react2.default.createElement(NewsitemReport, { item: i })
          ));
        } else if (i.item_type === 'gallery') {
          // newsitems.push(<div key={idx++}><NewsitemGallery item={i} /></div>)
        } else if (i.item_type === 'video') {
          // newsitems.push(<div key={idx++}><NewsitemVideo item={i} /></div>)
        } else if (i.item_type === 'photo') {
          // newsitems.push(<div key={idx++}><NewsitemPhoto item={i} /></div>)
        }
      });
      return _react2.default.createElement(
        'div',
        null,
        newsitems,
        ' '
      );
    }
  }]);

  return Newsitems;
}(_react2.default.Component);

var Newsitem = function (_React$Component5) {
  _inherits(Newsitem, _React$Component5);

  function Newsitem() {
    _classCallCheck(this, Newsitem);

    return _possibleConstructorReturn(this, (Newsitem.__proto__ || Object.getPrototypeOf(Newsitem)).apply(this, arguments));
  }

  _createClass(Newsitem, [{
    key: 'render',
    value: function render() {
      // console.log('+++ Newsitem render')
      if (!this.props.item) {
        return null;
      }
      var i = this.props.item;
      switch (i.item_type) {
        case 'report':
          return _react2.default.createElement(NewsitemReport, { item: i });
        case 'gallery':
          return _react2.default.createElement(NewsitemGallery, { item: i });
        case 'video':
          return _react2.default.createElement(NewsitemVideo, { item: i });
        case 'photo':
          return _react2.default.createElement(NewsitemPhoto, { item: i });
        default:
          console.log('+++ 23e This shouldnt happen');
      }
    }
  }]);

  return Newsitem;
}(_react2.default.Component);

var NewsitemGallery = function (_React$Component6) {
  _inherits(NewsitemGallery, _React$Component6);

  function NewsitemGallery() {
    _classCallCheck(this, NewsitemGallery);

    return _possibleConstructorReturn(this, (NewsitemGallery.__proto__ || Object.getPrototypeOf(NewsitemGallery)).apply(this, arguments));
  }

  _createClass(NewsitemGallery, [{
    key: 'render',
    value: function render() {
      // console.log('+++ NewsitemGallery render')
      return _react2.default.createElement(
        'div',
        null,
        'newsitemGallery'
      );
    }
  }]);

  return NewsitemGallery;
}(_react2.default.Component);

var NewsitemPhoto = function (_React$Component7) {
  _inherits(NewsitemPhoto, _React$Component7);

  function NewsitemPhoto() {
    _classCallCheck(this, NewsitemPhoto);

    return _possibleConstructorReturn(this, (NewsitemPhoto.__proto__ || Object.getPrototypeOf(NewsitemPhoto)).apply(this, arguments));
  }

  _createClass(NewsitemPhoto, [{
    key: 'render',
    value: function render() {
      // console.log('+++ NewsitemPhoto render')
      return _react2.default.createElement(
        'div',
        null,
        'newsitemPhoto'
      );
    }
  }]);

  return NewsitemPhoto;
}(_react2.default.Component);

var NewsitemVideo = function (_React$Component8) {
  _inherits(NewsitemVideo, _React$Component8);

  function NewsitemVideo() {
    _classCallCheck(this, NewsitemVideo);

    return _possibleConstructorReturn(this, (NewsitemVideo.__proto__ || Object.getPrototypeOf(NewsitemVideo)).apply(this, arguments));
  }

  _createClass(NewsitemVideo, [{
    key: 'render',
    value: function render() {
      // console.log('+++ NewsitemVideo render', this.props, this.state)

      var linkPath = '/en/videos/show/' + this.props.item.youtube_id; // @TODO: abstract
      return _react2.default.createElement(
        Panel,
        { className: 'Newsitem NewsitemVideo' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: linkPath },
          _react2.default.createElement('img', { src: 'https://img.youtube.com/vi/' + this.props.item.youtube_id + '/0.jpg', width: '100%', alt: '' })
        ),
        _react2.default.createElement(
          'h3',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: linkPath },
            this.props.item.name
          )
        ),
        _react2.default.createElement(Meta, { item: this.props.item })
      );
    }
  }]);

  return NewsitemVideo;
}(_react2.default.Component);

var NewsitemReport = function (_React$Component9) {
  _inherits(NewsitemReport, _React$Component9);

  function NewsitemReport() {
    _classCallCheck(this, NewsitemReport);

    return _possibleConstructorReturn(this, (NewsitemReport.__proto__ || Object.getPrototypeOf(NewsitemReport)).apply(this, arguments));
  }

  _createClass(NewsitemReport, [{
    key: 'render',
    value: function render() {
      // console.log('+++ NewsitemReport:', this.props, this.state)

      if (!this.props.item) {
        return null;
      }

      return _react2.default.createElement(
        Panel,
        { className: 'Newsitem NewsitemReport' },
        _react2.default.createElement(
          'h2',
          null,
          this.props.item.name
        ),
        _react2.default.createElement(Meta, { item: this.props.item })
      );
    }
  }]);

  return NewsitemReport;
}(_react2.default.Component);

var Panel = function (_React$Component10) {
  _inherits(Panel, _React$Component10);

  function Panel() {
    _classCallCheck(this, Panel);

    return _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).apply(this, arguments));
  }

  _createClass(Panel, [{
    key: 'render',
    value: function render() {
      // console.log('+++ rendering pi Panel:', this.props)
      return _react2.default.createElement(
        'div',
        { className: 'dropShadow {this.props.className}' },
        _react2.default.createElement(
          'div',
          { className: 'inner' },
          this.props.children
        )
      );
    }
  }]);

  return Panel;
}(_react2.default.Component);

/**
 * First newsitem of a tag, most likely, for homepage
 */


var TagFeature = function (_React$Component11) {
  _inherits(TagFeature, _React$Component11);

  function TagFeature(props) {
    _classCallCheck(this, TagFeature);

    var _this11 = _possibleConstructorReturn(this, (TagFeature.__proto__ || Object.getPrototypeOf(TagFeature)).call(this, props));

    _this11.state = { router: props.router };
    return _this11;
  }

  _createClass(TagFeature, [{
    key: 'render',
    value: function render() {
      // console.log('+++ TagFeature:', this.props, this.state)
      if (!this.props.item) {
        return null;
      }
      var tag = this.props.item;

      return _react2.default.createElement(
        'div',
        { className: 'TagFeature' },
        _react2.default.createElement(
          'div',
          { className: 'inner' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            _react2.default.createElement(
              'h1',
              null,
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: this.state.router.tagLink(tag) },
                tag.name
              )
            )
          ),
          _react2.default.createElement(Newsitem, { item: tag.newsitems[0] }),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: this.state.router.tagLink(tag) },
            'See More'
          )
        )
      );
    }
  }]);

  return TagFeature;
}(_react2.default.Component);

exports.Features = Features;
exports.Feature = Feature;
exports.Meta = Meta;
exports.Newsitems = Newsitems;
exports.Newsitem = Newsitem;
exports.NewsitemGallery = NewsitemGallery;
exports.NewsitemPhoto = NewsitemPhoto;
exports.NewsitemVideo = NewsitemVideo;
exports.NewsitemReport = NewsitemReport;
exports.Panel = Panel;
exports.TagFeature = TagFeature;
