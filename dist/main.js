var global = this;function test() {
}
function doPost() {
}(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = require('./settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App(message) {
    _classCallCheck(this, App);

    this.userName = String(message['user_name']);
    this.body = String(message['text']);

    this.settings = new _settings2['default']();
  }

  _createClass(App, [{
    key: 'run',
    value: function run() {
      // #で始まるメッセージは無視
      if (this.body.match(/^(#|♯)/)) return;

      if (!this.settings.getUserSheetName(this.userName)) return;
    }
  }]);

  return App;
}();

exports['default'] = App;

},{"./settings":3}],2:[function(require,module,exports){
(function (global){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

global.test = function () {
  var params = { user_name: 'app2641', message: '# beginning of message is #' };
  var app = new _app2['default'](params);
  app.run();
};

global.doPost = function (e) {
  var app = new _app2['default'](e.parameters);
  app.run();
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./app":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Settings = function () {
  function Settings() {
    _classCallCheck(this, Settings);

    // setting sheet id
    var spreadsheetId = '1vewqKuhv1z-W5QGVJFjIu7JOeoyCenvkKvN1p2MKWn4';
    this.spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  }

  _createClass(Settings, [{
    key: 'getUserSheetName',
    value: function getUserSheetName(name) {
      if (this.sheetName) return this.sheetName;

      var sheet = this.spreadsheet.getSheetByName('Users');
      var values = sheet.getRange("A1:B" + sheet.getLastRow()).getValues();
      Logger.log(values);
    }
  }]);

  return Settings;
}();

exports['default'] = Settings;

},{}]},{},[2]);
