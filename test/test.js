/* global describe, it */

'use strict';

import {jsdom} from 'jsdom';
import * as utils from '../es6/utils';

const window = jsdom('<div id="apenasUmShow">Apenas um show</div>', {}).defaultView;

describe('Utils', () => {
	it('animationEvent', () => {
		const eventName = utils.animationEvent(window.document);
		eventName.should.be.Array();
		eventName[0].should.be.equalOneOf('animation', 'MozAnimation', 'OAnimation', 'webkitAnimation');
	});

	it('escapeHtml', () => {
		const escaped = utils.escapeHtml('<a href="http://lagden.in/?a=123&b=456">Lagden\'s stuff</a>');
		escaped.should.be.exactly('&lt;a href=&quot;http://lagden.in/?a=123&amp;b=456&quot;&gt;Lagden&#39;s stuff&lt;/a&gt;');
	});

	it('isElement', () => {
		const obj = window.document.querySelector('#apenasUmShow');
		const isElement = utils.isElement(obj);
		isElement.should.be.true();
		obj.id.should.be.exactly('apenasUmShow');
	});

	it('objectAssign', () => {
		function Helper() {}
		Helper.prototype.show = () => {
			return 'ulala';
		};

		function Unicorn(...colors) {
			this.rainbow = colors;
		}

		utils.objectAssign(Unicorn.prototype, Helper.prototype);
		const unicorn = new Unicorn('red', 'blue', 'green');

		unicorn.show().should.be.exactly('ulala');
		utils.objectAssign({foo: 0}, {bar: 1}).should.be.deepEqual({foo: 0, bar: 1});
		utils.objectAssign({foo: 0}, null, undefined).should.be.deepEqual({foo: 0});
		utils.objectAssign({foo: 0}, null, undefined, {bar: 1}, null).should.be.deepEqual({foo: 0, bar: 1});
	});

	it('qS (querySelector)', () => {
		const node = utils.qS('#apenasUmShow', window.document);
		node.id.should.be.exactly('apenasUmShow');
	});

	it('textNode', () => {
		const node = window.document.getElementById('apenasUmShow');
		utils.textNode(node, ' legal');
		node.textContent.should.be.exactly('Apenas um show legal');
	});

	it('transitionEvent', () => {
		const eventName = utils.transitionEvent(window.document);
		eventName.should.be.equalOneOf('transitionend', 'mozTransitionEnd', 'oTransitionEnd', 'webkitTransitionEnd');
	});
});
