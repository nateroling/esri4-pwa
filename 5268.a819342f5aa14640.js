"use strict";var We=Object.defineProperty,Xe=Object.defineProperties,$e=Object.getOwnPropertyDescriptors,ze=Object.getOwnPropertySymbols,Je=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable,Ye=(oe,K,I)=>K in oe?We(oe,K,{enumerable:!0,configurable:!0,writable:!0,value:I}):oe[K]=I,de=(oe,K)=>{for(var I in K||(K={}))Je.call(K,I)&&Ye(oe,I,K[I]);if(ze)for(var I of ze(K))Qe.call(K,I)&&Ye(oe,I,K[I]);return oe},Ke=(oe,K)=>Xe(oe,$e(K));(self.webpackChunkesri4_pwa=self.webpackChunkesri4_pwa||[]).push([[5268],{98148:(oe,K,I)=>{function V(D,L){const E=D.count;L||(L=new D.TypedArrayConstructor(E));for(let B=0;B<E;B++)L[B]=D.get(B);return L}I.d(K,{m:()=>V}),Object.freeze({__proto__:null,copy:function A(D,L,E){const B=D.typedBuffer,x=D.typedBufferStride,v=L.typedBuffer,C=L.typedBufferStride,S=E?E.count:L.count;let N=(E&&E.dstIndex?E.dstIndex:0)*x,M=(E&&E.srcIndex?E.srcIndex:0)*C;for(let F=0;F<S;++F)B[N]=v[M],N+=x,M+=C},makeDense:V})},35995:(oe,K,I)=>{I.d(K,{f:()=>D,n:()=>X});var A=I(67866);function V(E,B,x){const v=E.typedBuffer,C=E.typedBufferStride,S=B.typedBuffer,N=B.typedBufferStride,M=x?x.count:B.count;let F=(x&&x.dstIndex?x.dstIndex:0)*C,R=(x&&x.srcIndex?x.srcIndex:0)*N;for(let W=0;W<M;++W)v[F]=S[R],v[F+1]=S[R+1],F+=C,R+=N}function X(E,B,x){const v=E.typedBuffer,C=E.typedBufferStride,S=B.typedBuffer,N=B.typedBufferStride,M=x?x.count:B.count;let F=(x&&x.dstIndex?x.dstIndex:0)*C,R=(x&&x.srcIndex?x.srcIndex:0)*N;if((0,A.U)(B.elementType)){const W=(0,A.Op)(B.elementType);if((0,A.B3)(B.elementType))for(let ee=0;ee<M;++ee)v[F]=Math.max(S[R]/W,-1),v[F+1]=Math.max(S[R+1]/W,-1),F+=C,R+=N;else for(let ee=0;ee<M;++ee)v[F]=S[R]/W,v[F+1]=S[R+1]/W,F+=C,R+=N}else V(E,B,x);return E}function D(E,B,x,v){var C,S;const N=E.typedBuffer,M=E.typedBufferStride,F=null!=(C=null==v?void 0:v.count)?C:E.count;let R=(null!=(S=null==v?void 0:v.dstIndex)?S:0)*M;for(let W=0;W<F;++W)N[R]=B,N[R+1]=x,R+=M}Object.freeze({__proto__:null,copy:V,normalizeIntegerBuffer:X,fill:D})},63657:(oe,K,I)=>{I.d(K,{a:()=>L,s:()=>D,t:()=>X});var A=I(96286);function X(B,x,v){if(B.count!==x.count)return void A.c.error("source and destination buffers need to have the same number of elements");const C=B.count,S=v[0],N=v[1],M=v[2],F=v[3],R=v[4],W=v[5],ee=v[6],Z=v[7],Q=v[8],J=B.typedBuffer,ne=B.typedBufferStride,re=x.typedBuffer,ge=x.typedBufferStride;for(let Te=0;Te<C;Te++){const xe=Te*ne,pe=Te*ge,me=re[pe],Ee=re[pe+1],fe=re[pe+2],Oe=re[pe+3];J[xe]=S*me+F*Ee+ee*fe,J[xe+1]=N*me+R*Ee+Z*fe,J[xe+2]=M*me+W*Ee+Q*fe,J[xe+3]=Oe}}function D(B,x,v){const C=Math.min(B.count,x.count),S=B.typedBuffer,N=B.typedBufferStride,M=x.typedBuffer,F=x.typedBufferStride;for(let R=0;R<C;R++){const W=R*N,ee=R*F;S[W]=v*M[ee],S[W+1]=v*M[ee+1],S[W+2]=v*M[ee+2],S[W+3]=v*M[ee+3]}}function L(B,x,v){const C=Math.min(B.count,x.count),S=B.typedBuffer,N=B.typedBufferStride,M=x.typedBuffer,F=x.typedBufferStride;for(let R=0;R<C;R++){const W=R*N,ee=R*F;S[W]=M[ee]>>v,S[W+1]=M[ee+1]>>v,S[W+2]=M[ee+2]>>v,S[W+3]=M[ee+3]>>v}}Object.freeze({__proto__:null,transformMat4:function V(B,x,v){if(B.count!==x.count)return void A.c.error("source and destination buffers need to have the same number of elements");const C=B.count,S=v[0],N=v[1],M=v[2],F=v[3],R=v[4],W=v[5],ee=v[6],Z=v[7],Q=v[8],J=v[9],ne=v[10],re=v[11],ge=v[12],Te=v[13],xe=v[14],pe=v[15],me=B.typedBuffer,Ee=B.typedBufferStride,fe=x.typedBuffer,Oe=x.typedBufferStride;for(let he=0;he<C;he++){const ie=he*Ee,Se=he*Oe,ye=fe[Se],le=fe[Se+1],ue=fe[Se+2],ve=fe[Se+3];me[ie]=S*ye+R*le+Q*ue+ge*ve,me[ie+1]=N*ye+W*le+J*ue+Te*ve,me[ie+2]=M*ye+ee*le+ne*ue+xe*ve,me[ie+3]=F*ye+Z*le+re*ue+pe*ve}},transformMat3:X,scale:D,shiftRight:L})},63470:(oe,K,I)=>{function A(D,L,E){const B=D.typedBuffer,x=D.typedBufferStride,v=L.typedBuffer,C=L.typedBufferStride,S=E?E.count:L.count;let N=(E&&E.dstIndex?E.dstIndex:0)*x,M=(E&&E.srcIndex?E.srcIndex:0)*C;for(let F=0;F<S;++F)B[N]=v[M],B[N+1]=v[M+1],B[N+2]=v[M+2],B[N+3]=v[M+3],N+=x,M+=C}function V(D,L,E,B,x,v){var C,S;const N=D.typedBuffer,M=D.typedBufferStride,F=null!=(C=null==v?void 0:v.count)?C:D.count;let R=(null!=(S=null==v?void 0:v.dstIndex)?S:0)*M;for(let W=0;W<F;++W)N[R]=L,N[R+1]=E,N[R+2]=B,N[R+3]=x,R+=M}I.d(K,{c:()=>A,f:()=>V}),Object.freeze({__proto__:null,copy:A,fill:V})},4794:(oe,K,I)=>{function A(){return[0,0,0,0]}function X(Q,J,ne,re){return[Q,J,ne,re]}function L(Q,J){return new Float64Array(Q,J,4)}function B(){return X(1,1,1,1)}function x(){return X(1,0,0,0)}function v(){return X(0,1,0,0)}function C(){return X(0,0,1,0)}function S(){return X(0,0,0,1)}I.d(K,{a:()=>L,c:()=>A,f:()=>X});const M=B(),F=x(),R=v(),W=C(),ee=S();Object.freeze({__proto__:null,create:A,clone:function V(Q){return[Q[0],Q[1],Q[2],Q[3]]},fromValues:X,fromArray:function D(Q){const J=[0,0,0,0],ne=Math.min(4,Q.length);for(let re=0;re<ne;++re)J[re]=Q[re];return J},createView:L,zeros:function E(){return[0,0,0,0]},ones:B,unitX:x,unitY:v,unitZ:C,unitW:S,ZEROS:[0,0,0,0],ONES:M,UNIT_X:F,UNIT_Y:R,UNIT_Z:W,UNIT_W:ee})},97535:(oe,K,I)=>{I.d(K,{x:()=>V});var A=I(79682);class V{constructor(L){this.allocator=L,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,A.Y)(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const L=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*X);this._items.length=Math.min(L,this._items.length),this._itemsPtr=0}_grow(){for(let L=0;L<Math.max(8,Math.min(this._items.length,X));L++)this._items.push(this.allocator())}}const X=1024},10349:(oe,K,I)=>{I.d(K,{G:()=>V});var A=I(26584);class V{constructor(D,L,E=""){this.major=D,this.minor=L,this._context=E}lessThan(D,L){return this.major<D||D===this.major&&this.minor<L}since(D,L){return!this.lessThan(D,L)}validate(D){if(this.major!==D.major)throw new A.Z((this._context&&this._context+":")+"unsupported-version",`Required major ${this._context&&this._context+" "}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:D})}clone(){return new V(this.major,this.minor,this._context)}static parse(D,L=""){const[E,B]=D.split("."),x=/^\s*\d+\s*$/;if(!E||!E.match||!E.match(x))throw new A.Z((L&&L+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:D});if(!B||!B.match||!B.match(x))throw new A.Z((L&&L+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:D});const v=parseInt(E,10),C=parseInt(B,10);return new V(v,C,L)}}},67866:(oe,K,I)=>{function V(E){switch(E){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8;default:return}}function X(E){switch(E){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function D(E){switch(E){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function L(E){switch(E){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}I.d(K,{n1:()=>V,U:()=>D,B3:()=>X,Op:()=>L}),I(8314)},60490:(oe,K,I)=>{I.d(K,{gS:()=>C});var A=I(67866);function C(S,N){return new S(new ArrayBuffer(N*S.ElementCount*(0,A.n1)(S.ElementType)))}Object.freeze({__proto__:null,copy:function V(S,N,M){const F=S.typedBuffer,R=S.typedBufferStride,W=N.typedBuffer,ee=N.typedBufferStride,Z=M?M.count:N.count;let Q=(M&&M.dstIndex?M.dstIndex:0)*R,J=(M&&M.srcIndex?M.srcIndex:0)*ee;for(let ne=0;ne<Z;++ne){for(let re=0;re<9;++re)F[Q+re]=W[J+re];Q+=R,J+=ee}}}),Object.freeze({__proto__:null,copy:function D(S,N,M){const F=S.typedBuffer,R=S.typedBufferStride,W=N.typedBuffer,ee=N.typedBufferStride,Z=M?M.count:N.count;let Q=(M&&M.dstIndex?M.dstIndex:0)*R,J=(M&&M.srcIndex?M.srcIndex:0)*ee;for(let ne=0;ne<Z;++ne){for(let re=0;re<16;++re)F[Q+re]=W[J+re];Q+=R,J+=ee}}}),I(98148),I(35995),I(9554),I(63470)},26242:(oe,K,I)=>{I.d(K,{MP:()=>R,WM:()=>N});var A=I(27306),V=I(79682),X=I(550),D=I(43703),L=I(78451),E=I(99770),B=I(28093),x=I(4794);class v{constructor(Z,Q,J){this.itemByteSize=Z,this.itemCreate=Q,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(J/this.itemByteSize)}get(){0===this._itemsPtr&&(0,V.Y)(()=>this._reset());const Z=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=Z;){const Q=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize);for(let J=0;J<this._itemsPerBuffer;++J)this._items.push(this.itemCreate(Q,J*this.itemByteSize));this._buffers.push(Q)}return this._items[this._itemsPtr++]}_reset(){const Z=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>Z;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(Z=C){return new v(16,E.c,Z)}static createVec3f64(Z=C){return new v(24,B.b,Z)}static createVec4f64(Z=C){return new v(32,x.a,Z)}static createMat3f64(Z=C){return new v(72,X.a,Z)}static createMat4f64(Z=C){return new v(128,D.a,Z)}static createQuatf64(Z=C){return new v(32,L.c,Z)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}const C=4*A.Y8.KILOBYTES,N=(v.createVec2f64(),v.createVec3f64()),R=(v.createVec4f64(),v.createMat3f64(),v.createMat4f64());v.createQuatf64()},9160:(oe,K,I)=>{I.d(K,{C:()=>x});var A=I(15861),V=I(84792),X=I(59213),D=I(26584),L=I(62208),E=I(10699),B=I(21726);class x{constructor(S){this.streamDataRequester=S}loadJSON(S,N){var M=this;return(0,A.Z)(function*(){return M._load("json",S,N)})()}loadBinary(S,N){var M=this;return(0,A.Z)(function*(){return(0,B.HK)(S)?((0,E.k_)(N),(0,B.AH)(S)):M._load("binary",S,N)})()}loadImage(S,N){var M=this;return(0,A.Z)(function*(){return M._load("image",S,N)})()}_load(S,N,M){var F=this;return(0,A.Z)(function*(){if((0,L.Wi)(F.streamDataRequester))return(yield(0,V.default)(N,{responseType:v[S]})).data;const R=yield(0,X.q6)(F.streamDataRequester.request(N,S,M));if(!0===R.ok)return R.value;throw(0,E.r9)(R.error),new D.Z("",`Request for resource failed: ${R.error}`)})()}}const v={image:"image",binary:"array-buffer",json:"json"}},96170:(oe,K,I)=>{I.d(K,{jX:()=>L,DA:()=>D,nh:()=>X});var A=I(55713),V=I(73825);function X(E,B=V.p){return"number"==typeof E?B(E):(0,A.Uc)(E)||(0,A.lq)(E)?new Uint32Array(E):E}function D(E){const B="number"==typeof E?E:E.length;if(B<3)return new Uint16Array(0);const x=B-2,v=x<=65536?new Uint16Array(3*x):new Uint32Array(3*x);if("number"==typeof E){let C=0;for(let S=0;S<x;S+=1)S%2==0?(v[C++]=S,v[C++]=S+1,v[C++]=S+2):(v[C++]=S+1,v[C++]=S,v[C++]=S+2)}else{let C=0;for(let S=0;S<x;S+=1)if(S%2==0){const M=E[S+1],F=E[S+2];v[C++]=E[S],v[C++]=M,v[C++]=F}else{const M=E[S],F=E[S+2];v[C++]=E[S+1],v[C++]=M,v[C++]=F}}return v}function L(E){const B="number"==typeof E?E:E.length;if(B<3)return new Uint16Array(0);const x=B-2,v=x<=65536?new Uint16Array(3*x):new Uint32Array(3*x);if("number"==typeof E){let C=0;for(let S=0;S<x;++S)v[C++]=0,v[C++]=S+1,v[C++]=S+2;return v}{const C=E[0];let S=E[1],N=0;for(let M=0;M<x;++M){const F=E[M+2];v[N++]=C,v[N++]=S,v[N++]=F,S=F}return v}}},93831:(oe,K,I)=>{I.d(K,{z:()=>_e});var A=I(15861),V=I(62208),X=I(43703),D=I(26584);const E=I(63290).Z.getLogger("esri.views.3d.glTF");var ne,re,T,x=I(67969),S=I(94573),N=I(88159),M=I(21726),F=I(10349),R=I(28347),W=I(48977),ee=I(78451),Z=I(60479),Q=I(98148);class J{constructor(a){this.data=a,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const a=this.offset4;return this.offset4+=1,this.dataUint32[a]}readUint8Array(a){const _=4*this.offset4;return this.offset4+=a/4,new Uint8Array(this.data,_,a)}remainingBytes(){return this.data.byteLength-4*this.offset4}}(T=ne||(ne={})).SCALAR="SCALAR",T.VEC2="VEC2",T.VEC3="VEC3",T.VEC4="VEC4",T.MAT2="MAT2",T.MAT3="MAT3",T.MAT4="MAT4",function(T){T[T.ARRAY_BUFFER=34962]="ARRAY_BUFFER",T[T.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(re||(re={}));const ge={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},Te={pbrMetallicRoughness:ge,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},xe={ESRI_externalColorMixMode:"tint"},pe=(T={})=>{const a=de(de({},ge),T.pbrMetallicRoughness),_=function me(T){switch(T.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:(0,S.Bg)(T.ESRI_externalColorMixMode),T.ESRI_externalColorMixMode="tint"}return T}(de(de({},xe),T.extras));return Ke(de(de({},Te),T),{pbrMetallicRoughness:a,extras:_})},Ee={magFilter:x.cw.LINEAR,minFilter:x.cw.LINEAR_MIPMAP_LINEAR,wrapS:x.e8.REPEAT,wrapT:x.e8.REPEAT};class ie{constructor(a,_,h,d,y){this.context=a,this.errorContext=_,this.uri=h,this.json=d,this.glbBuffer=y,this.bufferLoaders=new Map,this.textureLoaders=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=function Oe(T){let a,_;return T.replace(/^(.*\/)?([^/]*)$/,(h,d,y)=>(a=d||"",_=y||"","")),{dirPart:a,filePart:_}}(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),_.errorUnsupportedIf(null==d.scenes,"Scenes must be defined."),_.errorUnsupportedIf(null==d.meshes,"Meshes must be defined"),_.errorUnsupportedIf(null==d.nodes,"Nodes must be defined."),this._computeNodeParents()}static load(a,_,h,d){var y=this;return(0,A.Z)(function*(){if((0,M.HK)(h)){const H=(0,M.sJ)(h);if("model/gltf-binary"!==H.mediaType)try{const P=JSON.parse(H.isBase64?atob(H.data):H.data);return new ie(a,_,h,P)}catch(P){}const $=(0,M.AH)(h);if(ie._isGLBData($))return y._fromGLBData(a,_,h,$)}if(h.endsWith(".gltf")){const H=yield a.loadJSON(h,d);return new ie(a,_,h,H)}const O=yield a.loadBinary(h,d);if(ie._isGLBData(O))return y._fromGLBData(a,_,h,O);const G=yield a.loadJSON(h,d);return new ie(a,_,h,G)})()}static _isGLBData(a){const _=new J(a);return _.remainingBytes()>=4&&1179937895===_.readUint32()}static _fromGLBData(a,_,h,d){return(0,A.Z)(function*(){const y=yield ie._parseGLBData(_,d);return new ie(a,_,h,y.json,y.binaryData)})()}static _parseGLBData(a,_){return(0,A.Z)(function*(){const h=new J(_);a.assert(h.remainingBytes()>=12,"GLB binary data is insufficiently large.");const d=h.readUint32(),y=h.readUint32(),O=h.readUint32();a.assert(1179937895===d,"Magic first 4 bytes do not fit to expected GLB value."),a.assert(_.byteLength>=O,"GLB binary data is smaller than header specifies."),a.errorUnsupportedIf(2!==y,"An unsupported GLB container version was detected. Only version 2 is supported.");let G,H,$=0;for(;h.remainingBytes()>=8;){const P=h.readUint32(),q=h.readUint32();0===$?(a.assert(1313821514===q,"First GLB chunk must be JSON."),a.assert(P>=0,"No JSON data found."),G=yield De(h.readUint8Array(P))):1===$?(a.errorUnsupportedIf(5130562!==q,"Second GLB chunk expected to be BIN."),H=h.readUint8Array(P)):a.warnUnsupported("More than 2 GLB chunks detected. Skipping."),$+=1}return G||a.error("No GLB JSON chunk detected."),{json:G,binaryData:H}})()}getBuffer(a,_){var h=this;return(0,A.Z)(function*(){const d=h.json.buffers[a],y=h.errorContext;if(null==d.uri)return y.assert(null!=h.glbBuffer,"GLB buffer not present"),h.glbBuffer;const O=yield h._getBufferLoader(a,_);return y.assert(O.byteLength===d.byteLength,"Buffer byte lengths should match."),O})()}_getBufferLoader(a,_){var h=this;return(0,A.Z)(function*(){const d=h.bufferLoaders.get(a);if(d)return d;const O=h.context.loadBinary(h._resolveUri(h.json.buffers[a].uri),_).then(G=>new Uint8Array(G));return h.bufferLoaders.set(a,O),O})()}getAccessor(a,_){var h=this;return(0,A.Z)(function*(){const d=h.errorContext;d.errorUnsupportedIf(!h.json.accessors,"Accessors missing.");const y=h.json.accessors[a];d.errorUnsupportedIf(null==(null==y?void 0:y.bufferView),"Some accessor does not specify a bufferView."),d.errorUnsupportedIf(y.type in[ne.MAT2,ne.MAT3,ne.MAT4],`AttributeType ${y.type} is not supported`);const O=h.json.bufferViews[y.bufferView],G=yield h.getBuffer(O.buffer,_),H=ue[y.type],$=ve[y.componentType],P=H*$,q=O.byteStride||P;return{raw:G.buffer,byteStride:q,byteOffset:G.byteOffset+(O.byteOffset||0)+(y.byteOffset||0),entryCount:y.count,isDenselyPacked:q===P,componentCount:H,componentByteSize:$,componentType:y.componentType,min:y.min,max:y.max,normalized:!!y.normalized}})()}getIndexData(a,_){var h=this;return(0,A.Z)(function*(){if(null==a.indices)return null;const d=yield h.getAccessor(a.indices,_);if(d.isDenselyPacked)switch(d.componentType){case x.g.UNSIGNED_BYTE:return new Uint8Array(d.raw,d.byteOffset,d.entryCount);case x.g.UNSIGNED_SHORT:return new Uint16Array(d.raw,d.byteOffset,d.entryCount);case x.g.UNSIGNED_INT:return new Uint32Array(d.raw,d.byteOffset,d.entryCount)}else switch(d.componentType){case x.g.UNSIGNED_BYTE:return(0,Q.m)(h._wrapAccessor(Z.D_,d));case x.g.UNSIGNED_SHORT:return(0,Q.m)(h._wrapAccessor(Z.av,d));case x.g.UNSIGNED_INT:return(0,Q.m)(h._wrapAccessor(Z.Nu,d))}})()}getPositionData(a,_){var h=this;return(0,A.Z)(function*(){const d=h.errorContext;d.errorUnsupportedIf(null==a.attributes.POSITION,"No POSITION vertex data found.");const y=yield h.getAccessor(a.attributes.POSITION,_);return d.errorUnsupportedIf(y.componentType!==x.g.FLOAT,"Expected type FLOAT for POSITION vertex attribute, but found "+Ne[y.componentType]),d.errorUnsupportedIf(3!==y.componentCount,"POSITION vertex attribute must have 3 components, but found "+y.componentCount.toFixed()),h._wrapAccessor(Z.ct,y)})()}getNormalData(a,_){var h=this;return(0,A.Z)(function*(){const d=h.errorContext;d.assert(null!=a.attributes.NORMAL,"No NORMAL vertex data found.");const y=yield h.getAccessor(a.attributes.NORMAL,_);return d.errorUnsupportedIf(y.componentType!==x.g.FLOAT,"Expected type FLOAT for NORMAL vertex attribute, but found "+Ne[y.componentType]),d.errorUnsupportedIf(3!==y.componentCount,"NORMAL vertex attribute must have 3 components, but found "+y.componentCount.toFixed()),h._wrapAccessor(Z.ct,y)})()}getTangentData(a,_){var h=this;return(0,A.Z)(function*(){const d=h.errorContext;d.assert(null!=a.attributes.TANGENT,"No TANGENT vertex data found.");const y=yield h.getAccessor(a.attributes.TANGENT,_);return d.errorUnsupportedIf(y.componentType!==x.g.FLOAT,"Expected type FLOAT for TANGENT vertex attribute, but found "+Ne[y.componentType]),d.errorUnsupportedIf(4!==y.componentCount,"TANGENT vertex attribute must have 4 components, but found "+y.componentCount.toFixed()),new Z.ek(y.raw,y.byteOffset,y.byteStride,y.byteOffset+y.byteStride*y.entryCount)})()}getTextureCoordinates(a,_){var h=this;return(0,A.Z)(function*(){const d=h.errorContext;d.assert(null!=a.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const y=yield h.getAccessor(a.attributes.TEXCOORD_0,_);return d.errorUnsupportedIf(2!==y.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+y.componentCount.toFixed()),y.componentType===x.g.FLOAT?h._wrapAccessor(Z.Eu,y):(d.errorUnsupportedIf(!y.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),function Ae(T){switch(T.componentType){case x.g.BYTE:return new Z.Vs(T.raw,T.byteOffset,T.byteStride,T.byteOffset+T.byteStride*T.entryCount);case x.g.UNSIGNED_BYTE:return new Z.xA(T.raw,T.byteOffset,T.byteStride,T.byteOffset+T.byteStride*T.entryCount);case x.g.SHORT:return new Z.or(T.raw,T.byteOffset,T.byteStride,T.byteOffset+T.byteStride*T.entryCount);case x.g.UNSIGNED_SHORT:return new Z.TS(T.raw,T.byteOffset,T.byteStride,T.byteOffset+T.byteStride*T.entryCount);case x.g.UNSIGNED_INT:return new Z.qt(T.raw,T.byteOffset,T.byteStride,T.byteOffset+T.byteStride*T.entryCount);case x.g.FLOAT:return new Z.Eu(T.raw,T.byteOffset,T.byteStride,T.byteOffset+T.byteStride*T.entryCount);default:return void(0,S.Bg)(T.componentType)}}(y))})()}getVertexColors(a,_){var h=this;return(0,A.Z)(function*(){const d=h.errorContext;d.assert(null!=a.attributes.COLOR_0,"No COLOR_0 vertex data found.");const y=yield h.getAccessor(a.attributes.COLOR_0,_);if(d.errorUnsupportedIf(4!==y.componentCount&&3!==y.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+y.componentCount.toFixed()),4===y.componentCount){if(y.componentType===x.g.FLOAT)return h._wrapAccessor(Z.ek,y);if(y.componentType===x.g.UNSIGNED_BYTE)return h._wrapAccessor(Z.mc,y);if(y.componentType===x.g.UNSIGNED_SHORT)return h._wrapAccessor(Z.v6,y)}else if(3===y.componentCount){if(y.componentType===x.g.FLOAT)return h._wrapAccessor(Z.ct,y);if(y.componentType===x.g.UNSIGNED_BYTE)return h._wrapAccessor(Z.ne,y);if(y.componentType===x.g.UNSIGNED_SHORT)return h._wrapAccessor(Z.mw,y)}d.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+Ne[y.componentType])})()}hasPositions(a){return void 0!==a.attributes.POSITION}hasNormals(a){return void 0!==a.attributes.NORMAL}hasVertexColors(a){return void 0!==a.attributes.COLOR_0}hasTextureCoordinates(a){return void 0!==a.attributes.TEXCOORD_0}hasTangents(a){return void 0!==a.attributes.TANGENT}getMaterial(a,_,h){var d=this;return(0,A.Z)(function*(){let y=d.materialCache.get(a.material);if(!y){const O=null!=a.material?pe(d.json.materials[a.material]):pe(),G=O.pbrMetallicRoughness,H=d.hasVertexColors(a),$=d.getTexture(G.baseColorTexture,_),P=d.getTexture(O.normalTexture,_),q=h?d.getTexture(O.occlusionTexture,_):null,te=h?d.getTexture(O.emissiveTexture,_):null,ae=h?d.getTexture(G.metallicRoughnessTexture,_):null,we=null!=a.material?a.material:-1;y={alphaMode:O.alphaMode,alphaCutoff:O.alphaCutoff,color:G.baseColorFactor,doubleSided:!!O.doubleSided,colorTexture:yield $,normalTexture:yield P,name:O.name,id:we,occlusionTexture:yield q,emissiveTexture:yield te,emissiveFactor:O.emissiveFactor,metallicFactor:G.metallicFactor,roughnessFactor:G.roughnessFactor,metallicRoughnessTexture:yield ae,vertexColors:H,ESRI_externalColorMixMode:O.extras.ESRI_externalColorMixMode}}return y})()}getTexture(a,_){var h=this;return(0,A.Z)(function*(){if(!a)return null;h.errorContext.errorUnsupportedIf(0!==(a.texCoord||0),"Only TEXCOORD with index 0 is supported.");const d=a.index,y=h.errorContext,O=h.json.textures[d],G=(T=>de(de({},Ee),T))(null!=O.sampler?h.json.samplers[O.sampler]:{});y.errorUnsupportedIf(null==O.source,"Source is expected to be defined for a texture.");const H=h.json.images[O.source],$=yield h._loadTextureImageData(d,O,_);return(0,N.s1)(h.textureCache,d,()=>{const P=te=>33071===te||33648===te||10497===te,q=te=>(y.error(`Unexpected TextureSampler WrapMode: ${te}. Using default REPEAT(10497).`),10497);return{data:$,wrapS:P(G.wrapS)?G.wrapS:q(G.wrapS),wrapT:P(G.wrapT)?G.wrapT:q(G.wrapT),minFilter:G.minFilter,name:H.name,id:d}})})()}getNodeTransform(a){if(void 0===a)return ye;let _=this.nodeTransformCache.get(a);if(!_){const h=this.getNodeTransform(this._getNodeParent(a)),d=this.json.nodes[a];d.matrix?_=(0,R.m)((0,X.c)(),h,d.matrix):d.translation||d.rotation||d.scale?(_=(0,X.b)(h),d.translation&&(0,R.j)(_,_,d.translation),d.rotation&&(le[3]=(0,W.g)(le,d.rotation),(0,R.e)(_,_,le[3],le)),d.scale&&(0,R.h)(_,_,d.scale)):_=h,this.nodeTransformCache.set(a,_)}return _}_wrapAccessor(a,_){return new a(_.raw,_.byteOffset,_.byteStride,_.byteOffset+_.byteStride*(_.entryCount-1)+_.componentByteSize*_.componentCount)}_resolveUri(a){return(0,M.hF)(a,this.baseUri)}_getNodeParent(a){return this.nodeParentMap.get(a)}_checkVersionSupported(){const a=F.G.parse(this.json.asset.version,"glTF");Se.validate(a)}_checkRequiredExtensionsSupported(){const a=this.json;a.extensionsRequired&&0!==a.extensionsRequired.length&&this.errorContext.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+a.extensionsRequired.join(", "))}_computeNodeParents(){this.json.nodes.forEach((a,_)=>{a.children&&a.children.forEach(h=>{this.nodeParentMap.set(h,_)})})}_loadTextureImageData(a,_,h){var d=this;return(0,A.Z)(function*(){const y=d.textureLoaders.get(a);if(y)return y;const O=d._createTextureLoader(_,h);return d.textureLoaders.set(a,O),O})()}_createTextureLoader(a,_){var h=this;return(0,A.Z)(function*(){const d=h.json.images[a.source];if(d.uri)return h.context.loadImage(h._resolveUri(d.uri),_);const y=h.errorContext;y.errorUnsupportedIf(null==d.bufferView,"Image bufferView must be defined."),y.errorUnsupportedIf(null==d.mimeType,"Image mimeType must be defined.");const O=h.json.bufferViews[d.bufferView],G=yield h.getBuffer(O.buffer,_);return y.errorUnsupportedIf(null!=O.byteStride,"byteStride not supported for image buffer"),function je(T,a){return Be.apply(this,arguments)}(new Uint8Array(G.buffer,G.byteOffset+(O.byteOffset||0),O.byteLength),d.mimeType)})()}}const Se=new F.G(2,0,"glTF"),ye=(0,R.y)((0,X.c)(),Math.PI/2),le=(0,ee.a)(),ue={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},ve={[x.g.BYTE]:1,[x.g.UNSIGNED_BYTE]:1,[x.g.SHORT]:2,[x.g.UNSIGNED_SHORT]:2,[x.g.FLOAT]:4,[x.g.UNSIGNED_INT]:4};function De(T){return Me.apply(this,arguments)}function Me(){return Me=(0,A.Z)(function*(T){return new Promise((a,_)=>{const h=new Blob([T]),d=new FileReader;d.onload=()=>{a(JSON.parse(d.result))},d.onerror=y=>{_(y)},d.readAsText(h)})}),Me.apply(this,arguments)}function Be(){return Be=(0,A.Z)(function*(T,a){return new Promise((_,h)=>{const d=new Blob([T],{type:a}),y=URL.createObjectURL(d),O=new Image;O.addEventListener("load",()=>{URL.revokeObjectURL(y),"decode"in O?O.decode().then(()=>_(O),()=>_(O)):_(O)}),O.addEventListener("error",G=>{URL.revokeObjectURL(y),h(G)}),O.src=y})}),Be.apply(this,arguments)}const Ne={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let se=0;function _e(T,a){return Ie.apply(this,arguments)}function Ie(){return Ie=(0,A.Z)(function*(T,a,_={},h=!0){const d=yield ie.load(T,j,a,_),y="gltf_"+se++,O={lods:[],materials:new Map,textures:new Map,meta:ce(d)},G=!(!d.json.asset.extras||"symbolResource"!==d.json.asset.extras.ESRI_type),H=new Map;yield b(d,function(){var $=(0,A.Z)(function*(P,q,te,ae){var we;const Ue=null!=(we=H.get(te))?we:0;H.set(te,Ue+1);const be=void 0!==P.mode?P.mode:x.MX.TRIANGLES,Ce=be===x.MX.TRIANGLES||be===x.MX.TRIANGLE_STRIP||be===x.MX.TRIANGLE_FAN?be:null;if((0,V.Wi)(Ce))return void j.warnUnsupported("Unsupported primitive mode ("+k[be]+"). Skipping primitive.");if(!d.hasPositions(P))return void j.warn("Skipping primitive without POSITION vertex attribute.");const Le=d.getPositionData(P,_),Pe=d.getMaterial(P,_,h),Re=d.hasNormals(P)?d.getNormalData(P,_):null,Fe=d.hasTangents(P)?d.getTangentData(P,_):null,Ge=d.hasTextureCoordinates(P)?d.getTextureCoordinates(P,_):null,Ve=d.hasVertexColors(P)?d.getVertexColors(P,_):null,ke=d.getIndexData(P,_),He={transform:(0,X.b)(q),attributes:{position:yield Le,normal:Re?yield Re:null,texCoord0:Ge?yield Ge:null,color:Ve?yield Ve:null,tangent:Fe?yield Fe:null},indices:yield ke,primitiveType:Ce,material:Y(O,yield Pe,y)};let Ze=null;(0,V.pC)(O.meta)&&(0,V.pC)(O.meta.ESRI_lod)&&"screenSpaceRadius"===O.meta.ESRI_lod.metric&&(Ze=O.meta.ESRI_lod.thresholds[te]),O.lods[te]=O.lods[te]||{parts:[],name:ae,lodThreshold:Ze},O.lods[te].parts[Ue]=He});return function(P,q,te,ae){return $.apply(this,arguments)}}());for(const $ of O.lods)$.parts=$.parts.filter(P=>!!P);return{model:O,meta:{isEsriSymbolResource:G,uri:d.uri},customMeta:{}}}),Ie.apply(this,arguments)}function ce(T){let _=null;return T.json.nodes.forEach(h=>{const d=h.extras;(0,V.pC)(d)&&(d.ESRI_proxyEllipsoid||d.ESRI_lod)&&(_=d)}),_}function b(T,a){return w.apply(this,arguments)}function w(){return w=(0,A.Z)(function*(T,a){const _=T.json,h=_.scenes[_.scene||0].nodes,d=h.length>1,y=[];for(const H of h){const $=_.nodes[H];y.push(O(H,0)),U($)&&!d&&$.extensions.MSFT_lod.ids.forEach((P,q)=>O(P,q+1))}function O(H,$){return G.apply(this,arguments)}function G(){return(G=(0,A.Z)(function*(H,$){const P=_.nodes[H],q=T.getNodeTransform(H);if(j.warnUnsupportedIf(null!=P.weights,"Morph targets are not supported."),null!=P.mesh){const te=_.meshes[P.mesh];for(const ae of te.primitives)y.push(a(ae,q,$,te.name))}for(const te of P.children||[])y.push(O(te,$))})).apply(this,arguments)}yield Promise.all(y)}),w.apply(this,arguments)}function U(T){return T.extensions&&T.extensions.MSFT_lod&&Array.isArray(T.extensions.MSFT_lod.ids)}function Y(T,a,_){const h=y=>{const O=`${_}_tex_${y&&y.id}${y&&y.name?"_"+y.name:""}`;if(y&&!T.textures.has(O)){const G=function C(T,a={}){return{data:T,parameters:de({wrap:de({s:x.e8.REPEAT,t:x.e8.REPEAT},a.wrap),noUnpackFlip:!0,mipmap:!1},a)}}(y.data,{wrap:{s:y.wrapS,t:y.wrapT},mipmap:z.some(H=>H===y.minFilter),noUnpackFlip:!0});T.textures.set(O,G)}return O},d=`${_}_mat_${a.id}_${a.name}`;if(!T.materials.has(d)){const y=function v(T={}){return de({color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply"},T)}({color:[a.color[0],a.color[1],a.color[2]],opacity:a.color[3],alphaMode:a.alphaMode,alphaCutoff:a.alphaCutoff,doubleSided:a.doubleSided,colorMixMode:a.ESRI_externalColorMixMode,textureColor:a.colorTexture?h(a.colorTexture):void 0,textureNormal:a.normalTexture?h(a.normalTexture):void 0,textureOcclusion:a.occlusionTexture?h(a.occlusionTexture):void 0,textureEmissive:a.emissiveTexture?h(a.emissiveTexture):void 0,textureMetallicRoughness:a.metallicRoughnessTexture?h(a.metallicRoughnessTexture):void 0,emissiveFactor:[a.emissiveFactor[0],a.emissiveFactor[1],a.emissiveFactor[2]],metallicFactor:a.metallicFactor,roughnessFactor:a.roughnessFactor});T.materials.set(d,y)}return d}const j=new class B{error(a){throw new D.Z("gltf-loader-error",a)}errorUnsupported(a){throw new D.Z("gltf-loader-unsupported-feature",a)}errorUnsupportedIf(a,_){a&&this.errorUnsupported(_)}assert(a,_){a||this.error(_)}warn(a){E.warn(a)}warnUnsupported(a){this.warn("[Unsupported Feature] "+a)}warnUnsupportedIf(a,_){a&&this.warnUnsupported(_)}},z=[x.cw.LINEAR_MIPMAP_LINEAR,x.cw.LINEAR_MIPMAP_NEAREST],k=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"]},73825:(oe,K,I)=>{I.d(K,{NO:()=>Be,cM:()=>je,p:()=>De,DX:()=>Me});var A=I(84161),V=I(28093),X=I(97535);function he(b,w,U){return(0,A.f)(ye,w,b),(0,A.f)(le,U,b),(0,A.l)((0,A.c)(ye,ye,le))/2}I(67831),I(21286),I(26242),(0,V.c)(),(0,V.c)(),new X.x(()=>({origin:null,vector:null})),new X.x(function B(b){return b?{origin:(0,V.a)(b.origin),vector:(0,V.a)(b.vector)}:{origin:(0,V.c)(),vector:(0,V.c)()}}),new X.x(()=>({p0:null,p1:null,p2:null}));const ye=(0,V.c)(),le=(0,V.c)();let ue=(()=>{const b=new Uint32Array(131072);for(let w=0;w<b.length;++w)b[w]=w;return b})();const ve=new Uint16Array([0]),Ae=(()=>{const b=new Uint16Array(65536);for(let w=0;w<b.length;++w)b[w]=w;return b})();function De(b){if(1===b)return ve;if(b<Ae.length)return new Uint16Array(Ae.buffer,0,b);if(b>ue.length){const w=Math.max(2*ue.length,b);ue=new Uint32Array(w);for(let U=0;U<ue.length;U++)ue[U]=U}return new Uint32Array(ue.buffer,0,b)}function Me(b){if(1===b)return new Uint16Array(ve);if(b<Ae.length)return new Uint16Array(Ae.slice(0,b));if(b>ue.length){const w=new Uint32Array(b);for(let U=0;U<w.length;U++)w[U]=U;return w}return new Uint32Array(ue.slice(0,b))}function je(b,w,U){if(!b)return!1;const{size:Y,data:j}=b;(0,A.s)(U,0,0,0),(0,A.s)(ce,0,0,0);let z=0,k=0;for(let T=0;T<w.length-2;T+=3){const a=w[T+0]*Y,_=w[T+1]*Y,h=w[T+2]*Y;(0,A.s)(se,j[a+0],j[a+1],j[a+2]),(0,A.s)(_e,j[_+0],j[_+1],j[_+2]),(0,A.s)(Ie,j[h+0],j[h+1],j[h+2]);const d=he(se,_e,Ie);d?((0,A.b)(se,se,_e),(0,A.b)(se,se,Ie),(0,A.a)(se,se,1/3*d),(0,A.b)(U,U,se),z+=d):((0,A.b)(ce,ce,se),(0,A.b)(ce,ce,_e),(0,A.b)(ce,ce,Ie),k+=3)}return!(0===k&&0===z||(0!==z?((0,A.a)(U,U,1/z),0):0===k||((0,A.a)(U,ce,1/k),0)))}function Be(b,w,U){if(!b||!w)return!1;const{size:Y,data:j}=b;(0,A.s)(U,0,0,0);let z=-1,k=0;for(let T=0;T<w.length;T++){const a=w[T]*Y;z!==a&&(U[0]+=j[a+0],U[1]+=j[a+1],U[2]+=j[a+2],k++),z=a}return k>1&&(0,A.a)(U,U,1/k),k>0}const se=(0,V.c)(),_e=(0,V.c)(),Ie=(0,V.c)(),ce=(0,V.c)()},79331:(oe,K,I)=>{I.d(K,{K:()=>A});const A=2.1}}]);