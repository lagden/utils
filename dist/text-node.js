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
		global.textNode = mod.exports;
	}
})(this, function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function textNode(node, txt) {
		var stringHTML = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

		var doc = node.ownerDocument;
		if (stringHTML) {
			node.insertAdjacentHTML('afterbegin', txt);
		} else {
			node.appendChild(doc.createTextNode(txt));
		}
		return node;
	}

	exports.default = textNode;
});
//# sourceMappingURL=text-node.js.map
