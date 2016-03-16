'use strict';

global.document = require('jsdom').jsdom('<div id="apenasUmShow">Apenas um show</div>');
global.window = document.defaultView;
global.HTMLElement = window.HTMLElement;
global.navigator = window.navigator;
