define(['exports', 'module', './common/detect'], function (exports, module, _commonDetect) {
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _detect = _interopRequireDefault(_commonDetect);

	function animationEvent() {
		var d = arguments.length <= 0 || arguments[0] === undefined ? document : arguments[0];

		var VENDOR = [['animation', 'animationstart', 'animationiteration', 'animationend'], ['MozAnimation', 'mozAnimationStart', 'mozAnimationIteration', 'mozAnimationEnd'], ['OAnimation', 'oAnimationStart', 'oAnimationIteration', 'oAnimationEnd'], ['webkitAnimation', 'webkitAnimationStart', 'webkitAnimationIteration', 'webkitAnimationEnd']];
		return (0, _detect['default'])(VENDOR, d);
	}

	module.exports = animationEvent;
});
//# sourceMappingURL=animation-event.js.map
