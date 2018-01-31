'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _markdownToJsx = require('markdown-to-jsx');

var _markdownToJsx2 = _interopRequireDefault(_markdownToJsx);

var _utils = require('../../utils');

var _Heading = require('../Heading');

var _Paragraph = require('../Paragraph');

var _hocs = require('../hocs');

var _doc = require('./doc');

var _doc2 = _interopRequireDefault(_doc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GrommetMarkdown = function (_Component) {
  _inherits(GrommetMarkdown, _Component);

  function GrommetMarkdown() {
    _classCallCheck(this, GrommetMarkdown);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  GrommetMarkdown.prototype.render = function render() {
    var _props = this.props,
        content = _props.content,
        components = _props.components;


    var heading = [1, 2, 3, 4].reduce(function (obj, level) {
      var result = _extends({}, obj);
      result['h' + level] = {
        component: _Heading.Heading,
        props: { level: level }
      };
      return result;
    }, {});

    var overrides = (0, _utils.deepMerge)({
      p: { component: _Paragraph.Paragraph }
    }, heading, components);

    return _react2.default.createElement(
      _markdownToJsx2.default,
      { options: { overrides: overrides } },
      content
    );
  };

  return GrommetMarkdown;
}(_react.Component);

if (process.env.NODE_ENV !== 'production') {
  (0, _doc2.default)(GrommetMarkdown);
}

exports.default = (0, _recompose.compose)(_hocs.withTheme)(GrommetMarkdown);