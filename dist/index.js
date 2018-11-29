"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _components = require("./components/components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  docViewer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  content: {
    display: 'flex',
    flex: 1
  },
  sideBar: {
    width: '300px'
  },
  viewer: {
    flex: 1
  }
};

var DocViewer = function DocViewer(_ref) {
  var classes = _ref.classes,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: "dr-docviewer"
  }, _react.default.createElement(_components.AppBar, null), _react.default.createElement("div", {
    className: "content"
  }, _react.default.createElement(_components.SideBar, null), _react.default.createElement(_components.ContentViewer, null)));
};

var _default = (0, _reactJss.default)(style)(DocViewer);

exports.default = _default;