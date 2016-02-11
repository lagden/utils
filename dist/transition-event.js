(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports', './common/detect'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require('./common/detect'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.detect);
		global.transitionEvent = mod.exports;
	}
})(this, function (exports, _detect) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _detect2 = _interopRequireDefault(_detect);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function transitionEvent() {
		var VENDOR = [['transition', 'transitionend'], ['MozTransition', 'mozTransitionEnd'], ['OTransition', 'oTransitionEnd'], ['webkitTransition', 'webkitTransitionEnd']];
		return (0, _detect2.default)(VENDOR)[1];
	}

	exports.default = transitionEvent;
});
//# sourceMappingURL=transition-event.js.map
