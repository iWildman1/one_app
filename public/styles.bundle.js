webpackJsonp([2,4],{

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(675);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(714)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js?{\"sourceMap\":false}!../node_modules/postcss-loader/index.js!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js?{\"sourceMap\":false}!../node_modules/postcss-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 675:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(676)();
// imports


// module
exports.push([module.i, "/* MAIN SCSS FILE. DO NOT ADD STYLES INTO HERE, PLEASE USE THE RELEVANT PARTIALS FILE */\n/* BASE SCSS PARTIAL. USE FOR BASE STYLE CONFIGURATION */\n* {\n  box-sizing: border-box; }\n\n/* TYPOGRAPHY SCSS PARTIAL. ANY CODE RELATED TO FONTS GOES IN HERE */\nh1, h2, h3, h4, h5, h6, strong, p, a, label, input, li, table, th, td {\n  font-family: \"Montserrat\", sans-serif; }\n\n* {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 400; }\n\nhtml {\n  font-size: 17px; }\n\n  body {\n    background-color: #F8F8F8;\n  }\n\nh1 {\n  font-weight: 600; }\n\n.main-lead {\n  margin-top: 0; }\n\n.homepage {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100vh; }\n\n.body-center {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  margin: 0 auto;\n  text-align: center; }\n\n.button-group-half {\n  width: 50%;\n  float: left; }\n  .button-group-half a:hover {\n    color: white;\n    text-decoration: none; }\n\n.button {\n  background-color: #DB5656;\n  padding: 7px;\n  width: 140px;\n  color: white;\n  font-weight: 300;\n  border: 5px solid #DB5656;\n  -webkit-transition: all 0.1s ease;\n  transition: all 0.1s ease; }\n  .button:hover {\n    background-color: #e27878 !important;\n    border: 5px solid #e27878; }\n\n.button.button-secondary {\n  background-color: transparent; }\n\n/* HOMEPAGE-SPECIFIC STYLES. IF HOMEPAGE STYLES DON'T FIT INTO ANOTHER CATEGORY, PUT THEM HERE */\n.homepage {\n  background: -webkit-linear-gradient(rgba(93, 34, 34, 0.47), rgba(93, 34, 34, 0.47)), url(\"/img/background-main.png\");\n  background: linear-gradient(rgba(93, 34, 34, 0.47), rgba(93, 34, 34, 0.47)), url(\"/img/background-main.png\");\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  color: white; }\n  .homepage h1.main-lead {\n    font-size: 11em; }\n  .homepage p {\n    font-size: 1.3em;\n    font-weight: 300; }\n\n.button-group {\n  margin-top: 20px; }\n\n.home-cta:first-child {\n  margin-right: 10px; }\n\n.home-cta:last-child {\n  margin-left: 10px; }\n\n.left-holder-container {\n  height: 100%;\n  width: auto;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n\n\n\n.left-holder-container.login-background {\n  background-image: -webkit-linear-gradient(rgba(93, 34, 34, 0.47), rgba(93, 34, 34, 0.47)), url(\"/img/login-background.jpg\");\n  background-image: linear-gradient(rgba(93, 34, 34, 0.47), rgba(93, 34, 34, 0.47)), url(\"/img/login-background.jpg\"); }\n\n.left-holder-container.register-background {\n  background-image: -webkit-linear-gradient(rgba(93, 34, 34, 0.47), rgba(93, 34, 34, 0.47)), url(\"/img/register-background.jpg\");\n  background-image: linear-gradient(rgba(93, 34, 34, 0.47), rgba(93, 34, 34, 0.47)), url(\"/img/register-background.jpg\"); }\n\n.right-holder-container {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 450px;\n  background-color: white;\n  padding: 40px; }\n  .right-holder-container h1 {\n    font-weight: 700;\n    font-size: 4em;\n    margin-bottom: 20px; }\n  .right-holder-container p {\n    color: #A5A5A5;\n    font-weight: 300;\n    margin-bottom: 50px; }\n  .right-holder-container form label {\n    text-transform: uppercase;\n    margin-bottom: -60px;\n    margin-left: 10px;\n    margin-top: 5px;\n    font-weight: 600; }\n  .right-holder-container form input[type='text'], .right-holder-container form input[type='password'] {\n    display: block;\n    margin-bottom: 20px;\n    width: 100%;\n    padding: 23px 10px 5px 10px;\n    font-weight: 300;\n    color: #404250;\n    border: 1px solid #CCCCCC;\n    border-radius: 5px; }\n  .right-holder-container form .button {\n    margin-top: 30px; }\n\n.admin {\n  background-color: #F8F8F8; }\n\nnav {\n  height: 70px;\n  background-color: #393939;\n  position: fixed;\n  width: 100%;\n  top: 0; }\n  nav .nav-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 90%;\n    height: 100%;\n    margin: 0 auto;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    nav .nav-container h1 {\n      color: white;\n      margin: 0;\n      padding: 0; }\n    nav .nav-container .nav-list {\n      list-style-type: none;\n      margin: 0; }\n      nav .nav-container .nav-list li {\n        display: inline-block;\n        color: white;\n        font-weight: 300;\n        padding-left: 10px; }\n      nav .nav-container .nav-list li.nav-username {\n        font-weight: 600; }\n      nav .nav-container .nav-list .nav-button {\n        background-color: #DB5656;\n        padding: 8px 14px;\n        margin-left: 10px;\n        color: white;\n        -webkit-transition: all 0.1s ease;\n        transition: all 0.1s ease; }\n        nav .nav-container .nav-list .nav-button:hover {\n          background-color: #e27878;\n          text-decoration: none; }\n\n#main-admin-body {\n  width: 80%;\n  margin: 120px auto; }\n  #main-admin-body .project-info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-bottom: 20px; }\n  #main-admin-body h1 {\n    display: inline-block;\n    margin-top: 10px; }\n  #main-admin-body .add-new-button {\n    padding: 6px 14px;\n    margin-left: 30px;\n    background-color: #3ebba1;\n    color: white;\n    -webkit-transition: all 0.1s ease;\n    transition: all 0.1s ease; }\n    #main-admin-body .add-new-button:hover {\n      text-decoration: none;\n      background-color: #74d1be; }\n    #main-admin-body .add-new-button.overview-button {\n      background-color: #DB5656; }\n      #main-admin-body .add-new-button.overview-button:hover {\n        background-color: #e48080; }\n  #main-admin-body .deployment-block {\n    background-color: white;\n    padding: 20px;\n    margin-top: 20px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    #main-admin-body .deployment-block h2 {\n      margin-top: 0;\n      font-weight: 600;\n      margin-bottom: 30px; }\n    #main-admin-body .deployment-block .deployment-left .deployment-data-table {\n      font-size: 0.95em; }\n      #main-admin-body .deployment-block .deployment-left .deployment-data-table th, #main-admin-body .deployment-block .deployment-left .deployment-data-table td {\n        padding: 0 10px; }\n      #main-admin-body .deployment-block .deployment-left .deployment-data-table td {\n        font-weight: 300;\n        opacity: 0.7; }\n    #main-admin-body .deployment-block .deployment-right .button-admin {\n      padding: 10px 20px;\n      color: white;\n      -webkit-transition: all 0.1s ease;\n      transition: all 0.1s ease; }\n      #main-admin-body .deployment-block .deployment-right .button-admin:hover {\n        text-decoration: none; }\n      #main-admin-body .deployment-block .deployment-right .button-admin.button-force {\n        background-color: #db9456; }\n        #main-admin-body .deployment-block .deployment-right .button-admin.button-force:hover {\n          background-color: #e4af80; }\n      #main-admin-body .deployment-block .deployment-right .button-admin.button-delete {\n        background-color: #DB5656; }\n        #main-admin-body .deployment-block .deployment-right .button-admin.button-delete:hover {\n          background-color: #e48080; }\n      #main-admin-body .deployment-block .deployment-right .button-admin.button-edit {\n        background-color: #569DDB; }\n        #main-admin-body .deployment-block .deployment-right .button-admin.button-edit:hover {\n          background-color: #80b5e4; }\n\n.add-project-form {\n  background-color: white;\n  padding: 30px; }\n  .add-project-form h2 {\n    margin-top: 0;\n    font-size: 2em;\n    font-weight: 600; }\n  .add-project-form .form-splitter {\n    margin-top: 30px; }\n  .add-project-form label {\n    text-transform: uppercase;\n    margin-bottom: -50px;\n    margin-left: 10px;\n    padding-top: 7px; }\n  .add-project-form input[type='text'], .add-project-form input[type='password'] {\n    display: block;\n    width: 100%;\n    padding: 20px 10px 5px 10px;\n    font-weight: 300;\n    margin-bottom: 15px;\n    margin-top: 5px;\n    border-radius: 5px;\n    border: 1px solid #CCCCCC; }\n  .add-project-form input[type='submit'] {\n    background-color: #3ebba1;\n    border: none;\n    color: white;\n    padding: 15px;\n    margin-top: 20px;\n    -webkit-transition: all 0.1s ease;\n    transition: all 0.1s ease; }\n    .add-project-form input[type='submit']:hover {\n      background-color: #61cbb5; }\n\n      .no-margin-text p {\n    margin-bottom: 0px !important;\n}", ""]);

// exports


/***/ }),

/***/ 676:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 714:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(393);


/***/ })

},[718]);
//# sourceMappingURL=styles.bundle.map