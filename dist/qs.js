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
		global.qs = mod.exports;
	}
})(this, function (exports, module) {
	'use strict';

	function qS(el) {
		var doc = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];

		return doc.querySelector(el);
	}

	module.exports = qS;
});
//# sourceMappingURL=qs.js.map
