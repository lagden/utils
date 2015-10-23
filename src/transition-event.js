'use strict';

import detect from './common/detect';

function transitionEvent(d = document) {
	const VENDOR = [
		['transition', 'transitionend'],
		['MozTransition', 'mozTransitionEnd'],
		['OTransition', 'oTransitionEnd'],
		['webkitTransition', 'webkitTransitionEnd']
	];
	return detect(VENDOR, d)[1];
}

export default transitionEvent;
