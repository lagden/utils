(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports);
		global.detect = mod.exports;
	}
})(this, function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function detect(lista) {
		var i = 0;
		for (i = lista.length - 1; i >= 0; i--) {
			if (document.documentElement.style[lista[i][0]] !== undefined) {
				break;
			}
		}
		return lista[i];
	}

	exports.default = detect;
});
//# sourceMappingURL=detect.js.map
