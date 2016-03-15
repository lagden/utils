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
	t.same(escaped, '&lt;a href=&quot;http://lagden.in/?a=123&amp;b=456&quot;&gt;Lagden&#39;s stuff&lt;/a&gt;');
});

test('isElement', t => {
	const node = document.querySelector('#apenasUmShow');
	const isElement = u.isElement(node);
	const isNotElement = u.isElement({});
	t.true(isElement);
	t.false(isNotElement);
	t.is(node.id, 'apenasUmShow');
});

test('qS (querySelector)', t => {
	const node = u.qS('#apenasUmShow');
	t.same(node.id, 'apenasUmShow');
});

test('textNode', t => {
	const node = document.getElementById('apenasUmShow');
	u.textNode(node, ' legal');
	t.same(node.textContent, 'Apenas um show legal');
	u.textNode(node, '<b>ulala</b>', true);
	t.same(node.firstElementChild.tagName, 'B');
	t.same(node.firstElementChild.textContent, 'ulala');
});

test('transitionEvent', t => {
	const eventName = u.transitionEvent(window.document);
	t.regex(eventName, /(transitionend|mozTransitionEnd|oTransitionEnd|webkitTransitionEnd)/);
});
