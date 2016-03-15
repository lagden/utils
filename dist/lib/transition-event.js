define(['exports', './common/detect'], function (exports, _detect) {
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