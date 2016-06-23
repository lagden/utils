'use strict';

function detect(lista) {
	let item;
	for (item of lista) {
		if (document.documentElement.style[item[0]] !== undefined) {
			return item;
		}
	}
	return lista[0];
}

export default detect;
