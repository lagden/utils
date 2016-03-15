define(['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function qS(el) {
		return document.querySelector(el);
	}

	exports.default = qS;
});