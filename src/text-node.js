'use strict';

function textNode(node, txt, html = false) {
	const doc = node.ownerDocument;
	if (html) {
		node.insertAdjacentHTML('afterbegin', txt);
	} else {
		node.appendChild(doc.createTextNode(txt));
	}
	return node;
}

export default textNode;
