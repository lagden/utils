'use strict';

function textNode(node, txt, stringHTML = false) {
	const doc = node.ownerDocument;
	if (stringHTML) {
		node.insertAdjacentHTML('afterbegin', txt);
	} else {
		node.appendChild(doc.createTextNode(txt));
	}
	return node;
}

export default textNode;
