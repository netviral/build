(self.webpackChunkstartup_backend=self.webpackChunkstartup_backend||[]).push([[2282],{68115:(D,Z,g)=>{"use strict";D.exports=g(7446)},7446:function(D,Z,g){(function(v,z){D.exports=z(g(67294),g(78384),g(66526))})(this,function(v,z,u){return function(s){var o={};function t(r){if(o[r])return o[r].exports;var i=o[r]={i:r,l:!1,exports:{}};return s[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=s,t.c=o,t.d=function(r,i,l){t.o(r,i)||Object.defineProperty(r,i,{enumerable:!0,get:l})},t.r=function(r){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,i){if(1&i&&(r=t(r)),8&i||4&i&&typeof r=="object"&&r&&r.__esModule)return r;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:r}),2&i&&typeof r!="string")for(var d in r)t.d(l,d,function(c){return r[c]}.bind(null,d));return l},t.n=function(r){var i=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(i,"a",i),i},t.o=function(r,i){return Object.prototype.hasOwnProperty.call(r,i)},t.p="",t(t.s=116)}({0:function(s,o,t){s.exports=t(21)()},1:function(s,o){s.exports=v},10:function(s,o,t){"use strict";t.r(o),t.d(o,"Flex",function(){return e});var r,i=t(3),l=t.n(i),d=t(2),c=t.n(d),f=t(6),m=t(7),S=t(1),h=t.n(S),p=t(0),T=t.n(p),M=function(a){return h.a.createElement("div",a)},P={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},E={alignItems:T.a.string,basis:T.a.oneOfType([T.a.string,T.a.number]),direction:T.a.string,gap:T.a.oneOfType([T.a.shape({desktop:T.a.number,mobile:T.a.number,tablet:T.a.number}),T.a.number,T.a.arrayOf(T.a.number),T.a.string]),inline:T.a.bool,justifyContent:T.a.string,reverse:T.a.bool,shrink:T.a.number,wrap:T.a.string};M.defaultProps=P,M.propTypes=E;var n={direction:!0},e=c()(f.Box).withConfig({shouldForwardProp:function(a,x){return!n[a]&&x(a)}})(r||(r=l()([`
  align-items: `,`;
  display: `,`;
  flex-direction: `,`;
  flex-shrink: `,`;
  flex-wrap: `,`;
  `,`};
  justify-content: `,`;
`])),function(a){return a.alignItems},function(a){return a.inline?"inline-flex":"flex"},function(a){return a.direction},function(a){return a.shrink},function(a){return a.wrap},function(a){var x=a.gap,C=a.theme;return Object(m.a)("gap",x,C)},function(a){return a.justifyContent});e.defaultProps=P,e.propTypes=E},11:function(s,o,t){var r=t(27),i=t(28),l=t(24),d=t(29);s.exports=function(c,f){return r(c)||i(c,f)||l(c,f)||d()},s.exports.default=s.exports,s.exports.__esModule=!0},116:function(s,o,t){"use strict";t.r(o),t.d(o,"Crumb",function(){return L}),t.d(o,"Breadcrumbs",function(){return _});var r,i=t(4),l=t.n(i),d=t(3),c=t.n(d),f=t(1),m=t.n(f),S=t(0),h=t.n(S),p=t(2),T=t.n(p),M=t(50),P=t.n(M),E=t(9),n=t(6),e=t(10),a=t(20),x=["children","label"],C=T()(e.Flex)(r||(r=c()([`
  svg {
    height: `,`rem;
    width: `,`rem;
    path {
      fill: `,`;
    }
  }
  :last-of-type `,` {
    display: none;
  }
  :last-of-type `,` {
    color: `,`;
    font-weight: `,`;
  }
`])),.625,.625,function(U){return U.theme.colors.neutral500},n.Box,E.Typography,function(U){return U.theme.colors.neutral800},function(U){return U.theme.fontWeights.bold}),L=function(U){var V=U.children;return m.a.createElement(C,{inline:!0,as:"li"},m.a.createElement(E.Typography,{variant:"pi",textColor:"neutral600"},V),m.a.createElement(n.Box,{"aria-hidden":!0,paddingLeft:3,paddingRight:3},m.a.createElement(P.a,null)))};L.displayName="Crumb",L.propTypes={children:h.a.node.isRequired};var H=h.a.shape({type:h.a.oneOf([L])}),_=function(U){var V=U.children,J=U.label,ee=l()(U,x);return m.a.createElement(e.Flex,ee,m.a.createElement(a.VisuallyHidden,null,J),m.a.createElement("ol",{"aria-hidden":!0},V))};_.displayName="Breadcrumbs",_.propTypes={children:h.a.oneOfType([h.a.arrayOf(H),H]).isRequired,label:h.a.string.isRequired}},13:function(s,o,t){"use strict";t.d(o,"a",function(){return i}),t.d(o,"c",function(){return l}),t.d(o,"b",function(){return d});var r=t(8),i=function(c){return c.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},l=function(c){var f=c.variant,m=c.theme;switch(f){case r.a:return`
        font-weight: `.concat(m.fontWeights.bold,`;
        font-size: `).concat(m.fontSizes[5],`;
        line-height: `).concat(m.lineHeights[2],`;
      `);case r.b:return`
        font-weight: `.concat(m.fontWeights.bold,`;
        font-size: `).concat(m.fontSizes[4],`;
        line-height: `).concat(m.lineHeights[1],`;
      `);case r.c:return`
        font-weight: `.concat(m.fontWeights.semiBold,`;
        font-size: `).concat(m.fontSizes[3],`;
        line-height: `).concat(m.lineHeights[2],`;
      `);case r.d:return`
        font-size: `.concat(m.fontSizes[3],`;
        line-height: `).concat(m.lineHeights[6],`;
      `);case r.e:return`
        font-size: `.concat(m.fontSizes[2],`;
        line-height: `).concat(m.lineHeights[4],`;
      `);case r.f:return`
        font-size: `.concat(m.fontSizes[1],`;
        line-height: `).concat(m.lineHeights[3],`;
      `);case r.g:return`
        font-weight: `.concat(m.fontWeights.bold,`;
        font-size: `).concat(m.fontSizes[0],`;
        line-height: `).concat(m.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(m.fontSizes[2],`;
      `)}},d=function(c){var f=c.theme,m=c.textColor;return f.colors[m||"neutral800"]}},15:function(s,o){function t(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(s.exports=t=function(i){return typeof i},s.exports.default=s.exports,s.exports.__esModule=!0):(s.exports=t=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},s.exports.default=s.exports,s.exports.__esModule=!0),t(r)}s.exports=t,s.exports.default=s.exports,s.exports.__esModule=!0},2:function(s,o){s.exports=z},20:function(s,o,t){"use strict";t.r(o),t.d(o,"VisuallyHidden",function(){return c});var r,i=t(3),l=t.n(i),d=t(2),c=t.n(d).a.div(r||(r=l()([`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`])))},21:function(s,o,t){"use strict";var r=t(22);function i(){}function l(){}l.resetWarningCache=i,s.exports=function(){function d(m,S,h,p,T,M){if(M!==r){var P=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw P.name="Invariant Violation",P}}function c(){return d}d.isRequired=d;var f={array:d,bool:d,func:d,number:d,object:d,string:d,symbol:d,any:d,arrayOf:c,element:d,elementType:d,instanceOf:c,node:d,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:l,resetWarningCache:i};return f.PropTypes=f,f}},22:function(s,o,t){"use strict";s.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},23:function(s,o){s.exports=function(t,r){(r==null||r>t.length)&&(r=t.length);for(var i=0,l=new Array(r);i<r;i++)l[i]=t[i];return l},s.exports.default=s.exports,s.exports.__esModule=!0},24:function(s,o,t){var r=t(23);s.exports=function(i,l){if(i){if(typeof i=="string")return r(i,l);var d=Object.prototype.toString.call(i).slice(8,-1);return d==="Object"&&i.constructor&&(d=i.constructor.name),d==="Map"||d==="Set"?Array.from(i):d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?r(i,l):void 0}},s.exports.default=s.exports,s.exports.__esModule=!0},26:function(s,o){s.exports=function(t,r){if(t==null)return{};var i,l,d={},c=Object.keys(t);for(l=0;l<c.length;l++)i=c[l],r.indexOf(i)>=0||(d[i]=t[i]);return d},s.exports.default=s.exports,s.exports.__esModule=!0},27:function(s,o){s.exports=function(t){if(Array.isArray(t))return t},s.exports.default=s.exports,s.exports.__esModule=!0},28:function(s,o){s.exports=function(t,r){var i=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var l,d,c=[],f=!0,m=!1;try{for(i=i.call(t);!(f=(l=i.next()).done)&&(c.push(l.value),!r||c.length!==r);f=!0);}catch(S){m=!0,d=S}finally{try{f||i.return==null||i.return()}finally{if(m)throw d}}return c}},s.exports.default=s.exports,s.exports.__esModule=!0},29:function(s,o){s.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},s.exports.default=s.exports,s.exports.__esModule=!0},3:function(s,o){s.exports=function(t,r){return r||(r=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(r)}}))},s.exports.default=s.exports,s.exports.__esModule=!0},4:function(s,o,t){var r=t(26);s.exports=function(i,l){if(i==null)return{};var d,c,f=r(i,l);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(i);for(c=0;c<m.length;c++)d=m[c],l.indexOf(d)>=0||Object.prototype.propertyIsEnumerable.call(i,d)&&(f[d]=i[d])}return f},s.exports.default=s.exports,s.exports.__esModule=!0},50:function(s,o){s.exports=u},6:function(s,o,t){"use strict";t.r(o),t.d(o,"Box",function(){return n});var r,i=t(3),l=t.n(i),d=t(2),c=t.n(d),f=t(7),m=t(1),S=t.n(m),h=t(0),p=t.n(h),T=function(e){return S.a.createElement("div",e)},M={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},P={_hover:p.a.func,background:p.a.string,basis:p.a.oneOfType([p.a.string,p.a.string]),borderColor:p.a.string,children:p.a.oneOfType([p.a.node,p.a.string]),color:p.a.string,flex:p.a.oneOfType([p.a.string,p.a.string]),grow:p.a.oneOfType([p.a.string,p.a.string]),hasRadius:p.a.bool,hiddenS:p.a.bool,hiddenXS:p.a.bool,padding:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingBottom:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingLeft:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingRight:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingTop:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),shadow:p.a.string,shrink:p.a.oneOfType([p.a.string,p.a.string])};T.defaultProps=M,T.propTypes=P;var E={color:!0},n=c.a.div.withConfig({shouldForwardProp:function(e,a){return!E[e]&&a(e)}})(r||(r=l()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(e){var a=e.fontSize;return e.theme.fontSizes[a]||a},function(e){var a=e.theme,x=e.background;return a.colors[x]},function(e){var a=e.theme,x=e.color;return a.colors[x]},function(e){var a=e.theme,x=e.padding;return Object(f.a)("padding",x,a)},function(e){var a=e.theme,x=e.paddingTop;return Object(f.a)("padding-top",x,a)},function(e){var a=e.theme,x=e.paddingRight;return Object(f.a)("padding-right",x,a)},function(e){var a=e.theme,x=e.paddingBottom;return Object(f.a)("padding-bottom",x,a)},function(e){var a=e.theme,x=e.paddingLeft;return Object(f.a)("padding-left",x,a)},function(e){var a=e.theme,x=e.marginLeft;return Object(f.a)("margin-left",x,a)},function(e){var a=e.theme,x=e.marginRight;return Object(f.a)("margin-right",x,a)},function(e){var a=e.theme,x=e.marginTop;return Object(f.a)("margin-top",x,a)},function(e){var a=e.theme,x=e.marginBottom;return Object(f.a)("margin-bottom",x,a)},function(e){var a=e.theme;return e.hiddenS?"".concat(a.mediaQueries.tablet," { display: none; }"):void 0},function(e){var a=e.theme;return e.hiddenXS?"".concat(a.mediaQueries.mobile," { display: none; }"):void 0},function(e){var a=e.theme,x=e.hasRadius,C=e.borderRadius;return x?a.borderRadius:C},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var a=e.borderColor;return e.theme.colors[a]},function(e){var a=e.theme,x=e.borderColor,C=e.borderStyle,L=e.borderWidth;if(x&&!C&&!L)return"1px solid ".concat(a.colors[x])},function(e){var a=e.theme,x=e.shadow;return a.shadows[x]},function(e){return e.pointerEvents},function(e){var a=e._hover,x=e.theme;return a?a(x):void 0},function(e){return e.display},function(e){return e.position},function(e){var a=e.left;return e.theme.spaces[a]||a},function(e){var a=e.right;return e.theme.spaces[a]||a},function(e){var a=e.top;return e.theme.spaces[a]||a},function(e){var a=e.bottom;return e.theme.spaces[a]||a},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var a=e.width;return e.theme.spaces[a]||a},function(e){var a=e.maxWidth;return e.theme.spaces[a]||a},function(e){var a=e.minWidth;return e.theme.spaces[a]||a},function(e){var a=e.height;return e.theme.spaces[a]||a},function(e){var a=e.maxHeight;return e.theme.spaces[a]||a},function(e){var a=e.minHeight;return e.theme.spaces[a]||a},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});n.defaultProps=M,n.propTypes=P},7:function(s,o,t){"use strict";var r=t(11),i=t.n(r),l=t(15),d=t.n(l);o.a=function(c,f,m){var S=f;if(Array.isArray(f)||d()(f)!=="object"||(S=[f==null?void 0:f.desktop,f==null?void 0:f.tablet,f==null?void 0:f.mobile]),S!==void 0){if(Array.isArray(S)){var h=S,p=i()(h,3),T=p[0],M=p[1],P=p[2],E="".concat(c,": ").concat(m.spaces[T],";");return M!==void 0&&(E+="".concat(m.mediaQueries.tablet,`{
          `).concat(c,": ").concat(m.spaces[M],`;
        }`)),P!==void 0&&(E+="".concat(m.mediaQueries.mobile,`{
          `).concat(c,": ").concat(m.spaces[P],`;
        }`)),E}var n=m.spaces[S]||S;return"".concat(c,": ").concat(n,";")}}},8:function(s,o,t){"use strict";t.d(o,"a",function(){return r}),t.d(o,"b",function(){return i}),t.d(o,"c",function(){return l}),t.d(o,"d",function(){return d}),t.d(o,"e",function(){return c}),t.d(o,"f",function(){return f}),t.d(o,"g",function(){return m}),t.d(o,"h",function(){return S});var r="alpha",i="beta",l="delta",d="epsilon",c="omega",f="pi",m="sigma",S=[r,i,l,d,c,f,m]},9:function(s,o,t){"use strict";t.r(o),t.d(o,"Typography",function(){return e});var r,i=t(3),l=t.n(i),d=t(2),c=t.n(d),f=t(13),m=t(1),S=t.n(m),h=t(0),p=t.n(h),T=t(8),M=function(a){return S.a.createElement("div",a)},P={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textAlign:void 0,textTransform:void 0,variant:T.e},E={ellipsis:p.a.bool,fontSize:p.a.oneOfType([p.a.number,p.a.string]),fontWeight:p.a.string,lineHeight:p.a.oneOfType([p.a.number,p.a.string]),textAlign:p.a.string,textColor:p.a.string,textTransform:p.a.string,variant:p.a.oneOf(T.h)};M.defaultProps=P,M.propTypes=E;var n={fontSize:!0,fontWeight:!0},e=c.a.span.withConfig({shouldForwardProp:function(a,x){return!n[a]&&x(a)}})(r||(r=l()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-align: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(a){var x=a.theme,C=a.fontWeight;return x.fontWeights[C]},function(a){var x=a.theme,C=a.fontSize;return x.fontSizes[C]},function(a){var x=a.theme,C=a.lineHeight;return x.lineHeights[C]},f.b,function(a){return a.textAlign},function(a){return a.textTransform},f.a,f.c);e.defaultProps=P,e.propTypes=E}})})},62031:(D,Z,g)=>{"use strict";D.exports=g(59525)},59525:function(D,Z,g){(function(v,z){D.exports=z(g(67294),g(78384))})(this,function(v,z){return function(u){var s={};function o(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return u[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=u,o.c=s,o.d=function(t,r,i){o.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:i})},o.r=function(t){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,r){if(1&r&&(t=o(t)),8&r||4&r&&typeof t=="object"&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&r&&typeof t!="string")for(var l in t)o.d(i,l,function(d){return t[d]}.bind(null,l));return i},o.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(r,"a",r),r},o.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},o.p="",o(o.s=113)}({0:function(u,s,o){u.exports=o(21)()},1:function(u,s){u.exports=v},11:function(u,s,o){var t=o(27),r=o(28),i=o(24),l=o(29);u.exports=function(d,c){return t(d)||r(d,c)||i(d,c)||l()},u.exports.default=u.exports,u.exports.__esModule=!0},113:function(u,s,o){"use strict";o.r(s),o.d(s,"Main",function(){return n}),o.d(s,"SkipToContent",function(){return C});var t,r=o(5),i=o.n(r),l=o(4),d=o.n(l),c=o(3),f=o.n(c),m=o(1),S=o.n(m),h=o(0),p=o.n(h),T=o(2),M=o.n(T),P=["labelledBy"],E=M.a.main(t||(t=f()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),n=function(L){var H=L.labelledBy,_=d()(L,P),U=H||"main-content-title";return S.a.createElement(E,i()({"aria-labelledby":U,id:"main-content",tabIndex:-1},_))};n.defaultProps={labelledBy:void 0},n.propTypes={labelledBy:p.a.string};var e,a=o(6),x=M()(a.Box)(e||(e=f()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(L){return L.theme.spaces[3]},function(L){return L.theme.spaces[3]}),C=function(L){var H=L.children;return S.a.createElement(x,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},H)};C.propTypes={children:p.a.node.isRequired}},15:function(u,s){function o(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(u.exports=o=function(r){return typeof r},u.exports.default=u.exports,u.exports.__esModule=!0):(u.exports=o=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},u.exports.default=u.exports,u.exports.__esModule=!0),o(t)}u.exports=o,u.exports.default=u.exports,u.exports.__esModule=!0},2:function(u,s){u.exports=z},21:function(u,s,o){"use strict";var t=o(22);function r(){}function i(){}i.resetWarningCache=r,u.exports=function(){function l(f,m,S,h,p,T){if(T!==t){var M=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw M.name="Invariant Violation",M}}function d(){return l}l.isRequired=l;var c={array:l,bool:l,func:l,number:l,object:l,string:l,symbol:l,any:l,arrayOf:d,element:l,elementType:l,instanceOf:d,node:l,objectOf:d,oneOf:d,oneOfType:d,shape:d,exact:d,checkPropTypes:i,resetWarningCache:r};return c.PropTypes=c,c}},22:function(u,s,o){"use strict";u.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},23:function(u,s){u.exports=function(o,t){(t==null||t>o.length)&&(t=o.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=o[r];return i},u.exports.default=u.exports,u.exports.__esModule=!0},24:function(u,s,o){var t=o(23);u.exports=function(r,i){if(r){if(typeof r=="string")return t(r,i);var l=Object.prototype.toString.call(r).slice(8,-1);return l==="Object"&&r.constructor&&(l=r.constructor.name),l==="Map"||l==="Set"?Array.from(r):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?t(r,i):void 0}},u.exports.default=u.exports,u.exports.__esModule=!0},26:function(u,s){u.exports=function(o,t){if(o==null)return{};var r,i,l={},d=Object.keys(o);for(i=0;i<d.length;i++)r=d[i],t.indexOf(r)>=0||(l[r]=o[r]);return l},u.exports.default=u.exports,u.exports.__esModule=!0},27:function(u,s){u.exports=function(o){if(Array.isArray(o))return o},u.exports.default=u.exports,u.exports.__esModule=!0},28:function(u,s){u.exports=function(o,t){var r=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(r!=null){var i,l,d=[],c=!0,f=!1;try{for(r=r.call(o);!(c=(i=r.next()).done)&&(d.push(i.value),!t||d.length!==t);c=!0);}catch(m){f=!0,l=m}finally{try{c||r.return==null||r.return()}finally{if(f)throw l}}return d}},u.exports.default=u.exports,u.exports.__esModule=!0},29:function(u,s){u.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},u.exports.default=u.exports,u.exports.__esModule=!0},3:function(u,s){u.exports=function(o,t){return t||(t=o.slice(0)),Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(t)}}))},u.exports.default=u.exports,u.exports.__esModule=!0},4:function(u,s,o){var t=o(26);u.exports=function(r,i){if(r==null)return{};var l,d,c=t(r,i);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(r);for(d=0;d<f.length;d++)l=f[d],i.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(r,l)&&(c[l]=r[l])}return c},u.exports.default=u.exports,u.exports.__esModule=!0},5:function(u,s){function o(){return u.exports=o=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(t[l]=i[l])}return t},u.exports.default=u.exports,u.exports.__esModule=!0,o.apply(this,arguments)}u.exports=o,u.exports.default=u.exports,u.exports.__esModule=!0},6:function(u,s,o){"use strict";o.r(s),o.d(s,"Box",function(){return E});var t,r=o(3),i=o.n(r),l=o(2),d=o.n(l),c=o(7),f=o(1),m=o.n(f),S=o(0),h=o.n(S),p=function(n){return m.a.createElement("div",n)},T={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},M={_hover:h.a.func,background:h.a.string,basis:h.a.oneOfType([h.a.string,h.a.string]),borderColor:h.a.string,children:h.a.oneOfType([h.a.node,h.a.string]),color:h.a.string,flex:h.a.oneOfType([h.a.string,h.a.string]),grow:h.a.oneOfType([h.a.string,h.a.string]),hasRadius:h.a.bool,hiddenS:h.a.bool,hiddenXS:h.a.bool,padding:h.a.oneOfType([h.a.number,h.a.arrayOf(h.a.number)]),paddingBottom:h.a.oneOfType([h.a.number,h.a.arrayOf(h.a.number)]),paddingLeft:h.a.oneOfType([h.a.number,h.a.arrayOf(h.a.number)]),paddingRight:h.a.oneOfType([h.a.number,h.a.arrayOf(h.a.number)]),paddingTop:h.a.oneOfType([h.a.number,h.a.arrayOf(h.a.number)]),shadow:h.a.string,shrink:h.a.oneOfType([h.a.string,h.a.string])};p.defaultProps=T,p.propTypes=M;var P={color:!0},E=d.a.div.withConfig({shouldForwardProp:function(n,e){return!P[n]&&e(n)}})(t||(t=i()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(n){var e=n.fontSize;return n.theme.fontSizes[e]||e},function(n){var e=n.theme,a=n.background;return e.colors[a]},function(n){var e=n.theme,a=n.color;return e.colors[a]},function(n){var e=n.theme,a=n.padding;return Object(c.a)("padding",a,e)},function(n){var e=n.theme,a=n.paddingTop;return Object(c.a)("padding-top",a,e)},function(n){var e=n.theme,a=n.paddingRight;return Object(c.a)("padding-right",a,e)},function(n){var e=n.theme,a=n.paddingBottom;return Object(c.a)("padding-bottom",a,e)},function(n){var e=n.theme,a=n.paddingLeft;return Object(c.a)("padding-left",a,e)},function(n){var e=n.theme,a=n.marginLeft;return Object(c.a)("margin-left",a,e)},function(n){var e=n.theme,a=n.marginRight;return Object(c.a)("margin-right",a,e)},function(n){var e=n.theme,a=n.marginTop;return Object(c.a)("margin-top",a,e)},function(n){var e=n.theme,a=n.marginBottom;return Object(c.a)("margin-bottom",a,e)},function(n){var e=n.theme;return n.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0},function(n){var e=n.theme;return n.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0},function(n){var e=n.theme,a=n.hasRadius,x=n.borderRadius;return a?e.borderRadius:x},function(n){return n.borderStyle},function(n){return n.borderWidth},function(n){var e=n.borderColor;return n.theme.colors[e]},function(n){var e=n.theme,a=n.borderColor,x=n.borderStyle,C=n.borderWidth;if(a&&!x&&!C)return"1px solid ".concat(e.colors[a])},function(n){var e=n.theme,a=n.shadow;return e.shadows[a]},function(n){return n.pointerEvents},function(n){var e=n._hover,a=n.theme;return e?e(a):void 0},function(n){return n.display},function(n){return n.position},function(n){var e=n.left;return n.theme.spaces[e]||e},function(n){var e=n.right;return n.theme.spaces[e]||e},function(n){var e=n.top;return n.theme.spaces[e]||e},function(n){var e=n.bottom;return n.theme.spaces[e]||e},function(n){return n.zIndex},function(n){return n.overflow},function(n){return n.cursor},function(n){var e=n.width;return n.theme.spaces[e]||e},function(n){var e=n.maxWidth;return n.theme.spaces[e]||e},function(n){var e=n.minWidth;return n.theme.spaces[e]||e},function(n){var e=n.height;return n.theme.spaces[e]||e},function(n){var e=n.maxHeight;return n.theme.spaces[e]||e},function(n){var e=n.minHeight;return n.theme.spaces[e]||e},function(n){return n.transition},function(n){return n.transform},function(n){return n.animation},function(n){return n.shrink},function(n){return n.grow},function(n){return n.basis},function(n){return n.flex},function(n){return n.textAlign},function(n){return n.textTransform},function(n){return n.lineHeight},function(n){return n.cursor});E.defaultProps=T,E.propTypes=M},7:function(u,s,o){"use strict";var t=o(11),r=o.n(t),i=o(15),l=o.n(i);s.a=function(d,c,f){var m=c;if(Array.isArray(c)||l()(c)!=="object"||(m=[c==null?void 0:c.desktop,c==null?void 0:c.tablet,c==null?void 0:c.mobile]),m!==void 0){if(Array.isArray(m)){var S=m,h=r()(S,3),p=h[0],T=h[1],M=h[2],P="".concat(d,": ").concat(f.spaces[p],";");return T!==void 0&&(P+="".concat(f.mediaQueries.tablet,`{
          `).concat(d,": ").concat(f.spaces[T],`;
        }`)),M!==void 0&&(P+="".concat(f.mediaQueries.mobile,`{
          `).concat(d,": ").concat(f.spaces[M],`;
        }`)),P}var E=f.spaces[m]||m;return"".concat(d,": ").concat(E,";")}}}})})},8971:(D,Z,g)=>{"use strict";g.r(Z),g.d(Z,{ProvidersPage:()=>xe,default:()=>$e});var v=g(67294),z=g(97132),u=g(68547),s=g(18721),o=g.n(s),t=g(11700),r=g.n(t),i=g(67814),l=g(78862),d=g(62031),c=g(84686),f=g(41798),m=g(49425),S=g(26851),h=g(30741),p=g(19352),T=g.n(p),M=g(23724),P=g(53209),E=g(89031);const n={id:(0,E.OB)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},e={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},a={id:(0,E.OB)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},x={id:(0,E.OB)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},C={id:(0,E.OB)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},L={id:(0,E.OB)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},H={id:(0,E.OB)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},_={id:(0,E.OB)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},V={email:{form:[[{intlLabel:x,name:"enabled",type:"bool",description:a,size:6}]],schema:P.Ry().shape({enabled:P.Xg().required(u.translatedErrors.required)})},providers:{form:[[{intlLabel:x,name:"enabled",type:"bool",description:a,size:6,validations:{required:!0}}],[{intlLabel:C,name:"key",type:"text",placeholder:H,size:12,validations:{required:!0}}],[{intlLabel:_,name:"secret",type:"text",placeholder:H,size:12,validations:{required:!0}}],[{intlLabel:n,placeholder:e,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:L,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:P.Ry().shape({enabled:P.Xg().required(u.translatedErrors.required),key:P.Z_().when("enabled",{is:!0,then:P.Z_().required(u.translatedErrors.required),otherwise:P.Z_()}),secret:P.Z_().when("enabled",{is:!0,then:P.Z_().required(u.translatedErrors.required),otherwise:P.Z_()}),callback:P.Z_().when("enabled",{is:!0,then:P.Z_().required(u.translatedErrors.required),otherwise:P.Z_()})})},providersWithSubdomain:{form:[[{intlLabel:x,name:"enabled",type:"bool",description:a,size:6,validations:{required:!0}}],[{intlLabel:C,name:"key",type:"text",placeholder:H,size:12,validations:{required:!0}}],[{intlLabel:_,name:"secret",type:"text",placeholder:H,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,E.OB)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,E.OB)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:n,placeholder:e,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:L,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:P.Ry().shape({enabled:P.Xg().required(u.translatedErrors.required),key:P.Z_().when("enabled",{is:!0,then:P.Z_().required(u.translatedErrors.required),otherwise:P.Z_()}),secret:P.Z_().when("enabled",{is:!0,then:P.Z_().required(u.translatedErrors.required),otherwise:P.Z_()}),subdomain:P.Z_().when("enabled",{is:!0,then:P.Z_().required(u.translatedErrors.required),otherwise:P.Z_()}),callback:P.Z_().when("enabled",{is:!0,then:P.Z_().required(u.translatedErrors.required),otherwise:P.Z_()})})}};var J=(b,y,O)=>new Promise((F,B)=>{var W=R=>{try{k(O.next(R))}catch(j){B(j)}},I=R=>{try{k(O.throw(R))}catch(j){B(j)}},k=R=>R.done?F(R.value):Promise.resolve(R.value).then(W,I);k((O=O.apply(b,y)).next())});const ee=b=>J(void 0,null,function*(){try{const{data:y}=yield E.be.get((0,E.Gc)("providers"));return y}catch(y){throw b({type:"warning",message:{id:"notification.error"}}),new Error("error")}}),Te=b=>E.be.put((0,E.Gc)("providers"),b);var Ee=g(96486);const Se=b=>(0,Ee.sortBy)(Object.keys(b).reduce((y,O)=>{const{icon:F,enabled:B,subdomain:W}=b[O],I=F==="envelope"?["fas","envelope"]:["fab",F];return W!==void 0?y.push({name:O,icon:I,enabled:B,subdomain:W}):y.push({name:O,icon:I,enabled:B}),y},[]),"name");var le=g(81912),de=g(19408),we=g(9008),ce=g(68115),fe=g(34626),G=g(75146),Me=g(45697),w=g.n(Me),je=g(80831),Re=g(47857),Ce=g(55967),Be=Object.defineProperty,pe=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable,me=(b,y,O)=>y in b?Be(b,y,{enumerable:!0,configurable:!0,writable:!0,value:O}):b[y]=O,te=(b,y)=>{for(var O in y||(y={}))Le.call(y,O)&&me(b,O,y[O]);if(pe)for(var O of pe(y))ze.call(y,O)&&me(b,O,y[O]);return b};const re=({description:b,disabled:y,intlLabel:O,error:F,name:B,onChange:W,placeholder:I,providerToEditName:k,type:R,value:j})=>{const{formatMessage:N}=(0,z.useIntl)(),X=B==="noName"?`${strapi.backendURL}/api/connect/${k}/callback`:j,Q=N({id:O.id,defaultMessage:O.defaultMessage},te({provider:k},O.values)),q=b?N({id:b.id,defaultMessage:b.defaultMessage},te({provider:k},b.values)):"";if(R==="bool")return v.createElement(Re.ToggleInput,{"aria-label":B,checked:j,disabled:y,hint:q,label:Q,name:B,offLabel:N({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:N({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:$=>{W({target:{name:B,value:$.target.checked}})}});const ae=I?N({id:I.id,defaultMessage:I.defaultMessage},te({},I.values)):"",ie=F?N({id:F,defaultMessage:F}):"";return v.createElement(Ce.TextInput,{"aria-label":B,disabled:y,error:ie,label:Q,name:B,onChange:W,placeholder:ae,type:R,value:X})};re.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},re.propTypes={description:w().shape({id:w().string.isRequired,defaultMessage:w().string.isRequired,values:w().object}),disabled:w().bool,error:w().string,intlLabel:w().shape({id:w().string.isRequired,defaultMessage:w().string.isRequired,values:w().object}).isRequired,name:w().string.isRequired,onChange:w().func.isRequired,placeholder:w().shape({id:w().string.isRequired,defaultMessage:w().string.isRequired,values:w().object}),providerToEditName:w().string.isRequired,type:w().string.isRequired,value:w().oneOfType([w().bool,w().string])};const Ie=re;var Ae=Object.defineProperty,Fe=Object.defineProperties,ke=Object.getOwnPropertyDescriptors,he=Object.getOwnPropertySymbols,Ue=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,ve=(b,y,O)=>y in b?Ae(b,y,{enumerable:!0,configurable:!0,writable:!0,value:O}):b[y]=O,He=(b,y)=>{for(var O in y||(y={}))Ue.call(y,O)&&ve(b,O,y[O]);if(he)for(var O of he(y))We.call(y,O)&&ve(b,O,y[O]);return b},De=(b,y)=>Fe(b,ke(y));const ne=({headerBreadcrumbs:b,initialData:y,isSubmiting:O,layout:F,isOpen:B,onSubmit:W,onToggle:I,providerToEditName:k})=>{const{formatMessage:R}=(0,z.useIntl)();return B?v.createElement(G.ModalLayout,{onClose:I,labelledBy:"title"},v.createElement(G.ModalHeader,null,v.createElement(ce.Breadcrumbs,{label:b.join(", ")},b.map(j=>v.createElement(ce.Crumb,{key:j},j)))),v.createElement(je.Formik,{onSubmit:j=>W(j),initialValues:y,validationSchema:F.schema,validateOnChange:!1},({errors:j,handleChange:N,values:X})=>v.createElement(u.Form,null,v.createElement(G.ModalBody,null,v.createElement(we.Stack,{spacing:1},v.createElement(fe.Grid,{gap:5},F.form.map(Q=>Q.map(q=>v.createElement(fe.GridItem,{key:q.name,col:q.size,xs:12},v.createElement(Ie,De(He({},q),{error:j[q.name],onChange:N,value:X[q.name],providerToEditName:k})))))))),v.createElement(G.ModalFooter,{startActions:v.createElement(de.Button,{variant:"tertiary",onClick:I,type:"button"},R({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:v.createElement(de.Button,{type:"submit",loading:O},R({id:"global.save",defaultMessage:"Save"}))})))):null};ne.defaultProps={initialData:null,providerToEditName:null},ne.propTypes={headerBreadcrumbs:w().arrayOf(w().string).isRequired,initialData:w().object,layout:w().shape({form:w().arrayOf(w().array),schema:w().object}).isRequired,isOpen:w().bool.isRequired,isSubmiting:w().bool.isRequired,onSubmit:w().func.isRequired,onToggle:w().func.isRequired,providerToEditName:w().string};const Ze=ne;var Ne=Object.defineProperty,qe=Object.defineProperties,_e=Object.getOwnPropertyDescriptors,ge=Object.getOwnPropertySymbols,Ve=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable,be=(b,y,O)=>y in b?Ne(b,y,{enumerable:!0,configurable:!0,writable:!0,value:O}):b[y]=O,oe=(b,y)=>{for(var O in y||(y={}))Ve.call(y,O)&&be(b,O,y[O]);if(ge)for(var O of ge(y))Xe.call(y,O)&&be(b,O,y[O]);return b},Qe=(b,y)=>qe(b,_e(y)),ye=(b,y,O)=>new Promise((F,B)=>{var W=R=>{try{k(O.next(R))}catch(j){B(j)}},I=R=>{try{k(O.throw(R))}catch(j){B(j)}},k=R=>R.done?F(R.value):Promise.resolve(R.value).then(W,I);k((O=O.apply(b,y)).next())});const xe=()=>{const{formatMessage:b}=(0,z.useIntl)();(0,u.useFocusWhenNavigate)();const{notifyStatus:y}=(0,c.useNotifyAT)(),O=(0,M.useQueryClient)(),{trackUsage:F}=(0,u.useTracking)(),B=(0,v.useRef)(F),[W,I]=(0,v.useState)(!1),[k,R]=(0,v.useState)(!1),[j,N]=(0,v.useState)(null),X=(0,u.useNotification)(),{lockApp:Q,unlockApp:q}=(0,u.useOverlayBlocker)(),ae=(0,v.useMemo)(()=>({update:le.Z.updateProviders}),[]),{isLoading:ie,allowedActions:{canUpdate:$}}=(0,u.useRBAC)(ae),{isLoading:Ge,data:K,isFetching:Ke}=(0,M.useQuery)("get-providers",()=>ee(X),{onSuccess(){y(b({id:(0,E.OB)("Providers.data.loaded"),defaultMessage:"Providers have been loaded"}))},initialData:{}}),Ye=Ge||Ke,Je=(0,M.useMutation)(Te,{onSuccess(){return ye(this,null,function*(){yield O.invalidateQueries("get-providers"),X({type:"info",message:{id:(0,E.OB)("notification.success.submit")}}),B.current("didEditAuthenticationProvider"),R(!1),se(),q()})},onError(){X({type:"warning",message:{id:"notification.error"}}),q(),R(!1)},refetchActive:!1}),Y=(0,v.useMemo)(()=>Se(K),[K]),et=Y.length,Oe=(0,v.useMemo)(()=>{if(!j)return!1;const A=Y.find(ue=>ue.name===j);return o()(A,"subdomain")},[Y,j]),tt=b({id:(0,E.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"}),rt=(0,v.useMemo)(()=>j==="email"?V.email:Oe?V.providersWithSubdomain:V.providers,[j,Oe]),se=()=>{I(A=>!A)},Pe=A=>{$&&(N(A.name),se())},nt=A=>ye(void 0,null,function*(){R(!0),Q(),B.current("willEditAuthenticationProvider");const ue=Qe(oe({},K),{[j]:A});Je.mutate({providers:ue})});return v.createElement(l.Layout,null,v.createElement(u.SettingsPageTitle,{name:tt}),v.createElement(d.Main,null,v.createElement(l.HeaderLayout,{title:b({id:(0,E.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),Ye||ie?v.createElement(u.LoadingIndicatorPage,null):v.createElement(l.ContentLayout,null,v.createElement(f.Table,{colCount:4,rowCount:et+1},v.createElement(f.Thead,null,v.createElement(f.Tr,null,v.createElement(f.Th,null,v.createElement(m.Typography,{variant:"sigma",textColor:"neutral600"},v.createElement(S.VisuallyHidden,null,b({id:(0,E.OB)("Providers.image"),defaultMessage:"Image"})))),v.createElement(f.Th,null,v.createElement(m.Typography,{variant:"sigma",textColor:"neutral600"},b({id:"global.name",defaultMessage:"Name"}))),v.createElement(f.Th,null,v.createElement(m.Typography,{variant:"sigma",textColor:"neutral600"},b({id:(0,E.OB)("Providers.status"),defaultMessage:"Status"}))),v.createElement(f.Th,null,v.createElement(m.Typography,{variant:"sigma"},v.createElement(S.VisuallyHidden,null,b({id:"global.settings",defaultMessage:"Settings"})))))),v.createElement(f.Tbody,null,Y.map(A=>v.createElement(f.Tr,oe({key:A.name},(0,u.onRowClick)({fn:()=>Pe(A),condition:$})),v.createElement(f.Td,{width:""},v.createElement(i.G,{icon:A.icon})),v.createElement(f.Td,{width:"45%"},v.createElement(m.Typography,{fontWeight:"semiBold",textColor:"neutral800"},A.name)),v.createElement(f.Td,{width:"65%"},v.createElement(m.Typography,{textColor:A.enabled?"success600":"danger600","data-testid":`enable-${A.name}`},A.enabled?b({id:"global.enabled",defaultMessage:"Enabled"}):b({id:"global.disabled",defaultMessage:"Disabled"}))),v.createElement(f.Td,oe({},u.stopPropagation),$&&v.createElement(h.IconButton,{onClick:()=>Pe(A),noBorder:!0,icon:v.createElement(T(),null),label:"Edit"})))))))),v.createElement(Ze,{initialData:K[j],isOpen:W,isSubmiting:k,layout:rt,headerBreadcrumbs:[b({id:(0,E.OB)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),r()(j)],onToggle:se,onSubmit:nt,providerToEditName:j}))},$e=()=>v.createElement(u.CheckPagePermissions,{permissions:le.Z.readProviders},v.createElement(xe,null))},46979:(D,Z,g)=>{"use strict";g.d(Z,{Z:()=>r});var v=g(9669),z=g.n(v),u=g(68547),s=g.n(u),o=(i,l,d)=>new Promise((c,f)=>{var m=p=>{try{h(d.next(p))}catch(T){f(T)}},S=p=>{try{h(d.throw(p))}catch(T){f(T)}},h=p=>p.done?c(p.value):Promise.resolve(p.value).then(m,S);h((d=d.apply(i,l)).next())});const t=z().create({baseURL:""});t.interceptors.request.use(i=>o(void 0,null,function*(){return i.headers={Authorization:`Bearer ${u.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},i}),i=>{Promise.reject(i)}),t.interceptors.response.use(i=>i,i=>{var l;throw((l=i.response)==null?void 0:l.status)===401&&(u.auth.clearAppStorage(),window.location.reload()),i});const r=t},89031:(D,Z,g)=>{"use strict";g.d(Z,{be:()=>v.Z,YX:()=>s,Gc:()=>r,OB:()=>i.Z});var v=g(46979),z=g(96486);const s=l=>Object.keys(l).reduce((d,c)=>{const f=l[c].controllers,m=Object.keys(f).reduce((S,h)=>((0,z.isEmpty)(f[h])||(S[h]=f[h]),S),{});return(0,z.isEmpty)(m)||(d[c]={controllers:m}),d},{});var o=g(31498);const r=l=>`/${o.Z}/${l}`;var i=g(84757)}}]);
