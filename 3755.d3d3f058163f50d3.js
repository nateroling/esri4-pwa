"use strict";(self.webpackChunkesri4_pwa=self.webpackChunkesri4_pwa||[]).push([[3755],{7547:(nn,U,I)=>{var N,B,A,O,y,c,D,o,R,l,S,M,L,E,H,k,tn,a,P,w,W,rn,F,Z,on,en,z,Y,an,un,cn,sn,ln,fn,X,J,dn,V,K,On,Mn,Tn,pn,$,Q,hn,gn,mn,Sn,Ln,yn,En,An,Cn,j,In,_n,q,G,Rn,t;I.d(U,{v2:()=>A,UR:()=>k,zV:()=>H,RL:()=>N,Tx:()=>y,eZ:()=>D,DD:()=>o,Ky:()=>R,TF:()=>P,Em:()=>w,$y:()=>W,id:()=>Z,zQ:()=>z,Dd:()=>Y,AH:()=>B,kP:()=>X,sj:()=>J,r4:()=>K,JS:()=>$,bj:()=>Q,CS:()=>hn,Lh:()=>gn,UX:()=>j,Qb:()=>In,RS:()=>q}),(t=N||(N={}))[t.BUTT=0]="BUTT",t[t.ROUND=1]="ROUND",t[t.SQUARE=2]="SQUARE",t[t.UNKNOWN=4]="UNKNOWN",function(t){t[t.BEVEL=0]="BEVEL",t[t.ROUND=1]="ROUND",t[t.MITER=2]="MITER",t[t.UNKNOWN=4]="UNKNOWN"}(B||(B={})),function(t){t[t.SCREEN=0]="SCREEN",t[t.MAP=1]="MAP"}(A||(A={})),function(t){t[t.Tint=0]="Tint",t[t.Ignore=1]="Ignore",t[t.Multiply=99]="Multiply"}(O||(O={})),function(t){t.Both="Both",t.JustBegin="JustBegin",t.JustEnd="JustEnd",t.None="None"}(y||(y={})),function(t){t[t.Mosaic=0]="Mosaic",t[t.Centered=1]="Centered"}(c||(c={})),function(t){t[t.Normal=0]="Normal",t[t.Superscript=1]="Superscript",t[t.Subscript=2]="Subscript"}(D||(D={})),function(t){t[t.MSSymbol=0]="MSSymbol",t[t.Unicode=1]="Unicode"}(o||(o={})),function(t){t[t.Unspecified=0]="Unspecified",t[t.TrueType=1]="TrueType",t[t.PSOpenType=2]="PSOpenType",t[t.TTOpenType=3]="TTOpenType",t[t.Type1=4]="Type1"}(R||(R={})),function(t){t[t.Display=0]="Display",t[t.Map=1]="Map"}(l||(l={})),function(t){t[t.Z=0]="Z",t[t.X=1]="X",t[t.Y=2]="Y"}(S||(S={})),function(t){t[t.XYZ=0]="XYZ",t[t.ZXY=1]="ZXY",t[t.YXZ=2]="YXZ"}(M||(M={})),function(t){t[t.Rectangle=0]="Rectangle",t[t.RoundedRectangle=1]="RoundedRectangle",t[t.Oval=2]="Oval"}(L||(L={})),function(t){t[t.None=0]="None",t[t.Alpha=1]="Alpha",t[t.Screen=2]="Screen",t[t.Multiply=3]="Multiply",t[t.Add=4]="Add"}(E||(E={})),function(t){t[t.TTB=0]="TTB",t[t.RTL=1]="RTL",t[t.BTT=2]="BTT"}(H||(H={})),function(t){t[t.None=0]="None",t[t.SignPost=1]="SignPost",t[t.FaceNearPlane=2]="FaceNearPlane"}(k||(k={})),function(t){t[t.Float=0]="Float",t[t.String=1]="String",t[t.Boolean=2]="Boolean"}(tn||(tn={})),function(t){t[t.Intersect=0]="Intersect",t[t.Subtract=1]="Subtract"}(a||(a={})),function(t){t.OpenEnded="OpenEnded",t.Block="Block",t.Crossed="Crossed"}(P||(P={})),function(t){t.FullGeometry="FullGeometry",t.PerpendicularFromFirstSegment="PerpendicularFromFirstSegment",t.ReversedFirstSegment="ReversedFirstSegment",t.PerpendicularToSecondSegment="PerpendicularToSecondSegment",t.SecondSegmentWithTicks="SecondSegmentWithTicks",t.DoublePerpendicular="DoublePerpendicular",t.OppositeToFirstSegment="OppositeToFirstSegment",t.TriplePerpendicular="TriplePerpendicular",t.HalfCircleFirstSegment="HalfCircleFirstSegment",t.HalfCircleSecondSegment="HalfCircleSecondSegment",t.HalfCircleExtended="HalfCircleExtended",t.OpenCircle="OpenCircle",t.CoverageEdgesWithTicks="CoverageEdgesWithTicks",t.GapExtentWithDoubleTicks="GapExtentWithDoubleTicks",t.GapExtentMidline="GapExtentMidline",t.Chevron="Chevron",t.PerpendicularWithArc="PerpendicularWithArc",t.ClosedHalfCircle="ClosedHalfCircle",t.TripleParallelExtended="TripleParallelExtended",t.ParallelWithTicks="ParallelWithTicks",t.Parallel="Parallel",t.PerpendicularToFirstSegment="PerpendicularToFirstSegment",t.ParallelOffset="ParallelOffset",t.OffsetOpposite="OffsetOpposite",t.OffsetSame="OffsetSame",t.CircleWithArc="CircleWithArc",t.DoubleJog="DoubleJog",t.PerpendicularOffset="PerpendicularOffset",t.LineExcludingLastSegment="LineExcludingLastSegment",t.MultivertexArrow="MultivertexArrow",t.CrossedArrow="CrossedArrow",t.ChevronArrow="ChevronArrow",t.ChevronArrowOffset="ChevronArrowOffset",t.PartialFirstSegment="PartialFirstSegment",t.Arch="Arch",t.CurvedParallelTicks="CurvedParallelTicks",t.Arc90Degrees="Arc90Degrees"}(w||(w={})),function(t){t.Mitered="Mitered",t.Bevelled="Bevelled",t.Rounded="Rounded",t.Square="Square",t.TrueBuffer="TrueBuffer"}(W||(W={})),function(t){t.ClosePath="ClosePath",t.ConvexHull="ConvexHull",t.RectangularBox="RectangularBox"}(rn||(rn={})),function(t){t.BeginningOfLine="BeginningOfLine",t.EndOfLine="EndOfLine"}(F||(F={})),function(t){t.Mitered="Mitered",t.Bevelled="Bevelled",t.Rounded="Rounded",t.Square="Square"}(Z||(Z={})),function(t){t.Fast="Fast",t.Accurate="Accurate"}(on||(on={})),function(t){t.BeginningOfLine="BeginningOfLine",t.EndOfLine="EndOfLine"}(en||(en={})),function(t){t.Sinus="Sinus",t.Square="Square",t.Triangle="Triangle",t.Random="Random"}(z||(z={})),function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Force=2]="Force"}(Y||(Y={})),function(t){t[t.Buffered=0]="Buffered",t[t.Left=1]="Left",t[t.Right=2]="Right",t[t.AlongLine=3]="AlongLine"}(an||(an={})),function(t){t[t.Linear=0]="Linear",t[t.Rectangular=1]="Rectangular",t[t.Circular=2]="Circular",t[t.Buffered=3]="Buffered"}(un||(un={})),function(t){t[t.Discrete=0]="Discrete",t[t.Continuous=1]="Continuous"}(cn||(cn={})),function(t){t[t.AcrossLine=0]="AcrossLine",t[t.AloneLine=1]="AloneLine"}(sn||(sn={})),function(t){t[t.Left=0]="Left",t[t.Right=1]="Right",t[t.Center=2]="Center",t[t.Justify=3]="Justify"}(ln||(ln={})),function(t){t[t.Base=0]="Base",t[t.MidPoint=1]="MidPoint",t[t.ThreePoint=2]="ThreePoint",t[t.FourPoint=3]="FourPoint",t[t.Underline=4]="Underline",t[t.CircularCW=5]="CircularCW",t[t.CircularCCW=6]="CircularCCW"}(fn||(fn={})),function(t){t.Butt="Butt",t.Round="Round",t.Square="Square"}(X||(X={})),function(t){t.NoConstraint="NoConstraint",t.HalfPattern="HalfPattern",t.HalfGap="HalfGap",t.FullPattern="FullPattern",t.FullGap="FullGap",t.Custom="Custom"}(J||(J={})),function(t){t[t.None=-1]="None",t[t.Custom=0]="Custom",t[t.Circle=1]="Circle",t[t.OpenArrow=2]="OpenArrow",t[t.ClosedArrow=3]="ClosedArrow",t[t.Diamond=4]="Diamond"}(dn||(dn={})),function(t){t[t.ExtraLeading=0]="ExtraLeading",t[t.Multiple=1]="Multiple",t[t.Exact=2]="Exact"}(V||(V={})),function(t){t.Bevel="Bevel",t.Round="Round",t.Miter="Miter"}(K||(K={})),function(t){t[t.Default=0]="Default",t[t.String=1]="String",t[t.Numeric=2]="Numeric"}(On||(On={})),function(t){t[t.InsidePolygon=0]="InsidePolygon",t[t.PolygonCenter=1]="PolygonCenter",t[t.RandomlyInsidePolygon=2]="RandomlyInsidePolygon"}(Mn||(Mn={})),function(t){t[t.Tint=0]="Tint",t[t.Replace=1]="Replace",t[t.Multiply=2]="Multiply"}(Tn||(Tn={})),function(t){t[t.ClipAtBoundary=0]="ClipAtBoundary",t[t.RemoveIfCenterOutsideBoundary=1]="RemoveIfCenterOutsideBoundary",t[t.DoNotTouchBoundary=2]="DoNotTouchBoundary",t[t.DoNotClip=3]="DoNotClip"}(pn||(pn={})),function(t){t.NoConstraint="NoConstraint",t.WithMarkers="WithMarkers",t.WithFullGap="WithFullGap",t.WithHalfGap="WithHalfGap",t.Custom="Custom"}($||($={})),function(t){t.Fixed="Fixed",t.Random="Random",t.RandomFixedQuantity="RandomFixedQuantity"}(Q||(Q={})),function(t){t.LineMiddle="LineMiddle",t.LineBeginning="LineBeginning",t.LineEnd="LineEnd",t.SegmentMidpoint="SegmentMidpoint"}(hn||(hn={})),function(t){t.OnPolygon="OnPolygon",t.CenterOfMass="CenterOfMass",t.BoundingBoxCenter="BoundingBoxCenter"}(gn||(gn={})),function(t){t[t.Low=0]="Low",t[t.Medium=1]="Medium",t[t.High=2]="High"}(mn||(mn={})),function(t){t[t.MarkerCenter=0]="MarkerCenter",t[t.MarkerBounds=1]="MarkerBounds"}(Sn||(Sn={})),function(t){t[t.None=0]="None",t[t.PropUniform=1]="PropUniform",t[t.PropNonuniform=2]="PropNonuniform",t[t.DifUniform=3]="DifUniform",t[t.DifNonuniform=4]="DifNonuniform"}(Ln||(Ln={})),function(t){t.Tube="Tube",t.Strip="Strip",t.Wall="Wall"}(yn||(yn={})),function(t){t[t.Random=0]="Random",t[t.Increasing=1]="Increasing",t[t.Decreasing=2]="Decreasing",t[t.IncreasingThenDecreasing=3]="IncreasingThenDecreasing"}(En||(En={})),function(t){t[t.Relative=0]="Relative",t[t.Absolute=1]="Absolute"}(An||(An={})),function(t){t[t.Normal=0]="Normal",t[t.LowerCase=1]="LowerCase",t[t.Allcaps=2]="Allcaps"}(Cn||(Cn={})),function(t){t[t.LTR=0]="LTR",t[t.RTL=1]="RTL"}(j||(j={})),function(t){t.Draft="Draft",t.Picture="Picture",t.Text="Text"}(In||(In={})),function(t){t[t.Top=0]="Top",t[t.Center=1]="Center",t[t.Baseline=2]="Baseline",t[t.Bottom=3]="Bottom"}(_n||(_n={})),function(t){t[t.Right=0]="Right",t[t.Upright=1]="Upright"}(q||(q={})),function(t){t[t.Small=0]="Small",t[t.Medium=1]="Medium",t[t.Large=2]="Large"}(G||(G={})),function(t){t[t.Calm=0]="Calm",t[t.Rippled=1]="Rippled",t[t.Slight=2]="Slight",t[t.Moderate=3]="Moderate"}(Rn||(Rn={}))},64288:(nn,U,I)=>{I.d(U,{mR:()=>Sn,C$:()=>K,e2:()=>On,Jq:()=>Zn,wO:()=>mn,Mk:()=>Ln,cM:()=>Rn,Z_:()=>t,ws:()=>$,xV:()=>Q,Ub:()=>kn,UK:()=>j,Yw:()=>Cn,$_:()=>cn,Gr:()=>Un,nU:()=>hn,Ll:()=>Wn,$K:()=>Tn,DQ:()=>wn,HX:()=>Dn,hj:()=>pn,iw:()=>xn,TB:()=>bn,sG:()=>Bn,Gg:()=>Gn,js:()=>Hn,Y8:()=>V});var N=I(26584),B=I(63290),O=(I(21286),I(7547)),c=(I(81295),I(39406)),D=I(27899);class o{constructor(){this.color=[0,0,0,0],this.haloColor=[0,0,0,0],this.haloSize=0,this.size=12,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}acquire(e,T,C,v,_,b,vn,x,Nn){this.color=e,this.haloColor=T,this.haloSize=C,this.size=v,this.angle=_,this.offsetX=b,this.offsetY=vn,this.hAnchor=x,this.vAnchor=Nn}release(){this.color[0]=this.color[1]=this.color[2]=this.color[3]=0,this.haloColor[0]=this.haloColor[1]=this.haloColor[2]=this.haloColor[3]=0,this.haloSize=0,this.size=0,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}}o.pool=new D.Z(o);var R=I(67969),S=(I(55086),I(40852));const M=B.Z.getLogger("esri.views.2d.engine.webgl.Utils"),L="geometry",tn=[{name:L,strideInBytes:32}],a=[{name:L,strideInBytes:20}],P=[{name:L,strideInBytes:12}],w=[{name:L,strideInBytes:40}],W=[{name:L,strideInBytes:36}],rn=[{name:L,strideInBytes:36}];function F(i){const e={};for(const T of i)e[T.name]=T.strideInBytes;return e}const Z=F([{name:L,strideInBytes:36}]),on=F(tn),en=F(a),z=F(P),Y=F(w),an=F(W),un=F(rn);function cn(i,{fill:e}){switch(i){case c.LW.MARKER:return Z;case c.LW.FILL:return"dot-density"===e?z:"simple"===e?en:on;case c.LW.LINE:return Y;case c.LW.TEXT:return an;case c.LW.LABEL:return un}}const sn=[L],ln=[L],fn=[L],X=[L],J=[L];function dn(i){switch(i){case c.LW.MARKER:return sn;case c.LW.FILL:return ln;case c.LW.LINE:return fn;case c.LW.TEXT:return X;case c.LW.LABEL:return J}}function V(i){switch(i%4){case 0:case 2:return 4;case 1:case 3:return 1}}function K(i,e){switch(e%4){case 0:case 2:return new Uint32Array(Math.floor(i*e/4));case 1:case 3:return new Uint8Array(i*e)}}function On(i,e){switch(e%4){case 0:case 2:return new Uint32Array(i);case 1:case 3:return new Uint8Array(i)}}function Tn(i){return null!=i}function pn(i){return"number"==typeof i}function $(i){switch(i){case"butt":return O.RL.BUTT;case"round":return O.RL.ROUND;case"square":return O.RL.SQUARE;default:return M.error(new N.Z("mapview-invalid-type",`Cap type ${i} is not a valid option. Defaulting to round`)),O.RL.ROUND}}function Q(i){switch(i){case"miter":return O.AH.MITER;case"bevel":return O.AH.BEVEL;case"round":return O.AH.ROUND;default:return M.error(new N.Z("mapview-invalid-type",`Join type ${i} is not a valid option. Defaulting to round`)),O.AH.ROUND}}function hn(i){switch(i){case"opacity":return c.pc.OPACITY;case"color":return c.pc.COLOR;case"rotation":return c.pc.ROTATION;case"size":return c.pc.SIZE;default:return M.error(`Cannot interpret unknown vv: ${i}`),null}}function mn(i,e,T,C,v,_,b){for(const x in _){const Nn=_[x].stride,Fn=V(Nn),Yn=_[x].data,Xn=T[x].data,Jn=Nn*v.vertexCount/Fn,Vn=Nn*i/Fn,Kn=Nn*v.vertexFrom/Fn;for(let Pn=0;Pn<Jn;++Pn)Xn[Pn+Vn]=Yn[Pn+Kn]}const vn=v.indexCount;for(let x=0;x<vn;++x)C[x+e]=b[x+v.indexFrom]-v.vertexFrom+i}const Sn={[L]:R.l1.STATIC_DRAW};function Ln(i,e){const T=[];for(let C=0;C<5;++C){const v=dn(C),_={};for(const b of v)_[b]={data:e(C,b)};T.push({data:i(C),buffers:_})}return T}function An(i){switch(i){case R.g.BYTE:case R.g.UNSIGNED_BYTE:return 1;case R.g.SHORT:case R.g.UNSIGNED_SHORT:return 2;case R.g.FLOAT:case R.g.INT:case R.g.UNSIGNED_INT:return 4}}function Cn(i){switch(i){case R.Br.UNSIGNED_BYTE:return 1;case R.Br.UNSIGNED_SHORT_4_4_4_4:return 2;case R.Br.FLOAT:return 4;default:return void M.error(new N.Z("webgl-utils",`Unable to handle type ${i}`))}}function j(i){switch(i){case R.Br.UNSIGNED_BYTE:return Uint8Array;case R.Br.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case R.Br.FLOAT:return Float32Array;default:return void M.error(new N.Z("webgl-utils",`Unable to handle type ${i}`))}}const _n=i=>{const e=new Map;for(const T in i)for(const C of i[T])e.set(C.name,C.location);return e},q=i=>{const e={};for(const T in i){const C=i[T];e[T]=C.length?C[0].stride:0}return e},G=new Map,Rn=(i,e)=>{if(!G.has(i)){const T=function In(i){const e={};for(const T in i){let v=0;e[T]=i[T].map(_=>{const b=new S.G(_.name,_.count,_.type,v,0,_.normalized||!1);return v+=_.count*An(_.type),b}),e[T].forEach(_=>_.stride=v)}return e}(e),C={strides:q(T),bufferLayouts:T,attributes:_n(e)};G.set(i,C)}return G.get(i)};function t(i){i(c.LW.FILL),i(c.LW.LINE),i(c.LW.MARKER),i(c.LW.TEXT),i(c.LW.LABEL)}const Bn=i=>"path"in i&&zn(i.path),Dn=i=>"url"in i&&i.url||"imageData"in i&&i.imageData,Un=i=>"imageData"in i&&i.imageData&&"contentType"in i&&i.contentType?`data:${i.contentType};base64,${i.imageData}`:"url"in i?i.url:null,wn=i=>"url"in i&&i.url&&i.url.includes(".gif")||"contentType"in i&&"image/gif"===i.contentType||"imageData"in i&&i.imageData.includes("data:image/gif"),xn=i=>"url"in i&&i.url&&i.url.includes(".png")||"contentType"in i&&"image/png"===i.contentType||"imageData"in i&&i.imageData.includes("data:image/png"),Wn=i=>i.type&&-1!==i.type.toLowerCase().indexOf("3d");function Gn(i){switch(i.type){case"line":{const e=i;return"CIMSolidStroke"===e.cim.type&&!e.dashTemplate}case"fill":return"CIMSolidFill"===i.cim.type;case"esriSFS":return"esriSFSSolid"===i.style||"esriSFSNull"===i.style;case"esriSLS":return"esriSLSSolid"===i.style||"esriSLSNull"===i.style;default:return!1}}const bn=i=>i.includes("data:image/svg+xml");function Hn(i){switch("cim"in i?i.cim.type:i.type){case"esriSMS":case"esriPMS":case"CIMPointSymbol":case"CIMVectorMarker":case"CIMPictureMarker":case"CIMCharacterMarker":return!1;default:return!0}}function kn(i){return"maxVVSize"in i&&i.maxVVSize||"width"in i&&i.width||"size"in i&&i.size||0}function Zn(i){const e=[];for(let T=0;T<i.length;T++)e.push(i.charCodeAt(T));return e}const zn=i=>!!i&&(i=i.trim(),!!(/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(i)&&/[\dz]$/i.test(i)&&i.length>4))},81295:(nn,U,I)=>{I.d(U,{pr:()=>y,t2:()=>o,aH:()=>R});var N=I(5254);function y(l,S=0,M=!1){const L=l[S+3];return l[S+0]*=L,l[S+1]*=L,l[S+2]*=L,M||(l[S+3]*=255),l}function o(l){if(!l)return 0;const{r:S,g:M,b:L,a:E}=l;return(0,N.Jz)(S*E,M*E,L*E,255*E)}function R(l){if(!l)return 0;const[S,M,L,E]=l;return(0,N.Jz)(S*(E/255),M*(E/255),L*(E/255),E)}},39351:(nn,U,I)=>{I.d(U,{xl:()=>dn,lK:()=>Mn,_5:()=>J,pU:()=>V,aK:()=>K,eF:()=>rn,Uh:()=>G,_6:()=>Un,Tz:()=>t,CQ:()=>Rn,oK:()=>Bn,e0:()=>Dn,SD:()=>wn,XJ:()=>Cn,$0:()=>S,iV:()=>Q,Zd:()=>$,Ex:()=>w,uG:()=>pn,Jc:()=>mn,xm:()=>M,m4:()=>Tn,MI:()=>q,AI:()=>A,Ip:()=>j,ru:()=>y,fL:()=>An,iJ:()=>z,nM:()=>Y,Ij:()=>an,f2:()=>un,Ic:()=>en,Al:()=>on,Xj:()=>cn,QU:()=>sn,Jw:()=>ln,kF:()=>fn,yP:()=>X,D3:()=>Z,Iw:()=>W,tQ:()=>gn,I_:()=>c,a:()=>yn,CU:()=>Ln,V4:()=>Sn});const A=1e-30,y=4294967295,c=512,S=8,M=29,w=24,W=8,rn={metrics:{width:15,height:17,left:0,top:-7,advance:14}},Z=0,on=0,en=0,z=1,Y=2,an=3,un=4,cn=12,sn=5,ln=6,fn=5,X=6,J=0,dn=1,V=2,K=3,Mn=4,Tn=2,pn=1,$=2,Q=4,gn=1.05,mn=6,Sn=5,Ln=6,yn=1.15,An=2,Cn=8,j=500,q=10,G=2,Rn=0,t=1,Bn=4,Dn=8,Un=4,wn=1},39406:(nn,U,I)=>{var N,B,A,O,y,c,D,o;I.d(U,{Un:()=>D,pc:()=>O,jx:()=>A,LW:()=>N,X:()=>y,mf:()=>c}),(o=N||(N={}))[o.FILL=0]="FILL",o[o.LINE=1]="LINE",o[o.MARKER=2]="MARKER",o[o.TEXT=3]="TEXT",o[o.LABEL=4]="LABEL",function(o){o[o.SUCCEEDED=0]="SUCCEEDED",o[o.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY"}(B||(B={})),function(o){o[o.NONE=0]="NONE",o[o.MAP=1]="MAP",o[o.LABEL=2]="LABEL",o[o.LABEL_ALPHA=4]="LABEL_ALPHA",o[o.HITTEST=8]="HITTEST",o[o.HIGHLIGHT=16]="HIGHLIGHT",o[o.CLIP=32]="CLIP",o[o.DEBUG=64]="DEBUG",o[o.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(A||(A={})),function(o){o[o.SIZE=0]="SIZE",o[o.COLOR=1]="COLOR",o[o.OPACITY=2]="OPACITY",o[o.ROTATION=3]="ROTATION"}(O||(O={})),function(o){o[o.NONE=0]="NONE",o[o.OPACITY=1]="OPACITY",o[o.COLOR=2]="COLOR",o[o.ROTATION=4]="ROTATION",o[o.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",o[o.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",o[o.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",o[o.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE"}(y||(y={})),function(o){o[o.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",o[o.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",o[o.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",o[o.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(c||(c={})),function(o){o[o.SPRITE=0]="SPRITE",o[o.GLYPH=1]="GLYPH"}(D||(D={}))},5254:(nn,U,I)=>{I.d(U,{UJ:()=>E,Jz:()=>H,Au:()=>M});const N=new Float32Array(1);function M(a){return[255&a,(65280&a)>>>8,(16711680&a)>>>16,(4278190080&a)>>>24]}function E(a,P){return 65535&a|P<<16}function H(a,P,w,W){return 255&a|(255&P)<<8|(255&w)<<16|W<<24}new Uint32Array(N.buffer)},40852:(nn,U,I)=>{I.d(U,{G:()=>N});class N{constructor(A,O,y,c,D,o=!1,R=0){this.name=A,this.count=O,this.type=y,this.offset=c,this.stride=D,this.normalized=o,this.divisor=R}}}}]);