(function (global, factory) {
	if (typeof define === 'function' && define.amd) {
		define(['exports', 'module', './common/detect'], factory);
	} else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		factory(exports, module, require('./common/detect'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, mod, global.detect);
		global.transitionEvent = mod.exports;
	}
})(this, function (exports, module, _commonDetect) {
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _detect = _interopRequireDefault(_commonDetect);

	function transitionEvent() {
		var d = arguments.length <= 0 || arguments[0] === undefined ? document : arguments[0];

		var VENDOR = [['transition', 'transitionend'], ['MozTransition', 'mozTransitionEnd'], ['OTransition', 'oTransitionEnd'], ['webkitTransition', 'webkitTransitionEnd']];
		return (0, _detect['default'])(VENDOR, d)[1];
	}

	module.exports = transitionEvent;
});
//# sourceMappingURL=transition-event.js.map
