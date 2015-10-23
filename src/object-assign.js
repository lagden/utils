/* eslint-disable no-unused-vars */
// https://github.com/sindresorhus/object-assign

'use strict';

const hasOwnProperty = Object.prototype.hasOwnProperty;
const propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}
	return Object(val);
}

function ponyfill(target, source) {
	let from;
	let symbols;
	const to = toObject(target);

	for (let s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (const key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (Object.getOwnPropertySymbols) {
			symbols = Object.getOwnPropertySymbols(from);
			for (let i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}
	return to;
}

const objectAssign = Object.assign || ponyfill;

export default objectAssign;
