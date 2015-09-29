define(['exports', 'module'], function (exports, module) {
	'use strict';

	function textNode(node, txt) {
		var html = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

		var doc = node.ownerDocument;
		if (html) {
			node.insertAdjacentHTML('afterbegin', txt);
		} else {
			node.appendChild(doc.createTextNode(txt));
		}
		return node;
	}

	module.exports = textNode;
});
//# sourceMappingURL=text-node.js.map
