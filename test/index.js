'use strict';

import test from 'ava';
import {jsdom} from 'jsdom';
import * as utils from '../dist/utils';

const window = jsdom('<div id="apenasUmShow">Apenas um show</div>', {}).defaultView;

test('animationEvent', t => {
	const eventName = utils.animationEvent(window.document);
	t.true(eventName instanceof Array);
	t.regexTest(/(animation|MozAnimation|OAnimation|webkitAnimation)/, eventName[0]);
	t.end();
});

test('escapeHtml', t => {
	const escaped = utils.escapeHtml('<a href="http://lagden.in/?a=123&b=456">Lagden\'s stuff</a>');
	t.same(escaped, '&lt;a href=&quot;http://lagden.in/?a=123&amp;b=456&quot;&gt;Lagden&#39;s stuff&lt;/a&gt;');
	t.end();
});

test('isElement', t => {
	const obj = window.document.querySelector('#apenasUmShow');
	const isElement = utils.isElement(obj);
	const isNotElement = utils.isElement({});
	t.true(isElement);
	t.false(isNotElement);
	t.is(obj.id, 'apenasUmShow');
	t.end();
});

test('objectAssign', t => {
	function Helper() {}
	Helper.prototype.show = () => {
		return 'ulala';
	};

	function Unicorn(...colors) {
		this.rainbow = colors;
	}

	utils.objectAssign(Unicorn.prototype, Helper.prototype);
	const unicorn = new Unicorn('red', 'blue', 'green');

	t.same(unicorn.show(), 'ulala');
	t.same(utils.objectAssign({foo: 0}, {bar: 1}), {foo: 0, bar: 1});
	t.same(utils.objectAssign({foo: 0}, null, undefined), {foo: 0});
	t.same(utils.objectAssign({foo: 0}, null, undefined, {bar: 1}, null), {foo: 0, bar: 1});
	t.end();
});

test('qS (querySelector)', t => {
	const node = utils.qS('#apenasUmShow', window.document);
	t.same(node.id, 'apenasUmShow');
	t.end();
});

test('textNode', t => {
	const node = window.document.getElementById('apenasUmShow');
	utils.textNode(node, ' legal');
	t.same(node.textContent, 'Apenas um show legal');

	/* jsdom - Missing insertAdjacentHTML */
	// utils.textNode(node, ' <b>ulala</b>', true);
	// t.same(node.previousElementSibling.tagName, 'B');
	// t.same(node.previousElementSibling.textContent, 'ulala');
	t.end();
});

test('transitionEvent', t => {
	const eventName = utils.transitionEvent(window.document);
	t.regexTest(/(transitionend|mozTransitionEnd|oTransitionEnd|webkitTransitionEnd)/, eventName);
	t.end();
});
