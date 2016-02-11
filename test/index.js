'use strict';

import 'babel-core/register';
import test from 'ava';
import {jsdom} from 'jsdom';
import * as utils from '../src/utils';

root.window = jsdom('<div id="apenasUmShow">Apenas um show</div>', {}).defaultView;
root.document = root.window.document;
root.HTMLElement = root.window.HTMLElement;

test('animationEvent', t => {
	const eventName = utils.animationEvent();
	t.true(eventName instanceof Array);
	t.regexTest(/(animation|MozAnimation|OAnimation|webkitAnimation)/, eventName[0]);
});

test('escapeHtml', t => {
	const escaped = utils.escapeHtml('<a href="http://lagden.in/?a=123&b=456">Lagden\'s stuff</a>');
	t.same(escaped, '&lt;a href=&quot;http://lagden.in/?a=123&amp;b=456&quot;&gt;Lagden&#39;s stuff&lt;/a&gt;');
});

test('isElement', t => {
	const node = document.querySelector('#apenasUmShow');
	const isElement = utils.isElement(node);
	const isNotElement = utils.isElement({});
	t.true(isElement);
	t.false(isNotElement);
	t.is(node.id, 'apenasUmShow');
});

test('qS (querySelector)', t => {
	const node = utils.qS('#apenasUmShow');
	t.same(node.id, 'apenasUmShow');
});

test('textNode', t => {
	const node = document.getElementById('apenasUmShow');
	utils.textNode(node, ' legal');
	t.same(node.textContent, 'Apenas um show legal');
	utils.textNode(node, '<b>ulala</b>', true);
	t.same(node.firstElementChild.tagName, 'B');
	t.same(node.firstElementChild.textContent, 'ulala');
});

test('transitionEvent', t => {
	const eventName = utils.transitionEvent(window.document);
	t.regexTest(/(transitionend|mozTransitionEnd|oTransitionEnd|webkitTransitionEnd)/, eventName);
});
