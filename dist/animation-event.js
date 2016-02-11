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
		global.animationEvent = mod.exports;
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

	function animationEvent() {
		var VENDOR = [['animation', 'animationstart', 'animationiteration', 'animationend'], ['MozAnimation', 'mozAnimationStart', 'mozAnimationIteration', 'mozAnimationEnd'], ['OAnimation', 'oAnimationStart', 'oAnimationIteration', 'oAnimationEnd'], ['webkitAnimation', 'webkitAnimationStart', 'webkitAnimationIteration', 'webkitAnimationEnd']];
		return (0, _detect2.default)(VENDOR);
	}

	exports.default = animationEvent;
});
//# sourceMappingURL=animation-event.js.map
