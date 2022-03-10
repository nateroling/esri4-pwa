"use strict";var de=Object.defineProperty,pe=Object.defineProperties,ye=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,ve=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable,O=(l,s,e)=>s in l?de(l,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[s]=e,f=(l,s)=>{for(var e in s||(s={}))ve.call(s,e)&&O(l,e,s[e]);if(j)for(var e of j(s))me.call(s,e)&&O(l,e,s[e]);return l},P=(l,s)=>pe(l,ye(s));(self.webpackChunkesri4_pwa=self.webpackChunkesri4_pwa||[]).push([[289],{70289:(l,s,e)=>{e.r(s),e.d(s,{default:()=>le});var h,L=e(15861),r=e(17626),Z=(e(29132),e(73281)),F=(e(4832),e(49067),e(26284),e(54928),e(69357),e(40342)),N=e(14726),U=e(33474),c=e(32088),D=e(84792),E=e(65787),m=e(26584),J=e(63290),A=e(62208),G=e(99959),z=e(10699),o=e(77712),S=(e(85931),e(8314),e(90912)),b=e(68653),I=e(76898),M=e(383),C=e(71774),Q=e(63602),V=e(65088),Y=e(552),W=e(50107),B=e(35126),H=e(49286),X=e(6647),$=e(30346),w=e(99555),K=e(97941),y=e(13812),k=e(2777),q=e(55911),u=e(36630),_=e(170),ee=e(62667),te=e(86810);let v=h=class extends te.wq{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new h({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};(0,r._)([(0,o.Cb)({type:Number,json:{write:!0}})],v.prototype,"age",void 0),(0,r._)([(0,o.Cb)({type:Number,json:{write:!0}})],v.prototype,"ageReceived",void 0),(0,r._)([(0,o.Cb)({type:Number,json:{write:!0}})],v.prototype,"displayCount",void 0),(0,r._)([(0,o.Cb)({type:Number,json:{write:!0}})],v.prototype,"maxObservations",void 0),v=h=(0,r._)([(0,I.j)("esri.layers.support.PurgeOptions")],v);const R=v;var re=e(39683),oe=e(84952),ie=e(49430),ne=e(26540),x=e(65234),se=e(2004);const ae=J.Z.getLogger("esri.layers.StreamLayer"),T=(0,q.v)();let i=class extends((0,B.b)((0,Y.h)((0,K.n)((0,w.M)((0,$.Q)((0,V.Y)((0,H.q)((0,X.I)((0,G.R)((0,W.N)(Q.Z))))))))))){constructor(...n){super(...n),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new R,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=x.Z.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(n,t){return"string"==typeof n?f({url:n},t):n}load(n){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new m.Z("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const t=(0,A.pC)(n)?n.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},n).catch(z.r9).then(()=>this._fetchService(t))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(n){(0,u.YN)(n,this.fieldsIndex),this._set("renderer",n)}readRenderer(n,t,a){const d=(t=t.layerDefinition||t).drawingInfo&&t.drawingInfo.renderer||void 0;if(d){const p=(0,U.a)(d,t,a)||void 0;return p||ae.error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:a}),p}if(t.defaultSymbol)return t.types&&t.types.length?new N.Z({defaultSymbol:g(t.defaultSymbol,t,a),field:t.typeIdField,uniqueValueInfos:t.types.map(p=>({id:p.id,symbol:g(p.symbol,p,a)}))}):new F.Z({symbol:g(t.defaultSymbol,t,a)})}createPopupTemplate(n){return(0,ie.eZ)(this,n)}createQuery(){const n=new oe.Z;return n.returnGeometry=!0,n.outFields=["*"],n.where=this.definitionExpression||"1=1",n}getFieldDomain(n,t){if(!this.fields)return null;let a=null;return this.fields.some(d=>(d.name===n&&(a=d.domain),!!a)),a}getField(n){return this.fieldsIndex.get(n)}serviceSupportsSpatialReference(n){return!0}_fetchService(n){var t=this;return(0,L.Z)(function*(){var a;if(t.webSocketUrl){var d;if(null==(d=t.timeInfo)||!d.trackIdField)throw new m.Z("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!t.objectIdField)throw new m.Z("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!t.fields)throw new m.Z("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!t.geometryType)throw new m.Z("stream-layer:missing-metadata","The stream layer geometryType must be specified.");t.url=t.webSocketUrl}else if(!t.sourceJSON){const{data:p}=yield(0,D.default)(t.parsedUrl.path,{query:f(f({f:"json"},t.customParameters),t.parsedUrl.query),responseType:"json",signal:n});t.sourceJSON=p}return t.sourceJSON=P(f({},null!=(a=t.sourceJSON)?a:{}),{objectIdField:"__esri_stream_id__"}),t.read(t.sourceJSON,{origin:"service",url:t.parsedUrl}),(0,u.YN)(t.renderer,t.fieldsIndex),(0,u.UF)(t.timeInfo,t.fieldsIndex),(0,re.y)(t,{origin:"service"})})()}};(0,r._)([(0,o.Cb)({type:String})],i.prototype,"copyright",void 0),(0,r._)([(0,o.Cb)({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),(0,r._)([(0,o.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),(0,r._)([(0,o.Cb)({type:String})],i.prototype,"displayField",void 0),(0,r._)([(0,o.Cb)({type:ne.Z})],i.prototype,"elevationInfo",void 0),(0,r._)([(0,o.Cb)(k.d)],i.prototype,"featureReduction",void 0),(0,r._)([(0,o.Cb)(T.fields)],i.prototype,"fields",void 0),(0,r._)([(0,o.Cb)(T.fieldsIndex)],i.prototype,"fieldsIndex",void 0),(0,r._)([(0,o.Cb)({type:se.Z})],i.prototype,"geometryDefinition",void 0),(0,r._)([(0,o.Cb)({type:C.Mk.apiValues,json:{read:{reader:C.Mk.read}}})],i.prototype,"geometryType",void 0),(0,r._)([(0,o.Cb)(y.iR)],i.prototype,"labelsVisible",void 0),(0,r._)([(0,o.Cb)({type:[_.Z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:ee.r},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],i.prototype,"labelingInfo",void 0),(0,r._)([(0,o.Cb)(y.rn)],i.prototype,"legendEnabled",void 0),(0,r._)([(0,o.Cb)({type:["show","hide"]})],i.prototype,"listMode",void 0),(0,r._)([(0,o.Cb)({type:S.z8})],i.prototype,"maxReconnectionAttempts",void 0),(0,r._)([(0,o.Cb)({type:S.z8})],i.prototype,"maxReconnectionInterval",void 0),(0,r._)([(0,o.Cb)(y.u1)],i.prototype,"maxScale",void 0),(0,r._)([(0,o.Cb)(y.rO)],i.prototype,"minScale",void 0),(0,r._)([(0,o.Cb)({type:String})],i.prototype,"objectIdField",void 0),(0,r._)([(0,o.Cb)({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],i.prototype,"operationalLayerType",void 0),(0,r._)([(0,o.Cb)(y.C_)],i.prototype,"popupEnabled",void 0),(0,r._)([(0,o.Cb)({type:Z.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],i.prototype,"popupTemplate",void 0),(0,r._)([(0,o.Cb)({type:R})],i.prototype,"purgeOptions",void 0),(0,r._)([(0,o.Cb)({types:c.A,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:c.o,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],i.prototype,"renderer",null),(0,r._)([(0,b.r)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),(0,b.r)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],i.prototype,"readRenderer",null),(0,r._)([(0,o.Cb)(y.YI)],i.prototype,"screenSizePerspectiveEnabled",void 0),(0,r._)([(0,o.Cb)()],i.prototype,"sourceJSON",void 0),(0,r._)([(0,o.Cb)({type:x.Z,json:{origins:{service:{read:{source:"spatialReference"}}}}})],i.prototype,"spatialReference",void 0),(0,r._)([(0,o.Cb)({json:{read:!1}})],i.prototype,"type",void 0),(0,r._)([(0,o.Cb)(y.HQ)],i.prototype,"url",void 0),(0,r._)([(0,o.Cb)({type:Number})],i.prototype,"updateInterval",void 0),(0,r._)([(0,o.Cb)({type:String})],i.prototype,"webSocketUrl",void 0),i=(0,r._)([(0,I.j)("esri.layers.StreamLayer")],i);const g=(0,M.d)({types:E.QT}),le=i}}]);