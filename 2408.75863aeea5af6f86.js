"use strict";var Ge=Object.defineProperty,Je=Object.defineProperties,Xe=Object.getOwnPropertyDescriptors,Ue=Object.getOwnPropertySymbols,He=Object.prototype.hasOwnProperty,Ye=Object.prototype.propertyIsEnumerable,Le=(ce,q,E)=>q in ce?Ge(ce,q,{enumerable:!0,configurable:!0,writable:!0,value:E}):ce[q]=E,oe=(ce,q)=>{for(var E in q||(q={}))He.call(q,E)&&Le(ce,E,q[E]);if(Ue)for(var E of Ue(q))Ye.call(q,E)&&Le(ce,E,q[E]);return ce},me=(ce,q)=>Je(ce,Xe(q));(self.webpackChunkesri4_pwa=self.webpackChunkesri4_pwa||[]).push([[2408,3100,3250],{50011:(ce,q,E)=>{E.d(q,{F:()=>P,M:()=>A});const A={Base64:0,Hex:1,String:2,Raw:3};function Z(r,z){const u=(65535&r)+(65535&z);return(r>>16)+(z>>16)+(u>>16)<<16|65535&u}function K(r,z,u,o,y,g){return Z(function W(r,z){return r<<z|r>>>32-z}(Z(Z(z,r),Z(o,g)),y),u)}function S(r,z,u,o,y,g,v){return K(z&u|~z&o,r,z,y,g,v)}function T(r,z,u,o,y,g,v){return K(z&o|u&~o,r,z,y,g,v)}function C(r,z,u,o,y,g,v){return K(z^u^o,r,z,y,g,v)}function I(r,z,u,o,y,g,v){return K(u^(z|~o),r,z,y,g,v)}function P(r,z=A.Hex){const u=z||A.Base64,o=function L(r,z){r[z>>5]|=128<<z%32,r[14+(z+64>>>9<<4)]=z;let u=1732584193,o=-271733879,y=-1732584194,g=271733878;for(let v=0;v<r.length;v+=16){const ee=u,R=o,N=y,J=g;u=S(u,o,y,g,r[v+0],7,-680876936),g=S(g,u,o,y,r[v+1],12,-389564586),y=S(y,g,u,o,r[v+2],17,606105819),o=S(o,y,g,u,r[v+3],22,-1044525330),u=S(u,o,y,g,r[v+4],7,-176418897),g=S(g,u,o,y,r[v+5],12,1200080426),y=S(y,g,u,o,r[v+6],17,-1473231341),o=S(o,y,g,u,r[v+7],22,-45705983),u=S(u,o,y,g,r[v+8],7,1770035416),g=S(g,u,o,y,r[v+9],12,-1958414417),y=S(y,g,u,o,r[v+10],17,-42063),o=S(o,y,g,u,r[v+11],22,-1990404162),u=S(u,o,y,g,r[v+12],7,1804603682),g=S(g,u,o,y,r[v+13],12,-40341101),y=S(y,g,u,o,r[v+14],17,-1502002290),o=S(o,y,g,u,r[v+15],22,1236535329),u=T(u,o,y,g,r[v+1],5,-165796510),g=T(g,u,o,y,r[v+6],9,-1069501632),y=T(y,g,u,o,r[v+11],14,643717713),o=T(o,y,g,u,r[v+0],20,-373897302),u=T(u,o,y,g,r[v+5],5,-701558691),g=T(g,u,o,y,r[v+10],9,38016083),y=T(y,g,u,o,r[v+15],14,-660478335),o=T(o,y,g,u,r[v+4],20,-405537848),u=T(u,o,y,g,r[v+9],5,568446438),g=T(g,u,o,y,r[v+14],9,-1019803690),y=T(y,g,u,o,r[v+3],14,-187363961),o=T(o,y,g,u,r[v+8],20,1163531501),u=T(u,o,y,g,r[v+13],5,-1444681467),g=T(g,u,o,y,r[v+2],9,-51403784),y=T(y,g,u,o,r[v+7],14,1735328473),o=T(o,y,g,u,r[v+12],20,-1926607734),u=C(u,o,y,g,r[v+5],4,-378558),g=C(g,u,o,y,r[v+8],11,-2022574463),y=C(y,g,u,o,r[v+11],16,1839030562),o=C(o,y,g,u,r[v+14],23,-35309556),u=C(u,o,y,g,r[v+1],4,-1530992060),g=C(g,u,o,y,r[v+4],11,1272893353),y=C(y,g,u,o,r[v+7],16,-155497632),o=C(o,y,g,u,r[v+10],23,-1094730640),u=C(u,o,y,g,r[v+13],4,681279174),g=C(g,u,o,y,r[v+0],11,-358537222),y=C(y,g,u,o,r[v+3],16,-722521979),o=C(o,y,g,u,r[v+6],23,76029189),u=C(u,o,y,g,r[v+9],4,-640364487),g=C(g,u,o,y,r[v+12],11,-421815835),y=C(y,g,u,o,r[v+15],16,530742520),o=C(o,y,g,u,r[v+2],23,-995338651),u=I(u,o,y,g,r[v+0],6,-198630844),g=I(g,u,o,y,r[v+7],10,1126891415),y=I(y,g,u,o,r[v+14],15,-1416354905),o=I(o,y,g,u,r[v+5],21,-57434055),u=I(u,o,y,g,r[v+12],6,1700485571),g=I(g,u,o,y,r[v+3],10,-1894986606),y=I(y,g,u,o,r[v+10],15,-1051523),o=I(o,y,g,u,r[v+1],21,-2054922799),u=I(u,o,y,g,r[v+8],6,1873313359),g=I(g,u,o,y,r[v+15],10,-30611744),y=I(y,g,u,o,r[v+6],15,-1560198380),o=I(o,y,g,u,r[v+13],21,1309151649),u=I(u,o,y,g,r[v+4],6,-145523070),g=I(g,u,o,y,r[v+11],10,-1120210379),y=I(y,g,u,o,r[v+2],15,718787259),o=I(o,y,g,u,r[v+9],21,-343485551),u=Z(u,ee),o=Z(o,R),y=Z(y,N),g=Z(g,J)}return[u,o,y,g]}(function X(r){const z=[];for(let u=0,o=8*r.length;u<o;u+=8)z[u>>5]|=(255&r.charCodeAt(u/8))<<u%32;return z}(r),8*r.length);switch(u){case A.Raw:return o;case A.Hex:return function j(r){const z="0123456789abcdef",u=[];for(let o=0,y=4*r.length;o<y;o++)u.push(z.charAt(r[o>>2]>>o%4*8+4&15)+z.charAt(r[o>>2]>>o%4*8&15));return u.join("")}(o);case A.String:return function te(r){const z=[];for(let u=0,o=32*r.length;u<o;u+=8)z.push(String.fromCharCode(r[u>>5]>>>u%32&255));return z.join("")}(o);case A.Base64:return function ne(r){const o=[];for(let y=0,g=4*r.length;y<g;y+=3){const v=(r[y>>2]>>y%4*8&255)<<16|(r[y+1>>2]>>(y+1)%4*8&255)<<8|r[y+2>>2]>>(y+2)%4*8&255;for(let ee=0;ee<4;ee++)o.push(8*y+6*ee>32*r.length?"=":"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(v>>6*(3-ee)&63))}return o.join("")}(o)}}},83100:(ce,q,E)=>{function A(W){return W=W||globalThis.location.hostname,ne.some(K=>{var S;return null!=(null==(S=W)?void 0:S.match(K))})}function Q(W,K){return W&&(K=K||globalThis.location.hostname)?null!=K.match(Z)||null!=K.match(te)?W.replace("static.arcgis.com","staticdev.arcgis.com"):null!=K.match(X)||null!=K.match(j)?W.replace("static.arcgis.com","staticqa.arcgis.com"):W:W}E.d(q,{pJ:()=>Q,XO:()=>A});const Z=/^devext.arcgis.com$/,X=/^qaext.arcgis.com$/,te=/^[\w-]*\.mapsdevext.arcgis.com$/,j=/^[\w-]*\.mapsqa.arcgis.com$/,ne=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,Z,X,/^jsapps.esri.com$/,te,j]},7848:(ce,q,E)=>{E.d(q,{ym:()=>ve,RF:()=>Y,vY:()=>j,J9:()=>Ve,U1:()=>Ee,Ie:()=>he,G6:()=>Te});var A=E(62208),Q=E(91179);const Z=(p,d,x)=>[d,x],X=(p,d,x)=>[d,x,p[2]],te=(p,d,x)=>[d,x,p[2],p[3]];function j(p){return p?{originPosition:"upper-left"===p.originPosition?"upperLeft":"lower-left"===p.originPosition?"lowerLeft":p.originPosition,scale:p.tolerance?[p.tolerance,p.tolerance]:[1,1],translate:(0,A.pC)(p.extent)?[p.extent.xmin,p.extent.ymax]:[0,0]}:null}function W({scale:p,translate:d},x){return Math.round((x-d[0])/p[0])}function K({scale:p,translate:d},x){return Math.round((d[1]-x)/p[1])}function S(p,d,x){const F=[];let D,re,se,ie;for(let pe=0;pe<x.length;pe++){const de=x[pe];pe>0?(se=W(p,de[0]),ie=K(p,de[1]),se===D&&ie===re||(F.push(d(de,se-D,ie-re)),D=se,re=ie)):(D=W(p,de[0]),re=K(p,de[1]),F.push(d(de,D,re)))}return F.length>0?F:null}function P({scale:p,translate:d},x){return x*p[0]+d[0]}function r({scale:p,translate:d},x){return d[1]-x*p[1]}function z(p,d,x){const F=new Array(x.length);if(!x.length)return F;const[D,re]=p.scale;let se=P(p,x[0][0]),ie=r(p,x[0][1]);F[0]=d(x[0],se,ie);for(let pe=1;pe<x.length;pe++){const de=x[pe];se+=de[0]*D,ie-=de[1]*re,F[pe]=d(de,se,ie)}return F}function u(p,d,x){const F=new Array(x.length);for(let D=0;D<x.length;D++)F[D]=z(p,d,x[D]);return F}function Y(p,d,x,F,D){return d.x=W(p,x.x),d.y=K(p,x.y),d!==x&&(F&&(d.z=x.z),D&&(d.m=x.m)),d}function ve(p,d){return p&&d?(0,Q.wp)(d)?Y(p,{},d,!1,!1):(0,Q.l9)(d)?function H(p,d,x,F,D){const re=function L(p,d,x,F){const D=[],re=x?F?te:X:F?X:Z;for(let se=0;se<d.length;se++){const ie=S(p,re,d[se]);ie&&ie.length>=2&&D.push(ie)}return D.length?D:null}(p,x.paths,F,D);return re?(d.paths=re,d):null}(p,{},d,!1,!1):(0,Q.oU)(d)?function U(p,d,x,F,D){const re=function I(p,d,x,F){const D=[],re=x?F?te:X:F?X:Z;for(let se=0;se<d.length;se++){const ie=S(p,re,d[se]);ie&&ie.length>=3&&D.push(ie)}return D.length?D:null}(p,x.rings,F,D);return re?(d.rings=re,d):null}(p,{},d,!1,!1):(0,Q.aW)(d)?function _(p,d,x,F,D){return d.points=function C(p,d,x,F){return S(p,x?F?te:X:F?X:Z,d)}(p,x.points,F,D),d}(p,{},d,!1,!1):(0,Q.YX)(d)?function w(p,d,x,F,D){return d.xmin=W(p,x.xmin),d.ymin=K(p,x.ymin),d.xmax=W(p,x.xmax),d.ymax=K(p,x.ymax),d!==x&&(F&&(d.zmin=x.zmin,d.zmax=x.zmax),D&&(d.mmin=x.mmin,d.mmax=x.mmax)),d}(p,{},d,!1,!1):null:null}function Ve(p,d,x,F,D){return(0,A.pC)(x)&&(d.points=function y(p,d,x,F){return z(p,x?F?te:X:F?X:Z,d)}(p,x.points,F,D)),d}function Ee(p,d,x,F,D){return(0,A.Wi)(x)||(d.x=P(p,x.x),d.y=r(p,x.y),d!==x&&(F&&(d.z=x.z),D&&(d.m=x.m))),d}function he(p,d,x,F,D){return(0,A.pC)(x)&&(d.rings=function v(p,d,x,F){return u(p,x?F?te:X:F?X:Z,d)}(p,x.rings,F,D)),d}function Te(p,d,x,F,D){return(0,A.pC)(x)&&(d.paths=function g(p,d,x,F){return u(p,x?F?te:X:F?X:Z,d)}(p,x.paths,F,D)),d}},25310:(ce,q,E)=>{E.d(q,{a:()=>te});var A=E(26584),Q=E(63290),k=E(39406),Z=E(64288);const X=Q.Z.getLogger("esri.views.2d.engine.webgl");function te(j){return(0,Z.hj)(j.minDataValue)&&(0,Z.hj)(j.maxDataValue)&&null!=j.minSize&&null!=j.maxSize?k.X.SIZE_MINMAX_VALUE:(j.expression&&"view.scale"===j.expression||j.valueExpression&&"$view.scale"===j.valueExpression)&&Array.isArray(j.stops)?k.X.SIZE_SCALE_STOPS:(null!=j.field||j.expression&&"view.scale"!==j.expression||j.valueExpression&&"$view.scale"!==j.valueExpression)&&(Array.isArray(j.stops)||"levels"in j&&j.levels)?k.X.SIZE_FIELD_STOPS:(null!=j.field||j.expression&&"view.scale"!==j.expression||j.valueExpression&&"$view.scale"!==j.valueExpression)&&null!=j.valueUnit?k.X.SIZE_UNIT_VALUE:(X.error(new A.Z("mapview-bad-type","Found invalid size VisualVariable",j)),k.X.NONE)}},3250:(ce,q,E)=>{E.r(q),E.d(q,{createSymbolSchema:()=>X});var A=E(39406),Q=E(18716);function k(S){var T;return"line-marker"===S.type?{type:"line-marker",color:null==(T=S.color)?void 0:T.toJSON(),placement:S.placement,style:S.style}:S.constructor.fromJSON(S.toJSON()).toJSON()}function Z(S){return hydrateKey(S)}function X(S,T,C){if(!S)return null;switch(S.type){case"simple-fill":case"picture-fill":return function j(S,T,C){const I=T.supportsOutlineFills,L=(0,Q.jj)(A.LW.FILL,me(oe({},T),{isOutlinedFill:I})),P=C?Z(L):L,r=S.clone(),z=r.outline;T.supportsOutlineFills||(r.outline=null);const u=oe({materialKey:P,hash:r.hash(),isOutlinedFill:!!T.supportsOutlineFills},k(r));if(T.supportsOutlineFills)return u;const o=[];if(o.push(u),z){const y=(0,Q.jj)(A.LW.LINE,me(oe({},T),{isOutline:!0})),g=oe({materialKey:C?Z(y):y,hash:z.hash()},k(z));o.push(g)}return{type:"composite-symbol",layers:o,hash:o.reduce((y,g)=>g.hash+y,"")}}(S,T,C);case"simple-marker":case"picture-marker":return function W(S,T,C){const I=(0,Q.jj)(A.LW.MARKER,T),L=C?Z(I):I,P=k(S);return me(oe({materialKey:L,hash:S.hash()},P),{angle:S.angle,maxVVSize:T.maxVVSize})}(S,T,C);case"simple-line":return function ne(S,T,C){const I=(0,Q.jj)(A.LW.LINE,T),L=C?Z(I):I,P=S.clone(),r=P.marker;P.marker=null;const z=[];if(z.push(oe({materialKey:L,hash:P.hash()},k(P))),r){var u;const o=(0,Q.jj)(A.LW.MARKER,T),y=C?Z(o):o;r.color=null!=(u=r.color)?u:P.color,z.push(oe({materialKey:y,hash:r.hash(),lineWidth:P.width},k(r)))}return{type:"composite-symbol",layers:z,hash:z.reduce((o,y)=>y.hash+o,"")}}(S,T,C);case"text":return function K(S,T,C){const I=(0,Q.jj)(A.LW.TEXT,T),L=C?Z(I):I,P=k(S);return me(oe({materialKey:L,hash:S.hash()},P),{angle:S.angle,maxVVSize:T.maxVVSize})}(S,T,C);case"label":return function te(S,T,C){const I=S.toJSON(),L=(0,Q.jj)(A.LW.LABEL,me(oe({},T),{placement:I.labelPlacement}));return me(oe({materialKey:C?Z(L):L,hash:S.hash()},I),{labelPlacement:I.labelPlacement})}(S,T,C);case"cim":return{type:"cim",rendererKey:T.vvFlags,data:S.data,maxVVSize:T.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:T.vvFlags,data:S,maxVVSize:T.maxVVSize};case"web-style":return me(oe({},k(S)),{type:"web-style",hash:S.hash(),rendererKey:T.vvFlags,maxVVSize:T.maxVVSize});default:throw new Error(`symbol not supported ${S.type}`)}}},49391:(ce,q,E)=>{E.d(q,{MD:()=>Fe,Ew:()=>D,q5:()=>d});var A=E(26584),Q=E(8314),k=E(58817),Z=E(63290),X=E(62208),te=E(23841),j=E(64288),ne=E(39406),W=E(25310),S=E(3250),C=(E(35909),E(31375));E(39351);function H(i,h){return Math.max(i,h)}E(64596),E(11263),new C.Z(0,0,24,24);var ve=E(22418),le=E(62192),Ve=E(43930);const Ee=Z.Z.getLogger("esri.views.2d.layers.features.schemaUtils"),he="ValidationError",Te={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function d(i){let h=0,c=0,b=!1,V=!0,O=!0;if((0,X.pC)(i)){if(c=function u(i){if(!("visualVariables"in i)||!i.hasVisualVariables("size"))return 0;const h=i.getVisualVariablesForType("size");if(!h[0])return 0;const c=h[0];if("outline"===c.target)return 0;if("stops"===c.transformationType)return c.stops.map(b=>b.size).reduce(H,0);if("clamped-linear"===c.transformationType){let b=-1/0,V=-1/0;return b="number"==typeof c.maxSize?c.maxSize:c.maxSize.stops.map(O=>O.size).reduce(H,0),V="number"==typeof c.minSize?c.minSize:c.minSize.stops.map(O=>O.size).reduce(H,0),Math.max(b,V)}return"real-world-size"===c.transformationType?30:void 0}(i),"visualVariables"in i&&(h=function K(i){if(!i)return ne.X.NONE;let h=0;for(const c of i)if("size"===c.type){const b=(0,W.a)(c);h|=b,"outline"===c.target&&(h|=b<<4)}else"color"===c.type?h|=ne.X.COLOR:"opacity"===c.type?h|=ne.X.OPACITY:"rotation"===c.type&&(h|=ne.X.ROTATION);return h}(i.visualVariables||[]),b="dot-density"===i.type),"dictionary"===i.type)return{maxVVSize:c,supportsOutlineFills:!1,vvFlags:h,stride:{fill:"default"}};if(!b){const B=i.getSymbols();"backgroundFillSymbol"in i&&i.backgroundFillSymbol&&B.push(i.backgroundFillSymbol);for(const $ of B)if("cim"===$.type&&(V=!1),"simple-fill"===$.type||"picture-fill"===$.type){const G=$.outline;G&&"none"!==G.style&&"solid"!==G.style&&(O=!1);const ae=G&&"none"!==G.style&&"solid"!==G.style,ue="simple-fill"===$.type&&"none"!==$.style&&"solid"!==$.style;("picture-fill"===$.type||ue||ae)&&(V=!1)}}}return b&&(O=!1),{vvFlags:h,maxVVSize:c,supportsOutlineFills:O,stride:{fill:b?"dot-density":V?"simple":"default"}}}function F(i,h){const c=(0,k.d9)(i);return c.some(b=>function x(i,h){const c=i.labelPlacement,b=Te[h];if(!i.symbol)return Ee.warn("No ILabelClass symbol specified."),!0;if(!b)return Ee.error(new A.Z("mapview-labeling:unsupported-geometry-type",`Unable to create labels for Feature Layer, ${h} is not supported`)),!0;if(!b.some(V=>V===c)){const V=b[0];c&&Ee.warn(`Found invalid label placement type ${c} for ${h}. Defaulting to ${V}`),i.labelPlacement=V}return!1}(b,h))?[]:c}function D(i){return(0,Q.Z)("esri-2d-update-debug")&&console.debug("Created new schema",re(i,!0)),re(i)}function re(i,h=!1){try{var c,b;const V=function Ne(i,h=!1){const c=new Array;return c.push(function Ce(i,h,c=!1){const b={indexCount:0,fields:{}},V="featureReduction"in i&&i.featureReduction,O=V?"aggregate":"feature";if("sublayers"in i){const B={type:"subtype",subtypeField:i.subtypeField,renderers:{},stride:{fill:"default"}},$={type:"subtype",mapping:{},target:"feature"},G={type:"subtype",classes:{}},ae={type:"symbol",target:"feature",aggregateFields:[],attributes:b,storage:$,mesh:{matcher:B,aggregateMatcher:null,labels:G,sortKey:null}},ue=new Set;let be=0;for(const{renderer:fe,subtypeCode:ge,labelingInfo:Ie,labelsVisible:Oe}of i.sublayers){const Me=Fe(b,O,fe,c),xe=_e(b,O,fe),Pe=Oe&&Ie;if("visualVariables"in fe&&fe.visualVariables&&fe.visualVariables.length)throw new A.Z(he,"Visual variables are currently not supported for subtype layers");if("dictionary"===Me.type)throw new A.Z(he,"Dictionary renderer is not supported in subtype layers");if("subtype"===Me.type)throw new A.Z(he,"Nested subtype renderers is not supported");if((0,X.pC)(xe)&&"subtype"===xe.type)throw new A.Z(he,"Nested subtype storage is not supported");if((0,X.pC)(xe)&&"dot-density"===xe.type)throw new A.Z(he,"Dot density attributes are not supported in subtype layers");if(ue.has(ge))throw new A.Z(he,"Subtype codes for sublayers must be unique");ue.add(ge),B.renderers[ge]=Me,$.mapping[ge]=xe,Pe&&(G.classes[ge]=Pe.map($e=>we(fe,b,$e,"feature",be++,c)))}return ae}if("heatmap"===i.renderer.type){const{blurRadius:B,fieldOffset:$,field:G}=i.renderer;return{type:"heatmap",aggregateFields:[],attributes:b,target:O,storage:null,mesh:{blurRadius:B,fieldOffset:$,field:ye(b,{target:O,field:G,resultType:"numeric"}).field}}}{const B=[],$="aggregate"===O?(0,le.S1)(B,i.renderer,V,null):i.renderer;!function De(i,h){const c={mesh:!0,storage:!0};for(const b of h){const{name:V,outStatistic:O}=b,{statisticType:B,onStatisticField:$}=O;let G=null,ae=null,ue=null;const be="numeric",fe="feature";"onStatisticValueExpression"in O?ae=Se(i,{type:"expression",target:fe,valueExpression:O.onStatisticValueExpression,resultType:be}).fieldIndex:"onStatisticNormalizationField"in O?(G=Se(i,{type:"field",target:fe,field:$,resultType:be}).field,ue=O.onStatisticNormalizationField):G=Se(i,{type:"field",target:fe,field:$,resultType:be}).field,Se(i,{type:"statistic",target:"aggregate",name:V,context:c,inField:G,inNormalizationField:ue,inFieldIndex:ae,statisticType:B})}}(b,B);const G=Fe(b,O,$,c);let ae=null;const ue=_e(b,O,$),be=(0,Ve.oq)(i.geometryType);let fe=i.labelsVisible&&i.labelingInfo||[],ge=[];if(V){if("selection"===V.type)throw new A.Z(he,"Mapview does not support `selection` reduction type",V);if(V.symbol){const xe=d($);ae={type:"simple",symbol:(0,S.createSymbolSchema)(V.symbol,xe,c),stride:xe.stride}}ge=V&&V.labelsVisible&&V.labelingInfo||[]}fe=F(fe,be),ge=F(ge,be);let Ie=0;const Oe=[...fe.map(xe=>we($,b,xe,"feature",Ie++,c)),...ge.map(xe=>we($,b,xe,"aggregate",Ie++,c))],Me=function Re(i,h){if((0,X.Wi)(h)||!h.length)return null;h.length>1&&Ee.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${h.length}. All but the first will be discarded`);const c=h[0],b="ascending"===c.order?"asc":"desc";return c.field?{field:c.field,order:b}:c.valueExpression?{fieldIndex:Se(i,{type:"expression",target:"feature",valueExpression:c.valueExpression,resultType:"numeric"}).fieldIndex,order:b}:(Ee.error(new A.Z(he,"Expected to find a field or valueExpression for OrderByInfo",c)),null)}(b,i.orderBy);return{type:"symbol",target:O,attributes:b,aggregateFields:B,storage:ue,mesh:{matcher:G,labels:{type:"simple",classes:Oe},aggregateMatcher:ae,sortKey:Me}}}}(i)),c}(i,h),O={};return V.map(B=>function se(i,h,c){switch(c.target){case"feature":return void de(i,pe(h),c);case"aggregate":{if(!("featureReduction"in h))return;const b=h.featureReduction;if("selection"===b.type)throw new A.Z(he,"Mapview does not support `selection` reduction type",b);return de(i,pe(h),c),void function ze(i,h,c){i.aggregate||(i.aggregate={name:"aggregate",input:"feature",filters:null,attributes:{},params:{clusterRadius:(0,te.F2)(h.clusterRadius/2),clusterPixelBuffer:64*Math.ceil((0,te.F2)(h.clusterMaxSize)/64),fields:c.aggregateFields}}),ie(i.aggregate,c.attributes.fields)}(i,b,c)}}}(O,i,B)),{source:{definitionExpression:i.definitionExpression,fields:i.fields.map(B=>B.toJSON()),gdbVersion:i.gdbVersion,historicMoment:null==(c=i.historicMoment)?void 0:c.getTime(),outFields:i.availableFields,pixelBuffer:i.pixelBuffer,spatialReference:i.spatialReference.toJSON(),timeExtent:null==(b=i.timeExtent)?void 0:b.toJSON(),customParameters:i.customParameters},attributes:{fields:{},indexCount:0},processors:V,targets:O}}catch(V){if(V.fieldName===he)return Ee.error(V),null;throw V}}function ie(i,h){for(const c in h){const b=h[c];if(b.target!==i.name)continue;const V=i.attributes[c];V?(V.context.mesh=V.context.mesh||b.context.mesh,V.context.storage=V.context.storage||b.context.storage):i.attributes[c]=b}return i}function pe(i){var h,c,b,V,O;return[null!=(h=null==(c=(0,X.Wg)(i.filter))?void 0:c.toJSON())?h:null,null!=(b=null==(V=(0,X.Wg)(null==(O=(0,X.Wg)(i.featureEffect))?void 0:O.filter))?void 0:V.toJSON())?b:null]}function de(i,h,c){return i.feature||(i.feature={name:"feature",input:"source",filters:h,attributes:{}}),ie(i.feature,c.attributes.fields),i}function ye(i,h){return h.field?Se(i,me(oe({},h),{type:"field",field:h.field})):h.valueExpression?Se(i,me(oe({},h),{type:"expression",valueExpression:h.valueExpression})):{field:null,fieldIndex:null}}function Se(i,h){switch(h.type){case"expression":{const c=h.valueExpression;if(!i.fields[c]){const b=i.indexCount++;i.fields[c]=me(oe({},h),{name:c,fieldIndex:b})}return{fieldIndex:i.fields[c].fieldIndex}}case"label-expression":{const c=JSON.stringify(h.label);if(!i.fields[c]){const b=i.indexCount++;i.fields[c]=me(oe({},h),{name:c,fieldIndex:b})}return{fieldIndex:i.fields[c].fieldIndex}}case"field":{const c=h.field;return"aggregate"===h.target&&i.fields[c]||(i.fields[c]=me(oe({},h),{name:c})),{field:c}}case"statistic":return i.fields[h.name]=oe({},h),{field:h.name}}}function we(i,h,c,b,V,O=!1){const B=Se(h,{type:"label-expression",target:b,context:{mesh:!0},resultType:"string",label:{labelExpression:c.labelExpression,labelExpressionInfo:c.labelExpressionInfo?{expression:c.labelExpressionInfo.expression}:null,symbol:!!c.symbol,where:c.where}}),{fieldIndex:$}=B,G=d(i);return me(oe({},(0,S.createSymbolSchema)(c,G,O)),{fieldIndex:$,target:b,index:V})}function _e(i,h,c){switch(c.type){case"dot-density":return function Ae(i,h,c){return c&&c.length?{type:"dot-density",mapping:c.map((b,V)=>{const{field:O,fieldIndex:B}=ye(i,{valueExpression:b.valueExpression,field:b.field,resultType:"numeric",target:h});return{binding:V,field:O,fieldIndex:B}}),target:h}:{type:"dot-density",mapping:[],target:h}}(i,h,c.attributes);case"simple":case"class-breaks":case"unique-value":case"dictionary":return function je(i,h,c){if(!c||!c.length)return{type:"visual-variable",mapping:[],target:h};const b={storage:!0},V="numeric";return{type:"visual-variable",mapping:(0,ve.t)(c).map(O=>{var B;const $=(0,j.nU)(O.type),{field:G,fieldIndex:ae}=ye(i,{target:h,valueExpression:O.valueExpression,field:O.field,context:b,resultType:V});switch(O.type){case"size":return"$view.scale"===O.valueExpression?null:{type:"size",binding:$,field:G,fieldIndex:ae,normalizationField:ye(i,{target:h,field:O.normalizationField,context:b,resultType:V}).field,valueRepresentation:null!=(B=O.valueRepresentation)?B:null};case"color":return{type:"color",binding:$,field:G,fieldIndex:ae,normalizationField:ye(i,{target:h,field:O.normalizationField,context:b,resultType:V}).field};case"opacity":return{type:"opacity",binding:$,field:G,fieldIndex:ae,normalizationField:ye(i,{target:h,field:O.normalizationField,context:b,resultType:V}).field};case"rotation":return{type:"rotation",binding:$,field:G,fieldIndex:ae}}}).filter(O=>O),target:h}}(i,h,c.visualVariables);case"heatmap":return null}}function Fe(i,h,c,b=!1){const V=(0,X.Pt)(i,{indexCount:0,fields:{}});switch(c.type){case"simple":case"dot-density":return function Ke(i,h,c=!1){const b=h.getSymbols(),V=b.length?b[0]:null,O=d(h);return{type:"simple",symbol:(0,S.createSymbolSchema)(V,O,c),stride:O.stride}}(0,c,b);case"class-breaks":return function We(i,h,c,b=!1){const O=c.backgroundFillSymbol,{field:B,fieldIndex:$}=ye(i,{target:h,field:c.field,valueExpression:c.valueExpression,resultType:"numeric",context:{mesh:!0,use:"renderer.field"}}),G=c.normalizationType,ae="log"===G?"esriNormalizeByLog":"percent-of-total"===G?"esriNormalizeByPercentOfTotal":"field"===G?"esriNormalizeByField":null,ue=d(c),be=c.classBreakInfos.map(fe=>({symbol:(0,S.createSymbolSchema)(fe.symbol,ue,b),min:fe.minValue,max:fe.maxValue})).sort((fe,ge)=>fe.min-ge.min);return{type:"interval",attributes:i.fields,field:B,fieldIndex:$,backgroundFillSymbol:(0,S.createSymbolSchema)(O,ue,b),defaultSymbol:(0,S.createSymbolSchema)(c.defaultSymbol,ue,b),intervals:be,normalizationField:c.normalizationField,normalizationTotal:c.normalizationTotal,normalizationType:ae,isMaxInclusive:c.isMaxInclusive,stride:ue.stride}}(V,h,c,b);case"unique-value":return function Ze(i,h,c,b=!1){const V=[],O=c.backgroundFillSymbol,B={target:h,context:{mesh:!0},resultType:"string"};if(c.field&&"string"!=typeof c.field)throw new A.Z(he,"Expected renderer.field to be a string",c);const{field:$,fieldIndex:G}=ye(i,me(oe({},B),{field:c.field,valueExpression:c.valueExpression})),ae=d(c);for(const ue of c.uniqueValueInfos)V.push({value:""+ue.value,symbol:(0,S.createSymbolSchema)(ue.symbol,ae,b)});return{type:"map",attributes:i.fields,field:$,fieldIndex:G,field2:ye(i,me(oe({},B),{field:c.field2})).field,field3:ye(i,me(oe({},B),{field:c.field3})).field,fieldDelimiter:c.fieldDelimiter,backgroundFillSymbol:(0,S.createSymbolSchema)(O,ae),defaultSymbol:(0,S.createSymbolSchema)(c.defaultSymbol,ae),map:V,stride:ae.stride}}(V,h,c,b);case"dictionary":return function Be(i,h,c=!1){const b=d(h);return{type:"dictionary",config:h.config,fieldMap:h.fieldMap,scaleExpression:h.scaleExpression,url:h.url,symbolOptions:b,stride:b.stride}}(0,c,b)}}},22418:(ce,q,E)=>{E.d(q,{a:()=>te,t:()=>j});var A=E(63290),Q=E(23841);const X=A.Z.getLogger("esri.renderers.visualVariables.support.utils"),te=I=>{if(!("visualVariables"in I)||!I.visualVariables||!I.visualVariables.length)return I;const L=I.clone(),P=L.visualVariables.map(r=>ne(r)?W(r):r);return L.visualVariables=P,L};function j(I){return I.map(L=>ne(L)?W(L.clone()):L)}function ne(I){return("size"===I.type||"color"===I.type||"opacity"===I.type)&&null!=I.stops}function W(I){return I.stops=function C(I,L){return L.length<=8?L:(X.warn(`Found ${L.length} Visual Variable stops, but MapView only supports 8. Displayed stops will be simplified.`),L.length>16?function S(I,L){const[P,...r]=L,z=r.pop(),u=r[0].value,o=r[r.length-1].value,y=(o-u)/6,g=[];for(let v=u;v<o;v+=y){let ee=0;for(;v>=r[ee].value;)ee++;const R=r[ee],N=L[ee-1],J=v-N.value,M=R.value===N.value?1:J/(R.value-N.value);if("color"===I){const w=r[ee],_=L[ee-1],Y=w.color.clone();Y.r=K(_.color.r,Y.r,M),Y.g=K(_.color.g,Y.g,M),Y.b=K(_.color.b,Y.b,M),Y.a=K(_.color.a,Y.a,M),g.push({value:v,color:Y,label:w.label})}else if("size"===I){const w=r[ee],_=L[ee-1],Y=(0,Q.t_)(w.size),U=K((0,Q.t_)(_.size),Y,M);g.push({value:v,size:U,label:w.label})}else{const w=r[ee],_=K(L[ee-1].opacity,w.opacity,M);g.push({value:v,opacity:_,label:w.label})}}return[P,...g,z]}(I,L):function T(I){const[L,...P]=I,r=P.pop();for(;P.length>6;){let z=0,u=0;for(let o=1;o<P.length;o++){const v=Math.abs(P[o].value-P[o-1].value);v>u&&(u=v,z=o)}P.splice(z,1)}return[L,...P,r]}(L))}(I.type,I.stops),I}function K(I,L,P){return(1-P)*I+P*L}},64596:(ce,q,E)=>{E.d(q,{y1:()=>K,I_:()=>W,eT:()=>I,Zu:()=>S,yA:()=>C,ab:()=>T,XA:()=>P}),E(986);var Q=E(62208),k=E(37118),Z=E(65401),X=E(74618);E(61261),E(39351),E(25797);const W=512,K=50;function S(r,z){if(!z.isWrappable)return null;const[u,o]=(0,X.uS)(z);return r[2]>o?[(0,Z.Ue)([r[0],r[1],o,r[3]]),(0,Z.Ue)([u,r[1],u+r[2]-o,r[3]])]:r[0]<u?[(0,Z.Ue)([u,r[1],r[2],r[3]]),(0,Z.Ue)([o-(u-r[0]),r[1],o,r[3]])]:null}function T(r){return"text"===r||"esriTS"===r}function C(r){return"simple-marker"===r||"picture-marker"===r||"esriSMS"===r||"esriPMS"===r}function I(r){switch((0,Q.Wg)(r.geometry).type){case"point":case"multipoint":return 0;case"polyline":return 1;case"polygon":case"extent":return 2}return 0}function P(r){if(!r)return null;const{xmin:z,ymin:u,xmax:o,ymax:y,spatialReference:g}=r;return new k.Z({rings:[[[z,u],[z,y],[o,y],[o,u],[z,u]]],spatialReference:g})}},11263:(ce,q,E)=>{E.d(q,{xS:()=>ee,B3:()=>v});var A=E(15861),Q=E(84175),k=E(39406),Z=E(18716);const X={marker:k.LW.MARKER,fill:k.LW.FILL,line:k.LW.LINE,text:k.LW.TEXT};class te{constructor(N,J,M,w){const _={minScale:null==J?void 0:J.minScale,maxScale:null==J?void 0:J.maxScale},Y=function j(R){return R.minScale||R.maxScale?R.minScale+"-"+R.maxScale:""}(_);this.layers=N,this.data=J,this.hash=this._createHash()+Y,this.rendererKey=M;const U={isOutline:!1,isOutlinedFill:!1,placement:null,stride:{fill:"default"},vvFlags:M};for(const H of N)H.materialKey=(0,Z.jj)(X[H.type],U),H.maxVVSize=w,H.scaleInfo=_,H.templateHash+=Y}get type(){return"expanded-cim"}_createHash(){let N="";for(const J of this.layers)N+=J.templateHash;return N}}var ne=E(83100),W=E(26584),K=E(10699),S=E(21726),T=E(84687),C=E(29840),I=E(78241);function L(R,N,J){return P.apply(this,arguments)}function P(){return(P=(0,A.Z)(function*(R,N,J){if(!R.name)return Promise.reject(new W.Z("style-symbol-reference-name-missing","Missing name in style symbol reference"));if(R.styleName&&"Esri2DPointSymbolsStyle"===R.styleName)return r(R,J);try{return u(yield(0,I.n2)(R,N,J),R.name,N,J)}catch(M){return(0,K.k_)(M),null}})).apply(this,arguments)}function r(R,N){return z.apply(this,arguments)}function z(){return(z=(0,A.Z)(function*(R,N){const J=I.wm.replace(/\{SymbolName\}/gi,R.name);try{const M=yield(0,I.EJ)(J,N);return(0,I.KV)(M.data)}catch(M){return(0,K.k_)(M),null}})).apply(this,arguments)}function u(R,N,J,M){return o.apply(this,arguments)}function o(){return(o=(0,A.Z)(function*(R,N,J,M){const w=R.data,_={portal:J&&J.portal||T.Z.getDefault(),url:(0,S.mN)(R.baseUrl),origin:"portal-item"},Y=w.items.find(H=>H.name===N);if(!Y)throw new W.Z("symbolstyleutils:symbol-name-not-found",`The symbol name '${N}' could not be found`,{symbolName:N});let U=(0,C.f)((0,I.v9)(Y,"cimRef"),_);(0,ne.XO)()&&(U=(0,ne.pJ)(U));try{const H=yield(0,I.EJ)(U,M);return(0,I.KV)(H.data)}catch(H){return(0,K.k_)(H),null}})).apply(this,arguments)}const g=function(){var R=(0,A.Z)(function*(N,J,M){return new te(yield(0,Q.c)(N.data,J,M),N.data,N.rendererKey,N.maxVVSize)});return function(J,M,w){return R.apply(this,arguments)}}(),v=function(){var R=(0,A.Z)(function*(N,J,M,w){if(!N)return null;if("cim"===N.type)return g(N,J,M);if("web-style"===N.type){const _={type:"cim",data:yield L(N,null,w),rendererKey:N.rendererKey,maxVVSize:N.maxVVSize};return g(_,J,M)}return N});return function(J,M,w,_){return R.apply(this,arguments)}}();function ee(R){if(!R)return null;const{type:N,cim:J,url:M,materialHash:w}=R,_={cim:J,type:N,mosaicHash:w,url:M,size:null,dashTemplate:null,path:null,text:null,fontName:null};switch(N){case"marker":_.size=R.size,_.path=R.path;break;case"line":_.dashTemplate=R.dashTemplate;break;case"text":_.text=R.text,_.fontName=R.fontName}return _}},62192:(ce,q,E)=>{E.d(q,{aV:()=>g,S1:()=>u,os:()=>o,yR:()=>v});var L,A=E(26584),Q=E(8314),k=E(63290),Z=E(62208),X=E(50011),te=E(68598),j=E(64902),ne=E(17626),W=E(58817),K=E(77712),T=(E(90912),E(76898)),C=E(99433),I=E(86971);let P=L=class extends te.Z{writeLevels(M,w,_){for(const Y in M)return void(w.stops=this.levels[Y])}clone(){return new L({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:(0,I.iY)(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:(0,I.iY)(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map(M=>M.clone()),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone(),levels:(0,W.d9)(this.levels)})}};(0,ne._)([(0,K.Cb)()],P.prototype,"levels",void 0),(0,ne._)([(0,C.c)("levels")],P.prototype,"writeLevels",null),P=L=(0,ne._)([(0,T.j)("esri.views.2d.engine.LevelDependentSizeVariable")],P);const r=k.Z.getLogger("esri.views.2d.layers.support.clusterUtils");Q.Z.add("esri-cluster-arcade-enabled",!0);const z=(0,Q.Z)("esri-cluster-arcade-enabled"),u=(M,w,_,Y)=>{const U=w.clone();if(!v(U))return U;if(_.fields)for(const H of _.fields)R(M,H);if("visualVariables"in U){const H=(U.visualVariables||[]).filter(le=>"$view.scale"!==le.valueExpression),ve=o(H);H.forEach(le=>{"rotation"===le.type?le.field?le.field=J(M,le.field,"avg_angle"):le.valueExpression&&(le.field=N(M,le.valueExpression,"avg_angle"),le.valueExpression=null):le.normalizationField?(le.field=J(M,le.field,"norm",le.normalizationField),le.normalizationField=null):le.field?le.field=J(M,le.field,"avg"):(le.field=N(M,le.valueExpression,"avg"),le.valueExpression=null)}),(0,Z.Wi)(ve)&&!y(H)&&(H.push(g(_,Y)),U.dynamicClusterSize=!0),U.visualVariables=H}switch(U.type){case"simple":break;case"unique-value":U.field?U.field=J(M,U.field,"mode"):U.valueExpression&&(U.field=N(M,U.valueExpression,"mode"),U.valueExpression=null);break;case"class-breaks":U.normalizationField?(U.field=J(M,U.field,"norm",U.normalizationField),U.normalizationField=null):U.field?U.field=J(M,U.field,"avg"):(U.field=N(M,U.valueExpression,"avg"),U.valueExpression=null)}return U},o=M=>{for(const w of M)if("size"===w.type)return w;return null},y=M=>{for(const w of M)if("cluster_count"===w.field)return!0;return!1},g=(M,w)=>{const _=[new j.Z({value:0,size:0}),new j.Z({value:1})];if((0,Z.Wi)(w))return new te.Z({field:"cluster_count",stops:[..._,new j.Z({value:2,size:0})]});const Y=Object.keys(w).reduce((U,H)=>me(oe({},U),{[H]:[..._,new j.Z({value:Math.max(2,w[H].minValue),size:M.clusterMinSize}),new j.Z({value:Math.max(3,w[H].maxValue),size:M.clusterMaxSize})]}),{});return new P({field:"cluster_count",levels:Y})},v=M=>{const w=_=>r.error(new A.Z("Unsupported-renderer",_,{renderer:M}));if("unique-value"===M.type){if(M.field2||M.field3)return w("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1}else if("class-breaks"===M.type){if(M.normalizationField){const _=M.normalizationType;if("field"!==_)return w(`FeatureReductionCluster does not support a normalizationType of ${_}`),!1}}else if("simple"!==M.type)return w(`FeatureReductionCluster does not support renderers of type ${M.type}`),!1;if(!z){if("valueExpression"in M&&M.valueExpression)return w("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in M&&M.visualVariables||[]).some(_=>!(!("valueExpression"in _)||!_.valueExpression)))return w("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function R(M,w){const{name:_,outStatistic:Y}=w,{onStatisticField:U,onStatisticValueExpression:H,statisticType:ve}=Y;if(H){const le=(0,X.F)(H.toLowerCase());M.push({name:_,outStatistic:{onStatisticField:le,onStatisticValueExpression:H,statisticType:ve}})}else U?M.push({name:_,outStatistic:{onStatisticField:U,statisticType:ve}}):r.error(new A.Z("mapview-unsupported-field","Unable to handle field",{field:w}))}function N(M,w,_){const Y=(0,X.F)(w),U="mode"===_?`cluster_type_${Y}`:`cluster_avg_${Y}`;return M.some(H=>H.name===U)||M.push({name:U,outStatistic:{onStatisticField:Y,onStatisticValueExpression:w,statisticType:_}}),U}function J(M,w,_,Y){if("cluster_count"===w||M.some(H=>H.name===w))return w;const U=function ee(M,w,_){switch(M){case"avg":case"avg_angle":return`cluster_avg_${w}`;case"mode":return`cluster_type_${w}`;case"norm":{const Y=_,U="field",H=w.toLowerCase()+",norm:"+U+","+Y.toLowerCase();return"cluster_avg_"+(0,X.F)(H)}}}(_,w,Y);return M.some(H=>H.name===U)||M.push("norm"===_?{name:U,outStatistic:{onStatisticField:w,onStatisticNormalizationField:Y,statisticType:_}}:{name:U,outStatistic:{onStatisticField:w,statisticType:_}}),U}},43930:(ce,q,E)=>{E.d(q,{JV:()=>X,oq:()=>k});const Q=new(E(2076).X)({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function k(te){return Q.toJSON(te)}function X(te){const{bandCount:j,attributeTable:ne,colormap:W,pixelType:K}=te.rasterInfo;return 1===j&&(null!=ne||null!=W||"u8"===K||"s8"===K)}}}]);