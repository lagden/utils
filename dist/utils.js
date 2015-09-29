(function (global, factory) {
	if (typeof define === 'function' && define.amd) {
		define(['exports', 'module', './animation-event', './escape-html', './is-element', './object-assign', './text-node', './transition-event'], factory);
	} else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		factory(exports, module, require('./animation-event'), require('./escape-html'), require('./is-element'), require('./object-assign'), require('./text-node'), require('./transition-event'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, mod, global.animationEvent, global.escapeHtml, global.isElement, global.objectAssign, global.textNode, global.transitionEvent);
		global.utils = mod.exports;
	}
})(this, function (exports, module, _animationEvent, _escapeHtml, _isElement, _objectAssign, _textNode, _transitionEvent) {
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _animationEvent2 = _interopRequireDefault(_animationEvent);

	var _escapeHtml2 = _interopRequireDefault(_escapeHtml);

	var _isElement2 = _interopRequireDefault(_isElement);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _textNode2 = _interopRequireDefault(_textNode);

	var _transitionEvent2 = _interopRequireDefault(_transitionEvent);

	module.exports = {
		animationEvent: _animationEvent2['default'],
		escapeHtml: _escapeHtml2['default'],
		isElement: _isElement2['default'],
		objectAssign: _objectAssign2['default'],
		textNode: _textNode2['default'],
		transitionEvent: _transitionEvent2['default']
	};
});
//# sourceMappingURL=utils.js.map
