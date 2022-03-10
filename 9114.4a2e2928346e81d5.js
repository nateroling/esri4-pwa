"use strict";var pe=Object.defineProperty,z=Object.getOwnPropertySymbols,de=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable,B=(v,d,r)=>d in v?pe(v,d,{enumerable:!0,configurable:!0,writable:!0,value:r}):v[d]=r,A=(v,d)=>{for(var r in d||(d={}))de.call(d,r)&&B(v,r,d[r]);if(z)for(var r of z(d))ue.call(d,r)&&B(v,r,d[r]);return v};(self.webpackChunkesri4_pwa=self.webpackChunkesri4_pwa||[]).push([[9114],{49114:(v,d,r)=>{r.r(d),r.d(d,{default:()=>se});var U=r(15861),o=r(17626),$=(r(29132),r(88879)),M=(r(65787),r(48701)),V=r(26584),x=r(58817),f=r(62208),X=r(99959),H=r(94113),w=r(14889),a=r(77712),S=(r(90912),r(68653)),Z=r(76898),K=r(99433),L=r(54614),Q=r(13924),Y=r(37053),k=r(15382),q=(r(85931),r(8314),r(28705)),j=r(63602),E=r(552),G=r(99555),D=r(51815),_=r(26540);let c=class extends((0,E.h)((0,G.M)(j.Z))){constructor(e){super(e),this.elevationInfo=null,this.graphics=new D.J,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};(0,o._)([(0,a.Cb)({type:_.Z})],c.prototype,"elevationInfo",void 0),(0,o._)([(0,a.Cb)((0,q.z)(D.J,"graphics"))],c.prototype,"graphics",void 0),(0,o._)([(0,a.Cb)({type:["show","hide"]})],c.prototype,"listMode",void 0),(0,o._)([(0,a.Cb)()],c.prototype,"screenSizePerspectiveEnabled",void 0),(0,o._)([(0,a.Cb)({readOnly:!0})],c.prototype,"type",void 0),(0,o._)([(0,a.Cb)({constructOnly:!0})],c.prototype,"internal",void 0),c=(0,o._)([(0,Z.j)("esri.layers.GraphicsLayer")],c);const ee=c;var te=r(1476),re=r(49286),oe=r(6647),P=r(36255),le=r(88493),ie=r(52068),F=r(57213),ae=r(35540),O=r(65234),I=r(2004);function J(e){return e.layers.some(t=>null!=t.layerDefinition.visibilityField)}const W=new P.Z({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),ne=new P.Z({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let C=class extends ee{constructor(){super(...arguments),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",e=>{e.item.sourceLayer=this.layer}),this.graphics.on("after-remove",e=>{e.item.sourceLayer=null})}get sublayers(){return this.graphics}};(0,o._)([(0,a.Cb)({readOnly:!0})],C.prototype,"sublayers",null),(0,o._)([(0,a.Cb)()],C.prototype,"layer",void 0),(0,o._)([(0,a.Cb)({readOnly:!0})],C.prototype,"visibilityMode",void 0),C=(0,o._)([(0,Z.j)("esri.layers.MapNotesLayer.MapNotesSublayer")],C);const R=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",layerId:"polygonLayer",title:"Polygons",identifyingSymbol:(new le.Z).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",layerId:"polylineLayer",title:"Polylines",identifyingSymbol:(new ie.Z).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",layerId:"multipointLayer",title:"Multipoints",identifyingSymbol:(new F.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"pointLayer",title:"Points",identifyingSymbol:(new F.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"textLayer",title:"Text",identifyingSymbol:(new ae.Z).toJSON()}];let i=class extends((0,E.h)((0,G.M)((0,re.q)((0,oe.I)((0,X.R)(j.Z)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.minScale=0,this.maxScale=0,this.spatialReference=O.Z.WGS84,this.sublayers=new M.Z(R.map(t=>new C({id:t.layerId,title:t.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,l){return{operations:{supportsMapNotesEditing:!J(t)&&"portal-item"!==(null==l?void 0:l.origin)}}}readFeatureCollections(e,t,l){if(!J(t))return null;const s=t.layers.map(y=>{const n=new k.default;return n.read(y,l),n});return new M.Z({items:s})}readLegacyfeatureCollectionJSON(e,t){return J(t)?(0,x.d9)(t.featureCollection):null}readFullExtent(e,t){if(!t.layers.length||t.layers.every(s=>!s.layerDefinition.extent))return new I.Z({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:O.Z.WGS84});const l=O.Z.fromJSON(t.layers[0].layerDefinition.spatialReference);return t.layers.reduce((s,y)=>{const n=y.layerDefinition.extent;return n?I.Z.fromJSON(n).union(s):s},new I.Z({spatialReference:l}))}readMinScale(e,t){for(const l of t.layers)if(null!=l.layerDefinition.minScale)return l.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const l of t.layers)if(null!=l.layerDefinition.maxScale)return l.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?O.Z.fromJSON(t.layers[0].layerDefinition.spatialReference):O.Z.WGS84}readSublayers(e,t,l){if(J(t))return null;const s=[];for(let n=0;n<t.layers.length;n++){var y;const{layerDefinition:p,featureSet:u}=t.layers[n],g=null!=(y=p.geometryType)?y:u.geometryType,b=R.find(m=>{var h,N,T;return g===m.geometryTypeJSON&&(null==(h=p.drawingInfo)||null==(N=h.renderer)||null==(T=N.symbol)?void 0:T.type)===m.identifyingSymbol.type});if(b){const m=new C({id:b.layerId,title:p.name,layer:this,graphics:u.features.map(({geometry:h,symbol:N,attributes:T,popupInfo:ye})=>$.Z.fromJSON({attributes:T,geometry:h,symbol:N,popupTemplate:ye}))});s.push(m)}}return new M.Z(s)}writeSublayers(e,t,l,s){const{minScale:y,maxScale:n}=this;if((0,f.Wi)(e))return;const p=e.some(m=>m.graphics.length>0);var u;if(!this.capabilities.operations.supportsMapNotesEditing)return void(p&&(null==s||null==(u=s.messages)||u.push(new V.Z("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const g=[];let b=this.spatialReference.toJSON();e:for(const m of e)for(const h of m.graphics)if((0,f.pC)(h.geometry)){b=h.geometry.spatialReference.toJSON();break e}for(const m of R){const h=e.find(N=>m.layerId===N.id);this._writeMapNoteSublayer(g,h,m,y,n,b,s)}(0,H.RB)("featureCollection.layers",g,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=(0,x.d9)(e),Object.assign(e,e.featureCollection)),super.read(e,t)}beforeSave(){var e=this;return(0,U.Z)(function*(){if((0,f.Wi)(e.sublayers))return;let t=null;const l=[];for(const y of e.sublayers)for(const n of y.graphics)if((0,f.pC)(n.geometry)){const p=n.geometry;t?(0,Y.fS)(p.spatialReference,t)||((0,L.Up)(p.spatialReference,t)||(0,L.kR)()||(yield(0,L.zD)()),n.geometry=(0,L.iV)(p,t)):t=p.spatialReference,l.push(n)}const s=yield(0,Q.aX)(l.map(y=>y.geometry));l.forEach((y,n)=>y.geometry=s[n])})()}_findSublayer(e){var t,l;return(0,f.Wi)(this.sublayers)?null:null!=(t=null==(l=this.sublayers)?void 0:l.find(s=>s.id===e))?t:null}_writeMapNoteSublayer(e,t,l,s,y,n,p){const u=[];if(!(0,f.Wi)(t)){for(const g of t.graphics)this._writeMapNote(u,g,l.geometryType,p);this._normalizeObjectIds(u,W),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:(0,x.d9)(l.identifyingSymbol)}},geometryType:l.geometryTypeJSON,minScale:s,maxScale:y,objectIdField:"OBJECTID",fields:[W.toJSON(),ne.toJSON()],spatialReference:n},featureSet:{features:u,geometryType:l.geometryTypeJSON}})}}_writeMapNote(e,t,l,s){if((0,f.Wi)(t))return;const{geometry:y,symbol:n,popupTemplate:p}=t;if((0,f.Wi)(y))return;var u,g;if(y.type!==l)return void(null==s||null==(u=s.messages)||u.push(new w.Z("map-notes-layer:invalid-geometry-type",`Geometry "${y.type}" cannot be saved in "${l}" layer`,{graphic:t})));if((0,f.Wi)(n))return void(null==s||null==(g=s.messages)||g.push(new w.Z("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const b={attributes:A({},t.attributes),geometry:y.toJSON(),symbol:n.toJSON()};(0,f.pC)(p)&&(b.popupInfo=p.toJSON()),e.push(b)}_normalizeObjectIds(e,t){const l=t.name;let s=(0,te.S)(l,e)+1;const y=new Set;for(const n of e){n.attributes||(n.attributes={});const{attributes:p}=n;(null==p[l]||y.has(p[l]))&&(p[l]=s++),y.add(p[l])}}};(0,o._)([(0,a.Cb)({readOnly:!0})],i.prototype,"capabilities",void 0),(0,o._)([(0,S.r)(["portal-item","web-map"],"capabilities",["layers"])],i.prototype,"readCapabilities",null),(0,o._)([(0,a.Cb)({readOnly:!0})],i.prototype,"featureCollections",void 0),(0,o._)([(0,S.r)(["web-map","portal-item"],"featureCollections",["layers"])],i.prototype,"readFeatureCollections",null),(0,o._)([(0,a.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],i.prototype,"featureCollectionJSON",void 0),(0,o._)([(0,S.r)(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],i.prototype,"readLegacyfeatureCollectionJSON",null),(0,o._)([(0,a.Cb)({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],i.prototype,"featureCollectionType",void 0),(0,o._)([(0,a.Cb)({json:{write:!1}})],i.prototype,"fullExtent",void 0),(0,o._)([(0,S.r)(["web-map","portal-item"],"fullExtent",["layers"])],i.prototype,"readFullExtent",null),(0,o._)([(0,a.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],i.prototype,"legendEnabled",void 0),(0,o._)([(0,a.Cb)({type:["show","hide"]})],i.prototype,"listMode",void 0),(0,o._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],i.prototype,"minScale",void 0),(0,o._)([(0,S.r)(["web-map","portal-item"],"minScale",["layers"])],i.prototype,"readMinScale",null),(0,o._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],i.prototype,"maxScale",void 0),(0,o._)([(0,S.r)(["web-map","portal-item"],"maxScale",["layers"])],i.prototype,"readMaxScale",null),(0,o._)([(0,a.Cb)({readOnly:!0})],i.prototype,"multipointLayer",null),(0,o._)([(0,a.Cb)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],i.prototype,"operationalLayerType",void 0),(0,o._)([(0,a.Cb)({readOnly:!0})],i.prototype,"pointLayer",null),(0,o._)([(0,a.Cb)({readOnly:!0})],i.prototype,"polygonLayer",null),(0,o._)([(0,a.Cb)({readOnly:!0})],i.prototype,"polylineLayer",null),(0,o._)([(0,a.Cb)({type:O.Z})],i.prototype,"spatialReference",void 0),(0,o._)([(0,S.r)(["web-map","portal-item"],"spatialReference",["layers"])],i.prototype,"readSpatialReference",null),(0,o._)([(0,a.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],i.prototype,"sublayers",void 0),(0,o._)([(0,S.r)("web-map","sublayers",["layers"])],i.prototype,"readSublayers",null),(0,o._)([(0,K.c)("web-map","sublayers")],i.prototype,"writeSublayers",null),(0,o._)([(0,a.Cb)({readOnly:!0})],i.prototype,"textLayer",null),(0,o._)([(0,a.Cb)()],i.prototype,"title",void 0),(0,o._)([(0,a.Cb)({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),i=(0,o._)([(0,Z.j)("esri.layers.MapNotesLayer")],i);const se=i}}]);