'use strict';

function detect(lista) {
	for (let i = 0; i < lista.length; i++) {
		if (document.documentElement.style[lista[i][0]] !== undefined) {
			return lista[i];
		}
	}
	return lista[0];
}

export default detect;
