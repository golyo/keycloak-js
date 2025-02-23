(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define('keycloak-authorization', factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.KeycloakAuthorization = factory());
})(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function commonjsRequire(path) {
		throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
	}

	var es6Promise_min = {exports: {}};

	(function (module, exports) {
		!function(t,e){module.exports=e();}(commonjsGlobal,function(){function t(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}function e(t){return "function"==typeof t}function n(t){W=t;}function r(t){z=t;}function o(){return function(){return process.nextTick(a)}}function i(){return "undefined"!=typeof U?function(){U(a);}:c()}function s(){var t=0,e=new H(a),n=document.createTextNode("");return e.observe(n,{characterData:true}),function(){n.data=t=++t%2;}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){return t.port2.postMessage(0)}}function c(){var t=setTimeout;return function(){return t(a,1)}}function a(){for(var t=0;t<N;t+=2){var e=Q[t],n=Q[t+1];e(n),Q[t]=void 0,Q[t+1]=void 0;}N=0;}function f(){try{var t=Function("return this")().require("vertx");return U=t.runOnLoop||t.runOnContext,i()}catch(e){return c()}}function l(t,e){var n=this,r=new this.constructor(v);void 0===r[V]&&x(r);var o=n._state;if(o){var i=arguments[o-1];z(function(){return T(o,r,i,n._result)});}else j(n,r,t,e);return r}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(v);return w(n,t),n}function v(){}function p(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function _(t,e,n,r){try{t.call(e,n,r);}catch(o){return o}}function y(t,e,n){z(function(t){var r=false,o=_(n,e,function(n){r||(r=true,e!==n?w(t,n):A(t,n));},function(e){r||(r=true,S(t,e));},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=true,S(t,o));},t);}function m(t,e){e._state===Z?A(t,e._result):e._state===$?S(t,e._result):j(e,void 0,function(e){return w(t,e)},function(e){return S(t,e)});}function b(t,n,r){n.constructor===t.constructor&&r===l&&n.constructor.resolve===h?m(t,n):void 0===r?A(t,n):e(r)?y(t,n,r):A(t,n);}function w(e,n){if(e===n)S(e,p());else if(t(n)){var r=void 0;try{r=n.then;}catch(o){return void S(e,o)}b(e,n,r);}else A(e,n);}function g(t){t._onerror&&t._onerror(t._result),E(t);}function A(t,e){t._state===X&&(t._result=e,t._state=Z,0!==t._subscribers.length&&z(E,t));}function S(t,e){t._state===X&&(t._state=$,t._result=e,z(g,t));}function j(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+Z]=n,o[i+$]=r,0===i&&t._state&&z(E,t);}function E(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?T(n,r,o,i):o(i);t._subscribers.length=0;}}function T(t,n,r,o){var i=e(r),s=void 0,u=void 0,c=true;if(i){try{s=r(o);}catch(a){c=false,u=a;}if(n===s)return void S(n,d())}else s=o;n._state!==X||(i&&c?w(n,s):c===false?S(n,u):t===Z?A(n,s):t===$&&S(n,s));}function M(t,e){try{e(function(e){w(t,e);},function(e){S(t,e);});}catch(n){S(t,n);}}function P(){return tt++}function x(t){t[V]=tt++,t._state=void 0,t._result=void 0,t._subscribers=[];}function C(){return new Error("Array Methods must be provided an Array")}function O(t){return new et(this,t).promise}function k(t){var e=this;return new e(L(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r);}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function F(t){var e=this,n=new e(v);return S(n,t),n}function Y(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function q(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function D(){var t=void 0;if("undefined"!=typeof commonjsGlobal)t=commonjsGlobal;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")();}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var r=null;try{r=Object.prototype.toString.call(n.resolve());}catch(e){}if("[object Promise]"===r&&!n.cast)return}t.Promise=nt;}var K=void 0;K=Array.isArray?Array.isArray:function(t){return "[object Array]"===Object.prototype.toString.call(t)};var L=K,N=0,U=void 0,W=void 0,z=function(t,e){Q[N]=t,Q[N+1]=e,N+=2,2===N&&(W?W(a):R());},B="undefined"!=typeof window?window:void 0,G=B||{},H=G.MutationObserver||G.WebKitMutationObserver,I="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),J="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,Q=new Array(1e3),R=void 0;R=I?o():H?s():J?u():void 0===B&&"function"==typeof commonjsRequire?f():c();var V=Math.random().toString(36).substring(2),X=void 0,Z=1,$=2,tt=0,et=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(v),this.promise[V]||x(this.promise),L(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?A(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&A(this.promise,this._result))):S(this.promise,C());}return t.prototype._enumerate=function(t){for(var e=0;this._state===X&&e<t.length;e++)this._eachEntry(t[e],e);},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===h){var o=void 0,i=void 0,s=false;try{o=t.then;}catch(u){s=true,i=u;}if(o===l&&t._state!==X)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===nt){var c=new n(v);s?S(c,i):b(c,t,o),this._willSettleAt(c,e);}else this._willSettleAt(new n(function(e){return e(t)}),e);}else this._willSettleAt(r(t),e);},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===X&&(this._remaining--,t===$?S(r,n):this._result[e]=n),0===this._remaining&&A(r,this._result);},t.prototype._willSettleAt=function(t,e){var n=this;j(t,void 0,function(t){return n._settledAt(Z,e,t)},function(t){return n._settledAt($,e,t)});},t}(),nt=function(){function t(e){this[V]=P(),this._result=this._state=void 0,this._subscribers=[],v!==e&&("function"!=typeof e&&Y(),this instanceof t?M(this,e):q());}return t.prototype["catch"]=function(t){return this.then(null,t)},t.prototype["finally"]=function(t){var n=this,r=n.constructor;return e(t)?n.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})}):n.then(t,t)},t}();return nt.prototype.then=l,nt.all=O,nt.race=k,nt.resolve=h,nt.reject=F,nt._setScheduler=n,nt._setAsap=r,nt._asap=z,nt.polyfill=D,nt.Promise=nt,nt}); 
	} (es6Promise_min));

	var es6Promise_minExports = es6Promise_min.exports;

	/*
	 *  Copyright 2016 Red Hat, Inc. and/or its affiliates
	 *  and other contributors as indicated by the @author tags.
	 *
	 *  Licensed under the Apache License, Version 2.0 (the "License");
	 *  you may not use this file except in compliance with the License.
	 *  You may obtain a copy of the License at
	 *
	 *  http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *  Unless required by applicable law or agreed to in writing, software
	 *  distributed under the License is distributed on an "AS IS" BASIS,
	 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 *  See the License for the specific language governing permissions and
	 *  limitations under the License.
	 *
	 */

	var KeycloakAuthorization = function (keycloak, options) {
	    var _instance = this;
	    this.rpt = null;

	    var resolve = function () {};
	    var reject = function () {};

	    // detects if browser supports promises
	    if (typeof es6Promise_minExports.Promise !== "undefined" && es6Promise_minExports.Promise.toString().indexOf("[native code]") !== -1) {
	        this.ready = new es6Promise_minExports.Promise(function (res, rej) {
	            resolve = res;
	            reject = rej;
	        });
	    }

	    this.init = function () {
	        var request = new XMLHttpRequest();

	        request.open('GET', keycloak.authServerUrl + '/realms/' + keycloak.realm + '/.well-known/uma2-configuration');
	        request.onreadystatechange = function () {
	            if (request.readyState == 4) {
	                if (request.status == 200) {
	                    _instance.config = JSON.parse(request.responseText);
	                    resolve();
	                } else {
	                    console.error('Could not obtain configuration from server.');
	                    reject();
	                }
	            }
	        };

	        request.send(null);
	    };

	    /**
	     * This method enables client applications to better integrate with resource servers protected by a Keycloak
	     * policy enforcer using UMA protocol.
	     *
	     * The authorization request must be provided with a ticket.
	     */
	    this.authorize = function (authorizationRequest) {
	        this.then = function (onGrant, onDeny, onError) {
	            if (authorizationRequest && authorizationRequest.ticket) {
	                var request = new XMLHttpRequest();

	                request.open('POST', _instance.config.token_endpoint, true);
	                request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	                request.setRequestHeader('Authorization', 'Bearer ' + keycloak.token);

	                request.onreadystatechange = function () {
	                    if (request.readyState == 4) {
	                        var status = request.status;

	                        if (status >= 200 && status < 300) {
	                            var rpt = JSON.parse(request.responseText).access_token;
	                            _instance.rpt = rpt;
	                            onGrant(rpt);
	                        } else if (status == 403) {
	                            if (onDeny) {
	                                onDeny();
	                            } else {
	                                console.error('Authorization request was denied by the server.');
	                            }
	                        } else {
	                            if (onError) {
	                                onError();
	                            } else {
	                                console.error('Could not obtain authorization data from server.');
	                            }
	                        }
	                    }
	                };

	                var params = "grant_type=urn:ietf:params:oauth:grant-type:uma-ticket&client_id=" + keycloak.clientId + "&ticket=" + authorizationRequest.ticket;

	                if (authorizationRequest.submitRequest != undefined) {
	                    params += "&submit_request=" + authorizationRequest.submitRequest;
	                }

	                var metadata = authorizationRequest.metadata;

	                if (metadata) {
	                    if (metadata.responseIncludeResourceName) {
	                        params += "&response_include_resource_name=" + metadata.responseIncludeResourceName;
	                    }
	                    if (metadata.responsePermissionsLimit) {
	                        params += "&response_permissions_limit=" + metadata.responsePermissionsLimit;
	                    }
	                }

	                if (_instance.rpt && (authorizationRequest.incrementalAuthorization == undefined || authorizationRequest.incrementalAuthorization)) {
	                    params += "&rpt=" + _instance.rpt;
	                }

	                request.send(params);
	            }
	        };

	        return this;
	    };

	    /**
	     * Obtains all entitlements from a Keycloak Server based on a given resourceServerId.
	     */
	    this.entitlement = function (resourceServerId, authorizationRequest) {
	        this.then = function (onGrant, onDeny, onError) {
	            var request = new XMLHttpRequest();

	            request.open('POST', _instance.config.token_endpoint, true);
	            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	            request.setRequestHeader('Authorization', 'Bearer ' + keycloak.token);

	            request.onreadystatechange = function () {
	                if (request.readyState == 4) {
	                    var status = request.status;

	                    if (status >= 200 && status < 300) {
	                        var rpt = JSON.parse(request.responseText).access_token;
	                        _instance.rpt = rpt;
	                        onGrant(rpt);
	                    } else if (status == 403) {
	                        if (onDeny) {
	                            onDeny();
	                        } else {
	                            console.error('Authorization request was denied by the server.');
	                        }
	                    } else {
	                        if (onError) {
	                            onError();
	                        } else {
	                            console.error('Could not obtain authorization data from server.');
	                        }
	                    }
	                }
	            };

	            if (!authorizationRequest) {
	                authorizationRequest = {};
	            }

	            var params = "grant_type=urn:ietf:params:oauth:grant-type:uma-ticket&client_id=" + keycloak.clientId;

	            if (authorizationRequest.claimToken) {
	                params += "&claim_token=" + authorizationRequest.claimToken;

	                if (authorizationRequest.claimTokenFormat) {
	                    params += "&claim_token_format=" + authorizationRequest.claimTokenFormat;
	                }
	            }

	            params += "&audience=" + resourceServerId;

	            var permissions = authorizationRequest.permissions;

	            if (!permissions) {
	                permissions = [];
	            }

	            for (var i = 0; i < permissions.length; i++) {
	                var resource = permissions[i];
	                var permission = resource.id;

	                if (resource.scopes && resource.scopes.length > 0) {
	                    permission += "#";
	                    for (var j = 0; j < resource.scopes.length; j++) {
	                        var scope = resource.scopes[j];
	                        if (permission.indexOf('#') != permission.length - 1) {
	                            permission += ",";
	                        }
	                        permission += scope;
	                    }
	                }

	                params += "&permission=" + permission;
	            }

	            var metadata = authorizationRequest.metadata;

	            if (metadata) {
	                if (metadata.responseIncludeResourceName) {
	                    params += "&response_include_resource_name=" + metadata.responseIncludeResourceName;
	                }
	                if (metadata.responsePermissionsLimit) {
	                    params += "&response_permissions_limit=" + metadata.responsePermissionsLimit;
	                }
	            }

	            if (_instance.rpt) {
	                params += "&rpt=" + _instance.rpt;
	            }

	            request.send(params);
	        };

	        return this;
	    };

	    this.init(this);

	    return this;
	};

	return KeycloakAuthorization;

}));
