'use strict';

global.document = require('jsdom').jsdom('<body><div id="apenasUmShow">Apenas um show</div></body>');
global.window = document.defaultView;
global.HTMLElement = window.HTMLElement;
global.navigator = window.navigator;
