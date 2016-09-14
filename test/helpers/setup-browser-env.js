'use strict';

const jsdom = require('jsdom');

const html = [
	'<div id="apenasUmShow">Apenas um show</div>',
	'<svg id="ex" version="1.1" focusable="false" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 100 100">',
	'<circle cx="0" cy="0" r="40"></circle>',
	'</svg>'
].join('');

global.document = jsdom.jsdom(html);
global.window = document.defaultView;
global.HTMLElement = window.HTMLElement;
global.SVGElement = window.SVGElement;
global.SVGElement = global.HTMLElement;
global.navigator = window.navigator;
