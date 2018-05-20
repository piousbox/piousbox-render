'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Newsitems = function (_React$Component) {
  _inherits(Newsitems, _React$Component);

  function Newsitems() {
    _classCallCheck(this, Newsitems);

    return _possibleConstructorReturn(this, (Newsitems.__proto__ || Object.getPrototypeOf(Newsitems)).apply(this, arguments));
  }

  _createClass(Newsitems, [{
    key: 'render',
    value: function render() {
      console.log('+++ Newsitems render');
      return _react2.default.createElement(
        'div',
        null,
        'newsitems'
      );
    }
  }]);

  return Newsitems;
}(_react2.default.Component);

var Newsitem = function (_React$Component2) {
  _inherits(Newsitem, _React$Component2);

  function Newsitem() {
    _classCallCheck(this, Newsitem);

    return _possibleConstructorReturn(this, (Newsitem.__proto__ || Object.getPrototypeOf(Newsitem)).apply(this, arguments));
  }

  _createClass(Newsitem, [{
    key: 'render',
    value: function render() {
      console.log('+++ Newsitem render');
      return _react2.default.createElement(
        'div',
        null,
        'newsitem'
      );
    }
  }]);

  return Newsitem;
}(_react2.default.Component);

var NewsitemGallery = function (_React$Component3) {
  _inherits(NewsitemGallery, _React$Component3);

  function NewsitemGallery() {
    _classCallCheck(this, NewsitemGallery);

    return _possibleConstructorReturn(this, (NewsitemGallery.__proto__ || Object.getPrototypeOf(NewsitemGallery)).apply(this, arguments));
  }

  _createClass(NewsitemGallery, [{
    key: 'render',
    value: function render() {
      console.log('+++ NewsitemGallery render');
      return _react2.default.createElement(
        'div',
        null,
        'newsitemGallery'
      );
    }
  }]);

  return NewsitemGallery;
}(_react2.default.Component);

var NewsitemVideo = function (_React$Component4) {
  _inherits(NewsitemVideo, _React$Component4);

  function NewsitemVideo() {
    _classCallCheck(this, NewsitemVideo);

    return _possibleConstructorReturn(this, (NewsitemVideo.__proto__ || Object.getPrototypeOf(NewsitemVideo)).apply(this, arguments));
  }

  _createClass(NewsitemVideo, [{
    key: 'render',
    value: function render() {
      console.log('+++ NewsitemVideo render');
      return _react2.default.createElement(
        'div',
        null,
        'newsitem video'
      );
    }
  }]);

  return NewsitemVideo;
}(_react2.default.Component);

var NewsitemReport = function (_React$Component5) {
  _inherits(NewsitemReport, _React$Component5);

  function NewsitemReport() {
    _classCallCheck(this, NewsitemReport);

    return _possibleConstructorReturn(this, (NewsitemReport.__proto__ || Object.getPrototypeOf(NewsitemReport)).apply(this, arguments));
  }

  _createClass(NewsitemReport, [{
    key: 'render',
    value: function render() {
      console.log('+++ NewsitemReport render');
      return _react2.default.createElement(
        'div',
        null,
        'newsitem report'
      );
    }
  }]);

  return NewsitemReport;
}(_react2.default.Component);

exports.default = {
  Newsitems: Newsitems,
  Newsitem: Newsitem,
  NewsitemGallery: NewsitemGallery,
  NewsitemReport: NewsitemReport,
  NewsitemVideo: NewsitemVideo
};
