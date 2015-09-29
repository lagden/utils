define(['exports', 'module'], function (exports, module) {
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
