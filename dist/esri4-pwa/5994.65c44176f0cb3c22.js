"use strict";(self.webpackChunkesri4_pwa=self.webpackChunkesri4_pwa||[]).push([[5994],{15994:(w,a,r)=>{r.d(a,{N:()=>c});const c={convertToGEGeometry:function u(i,t){return null==t?null:i.convertJSONToGeometry(t)},exportPoint:function x(i,t,s){const e=new m(i.getPointX(t),i.getPointY(t),s),n=i.hasZ(t),h=i.hasM(t);return n&&(e.z=i.getPointZ(t)),h&&(e.m=i.getPointM(t)),e},exportPolygon:function l(i,t,s){return new p(i.exportPaths(t),s,i.hasZ(t),i.hasM(t))},exportPolyline:function M(i,t,s){return new v(i.exportPaths(t),s,i.hasZ(t),i.hasM(t))},exportMultipoint:function f(i,t,s){return new d(i.exportPoints(t),s,i.hasZ(t),i.hasM(t))},exportExtent:function g(i,t,s){const e=i.hasZ(t),n=i.hasM(t),h=new Z(i.getXMin(t),i.getYMin(t),i.getXMax(t),i.getYMax(t),s);if(e){const o=i.getZExtent(t);h.zmin=o.vmin,h.zmax=o.vmax}if(n){const o=i.getMExtent(t);h.mmin=o.vmin,h.mmax=o.vmax}return h}};class m{constructor(t,s,e){this.x=t,this.y=s,this.spatialReference=e,this.z=void 0,this.m=void 0}}class p{constructor(t,s,e,n){this.rings=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),n&&(this.hasM=n)}}class v{constructor(t,s,e,n){this.paths=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),n&&(this.hasM=n)}}class d{constructor(t,s,e,n){this.points=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),n&&(this.hasM=n)}}class Z{constructor(t,s,e,n,h){this.xmin=t,this.ymin=s,this.xmax=e,this.ymax=n,this.spatialReference=h,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}}}]);