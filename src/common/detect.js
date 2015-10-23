'use strict';

function detect(lista, d = document) {
	while (lista.length) {
		const item = lista.shift();
		if (d.documentElement.style[item[0]] !== undefined) {
			return item;
		}
	}
	return lista[0];
}

export default detect;
