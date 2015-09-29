define(['exports', 'module'], function (exports, module) {
	'use strict';

	function escapeHtml(html) {
		return html && String(html).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	}

	module.exports = escapeHtml;
});
//# sourceMappingURL=escape-html.js.map
