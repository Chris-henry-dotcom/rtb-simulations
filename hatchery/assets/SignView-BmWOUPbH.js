import{t as e}from"./index-DABWhyE9.js";var t=`attached`,n=1e3,r=1001,i=1002,a=1003,o=1004,s=1005,c=1006,l=1007,u=1008,d=1009,f=1014,p=1015,m=1016,h=1020,g=1023,_=1026,v=1027,y=2300,b=2301,x=2302,S=2400,C=2401,w=2402,T=2500,E=3e3,D=3001,O=3200,k=3201,A=`srgb`,ee=`srgb-linear`,j=`display-p3`,M=`display-p3-linear`,te=`linear`,ne=`srgb`,re=`rec709`,ie=7680,ae=35044,oe=1035,se=2e3,ce=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},le=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ue=1234567,de=Math.PI/180,fe=180/Math.PI;function N(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(le[e&255]+le[e>>8&255]+le[e>>16&255]+le[e>>24&255]+`-`+le[t&255]+le[t>>8&255]+`-`+le[t>>16&15|64]+le[t>>24&255]+`-`+le[n&63|128]+le[n>>8&255]+`-`+le[n>>16&255]+le[n>>24&255]+le[r&255]+le[r>>8&255]+le[r>>16&255]+le[r>>24&255]).toLowerCase()}function pe(e,t,n){return Math.max(t,Math.min(n,e))}function me(e,t){return(e%t+t)%t}function he(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function ge(e,t,n){return e===t?0:(n-e)/(t-e)}function _e(e,t,n){return(1-n)*e+n*t}function P(e,t,n,r){return _e(e,t,1-Math.exp(-n*r))}function ve(e,t=1){return t-Math.abs(me(e,t*2)-t)}function ye(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function be(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function F(e,t){return e+Math.floor(Math.random()*(t-e+1))}function xe(e,t){return e+Math.random()*(t-e)}function Se(e){return e*(.5-Math.random())}function Ce(e){e!==void 0&&(ue=e);let t=ue+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function we(e){return e*de}function Te(e){return e*fe}function Ee(e){return!(e&e-1)&&e!==0}function De(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Oe(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function ke(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:console.warn(`THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Ae(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function je(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var I={DEG2RAD:de,RAD2DEG:fe,generateUUID:N,clamp:pe,euclideanModulo:me,mapLinear:he,inverseLerp:ge,lerp:_e,damp:P,pingpong:ve,smoothstep:ye,smootherstep:be,randInt:F,randFloat:xe,randFloatSpread:Se,seededRandom:Ce,degToRad:we,radToDeg:Te,isPowerOfTwo:Ee,ceilPowerOfTwo:De,floorPowerOfTwo:Oe,setQuaternionFromProperEuler:ke,normalize:je,denormalize:Ae},L=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},R=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Me.makeScale(e,t)),this}rotate(e){return this.premultiply(Me.makeRotation(-e)),this}translate(e,t){return this.premultiply(Me.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Me=new R;function Ne(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Pe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Fe(){let e=Pe(`canvas`);return e.style.display=`block`,e}var Ie={};function Le(e){e in Ie||(Ie[e]=!0,console.warn(e))}var Re=new R().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ze=new R().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Be={[ee]:{transfer:te,primaries:re,toReference:e=>e,fromReference:e=>e},[A]:{transfer:ne,primaries:re,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[M]:{transfer:te,primaries:`p3`,toReference:e=>e.applyMatrix3(ze),fromReference:e=>e.applyMatrix3(Re)},[j]:{transfer:ne,primaries:`p3`,toReference:e=>e.convertSRGBToLinear().applyMatrix3(ze),fromReference:e=>e.applyMatrix3(Re).convertLinearToSRGB()}},Ve=new Set([ee,M]),He={enabled:!0,_workingColorSpace:ee,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!Ve.has(e))throw Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let r=Be[t].toReference,i=Be[n].fromReference;return i(r(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return Be[e].primaries},getTransfer:function(e){return e===``?te:Be[e].transfer}};function Ue(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function We(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ge,Ke=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ge===void 0&&(Ge=Pe(`canvas`)),Ge.width=e.width,Ge.height=e.height;let n=Ge.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ge}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Pe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Ue(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Ue(t[e]/255)*255):t[e]=Ue(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},qe=0,Je=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qe++}),this.uuid=N(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Ye(r[t].image)):e.push(Ye(r[t]))}else e=Ye(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Ye(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ke.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var Xe=0,Ze=class e extends ce{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=r,a=r,o=c,s=u,l=g,f=d,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xe++}),this.uuid=N(),this.name=``,this.source=new Je(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=p,this.format=l,this.internalFormat=null,this.type=f,this.offset=new L(0,0),this.repeat=new L(1,1),this.center=new L(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new R,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof m==`string`?this.colorSpace=m:(Le(`THREE.Texture: Property .encoding has been replaced by .colorSpace.`),this.colorSpace=m===3001?A:``),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case n:e.x-=Math.floor(e.x);break;case r:e.x=e.x<0?0:1;break;case i:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case n:e.y-=Math.floor(e.y);break;case r:e.y=e.y<0?0:1;break;case i:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Le(`THREE.Texture: Property .encoding has been replaced by .colorSpace.`),this.colorSpace===`srgb`?D:E}set encoding(e){Le(`THREE.Texture: Property .encoding has been replaced by .colorSpace.`),this.colorSpace=e===3001?A:``}};Ze.DEFAULT_IMAGE=null,Ze.DEFAULT_MAPPING=300,Ze.DEFAULT_ANISOTROPY=1;var Qe=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$e=class extends ce{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);let r={width:e,height:t,depth:1};n.encoding!==void 0&&(Le(`THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace.`),n.colorSpace=n.encoding===3001?A:``),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:c,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ze(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Je(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},et=class extends $e{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},tt=class extends Ze{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},nt=class extends Ze{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},z=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0)e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;else if(o===1)e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;else{if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(i),n*Math.cos(i),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(it.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(it.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rt.copy(this).projectOnVector(e),this.sub(rt)}reflect(e){return this.sub(rt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},rt=new B,it=new z,at=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(st.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(st.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=st.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,st):st.fromBufferAttribute(r,t),st.applyMatrix4(e.matrixWorld),this.expandByPoint(st);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),ct.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),ct.copy(e.boundingBox)),ct.applyMatrix4(e.matrixWorld),this.union(ct)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,st),st.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ht),gt.subVectors(this.max,ht),lt.subVectors(e.a,ht),ut.subVectors(e.b,ht),dt.subVectors(e.c,ht),ft.subVectors(ut,lt),pt.subVectors(dt,ut),mt.subVectors(lt,dt);let t=[0,-ft.z,ft.y,0,-pt.z,pt.y,0,-mt.z,mt.y,ft.z,0,-ft.x,pt.z,0,-pt.x,mt.z,0,-mt.x,-ft.y,ft.x,0,-pt.y,pt.x,0,-mt.y,mt.x,0];return!yt(t,lt,ut,dt,gt)||(t=[1,0,0,0,1,0,0,0,1],!yt(t,lt,ut,dt,gt))?!1:(_t.crossVectors(ft,pt),t=[_t.x,_t.y,_t.z],yt(t,lt,ut,dt,gt))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,st).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(st).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(ot[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ot[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ot[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ot[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ot[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ot[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ot[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ot[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ot)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ot=[new B,new B,new B,new B,new B,new B,new B,new B],st=new B,ct=new at,lt=new B,ut=new B,dt=new B,ft=new B,pt=new B,mt=new B,ht=new B,gt=new B,_t=new B,vt=new B;function yt(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){vt.fromArray(e,a);let o=i.x*Math.abs(vt.x)+i.y*Math.abs(vt.y)+i.z*Math.abs(vt.z),s=t.dot(vt),c=n.dot(vt),l=r.dot(vt);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var bt=new at,xt=new B,St=new B,Ct=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?bt.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xt.subVectors(e,this.center);let t=xt.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(xt,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(St.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xt.copy(e.center).add(St)),this.expandByPoint(xt.copy(e.center).sub(St))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},wt=new B,Tt=new B,Et=new B,Dt=new B,Ot=new B,kt=new B,At=new B,jt=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wt.copy(this.origin).addScaledVector(this.direction,t),wt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Tt.copy(e).add(t).multiplyScalar(.5),Et.copy(t).sub(e).normalize(),Dt.copy(this.origin).sub(Tt);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Et),o=Dt.dot(this.direction),s=-Dt.dot(Et),c=Dt.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Tt).addScaledVector(Et,d),f}intersectSphere(e,t){wt.subVectors(e.center,this.origin);let n=wt.dot(this.direction),r=wt.dot(wt)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,wt)!==null}intersectTriangle(e,t,n,r,i){Ot.subVectors(t,e),kt.subVectors(n,e),At.crossVectors(Ot,kt);let a=this.direction.dot(At),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Dt.subVectors(this.origin,e);let s=o*this.direction.dot(kt.crossVectors(Dt,kt));if(s<0)return null;let c=o*this.direction.dot(Ot.cross(Dt));if(c<0||s+c>a)return null;let l=-o*Dt.dot(At);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},V=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Mt.setFromMatrixColumn(e,0).length(),i=1/Mt.setFromMatrixColumn(e,1).length(),a=1/Mt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pt,e,Ft)}lookAt(e,t,n){let r=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),It.crossVectors(n,Rt),It.lengthSq()===0&&(Math.abs(n.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),It.crossVectors(n,Rt)),It.normalize(),Lt.crossVectors(Rt,It),r[0]=It.x,r[4]=Lt.x,r[8]=Rt.x,r[1]=It.y,r[5]=Lt.y,r[9]=Rt.y,r[2]=It.z,r[6]=Lt.z,r[10]=Rt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],j=r[14],M=r[3],te=r[7],ne=r[11],re=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*te,i[8]=a*C+o*D+s*ee+c*ne,i[12]=a*w+o*O+s*j+c*re,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*te,i[9]=l*C+u*D+d*ee+f*ne,i[13]=l*w+u*O+d*j+f*re,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*te,i[10]=p*C+m*D+h*ee+g*ne,i[14]=p*w+m*O+h*j+g*re,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*te,i[11]=_*C+v*D+y*ee+b*ne,i[15]=_*w+v*O+y*j+b*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=Mt.set(r[0],r[1],r[2]).length(),a=Mt.set(r[4],r[5],r[6]).length(),o=Mt.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],Nt.copy(this);let s=1/i,c=1/a,l=1/o;return Nt.elements[0]*=s,Nt.elements[1]*=s,Nt.elements[2]*=s,Nt.elements[4]*=c,Nt.elements[5]*=c,Nt.elements[6]*=c,Nt.elements[8]*=l,Nt.elements[9]*=l,Nt.elements[10]*=l,t.setFromRotationMatrix(Nt),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=se){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=se){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Mt=new B,Nt=new V,Pt=new B(0,0,0),Ft=new B(1,1,1),It=new B,Lt=new B,Rt=new B,zt=new V,Bt=new z,Vt=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-pe(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(pe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zt,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bt.setFromEuler(this),this.setFromQuaternion(Bt,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vt.DEFAULT_ORDER=`XYZ`;var Ht=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Ut=0,Wt=new B,Gt=new z,Kt=new V,qt=new B,Jt=new B,Yt=new B,Xt=new z,Zt=new B(1,0,0),Qt=new B(0,1,0),$t=new B(0,0,1),en={type:`added`},tn={type:`removed`},nn=class e extends ce{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ut++}),this.uuid=N(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new Vt,r=new z,i=new B(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new V},normalMatrix:{value:new R}}),this.matrix=new V,this.matrixWorld=new V,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ht,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gt.setFromAxisAngle(e,t),this.quaternion.multiply(Gt),this}rotateOnWorldAxis(e,t){return Gt.setFromAxisAngle(e,t),this.quaternion.premultiply(Gt),this}rotateX(e){return this.rotateOnAxis(Zt,e)}rotateY(e){return this.rotateOnAxis(Qt,e)}rotateZ(e){return this.rotateOnAxis($t,e)}translateOnAxis(e,t){return Wt.copy(e).applyQuaternion(this.quaternion),this.position.add(Wt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zt,e)}translateY(e){return this.translateOnAxis(Qt,e)}translateZ(e){return this.translateOnAxis($t,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qt.copy(e):qt.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Jt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kt.lookAt(Jt,qt,this.up):Kt.lookAt(qt,Jt,this.up),this.quaternion.setFromRotationMatrix(Kt),r&&(Kt.extractRotation(r.matrixWorld),Gt.setFromRotationMatrix(Kt),this.quaternion.premultiply(Gt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(en)):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tn)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jt,e,Yt),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jt,Xt,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++){let n=e[t];n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};nn.DEFAULT_UP=new B(0,1,0),nn.DEFAULT_MATRIX_AUTO_UPDATE=!0,nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rn=new B,an=new B,on=new B,sn=new B,cn=new B,ln=new B,un=new B,dn=new B,fn=new B,pn=new B,mn=!1,hn=class e{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),rn.subVectors(e,t),r.cross(rn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){rn.subVectors(r,t),an.subVectors(n,t),on.subVectors(e,t);let a=rn.dot(rn),o=rn.dot(an),s=rn.dot(on),c=an.dot(an),l=an.dot(on),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,sn)!==null&&sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getUV(e,t,n,r,i,a,o,s){return mn===!1&&(console.warn(`THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().`),mn=!0),this.getInterpolation(e,t,n,r,i,a,o,s)}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,sn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,sn.x),s.addScaledVector(a,sn.y),s.addScaledVector(o,sn.z),s)}static isFrontFacing(e,t,n,r){return rn.subVectors(n,t),an.subVectors(e,t),rn.cross(an).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),an.subVectors(this.a,this.b),rn.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getUV(t,n,r,i,a){return mn===!1&&(console.warn(`THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().`),mn=!0),e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;cn.subVectors(r,n),ln.subVectors(i,n),dn.subVectors(e,n);let s=cn.dot(dn),c=ln.dot(dn);if(s<=0&&c<=0)return t.copy(n);fn.subVectors(e,r);let l=cn.dot(fn),u=ln.dot(fn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(cn,a);pn.subVectors(e,i);let f=cn.dot(pn),p=ln.dot(pn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(ln,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return un.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(un,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(cn,a).addScaledVector(ln,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={h:0,s:0,l:0},vn={h:0,s:0,l:0};function yn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var H=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=A){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=He.workingColorSpace){return this.r=e,this.g=t,this.b=n,He.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=He.workingColorSpace){if(e=me(e,1),t=pe(t,0,1),n=pe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=yn(i,r,e+1/3),this.g=yn(i,r,e),this.b=yn(i,r,e-1/3)}return He.toWorkingColorSpace(this,r),this}setStyle(e,t=A){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=A){let n=gn[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ue(e.r),this.g=Ue(e.g),this.b=Ue(e.b),this}copyLinearToSRGB(e){return this.r=We(e.r),this.g=We(e.g),this.b=We(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=A){return He.fromWorkingColorSpace(bn.copy(this),e),Math.round(pe(bn.r*255,0,255))*65536+Math.round(pe(bn.g*255,0,255))*256+Math.round(pe(bn.b*255,0,255))}getHexString(e=A){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.fromWorkingColorSpace(bn.copy(this),t);let n=bn.r,r=bn.g,i=bn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=He.workingColorSpace){return He.fromWorkingColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=A){He.fromWorkingColorSpace(bn.copy(this),e);let t=bn.r,n=bn.g,r=bn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(_n),this.setHSL(_n.h+e,_n.s+t,_n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_n),e.getHSL(vn);let n=_e(_n.h,vn.h,t),r=_e(_n.s,vn.s,t),i=_e(_n.l,vn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new H;H.NAMES=gn;var xn=0,Sn=class extends ce{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xn++}),this.uuid=N(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new H(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ie,this.stencilZFail=ie,this.stencilZPass=ie,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Cn=class extends Sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},wn=new B,Tn=new L,En=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=ae,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=p,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn(`THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.`),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix3(e),this.setXY(t,Tn.x,Tn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix3(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ae(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=je(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ae(t,this.array)),t}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ae(t,this.array)),t}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ae(t,this.array)),t}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ae(t,this.array)),t}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),r=je(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),r=je(r,this.array),i=je(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},Dn=class extends En{constructor(e,t,n){super(new Uint16Array(e),t,n)}},On=class extends En{constructor(e,t,n){super(new Uint32Array(e),t,n)}},kn=class extends En{constructor(e,t,n){super(new Float32Array(e),t,n)}},An=0,jn=new V,Mn=new nn,Nn=new B,Pn=new at,Fn=new at,In=new B,Ln=class e extends ce{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:An++}),this.uuid=N(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ne(e)?On:Dn)(e,1):e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new R().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return Mn.lookAt(e),Mn.updateMatrix(),this.applyMatrix4(Mn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nn).negate(),this.translate(Nn.x,Nn.y,Nn.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute(`position`,new kn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new at);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".`,this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Pn.setFromBufferAttribute(n),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ct);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".`,this),this.boundingSphere.set(new B,1/0);else if(e){let n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Fn.setFromBufferAttribute(n),this.morphTargetsRelative?(In.addVectors(Pn.min,Fn.min),Pn.expandByPoint(In),In.addVectors(Pn.max,Fn.max),Pn.expandByPoint(In)):(Pn.expandByPoint(Fn.min),Pn.expandByPoint(Fn.max))}Pn.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)In.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(In));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)In.fromBufferAttribute(a,t),o&&(Nn.fromBufferAttribute(e,t),In.add(Nn)),r=Math.max(r,n.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=e.array,r=t.position.array,i=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new En(new Float32Array(4*o),4));let s=this.getAttribute(`tangent`).array,c=[],l=[];for(let e=0;e<o;e++)c[e]=new B,l[e]=new B;let u=new B,d=new B,f=new B,p=new L,m=new L,h=new L,g=new B,_=new B;function v(e,t,n){u.fromArray(r,e*3),d.fromArray(r,t*3),f.fromArray(r,n*3),p.fromArray(a,e*2),m.fromArray(a,t*2),h.fromArray(a,n*2),d.sub(u),f.sub(u),m.sub(p),h.sub(p);let i=1/(m.x*h.y-h.x*m.y);isFinite(i)&&(g.copy(d).multiplyScalar(h.y).addScaledVector(f,-m.y).multiplyScalar(i),_.copy(f).multiplyScalar(m.x).addScaledVector(d,-h.x).multiplyScalar(i),c[e].add(g),c[t].add(g),c[n].add(g),l[e].add(_),l[t].add(_),l[n].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let e=0,t=y.length;e<t;++e){let t=y[e],r=t.start,i=t.count;for(let e=r,t=r+i;e<t;e+=3)v(n[e+0],n[e+1],n[e+2])}let b=new B,x=new B,S=new B,C=new B;function w(e){S.fromArray(i,e*3),C.copy(S);let t=c[e];b.copy(t),b.sub(S.multiplyScalar(S.dot(t))).normalize(),x.crossVectors(C,t);let n=x.dot(l[e])<0?-1:1;s[e*4]=b.x,s[e*4+1]=b.y,s[e*4+2]=b.z,s[e*4+3]=n}for(let e=0,t=y.length;e<t;++e){let t=y[e],r=t.start,i=t.count;for(let e=r,t=r+i;e<t;e+=3)w(n[e+0]),w(n[e+1]),w(n[e+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new En(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new B,i=new B,a=new B,o=new B,s=new B,c=new B,l=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)In.fromBufferAttribute(e,t),In.normalize(),e.setXYZ(t,In.x,In.y,In.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new En(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Rn=new V,zn=new jt,Bn=new Ct,Vn=new B,Hn=new B,Un=new B,Wn=new B,Gn=new B,Kn=new B,qn=new L,Jn=new L,Yn=new L,Xn=new B,Zn=new B,Qn=new B,$n=new B,er=new B,tr=class extends nn{constructor(e=new Ln,t=new Cn){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Kn.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Gn.fromBufferAttribute(s,e),a?Kn.addScaledVector(Gn,r):Kn.addScaledVector(Gn.sub(t),r))}t.add(Kn)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bn.copy(n.boundingSphere),Bn.applyMatrix4(i),zn.copy(e.ray).recast(e.near),!(Bn.containsPoint(zn.origin)===!1&&(zn.intersectSphere(Bn,Vn)===null||zn.origin.distanceToSquared(Vn)>(e.far-e.near)**2))&&(Rn.copy(i).invert(),zn.copy(e.ray).applyMatrix4(Rn),(n.boundingBox===null||zn.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=rr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=rr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=rr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=rr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function nr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;er.copy(s),er.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(er);return l<n.near||l>n.far?null:{distance:l,point:er.clone(),object:e}}function rr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Hn),e.getVertexPosition(c,Un),e.getVertexPosition(l,Wn);let u=nr(e,t,n,r,Hn,Un,Wn,$n);if(u){i&&(qn.fromBufferAttribute(i,s),Jn.fromBufferAttribute(i,c),Yn.fromBufferAttribute(i,l),u.uv=hn.getInterpolation($n,Hn,Un,Wn,qn,Jn,Yn,new L)),a&&(qn.fromBufferAttribute(a,s),Jn.fromBufferAttribute(a,c),Yn.fromBufferAttribute(a,l),u.uv1=hn.getInterpolation($n,Hn,Un,Wn,qn,Jn,Yn,new L),u.uv2=u.uv1),o&&(Xn.fromBufferAttribute(o,s),Zn.fromBufferAttribute(o,c),Qn.fromBufferAttribute(o,l),u.normal=hn.getInterpolation($n,Hn,Un,Wn,Xn,Zn,Qn,new B),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let e={a:s,b:c,c:l,normal:new B,materialIndex:0};hn.getNormal(Hn,Un,Wn,e.normal),u.face=e}return u}var ir=class e extends Ln{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new kn(c,3)),this.setAttribute(`normal`,new kn(l,3)),this.setAttribute(`uv`,new kn(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new B;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ar(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function or(e){let t={};for(let n=0;n<e.length;n++){let r=ar(e[n]);for(let e in r)t[e]=r[e]}return t}function sr(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function cr(e){return e.getRenderTarget()===null?e.outputColorSpace:He.workingColorSpace}var lr={clone:ar,merge:or},ur=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dr=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fr=class extends Sn{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ur,this.fragmentShader=dr,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=sr(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},pr=class extends nn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new V,this.projectionMatrix=new V,this.projectionMatrixInverse=new V,this.coordinateSystem=se}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},mr=class extends pr{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fe*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(de*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fe*2*Math.atan(Math.tan(de*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(de*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},hr=-90,gr=1,_r=class extends nn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new mr(hr,gr,e,t);r.layers=this.layers,this.add(r);let i=new mr(hr,gr,e,t);i.layers=this.layers,this.add(i);let a=new mr(hr,gr,e,t);a.layers=this.layers,this.add(a);let o=new mr(hr,gr,e,t);o.layers=this.layers,this.add(o);let s=new mr(hr,gr,e,t);s.layers=this.layers,this.add(s);let c=new mr(hr,gr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},vr=class extends Ze{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},yr=class extends et{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Le(`THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace.`),t.colorSpace=t.encoding===3001?A:``),this.texture=new vr(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?c:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ir(5,5,5),i=new fr({name:`CubemapFromEquirect`,uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new tr(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=c),new _r(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},br=new B,xr=new B,Sr=new R,Cr=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=br.subVectors(n,t).cross(xr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(br),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Sr.getNormalMatrix(e),r=this.coplanarPoint(br).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},wr=new Ct,Tr=new B,Er=class{constructor(e=new Cr,t=new Cr,n=new Cr,r=new Cr,i=new Cr,a=new Cr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=se){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Tr.x=r.normal.x>0?e.max.x:e.min.x,Tr.y=r.normal.y>0?e.max.y:e.min.y,Tr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Dr(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Or(e,t){let n=t.isWebGL2,r=new WeakMap;function i(t,r){let i=t.array,a=t.usage,o=i.byteLength,s=e.createBuffer();e.bindBuffer(r,s),e.bufferData(r,i,a),t.onUploadCallback();let c;if(i instanceof Float32Array)c=e.FLOAT;else if(i instanceof Uint16Array){if(t.isFloat16BufferAttribute){if(n)c=e.HALF_FLOAT;else throw Error(`THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.`)}else c=e.UNSIGNED_SHORT}else if(i instanceof Int16Array)c=e.SHORT;else if(i instanceof Uint32Array)c=e.UNSIGNED_INT;else if(i instanceof Int32Array)c=e.INT;else if(i instanceof Int8Array)c=e.BYTE;else if(i instanceof Uint8Array)c=e.UNSIGNED_BYTE;else if(i instanceof Uint8ClampedArray)c=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+i);return{buffer:s,type:c,bytesPerElement:i.BYTES_PER_ELEMENT,version:t.version,size:o}}function a(t,r,i){let a=r.array,o=r._updateRange,s=r.updateRanges;if(e.bindBuffer(i,t),o.count===-1&&s.length===0&&e.bufferSubData(i,0,a),s.length!==0){for(let t=0,r=s.length;t<r;t++){let r=s[t];n?e.bufferSubData(i,r.start*a.BYTES_PER_ELEMENT,a,r.start,r.count):e.bufferSubData(i,r.start*a.BYTES_PER_ELEMENT,a.subarray(r.start,r.start+r.count))}r.clearUpdateRanges()}o.count!==-1&&(n?e.bufferSubData(i,o.offset*a.BYTES_PER_ELEMENT,a,o.offset,o.count):e.bufferSubData(i,o.offset*a.BYTES_PER_ELEMENT,a.subarray(o.offset,o.offset+o.count)),o.count=-1),r.onUploadCallback()}function o(e){return e.isInterleavedBufferAttribute&&(e=e.data),r.get(e)}function s(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=r.get(t);n&&(e.deleteBuffer(n.buffer),r.delete(t))}function c(e,t){if(e.isGLBufferAttribute){let t=r.get(e);(!t||t.version<e.version)&&r.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}e.isInterleavedBufferAttribute&&(e=e.data);let n=r.get(e);if(n===void 0)r.set(e,i(e,t));else if(n.version<e.version){if(n.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);a(n.buffer,e,t),n.version=e.version}}return{get:o,remove:s,update:c}}var kr=class e extends Ln{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new kn(p,3)),this.setAttribute(`normal`,new kn(m,3)),this.setAttribute(`uv`,new kn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},U={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},W={common:{diffuse:{value:new H(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new R},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new R}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new R}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new R}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new R},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new R},normalScale:{value:new L(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new R},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new R}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new R}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new R}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new H(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new H(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0},uvTransform:{value:new R}},sprite:{diffuse:{value:new H(16777215)},opacity:{value:1},center:{value:new L(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new R},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0}}},Ar={basic:{uniforms:or([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.fog]),vertexShader:U.meshbasic_vert,fragmentShader:U.meshbasic_frag},lambert:{uniforms:or([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new H(0)}}]),vertexShader:U.meshlambert_vert,fragmentShader:U.meshlambert_frag},phong:{uniforms:or([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new H(0)},specular:{value:new H(1118481)},shininess:{value:30}}]),vertexShader:U.meshphong_vert,fragmentShader:U.meshphong_frag},standard:{uniforms:or([W.common,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.roughnessmap,W.metalnessmap,W.fog,W.lights,{emissive:{value:new H(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:U.meshphysical_vert,fragmentShader:U.meshphysical_frag},toon:{uniforms:or([W.common,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.gradientmap,W.fog,W.lights,{emissive:{value:new H(0)}}]),vertexShader:U.meshtoon_vert,fragmentShader:U.meshtoon_frag},matcap:{uniforms:or([W.common,W.bumpmap,W.normalmap,W.displacementmap,W.fog,{matcap:{value:null}}]),vertexShader:U.meshmatcap_vert,fragmentShader:U.meshmatcap_frag},points:{uniforms:or([W.points,W.fog]),vertexShader:U.points_vert,fragmentShader:U.points_frag},dashed:{uniforms:or([W.common,W.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:U.linedashed_vert,fragmentShader:U.linedashed_frag},depth:{uniforms:or([W.common,W.displacementmap]),vertexShader:U.depth_vert,fragmentShader:U.depth_frag},normal:{uniforms:or([W.common,W.bumpmap,W.normalmap,W.displacementmap,{opacity:{value:1}}]),vertexShader:U.meshnormal_vert,fragmentShader:U.meshnormal_frag},sprite:{uniforms:or([W.sprite,W.fog]),vertexShader:U.sprite_vert,fragmentShader:U.sprite_frag},background:{uniforms:{uvTransform:{value:new R},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:U.background_vert,fragmentShader:U.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:U.backgroundCube_vert,fragmentShader:U.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:U.cube_vert,fragmentShader:U.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:U.equirect_vert,fragmentShader:U.equirect_frag},distanceRGBA:{uniforms:or([W.common,W.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:U.distanceRGBA_vert,fragmentShader:U.distanceRGBA_frag},shadow:{uniforms:or([W.lights,W.fog,{color:{value:new H(0)},opacity:{value:1}}]),vertexShader:U.shadow_vert,fragmentShader:U.shadow_frag}};Ar.physical={uniforms:or([Ar.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new R},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new R},clearcoatNormalScale:{value:new L(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new R},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new R},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new R},sheen:{value:0},sheenColor:{value:new H(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new R},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new R},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new R},transmissionSamplerSize:{value:new L},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new R},attenuationDistance:{value:0},attenuationColor:{value:new H(0)},specularColor:{value:new H(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new R},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new R},anisotropyVector:{value:new L},anisotropyMap:{value:null},anisotropyMapTransform:{value:new R}}]),vertexShader:U.meshphysical_vert,fragmentShader:U.meshphysical_frag};var jr={r:0,b:0,g:0};function Mr(e,t,n,r,i,a,o){let s=new H(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(a,m){let g=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?n:t).get(_)),_===null?h(s,c):_&&_.isColor&&(h(_,1),g=!0);let v=e.xr.getEnvironmentBlendMode();v===`additive`?r.buffers.color.setClear(0,0,0,1,o):v===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||g)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),_&&(_.isCubeTexture||_.mapping===306)?(u===void 0&&(u=new tr(new ir(1,1,1),new fr({name:`BackgroundCubeMaterial`,uniforms:ar(Ar.backgroundCube.uniforms),vertexShader:Ar.backgroundCube.vertexShader,fragmentShader:Ar.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=He.getTransfer(_.colorSpace)!==ne,(d!==_||f!==_.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=_,f=_.version,p=e.toneMapping),u.layers.enableAll(),a.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new tr(new kr(2,2),new fr({name:`BackgroundMaterial`,uniforms:ar(Ar.background.uniforms),vertexShader:Ar.background.vertexShader,fragmentShader:Ar.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=He.getTransfer(_.colorSpace)!==ne,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=_,f=_.version,p=e.toneMapping),l.layers.enableAll(),a.unshift(l,l.geometry,l.material,0,0,null))}function h(t,n){t.getRGB(jr,cr(e)),r.buffers.color.setClear(jr.r,jr.g,jr.b,n,o)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,h(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,h(s,c)},render:m}}function Nr(e,t,n,r){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),a=r.isWebGL2?null:t.get(`OES_vertex_array_object`),o=r.isWebGL2||a!==null,s={},c=g(null),l=c,u=!1;function d(t,r,i,a,s){let c=!1;if(o){let e=h(a,i,r);l!==e&&(l=e,p(l.object)),c=_(t,a,i,s),c&&v(t,a,i,s)}else{let e=r.wireframe===!0;(l.geometry!==a.id||l.program!==i.id||l.wireframe!==e)&&(l.geometry=a.id,l.program=i.id,l.wireframe=e,c=!0)}s!==null&&n.update(s,e.ELEMENT_ARRAY_BUFFER),(c||u)&&(u=!1,w(t,r,i,a),s!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(s).buffer))}function f(){return r.isWebGL2?e.createVertexArray():a.createVertexArrayOES()}function p(t){return r.isWebGL2?e.bindVertexArray(t):a.bindVertexArrayOES(t)}function m(t){return r.isWebGL2?e.deleteVertexArray(t):a.deleteVertexArrayOES(t)}function h(e,t,n){let r=n.wireframe===!0,i=s[e.id];i===void 0&&(i={},s[e.id]=i);let a=i[t.id];a===void 0&&(a={},i[t.id]=a);let o=a[r];return o===void 0&&(o=g(f()),a[r]=o),o}function g(e){let t=[],n=[],r=[];for(let e=0;e<i;e++)t[e]=0,n[e]=0,r[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:n,attributeDivisors:r,object:e,attributes:{},index:null}}function _(e,t,n,r){let i=l.attributes,a=t.attributes,o=0,s=n.getAttributes();for(let t in s)if(s[t].location>=0){let n=i[t],r=a[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;o++}return l.attributesNum!==o||l.index!==r}function v(e,t,n,r){let i={},a=t.attributes,o=0,s=n.getAttributes();for(let t in s)if(s[t].location>=0){let n=a[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,o++}l.attributes=i,l.attributesNum=o,l.index=r}function y(){let e=l.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function b(e){x(e,0)}function x(n,i){let a=l.newAttributes,o=l.enabledAttributes,s=l.attributeDivisors;a[n]=1,o[n]===0&&(e.enableVertexAttribArray(n),o[n]=1),s[n]!==i&&((r.isWebGL2?e:t.get(`ANGLE_instanced_arrays`))[r.isWebGL2?`vertexAttribDivisor`:`vertexAttribDivisorANGLE`](n,i),s[n]=i)}function S(){let t=l.newAttributes,n=l.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function C(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function w(i,a,o,s){if(r.isWebGL2===!1&&(i.isInstancedMesh||s.isInstancedBufferGeometry)&&t.get(`ANGLE_instanced_arrays`)===null)return;y();let c=s.attributes,l=o.getAttributes(),u=a.defaultAttributeValues;for(let t in l){let a=l[t];if(a.location>=0){let o=c[t];if(o===void 0&&(t===`instanceMatrix`&&i.instanceMatrix&&(o=i.instanceMatrix),t===`instanceColor`&&i.instanceColor&&(o=i.instanceColor)),o!==void 0){let t=o.normalized,c=o.itemSize,l=n.get(o);if(l===void 0)continue;let u=l.buffer,d=l.type,f=l.bytesPerElement,p=r.isWebGL2===!0&&(d===e.INT||d===e.UNSIGNED_INT||o.gpuType===1013);if(o.isInterleavedBufferAttribute){let n=o.data,r=n.stride,l=o.offset;if(n.isInstancedInterleavedBuffer){for(let e=0;e<a.locationSize;e++)x(a.location+e,n.meshPerAttribute);i.isInstancedMesh!==!0&&s._maxInstanceCount===void 0&&(s._maxInstanceCount=n.meshPerAttribute*n.count)}else for(let e=0;e<a.locationSize;e++)b(a.location+e);e.bindBuffer(e.ARRAY_BUFFER,u);for(let e=0;e<a.locationSize;e++)C(a.location+e,c/a.locationSize,d,t,r*f,(l+c/a.locationSize*e)*f,p)}else{if(o.isInstancedBufferAttribute){for(let e=0;e<a.locationSize;e++)x(a.location+e,o.meshPerAttribute);i.isInstancedMesh!==!0&&s._maxInstanceCount===void 0&&(s._maxInstanceCount=o.meshPerAttribute*o.count)}else for(let e=0;e<a.locationSize;e++)b(a.location+e);e.bindBuffer(e.ARRAY_BUFFER,u);for(let e=0;e<a.locationSize;e++)C(a.location+e,c/a.locationSize,d,t,c*f,c/a.locationSize*e*f,p)}}else if(u!==void 0){let n=u[t];if(n!==void 0)switch(n.length){case 2:e.vertexAttrib2fv(a.location,n);break;case 3:e.vertexAttrib3fv(a.location,n);break;case 4:e.vertexAttrib4fv(a.location,n);break;default:e.vertexAttrib1fv(a.location,n)}}}}S()}function T(){O();for(let e in s){let t=s[e];for(let e in t){let n=t[e];for(let e in n)m(n[e].object),delete n[e];delete t[e]}delete s[e]}}function E(e){if(s[e.id]===void 0)return;let t=s[e.id];for(let e in t){let n=t[e];for(let e in n)m(n[e].object),delete n[e];delete t[e]}delete s[e.id]}function D(e){for(let t in s){let n=s[t];if(n[e.id]===void 0)continue;let r=n[e.id];for(let e in r)m(r[e].object),delete r[e];delete n[e.id]}}function O(){k(),u=!0,l!==c&&(l=c,p(l.object))}function k(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:O,resetDefaultState:k,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:b,disableUnusedAttributes:S}}function Pr(e,t,n,r){let i=r.isWebGL2,a;function o(e){a=e}function s(t,r){e.drawArrays(a,t,r),n.update(r,a,1)}function c(r,o,s){if(s===0)return;let c,l;if(i)c=e,l=`drawArraysInstanced`;else if(c=t.get(`ANGLE_instanced_arrays`),l=`drawArraysInstancedANGLE`,c===null){console.error(`THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.`);return}c[l](a,r,o,s),n.update(o,a,s)}function l(e,r,i){if(i===0)return;let o=t.get(`WEBGL_multi_draw`);if(o===null)for(let t=0;t<i;t++)this.render(e[t],r[t]);else{o.multiDrawArraysWEBGL(a,e,0,r,0,i);let t=0;for(let e=0;e<i;e++)t+=r[e];n.update(t,a,1)}}this.setMode=o,this.render=s,this.renderInstances=c,this.renderMultiDraw=l}function Fr(e,t,n){let r;function i(){if(r!==void 0)return r;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);r=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let o=typeof WebGL2RenderingContext<`u`&&e.constructor.name===`WebGL2RenderingContext`,s=n.precision===void 0?`highp`:n.precision,c=a(s);c!==s&&(console.warn(`THREE.WebGLRenderer:`,s,`not supported, using`,c,`instead.`),s=c);let l=o||t.has(`WEBGL_draw_buffers`),u=n.logarithmicDepthBuffer===!0,d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),f=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,b=o||t.has(`OES_texture_float`),x=y&&b,S=o?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:x,maxSamples:S}}function Ir(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Cr,s=new R,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Lr(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new yr(a.height/2);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var Rr=class extends pr{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zr=4,Br=[.125,.215,.35,.446,.526,.582],Vr=20,Hr=new Rr,Ur=new H,Wr=null,Gr=0,Kr=0,qr=(1+Math.sqrt(5))/2,Jr=1/qr,Yr=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,qr,Jr),new B(0,qr,-Jr),new B(Jr,0,qr),new B(-Jr,0,qr),new B(qr,Jr,0),new B(-qr,Jr,0)],Xr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Wr=this._renderer.getRenderTarget(),Gr=this._renderer.getActiveCubeFace(),Kr=this._renderer.getActiveMipmapLevel(),this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ni(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ti(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wr,Gr,Kr),e.scissorTest=!1,$r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wr=this._renderer.getRenderTarget(),Gr=this._renderer.getActiveCubeFace(),Kr=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:c,minFilter:c,generateMipmaps:!1,type:m,format:g,colorSpace:ee,depthBuffer:!1},r=Qr(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qr(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zr(r)),this._blurMaterial=ei(r,e,t)}return r}_compileMaterial(e){let t=new tr(this._lodPlanes[0],e);this._renderer.compile(t,Hr)}_sceneToCubeUV(e,t,n,r){let i=new mr(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.toneMapping;s.getClearColor(Ur),s.toneMapping=0,s.autoClear=!1;let u=new Cn({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),d=new tr(new ir,u),f=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,f=!0):(u.color.copy(Ur),f=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(i.up.set(0,a[t],0),i.lookAt(o[t],0,0)):n===1?(i.up.set(0,0,a[t]),i.lookAt(0,o[t],0)):(i.up.set(0,a[t],0),i.lookAt(0,0,o[t]));let c=this._cubeSize;$r(r,n*c,t>2?c:0,c,c),s.setRenderTarget(r),f&&s.render(d,i),s.render(e,i)}d.geometry.dispose(),d.material.dispose(),s.toneMapping=l,s.autoClear=c,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ni()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ti());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new tr(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;$r(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Hr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let t=1;t<this._lodPlanes.length;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),r=Yr[(t-1)%Yr.length];this._blur(e,t-1,t,n,r)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new tr(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Vr;m>Vr&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vr}`);let h=[],g=0;for(let e=0;e<Vr;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];$r(t,3*v*(r>_-zr?r-_+zr:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Hr)}};function Zr(e){let t=[],n=[],r=[],i=e,a=e-zr+1+Br.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-zr?s=Br[o-e+zr-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Ln;h.setAttribute(`position`,new En(f,3)),h.setAttribute(`uv`,new En(p,2)),h.setAttribute(`faceIndex`,new En(m,1)),t.push(h),i>zr&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function Qr(e,t,n){let r=new et(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function $r(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function ei(e,t,n){let r=new Float32Array(Vr),i=new B(0,1,0);return new fr({name:`SphericalGaussianBlur`,defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ri(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ti(){return new fr({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ri(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ni(){return new fr({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ri(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ri(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ii(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let i=t.get(r);return n===null&&(n=new Xr(e)),i=s?n.fromEquirectangular(r,i):n.fromCubemap(r,i),t.set(r,i),i.texture}if(t.has(r))return t.get(r).texture;{let o=r.image;if(s&&o&&o.height>0||c&&o&&i(o)){n===null&&(n=new Xr(e));let i=s?n.fromEquirectangular(r):n.fromCubemap(r);return t.set(r,i),r.addEventListener(`dispose`,a),i.texture}return null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function ai(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(e){e.isWebGL2?(n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`)):(n(`WEBGL_depth_texture`),n(`OES_texture_float`),n(`OES_texture_half_float`),n(`OES_texture_half_float_linear`),n(`OES_standard_derivatives`),n(`OES_element_index_uint`),n(`OES_vertex_array_object`),n(`ANGLE_instanced_arrays`)),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`)},get:function(e){let t=n(e);return t===null&&console.warn(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function oi(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);for(let e in s.morphAttributes){let n=s.morphAttributes[e];for(let e=0,r=n.length;e<r;e++)t.remove(n[e])}s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER);let i=n.morphAttributes;for(let n in i){let r=i[n];for(let n=0,i=r.length;n<i;n++)t.update(r[n],e.ARRAY_BUFFER)}}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(Ne(n)?On:Dn)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function si(e,t,n,r){let i=r.isWebGL2,a;function o(e){a=e}let s,c;function l(e){s=e.type,c=e.bytesPerElement}function u(t,r){e.drawElements(a,r,s,t*c),n.update(r,a,1)}function d(r,o,l){if(l===0)return;let u,d;if(i)u=e,d=`drawElementsInstanced`;else if(u=t.get(`ANGLE_instanced_arrays`),d=`drawElementsInstancedANGLE`,u===null){console.error(`THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.`);return}u[d](a,o,s,r*c,l),n.update(o,a,l)}function f(e,r,i){if(i===0)return;let o=t.get(`WEBGL_multi_draw`);if(o===null)for(let t=0;t<i;t++)this.render(e[t]/c,r[t]);else{o.multiDrawElementsWEBGL(a,r,0,s,e,0,i);let t=0;for(let e=0;e<i;e++)t+=r[e];n.update(t,a,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function ci(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function li(e,t){return e[0]-t[0]}function ui(e,t){return Math.abs(t[1])-Math.abs(e[1])}function di(e,t,n){let r={},i=new Float32Array(8),a=new WeakMap,o=new Qe,s=[];for(let e=0;e<8;e++)s[e]=[e,0];function c(c,l,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let r=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,i=r===void 0?0:r.length,s=a.get(l);if(s===void 0||s.count!==i){s!==void 0&&s.texture.dispose();let e=l.morphAttributes.position!==void 0,n=l.morphAttributes.normal!==void 0,r=l.morphAttributes.color!==void 0,c=l.morphAttributes.position||[],u=l.morphAttributes.normal||[],d=l.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),r===!0&&(f=3);let m=l.attributes.position.count*f,h=1;m>t.maxTextureSize&&(h=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let g=new Float32Array(m*h*4*i),_=new tt(g,m,h,i);_.type=p,_.needsUpdate=!0;let v=f*4;for(let t=0;t<i;t++){let i=c[t],a=u[t],s=d[t],l=m*h*4*t;for(let t=0;t<i.count;t++){let c=t*v;e===!0&&(o.fromBufferAttribute(i,t),g[l+c+0]=o.x,g[l+c+1]=o.y,g[l+c+2]=o.z,g[l+c+3]=0),n===!0&&(o.fromBufferAttribute(a,t),g[l+c+4]=o.x,g[l+c+5]=o.y,g[l+c+6]=o.z,g[l+c+7]=0),r===!0&&(o.fromBufferAttribute(s,t),g[l+c+8]=o.x,g[l+c+9]=o.y,g[l+c+10]=o.z,g[l+c+11]=s.itemSize===4?o.w:1)}}s={count:i,texture:_,size:new L(m,h)},a.set(l,s);function y(){_.dispose(),a.delete(l),l.removeEventListener(`dispose`,y)}l.addEventListener(`dispose`,y)}let c=0;for(let e=0;e<d.length;e++)c+=d[e];let f=l.morphTargetsRelative?1:1-c;u.getUniforms().setValue(e,`morphTargetBaseInfluence`,f),u.getUniforms().setValue(e,`morphTargetInfluences`,d),u.getUniforms().setValue(e,`morphTargetsTexture`,s.texture,n),u.getUniforms().setValue(e,`morphTargetsTextureSize`,s.size)}else{let t=d===void 0?0:d.length,n=r[l.id];if(n===void 0||n.length!==t){n=[];for(let e=0;e<t;e++)n[e]=[e,0];r[l.id]=n}for(let e=0;e<t;e++){let t=n[e];t[0]=e,t[1]=d[e]}n.sort(ui);for(let e=0;e<8;e++)e<t&&n[e][1]?(s[e][0]=n[e][0],s[e][1]=n[e][1]):(s[e][0]=2**53-1,s[e][1]=0);s.sort(li);let a=l.morphAttributes.position,o=l.morphAttributes.normal,c=0;for(let e=0;e<8;e++){let t=s[e],n=t[0],r=t[1];n!==2**53-1&&r?(a&&l.getAttribute(`morphTarget`+e)!==a[n]&&l.setAttribute(`morphTarget`+e,a[n]),o&&l.getAttribute(`morphNormal`+e)!==o[n]&&l.setAttribute(`morphNormal`+e,o[n]),i[e]=r,c+=r):(a&&l.hasAttribute(`morphTarget`+e)===!0&&l.deleteAttribute(`morphTarget`+e),o&&l.hasAttribute(`morphNormal`+e)===!0&&l.deleteAttribute(`morphNormal`+e),i[e]=0)}let f=l.morphTargetsRelative?1:1-c;u.getUniforms().setValue(e,`morphTargetBaseInfluence`,f),u.getUniforms().setValue(e,`morphTargetInfluences`,i)}}return{update:c}}function fi(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var pi=class extends Ze{constructor(e,t,n,r,i,o,s,c,l,u){if(u=u===void 0?_:u,u!==1026&&u!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&u===1026&&(n=f),n===void 0&&u===1027&&(n=h),super(null,r,i,o,s,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s===void 0?a:s,this.minFilter=c===void 0?a:c,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},mi=new Ze,hi=new pi(1,1);hi.compareFunction=515;var gi=new tt,_i=new nt,vi=new vr,yi=[],bi=[],xi=new Float32Array(16),Si=new Float32Array(9),Ci=new Float32Array(4);function wi(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=yi[i];if(a===void 0&&(a=new Float32Array(i),yi[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ti(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ei(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Di(e,t){let n=bi[t];n===void 0&&(n=new Int32Array(t),bi[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Oi(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ki(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ti(n,t))return;e.uniform2fv(this.addr,t),Ei(n,t)}}function Ai(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ti(n,t))return;e.uniform3fv(this.addr,t),Ei(n,t)}}function ji(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ti(n,t))return;e.uniform4fv(this.addr,t),Ei(n,t)}}function Mi(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ti(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ei(n,t)}else{if(Ti(n,r))return;Ci.set(r),e.uniformMatrix2fv(this.addr,!1,Ci),Ei(n,r)}}function Ni(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ti(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ei(n,t)}else{if(Ti(n,r))return;Si.set(r),e.uniformMatrix3fv(this.addr,!1,Si),Ei(n,r)}}function Pi(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ti(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ei(n,t)}else{if(Ti(n,r))return;xi.set(r),e.uniformMatrix4fv(this.addr,!1,xi),Ei(n,r)}}function Fi(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Ii(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ti(n,t))return;e.uniform2iv(this.addr,t),Ei(n,t)}}function Li(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ti(n,t))return;e.uniform3iv(this.addr,t),Ei(n,t)}}function Ri(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ti(n,t))return;e.uniform4iv(this.addr,t),Ei(n,t)}}function zi(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Bi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ti(n,t))return;e.uniform2uiv(this.addr,t),Ei(n,t)}}function Vi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ti(n,t))return;e.uniform3uiv(this.addr,t),Ei(n,t)}}function Hi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ti(n,t))return;e.uniform4uiv(this.addr,t),Ei(n,t)}}function Ui(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a=this.type===e.SAMPLER_2D_SHADOW?hi:mi;n.setTexture2D(t||a,i)}function Wi(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||_i,i)}function Gi(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||vi,i)}function Ki(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||gi,i)}function qi(e){switch(e){case 5126:return Oi;case 35664:return ki;case 35665:return Ai;case 35666:return ji;case 35674:return Mi;case 35675:return Ni;case 35676:return Pi;case 5124:case 35670:return Fi;case 35667:case 35671:return Ii;case 35668:case 35672:return Li;case 35669:case 35673:return Ri;case 5125:return zi;case 36294:return Bi;case 36295:return Vi;case 36296:return Hi;case 35678:case 36198:case 36298:case 36306:case 35682:return Ui;case 35679:case 36299:case 36307:return Wi;case 35680:case 36300:case 36308:case 36293:return Gi;case 36289:case 36303:case 36311:case 36292:return Ki}}function Ji(e,t){e.uniform1fv(this.addr,t)}function Yi(e,t){let n=wi(t,this.size,2);e.uniform2fv(this.addr,n)}function Xi(e,t){let n=wi(t,this.size,3);e.uniform3fv(this.addr,n)}function Zi(e,t){let n=wi(t,this.size,4);e.uniform4fv(this.addr,n)}function Qi(e,t){let n=wi(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function $i(e,t){let n=wi(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function ea(e,t){let n=wi(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ta(e,t){e.uniform1iv(this.addr,t)}function na(e,t){e.uniform2iv(this.addr,t)}function ra(e,t){e.uniform3iv(this.addr,t)}function ia(e,t){e.uniform4iv(this.addr,t)}function aa(e,t){e.uniform1uiv(this.addr,t)}function oa(e,t){e.uniform2uiv(this.addr,t)}function sa(e,t){e.uniform3uiv(this.addr,t)}function ca(e,t){e.uniform4uiv(this.addr,t)}function la(e,t,n){let r=this.cache,i=t.length,a=Di(n,i);Ti(r,a)||(e.uniform1iv(this.addr,a),Ei(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||mi,a[e])}function ua(e,t,n){let r=this.cache,i=t.length,a=Di(n,i);Ti(r,a)||(e.uniform1iv(this.addr,a),Ei(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||_i,a[e])}function da(e,t,n){let r=this.cache,i=t.length,a=Di(n,i);Ti(r,a)||(e.uniform1iv(this.addr,a),Ei(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||vi,a[e])}function fa(e,t,n){let r=this.cache,i=t.length,a=Di(n,i);Ti(r,a)||(e.uniform1iv(this.addr,a),Ei(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||gi,a[e])}function pa(e){switch(e){case 5126:return Ji;case 35664:return Yi;case 35665:return Xi;case 35666:return Zi;case 35674:return Qi;case 35675:return $i;case 35676:return ea;case 5124:case 35670:return ta;case 35667:case 35671:return na;case 35668:case 35672:return ra;case 35669:case 35673:return ia;case 5125:return aa;case 36294:return oa;case 36295:return sa;case 36296:return ca;case 35678:case 36198:case 36298:case 36306:case 35682:return la;case 35679:case 36299:case 36307:return ua;case 35680:case 36300:case 36308:case 36293:return da;case 36289:case 36303:case 36311:case 36292:return fa}}var ma=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qi(t.type)}},ha=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pa(t.type)}},ga=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},_a=/(\w+)(\])?(\[|\.)?/g;function va(e,t){e.seq.push(t),e.map[t.id]=t}function ya(e,t,n){let r=e.name,i=r.length;for(_a.lastIndex=0;;){let a=_a.exec(r),o=_a.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){va(n,l===void 0?new ma(s,e,t):new ha(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new ga(s),va(n,e)),n=e}}}var ba=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ya(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function xa(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Sa=37297,Ca=0;function wa(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}function Ta(e){let t=He.getPrimaries(He.workingColorSpace),n=He.getPrimaries(e),r;switch(t===n?r=``:t===`p3`&&n===`rec709`?r=`LinearDisplayP3ToLinearSRGB`:t===`rec709`&&n===`p3`&&(r=`LinearSRGBToLinearDisplayP3`),e){case ee:case M:return[r,`LinearTransferOETF`];case A:case j:return[r,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space:`,e),[r,`LinearTransferOETF`]}}function Ea(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+wa(e.getShaderSource(t),r)}return i}function Da(e,t){let n=Ta(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Oa(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`OptimizedCineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}function ka(e){return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||e.shaderID===`physical`?`#extension GL_OES_standard_derivatives : enable`:``,(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?`#extension GL_EXT_frag_depth : enable`:``,e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?`#extension GL_EXT_draw_buffers : require`:``,(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?`#extension GL_EXT_shader_texture_lod : enable`:``].filter(Na).join(`
`)}function Aa(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``].filter(Na).join(`
`)}function ja(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ma(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Na(e){return e!==``}function Pa(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fa(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ia=/^[ \t]*#include +<([\w\d./]+)>/gm;function La(e){return e.replace(Ia,za)}var Ra=new Map([[`encodings_fragment`,`colorspace_fragment`],[`encodings_pars_fragment`,`colorspace_pars_fragment`],[`output_fragment`,`opaque_fragment`]]);function za(e,t){let n=U[t];if(n===void 0){let e=Ra.get(t);if(e!==void 0)n=U[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return La(n)}var Ba=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Va(e){return e.replace(Ba,Ha)}function Ha(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Ua(e){let t=`precision `+e.precision+` float;
precision `+e.precision+` int;`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function Wa(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function Ga(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`}return t}function Ka(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`}return t}function qa(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function Ja(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Ya(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Wa(n),l=Ga(n),u=Ka(n),d=qa(n),f=Ja(n),p=n.isWebGL2?``:ka(n),m=Aa(n),h=ja(a),g=i.createProgram(),_,v,y=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(Na).join(`
`),_.length>0&&(_+=`
`),v=[p,`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(Na).join(`
`),v.length>0&&(v+=`
`)):(_=[Ua(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors&&n.isWebGL2?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_TEXTURE`:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.useLegacyLights?`#define LEGACY_LIGHTS`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?`#define USE_LOGDEPTHBUF_EXT`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )`,`	attribute vec3 morphTarget0;`,`	attribute vec3 morphTarget1;`,`	attribute vec3 morphTarget2;`,`	attribute vec3 morphTarget3;`,`	#ifdef USE_MORPHNORMALS`,`		attribute vec3 morphNormal0;`,`		attribute vec3 morphNormal1;`,`		attribute vec3 morphNormal2;`,`		attribute vec3 morphNormal3;`,`	#else`,`		attribute vec3 morphTarget4;`,`		attribute vec3 morphTarget5;`,`		attribute vec3 morphTarget6;`,`		attribute vec3 morphTarget7;`,`	#endif`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Na).join(`
`),v=[p,Ua(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.useLegacyLights?`#define LEGACY_LIGHTS`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?`#define USE_LOGDEPTHBUF_EXT`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:U.tonemapping_pars_fragment,n.toneMapping===0?``:Oa(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,U.colorspace_pars_fragment,Da(`linearToOutputTexel`,n.outputColorSpace),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Na).join(`
`)),o=La(o),o=Pa(o,n),o=Fa(o,n),s=La(s),s=Pa(s,n),s=Fa(s,n),o=Va(o),s=Va(s),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[m,`precision mediump sampler2DArray;`,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+_,v=[`precision mediump sampler2DArray;`,`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+v);let b=y+_+o,x=y+v+s,S=xa(i,i.VERTEX_SHADER,b),C=xa(i,i.FRAGMENT_SHADER,x);i.attachShader(g,S),i.attachShader(g,C),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(g,0,`position`):i.bindAttribLocation(g,0,n.index0AttributeName),i.linkProgram(g);function w(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(g).trim(),r=i.getShaderInfoLog(S).trim(),a=i.getShaderInfoLog(C).trim(),o=!0,s=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1){if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,g,S,C);else{let e=Ea(i,S,`vertex`),t=Ea(i,C,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+n+`
`+e+`
`+t)}}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:_},fragmentShader:{log:a,prefix:v}})}i.deleteShader(S),i.deleteShader(C),T=new ba(i,g),E=Ma(i,g)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(g,Sa)),D},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ca++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=C,this}var Xa=0,Za=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Qa(e),t.set(e,n)),n}},Qa=class{constructor(e){this.id=Xa++,this.code=e,this.usedTimes=0}};function $a(e,t,n,r,i,a,o){let s=new Ht,c=new Za,l=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return e===0?`uv`:`uv${e}`}function g(a,s,l,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===306?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=w===void 0?0:w.length,E=0;y.morphAttributes.position!==void 0&&(E=1),y.morphAttributes.normal!==void 0&&(E=2),y.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Ar[C];D=e.vertexShader,O=e.fragmentShader}else D=a.vertexShader,O=a.fragmentShader,c.update(a),k=c.getVertexShaderID(a),A=c.getFragmentShaderID(a);let j=e.getRenderTarget(),M=_.isInstancedMesh===!0,te=_.isBatchedMesh===!0,ne=!!a.map,re=!!a.matcap,ie=!!x,ae=!!a.aoMap,oe=!!a.lightMap,se=!!a.bumpMap,ce=!!a.normalMap,le=!!a.displacementMap,ue=!!a.emissiveMap,de=!!a.metalnessMap,fe=!!a.roughnessMap,N=a.anisotropy>0,pe=a.clearcoat>0,me=a.iridescence>0,he=a.sheen>0,ge=a.transmission>0,_e=N&&!!a.anisotropyMap,P=pe&&!!a.clearcoatMap,ve=pe&&!!a.clearcoatNormalMap,ye=pe&&!!a.clearcoatRoughnessMap,be=me&&!!a.iridescenceMap,F=me&&!!a.iridescenceThicknessMap,xe=he&&!!a.sheenColorMap,Se=he&&!!a.sheenRoughnessMap,Ce=!!a.specularMap,we=!!a.specularColorMap,Te=!!a.specularIntensityMap,Ee=ge&&!!a.transmissionMap,De=ge&&!!a.thicknessMap,Oe=!!a.gradientMap,ke=!!a.alphaMap,Ae=a.alphaTest>0,je=!!a.alphaHash,I=!!a.extensions,L=!!y.attributes.uv1,R=!!y.attributes.uv2,Me=!!y.attributes.uv3,Ne=0;return a.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ne=e.toneMapping),{isWebGL2:u,shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:D,fragmentShader:O,defines:a.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:te,instancing:M,instancingColor:M&&_.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ee,map:ne,matcap:re,envMap:ie,envMapMode:ie&&x.mapping,envMapCubeUVHeight:S,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:f&&le,emissiveMap:ue,normalMapObjectSpace:ce&&a.normalMapType===1,normalMapTangentSpace:ce&&a.normalMapType===0,metalnessMap:de,roughnessMap:fe,anisotropy:N,anisotropyMap:_e,clearcoat:pe,clearcoatMap:P,clearcoatNormalMap:ve,clearcoatRoughnessMap:ye,iridescence:me,iridescenceMap:be,iridescenceThicknessMap:F,sheen:he,sheenColorMap:xe,sheenRoughnessMap:Se,specularMap:Ce,specularColorMap:we,specularIntensityMap:Te,transmission:ge,transmissionMap:Ee,thicknessMap:De,gradientMap:Oe,opaque:a.transparent===!1&&a.blending===1,alphaMap:ke,alphaTest:Ae,alphaHash:je,combine:a.combine,mapUv:ne&&h(a.map.channel),aoMapUv:ae&&h(a.aoMap.channel),lightMapUv:oe&&h(a.lightMap.channel),bumpMapUv:se&&h(a.bumpMap.channel),normalMapUv:ce&&h(a.normalMap.channel),displacementMapUv:le&&h(a.displacementMap.channel),emissiveMapUv:ue&&h(a.emissiveMap.channel),metalnessMapUv:de&&h(a.metalnessMap.channel),roughnessMapUv:fe&&h(a.roughnessMap.channel),anisotropyMapUv:_e&&h(a.anisotropyMap.channel),clearcoatMapUv:P&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:ve&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:F&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:Se&&h(a.sheenRoughnessMap.channel),specularMapUv:Ce&&h(a.specularMap.channel),specularColorMapUv:we&&h(a.specularColorMap.channel),specularIntensityMapUv:Te&&h(a.specularIntensityMap.channel),transmissionMapUv:Ee&&h(a.transmissionMap.channel),thicknessMapUv:De&&h(a.thicknessMap.channel),alphaMapUv:ke&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(ce||N),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,vertexUv1s:L,vertexUv2s:R,vertexUv3s:Me,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(ne||ke),fog:!!v,useFog:a.fog===!0,fogExp2:v&&v.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ne,useLegacyLights:e._useLegacyLights,decodeVideoTexture:ne&&a.map.isVideoTexture===!0&&He.getTransfer(a.map.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionDerivatives:I&&a.extensions.derivatives===!0,extensionFragDepth:I&&a.extensions.fragDepth===!0,extensionDrawBuffers:I&&a.extensions.drawBuffers===!0,extensionShaderTextureLOD:I&&a.extensions.shaderTextureLOD===!0,extensionClipCullDistance:I&&a.extensions.clipCullDistance&&r.has(`WEBGL_clip_cull_distance`),rendererExtensionFragDepth:u||r.has(`EXT_frag_depth`),rendererExtensionDrawBuffers:u||r.has(`WEBGL_draw_buffers`),rendererExtensionShaderTextureLod:u||r.has(`EXT_shader_texture_lod`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()}}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.isWebGL2&&s.enable(0),t.supportsVertexTextures&&s.enable(1),t.instancing&&s.enable(2),t.instancingColor&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.skinning&&s.enable(4),t.morphTargets&&s.enable(5),t.morphNormals&&s.enable(6),t.morphColors&&s.enable(7),t.premultipliedAlpha&&s.enable(8),t.shadowMapEnabled&&s.enable(9),t.useLegacyLights&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=Ar[t];n=lr.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new Ya(e,n,t,a),l.push(r)),r}function S(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:l,dispose:w}}function eo(){let e=new WeakMap;function t(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function n(t){e.delete(t)}function r(t,n,r){e.get(t)[n]=r}function i(){e=new WeakMap}return{get:t,remove:n,update:r,dispose:i}}function to(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function no(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ro(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||to),r.length>1&&r.sort(t||no),i.length>1&&i.sort(t||no)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function io(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new ro,e.set(t,[i])):n>=r.length?(i=new ro,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function ao(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new B,color:new H};break;case`SpotLight`:n={position:new B,direction:new B,color:new H,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new B,color:new H,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new B,skyColor:new H,groundColor:new H};break;case`RectAreaLight`:n={color:new H,position:new B,halfWidth:new B,halfHeight:new B}}return e[t.id]=n,n}}}function oo(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L};break;case`SpotLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L};break;case`PointLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var so=0;function co(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function lo(e,t){let n=new ao,r=oo(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)i.probe.push(new B);let a=new B,o=new V,s=new V;function c(a,o){let s=0,c=0,l=0;for(let e=0;e<9;e++)i.probe[e].set(0,0,0);let u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0;a.sort(co);let x=o===!0?Math.PI:1;for(let e=0,t=a.length;e<t;e++){let t=a[e],o=t.color,S=t.intensity,C=t.distance,w=t.shadow&&t.shadow.map?t.shadow.map.texture:null;if(t.isAmbientLight)s+=o.r*S*x,c+=o.g*S*x,l+=o.b*S*x;else if(t.isLightProbe){for(let e=0;e<9;e++)i.probe[e].addScaledVector(t.sh.coefficients[e],S);b++}else if(t.isDirectionalLight){let e=n.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*x),t.castShadow){let e=t.shadow,n=r.get(t);n.shadowBias=e.bias,n.shadowNormalBias=e.normalBias,n.shadowRadius=e.radius,n.shadowMapSize=e.mapSize,i.directionalShadow[u]=n,i.directionalShadowMap[u]=w,i.directionalShadowMatrix[u]=t.shadow.matrix,h++}i.directional[u]=e,u++}else if(t.isSpotLight){let e=n.get(t);e.position.setFromMatrixPosition(t.matrixWorld),e.color.copy(o).multiplyScalar(S*x),e.distance=C,e.coneCos=Math.cos(t.angle),e.penumbraCos=Math.cos(t.angle*(1-t.penumbra)),e.decay=t.decay,i.spot[f]=e;let a=t.shadow;if(t.map&&(i.spotLightMap[v]=t.map,v++,a.updateMatrices(t),t.castShadow&&y++),i.spotLightMatrix[f]=a.matrix,t.castShadow){let e=r.get(t);e.shadowBias=a.bias,e.shadowNormalBias=a.normalBias,e.shadowRadius=a.radius,e.shadowMapSize=a.mapSize,i.spotShadow[f]=e,i.spotShadowMap[f]=w,_++}f++}else if(t.isRectAreaLight){let e=n.get(t);e.color.copy(o).multiplyScalar(S),e.halfWidth.set(t.width*.5,0,0),e.halfHeight.set(0,t.height*.5,0),i.rectArea[p]=e,p++}else if(t.isPointLight){let e=n.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*x),e.distance=t.distance,e.decay=t.decay,t.castShadow){let e=t.shadow,n=r.get(t);n.shadowBias=e.bias,n.shadowNormalBias=e.normalBias,n.shadowRadius=e.radius,n.shadowMapSize=e.mapSize,n.shadowCameraNear=e.camera.near,n.shadowCameraFar=e.camera.far,i.pointShadow[d]=n,i.pointShadowMap[d]=w,i.pointShadowMatrix[d]=t.shadow.matrix,g++}i.point[d]=e,d++}else if(t.isHemisphereLight){let e=n.get(t);e.skyColor.copy(t.color).multiplyScalar(S*x),e.groundColor.copy(t.groundColor).multiplyScalar(S*x),i.hemi[m]=e,m++}}p>0&&(t.isWebGL2?e.has(`OES_texture_float_linear`)===!0?(i.rectAreaLTC1=W.LTC_FLOAT_1,i.rectAreaLTC2=W.LTC_FLOAT_2):(i.rectAreaLTC1=W.LTC_HALF_1,i.rectAreaLTC2=W.LTC_HALF_2):e.has(`OES_texture_float_linear`)===!0?(i.rectAreaLTC1=W.LTC_FLOAT_1,i.rectAreaLTC2=W.LTC_FLOAT_2):e.has(`OES_texture_half_float_linear`)===!0?(i.rectAreaLTC1=W.LTC_HALF_1,i.rectAreaLTC2=W.LTC_HALF_2):console.error(`THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.`)),i.ambient[0]=s,i.ambient[1]=c,i.ambient[2]=l;let S=i.hash;(S.directionalLength!==u||S.pointLength!==d||S.spotLength!==f||S.rectAreaLength!==p||S.hemiLength!==m||S.numDirectionalShadows!==h||S.numPointShadows!==g||S.numSpotShadows!==_||S.numSpotMaps!==v||S.numLightProbes!==b)&&(i.directional.length=u,i.spot.length=f,i.rectArea.length=p,i.point.length=d,i.hemi.length=m,i.directionalShadow.length=h,i.directionalShadowMap.length=h,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=h,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=_+v-y,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=b,S.directionalLength=u,S.pointLength=d,S.spotLength=f,S.rectAreaLength=p,S.hemiLength=m,S.numDirectionalShadows=h,S.numPointShadows=g,S.numSpotShadows=_,S.numSpotMaps=v,S.numLightProbes=b,i.version=so++)}function l(e,t){let n=0,r=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=i.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),a.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=i.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),a.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=i.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s.identity(),o.copy(f.matrixWorld),o.premultiply(d),s.extractRotation(o),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(s),e.halfHeight.applyMatrix4(s),l++}else if(f.isPointLight){let e=i.point[r];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),r++}else if(f.isHemisphereLight){let e=i.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:c,setupView:l,state:i}}function uo(e,t){let n=new lo(e,t),r=[],i=[];function a(){r.length=0,i.length=0}function o(e){r.push(e)}function s(e){i.push(e)}function c(e){n.setup(r,e)}function l(e){n.setupView(r,e)}return{init:a,state:{lightsArray:r,shadowsArray:i,lights:n},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function fo(e,t){let n=new WeakMap;function r(r,i=0){let a=n.get(r),o;return a===void 0?(o=new uo(e,t),n.set(r,[o])):i>=a.length?(o=new uo(e,t),a.push(o)):o=a[i],o}function i(){n=new WeakMap}return{get:r,dispose:i}}var po=class extends Sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=O,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},mo=class extends Sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ho=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,go=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _o(e,t,n){let r=new Er,i=new L,o=new L,s=new Qe,c=new po({depthPacking:k}),l=new mo,u={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new L},radius:{value:4}},vertexShader:ho,fragmentShader:go}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new Ln;h.setAttribute(`position`,new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new tr(h,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,c){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=v!==3&&this.type===3,h=v===3&&this.type!==3;for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){console.warn(`THREE.WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;i.copy(f.mapSize);let g=f.getFrameExtents();if(i.multiply(g),o.copy(f.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(o.x=Math.floor(d/g.x),i.x=o.x*g.x,f.mapSize.x=o.x),i.y>d&&(o.y=Math.floor(d/g.y),i.y=o.y*g.y,f.mapSize.y=o.y)),f.map===null||m===!0||h===!0){let e=this.type===3?{}:{minFilter:a,magFilter:a};f.map!==null&&f.map.dispose(),f.map=new et(i.x,i.y,e),f.map.texture.name=u.name+`.shadowMap`,f.camera.updateProjectionMatrix()}e.setRenderTarget(f.map),e.clear();let _=f.getViewportCount();for(let e=0;e<_;e++){let t=f.getViewport(e);s.set(o.x*t.x,o.y*t.y,o.x*t.z,o.y*t.w),p.viewport(s),f.updateMatrices(u,e),r=f.getFrustum(),x(n,c,f.camera,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&y(f,c),f.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(l,u,f)};function y(n,r){let a=t.update(g);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new et(i.x,i.y)),p.uniforms.shadow_pass.value=n.map.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,g,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],i,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function vo(e,t,n){let r=n.isWebGL2;function i(){let t=!1,n=new Qe,r=null,i=new Qe(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function a(){let t=!1,n=null,r=null,i=null;return{setTest:function(t){t?fe(e.DEPTH_TEST):N(e.DEPTH_TEST)},setMask:function(r){n!==r&&!t&&(e.depthMask(r),n=r)},setFunc:function(t){if(r!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}r=t}},setLocked:function(e){t=e},setClear:function(t){i!==t&&(e.clearDepth(t),i=t)},reset:function(){t=!1,n=null,r=null,i=null}}}function o(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?fe(e.STENCIL_TEST):N(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let s=new i,c=new a,l=new o,u=new WeakMap,d=new WeakMap,f={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new H(0,0,0),E=0,D=!1,O=null,k=null,A=null,ee=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,ne=0,re=e.getParameter(e.VERSION);re.indexOf(`WebGL`)===-1?re.indexOf(`OpenGL ES`)!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),te=ne>=2):(ne=parseFloat(/^WebGL (\d)/.exec(re)[1]),te=ne>=1);let ie=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new Qe().fromArray(oe),le=new Qe().fromArray(se);function ue(t,n,i,a){let o=new Uint8Array(4),s=e.createTexture();e.bindTexture(t,s),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let s=0;s<i;s++)r&&(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)?e.texImage3D(n,0,e.RGBA,1,1,a,0,e.RGBA,e.UNSIGNED_BYTE,o):e.texImage2D(n+s,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,o);return s}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),c.setClear(1),l.setClear(0),fe(e.DEPTH_TEST),c.setFunc(3),ye(!1),be(1),fe(e.CULL_FACE),P(0);function fe(t){f[t]!==!0&&(e.enable(t),f[t]=!0)}function N(t){f[t]!==!1&&(e.disable(t),f[t]=!1)}function pe(t,n){return p[t]!==n&&(e.bindFramebuffer(t,n),p[t]=n,r&&(t===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=n)),!0)}function me(r,i){let a=h,o=!1;if(r){if(a=m.get(i),a===void 0&&(a=[],m.set(i,a)),r.isWebGLMultipleRenderTargets){let t=r.texture;if(a.length!==t.length||a[0]!==e.COLOR_ATTACHMENT0){for(let n=0,r=t.length;n<r;n++)a[n]=e.COLOR_ATTACHMENT0+n;a.length=t.length,o=!0}}else a[0]!==e.COLOR_ATTACHMENT0&&(a[0]=e.COLOR_ATTACHMENT0,o=!0)}else a[0]!==e.BACK&&(a[0]=e.BACK,o=!0);o&&(n.isWebGL2?e.drawBuffers(a):t.get(`WEBGL_draw_buffers`).drawBuffersWEBGL(a))}function he(t){return g!==t&&(e.useProgram(t),g=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};if(r)ge[103]=e.MIN,ge[104]=e.MAX;else{let e=t.get(`EXT_blend_minmax`);e!==null&&(ge[103]=e.MIN_EXT,ge[104]=e.MAX_EXT)}let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function P(t,n,r,i,a,o,s,c,l,u){if(t===0)_===!0&&(N(e.BLEND),_=!1);else if(_===!1&&(fe(e.BLEND),_=!0),t!==5){if(t!==v||u!==D){if((y!==100||S!==100)&&(e.blendEquation(e.FUNC_ADD),y=100,S=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}b=null,x=null,C=null,w=null,T.set(0,0,0),E=0,v=t,D=u}}else a||=n,o||=r,s||=i,(n!==y||a!==S)&&(e.blendEquationSeparate(ge[n],ge[a]),y=n,S=a),(r!==b||i!==x||o!==C||s!==w)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),b=r,x=i,C=o,w=s),(c.equals(T)===!1||l!==E)&&(e.blendColor(c.r,c.g,c.b,l),T.copy(c),E=l),v=t,D=!1}function ve(t,n){t.side===2?N(e.CULL_FACE):fe(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?P(0):P(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),c.setFunc(t.depthFunc),c.setTest(t.depthTest),c.setMask(t.depthWrite),s.setMask(t.colorWrite);let i=t.stencilWrite;l.setTest(i),i&&(l.setMask(t.stencilWriteMask),l.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),l.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?fe(e.SAMPLE_ALPHA_TO_COVERAGE):N(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){O!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),O=t)}function be(t){t===0?N(e.CULL_FACE):(fe(e.CULL_FACE),t!==k&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),k=t}function F(t){t!==A&&(te&&e.lineWidth(t),A=t)}function xe(t,n,r){t?(fe(e.POLYGON_OFFSET_FILL),(ee!==n||j!==r)&&(e.polygonOffset(n,r),ee=n,j=r)):N(e.POLYGON_OFFSET_FILL)}function Se(t){t?fe(e.SCISSOR_TEST):N(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+M-1),ie!==t&&(e.activeTexture(t),ie=t)}function we(t,n,r){r===void 0&&(r=ie===null?e.TEXTURE0+M-1:ie);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(ie!==r&&(e.activeTexture(r),ie=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function Te(){let t=ae[ie];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function De(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Oe(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ke(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function je(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function I(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function L(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function R(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Me(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ne(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function Pe(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function Fe(t,n){let r=d.get(n);r===void 0&&(r=new WeakMap,d.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ie(t,n){let r=d.get(n).get(t);u.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),u.set(n,r))}function Le(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),r===!0&&(e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),f={},ie=null,ae={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new H(0,0,0),E=0,D=!1,O=null,k=null,A=null,ee=null,j=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),s.reset(),c.reset(),l.reset()}return{buffers:{color:s,depth:c,stencil:l},enable:fe,disable:N,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:P,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:F,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:De,texImage2D:R,texImage3D:Me,updateUBOMapping:Fe,uniformBlockBinding:Ie,texStorage2D:I,texStorage3D:L,texSubImage2D:Oe,texSubImage3D:ke,compressedTexSubImage2D:Ae,compressedTexSubImage3D:je,scissor:Ne,viewport:Pe,reset:Le}}function yo(e,t,d,p,m,g,_){let v=m.isWebGL2,y=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,b=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap,S,C=new WeakMap,w=!1;try{w=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function T(e,t){return w?new OffscreenCanvas(e,t):Pe(`canvas`)}function E(e,t,n,r){let i=1;if((e.width>r||e.height>r)&&(i=r/Math.max(e.width,e.height)),i<1||t===!0){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let r=t?Oe:Math.floor,a=r(i*e.width),o=r(i*e.height);S===void 0&&(S=T(a,o));let s=n?T(a,o):S;return s.width=a,s.height=o,s.getContext(`2d`).drawImage(e,0,0,a,o),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+e.width+`x`+e.height+`) to (`+a+`x`+o+`).`),s}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+e.width+`x`+e.height+`).`),e}return e}function D(e){return Ee(e.width)&&Ee(e.height)}function O(e){return v?!1:e.wrapS!==1001||e.wrapT!==1001||e.minFilter!==1003&&e.minFilter!==1006}function k(e,t){return e.generateMipmaps&&t&&e.minFilter!==1003&&e.minFilter!==1006}function A(t){e.generateMipmap(t)}function ee(n,r,i,a,o=!1){if(v===!1)return r;if(n!==null){if(e[n]!==void 0)return e[n];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let s=r;if(r===e.RED&&(i===e.FLOAT&&(s=e.R32F),i===e.HALF_FLOAT&&(s=e.R16F),i===e.UNSIGNED_BYTE&&(s=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.R8UI),i===e.UNSIGNED_SHORT&&(s=e.R16UI),i===e.UNSIGNED_INT&&(s=e.R32UI),i===e.BYTE&&(s=e.R8I),i===e.SHORT&&(s=e.R16I),i===e.INT&&(s=e.R32I)),r===e.RG&&(i===e.FLOAT&&(s=e.RG32F),i===e.HALF_FLOAT&&(s=e.RG16F),i===e.UNSIGNED_BYTE&&(s=e.RG8)),r===e.RGBA){let t=o?te:He.getTransfer(a);i===e.FLOAT&&(s=e.RGBA32F),i===e.HALF_FLOAT&&(s=e.RGBA16F),i===e.UNSIGNED_BYTE&&(s=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(s=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(s=e.RGB5_A1)}return(s===e.R16F||s===e.R32F||s===e.RG16F||s===e.RG32F||s===e.RGBA16F||s===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),s}function j(e,t,n){return k(e,n)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function M(t){return t===1003||t===1004||t===1005?e.NEAREST:e.LINEAR}function ne(e){let t=e.target;t.removeEventListener(`dispose`,ne),ie(t),t.isVideoTexture&&x.delete(t)}function re(e){let t=e.target;t.removeEventListener(`dispose`,re),se(t)}function ie(e){let t=p.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=C.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&ae(e),Object.keys(r).length===0&&C.delete(n)}p.remove(e)}function ae(t){let n=p.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=C.get(r);delete i[n.__cacheKey],_.memory.textures--}function se(t){let n=t.texture,r=p.get(t),i=p.get(n);if(i.__webglTexture!==void 0&&(e.deleteTexture(i.__webglTexture),_.memory.textures--),t.depthTexture&&t.depthTexture.dispose(),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(r.__webglFramebuffer[t]))for(let n=0;n<r.__webglFramebuffer[t].length;n++)e.deleteFramebuffer(r.__webglFramebuffer[t][n]);else e.deleteFramebuffer(r.__webglFramebuffer[t]);r.__webglDepthbuffer&&e.deleteRenderbuffer(r.__webglDepthbuffer[t])}else{if(Array.isArray(r.__webglFramebuffer))for(let t=0;t<r.__webglFramebuffer.length;t++)e.deleteFramebuffer(r.__webglFramebuffer[t]);else e.deleteFramebuffer(r.__webglFramebuffer);if(r.__webglDepthbuffer&&e.deleteRenderbuffer(r.__webglDepthbuffer),r.__webglMultisampledFramebuffer&&e.deleteFramebuffer(r.__webglMultisampledFramebuffer),r.__webglColorRenderbuffer)for(let t=0;t<r.__webglColorRenderbuffer.length;t++)r.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(r.__webglColorRenderbuffer[t]);r.__webglDepthRenderbuffer&&e.deleteRenderbuffer(r.__webglDepthRenderbuffer)}if(t.isWebGLMultipleRenderTargets)for(let t=0,r=n.length;t<r;t++){let r=p.get(n[t]);r.__webglTexture&&(e.deleteTexture(r.__webglTexture),_.memory.textures--),p.remove(n[t])}p.remove(n),p.remove(t)}let ce=0;function le(){ce=0}function ue(){let e=ce;return e>=m.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+m.maxTextures),ce+=1,e}function de(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function fe(t,n){let r=p.get(t);if(t.isVideoTexture&&I(t),t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{ye(r,t,n);return}}d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function N(t,n){let r=p.get(t);t.version>0&&r.__version!==t.version?ye(r,t,n):d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n)}function pe(t,n){let r=p.get(t);t.version>0&&r.__version!==t.version?ye(r,t,n):d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function me(t,n){let r=p.get(t);t.version>0&&r.__version!==t.version?be(r,t,n):d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let he={[n]:e.REPEAT,[r]:e.CLAMP_TO_EDGE,[i]:e.MIRRORED_REPEAT},ge={[a]:e.NEAREST,[o]:e.NEAREST_MIPMAP_NEAREST,[s]:e.NEAREST_MIPMAP_LINEAR,[c]:e.LINEAR,[l]:e.LINEAR_MIPMAP_NEAREST,[u]:e.LINEAR_MIPMAP_LINEAR},_e={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function P(n,r,i){if(i?(e.texParameteri(n,e.TEXTURE_WRAP_S,he[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,he[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,he[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ge[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ge[r.minFilter])):(e.texParameteri(n,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(n,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),(r.wrapS!==1001||r.wrapT!==1001)&&console.warn(`THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.`),e.texParameteri(n,e.TEXTURE_MAG_FILTER,M(r.magFilter)),e.texParameteri(n,e.TEXTURE_MIN_FILTER,M(r.minFilter)),r.minFilter!==1003&&r.minFilter!==1006&&console.warn(`THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.`)),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,_e[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){let i=t.get(`EXT_texture_filter_anisotropic`);if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1||v===!1&&r.type===1016&&t.has(`OES_texture_half_float_linear`)===!1)return;(r.anisotropy>1||p.get(r).__currentAnisotropy)&&(e.texParameterf(n,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,m.getMaxAnisotropy())),p.get(r).__currentAnisotropy=r.anisotropy)}}function ve(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ne));let i=n.source,a=C.get(i);a===void 0&&(a={},C.set(i,a));let o=de(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},_.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ae(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function ye(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=ve(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=p.get(o);if(o.version!==s.__version||a===!0){d.activeTexture(e.TEXTURE0+r);let t=He.getPrimaries(He.workingColorSpace),c=n.colorSpace===``?null:He.getPrimaries(n.colorSpace),l=n.colorSpace===``||t===c?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,l);let u=O(n)&&D(n.image)===!1,p=E(n.image,u,!1,m.maxTextureSize);p=L(n,p);let _=D(p)||v,y=g.convert(n.format,n.colorSpace),b=g.convert(n.type),x=ee(n.internalFormat,y,b,n.colorSpace,n.isVideoTexture);P(i,n,_);let S,C=n.mipmaps,w=v&&n.isVideoTexture!==!0&&x!==36196,T=s.__version===void 0||a===!0,M=j(n,p,_);if(n.isDepthTexture)x=e.DEPTH_COMPONENT,v?x=n.type===1015?e.DEPTH_COMPONENT32F:n.type===1014?e.DEPTH_COMPONENT24:n.type===1020?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT16:n.type===1015&&console.error(`WebGLRenderer: Floating point depth texture requires WebGL2.`),n.format===1026&&x===e.DEPTH_COMPONENT&&n.type!==1012&&n.type!==1014&&(console.warn(`THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.`),n.type=f,b=g.convert(n.type)),n.format===1027&&x===e.DEPTH_COMPONENT&&(x=e.DEPTH_STENCIL,n.type!==1020&&(console.warn(`THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.`),n.type=h,b=g.convert(n.type))),T&&(w?d.texStorage2D(e.TEXTURE_2D,1,x,p.width,p.height):d.texImage2D(e.TEXTURE_2D,0,x,p.width,p.height,0,y,b,null));else if(n.isDataTexture){if(C.length>0&&_){w&&T&&d.texStorage2D(e.TEXTURE_2D,M,x,C[0].width,C[0].height);for(let t=0,n=C.length;t<n;t++)S=C[t],w?d.texSubImage2D(e.TEXTURE_2D,t,0,0,S.width,S.height,y,b,S.data):d.texImage2D(e.TEXTURE_2D,t,x,S.width,S.height,0,y,b,S.data);n.generateMipmaps=!1}else w?(T&&d.texStorage2D(e.TEXTURE_2D,M,x,p.width,p.height),d.texSubImage2D(e.TEXTURE_2D,0,0,0,p.width,p.height,y,b,p.data)):d.texImage2D(e.TEXTURE_2D,0,x,p.width,p.height,0,y,b,p.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){w&&T&&d.texStorage3D(e.TEXTURE_2D_ARRAY,M,x,C[0].width,C[0].height,p.depth);for(let t=0,r=C.length;t<r;t++)S=C[t],n.format===1023?w?d.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,S.width,S.height,p.depth,y,b,S.data):d.texImage3D(e.TEXTURE_2D_ARRAY,t,x,S.width,S.height,p.depth,0,y,b,S.data):y===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):w?d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,S.width,S.height,p.depth,y,S.data,0,0):d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,x,S.width,S.height,p.depth,0,S.data,0,0)}else{w&&T&&d.texStorage2D(e.TEXTURE_2D,M,x,C[0].width,C[0].height);for(let t=0,r=C.length;t<r;t++)S=C[t],n.format===1023?w?d.texSubImage2D(e.TEXTURE_2D,t,0,0,S.width,S.height,y,b,S.data):d.texImage2D(e.TEXTURE_2D,t,x,S.width,S.height,0,y,b,S.data):y===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):w?d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,S.width,S.height,y,S.data):d.compressedTexImage2D(e.TEXTURE_2D,t,x,S.width,S.height,0,S.data)}}else if(n.isDataArrayTexture)w?(T&&d.texStorage3D(e.TEXTURE_2D_ARRAY,M,x,p.width,p.height,p.depth),d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,p.width,p.height,p.depth,y,b,p.data)):d.texImage3D(e.TEXTURE_2D_ARRAY,0,x,p.width,p.height,p.depth,0,y,b,p.data);else if(n.isData3DTexture)w?(T&&d.texStorage3D(e.TEXTURE_3D,M,x,p.width,p.height,p.depth),d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,p.width,p.height,p.depth,y,b,p.data)):d.texImage3D(e.TEXTURE_3D,0,x,p.width,p.height,p.depth,0,y,b,p.data);else if(n.isFramebufferTexture){if(T){if(w)d.texStorage2D(e.TEXTURE_2D,M,x,p.width,p.height);else{let t=p.width,n=p.height;for(let r=0;r<M;r++)d.texImage2D(e.TEXTURE_2D,r,x,t,n,0,y,b,null),t>>=1,n>>=1}}}else if(C.length>0&&_){w&&T&&d.texStorage2D(e.TEXTURE_2D,M,x,C[0].width,C[0].height);for(let t=0,n=C.length;t<n;t++)S=C[t],w?d.texSubImage2D(e.TEXTURE_2D,t,0,0,y,b,S):d.texImage2D(e.TEXTURE_2D,t,x,y,b,S);n.generateMipmaps=!1}else w?(T&&d.texStorage2D(e.TEXTURE_2D,M,x,p.width,p.height),d.texSubImage2D(e.TEXTURE_2D,0,0,0,y,b,p)):d.texImage2D(e.TEXTURE_2D,0,x,y,b,p);k(n,_)&&A(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function be(t,n,r){if(n.image.length!==6)return;let i=ve(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=p.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=He.getPrimaries(He.workingColorSpace),s=n.colorSpace===``?null:He.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=E(n.image[e],!1,!0,m.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=L(n,f[e]);let p=f[0],h=D(p)||v,_=g.convert(n.format,n.colorSpace),y=g.convert(n.type),b=ee(n.internalFormat,_,y,n.colorSpace),x=v&&n.isVideoTexture!==!0,S=o.__version===void 0||i===!0,C=j(n,p,h);P(e.TEXTURE_CUBE_MAP,n,h);let w;if(l){x&&S&&d.texStorage2D(e.TEXTURE_CUBE_MAP,C,b,p.width,p.height);for(let t=0;t<6;t++){w=f[t].mipmaps;for(let r=0;r<w.length;r++){let i=w[r];n.format===1023?x?d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,_,y,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,b,i.width,i.height,0,_,y,i.data):_===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):x?d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,_,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,b,i.width,i.height,0,i.data)}}}else{w=n.mipmaps,x&&S&&(w.length>0&&C++,d.texStorage2D(e.TEXTURE_CUBE_MAP,C,b,f[0].width,f[0].height));for(let t=0;t<6;t++)if(u){x?d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,_,y,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,b,f[t].width,f[t].height,0,_,y,f[t].data);for(let n=0;n<w.length;n++){let r=w[n].image[t].image;x?d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,_,y,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,b,r.width,r.height,0,_,y,r.data)}}else{x?d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,_,y,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,b,_,y,f[t]);for(let n=0;n<w.length;n++){let r=w[n];x?d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,_,y,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,b,_,y,r.image[t])}}}k(n,h)&&A(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function F(t,n,r,i,a,o){let s=g.convert(r.format,r.colorSpace),c=g.convert(r.type),l=ee(r.internalFormat,s,c,r.colorSpace);if(!p.get(n).__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),je(n)?y.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.get(r).__webglTexture,0,Ae(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.get(r).__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function xe(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer&&!n.stencilBuffer){let i=v===!0?e.DEPTH_COMPONENT24:e.DEPTH_COMPONENT16;if(r||je(n)){let t=n.depthTexture;t&&t.isDepthTexture&&(t.type===1015?i=e.DEPTH_COMPONENT32F:t.type===1014&&(i=e.DEPTH_COMPONENT24));let r=Ae(n);je(n)?y.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,r,i,n.width,n.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,r,i,n.width,n.height)}else e.renderbufferStorage(e.RENDERBUFFER,i,n.width,n.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,t)}else if(n.depthBuffer&&n.stencilBuffer){let i=Ae(n);r&&je(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,i,e.DEPTH24_STENCIL8,n.width,n.height):je(n)?y.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,i,e.DEPTH24_STENCIL8,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,t)}else{let t=n.isWebGLMultipleRenderTargets===!0?n.texture:[n.texture];for(let i=0;i<t.length;i++){let a=t[i],o=g.convert(a.format,a.colorSpace),s=g.convert(a.type),c=ee(a.internalFormat,o,s,a.colorSpace),l=Ae(n);r&&je(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,n.width,n.height):je(n)?y.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,l,c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Se(t,n){if(n&&n.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);(!p.get(n.depthTexture).__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),fe(n.depthTexture,0);let r=p.get(n.depthTexture).__webglTexture,i=Ae(n);if(n.depthTexture.format===1026)je(n)?y.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,r,0,i):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,r,0);else if(n.depthTexture.format===1027)je(n)?y.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,r,0,i):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,r,0);else throw Error(`Unknown depthTexture format`)}function Ce(t){let n=p.get(t),r=t.isWebGLCubeRenderTarget===!0;if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)throw Error(`target.depthTexture not supported in Cube render targets`);Se(n.__webglFramebuffer,t)}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]=e.createRenderbuffer(),xe(n.__webglDepthbuffer[r],t,!1)}else d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer=e.createRenderbuffer(),xe(n.__webglDepthbuffer,t,!1);d.bindFramebuffer(e.FRAMEBUFFER,null)}function we(t,n,r){let i=p.get(t);n!==void 0&&F(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&Ce(t)}function Te(t){let n=t.texture,r=p.get(t),i=p.get(n);t.addEventListener(`dispose`,re),t.isWebGLMultipleRenderTargets!==!0&&(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,_.memory.textures++);let a=t.isWebGLCubeRenderTarget===!0,o=t.isWebGLMultipleRenderTargets===!0,s=D(t)||v;if(a){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(v&&n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(v&&n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(o){if(m.drawBuffers){let n=t.texture;for(let t=0,r=n.length;t<r;t++){let r=p.get(n[t]);r.__webglTexture===void 0&&(r.__webglTexture=e.createTexture(),_.memory.textures++)}}else console.warn(`THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.`)}if(v&&t.samples>0&&je(t)===!1){let i=o?n:[n];r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<i.length;n++){let a=i[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=g.convert(a.format,a.colorSpace),s=g.convert(a.type),c=ee(a.internalFormat,o,s,a.colorSpace,t.isXRRenderTarget===!0),l=Ae(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),xe(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(a){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),P(e.TEXTURE_CUBE_MAP,n,s);for(let i=0;i<6;i++)if(v&&n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)F(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else F(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);k(n,s)&&A(e.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){let n=t.texture;for(let i=0,a=n.length;i<a;i++){let a=n[i],o=p.get(a);d.bindTexture(e.TEXTURE_2D,o.__webglTexture),P(e.TEXTURE_2D,a,s),F(r.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,e.TEXTURE_2D,0),k(a,s)&&A(e.TEXTURE_2D)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(v?a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY:console.error(`THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.`)),d.bindTexture(a,i.__webglTexture),P(a,n,s),v&&n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)F(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else F(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);k(n,s)&&A(a),d.unbindTexture()}t.depthBuffer&&Ce(t)}function De(t){let n=D(t)||v,r=t.isWebGLMultipleRenderTargets===!0?t.texture:[t.texture];for(let i=0,a=r.length;i<a;i++){let a=r[i];if(k(a,n)){let n=t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,r=p.get(a).__webglTexture;d.bindTexture(n,r),A(n),d.unbindTexture()}}}function ke(t){if(v&&t.samples>0&&je(t)===!1){let n=t.isWebGLMultipleRenderTargets?t.texture:[t.texture],r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=[],s=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,c=p.get(t),l=t.isWebGLMultipleRenderTargets===!0;if(l)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,c.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,c.__webglMultisampledFramebuffer),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglFramebuffer);for(let u=0;u<n.length;u++){o.push(e.COLOR_ATTACHMENT0+u),t.depthBuffer&&o.push(s);let d=c.__ignoreDepthValues!==void 0&&c.__ignoreDepthValues;if(d===!1&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),l&&e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,c.__webglColorRenderbuffer[u]),d===!0&&(e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[s]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[s])),l){let t=p.get(n[u]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),b&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,o)}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),l)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,c.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,c.__webglColorRenderbuffer[t]);let r=p.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglMultisampledFramebuffer)}}function Ae(e){return Math.min(m.maxSamples,e.samples)}function je(e){let n=p.get(e);return v&&e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function I(e){let t=_.render.frame;x.get(e)!==t&&(x.set(e,t),e.update())}function L(e,n){let r=e.colorSpace,i=e.format,a=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||e.format===1035||r!==`srgb-linear`&&r!==``&&(He.getTransfer(r)===`srgb`?v===!1?t.has(`EXT_sRGB`)===!0&&i===1023?(e.format=oe,e.minFilter=c,e.generateMipmaps=!1):n=Ke.sRGBToLinear(n):(i!==1023||a!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,r)),n}this.allocateTextureUnit=ue,this.resetTextureUnits=le,this.setTexture2D=fe,this.setTexture2DArray=N,this.setTexture3D=pe,this.setTextureCube=me,this.rebindTextures=we,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=F,this.useMultisampledRTT=je}function bo(e,t,n){let r=n.isWebGL2;function i(n,i=``){let a,o=He.getTransfer(i);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return r?e.HALF_FLOAT:(a=t.get(`OES_texture_half_float`),a===null?null:a.HALF_FLOAT_OES);if(n===1021)return e.ALPHA;if(n===1023)return e.RGBA;if(n===1024)return e.LUMINANCE;if(n===1025)return e.LUMINANCE_ALPHA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1035)return a=t.get(`EXT_sRGB`),a===null?null:a.SRGB_ALPHA_EXT;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(o===`srgb`){if(a=t.get(`WEBGL_compressed_texture_s3tc_srgb`),a!==null){if(n===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(a=t.get(`WEBGL_compressed_texture_s3tc`),a!==null){if(n===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(a=t.get(`WEBGL_compressed_texture_pvrtc`),a!==null){if(n===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196)return a=t.get(`WEBGL_compressed_texture_etc1`),a===null?null:a.COMPRESSED_RGB_ETC1_WEBGL;if(n===37492||n===37496){if(a=t.get(`WEBGL_compressed_texture_etc`),a!==null){if(n===37492)return o===`srgb`?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===37496)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(a=t.get(`WEBGL_compressed_texture_astc`),a!==null){if(n===37808)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(a=t.get(`EXT_texture_compression_bptc`),a!==null){if(n===36492)return o===`srgb`?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(a=t.get(`EXT_texture_compression_rgtc`),a!==null){if(n===36492)return a.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?r?e.UNSIGNED_INT_24_8:(a=t.get(`WEBGL_depth_texture`),a===null?null:a.UNSIGNED_INT_24_8_WEBGL):e[n]===void 0?null:e[n]}return{convert:i}}var xo=class extends mr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},So=class extends nn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Co={type:`move`},wo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new So,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new So,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new So,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Co)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new So;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},To=class extends ce{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,p=null,m=null,y=null,b=t.getContextAttributes(),x=null,S=null,C=[],w=[],T=new L,E=null,D=new mr;D.layers.enable(1),D.viewport=new Qe;let O=new mr;O.layers.enable(2),O.viewport=new Qe;let k=[D,O],A=new xo;A.layers.enable(1),A.layers.enable(2);let ee=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new wo,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new wo,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new wo,C[e]=t),t.getHandSpace()};function M(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function te(){r.removeEventListener(`select`,M),r.removeEventListener(`selectstart`,M),r.removeEventListener(`selectend`,M),r.removeEventListener(`squeeze`,M),r.removeEventListener(`squeezestart`,M),r.removeEventListener(`squeezeend`,M),r.removeEventListener(`end`,te),r.removeEventListener(`inputsourceschange`,ne);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}ee=null,j=null,e.setRenderTarget(x),m=null,p=null,u=null,r=null,S=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return p===null?m:p},this.getBinding=function(){return u},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,M),r.addEventListener(`selectstart`,M),r.addEventListener(`selectend`,M),r.addEventListener(`squeeze`,M),r.addEventListener(`squeezestart`,M),r.addEventListener(`squeezeend`,M),r.addEventListener(`end`,te),r.addEventListener(`inputsourceschange`,ne),b.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let n={antialias:r.renderState.layers!==void 0||b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};m=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new et(m.framebufferWidth,m.framebufferHeight,{format:g,type:d,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?v:_,a=b.stencil?h:f);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=new XRWebGLBinding(r,t),p=u.createProjectionLayer(s),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),S=new et(p.textureWidth,p.textureHeight,{format:g,type:d,depthTexture:new pi(p.textureWidth,p.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});let c=e.properties.get(S);c.__ignoreDepthValues=p.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ue.setContext(r),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ne(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let re=new B,ie=new B;function ae(e,t,n){re.setFromMatrixPosition(t.matrixWorld),ie.setFromMatrixPosition(n.matrixWorld);let r=re.distanceTo(ie),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert();let g=o+m,_=s+m,v=f-h,y=p+(r-h),b=c*s/_*g,x=l*s/_*g;e.projectionMatrix.makePerspective(v,y,b,x,g,_),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}function oe(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;A.near=O.near=D.near=e.near,A.far=O.far=D.far=e.far,(ee!==A.near||j!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),ee=A.near,j=A.far);let t=e.parent,n=A.cameras;oe(A,t);for(let e=0;e<n.length;e++)oe(n[e],t);n.length===2?ae(A,D,O):A.projectionMatrix.copy(D.projectionMatrix),se(e,A,t)};function se(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=fe*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(p!==null||m!==null)return s},this.setFoveation=function(e){s=e,p!==null&&(p.fixedFoveation=e),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=e)};let ce=null;function le(t,r){if(l=r.getViewerPose(c||a),y=r,l!==null){let t=l.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let n=!1;t.length!==A.cameras.length&&(A.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(m!==null)a=m.getViewport(i);else{let t=u.getViewSubImage(p,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(S,t.colorTexture,p.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(S))}let o=k[r];o===void 0&&(o=new mr,o.layers.enable(r),o.viewport=new Qe,k[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),n===!0&&A.cameras.push(o)}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,r,c||a)}ce&&ce(t,r),r.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:r}),y=null}let ue=new Dr;ue.setAnimationLoop(le),this.setAnimationLoop=function(e){ce=e},this.dispose=function(){}}};function Eo(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,cr(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(r,i){r.opacity.value=i.opacity,i.color&&r.diffuse.value.copy(i.color),i.emissive&&r.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),i.map&&(r.map.value=i.map,n(i.map,r.mapTransform)),i.alphaMap&&(r.alphaMap.value=i.alphaMap,n(i.alphaMap,r.alphaMapTransform)),i.bumpMap&&(r.bumpMap.value=i.bumpMap,n(i.bumpMap,r.bumpMapTransform),r.bumpScale.value=i.bumpScale,i.side===1&&(r.bumpScale.value*=-1)),i.normalMap&&(r.normalMap.value=i.normalMap,n(i.normalMap,r.normalMapTransform),r.normalScale.value.copy(i.normalScale),i.side===1&&r.normalScale.value.negate()),i.displacementMap&&(r.displacementMap.value=i.displacementMap,n(i.displacementMap,r.displacementMapTransform),r.displacementScale.value=i.displacementScale,r.displacementBias.value=i.displacementBias),i.emissiveMap&&(r.emissiveMap.value=i.emissiveMap,n(i.emissiveMap,r.emissiveMapTransform)),i.specularMap&&(r.specularMap.value=i.specularMap,n(i.specularMap,r.specularMapTransform)),i.alphaTest>0&&(r.alphaTest.value=i.alphaTest);let a=t.get(i).envMap;if(a&&(r.envMap.value=a,r.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=i.reflectivity,r.ior.value=i.ior,r.refractionRatio.value=i.refractionRatio),i.lightMap){r.lightMap.value=i.lightMap;let t=e._useLegacyLights===!0?Math.PI:1;r.lightMapIntensity.value=i.lightMapIntensity*t,n(i.lightMap,r.lightMapTransform)}i.aoMap&&(r.aoMap.value=i.aoMap,r.aoMapIntensity.value=i.aoMapIntensity,n(i.aoMap,r.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,r){e.metalness.value=r.metalness,r.metalnessMap&&(e.metalnessMap.value=r.metalnessMap,n(r.metalnessMap,e.metalnessMapTransform)),e.roughness.value=r.roughness,r.roughnessMap&&(e.roughnessMap.value=r.roughnessMap,n(r.roughnessMap,e.roughnessMapTransform)),t.get(r).envMap&&(e.envMapIntensity.value=r.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Do(e,t,n,r){let i={},a={},o=[],s=n.isWebGL2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16;o!==0&&16-o<a.boundary&&(n+=16-o),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var Oo=class{constructor(e={}){let{canvas:t=Fe(),context:n=null,depth:r=!0,stencil:i=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;p=n===null?a:n.getContextAttributes().alpha;let h=new Uint32Array(4),g=new Int32Array(4),_=null,v=null,y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=A,this._useLegacyLights=!1,this.toneMapping=0,this.toneMappingExposure=1;let x=this,S=!1,C=0,w=0,T=null,E=-1,D=null,O=new Qe,k=new Qe,j=null,M=new H(0),te=0,ne=t.width,re=t.height,ie=1,ae=null,oe=null,se=new Qe(0,0,ne,re),ce=new Qe(0,0,ne,re),le=!1,ue=new Er,de=!1,fe=!1,N=null,pe=new V,me=new L,he=new B,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return T===null?ie:1}let P=n;function ve(e,n){for(let r=0;r<e.length;r++){let i=e[r],a=t.getContext(i,n);if(a!==null)return a}return null}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r160`),t.addEventListener(`webglcontextlost`,We,!1),t.addEventListener(`webglcontextrestored`,Ge,!1),t.addEventListener(`webglcontextcreationerror`,Ke,!1),P===null){let t=[`webgl2`,`webgl`,`experimental-webgl`];if(x.isWebGL1Renderer===!0&&t.shift(),P=ve(t,e),P===null)throw ve(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}typeof WebGLRenderingContext<`u`&&P instanceof WebGLRenderingContext&&console.warn(`THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163.`),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let ye,be,F,xe,Se,Ce,we,Te,Ee,De,ke,Ae,je,I,R,Me,Ne,Pe,Ie,Le,Re,ze,Be,Ve;function He(){ye=new ai(P),be=new Fr(P,ye,e),ye.init(be),ze=new bo(P,ye,be),F=new vo(P,ye,be),xe=new ci(P),Se=new eo,Ce=new yo(P,ye,F,Se,be,ze,xe),we=new Lr(x),Te=new ii(x),Ee=new Or(P,be),Be=new Nr(P,ye,Ee,be),De=new oi(P,Ee,xe,Be),ke=new fi(P,De,Ee,xe),Ie=new di(P,be,Ce),Me=new Ir(Se),Ae=new $a(x,we,Te,ye,be,Be,Me),je=new Eo(x,Se),I=new io,R=new fo(ye,be),Pe=new Mr(x,we,Te,F,ke,p,s),Ne=new _o(x,ke,be),Ve=new Do(P,xe,be,F),Le=new Pr(P,ye,xe,be),Re=new si(P,ye,xe,be),xe.programs=Ae.programs,x.capabilities=be,x.extensions=ye,x.properties=Se,x.renderLists=I,x.shadowMap=Ne,x.state=F,x.info=xe}He();let Ue=new To(x,P);this.xr=Ue,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=ye.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ye.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(e){e!==void 0&&(ie=e,this.setSize(ne,re,!1))},this.getSize=function(e){return e.set(ne,re)},this.setSize=function(e,n,r=!0){Ue.isPresenting?console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`):(ne=e,re=n,t.width=Math.floor(e*ie),t.height=Math.floor(n*ie),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ne*ie,re*ie).floor()},this.setDrawingBufferSize=function(e,n,r){ne=e,re=n,ie=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(O)},this.getViewport=function(e){return e.copy(se)},this.setViewport=function(e,t,n,r){e.isVector4?se.set(e.x,e.y,e.z,e.w):se.set(e,t,n,r),F.viewport(O.copy(se).multiplyScalar(ie).floor())},this.getScissor=function(e){return e.copy(ce)},this.setScissor=function(e,t,n,r){e.isVector4?ce.set(e.x,e.y,e.z,e.w):ce.set(e,t,n,r),F.scissor(k.copy(ce).multiplyScalar(ie).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(e){F.setScissorTest(le=e)},this.setOpaqueSort=function(e){ae=e},this.setTransparentSort=function(e){oe=e},this.getClearColor=function(e){return e.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(T!==null){let t=T.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=T.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=Pe.getClearColor(),r=Pe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(h[0]=i,h[1]=a,h[2]=o,h[3]=r,P.clearBufferuiv(P.COLOR,0,h)):(g[0]=i,g[1]=a,g[2]=o,g[3]=r,P.clearBufferiv(P.COLOR,0,g))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,We,!1),t.removeEventListener(`webglcontextrestored`,Ge,!1),t.removeEventListener(`webglcontextcreationerror`,Ke,!1),I.dispose(),R.dispose(),Se.dispose(),we.dispose(),Te.dispose(),ke.dispose(),Be.dispose(),Ve.dispose(),Ae.dispose(),Ue.dispose(),Ue.removeEventListener(`sessionstart`,tt),Ue.removeEventListener(`sessionend`,nt),N&&=(N.dispose(),null),z.stop()};function We(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),S=!0}function Ge(){console.log(`THREE.WebGLRenderer: Context Restored.`),S=!1;let e=xe.autoReset,t=Ne.enabled,n=Ne.autoUpdate,r=Ne.needsUpdate,i=Ne.type;He(),xe.autoReset=e,Ne.enabled=t,Ne.autoUpdate=n,Ne.needsUpdate=r,Ne.type=i}function Ke(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function qe(e){let t=e.target;t.removeEventListener(`dispose`,qe),Je(t)}function Je(e){Ye(e),Se.remove(e)}function Ye(e){let t=Se.get(e).programs;t!==void 0&&(t.forEach(function(e){Ae.releaseProgram(e)}),e.isShaderMaterial&&Ae.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ge);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=dt(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=De.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Be.setup(i,r,s,n,c);let h,g=Le;if(c!==null&&(h=Ee.get(c),g=Re,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*_e()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*_e()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh)g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Xe(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,ct(e,t,n),e.side=0,e.needsUpdate=!0,ct(e,t,n),e.side=2):ct(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),v=R.get(n),v.init(),b.push(v),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(v.pushLight(e),e.castShadow&&v.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(v.pushLight(e),e.castShadow&&v.pushShadow(e))}),v.setupLights(x._useLegacyLights);let r=new Set;return e.traverse(function(e){let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Xe(a,n,e),r.add(a)}else Xe(t,n,e),r.add(t)}}),b.pop(),v=null,r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){Se.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}ye.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Ze=null;function $e(e){Ze&&Ze(e)}function tt(){z.stop()}function nt(){z.start()}let z=new Dr;z.setAnimationLoop($e),typeof self<`u`&&z.setContext(self),this.setAnimationLoop=function(e){Ze=e,Ue.setAnimationLoop(e),e===null?z.stop():z.start()},Ue.addEventListener(`sessionstart`,tt),Ue.addEventListener(`sessionend`,nt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(S===!0)return;e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(t),t=Ue.getCamera()),e.isScene===!0&&e.onBeforeRender(x,e,t,T),v=R.get(e,b.length),v.init(),b.push(v),pe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ue.setFromProjectionMatrix(pe),fe=this.localClippingEnabled,de=Me.init(this.clippingPlanes,fe),_=I.get(e,y.length),_.init(),y.push(_),rt(e,t,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(ae,oe),this.info.render.frame++,de===!0&&Me.beginShadows();let n=v.state.shadowsArray;if(Ne.render(n,e,t),de===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),Pe.render(_,e),v.setupLights(x._useLegacyLights),t.isArrayCamera){let n=t.cameras;for(let t=0,r=n.length;t<r;t++){let r=n[t];it(_,e,r,r.viewport)}}else it(_,e,t);T!==null&&(Ce.updateMultisampleRenderTarget(T),Ce.updateRenderTargetMipmap(T)),e.isScene===!0&&e.onAfterRender(x,e,t),Be.resetDefaultState(),E=-1,D=null,b.pop(),v=b.length>0?b[b.length-1]:null,y.pop(),_=y.length>0?y[y.length-1]:null};function rt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)v.pushLight(e),e.castShadow&&v.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||ue.intersectsSprite(e)){r&&he.setFromMatrixPosition(e.matrixWorld).applyMatrix4(pe);let t=ke.update(e),i=e.material;i.visible&&_.push(e,t,i,n,he.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||ue.intersectsObject(e))){let t=ke.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),he.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),he.copy(e.boundingSphere.center)),he.applyMatrix4(e.matrixWorld).applyMatrix4(pe)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&_.push(e,t,s,n,he.z,o)}}else i.visible&&_.push(e,t,i,n,he.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)rt(i[e],t,n,r)}function it(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;v.setupLightsView(n),de===!0&&Me.setGlobalState(x.clippingPlanes,n),a.length>0&&at(i,a,t,n),r&&F.viewport(O.copy(r)),i.length>0&&ot(i,t,n),a.length>0&&ot(a,t,n),o.length>0&&ot(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function at(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;let i=be.isWebGL2;N===null&&(N=new et(1,1,{generateMipmaps:!0,type:ye.has(`EXT_color_buffer_half_float`)?m:d,minFilter:u,samples:i?4:0})),x.getDrawingBufferSize(me),i?N.setSize(me.x,me.y):N.setSize(Oe(me.x),Oe(me.y));let a=x.getRenderTarget();x.setRenderTarget(N),x.getClearColor(M),te=x.getClearAlpha(),te<1&&x.setClearColor(16777215,.5),x.clear();let o=x.toneMapping;x.toneMapping=0,ot(e,n,r),Ce.updateMultisampleRenderTarget(N),Ce.updateRenderTargetMipmap(N);let s=!1;for(let e=0,i=t.length;e<i;e++){let i=t[e],a=i.object,o=i.geometry,c=i.material,l=i.group;if(c.side===2&&a.layers.test(r.layers)){let e=c.side;c.side=1,c.needsUpdate=!0,st(a,n,r,o,c,l),c.side=e,c.needsUpdate=!0,s=!0}}s===!0&&(Ce.updateMultisampleRenderTarget(N),Ce.updateRenderTargetMipmap(N)),x.setRenderTarget(a),x.setClearColor(M,te),x.toneMapping=o}function ot(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&st(o,t,n,s,c,l)}}function st(e,t,n,r,i,a){e.onBeforeRender(x,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(x,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,x.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,x.renderBufferDirect(n,t,r,i,e,a),i.side=2):x.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(x,t,n,r,i,a)}function ct(e,t,n){t.isScene!==!0&&(t=ge);let r=Se.get(e),i=v.state.lights,a=v.state.shadowsArray,o=i.state.version,s=Ae.getParameters(e,i.state,a,t,n),c=Ae.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?Te:we).get(e.envMap||r.environment),l===void 0&&(e.addEventListener(`dispose`,qe),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return ut(e,s),u}else s.uniforms=Ae.getUniforms(e),e.onBuild(n,s,x),e.onBeforeCompile(s,x),u=Ae.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=Me.uniform),ut(e,s),r.needsLights=pt(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function lt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=ba.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function ut(e,t){let n=Se.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function dt(e,t,n,r,i){t.isScene!==!0&&(t=ge),Ce.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ee,c=(r.isMeshStandardMaterial?Te:we).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(m=x.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,g=h===void 0?0:h.length,_=Se.get(r),y=v.state.lights;if(de===!0&&(fe===!0||e!==D)){let t=e===D&&r.id===E;Me.setState(r,e,t)}let b=!1;r.version===_.__version?_.needsLights&&_.lightsStateVersion!==y.state.version?b=!0:_.outputColorSpace===s?i.isBatchedMesh&&_.batching===!1||!i.isBatchedMesh&&_.batching===!0||i.isInstancedMesh&&_.instancing===!1||!i.isInstancedMesh&&_.instancing===!0||i.isSkinnedMesh&&_.skinning===!1||!i.isSkinnedMesh&&_.skinning===!0||i.isInstancedMesh&&_.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&_.instancingColor===!1&&i.instanceColor!==null?b=!0:_.envMap===c?r.fog===!0&&_.fog!==a||_.numClippingPlanes!==void 0&&(_.numClippingPlanes!==Me.numPlanes||_.numIntersection!==Me.numIntersection)?b=!0:_.vertexAlphas===l&&_.vertexTangents===u&&_.morphTargets===d&&_.morphNormals===f&&_.morphColors===p&&_.toneMapping===m?be.isWebGL2===!0&&_.morphTargetsCount!==g&&(b=!0):b=!0:b=!0:b=!0:(b=!0,_.__version=r.version);let S=_.currentProgram;b===!0&&(S=ct(r,t,i));let C=!1,w=!1,O=!1,k=S.getUniforms(),A=_.uniforms;if(F.useProgram(S.program)&&(C=!0,w=!0,O=!0),r.id!==E&&(E=r.id,w=!0),C||D!==e){k.setValue(P,`projectionMatrix`,e.projectionMatrix),k.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(P,he.setFromMatrixPosition(e.matrixWorld)),be.logarithmicDepthBuffer&&k.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),D!==e&&(D=e,w=!0,O=!0)}if(i.isSkinnedMesh){k.setOptional(P,i,`bindMatrix`),k.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(be.floatVertexTextures?(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(P,`boneTexture`,e.boneTexture,Ce)):console.warn(`THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.`))}i.isBatchedMesh&&(k.setOptional(P,i,`batchingTexture`),k.setValue(P,`batchingTexture`,i._matricesTexture,Ce));let j=n.morphAttributes;if((j.position!==void 0||j.normal!==void 0||j.color!==void 0&&be.isWebGL2===!0)&&Ie.update(i,n,S),(w||_.receiveShadow!==i.receiveShadow)&&(_.receiveShadow=i.receiveShadow,k.setValue(P,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(A.envMap.value=c,A.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),w&&(k.setValue(P,`toneMappingExposure`,x.toneMappingExposure),_.needsLights&&ft(A,O),a&&r.fog===!0&&je.refreshFogUniforms(A,a),je.refreshMaterialUniforms(A,r,ie,re,N),ba.upload(P,lt(_),A,Ce)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(ba.upload(P,lt(_),A,Ce),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(P,`center`,i.center),k.setValue(P,`modelViewMatrix`,i.modelViewMatrix),k.setValue(P,`normalMatrix`,i.normalMatrix),k.setValue(P,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++)if(be.isWebGL2){let n=e[t];Ve.update(n,S),Ve.bind(n,S)}else console.warn(`THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.`)}return S}function ft(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function pt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(e,t,n){Se.get(e.texture).__webglTexture=t,Se.get(e.depthTexture).__webglTexture=n;let r=Se.get(e);r.__hasExternalTextures=!0,r.__hasExternalTextures&&(r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||ye.has(`WEBGL_multisampled_render_to_texture`)===!0&&(console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`),r.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(e,t){let n=Se.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){T=e,C=t,w=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=Se.get(e);s.__useDefaultFramebuffer===void 0?s.__webglFramebuffer===void 0?Ce.setupRenderTarget(e):s.__hasExternalTextures&&Ce.rebindTextures(e,Se.get(e.texture).__webglTexture,Se.get(e.depthTexture).__webglTexture):(F.bindFramebuffer(P.FRAMEBUFFER,null),r=!1);let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=Se.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=be.isWebGL2&&e.samples>0&&Ce.useMultisampledRTT(e)===!1?Se.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,O.copy(e.viewport),k.copy(e.scissor),j=e.scissorTest}else O.copy(se).multiplyScalar(ie).floor(),k.copy(ce).multiplyScalar(ie).floor(),j=le;if(F.bindFramebuffer(P.FRAMEBUFFER,i)&&be.drawBuffers&&r&&F.drawBuffers(e,i),F.viewport(O),F.scissor(k),F.setScissorTest(j),a){let r=Se.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=Se.get(e.texture),i=t||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,n||0,i)}E=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=Se.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){F.bindFramebuffer(P.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(s!==1023&&ze.convert(s)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}let l=c===1016&&(ye.has(`EXT_color_buffer_half_float`)||be.isWebGL2&&ye.has(`EXT_color_buffer_float`));if(c!==1009&&ze.convert(c)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(c===1015&&(be.isWebGL2||ye.has(`OES_texture_float`)||ye.has(`WEBGL_color_buffer_float`)))&&!l){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,ze.convert(s),ze.convert(c),a)}finally{let e=T===null?null:Se.get(T).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.copyFramebufferToTexture=function(e,t,n=0){let r=2**-n,i=Math.floor(t.image.width*r),a=Math.floor(t.image.height*r);Ce.setTexture2D(t,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,e.x,e.y,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n,r=0){let i=t.image.width,a=t.image.height,o=ze.convert(n.format),s=ze.convert(n.type);Ce.setTexture2D(n,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,n.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,n.unpackAlignment),t.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,r,e.x,e.y,i,a,o,s,t.image.data):t.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,r,e.x,e.y,t.mipmaps[0].width,t.mipmaps[0].height,o,t.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,r,e.x,e.y,o,s,t.image),r===0&&n.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),F.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n,r,i=0){if(x.isWebGL1Renderer){console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.`);return}let a=e.max.x-e.min.x+1,o=e.max.y-e.min.y+1,s=e.max.z-e.min.z+1,c=ze.convert(r.format),l=ze.convert(r.type),u;if(r.isData3DTexture)Ce.setTexture3D(r,0),u=P.TEXTURE_3D;else if(r.isDataArrayTexture||r.isCompressedArrayTexture)Ce.setTexture2DArray(r,0),u=P.TEXTURE_2D_ARRAY;else{console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.`);return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,r.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,r.unpackAlignment);let d=P.getParameter(P.UNPACK_ROW_LENGTH),f=P.getParameter(P.UNPACK_IMAGE_HEIGHT),p=P.getParameter(P.UNPACK_SKIP_PIXELS),m=P.getParameter(P.UNPACK_SKIP_ROWS),h=P.getParameter(P.UNPACK_SKIP_IMAGES),g=n.isCompressedTexture?n.mipmaps[i]:n.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,g.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,g.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,e.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,e.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,e.min.z),n.isDataTexture||n.isData3DTexture?P.texSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,l,g.data):n.isCompressedArrayTexture?(console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture.`),P.compressedTexSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,g.data)):P.texSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,l,g),P.pixelStorei(P.UNPACK_ROW_LENGTH,d),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,f),P.pixelStorei(P.UNPACK_SKIP_PIXELS,p),P.pixelStorei(P.UNPACK_SKIP_ROWS,m),P.pixelStorei(P.UNPACK_SKIP_IMAGES,h),i===0&&r.generateMipmaps&&P.generateMipmap(u),F.unbindTexture()},this.initTexture=function(e){e.isCubeTexture?Ce.setTextureCube(e,0):e.isData3DTexture?Ce.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ce.setTexture2DArray(e,0):Ce.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){C=0,w=0,T=null,F.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return se}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===`display-p3`?`display-p3`:`srgb`,t.unpackColorSpace=He.workingColorSpace===`display-p3-linear`?`display-p3`:`srgb`}get outputEncoding(){return console.warn(`THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead.`),this.outputColorSpace===`srgb`?D:E}set outputEncoding(e){console.warn(`THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead.`),this.outputColorSpace=e===3001?A:ee}get useLegacyLights(){return console.warn(`THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.`),this._useLegacyLights}set useLegacyLights(e){console.warn(`THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.`),this._useLegacyLights=e}},ko=class extends Oo{};ko.prototype.isWebGL1Renderer=!0;var Ao=class extends nn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},jo=new B,Mo=new Qe,No=new Qe,Po=new B,Fo=new V,Io=new B,Lo=new Ct,Ro=new V,zo=new jt,Bo=class extends tr{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=t,this.bindMatrix=new V,this.bindMatrixInverse=new V,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new at),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Io),this.boundingBox.expandByPoint(Io)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ct),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Io),this.boundingSphere.expandByPoint(Io)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lo.copy(this.boundingSphere),Lo.applyMatrix4(r),e.ray.intersectsSphere(Lo)!==!1&&(Ro.copy(r).invert(),zo.copy(e.ray).applyMatrix4(Ro),(this.boundingBox===null||zo.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,zo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn(`THREE.SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Mo.fromBufferAttribute(r.attributes.skinIndex,e),No.fromBufferAttribute(r.attributes.skinWeight,e),jo.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let e=0;e<4;e++){let r=No.getComponent(e);if(r!==0){let i=Mo.getComponent(e);Fo.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(Po.copy(jo).applyMatrix4(Fo),r)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn(`THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151.`),this.applyBoneTransform(e,t)}},Vo=class extends nn{constructor(){super(),this.isBone=!0,this.type=`Bone`}},Ho=class extends Ze{constructor(e=null,t=1,n=1,r,i,o,s,c,l=a,u=a,d,f){super(null,o,s,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Uo=new V,Wo=new V,Go=class e{constructor(e=[],t=[]){this.uuid=N(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn(`THREE.Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new V)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new V;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:Wo;Uo.multiplyMatrices(i,t[r]),Uo.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ho(t,e,e,g,p);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(console.warn(`THREE.Skeleton: No bone found with UUID:`,r),i=new Vo),this.bones.push(i),this.boneInverses.push(new V().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},Ko=class extends Sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new H(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},qo=new B,Jo=new B,Yo=new V,Xo=new jt,Zo=new Ct,Qo=class extends nn{constructor(e=new Ln,t=new Ko){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)qo.fromBufferAttribute(t,e-1),Jo.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=qo.distanceTo(Jo);e.setAttribute(`lineDistance`,new kn(n,1))}else console.warn(`THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(r),Zo.radius+=i,e.ray.intersectsSphere(Zo)===!1)return;Yo.copy(r).invert(),Xo.copy(e.ray).applyMatrix4(Yo);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=new B,l=new B,u=new B,d=new B,f=this.isLineSegments?2:1,p=n.index,m=n.attributes.position;if(p!==null){let n=Math.max(0,a.start),r=Math.min(p.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=f){let n=p.getX(i),r=p.getX(i+1);if(c.fromBufferAttribute(m,n),l.fromBufferAttribute(m,r),Xo.distanceSqToSegment(c,l,d,u)>s)continue;d.applyMatrix4(this.matrixWorld);let a=e.ray.origin.distanceTo(d);a<e.near||a>e.far||t.push({distance:a,point:u.clone().applyMatrix4(this.matrixWorld),index:i,face:null,faceIndex:null,object:this})}}else{let n=Math.max(0,a.start),r=Math.min(m.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=f){if(c.fromBufferAttribute(m,i),l.fromBufferAttribute(m,i+1),Xo.distanceSqToSegment(c,l,d,u)>s)continue;d.applyMatrix4(this.matrixWorld);let n=e.ray.origin.distanceTo(d);n<e.near||n>e.far||t.push({distance:n,point:u.clone().applyMatrix4(this.matrixWorld),index:i,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}},$o=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200}getPoint(){return console.warn(`THREE.Curve: .getPoint() not implemented.`),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new L:new B);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new B,r=[],i=[],a=[],o=new B,s=new V;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new B)}i[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(pe(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(pe(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},es={triangulate:function(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=ts(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l,u,d,f,p;if(r&&(a=cs(e,t,a,n)),e.length>80*n){s=l=e[0],c=u=e[1];for(let t=n;t<i;t+=n)d=e[t],f=e[t+1],d<s&&(s=d),f<c&&(c=f),d>l&&(l=d),f>u&&(u=f);p=Math.max(l-s,u-c),p=p===0?0:32767/p}return rs(a,o,n,s,c,p,0),o}};function ts(e,t,n,r,i){let a,o;if(i===js(e,t,n,r)>0)for(a=t;a<n;a+=r)o=Os(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=Os(a,e[a],e[a+1],o);return o&&bs(o,o.next)&&(ks(o),o=o.next),o}function ns(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(bs(n,n.next)||ys(n.prev,n,n.next)===0)){if(ks(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function rs(e,t,n,r,i,a,o){if(!e)return;!o&&a&&ps(e,r,i,a);let s=e,c,l;for(;e.prev!==e.next;)if(c=e.prev,l=e.next,a?as(e,r,i,a):is(e))t.push(c.i/n|0),t.push(e.i/n|0),t.push(l.i/n|0),ks(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=os(ns(e),t,n),rs(e,t,n,r,i,a,2)):o===2&&ss(e,t,n,r,i,a):rs(ns(e),t,n,r,i,a,1);break}}function is(e){let t=e.prev,n=e,r=e.next;if(ys(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=i<a?i<o?i:o:a<o?a:o,d=s<c?s<l?s:l:c<l?c:l,f=i>a?i>o?i:o:a>o?a:o,p=s>c?s>l?s:l:c>l?c:l,m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&_s(i,s,a,c,o,l,m.x,m.y)&&ys(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function as(e,t,n,r){let i=e.prev,a=e,o=e.next;if(ys(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=s<c?s<l?s:l:c<l?c:l,m=u<d?u<f?u:f:d<f?d:f,h=s>c?s>l?s:l:c>l?c:l,g=u>d?u>f?u:f:d>f?d:f,_=hs(p,m,t,n,r),v=hs(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&_s(s,u,c,d,l,f,y.x,y.y)&&ys(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&_s(s,u,c,d,l,f,b.x,b.y)&&ys(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&_s(s,u,c,d,l,f,y.x,y.y)&&ys(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&_s(s,u,c,d,l,f,b.x,b.y)&&ys(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function os(e,t,n){let r=e;do{let i=r.prev,a=r.next.next;!bs(i,a)&&xs(i,r,r.next,a)&&Ts(i,a)&&Ts(a,i)&&(t.push(i.i/n|0),t.push(r.i/n|0),t.push(a.i/n|0),ks(r),ks(r.next),r=e=a),r=r.next}while(r!==e);return ns(r)}function ss(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&vs(o,e)){let s=Ds(o,e);o=ns(o,o.next),s=ns(s,s.next),rs(o,t,n,r,i,a,0),rs(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function cs(e,t,n,r){let i=[],a,o,s,c,l;for(a=0,o=t.length;a<o;a++)s=t[a]*r,c=a<o-1?t[a+1]*r:e.length,l=ts(e,s,c,r,!1),l===l.next&&(l.steiner=!0),i.push(gs(l));for(i.sort(ls),a=0;a<i.length;a++)n=us(i[a],n);return n}function ls(e,t){return e.x-t.x}function us(e,t){let n=ds(e,t);if(!n)return t;let r=Ds(n,e);return ns(r,r.next),ns(n,n.next)}function ds(e,t){let n=t,r=-1/0,i,a=e.x,o=e.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){let e=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=a&&e>r&&(r=e,i=n.x<n.next.x?n:n.next,e===a))return i}n=n.next}while(n!==t);if(!i)return null;let s=i,c=i.x,l=i.y,u=1/0,d;n=i;do a>=n.x&&n.x>=c&&a!==n.x&&_s(o<l?a:r,o,c,l,o<l?r:a,o,n.x,n.y)&&(d=Math.abs(o-n.y)/(a-n.x),Ts(n,e)&&(d<u||d===u&&(n.x>i.x||n.x===i.x&&fs(i,n)))&&(i=n,u=d)),n=n.next;while(n!==s);return i}function fs(e,t){return ys(e.prev,e,t.prev)<0&&ys(t.next,e,e.next)<0}function ps(e,t,n,r){let i=e;do i.z===0&&(i.z=hs(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,ms(i)}function ms(e){let t,n,r,i,a,o,s,c,l=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,s=0,t=0;t<l&&(s++,r=r.nextZ,r);t++);for(c=l;s>0||c>0&&r;)s!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,s--):(i=r,r=r.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,l*=2}while(o>1);return e}function hs(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function gs(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function _s(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function vs(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!ws(e,t)&&(Ts(e,t)&&Ts(t,e)&&Es(e,t)&&(ys(e.prev,e,t.prev)||ys(e,t.prev,t))||bs(e,t)&&ys(e.prev,e,e.next)>0&&ys(t.prev,t,t.next)>0)}function ys(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function bs(e,t){return e.x===t.x&&e.y===t.y}function xs(e,t,n,r){let i=Cs(ys(e,t,n)),a=Cs(ys(e,t,r)),o=Cs(ys(n,r,e)),s=Cs(ys(n,r,t));return!!(i!==a&&o!==s||i===0&&Ss(e,n,t)||a===0&&Ss(e,r,t)||o===0&&Ss(n,e,r)||s===0&&Ss(n,t,r))}function Ss(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Cs(e){return e>0?1:e<0?-1:0}function ws(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&xs(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Ts(e,t){return ys(e.prev,e,e.next)<0?ys(e,t,e.next)>=0&&ys(e,e.prev,t)>=0:ys(e,t,e.prev)<0||ys(e,e.next,t)<0}function Es(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Ds(e,t){let n=new As(e.i,e.x,e.y),r=new As(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Os(e,t,n,r){let i=new As(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function ks(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function As(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function js(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Ms=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Ns(e),Ps(n,e);let a=e.length;t.forEach(Ns);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Ps(n,t[e]);let o=es.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Ns(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Ps(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Fs=class extends Sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:``},this.type=`MeshStandardMaterial`,this.color=new H(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new L(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Is=class extends Sn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type=`MeshPhongMaterial`,this.color=new H(16777215),this.specular=new H(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new L(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ls=class extends Sn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new L(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Rs(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function zs(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Bs(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function Vs(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function Hs(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0){if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push.apply(n,o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}}var Us=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},Ws=class extends Us{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:S,endingEnd:S}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case C:i=e,o=2*t-n;break;case w:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case C:a=e,s=2*n-t;break;case w:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Gs=class extends Us{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ks=class extends Us{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},qs=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Rs(t,this.TimeBufferType),this.values=Rs(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Rs(e.times,Array),values:Rs(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ks(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ws(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case y:t=this.InterpolantFactoryMethodDiscrete;break;case b:t=this.InterpolantFactoryMethodLinear;break;case x:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return y;case this.InterpolantFactoryMethodLinear:return b;case this.InterpolantFactoryMethodSmooth:return x}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&zs(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===x,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};qs.prototype.TimeBufferType=Float32Array,qs.prototype.ValueBufferType=Float32Array,qs.prototype.DefaultInterpolation=b;var Js=class extends qs{};Js.prototype.ValueTypeName=`bool`,Js.prototype.ValueBufferType=Array,Js.prototype.DefaultInterpolation=y,Js.prototype.InterpolantFactoryMethodLinear=void 0,Js.prototype.InterpolantFactoryMethodSmooth=void 0;var Ys=class extends qs{};Ys.prototype.ValueTypeName=`color`;var Xs=class extends qs{};Xs.prototype.ValueTypeName=`number`;var Zs=class extends Us{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)z.slerpFlat(i,0,a,c-o,a,c,s);return i}},Qs=class extends qs{InterpolantFactoryMethodLinear(e){return new Zs(this.times,this.values,this.getValueSize(),e)}};Qs.prototype.ValueTypeName=`quaternion`,Qs.prototype.DefaultInterpolation=b,Qs.prototype.InterpolantFactoryMethodSmooth=void 0;var $s=class extends qs{};$s.prototype.ValueTypeName=`string`,$s.prototype.ValueBufferType=Array,$s.prototype.DefaultInterpolation=y,$s.prototype.InterpolantFactoryMethodLinear=void 0,$s.prototype.InterpolantFactoryMethodSmooth=void 0;var ec=class extends qs{};ec.prototype.ValueTypeName=`vector`;var tc=class{constructor(e,t=-1,n,r=T){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=N(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(rc(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let e=0,r=n.length;e!==r;++e)t.push(qs.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=Bs(o);o=Vs(o,1,c),s=Vs(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new Xs(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}static parseAnimation(e,t){if(!e)return console.error(`THREE.AnimationClip: No animation in JSONLoader data.`),null;let n=function(e,t,n,r,i){if(n.length!==0){let a=[],o=[];Hs(n,a,o,r),a.length!==0&&i.push(new e(t,a,o))}},r=[],i=e.name||`default`,a=e.fps||30,o=e.blendMode,s=e.length||-1,c=e.hierarchy||[];for(let e=0;e<c.length;e++){let i=c[e].keys;if(i&&i.length!==0){if(i[0].morphTargets){let e={},t=0;for(;t<i.length;t++)if(i[t].morphTargets)for(let n=0;n<i[t].morphTargets.length;n++)e[i[t].morphTargets[n]]=-1;for(let n in e){let e=[],a=[];for(let r=0;r!==i[t].morphTargets.length;++r){let r=i[t];e.push(r.time),a.push(+(r.morphTarget===n))}r.push(new Xs(`.morphTargetInfluence[`+n+`]`,e,a))}s=e.length*a}else{let a=`.bones[`+t[e].name+`]`;n(ec,a+`.position`,i,`pos`,r),n(Qs,a+`.quaternion`,i,`rot`,r),n(ec,a+`.scale`,i,`scl`,r)}}}return r.length===0?null:new this(i,s,r,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function nc(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return Xs;case`vector`:case`vector2`:case`vector3`:case`vector4`:return ec;case`color`:return Ys;case`quaternion`:return Qs;case`bool`:case`boolean`:return Js;case`string`:return $s}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function rc(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=nc(e.type);if(e.times===void 0){let t=[],n=[];Hs(e.keys,t,n,`value`),e.times=t,e.values=n}return t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e)}var ic={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},ac=class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null}}},oc=new ac,sc=class{constructor(e){this.manager=e===void 0?oc:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};sc.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var cc={},lc=class extends Error{constructor(e,t){super(e),this.response=t}},uc=class extends sc{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=ic.get(e);if(i!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0),i;if(cc[e]!==void 0){cc[e].push({onLoad:t,onProgress:n,onError:r});return}cc[e]=[],cc[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&console.warn(`THREE.FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=cc[e],r=t.body.getReader(),i=t.headers.get(`Content-Length`)||t.headers.get(`X-File-Size`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}})}}});return new Response(c)}throw new lc(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===void 0)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{ic.add(e,t);let n=cc[e];delete cc[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=cc[e];if(n===void 0)throw this.manager.itemError(e),t;delete cc[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},dc=class extends sc{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=ic.get(e);if(a!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a;let o=Pe(`img`);function s(){l(),ic.add(e,this),t&&t(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}},fc=class extends sc{constructor(e){super(e)}load(e,t,n,r){let i=new Ze,a=new dc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},pc=class extends nn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new H(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},mc=class extends pc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new H(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},hc=new V,gc=new B,_c=new B,vc=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new L(512,512),this.map=null,this.mapPass=null,this.matrix=new V,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Er,this._frameExtents=new L(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;gc.setFromMatrixPosition(e.matrixWorld),t.position.copy(gc),_c.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_c),t.updateMatrixWorld(),hc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},yc=class extends vc{constructor(){super(new mr(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=fe*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},bc=class extends pc{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new yc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},xc=new V,Sc=new B,Cc=new B,wc=class extends vc{constructor(){super(new mr(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new L(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),Sc.setFromMatrixPosition(e.matrixWorld),n.position.copy(Sc),Cc.copy(n.position),Cc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Cc),n.updateMatrixWorld(),r.makeTranslation(-Sc.x,-Sc.y,-Sc.z),xc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xc)}},Tc=class extends pc{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new wc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ec=class extends vc{constructor(){super(new Rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Dc=class extends pc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new Ec}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Oc=class extends pc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},kc=class{static decodeText(e){if(typeof TextDecoder<`u`)return new TextDecoder().decode(e);let t=``;for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Ac=`\\[\\]\\.:\\/`,jc=RegExp(`[\\[\\]\\.:\\/]`,`g`),Mc=`[^\\[\\]\\.:\\/]`,Nc=`[^`+Ac.replace(`\\.`,``)+`]`,Pc=`((?:WC+[\\/:])*)`.replace(`WC`,Mc),Fc=`(WCOD+)?`.replace(`WCOD`,Nc),Ic=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Mc),Lc=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Mc),Rc=RegExp(`^`+Pc+Fc+Ic+Lc+`$`),zc=[`material`,`materials`,`bones`,`map`],Bc=class{constructor(e,t,n){let r=n||Vc.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Vc=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(jc,``)}static parseTrackName(e){let t=Rc.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);zc.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate):s=this.Versioning.NeedsUpdate;let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Vc.Composite=Bc,Vc.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Vc.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Vc.prototype.GetterByBindingType=[Vc.prototype._getValue_direct,Vc.prototype._getValue_array,Vc.prototype._getValue_arrayElement,Vc.prototype._getValue_toArray],Vc.prototype.SetterByBindingTypeAndVersioning=[[Vc.prototype._setValue_direct,Vc.prototype._setValue_direct_setNeedsUpdate,Vc.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vc.prototype._setValue_array,Vc.prototype._setValue_array_setNeedsUpdate,Vc.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vc.prototype._setValue_arrayElement,Vc.prototype._setValue_arrayElement_setNeedsUpdate,Vc.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vc.prototype._setValue_fromArray,Vc.prototype._setValue_fromArray_setNeedsUpdate,Vc.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`160`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`160`);var Hc=new URL(`avatar-n3mcDisx.fbx`,import.meta.url).href,Uc=new URL(`f014_body_color-VhW1Lx1O.jpg`,import.meta.url).href,Wc=new URL(`f014_body_normal-BL2VC4_S.jpg`,import.meta.url).href,Gc=new URL(`f014_head_color-B8QSRsjN.jpg`,import.meta.url).href,Kc=new URL(`f014_head_normal-OCePG_NU.jpg`,import.meta.url).href,qc=new URL(`f014_opacity_color-DwD81lR3.png`,import.meta.url).href,Jc=function(e){return URL.createObjectURL(new Blob([e],{type:`text/javascript`}))};try{URL.revokeObjectURL(Jc(``))}catch{Jc=function(e){return`data:application/javascript;charset=UTF-8,`+encodeURI(e)}}var Yc=Uint8Array,Xc=Uint16Array,Zc=Uint32Array,Qc=new Yc([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),$c=new Yc([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),el=new Yc([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),tl=function(e,t){for(var n=new Xc(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new Zc(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return[n,i]},nl=tl(Qc,2),rl=nl[0],il=nl[1];rl[28]=258,il[258]=28;var al=tl($c,0),ol=al[0];al[1];for(var sl=new Xc(32768),cl=0;cl<32768;++cl){var ll=(cl&43690)>>>1|(cl&21845)<<1;ll=(ll&52428)>>>2|(ll&13107)<<2,ll=(ll&61680)>>>4|(ll&3855)<<4,sl[cl]=((ll&65280)>>>8|(ll&255)<<8)>>>1}for(var ul=(function(e,t,n){for(var r=e.length,i=0,a=new Xc(t);i<r;++i)++a[e[i]-1];var o=new Xc(t);for(i=0;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new Xc(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[sl[d]>>>c]=l}else for(s=new Xc(r),i=0;i<r;++i)e[i]&&(s[i]=sl[o[e[i]-1]++]>>>15-e[i]);return s}),dl=new Yc(288),cl=0;cl<144;++cl)dl[cl]=8;for(var cl=144;cl<256;++cl)dl[cl]=9;for(var cl=256;cl<280;++cl)dl[cl]=7;for(var cl=280;cl<288;++cl)dl[cl]=8;for(var fl=new Yc(32),cl=0;cl<32;++cl)fl[cl]=5;var pl=ul(dl,9,1),ml=ul(fl,5,1),hl=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},gl=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},_l=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},vl=function(e){return(e/8|0)+(e&7&&1)},yl=function(e,t,n){(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length);var r=new(e instanceof Xc?Xc:e instanceof Zc?Zc:Yc)(n-t);return r.set(e.subarray(t,n)),r},bl=function(e,t,n){var r=e.length;if(!r||n&&!n.l&&r<5)return t||new Yc(0);var i=!t||n,a=!n||n.i;n||={},t||=new Yc(r*3);var o=function(e){var n=t.length;if(e>n){var r=new Yc(Math.max(n*2,e));r.set(t),t=r}},s=n.f||0,c=n.p||0,l=n.b||0,u=n.l,d=n.d,f=n.m,p=n.n,m=r*8;do{if(!u){n.f=s=gl(e,c,1);var h=gl(e,c+1,3);if(c+=3,!h){var g=vl(c)+4,_=e[g-4]|e[g-3]<<8,v=g+_;if(v>r){if(a)throw`unexpected EOF`;break}i&&o(l+_),t.set(e.subarray(g,v),l),n.b=l+=_,n.p=c=v*8;continue}if(h==1)u=pl,d=ml,f=9,p=5;else if(h==2){var y=gl(e,c,31)+257,b=gl(e,c+10,15)+4,x=y+gl(e,c+5,31)+1;c+=14;for(var S=new Yc(x),C=new Yc(19),w=0;w<b;++w)C[el[w]]=gl(e,c+w*3,7);c+=b*3;for(var T=hl(C),E=(1<<T)-1,D=ul(C,T,1),w=0;w<x;){var O=D[gl(e,c,E)];c+=O&15;var g=O>>>4;if(g<16)S[w++]=g;else{var k=0,A=0;for(g==16?(A=3+gl(e,c,3),c+=2,k=S[w-1]):g==17?(A=3+gl(e,c,7),c+=3):g==18&&(A=11+gl(e,c,127),c+=7);A--;)S[w++]=k}}var ee=S.subarray(0,y),j=S.subarray(y);f=hl(ee),p=hl(j),u=ul(ee,f,1),d=ul(j,p,1)}else throw`invalid block type`;if(c>m){if(a)throw`unexpected EOF`;break}}i&&o(l+131072);for(var M=(1<<f)-1,te=(1<<p)-1,ne=c;;ne=c){var k=u[_l(e,c)&M],re=k>>>4;if(c+=k&15,c>m){if(a)throw`unexpected EOF`;break}if(!k)throw`invalid length/literal`;if(re<256)t[l++]=re;else if(re==256){ne=c,u=null;break}else{var ie=re-254;if(re>264){var w=re-257,ae=Qc[w];ie=gl(e,c,(1<<ae)-1)+rl[w],c+=ae}var oe=d[_l(e,c)&te],se=oe>>>4;if(!oe)throw`invalid distance`;c+=oe&15;var j=ol[se];if(se>3){var ae=$c[se];j+=_l(e,c)&(1<<ae)-1,c+=ae}if(c>m){if(a)throw`unexpected EOF`;break}i&&o(l+131072);for(var ce=l+ie;l<ce;l+=4)t[l]=t[l-j],t[l+1]=t[l+1-j],t[l+2]=t[l+2-j],t[l+3]=t[l+3-j];l=ce}}n.l=u,n.p=ne,n.b=l,u&&(s=1,n.m=f,n.d=d,n.n=p)}while(!s);return l==t.length?t:yl(t,0,l)},xl=new Yc(0),Sl=function(e){if((e[0]&15)!=8||e[0]>>>4>7||(e[0]<<8|e[1])%31)throw`invalid zlib data`;if(e[1]&32)throw`invalid zlib data: preset dictionaries not supported`};function Cl(e,t){return bl((Sl(e),e.subarray(2,-4)),t)}var wl=typeof TextDecoder<`u`&&new TextDecoder;try{wl.decode(xl,{stream:!0})}catch{}function Tl(e,t,n){let r=n.length-e-1;if(t>=n[r])return r-1;if(t<=n[e])return e;let i=e,a=r,o=Math.floor((i+a)/2);for(;t<n[o]||t>=n[o+1];)t<n[o]?a=o:i=o,o=Math.floor((i+a)/2);return o}function El(e,t,n,r){let i=[],a=[],o=[];i[0]=1;for(let s=1;s<=n;++s){a[s]=t-r[e+1-s],o[s]=r[e+s]-t;let n=0;for(let e=0;e<s;++e){let t=o[e+1],r=a[s-e],c=i[e]/(t+r);i[e]=n+t*c,n=r*c}i[s]=n}return i}function Dl(e,t,n,r){let i=Tl(e,r,t),a=El(i,r,e,t),o=new Qe(0,0,0,0);for(let t=0;t<=e;++t){let r=n[i-e+t],s=a[t],c=r.w*s;o.x+=r.x*c,o.y+=r.y*c,o.z+=r.z*c,o.w+=r.w*s}return o}function Ol(e,t,n,r,i){let a=[];for(let e=0;e<=n;++e)a[e]=0;let o=[];for(let e=0;e<=r;++e)o[e]=a.slice(0);let s=[];for(let e=0;e<=n;++e)s[e]=a.slice(0);s[0][0]=1;let c=a.slice(0),l=a.slice(0);for(let r=1;r<=n;++r){c[r]=t-i[e+1-r],l[r]=i[e+r]-t;let n=0;for(let e=0;e<r;++e){let t=l[e+1],i=c[r-e];s[r][e]=t+i;let a=s[e][r-1]/s[r][e];s[e][r]=n+t*a,n=i*a}s[r][r]=n}for(let e=0;e<=n;++e)o[0][e]=s[e][n];for(let e=0;e<=n;++e){let t=0,i=1,c=[];for(let e=0;e<=n;++e)c[e]=a.slice(0);c[0][0]=1;for(let a=1;a<=r;++a){let r=0,l=e-a,u=n-a;e>=a&&(c[i][0]=c[t][0]/s[u+1][l],r=c[i][0]*s[l][u]);let d=l>=-1?1:-l,f=e-1<=u?a-1:n-e;for(let e=d;e<=f;++e)c[i][e]=(c[t][e]-c[t][e-1])/s[u+1][l+e],r+=c[i][e]*s[l+e][u];e<=u&&(c[i][a]=-c[t][a-1]/s[u+1][e],r+=c[i][a]*s[e][u]),o[a][e]=r;let p=t;t=i,i=p}}let u=n;for(let e=1;e<=r;++e){for(let t=0;t<=n;++t)o[e][t]*=u;u*=n-e}return o}function kl(e,t,n,r,i){let a=i<e?i:e,o=[],s=Tl(e,r,t),c=Ol(s,r,e,a,t),l=[];for(let e=0;e<n.length;++e){let t=n[e].clone(),r=t.w;t.x*=r,t.y*=r,t.z*=r,l[e]=t}for(let t=0;t<=a;++t){let n=l[s-e].clone().multiplyScalar(c[t][0]);for(let r=1;r<=e;++r)n.add(l[s-e+r].clone().multiplyScalar(c[t][r]));o[t]=n}for(let e=a+1;e<=i+1;++e)o[e]=new Qe(0,0,0);return o}function Al(e,t){let n=1;for(let t=2;t<=e;++t)n*=t;let r=1;for(let e=2;e<=t;++e)r*=e;for(let n=2;n<=e-t;++n)r*=n;return n/r}function jl(e){let t=e.length,n=[],r=[];for(let i=0;i<t;++i){let t=e[i];n[i]=new B(t.x,t.y,t.z),r[i]=t.w}let i=[];for(let e=0;e<t;++e){let t=n[e].clone();for(let n=1;n<=e;++n)t.sub(i[e-n].clone().multiplyScalar(Al(e,n)*r[n]));i[e]=t.divideScalar(r[0])}return i}function Ml(e,t,n,r,i){return jl(kl(e,t,n,r,i))}var Nl=class extends $o{constructor(e,t,n,r,i){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=r||0,this.endKnot=i||this.knots.length-1;for(let e=0;e<n.length;++e){let t=n[e];this.controlPoints[e]=new Qe(t.x,t.y,t.z,t.w)}}getPoint(e,t=new B){let n=t,r=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),i=Dl(this.degree,this.knots,this.controlPoints,r);return i.w!==1&&i.divideScalar(i.w),n.set(i.x,i.y,i.z)}getTangent(e,t=new B){let n=t,r=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),i=Ml(this.degree,this.knots,this.controlPoints,r,1);return n.copy(i[1]).normalize(),n}},G,Pl,Fl,Il=class extends sc{constructor(e){super(e)}load(e,t,n,r){let i=this,a=i.path===``?kc.extractUrlBase(e):i.path,o=new uc(this.manager);o.setPath(i.path),o.setResponseType(`arraybuffer`),o.setRequestHeader(i.requestHeader),o.setWithCredentials(i.withCredentials),o.load(e,function(n){try{t(i.parse(n,a))}catch(t){r?r(t):console.error(t),i.manager.itemError(e)}},n,r)}parse(e,t){if(Wl(e))G=new Vl().parse(e);else{let t=tu(e);if(!Gl(t))throw Error(`THREE.FBXLoader: Unknown format.`);if(Kl(t)<7e3)throw Error(`THREE.FBXLoader: FBX version not supported, FileVersion: `+Kl(t));G=new Bl().parse(t)}return new Ll(new fc(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin),this.manager).parse(G)}},Ll=class{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){Pl=this.parseConnections();let e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),r=this.parseDeformers(),i=new Rl().parse(r);return this.parseScene(r,i,n),Fl}parseConnections(){let e=new Map;return`Connections`in G&&G.Connections.connections.forEach(function(t){let n=t[0],r=t[1],i=t[2];e.has(n)||e.set(n,{parents:[],children:[]});let a={ID:r,relationship:i};e.get(n).parents.push(a),e.has(r)||e.set(r,{parents:[],children:[]});let o={ID:n,relationship:i};e.get(r).children.push(o)}),e}parseImages(){let e={},t={};if(`Video`in G.Objects){let n=G.Objects.Video;for(let r in n){let i=n[r],a=parseInt(r);if(e[a]=i.RelativeFilename||i.Filename,`Content`in i){let e=i.Content instanceof ArrayBuffer&&i.Content.byteLength>0,a=typeof i.Content==`string`&&i.Content!==``;if(e||a){let e=this.parseImage(n[r]);t[i.RelativeFilename||i.Filename]=e}}}}for(let n in e){let r=e[n];e[n]=t[r]===void 0?e[n].split(`\\`).pop():t[r]}return e}parseImage(e){let t=e.Content,n=e.RelativeFilename||e.Filename,r=n.slice(n.lastIndexOf(`.`)+1).toLowerCase(),i;switch(r){case`bmp`:i=`image/bmp`;break;case`jpg`:case`jpeg`:i=`image/jpeg`;break;case`png`:i=`image/png`;break;case`tif`:i=`image/tiff`;break;case`tga`:this.manager.getHandler(`.tga`)===null&&console.warn(`FBXLoader: TGA loader not found, skipping `,n),i=`image/tga`;break;default:console.warn(`FBXLoader: Image type "`+r+`" is not supported.`);return}if(typeof t==`string`)return`data:`+i+`;base64,`+t;{let e=new Uint8Array(t);return window.URL.createObjectURL(new Blob([e],{type:i}))}}parseTextures(e){let t=new Map;if(`Texture`in G.Objects){let n=G.Objects.Texture;for(let r in n){let i=this.parseTexture(n[r],e);t.set(parseInt(r),i)}}return t}parseTexture(e,t){let i=this.loadTexture(e,t);i.ID=e.id,i.name=e.attrName;let a=e.WrapModeU,o=e.WrapModeV,s=a===void 0?0:a.value,c=o===void 0?0:o.value;if(i.wrapS=s===0?n:r,i.wrapT=c===0?n:r,`Scaling`in e){let t=e.Scaling.value;i.repeat.x=t[0],i.repeat.y=t[1]}if(`Translation`in e){let t=e.Translation.value;i.offset.x=t[0],i.offset.y=t[1]}return i}loadTexture(e,t){let n,r=this.textureLoader.path,i=Pl.get(e.id).children;i!==void 0&&i.length>0&&t[i[0].ID]!==void 0&&(n=t[i[0].ID],(n.indexOf(`blob:`)===0||n.indexOf(`data:`)===0)&&this.textureLoader.setPath(void 0));let a,o=e.FileName.slice(-3).toLowerCase();if(o===`tga`){let t=this.manager.getHandler(`.tga`);t===null?(console.warn(`FBXLoader: TGA loader not found, creating placeholder texture for`,e.RelativeFilename),a=new Ze):(t.setPath(this.textureLoader.path),a=t.load(n))}else if(o===`dds`){let t=this.manager.getHandler(`.dds`);t===null?(console.warn(`FBXLoader: DDS loader not found, creating placeholder texture for`,e.RelativeFilename),a=new Ze):(t.setPath(this.textureLoader.path),a=t.load(n))}else o===`psd`?(console.warn(`FBXLoader: PSD textures are not supported, creating placeholder texture for`,e.RelativeFilename),a=new Ze):a=this.textureLoader.load(n);return this.textureLoader.setPath(r),a}parseMaterials(e){let t=new Map;if(`Material`in G.Objects){let n=G.Objects.Material;for(let r in n){let i=this.parseMaterial(n[r],e);i!==null&&t.set(parseInt(r),i)}}return t}parseMaterial(e,t){let n=e.id,r=e.attrName,i=e.ShadingModel;if(typeof i==`object`&&(i=i.value),!Pl.has(n))return null;let a=this.parseParameters(e,t,n),o;switch(i.toLowerCase()){case`phong`:o=new Is;break;case`lambert`:o=new Ls;break;default:console.warn(`THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.`,i),o=new Is}return o.setValues(a),o.name=r,o}parseParameters(e,t,n){let r={};e.BumpFactor&&(r.bumpScale=e.BumpFactor.value),e.Diffuse?r.color=new H().fromArray(e.Diffuse.value).convertSRGBToLinear():e.DiffuseColor&&(e.DiffuseColor.type===`Color`||e.DiffuseColor.type===`ColorRGB`)&&(r.color=new H().fromArray(e.DiffuseColor.value).convertSRGBToLinear()),e.DisplacementFactor&&(r.displacementScale=e.DisplacementFactor.value),e.Emissive?r.emissive=new H().fromArray(e.Emissive.value).convertSRGBToLinear():e.EmissiveColor&&(e.EmissiveColor.type===`Color`||e.EmissiveColor.type===`ColorRGB`)&&(r.emissive=new H().fromArray(e.EmissiveColor.value).convertSRGBToLinear()),e.EmissiveFactor&&(r.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(r.opacity=parseFloat(e.Opacity.value)),r.opacity<1&&(r.transparent=!0),e.ReflectionFactor&&(r.reflectivity=e.ReflectionFactor.value),e.Shininess&&(r.shininess=e.Shininess.value),e.Specular?r.specular=new H().fromArray(e.Specular.value).convertSRGBToLinear():e.SpecularColor&&e.SpecularColor.type===`Color`&&(r.specular=new H().fromArray(e.SpecularColor.value).convertSRGBToLinear());let i=this;return Pl.get(n).children.forEach(function(e){let n=e.relationship;switch(n){case`Bump`:r.bumpMap=i.getTexture(t,e.ID);break;case`Maya|TEX_ao_map`:r.aoMap=i.getTexture(t,e.ID);break;case`DiffuseColor`:case`Maya|TEX_color_map`:r.map=i.getTexture(t,e.ID),r.map!==void 0&&(r.map.colorSpace=A);break;case`DisplacementColor`:r.displacementMap=i.getTexture(t,e.ID);break;case`EmissiveColor`:r.emissiveMap=i.getTexture(t,e.ID),r.emissiveMap!==void 0&&(r.emissiveMap.colorSpace=A);break;case`NormalMap`:case`Maya|TEX_normal_map`:r.normalMap=i.getTexture(t,e.ID);break;case`ReflectionColor`:r.envMap=i.getTexture(t,e.ID),r.envMap!==void 0&&(r.envMap.mapping=303,r.envMap.colorSpace=A);break;case`SpecularColor`:r.specularMap=i.getTexture(t,e.ID),r.specularMap!==void 0&&(r.specularMap.colorSpace=A);break;case`TransparentColor`:case`TransparencyFactor`:r.alphaMap=i.getTexture(t,e.ID),r.transparent=!0;break;default:console.warn(`THREE.FBXLoader: %s map is not supported in three.js, skipping texture.`,n)}}),r}getTexture(e,t){return`LayeredTexture`in G.Objects&&t in G.Objects.LayeredTexture&&(console.warn(`THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer.`),t=Pl.get(t).children[0].ID),e.get(t)}parseDeformers(){let e={},t={};if(`Deformer`in G.Objects){let n=G.Objects.Deformer;for(let r in n){let i=n[r],a=Pl.get(parseInt(r));if(i.attrType===`Skin`){let t=this.parseSkeleton(a,n);t.ID=r,a.parents.length>1&&console.warn(`THREE.FBXLoader: skeleton attached to more than one geometry is not supported.`),t.geometryID=a.parents[0].ID,e[r]=t}else if(i.attrType===`BlendShape`){let e={id:r};e.rawTargets=this.parseMorphTargets(a,n),e.id=r,a.parents.length>1&&console.warn(`THREE.FBXLoader: morph target attached to more than one geometry is not supported.`),t[r]=e}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){let n=[];return e.children.forEach(function(e){let r=t[e.ID];if(r.attrType!==`Cluster`)return;let i={ID:e.ID,indices:[],weights:[],transformLink:new V().fromArray(r.TransformLink.a)};`Indexes`in r&&(i.indices=r.Indexes.a,i.weights=r.Weights.a),n.push(i)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){let n=[];for(let r=0;r<e.children.length;r++){let i=e.children[r],a=t[i.ID],o={name:a.attrName,initialWeight:a.DeformPercent,id:a.id,fullWeights:a.FullWeights.a};if(a.attrType!==`BlendShapeChannel`)return;o.geoID=Pl.get(parseInt(i.ID)).children.filter(function(e){return e.relationship===void 0})[0].ID,n.push(o)}return n}parseScene(e,t,n){Fl=new So;let r=this.parseModels(e.skeletons,t,n),i=G.Objects.Model,a=this;r.forEach(function(e){let t=i[e.ID];a.setLookAtProperties(e,t),Pl.get(e.ID).parents.forEach(function(t){let n=r.get(t.ID);n!==void 0&&n.add(e)}),e.parent===null&&Fl.add(e)}),this.bindSkeleton(e.skeletons,t,r),this.addGlobalSceneSettings(),Fl.traverse(function(e){if(e.userData.transformData){e.parent&&(e.userData.transformData.parentMatrix=e.parent.matrix,e.userData.transformData.parentMatrixWorld=e.parent.matrixWorld);let t=Ql(e.userData.transformData);e.applyMatrix4(t),e.updateWorldMatrix()}});let o=new zl().parse();Fl.children.length===1&&Fl.children[0].isGroup&&(Fl.children[0].animations=o,Fl=Fl.children[0]),Fl.animations=o}parseModels(e,t,n){let r=new Map,i=G.Objects.Model;for(let a in i){let o=parseInt(a),s=i[a],c=Pl.get(o),l=this.buildSkeleton(c,e,o,s.attrName);if(!l){switch(s.attrType){case`Camera`:l=this.createCamera(c);break;case`Light`:l=this.createLight(c);break;case`Mesh`:l=this.createMesh(c,t,n);break;case`NurbsCurve`:l=this.createCurve(c,t);break;case`LimbNode`:case`Root`:l=new Vo;break;default:l=new So}l.name=s.attrName?Vc.sanitizeNodeName(s.attrName):``,l.userData.originalName=s.attrName,l.ID=o}this.getTransformData(l,s),r.set(o,l)}return r}buildSkeleton(e,t,n,r){let i=null;return e.parents.forEach(function(e){for(let a in t){let o=t[a];o.rawBones.forEach(function(t,a){if(t.ID===e.ID){let e=i;i=new Vo,i.matrixWorld.copy(t.transformLink),i.name=r?Vc.sanitizeNodeName(r):``,i.userData.originalName=r,i.ID=n,o.bones[a]=i,e!==null&&i.add(e)}})}}),i}createCamera(e){let t,n;if(e.children.forEach(function(e){let t=G.Objects.NodeAttribute[e.ID];t!==void 0&&(n=t)}),n===void 0)t=new nn;else{let e=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(e=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let i=1e3;n.FarPlane!==void 0&&(i=n.FarPlane.value/1e3);let a=window.innerWidth,o=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,o=n.AspectHeight.value);let s=a/o,c=45;n.FieldOfView!==void 0&&(c=n.FieldOfView.value);let l=n.FocalLength?n.FocalLength.value:null;switch(e){case 0:t=new mr(c,s,r,i),l!==null&&t.setFocalLength(l);break;case 1:t=new Rr(-a/2,a/2,o/2,-o/2,r,i);break;default:console.warn(`THREE.FBXLoader: Unknown camera type `+e+`.`),t=new nn}}return t}createLight(e){let t,n;if(e.children.forEach(function(e){let t=G.Objects.NodeAttribute[e.ID];t!==void 0&&(n=t)}),n===void 0)t=new nn;else{let e;e=n.LightType===void 0?0:n.LightType.value;let r=16777215;n.Color!==void 0&&(r=new H().fromArray(n.Color.value).convertSRGBToLinear());let i=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(i=0);let a=0;switch(n.FarAttenuationEnd!==void 0&&(a=n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?0:n.FarAttenuationEnd.value),e){case 0:t=new Tc(r,i,a,1);break;case 1:t=new Dc(r,i);break;case 2:let e=Math.PI/3;n.InnerAngle!==void 0&&(e=I.degToRad(n.InnerAngle.value));let o=0;n.OuterAngle!==void 0&&(o=I.degToRad(n.OuterAngle.value),o=Math.max(o,1)),t=new bc(r,i,a,e,o,1);break;default:console.warn(`THREE.FBXLoader: Unknown light type `+n.LightType.value+`, defaulting to a PointLight.`),t=new Tc(r,i)}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let r,i=null,a=null,o=[];return e.children.forEach(function(e){t.has(e.ID)&&(i=t.get(e.ID)),n.has(e.ID)&&o.push(n.get(e.ID))}),o.length>1?a=o:o.length>0?a=o[0]:(a=new Is({name:sc.DEFAULT_MATERIAL_NAME,color:13421772}),o.push(a)),`color`in i.attributes&&o.forEach(function(e){e.vertexColors=!0}),i.FBX_Deformer?(r=new Bo(i,a),r.normalizeSkinWeights()):r=new tr(i,a),r}createCurve(e,t){return new Qo(e.children.reduce(function(e,n){return t.has(n.ID)&&(e=t.get(n.ID)),e},null),new Ko({name:sc.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1}))}getTransformData(e,t){let n={};`InheritType`in t&&(n.inheritType=parseInt(t.InheritType.value)),n.eulerOrder=`RotationOrder`in t?$l(t.RotationOrder.value):`ZYX`,`Lcl_Translation`in t&&(n.translation=t.Lcl_Translation.value),`PreRotation`in t&&(n.preRotation=t.PreRotation.value),`Lcl_Rotation`in t&&(n.rotation=t.Lcl_Rotation.value),`PostRotation`in t&&(n.postRotation=t.PostRotation.value),`Lcl_Scaling`in t&&(n.scale=t.Lcl_Scaling.value),`ScalingOffset`in t&&(n.scalingOffset=t.ScalingOffset.value),`ScalingPivot`in t&&(n.scalingPivot=t.ScalingPivot.value),`RotationOffset`in t&&(n.rotationOffset=t.RotationOffset.value),`RotationPivot`in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){`LookAtProperty`in t&&Pl.get(e.ID).children.forEach(function(t){if(t.relationship===`LookAtProperty`){let n=G.Objects.Model[t.ID];if(`Lcl_Translation`in n){let t=n.Lcl_Translation.value;e.target===void 0?e.lookAt(new B().fromArray(t)):(e.target.position.fromArray(t),Fl.add(e.target))}}})}bindSkeleton(e,t,n){let r=this.parsePoseNodes();for(let i in e){let a=e[i];Pl.get(parseInt(a.ID)).parents.forEach(function(e){if(t.has(e.ID)){let t=e.ID;Pl.get(t).parents.forEach(function(e){n.has(e.ID)&&n.get(e.ID).bind(new Go(a.bones),r[e.ID])})}})}}parsePoseNodes(){let e={};if(`Pose`in G.Objects){let t=G.Objects.Pose;for(let n in t)if(t[n].attrType===`BindPose`&&t[n].NbPoseNodes>0){let r=t[n].PoseNode;Array.isArray(r)?r.forEach(function(t){e[t.Node]=new V().fromArray(t.Matrix.a)}):e[r.Node]=new V().fromArray(r.Matrix.a)}}return e}addGlobalSceneSettings(){if(`GlobalSettings`in G){if(`AmbientColor`in G.GlobalSettings){let e=G.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],r=e[2];if(t!==0||n!==0||r!==0){let e=new H(t,n,r).convertSRGBToLinear();Fl.add(new Oc(e,1))}}`UnitScaleFactor`in G.GlobalSettings&&(Fl.userData.unitScaleFactor=G.GlobalSettings.UnitScaleFactor.value)}}},Rl=class{constructor(){this.negativeMaterialIndices=!1}parse(e){let t=new Map;if(`Geometry`in G.Objects){let n=G.Objects.Geometry;for(let r in n){let i=Pl.get(parseInt(r)),a=this.parseGeometry(i,n[r],e);t.set(parseInt(r),a)}}return this.negativeMaterialIndices===!0&&console.warn(`THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected.`),t}parseGeometry(e,t,n){switch(t.attrType){case`Mesh`:return this.parseMeshGeometry(e,t,n);case`NurbsCurve`:return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){let r=n.skeletons,i=[],a=e.parents.map(function(e){return G.Objects.Model[e.ID]});if(a.length===0)return;let o=e.children.reduce(function(e,t){return r[t.ID]!==void 0&&(e=r[t.ID]),e},null);e.children.forEach(function(e){n.morphTargets[e.ID]!==void 0&&i.push(n.morphTargets[e.ID])});let s=a[0],c={};`RotationOrder`in s&&(c.eulerOrder=$l(s.RotationOrder.value)),`InheritType`in s&&(c.inheritType=parseInt(s.InheritType.value)),`GeometricTranslation`in s&&(c.translation=s.GeometricTranslation.value),`GeometricRotation`in s&&(c.rotation=s.GeometricRotation.value),`GeometricScaling`in s&&(c.scale=s.GeometricScaling.value);let l=Ql(c);return this.genGeometry(t,o,i,l)}genGeometry(e,t,n,r){let i=new Ln;e.attrName&&(i.name=e.attrName);let a=this.parseGeoNode(e,t),o=this.genBuffers(a),s=new kn(o.vertex,3);if(s.applyMatrix4(r),i.setAttribute(`position`,s),o.colors.length>0&&i.setAttribute(`color`,new kn(o.colors,3)),t&&(i.setAttribute(`skinIndex`,new Dn(o.weightsIndices,4)),i.setAttribute(`skinWeight`,new kn(o.vertexWeights,4)),i.FBX_Deformer=t),o.normal.length>0){let e=new R().getNormalMatrix(r),t=new kn(o.normal,3);t.applyNormalMatrix(e),i.setAttribute(`normal`,t)}if(o.uvs.forEach(function(e,t){let n=t===0?`uv`:`uv${t}`;i.setAttribute(n,new kn(o.uvs[t],2))}),a.material&&a.material.mappingType!==`AllSame`){let e=o.materialIndex[0],t=0;if(o.materialIndex.forEach(function(n,r){n!==e&&(i.addGroup(t,r-t,e),e=n,t=r)}),i.groups.length>0){let t=i.groups[i.groups.length-1],n=t.start+t.count;n!==o.materialIndex.length&&i.addGroup(n,o.materialIndex.length-n,e)}i.groups.length===0&&i.addGroup(0,o.materialIndex.length,o.materialIndex[0])}return this.addMorphTargets(i,e,n,r),i}parseGeoNode(e,t){let n={};if(n.vertexPositions=e.Vertices===void 0?[]:e.Vertices.a,n.vertexIndices=e.PolygonVertexIndex===void 0?[]:e.PolygonVertexIndex.a,e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let t=0;for(;e.LayerElementUV[t];)e.LayerElementUV[t].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[t])),t++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(e,t){e.indices.forEach(function(r,i){n.weightTable[r]===void 0&&(n.weightTable[r]=[]),n.weightTable[r].push({id:t,weight:e.weights[i]})})})),n}genBuffers(e){let t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]},n=0,r=0,i=!1,a=[],o=[],s=[],c=[],l=[],u=[],d=this;return e.vertexIndices.forEach(function(f,p){let m,h=!1;f<0&&(f^=-1,h=!0);let g=[],_=[];if(a.push(f*3,f*3+1,f*3+2),e.color){let t=Yl(p,n,f,e.color);s.push(t[0],t[1],t[2])}if(e.skeleton){if(e.weightTable[f]!==void 0&&e.weightTable[f].forEach(function(e){_.push(e.weight),g.push(e.id)}),_.length>4){i||=(console.warn(`THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights.`),!0);let e=[0,0,0,0],t=[0,0,0,0];_.forEach(function(n,r){let i=n,a=g[r];t.forEach(function(t,n,r){if(i>t){r[n]=i,i=t;let o=e[n];e[n]=a,a=o}})}),g=e,_=t}for(;_.length<4;)_.push(0),g.push(0);for(let e=0;e<4;++e)l.push(_[e]),u.push(g[e])}if(e.normal){let t=Yl(p,n,f,e.normal);o.push(t[0],t[1],t[2])}e.material&&e.material.mappingType!==`AllSame`&&(m=Yl(p,n,f,e.material)[0],m<0&&(d.negativeMaterialIndices=!0,m=0)),e.uv&&e.uv.forEach(function(e,t){let r=Yl(p,n,f,e);c[t]===void 0&&(c[t]=[]),c[t].push(r[0]),c[t].push(r[1])}),r++,h&&(d.genFace(t,e,a,m,o,s,c,l,u,r),n++,r=0,a=[],o=[],s=[],c=[],l=[],u=[])}),t}getNormalNewell(e){let t=new B(0,0,0);for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t.x+=(r.y-i.y)*(r.z+i.z),t.y+=(r.z-i.z)*(r.x+i.x),t.z+=(r.x-i.x)*(r.y+i.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){let t=this.getNormalNewell(e),n=(Math.abs(t.z)>.5?new B(0,1,0):new B(0,0,1)).cross(t).normalize();return{normal:t,tangent:n,bitangent:t.clone().cross(n).normalize()}}flattenVertex(e,t,n){return new L(e.dot(t),e.dot(n))}genFace(e,t,n,r,i,a,o,s,c,l){let u;if(l>3){let e=[];for(let r=0;r<n.length;r+=3)e.push(new B(t.vertexPositions[n[r]],t.vertexPositions[n[r+1]],t.vertexPositions[n[r+2]]));let{tangent:r,bitangent:i}=this.getNormalTangentAndBitangent(e),a=[];for(let t of e)a.push(this.flattenVertex(t,r,i));u=Ms.triangulateShape(a,[])}else u=[[0,1,2]];for(let[l,d,f]of u)e.vertex.push(t.vertexPositions[n[l*3]]),e.vertex.push(t.vertexPositions[n[l*3+1]]),e.vertex.push(t.vertexPositions[n[l*3+2]]),e.vertex.push(t.vertexPositions[n[d*3]]),e.vertex.push(t.vertexPositions[n[d*3+1]]),e.vertex.push(t.vertexPositions[n[d*3+2]]),e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),t.skeleton&&(e.vertexWeights.push(s[l*4]),e.vertexWeights.push(s[l*4+1]),e.vertexWeights.push(s[l*4+2]),e.vertexWeights.push(s[l*4+3]),e.vertexWeights.push(s[d*4]),e.vertexWeights.push(s[d*4+1]),e.vertexWeights.push(s[d*4+2]),e.vertexWeights.push(s[d*4+3]),e.vertexWeights.push(s[f*4]),e.vertexWeights.push(s[f*4+1]),e.vertexWeights.push(s[f*4+2]),e.vertexWeights.push(s[f*4+3]),e.weightsIndices.push(c[l*4]),e.weightsIndices.push(c[l*4+1]),e.weightsIndices.push(c[l*4+2]),e.weightsIndices.push(c[l*4+3]),e.weightsIndices.push(c[d*4]),e.weightsIndices.push(c[d*4+1]),e.weightsIndices.push(c[d*4+2]),e.weightsIndices.push(c[d*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3])),t.color&&(e.colors.push(a[l*3]),e.colors.push(a[l*3+1]),e.colors.push(a[l*3+2]),e.colors.push(a[d*3]),e.colors.push(a[d*3+1]),e.colors.push(a[d*3+2]),e.colors.push(a[f*3]),e.colors.push(a[f*3+1]),e.colors.push(a[f*3+2])),t.material&&t.material.mappingType!==`AllSame`&&(e.materialIndex.push(r),e.materialIndex.push(r),e.materialIndex.push(r)),t.normal&&(e.normal.push(i[l*3]),e.normal.push(i[l*3+1]),e.normal.push(i[l*3+2]),e.normal.push(i[d*3]),e.normal.push(i[d*3+1]),e.normal.push(i[d*3+2]),e.normal.push(i[f*3]),e.normal.push(i[f*3+1]),e.normal.push(i[f*3+2])),t.uv&&t.uv.forEach(function(t,n){e.uvs[n]===void 0&&(e.uvs[n]=[]),e.uvs[n].push(o[n][l*2]),e.uvs[n].push(o[n][l*2+1]),e.uvs[n].push(o[n][d*2]),e.uvs[n].push(o[n][d*2+1]),e.uvs[n].push(o[n][f*2]),e.uvs[n].push(o[n][f*2+1])})}addMorphTargets(e,t,n,r){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];let i=this;n.forEach(function(n){n.rawTargets.forEach(function(n){let a=G.Objects.Geometry[n.geoID];a!==void 0&&i.genMorphGeometry(e,t,a,r,n.name)})})}genMorphGeometry(e,t,n,r,i){let a=t.PolygonVertexIndex===void 0?[]:t.PolygonVertexIndex.a,o=n.Vertices===void 0?[]:n.Vertices.a,s=n.Indexes===void 0?[]:n.Indexes.a,c=e.attributes.position.count*3,l=new Float32Array(c);for(let e=0;e<s.length;e++){let t=s[e]*3;l[t]=o[e*3],l[t+1]=o[e*3+1],l[t+2]=o[e*3+2]}let u={vertexIndices:a,vertexPositions:l},d=new kn(this.genBuffers(u).vertex,3);d.name=i||n.attrName,d.applyMatrix4(r),e.morphAttributes.position.push(d)}parseNormals(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Normals.a,i=[];return n===`IndexToDirect`&&(`NormalIndex`in e?i=e.NormalIndex.a:`NormalsIndex`in e&&(i=e.NormalsIndex.a)),{dataSize:3,buffer:r,indices:i,mappingType:t,referenceType:n}}parseUVs(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.UV.a,i=[];return n===`IndexToDirect`&&(i=e.UVIndex.a),{dataSize:2,buffer:r,indices:i,mappingType:t,referenceType:n}}parseVertexColors(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Colors.a,i=[];n===`IndexToDirect`&&(i=e.ColorIndex.a);for(let e=0,t=new H;e<r.length;e+=4)t.fromArray(r,e).convertSRGBToLinear().toArray(r,e);return{dataSize:4,buffer:r,indices:i,mappingType:t,referenceType:n}}parseMaterialIndices(e){let t=e.MappingInformationType,n=e.ReferenceInformationType;if(t===`NoMappingInformation`)return{dataSize:1,buffer:[0],indices:[0],mappingType:`AllSame`,referenceType:n};let r=e.Materials.a,i=[];for(let e=0;e<r.length;++e)i.push(e);return{dataSize:1,buffer:r,indices:i,mappingType:t,referenceType:n}}parseNurbsGeometry(e){let t=parseInt(e.Order);if(isNaN(t))return console.error(`THREE.FBXLoader: Invalid Order %s given for geometry ID: %s`,e.Order,e.id),new Ln;let n=t-1,r=e.KnotVector.a,i=[],a=e.Points.a;for(let e=0,t=a.length;e<t;e+=4)i.push(new Qe().fromArray(a,e));let o,s;if(e.Form===`Closed`)i.push(i[0]);else if(e.Form===`Periodic`){o=n,s=r.length-1-o;for(let e=0;e<n;++e)i.push(i[e])}let c=new Nl(n,r,i,o,s).getPoints(i.length*12);return new Ln().setFromPoints(c)}},zl=class{parse(){let e=[],t=this.parseClips();if(t!==void 0)for(let n in t){let r=t[n],i=this.addClip(r);e.push(i)}return e}parseClips(){if(G.Objects.AnimationCurve===void 0)return;let e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);let t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){let e=G.Objects.AnimationCurveNode,t=new Map;for(let n in e){let r=e[n];if(r.attrName.match(/S|R|T|DeformPercent/)!==null){let e={id:r.id,attr:r.attrName,curves:{}};t.set(e.id,e)}}return t}parseAnimationCurves(e){let t=G.Objects.AnimationCurve;for(let n in t){let r={id:t[n].id,times:t[n].KeyTime.a.map(ql),values:t[n].KeyValueFloat.a},i=Pl.get(r.id);if(i!==void 0){let t=i.parents[0].ID,n=i.parents[0].relationship;n.match(/X/)?e.get(t).curves.x=r:n.match(/Y/)?e.get(t).curves.y=r:n.match(/Z/)?e.get(t).curves.z=r:n.match(/DeformPercent/)&&e.has(t)&&(e.get(t).curves.morph=r)}}}parseAnimationLayers(e){let t=G.Objects.AnimationLayer,n=new Map;for(let r in t){let t=[],i=Pl.get(parseInt(r));i!==void 0&&(i.children.forEach(function(n,r){if(e.has(n.ID)){let i=e.get(n.ID);if(i.curves.x!==void 0||i.curves.y!==void 0||i.curves.z!==void 0){if(t[r]===void 0){let e=Pl.get(n.ID).parents.filter(function(e){return e.relationship!==void 0})[0].ID;if(e!==void 0){let i=G.Objects.Model[e.toString()];if(i===void 0){console.warn(`THREE.FBXLoader: Encountered a unused curve.`,n);return}let a={modelName:i.attrName?Vc.sanitizeNodeName(i.attrName):``,ID:i.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Fl.traverse(function(e){e.ID===i.id&&(a.transform=e.matrix,e.userData.transformData&&(a.eulerOrder=e.userData.transformData.eulerOrder))}),a.transform||=new V,`PreRotation`in i&&(a.preRotation=i.PreRotation.value),`PostRotation`in i&&(a.postRotation=i.PostRotation.value),t[r]=a}}t[r]&&(t[r][i.attr]=i)}else if(i.curves.morph!==void 0){if(t[r]===void 0){let e=Pl.get(n.ID).parents.filter(function(e){return e.relationship!==void 0})[0].ID,i=Pl.get(e).parents[0].ID,a=Pl.get(i).parents[0].ID,o=Pl.get(a).parents[0].ID,s=G.Objects.Model[o],c={modelName:s.attrName?Vc.sanitizeNodeName(s.attrName):``,morphName:G.Objects.Deformer[e].attrName};t[r]=c}t[r][i.attr]=i}}}),n.set(parseInt(r),t))}return n}parseAnimStacks(e){let t=G.Objects.AnimationStack,n={};for(let r in t){let i=Pl.get(parseInt(r)).children;i.length>1&&console.warn(`THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.`);let a=e.get(i[0].ID);n[r]={name:t[r].attrName,layer:a}}return n}addClip(e){let t=[],n=this;return e.layer.forEach(function(e){t=t.concat(n.generateTracks(e))}),new tc(e.name,-1,t)}generateTracks(e){let t=[],n=new B,r=new B;if(e.transform&&e.transform.decompose(n,new z,r),n=n.toArray(),r=r.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){let r=this.generateVectorTrack(e.modelName,e.T.curves,n,`position`);r!==void 0&&t.push(r)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){let n=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);n!==void 0&&t.push(n)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){let n=this.generateVectorTrack(e.modelName,e.S.curves,r,`scale`);n!==void 0&&t.push(n)}if(e.DeformPercent!==void 0){let n=this.generateMorphTrack(e);n!==void 0&&t.push(n)}return t}generateVectorTrack(e,t,n,r){let i=this.getTimesForAllAxes(t),a=this.getKeyframeTrackValues(i,t,n);return new ec(e+`.`+r,i,a)}generateRotationTrack(e,t,n,r,i){let a,o;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){let e=this.interpolateRotations(t.x,t.y,t.z,i);a=e[0],o=e[1]}n!==void 0&&(n=n.map(I.degToRad),n.push(i),n=new Vt().fromArray(n),n=new z().setFromEuler(n)),r!==void 0&&(r=r.map(I.degToRad),r.push(i),r=new Vt().fromArray(r),r=new z().setFromEuler(r).invert());let s=new z,c=new Vt,l=[];if(!o||!a)return new Qs(e+`.quaternion`,[],[]);for(let e=0;e<o.length;e+=3)c.set(o[e],o[e+1],o[e+2],i),s.setFromEuler(c),n!==void 0&&s.premultiply(n),r!==void 0&&s.multiply(r),e>2&&new z().fromArray(l,(e-3)/3*4).dot(s)<0&&s.set(-s.x,-s.y,-s.z,-s.w),s.toArray(l,e/3*4);return new Qs(e+`.quaternion`,a,l)}generateMorphTrack(e){let t=e.DeformPercent.curves.morph,n=t.values.map(function(e){return e/100}),r=Fl.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Xs(e.modelName+`.morphTargetInfluences[`+r+`]`,t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(e,t){return e-t}),t.length>1){let e=1,n=t[0];for(let r=1;r<t.length;r++){let i=t[r];i!==n&&(t[e]=i,n=i,e++)}t=t.slice(0,e)}return t}getKeyframeTrackValues(e,t,n){let r=n,i=[],a=-1,o=-1,s=-1;return e.forEach(function(e){if(t.x&&(a=t.x.times.indexOf(e)),t.y&&(o=t.y.times.indexOf(e)),t.z&&(s=t.z.times.indexOf(e)),a!==-1){let e=t.x.values[a];i.push(e),r[0]=e}else i.push(r[0]);if(o!==-1){let e=t.y.values[o];i.push(e),r[1]=e}else i.push(r[1]);if(s!==-1){let e=t.z.values[s];i.push(e),r[2]=e}else i.push(r[2])}),i}interpolateRotations(e,t,n,r){let i=[],a=[];i.push(e.times[0]),a.push(I.degToRad(e.values[0])),a.push(I.degToRad(t.values[0])),a.push(I.degToRad(n.values[0]));for(let o=1;o<e.values.length;o++){let s=[e.values[o-1],t.values[o-1],n.values[o-1]];if(isNaN(s[0])||isNaN(s[1])||isNaN(s[2]))continue;let c=s.map(I.degToRad),l=[e.values[o],t.values[o],n.values[o]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;let u=l.map(I.degToRad),d=[l[0]-s[0],l[1]-s[1],l[2]-s[2]],f=[Math.abs(d[0]),Math.abs(d[1]),Math.abs(d[2])];if(f[0]>=180||f[1]>=180||f[2]>=180){let t=Math.max(...f)/180,n=new Vt(...c,r),s=new Vt(...u,r),l=new z().setFromEuler(n),d=new z().setFromEuler(s);l.dot(d)&&d.set(-d.x,-d.y,-d.z,-d.w);let p=e.times[o-1],m=e.times[o]-p,h=new z,g=new Vt;for(let e=0;e<1;e+=1/t)h.copy(l.clone().slerp(d.clone(),e)),i.push(p+e*m),g.setFromQuaternion(h,r),a.push(g.x),a.push(g.y),a.push(g.z)}else i.push(e.times[o]),a.push(I.degToRad(e.values[o])),a.push(I.degToRad(t.values[o])),a.push(I.degToRad(n.values[o]))}return[i,a]}},Bl=class{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),--this.currentIndent}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new Ul,this.nodeStack=[],this.currentProp=[],this.currentPropName=``;let t=this,n=e.split(/[\r\n]+/);return n.forEach(function(e,r){let i=e.match(/^[\s\t]*;/),a=e.match(/^[\s\t]*$/);if(i||a)return;let o=e.match(`^\\t{`+t.currentIndent+`}(\\w+):(.*){`,``),s=e.match(`^\\t{`+t.currentIndent+`}(\\w+):[\\s\\t\\r\\n](.*)`),c=e.match(`^\\t{`+(t.currentIndent-1)+`}}`);o?t.parseNodeBegin(e,o):s?t.parseNodeProperty(e,s,n[++r]):c?t.popStack():e.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(e)}),this.allNodes}parseNodeBegin(e,t){let n=t[1].trim().replace(/^"/,``).replace(/"$/,``),r=t[2].split(`,`).map(function(e){return e.trim().replace(/^"/,``).replace(/"$/,``)}),i={name:n},a=this.parseNodeAttr(r),o=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,i):n in o?(n===`PoseNode`?o.PoseNode.push(i):o[n].id!==void 0&&(o[n]={},o[n][o[n].id]=o[n]),a.id!==``&&(o[n][a.id]=i)):typeof a.id==`number`?(o[n]={},o[n][a.id]=i):n!==`Properties70`&&(o[n]=n===`PoseNode`?[i]:i),typeof a.id==`number`&&(i.id=a.id),a.name!==``&&(i.attrName=a.name),a.type!==``&&(i.attrType=a.type),this.pushStack(i)}parseNodeAttr(e){let t=e[0];e[0]!==``&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n=``,r=``;return e.length>1&&(n=e[1].replace(/^(\w+)::/,``),r=e[2]),{id:t,name:n,type:r}}parseNodeProperty(e,t,n){let r=t[1].replace(/^"/,``).replace(/"$/,``).trim(),i=t[2].replace(/^"/,``).replace(/"$/,``).trim();r===`Content`&&i===`,`&&(i=n.replace(/"/g,``).replace(/,$/,``).trim());let a=this.getCurrentNode();if(a.name===`Properties70`)this.parseNodeSpecialProperty(e,r,i);else{if(r===`C`){let e=i.split(`,`).slice(1),t=parseInt(e[0]),n=parseInt(e[1]),o=i.split(`,`).slice(3);o=o.map(function(e){return e.trim().replace(/^"/,``)}),r=`connections`,i=[t,n],nu(i,o),a[r]===void 0&&(a[r]=[])}r===`Node`&&(a.id=i),r in a&&Array.isArray(a[r])?a[r].push(i):r===`a`?a.a=i:a[r]=i,this.setCurrentProp(a,r),r===`a`&&i.slice(-1)!==`,`&&(a.a=eu(i))}}parseNodePropertyContinued(e){let t=this.getCurrentNode();t.a+=e,e.slice(-1)!==`,`&&(t.a=eu(t.a))}parseNodeSpecialProperty(e,t,n){let r=n.split(`",`).map(function(e){return e.trim().replace(/^\"/,``).replace(/\s/,`_`)}),i=r[0],a=r[1],o=r[2],s=r[3],c=r[4];switch(a){case`int`:case`enum`:case`bool`:case`ULongLong`:case`double`:case`Number`:case`FieldOfView`:c=parseFloat(c);break;case`Color`:case`ColorRGB`:case`Vector3D`:case`Lcl_Translation`:case`Lcl_Rotation`:case`Lcl_Scaling`:c=eu(c)}this.getPrevNode()[i]={type:a,type2:o,flag:s,value:c},this.setCurrentProp(this.getPrevNode(),i)}},Vl=class{parse(e){let t=new Hl(e);t.skip(23);let n=t.getUint32();if(n<6400)throw Error(`THREE.FBXLoader: FBX version not supported, FileVersion: `+n);let r=new Ul;for(;!this.endOfContent(t);){let e=this.parseNode(t,n);e!==null&&r.add(e.name,e)}return r}endOfContent(e){return e.size()%16==0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){let n={},r=t>=7500?e.getUint64():e.getUint32(),i=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();let a=e.getUint8(),o=e.getString(a);if(r===0)return null;let s=[];for(let t=0;t<i;t++)s.push(this.parseProperty(e));let c=s.length>0?s[0]:``,l=s.length>1?s[1]:``,u=s.length>2?s[2]:``;for(n.singleProperty=i===1&&e.getOffset()===r;r>e.getOffset();){let r=this.parseNode(e,t);r!==null&&this.parseSubNode(o,n,r)}return n.propertyList=s,typeof c==`number`&&(n.id=c),l!==``&&(n.attrName=l),u!==``&&(n.attrType=u),o!==``&&(n.name=o),n}parseSubNode(e,t,n){if(n.singleProperty===!0){let e=n.propertyList[0];Array.isArray(e)?(t[n.name]=n,n.a=e):t[n.name]=e}else if(e===`Connections`&&n.name===`C`){let e=[];n.propertyList.forEach(function(t,n){n!==0&&e.push(t)}),t.connections===void 0&&(t.connections=[]),t.connections.push(e)}else if(n.name===`Properties70`)Object.keys(n).forEach(function(e){t[e]=n[e]});else if(e===`Properties70`&&n.name===`P`){let e=n.propertyList[0],r=n.propertyList[1],i=n.propertyList[2],a=n.propertyList[3],o;e.indexOf(`Lcl `)===0&&(e=e.replace(`Lcl `,`Lcl_`)),r.indexOf(`Lcl `)===0&&(r=r.replace(`Lcl `,`Lcl_`)),o=r===`Color`||r===`ColorRGB`||r===`Vector`||r===`Vector3D`||r.indexOf(`Lcl_`)===0?[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:n.propertyList[4],t[e]={type:r,type2:i,flag:a,value:o}}else t[n.name]===void 0?typeof n.id==`number`?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name===`PoseNode`?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){let t=e.getString(1),n;switch(t){case`C`:return e.getBoolean();case`D`:return e.getFloat64();case`F`:return e.getFloat32();case`I`:return e.getInt32();case`L`:return e.getInt64();case`R`:return n=e.getUint32(),e.getArrayBuffer(n);case`S`:return n=e.getUint32(),e.getString(n);case`Y`:return e.getInt16();case`b`:case`c`:case`d`:case`f`:case`i`:case`l`:let r=e.getUint32(),i=e.getUint32(),a=e.getUint32();if(i===0)switch(t){case`b`:case`c`:return e.getBooleanArray(r);case`d`:return e.getFloat64Array(r);case`f`:return e.getFloat32Array(r);case`i`:return e.getInt32Array(r);case`l`:return e.getInt64Array(r)}let o=new Hl(Cl(new Uint8Array(e.getArrayBuffer(a))).buffer);switch(t){case`b`:case`c`:return o.getBooleanArray(r);case`d`:return o.getFloat64Array(r);case`f`:return o.getFloat32Array(r);case`i`:return o.getInt32Array(r);case`l`:return o.getInt64Array(r)}break;default:throw Error(`THREE.FBXLoader: Unknown property type `+t)}}},Hl=class{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t===void 0||t,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)==1}getBooleanArray(e){let t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){let e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){let e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){let e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){let e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t|0,e=~e|0,e===4294967295&&(t=t+1|0),e=e+1|0,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){let e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){let e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){let t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){let t=this.offset,n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);let r=n.indexOf(0);return r>=0&&(n=new Uint8Array(this.dv.buffer,t,r)),this._textDecoder.decode(n)}},Ul=class{add(e,t){this[e]=t}};function Wl(e){return e.byteLength>=21&&tu(e,0,21)===`Kaydara FBX Binary  \0`}function Gl(e){let t=[`K`,`a`,`y`,`d`,`a`,`r`,`a`,`\\`,`F`,`B`,`X`,`\\`,`B`,`i`,`n`,`a`,`r`,`y`,`\\`,`\\`],n=0;function r(t){let r=e[t-1];return e=e.slice(n+t),n++,r}for(let e=0;e<t.length;++e)if(r(1)===t[e])return!1;return!0}function Kl(e){let t=e.match(/FBXVersion: (\d+)/);if(t)return parseInt(t[1]);throw Error(`THREE.FBXLoader: Cannot find the version number for the file given.`)}function ql(e){return e/46186158e3}var Jl=[];function Yl(e,t,n,r){let i;switch(r.mappingType){case`ByPolygonVertex`:i=e;break;case`ByPolygon`:i=t;break;case`ByVertice`:i=n;break;case`AllSame`:i=r.indices[0];break;default:console.warn(`THREE.FBXLoader: unknown attribute mapping type `+r.mappingType)}r.referenceType===`IndexToDirect`&&(i=r.indices[i]);let a=i*r.dataSize,o=a+r.dataSize;return ru(Jl,r.buffer,a,o)}var Xl=new Vt,Zl=new B;function Ql(e){let t=new V,n=new V,r=new V,i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V,d=new V,f=new V,p=e.inheritType?e.inheritType:0;if(e.translation&&t.setPosition(Zl.fromArray(e.translation)),e.preRotation){let t=e.preRotation.map(I.degToRad);t.push(e.eulerOrder||Vt.DEFAULT_ORDER),n.makeRotationFromEuler(Xl.fromArray(t))}if(e.rotation){let t=e.rotation.map(I.degToRad);t.push(e.eulerOrder||Vt.DEFAULT_ORDER),r.makeRotationFromEuler(Xl.fromArray(t))}if(e.postRotation){let t=e.postRotation.map(I.degToRad);t.push(e.eulerOrder||Vt.DEFAULT_ORDER),i.makeRotationFromEuler(Xl.fromArray(t)),i.invert()}e.scale&&a.scale(Zl.fromArray(e.scale)),e.scalingOffset&&s.setPosition(Zl.fromArray(e.scalingOffset)),e.scalingPivot&&o.setPosition(Zl.fromArray(e.scalingPivot)),e.rotationOffset&&c.setPosition(Zl.fromArray(e.rotationOffset)),e.rotationPivot&&l.setPosition(Zl.fromArray(e.rotationPivot)),e.parentMatrixWorld&&(d.copy(e.parentMatrix),u.copy(e.parentMatrixWorld));let m=n.clone().multiply(r).multiply(i),h=new V;h.extractRotation(u);let g=new V;g.copyPosition(u);let _=g.clone().invert().multiply(u),v=h.clone().invert().multiply(_),y=a,b=new V;if(p===0)b.copy(h).multiply(m).multiply(v).multiply(y);else if(p===1)b.copy(h).multiply(v).multiply(m).multiply(y);else{let e=new V().scale(new B().setFromMatrixScale(d)).clone().invert(),t=v.clone().multiply(e);b.copy(h).multiply(m).multiply(t).multiply(y)}let x=l.clone().invert(),S=o.clone().invert(),C=t.clone().multiply(c).multiply(l).multiply(n).multiply(r).multiply(i).multiply(x).multiply(s).multiply(o).multiply(a).multiply(S),w=new V().copyPosition(C),T=u.clone().multiply(w);return f.copyPosition(T),C=f.clone().multiply(b),C.premultiply(u.invert()),C}function $l(e){e||=0;let t=[`ZYX`,`YZX`,`XZY`,`ZXY`,`YXZ`,`XYZ`];return e===6?(console.warn(`THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect.`),t[0]):t[e]}function eu(e){return e.split(`,`).map(function(e){return parseFloat(e)})}function tu(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=e.byteLength),new TextDecoder().decode(new Uint8Array(e,t,n))}function nu(e,t){for(let n=0,r=e.length,i=t.length;n<i;n++,r++)e[r]=t[n]}function ru(e,t,n,r){for(let i=n,a=0;i<r;i++,a++)e[a]=t[i];return e}async function iu(e=`./assets/`,t=`png`,n={}){let r=t=>n.urls&&n.urls[t]||e+t,i=new fc,a={};await Promise.all([`f014_opacity_color`,`f014_head_color`,`f014_body_color`,`f014_head_normal`,`f014_body_normal`].map(async e=>{a[e+`.png`]=await i.loadAsync(r(e+(e.includes(`opacity`)?`.png`:`.`+t)))}));let o=(e,t=!0)=>{let n=a[e];return t&&(n.colorSpace=A),n.anisotropy=4,n},s=new ac;s.addHandler(/\.tga$/i,{load:()=>new Ze,setCrossOrigin(){return this},setPath(){return this},setRequestHeader(){return this},setWithCredentials(){return this}});let c=new Il(s),l=n.fbx?c.parse(n.fbx,``):await c.loadAsync(r(`avatar.fbx`)),u=null;l.traverse(e=>{e.isMesh&&(u=e,e.frustumCulled=!1,e.castShadow=!1,e.material=(Array.isArray(e.material)?e.material:[e.material]).map(e=>{let t=e.name;if(t.includes(`opacity`))return new Fs({name:t,map:o(`f014_opacity_color.png`),transparent:!0,alphaTest:.35,side:2,roughness:.8,metalness:0});let n=t.includes(`head`);return new Fs({name:t,map:o(n?`f014_head_color.png`:`f014_body_color.png`),normalMap:o(n?`f014_head_normal.png`:`f014_body_normal.png`,!1),normalScale:new L(.6,.6),roughness:n?.62:.78,metalness:0})}))});let d={};l.traverse(e=>{e.isBone&&(d[e.name.replace(/^Bip01_?/,``).replace(/_/g,` `).trim()]=e)});let f={};for(let e in u.morphTargetDictionary)f[e.replace(/^blendShape1\./,``)]=u.morphTargetDictionary[e];l.scale.setScalar(.01),l.updateMatrixWorld(!0);let p={};for(let e in d)p[e]=d[e].quaternion.clone();return{root:l,mesh:u,bones:d,morph:f,rest:p}}var K=(e,t,n,r,i,a=`palm`,o={})=>({at:e,off:t,hs:n,F:r,N:i,c:a,...o}),au=(e,t)=>{let n=[];for(let r=0;r<t;r++)n.push(...e);return n},ou=(e=[0,-.04,.03])=>[K(`center`,e,`B`,`fwd+in`,`up`,`palm`)],su=(e=[0,-.04,.03])=>[K(`center`,e,`B`,`fwd+in`,`down`,`palm`)],cu=(e=[.03,0,.03])=>[K(`center`,e,`B`,`fwd+0.5up`,`in`,`palm`)],lu=(e=[.03,0,.04])=>[K(`center`,e,`1`,`up`,`in`,`palm`)],uu={AND:{w:[`and`],dur:.4,R:[K(`neutral`,[-.02,0,0],`5`,`in`,`back`,`palm`),K(`neutral`,[.08,0,0],`FLAT_O`,`in`,`back`,`palm`)]},ON:{w:[`on`,`onto`,`upon`],dur:.4,R:[K(`center`,[.02,.06,.04],`B`,`fwd+in`,`down`,`palm`),K(`center`,[.01,-.02,.04],`B`,`fwd+in`,`down`,`palm`)],L:su([0,-.05,.04])},IT:{w:[`it`,`that`,`there`],dur:.35,R:[K(`neutral`,[.02,-.02,.05],`1`,`fwd+down`,`down`,`index`),K(`neutral`,[.04,-.04,.12],`1`,`fwd+down`,`down`,`index`)]},THIS:{w:[`this`,`these`,`here`],dur:.4,R:[K(`neutral`,[0,-.02,.06],`1`,`down+fwd`,`in`,`index`),K(`neutral`,[0,-.07,.06],`1`,`down+fwd`,`in`,`index`)]},THEY:{w:[`they`,`them`,`their`,`those`],dur:.45,R:[K(`neutral`,[-.04,0,.08],`1`,`fwd`,`down`,`index`),K(`neutral`,[.08,0,.08],`1`,`fwd`,`down`,`index`)]},EVERY:{w:[`every`,`each`,`all of`],dur:.6,R:[K(`center`,[.02,.07,.04],`A`,`up`,`in`,`palm`),K(`center`,[.02,0,.04],`A`,`up`,`in`,`palm`),K(`center`,[.02,.07,.04],`A`,`up`,`in`,`palm`),K(`center`,[.02,0,.04],`A`,`up`,`in`,`palm`)],L:[K(`center`,[.03,0,.03],`A`,`up`,`in`,`palm`)]},ALL:{w:[`all`,`whole`,`entire`,`everything`],dur:.55,R:[K(`center`,[.12,.04,.06],`B`,`up`,`back`,`palm`),K(`center`,[0,-.06,.12],`B`,`up+in`,`back+down`,`palm`),K(`center`,[0,-.06,.05],`B`,`in`,`back`,`back`)],L:[K(`center`,[0,-.02,.03],`B`,`up+in`,`back`,`palm`)]},BOTH:{w:[`both`],dur:.5,R:[K(`center`,[.01,.05,.05],`V`,`up`,`back`,`palm`),K(`center`,[.01,-.07,.05],`V`,`up`,`back`,`palm`)],L:[K(`center`,[0,0,.07],`C`,`fwd+in`,`up`,`palm`)]},SAME:{w:[`same`,`equal`,`equally`,`match`,`matches`,`identical`,`like`],dur:.45,R:[K(`neutral`,[.05,0,.02],`1`,`fwd`,`down`,`index`),K(`neutral`,[-.06,0,.02],`1`,`fwd`,`down`,`index`)],L:[K(`neutral`,[-.06,0,.02],`1`,`fwd`,`down`,`index`)]},OTHER:{w:[`other`,`another`,`opposite`],dur:.4,R:[K(`neutral`,[-.02,0,0],`A`,`fwd`,`in`,`palm`),K(`neutral`,[.06,0,.02],`10`,`up+out`,`up`,`palm`)]},WHAT:{w:[`what`],dur:.5,face:{brows:`down`},R:au([K(`neutral`,[0,-.02,0],`5`,`fwd+out`,`up`,`palm`),K(`neutral`,[.03,-.02,0],`5`,`fwd+out`,`up`,`palm`)],2),L:`mirror`},WHERE:{w:[`where`],dur:.5,face:{brows:`down`},R:au([K(`neutral`,[0,.08,0],`1`,`up`,`fwd`,`palm`),K(`neutral`,[.04,.08,0],`1`,`up+out`,`fwd`,`palm`)],2)},WHY:{w:[`why`],dur:.5,face:{brows:`down`},R:[K(`forehead`,[.03,0,.01],`B`,`up+in`,`back`,`middle`),K(`forehead`,[.06,-.1,.12],`Y`,`up`,`back`,`palm`)]},WHEN:{w:[`when`,`while`,`during`,`as soon as`],dur:.5,R:[K(`center`,[.05,.07,.07],`1`,`fwd+in`,`down`,`index`),K(`center`,[.01,.05,.05],`1`,`fwd+in`,`down`,`index`)],L:lu([.01,0,.05])},WHICH:{w:[`which`],dur:.5,R:[K(`neutral`,[0,.04,0],`A`,`up`,`in`,`palm`),K(`neutral`,[0,-.03,0],`A`,`up`,`in`,`palm`)],L:[K(`neutral`,[0,-.03,0],`A`,`up`,`in`,`palm`),K(`neutral`,[0,.04,0],`A`,`up`,`in`,`palm`)]},NOT:{w:[`not`,`don't`,`dont`,`isn't`,`no longer`],dur:.4,face:{shake:1,neg:1},R:[K(`chin`,[0,-.02,0],`10`,`up`,`in`,`thumb`),K(`chin`,[.02,-.04,.15],`10`,`up`,`in`,`thumb`)]},NO:{w:[`no`,`none`],dur:.45,face:{shake:1,neg:1},R:[K(`neutral_hi`,[0,0,0],`V`,`fwd+up`,`down`,`palm`),K(`neutral_hi`,[0,-.02,0],`FLAT_O`,`fwd+up`,`down`,`palm`)]},NEVER:{w:[`never`],dur:.55,face:{neg:1},R:[K(`neutral_hi`,[-.02,.04,0],`B`,`up`,`in`,`palm`),K(`neutral_hi`,[.03,0,0],`B`,`up`,`in`,`palm`),K(`neutral_hi`,[-.01,-.05,0],`B`,`up`,`in`,`palm`),K(`neutral_hi`,[.05,-.1,0],`B`,`up`,`in`,`palm`)]},CAN:{w:[`can`,`could`,`able`,`possible`],dur:.4,R:[K(`neutral`,[0,.04,0],`S`,`fwd`,`down`,`palm`),K(`neutral`,[0,-.05,0],`S`,`fwd`,`down`,`palm`)],L:`mirror`},CANNOT:{w:[`cannot`,`can't`,`cant`,`unable`],dur:.45,face:{neg:1},R:[K(`center`,[.06,.06,.04],`1`,`fwd+in`,`down`,`index`),K(`center`,[0,-.04,.06],`1`,`fwd+in`,`down`,`index`)],L:lu([.02,0,.05])},MUST:{w:[`must`,`should`,`need`,`needs`,`have to`,`required`,`necessary`],dur:.45,face:{serious:1},R:[K(`neutral`,[0,.04,0],`X`,`fwd`,`down`,`index`),K(`neutral`,[0,-.05,0],`X`,`fwd+down`,`down`,`index`)]},WILL:{w:[`will`,`future`,`later`,`you'll`,`shall`],dur:.45,R:[K(`cheek`,[.03,0,0],`B`,`up`,`in`,`palm`),K(`cheek`,[.06,.02,.15],`B`,`up+fwd`,`in`,`palm`)]},HAVE:{w:[`have`,`has`,`had`,`own`],dur:.4,R:[K(`chest`,[.07,0,.12],`BENT_B`,`in+back`,`back`,`middle`),K(`chest`,[.04,0,.02],`BENT_B`,`in+back`,`back`,`middle`)],L:`mirror`},GIVE:{w:[`give`,`gives`,`hand over`,`handed`,`pass`],dur:.45,R:[K(`chest`,[.04,0,.1],`FLAT_O`,`up+fwd`,`up`,`palm`),K(`neutral`,[0,0,.12],`FLAT_O`,`fwd`,`up`,`palm`)]},TAKE:{w:[`take`,`takes`,`pick up`,`collect`,`get`,`gets`],dur:.45,R:[K(`far`,[0,.02,0],`5`,`fwd`,`down`,`palm`),K(`neutral`,[0,0,-.06],`S`,`fwd`,`down`,`palm`)]},KEEP:{w:[`keep`,`keeps`,`kept`,`stay`,`remain`],dur:.45,R:[K(`center`,[0,.06,.05],`K`,`fwd+in`,`in`,`palm`),K(`center`,[0,.03,.05],`K`,`fwd+in`,`in`,`palm`)],L:[K(`center`,[0,0,.05],`K`,`fwd+in`,`in`,`palm`)]},DO:{w:[`do`,`doing`,`action`,`actions`,`act`],dur:.5,R:au([K(`neutral`,[.02,0,0],`C`,`fwd`,`down`,`palm`),K(`neutral`,[.06,0,0],`C`,`fwd`,`down`,`palm`)],2),L:`mirror`},HAPPEN:{w:[`happen`,`happened`,`happens`,`event`],dur:.45,R:[K(`neutral`,[0,0,0],`1`,`fwd`,`up`,`palm`),K(`neutral`,[0,0,.03],`1`,`fwd`,`down`,`palm`)],L:`mirror`},GOOD:{w:[`good`,`well`,`fine`,`nice`],dur:.45,face:{smile:1},R:[K(`chin`,[0,-.01,0],`B`,`up`,`back`,`middle`),K(`neutral`,[0,0,.08],`B`,`up+fwd`,`back+up`,`palm`)]},WRONG:{w:[`wrong`,`wrongly`,`mistake`,`error`,`incorrect`],dur:.4,face:{neg:1},R:[K(`chin`,[0,0,.05],`Y`,`up`,`back`,`palm`),K(`chin`,[0,0,0],`Y`,`up`,`back`,`palm`)]},RIGHT:{w:[`correct`,`correctly`,`right`,`proper`,`properly`,`accurate`],dur:.45,R:[K(`center`,[0,.09,.05],`1`,`fwd+in`,`in`,`palm`),K(`center`,[0,.03,.05],`1`,`fwd+in`,`in`,`palm`)],L:[K(`center`,[0,0,.05],`1`,`fwd+in`,`in`,`palm`)]},EXACT:{w:[`exactly`,`exact`,`precise`,`precisely`],dur:.5,R:[K(`center`,[0,.08,.05],`X`,`fwd+in`,`down`,`index`),K(`center`,[0,.02,.05],`X`,`fwd+in`,`down`,`index`)],L:[K(`center`,[0,0,.05],`X`,`fwd+in`,`up`,`index`)]},READY:{w:[`ready`,`prepared`,`set up`],dur:.5,R:[K(`neutral`,[-.04,0,0],`R`,`fwd`,`down`,`palm`),K(`neutral`,[.06,0,0],`R`,`fwd`,`down`,`palm`)],L:`mirror`},FINISH:{w:[`done`,`finish`,`finished`,`complete`,`completed`,`already`],dur:.45,R:[K(`neutral_hi`,[0,0,0],`5`,`up`,`back`,`palm`),K(`neutral_hi`,[.04,-.02,.04],`5`,`up+out`,`fwd`,`palm`)],L:`mirror`},NOW:{w:[`now`,`today`,`current`,`currently`],dur:.4,R:[K(`neutral`,[0,.04,0],`Y`,`fwd`,`up`,`palm`),K(`neutral`,[0,-.04,0],`Y`,`fwd`,`up`,`palm`)],L:`mirror`},THEN:{w:[`then`,`next step`],dur:.45,R:[K(`center`,[.03,.06,.06],`1`,`fwd+in`,`down`,`index`),K(`center`,[.03,.06,.02],`1`,`fwd+in`,`down`,`index`)],L:[K(`center`,[0,0,.05],`L`,`up`,`in`,`palm`)]},NEXT:{w:[`next`,`following`,`onward`,`on to`],dur:.45,R:[K(`center`,[0,.03,0],`BENT_B`,`up+in`,`fwd`,`palm`),K(`center`,[0,.03,.12],`BENT_B`,`up+in`,`fwd`,`palm`)],L:[K(`center`,[0,0,.05],`BENT_B`,`up+in`,`back`,`palm`)]},BEFORE:{w:[`before`,`previous`,`earlier`,`prior`],dur:.45,R:[K(`center`,[.02,.01,.06],`BENT_B`,`up+in`,`back`,`back`),K(`center`,[.03,.01,-.06],`BENT_B`,`up+in`,`back`,`back`)],L:[K(`center`,[.02,0,.08],`BENT_B`,`up+in`,`back`,`palm`)]},AFTER:{w:[`after`,`afterwards`,`once`],dur:.45,R:[K(`center`,[.04,.03,.02],`B`,`fwd+in`,`down`,`palm`),K(`center`,[.04,.03,.14],`B`,`fwd+in`,`down`,`palm`)],L:[K(`center`,[0,0,.05],`B`,`in`,`back`,`back`)]},LAST:{w:[`last`,`final`,`finally`],dur:.45,R:[K(`center`,[.03,.08,.06],`I`,`fwd+in`,`down`,`pinky`),K(`center`,[.03,0,.07],`I`,`fwd+in`,`down`,`pinky`)],L:[K(`center`,[0,0,.05],`I`,`up`,`back`,`palm`)]},FIRST:{w:[`first`,`firstly`,`begin with`],dur:.4,R:[K(`center`,[.05,.05,.08],`1`,`fwd+in`,`down`,`index`),K(`center`,[.02,.06,.06],`1`,`fwd+in`,`down`,`index`)],L:[K(`center`,[0,0,.05],`10`,`up`,`back`,`palm`)]},AGAIN:{w:[`again`,`repeat`,`redo`,`once more`],dur:.45,R:[K(`center`,[.05,.08,.04],`BENT_B`,`in`,`up`,`palm`),K(`center`,[0,.03,.04],`BENT_B`,`down`,`down`,`middle`)],L:ou()},ALWAYS:{w:[`always`,`every time`,`constantly`],dur:.55,R:[K(`neutral`,[0,.03,0],`1`,`up+fwd`,`up`,`palm`),K(`neutral`,[.04,0,0],`1`,`up+fwd`,`up`,`palm`),K(`neutral`,[0,-.03,0],`1`,`up+fwd`,`up`,`palm`),K(`neutral`,[-.04,0,0],`1`,`up+fwd`,`up`,`palm`),K(`neutral`,[0,.03,0],`1`,`up+fwd`,`up`,`palm`)]},ONLY:{w:[`only`,`just`,`alone`],dur:.45,R:[K(`neutral_hi`,[0,0,0],`1`,`up`,`fwd`,`palm`),K(`neutral_hi`,[0,-.02,0],`1`,`up`,`back`,`palm`)]},MORE:{w:[`more`,`extra`,`add`,`additional`,`further`],dur:.45,R:[K(`center`,[0,0,.12],`FLAT_O`,`in+fwd`,`in`,`thumb`),K(`center`,[0,0,.06],`FLAT_O`,`in+fwd`,`in`,`thumb`)],L:[K(`center`,[0,0,.06],`FLAT_O`,`in+fwd`,`in`,`thumb`)]},THAN:{w:[`than`],dur:.4,R:[K(`center`,[0,.03,.06],`B`,`fwd+in`,`down`,`palm`),K(`center`,[0,-.05,.06],`B`,`fwd+in`,`down`,`palm`)],L:su([0,0,.05])},NOTHING:{w:[`nothing`,`none`,`empty`],dur:.45,face:{neg:1},R:[K(`neutral`,[0,0,0],`O`,`up`,`in`,`palm`),K(`neutral`,[.08,-.02,.03],`O`,`up+out`,`in`,`palm`)],L:`mirror`},ANY:{w:[`any`,`anything`,`whichever`],dur:.45,R:[K(`neutral`,[0,0,0],`10`,`up`,`back`,`palm`),K(`neutral`,[.05,0,.02],`10`,`out+down`,`down`,`palm`)]},OR:{w:[`or`,`either`],dur:.45,R:[K(`center`,[.03,.06,.07],`1`,`fwd+in`,`down`,`index`),K(`center`,[.03,.02,.07],`1`,`fwd+in`,`down`,`index`)],L:[K(`center`,[0,0,.05],`L`,`up`,`back`,`palm`)]},BY:{w:[`by`,`using a`],dur:.35,R:[K(`neutral`,[0,0,0],`B`,`fwd`,`in`,`palm`),K(`neutral`,[0,0,.06],`B`,`fwd`,`in`,`palm`)]},FOR:{w:[`for`,`purpose`],dur:.45,R:[K(`forehead`,[.045,0,0],`1`,`up+in`,`back`,`index`),K(`forehead`,[.06,-.04,.14],`1`,`fwd`,`down`,`index`)]},FROM:{w:[`from`],dur:.45,R:[K(`center`,[0,.03,.08],`X`,`up`,`back`,`index`),K(`center`,[0,.03,-.02],`X`,`up`,`back`,`index`)],L:lu([0,0,.09])},IN:{w:[`in`,`into`,`inside`,`within`],dur:.4,R:[K(`center`,[0,.08,.06],`FLAT_O`,`down`,`in`,`palm`),K(`center`,[0,.02,.06],`FLAT_O`,`down`,`in`,`palm`)],L:[K(`center`,[0,-.01,.06],`C`,`fwd+in`,`up`,`palm`)]},OUT:{w:[`out`,`outside`,`exit`,`outer`,`external`],dur:.4,R:[K(`center`,[0,0,.06],`5`,`down`,`in`,`palm`),K(`center`,[0,.1,.06],`FLAT_O`,`down`,`in`,`palm`)],L:[K(`center`,[0,-.01,.06],`C`,`fwd+in`,`up`,`palm`)]},OFF:{w:[`off`,`remove`,`removed`,`take off`,`away from`],dur:.4,R:[K(`center`,[0,.02,.06],`B`,`fwd+in`,`down`,`palm`),K(`center`,[.06,.08,.1],`B`,`fwd+in`,`down`,`palm`)],L:su([0,0,.05])},OVER:{w:[`over`,`above`,`across the top`],dur:.45,R:[K(`center`,[-.06,.08,.06],`B`,`fwd+in`,`down`,`palm`),K(`center`,[.08,.08,.06],`B`,`fwd+in`,`down`,`palm`)],L:su([0,0,.05])},UNDER:{w:[`under`,`below`,`beneath`,`underneath`],dur:.45,R:[K(`center`,[.02,-.06,.04],`A`,`up`,`in`,`palm`),K(`center`,[.02,-.06,.1],`A`,`up`,`in`,`palm`)],L:su([0,0,.06])},BETWEEN:{w:[`between`,`among`],dur:.5,R:au([K(`center`,[0,.03,.05],`B`,`fwd+in`,`in`,`palm`),K(`center`,[.03,.03,.05],`B`,`fwd+in`,`in`,`palm`)],2),L:[K(`center`,[0,0,.05],`V`,`fwd+in`,`in`,`palm`)]},THROUGH:{w:[`through`,`thru`,`via`],dur:.45,R:[K(`center`,[.05,0,.03],`B`,`fwd+in`,`in`,`palm`),K(`center`,[-.05,-.02,.06],`B`,`fwd+in`,`in`,`palm`)],L:cu([0,0,.05])},ACROSS:{w:[`across`,`cross`,`crosses`,`crossing`],dur:.45,R:[K(`center`,[.06,.04,.04],`B`,`fwd+in`,`in`,`palm`),K(`center`,[-.08,.04,.08],`B`,`fwd+in`,`in`,`palm`)],L:su([0,0,.05])},ALONG:{w:[`along`,`alongside`,`runs along`,`parallel`],dur:.5,R:[K(`center`,[-.02,.03,0],`B`,`fwd+in`,`down`,`palm`),K(`center`,[-.02,.03,.2],`B`,`fwd+in`,`down`,`palm`)],L:[K(`center`,[0,0,0],`B`,`fwd`,`down`,`palm`)]},AGAINST:{w:[`against`,`flush`,`flush with`,`touching`],dur:.4,R:[K(`center`,[.12,0,.06],`B`,`up`,`in`,`palm`),K(`center`,[.03,0,.06],`B`,`up`,`in`,`middle`)],L:cu([.02,0,.06])},BESIDE:{w:[`beside`,`next to`,`near`,`close`,`nearby`],dur:.45,R:[K(`center`,[.12,0,.05],`BENT_B`,`fwd+in`,`back`,`back`),K(`center`,[.05,0,.05],`BENT_B`,`fwd+in`,`back`,`back`)],L:[K(`center`,[.02,0,.06],`BENT_B`,`fwd+in`,`back`,`palm`)]},APART:{w:[`apart`,`separate`,`spacing`,`space`,`gap`,`centres`,`centers`],dur:.45,R:[K(`center`,[.02,0,.05],`BENT_B`,`fwd`,`in`,`back`),K(`center`,[.13,0,.05],`BENT_B`,`fwd`,`in`,`back`)],L:`mirror`},TOGETHER:{w:[`together`,`joined`,`join`,`connect`,`connected`,`joint`,`joints`],dur:.45,R:[K(`center`,[.08,0,.05],`A`,`fwd`,`in`,`palm`),K(`center`,[.02,0,.05],`A`,`fwd`,`in`,`palm`)],L:`mirror`},AROUND:{w:[`round`,`around`,`all round`],dur:.55,R:[K(`center`,[0,.1,.1],`1`,`down`,`in`,`index`),K(`center`,[.06,.1,.04],`1`,`down`,`in`,`index`),K(`center`,[0,.1,-.02],`1`,`down`,`in`,`index`),K(`center`,[-.06,.1,.04],`1`,`down`,`in`,`index`),K(`center`,[0,.1,.1],`1`,`down`,`in`,`index`)],L:lu([0,0,.04])},UP:{w:[`up`,`upward`,`upwards`,`raise`,`rise`,`rises`],dur:.4,R:[K(`neutral_hi`,[0,-.04,0],`1`,`up`,`fwd`,`palm`),K(`neutral_hi`,[0,.05,0],`1`,`up`,`fwd`,`palm`)]},DOWN:{w:[`down`,`downward`,`downwards`,`lower`,`lowered`],dur:.4,R:[K(`neutral`,[0,.03,0],`1`,`down`,`back`,`palm`),K(`neutral`,[0,-.06,0],`1`,`down`,`back`,`palm`)]},LEFT:{w:[`left`],dur:.4,R:[K(`neutral`,[.02,0,0],`L`,`up`,`fwd`,`palm`),K(`neutral`,[-.1,0,0],`L`,`up`,`fwd`,`palm`)]},RIGHTDIR:{w:[`right side`,`to the right`],dur:.4,R:[K(`neutral`,[0,0,0],`R`,`up`,`fwd`,`palm`),K(`neutral`,[.1,0,0],`R`,`up`,`fwd`,`palm`)]},HIGH:{w:[`high`,`higher`,`top`,`upper`,`tall`,`height`],dur:.4,R:[K(`neutral_hi`,[0,-.03,0],`BENT_B`,`in`,`down`,`palm`),K(`neutral_hi`,[0,.07,0],`BENT_B`,`in`,`down`,`palm`)]},LOW:{w:[`low`,`bottom`,`lowest`,`base`],dur:.4,R:[K(`neutral`,[0,0,0],`BENT_B`,`in`,`down`,`palm`),K(`neutral_lo`,[0,-.06,0],`BENT_B`,`in`,`down`,`palm`)]},MIDDLE:{w:[`middle`,`centre`,`center`,`central`,`centred`,`half`,`centreline`],dur:.5,R:[K(`center`,[0,.08,.05],`BENT_B`,`down`,`in`,`middle`),K(`center`,[0,0,.05],`BENT_B`,`down`,`in`,`middle`)],L:ou()},SIDE:{w:[`side`,`sides`,`beside it`],dur:.45,R:[K(`neutral`,[.05,.06,0],`B`,`fwd`,`in`,`palm`),K(`neutral`,[.05,-.06,0],`B`,`fwd`,`in`,`palm`)]},EDGE:{w:[`edge`,`edges`,`rim`,`border`],dur:.45,R:[K(`center`,[.02,.02,0],`B`,`fwd+in`,`in`,`palm`),K(`center`,[.02,.02,.12],`B`,`fwd+in`,`in`,`palm`)],L:ou([0,0,.05])},CORNER:{w:[`corner`,`corners`,`angle`],dur:.45,R:[K(`center`,[.06,.02,.12],`B`,`fwd+in`,`down`,`middle`),K(`center`,[0,0,.1],`B`,`fwd+in`,`down`,`middle`)],L:[K(`center`,[0,0,.1],`B`,`fwd+in`,`down`,`middle`)]},END:{w:[`end`,`ends`,`tip`,`tips`],dur:.45,R:[K(`center`,[0,.03,.02],`B`,`fwd+in`,`down`,`palm`),K(`center`,[0,-.06,.18],`B`,`fwd+in+down`,`down`,`palm`)],L:[K(`center`,[0,0,.05],`B`,`fwd+in`,`in`,`palm`)]},FAR:{w:[`far`,`distant`,`away`],dur:.45,R:[K(`neutral`,[0,0,0],`A`,`fwd`,`in`,`palm`),K(`far`,[.03,.03,.12],`A`,`fwd`,`in`,`palm`)]},NORTH:{w:[`north`,`northern`],dur:.4,R:[K(`neutral`,[0,-.02,0],`N`,`up`,`fwd`,`palm`),K(`neutral_hi`,[0,.04,0],`N`,`up`,`fwd`,`palm`)]},SOUTH:{w:[`south`,`southern`],dur:.4,R:[K(`neutral_hi`,[0,0,0],`S`,`up`,`fwd`,`palm`),K(`neutral`,[0,-.04,0],`S`,`up`,`fwd`,`palm`)]},EAST:{w:[`east`,`eastern`],dur:.4,R:[K(`neutral`,[0,0,0],`E`,`up`,`fwd`,`palm`),K(`neutral`,[.1,0,0],`E`,`up`,`fwd`,`palm`)]},WEST:{w:[`west`,`western`],dur:.4,R:[K(`neutral`,[.04,0,0],`W`,`up`,`fwd`,`palm`),K(`neutral`,[-.06,0,0],`W`,`up`,`fwd`,`palm`)]},STRAIGHT:{w:[`straight`,`straightness`,`direct`,`aligned`,`line up`,`lined up`],dur:.45,R:[K(`neutral`,[0,.03,-.05],`B`,`fwd`,`in`,`palm`),K(`neutral`,[0,.03,.12],`B`,`fwd`,`in`,`palm`)]},LEVEL:{w:[`level`,`levels`,`horizontal`,`even`],dur:.5,R:[K(`center`,[.03,0,.05],`B`,`fwd+in`,`down`,`palm`),K(`center`,[.15,0,.05],`B`,`fwd+in`,`down`,`palm`)],L:`mirror`},FLAT:{w:[`flat`,`smooth`,`surface`],dur:.45,R:[K(`center`,[0,.03,0],`B`,`fwd`,`down`,`palm`),K(`center`,[.12,.03,.08],`B`,`fwd`,`down`,`palm`)],L:su([0,0,.03])},DIAGONAL:{w:[`diagonal`,`diagonally`,`slope`,`slopes`,`sloping`,`pitch`,`fall`,`falls`],dur:.45,R:[K(`neutral_hi`,[-.05,.05,0],`B`,`in+0.5down`,`down+out`,`palm`),K(`neutral`,[.08,-.05,0],`B`,`in+0.5down`,`down+out`,`palm`)]},UPRIGHT:{w:[`upright`,`vertical`,`vertically`,`plumb`,`stand up`],dur:.45,R:[K(`center`,[.02,0,.05],`1`,`up`,`in`,`palm`),K(`center`,[.02,.12,.05],`1`,`up`,`in`,`palm`)],L:ou([0,-.04,.05])},GO:{w:[`go`,`goes`,`going`,`went`,`run`,`runs`,`travel`,`proceed`,`continue`],dur:.45,R:[K(`neutral`,[0,.04,0],`1`,`up`,`fwd`,`palm`),K(`far`,[0,0,.08],`1`,`fwd`,`down`,`palm`)],L:`mirror`},COME:{w:[`come`,`comes`,`came`,`bring`,`brings`,`return`,`back to`],dur:.45,R:[K(`far`,[0,0,.08],`1`,`fwd`,`down`,`palm`),K(`neutral`,[0,.04,-.04],`1`,`up`,`back`,`palm`)],L:`mirror`},BACK:{w:[`back`,`backward`,`behind`,`reverse`],dur:.4,R:[K(`shoulder`,[0,.03,.12],`10`,`up+back`,`in`,`palm`),K(`shoulder`,[0,.05,.03],`10`,`back`,`in`,`palm`)]},MOVE:{w:[`move`,`moves`,`moved`,`shift`,`swing`,`swung`,`slide`,`slides`],dur:.45,R:[K(`neutral`,[-.04,0,0],`FLAT_O`,`down`,`back`,`palm`),K(`neutral`,[.08,.02,.06],`FLAT_O`,`down`,`back`,`palm`)],L:`mirror`},PUT:{w:[`put`,`place`,`placed`,`set`,`lay`,`lays`,`laid`,`position`,`positions`,`positioned`,`sit`,`sits`,`seat`,`land`,`landed`,`rest`,`rests`],dur:.45,R:[K(`neutral`,[0,.04,-.04],`FLAT_O`,`down+fwd`,`down`,`palm`),K(`neutral`,[0,-.02,.08],`FLAT_O`,`down+fwd`,`down`,`palm`)],L:`mirror`},HOLD:{w:[`hold`,`holds`,`held`,`grip`,`support`,`supports`],dur:.45,R:[K(`neutral`,[0,.02,0],`C`,`in`,`back`,`palm`),K(`neutral`,[0,0,-.02],`S`,`in`,`back`,`palm`)],L:`mirror`},LIFT:{w:[`lift`,`lifted`,`lifting`,`raise up`,`hoist`,`hoisted`],dur:.5,R:[K(`neutral_lo`,[0,0,0],`B`,`fwd`,`up`,`palm`),K(`neutral_hi`,[0,.04,0],`B`,`fwd`,`up`,`palm`)],L:`mirror`},CARRY:{w:[`carry`,`carried`,`carries`,`transport`],dur:.5,R:[K(`neutral`,[0,0,0],`BENT_B`,`fwd`,`up`,`palm`),K(`neutral`,[.12,.02,.02],`BENT_B`,`fwd`,`up`,`palm`)],L:[K(`neutral`,[-.06,0,0],`BENT_B`,`fwd`,`up`,`palm`),K(`neutral`,[.05,.02,.02],`BENT_B`,`fwd`,`up`,`palm`)]},PULL:{w:[`pull`,`pulled`,`drag`,`draw back`,`tension`,`tighten`],dur:.45,R:[K(`neutral`,[0,0,.14],`C`,`in`,`back`,`palm`),K(`neutral`,[0,0,-.02],`S`,`in`,`back`,`palm`)],L:[K(`neutral`,[0,-.02,.18],`C`,`in`,`back`,`palm`),K(`neutral`,[0,-.02,.02],`S`,`in`,`back`,`palm`)]},PUSH:{w:[`push`,`pushed`,`press`,`pressed`],dur:.45,R:[K(`neutral`,[0,0,-.02],`B`,`up`,`fwd`,`palm`),K(`neutral`,[0,0,.13],`B`,`up`,`fwd`,`palm`)],L:`mirror`},DROP:{w:[`drop`,`dropped`,`let go`,`release`,`released`],dur:.4,R:[K(`neutral`,[0,.03,0],`FLAT_O`,`down`,`back`,`palm`),K(`neutral`,[0,-.03,.02],`5`,`down`,`back`,`palm`)]},STOP:{w:[`stop`,`stops`,`halt`,`stopped`],dur:.4,R:[K(`center`,[0,.12,.05],`B`,`fwd`,`in`,`palm`),K(`center`,[0,.01,.05],`B`,`fwd`,`in`,`palm`)],L:ou([0,-.01,.05])},OPEN:{w:[`open`,`opens`,`opened`],dur:.45,R:[K(`center`,[.01,.03,.05],`B`,`up+fwd`,`fwd`,`palm`),K(`center`,[.1,.03,.03],`B`,`up+fwd`,`fwd+in`,`palm`)],L:`mirror`},CLOSE:{w:[`close`,`closes`,`closed`,`shut`],dur:.45,R:[K(`center`,[.1,.03,.03],`B`,`up+fwd`,`fwd+in`,`palm`),K(`center`,[.01,.03,.05],`B`,`up+fwd`,`fwd`,`palm`)],L:`mirror`},CHECK:{w:[`check`,`checks`,`checked`,`inspect`,`inspected`,`inspection`,`examine`,`verify`],dur:.55,R:[K(`eye`,[.04,-.04,.04],`1`,`up`,`back`,`index`),K(`center`,[0,.02,.06],`1`,`down+fwd`,`in`,`index`),K(`center`,[0,.02,.15],`1`,`down+fwd`,`in`,`index`)],L:ou([0,-.02,.08])},MEASURE:{w:[`measure`,`measured`,`measures`,`measurement`,`tape`,`tapes`,`tape measure`],dur:.5,R:au([K(`center`,[.01,.02,.06],`Y`,`fwd`,`down`,`thumb`),K(`center`,[.06,.02,.06],`Y`,`fwd`,`down`,`thumb`)],2),L:`mirror`},MARK:{w:[`mark`,`marks`,`marked`,`marking`,`draw`,`draws`,`drawing`,`write`,`pencil`],dur:.5,R:[K(`center`,[.02,.03,.05],`FLAT_O`,`down+fwd`,`in`,`index`),K(`center`,[.02,.01,.12],`FLAT_O`,`down+fwd`,`in`,`index`)],L:ou([0,-.01,.07])},CUT:{w:[`cut`,`cuts`,`cutting`,`saw`,`sawn`,`trim`,`trimmed`],dur:.55,R:au([K(`center`,[.02,0,0],`B`,`fwd`,`in`,`palm`),K(`center`,[.02,0,.12],`B`,`fwd`,`in`,`palm`)],2),L:su([0,-.03,.06])},FIX:{w:[`fix`,`fixed`,`fixing`,`repair`,`secure`,`secured`,`fasten`,`fastened`,`attach`,`attached`],dur:.5,R:au([K(`center`,[.03,0,.05],`FLAT_O`,`in`,`in`,`index`),K(`center`,[.05,.02,.06],`FLAT_O`,`in+down`,`in`,`index`)],2),L:`mirror`},NAIL:{w:[`nail`,`nails`,`nailed`,`nailing`,`hammer`,`hammered`],dur:.55,R:au([K(`center`,[.02,.1,.06],`S`,`fwd+in`,`in`,`palm`),K(`center`,[.02,.03,.06],`S`,`fwd+in`,`in`,`palm`)],2),L:[K(`center`,[0,-.02,.06],`A`,`fwd+in`,`in`,`palm`)]},DRILL:{w:[`drill`,`drilled`,`drilling`,`bore`],dur:.5,R:[K(`center`,[.03,.02,0],`L`,`in+fwd`,`down`,`index`),K(`center`,[.01,.02,.05],`L`,`in+fwd`,`down`,`index`)],L:cu([0,0,.07])},BOLT:{w:[`bolt`,`bolts`,`bolted`,`screw`,`screws`,`screwed`],dur:.5,R:[K(`center`,[.02,.03,.05],`V`,`down`,`in`,`index`),K(`center`,[.02,.03,.05],`V`,`down`,`back`,`index`),K(`center`,[.02,.03,.05],`V`,`down`,`in`,`index`)],L:ou([0,-.03,.05])},TIE:{w:[`tie`,`tied`,`ties`,`knot`,`lash`,`lashed`],dur:.55,R:[K(`center`,[.03,.02,.05],`H`,`in`,`back`,`palm`),K(`center`,[0,.05,.05],`H`,`in`,`down`,`palm`),K(`center`,[.07,0,.05],`H`,`out`,`back`,`palm`)],L:[K(`center`,[.03,.02,.05],`H`,`in`,`back`,`palm`),K(`center`,[0,0,.05],`H`,`in`,`up`,`palm`),K(`center`,[.07,0,.05],`H`,`out`,`back`,`palm`)]},CLEAN:{w:[`clean`,`cleaned`,`sweep`,`swept`,`clear`],dur:.45,R:[K(`center`,[0,.03,0],`B`,`fwd+in`,`down`,`palm`),K(`center`,[0,.03,.14],`B`,`fwd+in`,`down`,`palm`)],L:ou([0,0,.05])},BRUSH:{w:[`brush`,`brushed`,`paint`,`painted`,`coat`,`coats`,`coated`,`apply`,`applied`],dur:.55,R:au([K(`center`,[.01,.06,.06],`H`,`down+fwd`,`in`,`index`),K(`center`,[.01,-.03,.06],`H`,`down+fwd`,`in`,`index`)],2),L:cu([0,0,.06])},STACK:{w:[`stack`,`stacked`,`pile`,`store`,`stored`],dur:.5,R:[K(`center`,[.03,-.02,.05],`B`,`fwd+in`,`down`,`palm`),K(`center`,[.03,.06,.05],`B`,`fwd+in`,`down`,`palm`),K(`center`,[.03,.14,.05],`B`,`fwd+in`,`down`,`palm`)],L:ou([0,-.06,.05])},READ:{w:[`read`,`reads`,`reading`,`readings`],dur:.5,R:au([K(`center`,[0,.07,.07],`V`,`down`,`in`,`index`),K(`center`,[0,0,.07],`V`,`down`,`in`,`index`)],2),L:cu([0,.02,.06])},LEARN:{w:[`learn`,`learns`,`study`,`understand`],dur:.5,R:[K(`center`,[0,0,.07],`5`,`down`,`down`,`palm`),K(`forehead`,[0,0,.01],`FLAT_O`,`back`,`down`,`index`,{noTilt:1})],L:ou([0,-.02,.06])},PRACTICE:{w:[`practise`,`practice`,`practising`,`training`,`exercise`],dur:.55,R:au([K(`center`,[0,.03,.03],`A`,`fwd+in`,`down`,`palm`),K(`center`,[0,.03,.11],`A`,`fwd+in`,`down`,`palm`)],2),L:lu([0,0,.06])},EXPLORE:{w:[`explore`,`explored`,`exploring`,`discover`,`look around`,`search`],dur:.6,R:[K(`eye`,[.04,-.04,.05],`V`,`up`,`back`,`index`),K(`neutral`,[-.03,.06,.1],`V`,`fwd`,`down`,`index`),K(`neutral`,[.06,.05,.12],`V`,`fwd`,`down`,`index`)]},KNOW:{w:[`know`,`knows`,`aware`],dur:.4,R:[K(`forehead`,[.04,0,.04],`B`,`up+in`,`back`,`middle`),K(`forehead`,[.05,0,.005],`B`,`up+in`,`back`,`middle`)]},THINK:{w:[`think`,`remember`,`consider`],dur:.4,R:[K(`forehead`,[.05,0,.05],`1`,`up+in`,`back`,`index`),K(`temple`,[0,0,0],`1`,`up+in`,`back`,`index`)]},WANT:{w:[`want`,`wants`,`like to`],dur:.45,R:[K(`neutral`,[0,0,.1],`CLAW_5`,`fwd`,`up`,`palm`),K(`neutral`,[0,0,0],`CLAW_5`,`fwd`,`up`,`palm`)],L:`mirror`},HELP:{w:[`help`,`helps`,`assist`],dur:.45,R:[K(`center`,[0,.02,.05],`10`,`up`,`in`,`palm`),K(`center`,[0,.1,.05],`10`,`up`,`in`,`palm`)],L:[K(`center`,[0,-.02,.05],`B`,`fwd+in`,`up`,`palm`),K(`center`,[0,.06,.05],`B`,`fwd+in`,`up`,`palm`)]},TEST:{w:[`test`,`tested`,`try`,`tries`,`trial`],dur:.55,R:[K(`neutral_hi`,[.02,0,0],`X`,`up`,`fwd`,`palm`),K(`neutral`,[.02,-.04,.08],`X`,`up+fwd`,`fwd`,`palm`)],L:`mirror`},SHOWME:{w:[`tell`,`tells`,`say`,`says`,`explain`,`explains`,`describe`],dur:.45,R:[K(`chin`,[0,0,.03],`1`,`up`,`back`,`index`),K(`chin`,[.02,-.04,.16],`1`,`up+fwd`,`back`,`index`)]},LISTEN:{w:[`listen`,`hear`,`audio`,`narration`,`sound`],dur:.45,R:[K(`ear`,[.05,0,.03],`C`,`up`,`in`,`palm`),K(`ear`,[.035,0,.02],`C`,`up`,`in`,`palm`)]},SIGN:{w:[`sign`,`signs`,`signing`,`sign language`],dur:.55,R:[K(`neutral_hi`,[0,.03,0],`1`,`up+in`,`fwd`,`palm`),K(`neutral_hi`,[0,-.03,.04],`1`,`up+in`,`fwd`,`palm`),K(`neutral_hi`,[0,.03,.04],`1`,`up+in`,`fwd`,`palm`)],L:[K(`neutral_hi`,[0,-.03,.04],`1`,`up+in`,`fwd`,`palm`),K(`neutral_hi`,[0,.03,0],`1`,`up+in`,`fwd`,`palm`),K(`neutral_hi`,[0,-.03,.04],`1`,`up+in`,`fwd`,`palm`)]},SIT:{w:[`sit on`,`sits on`,`bears on`,`stands on`],dur:.4,R:[K(`center`,[0,.08,.05],`H`,`fwd+in`,`down`,`middle`),K(`center`,[0,.02,.05],`BENT_V`,`fwd+in`,`down`,`middle`)],L:[K(`center`,[0,0,.05],`H`,`fwd+in`,`down`,`palm`)]},STAND:{w:[`stand`,`stands`,`standing`,`stood`],dur:.4,R:[K(`center`,[0,.08,.05],`V`,`down`,`back`,`index`),K(`center`,[0,.02,.05],`V`,`down`,`back`,`index`)],L:ou([0,-.01,.05])},FALLDOWN:{w:[`fall over`,`falls over`,`collapse`,`collapses`,`topple`],dur:.5,face:{neg:1},R:[K(`center`,[0,.03,.05],`V`,`down`,`back`,`index`),K(`center`,[.1,-.02,.08],`V`,`out+up`,`up`,`index`)],L:ou([0,-.01,.05])},BREAK:{w:[`break`,`breaks`,`broken`,`crack`,`cracks`,`split`,`splits`],dur:.45,face:{neg:1},R:[K(`center`,[.03,0,.05],`S`,`fwd`,`down`,`palm`),K(`center`,[.06,-.03,.05],`S`,`fwd+out`,`in`,`palm`)],L:`mirror`},DRY:{w:[`dry`,`dried`,`drying`],dur:.45,R:[K(`chin`,[.04,0,0],`X`,`in`,`down`,`index`),K(`chin`,[-.04,0,0],`X`,`in`,`down`,`index`)]},WAIT:{w:[`wait`,`waiting`,`pause`],dur:.5,R:au([K(`neutral`,[.06,0,.04],`5`,`fwd+in`,`up`,`palm`),K(`neutral`,[.06,.01,.04],`BENT_5`,`fwd+in`,`up`,`palm`)],2),L:[K(`neutral`,[0,0,.02],`5`,`fwd+in`,`up`,`palm`)]},COVER:{w:[`cover`,`covers`,`covered`,`protect`,`protects`,`protected`],dur:.45,R:[K(`center`,[0,.05,0],`B`,`fwd+in`,`down`,`palm`),K(`center`,[0,.03,.1],`B`,`fwd+in`,`down`,`palm`)],L:[K(`center`,[0,0,.05],`S`,`fwd+in`,`down`,`palm`)]},SEAL:{w:[`seal`,`sealed`,`sealant`,`sealing`,`waterproof`],dur:.45,R:[K(`center`,[0,.06,.05],`A`,`down`,`in`,`thumb`),K(`center`,[0,.01,.05],`A`,`down`,`in`,`thumb`)],L:ou([0,-.02,.05])},CLIP:{w:[`clip`,`clips`,`clipped`,`clamp`,`clamps`,`clamped`],dur:.45,R:[K(`center`,[0,.03,.05],`C`,`fwd+in`,`in`,`palm`),K(`center`,[0,.02,.05],`FLAT_O`,`fwd+in`,`in`,`palm`)],L:su([0,0,.05])},OVERLAP:{w:[`lap`,`laps`,`overlap`,`overlaps`,`lapped`],dur:.45,R:[K(`center`,[-.06,.04,.05],`B`,`fwd+in`,`down`,`palm`),K(`center`,[.03,.02,.05],`B`,`fwd+in`,`down`,`palm`)],L:su([.03,0,.05])},SNAP:{w:[`snap`,`snapped`,`flick`],dur:.4,R:[K(`neutral`,[0,.02,0],`F`,`up`,`fwd`,`palm`),K(`neutral`,[0,0,.02],`L`,`up`,`fwd`,`palm`)]},STRETCH:{w:[`stretch`,`stretched`,`taut`,`pulled tight`],dur:.5,R:[K(`center`,[.02,0,.05],`S`,`fwd`,`in`,`palm`),K(`center`,[.16,0,.05],`S`,`fwd`,`in`,`palm`)],L:`mirror`},TIGHT:{w:[`tight`,`tightly`,`firm`,`firmly`,`secure`,`solid`,`strong`],dur:.45,R:[K(`neutral`,[0,.04,0],`CLAW_5`,`fwd+up`,`back`,`palm`),K(`neutral`,[0,-.03,0],`S`,`fwd+up`,`back`,`palm`)],L:`mirror`},ZOOM:{w:[`zoom`,`enlarge`,`closer`],dur:.45,R:[K(`neutral_hi`,[0,0,.05],`C`,`up`,`in`,`palm`),K(`neutral_hi`,[0,0,-.04],`C`,`up`,`in`,`palm`)],L:`mirror`},TURN:{w:[`turn`,`turns`,`rotate`,`rotates`,`rotation`,`spin`],dur:.5,R:[K(`neutral`,[0,0,.05],`1`,`down`,`back`,`index`),K(`neutral`,[.04,0,0],`1`,`down`,`back`,`index`),K(`neutral`,[0,0,-.04],`1`,`down`,`back`,`index`),K(`neutral`,[-.04,0,0],`1`,`down`,`back`,`index`)]},THING:{w:[`item`,`items`,`thing`,`things`,`object`,`objects`],dur:.45,R:[K(`neutral`,[0,0,0],`B`,`fwd`,`up`,`palm`),K(`neutral`,[.06,-.02,0],`B`,`fwd`,`up`,`palm`),K(`neutral`,[.12,0,0],`B`,`fwd`,`up`,`palm`)]},TOOL:{w:[`tool`,`tools`,`equipment`,`instrument`],dur:.5,R:au([K(`center`,[0,.02,.05],`T`,`up`,`fwd`,`palm`),K(`center`,[0,-.04,.05],`T`,`up`,`fwd`,`palm`)],2),L:cu([0,0,.06])},MATERIAL:{w:[`material`,`materials`,`stuff`,`supplies`],dur:.5,R:[K(`neutral`,[0,.04,0],`M`,`fwd`,`down`,`palm`),K(`neutral`,[.06,0,0],`M`,`fwd`,`down`,`palm`),K(`neutral`,[.12,.04,0],`M`,`fwd`,`down`,`palm`)]},WOOD:{w:[`wood`,`timber`,`timbers`,`wooden`,`lumber`,`board`,`boards`,`plank`],dur:.55,R:au([K(`center`,[.03,.02,0],`B`,`fwd+in`,`in`,`palm`),K(`center`,[.03,.02,.09],`B`,`fwd+in`,`in`,`palm`)],2),L:su([0,-.02,.04])},METAL:{w:[`metal`,`steel`,`iron`,`tin`,`galvanised`],dur:.45,R:au([K(`chin`,[0,-.03,.01],`X`,`in`,`down`,`index`),K(`chin`,[0,-.03,.04],`X`,`in`,`down`,`index`)],2)},WATER:{w:[`water`,`wet`,`liquid`],dur:.45,R:au([K(`chin`,[.01,0,.02],`W`,`up+in`,`in`,`index`),K(`chin`,[.01,0,0],`W`,`up+in`,`in`,`index`)],2)},RAIN:{w:[`rain`,`rainwater`,`rains`,`raining`],dur:.5,R:au([K(`neutral_hi`,[0,.06,0],`CLAW_5`,`fwd`,`down`,`palm`),K(`neutral`,[0,-.02,0],`CLAW_5`,`fwd`,`down`,`palm`)],2),L:`mirror`},WIND:{w:[`wind`,`winds`,`windy`,`blow`,`blows`,`air`],dur:.55,R:au([K(`neutral_hi`,[.02,0,0],`5`,`up`,`in`,`palm`),K(`neutral_hi`,[.1,0,0],`5`,`up`,`in`,`palm`)],2),L:`mirror`},GROUND:{w:[`ground`,`floor`,`earth`,`soil`],dur:.45,R:[K(`neutral_lo`,[0,0,0],`B`,`fwd`,`down`,`palm`),K(`neutral_lo`,[.14,0,0],`B`,`fwd`,`down`,`palm`)],L:`mirror`},HOUSE:{w:[`house`,`building`,`buildings`,`home`],dur:.6,R:[K(`center_hi`,[.02,.06,.02],`B`,`in+up`,`down+out`,`middle`),K(`center_hi`,[.1,-.03,.02],`B`,`up`,`in`,`palm`),K(`center`,[.1,-.03,.02],`B`,`up`,`in`,`palm`)],L:`mirror`},WALL:{w:[`wall`,`walls`,`brickwork`,`masonry`],dur:.5,R:[K(`neutral`,[-.05,.02,0],`B`,`up`,`fwd`,`palm`),K(`neutral`,[.08,.02,0],`B`,`up`,`fwd`,`palm`)],L:`mirror`},LINE:{w:[`line`,`lines`,`string`,`strings`,`string line`,`chalk line`,`cord`],dur:.45,R:[K(`center`,[.02,.03,.05],`I`,`fwd`,`in`,`pinky`),K(`center`,[.17,.03,.05],`I`,`fwd`,`in`,`pinky`)],L:`mirror`},ROPE:{w:[`rope`,`ropes`,`cable`,`cables`],dur:.5,R:[K(`center`,[.02,0,.05],`R`,`fwd`,`in`,`palm`),K(`center`,[.17,0,.05],`R`,`fwd`,`in`,`palm`)],L:`mirror`},SQUARE:{w:[`square`,`squared`,`squaring`,`right angle`,`rectangle`],dur:.6,R:[K(`center`,[0,.08,.05],`1`,`fwd`,`down`,`index`),K(`center`,[.1,.08,.05],`1`,`fwd`,`down`,`index`),K(`center`,[.1,-.02,.05],`1`,`fwd`,`down`,`index`)],L:[K(`center`,[0,.08,.05],`1`,`fwd`,`down`,`index`),K(`center`,[.1,.08,.05],`1`,`fwd`,`down`,`index`),K(`center`,[.1,-.02,.05],`1`,`fwd`,`down`,`index`)]},SIZE:{w:[`size`,`sizes`,`dimension`,`dimensions`],dur:.45,R:[K(`center`,[.02,0,.05],`Y`,`fwd`,`down`,`thumb`),K(`center`,[.12,0,.05],`Y`,`fwd`,`down`,`thumb`)],L:`mirror`},LONG:{w:[`long`,`length`,`lengths`,`longer`,`length of`],dur:.5,R:[K(`center`,[.06,0,.05],`1`,`up+in`,`down`,`index`),K(`center`,[-.1,.12,.1],`1`,`up+in`,`down`,`index`)],L:[K(`center`,[-.02,.06,.06],`B`,`out+up`,`down`,`palm`)]},SHORT:{w:[`short`,`shorter`,`small`,`little`,`tiny`],dur:.45,R:au([K(`center`,[0,.03,.05],`H`,`fwd+in`,`in`,`middle`),K(`center`,[0,.03,.09],`H`,`fwd+in`,`in`,`middle`)],2),L:[K(`center`,[0,0,.07],`H`,`fwd+in`,`in`,`palm`)]},BIG:{w:[`big`,`large`,`wide`,`width`],dur:.45,R:[K(`neutral`,[-.02,0,0],`L`,`fwd`,`in`,`palm`),K(`neutral`,[.1,0,0],`L`,`fwd`,`in`,`palm`)],L:`mirror`},HALFOF:{w:[`half of`,`halfway`],dur:.45,R:[K(`neutral`,[0,0,0],`H`,`in`,`back`,`palm`),K(`neutral`,[0,-.03,0],`H`,`in`,`down`,`palm`)]},FULL:{w:[`full`,`filled`,`fill`],dur:.45,R:[K(`center`,[0,.03,.05],`B`,`fwd+in`,`down`,`palm`),K(`center`,[-.06,.03,.05],`B`,`fwd+in`,`down`,`palm`)],L:[K(`center`,[0,0,.05],`S`,`fwd+in`,`down`,`palm`)]},SHAPE:{w:[`shape`,`shapes`,`outline`,`outlined`,`outlines`,`pattern`,`template`,`jig`],dur:.55,R:[K(`neutral_hi`,[0,0,0],`A`,`up`,`fwd`,`palm`),K(`neutral`,[.04,-.06,0],`A`,`up`,`fwd`,`palm`),K(`neutral_lo`,[0,-.06,0],`A`,`up`,`fwd`,`palm`)],L:`mirror`},PIECE:{w:[`piece`,`pieces`,`part`,`parts`,`member`,`members`,`component`,`components`,`section`],dur:.45,R:[K(`center`,[.03,.02,.08],`B`,`fwd+in`,`in`,`palm`),K(`center`,[.03,.02,.04],`BENT_B`,`fwd+in`,`in`,`palm`)],L:ou([0,-.02,.06])},PLACEN:{w:[`site`,`place`,`location`,`area`,`zone`,`spot`,`workplace`],dur:.55,R:[K(`neutral`,[-.02,0,.06],`P`,`fwd+in`,`down`,`palm`),K(`neutral`,[.06,-.02,0],`P`,`fwd+in`,`down`,`palm`),K(`neutral`,[-.02,-.04,-.04],`P`,`fwd+in`,`down`,`palm`)],L:`mirror`},TIME:{w:[`time`,`times`,`minute`,`minutes`],dur:.4,R:[K(`center`,[0,.05,.05],`X`,`down`,`in`,`index`),K(`center`,[0,.01,.05],`X`,`down`,`in`,`index`)],L:su([0,-.01,.05])},NAME:{w:[`name`,`names`,`named`,`label`,`labels`,`labelled`,`tag`,`tags`,`tagged`],dur:.45,R:au([K(`center`,[0,.04,.05],`H`,`in+fwd`,`in`,`middle`),K(`center`,[0,.01,.05],`H`,`in+fwd`,`in`,`middle`)],2),L:[K(`center`,[0,0,.05],`H`,`in+fwd`,`in`,`palm`)]},LIST:{w:[`list`,`lists`,`checklist`],dur:.55,R:[K(`center`,[0,.1,.06],`BENT_B`,`in`,`back`,`middle`),K(`center`,[0,.03,.06],`BENT_B`,`in`,`back`,`middle`),K(`center`,[0,-.04,.06],`BENT_B`,`in`,`back`,`middle`)],L:[K(`center`,[.03,.04,.03],`B`,`up`,`out`,`palm`)]},CARD:{w:[`card`,`cards`,`panel`,`box`],dur:.45,R:[K(`center`,[0,0,.05],`L`,`up`,`fwd`,`palm`),K(`center`,[.1,0,.05],`L`,`up`,`fwd`,`palm`)],L:`mirror`},BUTTON:{w:[`button`,`buttons`,`icon`],dur:.4,R:[K(`chest`,[0,.05,.04],`F`,`up`,`back`,`index`),K(`chest`,[0,.05,0],`F`,`up`,`back`,`index`)]},COMPUTER_MOUSE:{w:[`mouse`,`cursor`,`pointer`],dur:.5,R:au([K(`center`,[.04,.02,.04],`BENT_5`,`fwd`,`down`,`palm`),K(`center`,[.07,.02,.09],`BENT_5`,`fwd`,`down`,`palm`)],2),L:ou([0,-.03,.06])},CAMERA:{w:[`camera`,`view`,`views`,`screen`],dur:.45,R:[K(`eye`,[.07,-.02,.06],`C`,`up`,`in`,`palm`),K(`eye`,[.07,-.02,.06],`X`,`up`,`in`,`palm`)]},ARROW:{w:[`arrow`,`arrows`],dur:.45,R:[K(`neutral`,[0,0,0],`1`,`fwd+out`,`down`,`index`),K(`neutral`,[.08,0,.04],`1`,`fwd+out`,`down`,`index`)]},COLOR:{w:[`colour`,`color`,`colours`],dur:.45,R:au([K(`chin`,[0,-.01,.02],`5`,`up`,`back`,`index`),K(`chin`,[.01,-.01,.02],`BENT_5`,`up`,`back`,`index`)],2)},GREEN:{w:[`green`],dur:.45,R:au([K(`neutral_hi`,[0,0,0],`G`,`up`,`in`,`palm`),K(`neutral_hi`,[0,0,0],`G`,`up`,`in+fwd`,`palm`)],2)},RED:{w:[`red`],dur:.4,R:[K(`chin`,[0,.03,.01],`1`,`up`,`back`,`index`),K(`chin`,[0,-.02,.01],`X`,`up`,`back`,`index`)]},BLUE:{w:[`blue`],dur:.45,R:au([K(`neutral_hi`,[0,0,0],`B`,`up`,`in`,`palm`),K(`neutral_hi`,[0,0,0],`B`,`up`,`in+fwd`,`palm`)],2)},HAND:{w:[`hand`,`hands`,`manual`,`by hand`],dur:.45,R:[K(`center`,[.02,.03,.04],`B`,`in`,`back`,`palm`),K(`center`,[.02,0,.08],`B`,`in`,`back`,`palm`)],L:[K(`center`,[0,0,.04],`B`,`in`,`back`,`back`)]},SAFE:{w:[`safe`,`safely`,`safety`],dur:.45,R:[K(`center`,[.02,0,.05],`S`,`up`,`in`,`palm`),K(`center`,[.1,0,.05],`S`,`up`,`fwd`,`palm`)],L:`mirror`},DANGER:{w:[`danger`,`dangerous`,`risk`,`hazard`],dur:.45,face:{brows:`down`},R:au([K(`center`,[0,0,.05],`A`,`up`,`in`,`thumb`),K(`center`,[0,.07,.03],`A`,`up`,`in`,`thumb`)],2),L:[K(`center`,[0,0,.03],`S`,`up`,`back`,`back`)]},WAY:{w:[`way`,`ways`,`method`,`route`,`path`,`road`],dur:.45,R:[K(`neutral`,[0,0,0],`B`,`fwd`,`in`,`palm`),K(`neutral`,[0,0,.15],`B`,`fwd`,`in`,`palm`)],L:`mirror`},CASE:{w:[`case`,`example`,`if`],dur:.45,R:[K(`neutral_hi`,[0,0,0],`F`,`up`,`in`,`palm`),K(`neutral`,[0,.02,0],`F`,`up`,`in`,`palm`)],L:[K(`neutral`,[0,.02,0],`F`,`up`,`in`,`palm`),K(`neutral_hi`,[0,0,0],`F`,`up`,`in`,`palm`)]},TEMPORARY:{w:[`temporary`,`temporarily`,`for now`],dur:.45,R:[K(`center`,[0,0,.05],`H`,`fwd`,`in`,`palm`),K(`center`,[0,0,.11],`H`,`fwd`,`in`,`palm`)],L:[K(`center`,[0,-.02,.06],`H`,`fwd+in`,`in`,`palm`)]},PERMANENT:{w:[`permanent`,`permanently`,`forever`,`final position`],dur:.5,R:[K(`neutral`,[0,.02,-.03],`Y`,`fwd`,`down`,`palm`),K(`neutral`,[0,-.02,.12],`Y`,`fwd`,`down`,`palm`)],L:`mirror`},NEW:{w:[`new`,`fresh`],dur:.45,R:[K(`center`,[.06,0,.06],`BENT_B`,`in`,`up`,`palm`),K(`center`,[-.04,.03,.06],`BENT_B`,`in`,`up`,`palm`)],L:ou([0,-.02,.06])},TWO:{w:[`two`,`second`,`twice`],dur:.35,R:[K(`neutral_hi`,[0,0,0],`2`,`up`,`back`,`palm`)]},THREE:{w:[`three`,`third`],dur:.35,R:[K(`neutral_hi`,[0,0,0],`3`,`up`,`back`,`palm`)]},FOUR:{w:[`four`,`fourth`],dur:.35,R:[K(`neutral_hi`,[0,0,0],`4`,`up`,`back`,`palm`)]},FIVE:{w:[`five`,`fifth`],dur:.35,R:[K(`neutral_hi`,[0,0,0],`5`,`up`,`back`,`palm`)]},SIX:{w:[`six`],dur:.35,R:[K(`neutral_hi`,[0,0,0],`6`,`up`,`fwd`,`palm`)]},SEVEN:{w:[`seven`],dur:.35,R:[K(`neutral_hi`,[0,0,0],`7`,`up`,`fwd`,`palm`)]},EIGHT:{w:[`eight`],dur:.35,R:[K(`neutral_hi`,[0,0,0],`8`,`up`,`fwd`,`palm`)]},NINE:{w:[`nine`],dur:.35,R:[K(`neutral_hi`,[0,0,0],`9`,`up`,`fwd`,`palm`)]},TEN:{w:[`ten`],dur:.45,R:[K(`neutral_hi`,[0,0,0],`10`,`up`,`in`,`palm`),K(`neutral_hi`,[0,0,0],`10`,`up`,`fwd+in`,`palm`),K(`neutral_hi`,[0,0,0],`10`,`up`,`in`,`palm`)]},HUNDRED:{w:[`hundred`,`hundreds`],dur:.4,R:[K(`neutral_hi`,[0,0,0],`1`,`up`,`back`,`palm`),K(`neutral_hi`,[0,-.01,.03],`C`,`up`,`in`,`palm`)]},THOUSAND:{w:[`thousand`,`thousands`],dur:.45,R:[K(`center`,[0,.06,.06],`BENT_B`,`down`,`in`,`middle`),K(`center`,[0,0,.06],`BENT_B`,`down`,`in`,`middle`)],L:ou()},MILLIMETRE:{w:[`millimetres`,`millimetre`,`mm`,`millimeters`,`millimeter`],dur:.45,R:[K(`fs`,[0,0,0],`M`,`up`,`fwd`,`palm`),K(`fs`,[.02,0,0],`M`,`up`,`fwd`,`palm`)]},METRE:{w:[`metres`,`metre`,`m`,`meters`,`meter`],dur:.35,R:[K(`fs`,[0,0,0],`M`,`up`,`fwd`,`palm`),K(`fs`,[0,-.02,.02],`M`,`up`,`fwd`,`palm`)]},DEGREE:{w:[`degrees`,`degree`],dur:.45,R:[K(`neutral_hi`,[0,0,0],`O`,`up`,`in+0.5fwd`,`palm`),K(`neutral_hi`,[0,.03,0],`O`,`up`,`in+0.5fwd`,`palm`)]},LITRE:{w:[`litre`,`litres`,`l`,`liter`],dur:.35,R:[K(`fs`,[0,0,0],`L`,`up`,`fwd`,`palm`)]},TRUSS:{w:[`truss`,`trusses`],prov:1,dur:.65,R:[K(`center_hi`,[0,.07,.06],`1`,`down+out`,`fwd`,`index`),K(`center`,[.13,0,.06],`1`,`down+out`,`fwd`,`index`),K(`center`,[0,0,.06],`1`,`in`,`fwd`,`index`)],L:`mirror`},RAFTER:{w:[`rafter`,`rafters`,`pattern rafter`],prov:1,dur:.5,R:[K(`center_hi`,[0,.06,.05],`B`,`out+down`,`in+down`,`middle`),K(`center`,[.16,-.02,.05],`B`,`out+down`,`in+down`,`middle`)]},TIEBEAM:{w:[`tie beam`,`tie beams`,`ceiling joist`],prov:1,dur:.55,R:[K(`center`,[0,-.02,.05],`H`,`out`,`down`,`palm`),K(`center`,[.16,-.02,.05],`H`,`out`,`down`,`palm`)],L:`mirror`},BEAM:{w:[`beam`,`beams`,`joist`,`joists`,`bearer`,`bearers`],prov:1,dur:.5,R:[K(`center`,[0,0,.05],`H`,`out`,`down`,`palm`),K(`center`,[.16,0,.05],`H`,`out`,`down`,`palm`)],L:`mirror`},KINGPOST:{w:[`king post`,`king posts`,`kingpost`],prov:1,dur:.6,R:[K(`center`,[0,-.04,.05],`K`,`up`,`in`,`palm`),K(`center`,[0,.12,.05],`K`,`up`,`in`,`palm`)]},POST:{w:[`post`,`posts`,`stud`,`studs`,`upright`],prov:1,dur:.45,R:[K(`center`,[0,-.04,.05],`H`,`up`,`in`,`palm`),K(`center`,[0,.1,.05],`H`,`up`,`in`,`palm`)]},STRUT:{w:[`strut`,`struts`,`brace`,`braces`,`bracing`,`braced`],prov:1,dur:.5,R:[K(`center`,[0,-.02,.05],`H`,`up+out`,`in+up`,`palm`),K(`center`,[.1,.1,.05],`H`,`up+out`,`in+up`,`palm`)]},PURLIN:{w:[`purlin`,`purlins`,`batten`,`battens`],prov:1,dur:.55,R:[K(`center_hi`,[0,-.04,.05],`H`,`out`,`down`,`palm`),K(`center_hi`,[.17,-.04,.05],`H`,`out`,`down`,`palm`)],L:[K(`center`,[0,0,.05],`B`,`out+0.6up`,`in+up`,`palm`)]},WALLPLATE:{w:[`wall plate`,`wall plates`,`plate`,`plates`,`base plate`,`base plates`],prov:1,dur:.55,R:[K(`center`,[0,.04,.03],`H`,`out`,`down`,`palm`),K(`center`,[.16,.04,.03],`H`,`out`,`down`,`palm`)],L:[K(`center`,[0,0,.05],`B`,`out`,`fwd`,`palm`)]},RIDGE:{w:[`ridge`,`ridges`,`apex`,`apexes`,`peak`,`top of the truss`],prov:1,dur:.55,R:[K(`center_hi`,[.12,-.05,.05],`B`,`in+up`,`down+out`,`middle`),K(`center_hi`,[.02,.05,.05],`B`,`in+up`,`down+out`,`middle`)],L:`mirror`},GABLE:{w:[`gable`,`gables`,`gable end`,`gable ends`],prov:1,dur:.6,R:[K(`center_hi`,[.02,.07,.05],`B`,`in+up`,`fwd`,`middle`),K(`center`,[.14,-.02,.05],`B`,`in+up`,`fwd`,`middle`),K(`center`,[0,-.02,.05],`B`,`up`,`fwd`,`palm`)],L:`mirror`},EAVES:{w:[`eaves`,`eave`,`overhang`,`overhangs`],prov:1,dur:.55,R:[K(`neutral_hi`,[-.04,0,0],`B`,`out+0.5down`,`down`,`palm`),K(`neutral`,[.1,-.02,.08],`B`,`out+0.5down`,`down`,`palm`)]},FASCIA:{w:[`fascia`,`fascias`,`fascia board`,`barge board`,`barge boards`,`bargeboard`,`barge`],prov:1,dur:.55,R:[K(`center`,[0,.03,.08],`B`,`out`,`fwd`,`palm`),K(`center`,[.17,.03,.08],`B`,`out`,`fwd`,`palm`)],L:`mirror`},GUTTER:{w:[`gutter`,`gutters`,`guttering`,`channel`],prov:1,dur:.55,R:[K(`center`,[0,0,.06],`C`,`out`,`up`,`palm`),K(`center`,[.18,-.02,.06],`C`,`out`,`up`,`palm`)],L:`mirror`},DOWNPIPE:{w:[`downpipe`,`downpipes`,`down pipe`,`pipe`,`pipes`],prov:1,dur:.55,R:[K(`neutral_hi`,[0,0,0],`C`,`in`,`down`,`palm`),K(`neutral_lo`,[0,-.02,0],`C`,`in`,`down`,`palm`)]},OUTLET:{w:[`outlet`,`outlets`,`drain`,`drains`,`downpipe outlet`],prov:1,dur:.5,R:[K(`center`,[0,0,.06],`O`,`down`,`in`,`palm`),K(`center`,[0,-.08,.06],`O`,`down`,`in`,`palm`)],L:[K(`center`,[0,0,.06],`C`,`out`,`up`,`palm`)]},BRACKET:{w:[`bracket`,`brackets`,`gutter bracket`,`gutter brackets`,`hanger`],prov:1,dur:.5,R:[K(`center`,[0,.02,.06],`C`,`out`,`up`,`palm`),K(`center`,[0,.02,.03],`C`,`out`,`up`,`palm`)],L:cu([0,.03,.02])},SHEET:{w:[`sheet`,`sheets`,`roof sheet`,`roof sheets`,`roofing sheet`,`iron sheet`,`cgi`],prov:1,dur:.55,R:au([K(`center`,[0,.03,.04],`B`,`out`,`down`,`palm`),K(`center`,[.06,.03,.08],`B`,`out`,`down`,`palm`)],2),L:ou([0,0,.05])},RIDGECAP:{w:[`ridge cover`,`ridge cap`,`ridge capping`,`flashing`,`flashings`],prov:1,dur:.55,R:[K(`center_hi`,[0,.03,.04],`BENT_B`,`down`,`back`,`palm`),K(`center_hi`,[0,.03,.14],`BENT_B`,`down`,`back`,`palm`)]},HEEL:{w:[`heel`,`heels`,`heel joint`,`heel joints`],prov:1,dur:.5,R:[K(`center`,[.02,.02,.05],`B`,`in+up`,`down+in`,`palm`),K(`center`,[.02,-.02,.05],`B`,`in+up`,`down+in`,`palm`)],L:su([.04,-.04,.05])},BIRDSMOUTH:{w:[`birdsmouth`,`birdsmouths`,`bird's mouth`,`notch`,`notches`],prov:1,dur:.5,R:[K(`center`,[.02,.02,.05],`G`,`fwd+in`,`down`,`index`),K(`center`,[.02,.02,.05],`G`,`fwd+in`,`down`,`index`,{}),K(`center`,[.02,.02,.05],`X`,`fwd+in`,`down`,`index`)],L:su([0,-.02,.05])},GUSSET:{w:[`gusset plate`,`gusset plates`,`gusset`,`gussets`,`gang nail`,`nail plate`,`cleat`,`cleats`,`strap`,`straps`],prov:1,dur:.5,R:[K(`center`,[.02,0,.07],`B`,`up`,`back`,`palm`),K(`center`,[.02,0,.05],`B`,`up`,`back`,`palm`)],L:[K(`center`,[0,0,.03],`S`,`up`,`back`,`back`)]},WASHER:{w:[`washer`,`washers`],prov:1,dur:.4,R:[K(`neutral`,[0,0,0],`O`,`up`,`fwd`,`palm`),K(`neutral`,[0,0,.02],`F`,`up`,`fwd`,`palm`)]},SCAFFOLD:{w:[`scaffold`,`scaffolding`,`platform`,`platforms`,`trestle`,`trestles`,`ladder`,`ladders`],prov:1,dur:.6,R:[K(`neutral_lo`,[0,0,0],`V`,`up`,`fwd`,`palm`),K(`neutral`,[0,.03,0],`V`,`up`,`fwd`,`palm`),K(`neutral_hi`,[0,.03,0],`V`,`up`,`fwd`,`palm`)],L:[K(`neutral_lo`,[0,.05,0],`V`,`up`,`fwd`,`palm`),K(`neutral`,[0,.08,0],`V`,`up`,`fwd`,`palm`),K(`neutral_hi`,[0,0,0],`V`,`up`,`fwd`,`palm`)]},CORRUGATION:{w:[`corrugation`,`corrugations`,`crest`,`crests`,`rib`,`ribs`],prov:1,dur:.6,R:[K(`center`,[-.04,.03,.05],`B`,`fwd`,`down`,`palm`),K(`center`,[0,0,.05],`B`,`fwd`,`down`,`palm`),K(`center`,[.04,.03,.05],`B`,`fwd`,`down`,`palm`),K(`center`,[.08,0,.05],`B`,`fwd`,`down`,`palm`)]},PRESERVATIVE:{w:[`preservative`,`preservatives`,`treatment`,`treated`,`treat`,`creosote`],prov:1,dur:.55,R:au([K(`center`,[.01,.06,.06],`H`,`down+fwd`,`in`,`index`),K(`center`,[.01,-.03,.06],`H`,`down+fwd`,`in`,`index`)],2),L:su([0,-.04,.04])},GRAIN:{w:[`grain`,`wood grain`],prov:1,dur:.5,R:[K(`center`,[-.02,0,0],`4`,`fwd`,`down`,`palm`),K(`center`,[-.02,0,.14],`4`,`fwd`,`down`,`palm`)],L:su([0,-.03,.04])},LASER:{w:[`laser`,`laser level`],prov:1,dur:.5,R:[K(`neutral`,[0,0,0],`1`,`fwd`,`down`,`index`),K(`far`,[0,0,.1],`1`,`fwd`,`down`,`index`)]},SPIRITLEVEL:{w:[`spirit level`,`bubble`,`bubbles`],prov:1,dur:.5,R:[K(`center`,[0,.04,.05],`F`,`out`,`fwd`,`index`),K(`center`,[.03,.04,.05],`F`,`out`,`fwd`,`index`)],L:[K(`center`,[0,0,.05],`B`,`out`,`fwd`,`palm`)]},CHALK:{w:[`chalk`,`chalk reel`],prov:1,dur:.45,R:au([K(`center`,[0,.02,.06],`A`,`fwd`,`in`,`thumb`),K(`center`,[.06,.02,.06],`A`,`fwd`,`in`,`thumb`)],2),L:ou([0,-.02,.06])},SPAN:{w:[`span`,`spans`,`distance`],dur:.5,R:[K(`center`,[.02,0,.05],`B`,`fwd`,`in`,`palm`),K(`center`,[.17,0,.05],`B`,`fwd`,`in`,`palm`)],L:`mirror`},TAIL:{w:[`tail`,`tails`,`rafter tail`],prov:1,dur:.45,R:[K(`center`,[.06,0,.05],`1`,`out+down`,`fwd`,`index`),K(`center`,[.16,-.05,.05],`1`,`out+down`,`fwd`,`index`)],L:su([.04,.02,.05])},DRIP:{w:[`drip`,`drips`,`dripping`,`drop of water`],dur:.5,R:au([K(`neutral`,[0,0,0],`S`,`down`,`back`,`palm`),K(`neutral`,[0,-.04,0],`1`,`down`,`back`,`index`)],2)},WASTE:{w:[`waste`,`off-cut`,`offcut`,`offcuts`,`swarf`,`rubbish`,`dirt`,`dust`],dur:.45,R:[K(`center`,[0,.02,.06],`FLAT_O`,`down+fwd`,`in`,`palm`),K(`center`,[.08,-.05,.12],`5`,`down+fwd`,`in`,`palm`)],L:ou([0,-.03,.06])},BLOCK:{w:[`block`,`blocks`,`blocking`,`packer`,`packers`,`brick`,`bricks`],dur:.45,R:[K(`center`,[0,.05,.05],`B`,`fwd+in`,`down`,`palm`),K(`center`,[0,.02,.05],`B`,`fwd+in`,`down`,`palm`)],L:[K(`center`,[0,-.04,.05],`B`,`fwd+in`,`up`,`palm`)]},TRAY:{w:[`tray`,`trays`,`bucket`,`buckets`,`tin`,`container`],dur:.45,R:[K(`center`,[0,0,.05],`C`,`fwd`,`in`,`palm`),K(`center`,[0,0,.05],`C`,`fwd`,`in`,`palm`)],L:`mirror`},BLADE:{w:[`blade`,`blades`,`saw blade`,`knife`],dur:.45,R:au([K(`center`,[0,.03,.03],`H`,`fwd+in`,`in`,`palm`),K(`center`,[0,.03,.11],`H`,`fwd+in`,`in`,`palm`)],2),L:[K(`center`,[0,0,.06],`H`,`fwd+in`,`in`,`palm`)]},STOCK:{w:[`stock`,`supply`],dur:.45,R:[K(`center`,[0,.04,.05],`B`,`fwd+in`,`down`,`palm`),K(`center`,[0,.12,.05],`B`,`fwd+in`,`down`,`palm`)],L:ou([0,-.04,.05])},WORKER:{w:[`carpenter`,`carpenters`,`worker`,`workers`,`builder`,`builders`,`roofer`,`roofers`,`team`],dur:.6,R:[K(`center`,[.03,.02,0],`S`,`fwd+in`,`down`,`palm`),K(`center`,[.03,-.02,0],`S`,`fwd+in`,`down`,`palm`),K(`neutral`,[.04,.08,-.04],`B`,`fwd`,`in`,`palm`),K(`neutral`,[.04,-.1,-.04],`B`,`fwd`,`in`,`palm`)],L:[K(`center`,[0,-.06,.04],`S`,`fwd+in`,`down`,`palm`),K(`center`,[0,-.06,.04],`S`,`fwd+in`,`down`,`palm`),K(`neutral`,[.04,.08,-.04],`B`,`fwd`,`in`,`palm`),K(`neutral`,[.04,-.1,-.04],`B`,`fwd`,`in`,`palm`)]},FOOT:{w:[`foot`,`feet`,`footing`],dur:.45,R:[K(`center`,[0,.02,.06],`FLAT_O`,`down`,`in`,`palm`),K(`center`,[0,-.06,.06],`FLAT_O`,`down`,`in`,`palm`)],L:su([0,-.08,.06])},FRAME:{w:[`frame`,`frames`,`framing`,`structure`,`assembly`,`assembled`,`assemble`],dur:.6,R:[K(`center`,[.03,0,.05],`4`,`in`,`back`,`palm`),K(`center`,[.03,.08,.05],`4`,`in`,`back`,`palm`)],L:[K(`center`,[.03,.08,.05],`4`,`in`,`back`,`palm`),K(`center`,[.03,0,.05],`4`,`in`,`back`,`palm`)]},WEIGHT:{w:[`weight`,`heavy`,`load`,`loads`,`balance`,`balanced`],dur:.5,R:[K(`neutral`,[0,.03,0],`B`,`fwd`,`up`,`palm`),K(`neutral`,[0,-.05,0],`B`,`fwd`,`up`,`palm`)],L:`mirror`}},q=(e,t,n,r,i,a=`palm`,o={})=>({at:e,off:t,hs:n,F:r,N:i,c:a,...o}),du=(e,t)=>{let n=[];for(let r=0;r<t;r++)n.push(...e);return n},fu=(e=[0,-.04,.04])=>[q(`center`,e,`B`,`fwd+in`,`up`,`palm`)],pu=(e=[0,-.04,.04])=>[q(`center`,e,`B`,`fwd+in`,`down`,`palm`)],mu=(e=[.03,0,.04])=>[q(`center`,e,`B`,`fwd+0.5up`,`in`,`palm`)],hu={SIMULATION:{w:[`simulation`,`simulations`,`simulator`],prov:1,dur:.5,R:[q(`fs`,[0,0,0],`S`,`up`,`fwd`,`palm`),q(`fs`,[.01,0,0],`I`,`up`,`fwd`,`palm`),q(`fs`,[.02,0,0],`M`,`up`,`fwd`,`palm`)]},POINT:{w:[`point`,`points`,`pointed`,`dot`,`spot on`],dur:.4,R:[q(`center`,[0,.08,.06],`1`,`down`,`in`,`index`),q(`center`,[0,.01,.06],`1`,`down`,`in`,`index`)],L:fu([0,-.02,.06])},FACE:{w:[`face`,`faces`,`surface`,`surfaces`],dur:.45,R:[q(`cheek`,[0,.03,.04],`1`,`up+in`,`back`,`index`),q(`chin`,[.03,.02,.03],`1`,`up+in`,`back`,`index`),q(`cheek`,[0,.03,.04],`1`,`up+in`,`back`,`index`)]},HOOK:{w:[`hook`,`hooks`,`hooked`,`hooking`,`catch`,`catches`,`caught`],dur:.45,R:[q(`center`,[0,.06,.05],`X`,`fwd+in`,`down`,`index`),q(`center`,[0,.01,.05],`X`,`fwd+in`,`down`,`index`)],L:[q(`center`,[0,-.02,.05],`X`,`fwd+in`,`up`,`index`)]},VERGE:{w:[`verge`,`verges`,`verge flashing`],prov:1,dur:.5,R:[q(`neutral_hi`,[0,.03,0],`B`,`down+out`,`fwd`,`palm`),q(`neutral`,[.08,-.03,0],`B`,`down+out`,`fwd`,`palm`)]},FIT:{w:[`fit`,`fits`,`fitted`,`fitting`,`insert`,`inserted`,`slot`,`slots`],dur:.45,R:[q(`center`,[.02,.07,.05],`B`,`fwd+in`,`down`,`palm`),q(`center`,[.01,.02,.05],`B`,`fwd+in`,`down`,`palm`)],L:[q(`center`,[0,-.01,.05],`C`,`fwd+in`,`up`,`palm`)]},LID:{w:[`lid`,`lids`,`cap`,`caps`],dur:.45,R:[q(`center`,[0,.08,.05],`B`,`fwd+in`,`down`,`palm`),q(`center`,[0,.03,.05],`B`,`fwd+in`,`down`,`palm`)],L:[q(`center`,[0,-.02,.05],`C`,`fwd+in`,`in`,`palm`)]},UNTIL:{w:[`until`,`till`,`up to`],dur:.5,R:[q(`center`,[.06,.04,0],`1`,`up+fwd`,`in`,`index`),q(`center`,[.01,.06,.08],`1`,`fwd+in`,`down`,`index`)],L:[q(`center`,[0,.03,.09],`1`,`up`,`out+fwd`,`palm`)]},ABOUT:{w:[`about`,`approximately`,`around about`,`roughly`],dur:.5,R:[q(`center`,[0,.02,.12],`1`,`in`,`down`,`index`),q(`center`,[.05,.05,.08],`1`,`in`,`down`,`index`),q(`center`,[0,.08,.04],`1`,`in`,`down`,`index`)],L:[q(`center`,[0,.03,.05],`FLAT_O`,`fwd+in`,`in`,`palm`)]},LIE:{w:[`lie`,`lies`,`lying`,`flat on`],dur:.45,R:[q(`center`,[0,.07,.05],`V`,`fwd+in`,`up`,`palm`),q(`center`,[0,.02,.05],`V`,`fwd+in`,`up`,`palm`)],L:fu([0,-.01,.05])},BITE:{w:[`bite`,`bites`,`grip into`,`dig in`,`dig`],dur:.45,R:[q(`neutral`,[0,.03,0],`CLAW_5`,`fwd`,`down`,`palm`),q(`neutral`,[0,-.02,0],`CLAW_5`,`fwd+down`,`down`,`palm`)]},STAKE:{w:[`stake`,`stakes`,`peg`,`pegs`,`pin`,`pins`],prov:1,dur:.45,R:[q(`neutral`,[0,.04,0],`1`,`down`,`back`,`index`),q(`neutral_lo`,[0,-.02,0],`1`,`down`,`back`,`index`)]},ROW:{w:[`row`,`rows`,`course`,`courses`,`layer`,`layers`],dur:.5,R:[q(`center`,[0,0,.05],`BENT_B`,`fwd`,`in`,`back`),q(`center`,[.16,0,.05],`BENT_B`,`fwd`,`in`,`back`)],L:`mirror`},STILL:{w:[`still`,`yet`,`remains`],dur:.45,R:[q(`neutral`,[0,.02,0],`Y`,`fwd`,`down`,`palm`),q(`neutral`,[0,-.03,.1],`Y`,`fwd`,`down`,`palm`)]},SPLASH:{w:[`splash`,`splashes`,`spill`,`spills`,`spilled`,`spray`],dur:.45,R:[q(`neutral`,[0,0,0],`S`,`fwd`,`down`,`palm`),q(`neutral`,[.04,.04,.05],`5`,`fwd+up`,`up`,`palm`)],L:`mirror`},BEAD:{w:[`bead`,`beads`,`strip`,`strips`,`run of sealant`],prov:1,dur:.5,R:[q(`center`,[0,.02,.05],`F`,`fwd`,`in`,`index`),q(`center`,[.16,.02,.05],`F`,`fwd`,`in`,`index`)],L:[q(`center`,[0,.02,.05],`F`,`fwd`,`in`,`index`)]},SOAK:{w:[`soak`,`soaks`,`soaked`,`absorb`,`absorbs`,`penetrate`,`penetrates`],dur:.5,R:[q(`center`,[0,.05,.05],`5`,`down`,`down`,`palm`),q(`center`,[0,0,.05],`FLAT_O`,`down`,`down`,`palm`)],L:pu([0,-.04,.05])},STICK:{w:[`stick`,`sticks`,`stuck`,`glue`,`adhere`],dur:.45,R:[q(`center`,[0,.06,.05],`H`,`down`,`in`,`middle`),q(`center`,[0,.01,.05],`H`,`down`,`in`,`middle`)],L:fu([0,-.01,.05])},SKEW:{w:[`skew`,`skewed`,`twisted`,`crooked`,`out of square`,`not straight`],dur:.5,face:{neg:1},R:[q(`neutral`,[0,.04,0],`B`,`fwd`,`in`,`palm`),q(`neutral`,[.04,-.02,.06],`B`,`fwd+out`,`in+down`,`palm`)]},BINDER:{w:[`binder`,`binders`,`stiffener`,`longitudinal tie`],prov:1,dur:.5,R:[q(`center_hi`,[0,-.06,0],`H`,`fwd`,`down`,`palm`),q(`center_hi`,[0,-.06,.16],`H`,`fwd`,`down`,`palm`)]},CONTROL:{w:[`control`,`controls`,`controlled`,`manage`,`operate`],dur:.55,R:du([q(`neutral`,[0,0,.02],`X`,`fwd`,`in`,`palm`),q(`neutral`,[0,0,.08],`X`,`fwd`,`in`,`palm`)],2),L:[q(`neutral`,[0,0,.08],`X`,`fwd`,`in`,`palm`),q(`neutral`,[0,0,.02],`X`,`fwd`,`in`,`palm`),q(`neutral`,[0,0,.08],`X`,`fwd`,`in`,`palm`),q(`neutral`,[0,0,.02],`X`,`fwd`,`in`,`palm`)]},HANG:{w:[`hang`,`hangs`,`hanging`,`hung`,`suspend`],dur:.45,R:[q(`center`,[0,.05,.05],`X`,`fwd+in`,`down`,`index`),q(`center`,[0,.02,.05],`X`,`fwd+in`,`down`,`index`)],L:[q(`center`,[0,.03,.05],`1`,`fwd+in`,`down`,`palm`)]},GAUGE:{w:[`gauge`,`gauges`,`reading`,`dial`],dur:.45,R:[q(`center`,[0,.03,.06],`G`,`up`,`fwd`,`index`),q(`center`,[.03,.05,.06],`G`,`up+out`,`fwd`,`index`)],L:mu([0,0,.05])},CIRCLE:{w:[`circular`,`circle`,`circles`,`round shape`,`ring`],dur:.55,R:[q(`neutral`,[0,.05,0],`1`,`fwd`,`down`,`index`),q(`neutral`,[.05,0,0],`1`,`fwd`,`down`,`index`),q(`neutral`,[0,-.05,0],`1`,`fwd`,`down`,`index`),q(`neutral`,[-.05,0,0],`1`,`fwd`,`down`,`index`),q(`neutral`,[0,.05,0],`1`,`fwd`,`down`,`index`)]},TONGUE:{w:[`tongue`,`tongues`,`blade of the square`],prov:1,dur:.4,R:[q(`mouth`,[0,-.01,.03],`1`,`up`,`back`,`index`),q(`mouth`,[0,-.01,0],`1`,`up`,`back`,`index`)]},MAKE:{w:[`make`,`makes`,`made`,`making`,`create`,`creates`,`form`,`forms`,`formed`,`produce`],dur:.45,R:du([q(`center`,[0,.06,.05],`S`,`fwd+in`,`in`,`palm`),q(`center`,[0,.06,.05],`S`,`fwd+in`,`back`,`palm`)],2),L:[q(`center`,[0,0,.05],`S`,`fwd+in`,`in`,`palm`)]},SMOKE:{w:[`smoking`,`smoke`,`cigarette`,`cigarettes`],dur:.45,R:du([q(`mouth`,[.01,0,.02],`V`,`up+in`,`back`,`index`),q(`mouth`,[.04,0,.08],`V`,`up+in`,`back`,`index`)],2)},FIRE:{w:[`fire`,`flame`,`flames`,`flammable`,`burn`,`burns`,`burning`],dur:.55,face:{brows:`down`},R:du([q(`neutral`,[0,-.02,0],`5`,`up`,`back`,`palm`),q(`neutral`,[0,.07,0],`5`,`up`,`back`,`palm`)],2),L:[q(`neutral`,[0,.07,0],`5`,`up`,`back`,`palm`),q(`neutral`,[0,-.02,0],`5`,`up`,`back`,`palm`),q(`neutral`,[0,.07,0],`5`,`up`,`back`,`palm`),q(`neutral`,[0,-.02,0],`5`,`up`,`back`,`palm`)]},POISON:{w:[`toxic`,`poison`,`poisonous`,`fumes`,`solvent`,`chemical`,`chemicals`],dur:.5,face:{neg:1},R:[q(`chest`,[0,.08,.06],`BENT_V`,`up+in`,`back`,`palm`),q(`chest`,[0,.08,.02],`BENT_V`,`up+in`,`back`,`palm`)],L:[q(`chest`,[0,.06,.04],`BENT_V`,`up+in`,`back`,`palm`)]},ROT:{w:[`rot`,`rots`,`rotting`,`rotten`,`decay`,`rust`,`rusts`,`rusting`],dur:.5,face:{neg:1},R:[q(`center`,[0,.03,.05],`FLAT_O`,`down`,`in`,`palm`),q(`center`,[.02,0,.07],`5`,`down`,`in`,`palm`)],L:fu([0,-.04,.05])},SHADE:{w:[`shade`,`shaded`,`shadow`,`out of the sun`],dur:.45,R:[q(`neutral_hi`,[0,.06,0],`B`,`fwd`,`down`,`palm`),q(`neutral_hi`,[0,.02,.05],`B`,`fwd`,`down`,`palm`)]},SUN:{w:[`sun`,`sunlight`,`heat`,`hot`],dur:.45,R:[q(`neutral_hi`,[0,.1,0],`FLAT_O`,`up+fwd`,`down`,`palm`),q(`neutral_hi`,[0,.04,.02],`5`,`down+fwd`,`down`,`palm`)]},HOLE:{w:[`hole`,`holes`,`opening`],dur:.45,R:[q(`center`,[0,.05,.06],`1`,`down`,`in`,`index`),q(`center`,[0,0,.06],`1`,`down`,`in`,`index`)],L:[q(`center`,[0,-.01,.06],`O`,`fwd`,`up`,`palm`)]},SPANNER:{w:[`spanner`,`spanners`,`wrench`,`socket`],dur:.5,R:[q(`center`,[.03,.02,.05],`V`,`in+fwd`,`down`,`index`),q(`center`,[.03,.02,.05],`V`,`in+fwd`,`back`,`index`),q(`center`,[.03,.02,.05],`V`,`in+fwd`,`down`,`index`)],L:[q(`center`,[0,0,.05],`1`,`up`,`in`,`palm`)]},CLAW:{w:[`claw`,`claws`,`claw hammer`],dur:.4,R:[q(`neutral`,[0,.02,0],`BENT_V`,`fwd`,`down`,`palm`),q(`neutral`,[0,.02,-.04],`BENT_V`,`fwd+up`,`down`,`palm`)]},MEET:{w:[`meet`,`meets`,`meeting`,`join up`,`converge`],dur:.45,R:[q(`center`,[.1,0,.05],`1`,`up`,`in`,`palm`),q(`center`,[.02,0,.05],`1`,`up`,`in`,`palm`)],L:`mirror`},UPSIDE:{w:[`upside down`,`upside`,`inverted`,`flip`,`flipped`],dur:.45,R:[q(`neutral`,[0,0,0],`B`,`fwd`,`down`,`palm`),q(`neutral`,[0,0,0],`B`,`fwd`,`up`,`palm`)]},NOBODY:{w:[`nobody`,`no one`,`no-one`],dur:.5,face:{shake:1,neg:1},R:[q(`neutral`,[0,0,0],`O`,`up`,`in`,`palm`),q(`neutral`,[.08,-.02,.03],`O`,`up+out`,`in`,`palm`)],L:`mirror`},LEAN:{w:[`lean`,`leans`,`leaning`,`leaned`,`tilt`,`tilts`,`tilted`,`sag`,`sags`,`sagged`],dur:.45,R:[q(`center`,[0,.06,.05],`V`,`down`,`back`,`index`),q(`center`,[.06,.03,.05],`V`,`down+in`,`back`,`index`)],L:fu([0,-.02,.05])},ERECT:{w:[`erect`,`erected`,`erecting`,`stand up`,`raise into place`,`put up`],dur:.5,R:[q(`center`,[.02,0,.08],`1`,`fwd`,`down`,`palm`),q(`center`,[.02,.06,.05],`1`,`up`,`in`,`palm`)],L:fu([0,-.03,.05])},BAR:{w:[`bar`,`bars`,`rod`,`rods`,`tool bar`,`toolbar`,`lever`,`levered`],dur:.45,R:[q(`center`,[.02,0,.05],`G`,`out`,`fwd`,`index`),q(`center`,[.14,0,.05],`G`,`out`,`fwd`,`index`)],L:`mirror`},WORD:{w:[`word`,`words`,`text`,`caption`,`captions`,`cc`,`message`,`messages`],dur:.45,R:[q(`center`,[.02,.05,.05],`G`,`up`,`in`,`index`),q(`center`,[.02,.03,.05],`G`,`up`,`in`,`index`)],L:[q(`center`,[0,.03,.05],`1`,`up`,`out`,`palm`)]},RESULT:{w:[`result`,`results`,`outcome`,`effect`],dur:.45,R:[q(`center`,[.02,.03,0],`R`,`fwd`,`down`,`palm`),q(`center`,[.02,-.01,.12],`R`,`fwd+down`,`down`,`palm`)],L:pu([0,-.03,.05])},REAL:{w:[`real`,`really`,`true`,`actual`,`actually`],dur:.45,R:[q(`chin`,[0,-.01,.01],`1`,`up`,`in`,`index`),q(`chin`,[0,0,.16],`1`,`up+fwd`,`in`,`index`)]},UNDO:{w:[`undo`,`undid`,`cancel`,`take back`],dur:.5,R:[q(`center`,[0,.06,.06],`1`,`fwd+in`,`down`,`index`),q(`center`,[.05,0,.06],`1`,`fwd+in`,`down`,`index`),q(`center`,[-.04,0,.06],`1`,`fwd+in`,`down`,`index`)],L:fu([0,-.02,.06])},TICK:{w:[`tick`,`ticks`,`ticked`,`check mark`],dur:.4,R:[q(`neutral`,[-.03,.02,0],`1`,`fwd`,`down`,`index`),q(`neutral`,[0,-.02,0],`1`,`fwd`,`down`,`index`),q(`neutral`,[.06,.06,0],`1`,`fwd`,`down`,`index`)]},INSTRUCTION:{w:[`instructions`,`instruction`,`guidance`,`directions`,`rules`],dur:.55,R:[q(`neutral`,[0,.02,-.02],`X`,`fwd`,`in`,`index`),q(`neutral`,[.02,0,.12],`X`,`fwd`,`in`,`index`)],L:`mirror`},POUR:{w:[`pour`,`pours`,`poured`,`pouring`],dur:.45,R:[q(`neutral`,[0,.04,0],`A`,`up`,`in`,`palm`),q(`neutral`,[0,.02,0],`A`,`in+up`,`down`,`palm`)]},PLUS:{w:[`plus`,`and also`,`add on`],dur:.4,R:[q(`center`,[.03,.03,.06],`1`,`in`,`back`,`palm`),q(`center`,[0,.03,.06],`1`,`in`,`back`,`palm`)],L:[q(`center`,[0,0,.07],`1`,`up`,`back`,`palm`)]},REACH:{w:[`reach`,`reaches`,`reached`,`arrive`,`arrives`,`get to`],dur:.45,R:[q(`neutral`,[0,0,-.02],`BENT_B`,`fwd`,`back`,`back`),q(`far`,[0,.02,.06],`BENT_B`,`fwd`,`back`,`back`)]},DEEP:{w:[`deep`,`depth`,`thick`,`thickness`],dur:.45,R:[q(`center`,[0,.06,.06],`1`,`down`,`in`,`index`),q(`center`,[0,-.06,.06],`1`,`down`,`in`,`index`)],L:pu([0,0,.06])},WITHOUT:{w:[`without`,`no need for`],dur:.45,R:[q(`center`,[.035,0,.05],`A`,`fwd`,`in`,`palm`),q(`center`,[.1,-.02,.06],`5`,`fwd+out`,`in`,`palm`)],L:`mirror`},INSECT:{w:[`insect`,`insects`,`termite`,`termites`,`borer`,`borers`,`bug`,`bugs`],dur:.45,R:du([q(`nose`,[0,-.01,.03],`3`,`in+up`,`in`,`thumb`),q(`nose`,[0,-.01,.03],`3`,`in`,`in`,`thumb`)],2)},BENT:{w:[`bent`,`bend`,`bends`,`bending`,`curved`,`curve`],dur:.45,R:[q(`neutral`,[0,.02,0],`B`,`up`,`in`,`palm`),q(`neutral`,[0,0,.02],`BENT_B`,`up`,`in`,`palm`)]},DARK:{w:[`dark`,`darker`,`darkened`],dur:.45,R:[q(`eye`,[.02,.05,.08],`B`,`up+in`,`back`,`palm`),q(`eye`,[0,-.05,.06],`B`,`up+in`,`back`,`palm`)],L:`mirror`},BROWN:{w:[`brown`],dur:.4,R:[q(`cheek`,[0,.03,.02],`B`,`up`,`in`,`palm`),q(`cheek`,[0,-.05,.02],`B`,`up`,`in`,`palm`)]},DIP:{w:[`dip`,`dipped`,`dipping`,`immerse`],dur:.45,R:[q(`center`,[0,.1,.05],`FLAT_O`,`down`,`in`,`palm`),q(`center`,[0,.02,.05],`FLAT_O`,`down`,`in`,`palm`),q(`center`,[0,.1,.05],`FLAT_O`,`down`,`in`,`palm`)],L:[q(`center`,[0,-.01,.05],`C`,`fwd+in`,`up`,`palm`)]},TOOMUCH:{w:[`excess`,`too`,`too much`,`overflow`,`surplus`],dur:.45,R:[q(`center`,[0,.03,.05],`BENT_B`,`fwd+in`,`down`,`palm`),q(`center`,[.1,.06,.05],`BENT_B`,`fwd+in`,`down`,`palm`)],L:pu([0,0,.05])},BIT:{w:[`bit`,`bits`,`drill bit`,`a little`],dur:.4,R:[q(`neutral`,[0,0,0],`10`,`up`,`fwd`,`thumb`),q(`neutral`,[0,0,0],`A`,`up`,`fwd`,`thumb`)]},HEAD:{w:[`head`,`heads`],dur:.4,R:[q(`temple`,[0,.03,.03],`BENT_B`,`up`,`in`,`middle`),q(`cheek`,[.02,-.03,0],`BENT_B`,`up`,`in`,`middle`)]},NUT:{w:[`nut`,`nuts`,`lock nut`],prov:1,dur:.45,R:[q(`center`,[0,.03,.06],`C`,`down`,`in`,`palm`),q(`center`,[0,.03,.06],`C`,`down`,`back`,`palm`)],L:[q(`center`,[0,-.01,.06],`1`,`up`,`in`,`palm`)]},ENOUGH:{w:[`enough`,`sufficient`,`plenty`],dur:.45,R:[q(`center`,[-.02,.05,.06],`B`,`fwd+in`,`down`,`palm`),q(`center`,[.02,.05,.14],`B`,`fwd+in`,`down`,`palm`)],L:[q(`center`,[0,0,.06],`S`,`fwd+in`,`in`,`palm`)]},FINGER:{w:[`finger`,`fingers`,`thumb`],dur:.4,R:[q(`center`,[.03,.05,.05],`1`,`in`,`down`,`index`),q(`center`,[.03,.03,.05],`1`,`in`,`down`,`index`)],L:[q(`center`,[0,.03,.05],`5`,`up`,`back`,`palm`)]},FOLLOW:{w:[`follow`,`follows`,`followed`,`track`,`tracks`,`progress`],dur:.45,R:[q(`center`,[.03,0,-.04],`A`,`fwd`,`in`,`palm`),q(`center`,[.03,0,.12],`A`,`fwd`,`in`,`palm`)],L:[q(`center`,[0,0,.05],`A`,`fwd`,`in`,`palm`),q(`center`,[0,0,.2],`A`,`fwd`,`in`,`palm`)]},PER:{w:[`per`,`each one`],dur:.45,R:[q(`center`,[.02,.08,.05],`A`,`up`,`in`,`palm`),q(`center`,[.02,.01,.05],`A`,`up`,`in`,`palm`)],L:[q(`center`,[.03,0,.04],`A`,`up`,`in`,`palm`)]},FLAG:{w:[`flag`,`flags`,`marker`,`warning`],dur:.5,R:du([q(`neutral_hi`,[0,.02,0],`B`,`out+up`,`fwd`,`palm`),q(`neutral_hi`,[0,.02,0],`B`,`out+up`,`fwd+in`,`palm`)],2),L:[q(`neutral`,[.08,-.05,0],`1`,`up`,`in`,`palm`)]},VALLEY:{w:[`valley`,`valleys`,`trough`,`troughs`],prov:1,dur:.5,R:[q(`neutral_hi`,[-.06,.03,0],`B`,`in+down`,`up+in`,`palm`),q(`neutral`,[0,-.03,0],`B`,`in+down`,`up+in`,`palm`)],L:`mirror`},STAIN:{w:[`stain`,`stains`,`stained`,`streak`,`streaks`,`mark on`,`dirty`],dur:.45,face:{neg:1},R:[q(`center`,[0,.05,.06],`5`,`down`,`down`,`palm`),q(`center`,[0,.01,.06],`CLAW_5`,`down`,`down`,`palm`)],L:fu([0,-.02,.06])},PAGE:{w:[`page`,`pages`,`screen page`],dur:.45,R:[q(`center`,[0,.02,.06],`A`,`up`,`in`,`thumb`),q(`center`,[0,.06,.06],`A`,`up`,`in`,`thumb`)],L:mu([0,0,.06])},SCROLL:{w:[`scroll`,`scrolls`,`scrolling`,`wheel`],dur:.5,R:du([q(`neutral`,[0,.02,0],`1`,`fwd`,`down`,`index`),q(`neutral`,[0,-.02,0],`X`,`fwd`,`down`,`index`)],2)},ALOUD:{w:[`aloud`,`out loud`,`voice`,`speak`,`speaks`,`spoken`],dur:.45,R:[q(`chin`,[0,-.01,.03],`5`,`up`,`back`,`palm`),q(`neutral_hi`,[.03,0,.1],`5`,`up+fwd`,`back`,`palm`)]},DETAIL:{w:[`detail`,`details`,`detailed`,`specific`],dur:.45,R:du([q(`center`,[0,.05,.05],`G`,`down`,`in`,`index`),q(`center`,[0,0,.05],`G`,`down`,`in`,`index`)],2),L:fu([0,-.02,.05])},GREY:{w:[`grey`,`gray`],dur:.45,R:du([q(`center`,[.02,0,0],`5`,`in`,`back`,`palm`),q(`center`,[.02,0,.06],`5`,`in`,`back`,`palm`)],2),L:[q(`center`,[.02,0,.06],`5`,`in`,`back`,`palm`),q(`center`,[.02,0,0],`5`,`in`,`back`,`palm`),q(`center`,[.02,0,.06],`5`,`in`,`back`,`palm`),q(`center`,[.02,0,0],`5`,`in`,`back`,`palm`)]},BROOM:{w:[`broom`,`brooms`,`brush off`],dur:.5,R:du([q(`center`,[0,-.02,.06],`S`,`down`,`in`,`palm`),q(`center`,[.08,-.04,.06],`S`,`down`,`in`,`palm`)],2),L:[q(`center`,[-.02,.06,.04],`S`,`down`,`in`,`palm`),q(`center`,[.04,.05,.04],`S`,`down`,`in`,`palm`),q(`center`,[-.02,.06,.04],`S`,`down`,`in`,`palm`),q(`center`,[.04,.05,.04],`S`,`down`,`in`,`palm`)]},LEAVE:{w:[`leave`,`leaves`,`left in place`],dur:.45,R:[q(`neutral`,[0,.04,0],`5`,`fwd`,`down`,`palm`),q(`neutral`,[0,-.02,.06],`5`,`fwd+down`,`down`,`palm`)],L:`mirror`},PLAN:{w:[`plan`,`plans`,`layout`,`design`,`drawing plan`],dur:.5,R:[q(`center`,[.06,0,0],`B`,`fwd`,`in`,`palm`),q(`center`,[.06,0,.14],`B`,`fwd`,`in`,`palm`)],L:`mirror`},MANY:{w:[`many`,`lots`,`several`,`much`,`most`],dur:.45,R:du([q(`neutral`,[0,0,0],`S`,`up`,`up`,`palm`),q(`neutral`,[0,.02,.02],`5`,`up`,`up`,`palm`)],2),L:`mirror`},BODY:{w:[`body`,`bodies`],dur:.45,R:[q(`chest`,[.04,.04,.02],`B`,`in`,`back`,`palm`),q(`stomach`,[.04,.04,.02],`B`,`in`,`back`,`palm`)],L:`mirror`},ROLL:{w:[`roll`,`rolls`,`rolled`,`coil`,`coiled`,`unwind`,`unroll`,`reel`],dur:.55,R:[q(`center`,[0,.06,.08],`1`,`in`,`back`,`palm`),q(`center`,[0,0,.11],`1`,`in`,`back`,`palm`),q(`center`,[0,-.03,.06],`1`,`in`,`back`,`palm`),q(`center`,[0,.03,.03],`1`,`in`,`back`,`palm`)],L:[q(`center`,[0,0,.03],`1`,`in`,`back`,`palm`),q(`center`,[0,.05,.06],`1`,`in`,`back`,`palm`),q(`center`,[0,0,.1],`1`,`in`,`back`,`palm`),q(`center`,[0,-.04,.06],`1`,`in`,`back`,`palm`)]},WALK:{w:[`walk`,`walks`,`walking`,`climb`,`climbs`,`climbing`,`step on`],dur:.5,R:du([q(`neutral`,[0,.02,0],`B`,`fwd`,`down`,`palm`),q(`neutral`,[0,-.02,.05],`B`,`fwd`,`down`,`palm`)],2),L:[q(`neutral`,[0,-.02,.05],`B`,`fwd`,`down`,`palm`),q(`neutral`,[0,.02,0],`B`,`fwd`,`down`,`palm`),q(`neutral`,[0,-.02,.05],`B`,`fwd`,`down`,`palm`),q(`neutral`,[0,.02,0],`B`,`fwd`,`down`,`palm`)]},BUT:{w:[`but`,`however`,`although`,`except`],dur:.45,R:[q(`center`,[.01,0,.06],`1`,`up+fwd`,`fwd`,`palm`),q(`center`,[.1,0,.06],`1`,`up+fwd`,`fwd`,`palm`)],L:`mirror`},NUMBER:{w:[`number`,`numbers`,`numbered`,`count`,`counts`,`counted`],dur:.45,R:[q(`center`,[0,.04,.06],`FLAT_O`,`in`,`back`,`palm`),q(`center`,[0,.04,.06],`FLAT_O`,`in`,`fwd`,`palm`)],L:[q(`center`,[0,.04,.06],`FLAT_O`,`in`,`fwd`,`palm`),q(`center`,[0,.04,.06],`FLAT_O`,`in`,`back`,`palm`)]},WHO:{w:[`who`,`whom`,`whose`],dur:.45,face:{brows:`down`},R:du([q(`chin`,[0,0,.04],`L`,`up`,`in`,`thumb`),q(`chin`,[0,0,.04],`X`,`up`,`in`,`thumb`)],2)},MAYBE:{w:[`may`,`maybe`,`might`,`perhaps`,`possibly`,`would`],dur:.5,R:du([q(`neutral`,[0,.03,0],`B`,`fwd`,`up`,`palm`),q(`neutral`,[0,-.03,0],`B`,`fwd`,`up`,`palm`)],1),L:[q(`neutral`,[0,-.03,0],`B`,`fwd`,`up`,`palm`),q(`neutral`,[0,.03,0],`B`,`fwd`,`up`,`palm`)]},HELMET:{w:[`helmet`,`helmets`,`hard hat`,`harness`,`harnesses`,`lifeline`,`guardrail`,`guard rail`,`guard`,`barrier`],prov:1,dur:.5,R:[q(`temple`,[.05,.07,.02],`C`,`up+in`,`in`,`palm`),q(`temple`,[.05,.03,.02],`C`,`up+in`,`in`,`palm`)],L:`mirror`},TOWARD:{w:[`towards`,`toward`,`to face`],dur:.45,R:[q(`neutral`,[.06,.03,0],`1`,`in+fwd`,`down`,`index`),q(`center`,[.01,.03,.1],`1`,`in+fwd`,`down`,`index`)],L:gu()},SWITCH:{w:[`switch`,`switches`,`turn on`,`turn off`,`toggle`,`power`,`powers`],dur:.4,R:[q(`neutral`,[0,.02,0],`A`,`up`,`fwd`,`thumb`),q(`neutral`,[0,-.02,0],`A`,`up`,`fwd`,`thumb`)]},EASY:{w:[`easy`,`easily`,`simple`,`freely`],dur:.45,R:du([q(`center`,[0,0,.06],`BENT_B`,`fwd+in`,`up`,`back`),q(`center`,[0,.05,.08],`BENT_B`,`fwd+in`,`up`,`back`)],2),L:[q(`center`,[0,-.02,.06],`BENT_B`,`fwd+in`,`up`,`palm`)]},SHARP:{w:[`sharp`,`sharpen`,`sharpened`,`pointed`],dur:.4,R:[q(`center`,[0,.02,.06],`BENT_5`,`down`,`down`,`palm`),q(`center`,[.06,.04,.06],`BENT_5`,`out`,`down`,`palm`)],L:pu([0,-.02,.05])},STIFF:{w:[`stiff`,`rigid`,`hard`,`strength`,`strong`],dur:.45,R:[q(`neutral`,[0,.04,0],`BENT_V`,`fwd`,`down`,`palm`),q(`neutral`,[0,0,0],`BENT_V`,`fwd`,`down`,`palm`)],L:[q(`neutral`,[0,-.01,0],`S`,`fwd`,`down`,`palm`)]},GENTLE:{w:[`gently`,`gentle`,`slowly`,`slow`,`steadily`,`carefully`,`careful`,`steady`],dur:.55,R:[q(`center`,[0,.03,.03],`B`,`fwd+in`,`down`,`palm`),q(`center`,[0,.03,.15],`B`,`fwd+in`,`down`,`palm`)],L:pu([0,0,.06])},WRAP:{w:[`wrap`,`wrapped`,`wraps`,`loop`,`loops`,`hitch`,`hitches`],dur:.55,R:[q(`center`,[0,.05,.08],`B`,`in`,`down`,`palm`),q(`center`,[.05,0,.05],`B`,`down`,`in`,`palm`),q(`center`,[0,-.05,.03],`B`,`out`,`up`,`palm`)],L:[q(`center`,[0,0,.05],`S`,`fwd+in`,`in`,`palm`)]},SPREAD:{w:[`spread`,`spreads`,`divide`,`divided`,`distribute`,`evenly`],dur:.45,R:[q(`neutral`,[-.02,0,0],`FLAT_O`,`fwd`,`down`,`palm`),q(`neutral`,[.08,-.02,.04],`5`,`fwd+out`,`down`,`palm`)],L:`mirror`},ATTACK:{w:[`attack`,`attacks`,`damage`,`damaged`,`harm`],dur:.45,face:{brows:`down`},R:[q(`center`,[.05,.03,.12],`S`,`fwd+in`,`down`,`palm`),q(`center`,[0,.03,.06],`S`,`fwd+in`,`down`,`palm`)],L:[q(`center`,[0,.03,.05],`1`,`up`,`out`,`palm`)]},DIRECTIONS4:{w:[`zero`,`nil`],dur:.35,R:[q(`neutral_hi`,[0,0,0],`O`,`up`,`in+0.5fwd`,`palm`)]},ELEVEN:{w:[`eleven`],dur:.45,R:du([q(`neutral_hi`,[0,0,0],`S`,`up`,`back`,`palm`),q(`neutral_hi`,[0,0,0],`1`,`up`,`back`,`palm`)],2)},TWELVE:{w:[`twelve`],dur:.45,R:du([q(`neutral_hi`,[0,0,0],`S`,`up`,`back`,`palm`),q(`neutral_hi`,[0,0,0],`V`,`up`,`back`,`palm`)],2)},NAME_IMANI:{w:[`imani`],dur:.4,R:[q(`neutral_hi`,[0,0,0],`I`,`up`,`fwd`,`palm`),q(`neutral_hi`,[0,-.03,.02],`I`,`up`,`fwd`,`palm`)],nameSign:1}};function gu(){return[q(`center`,[0,.03,.12],`1`,`up`,`in`,`palm`)]}var _u=(e,t,n,r,i,a=`palm`,o={})=>({at:e,off:t,hs:n,F:r,N:i,c:a,...o}),vu={GLOVE:{w:[`glove`,`gloves`,`gloved`],dur:.55,R:[_u(`center`,[.02,.03,.14],`OPEN_B`,`fwd+in`,`down`,`palm`),_u(`center`,[.02,.03,.03],`OPEN_B`,`fwd+in`,`down`,`palm`)],L:[_u(`center`,[.02,-.01,.08],`OPEN_B`,`fwd+in`,`down`,`palm`)]},GOGGLES:{w:[`goggles`,`safety glasses`,`glasses`],dur:.5,prov:1,R:[_u(`eye`,[.035,0,.13],`C`,`up`,`back+0.4in`,`index`),_u(`eye`,[.035,0,.085],`C`,`up`,`back+0.4in`,`index`)],L:`mirror`},EYE:{w:[`eye`,`eyes`],dur:.4,R:[_u(`eye`,[.02,-.03,.08],`1`,`back+up`,`in`,`index`),_u(`eye`,[.02,-.02,.04],`1`,`back+up`,`in`,`index`)]},EARDEF:{w:[`ear defenders`,`ear muffs`,`ear protection`],prov:1,dur:.55,R:[_u(`ear`,[.06,0,0],`C`,`up`,`in`,`palm`),_u(`ear`,[.025,0,0],`C`,`up`,`in`,`palm`)],L:`mirror`},EAR:{w:[`ear`,`ears`],dur:.4,R:[_u(`ear`,[.03,-.01,.02],`1`,`up`,`in`,`index`),_u(`ear`,[.015,-.01,.01],`1`,`up`,`in`,`index`)]},MASK:{w:[`mask`,`masks`,`dust mask`,`respirator`],dur:.5,R:[_u(`mouth`,[0,-.02,.13],`C`,`up+in`,`back`,`palm`),_u(`mouth`,[0,-.015,.07],`C`,`up+in`,`back`,`palm`)]},BOOT:{w:[`boot`,`boots`,`shoe`,`shoes`,`safety boots`],dur:.5,R:[_u(`center`,[.045,-.05,.02],`S`,`fwd`,`in`,`palm`),_u(`center`,[.012,-.05,.02],`S`,`fwd`,`in`,`palm`),_u(`center`,[.045,-.05,.02],`S`,`fwd`,`in`,`palm`),_u(`center`,[.012,-.05,.02],`S`,`fwd`,`in`,`palm`)],L:`mirror`},WHITE:{w:[`white`],dur:.5,R:[_u(`chest`,[0,0,.03],`5`,`in+0.3up`,`back`,`palm`),_u(`chest`,[0,0,.15],`FLAT_O`,`in+0.3up`,`back`,`palm`)]},WASH:{w:[`wash`,`washes`,`washed`,`wipe`,`wiped`,`wipes`,`soap`],dur:.55,R:[_u(`center`,[.02,0,.06],`A`,`fwd+in`,`down`,`palm`),_u(`center`,[.05,0,.04],`A`,`fwd+in`,`down`,`palm`),_u(`center`,[0,0,.08],`A`,`fwd+in`,`down`,`palm`)],L:[_u(`center`,[.02,-.04,.06],`A`,`fwd+in`,`up`,`palm`)]},SKIN:{w:[`skin`],dur:.45,R:[_u(`cheek`,[.04,-.04,.05],`F`,`up+in`,`back`,`index`),_u(`cheek`,[.05,-.05,.09],`F`,`up+in`,`back`,`index`)]},WEAR:{w:[`wear`,`wears`,`wearing`,`worn`,`put on`,`overalls`],dur:.5,R:[_u(`chest`,[.03,.02,.05],`5`,`up+in`,`back`,`palm`),_u(`chest`,[.03,-.06,.05],`5`,`up+in`,`back`,`palm`)],L:`mirror`},CONTINUOUS:{w:[`continuous`,`continuously`,`all the way`],dur:.6,R:[_u(`center`,[0,.02,.05],`Y`,`fwd+in`,`down`,`palm`),_u(`center`,[.12,0,.08],`Y`,`fwd+in`,`down`,`palm`)],L:[_u(`center`,[0,-.02,.05],`Y`,`fwd+in`,`down`,`palm`)]}},J=(e,t,n,r,i,a=`palm`,o={})=>({at:e,off:t,hs:n,F:r,N:i,c:a,...o}),yu=(e,t)=>{let n=[];for(let r=0;r<t;r++)n.push(...e);return n},bu=(e=[0,-.03,.06])=>[J(`center`,e,`B`,`fwd+in`,`up`,`palm`)],xu=(e=[0,-.01,.06])=>[J(`center`,e,`B`,`in`,`down`,`palm`)],Su=(e=[0,.01,.05])=>[J(`center`,e,`OPEN_B`,`up`,`in`,`palm`)],Cu={EGG:{w:[`egg`,`eggs`],dur:.6,R:[J(`center`,[0,.035,.07],`H`,`fwd+in`,`in+0.4down`,`index`),J(`center`,[.09,-.05,.08],`H`,`fwd+0.3out+0.4down`,`down+0.3out`,`index`)],L:[J(`center`,[0,.005,.07],`H`,`fwd+in`,`in+0.4up`,`index`),J(`center`,[.09,-.07,.08],`H`,`fwd+0.3out+0.4down`,`down+0.3out`,`index`)]},CHICKEN:{w:[`chicken`,`chickens`,`chick`,`chicks`,`hen`,`hens`,`bird`,`birds`,`poultry`],dur:.55,R:yu([J(`mouth`,[.03,-.01,.08],`L`,`fwd+0.3in`,`down`,`index`,{noTilt:1}),J(`mouth`,[.03,-.01,.08],`G`,`fwd+0.3in`,`down`,`index`,{noTilt:1})],2)},DEVELOP:{w:[`develop`,`develops`,`developing`,`developed`,`development`],dur:.6,R:[J(`center`,[.035,-.04,.05],`D`,`up`,`in`,`palm`),J(`center`,[.035,.1,.05],`D`,`up`,`in`,`palm`)],L:Su([0,.03,.05])},GROW:{w:[`grow`,`grows`,`growing`,`grown`,`growth`],dur:.6,R:[J(`center`,[0,-.05,.07],`FLAT_O`,`up`,`back`,`palm`),J(`center`,[0,.1,.07],`5`,`up`,`back`,`palm`)],L:[J(`center`,[0,0,.08],`C`,`in`,`up`,`palm`)]},DIE:{w:[`die`,`dies`,`died`,`dead`,`death`,`dying`],dur:.6,R:[J(`neutral`,[-.06,0,0],`B`,`fwd`,`down`,`palm`),J(`neutral`,[.02,-.03,0],`B`,`fwd`,`up`,`palm`)],L:[J(`neutral`,[-.06,0,0],`B`,`fwd`,`up`,`palm`),J(`neutral`,[-.14,-.03,0],`B`,`fwd`,`down`,`palm`)]},BLOOD:{w:[`blood`,`bloody`],dur:.85,R:[J(`chin`,[0,.035,.01],`1`,`up`,`back`,`index`),J(`chin`,[0,-.02,.01],`X`,`up`,`back`,`index`),J(`center`,[.03,.08,.1],`5`,`down+in`,`back`,`palm`),J(`center`,[.04,-.05,.1],`5`,`down+in`,`back`,`palm`)],L:[J(`center`,[0,.03,.06],`B`,`in`,`back`,`palm`)]},SICK:{w:[`sick`,`ill`,`illness`,`disease`,`diseases`,`diseased`],dur:.55,face:{brows:`down`},R:[J(`forehead`,[.05,-.035,.11],`OPEN_8`,`in+0.6up`,`back`,`palm`,{noTilt:1}),J(`forehead`,[.05,-.035,.075],`OPEN_8`,`in+0.6up`,`back`,`palm`,{noTilt:1})],L:[J(`stomach`,[.03,0,.11],`OPEN_8`,`in+0.3up`,`back`,`palm`),J(`stomach`,[.03,0,.08],`OPEN_8`,`in+0.3up`,`back`,`palm`)]},CANDLE:{w:[`candle`,`candles`,`candling`,`candled`,`candler`,`candlers`],dur:.65,R:yu([J(`center`,[0,.13,.07],`5`,`up`,`in`,`palm`),J(`center`,[0,.13,.07],`CLAW_5`,`up`,`in`,`palm`)],2),L:[J(`center`,[0,0,.07],`1`,`up`,`in`,`palm`)]},DAY:{w:[`day`,`days`,`daily`],dur:.6,R:[J(`neutral`,[-.02,.1,0],`1`,`up`,`in`,`palm`),J(`center`,[0,.02,.06],`1`,`in+0.25up`,`back`,`palm`)],L:[J(`center_lo`,[.02,0,.08],`B`,`in`,`down`,`palm`)]},HOUR:{w:[`hour`,`hours`,`hourly`],dur:.75,R:[J(`center`,[.035,.02,.05],`1`,`up`,`in`,`palm`),J(`center`,[.035,.02,.05],`1`,`fwd`,`in`,`palm`),J(`center`,[.035,.02,.05],`1`,`down`,`in`,`palm`),J(`center`,[.035,.02,.05],`1`,`back+0.2down`,`in`,`palm`),J(`center`,[.035,.02,.05],`1`,`up`,`in`,`palm`)],L:Su()},MINUTE:{w:[`minute`,`minutes`,`min`],dur:.45,R:[J(`center`,[.035,.02,.05],`1`,`up`,`in`,`palm`),J(`center`,[.035,.02,.05],`1`,`up+0.5fwd`,`in`,`palm`)],L:Su()},MONTH:{w:[`month`,`months`,`monthly`],dur:.5,R:[J(`center`,[.02,.09,.03],`1`,`in`,`back`,`palm`),J(`center`,[.02,0,.03],`1`,`in`,`back`,`palm`)],L:[J(`center`,[0,.04,.05],`1`,`up`,`in`,`palm`)]},LATE:{w:[`late`],dur:.5,R:yu([J(`waist`,[.06,.03,-.04],`B`,`down`,`back`,`palm`),J(`waist`,[.06,.03,-.09],`B`,`down+back`,`back+up`,`palm`)],2)},DOOR:{w:[`door`,`doors`,`doorway`],dur:.7,R:[J(`center`,[.05,.04,.07],`B`,`up`,`fwd`,`palm`),J(`center`,[.08,.04,.03],`B`,`up`,`in`,`palm`),J(`center`,[.05,.04,.07],`B`,`up`,`fwd`,`palm`),J(`center`,[.08,.04,.03],`B`,`up`,`in`,`palm`),J(`center`,[.05,.04,.07],`B`,`up`,`fwd`,`palm`)],L:[J(`center`,[.05,.04,.07],`B`,`up`,`fwd`,`palm`)]},WINDOW:{w:[`window`,`windows`],dur:.7,R:[...yu([J(`center`,[0,.065,.06],`B`,`in`,`back`,`palm`),J(`center`,[0,.14,.06],`B`,`in`,`back`,`palm`)],2),J(`center`,[0,.065,.06],`B`,`in`,`back`,`palm`)],L:[J(`center`,[0,0,.06],`B`,`in`,`back`,`palm`)]},ROOM:{w:[`room`,`rooms`],dur:.65,R:[J(`center`,[.11,0,.08],`B`,`fwd`,`in`,`palm`),J(`center`,[0,0,.17],`B`,`in`,`back`,`palm`)],L:[J(`center`,[.11,0,.08],`B`,`fwd`,`in`,`palm`),J(`center`,[0,0,.02],`B`,`in`,`back`,`palm`)]},TABLE:{w:[`table`,`tables`,`bench`,`benches`,`worktop`],dur:.6,R:yu([J(`center`,[.03,.08,.06],`B`,`in`,`down`,`palm`),J(`center`,[.03,.035,.06],`B`,`in`,`down`,`palm`)],2),L:[J(`center`,[.03,0,.06],`B`,`in`,`down`,`palm`)]},BOWL:{w:[`bowl`,`bowls`,`basin`,`basins`],dur:.6,R:[J(`center`,[.03,-.03,.08],`C`,`fwd+in`,`up`,`palm`),J(`center`,[.12,.04,.08],`C`,`fwd+0.5up`,`up+in`,`palm`)],L:`mirror`},TEMPERATURE:{w:[`temperature`,`temperatures`],dur:.6,R:yu([J(`center`,[.01,.03,.075],`1`,`in`,`down`,`index`),J(`center`,[.01,.09,.075],`1`,`in`,`down`,`index`)],2),L:[J(`center`,[0,.04,.05],`1`,`up`,`in`,`palm`)]},HOT:{w:[`hot`,`hotter`,`heat`,`heats`,`heated`,`heating`],dur:.55,face:{brows:`down`},R:[J(`mouth`,[0,-.01,.085],`CLAW_5`,`up`,`back`,`palm`),J(`chin`,[.1,-.1,.18],`CLAW_5`,`fwd+0.3out`,`down`,`palm`)]},COLD:{w:[`cold`,`colder`,`chilled`],dur:.6,R:yu([J(`chest`,[.08,-.05,.12],`S`,`up`,`in`,`palm`),J(`chest`,[.105,-.05,.12],`S`,`up`,`in`,`palm`)],3),L:`mirror`},WARM:{w:[`warm`,`warms`,`warmed`,`warming`,`warmer`,`lukewarm`],dur:.55,R:[J(`mouth`,[0,-.015,.06],`S`,`up`,`back`,`palm`),J(`chin`,[.08,-.05,.17],`CLAW_5`,`up+0.5fwd+0.3out`,`back+0.4up`,`palm`)]},LIGHT:{w:[`light`,`lights`,`lamp`,`lamps`],dur:.5,R:[J(`temple`,[.1,-.05,.1],`FLAT_O`,`down`,`back`,`palm`,{noTilt:1}),J(`temple`,[.11,-.07,.12],`5`,`down+0.4fwd`,`back`,`palm`,{noTilt:1})]},ELECTRIC:{w:[`electric`,`electricity`,`electrical`,`mains`],dur:.5,R:yu([J(`center`,[.06,.02,.07],`X`,`in`,`back`,`knuckle`),J(`center`,[.018,.02,.07],`X`,`in`,`back`,`knuckle`)],2),L:`mirror`},MACHINE:{w:[`machine`,`machines`,`motor`,`motors`,`engine`,`mechanism`],dur:.6,R:yu([J(`center`,[0,.04,.07],`CLAW_5`,`in+0.3down`,`back`,`palm`),J(`center`,[0,-.01,.07],`CLAW_5`,`in+0.3down`,`back`,`palm`)],2),L:`mirror`},ALARM:{w:[`alarm`,`alarms`,`beeper`],dur:.6,R:yu([J(`center`,[.07,.03,.05],`1`,`in+0.3fwd`,`down`,`index`),J(`center`,[.03,.03,.05],`1`,`in`,`down`,`index`)],3),L:Su()},STUCK:{w:[`stuck`,`jam`,`jams`,`jammed`,`jamming`],dur:.45,R:[J(`neck`,[0,-.01,.08],`V`,`back`,`down`,`index`),J(`neck`,[0,-.01,.015],`V`,`back`,`down`,`index`)]},EARLY:{w:[`early`,`earlier`,`soon`],dur:.45,R:[J(`center`,[.04,.075,.05],`OPEN_8`,`fwd+in`,`down`,`palm`),J(`center`,[-.03,.075,.07],`OPEN_8`,`fwd+in`,`down`,`palm`)],L:xu()},SECONDS:{w:[`seconds`,`sec`,`secs`],dur:.4,R:[J(`center`,[.035,.02,.05],`1`,`up`,`in`,`palm`),J(`center`,[.035,.02,.05],`1`,`up+0.25fwd`,`in`,`palm`)],L:Su()},CLEAR:{w:[`clear`,`clears`,`cleared`,`clearly`,`bright`,`brightest`,`brighter`],dur:.5,R:[J(`chest`,[.03,0,.14],`FLAT_O`,`up+fwd`,`in`,`palm`),J(`neutral_hi`,[.02,.06,-.03],`5`,`up+0.3out`,`fwd`,`palm`)],L:`mirror`},SPRAY:{w:[`spray`,`sprays`,`sprayed`,`spraying`,`sprayer`,`sprayers`],dur:.6,R:[J(`neutral_hi`,[-.04,0,0],`1`,`fwd+0.3up`,`down`,`palm`),J(`neutral_hi`,[-.01,-.01,0],`X`,`fwd+0.3up`,`down`,`palm`),J(`neutral_hi`,[.02,0,0],`1`,`fwd+0.3up`,`down`,`palm`),J(`neutral_hi`,[.05,-.01,0],`X`,`fwd+0.3up`,`down`,`palm`)]},TOUCH:{w:[`touch`,`touches`,`touched`,`touching`,`contact`,`contacts`],dur:.45,R:[J(`center`,[0,.13,.06],`OPEN_8`,`fwd+in`,`down`,`palm`),J(`center`,[0,.075,.06],`OPEN_8`,`fwd+in`,`down`,`palm`)],L:xu()},ENTER:{w:[`enter`,`enters`,`entered`,`entering`,`entry`],dur:.5,R:[J(`center`,[0,.02,0],`B`,`fwd+in`,`down`,`palm`),J(`center`,[0,-.035,.16],`B`,`fwd+in`,`down`,`palm`)],L:[J(`center`,[0,.03,.08],`B`,`in`,`down`,`palm`)]},FIND:{w:[`find`,`finds`,`finding`,`found`,`discover`,`discovered`],dur:.5,R:[J(`neutral`,[0,-.05,.03],`5`,`fwd+down`,`down`,`palm`),J(`neutral`,[0,.06,0],`F`,`fwd`,`down+in`,`palm`)]},CHANGE:{w:[`change`,`changes`,`changed`,`changing`,`changeover`],dur:.55,R:[J(`center`,[.02,.045,.07],`X`,`fwd+up`,`in+0.5down`,`index`),J(`center`,[.02,-.005,.07],`X`,`fwd+up`,`in+0.5up`,`index`)],L:[J(`center`,[.02,-.005,.07],`X`,`fwd+up`,`in+0.5up`,`index`),J(`center`,[.02,.045,.07],`X`,`fwd+up`,`in+0.5down`,`index`)]},DECIDE:{w:[`decide`,`decides`,`decided`,`deciding`,`decision`,`decisions`],dur:.7,R:[J(`forehead`,[.03,0,.06],`1`,`up`,`in`,`index`),J(`neutral`,[-.03,.04,-.02],`F`,`fwd`,`in`,`palm`),J(`neutral`,[-.03,-.06,0],`F`,`fwd`,`in`,`palm`)],L:[J(`neutral`,[-.03,.04,-.02],`F`,`fwd`,`in`,`palm`),J(`neutral`,[-.03,.04,-.02],`F`,`fwd`,`in`,`palm`),J(`neutral`,[-.03,-.06,0],`F`,`fwd`,`in`,`palm`)]},AGREE:{w:[`agree`,`agrees`,`agreed`,`agreement`],dur:.65,R:[J(`forehead`,[.03,0,.05],`1`,`up`,`in`,`index`),J(`neutral`,[-.085,-.03,.02],`1`,`fwd`,`down`,`index`)],L:[J(`neutral`,[-.085,-.03,.02],`1`,`fwd`,`down`,`index`),J(`neutral`,[-.085,-.03,.02],`1`,`fwd`,`down`,`index`)]},COMPARE:{w:[`compare`,`compares`,`compared`,`comparing`,`comparison`],dur:.7,R:[J(`neutral`,[-.03,.05,-.02],`BENT_B`,`up`,`back`,`palm`),J(`neutral`,[-.03,.05,-.02],`BENT_B`,`up`,`back+0.8in`,`palm`),J(`neutral`,[-.03,.05,-.02],`BENT_B`,`up`,`back`,`palm`),J(`neutral`,[-.03,.05,-.02],`BENT_B`,`up`,`back+0.8in`,`palm`)],L:`mirror`},AVERAGE:{w:[`average`,`averages`,`averaged`],dur:.6,R:yu([J(`center`,[.01,.04,.06],`B`,`fwd`,`in+0.4up`,`palm`),J(`center`,[.01,.04,.06],`B`,`fwd`,`in+0.4down`,`palm`)],2),L:[J(`center`,[0,0,.06],`B`,`in`,`down`,`palm`)]},LESS:{w:[`less`,`fewer`,`reduce`,`reduces`,`reduced`],dur:.5,R:[J(`center`,[0,.12,.06],`B`,`fwd+in`,`down`,`palm`),J(`center`,[0,.035,.06],`B`,`fwd+in`,`down`,`palm`)],L:bu([0,-.01,.06])},MINUS:{w:[`minus`,`subtract`],dur:.45,R:[J(`center`,[.07,.02,.06],`1`,`fwd`,`down`,`palm`),J(`center`,[.03,.02,.06],`1`,`fwd`,`in`,`palm`)],L:Su()},WIDE:{w:[`wide`,`broad`,`width`,`wider`],dur:.5,R:[J(`neutral`,[-.07,0,0],`B`,`fwd`,`in`,`palm`),J(`neutral`,[.03,0,0],`B`,`fwd`,`in`,`palm`)],L:`mirror`},SURE:{w:[`sure`,`true`,`truly`,`certain`,`certainly`,`make sure`,`ensure`],dur:.45,R:[J(`mouth`,[0,-.015,.03],`1`,`up`,`in`,`palm`),J(`mouth`,[.02,-.04,.18],`1`,`up+0.3fwd`,`in`,`palm`)]},CAUSE:{w:[`cause`,`causes`,`caused`,`causing`,`because of`],dur:.55,R:[J(`chest`,[.07,-.1,.08],`S`,`fwd`,`up`,`palm`),J(`neutral`,[-.03,-.02,.02],`5`,`fwd`,`up`,`palm`)],L:`mirror`},PROBLEM:{w:[`problem`,`problems`,`fault`,`faults`,`faulty`,`defect`,`defects`],dur:.55,face:{brows:`down`},R:[J(`center`,[.03,.02,.07],`BENT_V`,`in`,`back`,`knuckle`),J(`center`,[.03,.02,.07],`BENT_V`,`in+0.7up`,`back+0.5down`,`knuckle`)],L:[J(`center`,[.03,.02,.07],`BENT_V`,`in+0.7up`,`back+0.5down`,`knuckle`),J(`center`,[.03,.02,.07],`BENT_V`,`in`,`back`,`knuckle`)]},BAD:{w:[`bad`,`badly`],dur:.45,face:{neg:1},R:[J(`chin`,[0,0,.02],`B`,`up`,`back`,`palm`),J(`neutral`,[-.06,-.05,-.08],`B`,`fwd`,`down`,`palm`)]},KILL:{w:[`kill`,`kills`,`killed`,`killing`],dur:.5,R:[J(`center`,[.03,-.03,0],`1`,`fwd+in`,`in`,`palm`),J(`center`,[-.03,-.045,.12],`1`,`fwd+in`,`in`,`palm`)],L:[J(`center`,[0,.02,.07],`B`,`in`,`down`,`palm`)]},MIX:{w:[`mix`,`mixes`,`mixed`,`mixing`,`mixture`],dur:.7,R:[J(`center`,[0,.08,.06],`CLAW_5`,`down`,`down`,`palm`),J(`center`,[.05,.08,.09],`CLAW_5`,`down`,`down`,`palm`),J(`center`,[0,.08,.12],`CLAW_5`,`down`,`down`,`palm`),J(`center`,[-.05,.08,.09],`CLAW_5`,`down`,`down`,`palm`),J(`center`,[0,.08,.06],`CLAW_5`,`down`,`down`,`palm`)],L:[J(`center`,[0,-.02,.09],`CLAW_5`,`up`,`up`,`palm`)]},WRITE:{w:[`write`,`writes`,`wrote`,`written`,`writing`,`record`,`records`,`recorded`,`recording`],dur:.6,R:[J(`center`,[-.03,.035,.04],`O`,`down+fwd`,`down+in`,`index`),J(`center`,[0,.03,.06],`O`,`down+fwd`,`down+in`,`index`),J(`center`,[.03,.035,.08],`O`,`down+fwd`,`down+in`,`index`)],L:bu([0,-.01,.06])},PAPER:{w:[`paper`,`papers`],dur:.5,R:yu([J(`center`,[.01,.025,.075],`B`,`fwd+in`,`down`,`palm`),J(`center`,[.01,.025,.03],`B`,`fwd+in`,`down`,`palm`)],2),L:bu([0,-.01,.06])},QUESTION:{w:[`question`,`questions`],dur:.6,R:[J(`neutral_hi`,[0,.04,-.03],`1`,`up`,`fwd`,`index`),J(`neutral_hi`,[.04,.03,0],`X`,`up+fwd`,`in`,`index`),J(`neutral`,[.02,-.02,.04],`X`,`fwd`,`down`,`index`),J(`neutral`,[.02,-.06,.07],`1`,`fwd`,`down`,`index`)]},ANSWER:{w:[`answer`,`answers`,`answered`,`reply`,`respond`],dur:.55,R:[J(`mouth`,[0,-.02,.04],`1`,`up`,`in`,`palm`),J(`neutral`,[-.07,0,.06],`1`,`fwd`,`down`,`palm`)],L:[J(`neutral`,[-.07,.08,-.04],`1`,`up`,`in`,`palm`),J(`neutral`,[-.07,-.02,0],`1`,`fwd`,`down`,`palm`)]},YES:{w:[`yes`],dur:.45,face:{nod:1},R:yu([J(`neutral`,[0,.02,0],`S`,`up`,`fwd`,`palm`),J(`neutral`,[0,-.01,.02],`S`,`fwd+up`,`down+fwd`,`palm`)],2)},ME:{w:[`i`,`me`,`i'm`,`im`],dur:.35,R:[J(`chest`,[0,0,.09],`1`,`back`,`in`,`index`),J(`chest`,[0,0,.012],`1`,`back`,`in`,`index`)]},MY:{w:[`my`,`mine`],dur:.35,R:[J(`chest`,[0,0,.07],`B`,`in+up`,`back`,`palm`),J(`chest`,[0,0,.005],`B`,`in+up`,`back`,`palm`)]},SOME:{w:[`some`,`part`,`partly`,`portion`],dur:.5,R:[J(`center`,[0,.025,.09],`B`,`fwd`,`in`,`palm`),J(`center`,[-.01,.025,.03],`B`,`fwd+in`,`in`,`palm`)],L:bu([0,-.01,.06])},SUPERVISOR:{w:[`supervisor`,`supervisors`,`boss`,`manager`],dur:.5,R:yu([J(`shoulder`,[0,.035,.04],`CLAW_5`,`down+in`,`down`,`palm`),J(`shoulder`,[0,.005,.015],`CLAW_5`,`down+in`,`down`,`palm`)],2)},FARM:{w:[`farm`,`farms`,`farming`],dur:.5,R:[J(`chin`,[-.035,-.01,.03],`5`,`up`,`in`,`thumb`),J(`chin`,[.04,-.01,.03],`5`,`up`,`in`,`thumb`)]},YELLOW:{w:[`yellow`],dur:.45,R:yu([J(`neutral_hi`,[0,0,0],`Y`,`up`,`in`,`palm`),J(`neutral_hi`,[0,0,0],`Y`,`up`,`fwd`,`palm`)],2)},FAST:{w:[`fast`,`faster`,`quickly`,`rapid`,`rapidly`],dur:.4,R:[J(`neutral`,[-.04,0,.02],`L`,`fwd`,`in`,`palm`),J(`neutral`,[-.04,0,-.06],`X`,`fwd+up`,`in`,`palm`)],L:`mirror`}},wu={BUTTON:[`key`,`keys`,`keypad`],TEST:[`quiz`,`quizzes`],FULL:[`fully`],BRUSH:[`scrub`,`scrubs`,`scrubbed`,`scrubbing`],WASH:[`rinse`,`rinses`,`rinsed`,`rinsing`],WEIGHT:[`scale`,`scales`,`weigh`,`weighed`,`weighing`]},Tu={TIME:[`minute`,`minutes`],SHORT:[`few`],STOP:[`settle`,`settles`,`settled`],BESIDE:[`close`],SUN:[`heat`,`hot`],SPANNER:[`socket`],METRE:[`meter`,`meters`],BRUSH:[`coat`,`coats`,`coated`],TRAY:[`container`,`containers`,`bucket`,`buckets`],HOUSE:[`home`],GIVE:[`pass`],CLEAN:[`clear`],SPLASH:[`spray`]},Y=(e,t,n,r,i,a,o={})=>({at:e,off:t,hs:n,F:r,N:i,c:a,...o}),X=(e,t=`up`,n=`fwd`,r=[0,0,0])=>({R:[Y(`fs`,r,e,t,n,`palm`)]}),Eu={a:X(`A`),b:X(`B`),c:X(`C`,`up`,`in+0.4fwd`),d:X(`D`),e:X(`E`),f:X(`F`),g:X(`G`,`in`,`back`),h:X(`H`,`in`,`back`),i:X(`I`),j:{R:[Y(`fs`,[0,.02,0],`I`,`up`,`fwd`,`palm`),Y(`fs`,[-.02,-.04,0],`I`,`up+in`,`in`,`palm`),Y(`fs`,[-.04,-.03,0],`I`,`up+in`,`back`,`palm`)]},k:X(`K`),l:X(`L`),m:X(`M`),n:X(`N`),o:X(`O`,`up`,`in+0.5fwd`),p:X(`K`,`down+fwd`,`in`),q:X(`G`,`down`,`in`),r:X(`R`),s:X(`S`),t:X(`T`),u:X(`U`),v:X(`V`),w:X(`W`),x:X(`X`,`up`,`in+fwd`),y:X(`Y`),z:{R:[Y(`fs`,[.03,.03,0],`1`,`up+fwd`,`fwd`,`index`),Y(`fs`,[-.03,.03,0],`1`,`up+fwd`,`fwd`,`index`),Y(`fs`,[.03,-.03,0],`1`,`up+fwd`,`fwd`,`index`),Y(`fs`,[-.03,-.03,0],`1`,`up+fwd`,`fwd`,`index`)]}},Du={0:X(`O`,`up`,`in+0.5fwd`),1:X(`1`,`up`,`back`),2:X(`2`,`up`,`back`),3:X(`3`,`up`,`back`),4:X(`4`,`up`,`back`),5:X(`5`,`up`,`back`),6:X(`6`),7:X(`7`),8:X(`8`),9:X(`9`)},Ou={WELCOME:{w:[`welcome`],dur:.75,face:{smile:1},R:[Y(`side`,[0,0,.05],`OPEN_B`,`out+fwd`,`up`,`palm`),Y(`waist`,[0,.06,.1],`OPEN_B`,`in+fwd`,`up+0.3in`,`palm`)]},ROOF:{w:[`roof`,`roofs`,`roofing`],dur:.6,R:[Y(`center_hi`,[.025,.06,.02],`B`,`in+0.7up`,`down+out`,`middle`),Y(`center_hi`,[.13,-.07,.02],`B`,`in+0.7up`,`down+out`,`middle`)],L:`mirror`},BUILD:{w:[`build`,`construction`,`construct`,`building`,`built`],dur:.8,R:[Y(`center`,[.01,-.02,.02],`BENT_B`,`fwd+in`,`down`,`palm`),Y(`center`,[.01,.06,.04],`BENT_B`,`fwd+in`,`down`,`palm`),Y(`center`,[.01,.14,.02],`BENT_B`,`fwd+in`,`down`,`palm`)],L:[Y(`center`,[.01,.02,.04],`BENT_B`,`fwd+in`,`down`,`palm`),Y(`center`,[.01,.1,.02],`BENT_B`,`fwd+in`,`down`,`palm`),Y(`center`,[.01,.1,.03],`BENT_B`,`fwd+in`,`down`,`palm`)]},CHOOSE:{w:[`choose`,`select`,`pick`,`chosen`],dur:.6,R:[Y(`far`,[0,.04,0],`5`,`fwd+up`,`in+down`,`index`),Y(`neutral`,[0,.06,-.06],`F`,`up+fwd`,`in`,`index`)]},WORK:{w:[`work`,`task`,`tasks`,`job`,`working`],dur:.7,R:[Y(`center`,[.03,.02,0],`S`,`fwd+in`,`down`,`palm`),Y(`center`,[.03,-.02,0],`S`,`fwd+in`,`down`,`palm`),Y(`center`,[.03,.02,0],`S`,`fwd+in`,`down`,`palm`),Y(`center`,[.03,-.02,0],`S`,`fwd+in`,`down`,`palm`)],L:[Y(`center`,[0,-.07,.04],`S`,`fwd+in`,`down`,`palm`)]},SEE:{w:[`see`,`look`,`view`,`watch`,`seen`,`sees`],dur:.5,R:[Y(`eye`,[.06,-.06,.05],`V`,`up`,`back`,`index`,{noTilt:1}),Y(`eye`,[.09,-.13,.33],`V`,`fwd+0.3up`,`back+down`,`index`)]},ITS:{w:[`its`,`his`,`her`,`their`],dur:.4,R:[Y(`neutral`,[0,.02,-.03],`B`,`up`,`fwd`,`palm`),Y(`neutral`,[.03,.02,.06],`B`,`up`,`fwd`,`palm`)]},YOUR:{w:[`your`,`yours`],dur:.4,R:[Y(`center`,[.02,.04,-.02],`B`,`up`,`fwd`,`palm`),Y(`center`,[.02,.04,.09],`B`,`up`,`fwd`,`palm`)]},STEP:{w:[`step`,`steps`,`stage`],dur:.8,R:[Y(`neutral`,[0,-.03,-.05],`B`,`fwd`,`down`,`palm`),Y(`neutral`,[0,.02,.01],`B`,`fwd`,`down`,`palm`),Y(`neutral`,[0,-.03,.06],`B`,`fwd`,`down`,`palm`),Y(`neutral`,[0,.02,.11],`B`,`fwd`,`down`,`palm`),Y(`neutral`,[0,-.03,.16],`B`,`fwd`,`down`,`palm`)]},CLICK:{w:[`click`,`press`,`clicks`,`tap`],dur:.55,R:[Y(`neutral`,[0,.02,0],`1`,`fwd+down`,`down`,`index`),Y(`neutral`,[0,-.025,0],`X`,`fwd+down`,`down`,`index`),Y(`neutral`,[0,.02,0],`1`,`fwd+down`,`down`,`index`),Y(`neutral`,[0,-.025,0],`X`,`fwd+down`,`down`,`index`)]},START:{w:[`start`,`begin`,`starts`,`beginning`],dur:.6,R:[Y(`center`,[.02,.03,.04],`1`,`in+fwd`,`down`,`index`),Y(`center`,[.02,.03,.04],`1`,`in+fwd`,`back`,`index`)],L:[Y(`center`,[.03,0,.03],`B`,`fwd+0.5up`,`in`,`palm`)]},WITH:{w:[`with`],dur:.45,R:[Y(`center`,[.09,0,0],`A`,`fwd`,`in`,`palm`),Y(`center`,[.035,0,0],`A`,`fwd`,`in`,`palm`)],L:`mirror`},ONE:{w:[`one`,`1`],dur:.4,R:[Y(`neutral_hi`,[0,0,0],`1`,`up`,`back`,`palm`)]},USE:{w:[`use`,`using`,`used`,`uses`],dur:.6,R:[Y(`center`,[.03,.05,.02],`U`,`up`,`fwd`,`palm`),Y(`center`,[.06,.08,.03],`U`,`up`,`fwd`,`palm`),Y(`center`,[.03,.11,.02],`U`,`up`,`fwd`,`palm`),Y(`center`,[0,.08,.03],`U`,`up`,`fwd`,`palm`),Y(`center`,[.03,.05,.02],`U`,`up`,`fwd`,`palm`)],L:[Y(`center`,[0,-.04,.03],`S`,`fwd+in`,`down`,`palm`)]},PERSON:{w:[`person`,`people`,`er`],dur:.45,R:[Y(`neutral`,[.04,.08,-.04],`B`,`fwd`,`in`,`palm`),Y(`neutral`,[.04,-.1,-.04],`B`,`fwd`,`in`,`palm`)],L:`mirror`},GUIDE:{w:[`guide`,`lead`,`guides`,`guided`],dur:.7,R:[Y(`center`,[0,.01,.06],`FLAT_O`,`fwd+down`,`in`,`palm`),Y(`center`,[.07,.03,.22],`FLAT_O`,`fwd+down`,`in`,`palm`)],L:[Y(`center`,[-.01,-.01,.01],`B`,`fwd+in`,`in`,`palm`),Y(`center`,[-.07,.01,.17],`B`,`fwd+in`,`in`,`palm`)]},SHOW:{w:[`show`,`shows`,`showing`,`display`,`demonstrate`],dur:.6,R:[Y(`center`,[.02,.02,.06],`1`,`in+fwd`,`down`,`index`),Y(`center`,[.06,.02,.2],`1`,`in+fwd`,`down`,`index`)],L:[Y(`center`,[.02,0,.05],`B`,`up`,`out+fwd`,`palm`),Y(`center`,[-.02,0,.19],`B`,`up`,`out+fwd`,`palm`)]},YOU:{w:[`you`],dur:.35,R:[Y(`neutral`,[0,.02,0],`1`,`fwd`,`down`,`index`),Y(`neutral`,[0,.02,.07],`1`,`fwd`,`down`,`index`)]},HOW:{w:[`how`],dur:.55,face:{brows:`down`},R:[Y(`center`,[.025,0,.03],`BENT_B`,`down+fwd`,`back`,`knuckle`),Y(`center`,[.06,.03,.09],`BENT_B`,`fwd+up`,`up`,`knuckle`)],L:`mirror`}};for(let e in uu)Ou[e]||(Ou[e]=uu[e]);for(let e in hu)Ou[e]||(Ou[e]=hu[e]);for(let e in vu)Ou[e]||(Ou[e]=vu[e]);var ku={BENT:[`fold`,`folds`,`folded`],NAIL:[`drive`,`drives`,`driven`,`strike`],STOP:[`settle`,`settles`,`settled`],POST:[`staff`,`staffs`],IN:[`inner`],HIGH:[`highest`],SHORT:[`few`]};for(let e in ku)if(Ou[e])for(let t of ku[e])Ou[e].w.includes(t)||Ou[e].w.push(t);for(let e in Tu)Ou[e]&&(Ou[e].w=Ou[e].w.filter(t=>!Tu[e].includes(t)));for(let e in Cu)Ou[e]||(Ou[e]=Cu[e]);for(let e in wu)if(Ou[e])for(let t of wu[e])Ou[e].w.includes(t)||Ou[e].w.push(t);var Au=new Set(`a.an.the.to.is.are.am.be.been.being.was.were.of.so.does.did.s.at.as.also.very.just.its own.let.lets.into the`.split(`.`)),ju=null,Mu=new Set(`farmer.farmers.learner.learners.trainer.trainers.teacher.teachers.helper.helpers.user.users.owner.owners.builder.builders.driver.drivers.reader.readers.writer.writers.player.players.keeper.keepers.cleaner.cleaners.signer.signers`.split(`.`)),Nu={zero:0,eleven:11,twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16,seventeen:17,eighteen:18,nineteen:19,twenty:20,thirty:30,forty:40,fifty:50,sixty:60,seventy:70,eighty:80,ninety:90};function Pu(){ju=new Map;let e=[];for(let t in Ou)for(let n of Ou[t].w||[])n.includes(` `)?e.push([n.split(` `),t]):ju.has(n)||ju.set(n,t);e.sort((e,t)=>t[0].length-e[0].length),ju.multi=e}function Fu(e){if(ju.has(e))return ju.get(e);let t=[];e.endsWith(`ies`)&&t.push(e.slice(0,-3)+`y`),e.endsWith(`es`)&&t.push(e.slice(0,-2)),e.endsWith(`s`)&&t.push(e.slice(0,-1)),e.endsWith(`ing`)&&t.push(e.slice(0,-3),e.slice(0,-3)+`e`,e.slice(0,-4)),e.endsWith(`ed`)&&t.push(e.slice(0,-2),e.slice(0,-1),e.slice(0,-3)),e.endsWith(`ly`)&&t.push(e.slice(0,-2));for(let e of t)if(e.length>2&&ju.has(e))return ju.get(e);return null}function Iu(e,t={}){ju||Pu();let n=[],r=[],i=e.replace(/\s+/g,` `).split(/(?<=[.!?:;])\s+/),a=0;for(let e of i){let i=(e.match(/[A-Za-z]+(?:'[a-z]+)?|\d+(?:\.\d+)?/g)||[]).map(e=>e.toLowerCase().replace(/'s$/,``)),o=n.length,s=0,c=Array.prototype.push;n.push=function(...e){for(let t of e)t._ti=s;return c.apply(this,e)};for(let e=0;e<i.length;e++){s=e;let a=null;for(let[t,n]of ju.multi)if(t.every((t,n)=>i[e+n]===t)){a=[t.length,n];break}if(a){n.push({g:a[1],sign:Ou[a[1]],word:i.slice(e,e+a[0]).join(` `)}),e+=a[0]-1;continue}let o=i[e];if(/^\d/.test(o)){let e=(e,t)=>n.push({g:`#`+e,sign:{...Du[e],dur:.2},word:t,fs:!0,tr:.09}),t=/^(\d+?)(000|00)$/.exec(o),r=t&&Ou[t[2]===`000`?`THOUSAND`:`HUNDRED`];t&&r&&t[1]!==`0`?([...t[1]].forEach((t,n)=>e(t,n?``:o)),n.push({g:t[2]===`000`?`THOUSAND`:`HUNDRED`,sign:r,word:``,fs:!0})):[...o.replace(`.`,``)].forEach((t,n)=>e(t,n?``:o));continue}if(Au.has(o))continue;if(Nu[o]!==void 0&&!Fu(o)){[...String(Nu[o])].forEach((e,t)=>n.push({g:`#`+e,sign:{...Du[e],dur:.2},word:t?``:o,fs:!0,tr:.09}));continue}let c=Fu(o);if(c||Mu.has(o)){if(!c&&o.endsWith(`er`)&&Fu(o.slice(0,-2))){n.push({g:Fu(o.slice(0,-2)),sign:Ou[Fu(o.slice(0,-2))],word:o}),n.push({g:`PERSON`,sign:Ou.PERSON,word:``});continue}if(!c&&o.endsWith(`r`)&&Fu(o.slice(0,-1))){let e=Fu(o.slice(0,-1));n.push({g:e,sign:Ou[e],word:o}),n.push({g:`PERSON`,sign:Ou.PERSON,word:``});continue}}if(c){n.push({g:c,sign:Ou[c],word:o});continue}r.push(o);let l=t.seen||=new Set;Lu(n,l.has(o)&&o.length>6?o.slice(0,3):o,o),l.add(o)}delete n.push;let l=-1;for(let e=o;e<n.length;e++){let t=n[e]._ti;n[e].wi=a+t,n[e].anchor=t!==l,l=t,delete n[e]._ti}a+=i.length,n.length&&n.push({pause:.25})}return{seq:n,unknown:r}}function Lu(e,t,n=t){let r=t.toLowerCase().replace(/[^a-z]/g,``),i=r.length>6;[...r].forEach((t,a)=>{let o=Eu[t],s=a*.006,c=a>0&&r[a-1]===t?.03:0,l={...o,dur:o.R.length>1?.32:i?.12:.16,R:o.R.map(e=>({...e,off:[(e.off?e.off[0]:0)+s+c,e.off?e.off[1]:0,e.off?e.off[2]:0]}))};e.push({g:`fs-`+t,sign:l,word:a===0?n:``,fs:!0,tr:.09,mouthDur:a===0?r.length:0})})}var Ru=(e=0,t=0,n=0)=>new B(e,t,n),zu=[`1`,`2`,`3`,`4`],Bu=Math.PI/180,Vu=class e{constructor(e){this.A=e,this.B=e.bones,e.root.updateMatrixWorld(!0),this.restW={},this.restP={};for(let e in this.B){let t=this.B[e];this.restW[e]=t.getWorldQuaternion(new z),this.restP[e]=t.getWorldPosition(Ru())}this.side={};for(let e of[`L`,`R`])this.side[e]=this._setupSide(e);this.morphW=e.mesh.morphTargetInfluences}b(e){return this.B[e]}_setupSide(e){let t=t=>this.restP[e+` `+t],n=t(`Hand`),r=t(`Finger2`).clone().sub(n).normalize(),i=t(`Finger1`).clone().sub(t(`Finger4`)).normalize(),a=e===`L`?Ru().crossVectors(r,i):Ru().crossVectors(i,r);a.normalize(),i.crossVectors(a,r).multiplyScalar(e===`L`?-1:1).normalize();let o=t(`Forearm`).distanceTo(t(`UpperArm`)),s=t(`Hand`).distanceTo(t(`Forearm`)),c={s:e,dir0:r,n0:a,across0:Ru().crossVectors(r,a).normalize(),lenU:o,lenF:s,fing:{}},l=Ru().crossVectors(r,a).normalize();for(let t of zu){c.fing[t]=[];for(let n of[``,`1`,`2`]){let r=e+` Finger`+t+n,i=this.restW[r].clone().invert(),o=l.clone().applyQuaternion(i).normalize(),s=a.clone().applyQuaternion(i).normalize();c.fing[t].push({name:r,ax:o,spr:s,sign:1})}}for(let t of zu){let n=this.B[e+` Finger`+t],r=this.B[e+` Finger`+t+`2`],i=r.getWorldPosition(Ru()),o=n.quaternion.clone();n.quaternion.multiply(new z().setFromAxisAngle(c.fing[t][0].ax,20*Bu)),n.updateMatrixWorld(!0);let s=r.getWorldPosition(Ru()).sub(i).dot(a)>0?1:-1;n.quaternion.copy(o),n.updateMatrixWorld(!0),c.fing[t].forEach(e=>e.sign=s)}let u=t(`Finger01`).clone().sub(t(`Finger0`)).normalize();return c.thumbRest=this.toHand(c,u),c.thumbLen=[t(`Finger0`).distanceTo(t(`Finger01`)),t(`Finger01`).distanceTo(t(`Finger02`))],c}toHand(e,t){return Ru(t.dot(e.dir0),t.dot(e.n0),t.dot(this._acr(e)))}_acr(e){let t=Ru().crossVectors(e.dir0,e.n0).normalize();return this.restP[e.s+` Finger1`].clone().sub(this.restP[e.s+` Finger4`]).dot(t)>0?t:t.negate()}setWorldQuat(e,t){e.parent.updateWorldMatrix(!0,!1);let n=e.parent.getWorldQuaternion(new z);e.quaternion.copy(n.invert().multiply(t)),e.updateMatrixWorld(!0)}static frameRot(e,t,n,r){let i=new V().makeBasis(e,t,Ru().crossVectors(e,t)),a=new V().makeBasis(n,r,Ru().crossVectors(n,r));return new z().setFromRotationMatrix(a.multiply(i.transpose()))}static ortho(e,t){let n=e.clone().normalize();return[n,t.clone().sub(n.clone().multiplyScalar(t.dot(n))).normalize()]}resetBody(){for(let e in this.B)this.B[e].quaternion.copy(this.A.rest[e]);this.A.root.updateMatrixWorld(!0)}solveArm(t,n,r,i,a=.5){let o=this.side[t],s=this.B[t+` UpperArm`],c=this.B[t+` Forearm`],l=this.B[t+` Hand`];s.parent.updateWorldMatrix(!0,!1),s.quaternion.copy(this.A.rest[t+` UpperArm`]),c.quaternion.copy(this.A.rest[t+` Forearm`]),l.quaternion.copy(this.A.rest[t+` Hand`]),s.updateMatrixWorld(!0);let u=s.getWorldPosition(Ru()),d=n.clone().sub(u),f=d.length(),p=o.lenU,m=o.lenF,h=(p+m)*.999;f>h&&(d.setLength(h),f=h),f<Math.abs(p-m)+.001&&(d.setLength(Math.abs(p-m)+.001),f=d.length());let g=d.clone().normalize(),_=(p*p+f*f-m*m)/(2*p*f),v=Math.acos(I.clamp(_,-1,1)),y=r.clone().sub(g.clone().multiplyScalar(r.dot(g))).normalize(),b=u.clone().add(g.clone().multiplyScalar(Math.cos(v)*p)).add(y.clone().multiplyScalar(Math.sin(v)*p)),x=u.clone().add(d),S=this.restP[t+` Forearm`].clone().sub(this.restP[t+` UpperArm`]).normalize(),C=this.restP[t+` Hand`].clone().sub(this.restP[t+` Forearm`]).normalize(),w=C.clone().sub(S.clone().multiplyScalar(C.dot(S))),T=b.clone().sub(u).normalize(),E=x.clone().sub(b).normalize(),D=w.lengthSq()>1e-6?w.normalize():o.n0.clone(),O=E.clone().sub(T.clone().multiplyScalar(E.dot(T)));O=O.lengthSq()>1e-6?O.normalize():y.clone();let k=e.frameRot(S,D,T,O);this.setWorldQuat(s,k.clone().multiply(this.restW[t+` UpperArm`])),c.updateMatrixWorld(!0);let A=this.B[t+` Hand`].getWorldPosition(Ru()).sub(b).normalize(),ee=new z().setFromUnitVectors(A,E),j=c.getWorldQuaternion(new z),M=ee.multiply(j);if(i){let n,r;if(i.q)n=i.q.clone(),r=o.n0.clone().applyQuaternion(n.clone().multiply(this.restW[t+` Hand`].clone().invert()));else{let a=e.ortho(i.F,i.N);r=a[1],n=e.frameRot(o.dir0,o.n0,a[0],r).multiply(this.restW[t+` Hand`])}let s=M.clone().multiply(this.restW[t+` Forearm`].clone().invert()),u=o.n0.clone().applyQuaternion(s),d=E.clone(),f=u.sub(d.clone().multiplyScalar(u.dot(d))).normalize(),p=r.clone().sub(d.clone().multiplyScalar(r.dot(d))).normalize();if(f.lengthSq()>.5&&p.lengthSq()>.5){let e=Math.atan2(Ru().crossVectors(f,p).dot(d),f.dot(p));M=new z().setFromAxisAngle(d,e*a).multiply(M)}this.setWorldQuat(c,M),this.setWorldQuat(l,n)}else this.setWorldQuat(c,M);return{E:b,W:x}}applyHandshape(e,t){let n=this.side[e];for(let r of zu){let i=t.f[r]||[0,0,0,0];n.fing[r].forEach((t,n)=>{let r=this.B[t.name],a=this.A.rest[t.name].clone();n===0&&i[3]&&a.multiply(new z().setFromAxisAngle(t.spr,i[3]*Bu*(e===`L`?1:-1)*1)),a.multiply(new z().setFromAxisAngle(t.ax,i[n]*Bu*t.sign)),r.quaternion.copy(a)})}let r=t.t,i=this.B[e+` Hand`];i.updateMatrixWorld(!0);let a=this.B[e+` Finger0`],o=this.B[e+` Finger01`],s=this.B[e+` Finger02`];a.quaternion.copy(this.A.rest[e+` Finger0`]),o.quaternion.copy(this.A.rest[e+` Finger01`]),s.quaternion.copy(this.A.rest[e+` Finger02`]),a.updateMatrixWorld(!0);let c=i.getWorldQuaternion(new z).multiply(this.restW[e+` Hand`].clone().invert()),l=this._acr(n),u=e=>Ru().addScaledVector(n.dir0,e[0]).addScaledVector(n.n0,e[1]).addScaledVector(l,e[2]).normalize().applyQuaternion(c),d=this.B[e+` Finger01`].getWorldPosition(Ru()).sub(a.getWorldPosition(Ru())).normalize(),f=u(r.d),p=new z().setFromUnitVectors(d,f).multiply(a.getWorldQuaternion(new z));this.setWorldQuat(a,p),n.n0.clone().applyQuaternion(c);for(let[e,t]of[[o,r.f1||0],[s,r.f2||0]]){e.updateMatrixWorld(!0);let n=e===o?s:null,i=(n?n.getWorldPosition(Ru()):e.getWorldPosition(Ru()).clone().add(f.clone().multiplyScalar(.03))).sub(e.getWorldPosition(Ru())).normalize(),a=u(r.b||[-.1,.25,-1]),c=Ru().crossVectors(i,a).normalize();if(c.lengthSq()<.5)continue;let l=new z().setFromAxisAngle(c,t*Bu).multiply(e.getWorldQuaternion(new z));this.setWorldQuat(e,l)}}handPoints(e){let t=t=>this.B[e+` `+t].getWorldPosition(Ru()),n=e=>{let n=t(`Finger`+e+`2`),r=t(`Finger`+e+`1`);return n.clone().add(n.clone().sub(r).multiplyScalar(.9))},r=t(`Hand`),i=r.clone().lerp(t(`Finger2`).clone().lerp(t(`Finger3`),.5),.55),a=this.B[e+` Hand`].getWorldQuaternion(new z).multiply(this.restW[e+` Hand`].clone().invert()),o=this.side[e].n0.clone().applyQuaternion(a);i.addScaledVector(o,.012);let s=t(`Finger02`),c=t(`Finger01`);return{wrist:r,palm:i,N:o,index:n(`1`),middle:n(`2`),pinky:n(`4`),thumb:s.clone().add(s.clone().sub(c).multiplyScalar(.9)),knuckle:t(`Finger2`),back:i.clone().addScaledVector(o,-.035)}}handQuat(t,n,r){let i=this.side[t],a=e.ortho(n,r);return e.frameRot(i.dir0,i.n0,a[0],a[1]).multiply(this.restW[t+` Hand`])}setMorph(e,t){let n=this.A.morph[e];n!==void 0&&(this.morphW[n]=t)}},Z=[88,100,65,0],Q=(e,t,n,r=0)=>[e,t,n,r],$=(e=0)=>[0,0,0,e],Hu={1:Z,2:Z,3:Z,4:Z},Uu={d:[.45,.55,.1],f1:50,f2:35,b:[-.1,.2,-1]},Wu={d:[.9,.2,.4],f1:0,f2:5},Gu={d:[.5,.42,-.15],f1:38,f2:25,b:[.05,.1,-1]},Ku={d:[.25,.1,1],f1:0,f2:0},qu={B:{f:{1:$(-2),2:$(),3:$(),4:$(2)},t:Gu},OPEN_B:{f:{1:$(-2),2:$(),3:$(),4:$(2)},t:{d:[.55,.1,.85],f1:0,f2:0}},BENT_B:{f:{1:Q(80,5,0),2:Q(80,5,0),3:Q(80,5,0),4:Q(80,5,0)},t:{d:[.7,.2,.6],f1:0,f2:0}},5:{f:{1:$(-12),2:$(-3),3:$(4),4:$(14)},t:Ku},CLAW_5:{f:{1:Q(25,65,40,-12),2:Q(25,65,40,-3),3:Q(25,65,40,4),4:Q(25,65,40,14)},t:{d:[.35,.4,.85],f1:25,f2:20}},BENT_5:{f:{1:Q(50,10,5,-10),2:Q(50,10,5,-3),3:Q(50,10,5,4),4:Q(50,10,5,12)},t:Ku},4:{f:{1:$(-8),2:$(-2),3:$(3),4:$(10)},t:Gu},C:{f:{1:Q(30,45,25),2:Q(30,45,25),3:Q(30,45,25),4:Q(30,45,25)},t:{d:[.45,.6,.55],f1:15,f2:10,b:[.5,.5,-.5]}},O:{f:{1:Q(55,75,45),2:Q(55,78,45),3:Q(55,78,45),4:Q(55,78,45)},t:{d:[.55,.7,.35],f1:28,f2:20,b:[.45,.55,-.6]}},FLAT_O:{f:{1:Q(60,15,5),2:Q(60,15,5),3:Q(60,15,5),4:Q(60,15,5)},t:{d:[.75,.6,.3],f1:10,f2:5}},S:{f:Hu,t:Uu},A:{f:Hu,t:Wu},10:{f:Hu,t:{d:[1,-.05,.25],f1:0,f2:0}},E:{f:{1:Q(30,100,75),2:Q(30,100,75),3:Q(30,100,75),4:Q(30,100,75)},t:{d:[.4,.55,-.05],f1:60,f2:40,b:[-.1,.1,-1]}},M:{f:{1:Q(75,70,30),2:Q(75,70,30),3:Q(75,70,30),4:Z},t:{d:[.5,.75,-.5],f1:35,f2:20}},N:{f:{1:Q(75,70,30),2:Q(75,70,30),3:Z,4:Z},t:{d:[.5,.75,-.4],f1:35,f2:20}},T:{f:{1:Q(70,85,40),2:Z,3:Z,4:Z},t:{d:[.6,.75,-.15],f1:25,f2:15}},1:{f:{1:$(),2:Z,3:Z,4:Z},t:Uu},D:{f:{1:$(),2:Q(55,70,45),3:Q(60,75,45),4:Q(65,80,45)},t:{d:[.5,.8,.1],f1:30,f2:25}},L:{f:{1:$(),2:Z,3:Z,4:Z},t:Ku},G:{f:{1:$(),2:Z,3:Z,4:Z},t:{d:[.85,.3,.35],f1:0,f2:0}},X:{f:{1:Q(15,90,60),2:Z,3:Z,4:Z},t:Uu},V:{f:{1:$(-10),2:$(8),3:Z,4:Z},t:Uu},BENT_V:{f:{1:Q(30,80,40,-10),2:Q(30,80,40,8),3:Z,4:Z},t:Uu},U:{f:{1:$(-1),2:$(1),3:Z,4:Z},t:Uu},H:{f:{1:$(-1),2:$(1),3:Z,4:Z},t:Uu},R:{f:{1:$(3),2:$(-4),3:Z,4:Z},t:Uu},K:{f:{1:$(-4),2:Q(40,5,0,6),3:Z,4:Z},t:{d:[.6,.6,.2],f1:5,f2:0}},2:{f:{1:$(-10),2:$(8),3:Z,4:Z},t:Uu},3:{f:{1:$(-10),2:$(8),3:Z,4:Z},t:Ku},W:{f:{1:$(-10),2:$(),3:$(10),4:Z},t:{d:[.5,.8,-.35],f1:30,f2:25}},6:{f:{1:$(-10),2:$(),3:$(10),4:Q(60,70,40)},t:{d:[.55,.75,-.45],f1:30,f2:25}},7:{f:{1:$(-10),2:$(),3:Q(60,70,40),4:$(10)},t:{d:[.55,.75,-.25],f1:30,f2:25}},8:{f:{1:$(-10),2:Q(60,70,40),3:$(4),4:$(10)},t:{d:[.55,.75,0],f1:30,f2:25}},9:{f:{1:Q(55,60,40),2:$(-2),3:$(4),4:$(10)},t:{d:[.5,.8,.3],f1:30,f2:25}},F:{f:{1:Q(55,60,40),2:$(-2),3:$(4),4:$(10)},t:{d:[.5,.8,.3],f1:30,f2:25}},I:{f:{1:Z,2:Z,3:Z,4:$(5)},t:Uu},Y:{f:{1:Z,2:Z,3:Z,4:$(12)},t:Ku},ILY:{f:{1:$(-5),2:Z,3:Z,4:$(12)},t:Ku},OPEN_8:{f:{1:$(-10),2:Q(62,12,5,-2),3:$(4),4:$(10)},t:Ku},REST:{f:{1:Q(15,20,10,-2),2:Q(18,24,12),3:Q(20,26,12,2),4:Q(22,28,14,4)},t:{d:[.6,.35,.6],f1:10,f2:10}}},Ju=(e=0,t=0,n=0)=>new B(e,t,n),Yu={neutral:[.12,1.22,.33],neutral_hi:[.12,1.36,.31],neutral_lo:[.1,1.1,.3],center:[0,1.24,.33],center_hi:[0,1.4,.32],center_lo:[0,1.1,.3],far:[.12,1.25,.45],side:[.32,1.2,.32],chest:[.03,1.32,.135],chest_side:[.09,1.33,.13],stomach:[.03,1.12,.15],waist:[.1,1.04,.17],shoulder:[.15,1.41,.08],shoulder_opp:[-.13,1.41,.09],chin:[0,1.5,.088],mouth:[0,1.545,.097],nose:[0,1.585,.105],eye:[.032,1.615,.09],forehead:[.015,1.665,.092],temple:[.066,1.645,.05],cheek:[.055,1.56,.078],ear:[.082,1.595,0],head_top:[0,1.74,0],neck:[0,1.465,.078],fs:[.15,1.37,.3],rest:[.075,1.05,.2]},Xu={up:[0,1,0],down:[0,-1,0],fwd:[0,0,1],back:[0,0,-1],out:[1,0,0],in:[-1,0,0]};function Zu(e){if(Array.isArray(e))return e.slice();let t=[0,0,0];for(let n of e.split(`+`)){let e=/^(-?[\d.]+)?([a-z]+)$/.exec(n.trim()),r=e[1]?+e[1]:1,i=Xu[e[2]];for(let e=0;e<3;e++)t[e]+=i[e]*r}return t}var Qu=e=>e===`R`?-1:1,$u=(e,t)=>Ju(t[0]*Qu(e),t[1],t[2]).normalize(),ed=(e,t)=>Ju(t[0]*Qu(e),t[1],t[2]),td=new Set(`ITS.IT.THIS.THEY.BY.AND.ON.IN.WITH.FOR.FROM.THAN.THEN.PERSON.YOUR.OF.ONE.SAME.ALL.EVERY.NOW.OR.OVER.OUT.AGAINST.TO`.split(`.`)),nd=new Set([`forehead`,`temple`,`eye`,`cheek`,`chin`,`mouth`,`nose`,`ear`,`head_top`]),rd={F:`up`,N:`fwd`,hs:`B`,c:`palm`},id=e=>({p:Yu.rest,F:`in+0.35down+0.3fwd`,N:`back+0.6up+0.2in`,hs:`REST`,c:`wrist`,rest:!0});function ad(e,t){let n=typeof t.at==`string`?Yu[t.at]:t.at||Yu.neutral;if(!n)throw Error(`unknown location `+t.at);let r=t.off||[0,0,0],i=t.F||rd.F;if(nd.has(t.at)&&!t.noTilt){let e=Zu(i);e[1]>.3&&e[2]>-.2&&(i=[e[0],e[1],e[2]-.55*Math.hypot(e[0],e[1],e[2])])}return{p:[n[0]+r[0],n[1]+r[1],n[2]+r[2]],F:i,N:t.N||rd.N,hs:t.hs||rd.hs,c:t.c||rd.c,t:t.t}}var od=e=>({...e});function sd(e,t={}){let n=t.timing,r=t.lag??.12,i=t.speed||1,a=(t.transition??.16)/i,o=n?.1:.35,s={R:[],L:[]},c=[],l=[],u=[],d=[],f=(e,t,n)=>s[e].push({...n,t});f(`R`,0,id(`R`)),f(`L`,0,id(`L`));let p=i,m=null,h=[];for(let g=0;g<e.length;g++){let _=e[g];if(_.pause){d.push(o+.05),n||(o+=_.pause/i);continue}let v=_.sign;if(n&&td.has(_.g)&&_.wi!==void 0&&n.times[_.wi]&&o+.16-(n.times[_.wi][0]+r)>(_.anchor?.35:.2)){h.push(_.g);continue}let y=v.dur||.25+.22*Math.max(1,v.R.length-1),b=_.tr===void 0?t.transition??.16:_.tr,x;if(n&&_.anchor&&_.wi!==void 0&&n.times[_.wi]){let e=n.times[_.wi][0]+r,t=o+b/p-e;p=I.clamp(1+t/.35,.9,t>.9?2:t>.5?1.8:1.65);let i=o+b/p;if(e>i+.9){let t=s.R[s.R.length-1];e-i>1.6?(f(`R`,o+.35,{...t,hold:!0}),f(`R`,e-.45,id(`R`)),v.L&&(s.L[s.L.length-1].rest||f(`L`,e-.45,id(`L`)))):f(`R`,e-b/p,{...t,hold:!0})}x=Math.max(i,e)}else n||(p=i),x=o+b/p/(_.fs&&m&&m.wi===_.wi?m.f:1);if(n&&_.fs&&_.wi!==void 0&&n.times[_.wi]&&(!m||m.wi!==_.wi)){let t=0,r=0;for(let n=g;n<e.length&&e[n].wi===_.wi&&!e[n].pause;n++){let i=e[n].sign;t+=(i.dur||.3)+(e[n].tr??.09),r++}let[i,a]=n.times[_.wi],o=Math.max((a-i)*1.25+.2,r*.11);m={wi:_.wi,f:Math.max(1,Math.min(2.6,t/p/o))}}let S=_.fs&&m&&m.wi===_.wi?m.f:1,C=y/p/S,w=x+C,T=v.R.map(e=>ad(`R`,e)),E=e=>{let t=s[e][s[e].length-1];t.rest&&t.t<x-b/p-.05&&f(e,x-b/p-.08,{...t})};E(`R`),v.L&&E(`L`);let D=null;v.L===`mirror`?D=T.map(od):Array.isArray(v.L)&&(D=v.L.map(e=>ad(`L`,e)));let O=T.length,k=T.map((e,t)=>e.t===void 0?x+(O===1?0:t/(O-1))*C:x+e.t*C);if(T.forEach((e,t)=>f(`R`,k[t],e)),O===1&&f(`R`,w,{...T[0],hold:!0}),D){let e=D.length;D.forEach((t,n)=>f(`L`,t.t===void 0?x+(e===1?0:n/(e-1))*C:x+t.t*C,t)),e===1&&f(`L`,w,{...D[0],hold:!0})}else{let e=s.L[s.L.length-1];e.rest||f(`L`,Math.min(w,e.t+.45),id(`L`))}v.face&&c.push({t0:x-.1,t1:w+.1,face:v.face}),!n&&_.word&&l.push({t0:x,t1:_.mouthDur?x+_.mouthDur*(C+(_.tr??a)):w,word:_.word}),u.push({t0:x,t1:w,g:_.g,word:_.word,wi:_.wi,anchor:_.anchor}),o=w+(_.hold||0)}if(n)for(let e=0;e<n.times.length;e++){let t=n.tokens?n.tokens[e]:``,[r,i]=n.times[e]||[];r!==void 0&&t&&l.push({t0:r,t1:i,word:t})}return o+=.35,f(`R`,o,id(`R`)),f(`L`,o,id(`L`)),{dur:Math.max(o+.3,n?n.dur+.2:0),tracks:s,face:c,mouth:l,events:u,pauses:d,skipped:h,sentenceFace:t.face,speed:p}}var cd=100,ld=24;function ud(e){let t=[];for(let n of[`1`,`2`,`3`,`4`])t.push(...e.f[n]||[0,0,0,0]);return t.push(...e.t.d,e.t.f1||0,e.t.f2||0,...e.t.b||[-.1,.25,-1]),t}function dd(e){let t={};return[`1`,`2`,`3`,`4`].forEach((n,r)=>t[n]=e.slice(r*4,r*4+4)),{f:t,t:{d:e.slice(16,19),f1:e[19],f2:e[20],b:e.slice(21,24)}}}function fd(e,t,n,r){if(r<.5)return e;let i=Math.ceil(r*3),a=[],o=0;for(let e=-i;e<=i;e++){let t=Math.exp(-(e*e)/(2*r*r));a.push(t),o+=t}let s=new Float32Array(e.length);for(let r=0;r<n;r++)for(let c=0;c<t;c++){let l=0;for(let o=-i;o<=i;o++){let s=Math.min(n-1,Math.max(0,r+o));l+=e[s*t+c]*a[o+i]}s[r*t+c]=l/o}return e.set(s),e}var pd=e=>e*e*e*(e*(e*6-15)+10),md=class{constructor(e,t){this.A=e,this.rig=t,this.err={R:0,L:0}}keyWrist(e,t,n){let r=this.rig,i=ed(e,t.p);if(t.c===`wrist`)return i;r.resetBody();let a=this.pole(e,i),o=r.restP[e+` UpperArm`],s=(r.side[e].lenU+r.side[e].lenF)*.9,c=i.clone();for(let l=0;l<5;l++){let l=c.clone().sub(o);l.length()>s&&c.copy(l.setLength(s).add(o)),r.solveArm(e,c,a,{q:n},.6),r.applyHandshape(e,qu[t.hs]||qu.B);let u=r.handPoints(e),d=i.clone().sub(u[t.c]||u.palm);if(c.add(d),d.length()<.0015)break}let l=c.clone().sub(o);return l.length()>s&&c.copy(l.setLength(s).add(o)),c}pole(e,t){let n=I.clamp((t.y-1.3)/.35,0,1);return $u(e,[.45-.15*n,-1,.05+.35*n])}bake(e){let t=this.rig,n=Math.ceil(e.dur*cd)+2,r={n,hands:{}};for(let i of[`R`,`L`]){let a=[];for(let t of e.tracks[i])a.length&&t.t<=a[a.length-1].t+.001?a[a.length-1]=t:a.push(t);let o=a.map(e=>{let n=t.handQuat(i,$u(i,Zu(e.F)),$u(i,Zu(e.N)));return{t:e.t,q:n,W:this.keyWrist(i,e,n),h:ud(qu[e.hs]||qu.B),stop:!!(e.hold||e.rest)}}),s=o.map((e,t)=>{if(t===0||t===o.length-1||e.stop)return Ju();let n=o[t-1],r=o[t+1],i=r.W.clone().sub(n.W).multiplyScalar(1/Math.max(.02,r.t-n.t)),a=e.W.clone().sub(n.W),s=r.W.clone().sub(e.W),c=a.length()>1e-4&&s.length()>1e-4?a.normalize().dot(s.normalize()):1;return i.multiplyScalar(c<-.2?.15:c<.3?.55:.9)}),c=new Float32Array(n*3),l=new Float32Array(n*4),u=new Float32Array(n*ld),d=0,f=new z,p=null;for(let e=0;e<n;e++){let t=e/cd;for(;d<o.length-2&&o[d+1].t<=t;)d++;let n=o[d],r=o[Math.min(d+1,o.length-1)],i=Math.max(.001,r.t-n.t),a=n===r?0:I.clamp((t-n.t)/i,0,1),m=a*a,h=m*a,g=2*h-3*m+1,_=h-2*m+a,v=-2*h+3*m,y=h-m,b=n.W.clone().multiplyScalar(g).addScaledVector(s[d],_*i).addScaledVector(r.W,v).addScaledVector(s[Math.min(d+1,o.length-1)],y*i);c.set([b.x,b.y,b.z],e*3),f.copy(n.q).slerp(r.q,pd(a)),p&&p.dot(f)<0&&f.set(-f.x,-f.y,-f.z,-f.w),l.set([f.x,f.y,f.z,f.w],e*4),p=f.clone();let x=pd(Math.min(1,a*1.6));for(let t=0;t<ld;t++)u[e*ld+t]=n.h[t]+(r.h[t]-n.h[t])*x}fd(c,3,n,.032*cd),fd(l,4,n,.035*cd),fd(u,ld,n,.022*cd),r.hands[i]={W:c,Q:l,H:u}}let i=new Float32Array(n*6);for(let e=0;e<n;e++){let t=r.hands.R.W.subarray(e*3,e*3+3),n=r.hands.L.W.subarray(e*3,e*3+3),a=e=>I.clamp((e-1.28)*.55,0,.16),o=(t[0]+n[0])/2,s=Math.max(t[1],n[1]);i.set([a(t[1]),a(n[1]),I.clamp(o*.35,-.07,.07),I.clamp((Math.max(t[2],n[2])-.25)*.12,-.02,.03),I.clamp(t[0]*.12,-.05,.05),I.clamp((1.32-s)*.08,-.03,.04)],e*6)}let a=Math.round(.06*cd),o=new Float32Array(n*6);for(let e=0;e<n;e++)o.set(i.subarray(Math.max(0,e-a)*6,Math.max(0,e-a)*6+6),e*6);return fd(o,6,n,.12*cd),r.body=o,e.baked=r,r}frameAt(e,t,n,r){let i=I.clamp(n*cd,0,r-1.001),a=Math.floor(i),o=i-a,s=[];for(let n=0;n<t;n++)s.push(e[a*t+n]*(1-o)+e[(a+1)*t+n]*o);return s}apply(e,t){let n=e.baked||this.bake(e),r=this.rig,i=this.A.bones;r.resetBody();let[a,o,s,c,l,u]=this.frameAt(n.body,6,t,n.n),d=i.Spine2,f=i.Spine1,p=i.Head,m=i.Neck;f.rotateY(s*.5),d.rotateY(s*.5),d.rotateX(c+.012*Math.sin(t*1.6)),i.Pelvis&&i.Pelvis.rotateZ(.006*Math.sin(t*.35)),m.rotateY(l*.4),p.rotateY(l*.6-.025*Math.sin(t*.55)),p.rotateX(u),p.rotateZ(.02*Math.sin(t*.4));let h=0;for(let n of e.events){let e=t-(n.t1-.05);e>-.25&&e<.25&&(h+=Math.exp(-(e*e)/.006)*.018)}p.rotateX(h);for(let n of e.face)if(t>=n.t0&&t<=n.t1){let e=(t-n.t0)/(n.t1-n.t0),r=Math.sin(Math.PI*e);n.face.nod&&p.rotateX(.09*r*Math.sin(e*Math.PI*2*n.face.nod)),n.face.shake&&p.rotateY(.13*r*Math.sin(e*Math.PI*2*n.face.shake)),n.face.brows===`up`&&p.rotateX(-.04*r)}for(let[e,t]of[[`R`,a],[`L`,o]]){let n=i[e+` Clavicle`];n.updateMatrixWorld(!0);let a=new z().setFromAxisAngle(Ju(0,0,1),(e===`R`?-1:1)*t).multiply(n.getWorldQuaternion(new z));r.setWorldQuat(n,a)}this.A.root.updateMatrixWorld(!0);for(let e of[`R`,`L`]){let i=n.hands[e],a=this.frameAt(i.W,3,t,n.n),o=this.frameAt(i.Q,4,t,n.n),s=new z(o[0],o[1],o[2],o[3]).normalize(),c=Ju(a[0],a[1],a[2]);r.solveArm(e,c,this.pole(e,c),{q:s},.6);let l=this.frameAt(i.H,ld,t,n.n);for(let e=1;e<4;e++){let r=this.frameAt(i.H,ld,t-.012*e,n.n);for(let t=0;t<4;t++)l[e*4+t]=r[e*4+t]}r.applyHandshape(e,dd(l))}this.applyFace(e,t),this.A.root.updateMatrixWorld(!0)}applyFace(e,t){let n=this.rig,r=n.morphW;for(let e=0;e<r.length;e++)r[e]=0;let i=(e,t)=>n.setMorph(e,Math.min(1,(n.morphW[this.A.morph[e]]||0)+t));i(`AK_44_MouthSmileLeft`,.16),i(`AK_45_MouthSmileRight`,.16),i(`AU_06_CheekRaiser`,.1),i(`AK_03_BrowInnerUp`,.08);let a=e=>{let n=t-e;return n>0&&n<.2?Math.sin(n/.2*Math.PI):0},o=0;for(let t=1.3;t<e.dur;t+=3.1+.9*Math.abs(Math.sin(t*7.3)))o=Math.max(o,a(t));for(let t of e.pauses||[])o=Math.max(o,a(t));i(`AK_09_EyeBlinkLeft`,o),i(`AK_10_EyeBlinkRight`,o);for(let n of e.face){let e=Math.min(1,Math.max(0,Math.min((t-n.t0)/.18,(n.t1-t)/.18)));if(e<=0)continue;let r=pd(e),a=n.face;a.brows===`up`&&(i(`AK_03_BrowInnerUp`,.6*r),i(`AK_04_BrowOuterUpLeft`,.55*r),i(`AK_05_BrowOuterUpRight`,.55*r),i(`AK_21_EyeWideLeft`,.25*r),i(`AK_22_EyeWideRight`,.25*r)),a.brows===`down`&&(i(`AK_01_BrowDownLeft`,.6*r),i(`AK_02_BrowDownRight`,.6*r),i(`AK_19_EyeSquintLeft`,.25*r),i(`AK_20_EyeSquintRight`,.25*r)),a.smile&&(i(`AK_44_MouthSmileLeft`,.35*r),i(`AK_45_MouthSmileRight`,.35*r),i(`AU_06_CheekRaiser`,.3*r)),a.serious&&(i(`AK_36_MouthPressLeft`,.25*r),i(`AK_37_MouthPressRight`,.25*r)),a.neg&&(i(`AK_30_MouthFrownLeft`,.35*r),i(`AK_31_MouthFrownRight`,.35*r),i(`AK_01_BrowDownLeft`,.25*r),i(`AK_02_BrowDownRight`,.25*r))}for(let n of e.mouth)if(t>=n.t0-.06&&t<=n.t1+.06){let e=gd(n.word),r=Math.max(.05,n.t1-n.t0),a=(t-n.t0)/r*e.length-.5;for(let t=0;t<e.length;t++){let n=a-t,r=Math.exp(-n*n*2.2)*(e[t]===`00_Sil`?.2:.5);r>.01&&i(`AA_VI_`+e[t],r)}}}},hd={a:`10_aa`,e:`11_E`,i:`12_I`,o:`13_O`,u:`14_U`,y:`12_I`,p:`01_PP`,b:`01_PP`,m:`01_PP`,f:`02_FF`,v:`02_FF`,t:`04_DD`,d:`04_DD`,n:`08_nn`,l:`08_nn`,k:`05_KK`,g:`05_KK`,c:`05_KK`,q:`05_KK`,s:`07_SS`,z:`07_SS`,x:`07_SS`,r:`09_RR`,w:`14_U`,h:`10_aa`,j:`06_CH`};function gd(e){e=(e||``).toLowerCase().replace(/th/g,`þ`).replace(/ch|sh/g,`j`);let t=[];for(let n of e)n===`þ`?t.push(`03_TH`):hd[n]&&t.push(hd[n]);let n=Math.max(1,Math.ceil(t.length/5));return t.filter((e,t)=>t%n===0).concat([`00_Sil`]).slice(0,6)}var _d={"f014_body_color.jpg":Uc,"f014_body_normal.jpg":Wc,"f014_head_color.jpg":Gc,"f014_head_normal.jpg":Kc,"f014_opacity_color.png":qc,"avatar.fbx":Hc},vd=21.5,yd=e=>e.length>20&&String.fromCharCode(...e.subarray(0,18))===`Kaydara FBX Binary`;async function bd(){if(typeof fetch>`u`)return;if(/^https?:/i.test(new URL(Hc,document.baseURI).protocol)&&typeof DecompressionStream<`u`)try{let t=await fetch(`${Hc}.gz`);if(t.ok){let n=new Uint8Array(await t.arrayBuffer());if(n[0]===31&&n[1]===139&&(n=await e(n)),yd(n))return n.slice().buffer}}catch{}let t=await fetch(Hc);if(!t.ok)throw Error(`sign avatar: ${Hc} ${t.status}`);return t.arrayBuffer()}var xd=class e{A;rig;canvas;renderer;scene=new Ao;cam=new mr(vd,1,.05,20);signer;idle;plan=null;line=null;start=0;t0=performance.now();last=0;raf=0;host=null;ro=null;said=``;onWord=()=>{};constructor(e,t,n){this.A=e,this.rig=t,this.renderer=n,this.canvas=n.domElement,this.scene.add(e.root),this.signer=new md(e,t),this.idle=sd([],{}),this.idle.dur=1,this.signer.bake(this.idle)}static async create(){let t=document.createElement(`canvas`);t.className=`signer-canvas`,t.setAttribute(`aria-hidden`,`true`);let n=new Oo({canvas:t,antialias:!0,alpha:!0,powerPreference:`low-power`});n.outputColorSpace=A,n.toneMapping=4,n.setClearColor(0,0);let r=await iu(``,`jpg`,{urls:_d,fbx:await bd()}),i=new e(r,new Vu(r),n);return i.light(),i}light(){let e=this.scene;e.add(new mc(16777215,9076080,1.45));let t=new Dc(16777215,2.1);t.position.set(.8,1.7,3),e.add(t);let n=new Dc(12571903,.8);n.position.set(-2,1,1),e.add(n);let r=new Dc(16777215,1.6);r.position.set(.4,2.2,-2.5),e.add(r),this.cam.position.set(0,1.425,1.72),this.cam.lookAt(0,1.415,0)}attach(e){this.host!==e&&(this.detach(),this.host=e,e.appendChild(this.canvas),this.ro=typeof ResizeObserver<`u`?new ResizeObserver(()=>this.resize()):null,this.ro?.observe(e),this.resize(),this.last=0,this.raf||=requestAnimationFrame(this.tick))}detach(){this.ro?.disconnect(),this.ro=null,this.canvas.remove(),this.host=null,this.raf&&cancelAnimationFrame(this.raf),this.raf=0}resize(){let e=this.host;if(!e)return;let t=Math.max(1,e.clientWidth),n=Math.max(1,e.clientHeight),r=Math.min(2,window.devicePixelRatio||1);this.renderer.setPixelRatio(r),this.renderer.setSize(t,n,!1),this.cam.aspect=t/n,this.cam.fov=this.cam.aspect<1?vd/this.cam.aspect**.85:vd,this.cam.updateProjectionMatrix(),this.last=0}play(e){if(this.line=e,!e){this.plan=null;return}let t=sd(Iu(e.text).seq,e.timing?{timing:e.timing}:{});this.signer.bake(t),this.plan=t,this.start=performance.now()}report(e,t,n){let r=`${e}|${t}|${n}`;r!==this.said&&(this.said=r,this.onWord({word:e,spelled:t,signing:n}))}wordAt(e,t){let n=-1;for(let[r,i]of e.events.entries()){if(i.t0-.05>t)break;n=r}if(n<0)return{word:``,spelled:!1};let r=e.events[n];if(t>r.t1+.35)return{word:``,spelled:!1};if(!/^(fs-|#)/.test(r.g))return{word:r.word,spelled:!1};let i=n;for(;i>0&&!e.events[i].word&&/^(fs-|#)/.test(e.events[i-1].g);)i--;return{word:e.events[i].word,spelled:!r.g.startsWith(`#`)}}tick=()=>{this.raf=requestAnimationFrame(this.tick);let e=performance.now(),t=!!this.plan;if(e-this.last<(t?32:80)||document.hidden||!this.host||!this.host.clientWidth)return;this.last=e;let n=this.idle,r=(e-this.t0)/1e3;if(this.plan){let t=this.line?.clock?this.line.clock():null;(t==null||!Number.isFinite(t))&&(t=(e-this.start)/1e3),t>this.plan.dur?this.plan=null:(n=this.plan,r=t)}if(n===this.idle)this.signer.apply(n,.99),this.breathe(r),this.report(``,!1,!1);else{this.signer.apply(n,r);let e=this.wordAt(n,r);this.report(e.word,e.spelled,!0)}this.renderer.render(this.scene,this.cam)};breathe(e){let t=this.A.bones;t.Spine2?.rotateX(.012*Math.sin(e*1.5)),t.Head?.rotateY(.03*Math.sin(e*.5)),t.Head?.rotateZ(.015*Math.sin(e*.37));let n=e%4.1,r=n>3.9?Math.sin((n-3.9)/.2*Math.PI):0;this.rig.setMorph(`AK_09_EyeBlinkLeft`,r),this.rig.setMorph(`AK_10_EyeBlinkRight`,r),this.A.root.updateMatrixWorld(!0)}},Sd=null;function Cd(){return Sd||=xd.create(),Sd}export{Cd as signView};