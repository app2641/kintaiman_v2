var global = this;function test() {
}
function doPost() {
}(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CommandFactory = require('./CommandFactory');

var _CommandFactory2 = _interopRequireDefault(_CommandFactory);

var _Settings = require('./Settings');

var _Settings2 = _interopRequireDefault(_Settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App(message) {
    _classCallCheck(this, App);

    this.userName = String(message.user_name);
    this.message = String(message.text);

    this.settings = new _Settings2['default']();
  }

  _createClass(App, [{
    key: 'run',
    value: function run() {
      // #で始まるメッセージは無視
      if (this.message.match(/^(#|♯)/)) return;

      if (!this.settings.getUserSheetName(this.userName)) return;

      var command = new _CommandFactory2['default'].getCommand(this.message);
      if (!command) return;

      command.run(this.settings, this.userName, this.message);
    }
  }]);

  return App;
}();

exports['default'] = App;

},{"./CommandFactory":2,"./Settings":8}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Attendance = require('./Commands/Attendance');

var _Attendance2 = _interopRequireDefault(_Attendance);

var _Leaving = require('./Commands/Leaving');

var _Leaving2 = _interopRequireDefault(_Leaving);

var _Rest = require('./Commands/Rest');

var _Rest2 = _interopRequireDefault(_Rest);

var _GetTimeSheet = require('./Commands/GetTimeSheet');

var _GetTimeSheet2 = _interopRequireDefault(_GetTimeSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommandFactory = function () {
  function CommandFactory() {
    _classCallCheck(this, CommandFactory);
  }

  _createClass(CommandFactory, null, [{
    key: 'getCommand',
    value: function getCommand(message) {
      if (message.match(CommandFactory.ATTENDANCE_REG)) {
        return new _Attendance2['default']();
      } else if (message.match(CommandFactory.LEAVING_REG)) {
        return new _Leaving2['default']();
      } else if (message.match(CommandFactory.REST_REG)) {
        return new _Rest2['default']();
      } else if (message.match(CommandFactory.GET_TIMESHEET_REG)) {
        return new _GetTimeSheet2['default']();
      }

      return null;
    }
  }, {
    key: 'ATTENDANCE_REG',
    get: function get() {
      return (/おは|おっは|はじめ|はろー|ハロー|モーニン|出勤|出社|始め|hello|morning|oha|:sunny:/i
      );
    }
  }, {
    key: 'LEAVING_REG',
    get: function get() {
      return (/おつ|おわり|おわる|さらば|さよう?なら|グッバイ|乙|お疲|お先|終わり|終わる|失礼します|帰|退勤|退社|bye|saraba|get\s*wild|:frog:|:beer:|:beers:/i
      );
    }
  }, {
    key: 'REST_REG',
    get: function get() {
      return (/ランチ|昼食|休憩|:bento:/
      );
    }
  }, {
    key: 'GET_TIMESHEET_REG',
    get: function get() {
      return (/[0-9０-９]+月の(?:業務)?日報/
      );
    }
  }]);

  return CommandFactory;
}();

exports['default'] = CommandFactory;

},{"./Commands/Attendance":3,"./Commands/GetTimeSheet":4,"./Commands/Leaving":5,"./Commands/Rest":6}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DateUtils = require('../DateUtils');

var _DateUtils2 = _interopRequireDefault(_DateUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Attendance = function () {
  function Attendance() {
    _classCallCheck(this, Attendance);
  }

  _createClass(Attendance, [{
    key: 'run',
    value: function run(settings, userName, message) {
      var utils = new _DateUtils2['default']();

      var _utils$parseDate = utils.parseDate(message),
          _utils$parseDate2 = _slicedToArray(_utils$parseDate, 2),
          month = _utils$parseDate2[0],
          day = _utils$parseDate2[1];

      var time = utils.parseTime(message);

      var dailyReportSheetId = settings.getDailyReportSheetId(month);
    }
  }]);

  return Attendance;
}();

exports['default'] = Attendance;

},{"../DateUtils":7}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GetTimeSheet = function () {
  function GetTimeSheet() {
    _classCallCheck(this, GetTimeSheet);
  }

  _createClass(GetTimeSheet, [{
    key: "run",
    value: function run(settings, userName, message) {}
  }]);

  return GetTimeSheet;
}();

exports["default"] = GetTimeSheet;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Leaving = function () {
  function Leaving() {
    _classCallCheck(this, Leaving);
  }

  _createClass(Leaving, [{
    key: "run",
    value: function run(settings, userName, message) {}
  }]);

  return Leaving;
}();

exports["default"] = Leaving;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rest = function () {
  function Rest() {
    _classCallCheck(this, Rest);
  }

  _createClass(Rest, [{
    key: "run",
    value: function run(settings, userName, message) {}
  }]);

  return Rest;
}();

exports["default"] = Rest;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateUtils = function () {
  function DateUtils(now) {
    _classCallCheck(this, DateUtils);

    this.now = now || new Date();
  }

  _createClass(DateUtils, [{
    key: "parseTime",
    value: function parseTime(str) {
      // eslint-disable-line class-methods-use-this
      var normalizedStr = DateUtils.normalize(str);
      var matches = normalizedStr.match(DateUtils.TIME_REG);

      var hour = matches ? matches[1] : this.now.getHours();
      var min = matches ? matches[2] : this.now.getMinutes();
      min = String(min).length === 1 ? "0" + min : min;

      return hour + ":" + min;
    }
  }, {
    key: "parseDate",
    value: function parseDate(str) {
      var normalizedStr = DateUtils.normalize(str);

      if (normalizedStr.match(/(明日|tomorrow)/)) {
        var tomorrow = new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate() + 1);
        return [tomorrow.getMonth() + 1, tomorrow.getDate()];
      }

      if (normalizedStr.match(/(昨日|yesterday)/)) {
        var yesterday = new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate() - 1);
        return [yesterday.getMonth() + 1, yesterday.getDate()];
      }

      var matches = normalizedStr.match(DateUtils.DATE_REG);
      if (matches) {
        var month = parseInt(matches[3], 10);
        var day = parseInt(matches[4], 10);

        return [month, day];
      }

      return [this.now.getMonth() + 1, this.now.getDate()];
    }
  }], [{
    key: "normalize",
    value: function normalize(str) {
      return str.toLowerCase().replace(/[Ａ-Ｚａ-ｚ０-９：／]/g, function (s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
      });
    }
  }, {
    key: "TIME_REG",
    get: function get() {
      return (/(\d{1,2})\s*:\s*(\d{1,2})\s*/
      );
    }
  }, {
    key: "DATE_REG",
    get: function get() {
      return (/((\d{4})[-/年]{1}|)(\d{1,2})[-/月]{1}(\d{1,2})/
      );
    }
  }]);

  return DateUtils;
}();

exports["default"] = DateUtils;

},{}],8:[function(require,module,exports){
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
      var sheet = this.spreadsheet.getSheetByName('Users');
      var userSets = sheet.getRange('A1:B' + sheet.getLastRow()).getValues();
      var matchedUserSet = userSets.find(function (userSet) {
        return userSet[0] === name;
      });

      if (matchedUserSet) {
        return matchedUserSet[1];
      }
      return null;
    }
  }, {
    key: 'getTimeSheetId',
    value: function getTimeSheetId(month) {
      var sheet = this.spreadsheet.getSheetByName('TimeSheets');
      var sheetSets = sheet.getRange('A1:B' + sheet.getLastRow()).getValues();
      var matchedSheetSet = sheetSets.find(function (sheetSet) {
        return sheetSet[0] == month + '\u6708';
      });

      if (matchedSheetSet) {
        return matchedSheetSet[1];
      }
      return null;
    }
  }]);

  return Settings;
}();

exports['default'] = Settings;

},{}],9:[function(require,module,exports){
(function (global){
'use strict';

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

global.test = function () {
  var params = { user_name: 'app2641', message: '# beginning of message is #' };
  var app = new _App2['default'](params);
  app.run();
};

global.doPost = function (e) {
  var app = new _App2['default'](e.parameters);
  app.run();
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./App":1}]},{},[9]);
