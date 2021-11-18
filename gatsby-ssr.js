"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;

  if (process.env.NODE_ENV === "production") {
    return setHeadComponents([_react2.default.createElement("script", {
      key: "gatsby-plugin-twitter-pixel",
      dangerouslySetInnerHTML: {
        __html: "\n          !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);\n},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',\na=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');\n  twq('init', '" + pluginOptions.pixelId + "'); // Insert your pixel ID here.\n      "
      }
    })]);
  }
};