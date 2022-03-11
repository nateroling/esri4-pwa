"use strict";(self.webpackChunkesri4_pwa=self.webpackChunkesri4_pwa||[]).push([[5039],{35039:(qe,x,p)=>{p.r(x),p.d(x,{executeScript:()=>Ge,extend:()=>q,extractFieldLiterals:()=>ze,findFunctionCalls:()=>Qe,functionHelper:()=>Ye,referencesFunction:()=>Je,referencesMember:()=>Xe,validateScript:()=>$e});var te=p(37780),re=p(22386),y=p(6729),j=p(42275),D=p(7652),H=p(5371),oe=p(26685),l=p(47562),h=p(19927),ae=p(77132),ce=p(67525),le=p(84228),se=p(38302),ie=p(24499),ue=p(53840),fe=p(97536),he=p(31975),i=p(10699),de=p(2004),Z=p(21674),Ee=p(72854),pe=p(49672),ve=p(37118),ge=p(55214),me=p(65234);function W(n){return n&&"function"==typeof n.then}const R=100;function E(n){return n instanceof Error?(0,i.d1)(n):(0,i.d1)(new Error(n))}function k(n){return(0,i.DB)(n)}function P(n,e){const t=[];for(let r=0;r<e.arguments.length;r++)t.push(f(n,e.arguments[r]));return(0,i.$6)(t)}function I(n,e,t){return(0,i.Ue)((r,o)=>{if(!0===e.preparsed)return r(t(n,null,e.arguments));P(n,e).then(a=>{try{r(t(n,e,a))}catch(c){o(c)}},o)})}function O(n,e,t){try{if(!0===e.preparsed){const r=t(n,null,e.arguments);return W(r)?r:(0,i.DB)(r)}return P(n,e).then(r=>{try{const o=t(n,e,r);return W(o)?o:(0,i.DB)(o)}catch(o){return E(o)}})}catch(r){return E(r)}}function f(n,e,t){try{if(e.breakpoint&&!0!==t)return e.breakpoint().then(()=>f(n,e,!0));switch(e.type){case"VariableDeclarator":return function Ce(n,e){try{let t=null;return t=null===e.init?(0,i.DB)(null):f(n,e.init),t.then(null!==n.localScope?r=>(0,i.Ue)(o=>{if(r===l.v&&(r=null),"Identifier"!==e.id.type)throw new Error("Can only assign a regular variable");const a=e.id.name.toLowerCase();n.localScope[a]={value:r,valueset:!0,node:e.init},o(l.v)}):r=>(0,i.Ue)(o=>{if("Identifier"!==e.id.type)throw new Error("Can only assign a regular variable");const a=e.id.name.toLowerCase();r===l.v&&(r=null),n.globalScope[a]={value:r,valueset:!0,node:e.init},o(l.v)}))}catch(t){return E(t)}}(n,e);case"VariableDeclaration":return Y(n,e,0);case"BlockStatement":return function Pe(n,e){try{return V(n,e,0)}catch(t){return E(t)}}(n,e);case"FunctionDeclaration":return function Se(n,e){try{const t=e.id.name.toLowerCase();return n.globalScope[t]={valueset:!0,node:null,value:new D.Z(e,n)},(0,i.DB)(l.v)}catch(t){return E(t)}}(n,e);case"ReturnStatement":return function Ae(n,e){return(0,i.Ue)((t,r)=>{null===e.argument?t(new l.R(l.v)):f(n,e.argument).then(o=>{try{t(new l.R(o))}catch(a){r(a)}},r)})}(n,e);case"IfStatement":return function Me(n,e){return(0,i.Ue)((t,r)=>{"AssignmentExpression"!==e.test.type&&"UpdateExpression"!==e.test.type?f(n,e.test).then(o=>{try{!0===o?f(n,e.consequent).then(t,r):!1===o?null!==e.alternate?f(n,e.alternate).then(t,r):t(l.v):r(new Error((0,h.H5)(e.test,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION")))}catch(a){r(a)}},r):r(new Error((0,h.H5)(e.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION")))})}(n,e);case"ExpressionStatement":return function Te(n,e){try{return"AssignmentExpression"===e.expression.type?f(n,e.expression):f(n,e.expression).then(t=>(0,i.Ue)(r=>{r(t===l.v?l.v:new l.I(t))}))}catch(t){return(0,i.d1)(t)}}(n,e);case"UpdateExpression":return function De(n,e){try{const t=e.argument;if("MemberExpression"===t.type){const r={t:null};return f(n,t.object).then(o=>{let a=null;return r.t=o,!0===t.computed?a=f(n,t.property):"Identifier"===t.property.type&&(a=(0,i.DB)(t.property.name)),a}).then(o=>(0,i.Ue)(a=>{const c=r.t;let s;if((0,l.a)(c)){if(!(0,l.j)(o))throw new Error("Invalid Parameter");if(o<0&&(o=c.length+o),o<0||o>=c.length)throw new Error("Assignment outside of array bounds");s=(0,l.t)(c[o]),c[o]="++"===e.operator?s+1:s-1}else if(c instanceof y.Z){if(!1===(0,l.f)(o))throw new Error("Dictionary accessor must be a string");if(!0!==c.hasField(o))throw new Error("Invalid Parameter");s=(0,l.t)(c.field(o)),c.setField(o,"++"===e.operator?s+1:s-1)}else{if(!(0,l.k)(c))throw(0,l.b)(c)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===(0,l.f)(o))throw new Error("Feature accessor must be a string");if(!0!==c.hasField(o))throw new Error("Invalid Parameter");s=(0,l.t)(c.field(o)),c.setField(o,"++"===e.operator?s+1:s-1)}a(!1===e.prefix?s:"++"===e.operator?s+1:s-1)}))}return(0,i.Ue)((r,o)=>{const a="Identifier"===e.argument.type?e.argument.name.toLowerCase():"";if(!a)throw new Error("Invalid identifier");let c;return null!==n.localScope&&void 0!==n.localScope[a]?(c=(0,l.t)(n.localScope[a].value),n.localScope[a]={value:"++"===e.operator?c+1:c-1,valueset:!0,node:e},void r(!1===e.prefix?c:"++"===e.operator?c+1:c-1)):void 0!==n.globalScope[a]?(c=(0,l.t)(n.globalScope[a].value),n.globalScope[a]={value:"++"===e.operator?c+1:c-1,valueset:!0,node:e},void r(!1===e.prefix?c:"++"===e.operator?c+1:c-1)):void o(new Error("Variable not recognised"))})}catch(t){return(0,i.d1)(t)}}(n,e);case"AssignmentExpression":return function Re(n,e){return(0,i.Ue)((t,r)=>{const o=e.left;if("MemberExpression"===o.type)f(n,e.right).then(a=>{try{f(n,o.object).then(c=>{try{let s=null;if(!0===o.computed)s=f(n,o.property);else{if("Identifier"!==o.property.type)throw new Error("Expected computed or identifier for assignemnt target");s=(0,i.DB)(o.property.name)}s.then(u=>{try{if((0,l.a)(c)){if(!(0,l.j)(u))throw new Error("Invalid Parameter");if(u<0&&(u=c.length+u),u<0||u>c.length)throw new Error("Assignment outside of array bounds");if(u===c.length){if("="!==e.operator)throw new Error("Invalid Parameter");c[u]=N(a,e.operator,c[u],e)}else c[u]=N(a,e.operator,c[u],e)}else if(c instanceof y.Z){if(!1===(0,l.f)(u))throw new Error("Dictionary accessor must be a string");if(!0===c.hasField(u))c.setField(u,N(a,e.operator,c.field(u),e));else{if("="!==e.operator)throw new Error("Invalid Parameter");c.setField(u,N(a,e.operator,null,e))}}else{if(!(0,l.k)(c))throw(0,l.b)(c)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===(0,l.f)(u))throw new Error("Feature accessor must be a string");if(!0===c.hasField(u))c.setField(u,N(a,e.operator,c.field(u),e));else{if("="!==e.operator)throw new Error("Invalid Parameter");c.setField(u,N(a,e.operator,null,e))}}t(l.v)}catch(v){r(v)}},r)}catch(s){r(s)}},r)}catch(c){r(c)}},r);else{const a=o.name.toLowerCase();if(null!==n.localScope&&void 0!==n.localScope[a])return void f(n,e.right).then(c=>{try{n.localScope[a]={value:N(c,e.operator,n.localScope[a].value,e),valueset:!0,node:e.right},t(l.v)}catch(s){r(s)}},r);void 0!==n.globalScope[a]?f(n,e.right).then(c=>{try{n.globalScope[a]={value:N(c,e.operator,n.globalScope[a].value,e),valueset:!0,node:e.right},t(l.v)}catch(s){r(s)}},r):r(new Error("Cannot assign undeclared variable"))}})}(n,e);case"ForStatement":return function Ne(n,e){try{return null!==e.init?f(n,e.init).then(()=>(0,i.Ue)((t,r)=>{T(n,e,{testResult:!0,lastAction:l.v},o=>{t(o)},o=>{r(o)},0)})):(0,i.Ue)((t,r)=>{T(n,e,{testResult:!0,lastAction:l.v},o=>{t(o)},o=>{r(o)},0)})}catch(t){return(0,i.d1)(t)}}(n,e);case"ForInStatement":return function Ue(n,e){return(0,i.Ue)((t,r)=>{f(n,e.right).then(o=>{try{let a=null;a="VariableDeclaration"===e.left.type?f(n,e.left):(0,i.DB)(),a.then(()=>{try{let c="";if("VariableDeclaration"===e.left.type){const u=e.left.declarations[0].id;"Identifier"===u.type&&(c=u.name)}else"Identifier"===e.left.type&&(c=e.left.name);if(!c)throw new Error((0,h.H5)(e,"RUNTIME","INVALIDVARIABLE"));c=c.toLowerCase();let s=null;if(null!==n.localScope&&void 0!==n.localScope[c]&&(s=n.localScope[c]),null===s&&void 0!==n.globalScope[c]&&(s=n.globalScope[c]),null===s)return void r(new Error((0,h.H5)(e,"RUNTIME","VARIABLENOTDECLARED")));(0,l.a)(o)||(0,l.f)(o)?C(n,e,o,{reject:r,resolve:t},s):(0,l.b)(o)?function we(n,e,t,r,o,a){try{if(void 0===a&&(a="i"),0===t.length)return void r.resolve(l.v);S(n,e,t,o,0,a,c=>{r.resolve(c)},c=>{r.reject(c)},0)}catch(c){r.reject(c)}}(n,e,o,{reject:r,resolve:t},s):o instanceof y.Z||(0,l.k)(o)?function Oe(n,e,t,r,o){try{C(n,e,t.keys(),r,o,"k")}catch(a){r.reject(a)}}(n,e,o,{reject:r,resolve:t},s):(0,l.q)(o)?b(o.iterator(n.abortSignal),n,e,o,s,u=>{t(u)},u=>{r(u)},0):C(n,e,[],{reject:r,resolve:t},s)}catch(c){r(c)}},r)}catch(a){r(a)}},r)})}(n,e);case"BreakStatement":return(0,i.DB)(l.m);case"EmptyStatement":return(0,i.DB)(l.v);case"ContinueStatement":return(0,i.DB)(l.n);case"TemplateElement":return function He(n,e){return(0,i.DB)(e.value?e.value.cooked:"")}(0,e);case"TemplateLiteral":return function Ze(n,e){return(0,i.Ue)(t=>{const r=[];(0,ae.Dt)(e.expressions,(o,a,c,s)=>f(n,a).then(u=>{r[c]=(0,l.d)(u)})).then(()=>{let o="",a=0;for(const c of e.quasis)o+=c.value?c.value.cooked:"",!1===c.tail&&(o+=r[a]?r[a]:"",a++);t(o)})})}(n,e);case"Identifier":return L(n,e);case"MemberExpression":return function be(n,e){try{return f(n,e.object).then(t=>{try{return null===t?(0,i.d1)(new Error((0,h.H5)(e,"RUNTIME","NOTFOUND"))):!1===e.computed?"Identifier"===e.property.type?t instanceof y.Z||(0,l.k)(t)?(0,i.DB)(t.field(e.property.name)):t instanceof Z.Z?(0,i.DB)(G(t,e.property.name,0,e)):(0,i.d1)(new Error((0,h.H5)(e,"RUNTIME","INVALIDTYPE"))):(0,i.d1)(new Error((0,h.H5)(e,"RUNTIME","INVALIDTYPE"))):f(n,e.property).then(r=>(0,i.Ue)((o,a)=>{if(t instanceof y.Z||(0,l.k)(t))(0,l.f)(r)?o(t.field(r)):a(new Error((0,h.H5)(e,"RUNTIME","INVALIDTYPE")));else if(t instanceof Z.Z)(0,l.f)(r)?o(G(t,r,0,e)):a(new Error((0,h.H5)(e,"RUNTIME","INVALIDTYPE")));else if((0,l.a)(t))if((0,l.j)(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=t.length+r),r>=t.length||r<0)throw new Error((0,h.H5)(e,"RUNTIME","OUTOFBOUNDS"));o(t[r])}else a(new Error((0,h.H5)(e,"RUNTIME","INVALIDTYPE")));else if((0,l.b)(t))if((0,l.j)(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=t.length()+r),r>=t.length()||r<0)throw new Error((0,h.H5)(e,"RUNTIME","OUTOFBOUNDS"));o(t.get(r))}else a(new Error((0,h.H5)(e,"RUNTIME","INVALIDTYPE")));else if((0,l.f)(t))if((0,l.j)(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=t.length+r),r>=t.length||r<0)throw new Error((0,h.H5)(e,"RUNTIME","OUTOFBOUNDS"));o(t[r])}else a(new Error((0,h.H5)(e,"RUNTIME","INVALIDTYPE")));else a(new Error((0,h.H5)(e,"RUNTIME","INVALIDTYPE")))}))}catch(r){return E(r)}})}catch(t){return E(t)}}(n,e);case"Literal":return k(e.value);case"CallExpression":return function je(n,e){try{if("Identifier"!==e.callee.type)return E((0,h.H5)(e,"RUNTIME","ONLYNODESSUPPORTED"));if(null!==n.localScope&&void 0!==n.localScope[e.callee.name.toLowerCase()]){const t=n.localScope[e.callee.name.toLowerCase()];return t.value instanceof l.N?t.value.fn(n,e):t.value instanceof D.Z?Q(n,e,t.value.definition):E((0,h.H5)(e,"RUNTIME","NOTAFUNCTION"))}if(void 0!==n.globalScope[e.callee.name.toLowerCase()]){const t=n.globalScope[e.callee.name.toLowerCase()];return t.value instanceof l.N?t.value.fn(n,e):t.value instanceof D.Z?Q(n,e,t.value.definition):E((0,h.H5)(e,"RUNTIME","NOTAFUNCTION"))}return E((0,h.H5)(e,"RUNTIME","NOTFOUND"))}catch(t){return E(t)}}(n,e);case"UnaryExpression":return function Le(n,e){try{return f(n,e.argument).then(t=>(0,i.Ue)((r,o)=>{(0,l.i)(t)&&"!"===e.operator?r(!t):"-"===e.operator?r(-1*(0,l.t)(t)):"+"===e.operator?r(1*(0,l.t)(t)):"~"===e.operator?r(~(0,l.t)(t)):o(new Error((0,h.H5)(e,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR")))}))}catch(t){return E(t)}}(n,e);case"BinaryExpression":return function Fe(n,e){try{return(0,i.$6)([f(n,e.left),f(n,e.right)]).then(t=>(0,i.Ue)((r,o)=>{const a=t[0],c=t[1];switch(e.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":r((0,l.h)((0,l.t)(a),(0,l.t)(c),e.operator));case"==":r((0,l.e)(a,c));break;case"!=":r(!(0,l.e)(a,c));break;case"<":case">":case"<=":case">=":r((0,l.g)(a,c,e.operator));break;case"+":(0,l.f)(a)||(0,l.f)(c)?r((0,l.d)(a)+(0,l.d)(c)):r((0,l.t)(a)+(0,l.t)(c));break;case"-":r((0,l.t)(a)-(0,l.t)(c));break;case"*":r((0,l.t)(a)*(0,l.t)(c));break;case"/":r((0,l.t)(a)/(0,l.t)(c));break;case"%":r((0,l.t)(a)%(0,l.t)(c));break;default:o(new Error((0,h.H5)(e,"RUNTIME","OPERATORNOTRECOGNISED")))}}))}catch(t){return E(t)}}(n,e);case"LogicalExpression":return function xe(n,e){return(0,i.Ue)((t,r)=>{"AssignmentExpression"!==e.left.type&&"UpdateExpression"!==e.left.type?"AssignmentExpression"!==e.right.type&&"UpdateExpression"!==e.right.type?f(n,e.left).then(o=>{try{if(!(0,l.i)(o))throw new Error((0,h.H5)(e,"RUNTIME","ONLYBOOLEAN"));switch(e.operator){case"||":!0===o?t(o):f(n,e.right).then(a=>{try{if(!(0,l.i)(a))throw new Error((0,h.H5)(e,"RUNTIME","ONLYORORAND"));t(a)}catch(c){r(c)}},r);break;case"&&":!1===o?t(o):f(n,e.right).then(a=>{try{if(!(0,l.i)(a))throw new Error((0,h.H5)(e,"RUNTIME","ONLYORORAND"));t(a)}catch(c){r(c)}},r);break;default:throw new Error((0,h.H5)(e,"RUNTIME","ONLYORORAND"))}}catch(a){r(a)}},r):r(new Error((0,h.H5)(e.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"))):r(new Error((0,h.H5)(e.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION")))})}(n,e);case"ArrayExpression":return function Be(n,e){try{const t=[];for(let r=0;r<e.elements.length;r++)t.push(f(n,e.elements[r]));return(0,i.$6)(t).then(r=>(0,i.Ue)((o,a)=>{for(let c=0;c<r.length;c++){if((0,l.c)(r[c]))return void a(new Error((0,h.H5)(e,"RUNTIME","FUNCTIONCONTEXTILLEGAL")));r[c]===l.v&&(r[c]=null)}o(r)}))}catch(t){return E(t)}}(n,e);case"ObjectExpression":return function ye(n,e){try{const t=[];for(let r=0;r<e.properties.length;r++)t.push(f(n,e.properties[r]));return(0,i.$6)(t).then(r=>(0,i.Ue)(o=>{const a={};for(let s=0;s<r.length;s++){const u=r[s];if((0,l.c)(u.value))throw new Error("Illegal Argument");if(!1===(0,l.f)(u.key))throw new Error("Illegal Argument");a[u.key.toString()]=u.value===l.v?null:u.value}const c=new y.Z(a);c.immutable=!1,o(c)}))}catch(t){return E(t)}}(n,e);case"Property":return function Ie(n,e){try{return f(n,e.value).then(t=>(0,i.Ue)(r=>{"Identifier"===e.key.type?r({key:e.key.name,value:t}):f(n,e.key).then(o=>{r({key:o,value:t})})}))}catch(t){return(0,i.d1)(t)}}(n,e);default:return E((0,h.H5)(e,"RUNTIME","UNREOGNISED"))}}catch(r){return E(r)}}function K(n,e,t){try{return f(n,e.body).then(r=>{try{return t.lastAction=r,t.lastAction===l.m||t.lastAction instanceof l.R?(t.testResult=!1,(0,i.DB)(t)):null!==e.update?f(n,e.update).then(()=>(0,i.DB)(t)):(0,i.DB)(t)}catch(o){return(0,i.d1)(o)}})}catch(r){return(0,i.d1)(r)}}function T(n,e,t,r,o,a){try{(function _e(n,e,t){try{return null!==e.test?f(n,e.test).then(r=>{try{return!0===n.abortSignal.aborted?(0,i.d1)(new Error("Cancelled")):(t.testResult=r,!1===t.testResult?(0,i.DB)(t):!0!==t.testResult?(0,i.d1)(new Error((0,h.H5)(e,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"))):K(n,e,t))}catch(o){return(0,i.d1)(o)}}):K(n,e,t)}catch(r){return(0,i.d1)(r)}})(n,e,t).then(()=>{try{!0===t.testResult?++a>R?(a=0,setTimeout(()=>{T(n,e,t,r,o,a)},0)):T(n,e,t,r,o,a):r(t.lastAction instanceof l.R?t.lastAction:l.v)}catch(c){o(c)}},c=>{o(c)})}catch(c){o(c)}}function A(n,e,t,r,o,a,c,s,u,v){try{if(r<=a)return void s(l.v);o.value="k"===c?t[a]:a,f(n,e.body).then(d=>{try{d instanceof l.R?s(d):d===l.m?s(l.v):++v>R?(v=0,setTimeout(()=>{A(n,e,t,r,o,a+1,c,s,u,v)},0)):A(n,e,t,r,o,a+1,c,s,u,v)}catch(g){u(g)}},d=>{u(d)})}catch(d){u(d)}}function S(n,e,t,r,o,a,c,s,u){try{if(t.length()<=o)return void c(l.v);r.value="k"===a?t.get(o):o,f(n,e.body).then(v=>{v instanceof l.R?c(v):v===l.m?c(l.v):++u>R?(u=0,setTimeout(()=>{S(n,e,t,r,o+1,a,c,s,u)},0)):S(n,e,t,r,o+1,a,c,s,u)},v=>{s(v)})}catch(v){s(v)}}function C(n,e,t,r,o,a){try{if(void 0===a&&(a="i"),0===t.length)return void r.resolve(l.v);A(n,e,t,t.length,o,0,a,c=>{r.resolve(c)},c=>{r.reject(c)},0)}catch(c){r.reject(c)}}function b(n,e,t,r,o,a,c,s){try{n.next().then(u=>{try{if(null===u)a(l.v);else{const v=j.Z.createFromGraphicLikeObject(u.geometry,u.attributes,r);v._underlyingGraphic=u,o.value=v,f(e,t.body).then(d=>{try{d===l.m?a(l.v):d instanceof l.R?a(d):++s>R?(s=0,setTimeout(()=>{b(n,e,t,r,o,a,c,s)},0)):b(n,e,t,r,o,a,c,s)}catch(g){c(g)}},d=>{c(d)})}}catch(v){c(v)}},u=>{c(u)})}catch(u){c(u)}}function N(n,e,t,r){switch(e){case"=":return n===l.v?null:n;case"/=":return(0,l.t)(t)/(0,l.t)(n);case"*=":return(0,l.t)(t)*(0,l.t)(n);case"-=":return(0,l.t)(t)-(0,l.t)(n);case"+=":return(0,l.f)(t)||(0,l.f)(n)?(0,l.d)(t)+(0,l.d)(n):(0,l.t)(t)+(0,l.t)(n);case"%=":return(0,l.t)(t)%(0,l.t)(n);default:throw new Error((0,h.H5)(r,"RUNTIME","OPERATORNOTRECOGNISED"))}}function V(n,e,t){try{return t>=e.body.length?(0,i.DB)(l.v):(0,i.Ue)((r,o)=>{f(n,e.body[t]).then(a=>{try{a instanceof l.R||a===l.m||a===l.n||t===e.body.length-1?r(a):V(n,e,t+1).then(r,o)}catch(c){o(c)}},o)})}catch(r){return E(r)}}function Y(n,e,t){return(0,i.Ue)((r,o)=>{t>=e.declarations.length?r(l.v):f(n,e.declarations[t]).then(()=>{t===e.declarations.length-1?r(l.v):Y(n,e,t+1).then(()=>{r(l.v)},o)},o)})}let _=0;function G(n,e,t,r){let o;switch(e=e.toLowerCase()){case"hasz":{const a=n.hasZ;return void 0!==a&&a}case"hasm":{const a=n.hasM;return void 0!==a&&a}case"spatialreference":{let a=n.spatialReference._arcadeCacheId;if(void 0===a){let s=!0;Object.freeze&&Object.isFrozen(n.spatialReference)&&(s=!1),s&&(_++,n.spatialReference._arcadeCacheId=_,a=_)}const c=new y.Z({wkt:n.spatialReference.wkt,wkid:n.spatialReference.wkid});return void 0!==a&&(c._arcadeCacheId="SPREF"+a.toString()),c}}switch(n.type){case"extent":switch(e){case"xmin":case"xmax":case"ymin":case"ymax":case"zmin":case"zmax":case"mmin":case"mmax":{const a=n[e];return void 0!==a?a:null}case"type":return"Extent"}break;case"polygon":switch(e){case"rings":return o=n.cache._arcadeCacheId,void 0===o&&(_++,o=_,n.cache._arcadeCacheId=o),new H.Z(n.rings,n.spatialReference,!0===n.hasZ,!0===n.hasM,o);case"type":return"Polygon"}break;case"point":switch(e){case"x":case"y":case"z":case"m":return void 0!==n[e]?n[e]:null;case"type":return"Point"}break;case"polyline":switch(e){case"paths":return o=n.cache._arcadeCacheId,void 0===o&&(_++,o=_,n.cache._arcadeCacheId=o),new H.Z(n.paths,n.spatialReference,!0===n.hasZ,!0===n.hasM,o);case"type":return"Polyline"}break;case"multipoint":switch(e){case"points":return o=n.cache._arcadeCacheId,void 0===o&&(_++,o=_,n.cache._arcadeCacheId=o),new oe.Z(n.points,n.spatialReference,!0===n.hasZ,!0===n.hasM,o,1);case"type":return"Multipoint"}}throw new Error((0,h.H5)(r,"RUNTIME","PROPERTYNOTFOUND"))}function L(n,e){return(0,i.Ue)((t,r)=>{const o=e.name.toLowerCase();if(null===n.localScope||void 0===n.localScope[o])if(void 0===n.globalScope[o])r(new Error((0,h.H5)(e,"RUNTIME","VARIABLENOTFOUND")));else{const a=n.globalScope[o];!0===a.valueset?t(a.value):null!==a.d?a.d.then(t,r):(a.d=f(n,a.node),a.d.then(c=>{try{a.value=c,a.valueset=!0,t(c)}catch(s){r(s)}},r))}else{const a=n.localScope[o];!0===a.valueset?t(a.value):null!==a.d?a.d.then(t,r):(a.d=f(n,a.node),a.d.then(c=>{try{a.value=c,a.valueset=!0,t(c)}catch(s){r(s)}},r))}})}const m={};function z(n){return null===n?"":(0,l.a)(n)||(0,l.b)(n)?"Array":(0,l.o)(n)?"Date":(0,l.f)(n)?"String":(0,l.i)(n)?"Boolean":(0,l.j)(n)?"Number":n instanceof re.Z?"Attachment":n instanceof te.Z?"Portal":n instanceof y.Z?"Dictionary":(0,l.k)(n)?"Feature":n instanceof pe.Z?"Point":n instanceof ve.Z?"Polygon":n instanceof ge.Z?"Polyline":n instanceof Ee.Z?"Multipoint":n instanceof de.Z?"Extent":(0,l.c)(n)?"Function":(0,l.q)(n)?"FeatureSet":(0,l.r)(n)?"FeatureSetCollection":n===l.v?"":"number"==typeof n&&isNaN(n)?"Number":"Unrecognised Type"}function $(n,e,t,r){return(0,i.Ue)((o,a)=>{f(n,e.arguments[t]).then(c=>{try{if((0,l.e)(c,r))return void f(n,e.arguments[t+1]).then(o,a);{const s=e.arguments.length-t;return 1===s?void f(n,e.arguments[t]).then(o,a):(2===s&&o(null),3===s?void f(n,e.arguments[t+2]).then(o,a):void $(n,e,t+2,r).then(o,a))}}catch(s){a(s)}},a)})}function X(n,e,t,r){return(0,i.Ue)((o,a)=>{!0===r?f(n,e.arguments[t+1]).then(o,a):e.arguments.length-t==3?f(n,e.arguments[t+2]).then(o,a):f(n,e.arguments[t+2]).then(c=>{try{if(!1===(0,l.i)(c))return void a(new Error("WHEN needs boolean test conditions"));X(n,e,t+2,c).then(o,a)}catch(s){a(s)}})})}function B(n,e){try{const t=n.length,r=Math.floor(t/2);return 0===t?(0,i.DB)([]):1===t?(0,i.DB)([n[0]]):(0,i.Ue)((o,a)=>{const c=[B(n.slice(0,r),e),B(n.slice(r,t),e)];(0,i.$6)(c).then(s=>{try{M(s[0],s[1],e,[]).then(o,a)}catch(u){a(u)}},a)})}catch(t){return E(t)}}function M(n,e,t,r){return(0,i.Ue)((o,a)=>{const c=r;n.length>0||e.length>0?n.length>0&&e.length>0?t(n[0],e[0]).then(s=>{try{isNaN(s)&&(s=1),s<=0?(c.push(n[0]),n=n.slice(1)):(c.push(e[0]),e=e.slice(1)),M(n,e,t,r).then(o,a)}catch(u){a(u)}},a):n.length>0?(c.push(n[0]),M(n=n.slice(1),e,t,r).then(o,a)):e.length>0&&(c.push(e[0]),e=e.slice(1),M(n,e,t,r).then(o,a)):o(r)})}function w(n,e){const t=n.length,r=Math.floor(t/2);return e||(e=function(o,a){return o<a?-1:o===a?0:1}),0===t?[]:1===t?[n[0]]:function We(n,e,t){const r=[];for(;n.length>0||e.length>0;)if(n.length>0&&e.length>0){let o=t(n[0],e[0]);isNaN(o)&&(o=1),o<=0?(r.push(n[0]),n=n.slice(1)):(r.push(e[0]),e=e.slice(1))}else n.length>0?(r.push(n[0]),n=n.slice(1)):e.length>0&&(r.push(e[0]),e=e.slice(1));return r}(w(n.slice(0,r),e),w(n.slice(r,t),e),e)}function J(n,e,t){try{const r=n.body;if(t.length!==n.params.length)return E(new Error("Invalid Parameter calls to function."));for(let o=0;o<t.length;o++){const a=n.params[o];"Identifier"===a.type&&(e.localScope[a.name.toLowerCase()]={d:null,value:t[o],valueset:!0,node:null})}return f(e,r).then(o=>(0,i.Ue)((a,c)=>{o instanceof l.R?a(o.value):o!==l.m?o!==l.n?a(o instanceof l.I?o.value:o):c(new Error("Cannot Continue from a Function")):c(new Error("Cannot Break from a Function"))}))}catch(r){return(0,i.d1)(r)}}function Q(n,e,t){return O(n,e,function(r,o,a){const c={spatialReference:n.spatialReference,services:n.services,console:n.console,lrucache:n.lrucache,interceptor:n.interceptor,localScope:{},abortSignal:n.abortSignal,globalScope:n.globalScope,depthCounter:n.depthCounter+1};if(c.depthCounter>64)throw new Error("Exceeded maximum function depth");return J(t,c,a)})}function F(n){return function(){const t={abortSignal:n.context.abortSignal,spatialReference:n.context.spatialReference,console:n.context.console,lrucache:n.context.lrucache,interceptor:n.context.interceptor,services:n.context.services,localScope:{},globalScope:n.context.globalScope,depthCounter:n.context.depthCounter+1};if(t.depthCounter>64)throw new Error("Exceeded maximum function depth");return J(n.definition,t,arguments)}}(0,le.r)(m,I),(0,he.r)(m,I),(0,ue.r)(m,I),(0,ie.r)(m,I),(0,fe.r)(m,I),(0,se.registerFunctions)({functions:m,compiled:!1,signatures:null,failDefferred:null,evaluateIdentifier:null,arcadeCustomFunctionHandler:null,mode:"async",standardFunction:I,standardFunctionAsync:O}),m.typeof=function(n,e){return I(n,e,function(t,r,o){(0,l.p)(o,1,1);const a=z(o[0]);if("Unrecognised Type"===a)throw new Error("Unrecognised Type");return a})},m.iif=function(n,e){return(0,i.Ue)((t,r)=>{(0,l.p)(null===e.arguments?[]:e.arguments,3,3),f(n,e.arguments[0]).then(o=>{try{if(!1===(0,l.i)(o))return void r(new Error("IF Function must have a boolean test condition"));(0,i.$6)([f(n,e.arguments[1]),f(n,e.arguments[2])]).then(a=>{t(o?a[0]:a[1])},r)}catch(a){r(a)}},r)})},m.decode=function(n,e){return(0,i.Ue)((t,r)=>{e.arguments.length<2?r(new Error("Missing Parameters")):2!==e.arguments.length?(e.arguments.length-1)%2!=0?f(n,e.arguments[0]).then(o=>{try{$(n,e,1,o).then(t,r)}catch(a){r(a)}},r):r(new Error("Must have a default value result.")):f(n,e.arguments[1]).then(t,r)})},m.when=function(n,e){try{return e.arguments.length<3?E("Missing Parameters"):e.arguments.length%2==0?E("Must have a default value result."):f(n,e.arguments[0]).then(t=>(0,i.Ue)((r,o)=>{!1!==(0,l.i)(t)?X(n,e,0,t).then(r,o):o(new Error("WHEN needs boolean test conditions"))}))}catch(t){return E(t)}},m.sort=function(n,e){return O(n,e,function(t,r,o){(0,l.p)(o,1,2);let a=o[0];if((0,l.b)(a)&&(a=a.toArray()),!1===(0,l.a)(a))return E(Error("Illegal Argument"));if(o.length>1)return!1===(0,l.c)(o[1])?E(Error("Illegal Argument")):B(a,F(o[1]));{let c=a;if(0===c.length)return(0,i.DB)([]);const s={};for(let d=0;d<c.length;d++){const g=z(c[d]);""!==g&&(s[g]=!0)}if(!0===s.Array||!0===s.Dictionary||!0===s.Feature||!0===s.Point||!0===s.Polygon||!0===s.Polyline||!0===s.Multipoint||!0===s.Extent||!0===s.Function)return(0,i.DB)(c.slice(0));let u=0,v="";for(const d in s)u++,v=d;return u>1||"String"===v?c=w(c,function(d,g){if(null==d||d===l.v)return null==g||g===l.v?0:1;if(null==g||g===l.v)return-1;const ee=(0,l.d)(d),ne=(0,l.d)(g);return ee<ne?-1:ee===ne?0:1}):"Number"===v?c=w(c,function(d,g){return d-g}):"Boolean"===v?c=w(c,function(d,g){return d===g?0:g?-1:1}):"Date"===v&&(c=w(c,function(d,g){return g-d})),(0,i.DB)(c)}})};const ke={failDefferred:E,resolveDeffered:k,fixSpatialReference:l.s,parseArguments:P,standardFunction:I,standardFunctionAsync:O,evaluateIdentifier:L,arcadeCustomFunction:F};for(const n in m)m[n]={value:new l.N(m[n]),valueset:!0,node:null};const U=function(){};function Ve(n){console.log(n)}(U.prototype=m).infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},U.prototype.pi={value:Math.PI,valueset:!0,node:null};const Ye=ke;function q(n){const e={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:I,standardFunctionAsync:O,failDefferred:E,evaluateIdentifier:L,arcadeCustomFunctionHandler:F};for(let t=0;t<n.length;t++)n[t].registerFunctions(e);for(const t in e.functions)m[t]={value:new l.N(e.functions[t]),valueset:!0,node:null},U.prototype[t]=m[t];for(let t=0;t<e.signatures.length;t++)(0,h.gW)(e.signatures[t],"async")}function Ge(n,e){let t=e.spatialReference;null==t&&(t=new me.Z({wkid:102100}));const r=function Ke(n,e){const t=new U;null==n&&(n={}),null==e&&(e={});const r=new y.Z({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});r.immutable=!1,t.textformatting={value:r,valueset:!0,node:null};for(const o in e)t[o]={value:new l.N(e[o]),native:!0,valueset:!0,node:null};for(const o in n)t[o]=n[o]&&"esri.Graphic"===n[o].declaredClass?{value:j.Z.createFromGraphic(n[o]),valueset:!0,node:null}:{value:n[o],valueset:!0,node:null};return t}(e.vars,e.customfunctions);return f({spatialReference:t,services:e.services,abortSignal:null==e.abortSignal?{aborted:!1}:e.abortSignal,globalScope:r,console:e.console?e.console:Ve,lrucache:e.lrucache,interceptor:e.interceptor,localScope:null,depthCounter:1},n.body[0].body).then(o=>(0,i.Ue)((a,c)=>{o instanceof l.R&&(o=o.value),o instanceof l.I&&(o=o.value),o===l.v&&(o=null),o!==l.m?o!==l.n?o instanceof l.N||o instanceof D.Z?c(new Error("Cannot return FUNCTION")):a(o):c(new Error("Cannot return CONTINUE")):c(new Error("Cannot return BREAK"))}))}function ze(n,e){return(0,h.mb)(n)}function $e(n,e){return(0,h.FS)(n,e,"full")}function Xe(n,e){return(0,h.bV)(n,e)}function Je(n,e){return(0,h.w8)(n,e)}function Qe(n){return(0,h.Vf)(n)}q([ce.A])}}]);