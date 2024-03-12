// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3LmCz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var _actor = require("./actor");
var _game = require("./game");
var _props = require("./props");
/**
 * sprites for the different elements of the game, including the actors, the empty cells...
 */ const sprites = [
    document.getElementById("grassSprite"),
    document.getElementById("ignorantSprite"),
    document.getElementById("goodGuySprite"),
    document.getElementById("waypointSprite"),
    document.getElementById("spaghettiMonsterSprite"),
    document.getElementById("ignoranceSpreaderSprite"),
    document.getElementById("groundSprite"),
    document.getElementById("spawnerSprite")
].map((element)=>element);
/**
 * Returns a promise that will resolve after `ms` seconds.
 * @param ms delay in ms
 * @returns a promise that waits `ms` seconds
 */ function delay(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
/**
 * Gets the sprite corresponding to an actor's kind
 * @param actorKind The actor kind
 * @returns The sprite corresponding to the actor's kind.
 */ function getActorSprite(actorKind) {
    switch(actorKind){
        case "ignorant":
            return sprites[1];
        case "goodGuy":
            return sprites[2];
        case "ground":
            return sprites[6];
        case "ignoranceSpreader":
            return sprites[5];
        case "spaghettiMonster":
            return sprites[4];
        case "spawner":
            return sprites[7];
        default:
            return sprites[0];
    }
}
/**
 * The order in which the actors have to be displayed
 */ const kindDrawOrder = [
    "ground",
    "spawner",
    "goodGuy",
    "spaghettiMonster",
    "ignoranceSpreader",
    "ignorant"
];
/**
 * Draws the content of the world to the grid
 * @param world The world on which the game is happening
 * @param actors The actors partaking to the game
 * @param mainSpaghettiMonster the spaghettiMonster that defines the current temperature and which is the one
 * that makes the player loose the game when it has no faith points anymore
 */ function displayWorldToGrid(world, actors, grid, mainSpaghettiMonster) {
    // generate actorCards
    // remplace enfants display-grid par les nouveaux actorCard
    const actorsInDrawOrder = kindDrawOrder.reduce((acc, kind)=>acc.concat(actors.filter((a)=>(0, _actor.hasOneOfKinds)(a, [
                kind
            ]))), []);
    grid.replaceChildren(...actorsInDrawOrder.map(drawActor));
    window.setTemperature((0, _props.getFaithPoints)(mainSpaghettiMonster), (0, _props.getMaxFaith)(mainSpaghettiMonster));
}
/**
 * Creates the dom element (computes its position and content) containing the actor to display
 * @param actor the actor to display
 * @returns the dom element containing the actor to display
 */ function drawActor(actor) {
    const child = document.createElement("div");
    child.classList.add("actorCard");
    child.style.gridColumnStart = (actor.position.x + 1).toString();
    child.style.gridRowStart = (actor.position.y + 1).toString();
    if ((0, _actor.hasOneOfKinds)(actor, [
        ...(0, _actor.walkerKeys)
    ])) {
        const hp = document.createElement("div");
        hp.classList.add("hpBar");
        child.appendChild(hp);
        const health = document.createElement("div");
        health.classList.add("health");
        health.style.width = `${100 * (0, _props.getFaithPoints)(actor) / (0, _props.getMaxFaith)(actor)}%`;
        hp.appendChild(health);
    }
    const img = document.createElement("div");
    img.classList.add("actorImage");
    img.style.backgroundImage = `url(${getActorSprite(actor.kind).src}`;
    child.append(img);
    return child;
}
/**
 * The delay between two new computations of the game state and display refresh
 */ const defaultDelay = 500;
let speedModifier = 1;
/**
 * Inits the game and its display for the web client, and runs it
 */ async function main() {
    const squareWorldSize = 20; // A square shape isn't a requirement
    const world = (0, _game.initWorld)(squareWorldSize, squareWorldSize);
    const spawnersAxis = Math.random() < 0.5 ? "x" : "y";
    const playProba = 0.05;
    const spawnProba = 1;
    const minSpawners = Math.min(1, Math.floor(world.width / 8));
    const maxSpawners = Math.max(1, Math.floor(world.width / 3));
    const intermediateWaypointLinesNumber = Math.floor(world.width / 4);
    let actors = (0, _game.initActors)(world, intermediateWaypointLinesNumber, spawnersAxis, spawnProba, playProba, minSpawners, maxSpawners);
    const phases = (0, _game.initPhases)();
    const grid = document.getElementById("display-grid");
    grid.style.gridTemplate = `repeat(${world.height}, 1fr) / repeat(${world.width}, 1fr)`;
    let turnCounter = 0; // in a purely functional way, an actor containing the turns combined with an incrementTurn action and an updateTurn phase could be made
    const maxTurn = world.width * 8;
    while(turnCounter < maxTurn && (0, _actor.filterByKinds)(actors, [
        "spaghettiMonster"
    ]).some((spaghettiMonster)=>(0, _props.getFaithPoints)(spaghettiMonster) > 0)){
        actors = (0, _game.nextTurn)(phases, world, actors, spawnersAxis);
        await displayWorldToGrid(world, actors, grid, (0, _actor.filterByKinds)(actors, [
            "spaghettiMonster"
        ])[0]);
        // wait
        while(speedModifier === 0)await delay(100);
        await delay(defaultDelay * speedModifier);
        ++turnCounter;
    }
    if ((0, _actor.filterByKinds)(actors, [
        "spaghettiMonster"
    ]).some((spaghettiMonster)=>(0, _props.getFaithPoints)(spaghettiMonster) > 0)) replay("Some spaghetti monsters still have faith, you won the game! :)", "green");
    else replay("Not a single spaghetti monsters still has faith, you lost the game! :(", "red");
}
function replay(result, color) {
    const home = document.getElementById("home");
    home.classList.toggle("active");
    const button = document.getElementById("button");
    button.classList.toggle("active");
    const link = document.getElementById("link");
    link.textContent = "Replay";
    const res = document.getElementById("res");
    res.classList.remove("active");
    res.style.backgroundColor = color;
    const child = res.firstChild;
    child.textContent = result;
}
/**
 * Calls the main function and creates a slider to modify the speed of the game
 */ window.onload = (_)=>{
    const button = document.getElementById("link");
    button.addEventListener("click", ()=>{
        main();
    });
    const speedSlider = document.getElementById("speed-slider");
    speedSlider.addEventListener("input", (e)=>{
        if (speedSlider.value === "0") speedModifier = 0;
        else speedModifier = 1 / Number(speedSlider.value);
        document.getElementById("speed-value").textContent = `${speedSlider.value}x`;
    });
};

},{"./actor":"8zn3E","./game":"edeGs","./props":"8RVhR"}],"8zn3E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "actorToString", ()=>actorToString);
parcelHelpers.export(exports, "actorToStringInWorld", ()=>actorToStringInWorld);
parcelHelpers.export(exports, "translateActor", ()=>translateActor);
parcelHelpers.export(exports, "translateAndUpdateWaypoint", ()=>translateAndUpdateWaypoint);
parcelHelpers.export(exports, "stringReplaceAt", ()=>(0, _otherUtils.stringReplaceAt));
parcelHelpers.export(exports, "filterByKinds", ()=>filterByKinds);
parcelHelpers.export(exports, "findNextWaypointTarget", ()=>findNextWaypointTarget);
parcelHelpers.export(exports, "isValidActorInEnvironment", ()=>isValidActorInEnvironment);
parcelHelpers.export(exports, "filterActorsByPosition", ()=>filterActorsByPosition);
parcelHelpers.export(exports, "isWalker", ()=>isWalker);
parcelHelpers.export(exports, "hasOneOfKinds", ()=>hasOneOfKinds);
parcelHelpers.export(exports, "walkerKeys", ()=>walkerKeys);
parcelHelpers.export(exports, "kindKeys", ()=>kindKeys);
var _geometry = require("./utils/geometry");
var _otherUtils = require("./utils/other_utils");
var _arrayUtils = require("./utils/array_utils");
var _world = require("./world");
var _props = require("./props");
/**
 * Actors that can move by themselves on the board.
 */ const walkerKeys = [
    "ignorant",
    "ignoranceSpreader"
];
/**
 * All the different actor kinds.
 */ const kindKeys = [
    ...walkerKeys,
    "goodGuy",
    "ground",
    "spawner",
    "spaghettiMonster",
    "player"
];
/**
 * Returns true if the given actor's kind is included in the given array of kind
 * @param actor the tested actor
 * @param kinds the array of kinds
 * @returns true if the given actor's kind is included in the given array of kind
 */ function hasOneOfKinds(actor, kinds) {
    return kinds.includes(actor.kind);
}
/**
 * Returns true if the given actor's kind is included in the kinds of the type Walker,
 * which reprensents the actors that move on the path generated from the spawns to the spaghettiMonsters
 * @param actor the tested actor
 * @returns true if the given actor's kind is included in the kinds of the type Walker,
 * which reprensents the actors that move on the path generated from the spawns to the spaghettiMonsters
 */ function isWalker(actor) {
    return hasOneOfKinds(actor, [
        ...walkerKeys
    ]);
}
/**
 * Returns a string representation of the given actor
 * @param actor The actor that is described by the returned string
 * @returns a string representation of the actor
 */ function actorToString(actor) {
    return `{position: ${(0, _geometry.vector2DToString)(actor.position)}, kind: ${actor.kind}}`;
}
/**
 * Returns the string representation of the world with the given actor in it
 * @param world The world represented by worldString, and where the actors are
 * @param worldString The string that represents the world, but not necessarily representing all of the actors in the world
 * @param actor The actor that is being added to the string representation of the world
 * @returns The string representation of the world with the given actor in it
 */ function actorToStringInWorld(world, worldString, actor) {
    return (0, _otherUtils.stringReplaceAt)(worldString, (0, _world.vectorToIndexInWorldString)(world, actor.position), actor.kind.charAt(0));
}
/**
 * Return a new array containing actors with the specified kind.
 * 
 * @param actors The array to filter from 
 * @param kinds The kinds to keep
 * @returns A new array with actor from the given array, of the given kind
 */ function filterByKinds(actors, kinds) {
    return actors.filter((actor)=>kinds.find((key)=>actor.kind === key));
}
/**
 * Applies a translation to the actor's position and returns the translated actor.
 * @param actor The actor that is being tranlated
 * @param movementVector The movement vector
 * @returns The actor after its position was translated according to a movement vector
 */ function translateActor(actor, movementVector) {
    return {
        ...actor,
        position: (0, _geometry.translatePoint)(actor.position, movementVector)
    };
}
/**
 * Returns the informations about the waypoint that should be the target once the given waypoint is reached
 * @param actors all the actors of the game
 * @param waypointTarget the position of the current waypoint target
 * @param waypointTargetNumber the number of the current waypoint target
 * @returns a dictionnary containing the informations about the waypoint that should be the target once the given waypoint is reached
 */ function findNextWaypointTarget(actors, waypointTarget, waypointTargetNumber) {
    const possibilities = actors.filter((currentActor)=>currentActor?.externalProps?.waypointNumber === waypointTargetNumber + 1);
    if (!possibilities.length) return {
        waypointTargetNumber,
        waypointTarget
    };
    const nextWaypointTarget = (0, _arrayUtils.getRandomArrayElement)(possibilities);
    return {
        waypointTargetNumber: (0, _props.getWaypointNumber)(nextWaypointTarget),
        waypointTarget: nextWaypointTarget.position
    };
}
/**
 * Translates the movingActor according to the given movementVector, and updates its waypointTarget if it has been reached
 * @param actors all the actors of the game
 * @param movingActor the actor that is being translated
 * @param movementVector the movement defining where the movingActor is moving
 * @returns the movingActor with its updated position (after the movement)
 */ function translateAndUpdateWaypoint(actors, movingActor, movementVector) {
    const newPosition = (0, _geometry.translatePoint)(movingActor.position, movementVector);
    if (isWalker(movingActor) && (0, _otherUtils.isDeepStrictEqual)(newPosition, (0, _props.getWaypointTarget)(movingActor))) {
        const nextWaypoint = findNextWaypointTarget(actors, (0, _props.getWaypointTarget)(movingActor), (0, _props.getWaypointTargetNumber)(movingActor));
        return (0, _props.setWaypointTargetNumber)((0, _props.setWaypointTarget)({
            ...movingActor,
            position: newPosition
        }, nextWaypoint.waypointTarget), nextWaypoint.waypointTargetNumber);
    }
    return {
        ...movingActor,
        position: newPosition
    };
}
/**
 * Returns whether an actor is valid among an environment (world, other actors...) given as parameters
 * @param world The world where the actor is
 * @param actor We want to know if this actor is valid
 * @returns true iif the actor is in the world's bounds
 */ function isValidActorInEnvironment(world, actor) {
    return (0, _world.isPositionInWorld)(world, actor.position);
}
/**
 * Returns the actors from the given actor array whose position respect the given position constraints
 * @param actors the actors potentially returned and againt which the coordinate constraints are tested
 * @param xPosition the x coordinate constraint. If undefined, x coordinate is not a constraint.
 * @param yPosition the y coordinate constraint. If undefined, x coordinate is not a constraint.
 * @returns the actors from the given actor array whose position respect the given position constraints
 */ function filterActorsByPosition(actors, xPosition, yPosition) {
    return actors.filter((currentActor)=>(0, _geometry.vectorHasCoords)(currentActor.position, xPosition, yPosition));
}

},{"./world":"1L67l","./props":"8RVhR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./utils/geometry":"fwNv2","./utils/array_utils":"3jdK9","./utils/other_utils":"lmK3G"}],"1L67l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createWorld", ()=>createWorld);
parcelHelpers.export(exports, "worldToString", ()=>worldToString);
parcelHelpers.export(exports, "isPositionInWorld", ()=>isPositionInWorld);
parcelHelpers.export(exports, "vectorToIndexInWorldString", ()=>vectorToIndexInWorldString);
parcelHelpers.export(exports, "randomPositionsAlongAxis", ()=>randomPositionsAlongAxis);
parcelHelpers.export(exports, "createPositionsAlongAxis", ()=>createPositionsAlongAxis);
parcelHelpers.export(exports, "axisLength", ()=>axisLength);
parcelHelpers.export(exports, "getVectorsInRangeInWorld", ()=>getVectorsInRangeInWorld);
parcelHelpers.export(exports, "allPositionsInWorld", ()=>allPositionsInWorld);
parcelHelpers.export(exports, "getRandomPositionNotInGivenPositions", ()=>getRandomPositionNotInGivenPositions);
parcelHelpers.export(exports, "getEmptyCellInRange", ()=>getEmptyCellInRange);
var _otherUtils = require("./utils/other_utils");
var _numberUtils = require("./utils/number_utils");
var _arrayUtils = require("./utils/array_utils");
var _geometry = require("./utils/geometry");
/**
 * A world constructor
 * @param width the width of the world
 * @param height The height of the world
 * @returns A world with the given width and height and turns elapsed.
 */ function createWorld(width, height) {
    if (width <= 0 || height <= 0) throw new Error("World size values must be positive");
    if (!Number.isInteger(width) || !Number.isInteger(height)) throw new Error("World size values must be integers");
    return {
        width,
        height
    };
}
/**
 * Returns the length of the given Axis in the given World
 * @param world the world from which the Axis length is computed
 * @param axis the axis that we want to know the length
 * @returns the length of the given Axis in the given World
 */ function axisLength(world, axis) {
    switch(axis){
        case "x":
            return world.width;
        case "y":
            return world.height;
        default:
            throw new Error("Unknown axis");
    }
}
/**
 * Returns an array of 1 to maxPositions random unique aligned positions
 * @param world the world on which the positions are computed
 * @param minPositions the minimum number of positions inside the returned array
 * @param maxPositions the maximum number of positions inside the returned array
 * @param axis the returned positions can reach each other by a translation along this axis
 * @param lineNumber the coordinate of the returned position on the not-given axis
 * @returns an array of 1 to maxPositions random unique positions, that all have the same coordinate value on the axis that was not given
 */ function randomPositionsAlongAxis(world, minPositions, maxPositions, axis, lineNumber) {
    return createPositionsAlongAxis(axis, (0, _numberUtils.randomUniqueIntegers)(minPositions, maxPositions, 0, axisLength(world, axis)), lineNumber);
}
/**
 * Returns an array of positions corresponding to the given parameters
 * @param parallelToAxis the returned positions can reach each other by a translation along this axis
 * @param parallelAxisCoords the coordinates, on the parallel axis, of the returned positions
 * @param otherAxislineNumber the coordinate of the returned position on the not-given axis
 * @returns an array of 1 to maxPositions random unique positions, that all have the same coordinate value on the axis that was not given
 */ function createPositionsAlongAxis(parallelToAxis, parallelAxisCoords, otherAxislineNumber) {
    return parallelAxisCoords.map((coord)=>parallelToAxis === "x" ? (0, _geometry.createVector)(coord, otherAxislineNumber) : (0, _geometry.createVector)(otherAxislineNumber, coord));
}
/**
 * Checks if a position is in a world or not
 * @param world The world
 * @param position A position
 * @returns true iif the position is in world
 */ function isPositionInWorld(world, position) {
    return position.x >= 0 && position.x < world.width && position.y >= 0 && position.y < world.height;
}
/**
 * Returns the text representation of the world
 * @param world the world
 * @returns the text representation of the world
 */ function worldToString(world) {
    return `${" ".repeat(world.width * 2)}\n`.repeat(world.height - 1).concat(`${" ".repeat(world.width * 2)}`);
}
/**
 * Returns the position of the character representing the content of what is at the position described by the given vector, in the given world
 * @param world the world represented by a string where a character represents the given vector
 * @param vector the vector representing the position, represented as a character in the world string representation
 * @returns the position of the character representing the content of what is at the position described by the given vector, in the given world
 */ function vectorToIndexInWorldString(world, vector) {
    if (!isPositionInWorld(world, vector)) throw new Error("Position is not in world");
    return vector.y * (world.width * 2 + 1) + vector.x * 2;
}
/**
 * Returns all the positions in the world that are in the range of the given positon, using the given distance function
 * @param range the range, i.e. max distance, in which the returned positions are from the position "fromPosition"
 * @param distanceFunction the function that evaluates the distance between two given positions
 * @param world the world in which the returned positions must be
 * @param fromPosition the position from which the returned positions can be reached
 * @returns all the positions in the world that are in the range of the given positon, using the given distance function.
 * fromPosition can be part of those returned positions.
 */ function getVectorsInRangeInWorld(range, distanceFunction, world, fromPosition) {
    return (0, _geometry.getMovementVectorsInRange)(range, distanceFunction).map((movementVector)=>(0, _geometry.translatePoint)(fromPosition, movementVector)).filter((translatedPosition)=>isPositionInWorld(world, translatedPosition));
}
/**
 * Returns all the positions that are in the bounds of the given world
 * @param world the world that constrains the possible returned positions' values
 * @returns all the positions that are in the bounds of the given world
 */ function allPositionsInWorld(world) {
    return Array.from({
        length: world.width
    }, (_, currentWidth)=>{
        return Array.from({
            length: world.height
        }, (_, currentHeight)=>(0, _geometry.createVector)(currentWidth, currentHeight));
    }).flat();
}
/**
 * Returns a random position of the world which isn't in the givenPositions
 * @param world the world form which the positions are created and can be returned
 * @param givenPositions the positions that must not be returned
 * @returns a random position of the world which isn't in the givenPositions
 */ function getRandomPositionNotInGivenPositions(world, givenPositions) {
    return (0, _arrayUtils.getRandomArrayElementNotInOtherArray)(allPositionsInWorld(world), givenPositions);
}
/**
 * Returns all the positions from the world where not a single actor from the given actors is, and which
 * are in the given range, using the given distance function
 * @param range the range, i.e. max distance, in which the returned positions are from the position "fromPosition"
 * @param distanceFunction the function that evaluates the distance between two given positions
 * @param world the world in which the returned positions must be
 * @param fromPosition the position from which the returned positions can be reached
 * @param actors the returned positions must respect the condition that not a single actor from this
 * array is on one of them.
 * @returns all the positions from the world where not a single actor from the given actors is, and which
 * are in the given range, using the given distance function
 */ function getEmptyCellsInRange(world, actors, fromPosition, range, distanceFunction) {
    return getVectorsInRangeInWorld(range, distanceFunction, world, fromPosition).filter((currentWorldPosition)=>!actors.some((currentActor)=>(0, _otherUtils.isDeepStrictEqual)(currentActor.position, currentWorldPosition)));
}
/**
 * Returns a random position from the world where not a single actor from the given actors is, and which
 * is in the given range, using the given distance function
 * @param range the range, i.e. max distance, in which the returned position is from the position "fromPosition"
 * @param distanceFunction the function that evaluates the distance between two given positions
 * @param world the world in which the returned position must be
 * @param fromPosition the position from which the returned position can be reached
 * @param actors the returned position must respect the condition that not a single actor from this
 * array is on it.
 * @returns a random position from the world where not a single actor from the given actors is, and which
 * is in the given range, using the given distance function
 */ function getEmptyCellInRange(world, actors, fromPosition, range, distanceFunction) {
    const possibleMoves = getEmptyCellsInRange(world, actors, fromPosition, range, distanceFunction);
    return possibleMoves.length > 0 ? (0, _arrayUtils.getRandomArrayElement)(possibleMoves) : undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./utils/geometry":"fwNv2","./utils/array_utils":"3jdK9","./utils/other_utils":"lmK3G","./utils/number_utils":"BFPXP"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fwNv2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "translatePoint", ()=>translatePoint);
parcelHelpers.export(exports, "vector2DToString", ()=>vector2DToString);
parcelHelpers.export(exports, "createVector", ()=>createVector);
parcelHelpers.export(exports, "euclideanDistance", ()=>euclideanDistance);
parcelHelpers.export(exports, "movingVector", ()=>movingVector);
parcelHelpers.export(exports, "linkingPath", ()=>linkingPath);
parcelHelpers.export(exports, "vectorHasCoords", ()=>vectorHasCoords);
parcelHelpers.export(exports, "getMovementVectorsInRange", ()=>getMovementVectorsInRange);
parcelHelpers.export(exports, "positionsLinking", ()=>positionsLinking);
var _otherUtils = require("./other_utils");
/**
 * Vector constructor
 * @param x x coordinates
 * @param y y coordinates
 * @returns a new vector with the corresponding coordinates
 */ function createVector(x, y) {
    return {
        x: x,
        y: y
    };
}
/**
 * Translates a point according to a translation vector
 * @param origin The origin point
 * @param translation The translation vector
 * @returns The vector that corresponds to the origin point translated along the translation vector 
 */ function translatePoint(origin, translation) {
    return {
        x: origin.x + translation.x,
        y: origin.y + translation.y
    };
}
/**
 * Returns the string representation of the vector
 * @param v the vector
 * @returns the string representation of the vector
 */ function vector2DToString(v) {
    return `(${v.x}, ${v.y})`;
}
/**
 * Computes the distance between 2 vectors
 * @param a a vector
 * @param b another vector
 * @returns the euclidean distance between vector a and b
 */ function euclideanDistance(a, b) {
    return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
}
/**
 * Creates a range*range square of positions centered on the position {0, 0} and filter those positions so that
 * they are in the range of {0, 0} using the given range, and the given distance function.
 * @param range the range in which the positions from the created square are kept and returned
 * @param distanceFunction the function that evaluates the distance between two positions.
 * Its return value is compared to the given range.
 * @returns all the positions that are in the range of the position {0, 0} using the given distance function.
 * The position {0, 0} is included in the result.
 */ function getMovementVectorsInRange(range, distanceFunction) {
    return Array.from({
        length: 2 * range + 1
    }, (_, i)=>Array.from({
            length: 2 * range + 1
        }, (_, j)=>createVector(i - range, j - range))).flat().filter((vector)=>distanceFunction(createVector(0, 0), vector) <= range);
}
/**
 * Returns a Vector2D containing the information of the movement that has to be done in order to move by one step from fromPosition towards the given toPosition.
 * First, the movement is done along the given "firstAxis" parameter.
 * @param fromPosition the initial position, before the movement
 * @param toPosition the position that we want to reach, from the fromPosition
 * @param firstAxis the movement is done along this axis first.
 * @returns a Vector2D containing the information of the movement that has to be done in order to move towards the given toPosition.
 */ function movingVector(fromPosition, toPosition, firstAxis = "x") {
    switch(firstAxis){
        case "x":
            if (fromPosition.x < toPosition.x) return createVector(1, 0);
            else if (fromPosition.x > toPosition.x) return createVector(-1, 0);
            else if (fromPosition.y < toPosition.y) return createVector(0, 1);
            else if (fromPosition.y > toPosition.y) return createVector(0, -1);
            else return createVector(0, 0);
        case "y":
            if (fromPosition.y < toPosition.y) return createVector(0, 1);
            else if (fromPosition.y > toPosition.y) return createVector(0, -1);
            else if (fromPosition.x < toPosition.x) return createVector(1, 0);
            else if (fromPosition.x > toPosition.x) return createVector(-1, 0);
            else return createVector(0, 0);
        default:
            throw new Error("Unknown axis");
    }
}
/**
 * Returns an array of positions that constitute a path between two other positions, i.e. that visualy links two other positions.
 * @param fromPosition the starting position and target position for building the path are not included in the returned array
 * @param toPosition the target position for building the path, not included in the returned array
 * @param firstAxis this parameter can be used to define the axis to prioritize for movement when multiple options are available.
 * @returns an array of positions that constitute a path between two other positions, i.e. that visualy links two other positions.
 */ function linkingPath(fromPosition, toPosition, firstAxis) {
    const firstProcessedPosition = translatePoint(fromPosition, movingVector(fromPosition, toPosition, firstAxis));
    function linkingPathTailRecursive(fromPosition, toPosition, positionsAccumulator) {
        if ((0, _otherUtils.isDeepStrictEqual)(fromPosition, toPosition)) return positionsAccumulator;
        const nextProcessedPosition = translatePoint(fromPosition, movingVector(fromPosition, toPosition, firstAxis));
        return linkingPathTailRecursive(nextProcessedPosition, toPosition, positionsAccumulator.concat(fromPosition));
    }
    return linkingPathTailRecursive(firstProcessedPosition, toPosition, []);
}
/**
 * Returns an array of positions that constitute a path linking the given positions, i.e. that visualy links the other positions.
 * @param positions two-dimensional array of positions. Positions from each "index" are linked to the positions from the "index - 1" index.
 * the positions given as parameter are not included in the returned array.
 * @param firstAxis this parameter can be used to define the axis to prioritize for movement when multiple options are available.
 * @returns an array of positions that constitute a path linking the given positions, i.e. that visualy links the other positions.
 */ function positionsLinking(positions, firstAxis) {
    return positions.reduce((acc, currentPositions, index)=>{
        if (!index) return acc;
        return acc.concat(currentPositions.map((currentPosition)=>positions[index - 1].map((previousPosition)=>linkingPath(previousPosition, currentPosition, firstAxis)).flat()).flat());
    }, []);
}
/**
 * Returns true iff the given vector respects the coordinate constraints given as parameter
 * @param vector the vector that is tested
 * @param xCoord the x coordinate constraint. If undefined, x coordinate is not a constraint.
 * @param yCoord the x coordinate constraint. If undefined, x coordinate is not a constraint.
 * @returns true iff the given vector respects the coordinate constraints given as parameter
 */ function vectorHasCoords(vector, xCoord, yCoord) {
    return (xCoord === undefined || vector.x === xCoord) && (yCoord === undefined || vector.y === yCoord);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./other_utils":"lmK3G"}],"lmK3G":[function(require,module,exports) {
/**
 * Substitutes the i-th character of a string with another string.
 * @param baseString The string to replace the character
 * @param index The index to replace the character
 * @param replacement The replacement string
 * @returns The string with the replaced character
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stringReplaceAt", ()=>stringReplaceAt);
parcelHelpers.export(exports, "isDeepStrictEqual", ()=>isDeepStrictEqual);
parcelHelpers.export(exports, "isObject", ()=>isObject);
parcelHelpers.export(exports, "otherAxis", ()=>otherAxis);
parcelHelpers.export(exports, "executeFunctionEveryNCall", ()=>executeFunctionEveryNCall);
parcelHelpers.export(exports, "throwErrorIfUndefined", ()=>throwErrorIfUndefined);
function stringReplaceAt(baseString, index, replacement) {
    return baseString.substring(0, index) + replacement + baseString.substring(index + replacement.length);
}
/**
 * Check with deep equality wether two given objects (or primary types) are equal
 * @param object1 one of the two compared objects
 * @param object2 the other one of the two compared objects
 * @returns true if the two given objects are equal, using deep equality
 */ function isDeepStrictEqual(object1, object2) {
    if (object1 === object2) return true;
    if (object1 === undefined || object2 === undefined || !isObject(object1)) return false;
    const objKeys1 = Object.keys(object1);
    const objKeys2 = Object.keys(object2);
    if (objKeys1.length !== objKeys2.length) return false;
    for (const key of objKeys1){
        const value1 = object1[key];
        const value2 = object2[key];
        const areObjects = isObject(value1) && isObject(value2);
        if (areObjects && !isDeepStrictEqual(value1, value2) || !areObjects && value1 !== value2) return false;
    }
    return true;
}
/**
 * Returns true if the tested value's type is Object
 * @param object the tested value
 * @returns true if the tested value's type is Object
 */ function isObject(object) {
    return object !== null && typeof object === "object";
}
/**
 * Returns an axis that is not the given axis
 * @param axis the axis that isn't returned
 */ function otherAxis(axis) {
    switch(axis){
        case "x":
            return "y";
        case "y":
            return "x";
        default:
            throw new Error("Unknown axis");
    }
}
/**
 * Pure functionnal decorator used to call the given function "func" every "n" call of the decorator,
 * and call the given function "defaultFunc" when "func" isn't called
 * @param func the function that have to be called every n call of the decorator
 * @param defaultFunc the function to call otherwise
 * @param n func is called every n call
 * @param currentN counter, compared to n
 * @returns the new decorator (pure functionnal decorator) and the current returned value (by func or defaultFunc)
 */ function executeFunctionEveryNCall(func, defaultFunc, n, currentN = 0) {
    function executeFunctionEveryNCallClosure(currentNClosure) {
        const nextFunc = !currentNClosure ? func : defaultFunc;
        return [
            ()=>executeFunctionEveryNCallClosure((currentNClosure + 1) % n),
            nextFunc
        ];
    }
    return executeFunctionEveryNCallClosure(currentN);
}
/**
 * Returns true if the given value is not undefined
 * @param value the checked value
 * @returns true if the given value is not undefined
 */ function isNotUndefined(value) {
    return value !== undefined;
}
/**
 * Throws an error if the given value is undefined
 * @param value the checked value
 */ function throwErrorIfUndefined(value) {
    if (!isNotUndefined(value)) throw new Error("unexpected undefined value");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3jdK9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sum", ()=>sum);
parcelHelpers.export(exports, "getRandomArrayElement", ()=>getRandomArrayElement);
parcelHelpers.export(exports, "getRandomArrayElementNotInOtherArray", ()=>getRandomArrayElementNotInOtherArray);
parcelHelpers.export(exports, "arrayWithoutElementAtIndex", ()=>arrayWithoutElementAtIndex);
parcelHelpers.export(exports, "fisherYatesShuffle", ()=>fisherYatesShuffle);
var _otherUtils = require("./other_utils");
/**
 * Computes the sum of all the elements of the array
 * @param array the array
 * @returns the sum of all the elements of the array
 */ function sum(array) {
    return array.reduce((acc, current)=>acc + current, 0);
}
/**
 * Returns a new instance of the given array without the element of this array that is at the given index
 * @param arr the array on which an element is removed
 * @param index the index at which the element of the array is removed
 * @returns a new instance of the given array without the element of this array that is at the given index
 */ function arrayWithoutElementAtIndex(arr, index) {
    return arr.slice(0, index).concat(arr.slice(index + 1));
}
/**
 * Shuffles a new instance of the given array using a pure recursive version of the Fisher-Yates shuffle algorithm
 * @param arrayToShuffle the array to shuffle
 * @returns a shuffled new instance of the given array using a pure recursive version of the Fisher-Yates shuffle algorithm
 */ function fisherYatesShuffle(arrayToShuffle) {
    function fisherYatesShuffleTailRecursive(alreadyShuffled, restToShuffle) {
        if (restToShuffle.length === 0) return alreadyShuffled;
        const randomIndex = Math.floor(Math.random() * restToShuffle.length);
        return fisherYatesShuffleTailRecursive(alreadyShuffled.concat(restToShuffle[randomIndex]), arrayWithoutElementAtIndex(restToShuffle, randomIndex));
    }
    return fisherYatesShuffleTailRecursive([], arrayToShuffle);
}
/**
 * Returns a random element from the given array that is not in the other given array, or undefined
 * @param fromArray the array from where the random element is returned
 * @param otherArray the array containing the elements that must not be returned
 * @returns a random element from the given array that is not in the other given array, or undefined
 */ function getRandomArrayElementNotInOtherArray(fromArray, otherArray) {
    if (!fromArray.length) throw new Error("Cannot get a random element from an empty array");
    const randomIndexOrder = fisherYatesShuffle(Array.from({
        length: fromArray.length
    }, (_, i)=>i));
    const elementIndex = randomIndexOrder.reduce((acc, randomIndex)=>{
        if (acc === undefined && !otherArray.some((el)=>(0, _otherUtils.isDeepStrictEqual)(el, fromArray[randomIndex]))) return randomIndex;
        return acc;
    }, undefined);
    return elementIndex === undefined ? undefined : fromArray[elementIndex];
}
/**
 * Returns a random element from the given array
 * @param fromArray the array from where the random element is returned
 * @returns a random element from the given array
 */ function getRandomArrayElement(fromArray) {
    if (!fromArray.length) throw new Error("Cannot get a random element from an empty array");
    return fromArray[Math.floor(Math.random() * fromArray.length)];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./other_utils":"lmK3G"}],"BFPXP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "randomUniqueMinIntegers", ()=>randomUniqueMinIntegers);
parcelHelpers.export(exports, "almostEvenlySpacedIntegers", ()=>almostEvenlySpacedIntegers);
parcelHelpers.export(exports, "evenlySpacedNumbers", ()=>evenlySpacedNumbers);
parcelHelpers.export(exports, "randomUniqueIntegers", ()=>randomUniqueIntegers);
var _arrayUtils = require("./array_utils");
/**
 * Return numberOfValues evenly-spaced numbers between fromValue and toValue (evenly-spaced to the bounds as well).
 * For example, 2 evenly-spaced numbers between 0 and 10 would be 3.333 and 6.666 because the steps are the same between 0, 3.333, 6.666, and 10.
 * @param numberOfValues the number of evenly spaced values to return
 * @param fromValue the minimum value that can be returned
 * @param toValue the maximum value that can be returned
 * @param mapFn an optional function to map the results
 * @returns the evenly spaced values (fromValue and toValue are not included in the returned array)
 */ function evenlySpacedNumbers(numberOfValues, fromValue, toValue, mapFn = (x)=>x) {
    const [min, max, indexingFunction] = fromValue < toValue ? [
        fromValue,
        toValue,
        (index)=>index + 1
    ] : [
        toValue,
        fromValue,
        (index)=>numberOfValues - index
    ];
    return Array.from({
        length: numberOfValues
    }, (_, index)=>mapFn(indexingFunction(index) * (max - min) / (numberOfValues + 1) + min));
}
/**
 * Return numberOfValues almost-evenly-spaced integers (step values differ at most by 1) between fromValue and toValue (almost-evenly-spaced to the bounds as well).
 * For example, 2 almost-evenly-spaced integers between 0 and 10 would be 3 and 6 because the steps are almost the same between 0, 3, 6, and 10.
 * @param numberOfValues the number of evenly spaced values to return
 * @param fromValue the minimum value that can be returned
 * @param toValue the maximum value that can be returned
 * @returns the evenly spaced values (fromValue and toValue are not included in the returned array)
 */ function almostEvenlySpacedIntegers(numberOfValues, fromValue, toValue) {
    return evenlySpacedNumbers(numberOfValues, fromValue, toValue, Math.floor);
}
/**
 * Returns a random integer x such as minValue <= x < maxValue
 * @param minValue the minimum value that the returned integer can take
 * @param maxValue the (maximum + 1) value that the returned integer can take
 * @returns random integer x such as minValue <= x < maxValue
 */ function randomInteger(minValue, maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
}
/**
 * Returns a random integer in [minValue, maxValue) and that is not present in the given "existingIntegers"
 * @param minValue the minimum value that the returned integer can take
 * @param maxValue the (maximum + 1) value that the returned integer can take
 * @param existingIntegers the returned integer must not already be present in this array
 * @returns a random integer in the given bounds and that is not present in the given "existingIntegers"
 */ function randomUniqueInteger(minValue, maxValue, existingIntegers) {
    let randInt = randomInteger(minValue, maxValue);
    while(existingIntegers.find((currentInt)=>randInt === currentInt))randInt = randomInteger(minValue, maxValue);
    return randInt;
}
/**
 * Randomly returns minNumberOfValues to maxNumberOfValues (included) random unique integers (no repetition) whose values are in [minValue, maxValue)
 * @param minNumberOfValues the minimum number of returned values
 * @param maxNumberOfValues the maximum number of returned values
 * @param minValue the minimum value that a returned value can take
 * @param maxValue the (maximum + 1) value that a returned value can take
 * @returns minNumberOfValues to maxNumberOfValues (included) random unique integers (no repetition) whose values are in [minValue, maxValue)
 */ function randomUniqueIntegers(minNumberOfValues, maxNumberOfValues, minValue, maxValue) {
    if (maxValue - minValue < maxNumberOfValues) throw new Error("It is impossible to return more than n unique values among among n values.");
    if (minNumberOfValues > maxNumberOfValues || minValue > maxValue) throw new Error("Params starting with 'min' must be inferior to their counterpart starting with 'max'");
    function randomUniqueIntegersTailRecursive(minNumberOfValues, maxNumberOfValues, existingIntegers) {
        if (!maxNumberOfValues) return existingIntegers;
        if (maxNumberOfValues === minNumberOfValues || Math.random() < 0.5) return randomUniqueIntegersTailRecursive(minNumberOfValues - 1, maxNumberOfValues - 1, existingIntegers.concat(randomUniqueInteger(minValue, maxValue, existingIntegers)));
        else return randomUniqueIntegersTailRecursive(minNumberOfValues, maxNumberOfValues - 1, existingIntegers);
    }
    return randomUniqueIntegersTailRecursive(minNumberOfValues, maxNumberOfValues, []);
}
/**
 * This function terminates, not {@link randomUniqueIntegers}.
 * Randomly returns minNumberOfValues to maxNumberOfValues (included) randomly sorted unique integers (no repetition) whose values are in [minValue, maxValue)
 * and that contain all the lowest values that can possibly be returned.
 * @param minNumberOfValues the minimum number of returned values
 * @param maxNumberOfValues the maximum number of returned values
 * @param minValue the minimum value that a returned value can take
 * @param maxValue the (maximum + 1) value that a returned value can take
 * @returns minNumberOfValues to maxNumberOfValues (included) randomly sorted unique integers (no repetition) whose values are in [minValue, maxValue)
 * and that contain all the lowest values that can possibly be returned.
 */ function randomUniqueMinIntegers(minNumberOfValues, maxNumberOfValues, minValue, maxValue) {
    if (maxValue - minValue < maxNumberOfValues) throw new Error("It is impossible to return more than n unique values among among n values.");
    if (minNumberOfValues > maxNumberOfValues || minValue > maxValue) throw new Error("Params starting with 'min' must be inferior to their counterpart starting with 'max'");
    return (0, _arrayUtils.fisherYatesShuffle)(Array.from({
        length: Math.random() * (maxNumberOfValues - minNumberOfValues + 1) + minNumberOfValues
    }, (_, i)=>i + minValue));
}

},{"./array_utils":"3jdK9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8RVhR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setConviction", ()=>setConviction);
parcelHelpers.export(exports, "getConviction", ()=>getConviction);
parcelHelpers.export(exports, "setRange", ()=>setRange);
parcelHelpers.export(exports, "getRange", ()=>getRange);
parcelHelpers.export(exports, "getWaypointTarget", ()=>getWaypointTarget);
parcelHelpers.export(exports, "setWaypointTarget", ()=>setWaypointTarget);
parcelHelpers.export(exports, "getWaypointNumber", ()=>getWaypointNumber);
parcelHelpers.export(exports, "setWaypointNumber", ()=>setWaypointNumber);
parcelHelpers.export(exports, "getWaypointTargetNumber", ()=>getWaypointTargetNumber);
parcelHelpers.export(exports, "setWaypointTargetNumber", ()=>setWaypointTargetNumber);
parcelHelpers.export(exports, "getSpawnProba", ()=>getSpawnProba);
parcelHelpers.export(exports, "setSpawnProba", ()=>setSpawnProba);
parcelHelpers.export(exports, "setSpreadIgnorancePower", ()=>setSpreadIgnorancePower);
parcelHelpers.export(exports, "getSpreadIgnorancePower", ()=>getSpreadIgnorancePower);
parcelHelpers.export(exports, "setFaithPoints", ()=>setFaithPoints);
parcelHelpers.export(exports, "getFaithPoints", ()=>getFaithPoints);
parcelHelpers.export(exports, "getMaxFaith", ()=>getMaxFaith);
parcelHelpers.export(exports, "getPlayProba", ()=>getPlayProba);
parcelHelpers.export(exports, "setMaxFaith", ()=>setMaxFaith);
parcelHelpers.export(exports, "setWaypointTargetAndNumber", ()=>setWaypointTargetAndNumber);
parcelHelpers.export(exports, "setFaithPointsAndMax", ()=>setFaithPointsAndMax);
parcelHelpers.export(exports, "setPlayProba", ()=>setPlayProba);
var _otherUtils = require("./utils/other_utils");
///
/// 
///
/**
 * This file contains:
 * - getters to get the content of the externalProps field of the given actor of type {@link Actor}
 * - setters to set the externalProps of the given actor to the given value
 */ ///
/// 
///
function setConviction(actor, conviction) {
    return {
        ...actor,
        externalProps: {
            ...actor.externalProps,
            conviction
        }
    };
}
function getConviction(actor) {
    (0, _otherUtils.throwErrorIfUndefined)(actor.externalProps);
    (0, _otherUtils.throwErrorIfUndefined)(actor.externalProps.conviction);
    return actor.externalProps.conviction;
}
function setRange(actor, range) {
    return {
        ...actor,
        externalProps: {
            ...actor.externalProps,
            range
        }
    };
}
function getRange(actor) {
    (0, _otherUtils.throwErrorIfUndefined)(actor.externalProps);
    (0, _otherUtils.throwErrorIfUndefined)(actor.externalProps.range);
    return actor.externalProps.range;
}
function getWaypointTarget(actor) {
    (0, _otherUtils.throwErrorIfUndefined)(actor.externalProps);
    (0, _otherUtils.throwErrorIfUndefined)(actor.externalProps.waypointTarget);
    return actor.externalProps.waypointTarget;
}
function setWaypointTarget(actor, waypointTarget) {
    return {
        ...actor,
        externalProps: {
            ...actor.externalProps,
            waypointTarget
        }
    };
}
function getWaypointNumber(actor) {
    (0, _otherUtils.throwErrorIfUndefined)(actor.externalProps);
    (0, _otherUtils.throwErrorIfUndefined)(actor.externalProps.waypointNumber);
    return actor.externalProps.waypointNumber;
}
function setWaypointNumber(actor, waypointNumber) {
    return {
        ...actor,
        externalProps: {
            ...actor.externalProps,
            waypointNumber
        }
    };
}
function getWaypointTargetNumber(actor) {
    (0, _otherUtils.throwErrorIfUndefined)(actor.externalProps);
    (0, _otherUtils.throwErrorIfUndefined)(actor.externalProps.waypointTargetNumber);
    return actor.externalProps.waypointTargetNumber;
}
function setWaypointTargetAndNumber(actor, waypointTarget, waypointTargetNumber) {
    return setWaypointTarget(setWaypointTargetNumber(actor, waypointTargetNumber), waypointTarget);
}
function setWaypointTargetNumber(actor, waypointTargetNumber) {
    return {
        ...actor,
        externalProps: {
            ...actor.externalProps,
            waypointTargetNumber
        }
    };
}
function getSpawnProba(actor) {
    (0, _otherUtils.throwErrorIfUndefined)(actor.externalProps);
    (0, _otherUtils.throwErrorIfUndefined)(actor.externalProps.spawnProba);
    return actor.externalProps.spawnProba;
}
function setSpawnProba(actor, spawnProba) {
    return {
        ...actor,
        externalProps: {
            ...actor.externalProps,
            spawnProba
        }
    };
}
function setSpreadIgnorancePower(actor, spreadIgnorancePower) {
    return {
        ...actor,
        externalProps: {
            ...actor.externalProps,
            spreadIgnorancePower
        }
    };
}
function getSpreadIgnorancePower(actor) {
    (0, _otherUtils.throwErrorIfUndefined)(actor.externalProps);
    (0, _otherUtils.throwErrorIfUndefined)(actor.externalProps.spreadIgnorancePower);
    return actor.externalProps.spreadIgnorancePower;
}
function setFaithPoints(actor, faithPoints) {
    return {
        ...actor,
        externalProps: {
            ...actor.externalProps,
            faithPoints
        }
    };
}
function getFaithPoints(actor) {
    (0, _otherUtils.throwErrorIfUndefined)(actor.externalProps);
    (0, _otherUtils.throwErrorIfUndefined)(actor.externalProps.faithPoints);
    return actor.externalProps.faithPoints;
}
function getMaxFaith(actor) {
    (0, _otherUtils.throwErrorIfUndefined)(actor.externalProps);
    (0, _otherUtils.throwErrorIfUndefined)(actor.externalProps.maxFaith);
    return actor.externalProps.maxFaith;
}
function setMaxFaith(actor, maxFaith) {
    return {
        ...actor,
        externalProps: {
            ...actor.externalProps,
            maxFaith
        }
    };
}
function setFaithPointsAndMax(actor, faithPoints, maxFaithPoints) {
    return setFaithPoints(setMaxFaith(actor, maxFaithPoints), faithPoints);
}
function getPlayProba(actor) {
    (0, _otherUtils.throwErrorIfUndefined)(actor.externalProps);
    (0, _otherUtils.throwErrorIfUndefined)(actor.externalProps.playProba);
    return actor.externalProps.playProba;
}
function setPlayProba(actor, playProba) {
    return {
        ...actor,
        externalProps: {
            ...actor.externalProps,
            playProba
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./utils/other_utils":"lmK3G"}],"edeGs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "playGame", ()=>playGame);
parcelHelpers.export(exports, "initWorld", ()=>initWorld);
parcelHelpers.export(exports, "initPhases", ()=>initPhases);
parcelHelpers.export(exports, "initActors", ()=>initActors);
parcelHelpers.export(exports, "initSpawners", ()=>initSpawners);
parcelHelpers.export(exports, "nextTurn", ()=>nextTurn);
parcelHelpers.export(exports, "initGroundWaypoints", ()=>initGroundWaypoints);
var _actor = require("./actor");
var _geometry = require("./utils/geometry");
var _world = require("./world");
var _actorCreators = require("./actor_creators");
var _phase = require("./phase");
var _executePhases = require("./execute_phases");
var _otherUtils = require("./utils/other_utils");
var _numberUtils = require("./utils/number_utils");
var _props = require("./props");
/**
 * Initializes a new world to the given width and height where 0 turns
 * have elapsed.
 * @param width the width
 * @param height the height
 * @returns A brand new world where 0 turns have elapsed
 */ function initWorld(width, height) {
    return (0, _world.createWorld)(width, height);
}
/**
 * @returns The array of phases
 */ function initPhases() {
    return [
        (0, _phase.createPhase)("spawn", (0, _executePhases.spawnPhase)),
        (0, _phase.createPhase)("temperatureRise", (0, _executePhases.temperatureRisePhase)),
        (0, _phase.createPhase)("convertEnemies", (0, _executePhases.spreadConvictionPhase)),
        (0, _phase.createPhase)("spreadIgnorance", (0, _executePhases.spreadConvictionPhase)),
        (0, _phase.createPhase)("move", (0, _executePhases.movePhase)),
        (0, _phase.createPhase)("play", (0, _executePhases.playPhase)),
        (0, _phase.createPhase)("enemyFlee", (0, _executePhases.enemyFleePhase))
    ];
}
/**
 * Randomly initializes spawners
 * @param world the world where the spawners are created
 * @param minSpawners the minimum number of returned spawners
 * @param maxSpawners the maximum number of returned spawners
 * @param spawnersParallelAxis the returned spawners can reach each other by a translation along this axis
 * @param spawnerLineNumber the coordinate of the returned position on the not-given axis
 * @param averageSpawnsPerPhase number representing the average of the sum of spawns during the spawn phase, for the returned spawners.
 * Note that this number is inferior to the actual number of returned spawners.
 * @returns an array of 1 to maxSpawners spawners with unique positions, that all have the same coordinate value on the axis that was not given
 * and that have the same probability of making someone spawn per spawn phase.
 */ function initSpawners(world, minSpawners, maxSpawners, spawnersParallelAxis, spawnerLineNumber, averageSpawnsPerPhase = 0.6) {
    if (minSpawners < 1) throw new Error("There should be at least one spawner in the game.");
    const spawnersPerpendicularAxisCoord = (0, _numberUtils.randomUniqueIntegers)(minSpawners, maxSpawners, 0, spawnersParallelAxis === "x" ? world.width : world.height);
    const spawnProba = averageSpawnsPerPhase / spawnersPerpendicularAxisCoord.length;
    return (0, _world.createPositionsAlongAxis)(spawnersParallelAxis, spawnersPerpendicularAxisCoord, spawnerLineNumber).map((spawnerPosition)=>(0, _actorCreators.createSpawner)(spawnerPosition, spawnProba));
}
/**
 * Randomly initializes grounds
 * @param world the world where the grounds are created
 * @param minGroundsPerLine the minimum number of created grounds per line along the groundsAxis
 * @param maxGroundsPerLine the maximum number of created grounds per line along the groundsAxis
 * @param groundsAxis the returned grounds can reach each other by a translation along this axis
 * @param groundLineNumbers the coordinates of the returned positions on the not-given axis (for each line where ground are created)
 * @param numberOfGroundLines The number of lines of grounds (in groundsAxis direction) where grounds are created
 * @returns an array of numberOfGroundLines to maxGroundsPerLine * numberOfGroundLines grounds with unique positions
 */ function initGroundWaypoints(world, minGroundsPerLine, maxGroundsPerLine, groundsAxis, groundLineNumbers, numberOfGroundLines) {
    return Array.from({
        length: numberOfGroundLines
    }, (_, index)=>(0, _world.randomPositionsAlongAxis)(world, minGroundsPerLine, maxGroundsPerLine, groundsAxis, groundLineNumbers[index]).map((groundPosition)=>(0, _actorCreators.createGround)(groundPosition, index + 1)));
}
/**
 * Randomly initializes spaghettiMonsters
 * @param world the world where the spaghettiMonsters are created
 * @param minSpaghettiMonsters the minimum number of returned spaghettiMonsters
 * @param maxSpaghettiMonsters the maximum number of returned spaghettiMonsters
 * @param spaghettiMonstersAxis the returned spaghettiMonsters can reach each other by a translation along this axis
 * @param spaghettiMonstersLineNumber the coordinate of the returned position on the not-given axis
 * @param waypointNumber the waypointNumber of the spaghettiMonsters
 * @returns an array of 1 to maxSpaghettiMonsters spaghettiMonsters with unique positions, that all have the same coordinate value on the axis that was not given
 */ function initspaghettiMonsters(world, minSpaghettiMonsters, maxSpaghettiMonsters, spaghettiMonstersAxis, spaghettiMonstersLineNumber, waypointNumber) {
    return (0, _world.randomPositionsAlongAxis)(world, minSpaghettiMonsters, maxSpaghettiMonsters, spaghettiMonstersAxis, spaghettiMonstersLineNumber).map((spaghettiMonsterPosition)=>(0, _actorCreators.createSpaghettiMonster)(spaghettiMonsterPosition, waypointNumber));
}
/**
 * Randomly creates the waypoints of the world (creates spawners, ground, and spaghettiMonster)
 * @param world the world on which the waypoints are created
 * @param intermediateWaypointsNumber the number of waypoints that have to be reached by the moving actors (spawner and spaghettiMonster not included)
 * @param averageSpawnsPerPhase number representing the average of the sum of spawns during the spawn phase, for the returned spawners.
 * Note that this number is inferior to the actual number of returned spawners.
 * @returns the created waypoints of the world
 */ function initWayPointActors(world, intermediateWaypointsNumber, spawnersAxis, averageSpawnsPerPhase, minSpawners = 1, maxSpawners = 3) {
    const maxLineNumber = spawnersAxis === "x" ? world.height - 1 : world.width - 1;
    const spawnerLineNumber = Math.random() < 0.5 ? 0 : maxLineNumber;
    const spaghettiMonsterLineNumber = maxLineNumber - spawnerLineNumber;
    const intermediateWaypointsLineNumber = (0, _numberUtils.almostEvenlySpacedIntegers)(intermediateWaypointsNumber, spaghettiMonsterLineNumber ? 0 : maxLineNumber, spaghettiMonsterLineNumber);
    return [
        initSpawners(world, minSpawners, maxSpawners, spawnersAxis, spawnerLineNumber, averageSpawnsPerPhase)
    ].concat(initGroundWaypoints(world, 1, Math.random() < 0.7 ? 2 : 1, spawnersAxis, intermediateWaypointsLineNumber, intermediateWaypointsNumber)).concat([
        initspaghettiMonsters(world, 1, 1, spawnersAxis, spaghettiMonsterLineNumber, intermediateWaypointsNumber + 1)
    ]);
}
/**
 * Initializes the actors. Should be used at the beginning of the game
 * @param world the world where the actors are created
 * @param intermediateWaypointLinesNumber the number of waypoints that the actors need to cross between the spawners and the spaghettiMonsters
 * @param averageSpawnsPerPhase number representing the average of the sum of spawns during the spawn phase, for the returned spawners.
 * Note that this number is inferior to the actual number of returned spawners.
 * @returns the first actors of the game.
 */ function initActors(world, intermediateWaypointLinesNumber, spawnersAxis, averageSpawnsPerPhase, playProba, minSpawners, maxSpawners) {
    const waypoints = initWayPointActors(world, intermediateWaypointLinesNumber, spawnersAxis, averageSpawnsPerPhase, minSpawners, maxSpawners);
    return waypoints.flat().concat((0, _geometry.positionsLinking)(waypoints.map((waypointsSameValue)=>waypointsSameValue.map((waypoint)=>waypoint.position)), (0, _otherUtils.otherAxis)(spawnersAxis)).map((position)=>(0, _actorCreators.createGround)(position))).concat((0, _actorCreators.createPlayer)(playProba));
}
/**
 * Ensures all proposed actors are in a valid state and if they are not, resolves the conflict
 * @param world The world where the actors are
 * @param actors The state of the actors before the proposal of their new state was made
 * @param proposals We want to know if these actors are valid
 * @returns An array of actor with valid states and no conflicts
 */ function resolveProposals(world, actors, proposals) {
    return proposals.reduce((acc, currentProposal, actorIndex)=>{
        if (currentProposal === undefined) throw new Error("undefined actor");
        if ((0, _actor.isValidActorInEnvironment)(world, currentProposal)) {
            if ((0, _actor.isWalker)(currentProposal) && !(0, _actor.filterByKinds)(actors, [
                "ground",
                "spawner",
                "spaghettiMonster"
            ]).find((currentGround)=>(0, _otherUtils.isDeepStrictEqual)(currentGround.position, currentProposal.position))) return acc;
            return acc.concat(currentProposal);
        }
        return acc;
    }, []);
}
/**
 * Computes the next turn of a world according to its phases and actors.
 * @param phases The phases
 * @param world The world
 * @param actors The actors
 * @param spawnersAxis The axis that is parallel to the line that links the spawners
 * @returns A new array of actors
 */ function nextTurn(phases, world, actors, spawnersAxis) {
    return phases.reduce((actorsAcc, aPhase)=>{
        const proposals = aPhase.executePhase(actorsAcc, actorsAcc.map((actingActor)=>actingActor.actions[aPhase.funcName]({
                actorsAcc,
                actingActor,
                world,
                spawnersAxis
            }) /* ReturnType<ActorActions[keyof ActorActions]> */ ));
        return resolveProposals(world, actorsAcc, proposals);
    }, actors);
}
/**
 * A function that plays the game and displays its state at every turn.
 * @param display The display function that displays a world and its actors
 */ function playGame(display) {
    const world = initWorld(10, 10);
    const spawnersAxis = Math.random() < 0.5 ? "x" : "y";
    const playProba = 0.25;
    const spawnProba = 1;
    const intermediateWaypointLinesNumber = 2;
    let actors = initActors(world, intermediateWaypointLinesNumber, spawnersAxis, spawnProba, playProba);
    const phases = initPhases();
    console.log(`\n\x1b[32m PASTAFARIST \x1b[0m\n`);
    let turnCounter = 0; // in a purely functional way, an actor containing the turns combined with an incrementTurn action and an updateTurn phase could be made
    const maxTurn = 20;
    while(turnCounter < maxTurn && (0, _actor.filterByKinds)(actors, [
        "spaghettiMonster"
    ]).some((spaghettiMonster)=>(0, _props.getFaithPoints)(spaghettiMonster) > 0)){
        display(world, actors);
        actors = nextTurn(phases, world, actors, spawnersAxis);
        ++turnCounter;
    }
    display(world, actors);
    if ((0, _actor.filterByKinds)(actors, [
        "spaghettiMonster"
    ]).some((spaghettiMonster)=>(0, _props.getFaithPoints)(spaghettiMonster) > 0)) console.log("Some spaghetti monsters still have faith, you won the game! :)");
    else console.log("Not a single spaghetti monsters still has faith, you lost the game! :(");
}

},{"./actor":"8zn3E","./world":"1L67l","./actor_creators":"aTSA7","./phase":"bmQgj","./props":"8RVhR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./utils/geometry":"fwNv2","./execute_phases":"2267k","./utils/other_utils":"lmK3G","./utils/number_utils":"BFPXP"}],"aTSA7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createActor", ()=>createActor);
parcelHelpers.export(exports, "createGround", ()=>createGround);
parcelHelpers.export(exports, "createSpaghettiMonster", ()=>createSpaghettiMonster);
parcelHelpers.export(exports, "createSpawner", ()=>createSpawner);
parcelHelpers.export(exports, "createIgnoranceSpreader", ()=>createIgnoranceSpreader);
parcelHelpers.export(exports, "createWalker", ()=>createWalker);
parcelHelpers.export(exports, "createIgnorant", ()=>createIgnorant);
parcelHelpers.export(exports, "createPlayer", ()=>createPlayer);
parcelHelpers.export(exports, "createGoodGuy", ()=>createGoodGuy);
var _geometry = require("./utils/geometry");
var _actor = require("./actor");
var _otherUtils = require("./utils/other_utils");
var _actorActions = require("./actor_actions");
var _props = require("./props");
/**
 * Actor constructor
 * @param position The position of the created Actor
 * @param actionGenerators The generators of the actions of the created actor
 * @param actions The actions of the created Actor
 * @param kind The kind of the created Actor
 * @param externalProps The data or parameters concerning the created actor
 * @returns A new actor
 */ function createActor(position, actionGenerators, actions, kind, externalProps) {
    const actorActions = {
        ...(0, _actorActions.defaultActions),
        ...actions
    };
    const defaultActionsGenerators = Object.keys(actorActions).reduce((acc, key)=>{
        const action = actorActions[key];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        acc[key] = (0, _actorActions.createDefaultActionGenerator)(action);
        return acc;
    }, {});
    const actorActionsGenerators = {
        ...defaultActionsGenerators,
        ...actionGenerators
    };
    return {
        position,
        actionGenerators: actorActionsGenerators,
        actions: actorActions,
        kind,
        externalProps
    };
}
/**
 * Constructor for a default "ignorant" actor
 * @param position the position where the ignorant is in the world
 * @param waypointTarget the next position that the ignorant has to reach
 * @param faithPoints the level of faithPoints of the ignorant
 * @returns the created Actor of kind "ignorant"
 */ function createIgnorant(position, waypointTarget, faithPoints = 100) {
    (0, _otherUtils.throwErrorIfUndefined)(waypointTarget);
    return (0, _props.setWaypointTargetAndNumber)((0, _props.setFaithPointsAndMax)((0, _props.setConviction)(createActor(position, {
        move: (0, _otherUtils.executeFunctionEveryNCall)((0, _actorActions.moveTowardWaypointTarget), (0, _actorActions.defaultActions)["move"], 2)
    }, {
        move: (0, _actorActions.moveTowardWaypointTarget),
        temperatureRise: (0, _actorActions.temperatureRise),
        enemyFlee: (0, _actorActions.enemyFlee)
    }, "ignorant"), 10), faithPoints, 100), waypointTarget, 1);
}
/**
 * Constructor for a default "ignoranceSpreader" actor
 * @param position the position where the ignoranceSpreader is in the world
 * @param waypointTarget the next position that the ignoranceSpreader has to reach
 * @param faithPoints the level of faithPoints of the ignoranceSpreader
 * @param spreadIgnorancePower this value indicates how much the created "ignoranceSpreader" can increase the faith of the "ignorant" actors
 * in its range
 * @param range the range in which the ignoranceSpreader can affect the ignorants
 * @returns the created Actor of kind "ignoranceSpreader"
 */ function createIgnoranceSpreader(position, waypointTarget, faithPoints = 70, spreadIgnorancePower = 5, range = 3) {
    (0, _otherUtils.throwErrorIfUndefined)(waypointTarget);
    return (0, _props.setWaypointTargetAndNumber)((0, _props.setFaithPointsAndMax)((0, _props.setSpreadIgnorancePower)((0, _props.setRange)(createActor(position, {}, {
        move: (0, _actorActions.moveTowardWaypointTarget),
        spreadIgnorance: (0, _actorActions.spreadIgnorance),
        enemyFlee: (0, _actorActions.enemyFlee)
    }, "ignoranceSpreader"), range), spreadIgnorancePower), faithPoints, 70), waypointTarget, 1);
}
/**
 * Constructors for the Actors that can move by themselves during the move Phase.
 * The elements of the dictionnary are constrained by the type {@link WalkerCreator}
 */ const walkerCreator = {
    ignorant: createIgnorant,
    ignoranceSpreader: createIgnoranceSpreader
};
/**
 * Generic fonction called to create Actors that can move by themselves during the move Phase.
 * Those Actors are listed in the type {@link Walker}.
 * @param kind the kind of the created Actor
 * @param path the waypoints constraining the path on which the Actor will move
 * @param position the position of the created Actor
 * @param faithPoints the faithPoints of the created Actor
 * @returns the created Actor whose kind is listed in the type {@link Walker}
 */ function createWalker(kind, path, position, faithPoints) {
    const firstWaypoint = (0, _actor.findNextWaypointTarget)(path, position, 0);
    return walkerCreator[kind](position, firstWaypoint.waypointTarget, faithPoints);
}
/**
 * Constructor for a default "spawner" actor
 * @param position the position where the spawner is in the world
 * @param spawnProba number in [0, 1] representing the probability during each spawn phase to create a new Actor
 * @returns the created Actor of kind "spawner"
 */ function createSpawner(position, spawnProba = 0.3) {
    return (0, _props.setSpawnProba)((0, _props.setWaypointNumber)(createActor(position, {}, {
        spawn: (0, _actorActions.spawn)
    }, "spawner"), 0), spawnProba);
}
/**
 * Constructor for a default "ground" actor
 * @param position the position of the ground
 * @param waypointNumber the number indexing the order in which the waypoints have to be reached
 * @returns the created Actor of kind "ground"
 */ function createGround(position, waypointNumber) {
    return waypointNumber ? (0, _props.setWaypointNumber)(createActor(position, {}, {}, "ground"), waypointNumber) : createActor(position, {}, {}, "ground");
}
/**
 * Constructor for a default "goodGuy" actor
 * @param position the position of the goodGuy
 * @param range the range in which the goodGuy can affect the walkers
 * @param conviction the conviction defines how impacting the goodGuy is on the walkers
 * @returns the created Actor of kind "goodGuy"
 */ function createGoodGuy(position, range = 2, conviction = 9) {
    return (0, _props.setRange)((0, _props.setConviction)(createActor(position, {}, {
        convertEnemies: (0, _actorActions.convertEnemies)
    }, "goodGuy"), conviction), range);
}
/**
 * Constructor for a default "spaghettiMonster" actor
 * @param position the position of the goodGuy
 * @param waypointNumber the number indexing the order in which the waypoints (including the spaghettiMonster) have to be reached
 * @param faithPoints the faith of the spaghettiMonster. The game is lost when its faithPoints reach 0.
 * @returns the created Actor of kind "spaghettiMonster"
 */ function createSpaghettiMonster(position, waypointNumber, faithPoints = 100) {
    return (0, _props.setWaypointNumber)((0, _props.setFaithPoints)((0, _props.setMaxFaith)(createActor(position, {}, {}, "spaghettiMonster"), 100), faithPoints), waypointNumber);
}
/**
 * Constructor for a default "player" actor
 * @param playProba the probability for the player to play, for each play Phase
 * @returns the created Actor of kind "player"
 */ function createPlayer(playProba = 0.25) {
    return (0, _props.setPlayProba)(createActor((0, _geometry.createVector)(0, 0), {}, {
        play: (0, _actorActions.play)
    }, "player"), playProba);
}

},{"./actor":"8zn3E","./actor_actions":"1C9Dh","./props":"8RVhR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./utils/geometry":"fwNv2","./utils/other_utils":"lmK3G"}],"1C9Dh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "temperatureRise", ()=>temperatureRise);
parcelHelpers.export(exports, "spreadIgnorance", ()=>spreadIgnorance);
parcelHelpers.export(exports, "convertEnemies", ()=>convertEnemies);
parcelHelpers.export(exports, "enemyFlee", ()=>enemyFlee);
parcelHelpers.export(exports, "spawn", ()=>spawn);
parcelHelpers.export(exports, "moveTowardWaypointTarget", ()=>moveTowardWaypointTarget);
parcelHelpers.export(exports, "defaultActions", ()=>defaultActions);
parcelHelpers.export(exports, "play", ()=>play);
parcelHelpers.export(exports, "impactActorsConviction", ()=>impactActorsConviction);
parcelHelpers.export(exports, "createDefaultActionGenerator", ()=>createDefaultActionGenerator);
parcelHelpers.export(exports, "playPriorityAroundLoneGrounds", ()=>playPriorityAroundLoneGrounds);
var _world = require("./world");
var _otherUtils = require("./utils/other_utils");
var _numberUtils = require("./utils/number_utils");
var _arrayUtils = require("./utils/array_utils");
var _actorCreators = require("./actor_creators");
var _geometry = require("./utils/geometry");
var _props = require("./props");
var _actor = require("./actor");
/**
 * Creates a default action generator for the given action.
 * @param action the action we want to decorate to create a generator returning functions to use after the use of the given function
 * @returns an action generator that will always return the same generator and the same action as the given action
 */ function createDefaultActionGenerator(action) {
    return [
        ()=>createDefaultActionGenerator(action),
        action
    ];
}
/**
 * All the default actions, so that each Phase can be called on each actor, even if the actor hasn't its specific phase function
 */ const defaultActions = {
    spawn: (params)=>undefined,
    temperatureRise: (params)=>0,
    spreadIgnorance: (params)=>{
        return {
            impactedActorsIndices: [],
            impactAmounts: []
        };
    },
    convertEnemies: (params)=>{
        return {
            impactedActorsIndices: [],
            impactAmounts: []
        };
    },
    enemyFlee: (params)=>false,
    move: (params)=>{
        return (0, _geometry.createVector)(0, 0);
    },
    play: (params)=>undefined
};
/**
 * The "spawner" action.
 * It has a 50% chance to spawn a new actor, which has 70% chance to be an ignorant, or 30% chance to be an ignoranceSpreader.
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns A new actor to be spawned
 */ function spawn(params) {
    if (Math.random() < (0, _props.getSpawnProba)(params.actingActor)) {
        if (Math.random() < 0.7) return (0, _actorCreators.createWalker)("ignorant", params.actorsAcc, params.actingActor.position);
        else return (0, _actorCreators.createWalker)("ignoranceSpreader", params.actorsAcc, params.actingActor.position);
    }
    return undefined;
}
/**
 * The "temperatureRise" action.
 * It returns the damage done to the spaghetti monster. The actor only does damage if it's on the same
 * position as the spaghetti monster
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns The amount of damage to do to the spaghetti monster
 */ function temperatureRise(params) {
    return params.actorsAcc.find((a)=>(0, _actor.hasOneOfKinds)(a, [
            "spaghettiMonster"
        ]) && (0, _otherUtils.isDeepStrictEqual)(a.position, params.actingActor.position)) === undefined ? 0 : (0, _props.getConviction)(params.actingActor);
}
/**
 * Filter the actors whose faith must be impacted (positively or negatively) and return an object containing their indices and how much their faith is impacted
 * @param actors the actors from which the impacted actors are filtered
 * @param actingActor the actor that is impacting the faith of the other actors
 * @param impactedKinds the kinds of the actors that can be impacted by the actingActor
 * @param impactFunction the function defining the value by which the faith of the actors is impacted
 * @returns an object containing:
 * - the indices, in the given actors, of the impacted actors
 * - the values corresponding to how much the faithPoints of the impacted actors are impacted
 */ function impactActorsConviction(actors, actingActor, impactedKinds, impactFunction) {
    const impactedActorsIndices = actors.reduce((acc, currentActor, actorIndex)=>(0, _actor.hasOneOfKinds)(currentActor, impactedKinds) && (0, _geometry.euclideanDistance)(currentActor.position, actingActor.position) <= (0, _props.getRange)(actingActor) ? acc.concat(actorIndex) : acc, []);
    const impactAmounts = impactFunction(actingActor, impactedActorsIndices.map((i)=>actors[i]));
    return {
        impactedActorsIndices,
        impactAmounts
    };
}
/**
 * The "spreadIgnorance" action.
 * It returns all the actors the actor will spread faithPoints to, and the amount for which every actor will be impacted.
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns all the actors the actor will spread faithPoints to, and the amount for which every actor will be impacted.
 */ function spreadIgnorance(params) {
    return impactActorsConviction(params.actorsAcc, params.actingActor, [
        "ignorant"
    ], (impactingActor, actorsToImpact)=>Array.from({
            length: actorsToImpact.length
        }, (_)=>(0, _props.getSpreadIgnorancePower)(impactingActor)));
}
/**
 * The "convertEnemies" action.
 * It returns all the actors that will be damaged, and the amount for which every actor damaged will be damaged
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns all the actors that will be damaged, and the amount for which every actor damaged will be damaged
 */ function convertEnemies(params) {
    return impactActorsConviction(params.actorsAcc, params.actingActor, [
        ...(0, _actor.walkerKeys)
    ], (impactingActor, actorsToImpact)=>Array.from({
            length: actorsToImpact.length
        }, (_)=>-1 * (0, _props.getConviction)(impactingActor)));
}
/**
 * A "move" action
 * Returns the movement vector corresponding to the movement that the given actor should do to get closer to its waypointTarget
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns the movement vector corresponding to the movement that the given actor should do to get closer to its waypointTarget
 */ function moveTowardWaypointTarget(params) {
    return (0, _geometry.movingVector)(params.actingActor.position, (0, _props.getWaypointTarget)(params.actingActor), (0, _otherUtils.otherAxis)(params.spawnersAxis));
}
/**
 * The "enemyFlee" action.
 * It returns whether the actor will decide to not exist or not.
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns true iif the current actor decides to not exist anymore
 */ function enemyFlee(params) {
    return (0, _actor.hasOneOfKinds)(params.actingActor, [
        ...(0, _actor.walkerKeys),
        "spaghettiMonster"
    ]) ? (0, _props.getFaithPoints)(params.actingActor) <= 0 : false;
}
/**
 * Can be used for inside "play" actions
 * Returns a good positions, or undefined if no good position avaible
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns a good positions, or undefined if no good position avaible
 */ function playPriorityAroundLoneGrounds(params, range, distanceFunction) {
    const numberOfLines = (0, _world.axisLength)(params.world, (0, _otherUtils.otherAxis)(params.spawnersAxis));
    const consideredLineOrder = (0, _numberUtils.randomUniqueMinIntegers)(numberOfLines, numberOfLines, 0, numberOfLines);
    const groundListPerLine = consideredLineOrder.map((consideredLine)=>(0, _actor.filterByKinds)(params.spawnersAxis === "x" ? (0, _actor.filterActorsByPosition)(params.actorsAcc, undefined, consideredLine) : (0, _actor.filterActorsByPosition)(params.actorsAcc, consideredLine, undefined), [
            "ground",
            "spawner",
            "spaghettiMonster"
        ]));
    const returnedGroundAroundWhichToPlay = Array.from({
        length: (0, _world.axisLength)(params.world, params.spawnersAxis) - 1
    }, (_, i)=>i + 1).reduce((acc, groundListPerLineConstraint)=>{
        if (acc) return acc;
        return groundListPerLine.reduce((acc2, currentGrounds)=>{
            if (acc2) return acc2;
            if (currentGrounds.length === groundListPerLineConstraint) {
                const actorsWithoutPlayers = params.actorsAcc.filter((a)=>!(0, _actor.hasOneOfKinds)(a, [
                        "player"
                    ]));
                const groundAroundWhichToPlay = currentGrounds.find((currentGround)=>(0, _world.getEmptyCellInRange)(params.world, actorsWithoutPlayers, currentGround.position, range, distanceFunction));
                return groundAroundWhichToPlay;
            }
            return acc2;
        }, undefined);
    }, undefined);
    return returnedGroundAroundWhichToPlay ? (0, _world.getEmptyCellInRange)(params.world, params.actorsAcc, returnedGroundAroundWhichToPlay.position, range, (0, _geometry.euclideanDistance)) : undefined;
}
/**
 * A "play" action
 * Returns a random valid position for the play action
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns a random valid position for the play action, or undefined if no positions avaible
 */ function playRandomValid(params) {
    return (0, _world.getRandomPositionNotInGivenPositions)(params.world, (0, _actor.filterByKinds)(params.actorsAcc, (0, _arrayUtils.arrayWithoutElementAtIndex)([
        ...(0, _actor.kindKeys)
    ], [
        ...(0, _actor.kindKeys)
    ].indexOf("player"))).map((a)=>a.position));
}
/**
 * A "play" action
 * Returns a good positions, or if no good position found, returns a random valid action for the play action, or undefined if no position avaible
 * @param params The uniform parameters for the actions. See {@link ActorActionParams} for further details.
 * @returns a good positions, or if no good position found, returns a random valid action for the play action, or undefined if no position avaible
 */ function play(params) {
    if (Math.random() > (0, _props.getPlayProba)(params.actingActor)) return undefined;
    const range = 2;
    const distanceFunction = (0, _geometry.euclideanDistance);
    return playPriorityAroundLoneGrounds(params, range, distanceFunction) ?? playRandomValid(params);
}

},{"./world":"1L67l","./actor_creators":"aTSA7","./props":"8RVhR","./actor":"8zn3E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./utils/geometry":"fwNv2","./utils/array_utils":"3jdK9","./utils/other_utils":"lmK3G","./utils/number_utils":"BFPXP"}],"bmQgj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPhase", ()=>createPhase);
/**
 * Constructor for a phase
 * @param funcName The name of the phase
 * @param executePhase The function that computes the new actor array according to the results of the phase from all the actors
 * @returns A new phase
 */ function createPhase(funcName, executePhase) {
    return {
        funcName: funcName,
        executePhase: executePhase
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2267k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "spawnPhase", ()=>spawnPhase);
parcelHelpers.export(exports, "temperatureRisePhase", ()=>temperatureRisePhase);
parcelHelpers.export(exports, "spreadConvictionPhase", ()=>spreadConvictionPhase);
parcelHelpers.export(exports, "enemyFleePhase", ()=>enemyFleePhase);
parcelHelpers.export(exports, "movePhase", ()=>movePhase);
parcelHelpers.export(exports, "playPhase", ()=>playPhase);
var _actor = require("./actor");
var _arrayUtils = require("./utils/array_utils");
var _actorCreators = require("./actor_creators");
var _props = require("./props");
/**
 * The executePhase function for the "spawn" phase.
 * All it does is spawn new actors if there are to be spawned.
 * @param oldActors The actors before the phase
 * @param phaseResult The results of the phase
 * @returns A proposal for the actors after executing the "spawn" phase
 */ function spawnPhase(oldActors, phaseResult) {
    return oldActors.concat(phaseResult.filter((returnedActor)=>returnedActor !== undefined));
}
/**
 * The executePhase function for the "spawn" phase.
 * All it does is spawn new actors if there are to be spawned.
 * @param oldActors The actors before the phase
 * @param phaseResult The results of the phase
 * @returns A proposal for the actors after executing the "spawn" phase
 */ function playPhase(oldActors, phaseResult) {
    return oldActors.concat(phaseResult.filter((returnedVector)=>returnedVector !== undefined).map((vector)=>(0, _actorCreators.createGoodGuy)(vector)));
}
/**
 * The executePhase function for the "temperatureRise" phase.
 * It inflicts "damage" to the Spaghetti Monster, our defense target.
 * @param oldActors The actors before the phase
 * @param phaseResult The results of the phase
 * @returns A proposal for the actors after executing the "temperatureRise" phase
 */ function temperatureRisePhase(oldActors, phaseResult) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return oldActors.map((currentActor)=>(0, _actor.hasOneOfKinds)(currentActor, [
            "spaghettiMonster"
        ]) ? (0, _props.setFaithPoints)(currentActor, (0, _props.getFaithPoints)(currentActor) - (0, _arrayUtils.sum)(phaseResult)) : currentActor);
}
/**
 * The executePhase function for the "move" phase.
 * It makes the given actors move along the path generated from the spawners to the spaghettiMonsters
 * @param oldActors The actors before the phase
 * @param phaseResult The results of the phase
 * @returns A proposal for the actors after executing the "move" phase
 */ function movePhase(oldActors, phaseResults) {
    return phaseResults.map((phaseResult, actorIndex)=>{
        const newActor = (0, _actor.translateAndUpdateWaypoint)(oldActors, oldActors[actorIndex], phaseResult);
        return {
            ...newActor,
            actions: {
                ...newActor.actions,
                move: newActor.actionGenerators["move"][1]
            },
            actionGenerators: {
                ...newActor.actionGenerators,
                move: newActor.actionGenerators["move"][0]()
            }
        };
    });
}
/**
 * Returns the given actor, with its ignorance updated by taking into consideration the spreadConvictionResults
 * @param actor the actor whose ignorance must be updated using the spreadConvictionResults
 * @param actorIndex the index by which the actor is referenced in spreadConvictionResults.impactedActorsIndices
 * @param spreadConvictionResults array of objects containing unique indices referencing the actor to update, and the
 * values by which the ignorance of the actors are impacted
 * @returns the given actor, with its ignorance updated by taking into consideration the spreadConvictionResults
 */ function updateIgnorance(actor, actorIndex, spreadConvictionResults) {
    return (0, _props.setFaithPoints)(actor, Math.min(spreadConvictionResults.reduce((ignoranceAcc, spreadIgnoranceResult)=>ignoranceAcc + (spreadIgnoranceResult.impactAmounts[spreadIgnoranceResult.impactedActorsIndices.indexOf(actorIndex)] ?? 0), (0, _props.getFaithPoints)(actor)), (0, _props.getMaxFaith)(actor)));
}
/**
 * The executePhase function for the phase about converting people to a religion.
 * Ignorants can get slowly converted to our holy faith; pastafarism, or they could be comforted in their ignorance...
 * @param oldActors The actors before the phase
 * @param spreadConvictionVectors The results of the phase
 * @returns A proposal for the actors after executing the "convertEnemies" phase
 */ function spreadConvictionPhase(oldActors, spreadConvictionVectors) {
    return oldActors.map((currentActor, actorIndex)=>(0, _actor.hasOneOfKinds)(currentActor, [
            ...(0, _actor.walkerKeys),
            "spaghettiMonster"
        ]) ? updateIgnorance(currentActor, actorIndex, spreadConvictionVectors) : currentActor);
}
/**
 * The executePhase function for the "enemyFlee" phase.
 * It removes the actors that have decided to not exist anymore.
 * @param oldActors The actors before the phase
 * @param phaseResult The results of the phase
 * @returns A proposal for the actors after executing the "enemyFlee" phase
 */ function enemyFleePhase(oldActors, phaseResult) {
    return oldActors.filter((a, i)=>!phaseResult[i]);
}

},{"./actor":"8zn3E","./utils/array_utils":"3jdK9","./actor_creators":"aTSA7","./props":"8RVhR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["3LmCz","h7u1C"], "h7u1C", "parcelRequire09ca")

//# sourceMappingURL=index.b71e74eb.js.map
