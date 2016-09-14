'use strict';

import buble from 'rollup-plugin-buble';

export default {
	entry: 'src/index.js',
	dest: 'dist/index.js',
	format: 'umd',
	moduleName: 'lagdenUtils',
	plugins: [
		buble()
	],
	sourceMap: true
};
