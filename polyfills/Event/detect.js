(function(global) {

	if (!('Event' in global)) return false;

	try {

		// In IE 9-11, the Event object exists but cannot be instantiated
		new Event('click');
		var supportEventListenerOptions = false;
		try {
			document.createElement('div').addEventListener('test', null, Object.defineProperty({}, 'capture', {
				get: function () {
					supportEventListenerOptions = true;
				}
			}));
		} finally {
			return supportEventListenerOptions;
		}
	} catch(e) {
		return false;
	}
}(this))
