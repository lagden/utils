'use strict';

import config from './rollup.config';

config.format = 'umd';
config.dest = 'dist/index.js';
config.moduleName = 'utils';

export default config;
