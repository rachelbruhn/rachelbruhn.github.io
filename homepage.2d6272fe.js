// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({27:[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],24:[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":27}],23:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./..\\assets\\background-texture.jpg":[["background-texture.1c258b3f.jpg",25],25],"./..\\assets\\Images\\design.png":[["design.022f4afc.png",26],26],"_css_loader":24}],2:[function(require,module,exports) {
"use strict";

require("./index.scss");

var content = {
    videos: ["https://www.youtube.com/watch?v=SR8GqnVY19U&t=340s", "https://www.youtube.com/watch?v=g-2_0FOzMYg", "https://www.youtube.com/watch?v=ikzaG1VwTIA", "https://www.youtube.com/watch?v=RTjOIo_oMTk", "https://www.youtube.com/watch?v=fwb3RmJ7k_A", "https://www.youtube.com/watch?v=ratolK-yxPQ"],
    animations: ["https://dribbble.com/shots/4503757-Sunnie-Sleeping", "https://dribbble.com/shots/4309821-Fund-A-Life", "https://dribbble.com/shots/4503754-Morphing-Animation", "https://dribbble.com/shots/4502461-Mortimer-the-Molar", "https://cdn.dribbble.com/users/1785918/screenshots/4502482/brio-bumper-v3.gif", "https://dribbble.com/shots/4502478-Bathtime"],
    images: ["https://farm2.staticflickr.com/1636/24715328805_70ea7986fe_t.jpg", "https://www.flickr.com/photos/138055542@N06/24710712966/in/album-72157690055469520/", "https://www.flickr.com/photos/138055542@N06/24347644559/in/album-72157690055469520/", "https://www.flickr.com/photos/138055542@N06/39762921640/in/album-72157690055469520/", "https://www.flickr.com/photos/138055542@N06/41571122781/in/album-72157690055469520/", "https://www.flickr.com/photos/138055542@N06/25676667347/in/album-72157690055469520/", "https://www.flickr.com/photos/138055542@N06/40547692981/in/album-72157690055469520/", "https://www.flickr.com/photos/138055542@N06/40547693611/in/album-72157690055469520/", "https://www.flickr.com/photos/138055542@N06/39139611380/in/album-72157690055469520/", "https://www.flickr.com/photos/138055542@N06/40055136775/in/album-72157690055469520/", "https://www.flickr.com/photos/138055542@N06/40055136755/in/album-72157690055469520/", "https://www.flickr.com/photos/138055542@N06/41348901611/in/album-72157690055469520/", "https://www.flickr.com/photos/138055542@N06/25676667527/in/album-72157690055469520/", "https://www.flickr.com/photos/138055542@N06/40504902412/in/album-72157690055469520/", "https://www.flickr.com/photos/138055542@N06/26700934287/in/album-72157690055469520/"]
};

function youtubeIframe(url) {
    var embedUrl = url.replace("watch?v=", "embed/");
    return '<iframe width="560" height="315" src="' + embedUrl + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
}

$(function () {
    content.videos.forEach(function (url) {
        $('.content--videos .iframe-holder').append(youtubeIframe(url));
    });
    content.animations.forEach(function (url) {
        $('.content--animations').append($('<img/>').attr('src', url));
    });
    content.images.forEach(function (url) {
        $('.content--images').append($('<img/>').attr('src', url));
    });
    $('.link').click(function () {
        var content = $(this).data('content');
        if (content) {
            $('.content').removeClass('visible');
            $(".content--" + content).addClass('visible');

            // Manage icon color based on which content type is selected:
            var colorIcons = $(this).data('color-icons') && $(this).data('color-icons').split(',') || [];
            $(".icon").removeClass('icon--color');
            for (var i = 0; i < colorIcons.length; i++) {
                var iconName = colorIcons[i];
                $(".icon.icon--" + iconName).addClass('icon--color');
            }
        }
    });
});
},{"./index.scss":23}],66:[function(require,module,exports) {

var OVERLAY_ID = '__parcel__error__overlay__';

var global = (1, eval)('this');
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '58644' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[66,2])
//# sourceMappingURL=/homepage.2d6272fe.map