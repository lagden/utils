(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports', './animation-event', './escape-html', './is-element', './qs', './text-node', './transition-event'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require('./animation-event'), require('./escape-html'), require('./is-element'), require('./qs'), require('./text-node'), require('./transition-event'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.animationEvent, global.escapeHtml, global.isElement, global.qs, global.textNode, global.transitionEvent);
		global.utils = mod.exports;
	}
})(this, function (exports, _animationEvent, _escapeHtml, _isElement, _qs, _textNode, _transitionEvent) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.transitionEvent = exports.textNode = exports.qS = exports.isElement = exports.escapeHtml = exports.animationEvent = undefined;

	var _animationEvent2 = _interopRequireDefault(_animationEvent);

	var _escapeHtml2 = _interopRequireDefault(_escapeHtml);

	var _isElement2 = _interopRequireDefault(_isElement);

	var _qs2 = _interopRequireDefault(_qs);

	var _textNode2 = _interopRequireDefault(_textNode);

	var _transitionEvent2 = _interopRequireDefault(_transitionEvent);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	exports.animationEvent = _animationEvent2.default;
	exports.escapeHtml = _escapeHtml2.default;
	exports.isElement = _isElement2.default;
	exports.qS = _qs2.default;
	exports.textNode = _textNode2.default;
	exports.transitionEvent = _transitionEvent2.default;
});
//# sourceMappingURL=utils.js.map
