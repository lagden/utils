(function (global, factory) {
	if (typeof define === 'function' && define.amd) {
		define(['exports', 'module'], factory);
	} else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		factory(exports, module);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, mod);
		global.escapeHtml = mod.exports;
	}
})(this, function (exports, module) {
	'use strict';

	function escapeHtml(html) {
		return html && String(html).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	}

	module.exports = escapeHtml;
});
//# sourceMappingURL=escape-html.js.map
