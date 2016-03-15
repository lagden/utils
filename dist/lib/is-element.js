define(['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function isElement(obj) {
		return obj instanceof HTMLElement;
	}
	exports.default = isElement;
});