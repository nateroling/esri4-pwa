"use strict";(self.webpackChunkesri4_pwa=self.webpackChunkesri4_pwa||[]).push([[5082],{35082:(P,c,e)=>{e.r(c),e.d(c,{getGeometryServiceURL:()=>y,projectGeometry:()=>v});var g=e(15861),m=e(59318),o=e(26584),E=e(84687),f=e(39636),p=e(77294);function y(){return a.apply(this,arguments)}function a(){return(a=(0,g.Z)(function*(r=null,_){var i,n;if(m.Z.geometryServiceUrl)return m.Z.geometryServiceUrl;if(!r)throw new o.Z("internal:geometry-service-url-not-configured");let l;l="portal"in r?r.portal||E.Z.getDefault():r,yield l.load({signal:_});const t=null==(i=l.helperServices)||null==(n=i.geometry)?void 0:n.url;if(!t)throw new o.Z("internal:geometry-service-url-not-configured");return t})).apply(this,arguments)}function v(r,_){return u.apply(this,arguments)}function u(){return(u=(0,g.Z)(function*(r,_,i=null,n){const l=yield y(i,n),t=new p.Z;t.geometries=[r],t.outSpatialReference=_;const s=yield(0,f.i)(l,t,{signal:n});if(s&&Array.isArray(s)&&1===s.length)return s[0];throw new o.Z("internal:geometry-service-projection-failed")})).apply(this,arguments)}}}]);