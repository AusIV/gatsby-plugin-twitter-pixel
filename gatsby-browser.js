'use strict';

exports.onRouteUpdate = function (_ref) {
  var location = _ref.location;

  // Don't track while developing.
  if (process.env.NODE_ENV === 'production' && typeof twq === 'function') {
    twq('track', 'PageView');
  }
};