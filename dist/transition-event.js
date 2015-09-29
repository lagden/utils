define(['exports', 'module', './common/detect'], function (exports, module, _commonDetect) {
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
