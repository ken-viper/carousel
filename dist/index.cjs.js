"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=require("react"),e=require("react-use-gesture"),t=require("styled-components");function r(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var o=r(n),i=r(t),u=function(){return u=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},u.apply(this,arguments)};function a(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}"function"==typeof SuppressedError&&SuppressedError;var l,c,f,s,d,p,v=i.default.div(l||(l=a(["\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n"],["\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n"]))),m=i.default.div(c||(c=a(["\n  display: flex;\n  transition: 0.3s;\n"],["\n  display: flex;\n  transition: 0.3s;\n"]))),h=i.default.div(f||(f=a(["\n  flex: 0 0 auto;\n  width: 100%;\n"],["\n  flex: 0 0 auto;\n  width: 100%;\n"]))),y=i.default.button(s||(s=a(["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  font-size: 24px;\n  border: none;\n  cursor: pointer;\n  z-index: 1;\n"],["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  font-size: 24px;\n  border: none;\n  cursor: pointer;\n  z-index: 1;\n"]))),x=i.default(y)(d||(d=a(["\n  left: 10px;\n"],["\n  left: 10px;\n"]))),b=i.default(y)(p||(p=a(["\n  right: 10px;\n"],["\n  right: 10px;\n"])));exports.Carousel=function(t){var r=t.isInfinite,i=t.children,a=n.useState(r?i.length:0),l=a[0],c=a[1],f=n.useState(!1),s=f[0],d=f[1],p=n.useState(!1),y=p[0],E=p[1],g=n.useRef(null),w=n.useState(0),k=w[0],j=w[1],M=i.length,O=300,S=Math.floor(M/2);n.useEffect((function(){var n;j((null===(n=g.current)||void 0===n?void 0:n.offsetWidth)||0)}),[]),n.useEffect((function(){if(s){if(0===l){var n=setTimeout((function(){d(!1),c(M)}),O);return function(){return clearTimeout(n)}}if(l===2*M){var e=setTimeout((function(){d(!1),c(M)}),O);return function(){return clearTimeout(e)}}}else c(r?l%M+M:l%M)}),[l,s,M,O]);var P=e.useDrag((function(n){var e=n.down,t=n.movement[0],o=n.velocity,i=n.direction[0];if(e){var u=-l*k+t;g.current&&(g.current.style.transition="none",g.current.style.transform="translateX(".concat(u,"px)"))}else{var a=Math.min(S,Math.round(Math.abs(t/k)*o)),f=l-Math.round(t/k)-a*(i>0?1:-1);r||(f<0?f=0:f>=M&&(f=M-1)),c(f),d(!0)}E(e)})),T=-l*k;return n.useEffect((function(){!y&&g.current&&(g.current.style.transition=s?"".concat(O,"ms"):"none",g.current.style.transform="translateX(".concat(T,"px)"))}),[y,T,s,O]),o.default.createElement(v,null,o.default.createElement(x,{onClick:function(){s||(r||l>0)&&(d(!0),c((function(n){return n-1})))}},"Prev"),o.default.createElement(m,u({ref:g,onTransitionEnd:function(){d(!1),(0===l||l===2*M)&&c(M)}},P()),r&&i.map((function(n,e){return o.default.createElement(h,{key:"clone-prev-".concat(e),style:{minWidth:"100%"}},n)})),i.map((function(n,e){return o.default.createElement(h,{key:e,style:{minWidth:"100%"}},n)})),r&&i.map((function(n,e){return o.default.createElement(h,{key:"clone-next-".concat(e),style:{minWidth:"100%"}},n)}))),o.default.createElement(b,{onClick:function(){(r||l<M-1)&&(d(!0),c((function(n){return n+1})))}},"Next"))};
//# sourceMappingURL=index.cjs.js.map