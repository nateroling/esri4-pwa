"use strict";var N=Object.defineProperty,M=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,d=(y,_,e)=>_ in y?N(y,_,{enumerable:!0,configurable:!0,writable:!0,value:e}):y[_]=e,O=(y,_)=>{for(var e in _||(_={}))Q.call(_,e)&&d(y,e,_[e]);if(M)for(var e of M(_))z.call(_,e)&&d(y,e,_[e]);return y};(self.webpackChunkesri4_pwa=self.webpackChunkesri4_pwa||[]).push([[6306],{96306:(y,_,e)=>{e.r(_),e.d(_,{default:()=>J});var P=e(15861),s=e(17626),m=e(59318),D=e(84792),u=(e(65787),e(62208)),C=e(99959),h=e(10699),S=e(21726),l=e(77712),c=(e(85931),e(8314),e(90912),e(68653)),R=e(76898),L=e(2004),g=e(37053),j=e(63602),T=e(552),U=e(49286),f=e(6647),A=e(30346),I=e(99555),E=e(13812),p=e(10012),B=e(52068),K=e(13546),W=e(57213),b=e(88493);const x=["atom","xml"],G={base:p.Z,key:"type",typeMap:{"simple-line":B.Z},errorContext:"symbol"},Z={base:p.Z,key:"type",typeMap:{"picture-marker":K.Z,"simple-marker":W.Z},errorContext:"symbol"},F={base:p.Z,key:"type",typeMap:{"simple-fill":b.Z},errorContext:"symbol"};let o=class extends((0,T.h)((0,A.Q)((0,U.q)((0,f.I)((0,I.M)((0,C.R)(j.Z))))))){constructor(...t){super(...t),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(t,r){return"string"==typeof t?O({url:t},r):t}readFeatureCollections(t,r){return r.featureCollection.layers.forEach(i=>{var n;const a=i.layerDefinition.drawingInfo.renderer.symbol;a&&"esriSFS"===a.type&&null!=(n=a.outline)&&n.style.includes("esriSFS")&&(a.outline.style="esriSLSSolid")}),r.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const t=this._get("title");return t&&"defaults"!==this.originOf("title")?t:this.url?(0,S.vt)(this.url,x)||"GeoRSS":t||""}set title(t){this._set("title",t)}load(t){const r=(0,u.pC)(t)?t.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},t).catch(h.r9).then(()=>this._fetchService(r)).then(i=>{this.read(i,{origin:"service"})})),Promise.resolve(this)}hasDataChanged(){var t=this;return(0,P.Z)(function*(){const r=yield t._fetchService();return t.read(r,{origin:"service",ignoreDefaults:!0}),!0})()}_fetchService(t){var r=this;return(0,P.Z)(function*(){var i;const n=r.spatialReference,{data:a}=yield(0,D.default)(m.Z.geoRSSServiceUrl,{query:{url:r.url,refresh:!!r.loaded||void 0,outSR:(0,g.oR)(n)?void 0:null!=(i=n.wkid)?i:JSON.stringify(n)},signal:t});return a})()}_hasGeometry(t){var r,i;return null!=(r=null==(i=this.featureCollections)?void 0:i.some(n=>{var a,v;return(null==(a=n.featureSet)?void 0:a.geometryType)===t&&(null==(v=n.featureSet.features)?void 0:v.length)>0}))&&r}};(0,s._)([(0,l.Cb)()],o.prototype,"description",void 0),(0,s._)([(0,l.Cb)()],o.prototype,"featureCollections",void 0),(0,s._)([(0,c.r)("service","featureCollections",["featureCollection.layers"])],o.prototype,"readFeatureCollections",null),(0,s._)([(0,l.Cb)({type:L.Z,json:{name:"lookAtExtent"}})],o.prototype,"fullExtent",void 0),(0,s._)([(0,l.Cb)(E.id)],o.prototype,"id",void 0),(0,s._)([(0,l.Cb)(E.rn)],o.prototype,"legendEnabled",void 0),(0,s._)([(0,l.Cb)({types:G,json:{write:!0}})],o.prototype,"lineSymbol",void 0),(0,s._)([(0,l.Cb)({type:["show","hide"]})],o.prototype,"listMode",void 0),(0,s._)([(0,l.Cb)({types:Z,json:{write:!0}})],o.prototype,"pointSymbol",void 0),(0,s._)([(0,l.Cb)({types:F,json:{write:!0}})],o.prototype,"polygonSymbol",void 0),(0,s._)([(0,l.Cb)({type:["GeoRSS"]})],o.prototype,"operationalLayerType",void 0),(0,s._)([(0,l.Cb)(E.HQ)],o.prototype,"url",void 0),(0,s._)([(0,l.Cb)({json:{origins:{service:{read:{source:"name",reader:t=>t||void 0}}}}})],o.prototype,"title",null),(0,s._)([(0,l.Cb)({readOnly:!0,json:{read:!1},value:"geo-rss"})],o.prototype,"type",void 0),o=(0,s._)([(0,R.j)("esri.layers.GeoRSSLayer")],o);const J=o}}]);