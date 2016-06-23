'use strict';

import test from 'ava';
import * as u from '../';

test('animationEvent', t => {
	const eventName = u.animationEvent();
	t.true(eventName instanceof Array);
	t.regex(eventName[0], /(animation|MozAnimation|OAnimation|webkitAnimation)/);
});

test('escapeHtml', t => {
	const escaped = u.escapeHtml('<a href="http://lagden.in/?a=123&b=456">Lagden\'s stuff</a>');
	t.is(escaped, '&lt;a href=&quot;http://lagden.in/?a=123&amp;b=456&quot;&gt;Lagden&#39;s stuff&lt;/a&gt;');
});

test('extend', t => {
	const a = {a: 1};
	const b = {b: 2};
	const opts = u.extend(a, b);
	t.deepEqual(opts, {a: 1, b: 2});
});

test('isElement', t => {
	const node = document.querySelector('#apenasUmShow');
	const svg = document.querySelector('#ex');
	const isElementSvg = u.isElement(svg);
	const isElement = u.isElement(node);
	const isNotElement = u.isElement({});
	t.true(isElementSvg);
	t.true(isElement);
	t.false(isNotElement);
	t.is(node.id, 'apenasUmShow');
});

test('qS (querySelector)', t => {
	const node = u.qS('#apenasUmShow');
	t.is(node.id, 'apenasUmShow');
});

test('textNode', t => {
	const node = document.getElementById('apenasUmShow');
	u.textNode(node, ' legal');
	t.is(node.textContent, 'Apenas um show legal');
	u.textNode(node, '<b>ulala</b>', true);
	t.is(node.firstElementChild.tagName, 'B');
	t.is(node.firstElementChild.textContent, 'ulala');
});

test('transitionEvent', t => {
	const eventName = u.transitionEvent(document);
	t.regex(eventName, /(transitionend|mozTransitionEnd|oTransitionEnd|webkitTransitionEnd)/);
});
