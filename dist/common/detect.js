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
		global.detect = mod.exports;
	}
})(this, function (exports, module) {
	'use strict';

	function detect(lista) {
		var d = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];

		while (lista.length) {
			var item = lista.shift();
			if (d.documentElement.style[item[0]] !== undefined) {
				return item;
			}
		}
		return lista[0];
	}

	module.exports = detect;
});
//# sourceMappingURL=detect.js.map
