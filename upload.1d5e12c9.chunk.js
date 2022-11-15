(self.webpackChunkstartup_backend=self.webpackChunkstartup_backend||[]).push([[3650],{85104:(K,te,g)=>{"use strict";K.exports=g(74879)},74879:function(K,te,g){(function(s,U){K.exports=U(g(67294),g(78384),g(39711),g(43257))})(this,function(s,U,l,x){return function(e){var o={};function t(i){if(o[i])return o[i].exports;var a=o[i]={i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=o,t.d=function(i,a,c){t.o(i,a)||Object.defineProperty(i,a,{enumerable:!0,get:c})},t.r=function(i){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},t.t=function(i,a){if(1&a&&(i=t(i)),8&a||4&a&&typeof i=="object"&&i&&i.__esModule)return i;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:i}),2&a&&typeof i!="string")for(var u in i)t.d(c,u,function(y){return i[y]}.bind(null,u));return c},t.n=function(i){var a=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(a,"a",a),a},t.o=function(i,a){return Object.prototype.hasOwnProperty.call(i,a)},t.p="",t(t.s=119)}({0:function(e,o,t){e.exports=t(21)()},1:function(e,o){e.exports=s},11:function(e,o,t){var i=t(27),a=t(28),c=t(24),u=t(29);e.exports=function(y,O){return i(y)||a(y,O)||c(y,O)||u()},e.exports.default=e.exports,e.exports.__esModule=!0},119:function(e,o,t){"use strict";t.r(o),t.d(o,"Link",function(){return re});var i,a,c=t(5),u=t.n(c),y=t(4),O=t.n(y),E=t(3),b=t.n(E),D=t(1),v=t.n(D),A=t(0),F=t.n(A),R=t(2),r=t.n(R),p=t(87),n=t.n(p),d=t(40),S=t(9),z=t(6),Y=t(18),ie=["href","to","children","disabled","startIcon","endIcon"],w=r.a.a(i||(i=b()([`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: `,`;
  color: `,`;

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: `,`rem;
  }

  `,` {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: `,`;
  }

  &:active {
    color: `,`;
  }

  `,`;
`])),function(B){return B.disabled?"none":void 0},function(B){var $=B.disabled,N=B.theme;return $?N.colors.neutral600:N.colors.primary600},.625,S.Typography,function(B){return B.theme.colors.primary500},function(B){return B.theme.colors.primary700},Y.a),ne=r()(z.Box)(a||(a=b()([`
  display: flex;
`]))),re=function(B){var $=B.href,N=B.to,he=B.children,V=B.disabled,le=B.startIcon,ue=B.endIcon,ye=O()(B,ie),be=$?"_blank":void 0,de=$?"noreferrer noopener":void 0;return v.a.createElement(w,u()({as:N&&!V?d.NavLink:"a",target:be,rel:de,to:V?void 0:N,href:V?"#":$,disabled:V},ye),le&&v.a.createElement(ne,{as:"span","aria-hidden":!0,paddingRight:2},le),v.a.createElement(S.Typography,null,he),ue&&!$&&v.a.createElement(ne,{as:"span","aria-hidden":!0,paddingLeft:2},ue),$&&v.a.createElement(ne,{as:"span","aria-hidden":!0,paddingLeft:2},v.a.createElement(n.a,null)))};re.displayName="Link",re.defaultProps={href:void 0,to:void 0,disabled:!1},re.propTypes={children:F.a.node.isRequired,disabled:F.a.bool,endIcon:F.a.element,href:function(B){if(!B.disabled&&!B.to&&!B.href)return new Error("href must be defined")},startIcon:F.a.element,to:function(B){if(!B.disabled&&!B.href&&!B.to)return new Error("to must be defined")}}},13:function(e,o,t){"use strict";t.d(o,"a",function(){return a}),t.d(o,"c",function(){return c}),t.d(o,"b",function(){return u});var i=t(8),a=function(y){return y.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},c=function(y){var O=y.variant,E=y.theme;switch(O){case i.a:return`
        font-weight: `.concat(E.fontWeights.bold,`;
        font-size: `).concat(E.fontSizes[5],`;
        line-height: `).concat(E.lineHeights[2],`;
      `);case i.b:return`
        font-weight: `.concat(E.fontWeights.bold,`;
        font-size: `).concat(E.fontSizes[4],`;
        line-height: `).concat(E.lineHeights[1],`;
      `);case i.c:return`
        font-weight: `.concat(E.fontWeights.semiBold,`;
        font-size: `).concat(E.fontSizes[3],`;
        line-height: `).concat(E.lineHeights[2],`;
      `);case i.d:return`
        font-size: `.concat(E.fontSizes[3],`;
        line-height: `).concat(E.lineHeights[6],`;
      `);case i.e:return`
        font-size: `.concat(E.fontSizes[2],`;
        line-height: `).concat(E.lineHeights[4],`;
      `);case i.f:return`
        font-size: `.concat(E.fontSizes[1],`;
        line-height: `).concat(E.lineHeights[3],`;
      `);case i.g:return`
        font-weight: `.concat(E.fontWeights.bold,`;
        font-size: `).concat(E.fontSizes[0],`;
        line-height: `).concat(E.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(E.fontSizes[2],`;
      `)}},u=function(y){var O=y.theme,E=y.textColor;return O.colors[E||"neutral800"]}},15:function(e,o){function t(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(e.exports=t=function(a){return typeof a},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},e.exports.default=e.exports,e.exports.__esModule=!0),t(i)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},18:function(e,o,t){"use strict";t.d(o,"b",function(){return i}),t.d(o,"c",function(){return a}),t.d(o,"a",function(){return c});var i=function(u){return function(y){var O=y.theme,E=y.size;return O.sizes[u][E]}},a=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"&";return function(y){var O=y.theme,E=y.hasError;return`
      outline: none;
      box-shadow: 0;
      transition-property: border-color, box-shadow, fill;
      transition-duration: 0.2s;

      `.concat(u,`:focus-within {
        border: 1px solid `).concat(E?O.colors.danger600:O.colors.primary600,`;
        box-shadow: `).concat(E?O.colors.danger600:O.colors.primary600,` 0px 0px 0px 2px;
      }
    `)}},c=function(u){var y=u.theme;return`
  position: relative;
  outline: none;
  
  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid `.concat(y.colors.primary600,`;
    }
  }
`)}},2:function(e,o){e.exports=U},21:function(e,o,t){"use strict";var i=t(22);function a(){}function c(){}c.resetWarningCache=a,e.exports=function(){function u(E,b,D,v,A,F){if(F!==i){var R=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw R.name="Invariant Violation",R}}function y(){return u}u.isRequired=u;var O={array:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:y,element:u,elementType:u,instanceOf:y,node:u,objectOf:y,oneOf:y,oneOfType:y,shape:y,exact:y,checkPropTypes:c,resetWarningCache:a};return O.PropTypes=O,O}},22:function(e,o,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},23:function(e,o){e.exports=function(t,i){(i==null||i>t.length)&&(i=t.length);for(var a=0,c=new Array(i);a<i;a++)c[a]=t[a];return c},e.exports.default=e.exports,e.exports.__esModule=!0},24:function(e,o,t){var i=t(23);e.exports=function(a,c){if(a){if(typeof a=="string")return i(a,c);var u=Object.prototype.toString.call(a).slice(8,-1);return u==="Object"&&a.constructor&&(u=a.constructor.name),u==="Map"||u==="Set"?Array.from(a):u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)?i(a,c):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},26:function(e,o){e.exports=function(t,i){if(t==null)return{};var a,c,u={},y=Object.keys(t);for(c=0;c<y.length;c++)a=y[c],i.indexOf(a)>=0||(u[a]=t[a]);return u},e.exports.default=e.exports,e.exports.__esModule=!0},27:function(e,o){e.exports=function(t){if(Array.isArray(t))return t},e.exports.default=e.exports,e.exports.__esModule=!0},28:function(e,o){e.exports=function(t,i){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var c,u,y=[],O=!0,E=!1;try{for(a=a.call(t);!(O=(c=a.next()).done)&&(y.push(c.value),!i||y.length!==i);O=!0);}catch(b){E=!0,u=b}finally{try{O||a.return==null||a.return()}finally{if(E)throw u}}return y}},e.exports.default=e.exports,e.exports.__esModule=!0},29:function(e,o){e.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},e.exports.default=e.exports,e.exports.__esModule=!0},3:function(e,o){e.exports=function(t,i){return i||(i=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(i)}}))},e.exports.default=e.exports,e.exports.__esModule=!0},4:function(e,o,t){var i=t(26);e.exports=function(a,c){if(a==null)return{};var u,y,O=i(a,c);if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(a);for(y=0;y<E.length;y++)u=E[y],c.indexOf(u)>=0||Object.prototype.propertyIsEnumerable.call(a,u)&&(O[u]=a[u])}return O},e.exports.default=e.exports,e.exports.__esModule=!0},40:function(e,o){e.exports=l},5:function(e,o){function t(){return e.exports=t=Object.assign||function(i){for(var a=1;a<arguments.length;a++){var c=arguments[a];for(var u in c)Object.prototype.hasOwnProperty.call(c,u)&&(i[u]=c[u])}return i},e.exports.default=e.exports,e.exports.__esModule=!0,t.apply(this,arguments)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},6:function(e,o,t){"use strict";t.r(o),t.d(o,"Box",function(){return p});var i,a=t(3),c=t.n(a),u=t(2),y=t.n(u),O=t(7),E=t(1),b=t.n(E),D=t(0),v=t.n(D),A=function(n){return b.a.createElement("div",n)},F={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},R={_hover:v.a.func,background:v.a.string,basis:v.a.oneOfType([v.a.string,v.a.string]),borderColor:v.a.string,children:v.a.oneOfType([v.a.node,v.a.string]),color:v.a.string,flex:v.a.oneOfType([v.a.string,v.a.string]),grow:v.a.oneOfType([v.a.string,v.a.string]),hasRadius:v.a.bool,hiddenS:v.a.bool,hiddenXS:v.a.bool,padding:v.a.oneOfType([v.a.number,v.a.arrayOf(v.a.number)]),paddingBottom:v.a.oneOfType([v.a.number,v.a.arrayOf(v.a.number)]),paddingLeft:v.a.oneOfType([v.a.number,v.a.arrayOf(v.a.number)]),paddingRight:v.a.oneOfType([v.a.number,v.a.arrayOf(v.a.number)]),paddingTop:v.a.oneOfType([v.a.number,v.a.arrayOf(v.a.number)]),shadow:v.a.string,shrink:v.a.oneOfType([v.a.string,v.a.string])};A.defaultProps=F,A.propTypes=R;var r={color:!0},p=y.a.div.withConfig({shouldForwardProp:function(n,d){return!r[n]&&d(n)}})(i||(i=c()([`
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
`])),function(n){var d=n.fontSize;return n.theme.fontSizes[d]||d},function(n){var d=n.theme,S=n.background;return d.colors[S]},function(n){var d=n.theme,S=n.color;return d.colors[S]},function(n){var d=n.theme,S=n.padding;return Object(O.a)("padding",S,d)},function(n){var d=n.theme,S=n.paddingTop;return Object(O.a)("padding-top",S,d)},function(n){var d=n.theme,S=n.paddingRight;return Object(O.a)("padding-right",S,d)},function(n){var d=n.theme,S=n.paddingBottom;return Object(O.a)("padding-bottom",S,d)},function(n){var d=n.theme,S=n.paddingLeft;return Object(O.a)("padding-left",S,d)},function(n){var d=n.theme,S=n.marginLeft;return Object(O.a)("margin-left",S,d)},function(n){var d=n.theme,S=n.marginRight;return Object(O.a)("margin-right",S,d)},function(n){var d=n.theme,S=n.marginTop;return Object(O.a)("margin-top",S,d)},function(n){var d=n.theme,S=n.marginBottom;return Object(O.a)("margin-bottom",S,d)},function(n){var d=n.theme;return n.hiddenS?"".concat(d.mediaQueries.tablet," { display: none; }"):void 0},function(n){var d=n.theme;return n.hiddenXS?"".concat(d.mediaQueries.mobile," { display: none; }"):void 0},function(n){var d=n.theme,S=n.hasRadius,z=n.borderRadius;return S?d.borderRadius:z},function(n){return n.borderStyle},function(n){return n.borderWidth},function(n){var d=n.borderColor;return n.theme.colors[d]},function(n){var d=n.theme,S=n.borderColor,z=n.borderStyle,Y=n.borderWidth;if(S&&!z&&!Y)return"1px solid ".concat(d.colors[S])},function(n){var d=n.theme,S=n.shadow;return d.shadows[S]},function(n){return n.pointerEvents},function(n){var d=n._hover,S=n.theme;return d?d(S):void 0},function(n){return n.display},function(n){return n.position},function(n){var d=n.left;return n.theme.spaces[d]||d},function(n){var d=n.right;return n.theme.spaces[d]||d},function(n){var d=n.top;return n.theme.spaces[d]||d},function(n){var d=n.bottom;return n.theme.spaces[d]||d},function(n){return n.zIndex},function(n){return n.overflow},function(n){return n.cursor},function(n){var d=n.width;return n.theme.spaces[d]||d},function(n){var d=n.maxWidth;return n.theme.spaces[d]||d},function(n){var d=n.minWidth;return n.theme.spaces[d]||d},function(n){var d=n.height;return n.theme.spaces[d]||d},function(n){var d=n.maxHeight;return n.theme.spaces[d]||d},function(n){var d=n.minHeight;return n.theme.spaces[d]||d},function(n){return n.transition},function(n){return n.transform},function(n){return n.animation},function(n){return n.shrink},function(n){return n.grow},function(n){return n.basis},function(n){return n.flex},function(n){return n.textAlign},function(n){return n.textTransform},function(n){return n.lineHeight},function(n){return n.cursor});p.defaultProps=F,p.propTypes=R},7:function(e,o,t){"use strict";var i=t(11),a=t.n(i),c=t(15),u=t.n(c);o.a=function(y,O,E){var b=O;if(Array.isArray(O)||u()(O)!=="object"||(b=[O==null?void 0:O.desktop,O==null?void 0:O.tablet,O==null?void 0:O.mobile]),b!==void 0){if(Array.isArray(b)){var D=b,v=a()(D,3),A=v[0],F=v[1],R=v[2],r="".concat(y,": ").concat(E.spaces[A],";");return F!==void 0&&(r+="".concat(E.mediaQueries.tablet,`{
          `).concat(y,": ").concat(E.spaces[F],`;
        }`)),R!==void 0&&(r+="".concat(E.mediaQueries.mobile,`{
          `).concat(y,": ").concat(E.spaces[R],`;
        }`)),r}var p=E.spaces[b]||b;return"".concat(y,": ").concat(p,";")}}},8:function(e,o,t){"use strict";t.d(o,"a",function(){return i}),t.d(o,"b",function(){return a}),t.d(o,"c",function(){return c}),t.d(o,"d",function(){return u}),t.d(o,"e",function(){return y}),t.d(o,"f",function(){return O}),t.d(o,"g",function(){return E}),t.d(o,"h",function(){return b});var i="alpha",a="beta",c="delta",u="epsilon",y="omega",O="pi",E="sigma",b=[i,a,c,u,y,O,E]},87:function(e,o){e.exports=x},9:function(e,o,t){"use strict";t.r(o),t.d(o,"Typography",function(){return n});var i,a=t(3),c=t.n(a),u=t(2),y=t.n(u),O=t(13),E=t(1),b=t.n(E),D=t(0),v=t.n(D),A=t(8),F=function(d){return b.a.createElement("div",d)},R={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textAlign:void 0,textTransform:void 0,variant:A.e},r={ellipsis:v.a.bool,fontSize:v.a.oneOfType([v.a.number,v.a.string]),fontWeight:v.a.string,lineHeight:v.a.oneOfType([v.a.number,v.a.string]),textAlign:v.a.string,textColor:v.a.string,textTransform:v.a.string,variant:v.a.oneOf(A.h)};F.defaultProps=R,F.propTypes=r;var p={fontSize:!0,fontWeight:!0},n=y.a.span.withConfig({shouldForwardProp:function(d,S){return!p[d]&&S(d)}})(i||(i=c()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-align: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(d){var S=d.theme,z=d.fontWeight;return S.fontWeights[z]},function(d){var S=d.theme,z=d.fontSize;return S.fontSizes[z]},function(d){var S=d.theme,z=d.lineHeight;return S.lineHeights[z]},O.b,function(d){return d.textAlign},function(d){return d.textTransform},O.a,O.c);n.defaultProps=R,n.propTypes=r}})})},62031:(K,te,g)=>{"use strict";K.exports=g(59525)},59525:function(K,te,g){(function(s,U){K.exports=U(g(67294),g(78384))})(this,function(s,U){return function(l){var x={};function e(o){if(x[o])return x[o].exports;var t=x[o]={i:o,l:!1,exports:{}};return l[o].call(t.exports,t,t.exports,e),t.l=!0,t.exports}return e.m=l,e.c=x,e.d=function(o,t,i){e.o(o,t)||Object.defineProperty(o,t,{enumerable:!0,get:i})},e.r=function(o){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},e.t=function(o,t){if(1&t&&(o=e(o)),8&t||4&t&&typeof o=="object"&&o&&o.__esModule)return o;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:o}),2&t&&typeof o!="string")for(var a in o)e.d(i,a,function(c){return o[c]}.bind(null,a));return i},e.n=function(o){var t=o&&o.__esModule?function(){return o.default}:function(){return o};return e.d(t,"a",t),t},e.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)},e.p="",e(e.s=113)}({0:function(l,x,e){l.exports=e(21)()},1:function(l,x){l.exports=s},11:function(l,x,e){var o=e(27),t=e(28),i=e(24),a=e(29);l.exports=function(c,u){return o(c)||t(c,u)||i(c,u)||a()},l.exports.default=l.exports,l.exports.__esModule=!0},113:function(l,x,e){"use strict";e.r(x),e.d(x,"Main",function(){return r}),e.d(x,"SkipToContent",function(){return S});var o,t=e(5),i=e.n(t),a=e(4),c=e.n(a),u=e(3),y=e.n(u),O=e(1),E=e.n(O),b=e(0),D=e.n(b),v=e(2),A=e.n(v),F=["labelledBy"],R=A.a.main(o||(o=y()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),r=function(z){var Y=z.labelledBy,ie=c()(z,F),w=Y||"main-content-title";return E.a.createElement(R,i()({"aria-labelledby":w,id:"main-content",tabIndex:-1},ie))};r.defaultProps={labelledBy:void 0},r.propTypes={labelledBy:D.a.string};var p,n=e(6),d=A()(n.Box)(p||(p=y()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(z){return z.theme.spaces[3]},function(z){return z.theme.spaces[3]}),S=function(z){var Y=z.children;return E.a.createElement(d,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},Y)};S.propTypes={children:D.a.node.isRequired}},15:function(l,x){function e(o){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(l.exports=e=function(t){return typeof t},l.exports.default=l.exports,l.exports.__esModule=!0):(l.exports=e=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l.exports.default=l.exports,l.exports.__esModule=!0),e(o)}l.exports=e,l.exports.default=l.exports,l.exports.__esModule=!0},2:function(l,x){l.exports=U},21:function(l,x,e){"use strict";var o=e(22);function t(){}function i(){}i.resetWarningCache=t,l.exports=function(){function a(y,O,E,b,D,v){if(v!==o){var A=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw A.name="Invariant Violation",A}}function c(){return a}a.isRequired=a;var u={array:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:c,element:a,elementType:a,instanceOf:c,node:a,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:i,resetWarningCache:t};return u.PropTypes=u,u}},22:function(l,x,e){"use strict";l.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},23:function(l,x){l.exports=function(e,o){(o==null||o>e.length)&&(o=e.length);for(var t=0,i=new Array(o);t<o;t++)i[t]=e[t];return i},l.exports.default=l.exports,l.exports.__esModule=!0},24:function(l,x,e){var o=e(23);l.exports=function(t,i){if(t){if(typeof t=="string")return o(t,i);var a=Object.prototype.toString.call(t).slice(8,-1);return a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set"?Array.from(t):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?o(t,i):void 0}},l.exports.default=l.exports,l.exports.__esModule=!0},26:function(l,x){l.exports=function(e,o){if(e==null)return{};var t,i,a={},c=Object.keys(e);for(i=0;i<c.length;i++)t=c[i],o.indexOf(t)>=0||(a[t]=e[t]);return a},l.exports.default=l.exports,l.exports.__esModule=!0},27:function(l,x){l.exports=function(e){if(Array.isArray(e))return e},l.exports.default=l.exports,l.exports.__esModule=!0},28:function(l,x){l.exports=function(e,o){var t=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var i,a,c=[],u=!0,y=!1;try{for(t=t.call(e);!(u=(i=t.next()).done)&&(c.push(i.value),!o||c.length!==o);u=!0);}catch(O){y=!0,a=O}finally{try{u||t.return==null||t.return()}finally{if(y)throw a}}return c}},l.exports.default=l.exports,l.exports.__esModule=!0},29:function(l,x){l.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},l.exports.default=l.exports,l.exports.__esModule=!0},3:function(l,x){l.exports=function(e,o){return o||(o=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(o)}}))},l.exports.default=l.exports,l.exports.__esModule=!0},4:function(l,x,e){var o=e(26);l.exports=function(t,i){if(t==null)return{};var a,c,u=o(t,i);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(t);for(c=0;c<y.length;c++)a=y[c],i.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(u[a]=t[a])}return u},l.exports.default=l.exports,l.exports.__esModule=!0},5:function(l,x){function e(){return l.exports=e=Object.assign||function(o){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(o[a]=i[a])}return o},l.exports.default=l.exports,l.exports.__esModule=!0,e.apply(this,arguments)}l.exports=e,l.exports.default=l.exports,l.exports.__esModule=!0},6:function(l,x,e){"use strict";e.r(x),e.d(x,"Box",function(){return R});var o,t=e(3),i=e.n(t),a=e(2),c=e.n(a),u=e(7),y=e(1),O=e.n(y),E=e(0),b=e.n(E),D=function(r){return O.a.createElement("div",r)},v={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},A={_hover:b.a.func,background:b.a.string,basis:b.a.oneOfType([b.a.string,b.a.string]),borderColor:b.a.string,children:b.a.oneOfType([b.a.node,b.a.string]),color:b.a.string,flex:b.a.oneOfType([b.a.string,b.a.string]),grow:b.a.oneOfType([b.a.string,b.a.string]),hasRadius:b.a.bool,hiddenS:b.a.bool,hiddenXS:b.a.bool,padding:b.a.oneOfType([b.a.number,b.a.arrayOf(b.a.number)]),paddingBottom:b.a.oneOfType([b.a.number,b.a.arrayOf(b.a.number)]),paddingLeft:b.a.oneOfType([b.a.number,b.a.arrayOf(b.a.number)]),paddingRight:b.a.oneOfType([b.a.number,b.a.arrayOf(b.a.number)]),paddingTop:b.a.oneOfType([b.a.number,b.a.arrayOf(b.a.number)]),shadow:b.a.string,shrink:b.a.oneOfType([b.a.string,b.a.string])};D.defaultProps=v,D.propTypes=A;var F={color:!0},R=c.a.div.withConfig({shouldForwardProp:function(r,p){return!F[r]&&p(r)}})(o||(o=i()([`
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
`])),function(r){var p=r.fontSize;return r.theme.fontSizes[p]||p},function(r){var p=r.theme,n=r.background;return p.colors[n]},function(r){var p=r.theme,n=r.color;return p.colors[n]},function(r){var p=r.theme,n=r.padding;return Object(u.a)("padding",n,p)},function(r){var p=r.theme,n=r.paddingTop;return Object(u.a)("padding-top",n,p)},function(r){var p=r.theme,n=r.paddingRight;return Object(u.a)("padding-right",n,p)},function(r){var p=r.theme,n=r.paddingBottom;return Object(u.a)("padding-bottom",n,p)},function(r){var p=r.theme,n=r.paddingLeft;return Object(u.a)("padding-left",n,p)},function(r){var p=r.theme,n=r.marginLeft;return Object(u.a)("margin-left",n,p)},function(r){var p=r.theme,n=r.marginRight;return Object(u.a)("margin-right",n,p)},function(r){var p=r.theme,n=r.marginTop;return Object(u.a)("margin-top",n,p)},function(r){var p=r.theme,n=r.marginBottom;return Object(u.a)("margin-bottom",n,p)},function(r){var p=r.theme;return r.hiddenS?"".concat(p.mediaQueries.tablet," { display: none; }"):void 0},function(r){var p=r.theme;return r.hiddenXS?"".concat(p.mediaQueries.mobile," { display: none; }"):void 0},function(r){var p=r.theme,n=r.hasRadius,d=r.borderRadius;return n?p.borderRadius:d},function(r){return r.borderStyle},function(r){return r.borderWidth},function(r){var p=r.borderColor;return r.theme.colors[p]},function(r){var p=r.theme,n=r.borderColor,d=r.borderStyle,S=r.borderWidth;if(n&&!d&&!S)return"1px solid ".concat(p.colors[n])},function(r){var p=r.theme,n=r.shadow;return p.shadows[n]},function(r){return r.pointerEvents},function(r){var p=r._hover,n=r.theme;return p?p(n):void 0},function(r){return r.display},function(r){return r.position},function(r){var p=r.left;return r.theme.spaces[p]||p},function(r){var p=r.right;return r.theme.spaces[p]||p},function(r){var p=r.top;return r.theme.spaces[p]||p},function(r){var p=r.bottom;return r.theme.spaces[p]||p},function(r){return r.zIndex},function(r){return r.overflow},function(r){return r.cursor},function(r){var p=r.width;return r.theme.spaces[p]||p},function(r){var p=r.maxWidth;return r.theme.spaces[p]||p},function(r){var p=r.minWidth;return r.theme.spaces[p]||p},function(r){var p=r.height;return r.theme.spaces[p]||p},function(r){var p=r.maxHeight;return r.theme.spaces[p]||p},function(r){var p=r.minHeight;return r.theme.spaces[p]||p},function(r){return r.transition},function(r){return r.transform},function(r){return r.animation},function(r){return r.shrink},function(r){return r.grow},function(r){return r.basis},function(r){return r.flex},function(r){return r.textAlign},function(r){return r.textTransform},function(r){return r.lineHeight},function(r){return r.cursor});R.defaultProps=v,R.propTypes=A},7:function(l,x,e){"use strict";var o=e(11),t=e.n(o),i=e(15),a=e.n(i);x.a=function(c,u,y){var O=u;if(Array.isArray(u)||a()(u)!=="object"||(O=[u==null?void 0:u.desktop,u==null?void 0:u.tablet,u==null?void 0:u.mobile]),O!==void 0){if(Array.isArray(O)){var E=O,b=t()(E,3),D=b[0],v=b[1],A=b[2],F="".concat(c,": ").concat(y.spaces[D],";");return v!==void 0&&(F+="".concat(y.mediaQueries.tablet,`{
          `).concat(c,": ").concat(y.spaces[v],`;
        }`)),A!==void 0&&(F+="".concat(y.mediaQueries.mobile,`{
          `).concat(c,": ").concat(y.spaces[A],`;
        }`)),F}var R=y.spaces[O]||O;return"".concat(c,": ").concat(R,";")}}}})})},68717:function(K,te,g){(function(s,U){K.exports=U(g(67294))})(this,function(s){return function(U){var l={};function x(e){if(l[e])return l[e].exports;var o=l[e]={i:e,l:!1,exports:{}};return U[e].call(o.exports,o,o.exports,x),o.l=!0,o.exports}return x.m=U,x.c=l,x.d=function(e,o,t){x.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},x.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},x.t=function(e,o){if(1&o&&(e=x(e)),8&o||4&o&&typeof e=="object"&&e&&e.__esModule)return e;var t=Object.create(null);if(x.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&typeof e!="string")for(var i in e)x.d(t,i,function(a){return e[a]}.bind(null,i));return t},x.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return x.d(o,"a",o),o},x.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},x.p="",x(x.s=5)}({0:function(U,l){U.exports=s},5:function(U,l,x){"use strict";x.r(l);var e=x(0);function o(){return(o=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(t[c]=a[c])}return t}).apply(this,arguments)}l.default=function(t){return e.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),e.createElement("path",{d:"M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",fill:"#212134"}))}}})})},62694:(K,te,g)=>{"use strict";g.r(te),g.d(te,{default:()=>en});var s=g(67294),U=g(15482),l=g(97132),x=g(68547),e=g(39844),o=g(78384),t=g(49656),i=g(78862),a=g(62031),c=g(5493),u=g(14276),y=g(59522),O=g(26851),E=g(30741),b=g(49425),D=g(34626),v=g(67826),A=g(19352),F=g.n(A),R=g(33012),r=g(78971),p=g(63509),n=g(6277),d=g(9383),S=g(27954),z=g(73817),Y=g(44466),ie=g(45697),w=g.n(ie);const ne=({pagination:h})=>s.createElement(c.Box,{paddingTop:6},s.createElement(v.Flex,{alignItems:"flex-end",justifyContent:"space-between"},s.createElement(x.PageSizeURLQuery,null),s.createElement(x.PaginationURLQuery,{pagination:h})));ne.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},ne.propTypes={pagination:w().shape({page:w().number,pageCount:w().number,pageSize:w().number,total:w().number})};var re=g(31817),B=g(42047),$=g(9008),N=g(49826),he=g(15537),V=g(19408),le=g(18568),ue=g.n(le),ye=g(2967),be=(h,f,m)=>new Promise((j,M)=>{var C=P=>{try{T(m.next(P))}catch(H){M(H)}},I=P=>{try{T(m.throw(P))}catch(H){M(H)}},T=P=>P.done?j(P.value):Promise.resolve(P.value).then(C,I);T((m=m.apply(h,f)).next())});const de=({selected:h,onSuccess:f})=>{const{formatMessage:m}=(0,l.useIntl)(),[j,M]=(0,s.useState)(!1),{isLoading:C,remove:I}=(0,ye.K)(),T=()=>be(void 0,null,function*(){yield I(h),f()});return s.createElement(s.Fragment,null,s.createElement(V.Button,{variant:"danger-light",size:"S",startIcon:s.createElement(ue(),null),onClick:()=>M(!0)},m({id:"global.delete",defaultMessage:"Delete"})),s.createElement(x.ConfirmDialog,{isConfirmButtonLoading:C,isOpen:j,onToggleDialog:()=>M(!1),onConfirm:T}))};de.propTypes={selected:w().arrayOf(N.pw,N.nx).isRequired,onSuccess:w().func.isRequired};var nt=g(55874),rt=g.n(nt),ot=g(80831),at=g(41609),it=g.n(at),st=g(40064),oe=g(75146),lt=g(91767),Fe=g(23724),xe=g(55994),ut=Object.defineProperty,dt=Object.defineProperties,ct=Object.getOwnPropertyDescriptors,Ae=Object.getOwnPropertySymbols,ft=Object.prototype.hasOwnProperty,pt=Object.prototype.propertyIsEnumerable,Ie=(h,f,m)=>f in h?ut(h,f,{enumerable:!0,configurable:!0,writable:!0,value:m}):h[f]=m,Re=(h,f)=>{for(var m in f||(f={}))ft.call(f,m)&&Ie(h,m,f[m]);if(Ae)for(var m of Ae(f))pt.call(f,m)&&Ie(h,m,f[m]);return h},ze=(h,f)=>dt(h,ct(f));const mt=()=>{const h=(0,x.useNotification)(),f=(0,Fe.useQueryClient)(),m=(0,e.IF)("actions/bulk-move"),j=({destinationFolderId:I,filesAndFolders:T})=>{const P=T.reduce((H,Z)=>{const{id:k,type:W}=Z,X=W==="asset"?"fileIds":"folderIds";return H[X]||(H[X]=[]),H[X].push(k),H},{});return e.be.post(m,ze(Re({},P),{destinationFolderId:I}))},M=(0,Fe.useMutation)(j,{onSuccess(I){var T;const{data:{data:P}}=I;((T=P==null?void 0:P.files)==null?void 0:T.length)>0&&(f.refetchQueries([xe.Z,"assets"],{active:!0}),f.refetchQueries([xe.Z,"asset-count"],{active:!0})),f.refetchQueries([xe.Z,"folders"],{active:!0}),h({type:"success",message:{id:(0,e.OB)("modal.move.success-label"),defaultMessage:"Elements have been moved successfully."}})}}),C=(I,T)=>M.mutateAsync({destinationFolderId:I,filesAndFolders:T});return ze(Re({},M),{move:C})};var gt=g(66951),vt=g(20796),ht=(h,f,m)=>new Promise((j,M)=>{var C=P=>{try{T(m.next(P))}catch(H){M(H)}},I=P=>{try{T(m.throw(P))}catch(H){M(H)}},T=P=>P.done?j(P.value):Promise.resolve(P.value).then(C,I);T((m=m.apply(h,f)).next())});const Oe=({onClose:h,selected:f,currentFolder:m})=>{const{formatMessage:j}=(0,l.useIntl)(),{data:M,isLoading:C}=(0,vt.v)(),{move:I}=mt();if(!M)return null;const T=(Z,k)=>ht(void 0,[Z,k],function*(W,{setErrors:X}){try{yield I(W.destination.value,f),h()}catch(me){const Q=(0,x.getAPIInnerErrors)(me,{getTrad:e.OB}),se=Object.entries(Q).reduce((ee,[G,Te])=>(ee[G||"destination"]=Te.defaultMessage,ee),{});it()(se)||X(se)}}),P=()=>{h()};if(C)return s.createElement(oe.ModalLayout,{onClose:P,labelledBy:"title"},s.createElement(oe.ModalBody,null,s.createElement(v.Flex,{justifyContent:"center",paddingTop:4,paddingBottom:4},s.createElement(st.Loader,null,j({id:(0,e.OB)("content.isLoading"),defaultMessage:"Content is loading."})))));const H={destination:{value:(m==null?void 0:m.id)||"",label:(m==null?void 0:m.name)||M[0].label}};return s.createElement(oe.ModalLayout,{onClose:P,labelledBy:"title"},s.createElement(ot.Formik,{validateOnChange:!1,onSubmit:T,initialValues:H},({values:Z,errors:k,setFieldValue:W})=>s.createElement(x.Form,{noValidate:!0},s.createElement(oe.ModalHeader,null,s.createElement(b.Typography,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},j({id:(0,e.OB)("modal.folder.move.title"),defaultMessage:"Move elements to"}))),s.createElement(oe.ModalBody,null,s.createElement(D.Grid,{gap:4},s.createElement(D.GridItem,{xs:12,col:12},s.createElement($.Stack,{spacing:1},s.createElement(lt.FieldLabel,{htmlFor:"folder-destination"},j({id:(0,e.OB)("form.input.label.folder-location"),defaultMessage:"Location"})),s.createElement(gt.Z,{options:M,onChange:X=>{W("destination",X)},defaultValue:Z.destination,name:"destination",menuPortalTarget:document.querySelector("body"),inputId:"folder-destination",error:k==null?void 0:k.destination,ariaErrorMessage:"destination-error"}),k.destination&&s.createElement(b.Typography,{variant:"pi",as:"p",id:"folder-destination-error",textColor:"danger600"},k.destination))))),s.createElement(oe.ModalFooter,{startActions:s.createElement(V.Button,{onClick:P,variant:"tertiary",name:"cancel"},j({id:"cancel",defaultMessage:"Cancel"})),endActions:s.createElement(V.Button,{type:"submit",loading:C},j({id:"modal.folder.move.submit",defaultMessage:"Move"}))}))))};Oe.defaultProps={currentFolder:void 0},Oe.propTypes={onClose:w().func.isRequired,currentFolder:N.nx,selected:w().arrayOf(N.nx,N.pw).isRequired};const Ee=({selected:h,onSuccess:f,currentFolder:m})=>{const{formatMessage:j}=(0,l.useIntl)(),[M,C]=(0,s.useState)(!1),I=()=>{C(!1),f()};return s.createElement(s.Fragment,null,s.createElement(V.Button,{variant:"secondary",size:"S",startIcon:s.createElement(rt(),null),onClick:()=>C(!0)},j({id:"global.move",defaultMessage:"Move"})),M&&s.createElement(Oe,{currentFolder:m,onClose:I,selected:h}))};Ee.defaultProps={currentFolder:void 0},Ee.propTypes={onSuccess:w().func.isRequired,currentFolder:N.nx,selected:w().arrayOf(N.pw,N.nx).isRequired};const Se=({selected:h,onSuccess:f,currentFolder:m})=>{const{formatMessage:j}=(0,l.useIntl)();return s.createElement($.Stack,{horizontal:!0,spacing:2,paddingBottom:5},s.createElement(b.Typography,{variant:"epsilon",textColor:"neutral600"},j({id:(0,he.Z)("list.assets.selected"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}} selected"},{numberFolders:h.filter(({type:M})=>M==="folder").length,numberAssets:h.filter(({type:M})=>M==="asset").length})),s.createElement(de,{selected:h,onSuccess:f}),s.createElement(Ee,{currentFolder:m,selected:h,onSuccess:f}))};Se.defaultProps={currentFolder:void 0},Se.propTypes={onSuccess:w().func.isRequired,currentFolder:N.nx,selected:w().arrayOf(N.pw,N.nx).isRequired};var ce=g(98101),yt=g(23980),bt=g.n(yt),xt=g(51386),Ot=g(45219),De=g(97581);const Et=()=>{var h;const f=(0,s.useRef)(null),[m,j]=(0,s.useState)(!1),{formatMessage:M}=(0,l.useIntl)(),{trackUsage:C}=(0,x.useTracking)(),[{query:I},T]=(0,x.useQueryParams)(),P=((h=I==null?void 0:I.filters)==null?void 0:h.$and)||[],H=()=>j(W=>!W),Z=W=>{T({filters:{$and:W},page:1})},k=W=>{C("didFilterMediaLibraryElements",{location:"content-manager",filter:Object.keys(W[W.length-1])[0]}),T({filters:{$and:W},page:1})};return s.createElement(s.Fragment,null,s.createElement(V.Button,{variant:"tertiary",ref:f,startIcon:s.createElement(bt(),null),onClick:H,size:"S"},M({id:"app.utils.filters",defaultMessage:"Filters"})),m&&s.createElement(Ot.Z,{displayedFilters:De.Z,filters:P,onSubmit:k,onToggle:H,source:f}),s.createElement(xt.Z,{appliedFilters:P,filtersSchema:De.Z,onRemoveFilter:Z}))};var St=g(80129),Pt=g(85104),Mt=g(68717),Tt=g.n(Mt),Ct=g(80768),Pe=g.n(Ct),jt=g(70168),Lt=Object.defineProperty,wt=Object.defineProperties,Bt=Object.getOwnPropertyDescriptors,He=Object.getOwnPropertySymbols,Ft=Object.prototype.hasOwnProperty,At=Object.prototype.propertyIsEnumerable,We=(h,f,m)=>f in h?Lt(h,f,{enumerable:!0,configurable:!0,writable:!0,value:m}):h[f]=m,It=(h,f)=>{for(var m in f||(f={}))Ft.call(f,m)&&We(h,m,f[m]);if(He)for(var m of He(f))At.call(f,m)&&We(h,m,f[m]);return h},Rt=(h,f)=>wt(h,Bt(f));const Me=({breadcrumbs:h,canCreate:f,folder:m,onToggleEditFolderDialog:j,onToggleUploadAssetDialog:M})=>{var C,I;const{formatMessage:T}=(0,l.useIntl)(),{pathname:P}=(0,t.useLocation)(),[{query:H}]=(0,x.useQueryParams)(),Z=Rt(It({},H),{folder:(I=(C=m==null?void 0:m.parent)==null?void 0:C.id)!=null?I:void 0});return s.createElement(i.HeaderLayout,{title:T({id:(0,e.OB)("plugin.name"),defaultMessage:"Media Library"}),subtitle:h&&m&&s.createElement(jt.O,{as:"nav",label:T({id:(0,e.OB)("header.breadcrumbs.nav.label"),defaultMessage:"Folders navigation"}),breadcrumbs:h,currentFolderId:m==null?void 0:m.id}),navigationAction:m&&s.createElement(Pt.Link,{startIcon:s.createElement(Tt(),null),to:`${P}?${(0,St.stringify)(Z,{encode:!1})}`},T({id:(0,e.OB)("header.actions.folder-level-up"),defaultMessage:"Back"})),primaryAction:f&&s.createElement($.Stack,{horizontal:!0,spacing:2},s.createElement(V.Button,{startIcon:s.createElement(Pe(),null),variant:"secondary",onClick:j},T({id:(0,e.OB)("header.actions.add-folder"),defaultMessage:"Add new folder"})),s.createElement(V.Button,{startIcon:s.createElement(Pe(),null),onClick:M},T({id:(0,e.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})))})};Me.defaultProps={breadcrumbs:!1,folder:null},Me.propTypes={breadcrumbs:w().oneOfType([N.Fv,w().bool]),canCreate:w().bool.isRequired,folder:N.nx,onToggleEditFolderDialog:w().func.isRequired,onToggleUploadAssetDialog:w().func.isRequired};var zt=g(80775),Dt=g.n(zt),Ht=g(70088),Wt=Object.defineProperty,Qt=Object.defineProperties,Nt=Object.getOwnPropertyDescriptors,Qe=Object.getOwnPropertySymbols,Ut=Object.prototype.hasOwnProperty,kt=Object.prototype.propertyIsEnumerable,Ne=(h,f,m)=>f in h?Wt(h,f,{enumerable:!0,configurable:!0,writable:!0,value:m}):h[f]=m,Vt=(h,f)=>{for(var m in f||(f={}))Ut.call(f,m)&&Ne(h,m,f[m]);if(Qe)for(var m of Qe(f))kt.call(f,m)&&Ne(h,m,f[m]);return h},$t=(h,f)=>Qt(h,Nt(f));const Zt=({isFiltering:h,canCreate:f,canRead:m})=>h?{id:"list.assets-empty.title-withSearch",defaultMessage:"There are no elements with the applied filters"}:m?f?{id:"list.assets.empty-upload",defaultMessage:"Upload your first assets..."}:{id:"list.assets.empty",defaultMessage:"Media Library is empty"}:{id:"header.actions.no-permissions",defaultMessage:"No permissions to view"},Ue=({canCreate:h,isFiltering:f,canRead:m,onActionClick:j})=>{const{formatMessage:M}=(0,l.useIntl)(),C=Zt({isFiltering:f,canCreate:h,canRead:m});return s.createElement(Ht.i,{icon:m?null:Dt(),action:h&&!f&&s.createElement(V.Button,{variant:"secondary",startIcon:s.createElement(Pe(),null),onClick:j},M({id:(0,e.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})),content:M($t(Vt({},C),{id:(0,e.OB)(C.id)}))})};Ue.propTypes={canCreate:w().bool.isRequired,canRead:w().bool.isRequired,isFiltering:w().bool.isRequired,onActionClick:w().func.isRequired};var Xt=Object.defineProperty,Gt=Object.defineProperties,Kt=Object.getOwnPropertyDescriptors,ke=Object.getOwnPropertySymbols,Yt=Object.prototype.hasOwnProperty,Jt=Object.prototype.propertyIsEnumerable,Ve=(h,f,m)=>f in h?Xt(h,f,{enumerable:!0,configurable:!0,writable:!0,value:m}):h[f]=m,fe=(h,f)=>{for(var m in f||(f={}))Yt.call(f,m)&&Ve(h,m,f[m]);if(ke)for(var m of ke(f))Jt.call(f,m)&&Ve(h,m,f[m]);return h},pe=(h,f)=>Gt(h,Kt(f));const qt=(0,o.default)(c.Box)`
  height: ${32/16}rem;
  display: flex;
  align-items: center;
`,$e=(0,o.default)(b.Typography)`
  max-width: 100%;
`,_t=()=>{var h,f,m,j;const{push:M}=(0,t.useHistory)(),{canRead:C,canCreate:I,canUpdate:T,canCopyLink:P,canDownload:H,isLoading:Z}=(0,re.y)(),k=(0,s.useRef)(),{formatMessage:W}=(0,l.useIntl)(),{pathname:X}=(0,t.useLocation)(),{trackUsage:me}=(0,x.useTracking)(),[{query:Q},se]=(0,x.useQueryParams)(),ee=Boolean(Q._q||Q.filters),{data:G,isLoading:Te,errors:tn}=(0,z.L)({skipWhen:!C,query:Q}),{data:ge,isLoading:nn,errors:rn}=(0,Y.j)({enabled:C&&((h=G==null?void 0:G.pagination)==null?void 0:h.page)===1&&!(0,e.rV)(Q),query:Q}),{data:Ce,isLoading:Ze,error:Xe}=(0,B.W)(Q==null?void 0:Q.folder,{enabled:C&&!!(Q!=null&&Q.folder)});((f=Xe==null?void 0:Xe.response)==null?void 0:f.status)===404&&M(X);const J=(ge==null?void 0:ge.length)||0,ve=G==null?void 0:G.results,q=(m=ve==null?void 0:ve.length)!=null?m:0,Ge=Ze||nn||Z||Te,[on,an]=(0,s.useState)(!1),[sn,Ke]=(0,s.useState)(!1),[Ye,Je]=(0,s.useState)(void 0),[je,qe]=(0,s.useState)(void 0),[_,{selectOne:Le,selectAll:_e}]=(0,x.useSelectionState)(["type","id"],[]),we=()=>an(L=>!L),et=({created:L=!1}={})=>{L&&(Q==null?void 0:Q.page)!=="1"&&se(pe(fe({},Q),{page:1})),Ke(ae=>!ae)},ln=L=>{me("didSortMediaLibraryElements",{location:"upload",sort:L}),se({sort:L})},un=L=>{qe(L),Ke(!0)},dn=L=>{qe(null),et(L),k.current&&k.current.focus()};return(0,x.useFocusWhenNavigate)(),s.createElement(i.Layout,null,s.createElement(a.Main,{"aria-busy":Ge},s.createElement(Me,{breadcrumbs:!Ze&&(0,e.M4)(Ce,{pathname:X,query:Q}),canCreate:I,onToggleEditFolderDialog:et,onToggleUploadAssetDialog:we,folder:Ce}),s.createElement(i.ActionLayout,{startActions:s.createElement(s.Fragment,null,T&&(q>0||J>0)&&s.createElement(qt,{paddingLeft:2,paddingRight:2,background:"neutral0",hasRadius:!0,borderColor:"neutral200"},s.createElement(y.BaseCheckbox,{"aria-label":W({id:(0,e.OB)("bulk.select.label"),defaultMessage:"Select all folders & assets"}),indeterminate:(_==null?void 0:_.length)>0&&(_==null?void 0:_.length)!==q+J,value:(q>0||J>0)&&_.length===q+J,onChange:L=>{L.target.checked&&me("didSelectAllMediaLibraryElements"),_e([...ve.map(ae=>pe(fe({},ae),{type:"asset"})),...ge.map(ae=>pe(fe({},ae),{type:"folder"}))])}})),C&&s.createElement(S.Z,{onChangeSort:ln}),C&&s.createElement(Et,null)),endActions:s.createElement(x.SearchURLQuery,{label:W({id:(0,e.OB)("search.label"),defaultMessage:"Search for an asset"}),trackedEvent:"didSearchMediaLibraryElements",trackedEventDetails:{location:"upload"}})}),s.createElement(i.ContentLayout,null,_.length>0&&s.createElement(Se,{currentFolder:Ce,selected:_,onSuccess:_e}),Ge&&s.createElement(x.LoadingIndicatorPage,null),(tn||rn)&&s.createElement(x.AnErrorOccurred,null),J===0&&q===0&&s.createElement(Ue,{canCreate:I,canRead:C,isFiltering:ee,onActionClick:we}),C&&s.createElement(s.Fragment,null,J>0&&s.createElement(d.$,{title:(ee&&q>0||!ee)&&W({id:(0,e.OB)("list.folders.title"),defaultMessage:"Folders ({count})"},{count:J})||""},ge.map(L=>{const cn=!!_.filter(({type:Be})=>Be==="folder").find(Be=>Be.id===L.id),tt=(0,e.Km)(X,Q,L);return s.createElement(D.GridItem,{col:3,key:`folder-${L.id}`},s.createElement(ce.Ac,{ref:je&&L.id===je.id?k:void 0,ariaLabel:L.name,id:`folder-${L.id}`,to:tt,startAction:Le&&s.createElement(ce.MM,{"data-testid":`folder-checkbox-${L.id}`,value:cn,onChange:()=>Le(pe(fe({},L),{type:"folder"}))}),cardActions:s.createElement(E.IconButton,{icon:s.createElement(F(),null),"aria-label":W({id:(0,e.OB)("list.folder.edit"),defaultMessage:"Edit folder"}),onClick:()=>un(L)})},s.createElement(ce.Bu,null,s.createElement(ce.u6,{to:tt},s.createElement(v.Flex,{as:"h2",direction:"column",alignItems:"start",maxWidth:"100%"},s.createElement($e,{fontWeight:"semiBold",ellipsis:!0},L.name,s.createElement(O.VisuallyHidden,null,":")),s.createElement($e,{as:"span",textColor:"neutral600",variant:"pi",ellipsis:!0},W({id:(0,e.OB)("list.folder.subtitle"),defaultMessage:"{folderCount, plural, =0 {# folder} one {# folder} other {# folders}}, {filesCount, plural, =0 {# asset} one {# asset} other {# assets}}"},{folderCount:L.children.count,filesCount:L.files.count})))))))})),q>0&&J>0&&s.createElement(c.Box,{paddingTop:6,paddingBottom:4},s.createElement(u.Divider,null)),q>0&&s.createElement(s.Fragment,null,s.createElement(n.l,{assets:ve,onEditAsset:Je,onSelectAsset:Le,selectedAssets:_.filter(({type:L})=>L==="asset"),title:(!ee||ee&&J>0)&&((j=G==null?void 0:G.pagination)==null?void 0:j.page)===1&&W({id:(0,e.OB)("list.assets.title"),defaultMessage:"Assets ({count})"},{count:q})||""}),(G==null?void 0:G.pagination)&&s.createElement(ne,{pagination:G.pagination}))))),on&&s.createElement(R.x,{onClose:we,trackedLocation:"upload",folderId:Q==null?void 0:Q.folder}),sn&&s.createElement(r.f,{onClose:dn,folder:je,parentFolderId:Q==null?void 0:Q.folder,location:"upload"}),Ye&&s.createElement(p.s,{onClose:()=>Je(void 0),asset:Ye,canUpdate:T,canCopyLink:P,canDownload:H,trackedLocation:"upload"}))},en=()=>{const[{rawQuery:h},f]=(0,x.useQueryParams)(),{formatMessage:m}=(0,l.useIntl)(),j=m({id:(0,e.OB)("plugin.name"),defaultMessage:"Media Library"});return(0,s.useEffect)(()=>{h||f({sort:"updatedAt:DESC",page:1,pageSize:10})},[h,f]),h?s.createElement(s.Fragment,null,s.createElement(U.Helmet,{title:j}),s.createElement(_t,null)):null}}}]);
