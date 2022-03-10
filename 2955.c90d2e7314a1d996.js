"use strict";(self.webpackChunkesri4_pwa=self.webpackChunkesri4_pwa||[]).push([[2955],{36554:(B,S,t)=>{t.r(S),t.d(S,{default:()=>le});var R=t(15861),s=t(17626),U=(t(29132),t(73281)),j=(t(4832),t(49067),t(26284),t(54928),t(69357),t(40342),t(14726),t(33474),t(32088)),A=t(99959),i=t(77712),E=(t(85931),t(8314),t(90912),t(76898)),I=t(71774),N=t(63602),Z=t(26584),z=t(47996),x=t(62208),y=t(89628),H=t(17253),F=t(65234);let f=class extends z.Z{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getFeatureDefinition(){const{featureDefinition:{collection:e,layerDefinition:r,spatialReference:o,supportedCrs:a},layer:{apiKey:p,capabilities:u,customParameters:d}}=this;return{capabilities:u,collection:e,layerDefinition:r,queryParameters:{apiKey:p,customParameters:d},spatialReference:o,supportedCrs:a}}queryExtent(e,r={}){return null}queryFeatureCount(e,r={}){return null}queryFeatures(e,r={}){return this.queryFeaturesJSON(e,r).then(o=>H.default.fromJSON(o))}queryFeaturesJSON(e,r={}){const o=this.getFeatureDefinition();return this.load(r).then(()=>(0,y.yN)(o,e,r))}queryObjectIds(e,r={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator&&!this.featureDefinition.supportedCrs[e.wkid])}_conformsToType(e,r){var o;const a=new RegExp(`^${r}$`,"i");return null!=(o=e.conformsTo.some(p=>a.test(p)))&&o}_getCapabilities(e,r){var o,a,p,u,d,l,v;const c=(0,x.pC)(r)?null==(o=r.components)?void 0:o.parameters:null;return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:null!=(a=null!=(p=null==c||null==(u=c.limit)||null==(d=u.schema)?void 0:d.maximum)?p:null==c||null==(l=c.limitFeatures)||null==(v=l.schema)?void 0:v.maximum)?a:5e3,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getExtent(e){var r;const o=null==(r=e.extent)?void 0:r.spatial;if(!o)return null;const a=o.bbox[0],p=4===a.length;return{xmin:a[0],ymin:a[1],xmax:p?a[2]:a[3],ymax:p?a[3]:a[4],zmin:p?void 0:a[2],zmax:p?void 0:a[5],spatialReference:F.Z.WGS84.toJSON()}}_getStorageSpatialReference(e){var r;const o=null!=(r=e.storageCrs)?r:y.$9,a=(0,y.d)(o);return(0,x.Wi)(a)?F.Z.WGS84:new F.Z({wkid:a})}_getSupportedSpatialReferences(e,r){var o;const a="#/crs",p=null!=(o=e.crs)?o:[y.$9],u=p.includes(a)?p.filter(l=>l!==a).concat(r.crs):p,d=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return u.filter(l=>!d.test(l))}_loadOGCServices(e,r){var o=this;return(0,R.Z)(function*(){const a=(0,x.pC)(r)?r.signal:null,{apiKey:p,collectionId:u,customParameters:d,fields:l,geometryType:v,hasZ:c,objectIdField:ue,timeInfo:G,url:de}=e,ye={fields:null==l?void 0:l.map(g=>g.toJSON()),geometryType:I.P$.toJSON(v),hasZ:c,objectIdField:ue,timeInfo:null==G?void 0:G.toJSON()},C={apiKey:p,customParameters:d,signal:a},D=yield(0,y.gp)(de,C),[M,Q]=yield Promise.all([(0,y.G4)(D,C),(0,y.j)(D,C)]);if(!o._conformsToType(M,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new Z.Z("ogc-feature-layer:no-geojson-support","Server does not support geojson");const m=Q.collections.find(g=>g.id===u);if(!m)throw new Z.Z("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const ce=o._conformsToType(M,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?yield(0,y.eS)(D,C):null,T=yield(0,y.w9)(m,ye,C),ve=o._getCapabilities(T.hasZ,ce),fe=o._getExtent(m),he=o._getStorageSpatialReference(m).toJSON(),me=o._getSupportedSpatialReferences(m,Q),ge=new RegExp(`^${y.Lu}`,"i"),b={};for(const g of me){const P=(0,y.d)(g);(0,x.pC)(P)&&(b[P]||(b[P]=g.replace(ge,"")))}T.extent=fe,o.featureDefinition={capabilities:ve,collection:m,layerDefinition:T,queryParameters:{},spatialReference:he,supportedCrs:b}})()}};(0,s._)([(0,i.Cb)()],f.prototype,"featureDefinition",void 0),(0,s._)([(0,i.Cb)({constructOnly:!0})],f.prototype,"layer",void 0),(0,s._)([(0,i.Cb)()],f.prototype,"type",void 0),f=(0,s._)([(0,E.j)("esri.layers.graphics.sources.OGCFeatureSource")],f);const J=f;var V=t(50085),W=t(552),$=t(50107),K=t(35126),Y=t(49286),X=t(32629),w=t(6647),q=t(30346),k=t(99555),_=t(97941),h=t(13812),ee=t(2777),te=t(41638),re=t(36255),oe=t(55911),O=t(36630),se=t(170),ie=t(62667),L=t(84952),ne=t(49430),ae=t(2004);const pe=(0,oe.v)();let n=class extends((0,V.V)((0,$.N)((0,K.b)((0,W.h)((0,X.c)((0,_.n)((0,k.M)((0,Y.q)((0,w.I)((0,q.Q)((0,A.R)(N.Z)))))))))))){constructor(e){super(e),this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new J({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;null==(e=this.source)||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}set renderer(e){(0,O.YN)(e,this.fieldsIndex),this._set("renderer",e)}on(e,r){return super.on(e,r)}createPopupTemplate(e){return(0,ne.eZ)(this,e)}createQuery(){return new L.Z}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){var o;let a,p=!1;const u=null==r||null==(o=r.feature)?void 0:o.attributes,d=this.typeIdField&&(null==u?void 0:u[this.typeIdField]);return null!=d&&this.types&&(p=this.types.some(l=>{var v,c;return l.id==d&&(a=null==(v=l.domains)?void 0:v[e],"inherited"===(null==(c=a)?void 0:c.type)&&(a=this._getLayerDomain(e)),!0)})),p||a||(a=this._getLayerDomain(e)),a}queryFeatures(e,r){return this.load().then(()=>this.source.queryFeatures(L.Z.from(e)||this.createQuery(),r)).then(o=>{var a;return null==o||null==(a=o.features)||a.forEach(p=>{p.layer=p.sourceLayer=this}),o})}serviceSupportsSpatialReference(e){var r,o;return null!=(r=null==(o=this.source)?void 0:o.serviceSupportsSpatialReference(e))&&r}_fetchService(e){var r=this;return(0,R.Z)(function*(){yield r.source.load(e),r.read(r.source.featureDefinition,{origin:"service"}),(0,O.YN)(r.renderer,r.fieldsIndex),(0,O.UF)(r.timeInfo,r.fieldsIndex)})()}_getLayerDomain(e){if(!this.fields)return null;for(const r of this.fields)if(r.name===e&&r.domain)return r.domain;return null}};(0,s._)([(0,i.Cb)({readOnly:!0,json:{origins:{service:{read:!0}}}})],n.prototype,"capabilities",void 0),(0,s._)([(0,i.Cb)({type:String,json:{write:!0}})],n.prototype,"collectionId",void 0),(0,s._)([(0,i.Cb)({type:String})],n.prototype,"copyright",void 0),(0,s._)([(0,i.Cb)({readOnly:!0})],n.prototype,"defaultPopupTemplate",null),(0,s._)([(0,i.Cb)({type:String})],n.prototype,"definitionExpression",void 0),(0,s._)([(0,i.Cb)({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],n.prototype,"description",void 0),(0,s._)([(0,i.Cb)({type:String})],n.prototype,"displayField",void 0),(0,s._)([(0,i.Cb)(h.PV)],n.prototype,"elevationInfo",void 0),(0,s._)([(0,i.Cb)(ee.d)],n.prototype,"featureReduction",void 0),(0,s._)([(0,i.Cb)({type:[re.Z],json:{origins:{service:{name:"layerDefinition.fields"}}}})],n.prototype,"fields",void 0),(0,s._)([(0,i.Cb)(pe.fieldsIndex)],n.prototype,"fieldsIndex",void 0),(0,s._)([(0,i.Cb)({readOnly:!0,type:ae.Z,json:{origins:{service:{name:"layerDefinition.extent"}}}})],n.prototype,"fullExtent",void 0),(0,s._)([(0,i.Cb)({type:I.Mk.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:I.Mk.read}}}}})],n.prototype,"geometryType",void 0),(0,s._)([(0,i.Cb)({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],n.prototype,"hasZ",void 0),(0,s._)([(0,i.Cb)({type:Boolean,readOnly:!0})],n.prototype,"isTable",null),(0,s._)([(0,i.Cb)({type:[se.Z],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ie.r},write:!0}}}})],n.prototype,"labelingInfo",void 0),(0,s._)([(0,i.Cb)(h.iR)],n.prototype,"labelsVisible",void 0),(0,s._)([(0,i.Cb)(h.rn)],n.prototype,"legendEnabled",void 0),(0,s._)([(0,i.Cb)({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],n.prototype,"objectIdField",void 0),(0,s._)([(0,i.Cb)({type:["OGCFeatureLayer"]})],n.prototype,"operationalLayerType",void 0),(0,s._)([(0,i.Cb)(h.C_)],n.prototype,"popupEnabled",void 0),(0,s._)([(0,i.Cb)({type:U.Z,json:{name:"popupInfo",write:!0}})],n.prototype,"popupTemplate",void 0),(0,s._)([(0,i.Cb)({types:j.A,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:j.o,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],n.prototype,"renderer",null),(0,s._)([(0,i.Cb)(h.YI)],n.prototype,"screenSizePerspectiveEnabled",void 0),(0,s._)([(0,i.Cb)({readOnly:!0})],n.prototype,"source",void 0),(0,s._)([(0,i.Cb)({readOnly:!0,type:F.Z,json:{origins:{service:{read:!0}}}})],n.prototype,"spatialReference",void 0),(0,s._)([(0,i.Cb)({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],n.prototype,"title",void 0),(0,s._)([(0,i.Cb)({readOnly:!0,json:{read:!1}})],n.prototype,"type",void 0),(0,s._)([(0,i.Cb)({type:String,readOnly:!0})],n.prototype,"typeIdField",void 0),(0,s._)([(0,i.Cb)({type:[te.Z]})],n.prototype,"types",void 0),(0,s._)([(0,i.Cb)(h.HQ)],n.prototype,"url",void 0),n=(0,s._)([(0,E.j)("esri.layers.OGCFeatureLayer")],n);const le=n},87757:(B,S,t)=>{t.d(S,{g:()=>R});const R={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}}}]);