"use strict";var Va=Object.defineProperty,Wa=Object.defineProperties,Ga=Object.getOwnPropertyDescriptors,si=Object.getOwnPropertySymbols,ja=Object.prototype.hasOwnProperty,Ka=Object.prototype.propertyIsEnumerable,li=(he,j,x)=>j in he?Va(he,j,{enumerable:!0,configurable:!0,writable:!0,value:x}):he[j]=x,Nt=(he,j)=>{for(var x in j||(j={}))ja.call(j,x)&&li(he,x,j[x]);if(si)for(var x of si(j))Ka.call(j,x)&&li(he,x,j[x]);return he},hr=(he,j)=>Wa(he,Ga(j));(self.webpackChunkesri4_pwa=self.webpackChunkesri4_pwa||[]).push([[7090,3100],{96160:(he,j,x)=>{x.d(j,{D:()=>mt,b:()=>ht});var D=x(59617),y=x(52382),C=x(73132),B=x(6945),P=x(78925),U=x(24255),L=x(60355),M=x(26859),w=x(84833),N=x(72326),H=x(36603),K=x(58173),J=x(85305),ee=x(52071),Y=x(5105),$=x(47923),te=x(29052),pe=x(54662),we=x(22792),ie=x(10109),se=x(96395),me=x(98898),_e=x(92724),xe=x(8507),X=x(92836),Ie=x(93609),He=x(411),Fe=x(49974),Te=x(17625),ne=x(22355),fe=x(16396);function ht(F){const ve=new ne.kG,Et=ve.vertex.code,ct=ve.fragment.code;ve.include(He.a,{name:"Default Material Shader",output:F.output}),ve.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3");const At=F.hasModelTransformation;return At&&ve.vertex.uniforms.add("model","mat4"),ve.include(w.f),ve.varyings.add("vpos","vec3"),ve.include(X.kl,F),ve.include(L.fQ,F),ve.include(ee.LC,F),F.output!==B.H.Color&&F.output!==B.H.Alpha||(ve.include(M.O,F),ve.include(U.w,{linearDepth:!1,hasModelTransformation:At}),F.normalType===M.h.Attribute&&F.offsetBackfaces&&ve.include(C.w),ve.include(te.Q,F),ve.include(J.B,F),F.instancedColor&&ve.attributes.add(fe.T.INSTANCECOLOR,"vec4"),ve.varyings.add("localvpos","vec3"),ve.include(H.D,F),ve.include(y.q,F),ve.include(N.R,F),ve.include(K.c,F),ve.vertex.uniforms.add("externalColor","vec4"),ve.varyings.add("vcolorExt","vec4"),F.multipassTerrainEnabled&&ve.varyings.add("depth","float"),Et.add(Te.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${F.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${Te.H.float(Ie.bf)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${F.normalType===M.h.Attribute?Te.H`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${F.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${At?"model,":""} vpos);
          ${F.normalType===M.h.Attribute&&F.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${F.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),F.output===B.H.Alpha&&(ve.include(P.p2,F),ve.include(Ie.sj,F),F.multipassTerrainEnabled&&(ve.fragment.include($.S),ve.include(ie.l,F)),ve.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),F.hasColorTexture&&ve.fragment.uniforms.add("tex","sampler2D"),ve.fragment.include(Fe.y),ct.add(Te.H`
      void main() {
        discardBySlice(vpos);
        ${F.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${F.hasColorTexture?Te.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${F.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Te.H`vec4 texColor = vec4(1.0);`}
        ${F.attributeColor?Te.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Te.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),F.output===B.H.Color&&(ve.include(P.p2,F),ve.include(we.X,F),ve.include(pe.K,F),ve.include(Ie.sj,F),F.receiveShadows&&ve.include(xe.hX,F),F.multipassTerrainEnabled&&(ve.fragment.include($.S),ve.include(ie.l,F)),ve.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),F.hasColorTexture&&ve.fragment.uniforms.add("tex","sampler2D"),ve.include(_e.jV,F),ve.include(me.T,F),ve.fragment.include(Fe.y),ve.include(se.k,F),ct.add(Te.H`
      void main() {
        discardBySlice(vpos);
        ${F.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${F.hasColorTexture?Te.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${F.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Te.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${F.normalType===M.h.ScreenDerivative?Te.H`
        vec3 normal = screenDerivativeNormal(localvpos);`:Te.H`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${F.pbrMode===_e.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${F.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":F.viewingMode===D.JY.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${F.attributeColor?Te.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Te.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${F.hasNormalTexture?Te.H`
              mat3 tangentSpace = ${F.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${F.pbrMode===_e.f7.Normal||F.pbrMode===_e.f7.Schematic?F.viewingMode===D.JY.Global?Te.H`vec3 normalGround = normalize(vpos + localOrigin);`:Te.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:Te.H``}
        ${F.pbrMode===_e.f7.Normal||F.pbrMode===_e.f7.Schematic?Te.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${F.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),ve.include(Y.s,F),ve}const mt=Object.freeze({__proto__:null,build:ht})},77133:(he,j,x)=>{x.d(j,{R:()=>Te,b:()=>Fe});var D=x(59617),y=x(52382),C=x(73132),B=x(6945),P=x(78925),U=x(24255),L=x(60355),M=x(26859),w=x(84833),N=x(72326),H=x(36603),K=x(58173),J=x(52071),ee=x(5105),Y=x(47923),$=x(54662),te=x(22792),pe=x(10109),we=x(98898),ie=x(92724),se=x(8507),me=x(92836),_e=x(93609),xe=x(49974),X=x(17625),Ie=x(22355),He=x(16396);function Fe(ne){const fe=new Ie.kG,ht=fe.vertex.code,mt=fe.fragment.code;return fe.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3"),fe.include(w.f),fe.varyings.add("vpos","vec3"),fe.include(me.kl,ne),fe.include(L.fQ,ne),fe.include(J.LC,ne),ne.output!==B.H.Color&&ne.output!==B.H.Alpha||(fe.include(M.O,ne),fe.include(U.w,{linearDepth:!1}),ne.offsetBackfaces&&fe.include(C.w),ne.instancedColor&&fe.attributes.add(He.T.INSTANCECOLOR,"vec4"),fe.varyings.add("vNormalWorld","vec3"),fe.varyings.add("localvpos","vec3"),ne.multipassTerrainEnabled&&fe.varyings.add("depth","float"),fe.include(H.D,ne),fe.include(y.q,ne),fe.include(N.R,ne),fe.include(K.c,ne),fe.vertex.uniforms.add("externalColor","vec4"),fe.varyings.add("vcolorExt","vec4"),ht.add(X.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${ne.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${X.H.float(_e.bf)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${ne.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${ne.multipassTerrainEnabled?X.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),ne.output===B.H.Alpha&&(fe.include(P.p2,ne),fe.include(_e.sj,ne),ne.multipassTerrainEnabled&&(fe.fragment.include(Y.S),fe.include(pe.l,ne)),fe.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),fe.fragment.uniforms.add("view","mat4"),ne.hasColorTexture&&fe.fragment.uniforms.add("tex","sampler2D"),fe.fragment.include(xe.y),mt.add(X.H`
      void main() {
        discardBySlice(vpos);
        ${ne.multipassTerrainEnabled?X.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${ne.hasColorTexture?X.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${ne.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:X.H`vec4 texColor = vec4(1.0);`}
        ${ne.attributeColor?X.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:X.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),ne.output===B.H.Color&&(fe.include(P.p2,ne),fe.include(te.X,ne),fe.include($.K,ne),fe.include(_e.sj,ne),ne.receiveShadows&&fe.include(se.hX,ne),ne.multipassTerrainEnabled&&(fe.fragment.include(Y.S),fe.include(pe.l,ne)),fe.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),fe.fragment.uniforms.add("view","mat4"),ne.hasColorTexture&&fe.fragment.uniforms.add("tex","sampler2D"),fe.include(ie.jV,ne),fe.include(we.T,ne),fe.fragment.include(xe.y),mt.add(X.H`
      void main() {
        discardBySlice(vpos);
        ${ne.multipassTerrainEnabled?X.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${ne.hasColorTexture?X.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${ne.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:X.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${ne.pbrMode===ie.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${ne.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":ne.viewingMode===D.JY.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${ne.attributeColor?X.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:X.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${X.H`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${ne.pbrMode===ie.f7.Normal||ne.pbrMode===ie.f7.Schematic?ne.viewingMode===D.JY.Global?X.H`vec3 normalGround = normalize(vpos + localOrigin);`:X.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:X.H``}
        ${ne.pbrMode===ie.f7.Normal||ne.pbrMode===ie.f7.Schematic?X.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${ne.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),fe.include(ee.s,ne),fe}const Te=Object.freeze({__proto__:null,build:Fe})},550:(he,j,x)=>{function D(){return[1,0,0,0,1,0,0,0,1]}function B(U,L){return new Float64Array(U,L,9)}x.d(j,{a:()=>B,c:()=>D}),Object.freeze({__proto__:null,create:D,clone:function y(U){return[U[0],U[1],U[2],U[3],U[4],U[5],U[6],U[7],U[8]]},fromValues:function C(U,L,M,w,N,H,K,J,ee){return[U,L,M,w,N,H,K,J,ee]},createView:B})},43703:(he,j,x)=>{function D(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function y(L){return[L[0],L[1],L[2],L[3],L[4],L[5],L[6],L[7],L[8],L[9],L[10],L[11],L[12],L[13],L[14],L[15]]}function B(L,M){return new Float64Array(L,M,16)}x.d(j,{I:()=>P,a:()=>B,b:()=>y,c:()=>D});const P=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze({__proto__:null,create:D,clone:y,fromValues:function C(L,M,w,N,H,K,J,ee,Y,$,te,pe,we,ie,se,me){return[L,M,w,N,H,K,J,ee,Y,$,te,pe,we,ie,se,me]},createView:B,IDENTITY:P})},48977:(he,j,x)=>{x.d(j,{c:()=>pe,g:()=>w,j:()=>F,k:()=>ie,m:()=>N,s:()=>M});var D=x(550),y=x(78451),C=x(28093),B=x(39863),P=x(84161),U=x(993);function M(V,Q,z){z*=.5;const oe=Math.sin(z);return V[0]=oe*Q[0],V[1]=oe*Q[1],V[2]=oe*Q[2],V[3]=Math.cos(z),V}function w(V,Q){const z=2*Math.acos(Q[3]),oe=Math.sin(z/2);return oe>B.E?(V[0]=Q[0]/oe,V[1]=Q[1]/oe,V[2]=Q[2]/oe):(V[0]=1,V[1]=0,V[2]=0),z}function N(V,Q,z){const oe=Q[0],de=Q[1],ge=Q[2],Ee=Q[3],Oe=z[0],Be=z[1],dt=z[2],ft=z[3];return V[0]=oe*ft+Ee*Oe+de*dt-ge*Be,V[1]=de*ft+Ee*Be+ge*Oe-oe*dt,V[2]=ge*ft+Ee*dt+oe*Be-de*Oe,V[3]=Ee*ft-oe*Oe-de*Be-ge*dt,V}function Y(V,Q,z,oe){const de=Q[0],ge=Q[1],Ee=Q[2],Oe=Q[3];let Be,dt,ft,Dt,Rt,W=z[0],G=z[1],Z=z[2],q=z[3];return dt=de*W+ge*G+Ee*Z+Oe*q,dt<0&&(dt=-dt,W=-W,G=-G,Z=-Z,q=-q),1-dt>B.E?(Be=Math.acos(dt),ft=Math.sin(Be),Dt=Math.sin((1-oe)*Be)/ft,Rt=Math.sin(oe*Be)/ft):(Dt=1-oe,Rt=oe),V[0]=Dt*de+Rt*W,V[1]=Dt*ge+Rt*G,V[2]=Dt*Ee+Rt*Z,V[3]=Dt*Oe+Rt*q,V}function pe(V,Q){return V[0]=-Q[0],V[1]=-Q[1],V[2]=-Q[2],V[3]=Q[3],V}function we(V,Q){const z=Q[0]+Q[4]+Q[8];let oe;if(z>0)oe=Math.sqrt(z+1),V[3]=.5*oe,oe=.5/oe,V[0]=(Q[5]-Q[7])*oe,V[1]=(Q[6]-Q[2])*oe,V[2]=(Q[1]-Q[3])*oe;else{let de=0;Q[4]>Q[0]&&(de=1),Q[8]>Q[3*de+de]&&(de=2);const ge=(de+1)%3,Ee=(de+2)%3;oe=Math.sqrt(Q[3*de+de]-Q[3*ge+ge]-Q[3*Ee+Ee]+1),V[de]=.5*oe,oe=.5/oe,V[3]=(Q[3*ge+Ee]-Q[3*Ee+ge])*oe,V[ge]=(Q[3*ge+de]+Q[3*de+ge])*oe,V[Ee]=(Q[3*Ee+de]+Q[3*de+Ee])*oe}return V}function ie(V,Q,z,oe){const de=.5*Math.PI/180;Q*=de,z*=de,oe*=de;const ge=Math.sin(Q),Ee=Math.cos(Q),Oe=Math.sin(z),Be=Math.cos(z),dt=Math.sin(oe),ft=Math.cos(oe);return V[0]=ge*Be*ft-Ee*Oe*dt,V[1]=Ee*Oe*ft+ge*Be*dt,V[2]=Ee*Be*dt-ge*Oe*ft,V[3]=Ee*Be*ft+ge*Oe*dt,V}const me=U.c,_e=U.s,xe=U.a,X=N,Ie=U.b,He=U.d,Fe=U.l,Te=U.e,ne=Te,fe=U.f,ht=fe,mt=U.n,F=U.g,ve=U.h,ct=(0,C.c)(),At=(0,C.f)(1,0,0),sr=(0,C.f)(0,1,0),vt=(0,y.a)(),Gt=(0,y.a)(),lr=(0,D.c)();Object.freeze({__proto__:null,identity:function L(V){return V[0]=0,V[1]=0,V[2]=0,V[3]=1,V},setAxisAngle:M,getAxisAngle:w,multiply:N,rotateX:function H(V,Q,z){z*=.5;const oe=Q[0],de=Q[1],ge=Q[2],Ee=Q[3],Oe=Math.sin(z),Be=Math.cos(z);return V[0]=oe*Be+Ee*Oe,V[1]=de*Be+ge*Oe,V[2]=ge*Be-de*Oe,V[3]=Ee*Be-oe*Oe,V},rotateY:function K(V,Q,z){z*=.5;const oe=Q[0],de=Q[1],ge=Q[2],Ee=Q[3],Oe=Math.sin(z),Be=Math.cos(z);return V[0]=oe*Be-ge*Oe,V[1]=de*Be+Ee*Oe,V[2]=ge*Be+oe*Oe,V[3]=Ee*Be-de*Oe,V},rotateZ:function J(V,Q,z){z*=.5;const oe=Q[0],de=Q[1],ge=Q[2],Ee=Q[3],Oe=Math.sin(z),Be=Math.cos(z);return V[0]=oe*Be+de*Oe,V[1]=de*Be-oe*Oe,V[2]=ge*Be+Ee*Oe,V[3]=Ee*Be-ge*Oe,V},calculateW:function ee(V,Q){const z=Q[0],oe=Q[1],de=Q[2];return V[0]=z,V[1]=oe,V[2]=de,V[3]=Math.sqrt(Math.abs(1-z*z-oe*oe-de*de)),V},slerp:Y,random:function $(V){const Q=(0,B.R)(),z=(0,B.R)(),oe=(0,B.R)(),de=Math.sqrt(1-Q),ge=Math.sqrt(Q);return V[0]=de*Math.sin(2*Math.PI*z),V[1]=de*Math.cos(2*Math.PI*z),V[2]=ge*Math.sin(2*Math.PI*oe),V[3]=ge*Math.cos(2*Math.PI*oe),V},invert:function te(V,Q){const z=Q[0],oe=Q[1],de=Q[2],ge=Q[3],Ee=z*z+oe*oe+de*de+ge*ge,Oe=Ee?1/Ee:0;return V[0]=-z*Oe,V[1]=-oe*Oe,V[2]=-de*Oe,V[3]=ge*Oe,V},conjugate:pe,fromMat3:we,fromEuler:ie,str:function se(V){return"quat("+V[0]+", "+V[1]+", "+V[2]+", "+V[3]+")"},copy:me,set:_e,add:xe,mul:X,scale:Ie,dot:He,lerp:Fe,length:Te,len:ne,squaredLength:fe,sqrLen:ht,normalize:mt,exactEquals:F,equals:ve,rotationTo:function Et(V,Q,z){const oe=(0,P.d)(Q,z);return oe<-.999999?((0,P.c)(ct,At,Q),(0,P.u)(ct)<1e-6&&(0,P.c)(ct,sr,Q),(0,P.n)(ct,ct),M(V,ct,Math.PI),V):oe>.999999?(V[0]=0,V[1]=0,V[2]=0,V[3]=1,V):((0,P.c)(ct,Q,z),V[0]=ct[0],V[1]=ct[1],V[2]=ct[2],V[3]=1+oe,mt(V,V))},sqlerp:function xt(V,Q,z,oe,de,ge){return Y(vt,Q,de,ge),Y(Gt,z,oe,ge),Y(V,vt,Gt,2*ge*(1-ge)),V},setAxes:function rr(V,Q,z,oe){const de=lr;return de[0]=z[0],de[3]=z[1],de[6]=z[2],de[1]=oe[0],de[4]=oe[1],de[7]=oe[2],de[2]=-Q[0],de[5]=-Q[1],de[8]=-Q[2],mt(V,we(V,de))}})},78451:(he,j,x)=>{function D(){return[0,0,0,1]}function y(L){return[L[0],L[1],L[2],L[3]]}function B(L,M){return new Float64Array(L,M,4)}x.d(j,{I:()=>P,a:()=>D,b:()=>y,c:()=>B});const P=[0,0,0,1];Object.freeze({__proto__:null,create:D,clone:y,fromValues:function C(L,M,w,N){return[L,M,w,N]},createView:B,IDENTITY:P})},79800:(he,j,x)=>{x.d(j,{a:()=>C,b:()=>U,n:()=>P,s:()=>B,t:()=>y});var D=x(96286);function y(M,w,N){if(M.count!==w.count)return void D.c.error("source and destination buffers need to have the same number of elements");const H=M.count,K=N[0],J=N[1],ee=N[2],Y=N[4],$=N[5],te=N[6],pe=N[8],we=N[9],ie=N[10],se=N[12],me=N[13],_e=N[14],xe=M.typedBuffer,X=M.typedBufferStride,Ie=w.typedBuffer,He=w.typedBufferStride;for(let Fe=0;Fe<H;Fe++){const Te=Fe*X,ne=Fe*He,fe=Ie[ne],ht=Ie[ne+1],mt=Ie[ne+2];xe[Te]=K*fe+Y*ht+pe*mt+se,xe[Te+1]=J*fe+$*ht+we*mt+me,xe[Te+2]=ee*fe+te*ht+ie*mt+_e}}function C(M,w,N){if(M.count!==w.count)return void D.c.error("source and destination buffers need to have the same number of elements");const H=M.count,K=N[0],J=N[1],ee=N[2],Y=N[3],$=N[4],te=N[5],pe=N[6],we=N[7],ie=N[8],se=M.typedBuffer,me=M.typedBufferStride,_e=w.typedBuffer,xe=w.typedBufferStride;for(let X=0;X<H;X++){const Ie=X*me,He=X*xe,Fe=_e[He],Te=_e[He+1],ne=_e[He+2];se[Ie]=K*Fe+Y*Te+pe*ne,se[Ie+1]=J*Fe+$*Te+we*ne,se[Ie+2]=ee*Fe+te*Te+ie*ne}}function B(M,w,N){const H=Math.min(M.count,w.count),K=M.typedBuffer,J=M.typedBufferStride,ee=w.typedBuffer,Y=w.typedBufferStride;for(let $=0;$<H;$++){const te=$*J,pe=$*Y;K[te]=N*ee[pe],K[te+1]=N*ee[pe+1],K[te+2]=N*ee[pe+2]}}function P(M,w){const N=Math.min(M.count,w.count),H=M.typedBuffer,K=M.typedBufferStride,J=w.typedBuffer,ee=w.typedBufferStride;for(let Y=0;Y<N;Y++){const $=Y*K,te=Y*ee,pe=J[te],we=J[te+1],ie=J[te+2],se=Math.sqrt(pe*pe+we*we+ie*ie);if(se>0){const me=1/se;H[$]=me*pe,H[$+1]=me*we,H[$+2]=me*ie}}}function U(M,w,N){const H=Math.min(M.count,w.count),K=M.typedBuffer,J=M.typedBufferStride,ee=w.typedBuffer,Y=w.typedBufferStride;for(let $=0;$<H;$++){const te=$*J,pe=$*Y;K[te]=ee[pe]>>N,K[te+1]=ee[pe+1]>>N,K[te+2]=ee[pe+2]>>N}}Object.freeze({__proto__:null,transformMat4:y,transformMat3:C,scale:B,normalize:P,shiftRight:U})},9554:(he,j,x)=>{function D(B,P,U){const L=B.typedBuffer,M=B.typedBufferStride,w=P.typedBuffer,N=P.typedBufferStride,H=U?U.count:P.count;let K=(U&&U.dstIndex?U.dstIndex:0)*M,J=(U&&U.srcIndex?U.srcIndex:0)*N;for(let ee=0;ee<H;++ee)L[K]=w[J],L[K+1]=w[J+1],L[K+2]=w[J+2],K+=M,J+=N}function y(B,P,U,L,M){var w,N;const H=B.typedBuffer,K=B.typedBufferStride,J=null!=(w=null==M?void 0:M.count)?w:B.count;let ee=(null!=(N=null==M?void 0:M.dstIndex)?N:0)*K;for(let Y=0;Y<J;++Y)H[ee]=P,H[ee+1]=U,H[ee+2]=L,ee+=K}x.d(j,{c:()=>D,f:()=>y}),Object.freeze({__proto__:null,copy:D,fill:y})},14658:(he,j,x)=>{function D(){return new Float32Array(3)}function C($,te,pe){const we=new Float32Array(3);return we[0]=$,we[1]=te,we[2]=pe,we}function P(){return D()}function U(){return C(1,1,1)}function L(){return C(1,0,0)}function M(){return C(0,1,0)}function w(){return C(0,0,1)}x.d(j,{c:()=>D,f:()=>C});const N=P(),H=U(),K=L(),J=M(),ee=w();Object.freeze({__proto__:null,create:D,clone:function y($){const te=new Float32Array(3);return te[0]=$[0],te[1]=$[1],te[2]=$[2],te},fromValues:C,createView:function B($,te){return new Float32Array($,te,3)},zeros:P,ones:U,unitX:L,unitY:M,unitZ:w,ZEROS:N,ONES:H,UNIT_X:K,UNIT_Y:J,UNIT_Z:ee})},83100:(he,j,x)=>{function D(w){return w=w||globalThis.location.hostname,M.some(N=>{var H;return null!=(null==(H=w)?void 0:H.match(N))})}function y(w,N){return w&&(N=N||globalThis.location.hostname)?null!=N.match(B)||null!=N.match(U)?w.replace("static.arcgis.com","staticdev.arcgis.com"):null!=N.match(P)||null!=N.match(L)?w.replace("static.arcgis.com","staticqa.arcgis.com"):w:w}x.d(j,{pJ:()=>y,XO:()=>D});const B=/^devext.arcgis.com$/,P=/^qaext.arcgis.com$/,U=/^[\w-]*\.mapsdevext.arcgis.com$/,L=/^[\w-]*\.mapsqa.arcgis.com$/,M=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,B,P,/^jsapps.esri.com$/,U,L]},96286:(he,j,x)=>{x.d(j,{c:()=>y});const y=x(63290).Z.getLogger("esri.views.3d.support.buffer.math")},47090:(he,j,x)=>{x.r(j),x.d(j,{fetch:()=>Ua,gltfToEngineResources:()=>br,parseUrl:()=>ni});var D=x(15861),y=x(83100),C=x(62208),B=x(30217),P=x(550),U=x(28347),L=x(43703),M=x(84161),w=x(28093),N=x(5548),H=x(60479),K=x(79800),J=x(63657),ee=x(60490),Y=x(9160),$=x(93831),te=x(96170),pe=x(84792),we=x(59213),ie=x(26584),se=x(63290),me=x(10699),_e=x(10349),xe=x(70026),X=x(42743),Ie=x(77029),He=x(2282);class Fe{constructor(d,u,v,b){this.primitiveIndices=d,this._numIndexPerPrimitive=u,this.indices=v,this.position=b,this.center=(0,w.c)(),(0,He.hu)(d.length>=1),(0,He.hu)(v.length%this._numIndexPerPrimitive==0),(0,He.hu)(v.length>=d.length*this._numIndexPerPrimitive),(0,He.hu)(3===b.size||4===b.size);const{data:O,size:A}=b,R=d.length;let I=A*v[this._numIndexPerPrimitive*d[0]];Te.clear(),Te.push(I),this.bbMin=(0,w.f)(O[I],O[I+1],O[I+2]),this.bbMax=(0,w.a)(this.bbMin);for(let k=0;k<R;++k){const ce=this._numIndexPerPrimitive*d[k];for(let ae=0;ae<this._numIndexPerPrimitive;++ae){I=A*v[ce+ae],Te.push(I);let be=O[I];this.bbMin[0]=Math.min(be,this.bbMin[0]),this.bbMax[0]=Math.max(be,this.bbMax[0]),be=O[I+1],this.bbMin[1]=Math.min(be,this.bbMin[1]),this.bbMax[1]=Math.max(be,this.bbMax[1]),be=O[I+2],this.bbMin[2]=Math.min(be,this.bbMin[2]),this.bbMax[2]=Math.max(be,this.bbMax[2])}}(0,M.e)(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let S=this.radius*this.radius;for(let k=0;k<Te.length;++k){I=Te.getItemAt(k);const ce=O[I]-this.center[0],ae=O[I+1]-this.center[1],be=O[I+2]-this.center[2],re=ce*ce+ae*ae+be*be;if(re<=S)continue;const Re=Math.sqrt(re),Le=.5*(Re-this.radius);this.radius=this.radius+Le,S=this.radius*this.radius;const ze=Le/Re;this.center[0]+=ce*ze,this.center[1]+=ae*ze,this.center[2]+=be*ze}Te.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if((0,M.h)(this.bbMin,this.bbMax)>1){const d=(0,M.e)((0,w.c)(),this.bbMin,this.bbMax,.5),u=this.primitiveIndices.length,v=new Uint8Array(u),b=new Array(8);for(let S=0;S<8;++S)b[S]=0;const{data:O,size:A}=this.position;for(let S=0;S<u;++S){let k=0;const ce=this._numIndexPerPrimitive*this.primitiveIndices[S];let ae=A*this.indices[ce],be=O[ae],re=O[ae+1],Re=O[ae+2];for(let Le=1;Le<this._numIndexPerPrimitive;++Le){ae=A*this.indices[ce+Le];const ze=O[ae],lt=O[ae+1],Qe=O[ae+2];ze<be&&(be=ze),lt<re&&(re=lt),Qe<Re&&(Re=Qe)}be<d[0]&&(k|=1),re<d[1]&&(k|=2),Re<d[2]&&(k|=4),v[S]=k,++b[k]}let R=0;for(let S=0;S<8;++S)b[S]>0&&++R;if(R<2)return;const I=new Array(8);for(let S=0;S<8;++S)I[S]=b[S]>0?new Uint32Array(b[S]):void 0;for(let S=0;S<8;++S)b[S]=0;for(let S=0;S<u;++S){const k=v[S];I[k][b[k]++]=this.primitiveIndices[S]}this._children=new Array(8);for(let S=0;S<8;++S)void 0!==I[S]&&(this._children[S]=new Fe(I[S],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){Te.prune()}}const Te=new Ie.Z({deallocator:null});var ht,_,ne=x(86236);class fe{constructor(){this.id=(0,ne.D)()}unload(){}}(_=ht||(ht={}))[_.Layer=0]="Layer",_[_.Object=1]="Object",_[_.Geometry=2]="Geometry",_[_.Material=3]="Material",_[_.Texture=4]="Texture",_[_.COUNT=5]="COUNT";var mt=x(73825),F=x(16396);class ve extends fe{constructor(d,u=[],v=X.MX.Triangle,b=-1){super(),this._primitiveType=v,this.edgeIndicesLength=b,this.type=ht.Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[O,A]of d)A&&this._vertexAttributes.set(O,Nt({},A));if(null==u||0===u.length){const O=function Et(_){const d=_.values().next().value;return null==d?0:d.data.length/d.size}(this._vertexAttributes),A=(0,mt.p)(O);this.edgeIndicesLength=this.edgeIndicesLength<0?O:this.edgeIndicesLength;for(const R of this._vertexAttributes.keys())this._indices.set(R,A)}else for(const[O,A]of u)A&&(this._indices.set(O,ct(A)),O===F.T.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(O).length:this.edgeIndicesLength))}cloneShallow(){const d=new ve([],void 0,this._primitiveType,void 0),{_vertexAttributes:u,_indices:v}=d;return this._vertexAttributes.forEach((b,O)=>{u.set(O,b)}),this._indices.forEach((b,O)=>{v.set(O,b)}),d.screenToWorldRatio=this.screenToWorldRatio,d._boundingInfo=this._boundingInfo,d}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(d){const u=this._vertexAttributes.get(d);return u&&!u.exclusive&&(u.data=Array.from(u.data),u.exclusive=!0),u}get indices(){return this._indices}get indexCount(){const d=this._indices.values().next().value;return d?d.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return(0,C.Wi)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(d){return this.primitiveType===X.MX.Triangle?this._computeAttachmentOriginTriangles(d):this._computeAttachmentOriginPoints(d)}_computeAttachmentOriginTriangles(d){const u=this.indices.get(F.T.POSITION),v=this.vertexAttributes.get(F.T.POSITION);return(0,mt.cM)(v,u,d)}_computeAttachmentOriginPoints(d){const u=this.indices.get(F.T.POSITION),v=this.vertexAttributes.get(F.T.POSITION);return(0,mt.NO)(v,u,d)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const d=this.indices.get(F.T.POSITION);if(0===d.length)return null;const u=this.primitiveType===X.MX.Triangle?3:1;(0,He.hu)(d.length%u==0,"Indexing error: "+d.length+" not divisible by "+u);const v=(0,mt.p)(d.length/u),b=this.vertexAttributes.get(F.T.POSITION);return new Fe(v,u,d,b)}}function ct(_){if(_.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return _;for(const d of _)if(d>=65536)return _;return new Uint16Array(_)}var At=x(94573),sr=x(61885),xt=x(21286),vt=x(55713),Gt=x(21726),rr=x(33899),lr=x(54346);function cr(){if((0,C.Wi)(V)){const _=d=>(0,lr.V)(`esri/libs/basisu/${d}`);V=x.e(2405).then(x.bind(x,52405)).then(d=>d.b).then(({default:d})=>d({locateFile:_}).then(u=>(u.initializeBasis(),delete u.then,u)))}return V}let V;var Q;!function(_){_[_.ETC1_RGB=0]="ETC1_RGB",_[_.ETC2_RGBA=1]="ETC2_RGBA",_[_.BC1_RGB=2]="BC1_RGB",_[_.BC3_RGBA=3]="BC3_RGBA",_[_.BC4_R=4]="BC4_R",_[_.BC5_RG=5]="BC5_RG",_[_.BC7_M6_RGB=6]="BC7_M6_RGB",_[_.BC7_M5_RGBA=7]="BC7_M5_RGBA",_[_.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",_[_.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",_[_.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",_[_.ATC_RGB=11]="ATC_RGB",_[_.ATC_RGBA=12]="ATC_RGBA",_[_.FXT1_RGB=17]="FXT1_RGB",_[_.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",_[_.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",_[_.ETC2_EAC_R11=20]="ETC2_EAC_R11",_[_.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",_[_.RGBA32=13]="RGBA32",_[_.RGB565=14]="RGB565",_[_.BGR565=15]="BGR565",_[_.RGBA4444=16]="RGBA4444"}(Q||(Q={}));var z=x(67969),oe=x(55086),de=x(26906);let ge=null,Ee=null;function Oe(){return Be.apply(this,arguments)}function Be(){return(Be=(0,D.Z)(function*(){return(0,C.Wi)(Ee)&&(Ee=cr(),ge=yield Ee),Ee})).apply(this,arguments)}function Dt(_,d,u,v,b){const O=(0,de.RG)(d?z.q_.COMPRESSED_RGBA8_ETC2_EAC:z.q_.COMPRESSED_RGB8_ETC2);return Math.ceil(u*v*O*(b&&_>1?(4**_-1)/(3*4**(_-1)):1))}function Rt(_){return _.getNumImages()>=1&&!_.isUASTC()}function W(_){return _.getFaces()>=1&&_.isETC1S()}function Z(){return Z=(0,D.Z)(function*(_,d,u){(0,C.Wi)(ge)&&(ge=yield Oe());const v=new ge.BasisFile(new Uint8Array(u));if(!Rt(v))return null;v.startTranscoding();const b=Ce(_,d,v.getNumLevels(0),v.getHasAlpha(),v.getImageWidth(0,0),v.getImageHeight(0,0),(O,A)=>v.getImageTranscodedSizeInBytes(0,O,A),(O,A,R)=>v.transcodeImage(R,0,O,A,0,0));return v.close(),v.delete(),b}),Z.apply(this,arguments)}function le(){return le=(0,D.Z)(function*(_,d,u){(0,C.Wi)(ge)&&(ge=yield Oe());const v=new ge.KTX2File(new Uint8Array(u));if(!W(v))return null;v.startTranscoding();const b=Ce(_,d,v.getLevels(),v.getHasAlpha(),v.getWidth(),v.getHeight(),(O,A)=>v.getImageTranscodedSizeInBytes(O,0,0,A),(O,A,R)=>v.transcodeImage(R,O,0,0,A,0,-1,-1));return v.close(),v.delete(),b}),le.apply(this,arguments)}function Ce(_,d,u,v,b,O,A,R){const{compressedTextureETC:I,compressedTextureS3TC:S}=_.capabilities,[k,ce]=I?v?[Q.ETC2_RGBA,z.q_.COMPRESSED_RGBA8_ETC2_EAC]:[Q.ETC1_RGB,z.q_.COMPRESSED_RGB8_ETC2]:S?v?[Q.BC3_RGBA,z.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Q.BC1_RGB,z.q_.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Q.RGBA32,z.VI.RGBA],ae=d.hasMipmap?u:Math.min(1,u),be=[];for(let ze=0;ze<ae;ze++)be.push(new Uint8Array(A(ze,k))),R(ze,k,be[ze]);const re=be.length>1,Re=re?z.cw.LINEAR_MIPMAP_LINEAR:z.cw.LINEAR,Le=hr(Nt({},d),{samplingMode:Re,hasMipmap:re,internalFormat:ce,width:b,height:O});return new oe.x(_,Le,{type:"compressed",levels:be})}const Ae=se.Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function Ke(_){return _.charCodeAt(0)+(_.charCodeAt(1)<<8)+(_.charCodeAt(2)<<16)+(_.charCodeAt(3)<<24)}const tt=Ke("DXT1"),Ot=Ke("DXT3"),st=Ke("DXT5");const yt=new Map([[F.T.POSITION,0],[F.T.NORMAL,1],[F.T.UV0,2],[F.T.COLOR,3],[F.T.SIZE,4],[F.T.TANGENT,4],[F.T.AUXPOS1,5],[F.T.SYMBOLCOLOR,5],[F.T.AUXPOS2,6],[F.T.FEATUREATTRIBUTE,6],[F.T.INSTANCEFEATUREATTRIBUTE,6],[F.T.INSTANCECOLOR,7],[F.T.MODEL,8],[F.T.MODELNORMAL,12],[F.T.MODELORIGINHI,11],[F.T.MODELORIGINLO,15]]);var ut=x(40852);new ut.G(F.T.POSITION,3,z.g.FLOAT,0,12),new ut.G(F.T.POSITION,3,z.g.FLOAT,0,20),new ut.G(F.T.UV0,2,z.g.FLOAT,12,20),new ut.G(F.T.POSITION,3,z.g.FLOAT,0,32),new ut.G(F.T.NORMAL,3,z.g.FLOAT,12,32),new ut.G(F.T.UV0,2,z.g.FLOAT,24,32),new ut.G(F.T.POSITION,3,z.g.FLOAT,0,16),new ut.G(F.T.COLOR,4,z.g.UNSIGNED_BYTE,12,16);const Lt=[new ut.G(F.T.POSITION,2,z.g.FLOAT,0,8)],It=[new ut.G(F.T.POSITION,2,z.g.FLOAT,0,16),new ut.G(F.T.UV0,2,z.g.FLOAT,8,16)];var Ht,Bt=x(83994),$t=x(49353),St=x(85775),Ut=x(38210);class Je extends fe{constructor(d,u){super(),this.data=d,this.type=ht.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new sr.Z,this.params=u||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:z.e8.REPEAT,t:z.e8.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||X.CE.STRETCH,this.estimatedTexMemRequired=Je._estimateTexMemRequired(this.data,this.params),this._startPreload()}_startPreload(){const d=this.data;(0,C.Wi)(d)||(d instanceof HTMLVideoElement?this._startPreloadVideoElement(d):d instanceof HTMLImageElement&&this._startPreloadImageElement(d))}_startPreloadVideoElement(d){(0,Gt.jc)(d.src)||"auto"===d.preload&&d.crossOrigin||(d.preload="auto",d.crossOrigin="anonymous",d.src=d.src)}_startPreloadImageElement(d){(0,Gt.HK)(d.src)||(0,Gt.jc)(d.src)||d.crossOrigin||(d.crossOrigin="anonymous",d.src=d.src)}static _getDataDimensions(d){return d instanceof HTMLVideoElement?{width:d.videoWidth,height:d.videoHeight}:d}static _estimateTexMemRequired(d,u){if((0,C.Wi)(d))return 0;if((0,vt.eP)(d)||(0,vt.lq)(d))return u.encoding===Je.KTX2_ENCODING?function ft(_,d){if((0,C.Wi)(ge))return _.byteLength;const u=new ge.KTX2File(new Uint8Array(_)),v=W(u)?Dt(u.getLevels(),u.getHasAlpha(),u.getWidth(),u.getHeight(),d):0;return u.close(),u.delete(),v}(d,u.mipmap):u.encoding===Je.BASIS_ENCODING?function dt(_,d){if((0,C.Wi)(ge))return _.byteLength;const u=new ge.BasisFile(new Uint8Array(_)),v=Rt(u)?Dt(u.getNumLevels(0),u.getHasAlpha(),u.getImageWidth(0,0),u.getImageHeight(0,0),d):0;return u.close(),u.delete(),v}(d,u.mipmap):d.byteLength;const{width:v,height:b}=d instanceof Image||d instanceof ImageData||d instanceof HTMLCanvasElement||d instanceof HTMLVideoElement?Je._getDataDimensions(d):u;return(u.mipmap?4/3:1)*v*b*(u.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(d){var u;return{target:z.No.TEXTURE_2D,pixelFormat:z.VI.RGBA,dataType:z.Br.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?z.cw.LINEAR_MIPMAP_LINEAR:z.cw.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(u=this.params.maxAnisotropy)?u:this.params.mipmap?d.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(d,u){if((0,C.pC)(this._glTexture))return this._glTexture;if((0,C.pC)(this._loadingPromise))return this._loadingPromise;const v=this.data;return(0,C.Wi)(v)?(this._glTexture=new oe.x(d,this._createDescriptor(d),null),this._glTexture):"string"==typeof v?this._loadFromURL(d,u,v):v instanceof Image?this._loadFromImageElement(d,u,v):v instanceof HTMLVideoElement?this._loadFromVideoElement(d,u,v):v instanceof ImageData||v instanceof HTMLCanvasElement?this._loadFromImage(d,v,u):((0,vt.eP)(v)||(0,vt.lq)(v))&&this.params.encoding===Je.DDS_ENCODING?(this.data=void 0,this._loadFromDDSData(d,v)):((0,vt.eP)(v)||(0,vt.lq)(v))&&this.params.encoding===Je.KTX2_ENCODING?(this.data=void 0,this._loadFromKTX2(d,v)):((0,vt.eP)(v)||(0,vt.lq)(v))&&this.params.encoding===Je.BASIS_ENCODING?(this.data=void 0,this._loadFromBasis(d,v)):(0,vt.lq)(v)?this._loadFromPixelData(d,v):(0,vt.eP)(v)?this._loadFromPixelData(d,new Uint8Array(v)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(d,u,v){if(!(this.data instanceof HTMLVideoElement)||(0,C.Wi)(this._glTexture)||this.data.readyState<Ht.HAVE_CURRENT_DATA||v===this.data.currentTime)return v;if((0,C.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:b,vao:O,sourceTexture:A}=this._powerOfTwoStretchInfo;A.setData(this.data),this._drawStretchedTexture(d,u,b,O,A,this._glTexture)}else{const{width:b,height:O}=this.data,{width:A,height:R}=this._glTexture.descriptor;b!==A||O!==R?this._glTexture.updateData(0,0,0,Math.min(b,A),Math.min(O,R),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.data.currentTime}_loadFromDDSData(d,u){return this._glTexture=function Pt(_,d,u){const{textureData:v,internalFormat:b,width:O,height:A}=function jt(_,d){const u=new Int32Array(_,0,31);if(542327876!==u[0])return Ae.error("Invalid magic number in DDS header"),null;if(!(4&u[20]))return Ae.error("Unsupported format, must contain a FourCC code"),null;const v=u[21];let b,O;switch(v){case tt:b=8,O=z.q_.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Ot:b=16,O=z.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case st:b=16,O=z.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Ae.error("Unsupported FourCC code:",function ke(_){return String.fromCharCode(255&_,_>>8&255,_>>16&255,_>>24&255)}(v)),null}let A=1,R=u[4],I=u[3];0==(3&R)&&0==(3&I)||(Ae.warn("Rounding up compressed texture size to nearest multiple of 4."),R=R+3&-4,I=I+3&-4);const S=R,k=I;let ce,ae;131072&u[2]&&!1!==d&&(A=Math.max(1,u[7])),1===A||(0,xt.wt)(R)&&(0,xt.wt)(I)||(Ae.warn("Ignoring mipmaps of non power of two sized compressed texture."),A=1);let be=u[1]+4;const re=[];for(let Re=0;Re<A;++Re)ae=(R+3>>2)*(I+3>>2)*b,ce=new Uint8Array(_,be,ae),re.push(ce),be+=ae,R=Math.max(1,R>>1),I=Math.max(1,I>>1);return{textureData:{type:"compressed",levels:re},internalFormat:O,width:S,height:k}}(u,d.hasMipmap);return d.samplingMode=v.levels.length>1?z.cw.LINEAR_MIPMAP_LINEAR:z.cw.LINEAR,d.hasMipmap=v.levels.length>1,d.internalFormat=b,d.width=O,d.height=A,new oe.x(_,d,v)}(d,this._createDescriptor(d),u),this._glTexture}_loadFromKTX2(d,u){return this._loadAsync(()=>function q(_,d,u){return le.apply(this,arguments)}(d,this._createDescriptor(d),u).then(v=>(this._glTexture=v,v)))}_loadFromBasis(d,u){return this._loadAsync(()=>function G(_,d,u){return Z.apply(this,arguments)}(d,this._createDescriptor(d),u).then(v=>(this._glTexture=v,v)))}_loadFromPixelData(d,u){(0,He.hu)(this.params.width>0&&this.params.height>0);const v=this._createDescriptor(d);return v.pixelFormat=1===this.params.components?z.VI.LUMINANCE:3===this.params.components?z.VI.RGB:z.VI.RGBA,v.width=this.params.width,v.height=this.params.height,this._glTexture=new oe.x(d,v,u),this._glTexture}_loadFromURL(d,u,v){var b=this;return this._loadAsync(function(){var O=(0,D.Z)(function*(A){const R=yield(0,xe.t)(v,{signal:A});return(0,me.k_)(A),b._loadFromImage(d,R,u)});return function(A){return O.apply(this,arguments)}}())}_loadFromImageElement(d,u,v){var b=this;return v.complete?this._loadFromImage(d,v,u):this._loadAsync(function(){var O=(0,D.Z)(function*(A){const R=yield(0,rr.f)(v,v.src,!1,A);return(0,me.k_)(A),b._loadFromImage(d,R,u)});return function(A){return O.apply(this,arguments)}}())}_loadFromVideoElement(d,u,v){return v.readyState>=Ht.HAVE_CURRENT_DATA?this._loadFromImage(d,v,u):this._loadFromVideoElementAsync(d,u,v)}_loadFromVideoElementAsync(d,u,v){return this._loadAsync(b=>new Promise((O,A)=>{const R=()=>{v.removeEventListener("loadeddata",I),v.removeEventListener("error",S),(0,C.hw)(k)},I=()=>{v.readyState>=Ht.HAVE_CURRENT_DATA&&(R(),O(this._loadFromImage(d,v,u)))},S=ce=>{R(),A(ce||new ie.Z("Failed to load video"))};v.addEventListener("loadeddata",I),v.addEventListener("error",S);const k=(0,me.fu)(b,()=>S((0,me.zE)()))}))}_loadFromImage(d,u,v){const b=Je._getDataDimensions(u);this.params.width=b.width,this.params.height=b.height;const O=this._createDescriptor(d);return O.pixelFormat=3===this.params.components?z.VI.RGB:z.VI.RGBA,!this._requiresPowerOfTwo(d,O)||(0,xt.wt)(b.width)&&(0,xt.wt)(b.height)?(O.width=b.width,O.height=b.height,this._glTexture=new oe.x(d,O,u),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(d,u,b,O,v),this._glTexture)}_loadAsync(d){const u=new AbortController;this._loadingController=u;const v=d(u.signal);this._loadingPromise=v;const b=()=>{this._loadingController===u&&(this._loadingController=null),this._loadingPromise===v&&(this._loadingPromise=null)};return v.then(b,b),v}_requiresPowerOfTwo(d,u){const v=z.e8.CLAMP_TO_EDGE,b="number"==typeof u.wrapMode?u.wrapMode===v:u.wrapMode.s===v&&u.wrapMode.t===v;return!(0,Ut.Z)(d.gl)&&(u.hasMipmap||!b)}_makePowerOfTwoTexture(d,u,v,b,O){const{width:A,height:R}=v,I=(0,xt.Sf)(A),S=(0,xt.Sf)(R);let k;switch(b.width=I,b.height=S,this.params.powerOfTwoResizeMode){case X.CE.PAD:b.textureCoordinateScaleFactor=[A/I,R/S],k=new oe.x(d,b),k.updateData(0,0,0,A,R,u);break;case X.CE.STRETCH:case null:case void 0:k=this._stretchToPowerOfTwo(d,u,b,O());break;default:(0,At.Bg)(this.params.powerOfTwoResizeMode)}return b.hasMipmap&&k.generateMipmap(),k}_stretchToPowerOfTwo(d,u,v,b){const O=new oe.x(d,v),A=new St.X(d,{colorTarget:z.Lm.TEXTURE,depthStencilTarget:z.OU.NONE},O),R=new oe.x(d,{target:z.No.TEXTURE_2D,pixelFormat:v.pixelFormat,dataType:z.Br.UNSIGNED_BYTE,wrapMode:z.e8.CLAMP_TO_EDGE,samplingMode:z.cw.LINEAR,flipped:!!v.flipped,maxAnisotropy:8,preMultiplyAlpha:v.preMultiplyAlpha},u),I=function qt(_,d=Lt,u=yt,v=-1,b=1){let O=null;return O=d===It?new Float32Array([v,v,0,0,b,v,1,0,v,b,0,1,b,b,1,1]):new Float32Array([v,v,b,v,v,b,b,b]),new $t.U(_,u,{geometry:d},{geometry:Bt.f.createVertex(_,z.l1.STATIC_DRAW,O)})}(d),S=d.getBoundFramebufferObject();return this._drawStretchedTexture(d,b,A,I,R,O),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:I,sourceTexture:R,framebuffer:A}:(I.dispose(!0),R.dispose(),A.detachColorTexture(),A.dispose()),d.bindFramebuffer(S),O}_drawStretchedTexture(d,u,v,b,O,A){d.bindFramebuffer(v);const R=d.getViewport();d.setViewport(0,0,A.descriptor.width,A.descriptor.height);const I=d.useTechnique(u);I.setUniform4f("uColor",1,1,1,1),I.bindTexture(O,"tex"),d.bindVAO(b),d.drawArrays(z.MX.TRIANGLE_STRIP,0,(0,de._V)(b,"geometry")),d.bindFramebuffer(null),d.setViewport(R.x,R.y,R.width,R.height)}unload(){if((0,C.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:d,vao:u,sourceTexture:v}=this._powerOfTwoStretchInfo;u.dispose(!0),v.dispose(),d.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if((0,C.pC)(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),(0,C.pC)(this._loadingController)){const d=this._loadingController;this._loadingController=null,this._loadingPromise=null,d.abort()}this.events.emit("unloaded")}}Je.DDS_ENCODING="image/vnd-ms.dds",Je.KTX2_ENCODING="image/ktx2",Je.BASIS_ENCODING="image/x.basis",function(_){_[_.HAVE_NOTHING=0]="HAVE_NOTHING",_[_.HAVE_METADATA=1]="HAVE_METADATA",_[_.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",_[_.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",_[_.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(Ht||(Ht={}));var Mr,Vt=x(59617),Wt=x(19625),Ge=x(6945),er=x(96395),ci=x(93609),tr=x(50229);class hi extends fe{constructor(d,u){super(),this.type=ht.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=yt,this._parameters=(0,tr.Uf)(d,u),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(d){return!1}setParameters(d){(0,tr.LO)(this._parameters,d)&&(this.validateParameters(this._parameters),this.parametersChanged())}validateParameters(d){}get visible(){return this._visible}set visible(d){d!==this._visible&&(this._visible=d,this.parametersChanged())}shouldRender(d){return this.isVisible()&&this.isVisibleInPass(d.pass)&&0!=(this.renderOccluded&d.renderOccludedMask)}isVisibleInPass(d){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(d){d!==this._renderPriority&&(this._renderPriority=d,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(d){d!==this._insertOrder&&(this._insertOrder=d,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){(0,C.pC)(this.repository)&&this.repository.materialChanged(this)}}!function(_){_[_.Occlude=1]="Occlude",_[_.Transparent=2]="Transparent",_[_.OccludeAndTransparent=4]="OccludeAndTransparent",_[_.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",_[_.Opaque=16]="Opaque"}(Mr||(Mr={}));const mi={renderOccluded:Mr.Occlude};var ar,dr=x(88569),Er=x(91263),mr=x(5894),fi=x(48977),vi=x(78451),pi=x(14658),fr=x(4794),gi=(x(8314),x(993));!function(_){_[_.X=0]="X",_[_.Y=1]="Y",_[_.Z=2]="Z"}(ar||(ar={})),x(85931);var _i=x(97535),kt=x(26242);new _i.x(function Mi(){return{origin:null,direction:null}}),(0,w.c)(),(0,w.c)();const Ci=se.Z.getLogger("esri.geometry.support.sphere");function Ar(){return(0,fr.c)()}function Nr(_,d=Ar()){return(0,gi.c)(d,_)}function Pr(_){return Array.isArray(_)?_[3]:_}function Qt(_){return Array.isArray(_)?_:Fi}function pr(_,d,u){if((0,C.Wi)(d))return!1;const{origin:v,direction:b}=d,O=Li;O[0]=v[0]-_[0],O[1]=v[1]-_[1],O[2]=v[2]-_[2];const A=b[0]*b[0]+b[1]*b[1]+b[2]*b[2],R=2*(b[0]*O[0]+b[1]*O[1]+b[2]*O[2]),I=R*R-4*A*(O[0]*O[0]+O[1]*O[1]+O[2]*O[2]-_[3]*_[3]);if(I<0)return!1;const S=Math.sqrt(I);let k=(-R-S)/(2*A);const ce=(-R+S)/(2*A);return(k<0||ce<k&&ce>0)&&(k=ce),!(k<0||(u&&(u[0]=v[0]+b[0]*k,u[1]=v[1]+b[1]*k,u[2]=v[2]+b[2]*k),0))}const Li=(0,w.c)();function Fr(_,d,u){const v=kt.WM.get(),b=kt.MP.get();(0,M.c)(v,d.origin,d.direction);const O=Pr(_);(0,M.c)(u,v,d.origin),(0,M.a)(u,u,1/(0,M.l)(u)*O);const A=Vr(_,d.origin),R=function Oi(_,d){const u=(0,M.d)(_,d)/((0,M.l)(_)*(0,M.l)(d));return-(0,xt.ZF)(u)}(d.origin,u);return(0,U.d)(b,R+A,v),(0,M.m)(u,u,b),u}function zr(_,d,u){const v=(0,M.f)(kt.WM.get(),d,Qt(_)),b=(0,M.a)(kt.WM.get(),v,_[3]/(0,M.l)(v));return(0,M.b)(u,b,Qt(_))}function Vr(_,d){const u=(0,M.f)(kt.WM.get(),d,Qt(_)),v=(0,M.l)(u),b=Pr(_),O=b+Math.abs(b-v);return(0,xt.ZF)(b/O)}const yr=(0,w.c)();function Wr(_,d,u,v){const b=(0,M.f)(yr,d,Qt(_));switch(u){case ar.X:{const O=(0,xt.jE)(b,yr)[2];return(0,M.s)(v,-Math.sin(O),Math.cos(O),0)}case ar.Y:{const O=(0,xt.jE)(b,yr),A=O[1],R=O[2],I=Math.sin(A);return(0,M.s)(v,-I*Math.cos(R),-I*Math.sin(R),Math.cos(A))}case ar.Z:return(0,M.n)(v,b);default:return}}function Gr(_,d){const u=(0,M.f)(Sr,d,Qt(_));return(0,M.l)(u)-_[3]}const Fi=(0,w.c)(),Sr=(0,w.c)();Object.freeze({__proto__:null,create:Ar,copy:Nr,fromCenterAndRadius:function Ai(_,d){return(0,fr.f)(_[0],_[1],_[2],d)},wrap:function Pi(_){return _},clear:function yi(_){_[0]=_[1]=_[2]=_[3]=0},fromRadius:function Si(_){return _},getRadius:Pr,getCenter:Qt,fromValues:function Di(_,d,u,v){return(0,fr.f)(_,d,u,v)},elevate:function Ri(_,d,u){return _!==u&&(0,M.g)(u,_),u[3]=_[3]+d,u},setExtent:function wi(_,d,u){return Ci.error("sphere.setExtent is not yet supported"),_===u?u:Nr(_,u)},intersectRay:pr,intersectsRay:function Ii(_,d){return pr(_,d,null)},intersectRayClosestSilhouette:function Bi(_,d,u){if(pr(_,d,u))return u;const v=Fr(_,d,kt.WM.get());return(0,M.b)(u,d.origin,(0,M.a)(kt.WM.get(),d.direction,(0,M.i)(d.origin,v)/(0,M.l)(d.direction))),u},closestPointOnSilhouette:Fr,closestPoint:function Ui(_,d,u){return pr(_,d,u)?u:(function bi(_,d,u){const v=(0,M.d)(_.direction,(0,M.f)(u,d,_.origin));(0,M.b)(u,_.origin,(0,M.a)(u,_.direction,v))}(d,Qt(_),u),zr(_,u,u))},projectPoint:zr,distanceToSilhouette:function Hi(_,d){const u=(0,M.f)(kt.WM.get(),d,Qt(_)),v=(0,M.p)(u);return Math.sqrt(Math.abs(v-_[3]*_[3]))},angleToSilhouette:Vr,axisAt:Wr,altitudeAt:Gr,setAltitudeAt:function Ni(_,d,u,v){const b=Gr(_,d),O=Wr(_,d,ar.Z,Sr),A=(0,M.a)(Sr,O,u-b);return(0,M.b)(v,d,A)}});const jr=new class Wi{constructor(d=0){this.offset=d,this.sphere=Ar(),this.tmpVertex=(0,w.c)()}applyToVertex(d,u,v){const b=this.objectTransform.transform;let O=b[0]*d+b[4]*u+b[8]*v+b[12],A=b[1]*d+b[5]*u+b[9]*v+b[13],R=b[2]*d+b[6]*u+b[10]*v+b[14];const I=this.offset/Math.sqrt(O*O+A*A+R*R);O+=O*I,A+=A*I,R+=R*I;const S=this.objectTransform.inverse;return this.tmpVertex[0]=S[0]*O+S[4]*A+S[8]*R+S[12],this.tmpVertex[1]=S[1]*O+S[5]*A+S[9]*R+S[13],this.tmpVertex[2]=S[2]*O+S[6]*A+S[10]*R+S[14],this.tmpVertex}applyToMinMax(d,u){const v=this.offset/Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]);d[0]+=d[0]*v,d[1]+=d[1]*v,d[2]+=d[2]*v;const b=this.offset/Math.sqrt(u[0]*u[0]+u[1]*u[1]+u[2]*u[2]);u[0]+=u[0]*b,u[1]+=u[1]*b,u[2]+=u[2]*b}applyToAabb(d){const u=this.offset/Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]);d[0]+=d[0]*u,d[1]+=d[1]*u,d[2]+=d[2]*u;const v=this.offset/Math.sqrt(d[3]*d[3]+d[4]*d[4]+d[5]*d[5]);return d[3]+=d[3]*v,d[4]+=d[4]*v,d[5]+=d[5]*v,d}applyToBoundingSphere(d){const u=Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]),v=this.offset/u;return this.sphere[0]=d[0]+d[0]*v,this.sphere[1]=d[1]+d[1]*v,this.sphere[2]=d[2]+d[2]*v,this.sphere[3]=d[3]+d[3]*this.offset/u,this.sphere}};new class Vi{constructor(d=0){this.offset=d,this.componentLocalOriginLength=0,this.tmpVertex=(0,w.c)(),this.mbs=(0,fr.c)(),this.obb={center:(0,w.c)(),halfSize:(0,pi.c)(),quaternion:null}}set localOrigin(d){this.componentLocalOriginLength=Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2])}applyToVertex(d,u,v){const b=d,O=u,A=v+this.componentLocalOriginLength,R=this.offset/Math.sqrt(b*b+O*O+A*A);return this.tmpVertex[0]=d+b*R,this.tmpVertex[1]=u+O*R,this.tmpVertex[2]=v+A*R,this.tmpVertex}applyToAabb(d){const u=d[0],v=d[1],b=d[2]+this.componentLocalOriginLength,O=d[3],A=d[4],R=d[5]+this.componentLocalOriginLength,I=this.offset/Math.sqrt(u*u+v*v+b*b);d[0]+=u*I,d[1]+=v*I,d[2]+=b*I;const S=this.offset/Math.sqrt(O*O+A*A+R*R);return d[3]+=O*S,d[4]+=A*S,d[5]+=R*S,d}applyToMbs(d){const u=Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]),v=this.offset/u;return this.mbs[0]=d[0]+d[0]*v,this.mbs[1]=d[1]+d[1]*v,this.mbs[2]=d[2]+d[2]*v,this.mbs[3]=d[3]+d[3]*this.offset/u,this.mbs}applyToObb(d){const u=d.center,v=this.offset/Math.sqrt(u[0]*u[0]+u[1]*u[1]+u[2]*u[2]);this.obb.center[0]=u[0]+u[0]*v,this.obb.center[1]=u[1]+u[1]*v,this.obb.center[2]=u[2]+u[2]*v,(0,M.q)(this.obb.halfSize,d.halfSize,d.quaternion),(0,M.b)(this.obb.halfSize,this.obb.halfSize,d.center);const b=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*b,this.obb.halfSize[1]+=this.obb.halfSize[1]*b,this.obb.halfSize[2]+=this.obb.halfSize[2]*b,(0,M.f)(this.obb.halfSize,this.obb.halfSize,d.center),(0,fi.c)(Xr,d.quaternion),(0,M.q)(this.obb.halfSize,this.obb.halfSize,Xr),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=d.quaternion,this.obb}},new class zi{constructor(d=0){this.offset=d,this.tmpVertex=(0,w.c)()}applyToVertex(d,u,v){const b=d+this.localOrigin[0],O=u+this.localOrigin[1],A=v+this.localOrigin[2],R=this.offset/Math.sqrt(b*b+O*O+A*A);return this.tmpVertex[0]=d+b*R,this.tmpVertex[1]=u+O*R,this.tmpVertex[2]=v+A*R,this.tmpVertex}applyToAabb(d){const u=d[0]+this.localOrigin[0],v=d[1]+this.localOrigin[1],b=d[2]+this.localOrigin[2],O=d[3]+this.localOrigin[0],A=d[4]+this.localOrigin[1],R=d[5]+this.localOrigin[2],I=this.offset/Math.sqrt(u*u+v*v+b*b);d[0]+=u*I,d[1]+=v*I,d[2]+=b*I;const S=this.offset/Math.sqrt(O*O+A*A+R*R);return d[3]+=O*S,d[4]+=A*S,d[5]+=R*S,d}};const Xr=(0,vi.a)();function ji(_,d,u,v){const b=u.typedBuffer,O=u.typedBufferStride,A=_.length;v*=O;for(let R=0;R<A;++R){const I=2*_[R];b[v]=d[I],b[v+1]=d[I+1],v+=O}}function Yr(_,d,u,v,b){const O=u.typedBuffer,A=u.typedBufferStride,R=_.length;if(v*=A,null==b||1===b)for(let I=0;I<R;++I){const S=3*_[I];O[v]=d[S],O[v+1]=d[S+1],O[v+2]=d[S+2],v+=A}else for(let I=0;I<R;++I){const S=3*_[I];for(let k=0;k<b;++k)O[v]=d[S],O[v+1]=d[S+1],O[v+2]=d[S+2],v+=A}}function $i(_,d,u,v,b,O=1){if(!u)return void Yr(_,d,v,b,O);const A=v.typedBuffer,R=v.typedBufferStride,I=_.length,S=u[0],k=u[1],ce=u[2],ae=u[4],be=u[5],re=u[6],Re=u[8],Le=u[9],ze=u[10],lt=u[12],Qe=u[13],qe=u[14];if(b*=R,1===O)for(let it=0;it<I;++it){const Ve=3*_[it],Ne=d[Ve],je=d[Ve+1],ue=d[Ve+2];A[b]=S*Ne+ae*je+Re*ue+lt,A[b+1]=k*Ne+be*je+Le*ue+Qe,A[b+2]=ce*Ne+re*je+ze*ue+qe,b+=R}else for(let it=0;it<I;++it){const Ve=3*_[it],Ne=d[Ve],je=d[Ve+1],ue=d[Ve+2],Ue=S*Ne+ae*je+Re*ue+lt,Xe=k*Ne+be*je+Le*ue+Qe,Ye=ce*Ne+re*je+ze*ue+qe;for(let $e=0;$e<O;++$e)A[b]=Ue,A[b+1]=Xe,A[b+2]=Ye,b+=R}}function Xi(_,d,u,v,b,O=1){if(!u)return void Yr(_,d,v,b,O);const R=v.typedBuffer,I=v.typedBufferStride,S=_.length,k=u[0],ce=u[1],ae=u[2],be=u[4],re=u[5],Re=u[6],Le=u[8],ze=u[9],lt=u[10],Qe=!(0,U.p)(u);if(b*=I,1===O)for(let Ve=0;Ve<S;++Ve){const Ne=3*_[Ve],je=d[Ne],ue=d[Ne+1],Ue=d[Ne+2];let Xe=k*je+be*ue+Le*Ue,Ye=ce*je+re*ue+ze*Ue,$e=ae*je+Re*ue+lt*Ue;if(Qe){const at=Xe*Xe+Ye*Ye+$e*$e;if(at<.999999&&at>1e-6){const et=1/Math.sqrt(at);Xe*=et,Ye*=et,$e*=et}}R[b+0]=Xe,R[b+1]=Ye,R[b+2]=$e,b+=I}else for(let Ve=0;Ve<S;++Ve){const Ne=3*_[Ve],je=d[Ne],ue=d[Ne+1],Ue=d[Ne+2];let Xe=k*je+be*ue+Le*Ue,Ye=ce*je+re*ue+ze*Ue,$e=ae*je+Re*ue+lt*Ue;if(Qe){const at=Xe*Xe+Ye*Ye+$e*$e;if(at<.999999&&at>1e-6){const et=1/Math.sqrt(at);Xe*=et,Ye*=et,$e*=et}}for(let at=0;at<O;++at)R[b+0]=Xe,R[b+1]=Ye,R[b+2]=$e,b+=I}}function Yi(_,d,u,v,b,O=1){if(!u)return void function Ki(_,d,u,v,b=1){const O=u.typedBuffer,A=u.typedBufferStride,R=_.length;if(v*=A,1===b)for(let I=0;I<R;++I){const S=4*_[I];O[v]=d[S],O[v+1]=d[S+1],O[v+2]=d[S+2],O[v+3]=d[S+3],v+=A}else for(let I=0;I<R;++I){const S=4*_[I];for(let k=0;k<b;++k)O[v]=d[S],O[v+1]=d[S+1],O[v+2]=d[S+2],O[v+3]=d[S+3],v+=A}}(_,d,v,b,O);const R=v.typedBuffer,I=v.typedBufferStride,S=_.length,k=u[0],ce=u[1],ae=u[2],be=u[4],re=u[5],Re=u[6],Le=u[8],ze=u[9],lt=u[10],Qe=!(0,U.p)(u);if(b*=I,1===O)for(let Ve=0;Ve<S;++Ve){const Ne=4*_[Ve],je=d[Ne],ue=d[Ne+1],Ue=d[Ne+2],Xe=d[Ne+3];let Ye=k*je+be*ue+Le*Ue,$e=ce*je+re*ue+ze*Ue,at=ae*je+Re*ue+lt*Ue;if(Qe){const et=Ye*Ye+$e*$e+at*at;if(et<.999999&&et>1e-6){const ot=1/Math.sqrt(et);Ye*=ot,$e*=ot,at*=ot}}R[b+0]=Ye,R[b+1]=$e,R[b+2]=at,R[b+3]=Xe,b+=I}else for(let Ve=0;Ve<S;++Ve){const Ne=4*_[Ve],je=d[Ne],ue=d[Ne+1],Ue=d[Ne+2],Xe=d[Ne+3];let Ye=k*je+be*ue+Le*Ue,$e=ce*je+re*ue+ze*Ue,at=ae*je+Re*ue+lt*Ue;if(Qe){const et=Ye*Ye+$e*$e+at*at;if(et<.999999&&et>1e-6){const ot=1/Math.sqrt(et);Ye*=ot,$e*=ot,at*=ot}}for(let et=0;et<O;++et)R[b+0]=Ye,R[b+1]=$e,R[b+2]=at,R[b+3]=Xe,b+=I}}function Zr(_,d,u,v,b,O=1){const A=v.typedBuffer,R=v.typedBufferStride,I=_.length;if(b*=R,1===O){if(4===u)for(let S=0;S<I;++S){const k=4*_[S];A[b]=d[k],A[b+1]=d[k+1],A[b+2]=d[k+2],A[b+3]=d[k+3],b+=R}else if(3===u)for(let S=0;S<I;++S){const k=3*_[S];A[b]=d[k],A[b+1]=d[k+1],A[b+2]=d[k+2],A[b+3]=255,b+=R}}else if(4===u)for(let S=0;S<I;++S){const k=4*_[S];for(let ce=0;ce<O;++ce)A[b]=d[k],A[b+1]=d[k+1],A[b+2]=d[k+2],A[b+3]=d[k+3],b+=R}else if(3===u)for(let S=0;S<I;++S){const k=3*_[S];for(let ce=0;ce<O;++ce)A[b]=d[k],A[b+1]=d[k+1],A[b+2]=d[k+2],A[b+3]=255,b+=R}}var Se=x(17626),Ji=x(78925),ki=x(60355),Dr=x(26859),_r=x(36603),Qi=x(52071),qi=x(62952),ea=x(10109),or=x(92724),ta=x(8507),ra=x(92836),Jr=x(7228);const Qr=(0,x(55494).c)();class qr{constructor(d,u){this._module=d,this._loadModule=u}get(){return this._module}reload(){var d=this;return(0,D.Z)(function*(){return d._module=yield d._loadModule(),d._module})()}}function De(_={}){return(d,u)=>{var v,b;d._parameterNames=null!=(v=d._parameterNames)?v:[],d._parameterNames.push(u);const O=d._parameterNames.length-1,R=Math.ceil(Math.log2(_.count||2)),I=null!=(b=d._parameterBits)?b:[0];let S=0;for(;I[S]+R>16;)S++,S>=I.length&&I.push(0);d._parameterBits=I;const k=I[S],ce=(1<<R)-1<<k;I[S]+=R,Object.defineProperty(d,u,{get(){return this[O]},set(ae){if(this[O]!==ae&&(this[O]=ae,this._keyDirty=!0,this._parameterBits[S]=this._parameterBits[S]&~ce|+ae<<k&ce,"number"!=typeof ae&&"boolean"!=typeof ae))throw"Configuration value for "+u+" must be boolean or number, got "+typeof ae}})}}var la=x(81653);class ei{constructor(d,u,v){this._context=d,this._locations=v,this._textures=new Map,this._freeTextureUnits=new Ie.Z({deallocator:null}),this._glProgram=d.programCache.acquire(u.generateSource("vertex"),u.generateSource("fragment"),v),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this._fragmentUniforms=(0,la.hZ)()?u.fragmentUniforms.entries:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(d,u){this._glProgram.setUniform1i(d,u?1:0)}setUniform1i(d,u){this._glProgram.setUniform1i(d,u)}setUniform1f(d,u){this._glProgram.setUniform1f(d,u)}setUniform1fv(d,u){this._glProgram.setUniform1fv(d,u)}setUniform1iv(d,u){this._glProgram.setUniform1iv(d,u)}setUniform2f(d,u,v){this._glProgram.setUniform2f(d,u,v)}setUniform2fv(d,u){this._glProgram.setUniform2fv(d,u)}setUniform2iv(d,u){this._glProgram.setUniform2iv(d,u)}setUniform3f(d,u,v,b){this._glProgram.setUniform3f(d,u,v,b)}setUniform3fv(d,u){this._glProgram.setUniform3fv(d,u)}setUniform3iv(d,u){this._glProgram.setUniform3iv(d,u)}setUniform4f(d,u,v,b,O){this._glProgram.setUniform4f(d,u,v,b,O)}setUniform4fv(d,u){this._glProgram.setUniform4fv(d,u)}setUniform4iv(d,u){this._glProgram.setUniform4iv(d,u)}setUniformMatrix3fv(d,u){this._glProgram.setUniformMatrix3fv(d,u)}setUniformMatrix4fv(d,u){this._glProgram.setUniformMatrix4fv(d,u)}assertCompatibleVertexAttributeLocations(d){d.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(d,u){if((0,C.Wi)(d)||null==d.glName){const b=this._textures.get(u);return b&&(this._context.bindTexture(null,b.unit),this._freeTextureUnit(b),this._textures.delete(u)),null}let v=this._textures.get(u);return null==v?(v=this._allocTextureUnit(d),this._textures.set(u,v)):v.texture=d,this._context.useProgram(this),this.setUniform1i(u,v.unit),this._context.bindTexture(d,v.unit),v.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((d,u)=>{this._context.bindTexture(d.texture,d.unit),this.setUniform1i(u,d.unit)}),(0,C.pC)(this._fragmentUniforms)&&this._fragmentUniforms.forEach(d=>{if(("sampler2D"===d.type||"samplerCube"===d.type)&&!this._textures.has(d.name))throw new Error(`Texture sampler ${d.name} has no bound texture`)})}_allocTextureUnit(d){return{texture:d,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(d){this._freeTextureUnits.push(d.unit)}}const ca={mask:255},da={function:{func:z.wb.ALWAYS,ref:X.hU.OutlineVisualElementMask,mask:X.hU.OutlineVisualElementMask},operation:{fail:z.xS.KEEP,zFail:z.xS.KEEP,zPass:z.xS.ZERO}},ua={function:{func:z.wb.ALWAYS,ref:X.hU.OutlineVisualElementMask,mask:X.hU.OutlineVisualElementMask},operation:{fail:z.xS.KEEP,zFail:z.xS.KEEP,zPass:z.xS.REPLACE}};var ha=x(96160),xr=x(2078);const ma=se.Z.getLogger("esri.views.3d.webgl-engine.shaders.DefaultTechnique");class ur extends class na{constructor(d,u,v){this.release=v,u&&(this._config=u.snapshot()),this._program=this.initializeProgram(d),this._pipeline=this.initializePipeline(d)}destroy(){this._program=(0,C.O3)(this._program),this._pipeline=this._config=null}reload(d){(0,C.O3)(this._program),this._program=this.initializeProgram(d),this._pipeline=this.initializePipeline(d)}get program(){return this._program}get key(){return this._config.key}get configuration(){return this._config}bindPass(d,u){}bindMaterial(d,u){}bindDraw(d){}bindPipelineState(d,u=null,v){d.setPipelineState(this.getPipelineState(u,v))}ensureAttributeLocations(d){this.program.assertCompatibleVertexAttributeLocations(d)}get primitiveType(){return z.MX.TRIANGLES}getPipelineState(d,u){return this._pipeline}}{initializeProgram(d){const u=ur.shader.get(),v=this.configuration,b=u.build({oitEnabled:v.transparencyPassType===X.Am.Color,output:v.output,viewingMode:d.viewingMode,receiveShadows:v.receiveShadows,slicePlaneEnabled:v.slicePlaneEnabled,sliceHighlightDisabled:v.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:v.symbolColors,vvSize:v.vvSize,vvColor:v.vvColor,vvInstancingEnabled:!0,instanced:v.instanced,instancedColor:v.instancedColor,instancedDoublePrecision:v.instancedDoublePrecision,pbrMode:v.usePBR?v.isSchematic?or.f7.Schematic:or.f7.Normal:or.f7.Disabled,hasMetalnessAndRoughnessTexture:v.hasMetalnessAndRoughnessTexture,hasEmissionTexture:v.hasEmissionTexture,hasOcclusionTexture:v.hasOcclusionTexture,hasNormalTexture:v.hasNormalTexture,hasColorTexture:v.hasColorTexture,hasModelTransformation:v.hasModelTransformation,receiveAmbientOcclusion:v.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:v.normalsTypeDerivate?Dr.h.ScreenDerivative:Dr.h.Attribute,doubleSidedMode:v.doubleSidedMode,vertexTangents:v.vertexTangents,attributeTextureCoordinates:v.hasMetalnessAndRoughnessTexture||v.hasEmissionTexture||v.hasOcclusionTexture||v.hasNormalTexture||v.hasColorTexture?_r.N.Default:_r.N.None,textureAlphaPremultiplied:v.textureAlphaPremultiplied,attributeColor:v.vertexColors,screenSizePerspectiveEnabled:v.screenSizePerspective,verticalOffsetEnabled:v.verticalOffset,offsetBackfaces:v.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,Jr.I)(d.rctx),alphaDiscardMode:v.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:v.multipassTerrainEnabled,cullAboveGround:v.cullAboveGround});return new ei(d.rctx,b,yt)}bindPass(d,u){var v,b;!function oa(_,d){_.setUniformMatrix4fv("proj",d)}(this.program,u.camera.projectionMatrix);const O=this.configuration.output;this.configuration.hasModelTransformation&&((0,C.pC)(d.modelTransformation)?this.program.setUniformMatrix4fv("model",d.modelTransformation):ma.warnOnce("hasModelTransformation true, but no modelTransformation found.")),(this.configuration.output===Ge.H.Depth||u.multipassTerrainEnabled||O===Ge.H.Shadow)&&this.program.setUniform2fv("nearFar",u.camera.nearFar),u.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",u.inverseViewport),(0,ea.p)(this.program,u)),O===Ge.H.Alpha&&(this.program.setUniform1f("opacity",d.opacity),this.program.setUniform1f("layerOpacity",d.layerOpacity),this.program.setUniform4fv("externalColor",d.externalColor),this.program.setUniform1i("colorMixMode",tr.FZ[d.colorMixMode])),O===Ge.H.Color?(u.lighting.setUniforms(this.program,!1,u.hasFillLights),this.program.setUniform3fv("ambient",d.ambient),this.program.setUniform3fv("diffuse",d.diffuse),this.program.setUniform4fv("externalColor",d.externalColor),this.program.setUniform1i("colorMixMode",tr.FZ[d.colorMixMode]),this.program.setUniform1f("opacity",d.opacity),this.program.setUniform1f("layerOpacity",d.layerOpacity),this.configuration.usePBR&&(0,or.nW)(this.program,d,this.configuration.isSchematic)):O===Ge.H.Highlight&&(0,qi.wW)(this.program,u),(0,ra.uj)(this.program,d),(0,Qi.Mo)(this.program,d,u),(0,tr.bj)(d.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),d.textureAlphaMode!==X.JJ.Mask&&d.textureAlphaMode!==X.JJ.MaskBlend||this.program.setUniform1f("textureAlphaCutoff",d.textureAlphaCutoff),null==(v=u.shadowMap)||v.bind(this.program),null==(b=u.ssaoHelper)||b.bind(this.program,u.camera)}bindDraw(d){const u=this.configuration.instancedDoublePrecision?(0,w.f)(d.camera.viewInverseTransposeMatrix[3],d.camera.viewInverseTransposeMatrix[7],d.camera.viewInverseTransposeMatrix[11]):d.origin;(function kr(_,d,u){(0,U.j)(Qr,u,d),_.setUniform3fv("localOrigin",d),_.setUniformMatrix4fv("view",Qr)})(this.program,u,d.camera.viewMatrix),this.program.rebindTextures(),(this.configuration.output===Ge.H.Color||this.configuration.output===Ge.H.Alpha||this.configuration.output===Ge.H.Depth&&this.configuration.screenSizePerspective||this.configuration.output===Ge.H.Normal&&this.configuration.screenSizePerspective||this.configuration.output===Ge.H.Highlight&&this.configuration.screenSizePerspective)&&function aa(_,d,u){_.setUniform3f("cameraPosition",u[3]-d[0],u[7]-d[1],u[11]-d[2])}(this.program,u,d.camera.viewInverseTransposeMatrix),this.configuration.output===Ge.H.Normal&&this.program.setUniformMatrix4fv("viewNormal",d.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&(0,ki.d3)(this.program,u),(0,Ji.Vv)(this.program,this.configuration,d.slicePlane,u),this.configuration.output===Ge.H.Color&&(0,ta.vL)(this.program,d,u)}_convertDepthTestFunction(d){return d===X.Gv.Lequal?z.wb.LEQUAL:z.wb.LESS}_setPipeline(d,u){const v=this.configuration,b=d===X.Am.NONE,O=d===X.Am.FrontFace;return(0,xr.sm)({blending:v.output!==Ge.H.Color&&v.output!==Ge.H.Alpha||!v.transparent?null:b?dr.wu:(0,dr.j7)(d),culling:fa(v)&&(0,xr.zp)(v.cullFace),depthTest:{func:(0,dr.Bh)(d,this._convertDepthTestFunction(v.customDepthTest))},depthWrite:b||O?v.writeDepth&&xr.LZ:null,colorWrite:xr.BK,stencilWrite:v.sceneHasOcludees?ca:null,stencilTest:v.sceneHasOcludees?u?ua:da:null,polygonOffset:b||O?null:(0,dr.je)(v.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipeline(this.configuration.transparencyPassType,!0),this._setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(d,u){return u?this._occludeePipelineState:super.getPipelineState(d,u)}}function fa(_){return _.cullFace?_.cullFace!==X.Vr.None:!_.slicePlaneEnabled&&!_.transparent&&!_.doubleSidedMode}ur.shader=new qr(ha.D,()=>x.e(3907).then(x.bind(x,83907)));class Pe extends class sa{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const d=this._parameterNames,u={key:this.key};for(const v of d)u[v]=this[v];return u}}{constructor(){super(...arguments),this.output=Ge.H.Color,this.alphaDiscardMode=X.JJ.Opaque,this.doubleSidedMode=er.q.None,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=X.Vr.None,this.transparencyPassType=X.Am.NONE,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1,this.hasModelTransformation=!1,this.customDepthTest=X.Gv.Less}}(0,Se._)([De({count:Ge.H.COUNT})],Pe.prototype,"output",void 0),(0,Se._)([De({count:X.JJ.COUNT})],Pe.prototype,"alphaDiscardMode",void 0),(0,Se._)([De({count:er.q.COUNT})],Pe.prototype,"doubleSidedMode",void 0),(0,Se._)([De()],Pe.prototype,"isSchematic",void 0),(0,Se._)([De()],Pe.prototype,"vertexColors",void 0),(0,Se._)([De()],Pe.prototype,"offsetBackfaces",void 0),(0,Se._)([De()],Pe.prototype,"symbolColors",void 0),(0,Se._)([De()],Pe.prototype,"vvSize",void 0),(0,Se._)([De()],Pe.prototype,"vvColor",void 0),(0,Se._)([De()],Pe.prototype,"verticalOffset",void 0),(0,Se._)([De()],Pe.prototype,"receiveShadows",void 0),(0,Se._)([De()],Pe.prototype,"slicePlaneEnabled",void 0),(0,Se._)([De()],Pe.prototype,"sliceHighlightDisabled",void 0),(0,Se._)([De()],Pe.prototype,"receiveAmbientOcclusion",void 0),(0,Se._)([De()],Pe.prototype,"screenSizePerspective",void 0),(0,Se._)([De()],Pe.prototype,"textureAlphaPremultiplied",void 0),(0,Se._)([De()],Pe.prototype,"hasColorTexture",void 0),(0,Se._)([De()],Pe.prototype,"usePBR",void 0),(0,Se._)([De()],Pe.prototype,"hasMetalnessAndRoughnessTexture",void 0),(0,Se._)([De()],Pe.prototype,"hasEmissionTexture",void 0),(0,Se._)([De()],Pe.prototype,"hasOcclusionTexture",void 0),(0,Se._)([De()],Pe.prototype,"hasNormalTexture",void 0),(0,Se._)([De()],Pe.prototype,"instanced",void 0),(0,Se._)([De()],Pe.prototype,"instancedColor",void 0),(0,Se._)([De()],Pe.prototype,"instancedDoublePrecision",void 0),(0,Se._)([De()],Pe.prototype,"vertexTangents",void 0),(0,Se._)([De()],Pe.prototype,"normalsTypeDerivate",void 0),(0,Se._)([De()],Pe.prototype,"writeDepth",void 0),(0,Se._)([De()],Pe.prototype,"sceneHasOcludees",void 0),(0,Se._)([De()],Pe.prototype,"transparent",void 0),(0,Se._)([De()],Pe.prototype,"enableOffset",void 0),(0,Se._)([De({count:X.Vr.COUNT})],Pe.prototype,"cullFace",void 0),(0,Se._)([De({count:X.Am.COUNT})],Pe.prototype,"transparencyPassType",void 0),(0,Se._)([De()],Pe.prototype,"multipassTerrainEnabled",void 0),(0,Se._)([De()],Pe.prototype,"cullAboveGround",void 0),(0,Se._)([De()],Pe.prototype,"hasModelTransformation",void 0),(0,Se._)([De({count:X.Gv.COUNT})],Pe.prototype,"customDepthTest",void 0);var va=x(77133);class Tr extends ur{initializeProgram(d){const u=Tr.shader.get(),v=this.configuration,b=u.build({oitEnabled:v.transparencyPassType===X.Am.Color,output:v.output,viewingMode:d.viewingMode,receiveShadows:v.receiveShadows,slicePlaneEnabled:v.slicePlaneEnabled,sliceHighlightDisabled:v.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:v.symbolColors,vvSize:v.vvSize,vvColor:v.vvColor,vvInstancingEnabled:!0,instanced:v.instanced,instancedColor:v.instancedColor,instancedDoublePrecision:v.instancedDoublePrecision,pbrMode:v.usePBR?or.f7.Normal:or.f7.Disabled,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:v.hasColorTexture,hasModelTransformation:!1,receiveAmbientOcclusion:v.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:Dr.h.Attribute,doubleSidedMode:er.q.WindingOrder,vertexTangents:!1,attributeTextureCoordinates:v.hasColorTexture?_r.N.Default:_r.N.None,textureAlphaPremultiplied:v.textureAlphaPremultiplied,attributeColor:v.vertexColors,screenSizePerspectiveEnabled:v.screenSizePerspective,verticalOffsetEnabled:v.verticalOffset,offsetBackfaces:v.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,Jr.I)(d.rctx),alphaDiscardMode:v.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:v.multipassTerrainEnabled,cullAboveGround:v.cullAboveGround});return new ei(d.rctx,b,yt)}}Tr.shader=new qr(va.R,()=>x.e(6919).then(x.bind(x,96919)));class ti extends hi{constructor(d){super(d,ga),this.supportsEdges=!0,this.techniqueConfig=new Pe,this.vertexBufferLayout=function xa(_){const d=_.textureId||_.normalTextureId||_.metallicRoughnessTextureId||_.emissiveTextureId||_.occlusionTextureId,u=(0,Wt.U$)().vec3f(F.T.POSITION).vec3f(F.T.NORMAL);return _.vertexTangents&&u.vec4f(F.T.TANGENT),d&&u.vec2f(F.T.UV0),_.vertexColors&&u.vec4u8(F.T.COLOR),_.symbolColors&&u.vec4u8(F.T.SYMBOLCOLOR),u}(this.parameters),this.instanceBufferLayout=d.instanced?function Ta(_){let d=(0,Wt.U$)();return d=_.instancedDoublePrecision?d.vec3f(F.T.MODELORIGINHI).vec3f(F.T.MODELORIGINLO).mat3f(F.T.MODEL).mat3f(F.T.MODELNORMAL):d.mat4f(F.T.MODEL).mat4f(F.T.MODELNORMAL),_.instanced&&_.instanced.indexOf("color")>-1&&(d=d.vec4f(F.T.INSTANCECOLOR)),_.instanced&&_.instanced.indexOf("featureAttribute")>-1&&(d=d.vec4f(F.T.INSTANCEFEATUREATTRIBUTE)),d}(this.parameters):null}isVisibleInPass(d){return d!==Er.C.MATERIAL_DEPTH_SHADOWMAP_ALL&&d!==Er.C.MATERIAL_DEPTH_SHADOWMAP_DEFAULT&&d!==Er.C.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT||this.parameters.castShadows}isVisible(){const d=this.parameters;if(!super.isVisible()||0===d.layerOpacity)return!1;const u=d.instanced,v=d.vertexColors,b=d.symbolColors,O=!!u&&u.indexOf("color")>-1,A=d.vvColorEnabled,R="replace"===d.colorMixMode,I=d.opacity>0,S=d.externalColor&&d.externalColor[3]>0;return v&&(O||A||b)?!!R||I:v?R?S:I:O||A||b?!!R||I:R?S:I}getTechniqueConfig(d,u){return this.techniqueConfig.output=d,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.parameters.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.parameters.normals,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,(0,C.pC)(this.parameters.customDepthTest)&&(this.techniqueConfig.customDepthTest=this.parameters.customDepthTest),this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?X.Vr.None:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=u.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=u.cullAboveGround,this.techniqueConfig.hasModelTransformation=(0,C.pC)(this.parameters.modelTransformation),d!==Ge.H.Color&&d!==Ge.H.Alpha||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.techniqueConfig.doubleSidedMode=this.parameters.treeRendering?er.q.WindingOrder:this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?er.q.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?er.q.WindingOrder:er.q.None,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!u.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=u.transparencyPassType,this.techniqueConfig.enableOffset=u.camera.relativeElevation<dr.ve),this.techniqueConfig}intersect(d,u,v,b,O,A,R){if(null!==this.parameters.verticalOffset){const I=b.camera;(0,M.s)(wr,v[12],v[13],v[14]);let S=null;switch(b.viewingMode){case Vt.JY.Global:S=(0,M.n)(ri,wr);break;case Vt.JY.Local:S=(0,M.g)(ri,Ea)}let k=0;if(null!==this.parameters.verticalOffset){const ce=(0,M.f)(Oa,wr,I.eye),ae=(0,M.l)(ce),be=(0,M.a)(ce,ce,1/ae);let re=null;this.parameters.screenSizePerspective&&(re=(0,M.d)(S,be)),k+=(0,tr.Hx)(I,ae,this.parameters.verticalOffset,re,this.parameters.screenSizePerspective)}(0,M.a)(S,S,k),(0,M.t)(Rr,S,b.transform.inverseRotation),O=(0,M.f)(ba,O,Rr),A=(0,M.f)(Ma,A,Rr)}(0,tr.Bw)(d,u,b,O,A,function Gi(_){return(0,C.pC)(_)?(jr.offset=_,jr):null}(b.verticalOffset),R)}requiresSlot(d){return d===(this.parameters.transparent?this.parameters.writeDepth?mr.r.TRANSPARENT_MATERIAL:mr.r.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:mr.r.OPAQUE_MATERIAL)||d===mr.r.DRAPED_MATERIAL}createGLMaterial(d){return d.output===Ge.H.Color||d.output===Ge.H.Alpha||d.output===Ge.H.Depth||d.output===Ge.H.Normal||d.output===Ge.H.Shadow||d.output===Ge.H.Highlight?new pa(d):null}createBufferWriter(){return new _a(this.vertexBufferLayout,this.instanceBufferLayout)}}class pa extends class ui extends class di{constructor(d){this._material=d.material,this._techniqueRep=d.techniqueRep,this._output=d.output}dispose(){this._techniqueRep.release(this._technique)}get technique(){return this._technique}ensureTechnique(d,u,v=this._output){return this._technique=this._techniqueRep.releaseAndAcquire(d,this._material.getTechniqueConfig(v,u),this._technique),this._technique}ensureResources(d){return X.Rw.LOADED}}{constructor(d){super(d),this._numLoading=0,this._disposed=!1,this._textureRepository=d.textureRep,this._textureId=d.textureId,this._acquire(d.textureId,u=>this._texture=u),this._acquire(d.normalTextureId,u=>this._textureNormal=u),this._acquire(d.emissiveTextureId,u=>this._textureEmissive=u),this._acquire(d.occlusionTextureId,u=>this._textureOcclusion=u),this._acquire(d.metallicRoughnessTextureId,u=>this._textureMetallicRoughness=u)}dispose(){this._texture=(0,C.RY)(this._texture),this._textureNormal=(0,C.RY)(this._textureNormal),this._textureEmissive=(0,C.RY)(this._textureEmissive),this._textureOcclusion=(0,C.RY)(this._textureOcclusion),this._textureMetallicRoughness=(0,C.RY)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(d){return 0===this._numLoading?X.Rw.LOADED:X.Rw.LOADING}updateTexture(d){((0,C.Wi)(this._texture)||d!==this._texture.id)&&(this._texture=(0,C.RY)(this._texture),this._textureId=d,this._acquire(this._textureId,u=>this._texture=u))}bindTextures(d){(0,C.pC)(this._texture)&&d.bindTexture(this._texture.glTexture,"tex"),(0,C.pC)(this._textureNormal)&&d.bindTexture(this._textureNormal.glTexture,"normalTexture"),(0,C.pC)(this._textureEmissive)&&d.bindTexture(this._textureEmissive.glTexture,"texEmission"),(0,C.pC)(this._textureOcclusion)&&d.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),(0,C.pC)(this._textureMetallicRoughness)&&d.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(d){const u=(0,C.pC)(this._texture)?this._texture.glTexture:null;(0,C.pC)(u)&&u.descriptor.textureCoordinateScaleFactor?d.setUniform2fv("textureCoordinateScaleFactor",u.descriptor.textureCoordinateScaleFactor):d.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(d,u){if((0,C.Wi)(d))return void u(null);const v=this._textureRepository.acquire(d);if((0,me.y8)(v))return++this._numLoading,void v.then(b=>{if(this._disposed)return(0,C.RY)(b),void u(null);u(b)}).finally(()=>--this._numLoading);u(v)}}{constructor(d){super(Nt(Nt({},d),d.material.parameters))}updateParameters(d){const u=this._material.parameters;return this.updateTexture(u.textureId),this.ensureTechnique(u.treeRendering?Tr:ur,d)}_updateShadowState(d){d.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:d.shadowMappingEnabled})}_updateOccludeeState(d){d.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:d.hasOccludees})}beginSlot(d){return this._output!==Ge.H.Color&&this._output!==Ge.H.Alpha||(this._updateShadowState(d),this._updateOccludeeState(d)),this.updateParameters(d)}bind(d,u){u.bindPass(this._material.parameters,d),this.bindTextures(u.program)}}const ga=Nt({textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:X.Vr.Back,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,fillLightsEnabled:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:(0,P.c)(),modelTransformation:null,transparent:!1,writeDepth:!0,customDepthTest:X.Gv.Less,textureAlphaMode:X.JJ.Blend,textureAlphaCutoff:ci.F,textureAlphaPremultiplied:!1,sceneHasOcludees:!1},mi);class _a{constructor(d,u){this.vertexBufferLayout=d,this.instanceBufferLayout=u}allocate(d){return this.vertexBufferLayout.createBuffer(d)}elementCount(d){return d.indices.get(F.T.POSITION).length}write(d,u,v,b){!function Zi(_,d,u,v,b,O){for(const A of d.fieldNames){const R=_.vertexAttributes.get(A),I=_.indices.get(A);if(R&&I)switch(A){case F.T.POSITION:{(0,He.hu)(3===R.size);const S=b.getField(A,H.ct);S&&$i(I,R.data,u,S,O);break}case F.T.NORMAL:{(0,He.hu)(3===R.size);const S=b.getField(A,H.ct);S&&Xi(I,R.data,v,S,O);break}case F.T.UV0:{(0,He.hu)(2===R.size);const S=b.getField(A,H.Eu);S&&ji(I,R.data,S,O);break}case F.T.COLOR:{(0,He.hu)(3===R.size||4===R.size);const S=b.getField(A,H.mc);S&&Zr(I,R.data,R.size,S,O);break}case F.T.SYMBOLCOLOR:{(0,He.hu)(3===R.size||4===R.size);const S=b.getField(A,H.mc);S&&Zr(I,R.data,R.size,S,O);break}case F.T.TANGENT:{(0,He.hu)(4===R.size);const S=b.getField(A,H.ek);S&&Yi(I,R.data,v,S,O);break}}}}(u,this.vertexBufferLayout,d.transformation,d.invTranspTransformation,v,b)}}const ba=(0,w.c)(),Ma=(0,w.c)(),Ea=(0,w.f)(0,0,1),ri=(0,w.c)(),Rr=(0,w.c)(),wr=(0,w.c)(),Oa=(0,w.c)(),Xt=se.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function Ca(_,d){return Lr.apply(this,arguments)}function Lr(){return Lr=(0,D.Z)(function*(_,d){const u=yield Aa(_,d);return{resource:u,textures:yield Ra(u.textureDefinitions,d)}}),Lr.apply(this,arguments)}function Aa(_,d){return Ir.apply(this,arguments)}function Ir(){return Ir=(0,D.Z)(function*(_,d){const u=(0,C.pC)(d)&&d.streamDataRequester;if(u)return Pa(_,u,d);const v=yield(0,we.q6)((0,pe.default)(_,(0,C.Wg)(d)));if(!0===v.ok)return v.value.data;(0,me.r9)(v.error),ii(v.error)}),Ir.apply(this,arguments)}function Pa(_,d,u){return Br.apply(this,arguments)}function Br(){return Br=(0,D.Z)(function*(_,d,u){const v=yield(0,we.q6)(d.request(_,"json",u));if(!0===v.ok)return v.value;(0,me.r9)(v.error),ii(v.error.details.url)}),Br.apply(this,arguments)}function ii(_){throw new ie.Z("",`Request for object resource failed: ${_}`)}function ya(_){const d=_.params,u=d.topology;let v=!0;switch(d.vertexAttributes||(Xt.warn("Geometry must specify vertex attributes"),v=!1),d.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const O=d.faces;if(O){if(d.vertexAttributes)for(const A in d.vertexAttributes){const R=O[A];R&&R.values?(null!=R.valueType&&"UInt32"!==R.valueType&&(Xt.warn(`Unsupported indexed geometry indices type '${R.valueType}', only UInt32 is currently supported`),v=!1),null!=R.valuesPerElement&&1!==R.valuesPerElement&&(Xt.warn(`Unsupported indexed geometry values per element '${R.valuesPerElement}', only 1 is currently supported`),v=!1)):(Xt.warn(`Indexed geometry does not specify face indices for '${A}' attribute`),v=!1)}}else Xt.warn("Indexed geometries must specify faces"),v=!1;break}default:Xt.warn(`Unsupported topology '${u}'`),v=!1}_.params.material||(Xt.warn("Geometry requires material"),v=!1);const b=_.params.vertexAttributes;for(const O in b)b[O].values||(Xt.warn("Geometries with externally defined attributes are not yet supported"),v=!1);return v}function Sa(_,d){const u=[],v=[],b=[],O=[],A=_.resource,R=_e.G.parse(A.version||"1.0","wosr");La.validate(R);const I=A.model.name,S=A.model.geometries,k=A.materialDefinitions,ce=_.textures;let ae=0;const be=new Map;for(let re=0;re<S.length;re++){const Re=S[re];if(!ya(Re))continue;const Le=wa(Re),ze=Re.params.vertexAttributes,lt=[];for(const ue in ze){const Ue=ze[ue];lt.push([ue,{data:Ue.values,size:Ue.valuesPerElement,exclusive:!0}])}const Qe=[];if("PerAttributeArray"!==Re.params.topology){const ue=Re.params.faces;for(const Ue in ue)Qe.push([Ue,new Uint32Array(ue[Ue].values)])}const qe=ce&&ce[Le.texture];if(qe&&!be.has(Le.texture)){const{image:ue,params:Ue}=qe,Xe=new Je(ue,Ue);O.push(Xe),be.set(Le.texture,Xe)}const it=be.get(Le.texture),Ve=it?it.id:void 0;let Ne=b[Le.material]?b[Le.material][Le.texture]:null;if(!Ne){const ue=k[Le.material.substring(Le.material.lastIndexOf("/")+1)].params;1===ue.transparency&&(ue.transparency=0);const Ue=qe&&qe.alphaChannelUsage,Xe=ue.transparency>0||"transparency"===Ue||"maskAndTransparency"===Ue,Ye=qe?ai(qe.alphaChannelUsage):void 0,$e={ambient:(0,w.d)(ue.diffuse),diffuse:(0,w.d)(ue.diffuse),opacity:1-(ue.transparency||0),transparent:Xe,textureAlphaMode:Ye,textureAlphaCutoff:.33,textureId:Ve,initTextureTransparent:!0,doubleSided:!0,cullFace:X.Vr.None,colorMixMode:ue.externalColorMixMode||"tint",textureAlphaPremultiplied:!!qe&&!!qe.params.preMultiplyAlpha};(0,C.pC)(d)&&d.materialParamsMixin&&Object.assign($e,d.materialParamsMixin),Ne=new ti($e),b[Le.material]||(b[Le.material]={}),b[Le.material][Le.texture]=Ne}v.push(Ne);const je=new ve(lt,Qe);ae+=Qe.position?Qe.position.length:0,u.push(je)}return{name:I,stageResources:{textures:O,materials:v,geometries:u},pivotOffset:A.model.pivotOffset,boundingBox:Da(u),numberOfVertices:ae,lodThreshold:null}}function Da(_){const d=(0,N.cS)();return _.forEach(u=>{const v=u.boundingInfo;(0,C.pC)(v)&&((0,N.pp)(d,v.getBBMin()),(0,N.pp)(d,v.getBBMax()))}),d}function Ra(_,d){return Ur.apply(this,arguments)}function Ur(){return Ur=(0,D.Z)(function*(_,d){const u=[];for(const O in _){const A=_[O],R=A.images[0].data;if(!R){Xt.warn("Externally referenced texture data is not yet supported");continue}const I=A.encoding+";base64,"+R,S="/textureDefinitions/"+O,k="rgba"===A.channels?A.alphaChannelUsage||"transparency":"none",ce={noUnpackFlip:!0,wrap:{s:z.e8.REPEAT,t:z.e8.REPEAT},preMultiplyAlpha:ai(k)!==X.JJ.Opaque},ae=(0,C.pC)(d)&&d.disableTextures?Promise.resolve(null):(0,xe.t)(I,d);u.push(ae.then(be=>({refId:S,image:be,params:ce,alphaChannelUsage:k})))}const v=yield Promise.all(u),b={};for(const O of v)b[O.refId]=O;return b}),Ur.apply(this,arguments)}function ai(_){switch(_){case"mask":return X.JJ.Mask;case"maskAndTransparency":return X.JJ.MaskBlend;case"none":return X.JJ.Opaque;default:return X.JJ.Blend}}function wa(_){const d=_.params;return{id:1,material:d.material,texture:d.texture,region:d.texture}}const La=new _e.G(1,2,"wosr");var nr=x(79331),Ia=x(35995),oi=x(63470),Ba=x(9554);function Ua(_,d){return Hr.apply(this,arguments)}function Hr(){return Hr=(0,D.Z)(function*(_,d){const u=ni((0,y.pJ)(_));if("wosr"===u.fileType){const I=yield d.cache?d.cache.loadWOSR(u.url,d):Ca(u.url,d),S=Sa(I,d);return{lods:[S],referenceBoundingBox:S.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:I.remove}}const v=yield d.cache?d.cache.loadGLTF(u.url,d,d.usePBR):(0,$.z)(new Y.C(d.streamDataRequester),u.url,d,d.usePBR),b=(0,C.U2)(v.model.meta,"ESRI_proxyEllipsoid");v.meta.isEsriSymbolResource&&(0,C.pC)(b)&&-1!==v.meta.uri.indexOf("/RealisticTrees/")&&Fa(v,b);const O=v.meta.isEsriSymbolResource?{usePBR:d.usePBR,isSchematic:!1,treeRendering:v.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:d.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},A=hr(Nt({},d.materialParamsMixin),{treeRendering:v.customMeta.esriTreeRendering});if(null!=u.specifiedLodIndex){const I=br(v,O,A,u.specifiedLodIndex);let S=I[0].boundingBox;return 0!==u.specifiedLodIndex&&(S=br(v,O,A,0)[0].boundingBox),{lods:I,referenceBoundingBox:S,isEsriSymbolResource:v.meta.isEsriSymbolResource,isWosr:!1,remove:v.remove}}const R=br(v,O,A);return{lods:R,referenceBoundingBox:R[0].boundingBox,isEsriSymbolResource:v.meta.isEsriSymbolResource,isWosr:!1,remove:v.remove}}),Hr.apply(this,arguments)}function ni(_){const d=_.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return d?{fileType:"gltf",url:d[1],specifiedLodIndex:null!=d[4]?Number(d[4]):null}:_.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:_,specifiedLodIndex:null}:{fileType:"unknown",url:_,specifiedLodIndex:null}}function br(_,d,u,v){const b=_.model,O=(0,P.c)(),A=new Array,R=new Map,I=new Map;return b.lods.forEach((S,k)=>{if(void 0!==v&&k!==v)return;const ce={name:S.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:(0,C.pC)(S.lodThreshold)?S.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:(0,N.cS)()};A.push(ce),S.parts.forEach(ae=>{const be=ae.material+(ae.attributes.normal?"_normal":"")+(ae.attributes.color?"_color":"")+(ae.attributes.texCoord0?"_texCoord0":"")+(ae.attributes.tangent?"_tangent":""),re=b.materials.get(ae.material),Re=(0,C.pC)(ae.attributes.texCoord0),Le=(0,C.pC)(ae.attributes.normal),ze=function Ha(_){switch(_){case"BLEND":return X.JJ.Blend;case"MASK":return X.JJ.Mask;case"OPAQUE":case null:case void 0:return X.JJ.Opaque}}(re.alphaMode);if(!R.has(be)){if(Re){if((0,C.pC)(re.textureColor)&&!I.has(re.textureColor)){const ot=b.textures.get(re.textureColor),za=hr(Nt({},ot.parameters),{preMultiplyAlpha:ze!==X.JJ.Opaque});I.set(re.textureColor,new Je(ot.data,za))}if((0,C.pC)(re.textureNormal)&&!I.has(re.textureNormal)){const ot=b.textures.get(re.textureNormal);I.set(re.textureNormal,new Je(ot.data,ot.parameters))}if((0,C.pC)(re.textureOcclusion)&&!I.has(re.textureOcclusion)){const ot=b.textures.get(re.textureOcclusion);I.set(re.textureOcclusion,new Je(ot.data,ot.parameters))}if((0,C.pC)(re.textureEmissive)&&!I.has(re.textureEmissive)){const ot=b.textures.get(re.textureEmissive);I.set(re.textureEmissive,new Je(ot.data,ot.parameters))}if((0,C.pC)(re.textureMetallicRoughness)&&!I.has(re.textureMetallicRoughness)){const ot=b.textures.get(re.textureMetallicRoughness);I.set(re.textureMetallicRoughness,new Je(ot.data,ot.parameters))}}const ue=re.color[0]**(1/nr.K),Ue=re.color[1]**(1/nr.K),Xe=re.color[2]**(1/nr.K),Ye=re.emissiveFactor[0]**(1/nr.K),$e=re.emissiveFactor[1]**(1/nr.K),at=re.emissiveFactor[2]**(1/nr.K),et=(0,C.pC)(re.textureColor)&&Re?I.get(re.textureColor):null;R.set(be,new ti(Nt(hr(Nt({},d),{transparent:ze===X.JJ.Blend,customDepthTest:X.Gv.Lequal,textureAlphaMode:ze,textureAlphaCutoff:re.alphaCutoff,diffuse:[ue,Ue,Xe],ambient:[ue,Ue,Xe],opacity:re.opacity,doubleSided:re.doubleSided,doubleSidedType:"winding-order",cullFace:re.doubleSided?X.Vr.None:X.Vr.Back,vertexColors:!!ae.attributes.color,vertexTangents:!!ae.attributes.tangent,normals:Le?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,fillLightsEnabled:!0,textureId:(0,C.pC)(et)?et.id:void 0,colorMixMode:re.colorMixMode,normalTextureId:(0,C.pC)(re.textureNormal)&&Re?I.get(re.textureNormal).id:void 0,textureAlphaPremultiplied:(0,C.pC)(et)&&!!et.params.preMultiplyAlpha,occlusionTextureId:(0,C.pC)(re.textureOcclusion)&&Re?I.get(re.textureOcclusion).id:void 0,emissiveTextureId:(0,C.pC)(re.textureEmissive)&&Re?I.get(re.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,C.pC)(re.textureMetallicRoughness)&&Re?I.get(re.textureMetallicRoughness).id:void 0,emissiveFactor:[Ye,$e,at],mrrFactors:[re.metallicFactor,re.roughnessFactor,d.mrrFactors[2]],isSchematic:!1}),u)))}const lt=function Na(_,d){switch(d){case z.MX.TRIANGLES:return(0,te.nh)(_);case z.MX.TRIANGLE_STRIP:return(0,te.DA)(_);case z.MX.TRIANGLE_FAN:return(0,te.jX)(_)}}(ae.indices||ae.attributes.position.count,ae.primitiveType),Qe=ae.attributes.position.count,qe=(0,ee.gS)(H.ct,Qe);(0,K.t)(qe,ae.attributes.position,ae.transform);const it=[[F.T.POSITION,{data:qe.typedBuffer,size:qe.elementCount,exclusive:!0}]],Ve=[[F.T.POSITION,lt]];if((0,C.pC)(ae.attributes.normal)){const ue=(0,ee.gS)(H.ct,Qe);(0,B.a)(O,ae.transform),(0,K.a)(ue,ae.attributes.normal,O),it.push([F.T.NORMAL,{data:ue.typedBuffer,size:ue.elementCount,exclusive:!0}]),Ve.push([F.T.NORMAL,lt])}if((0,C.pC)(ae.attributes.tangent)){const ue=(0,ee.gS)(H.ek,Qe);(0,B.a)(O,ae.transform),(0,J.t)(ue,ae.attributes.tangent,O),it.push([F.T.TANGENT,{data:ue.typedBuffer,size:ue.elementCount,exclusive:!0}]),Ve.push([F.T.TANGENT,lt])}if((0,C.pC)(ae.attributes.texCoord0)){const ue=(0,ee.gS)(H.Eu,Qe);(0,Ia.n)(ue,ae.attributes.texCoord0),it.push([F.T.UV0,{data:ue.typedBuffer,size:ue.elementCount,exclusive:!0}]),Ve.push([F.T.UV0,lt])}if((0,C.pC)(ae.attributes.color)){const ue=(0,ee.gS)(H.mc,Qe);if(4===ae.attributes.color.elementCount)ae.attributes.color instanceof H.ek?(0,J.s)(ue,ae.attributes.color,255):ae.attributes.color instanceof H.mc?(0,oi.c)(ue,ae.attributes.color):ae.attributes.color instanceof H.v6&&(0,J.s)(ue,ae.attributes.color,1/256);else{(0,oi.f)(ue,255,255,255,255);const Ue=new H.ne(ue.buffer,0,4);ae.attributes.color instanceof H.ct?(0,K.s)(Ue,ae.attributes.color,255):ae.attributes.color instanceof H.ne?(0,Ba.c)(Ue,ae.attributes.color):ae.attributes.color instanceof H.mw&&(0,K.s)(Ue,ae.attributes.color,1/256)}it.push([F.T.COLOR,{data:ue.typedBuffer,size:ue.elementCount,exclusive:!0}]),Ve.push([F.T.COLOR,lt])}const Ne=new ve(it,Ve);ce.stageResources.geometries.push(Ne),ce.stageResources.materials.push(R.get(be)),Re&&((0,C.pC)(re.textureColor)&&ce.stageResources.textures.push(I.get(re.textureColor)),(0,C.pC)(re.textureNormal)&&ce.stageResources.textures.push(I.get(re.textureNormal)),(0,C.pC)(re.textureOcclusion)&&ce.stageResources.textures.push(I.get(re.textureOcclusion)),(0,C.pC)(re.textureEmissive)&&ce.stageResources.textures.push(I.get(re.textureEmissive)),(0,C.pC)(re.textureMetallicRoughness)&&ce.stageResources.textures.push(I.get(re.textureMetallicRoughness))),ce.numberOfVertices+=Qe;const je=Ne.boundingInfo;(0,C.pC)(je)&&((0,N.pp)(ce.boundingBox,je.getBBMin()),(0,N.pp)(ce.boundingBox,je.getBBMax()))})}),A}function Fa(_,d){for(let u=0;u<_.model.lods.length;++u){const v=_.model.lods[u];_.customMeta.esriTreeRendering=!0;for(const b of v.parts){const O=b.attributes.normal;if((0,C.Wi)(O))return;const A=b.attributes.position,R=A.count,I=(0,w.c)(),S=(0,w.c)(),k=(0,w.c)(),ce=(0,ee.gS)(H.mc,R),ae=(0,ee.gS)(H.ct,R),be=(0,U.a)((0,L.c)(),b.transform);for(let re=0;re<R;re++){A.getVec(re,S),O.getVec(re,I),(0,M.m)(S,S,b.transform),(0,M.f)(k,S,d.center),(0,M.E)(k,k,d.radius);const Re=k[2],Le=(0,M.l)(k),ze=Math.min(.45+.55*Le*Le,1);(0,M.E)(k,k,d.radius),(0,M.m)(k,k,be),(0,M.n)(k,k),u+1!==_.model.lods.length&&_.model.lods.length>1&&(0,M.e)(k,k,I,Re>-1?.2:Math.min(-4*Re-3.8,1)),ae.setVec(re,k),ce.set(re,0,255*ze),ce.set(re,1,255*ze),ce.set(re,2,255*ze),ce.set(re,3,255)}b.attributes.normal=ae,b.attributes.color=ce}}}},9044:(he,j,x)=>{var y,w;x.d(j,{a9:()=>y}),x(21286),(w=y||(y={}))[w.Multiply=1]="Multiply",w[w.Ignore=2]="Ignore",w[w.Replace=3]="Replace",w[w.Tint=4]="Tint"},52382:(he,j,x)=>{x.d(j,{q:()=>C});var D=x(6945),y=x(17625);function C(B,P){P.output===D.H.Color&&P.receiveShadows?(B.varyings.add("linearDepth","float"),B.vertex.code.add(y.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):P.output===D.H.Depth||P.output===D.H.Shadow?(B.varyings.add("linearDepth","float"),B.vertex.uniforms.add("nearFar","vec2"),B.vertex.code.add(y.H`void forwardLinearDepth() {
linearDepth = (-position_view().z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)):B.vertex.code.add(y.H`void forwardLinearDepth() {}`)}},73132:(he,j,x)=>{x.d(j,{w:()=>y});var D=x(17625);function y(C){C.vertex.code.add(D.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},6945:(he,j,x)=>{var D,y;x.d(j,{H:()=>D}),(y=D||(D={}))[y.Color=0]="Color",y[y.Depth=1]="Depth",y[y.Normal=2]="Normal",y[y.Shadow=3]="Shadow",y[y.Highlight=4]="Highlight",y[y.Draped=5]="Draped",y[y.Occlusion=6]="Occlusion",y[y.Alpha=7]="Alpha",y[y.COUNT=8]="COUNT"},78925:(he,j,x)=>{x.d(j,{p2:()=>P,Vv:()=>L});var D=x(62208),y=x(84161),C=x(28093),B=x(17625);function P(w,N){if(N.slicePlaneEnabled){w.extensions.add("GL_OES_standard_derivatives"),N.sliceEnabledForVertexPrograms&&(w.vertex.uniforms.add("slicePlaneOrigin","vec3"),w.vertex.uniforms.add("slicePlaneBasis1","vec3"),w.vertex.uniforms.add("slicePlaneBasis2","vec3")),w.fragment.uniforms.add("slicePlaneOrigin","vec3"),w.fragment.uniforms.add("slicePlaneBasis1","vec3"),w.fragment.uniforms.add("slicePlaneBasis2","vec3");const H=B.H`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,K=B.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,J=N.sliceHighlightDisabled?B.H`#define highlightSlice(_color_, _pos_) (_color_)`:B.H`
        ${K}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;N.sliceEnabledForVertexPrograms&&w.vertex.code.add(H),w.fragment.code.add(H),w.fragment.code.add(J)}else{const H=B.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;N.sliceEnabledForVertexPrograms&&w.vertex.code.add(H),w.fragment.code.add(H)}}function L(w,N,H,K){N.slicePlaneEnabled&&((0,D.pC)(H)?(K?((0,y.f)(M,H.origin,K),w.setUniform3fv("slicePlaneOrigin",M)):w.setUniform3fv("slicePlaneOrigin",H.origin),w.setUniform3fv("slicePlaneBasis1",H.basis1),w.setUniform3fv("slicePlaneBasis2",H.basis2)):(w.setUniform3fv("slicePlaneBasis1",C.Z),w.setUniform3fv("slicePlaneBasis2",C.Z),w.setUniform3fv("slicePlaneOrigin",C.Z)))}const M=(0,C.c)()},24255:(he,j,x)=>{x.d(j,{w:()=>y});var D=x(17625);function y(C,B){const P=Nt({hasModelTransformation:!1},B);if(P.hasModelTransformation)return P.linearDepth?void C.vertex.code.add(D.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):void C.vertex.code.add(D.H`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);C.vertex.code.add(P.linearDepth?D.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`:D.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},60355:(he,j,x)=>{x.d(j,{fQ:()=>L,d3:()=>w});var D=x(28093),y=x(6945),C=x(7228),B=x(17625),P=x(16396),U=x(2757);function L(K,J){J.instanced&&J.instancedDoublePrecision&&(K.attributes.add(P.T.MODELORIGINHI,"vec3"),K.attributes.add(P.T.MODELORIGINLO,"vec3"),K.attributes.add(P.T.MODEL,"mat3"),K.attributes.add(P.T.MODELNORMAL,"mat3")),J.instancedDoublePrecision&&(K.vertex.include(C.$,J),K.vertex.uniforms.add("viewOriginHi","vec3"),K.vertex.uniforms.add("viewOriginLo","vec3"));const ee=[B.H`
    vec3 calculateVPos() {
      ${J.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,B.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${J.instancedDoublePrecision?B.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,B.H`
    vec3 dpNormal(vec4 _normal) {
      ${J.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,B.H`
    vec3 dpNormalView(vec4 _normal) {
      ${J.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,J.vertexTangents?B.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${J.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:B.H``];K.vertex.code.add(ee[0]),K.vertex.code.add(ee[1]),K.vertex.code.add(ee[2]),J.output===y.H.Normal&&K.vertex.code.add(ee[3]),K.vertex.code.add(ee[4])}function w(K,J){(0,U.po)(J,N,H,3),K.setUniform3fv("viewOriginHi",N),K.setUniform3fv("viewOriginLo",H)}const N=(0,D.c)(),H=(0,D.c)()},26859:(he,j,x)=>{x.d(j,{O:()=>B,h:()=>P});var D=x(17625);function y(U){const L=D.H`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;U.fragment.code.add(L),U.vertex.code.add(L)}var P,U,C=x(16396);function B(U,L){L.normalType===P.Attribute&&(U.attributes.add(C.T.NORMAL,"vec3"),U.vertex.code.add(D.H`vec3 normalModel() {
return normal;
}`)),L.normalType===P.CompressedAttribute&&(U.include(y),U.attributes.add(C.T.NORMALCOMPRESSED,"vec2"),U.vertex.code.add(D.H`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),L.normalType===P.ScreenDerivative&&(U.extensions.add("GL_OES_standard_derivatives"),U.fragment.code.add(D.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}(U=P||(P={}))[U.Attribute=0]="Attribute",U[U.CompressedAttribute=1]="CompressedAttribute",U[U.Ground=2]="Ground",U[U.ScreenDerivative=3]="ScreenDerivative",U[U.COUNT=4]="COUNT"},84833:(he,j,x)=>{x.d(j,{f:()=>C});var D=x(17625),y=x(16396);function C(B){B.attributes.add(y.T.POSITION,"vec3"),B.vertex.code.add(D.H`vec3 positionModel() { return position; }`)}},72326:(he,j,x)=>{x.d(j,{R:()=>P});var D=x(9044),y=x(17625);function C(U){U.vertex.code.add(y.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${y.H.int(D.a9.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${y.H.int(D.a9.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${y.H.int(D.a9.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${y.H.int(D.a9.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var B=x(16396);function P(U,L){L.symbolColor?(U.include(C),U.attributes.add(B.T.SYMBOLCOLOR,"vec4"),U.varyings.add("colorMixMode","mediump float")):U.fragment.uniforms.add("colorMixMode","int"),U.vertex.code.add(L.symbolColor?y.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`:y.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}},36603:(he,j,x)=>{x.d(j,{D:()=>C,N:()=>B});var B,P,D=x(17625),y=x(16396);function C(P,U){U.attributeTextureCoordinates===B.Default&&(P.attributes.add(y.T.UV0,"vec2"),P.varyings.add("vuv0","vec2"),P.vertex.code.add(D.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),U.attributeTextureCoordinates===B.Atlas&&(P.attributes.add(y.T.UV0,"vec2"),P.varyings.add("vuv0","vec2"),P.attributes.add(y.T.UVREGION,"vec4"),P.varyings.add("vuvRegion","vec4"),P.vertex.code.add(D.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),U.attributeTextureCoordinates===B.None&&P.vertex.code.add(D.H`void forwardTextureCoordinates() {}`)}(P=B||(B={}))[P.None=0]="None",P[P.Default=1]="Default",P[P.Atlas=2]="Atlas",P[P.COUNT=3]="COUNT"},58173:(he,j,x)=>{x.d(j,{c:()=>C});var D=x(17625),y=x(16396);function C(B,P){P.attributeColor?(B.attributes.add(y.T.COLOR,"vec4"),B.varyings.add("vColor","vec4"),B.vertex.code.add(D.H`void forwardVertexColor() { vColor = color; }`),B.vertex.code.add(D.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):B.vertex.code.add(D.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},85305:(he,j,x)=>{x.d(j,{B:()=>ee});var D=x(59617),y=x(26859),U=(x(550),x(43703),x(28093),x(84833)),L=x(7228),M=x(17625);function w($,te){$.include(U.f),$.vertex.include(L.$,te),$.varyings.add("vPositionWorldCameraRelative","vec3"),$.varyings.add("vPosition_view","vec3"),$.vertex.uniforms.add("transformWorldFromModelRS","mat3"),$.vertex.uniforms.add("transformWorldFromModelTH","vec3"),$.vertex.uniforms.add("transformWorldFromModelTL","vec3"),$.vertex.uniforms.add("transformWorldFromViewTH","vec3"),$.vertex.uniforms.add("transformWorldFromViewTL","vec3"),$.vertex.uniforms.add("transformViewFromCameraRelativeRS","mat3"),$.vertex.uniforms.add("transformProjFromView","mat4"),$.vertex.code.add(M.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return transformViewFromCameraRelativeRS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),$.fragment.uniforms.add("transformWorldFromViewTL","vec3"),$.fragment.code.add(M.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}function ee($,te){te.normalType===y.h.Attribute||te.normalType===y.h.CompressedAttribute?($.include(y.O,te),$.varyings.add("vNormalWorld","vec3"),$.varyings.add("vNormalView","vec3"),$.vertex.uniforms.add("transformNormalGlobalFromModel","mat3"),$.vertex.uniforms.add("transformNormalViewFromGlobal","mat3"),$.vertex.code.add(M.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):te.normalType===y.h.Ground?($.include(w,te),$.varyings.add("vNormalWorld","vec3"),$.vertex.code.add(M.H`
    void forwardNormal() {
      vNormalWorld = ${te.viewingMode===D.JY.Global?M.H`normalize(vPositionWorldCameraRelative);`:M.H`vec3(0.0, 0.0, 1.0);`}
    }
    `)):$.vertex.code.add(M.H`void forwardNormal() {}`)}},85982:(he,j,x)=>{x.d(j,{i:()=>B});var D=x(36603),y=x(17625);function C(P){P.extensions.add("GL_EXT_shader_texture_lod"),P.extensions.add("GL_OES_standard_derivatives"),P.fragment.code.add(y.H`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function B(P,U){P.include(D.D,U),P.fragment.code.add(y.H`
  struct TextureLookupParameter {
    vec2 uv;
    ${U.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),U.attributeTextureCoordinates===D.N.Default&&P.fragment.code.add(y.H`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),U.attributeTextureCoordinates===D.N.Atlas&&(P.include(C),P.fragment.code.add(y.H`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}},52071:(he,j,x)=>{x.d(j,{LC:()=>U,Mo:()=>L});var D=x(59617),y=x(17625);function B(N){N.vertex.code.add(y.H`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),N.vertex.code.add(y.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),N.vertex.code.add(y.H`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),N.vertex.code.add(y.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),N.vertex.code.add(y.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),N.vertex.code.add(y.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
}`),N.vertex.code.add(y.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function U(N,H){const K=N.vertex.code;H.verticalOffsetEnabled?(N.vertex.uniforms.add("verticalOffset","vec4"),H.screenSizePerspectiveEnabled&&(N.include(B),N.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),K.add(y.H`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${H.viewingMode===D.JY.Global?y.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:y.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${H.screenSizePerspectiveEnabled?y.H`
          float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:y.H`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):K.add(y.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function L(N,H,K){if(!H.verticalOffset)return;const J=function M(N,H,K,J=w){return J.screenLength=N.screenLength,J.perDistance=Math.tan(.5*H)/(.5*K),J.minWorldLength=N.minWorldLength,J.maxWorldLength=N.maxWorldLength,J}(H.verticalOffset,K.camera.fovY,K.camera.fullViewport[3]);N.setUniform4f("verticalOffset",J.screenLength*(K.camera.pixelRatio||1),J.perDistance,J.minWorldLength,J.maxWorldLength)}x(50229);const w={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0}},5105:(he,j,x)=>{x.d(j,{s:()=>J});var D=x(6945),y=x(78925),C=x(24255),B=x(26859),P=x(36603),U=x(85305),L=x(19278),M=x(17625);function w(ee,Y){ee.fragment.include(L.n),Y.output===D.H.Shadow?(ee.extensions.add("GL_OES_standard_derivatives"),ee.fragment.code.add(M.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):Y.output===D.H.Depth&&ee.fragment.code.add(M.H`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}var N=x(62952),H=x(92836),K=x(93609);function J(ee,Y){const $=ee.vertex.code,te=ee.fragment.code,pe=Y.hasModelTransformation;Y.output!==D.H.Depth&&Y.output!==D.H.Shadow||(ee.include(C.w,{linearDepth:!0,hasModelTransformation:pe}),ee.include(P.D,Y),ee.include(H.kl,Y),ee.include(w,Y),ee.include(y.p2,Y),ee.vertex.uniforms.add("nearFar","vec2"),ee.varyings.add("depth","float"),Y.hasColorTexture&&ee.fragment.uniforms.add("tex","sampler2D"),$.add(M.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${pe?"model,":""} vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),ee.include(K.sj,Y),te.add(M.H`
      void main(void) {
        discardBySlice(vpos);
        ${Y.hasColorTexture?M.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),Y.output===D.H.Normal&&(ee.include(C.w,{linearDepth:!1,hasModelTransformation:pe}),ee.include(B.O,Y),ee.include(U.B,Y),ee.include(P.D,Y),ee.include(H.kl,Y),Y.hasColorTexture&&ee.fragment.uniforms.add("tex","sampler2D"),ee.vertex.uniforms.add("viewNormal","mat4"),ee.varyings.add("vPositionView","vec3"),$.add(M.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${Y.normalType===B.h.Attribute?M.H`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${pe?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),ee.include(y.p2,Y),ee.include(K.sj,Y),te.add(M.H`
      void main() {
        discardBySlice(vpos);
        ${Y.hasColorTexture?M.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${Y.normalType===B.h.ScreenDerivative?M.H`
            vec3 normal = screenDerivativeNormal(vPositionView);`:M.H`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),Y.output===D.H.Highlight&&(ee.include(C.w,{linearDepth:!1,hasModelTransformation:pe}),ee.include(P.D,Y),ee.include(H.kl,Y),Y.hasColorTexture&&ee.fragment.uniforms.add("tex","sampler2D"),$.add(M.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${pe?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),ee.include(y.p2,Y),ee.include(K.sj,Y),ee.include(N.bA),te.add(M.H`
      void main() {
        discardBySlice(vpos);
        ${Y.hasColorTexture?M.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},62952:(he,j,x)=>{x.d(j,{bA:()=>P,wW:()=>U});var D=x(4794),y=x(17625);const C=(0,D.f)(1,1,0,1),B=(0,D.f)(1,0,1,1);function P(L){L.fragment.uniforms.add("depthTex","sampler2D"),L.fragment.uniforms.add("highlightViewportPixelSz","vec4"),L.fragment.constants.add("occludedHighlightFlag","vec4",C).add("unoccludedHighlightFlag","vec4",B),L.fragment.code.add(y.H`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function U(L,M){L.bindTexture(M.highlightDepthTexture,"depthTex"),L.setUniform4f("highlightViewportPixelSz",0,0,M.inverseViewport[0],M.inverseViewport[1])}},47923:(he,j,x)=>{x.d(j,{S:()=>C});var D=x(19278),y=x(17625);function C(B){B.include(D.n),B.code.add(y.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}},29052:(he,j,x)=>{x.d(j,{Q:()=>U});var D=x(36603),y=x(85982),C=x(96395),B=x(17625),P=x(16396);function U(L,M){const w=L.fragment;M.vertexTangents?(L.attributes.add(P.T.TANGENT,"vec4"),L.varyings.add("vTangent","vec4"),w.code.add(M.doubleSidedMode===C.q.WindingOrder?B.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`:B.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(L.extensions.add("GL_OES_standard_derivatives"),w.code.add(B.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),M.attributeTextureCoordinates!==D.N.None&&(L.include(y.i,M),w.uniforms.add("normalTexture","sampler2D"),w.uniforms.add("normalTextureSize","vec2"),w.code.add(B.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${M.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},54662:(he,j,x)=>{x.d(j,{K:()=>y});var D=x(17625);function y(C,B){const P=C.fragment;B.receiveAmbientOcclusion?(P.uniforms.add("ssaoTex","sampler2D"),P.uniforms.add("viewportPixelSz","vec4"),P.code.add(D.H`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):P.code.add(D.H`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}},22792:(he,j,x)=>{x.d(j,{X:()=>N});var D=x(59617),y=x(92724),C=x(17625);function B(H,K){const J=H.fragment,ee=void 0!==K.lightingSphericalHarmonicsOrder?K.lightingSphericalHarmonicsOrder:2;0===ee?(J.uniforms.add("lightingAmbientSH0","vec3"),J.code.add(C.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===ee?(J.uniforms.add("lightingAmbientSH_R","vec4"),J.uniforms.add("lightingAmbientSH_G","vec4"),J.uniforms.add("lightingAmbientSH_B","vec4"),J.code.add(C.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===ee&&(J.uniforms.add("lightingAmbientSH0","vec3"),J.uniforms.add("lightingAmbientSH_R1","vec4"),J.uniforms.add("lightingAmbientSH_G1","vec4"),J.uniforms.add("lightingAmbientSH_B1","vec4"),J.uniforms.add("lightingAmbientSH_R2","vec4"),J.uniforms.add("lightingAmbientSH_G2","vec4"),J.uniforms.add("lightingAmbientSH_B2","vec4"),J.code.add(C.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),K.pbrMode!==y.f7.Normal&&K.pbrMode!==y.f7.Schematic||J.code.add(C.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}var P=x(54662);function U(H){const K=H.fragment;K.uniforms.add("lightingMainDirection","vec3"),K.uniforms.add("lightingMainIntensity","vec3"),K.uniforms.add("lightingFixedFactor","float"),K.uniforms.add("lightingSpecularStrength","float"),K.uniforms.add("lightingEnvironmentStrength","float"),K.code.add(C.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}var L=x(98898),M=x(39337),w=x(8507);function N(H,K){const J=H.fragment;H.include(U),H.include(P.K,K),K.pbrMode!==y.f7.Disabled&&H.include(L.T,K),H.include(B,K),K.receiveShadows&&H.include(w.hX,K),J.uniforms.add("lightingGlobalFactor","float"),J.uniforms.add("ambientBoostFactor","float"),J.uniforms.add("hasFillLights","bool"),H.include(M.e),J.code.add(C.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${K.pbrMode===y.f7.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),J.code.add(C.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${K.viewingMode===D.JY.Global?C.H`normalize(vPosWorld)`:C.H`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),J.code.add(C.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),K.pbrMode===y.f7.Disabled||K.pbrMode===y.f7.WaterOnIntegratedMesh?J.code.add(C.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):K.pbrMode!==y.f7.Normal&&K.pbrMode!==y.f7.Schematic||(J.code.add(C.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),J.code.add(C.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),J.code.add(C.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),J.code.add(C.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),J.code.add(C.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${K.pbrMode===y.f7.Schematic?C.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:C.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}},10109:(he,j,x)=>{x.d(j,{p:()=>C,l:()=>y});var D=x(17625);function y(B,P){B.fragment.uniforms.add("terrainDepthTexture","sampler2D"),B.fragment.uniforms.add("nearFar","vec2"),B.fragment.uniforms.add("inverseViewport","vec2"),B.fragment.code.add(D.H`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${P.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function C(B,P){P.multipassTerrainEnabled&&P.terrainLinearDepthTexture&&B.bindTexture(P.terrainLinearDepthTexture,"terrainDepthTexture")}},96395:(he,j,x)=>{x.d(j,{k:()=>C,q:()=>B});var B,P,D=x(94573),y=x(17625);function C(P,U){const L=P.fragment;switch(L.code.add(y.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),U.doubleSidedMode){case B.None:L.code.add(y.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case B.View:L.code.add(y.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case B.WindingOrder:L.code.add(y.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,D.Bg)(U.doubleSidedMode);case B.COUNT:}}(P=B||(B={}))[P.None=0]="None",P[P.View=1]="View",P[P.WindingOrder=2]="WindingOrder",P[P.COUNT=3]="COUNT"},98898:(he,j,x)=>{x.d(j,{T:()=>P});var D=x(17625);function y(U){const L=U.fragment.code;L.add(D.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),L.add(D.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),L.add(D.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var C=x(92724),B=x(39337);function P(U,L){const M=U.fragment.code;U.include(B.e),L.pbrMode===C.f7.Water||L.pbrMode===C.f7.WaterOnIntegratedMesh?(M.add(D.H`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${L.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),M.add(D.H`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),M.add(D.H`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),M.add(D.H`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),M.add(D.H`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):L.pbrMode!==C.f7.Normal&&L.pbrMode!==C.f7.Schematic||(U.include(y),M.add(D.H`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),M.add(D.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),M.add(D.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),M.add(D.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),M.add(D.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),M.add(D.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},92724:(he,j,x)=>{x.d(j,{f7:()=>P,jV:()=>U,nW:()=>L});var P,M,D=x(14658),y=x(85982),C=x(17625);function U(M,w){const N=M.fragment,H=w.hasMetalnessAndRoughnessTexture||w.hasEmissionTexture||w.hasOcclusionTexture;w.pbrMode===P.Normal&&H&&M.include(y.i,w),w.pbrMode!==P.Schematic?(w.pbrMode===P.Disabled&&N.code.add(C.H`float getBakedOcclusion() { return 1.0; }`),w.pbrMode===P.Normal&&(N.uniforms.add("emissionFactor","vec3"),N.uniforms.add("mrrFactors","vec3"),N.code.add(C.H`vec3 mrr;
vec3 emission;
float occlusion;`),w.hasMetalnessAndRoughnessTexture&&(N.uniforms.add("texMetallicRoughness","sampler2D"),w.supportsTextureAtlas&&N.uniforms.add("texMetallicRoughnessSize","vec2"),N.code.add(C.H`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),w.hasEmissionTexture&&(N.uniforms.add("texEmission","sampler2D"),w.supportsTextureAtlas&&N.uniforms.add("texEmissionSize","vec2"),N.code.add(C.H`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),w.hasOcclusionTexture?(N.uniforms.add("texOcclusion","sampler2D"),w.supportsTextureAtlas&&N.uniforms.add("texOcclusionSize","vec2"),N.code.add(C.H`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):N.code.add(C.H`float getBakedOcclusion() { return 1.0; }`),N.code.add(C.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${H?"vtc.uv = vuv0;":""}
      ${w.hasMetalnessAndRoughnessTexture?w.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${w.hasEmissionTexture?w.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${w.hasOcclusionTexture?w.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):N.code.add(C.H`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function L(M,w,N=!1){N||(M.setUniform3fv("mrrFactors",w.mrrFactors),M.setUniform3fv("emissionFactor",w.emissiveFactor))}(0,D.f)(0,.6,.2),(M=P||(P={}))[M.Disabled=0]="Disabled",M[M.Normal=1]="Normal",M[M.Schematic=2]="Schematic",M[M.Water=3]="Water",M[M.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",M[M.COUNT=5]="COUNT"},39337:(he,j,x)=>{x.d(j,{e:()=>y});var D=x(17625);function y(C){C.vertex.code.add(D.H`const float PI = 3.141592653589793;`),C.fragment.code.add(D.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},8507:(he,j,x)=>{x.d(j,{hX:()=>C,vL:()=>P});var D=x(19278),y=x(17625);function C(L){L.fragment.include(D.n),L.fragment.uniforms.add("shadowMapTex","sampler2D"),L.fragment.uniforms.add("numCascades","int"),L.fragment.uniforms.add("cascadeDistances","vec4"),L.fragment.uniforms.add("shadowMapMatrix","mat4",4),L.fragment.uniforms.add("depthHalfPixelSz","float"),L.fragment.code.add(y.H`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = cascadeDistances;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, depthHalfPixelSz, shadowMapTex);
}`)}function P(L,M,w){M.shadowMappingEnabled&&M.shadowMap.bindView(L,w)}},92836:(he,j,x)=>{x.d(j,{kl:()=>C,uj:()=>U});var D=x(17625),y=x(16396);function C(L,M){M.vvInstancingEnabled&&(M.vvSize||M.vvColor)&&L.attributes.add(y.T.INSTANCEFEATUREATTRIBUTE,"vec4"),M.vvSize?(L.vertex.uniforms.add("vvSizeMinSize","vec3"),L.vertex.uniforms.add("vvSizeMaxSize","vec3"),L.vertex.uniforms.add("vvSizeOffset","vec3"),L.vertex.uniforms.add("vvSizeFactor","vec3"),L.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),L.vertex.uniforms.add("vvSymbolAnchor","vec3"),L.vertex.code.add(D.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),L.vertex.code.add(D.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${M.vvInstancingEnabled?D.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):L.vertex.code.add(D.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),M.vvColor?(L.vertex.constants.add("vvColorNumber","int",8),L.vertex.code.add(D.H`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${M.vvInstancingEnabled?D.H`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):L.vertex.code.add(D.H`vec4 vvColor() { return vec4(1.0); }`)}function U(L,M){(function B(L,M){M.vvSizeEnabled&&(L.setUniform3fv("vvSizeMinSize",M.vvSizeMinSize),L.setUniform3fv("vvSizeMaxSize",M.vvSizeMaxSize),L.setUniform3fv("vvSizeOffset",M.vvSizeOffset),L.setUniform3fv("vvSizeFactor",M.vvSizeFactor)),M.vvColorEnabled&&(L.setUniform1fv("vvColorValues",M.vvColorValues),L.setUniform4fv("vvColorColors",M.vvColorColors))})(L,M),M.vvSizeEnabled&&(L.setUniform3fv("vvSymbolAnchor",M.vvSymbolAnchor),L.setUniformMatrix3fv("vvSymbolRotationMatrix",M.vvSymbolRotationMatrix))}},93609:(he,j,x)=>{x.d(j,{sj:()=>P,F:()=>C,bf:()=>B});var D=x(17625),y=x(42743);const C=.1,B=.001;function P(U,L){const M=U.fragment;switch(L.alphaDiscardMode){case y.JJ.Blend:M.code.add(D.H`
        #define discardOrAdjustAlpha(color) { if (color.a < ${D.H.float(B)}) { discard; } }
      `);break;case y.JJ.Opaque:M.code.add(D.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case y.JJ.Mask:M.uniforms.add("textureAlphaCutoff","float"),M.code.add(D.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case y.JJ.MaskBlend:U.fragment.uniforms.add("textureAlphaCutoff","float"),U.fragment.code.add(D.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},7228:(he,j,x)=>{x.d(j,{$:()=>C,I:()=>B});var D=x(8314),y=x(17625);function C({code:P},U){P.add(U.doublePrecisionRequiresObfuscation?y.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`:y.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function B(P){return!!(0,D.Z)("force-double-precision-obfuscation")||P.driverTest.doublePrecisionRequiresObfuscation}},411:(he,j,x)=>{x.d(j,{a:()=>B});var D=x(6945),y=x(17625),C=x(81653);function B(P,U){const L=y.H`
  /*
  *  ${U.name}
  *  ${U.output===D.H.Color?"RenderOutput: Color":U.output===D.H.Depth?"RenderOutput: Depth":U.output===D.H.Shadow?"RenderOutput: Shadow":U.output===D.H.Normal?"RenderOutput: Normal":U.output===D.H.Highlight?"RenderOutput: Highlight":""}
  */
  `;(0,C.CG)()&&(P.fragment.code.add(L),P.vertex.code.add(L))}},49974:(he,j,x)=>{x.d(j,{y:()=>B});var D=x(9044),y=x(17625);function C(P){P.code.add(y.H`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function B(P){P.include(C),P.code.add(y.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${y.H.int(D.a9.Multiply)}) {
        return allMixed;
      }
      else if (mode == ${y.H.int(D.a9.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${y.H.int(D.a9.Replace)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${y.H.int(D.a9.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${y.H.int(D.a9.Replace)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}},19278:(he,j,x)=>{x.d(j,{n:()=>y});var D=x(17625);function y(C){C.code.add(D.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}},22355:(he,j,x)=>{x.d(j,{kG:()=>B});const y=x(63290).Z.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class C{constructor(){this.includedModules=new Map}include(Y,$){this.includedModules.has(Y)?this.includedModules.get(Y)!==$&&y.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(Y,$),Y(this.builder,$))}}class B extends C{constructor(){super(...arguments),this.vertex=new L,this.fragment=new L,this.attributes=new M,this.varyings=new w,this.extensions=new N,this.constants=new H}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(Y){const $=this.extensions.generateSource(Y),te=this.attributes.generateSource(Y),pe=this.varyings.generateSource(),we="vertex"===Y?this.vertex:this.fragment,ie=we.uniforms.generateSource(),se=we.code.generateSource(),me="vertex"===Y?J:K,_e=this.constants.generateSource().concat(we.constants.generateSource());return`\n${$.join("\n")}\n\n${me}\n\n${_e.join("\n")}\n\n${ie.join("\n")}\n\n${te.join("\n")}\n\n${pe.join("\n")}\n\n${se.join("\n")}`}}class P{constructor(){this._entries=new Map}add(Y,$,te){return this._entries.set(`${Y}_${$}_${te}`,{name:Y,type:$,arraySize:te}),this}generateSource(){return Array.from(this._entries.values()).map($=>`uniform ${$.type} ${$.name}${($=>$?`[${$}]`:"")($.arraySize)};`)}get entries(){return Array.from(this._entries.values())}}class U{constructor(){this._entries=new Array}add(Y){this._entries.push(Y)}generateSource(){return this._entries}}class L extends C{constructor(){super(...arguments),this.uniforms=new P,this.code=new U,this.constants=new H}get builder(){return this}}class M{constructor(){this._entries=new Array}add(Y,$){this._entries.push([Y,$])}generateSource(Y){return"fragment"===Y?[]:this._entries.map($=>`attribute ${$[1]} ${$[0]};`)}}class w{constructor(){this._entries=new Array}add(Y,$){this._entries.push([Y,$])}generateSource(){return this._entries.map(Y=>`varying ${Y[1]} ${Y[0]};`)}}class N{constructor(){this._entries=new Set}add(Y){this._entries.add(Y)}generateSource(Y){const $="vertex"===Y?N.ALLOWLIST_VERTEX:N.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(te=>$.includes(te)).map(te=>`#extension ${te} : enable`)}}N.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],N.ALLOWLIST_VERTEX=[];class H{constructor(){this._entries=[]}add(Y,$,te){let pe="ERROR_CONSTRUCTOR_STRING";switch($){case"float":pe=H._numberToFloatStr(te);break;case"int":pe=H._numberToIntStr(te);break;case"bool":pe=te.toString();break;case"vec2":pe=`vec2(${H._numberToFloatStr(te[0])},                            ${H._numberToFloatStr(te[1])})`;break;case"vec3":pe=`vec3(${H._numberToFloatStr(te[0])},                            ${H._numberToFloatStr(te[1])},                            ${H._numberToFloatStr(te[2])})`;break;case"vec4":pe=`vec4(${H._numberToFloatStr(te[0])},                            ${H._numberToFloatStr(te[1])},                            ${H._numberToFloatStr(te[2])},                            ${H._numberToFloatStr(te[3])})`;break;case"ivec2":pe=`ivec2(${H._numberToIntStr(te[0])},                             ${H._numberToIntStr(te[1])})`;break;case"ivec3":pe=`ivec3(${H._numberToIntStr(te[0])},                             ${H._numberToIntStr(te[1])},                             ${H._numberToIntStr(te[2])})`;break;case"ivec4":pe=`ivec4(${H._numberToIntStr(te[0])},                             ${H._numberToIntStr(te[1])},                             ${H._numberToIntStr(te[2])},                             ${H._numberToIntStr(te[3])})`;break;case"mat2":case"mat3":case"mat4":pe=`${$}(${Array.prototype.map.call(te,we=>H._numberToFloatStr(we)).join(", ")})`}return this._entries.push(`const ${$} ${Y} = ${pe};`),this}static _numberToIntStr(Y){return Y.toFixed(0)}static _numberToFloatStr(Y){return Number.isInteger(Y)?Y.toFixed(1):Y.toString()}generateSource(){return Array.from(this._entries)}}const K="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",J="precision highp float;\nprecision highp sampler2D;"},17625:(he,j,x)=>{function D(y,...C){let B="";for(let P=0;P<C.length;P++)B+=y[P]+C[P];return B+=y[y.length-1],B}var y;x.d(j,{H:()=>D}),(y=D||(D={})).int=function C(P){return Math.round(P).toString()},y.float=function B(P){return P.toPrecision(8)}},2282:(he,j,x)=>{x.d(j,{hu:()=>L}),x(67831),x(99770),x(993),(0,x(4794).c)();class U{constructor(se){this.message=se}toString(){return`AssertException: ${this.message}`}}function L(ie,se){if(!ie)throw se=se||"assert",console.log(new Error(se).stack),new U(se)}},50229:(he,j,x)=>{x.d(j,{bj:()=>Ee,FZ:()=>Dt,Uf:()=>Oe,Bw:()=>sr,LO:()=>Be,Hx:()=>ge});var D=x(21286),y=x(62208),C=x(84161),B=x(28093),P=x(5548),U=x(42743);x(59617),(0,D.Vl)(10),(0,D.Vl)(12),(0,D.Vl)(70),(0,D.Vl)(40);const _e={scale:0,factor:0,minPixelSize:0,paddingPixels:0};var X=x(2282),Ie=x(16396),Fe=(x(28347),x(43703));x(2757),new Float64Array(3),new Float32Array(6),(0,Fe.c)();const At=(0,P.Ue)();function sr(W,G,Z,q,le,Ce,Ae){if(!function ht(W){return!!(0,y.pC)(W)&&!W.visible}(G))if(W.boundingInfo)(0,X.hu)(W.primitiveType===U.MX.Triangle),vt(W.boundingInfo,q,le,Z.tolerance,Ce,Ae);else{const Me=W.indices.get(Ie.T.POSITION),We=W.vertexAttributes.get(Ie.T.POSITION);rr(q,le,0,Me.length/3,Me,We,void 0,Ce,Ae)}}const xt=(0,B.c)();function vt(W,G,Z,q,le,Ce){if((0,y.Wi)(W))return;const Ae=function z(W,G,Z){return(0,C.s)(Z,1/(G[0]-W[0]),1/(G[1]-W[1]),1/(G[2]-W[2]))}(G,Z,xt);if((0,P.op)(At,W.getBBMin()),(0,P.Tn)(At,W.getBBMax()),(0,y.pC)(le)&&le.applyToAabb(At),function oe(W,G,Z,q){return function de(W,G,Z,q,le){const Ce=(W[0]-q-G[0])*Z[0],Ae=(W[3]+q-G[0])*Z[0];let Me=Math.min(Ce,Ae),We=Math.max(Ce,Ae);const ye=(W[1]-q-G[1])*Z[1],Ke=(W[4]+q-G[1])*Z[1];if(We=Math.min(We,Math.max(ye,Ke)),We<0||(Me=Math.max(Me,Math.min(ye,Ke)),Me>We))return!1;const ke=(W[2]-q-G[2])*Z[2],tt=(W[5]+q-G[2])*Z[2];return We=Math.min(We,Math.max(ke,tt)),!(We<0)&&(Me=Math.max(Me,Math.min(ke,tt)),!(Me>We)&&Me<le)}(W,G,Z,q,1/0)}(At,G,Ae,q)){const{primitiveIndices:Me,indices:We,position:ye}=W,Ke=Me?Me.length:We.length/3;if(Ke>Rt){const ke=W.getChildren();if(void 0!==ke){for(let tt=0;tt<8;++tt)void 0!==ke[tt]&&vt(ke[tt],G,Z,q,le,Ce);return}}rr(G,Z,0,Ke,We,ye,Me,le,Ce)}}const Gt=(0,B.c)();function rr(W,G,Z,q,le,Ce,Ae,Me,We){if(Ae)return function lr(W,G,Z,q,le,Ce,Ae,Me,We){const ye=Ce.data,Ke=Ce.stride||Ce.size,ke=W[0],tt=W[1],Ot=W[2],st=G[0]-ke,_t=G[1]-tt,Tt=G[2]-Ot;for(let nt=Z;nt<q;++nt){const wt=Ae[nt];let rt=3*wt,Ze=Ke*le[rt++],pt=ye[Ze++],gt=ye[Ze++],bt=ye[Ze];Ze=Ke*le[rt++];let Pt=ye[Ze++],jt=ye[Ze++],yt=ye[Ze];Ze=Ke*le[rt];let ut=ye[Ze++],Yt=ye[Ze++],Kt=ye[Ze];(0,y.pC)(Me)&&([pt,gt,bt]=Me.applyToVertex(pt,gt,bt,nt),[Pt,jt,yt]=Me.applyToVertex(Pt,jt,yt,nt),[ut,Yt,Kt]=Me.applyToVertex(ut,Yt,Kt,nt));const Ft=Pt-pt,zt=jt-gt,Lt=yt-bt,It=ut-pt,Bt=Yt-gt,$t=Kt-bt,qt=_t*$t-Bt*Tt,ir=Tt*It-$t*st,Mt=st*Bt-It*_t,Ct=Ft*qt+zt*ir+Lt*Mt;if(Math.abs(Ct)<=Number.EPSILON)continue;const Zt=ke-pt,Jt=tt-gt,St=Ot-bt,Ut=Zt*qt+Jt*ir+St*Mt;if(Ct>0){if(Ut<0||Ut>Ct)continue}else if(Ut>0||Ut<Ct)continue;const Je=Jt*Lt-zt*St,Ht=St*Ft-Lt*Zt,Vt=Zt*zt-Ft*Jt,Wt=st*Je+_t*Ht+Tt*Vt;if(Ct>0){if(Wt<0||Ut+Wt>Ct)continue}else if(Wt>0||Ut+Wt<Ct)continue;const Ge=(It*Je+Bt*Ht+$t*Vt)/Ct;Ge>=0&&We(Ge,Q(Ft,zt,Lt,It,Bt,$t,Gt),wt,!1)}}(W,G,Z,q,le,Ce,Ae,Me,We);const ye=Ce.data,Ke=Ce.stride||Ce.size,ke=W[0],tt=W[1],Ot=W[2],st=G[0]-ke,_t=G[1]-tt,Tt=G[2]-Ot;for(let nt=Z,wt=3*Z;nt<q;++nt){let rt=Ke*le[wt++],Ze=ye[rt++],pt=ye[rt++],gt=ye[rt];rt=Ke*le[wt++];let bt=ye[rt++],Pt=ye[rt++],jt=ye[rt];rt=Ke*le[wt++];let yt=ye[rt++],ut=ye[rt++],Yt=ye[rt];(0,y.pC)(Me)&&([Ze,pt,gt]=Me.applyToVertex(Ze,pt,gt,nt),[bt,Pt,jt]=Me.applyToVertex(bt,Pt,jt,nt),[yt,ut,Yt]=Me.applyToVertex(yt,ut,Yt,nt));const Kt=bt-Ze,Ft=Pt-pt,zt=jt-gt,Lt=yt-Ze,It=ut-pt,Bt=Yt-gt,$t=_t*Bt-It*Tt,qt=Tt*Lt-Bt*st,ir=st*It-Lt*_t,Mt=Kt*$t+Ft*qt+zt*ir;if(Math.abs(Mt)<=Number.EPSILON)continue;const Ct=ke-Ze,Zt=tt-pt,Jt=Ot-gt,St=Ct*$t+Zt*qt+Jt*ir;if(Mt>0){if(St<0||St>Mt)continue}else if(St>0||St<Mt)continue;const Ut=Zt*zt-Ft*Jt,Je=Jt*Kt-zt*Ct,Ht=Ct*Ft-Kt*Zt,Vt=st*Ut+_t*Je+Tt*Ht;if(Mt>0){if(Vt<0||St+Vt>Mt)continue}else if(Vt>0||St+Vt<Mt)continue;const Wt=(Lt*Ut+It*Je+Bt*Ht)/Mt;Wt>=0&&We(Wt,Q(Kt,Ft,zt,Lt,It,Bt,Gt),nt,!1)}}const cr=(0,B.c)(),V=(0,B.c)();function Q(W,G,Z,q,le,Ce,Ae){return(0,C.s)(cr,W,G,Z),(0,C.s)(V,q,le,Ce),(0,C.c)(Ae,cr,V),(0,C.n)(Ae,Ae),Ae}function ge(W,G,Z,q,le){let Ce=(Z.screenLength||0)*W.pixelRatio;le&&(Ce=function pe(W,G,Z,q){return function J(W,G){return Math.max((0,D.t7)(W*G.scale,W,G.factor),function K(W,G){return 0===W?G.minPixelSize:G.minPixelSize*(1+2*G.paddingPixels/W)}(W,G))}(W,function H(W,G,Z){const q=Z.parameters,le=Z.paddingPixelsOverride;return _e.scale=Math.min(q.divisor/(G-q.offset),1),_e.factor=function N(W){return Math.abs(W*W*W)}(W),_e.minPixelSize=q.minPixelSize,_e.paddingPixels=le,_e}(G,Z,q))}(Ce,q,G,le));const Ae=Ce*Math.tan(.5*W.fovY)/(.5*W.fullHeight);return(0,D.uZ)(Ae*G,Z.minWorldLength||0,null!=Z.maxWorldLength?Z.maxWorldLength:1/0)}function Ee(W,G,Z){if(!W)return;const q=W.parameters;G.setUniform4f(Z,q.divisor,q.offset,q.minPixelSize,W.paddingPixelsOverride)}function Oe(W,G){const Z=G?Oe(G):{};for(const q in W){let le=W[q];le&&le.forEach&&(le=ft(le)),null==le&&q in Z||(Z[q]=le)}return Z}function Be(W,G){let Z=!1;for(const q in G){const le=G[q];void 0!==le&&(Z=!0,W[q]=Array.isArray(le)?le.slice():le)}return Z}function ft(W){const G=[];return W.forEach(Z=>G.push(Z)),G}const Dt={multiply:1,ignore:2,replace:3,tint:4},Rt=1e3},40852:(he,j,x)=>{x.d(j,{G:()=>D});class D{constructor(C,B,P,U,L,M=!1,w=0){this.name=C,this.count=B,this.type=P,this.offset=U,this.stride=L,this.normalized=M,this.divisor=w}}}}]);