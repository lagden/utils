(function (global, factory) {
	if (typeof define === 'function' && define.amd) {
		define(['exports', 'module'], factory);
	} else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		factory(exports, module);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, mod);
		global.isElement = mod.exports;
	}
})(this, function (exports, module) {
	'use strict';

	function isElement(obj) {
		if (typeof HTMLElement === 'object') {
			return obj instanceof HTMLElement;
		}
		return obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
	}

	module.exports = isElement;
});
//# sourceMappingURL=is-element.js.map
