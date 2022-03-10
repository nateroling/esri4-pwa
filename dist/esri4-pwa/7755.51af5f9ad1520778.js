"use strict";var oe=Object.defineProperty,ie=Object.defineProperties,se=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable,Z=(p,u,c)=>u in p?oe(p,u,{enumerable:!0,configurable:!0,writable:!0,value:c}):p[u]=c,D=(p,u)=>{for(var c in u||(u={}))ce.call(u,c)&&Z(p,c,u[c]);if(R)for(var c of R(u))ue.call(u,c)&&Z(p,c,u[c]);return p},F=(p,u)=>ie(p,se(u));(self.webpackChunkesri4_pwa=self.webpackChunkesri4_pwa||[]).push([[7755],{67755:(p,u,c)=>{c.r(u),c.d(u,{previewSymbol2D:()=>ne});var B=c(91558),I=c(26584),f=c(23841),C=c(74741),M=c(71131),K=c(6172);const j="picture-fill",X=M.b_.size,k=M.b_.maxSize,O=M.b_.maxOutlineSize,Y=M.b_.lineWidth,$=document.createElement("canvas");function U(o){const e=null==o?void 0:o.size;return{width:null!=e&&"object"==typeof e&&"width"in e?(0,f.F2)(e.width):null,height:null!=e&&"object"==typeof e&&"height"in e?(0,f.F2)(e.height):null}}function ne(o,e){var r,_;const S="number"==typeof(null==e?void 0:e.size)?null==e?void 0:e.size:null,v=null!=S?(0,f.F2)(S):null,L=null!=(null==e?void 0:e.maxSize)?(0,f.F2)(e.maxSize):null,ae=null!=(null==e?void 0:e.opacity)?e.opacity:null,g=null!=(null==e?void 0:e.rotation)?e.rotation:"angle"in o?o.angle:null,w=(0,C._M)(o);let y=(0,C.mx)(o);if(w&&!y){const a="type"in w?null:new B.Z(w);"#ffffff"===(a?a.toHex():null)&&(y={color:"#bdc3c7",width:.75})}const s={shape:null,fill:null,stroke:y,offset:[0,0]};null!=(r=y)&&r.width&&(y.width=Math.min(y.width,O));const m=(null==(_=y)?void 0:_.width)||0;let d=null!=(null==e?void 0:e.size)&&(null==(null==e?void 0:e.scale)||(null==e?void 0:e.scale)),t=0,l=0,b=!1;switch(o.type){case"simple-marker":{const a=o.style,i=Math.min(null!=v?v:(0,f.F2)(o.size),L||k);switch(t=i,l=i,a){case"circle":s.shape={type:"circle",cx:0,cy:0,r:.5*i},d||(t+=m,l+=m);break;case"cross":s.shape={type:"path",path:[{command:"M",values:[0,.5*l]},{command:"L",values:[t,.5*l]},{command:"M",values:[.5*t,0]},{command:"L",values:[.5*t,l]}]};break;case"diamond":s.shape={type:"path",path:[{command:"M",values:[0,.5*l]},{command:"L",values:[.5*t,0]},{command:"L",values:[t,.5*l]},{command:"L",values:[.5*t,l]},{command:"Z",values:[]}]},d||(t+=m,l+=m);break;case"square":s.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[t,0]},{command:"L",values:[t,l]},{command:"L",values:[0,l]},{command:"Z",values:[]}]},d||(t+=m,l+=m),g&&(b=!0);break;case"triangle":s.shape={type:"path",path:[{command:"M",values:[.5*t,0]},{command:"L",values:[t,l]},{command:"L",values:[0,l]},{command:"Z",values:[]}]},d||(t+=m,l+=m),g&&(b=!0);break;case"x":s.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[t,l]},{command:"M",values:[t,0]},{command:"L",values:[0,l]}]},g&&(b=!0);break;case"path":s.shape={type:"path",path:o.path||""},d||(t+=m,l+=m),g&&(b=!0),d=!0}break}case"simple-line":{var T;const{width:a,height:i}=U(e),n=null!=i?i:Math.min(null!=v?v:m,L||O),h=null!=a?a:Y;y.width=n,t=h,l=n;const x=(null==s||null==(T=s.stroke)?void 0:T.cap)||"butt",z="round"===x;d=!0,s.stroke.cap="butt"===x?"square":x,s.shape={type:"path",path:[{command:"M",values:[z?n/2:0,l/2]},{command:"L",values:[z?t-n/2:t,l/2]}]};break}case j:case"simple-fill":{const a="object"==typeof(null==e?void 0:e.symbolConfig)&&(null==e?void 0:e.symbolConfig.isSquareFill),{width:i,height:n}=U(e);t=a&&null!=i?i:null!=v?v:X,l=a&&null!=n?n:t,d||(t+=m,l+=m),d=!0,s.shape=a?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[t,0]},{command:"L",values:[t,l]},{command:"L",values:[0,l]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:M.JZ.fill[0];break}case"picture-marker":{let a=(0,f.F2)(o.width),i=(0,f.F2)(o.height);const n=null!=v?v:Math.max(a,i),h=a/i;a=h<=1?Math.ceil(n*h):n,i=h<=1?n:Math.ceil(n/h),t=Math.min(a,L||k),l=Math.min(i,L||k),s.shape={type:"image",x:-Math.round(t/2),y:-Math.round(l/2),width:t,height:l,src:o.url||""},g&&(b=!0);break}case"text":{const a=o,i=a.text||"Aa",n=a.font,h=Math.min(null!=v?v:(0,f.F2)(n.size),L||k),x=function q(o,e){const r=$.getContext("2d"),_=[];return e&&(e.weight&&_.push(e.weight),e.size&&_.push(e.size+"px"),e.family&&_.push(e.family)),r.font=_.join(" "),r.measureText(o).width}(i,{weight:n.weight,size:h,family:n.family}),z=/[\uE600-\uE6FF]/.test(i);t=z?h:x,l=h;let A=.25*function le(o){if(0===o.length)return 0;if(o.length>2){const e=(0,f.Wz)(1),r=parseFloat(o);switch(o.slice(-2)){case"px":return r;case"pt":return r*e;case"in":return 72*r*e;case"pc":return 12*r*e;case"mm":return 2.8346456692913384*r*e;case"cm":return 28.346456692913385*r*e}}return parseFloat(o)}((n?h:0).toString());z&&(A+=5),s.shape={type:"text",text:i,x:0,y:A,align:"middle",decoration:n&&n.decoration,rotated:a.rotated,kerning:a.kerning},s.font=n&&{size:h,style:n.style,decoration:n.decoration,weight:n.weight,family:n.family};break}}if(!s.shape)return Promise.reject(new I.Z("symbolPreview: renderPreviewHTML2D","symbol not supported."));const E=w,W=o.color;let P=null;return E&&"pattern"===E.type&&W&&o.type!==j?P=(0,C.Od)(E.src,W.toCss(!0)).then(a=>(E.src=a,s.fill=E,s)):(s.fill=w,P=Promise.resolve(s)),P.then(a=>{const i=[[a]];if("object"==typeof(null==e?void 0:e.symbolConfig)&&null!=e&&e.symbolConfig.applyColorModulation){const n=.6*t;i.unshift([F(D({},a),{offset:[-n,0],fill:(0,M.dc)(w,-.3)})]),i.push([F(D({},a),{offset:[n,0],fill:(0,M.dc)(w,.3)})]),t+=2*n,d=!1}return(0,K.w)(i,[t,l],{node:e&&e.node,scale:d,opacity:ae,rotation:g,useRotationSize:b,effectView:null==e?void 0:e.effectView})})}}}]);