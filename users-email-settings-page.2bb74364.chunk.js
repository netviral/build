(self.webpackChunkstartup_backend=self.webpackChunkstartup_backend||[]).push([[8418],{68115:(z,W,v)=>{"use strict";z.exports=v(7446)},7446:function(z,W,v){(function(m,M){z.exports=M(v(67294),v(78384),v(66526))})(this,function(m,M,c){return function(o){var n={};function e(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return o[r].call(s.exports,s,s.exports,e),s.l=!0,s.exports}return e.m=o,e.c=n,e.d=function(r,s,l){e.o(r,s)||Object.defineProperty(r,s,{enumerable:!0,get:l})},e.r=function(r){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,s){if(1&s&&(r=e(r)),8&s||4&s&&typeof r=="object"&&r&&r.__esModule)return r;var l=Object.create(null);if(e.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:r}),2&s&&typeof r!="string")for(var u in r)e.d(l,u,function(d){return r[d]}.bind(null,u));return l},e.n=function(r){var s=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(s,"a",s),s},e.o=function(r,s){return Object.prototype.hasOwnProperty.call(r,s)},e.p="",e(e.s=116)}({0:function(o,n,e){o.exports=e(21)()},1:function(o,n){o.exports=m},10:function(o,n,e){"use strict";e.r(n),e.d(n,"Flex",function(){return t});var r,s=e(3),l=e.n(s),u=e(2),d=e.n(u),h=e(6),g=e(7),b=e(1),f=e.n(b),p=e(0),x=e.n(p),P=function(i){return f.a.createElement("div",i)},S={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},w={alignItems:x.a.string,basis:x.a.oneOfType([x.a.string,x.a.number]),direction:x.a.string,gap:x.a.oneOfType([x.a.shape({desktop:x.a.number,mobile:x.a.number,tablet:x.a.number}),x.a.number,x.a.arrayOf(x.a.number),x.a.string]),inline:x.a.bool,justifyContent:x.a.string,reverse:x.a.bool,shrink:x.a.number,wrap:x.a.string};P.defaultProps=S,P.propTypes=w;var a={direction:!0},t=d()(h.Box).withConfig({shouldForwardProp:function(i,y){return!a[i]&&y(i)}})(r||(r=l()([`
  align-items: `,`;
  display: `,`;
  flex-direction: `,`;
  flex-shrink: `,`;
  flex-wrap: `,`;
  `,`};
  justify-content: `,`;
`])),function(i){return i.alignItems},function(i){return i.inline?"inline-flex":"flex"},function(i){return i.direction},function(i){return i.shrink},function(i){return i.wrap},function(i){var y=i.gap,j=i.theme;return Object(g.a)("gap",y,j)},function(i){return i.justifyContent});t.defaultProps=S,t.propTypes=w},11:function(o,n,e){var r=e(27),s=e(28),l=e(24),u=e(29);o.exports=function(d,h){return r(d)||s(d,h)||l(d,h)||u()},o.exports.default=o.exports,o.exports.__esModule=!0},116:function(o,n,e){"use strict";e.r(n),e.d(n,"Crumb",function(){return C}),e.d(n,"Breadcrumbs",function(){return D});var r,s=e(4),l=e.n(s),u=e(3),d=e.n(u),h=e(1),g=e.n(h),b=e(0),f=e.n(b),p=e(2),x=e.n(p),P=e(50),S=e.n(P),w=e(9),a=e(6),t=e(10),i=e(20),y=["children","label"],j=x()(t.Flex)(r||(r=d()([`
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
`])),.625,.625,function(A){return A.theme.colors.neutral500},a.Box,w.Typography,function(A){return A.theme.colors.neutral800},function(A){return A.theme.fontWeights.bold}),C=function(A){var N=A.children;return g.a.createElement(j,{inline:!0,as:"li"},g.a.createElement(w.Typography,{variant:"pi",textColor:"neutral600"},N),g.a.createElement(a.Box,{"aria-hidden":!0,paddingLeft:3,paddingRight:3},g.a.createElement(S.a,null)))};C.displayName="Crumb",C.propTypes={children:f.a.node.isRequired};var U=f.a.shape({type:f.a.oneOf([C])}),D=function(A){var N=A.children,V=A.label,$=l()(A,y);return g.a.createElement(t.Flex,$,g.a.createElement(i.VisuallyHidden,null,V),g.a.createElement("ol",{"aria-hidden":!0},N))};D.displayName="Breadcrumbs",D.propTypes={children:f.a.oneOfType([f.a.arrayOf(U),U]).isRequired,label:f.a.string.isRequired}},13:function(o,n,e){"use strict";e.d(n,"a",function(){return s}),e.d(n,"c",function(){return l}),e.d(n,"b",function(){return u});var r=e(8),s=function(d){return d.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},l=function(d){var h=d.variant,g=d.theme;switch(h){case r.a:return`
        font-weight: `.concat(g.fontWeights.bold,`;
        font-size: `).concat(g.fontSizes[5],`;
        line-height: `).concat(g.lineHeights[2],`;
      `);case r.b:return`
        font-weight: `.concat(g.fontWeights.bold,`;
        font-size: `).concat(g.fontSizes[4],`;
        line-height: `).concat(g.lineHeights[1],`;
      `);case r.c:return`
        font-weight: `.concat(g.fontWeights.semiBold,`;
        font-size: `).concat(g.fontSizes[3],`;
        line-height: `).concat(g.lineHeights[2],`;
      `);case r.d:return`
        font-size: `.concat(g.fontSizes[3],`;
        line-height: `).concat(g.lineHeights[6],`;
      `);case r.e:return`
        font-size: `.concat(g.fontSizes[2],`;
        line-height: `).concat(g.lineHeights[4],`;
      `);case r.f:return`
        font-size: `.concat(g.fontSizes[1],`;
        line-height: `).concat(g.lineHeights[3],`;
      `);case r.g:return`
        font-weight: `.concat(g.fontWeights.bold,`;
        font-size: `).concat(g.fontSizes[0],`;
        line-height: `).concat(g.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(g.fontSizes[2],`;
      `)}},u=function(d){var h=d.theme,g=d.textColor;return h.colors[g||"neutral800"]}},15:function(o,n){function e(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(o.exports=e=function(s){return typeof s},o.exports.default=o.exports,o.exports.__esModule=!0):(o.exports=e=function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},o.exports.default=o.exports,o.exports.__esModule=!0),e(r)}o.exports=e,o.exports.default=o.exports,o.exports.__esModule=!0},2:function(o,n){o.exports=M},20:function(o,n,e){"use strict";e.r(n),e.d(n,"VisuallyHidden",function(){return d});var r,s=e(3),l=e.n(s),u=e(2),d=e.n(u).a.div(r||(r=l()([`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`])))},21:function(o,n,e){"use strict";var r=e(22);function s(){}function l(){}l.resetWarningCache=s,o.exports=function(){function u(g,b,f,p,x,P){if(P!==r){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}function d(){return u}u.isRequired=u;var h={array:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:d,element:u,elementType:u,instanceOf:d,node:u,objectOf:d,oneOf:d,oneOfType:d,shape:d,exact:d,checkPropTypes:l,resetWarningCache:s};return h.PropTypes=h,h}},22:function(o,n,e){"use strict";o.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},23:function(o,n){o.exports=function(e,r){(r==null||r>e.length)&&(r=e.length);for(var s=0,l=new Array(r);s<r;s++)l[s]=e[s];return l},o.exports.default=o.exports,o.exports.__esModule=!0},24:function(o,n,e){var r=e(23);o.exports=function(s,l){if(s){if(typeof s=="string")return r(s,l);var u=Object.prototype.toString.call(s).slice(8,-1);return u==="Object"&&s.constructor&&(u=s.constructor.name),u==="Map"||u==="Set"?Array.from(s):u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)?r(s,l):void 0}},o.exports.default=o.exports,o.exports.__esModule=!0},26:function(o,n){o.exports=function(e,r){if(e==null)return{};var s,l,u={},d=Object.keys(e);for(l=0;l<d.length;l++)s=d[l],r.indexOf(s)>=0||(u[s]=e[s]);return u},o.exports.default=o.exports,o.exports.__esModule=!0},27:function(o,n){o.exports=function(e){if(Array.isArray(e))return e},o.exports.default=o.exports,o.exports.__esModule=!0},28:function(o,n){o.exports=function(e,r){var s=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(s!=null){var l,u,d=[],h=!0,g=!1;try{for(s=s.call(e);!(h=(l=s.next()).done)&&(d.push(l.value),!r||d.length!==r);h=!0);}catch(b){g=!0,u=b}finally{try{h||s.return==null||s.return()}finally{if(g)throw u}}return d}},o.exports.default=o.exports,o.exports.__esModule=!0},29:function(o,n){o.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},o.exports.default=o.exports,o.exports.__esModule=!0},3:function(o,n){o.exports=function(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))},o.exports.default=o.exports,o.exports.__esModule=!0},4:function(o,n,e){var r=e(26);o.exports=function(s,l){if(s==null)return{};var u,d,h=r(s,l);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(s);for(d=0;d<g.length;d++)u=g[d],l.indexOf(u)>=0||Object.prototype.propertyIsEnumerable.call(s,u)&&(h[u]=s[u])}return h},o.exports.default=o.exports,o.exports.__esModule=!0},50:function(o,n){o.exports=c},6:function(o,n,e){"use strict";e.r(n),e.d(n,"Box",function(){return a});var r,s=e(3),l=e.n(s),u=e(2),d=e.n(u),h=e(7),g=e(1),b=e.n(g),f=e(0),p=e.n(f),x=function(t){return b.a.createElement("div",t)},P={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},S={_hover:p.a.func,background:p.a.string,basis:p.a.oneOfType([p.a.string,p.a.string]),borderColor:p.a.string,children:p.a.oneOfType([p.a.node,p.a.string]),color:p.a.string,flex:p.a.oneOfType([p.a.string,p.a.string]),grow:p.a.oneOfType([p.a.string,p.a.string]),hasRadius:p.a.bool,hiddenS:p.a.bool,hiddenXS:p.a.bool,padding:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingBottom:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingLeft:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingRight:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingTop:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),shadow:p.a.string,shrink:p.a.oneOfType([p.a.string,p.a.string])};x.defaultProps=P,x.propTypes=S;var w={color:!0},a=d.a.div.withConfig({shouldForwardProp:function(t,i){return!w[t]&&i(t)}})(r||(r=l()([`
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
`])),function(t){var i=t.fontSize;return t.theme.fontSizes[i]||i},function(t){var i=t.theme,y=t.background;return i.colors[y]},function(t){var i=t.theme,y=t.color;return i.colors[y]},function(t){var i=t.theme,y=t.padding;return Object(h.a)("padding",y,i)},function(t){var i=t.theme,y=t.paddingTop;return Object(h.a)("padding-top",y,i)},function(t){var i=t.theme,y=t.paddingRight;return Object(h.a)("padding-right",y,i)},function(t){var i=t.theme,y=t.paddingBottom;return Object(h.a)("padding-bottom",y,i)},function(t){var i=t.theme,y=t.paddingLeft;return Object(h.a)("padding-left",y,i)},function(t){var i=t.theme,y=t.marginLeft;return Object(h.a)("margin-left",y,i)},function(t){var i=t.theme,y=t.marginRight;return Object(h.a)("margin-right",y,i)},function(t){var i=t.theme,y=t.marginTop;return Object(h.a)("margin-top",y,i)},function(t){var i=t.theme,y=t.marginBottom;return Object(h.a)("margin-bottom",y,i)},function(t){var i=t.theme;return t.hiddenS?"".concat(i.mediaQueries.tablet," { display: none; }"):void 0},function(t){var i=t.theme;return t.hiddenXS?"".concat(i.mediaQueries.mobile," { display: none; }"):void 0},function(t){var i=t.theme,y=t.hasRadius,j=t.borderRadius;return y?i.borderRadius:j},function(t){return t.borderStyle},function(t){return t.borderWidth},function(t){var i=t.borderColor;return t.theme.colors[i]},function(t){var i=t.theme,y=t.borderColor,j=t.borderStyle,C=t.borderWidth;if(y&&!j&&!C)return"1px solid ".concat(i.colors[y])},function(t){var i=t.theme,y=t.shadow;return i.shadows[y]},function(t){return t.pointerEvents},function(t){var i=t._hover,y=t.theme;return i?i(y):void 0},function(t){return t.display},function(t){return t.position},function(t){var i=t.left;return t.theme.spaces[i]||i},function(t){var i=t.right;return t.theme.spaces[i]||i},function(t){var i=t.top;return t.theme.spaces[i]||i},function(t){var i=t.bottom;return t.theme.spaces[i]||i},function(t){return t.zIndex},function(t){return t.overflow},function(t){return t.cursor},function(t){var i=t.width;return t.theme.spaces[i]||i},function(t){var i=t.maxWidth;return t.theme.spaces[i]||i},function(t){var i=t.minWidth;return t.theme.spaces[i]||i},function(t){var i=t.height;return t.theme.spaces[i]||i},function(t){var i=t.maxHeight;return t.theme.spaces[i]||i},function(t){var i=t.minHeight;return t.theme.spaces[i]||i},function(t){return t.transition},function(t){return t.transform},function(t){return t.animation},function(t){return t.shrink},function(t){return t.grow},function(t){return t.basis},function(t){return t.flex},function(t){return t.textAlign},function(t){return t.textTransform},function(t){return t.lineHeight},function(t){return t.cursor});a.defaultProps=P,a.propTypes=S},7:function(o,n,e){"use strict";var r=e(11),s=e.n(r),l=e(15),u=e.n(l);n.a=function(d,h,g){var b=h;if(Array.isArray(h)||u()(h)!=="object"||(b=[h==null?void 0:h.desktop,h==null?void 0:h.tablet,h==null?void 0:h.mobile]),b!==void 0){if(Array.isArray(b)){var f=b,p=s()(f,3),x=p[0],P=p[1],S=p[2],w="".concat(d,": ").concat(g.spaces[x],";");return P!==void 0&&(w+="".concat(g.mediaQueries.tablet,`{
          `).concat(d,": ").concat(g.spaces[P],`;
        }`)),S!==void 0&&(w+="".concat(g.mediaQueries.mobile,`{
          `).concat(d,": ").concat(g.spaces[S],`;
        }`)),w}var a=g.spaces[b]||b;return"".concat(d,": ").concat(a,";")}}},8:function(o,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"b",function(){return s}),e.d(n,"c",function(){return l}),e.d(n,"d",function(){return u}),e.d(n,"e",function(){return d}),e.d(n,"f",function(){return h}),e.d(n,"g",function(){return g}),e.d(n,"h",function(){return b});var r="alpha",s="beta",l="delta",u="epsilon",d="omega",h="pi",g="sigma",b=[r,s,l,u,d,h,g]},9:function(o,n,e){"use strict";e.r(n),e.d(n,"Typography",function(){return t});var r,s=e(3),l=e.n(s),u=e(2),d=e.n(u),h=e(13),g=e(1),b=e.n(g),f=e(0),p=e.n(f),x=e(8),P=function(i){return b.a.createElement("div",i)},S={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textAlign:void 0,textTransform:void 0,variant:x.e},w={ellipsis:p.a.bool,fontSize:p.a.oneOfType([p.a.number,p.a.string]),fontWeight:p.a.string,lineHeight:p.a.oneOfType([p.a.number,p.a.string]),textAlign:p.a.string,textColor:p.a.string,textTransform:p.a.string,variant:p.a.oneOf(x.h)};P.defaultProps=S,P.propTypes=w;var a={fontSize:!0,fontWeight:!0},t=d.a.span.withConfig({shouldForwardProp:function(i,y){return!a[i]&&y(i)}})(r||(r=l()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-align: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(i){var y=i.theme,j=i.fontWeight;return y.fontWeights[j]},function(i){var y=i.theme,j=i.fontSize;return y.fontSizes[j]},function(i){var y=i.theme,j=i.lineHeight;return y.lineHeights[j]},h.b,function(i){return i.textAlign},function(i){return i.textTransform},h.a,h.c);t.defaultProps=S,t.propTypes=w}})})},62031:(z,W,v)=>{"use strict";z.exports=v(59525)},59525:function(z,W,v){(function(m,M){z.exports=M(v(67294),v(78384))})(this,function(m,M){return function(c){var o={};function n(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return c[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=c,n.c=o,n.d=function(e,r,s){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:s})},n.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r||4&r&&typeof e=="object"&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&r&&typeof e!="string")for(var l in e)n.d(s,l,function(u){return e[u]}.bind(null,l));return s},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=113)}({0:function(c,o,n){c.exports=n(21)()},1:function(c,o){c.exports=m},11:function(c,o,n){var e=n(27),r=n(28),s=n(24),l=n(29);c.exports=function(u,d){return e(u)||r(u,d)||s(u,d)||l()},c.exports.default=c.exports,c.exports.__esModule=!0},113:function(c,o,n){"use strict";n.r(o),n.d(o,"Main",function(){return a}),n.d(o,"SkipToContent",function(){return j});var e,r=n(5),s=n.n(r),l=n(4),u=n.n(l),d=n(3),h=n.n(d),g=n(1),b=n.n(g),f=n(0),p=n.n(f),x=n(2),P=n.n(x),S=["labelledBy"],w=P.a.main(e||(e=h()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),a=function(C){var U=C.labelledBy,D=u()(C,S),A=U||"main-content-title";return b.a.createElement(w,s()({"aria-labelledby":A,id:"main-content",tabIndex:-1},D))};a.defaultProps={labelledBy:void 0},a.propTypes={labelledBy:p.a.string};var t,i=n(6),y=P()(i.Box)(t||(t=h()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(C){return C.theme.spaces[3]},function(C){return C.theme.spaces[3]}),j=function(C){var U=C.children;return b.a.createElement(y,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},U)};j.propTypes={children:p.a.node.isRequired}},15:function(c,o){function n(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(c.exports=n=function(r){return typeof r},c.exports.default=c.exports,c.exports.__esModule=!0):(c.exports=n=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},c.exports.default=c.exports,c.exports.__esModule=!0),n(e)}c.exports=n,c.exports.default=c.exports,c.exports.__esModule=!0},2:function(c,o){c.exports=M},21:function(c,o,n){"use strict";var e=n(22);function r(){}function s(){}s.resetWarningCache=r,c.exports=function(){function l(h,g,b,f,p,x){if(x!==e){var P=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw P.name="Invariant Violation",P}}function u(){return l}l.isRequired=l;var d={array:l,bool:l,func:l,number:l,object:l,string:l,symbol:l,any:l,arrayOf:u,element:l,elementType:l,instanceOf:u,node:l,objectOf:u,oneOf:u,oneOfType:u,shape:u,exact:u,checkPropTypes:s,resetWarningCache:r};return d.PropTypes=d,d}},22:function(c,o,n){"use strict";c.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},23:function(c,o){c.exports=function(n,e){(e==null||e>n.length)&&(e=n.length);for(var r=0,s=new Array(e);r<e;r++)s[r]=n[r];return s},c.exports.default=c.exports,c.exports.__esModule=!0},24:function(c,o,n){var e=n(23);c.exports=function(r,s){if(r){if(typeof r=="string")return e(r,s);var l=Object.prototype.toString.call(r).slice(8,-1);return l==="Object"&&r.constructor&&(l=r.constructor.name),l==="Map"||l==="Set"?Array.from(r):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?e(r,s):void 0}},c.exports.default=c.exports,c.exports.__esModule=!0},26:function(c,o){c.exports=function(n,e){if(n==null)return{};var r,s,l={},u=Object.keys(n);for(s=0;s<u.length;s++)r=u[s],e.indexOf(r)>=0||(l[r]=n[r]);return l},c.exports.default=c.exports,c.exports.__esModule=!0},27:function(c,o){c.exports=function(n){if(Array.isArray(n))return n},c.exports.default=c.exports,c.exports.__esModule=!0},28:function(c,o){c.exports=function(n,e){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var s,l,u=[],d=!0,h=!1;try{for(r=r.call(n);!(d=(s=r.next()).done)&&(u.push(s.value),!e||u.length!==e);d=!0);}catch(g){h=!0,l=g}finally{try{d||r.return==null||r.return()}finally{if(h)throw l}}return u}},c.exports.default=c.exports,c.exports.__esModule=!0},29:function(c,o){c.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},c.exports.default=c.exports,c.exports.__esModule=!0},3:function(c,o){c.exports=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))},c.exports.default=c.exports,c.exports.__esModule=!0},4:function(c,o,n){var e=n(26);c.exports=function(r,s){if(r==null)return{};var l,u,d=e(r,s);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(r);for(u=0;u<h.length;u++)l=h[u],s.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(r,l)&&(d[l]=r[l])}return d},c.exports.default=c.exports,c.exports.__esModule=!0},5:function(c,o){function n(){return c.exports=n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e},c.exports.default=c.exports,c.exports.__esModule=!0,n.apply(this,arguments)}c.exports=n,c.exports.default=c.exports,c.exports.__esModule=!0},6:function(c,o,n){"use strict";n.r(o),n.d(o,"Box",function(){return w});var e,r=n(3),s=n.n(r),l=n(2),u=n.n(l),d=n(7),h=n(1),g=n.n(h),b=n(0),f=n.n(b),p=function(a){return g.a.createElement("div",a)},x={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},P={_hover:f.a.func,background:f.a.string,basis:f.a.oneOfType([f.a.string,f.a.string]),borderColor:f.a.string,children:f.a.oneOfType([f.a.node,f.a.string]),color:f.a.string,flex:f.a.oneOfType([f.a.string,f.a.string]),grow:f.a.oneOfType([f.a.string,f.a.string]),hasRadius:f.a.bool,hiddenS:f.a.bool,hiddenXS:f.a.bool,padding:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingBottom:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingLeft:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingRight:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingTop:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),shadow:f.a.string,shrink:f.a.oneOfType([f.a.string,f.a.string])};p.defaultProps=x,p.propTypes=P;var S={color:!0},w=u.a.div.withConfig({shouldForwardProp:function(a,t){return!S[a]&&t(a)}})(e||(e=s()([`
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
`])),function(a){var t=a.fontSize;return a.theme.fontSizes[t]||t},function(a){var t=a.theme,i=a.background;return t.colors[i]},function(a){var t=a.theme,i=a.color;return t.colors[i]},function(a){var t=a.theme,i=a.padding;return Object(d.a)("padding",i,t)},function(a){var t=a.theme,i=a.paddingTop;return Object(d.a)("padding-top",i,t)},function(a){var t=a.theme,i=a.paddingRight;return Object(d.a)("padding-right",i,t)},function(a){var t=a.theme,i=a.paddingBottom;return Object(d.a)("padding-bottom",i,t)},function(a){var t=a.theme,i=a.paddingLeft;return Object(d.a)("padding-left",i,t)},function(a){var t=a.theme,i=a.marginLeft;return Object(d.a)("margin-left",i,t)},function(a){var t=a.theme,i=a.marginRight;return Object(d.a)("margin-right",i,t)},function(a){var t=a.theme,i=a.marginTop;return Object(d.a)("margin-top",i,t)},function(a){var t=a.theme,i=a.marginBottom;return Object(d.a)("margin-bottom",i,t)},function(a){var t=a.theme;return a.hiddenS?"".concat(t.mediaQueries.tablet," { display: none; }"):void 0},function(a){var t=a.theme;return a.hiddenXS?"".concat(t.mediaQueries.mobile," { display: none; }"):void 0},function(a){var t=a.theme,i=a.hasRadius,y=a.borderRadius;return i?t.borderRadius:y},function(a){return a.borderStyle},function(a){return a.borderWidth},function(a){var t=a.borderColor;return a.theme.colors[t]},function(a){var t=a.theme,i=a.borderColor,y=a.borderStyle,j=a.borderWidth;if(i&&!y&&!j)return"1px solid ".concat(t.colors[i])},function(a){var t=a.theme,i=a.shadow;return t.shadows[i]},function(a){return a.pointerEvents},function(a){var t=a._hover,i=a.theme;return t?t(i):void 0},function(a){return a.display},function(a){return a.position},function(a){var t=a.left;return a.theme.spaces[t]||t},function(a){var t=a.right;return a.theme.spaces[t]||t},function(a){var t=a.top;return a.theme.spaces[t]||t},function(a){var t=a.bottom;return a.theme.spaces[t]||t},function(a){return a.zIndex},function(a){return a.overflow},function(a){return a.cursor},function(a){var t=a.width;return a.theme.spaces[t]||t},function(a){var t=a.maxWidth;return a.theme.spaces[t]||t},function(a){var t=a.minWidth;return a.theme.spaces[t]||t},function(a){var t=a.height;return a.theme.spaces[t]||t},function(a){var t=a.maxHeight;return a.theme.spaces[t]||t},function(a){var t=a.minHeight;return a.theme.spaces[t]||t},function(a){return a.transition},function(a){return a.transform},function(a){return a.animation},function(a){return a.shrink},function(a){return a.grow},function(a){return a.basis},function(a){return a.flex},function(a){return a.textAlign},function(a){return a.textTransform},function(a){return a.lineHeight},function(a){return a.cursor});w.defaultProps=x,w.propTypes=P},7:function(c,o,n){"use strict";var e=n(11),r=n.n(e),s=n(15),l=n.n(s);o.a=function(u,d,h){var g=d;if(Array.isArray(d)||l()(d)!=="object"||(g=[d==null?void 0:d.desktop,d==null?void 0:d.tablet,d==null?void 0:d.mobile]),g!==void 0){if(Array.isArray(g)){var b=g,f=r()(b,3),p=f[0],x=f[1],P=f[2],S="".concat(u,": ").concat(h.spaces[p],";");return x!==void 0&&(S+="".concat(h.mediaQueries.tablet,`{
          `).concat(u,": ").concat(h.spaces[x],`;
        }`)),P!==void 0&&(S+="".concat(h.mediaQueries.mobile,`{
          `).concat(u,": ").concat(h.spaces[P],`;
        }`)),S}var w=h.spaces[g]||g;return"".concat(u,": ").concat(w,";")}}}})})},27590:function(z,W,v){(function(m,M){z.exports=M(v(67294))})(this,function(m){return function(M){var c={};function o(n){if(c[n])return c[n].exports;var e=c[n]={i:n,l:!1,exports:{}};return M[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=M,o.c=c,o.d=function(n,e,r){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},o.r=function(n){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e||4&e&&typeof n=="object"&&n&&n.__esModule)return n;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&typeof n!="string")for(var s in n)o.d(r,s,function(l){return n[l]}.bind(null,s));return r},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="",o(o.s=155)}({0:function(M,c){M.exports=m},155:function(M,c,o){"use strict";o.r(c);var n=o(0);function e(){return(e=Object.assign||function(r){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(r[u]=l[u])}return r}).apply(this,arguments)}c.default=function(r){return n.createElement("svg",e({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.681 2.804A9.64 9.64 0 0011.818 2C6.398 2 2 6.48 2 12c0 5.521 4.397 10 9.818 10 2.03 0 4.011-.641 5.67-1.835a9.987 9.987 0 003.589-4.831 1.117 1.117 0 00-.664-1.418 1.086 1.086 0 00-1.393.676 7.769 7.769 0 01-2.792 3.758 7.546 7.546 0 01-4.41 1.428V4.222h.002a7.492 7.492 0 013.003.625 7.61 7.61 0 012.5 1.762l.464.551-2.986 3.042a.186.186 0 00.129.316H22V3.317a.188.188 0 00-.112-.172.179.179 0 00-.199.04l-2.355 2.4-.394-.468-.02-.02a9.791 9.791 0 00-3.239-2.293zm-3.863 1.418V2v2.222zm0 0v15.556c-4.216 0-7.636-3.484-7.636-7.778s3.42-7.777 7.636-7.778z",fill:"#212134"}))}}})})},95972:(z,W,v)=>{"use strict";v.r(W),v.d(W,{default:()=>Te});var m=v(67294),M=v(23724),c=v(97132),o=v(68547),n=v(84686),e=v(62031),r=v(78862),s=v(81912),l=v(89031),u=(E,T,O)=>new Promise((I,B)=>{var L=R=>{try{_(O.next(R))}catch(F){B(F)}},H=R=>{try{_(O.throw(R))}catch(F){B(F)}},_=R=>R.done?I(R.value):Promise.resolve(R.value).then(L,H);_((O=O.apply(E,T)).next())});const d=()=>u(void 0,null,function*(){const{data:E}=yield l.be.get((0,l.Gc)("email-templates"));return E}),h=E=>l.be.put((0,l.Gc)("email-templates"),E);var g=v(45697),b=v.n(g),f=v(41798),p=v(26851),x=v(49425),P=v(30741),S=v(15804),w=v(19352),a=v.n(w),t=v(27590),i=v.n(t),y=v(84734),j=v.n(y),C=Object.defineProperty,U=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,N=(E,T,O)=>T in E?C(E,T,{enumerable:!0,configurable:!0,writable:!0,value:O}):E[T]=O,V=(E,T)=>{for(var O in T||(T={}))D.call(T,O)&&N(E,O,T[O]);if(U)for(var O of U(T))A.call(T,O)&&N(E,O,T[O]);return E};const $=({canUpdate:E,onEditClick:T})=>{const{formatMessage:O}=(0,c.useIntl)();return m.createElement(f.Table,{colCount:3,rowCount:3},m.createElement(f.Thead,null,m.createElement(f.Tr,null,m.createElement(f.Th,{width:"1%"},m.createElement(p.VisuallyHidden,null,O({id:(0,l.OB)("Email.template.table.icon.label"),defaultMessage:"icon"}))),m.createElement(f.Th,null,m.createElement(x.Typography,{variant:"sigma",textColor:"neutral600"},O({id:(0,l.OB)("Email.template.table.name.label"),defaultMessage:"name"}))),m.createElement(f.Th,{width:"1%"},m.createElement(p.VisuallyHidden,null,O({id:(0,l.OB)("Email.template.table.action.label"),defaultMessage:"action"}))))),m.createElement(f.Tbody,null,m.createElement(f.Tr,V({},(0,o.onRowClick)({fn:()=>T("reset_password")})),m.createElement(f.Td,null,m.createElement(S.Icon,null,m.createElement(i(),{"aria-label":O({id:"global.reset-password",defaultMessage:"Reset password"})}))),m.createElement(f.Td,null,m.createElement(x.Typography,null,O({id:"global.reset-password",defaultMessage:"Reset password"}))),m.createElement(f.Td,V({},o.stopPropagation),m.createElement(P.IconButton,{onClick:()=>T("reset_password"),label:O({id:(0,l.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:E&&m.createElement(a(),null)}))),m.createElement(f.Tr,V({},(0,o.onRowClick)({fn:()=>T("email_confirmation")})),m.createElement(f.Td,null,m.createElement(S.Icon,null,m.createElement(j(),{"aria-label":O({id:(0,l.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})}))),m.createElement(f.Td,null,m.createElement(x.Typography,null,O({id:(0,l.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"}))),m.createElement(f.Td,V({},o.stopPropagation),m.createElement(P.IconButton,{onClick:()=>T("email_confirmation"),label:O({id:(0,l.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:E&&m.createElement(a(),null)})))))};$.propTypes={canUpdate:b().bool.isRequired,onEditClick:b().func.isRequired};const le=$;var ue=v(80831),X=v(75146),Q=v(34626),ne=v(19408),ee=v(68115),ce=v(59626),k=v(53209);const de=k.Ry().shape({options:k.Ry().shape({from:k.Ry().shape({name:k.Z_().required(o.translatedErrors.required),email:k.Z_().email(o.translatedErrors.email).required(o.translatedErrors.required)}).required(),response_email:k.Z_().email(o.translatedErrors.email),object:k.Z_().required(o.translatedErrors.required),message:k.Z_().required(o.translatedErrors.required)}).required(o.translatedErrors.required)}),re=({template:E,onToggle:T,onSubmit:O})=>{const{formatMessage:I}=(0,c.useIntl)();return m.createElement(X.ModalLayout,{onClose:T,labelledBy:`${I({id:(0,l.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${I({id:(0,l.OB)(E.display),defaultMessage:E.display})}`},m.createElement(X.ModalHeader,null,m.createElement(ee.Breadcrumbs,{label:`${I({id:(0,l.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${I({id:(0,l.OB)(E.display),defaultMessage:E.display})}`},m.createElement(ee.Crumb,null,I({id:(0,l.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})),m.createElement(ee.Crumb,null,I({id:(0,l.OB)(E.display),defaultMessage:E.display})))),m.createElement(ue.Formik,{onSubmit:O,initialValues:E,validateOnChange:!1,validationSchema:de,enableReinitialize:!0},({errors:B,values:L,handleChange:H,isSubmitting:_})=>{var R,F,Z,K,Y,J,q;return m.createElement(o.Form,null,m.createElement(X.ModalBody,null,m.createElement(Q.Grid,{gap:5},m.createElement(Q.GridItem,{col:6,s:12},m.createElement(o.GenericInput,{intlLabel:{id:(0,l.OB)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:H,value:L.options.from.name,error:(F=(R=B==null?void 0:B.options)==null?void 0:R.from)==null?void 0:F.name,type:"text"})),m.createElement(Q.GridItem,{col:6,s:12},m.createElement(o.GenericInput,{intlLabel:{id:(0,l.OB)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:H,value:L.options.from.email,error:(K=(Z=B==null?void 0:B.options)==null?void 0:Z.from)==null?void 0:K.email,type:"text"})),m.createElement(Q.GridItem,{col:6,s:12},m.createElement(o.GenericInput,{intlLabel:{id:(0,l.OB)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:H,value:L.options.response_email,error:(Y=B==null?void 0:B.options)==null?void 0:Y.response_email,type:"text"})),m.createElement(Q.GridItem,{col:6,s:12},m.createElement(o.GenericInput,{intlLabel:{id:(0,l.OB)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:H,value:L.options.object,error:(J=B==null?void 0:B.options)==null?void 0:J.object,type:"text"})),m.createElement(Q.GridItem,{col:12,s:12},m.createElement(ce.Textarea,{label:I({id:(0,l.OB)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),name:"options.message",onChange:H,value:L.options.message,error:((q=B==null?void 0:B.options)==null?void 0:q.message)&&I({id:B.options.message,defaultMessage:B.options.message})})))),m.createElement(X.ModalFooter,{startActions:m.createElement(ne.Button,{onClick:T,variant:"tertiary"},"Cancel"),endActions:m.createElement(ne.Button,{loading:_,type:"submit"},"Finish")}))}))};re.propTypes={template:b().shape({display:b().string,icon:b().string,options:b().shape({from:b().shape({name:b().string,email:b().string}),message:b().string,object:b().string,response_email:b().string})}).isRequired,onSubmit:b().func.isRequired,onToggle:b().func.isRequired};const fe=re;var pe=Object.defineProperty,me=Object.defineProperties,he=Object.getOwnPropertyDescriptors,oe=Object.getOwnPropertySymbols,ge=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,ae=(E,T,O)=>T in E?pe(E,T,{enumerable:!0,configurable:!0,writable:!0,value:O}):E[T]=O,ye=(E,T)=>{for(var O in T||(T={}))ge.call(T,O)&&ae(E,O,T[O]);if(oe)for(var O of oe(T))ve.call(T,O)&&ae(E,O,T[O]);return E},be=(E,T)=>me(E,he(T)),xe=(E,T,O)=>new Promise((I,B)=>{var L=R=>{try{_(O.next(R))}catch(F){B(F)}},H=R=>{try{_(O.throw(R))}catch(F){B(F)}},_=R=>R.done?I(R.value):Promise.resolve(R.value).then(L,H);_((O=O.apply(E,T)).next())});const Oe=()=>m.createElement(o.CheckPagePermissions,{permissions:s.Z.readEmailTemplates},m.createElement(Ee,null)),Ee=()=>{const{formatMessage:E}=(0,c.useIntl)(),{trackUsage:T}=(0,o.useTracking)(),{notifyStatus:O}=(0,n.useNotifyAT)(),I=(0,o.useNotification)(),{lockApp:B,unlockApp:L}=(0,o.useOverlayBlocker)(),H=(0,m.useRef)(T),_=(0,M.useQueryClient)();(0,o.useFocusWhenNavigate)();const[R,F]=(0,m.useState)(!1),[Z,K]=(0,m.useState)(null),Y=(0,m.useMemo)(()=>({update:s.Z.updateEmailTemplates}),[]),{isLoading:J,allowedActions:{canUpdate:q}}=(0,o.useRBAC)(Y),{status:Pe,data:ie}=(0,M.useQuery)("email-templates",()=>d(),{onSuccess(){O(E({id:(0,l.OB)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(){I({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Se=J||Pe!=="success",te=()=>{F(G=>!G)},Me=G=>{K(G),te()},se=(0,M.useMutation)(G=>h({"email-templates":G}),{onSuccess(){return xe(this,null,function*(){yield _.invalidateQueries("email-templates"),I({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),H.current("didEditEmailTemplates"),L(),te()})},onError(){I({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),L()},refetchActive:!0}),{isLoading:we}=se,je=G=>{B(),H.current("willEditEmailTemplates");const Be=be(ye({},ie),{[Z]:G});se.mutate(Be)};return Se?m.createElement(e.Main,{"aria-busy":"true"},m.createElement(o.SettingsPageTitle,{name:E({id:(0,l.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),m.createElement(r.HeaderLayout,{title:E({id:(0,l.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),m.createElement(r.ContentLayout,null,m.createElement(o.LoadingIndicatorPage,null))):m.createElement(e.Main,{"aria-busy":we},m.createElement(o.SettingsPageTitle,{name:E({id:(0,l.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),m.createElement(r.HeaderLayout,{title:E({id:(0,l.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),m.createElement(r.ContentLayout,null,m.createElement(le,{onEditClick:Me,canUpdate:q}),R&&m.createElement(fe,{template:ie[Z],onToggle:te,onSubmit:je})))},Te=Oe},46979:(z,W,v)=>{"use strict";v.d(W,{Z:()=>r});var m=v(9669),M=v.n(m),c=v(68547),o=v.n(c),n=(s,l,u)=>new Promise((d,h)=>{var g=p=>{try{f(u.next(p))}catch(x){h(x)}},b=p=>{try{f(u.throw(p))}catch(x){h(x)}},f=p=>p.done?d(p.value):Promise.resolve(p.value).then(g,b);f((u=u.apply(s,l)).next())});const e=M().create({baseURL:""});e.interceptors.request.use(s=>n(void 0,null,function*(){return s.headers={Authorization:`Bearer ${c.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},s}),s=>{Promise.reject(s)}),e.interceptors.response.use(s=>s,s=>{var l;throw((l=s.response)==null?void 0:l.status)===401&&(c.auth.clearAppStorage(),window.location.reload()),s});const r=e},89031:(z,W,v)=>{"use strict";v.d(W,{be:()=>m.Z,YX:()=>o,Gc:()=>r,OB:()=>s.Z});var m=v(46979),M=v(96486);const o=l=>Object.keys(l).reduce((u,d)=>{const h=l[d].controllers,g=Object.keys(h).reduce((b,f)=>((0,M.isEmpty)(h[f])||(b[f]=h[f]),b),{});return(0,M.isEmpty)(g)||(u[d]={controllers:g}),u},{});var n=v(31498);const r=l=>`/${n.Z}/${l}`;var s=v(84757)}}]);
