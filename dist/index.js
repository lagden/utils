(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.lagdenUtils = global.lagdenUtils || {})));
}(this, (function (exports) { 'use strict';

function detect(lista) {
	for (var i = 0; i < lista.length; i++) {
		if (document.documentElement.style[lista[i][0]] !== undefined) {
			return lista[i];
		}
	}
	return lista[0];
}

function animationEvent() {
	var VENDOR = [
		[
			'animation',
			'animationstart',
			'animationiteration',
			'animationend'
		], [
			'MozAnimation',
			'mozAnimationStart',
			'mozAnimationIteration',
			'mozAnimationEnd'
		], [
			'OAnimation',
			'oAnimationStart',
			'oAnimationIteration',
			'oAnimationEnd'
		], [
			'webkitAnimation',
			'webkitAnimationStart',
			'webkitAnimationIteration',
			'webkitAnimationEnd'
		]
	];
	return detect(VENDOR);
}

function escapeHtml(html) {
	return html &&
		String(html)
			.replace(/&/g, '&amp;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#39;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;');
}

function extend(a, b) {
	Object.keys(b).forEach(function (prop) {
		a[prop] = b[prop];
	});
	return a;
}

function isElement(obj) {
	return obj instanceof HTMLElement || obj instanceof SVGElement;
}

function qS(el) {
	return document.querySelector(el);
}

function textNode(node, txt, stringHTML) {
	if ( stringHTML === void 0 ) stringHTML = false;

	if (stringHTML) {
		node.insertAdjacentHTML('afterbegin', txt);
	} else {
		node.appendChild(document.createTextNode(txt));
	}
	return node;
}

function transitionEvent() {
	var VENDOR = [
		['transition', 'transitionend'],
		['MozTransition', 'mozTransitionEnd'],
		['OTransition', 'oTransitionEnd'],
		['webkitTransition', 'webkitTransitionEnd']
	];
	return detect(VENDOR)[1];
}

exports.animationEvent = animationEvent;
exports.extend = extend;
exports.escapeHtml = escapeHtml;
exports.isElement = isElement;
exports.qS = qS;
exports.textNode = textNode;
exports.transitionEvent = transitionEvent;

Object.defineProperty(exports, '__esModule', { value: true });

})));