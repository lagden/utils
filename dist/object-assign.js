define(['exports', 'module'], function (exports, module) {
	/* eslint-disable no-unused-vars */
	// https://github.com/sindresorhus/object-assign

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
		return Object(val);
	}

	function objectAssign(target, source) {
		var from = undefined;
		var symbols = undefined;
		var to = toObject(target);

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
		return to;
	}

	module.exports = Object.assign || objectAssign;
});
//# sourceMappingURL=object-assign.js.map
