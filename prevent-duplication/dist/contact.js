webpackJsonp([1],{

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

var _message = __webpack_require__(9);

var _platzi = __webpack_require__(10);

var _platzi2 = _interopRequireDefault(_platzi);

var _renderToDom = __webpack_require__(5);

var _renderToDom2 = _interopRequireDefault(_renderToDom);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _teachers = __webpack_require__(19);

var _teachers2 = _interopRequireDefault(_teachers);

var _teachers3 = __webpack_require__(20);

var _teachers4 = _interopRequireDefault(_teachers3);

__webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_teachers4.default, { data: _teachers2.default }), document.getElementById('container'));

_teachers2.default.teachers.forEach(function (teacher) {
  var element = document.createElement('li');
  element.textContent = teacher.name;
  (0, _renderToDom2.default)(element);
});

document.write(_message.firstMessage);
(0, _message.delayedMessage)();

var img = document.createElement('img');
img.setAttribute('src', _platzi2.default);
img.setAttribute('width', 50);
img.setAttribute('height', 50);
document.body.append(img);

console.log('Webpack con webpack.config...');

/***/ })

},[37]);