"use strict";var z=Object.defineProperty,$=Object.defineProperties,J=Object.getOwnPropertyDescriptors,W=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,H=(b,o,e)=>o in b?z(b,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):b[o]=e,Z=(b,o)=>{for(var e in o||(o={}))Q.call(o,e)&&H(b,e,o[e]);if(W)for(var e of W(o))q.call(o,e)&&H(b,e,o[e]);return b},K=(b,o)=>$(b,J(o));(self.webpackChunkesri4_pwa=self.webpackChunkesri4_pwa||[]).push([[408],{60408:(b,o,e)=>{e.r(o),e.d(o,{default:()=>B});var t=e(17626),P=(e(63290),e(90912),e(85931),e(8314),e(82255),e(76898)),T=e(44589),c=e(67969);class m extends T.Z{constructor(){super(...arguments),this.requiresDedicatedFBO=!1}dispose(){}doRender(r){const p=this.createRenderParams(r),{context:l,painter:v,profiler:w}=p;this._prevFBO=l.getBoundFramebufferObject(),w.recordContainerStart(this.name);const L=this._getFbo(p),E=v.getRenderTarget();l.bindFramebuffer(L),v.setRenderTarget(L),l.setDepthWriteEnabled(!0),l.setColorMask(!0,!0,!0,!0),l.setClearColor(0,0,0,0),l.setClearDepth(1),l.clear(l.gl.COLOR_BUFFER_BIT|l.gl.DEPTH_BUFFER_BIT),l.setDepthWriteEnabled(!1);for(const O of this.children)O.beforeRender(r);for(const O of this.children)O.processRender(p);for(const O of this.children)O.afterRender(r);v.setRenderTarget(E),v.releaseFbo(L),l.bindFramebuffer(this._prevFBO),v.beforeRenderLayer(p,this._clippingInfos?255:0,this.computedOpacity),l.setStencilTestEnabled(!1),l.setStencilWriteMask(0),v.blitTexture(l,L.colorTexture,c.cw.NEAREST),v.compositeLayer(p,this.computedOpacity),w.recordContainerEnd()}createRenderParams(r){return K(Z({},super.createRenderParams(r)),{blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1})}_getFbo(r){const{context:p,painter:l}=r,{width:v,height:w}=p.getViewport();return l.acquireFbo(v,w)}}var I=e(37384),_=e(48701),M=e(89726),d=e(77712),R=e(45611);let i=class extends R.Z{constructor(s){super(s),this.type="group",this.layerViews=new _.Z}initialize(){this.handles.add([this.layerViews.on("change",s=>this._layerViewsChangeHandler(s)),this.layerViews.on("after-changes",()=>this._layerViewsAfterChangesHandler()),this.layer.watch("visibilityMode",()=>this._visibilityModeHandler(),!0),this.watch("visible",()=>this._visibleHandler(),!0)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]}),this._layerViewsAfterChangesHandler()}set layerViews(s){this._set("layerViews",(0,M.Z)(s,this._get("layerViews")))}isUpdating(){return this.layerViews.some(s=>s.updating)}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce((s,r)=>s+r.updatingProgress,0)/this.layerViews.length}_hasLayerViewVisibleOverrides(){return this.layerViews.some(s=>s._isOverridden("visible"))}_findLayerViewForLayer(s){return s&&this.layerViews.find(r=>r.layer===s)}_firstVisibleOnLayerOrder(){const s=this.layer.layers.find(r=>{const p=this._findLayerViewForLayer(r);return p&&p.visible});return s&&this._findLayerViewForLayer(s)}_enforceExclusiveVisibility(s){this._hasLayerViewVisibleOverrides()&&(s||!(s=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(s=this._findLayerViewForLayer(this.layer.layers.getItemAt(0))),this.layerViews.forEach(r=>{r.visible=r===s}))}_layerViewsChangeHandler(s){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map(l=>l.watch("visible",v=>this._layerViewVisibleHandler(v,l),!0)).toArray(),"grouplayerview:visible");const r=s.added[s.added.length-1];let p=null;r&&r.visible&&(p=r),this._enforceVisibility(p)}_layerViewsAfterChangesHandler(){this.handles.remove("grouplayerview:updating"),this.handles.add(this.layerViews.map(s=>s.watch("updating",()=>this._updateUpdating(),!0)).toArray(),"grouplayerview:updating"),this._updateUpdating()}_enforceVisibility(s){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":{const r=this.visible;this.layerViews.forEach(p=>{p.visible=r});break}case"exclusive":this._enforceExclusiveVisibility(s)}}_visibilityModeHandler(){this._enforceVisibility()}_layerViewVisibleHandler(s,r){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":s!==this.visible&&(r.visible=this.visible);break;case"exclusive":this._enforceExclusiveVisibility(s&&r)}}_visibleHandler(){var s;this._hasLayerViewVisibleOverrides()&&"inherited"===(null==(s=this.layer)?void 0:s.visibilityMode)&&this._enforceVisibility()}_updateUpdating(){this.notifyChange("updating")}};(0,t._)([(0,d.Cb)({cast:M.R})],i.prototype,"layerViews",null),(0,t._)([(0,d.Cb)()],i.prototype,"view",void 0),(0,t._)([(0,d.Cb)({readOnly:!0})],i.prototype,"updatingProgress",null),i=(0,t._)([(0,P.j)("esri.views.layers.GroupLayerView")],i);const u=i;let h=class extends((0,I.y)(u)){constructor(){super(...arguments),this.container=new m}attach(){this._updateStageChildren(),this.handles.add(this.layerViews.on("after-changes",()=>this._updateStageChildren()),"grouplayerview2d")}detach(){this.handles.remove("grouplayerview2d"),this.container.removeAllChildren()}update(s){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((s,r)=>this.container.addChildAt(s.container,r))}};h=(0,t._)([(0,P.j)("esri.views.2d.layers.GroupLayerView2D")],h);const B=h},37384:(b,o,e)=>{e.d(o,{y:()=>G});var t=e(17626),U=e(48701),A=e(89726),j=e(26584),C=e(32917),a=e(77712),m=(e(85931),e(8314),e(90912),e(76898)),I=e(1011),_=e(86810);e(63290),e(82255);let R=class extends _.wq{};R=(0,t._)([(0,m.j)("esri.views.layers.support.ClipArea")],R);const i=R;var u;let h=u=class extends i{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new u({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};(0,t._)([(0,a.Cb)({type:[Number,String],json:{write:!0}})],h.prototype,"left",void 0),(0,t._)([(0,a.Cb)({type:[Number,String],json:{write:!0}})],h.prototype,"right",void 0),(0,t._)([(0,a.Cb)({type:[Number,String],json:{write:!0}})],h.prototype,"top",void 0),(0,t._)([(0,a.Cb)({type:[Number,String],json:{write:!0}})],h.prototype,"bottom",void 0),(0,t._)([(0,a.Cb)({readOnly:!0})],h.prototype,"version",null),h=u=(0,t._)([(0,m.j)("esri.views.layers.support.ClipRect")],h);const B=h;e(29132);var w,r=e(21674),p=e(91179),l=e(2004),v=e(37118);const L={base:r.Z,key:"type",typeMap:{extent:l.Z,polygon:v.Z}};let E=w=class extends i{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new w({geometry:this.geometry.clone()})}};(0,t._)([(0,a.Cb)({types:L,json:{read:p.im,write:!0}})],E.prototype,"geometry",void 0),(0,t._)([(0,a.Cb)({readOnly:!0})],E.prototype,"version",null),E=w=(0,t._)([(0,m.j)("esri.views.layers.support.Geometry")],E);const O=E;let S=class extends i{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};(0,t._)([(0,a.Cb)({type:[[[Number]]],json:{write:!0}})],S.prototype,"path",void 0),(0,t._)([(0,a.Cb)({readOnly:!0})],S.prototype,"version",null),S=(0,t._)([(0,m.j)("esri.views.layers.support.Path")],S);const x=U.Z.ofType({key:"type",base:i,typeMap:{rect:B,path:S,geometry:O}}),G=X=>{let g=class extends X{constructor(){super(...arguments),this.attached=!1,this.clips=new x,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1}initialize(){var n,y,V,D;const Y=null==(n=null==(y=this.view)?void 0:y.spatialReferenceLocked)||n;(null==(V=this.view)?void 0:V.spatialReference)&&Y&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new j.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new I.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,C.YP)(()=>this.suspended,f=>{this.container&&(this.container.visible=!f),this.view&&!f&&this.updateRequested&&this.view.requestUpdate()},C.tX),(0,C.YP)(()=>{var f,F;return null!=(f=null==(F=this.layer)?void 0:F.opacity)?f:1},f=>{this.container&&(this.container.opacity=f)},C.tX),(0,C.YP)(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",f=>{this.container&&(this.container.blendMode=f)},C.tX),(0,C.YP)(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,f=>{this.container&&(this.container.effect=f)},C.tX),(0,C.on)(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)})]),null!=(D=this.view)&&D.whenLayerView?this.view.whenLayerView(this.layer).then(f=>{f===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var n;const y=null==(n=this.view)?void 0:n.spatialReference;return null==y||this.supportsSpatialReference(y)}get updating(){var n;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null==(n=this.updatingHandles)||!n.updating))}get visibleAtCurrentScale(){return this.isVisibleAtScale(this.view.scale)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}isVisibleAtScale(n){const y=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!y)return!0;const{minScale:V,maxScale:D}=y;return(0===V||n<=V)&&(0===D||n>=D)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(n){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",n),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(n))):this.updateRequested=!1}hitTest(n,y){return Promise.resolve(null)}supportsSpatialReference(n){return!0}isUpdating(){return!1}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const n=super.getSuspendInfo(),y=!this.spatialReferenceSupported,V=this.visibleAtCurrentScale;return y&&(n.spatialReferenceNotSupported=y),V&&(n.outsideScaleRange=V),n}};return(0,t._)([(0,a.Cb)()],g.prototype,"attached",void 0),(0,t._)([(0,a.Cb)({type:x,set(n){const y=(0,A.Z)(n,this._get("clips"),x);this._set("clips",y)}})],g.prototype,"clips",void 0),(0,t._)([(0,a.Cb)()],g.prototype,"container",void 0),(0,t._)([(0,a.Cb)()],g.prototype,"moving",void 0),(0,t._)([(0,a.Cb)({readOnly:!0})],g.prototype,"spatialReferenceSupported",null),(0,t._)([(0,a.Cb)({readOnly:!0})],g.prototype,"updateParameters",void 0),(0,t._)([(0,a.Cb)()],g.prototype,"updateRequested",void 0),(0,t._)([(0,a.Cb)()],g.prototype,"updating",null),(0,t._)([(0,a.Cb)()],g.prototype,"view",void 0),(0,t._)([(0,a.Cb)({readOnly:!0})],g.prototype,"visibleAtCurrentScale",null),g=(0,t._)([(0,m.j)("esri.views.2d.layers.LayerView2D")],g),g}},45611:(b,o,e)=>{e.d(o,{Z:()=>R});var t=e(17626),U=e(14517),A=e(61885),j=e(80542),C=e(61996),a=e(63290),P=e(62208),T=e(60330),c=e(77712),M=(e(85931),e(8314),e(90912),e(76898));let d=class extends((0,j.p)((0,C.I)((0,T.v)(A.Z.EventedMixin(U.Z))))){constructor(i){super(i),this.layer=null,this.parent=null}initialize(){this.when().catch(i=>{if("layerview:create-error"!==i.name){const u=this.layer&&this.layer.id||"no id",h=this.layer&&this.layer.title||"no title";throw a.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${h}', id: '${u}')`,i),i}})}get fullOpacity(){return(0,P.Pt)(this.get("layer.opacity"),1)*(0,P.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){var i;return!!(null!=(i=this.updatingHandles)&&i.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var i;return!0===(null==(i=this.layer)?void 0:i.visible)}set visible(i){void 0!==i?this._override("visible",i):this._clearOverride("visible")}canResume(){var i,u,h;return this.visible&&(null==(i=this.layer)?void 0:i.loaded)&&!(null!=(u=this.parent)&&u.suspended)&&(null==(h=this.view)?void 0:h.ready)||!1}getSuspendInfo(){const i=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,t._)([(0,c.Cb)()],d.prototype,"fullOpacity",null),(0,t._)([(0,c.Cb)()],d.prototype,"layer",void 0),(0,t._)([(0,c.Cb)()],d.prototype,"parent",void 0),(0,t._)([(0,c.Cb)({readOnly:!0})],d.prototype,"suspended",null),(0,t._)([(0,c.Cb)({readOnly:!0})],d.prototype,"suspendInfo",null),(0,t._)([(0,c.Cb)({readOnly:!0})],d.prototype,"legendEnabled",null),(0,t._)([(0,c.Cb)({type:Boolean,readOnly:!0})],d.prototype,"updating",null),(0,t._)([(0,c.Cb)({readOnly:!0})],d.prototype,"updatingProgress",null),(0,t._)([(0,c.Cb)()],d.prototype,"visible",null),(0,t._)([(0,c.Cb)()],d.prototype,"view",void 0),d=(0,t._)([(0,M.j)("esri.views.layers.LayerView")],d);const R=d}}]);