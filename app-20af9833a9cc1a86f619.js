webpackJsonp([0xd2a57dc1d883],{87:function(n,e,t){"use strict";function o(n,e,t){var o=a.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function r(n,e,t){return a.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=r;var a=[{plugin:t(366),options:{plugins:[]}},{plugin:t(367),options:{plugins:[],color:"#00695C"}},{plugin:t(372),options:{plugins:[]}}]},224:function(n,e,t){"use strict";var o;e.components={"component---src-components-modal-template-modal-template-js":t(335),"component---src-components-tag-template-tag-template-jsx":t(336),"component---src-pages-404-js":t(338),"component---src-pages-about-js":t(339),"component---src-pages-index-js":t(340),"component---src-pages-presentation-js":t(341)},e.json=(o={"layout-index.json":t(9),"cellcounter.json":t(345)},o["layout-index.json"]=t(9),o["iotelevator.json"]=t(348),o["layout-index.json"]=t(9),o["gameai.json"]=t(346),o["layout-index.json"]=t(9),o["iotproto.json"]=t(349),o["layout-index.json"]=t(9),o["motorlearning.json"]=t(350),o["layout-index.json"]=t(9),o["pommesindex.json"]=t(351),o["layout-index.json"]=t(9),o["sealioncounter.json"]=t(353),o["layout-index.json"]=t(9),o["webprojects.json"]=t(364),o["layout-index.json"]=t(9),o["tags-programming.json"]=t(361),o["layout-index.json"]=t(9),o["tags-deep-learning.json"]=t(356),o["layout-index.json"]=t(9),o["tags-machine-learning.json"]=t(360),o["layout-index.json"]=t(9),o["tags-front-end.json"]=t(358),o["layout-index.json"]=t(9),o["tags-embedded.json"]=t(357),o["layout-index.json"]=t(9),o["tags-iot.json"]=t(359),o["layout-index.json"]=t(9),o["tags-virtual-reality.json"]=t(363),o["layout-index.json"]=t(9),o["tags-scientific-programming.json"]=t(362),o["layout-index.json"]=t(9),o["tags-bachelor-thesis.json"]=t(354),o["layout-index.json"]=t(9),o["tags-back-end.json"]=t(355),o["layout-index.json"]=t(9),o["404.json"]=t(342),o["layout-index.json"]=t(9),o["about.json"]=t(344),o["layout-index.json"]=t(9),o["index.json"]=t(347),o["layout-index.json"]=t(9),o["presentation.json"]=t(352),o["layout-index.json"]=t(9),o["404-html.json"]=t(343),o),e.layouts={"layout---index":t(337)}},225:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},s=t(2),c=o(s),l=t(1),p=o(l),f=t(150),d=o(f),m=t(68),g=o(m),h=t(87),y=function(n){var e=n.children;return c.default.createElement("div",null,e())},v=function(n){function e(t){r(this,e);var o=a(this,n.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=d.default.getResourcesForPathname(n.location.pathname);if(t)this.setState({location:n.location,pageResources:t});else{var o=n.location;d.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(n){e.setState({location:o,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;g.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path))))},e.prototype.render=function(){var n=(0,h.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,s.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,s.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:y,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);v.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=v,n.exports=e.default},68:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(402),a=o(r),u=(0,a.default)();n.exports=u},226:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(86),a=t(151),u=o(a),i={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),a=(0,u.default)(o,e);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),i[a])return i[a];var s=void 0;return n.some(function(n){if(n.matchPath){if((0,r.matchPath)(a,{path:n.path})||(0,r.matchPath)(a,{path:n.matchPath}))return s=n,i[a]=n,!0}else{if((0,r.matchPath)(a,{path:n.path,exact:!0}))return s=n,i[a]=n,!0;if((0,r.matchPath)(a,{path:n.path+"index.html"}))return s=n,i[a]=n,!0}return!1}),s}}},227:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(109),a=o(r),u=t(87),i=(0,u.apiRunner)("replaceHistory"),s=i[0],c=s||(0,a.default)();n.exports=c},343:function(n,e,t){t(5),n.exports=function(n){return t.e(0xa2868bfb69fc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(377)})})}},342:function(n,e,t){t(5),n.exports=function(n){return t.e(0xe70826b53c04,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(378)})})}},344:function(n,e,t){t(5),n.exports=function(n){return t.e(0xf927f8900006,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(379)})})}},345:function(n,e,t){t(5),n.exports=function(n){return t.e(96034285751364,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(380)})})}},346:function(n,e,t){t(5),n.exports=function(n){return t.e(7110925536811,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(381)})})}},347:function(n,e,t){t(5),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(382)})})}},348:function(n,e,t){t(5),n.exports=function(n){return t.e(69104754171902,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(383)})})}},349:function(n,e,t){t(5),n.exports=function(n){return t.e(0xa60377c114be,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(384)})})}},9:function(n,e,t){t(5),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(111)})})}},350:function(n,e,t){t(5),n.exports=function(n){return t.e(0x9022a26d58f2,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(385)})})}},351:function(n,e,t){t(5),n.exports=function(n){return t.e(61221814493759,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(386)})})}},352:function(n,e,t){t(5),n.exports=function(n){return t.e(0xad81dc0fc45b,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(387)})})}},353:function(n,e,t){t(5),n.exports=function(n){return t.e(0x5e6c63e88f5c,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(388)})})}},354:function(n,e,t){t(5),n.exports=function(n){return t.e(20247533092038,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(389)})})}},355:function(n,e,t){t(5),n.exports=function(n){return t.e(29045442011858,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(390)})})}},356:function(n,e,t){t(5),n.exports=function(n){return t.e(0xeb3f9945b112,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(391)})})}},357:function(n,e,t){t(5),n.exports=function(n){return t.e(84536303195449,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(392)})})}},358:function(n,e,t){t(5),n.exports=function(n){return t.e(0xee8de0904fe5,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(393)})})}},359:function(n,e,t){t(5),n.exports=function(n){return t.e(0x764dbf58e1da,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(394)})})}},360:function(n,e,t){t(5),n.exports=function(n){return t.e(0xe140ce5a49d5,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(395)})})}},361:function(n,e,t){t(5),n.exports=function(n){return t.e(20956934260092,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(396)})})}},362:function(n,e,t){t(5),n.exports=function(n){return t.e(0xdeb65c51caaa,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(397)})})}},363:function(n,e,t){t(5),n.exports=function(n){return t.e(0x76fc7d80b96c,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(398)})})}},364:function(n,e,t){t(5),n.exports=function(n){return t.e(0x64107e835e8d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(399)})})}},337:function(n,e,t){t(5),n.exports=function(n){return t.e(0x67ef26645b2a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(228)})})}},150:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var r=t(2),a=(o(r),t(226)),u=o(a),i=t(68),s=o(i),c=t(151),l=o(c),p=void 0,f={},d={},m={},g={},h={},y=[],v=[],x={},j="",b=[],R={},C=function(n){return n&&n.default||n},w=void 0,N=!0,k=[],_={},P={},E=5;w=t(229)({getNextQueuedResources:function(){return b.slice(-1)[0]},createResourceDownload:function(n){O(n,function(){b=b.filter(function(e){return e!==n}),w.onResourcedFinished(n)})}}),s.default.on("onPreLoadPageResources",function(n){w.onPreLoadPageResources(n)}),s.default.on("onPostLoadPageResources",function(n){w.onPostLoadPageResources(n)});var S=function(n,e){return R[n]>R[e]?1:R[n]<R[e]?-1:0},T=function(n,e){return x[n]>x[e]?1:x[n]<x[e]?-1:0},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(g[e])n.nextTick(function(){t(null,g[e])});else{var o=void 0;o="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],o(function(n,o){g[e]=o,k.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),k=k.slice(-E),t(n,o)})}},L=function(e,t){h[e]?n.nextTick(function(){t(null,h[e])}):P[e]?n.nextTick(function(){t(P[e])}):O(e,function(n,o){if(n)t(n);else{var r=C(o());h[e]=r,t(n,r)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=k.find(function(n){return n.succeeded});return!!e},M=function(n,e){console.log(e),_[n]||(_[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},D=1,U={empty:function(){v=[],x={},R={},b=[],y=[],j=""},addPagesArray:function(n){y=n,j="/portfolio",p=(0,u.default)(n,j)},addDevRequires:function(n){f=n},addProdRequires:function(n){d=n},dequeue:function(){return v.pop()},enqueue:function(n){var e=(0,l.default)(n,j);if(!y.some(function(n){return n.path===e}))return!1;var t=1/D;D+=1,x[e]?x[e]+=1:x[e]=1,U.has(e)||v.unshift(e),v.sort(T);var o=p(e);return o.jsonName&&(R[o.jsonName]?R[o.jsonName]+=1+t:R[o.jsonName]=1+t,b.indexOf(o.jsonName)!==-1||g[o.jsonName]||b.unshift(o.jsonName)),o.componentChunkName&&(R[o.componentChunkName]?R[o.componentChunkName]+=1+t:R[o.componentChunkName]=1+t,b.indexOf(o.componentChunkName)!==-1||g[o.jsonName]||b.unshift(o.componentChunkName)),b.sort(S),w.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:b,resourcesCount:R}},getPages:function(){return{pathArray:v,pathCount:x}},getPage:function(n){return p(n)},has:function(n){return v.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};N&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var r;if(t){if(o>=e.length)break;r=e[o++]}else{if(o=e.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),N=!1;if(_[e])return M(e,'Previously detected load failure for "'+e+'"'),t();var o=p(e);if(!o)return M(e,"A page wasn't found for \""+e+'"'),t();if(e=o.path,m[e])return n.nextTick(function(){t(m[e]),s.default.emit("onPostLoadPageResources",{page:o,pageResources:m[e]})}),m[e];s.default.emit("onPreLoadPageResources",{path:e});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){m[e]={component:r,json:a,layout:u,page:o};var n={component:r,json:a,layout:u,page:o};t(n),s.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return L(o.componentChunkName,function(n,e){n&&M(o.path,"Loading the component for "+o.path+" failed"),r=e,i()}),L(o.jsonName,function(n,e){n&&M(o.path,"Loading the JSON for "+o.path+" failed"),a=e,i()}),void(o.layoutComponentChunkName&&L(o.layout,function(n,e){n&&M(o.path,"Loading the Layout for "+o.path+" failed"),u=e,i()}))},peek:function(n){return v.slice(-1)[0]},length:function(){return v.length},indexOf:function(n){return v.length-v.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:U.getResourcesForPathname};e.default=U}).call(e,t(54))},400:function(n,e){n.exports=[{componentChunkName:"component---src-components-modal-template-modal-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"cellcounter.json",path:"/cellcounter"},{componentChunkName:"component---src-components-modal-template-modal-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"iotelevator.json",path:"/iotelevator"},{componentChunkName:"component---src-components-modal-template-modal-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"gameai.json",path:"/gameai"},{componentChunkName:"component---src-components-modal-template-modal-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"iotproto.json",path:"/iotproto"},{componentChunkName:"component---src-components-modal-template-modal-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"motorlearning.json",path:"/motorlearning"},{componentChunkName:"component---src-components-modal-template-modal-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"pommesindex.json",path:"/pommesindex"},{componentChunkName:"component---src-components-modal-template-modal-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"sealioncounter.json",path:"/sealioncounter"},{componentChunkName:"component---src-components-modal-template-modal-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"webprojects.json",path:"/webprojects"},{componentChunkName:"component---src-components-tag-template-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-programming.json",path:"/tags/programming/"},{componentChunkName:"component---src-components-tag-template-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-deep-learning.json",path:"/tags/deep-learning/"},{componentChunkName:"component---src-components-tag-template-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-machine-learning.json",path:"/tags/machine-learning/"},{componentChunkName:"component---src-components-tag-template-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-front-end.json",path:"/tags/front-end/"},{componentChunkName:"component---src-components-tag-template-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-embedded.json",path:"/tags/embedded/"},{componentChunkName:"component---src-components-tag-template-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-iot.json",path:"/tags/iot/"},{componentChunkName:"component---src-components-tag-template-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-virtual-reality.json",path:"/tags/virtual-reality/"},{componentChunkName:"component---src-components-tag-template-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-scientific-programming.json",path:"/tags/scientific-programming/"},{componentChunkName:"component---src-components-tag-template-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-bachelor-thesis.json",path:"/tags/bachelor-thesis/"},{componentChunkName:"component---src-components-tag-template-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-back-end.json",path:"/tags/back-end/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-about-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-presentation-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"presentation.json",path:"/presentation/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},229:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],r=[],a=function(){var n=e();n&&(r.push(n),t(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},a=t(87),u=t(2),i=o(u),s=t(26),c=o(s),l=t(86),p=t(371),f=t(319),d=o(f),m=t(227),g=o(m),h=t(68),y=o(h),v=t(400),x=o(v),j=t(401),b=o(j),R=t(225),C=o(R),w=t(224),N=o(w),k=t(150),_=o(k);t(309),window.___history=g.default,window.___emitter=y.default,_.default.addPagesArray(x.default),_.default.addProdRequires(N.default),window.asyncRequires=N.default,window.___loader=_.default,window.matchPath=l.matchPath;var P=b.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),E=function(n){var e=P[n];return null!=e&&(g.default.replace(e.toPath),!0)};E(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&s!==!1||(window.___history=n,s=!0,n.listen(function(n,e){E(n.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:n,action:e})}))}function e(n,e){var t=e.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var r=n.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(230);var o=function(n){function e(t){t.page.path===_.default.getPage(n).path&&(y.default.off("onPostLoadPageResources",e),clearTimeout(o),window.___history.push(n))}var t=P[n];if(t&&(n=t.toPath),window.location.pathname!==n){var o=setTimeout(function(){y.default.off("onPostLoadPageResources",e),y.default.emit("onDelayedLoadPageResources",{pathname:n}),window.___history.push(n)},1e3);_.default.getResourcesForPathname(n)?(clearTimeout(o),window.___history.push(n)):y.default.on("onPostLoadPageResources",e)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var s=!1,f=(0,a.apiRunner)("replaceRouterComponent",{history:g.default})[0],m=function(n){var e=n.children;return i.default.createElement(l.Router,{history:g.default},e)},h=(0,l.withRouter)(C.default);_.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(f?f:m,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(h,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return _.default.getPage(o.location.pathname)?(0,u.createElement)(C.default,r({page:!0},o)):(0,u.createElement)(C.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,d.default)(function(){return c.default.render(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},401:function(n,e){n.exports=[]},230:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(68),a=o(r),u="/";u="/portfolio/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},151:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},319:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,n=function(){for(t.removeEventListener(r,n),a=1;n=e.shift();)n()}),function(n){a?setTimeout(n,0):e.push(n)}})},5:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var i=!1,s=!0,c=function(n){u&&(u(t,n),u=null)};return!a&&e&&e[o]?void c(!0):(r(o,function(){i||(i=!0,s?setTimeout(function(){c()}):c())}),void(i||(s=!1,n(function(){i||(i=!0,a?a[o]=void 0:(e||(e={}),e[o]=!0),c(!0))}))))}}o()},365:function(n,e){"use strict";n.exports=function(n,e){n.addEventListener("click",function(n){if(0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey||n.defaultPrevented)return!0;for(var t=null,o=n.target;o.parentNode;o=o.parentNode)if("A"===o.nodeName){t=o;break}if(!t)return!0;if(t.target&&"_self"!==t.target.toLowerCase())return!0;if(t.pathname===window.location.pathname&&""!==t.hash)return!0;if(""===t.pathname)return!0;if(t.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var r=document.createElement("a");r.href=t.href;var a=document.createElement("a");return a.href=window.location.href,r.host!==a.host||(n.preventDefault(),e(t.getAttribute("href")),!1)})}},366:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(53),a=t(365),u=o(a);(0,u.default)(window,function(n){(0,r.navigateTo)(n)})},367:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(153),a=o(r),u=t(403),i=o(u),s={color:"#29d"};e.onClientEntry=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=(0,a.default)({},s,e);window.___emitter.on("onDelayedLoadPageResources",function(){i.default.configure(t),i.default.start()}),window.___emitter.on("onPostLoadPageResources",function(){i.default.done()});var o="\n    #nprogress {\n     pointer-events: none;\n    }\n    #nprogress .bar {\n      background: "+t.color+";\n      position: fixed;\n      z-index: 1031;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 2px;\n    }\n    #nprogress .peg {\n      display: block;\n      position: absolute;\n      right: 0px;\n      width: 100px;\n      height: 100%;\n      box-shadow: 0 0 10px "+t.color+", 0 0 5px "+t.color+";\n      opacity: 1.0;\n      -webkit-transform: rotate(3deg) translate(0px, -4px);\n      -ms-transform: rotate(3deg) translate(0px, -4px);\n      transform: rotate(3deg) translate(0px, -4px);\n    }\n    #nprogress .spinner {\n      display: block;\n      position: fixed;\n      z-index: 1031;\n      top: 15px;\n      right: 15px;\n    }\n    #nprogress .spinner-icon {\n      width: 18px;\n      height: 18px;\n      box-sizing: border-box;\n      border: solid 2px transparent;\n      border-top-color: "+t.color+";\n      border-left-color: "+t.color+";\n      border-radius: 50%;\n      -webkit-animation: nprogress-spinner 400ms linear infinite;\n      animation: nprogress-spinner 400ms linear infinite;\n    }\n    .nprogress-custom-parent {\n      overflow: hidden;\n      position: relative;\n    }\n    .nprogress-custom-parent #nprogress .spinner,\n    .nprogress-custom-parent #nprogress .bar {\n      position: absolute;\n    }\n    @-webkit-keyframes nprogress-spinner {\n      0% {\n        -webkit-transform: rotate(0deg);\n      }\n      100% {\n        -webkit-transform: rotate(360deg);\n      }\n    }\n    @keyframes nprogress-spinner {\n      0% {\n        transform: rotate(0deg);\n      }\n      100% {\n        transform: rotate(360deg);\n      }\n    }\n",r=document.createElement("style");r.id="nprogress-styles",r.innerHTML=o,document.head.appendChild(r)}},372:function(n,e,t){"use strict";var o=function(n){setTimeout(function(){var e=window.location.hash.replace("#","");if(""!==e){var t=document.getElementById(e);if(t){var o=t.offsetTop;window.scrollTo(0,o-n)}}},10)};e.onClientEntry=function(n,e){var t=0;e.offsetY&&(t=e.offsetY)},e.onRouteUpdate=function(n,e){var t=0;e.offsetY&&(t=e.offsetY),o(t)}},402:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).map(function(n){n(t)}),(n["*"]||[]).map(function(n){n(e,t)})}}}n.exports=t},403:function(n,e,t){var o,r;!function(a,u){o=u,r="function"==typeof o?o.call(e,t,e,n):o,!(void 0!==r&&(n.exports=r))}(this,function(){function n(n,e,t){return n<e?e:n>t?t:n}function e(n){return 100*(-1+n)}function t(n,t,o){var r;return r="translate3d"===c.positionUsing?{transform:"translate3d("+e(n)+"%,0,0)"}:"translate"===c.positionUsing?{transform:"translate("+e(n)+"%,0)"}:{"margin-left":e(n)+"%"},r.transition="all "+t+"ms "+o,r}function o(n,e){var t="string"==typeof n?n:u(n);return t.indexOf(" "+e+" ")>=0}function r(n,e){var t=u(n),r=t+e;o(t,e)||(n.className=r.substring(1))}function a(n,e){var t,r=u(n);o(n,e)&&(t=r.replace(" "+e+" "," "),n.className=t.substring(1,t.length-1))}function u(n){return(" "+(n.className||"")+" ").replace(/\s+/gi," ")}function i(n){n&&n.parentNode&&n.parentNode.removeChild(n)}var s={};s.version="0.2.0";var c=s.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};s.configure=function(n){var e,t;for(e in n)t=n[e],void 0!==t&&n.hasOwnProperty(e)&&(c[e]=t);return this},s.status=null,s.set=function(e){var o=s.isStarted();e=n(e,c.minimum,1),s.status=1===e?null:e;var r=s.render(!o),a=r.querySelector(c.barSelector),u=c.speed,i=c.easing;return r.offsetWidth,l(function(n){""===c.positionUsing&&(c.positionUsing=s.getPositioningCSS()),p(a,t(e,u,i)),1===e?(p(r,{transition:"none",opacity:1}),r.offsetWidth,setTimeout(function(){p(r,{transition:"all "+u+"ms linear",opacity:0}),setTimeout(function(){s.remove(),n()},u)},u)):setTimeout(n,u)}),this},s.isStarted=function(){return"number"==typeof s.status},s.start=function(){s.status||s.set(0);var n=function(){setTimeout(function(){s.status&&(s.trickle(),n())},c.trickleSpeed)};return c.trickle&&n(),this},s.done=function(n){return n||s.status?s.inc(.3+.5*Math.random()).set(1):this},s.inc=function(e){var t=s.status;return t?("number"!=typeof e&&(e=(1-t)*n(Math.random()*t,.1,.95)),t=n(t+e,0,.994),s.set(t)):s.start()},s.trickle=function(){return s.inc(Math.random()*c.trickleRate)},function(){var n=0,e=0;s.promise=function(t){return t&&"resolved"!==t.state()?(0===e&&s.start(),n++,e++,t.always(function(){e--,0===e?(n=0,s.done()):s.set((n-e)/n)}),this):this}}(),s.render=function(n){if(s.isRendered())return document.getElementById("nprogress");r(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=c.template;var o,a=t.querySelector(c.barSelector),u=n?"-100":e(s.status||0),l=document.querySelector(c.parent);return p(a,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"
}),c.showSpinner||(o=t.querySelector(c.spinnerSelector),o&&i(o)),l!=document.body&&r(l,"nprogress-custom-parent"),l.appendChild(t),t},s.remove=function(){a(document.documentElement,"nprogress-busy"),a(document.querySelector(c.parent),"nprogress-custom-parent");var n=document.getElementById("nprogress");n&&i(n)},s.isRendered=function(){return!!document.getElementById("nprogress")},s.getPositioningCSS=function(){var n=document.body.style,e="WebkitTransform"in n?"Webkit":"MozTransform"in n?"Moz":"msTransform"in n?"ms":"OTransform"in n?"O":"";return e+"Perspective"in n?"translate3d":e+"Transform"in n?"translate":"margin"};var l=function(){function n(){var t=e.shift();t&&t(n)}var e=[];return function(t){e.push(t),1==e.length&&n()}}(),p=function(){function n(n){return n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(n,e){return e.toUpperCase()})}function e(n){var e=document.body.style;if(n in e)return n;for(var t,o=r.length,a=n.charAt(0).toUpperCase()+n.slice(1);o--;)if(t=r[o]+a,t in e)return t;return n}function t(t){return t=n(t),a[t]||(a[t]=e(t))}function o(n,e,o){e=t(e),n.style[e]=o}var r=["Webkit","O","Moz","ms"],a={};return function(n,e){var t,r,a=arguments;if(2==a.length)for(t in e)r=e[t],void 0!==r&&e.hasOwnProperty(t)&&o(n,t,r);else o(n,a[1],a[2])}}();return s})},54:function(n,e){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(n){if(l===setTimeout)return setTimeout(n,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function a(n){if(p===clearTimeout)return clearTimeout(n);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(e){try{return p.call(null,n)}catch(e){return p.call(this,n)}}}function u(){g&&d&&(g=!1,d.length?m=d.concat(m):h=-1,m.length&&i())}function i(){if(!g){var n=r(u);g=!0;for(var e=m.length;e;){for(d=m,m=[];++h<e;)d&&d[h].run();h=-1,e=m.length}d=null,g=!1,a(n)}}function s(n,e){this.fun=n,this.array=e}function c(){}var l,p,f=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(n){l=t}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(n){p=o}}();var d,m=[],g=!1,h=-1;f.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];m.push(new s(n,e)),1!==m.length||g||r(i)},s.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(n){return[]},f.binding=function(n){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(n){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},335:function(n,e,t){t(5),n.exports=function(n){return t.e(0xb71f04f70e2a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(233)})})}},336:function(n,e,t){t(5),n.exports=function(n){return t.e(0xb0e189f21a83,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(235)})})}},338:function(n,e,t){t(5),n.exports=function(n){return t.e(0x9427c64ab85d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(238)})})}},339:function(n,e,t){t(5),n.exports=function(n){return t.e(0xefeaa6d1881d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(239)})})}},340:function(n,e,t){t(5),n.exports=function(n){return t.e(35783957827783,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(240)})})}},341:function(n,e,t){t(5),n.exports=function(n){return t.e(0x927d8b14dc75,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(241)})})}}});
//# sourceMappingURL=app-20af9833a9cc1a86f619.js.map