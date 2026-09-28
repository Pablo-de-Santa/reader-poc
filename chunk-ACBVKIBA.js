import{B as os,E as Gm,F as Wm,J as Xm,K as dc,L as fc,M as pc,N as fe,O as me,P as Di,Q as qm,R as Ym,S as or,T as ar,U as Te,V as mc,W as Zm,a as ss,b as La,ba as Km,ca as hd,d as Fm,e as Um,g as Dr,i as ld,j as cd,k as Bm,l as km,p as zm,s as Hm,u as Vm}from"./chunk-B3SB7P3A.js";var N0=0,jd=1,F0=2;var _l=1,U0=2,ia=3,Ji=0,Kn=1,li=2,yr=0,Ws=1,Qd=2,ef=3,tf=4,B0=5;var ps=100,k0=101,z0=102,H0=103,V0=104,G0=200,W0=201,X0=202,q0=203,Gc=204,Wc=205,Y0=206,Z0=207,K0=208,J0=209,$0=210,j0=211,Q0=212,eg=213,tg=214,Xc=0,qc=1,Yc=2,Xs=3,Zc=4,Kc=5,Jc=6,$c=7,nf=0,ng=1,ig=2,ji=0,rf=1,sf=2,of=3,af=4,lf=5,cf=6,hf=7,Ud="attached",rg="detached",Bd=300,Ms=301,Qs=302,xh=303,vh=304,xl=306,ms=1e3,Oi=1001,Go=1002,sn=1003,yh=1004;var eo=1005;var on=1006,ra=1007;var Qi=1008;var ci=1009,uf=1010,df=1011,sa=1012,Mh=1013,er=1014,yi=1015,Mr=1016,Sh=1017,bh=1018,oa=1020,ff=35902,pf=35899,mf=1021,gf=1022,Mi=1023,ur=1026,Ss=1027,Eh=1028,Th=1029,bs=1030,wh=1031;var Ah=1033,vl=33776,yl=33777,Ml=33778,Sl=33779,Rh=35840,Ch=35841,Ph=35842,Ih=35843,Dh=36196,Lh=37492,Oh=37496,Nh=37488,Fh=37489,bl=37490,Uh=37491,Bh=37808,kh=37809,zh=37810,Hh=37811,Vh=37812,Gh=37813,Wh=37814,Xh=37815,qh=37816,Yh=37817,Zh=37818,Kh=37819,Jh=37820,$h=37821,jh=36492,Qh=36494,eu=36495,tu=36283,nu=36284,El=36285,iu=36286;var qs=2300,Ys=2301,Vc=2302,kd=2303,zd=2400,Hd=2401,Vd=2402,sg=2500;var _f=0,Tl=1,aa=2,og=3200;var ru=0,ag=1,Xr="",Vt="srgb",Yn="srgb-linear",Wa="linear",bt="srgb";var Gs=7680;var Gd=519,lg=512,cg=513,hg=514,su=515,ug=516,dg=517,ou=518,fg=519,jc=35044;var xf="300 es",Zi=2e3,Wo=2001;function vv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function yv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Xo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function pg(){let s=Xo("canvas");return s.style.display="block",s}var Jm={},qo=null;function Xa(...s){let e="THREE."+s.shift();qo?qo("log",e,...s):console.log(e,...s)}function mg(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ne(...s){s=mg(s);let e="THREE."+s.shift();if(qo)qo("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Xe(...s){s=mg(s);let e="THREE."+s.shift();if(qo)qo("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Qc(...s){let e=s.join(" ");e in Jm||(Jm[e]=!0,Ne(...s))}function gg(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var _g={[Xc]:qc,[Yc]:Jc,[Zc]:$c,[Xs]:Kc,[qc]:Xc,[Jc]:Yc,[$c]:Zc,[Kc]:Xs},dr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$m=1234567,Va=Math.PI/180,Zs=180/Math.PI;function Ki(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fn[s&255]+Fn[s>>8&255]+Fn[s>>16&255]+Fn[s>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[t&63|128]+Fn[t>>8&255]+"-"+Fn[t>>16&255]+Fn[t>>24&255]+Fn[n&255]+Fn[n>>8&255]+Fn[n>>16&255]+Fn[n>>24&255]).toLowerCase()}function pt(s,e,t){return Math.max(e,Math.min(t,s))}function vf(s,e){return(s%e+e)%e}function Mv(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Sv(s,e,t){return s!==e?(t-s)/(e-s):0}function Ga(s,e,t){return(1-t)*s+t*e}function bv(s,e,t,n){return Ga(s,e,1-Math.exp(-t*n))}function Ev(s,e=1){return e-Math.abs(vf(s,e*2)-e)}function Tv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function wv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Av(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Rv(s,e){return s+Math.random()*(e-s)}function Cv(s){return s*(.5-Math.random())}function Pv(s){s!==void 0&&($m=s);let e=$m+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Iv(s){return s*Va}function Dv(s){return s*Zs}function Lv(s){return(s&s-1)===0&&s!==0}function Ov(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Nv(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Fv(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*f,a*h,a*c);break;default:Ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Yi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Tt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ye={DEG2RAD:Va,RAD2DEG:Zs,generateUUID:Ki,clamp:pt,euclideanModulo:vf,mapLinear:Mv,inverseLerp:Sv,lerp:Ga,damp:bv,pingpong:Ev,smoothstep:Tv,smootherstep:wv,randInt:Av,randFloat:Rv,randFloatSpread:Cv,seededRandom:Pv,degToRad:Iv,radToDeg:Dv,isPowerOfTwo:Lv,ceilPowerOfTwo:Ov,floorPowerOfTwo:Nv,setQuaternionFromProperEuler:Fv,normalize:Tt,denormalize:Yi},ke=class s{static{s.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},an=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],p=r[o+2],g=r[o+3];if(u!==g||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*g;m<0&&(d=-d,f=-f,p=-p,g=-g,m=-m);let _=1-a;if(m<.9995){let x=Math.acos(m),S=Math.sin(x);_=Math.sin(_*x)/S,a=Math.sin(a*x)/S,l=l*_+d*a,c=c*_+f*a,h=h*_+p*a,u=u*_+g*a}else{l=l*_+d*a,c=c*_+f*a,h=h*_+p*a,u=u*_+g*a;let x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-a*f,e[t+2]=c*p+h*f+a*d-l*u,e[t+3]=h*p-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{static{s.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ud.copy(this).projectOnVector(e),this.sub(ud)}reflect(e){return this.sub(ud.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ud=new L,jm=new an,tt=class s{static{s.prototype.isMatrix3=!0}constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],g=i[0],m=i[3],_=i[6],x=i[1],S=i[4],y=i[7],T=i[2],b=i[5],w=i[8];return r[0]=o*g+a*x+l*T,r[3]=o*m+a*S+l*b,r[6]=o*_+a*y+l*w,r[1]=c*g+h*x+u*T,r[4]=c*m+h*S+u*b,r[7]=c*_+h*y+u*w,r[2]=d*g+f*x+p*T,r[5]=d*m+f*S+p*b,r[8]=d*_+f*y+p*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=t*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return e[0]=u*g,e[1]=(i*c-h*n)*g,e[2]=(a*n-i*o)*g,e[3]=d*g,e[4]=(h*t-i*l)*g,e[5]=(i*r-a*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(dd.makeScale(e,t)),this}rotate(e){return this.premultiply(dd.makeRotation(-e)),this}translate(e,t){return this.premultiply(dd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},dd=new tt,Qm=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),e0=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uv(){let s={enabled:!0,workingColorSpace:Yn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===bt&&(i.r=kr(i.r),i.g=kr(i.g),i.b=kr(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===bt&&(i.r=Vo(i.r),i.g=Vo(i.g),i.b=Vo(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Xr?Wa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Qc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Qc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Yn]:{primaries:e,whitePoint:n,transfer:Wa,toXYZ:Qm,fromXYZ:e0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:Qm,fromXYZ:e0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),s}var ht=Uv();function kr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Vo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ro,eh=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ro===void 0&&(Ro=Xo("canvas")),Ro.width=e.width,Ro.height=e.height;let i=Ro.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ro}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Xo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=kr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kr(t[n]/255)*255):t[n]=kr(t[n]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Bv=0,Yo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(fd(i[o].image)):r.push(fd(i[o]))}else r=fd(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function fd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?eh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}var kv=0,pd=new L,Pn=(()=>{class s extends dr{constructor(t=s.DEFAULT_IMAGE,n=s.DEFAULT_MAPPING,i=Oi,r=Oi,o=on,a=Qi,l=Mi,c=ci,h=s.DEFAULT_ANISOTROPY,u=Xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=Ki(),this.name="",this.source=new Yo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pd).x}get height(){return this.source.getSize(pd).y}get depth(){return this.source.getSize(pd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Ne(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){Ne(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ms:t.x=t.x-Math.floor(t.x);break;case Oi:t.x=t.x<0?0:1;break;case Go:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ms:t.y=t.y-Math.floor(t.y);break;case Oi:t.y=t.y<0?0:1;break;case Go:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return s.DEFAULT_IMAGE=null,s.DEFAULT_MAPPING=Bd,s.DEFAULT_ANISOTROPY=1,s})(),Rt=class s{static{s.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],g=l[2],m=l[6],_=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,y=(f+1)/2,T=(_+1)/2,b=(h+d)/4,w=(u+g)/4,v=(p+m)/4;return S>y&&S>T?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=b/n,r=w/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=b/i,r=v/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=w/r,i=v/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-p)*(m-p)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(u-g)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},th=class extends dr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},r=new Pn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Yo(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},vi=class extends th{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},qa=class extends Pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var nh=class extends Pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qe=class s{static{s.prototype.isMatrix4=!0}constructor(e,t,n,i,r,o,a,l,c,h,u,d,f,p,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,f,p,g,m)}set(e,t,n,i,r,o,a,l,c,h,u,d,f,p,g,m){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=h,_[10]=u,_[14]=d,_[3]=f,_[7]=p,_[11]=g,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Co.setFromMatrixColumn(e,0).length(),r=1/Co.setFromMatrixColumn(e,1).length(),o=1/Co.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,p=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,p=c*h,g=c*u;t[0]=d+g*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,p=c*h,g=c*u;t[0]=d-g*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,p=a*h,g=a*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,g=a*c;t[0]=l*h,t[4]=g-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-g*u}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zv,e,Hv)}lookAt(e,t,n){let i=this.elements;return _i.subVectors(e,t),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),as.crossVectors(n,_i),as.lengthSq()===0&&(Math.abs(n.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),as.crossVectors(n,_i)),as.normalize(),gc.crossVectors(_i,as),i[0]=as.x,i[4]=gc.x,i[8]=_i.x,i[1]=as.y,i[5]=gc.y,i[9]=_i.y,i[2]=as.z,i[6]=gc.z,i[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],g=n[6],m=n[10],_=n[14],x=n[3],S=n[7],y=n[11],T=n[15],b=i[0],w=i[4],v=i[8],A=i[12],C=i[1],P=i[5],I=i[9],H=i[13],V=i[2],O=i[6],k=i[10],F=i[14],Z=i[3],Q=i[7],D=i[11],pe=i[15];return r[0]=o*b+a*C+l*V+c*Z,r[4]=o*w+a*P+l*O+c*Q,r[8]=o*v+a*I+l*k+c*D,r[12]=o*A+a*H+l*F+c*pe,r[1]=h*b+u*C+d*V+f*Z,r[5]=h*w+u*P+d*O+f*Q,r[9]=h*v+u*I+d*k+f*D,r[13]=h*A+u*H+d*F+f*pe,r[2]=p*b+g*C+m*V+_*Z,r[6]=p*w+g*P+m*O+_*Q,r[10]=p*v+g*I+m*k+_*D,r[14]=p*A+g*H+m*F+_*pe,r[3]=x*b+S*C+y*V+T*Z,r[7]=x*w+S*P+y*O+T*Q,r[11]=x*v+S*I+y*k+T*D,r[15]=x*A+S*H+y*F+T*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],g=e[7],m=e[11],_=e[15],x=l*f-c*d,S=a*f-c*u,y=a*d-l*u,T=o*f-c*h,b=o*d-l*h,w=o*u-a*h;return t*(g*x-m*S+_*y)-n*(p*x-m*T+_*b)+i*(p*S-g*T+_*w)-r*(p*y-g*b+m*w)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],g=e[13],m=e[14],_=e[15],x=t*a-n*o,S=t*l-i*o,y=t*c-r*o,T=n*l-i*a,b=n*c-r*a,w=i*c-r*l,v=h*g-u*p,A=h*m-d*p,C=h*_-f*p,P=u*m-d*g,I=u*_-f*g,H=d*_-f*m,V=x*H-S*I+y*P+T*C-b*A+w*v;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/V;return e[0]=(a*H-l*I+c*P)*O,e[1]=(i*I-n*H-r*P)*O,e[2]=(g*w-m*b+_*T)*O,e[3]=(d*b-u*w-f*T)*O,e[4]=(l*C-o*H-c*A)*O,e[5]=(t*H-i*C+r*A)*O,e[6]=(m*y-p*w-_*S)*O,e[7]=(h*w-d*y+f*S)*O,e[8]=(o*I-a*C+c*v)*O,e[9]=(n*C-t*I-r*v)*O,e[10]=(p*b-g*y+_*x)*O,e[11]=(u*y-h*b-f*x)*O,e[12]=(a*A-o*P-l*v)*O,e[13]=(t*P-n*A+i*v)*O,e[14]=(g*S-p*T-m*x)*O,e[15]=(h*T-u*S+d*x)*O,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,g=o*h,m=o*u,_=a*u,x=l*c,S=l*h,y=l*u,T=n.x,b=n.y,w=n.z;return i[0]=(1-(g+_))*T,i[1]=(f+y)*T,i[2]=(p-S)*T,i[3]=0,i[4]=(f-y)*b,i[5]=(1-(d+_))*b,i[6]=(m+x)*b,i[7]=0,i[8]=(p+S)*w,i[9]=(m-x)*w,i[10]=(1-(d+g))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Co.set(i[0],i[1],i[2]).length(),a=Co.set(i[4],i[5],i[6]).length(),l=Co.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Wi.copy(this);let c=1/o,h=1/a,u=1/l;return Wi.elements[0]*=c,Wi.elements[1]*=c,Wi.elements[2]*=c,Wi.elements[4]*=h,Wi.elements[5]*=h,Wi.elements[6]*=h,Wi.elements[8]*=u,Wi.elements[9]*=u,Wi.elements[10]*=u,t.setFromRotationMatrix(Wi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=Zi,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),p,g;if(l)p=r/(o-r),g=o*r/(o-r);else if(a===Zi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Wo)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Zi,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),p,g;if(l)p=1/(o-r),g=o/(o-r);else if(a===Zi)p=-2/(o-r),g=-(o+r)/(o-r);else if(a===Wo)p=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Co=new L,Wi=new Qe,zv=new L(0,0,0),Hv=new L(1,1,1),as=new L,gc=new L,_i=new L,t0=new Qe,n0=new an,ln=(()=>{class s{constructor(t=0,n=0,i=0,r=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,r=this._order){return this._x=t,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let r=t.elements,o=r[0],a=r[4],l=r[8],c=r[1],h=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return t0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(t0,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return n0.setFromEuler(this),this.setFromQuaternion(n0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return s.DEFAULT_ORDER="XYZ",s})(),Zo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Vv=0,i0=new L,Po=new an,Lr=new Qe,_c=new L,Oa=new L,Gv=new L,Wv=new an,r0=new L(1,0,0),s0=new L(0,1,0),o0=new L(0,0,1),a0={type:"added"},Xv={type:"removed"},Io={type:"childadded",child:null},md={type:"childremoved",child:null},wn=(()=>{class s extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new L,n=new ln,i=new an,r=new L(1,1,1);function o(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qe},normalMatrix:{value:new tt}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Po.setFromAxisAngle(t,n),this.quaternion.multiply(Po),this}rotateOnWorldAxis(t,n){return Po.setFromAxisAngle(t,n),this.quaternion.premultiply(Po),this}rotateX(t){return this.rotateOnAxis(r0,t)}rotateY(t){return this.rotateOnAxis(s0,t)}rotateZ(t){return this.rotateOnAxis(o0,t)}translateOnAxis(t,n){return i0.copy(t).applyQuaternion(this.quaternion),this.position.add(i0.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(r0,t)}translateY(t){return this.translateOnAxis(s0,t)}translateZ(t){return this.translateOnAxis(o0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Lr.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?_c.copy(t):_c.set(t,n,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Lr.lookAt(Oa,_c,this.up):Lr.lookAt(_c,Oa,this.up),this.quaternion.setFromRotationMatrix(Lr),r&&(Lr.extractRotation(r.matrixWorld),Po.setFromRotationMatrix(Lr),this.quaternion.premultiply(Po.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Xe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(a0),Io.child=t,this.dispatchEvent(Io),Io.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Xv),md.child=t,this.dispatchEvent(md),md.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Lr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Lr.multiply(t.parent.matrixWorld)),t.applyMatrix4(Lr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(a0),Io.child=t,this.dispatchEvent(Io),Io.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,t,Gv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,Wv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,r=t.z,o=this.matrix.elements;o[12]+=n-o[0]*n-o[4]*i-o[8]*r,o[13]+=i-o[1]*n-o[5]*i-o[9]*r,o[14]+=r-o[2]*n-o[6]*i-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>La(ss({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>ss({},l)),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let d=c[h];o(t.shapes,d)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(o(t.materials,this.material[c]));r.material=l}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];r.animations.push(o(t.animations,c))}}if(n){let l=a(t.geometries),c=a(t.materials),h=a(t.textures),u=a(t.images),d=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(l){let c=[];for(let h in l){let u=l[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let r=t.children[i];this.add(r.clone())}return this}}return s.DEFAULT_UP=new L(0,1,0),s.DEFAULT_MATRIX_AUTO_UPDATE=!0,s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,s})(),qt=class extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}},qv={type:"move"},Ko=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),_=this._getHandJoint(c,g);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new qt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},xg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},xc={h:0,s:0,l:0};function gd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ht.workingColorSpace){if(e=vf(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=gd(o,r,e+1/3),this.g=gd(o,r,e),this.b=gd(o,r,e-1/3)}return ht.colorSpaceToWorking(this,i),this}setStyle(e,t=Vt){function n(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){let n=xg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}copyLinearToSRGB(e){return this.r=Vo(e.r),this.g=Vo(e.g),this.b=Vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return ht.workingToColorSpace(Un.copy(this),e),Math.round(pt(Un.r*255,0,255))*65536+Math.round(pt(Un.g*255,0,255))*256+Math.round(pt(Un.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(Un.copy(this),t);let n=Un.r,i=Un.g,r=Un.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(Un.copy(this),t),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=Vt){ht.workingToColorSpace(Un.copy(this),e);let t=Un.r,n=Un.g,i=Un.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ls),this.setHSL(ls.h+e,ls.s+t,ls.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ls),e.getHSL(xc);let n=Ga(ls.h,xc.h,t),i=Ga(ls.s,xc.s,t),r=Ga(ls.l,xc.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Un=new Ke;Ke.NAMES=xg;var Ya=class extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Xi=new L,Or=new L,_d=new L,Nr=new L,Do=new L,Lo=new L,l0=new L,xd=new L,vd=new L,yd=new L,Md=new Rt,Sd=new Rt,bd=new Rt,fs=class s{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Xi.subVectors(e,t),i.cross(Xi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Xi.subVectors(i,t),Or.subVectors(n,t),_d.subVectors(e,t);let o=Xi.dot(Xi),a=Xi.dot(Or),l=Xi.dot(_d),c=Or.dot(Or),h=Or.dot(_d),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Nr)===null?!1:Nr.x>=0&&Nr.y>=0&&Nr.x+Nr.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Nr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nr.x),l.addScaledVector(o,Nr.y),l.addScaledVector(a,Nr.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Md.setScalar(0),Sd.setScalar(0),bd.setScalar(0),Md.fromBufferAttribute(e,t),Sd.fromBufferAttribute(e,n),bd.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Md,r.x),o.addScaledVector(Sd,r.y),o.addScaledVector(bd,r.z),o}static isFrontFacing(e,t,n,i){return Xi.subVectors(n,t),Or.subVectors(e,t),Xi.cross(Or).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xi.subVectors(this.c,this.b),Or.subVectors(this.a,this.b),Xi.cross(Or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Do.subVectors(i,n),Lo.subVectors(r,n),xd.subVectors(e,n);let l=Do.dot(xd),c=Lo.dot(xd);if(l<=0&&c<=0)return t.copy(n);vd.subVectors(e,i);let h=Do.dot(vd),u=Lo.dot(vd);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Do,o);yd.subVectors(e,r);let f=Do.dot(yd),p=Lo.dot(yd);if(p>=0&&f<=p)return t.copy(r);let g=f*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Lo,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return l0.subVectors(r,i),a=(u-h)/(u-h+(f-p)),t.copy(i).addScaledVector(l0,a);let _=1/(m+g+d);return o=g*_,a=d*_,t.copy(n).addScaledVector(Do,o).addScaledVector(Lo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$t=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qi):qi.fromBufferAttribute(r,o),qi.applyMatrix4(e.matrixWorld),this.expandByPoint(qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vc.copy(n.boundingBox)),vc.applyMatrix4(e.matrixWorld),this.union(vc)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Na),yc.subVectors(this.max,Na),Oo.subVectors(e.a,Na),No.subVectors(e.b,Na),Fo.subVectors(e.c,Na),cs.subVectors(No,Oo),hs.subVectors(Fo,No),ks.subVectors(Oo,Fo);let t=[0,-cs.z,cs.y,0,-hs.z,hs.y,0,-ks.z,ks.y,cs.z,0,-cs.x,hs.z,0,-hs.x,ks.z,0,-ks.x,-cs.y,cs.x,0,-hs.y,hs.x,0,-ks.y,ks.x,0];return!Ed(t,Oo,No,Fo,yc)||(t=[1,0,0,0,1,0,0,0,1],!Ed(t,Oo,No,Fo,yc))?!1:(Mc.crossVectors(cs,hs),t=[Mc.x,Mc.y,Mc.z],Ed(t,Oo,No,Fo,yc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Fr=[new L,new L,new L,new L,new L,new L,new L,new L],qi=new L,vc=new $t,Oo=new L,No=new L,Fo=new L,cs=new L,hs=new L,ks=new L,Na=new L,yc=new L,Mc=new L,zs=new L;function Ed(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){zs.fromArray(s,r);let a=i.x*Math.abs(zs.x)+i.y*Math.abs(zs.y)+i.z*Math.abs(zs.z),l=e.dot(zs),c=t.dot(zs),h=n.dot(zs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var fn=new L,Sc=new ke,Yv=0,Bt=class extends dr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jc,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sc.fromBufferAttribute(this,t),Sc.applyMatrix3(e),this.setXY(t,Sc.x,Sc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jc&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Za=class extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ka=class extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Dt=class extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Zv=new $t,Fa=new L,Td=new L,ri=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Zv.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fa.subVectors(e,this.center);let t=Fa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Fa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Td.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fa.copy(e.center).add(Td)),this.expandByPoint(Fa.copy(e.center).sub(Td))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Kv=0,Li=new Qe,wd=new wn,Uo=new L,xi=new $t,Ua=new $t,Tn=new L,Gt=class s extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vv(e)?Ka:Za)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Li.makeRotationFromQuaternion(e),this.applyMatrix4(Li),this}rotateX(e){return Li.makeRotationX(e),this.applyMatrix4(Li),this}rotateY(e){return Li.makeRotationY(e),this.applyMatrix4(Li),this}rotateZ(e){return Li.makeRotationZ(e),this.applyMatrix4(Li),this}translate(e,t,n){return Li.makeTranslation(e,t,n),this.applyMatrix4(Li),this}scale(e,t,n){return Li.makeScale(e,t,n),this.applyMatrix4(Li),this}lookAt(e){return wd.lookAt(e),wd.updateMatrix(),this.applyMatrix4(wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Uo).negate(),this.translate(Uo.x,Uo.y,Uo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Dt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];xi.setFromBufferAttribute(r),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ua.setFromBufferAttribute(a),this.morphTargetsRelative?(Tn.addVectors(xi.min,Ua.min),xi.expandByPoint(Tn),Tn.addVectors(xi.max,Ua.max),xi.expandByPoint(Tn)):(xi.expandByPoint(Ua.min),xi.expandByPoint(Ua.max))}xi.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Tn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Tn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Tn.fromBufferAttribute(a,c),l&&(Uo.fromBufferAttribute(e,c),Tn.add(Uo)),i=Math.max(i,n.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new L,l[v]=new L;let c=new L,h=new L,u=new L,d=new ke,f=new ke,p=new ke,g=new L,m=new L;function _(v,A,C){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,C),d.fromBufferAttribute(r,v),f.fromBufferAttribute(r,A),p.fromBufferAttribute(r,C),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(g.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(P),a[v].add(g),a[A].add(g),a[C].add(g),l[v].add(m),l[A].add(m),l[C].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let v=0,A=x.length;v<A;++v){let C=x[v],P=C.start,I=C.count;for(let H=P,V=P+I;H<V;H+=3)_(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let S=new L,y=new L,T=new L,b=new L;function w(v){T.fromBufferAttribute(i,v),b.copy(T);let A=a[v];S.copy(A),S.sub(T.multiplyScalar(T.dot(A))).normalize(),y.crossVectors(b,A);let P=y.dot(l[v])<0?-1:1;o.setXYZW(v,S.x,S.y,S.z,P)}for(let v=0,A=x.length;v<A;++v){let C=x[v],P=C.start,I=C.count;for(let H=P,V=P+I;H<V;H+=3)w(e.getX(H+0)),w(e.getX(H+1)),w(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tn.fromBufferAttribute(e,t),Tn.normalize(),e.setXYZ(t,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let _=0;_<h;_++)d[p++]=c[f++]}return new Bt(d,h,u)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jc,this.updateRanges=[],this.version=0,this.uuid=Ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},qn=new L,$o=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qn.fromBufferAttribute(this,t),qn.applyMatrix4(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qn.fromBufferAttribute(this,t),qn.applyNormalMatrix(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qn.fromBufferAttribute(this,t),qn.transformDirection(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Xa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Xa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Jv=0,si=class extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=Ws,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Wc,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(n.blending=this.blending),this.side!==Ji&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gc&&(n.blendSrc=this.blendSrc),this.blendDst!==Wc&&(n.blendDst=this.blendDst),this.blendEquation!==ps&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ur=new L,Ad=new L,bc=new L,us=new L,Rd=new L,Ec=new L,Cd=new L,gs=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ur)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ur.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ur.copy(this.origin).addScaledVector(this.direction,t),Ur.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ad.copy(e).add(t).multiplyScalar(.5),bc.copy(t).sub(e).normalize(),us.copy(this.origin).sub(Ad);let r=e.distanceTo(t)*.5,o=-this.direction.dot(bc),a=us.dot(this.direction),l=-us.dot(bc),c=us.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ad).addScaledVector(bc,d),f}intersectSphere(e,t){Ur.subVectors(e.center,this.origin);let n=Ur.dot(this.direction),i=Ur.dot(Ur)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ur)!==null}intersectTriangle(e,t,n,i,r){Rd.subVectors(t,e),Ec.subVectors(n,e),Cd.crossVectors(Rd,Ec);let o=this.direction.dot(Cd),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;us.subVectors(this.origin,e);let l=a*this.direction.dot(Ec.crossVectors(us,Ec));if(l<0)return null;let c=a*this.direction.dot(Rd.cross(us));if(c<0||l+c>o)return null;let h=-a*us.dot(Cd);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zn=class extends si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},c0=new Qe,Hs=new gs,Tc=new ri,h0=new L,wc=new L,Ac=new L,Rc=new L,Pd=new L,Cc=new L,u0=new L,Pc=new L,yt=class extends wn{constructor(e=new Gt,t=new Zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Cc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Pd.fromBufferAttribute(u,e),o?Cc.addScaledVector(Pd,h):Cc.addScaledVector(Pd.sub(t),h))}t.add(Cc)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tc.copy(n.boundingSphere),Tc.applyMatrix4(r),Hs.copy(e.ray).recast(e.near),!(Tc.containsPoint(Hs.origin)===!1&&(Hs.intersectSphere(Tc,h0)===null||Hs.origin.distanceToSquared(h0)>(e.far-e.near)**2))&&(c0.copy(r).invert(),Hs.copy(e.ray).applyMatrix4(c0),!(n.boundingBox!==null&&Hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hs)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){let m=d[p],_=o[m.materialIndex],x=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,T=S;y<T;y+=3){let b=a.getX(y),w=a.getX(y+1),v=a.getX(y+2);i=Ic(this,_,e,n,c,h,u,b,w,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=p,_=g;m<_;m+=3){let x=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);i=Ic(this,o,e,n,c,h,u,x,S,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){let m=d[p],_=o[m.materialIndex],x=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,T=S;y<T;y+=3){let b=y,w=y+1,v=y+2;i=Ic(this,_,e,n,c,h,u,b,w,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=p,_=g;m<_;m+=3){let x=m,S=m+1,y=m+2;i=Ic(this,o,e,n,c,h,u,x,S,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function $v(s,e,t,n,i,r,o,a){let l;if(e.side===Kn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Ji,a),l===null)return null;Pc.copy(a),Pc.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Pc);return c<t.near||c>t.far?null:{distance:c,point:Pc.clone(),object:s}}function Ic(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,wc),s.getVertexPosition(l,Ac),s.getVertexPosition(c,Rc);let h=$v(s,e,t,n,wc,Ac,Rc,u0);if(h){let u=new L;fs.getBarycoord(u0,wc,Ac,Rc,u),i&&(h.uv=fs.getInterpolatedAttribute(i,a,l,c,u,new ke)),r&&(h.uv1=fs.getInterpolatedAttribute(r,a,l,c,u,new ke)),o&&(h.normal=fs.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new L,materialIndex:0};fs.getNormal(wc,Ac,Rc,d.normal),h.face=d,h.barycoord=u}return h}var Ba=new Rt,d0=new Rt,f0=new Rt,jv=new Rt,p0=new Qe,Dc=new L,Id=new ri,m0=new Qe,Dd=new gs,Ja=class extends yt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ud,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $t),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Dc),this.boundingBox.expandByPoint(Dc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ri),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Dc),this.boundingSphere.expandByPoint(Dc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Id.copy(this.boundingSphere),Id.applyMatrix4(i),e.ray.intersectsSphere(Id)!==!1&&(m0.copy(i).invert(),Dd.copy(e.ray).applyMatrix4(m0),!(this.boundingBox!==null&&Dd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Dd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Rt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ud?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===rg?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ne("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;d0.fromBufferAttribute(i.attributes.skinIndex,e),f0.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Ba.copy(t),t.set(0,0,0,0)):(Ba.set(...t,1),t.set(0,0,0)),Ba.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=f0.getComponent(r);if(o!==0){let a=d0.getComponent(r);p0.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(jv.copy(Ba).applyMatrix4(p0),o)}}return t.isVector4&&(t.w=Ba.w),t.applyMatrix4(this.bindMatrixInverse)}},jo=class extends wn{constructor(){super(),this.isBone=!0,this.type="Bone"}},Qo=class extends Pn{constructor(e=null,t=1,n=1,i,r,o,a,l,c=sn,h=sn,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},g0=new Qe,Qv=new Qe,$a=class s{constructor(e=[],t=[]){this.uuid=Ki(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ne("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Qv;g0.multiplyMatrices(a,t[r]),g0.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Qo(t,e,e,Mi,yi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(Ne("Skeleton: No bone found with UUID:",r),o=new jo),this.bones.push(o),this.boneInverses.push(new Qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},_s=class extends Bt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Bo=new Qe,_0=new Qe,Lc=[],x0=new $t,ey=new Qe,ka=new yt,za=new ri,ja=class extends yt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _s(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ey)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $t),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bo),x0.copy(e.boundingBox).applyMatrix4(Bo),this.boundingBox.union(x0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bo),za.copy(e.boundingSphere).applyMatrix4(Bo),this.boundingSphere.union(za)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ka.geometry=this.geometry,ka.material=this.material,ka.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),za.copy(this.boundingSphere),za.applyMatrix4(n),e.ray.intersectsSphere(za)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Bo),_0.multiplyMatrices(n,Bo),ka.matrixWorld=_0,ka.raycast(e,Lc);for(let o=0,a=Lc.length;o<a;o++){let l=Lc[o];l.instanceId=r,l.object=this,t.push(l)}Lc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new _s(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qo(new Float32Array(i*this.count),i,this.count,Eh,yi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ld=new L,ty=new L,ny=new tt,cr=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ld.subVectors(n,t).cross(ty.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Ld),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ny.getNormalMatrix(e),i=this.coplanarPoint(Ld).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vs=new ri,iy=new ke(.5,.5),Oc=new L,ea=class{constructor(e=new cr,t=new cr,n=new cr,i=new cr,r=new cr,o=new cr){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zi,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],g=r[9],m=r[10],_=r[11],x=r[12],S=r[13],y=r[14],T=r[15];if(i[0].setComponents(c-o,f-h,_-p,T-x).normalize(),i[1].setComponents(c+o,f+h,_+p,T+x).normalize(),i[2].setComponents(c+a,f+u,_+g,T+S).normalize(),i[3].setComponents(c-a,f-u,_-g,T-S).normalize(),n)i[4].setComponents(l,d,m,y).normalize(),i[5].setComponents(c-l,f-d,_-m,T-y).normalize();else if(i[4].setComponents(c-l,f-d,_-m,T-y).normalize(),t===Zi)i[5].setComponents(c+l,f+d,_+m,T+y).normalize();else if(t===Wo)i[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){Vs.center.set(0,0,0);let t=iy.distanceTo(e.center);return Vs.radius=.7071067811865476+t,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Oc.x=i.normal.x>0?e.max.x:e.min.x,Oc.y=i.normal.y>0?e.max.y:e.min.y,Oc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ta=class extends si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ih=new L,rh=new L,v0=new Qe,Ha=new gs,Nc=new ri,Od=new L,y0=new L,Ks=class extends wn{constructor(e=new Gt,t=new ta){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ih.fromBufferAttribute(t,i-1),rh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ih.distanceTo(rh);e.setAttribute("lineDistance",new Dt(n,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nc.copy(n.boundingSphere),Nc.applyMatrix4(i),Nc.radius+=r,e.ray.intersectsSphere(Nc)===!1)return;v0.copy(i).invert(),Ha.copy(e.ray).applyMatrix4(v0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,m=p-1;g<m;g+=c){let _=h.getX(g),x=h.getX(g+1),S=Fc(this,e,Ha,l,_,x,g);S&&t.push(S)}if(this.isLineLoop){let g=h.getX(p-1),m=h.getX(f),_=Fc(this,e,Ha,l,g,m,p-1);_&&t.push(_)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=f,m=p-1;g<m;g+=c){let _=Fc(this,e,Ha,l,g,g+1,g);_&&t.push(_)}if(this.isLineLoop){let g=Fc(this,e,Ha,l,p-1,f,p-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Fc(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(ih.fromBufferAttribute(a,i),rh.fromBufferAttribute(a,r),t.distanceSqToSegment(ih,rh,Od,y0)>n)return;Od.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Od);if(!(c<e.near||c>e.far))return{distance:c,point:y0.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var M0=new L,S0=new L,Qa=class extends Ks{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)M0.fromBufferAttribute(t,i),S0.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+M0.distanceTo(S0);e.setAttribute("lineDistance",new Dt(n,1))}else Ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},el=class extends Ks{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},fr=class extends si{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},b0=new Qe,Wd=new gs,Uc=new ri,Bc=new L,zr=class extends wn{constructor(e=new Gt,t=new fr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uc.copy(n.boundingSphere),Uc.applyMatrix4(i),Uc.radius+=r,e.ray.intersectsSphere(Uc)===!1)return;b0.copy(i).invert(),Wd.copy(e.ray).applyMatrix4(b0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,g=f;p<g;p++){let m=c.getX(p);Bc.fromBufferAttribute(u,m),E0(Bc,m,l,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,g=f;p<g;p++)Bc.fromBufferAttribute(u,p),E0(Bc,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function E0(s,e,t,n,i,r,o){let a=Wd.distanceSqToPoint(s);if(a<t){let l=new L;Wd.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var tl=class extends Pn{constructor(e=[],t=Ms,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Js=class extends Pn{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hr=class extends Pn{constructor(e,t,n=er,i,r,o,a=sn,l=sn,c,h=ur,u=1){if(h!==ur&&h!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},sh=class extends Hr{constructor(e,t=er,n=Ms,i,r,o=sn,a=sn,l,c=ur){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},nl=class extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},xs=class s extends Gt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(u,2));function p(g,m,_,x,S,y,T,b,w,v,A){let C=y/w,P=T/v,I=y/2,H=T/2,V=b/2,O=w+1,k=v+1,F=0,Z=0,Q=new L;for(let D=0;D<k;D++){let pe=D*P-H;for(let Ae=0;Ae<O;Ae++){let je=Ae*C-I;Q[g]=je*x,Q[m]=pe*S,Q[_]=V,c.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[_]=b>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(Ae/w),u.push(1-D/v),F+=1}}for(let D=0;D<v;D++)for(let pe=0;pe<w;pe++){let Ae=d+pe+O*D,je=d+pe+O*(D+1),Ge=d+(pe+1)+O*(D+1),Fe=d+(pe+1)+O*D;l.push(Ae,je,Fe),l.push(je,Ge,Fe),Z+=6}a.addGroup(f,Z,A),f+=Z,d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var il=class s extends Gt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new L,h=new ke;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Dt(o,3)),this.setAttribute("normal",new Dt(a,3)),this.setAttribute("uv",new Dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},pr=class s extends Gt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,g=[],m=n/2,_=0;x(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Dt(u,3)),this.setAttribute("normal",new Dt(d,3)),this.setAttribute("uv",new Dt(f,2));function x(){let y=new L,T=new L,b=0,w=(t-e)/n;for(let v=0;v<=r;v++){let A=[],C=v/r,P=C*(t-e)+e;for(let I=0;I<=i;I++){let H=I/i,V=H*l+a,O=Math.sin(V),k=Math.cos(V);T.x=P*O,T.y=-C*n+m,T.z=P*k,u.push(T.x,T.y,T.z),y.set(O,w,k).normalize(),d.push(y.x,y.y,y.z),f.push(H,1-C),A.push(p++)}g.push(A)}for(let v=0;v<i;v++)for(let A=0;A<r;A++){let C=g[A][v],P=g[A+1][v],I=g[A+1][v+1],H=g[A][v+1];(e>0||A!==0)&&(h.push(C,P,H),b+=3),(t>0||A!==r-1)&&(h.push(P,I,H),b+=3)}c.addGroup(_,b,0),_+=b}function S(y){let T=p,b=new ke,w=new L,v=0,A=y===!0?e:t,C=y===!0?1:-1;for(let I=1;I<=i;I++)u.push(0,m*C,0),d.push(0,C,0),f.push(.5,.5),p++;let P=p;for(let I=0;I<=i;I++){let V=I/i*l+a,O=Math.cos(V),k=Math.sin(V);w.x=A*k,w.y=m*C,w.z=A*O,u.push(w.x,w.y,w.z),d.push(0,C,0),b.x=O*.5+.5,b.y=k*.5*C+.5,f.push(b.x,b.y),p++}for(let I=0;I<i;I++){let H=T+I,V=P+I;y===!0?h.push(V,V+1,H):h.push(V+1,V,H),v+=3}c.addGroup(_,v,y===!0?1:2),_+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},rl=class s extends pr{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var sl=class s extends Gt{constructor(e=[new ke(0,-.5),new ke(.5,0),new ke(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=pt(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new L,d=new ke,f=new L,p=new L,g=new L,m=0,_=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,_=e[x+1].y-e[x].y,f.x=_*1,f.y=-m,f.z=_*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:m=e[x+1].x-e[x].x,_=e[x+1].y-e[x].y,f.x=_*1,f.y=-m,f.z=_*0,p.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(p)}for(let x=0;x<=t;x++){let S=n+x*h*i,y=Math.sin(S),T=Math.cos(S);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*y,u.y=e[b].y,u.z=e[b].x*T,o.push(u.x,u.y,u.z),d.x=x/t,d.y=b/(e.length-1),a.push(d.x,d.y);let w=l[3*b+0]*y,v=l[3*b+1],A=l[3*b+0]*T;c.push(w,v,A)}}for(let x=0;x<t;x++)for(let S=0;S<e.length-1;S++){let y=S+x*e.length,T=y,b=y+e.length,w=y+e.length+1,v=y+1;r.push(T,b,v),r.push(w,v,b)}this.setIndex(r),this.setAttribute("position",new Dt(o,3)),this.setAttribute("uv",new Dt(a,2)),this.setAttribute("normal",new Dt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var mr=class s extends Gt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],p=[],g=[],m=[];for(let _=0;_<h;_++){let x=_*d-o;for(let S=0;S<c;S++){let y=S*u-r;p.push(y,-x,0),g.push(0,0,1),m.push(S/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let x=0;x<a;x++){let S=x+c*_,y=x+c*(_+1),T=x+1+c*(_+1),b=x+1+c*_;f.push(S,y,b),f.push(y,T,b)}this.setIndex(f),this.setAttribute("position",new Dt(p,3)),this.setAttribute("normal",new Dt(g,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var ol=class s extends Gt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new L,d=new L,f=[],p=[],g=[],m=[];for(let _=0;_<=n;_++){let x=[],S=_/n,y=0;_===0&&o===0?y=.5/t:_===n&&l===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){let b=T/t;u.x=-e*Math.cos(i+b*r)*Math.sin(o+S*a),u.y=e*Math.cos(o+S*a),u.z=e*Math.sin(i+b*r)*Math.sin(o+S*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(b+y,1-S),x.push(c++)}h.push(x)}for(let _=0;_<n;_++)for(let x=0;x<t;x++){let S=h[_][x+1],y=h[_][x],T=h[_+1][x],b=h[_+1][x+1];(_!==0||o>0)&&f.push(S,y,b),(_!==n-1||l<Math.PI)&&f.push(y,T,b)}this.setIndex(f),this.setAttribute("position",new Dt(p,3)),this.setAttribute("normal",new Dt(g,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function to(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(T0(i))i.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(T0(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Bn(s){let e={};for(let t=0;t<s.length;t++){let n=to(s[t]);for(let i in n)e[i]=n[i]}return e}function T0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function ry(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function yf(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var vg={clone:to,merge:Bn},sy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cn=class extends si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sy,this.fragmentShader=oy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=ry(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},oh=class extends Cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$i=class extends si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ru,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},oi=class extends $i{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ah=class extends si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=og,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},lh=class extends si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function kc(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function ay(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function w0(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function yg(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var gr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ch=class extends gr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zd,endingEnd:zd}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hd:r=e,a=2*t-n;break;case Vd:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Hd:o=e,l=2*n-t;break;case Vd:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),g=p*p,m=g*p,_=-d*m+2*d*g-d*p,x=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*p+1,S=(-1-f)*m+(1.5+f)*g+.5*p,y=f*m-f*g;for(let T=0;T!==a;++T)r[T]=_*o[h+T]+x*o[c+T]+S*o[l+T]+y*o[u+T];return r}},hh=class extends gr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},uh=class extends gr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},dh=class extends gr{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.settings||this.DefaultSettings_,u=h.inTangents,d=h.outTangents;if(!u||!d){let g=(n-t)/(i-t),m=1-g;for(let _=0;_!==a;++_)r[_]=o[c+_]*m+o[l+_]*g;return r}let f=a*2,p=e-1;for(let g=0;g!==a;++g){let m=o[c+g],_=o[l+g],x=p*f+g*2,S=d[x],y=d[x+1],T=e*f+g*2,b=u[T],w=u[T+1],v=(n-t)/(i-t),A,C,P,I,H;for(let V=0;V<8;V++){A=v*v,C=A*v,P=1-v,I=P*P,H=I*P;let k=H*t+3*I*v*S+3*P*A*b+C*i-n;if(Math.abs(k)<1e-10)break;let F=3*I*(S-t)+6*P*v*(b-S)+3*A*(i-b);if(Math.abs(F)<1e-10)break;v=v-k/F,v=Math.max(0,Math.min(1,v))}r[g]=H*m+3*I*v*y+3*P*A*w+C*_}return r}},ai=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=kc(t,this.TimeBufferType),this.values=kc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:kc(e.times,Array),values:kc(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new uh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ch(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new dh(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case qs:t=this.InterpolantFactoryMethodDiscrete;break;case Ys:t=this.InterpolantFactoryMethodLinear;break;case Vc:t=this.InterpolantFactoryMethodSmooth;break;case kd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ne("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return Ys;case this.InterpolantFactoryMethodSmooth:return Vc;case this.InterpolantFactoryMethodBezier:return kd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Xe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&yv(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Vc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let g=t[u+p];if(g!==t[d+p]||g!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};ai.prototype.ValueTypeName="";ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=Ys;var Vr=class extends ai{constructor(e,t,n){super(e,t,n)}};Vr.prototype.ValueTypeName="bool";Vr.prototype.ValueBufferType=Array;Vr.prototype.DefaultInterpolation=qs;Vr.prototype.InterpolantFactoryMethodLinear=void 0;Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends ai{constructor(e,t,n,i){super(e,t,n,i)}};al.prototype.ValueTypeName="color";var _r=class extends ai{constructor(e,t,n,i){super(e,t,n,i)}};_r.prototype.ValueTypeName="number";var fh=class extends gr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)an.slerpFlat(r,0,o,c-a,o,c,l);return r}},xr=class extends ai{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new fh(this.times,this.values,this.getValueSize(),e)}};xr.prototype.ValueTypeName="quaternion";xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Gr=class extends ai{constructor(e,t,n){super(e,t,n)}};Gr.prototype.ValueTypeName="string";Gr.prototype.ValueBufferType=Array;Gr.prototype.DefaultInterpolation=qs;Gr.prototype.InterpolantFactoryMethodLinear=void 0;Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var vr=class extends ai{constructor(e,t,n,i){super(e,t,n,i)}};vr.prototype.ValueTypeName="vector";var ll=class{constructor(e="",t=-1,n=[],i=sg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ki(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(cy(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(ai.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=ay(l);l=w0(l,1,h),c=w0(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new _r(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(Ne("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Xe("AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,p,g){if(f.length!==0){let m=[],_=[];yg(f,m,_,p),m.length!==0&&g.push(new u(d,m,_))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let g=0;g<d[p].morphTargets.length;g++)f[d[p].morphTargets[g]]=-1;for(let g in f){let m=[],_=[];for(let x=0;x!==d[p].morphTargets.length;++x){let S=d[p];m.push(S.time),_.push(S.morphTarget===g?1:0)}i.push(new _r(".morphTargetInfluence["+g+"]",m,_))}l=f.length*o}else{let f=".bones["+t[u].name+"]";n(vr,f+".position",d,"pos",i),n(xr,f+".quaternion",d,"rot",i),n(vr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function ly(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _r;case"vector":case"vector2":case"vector3":case"vector4":return vr;case"color":return al;case"quaternion":return xr;case"bool":case"boolean":return Vr;case"string":return Gr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function cy(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ly(s.type);if(s.times===void 0){let t=[],n=[];yg(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var hr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(A0(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!A0(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function A0(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var ph=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Mg=new ph,no=(()=>{class s{constructor(t){this.manager=t!==void 0?t:Mg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(r,o){i.load(t,r,n,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}return s.DEFAULT_MATERIAL_NAME="__DEFAULT",s})(),Br={},Xd=class extends Error{constructor(e,t){super(e),this.response=t}},na=class extends no{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=hr.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Br[e]!==void 0){Br[e].push({onLoad:t,onProgress:n,onError:i});return}Br[e]=[],Br[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ne("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Br[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,g=0,m=new ReadableStream({start(_){x();function x(){u.read().then(({done:S,value:y})=>{if(S)_.close();else{g+=y.byteLength;let T=new ProgressEvent("progress",{lengthComputable:p,loaded:g,total:f});for(let b=0,w=h.length;b<w;b++){let v=h[b];v.onProgress&&v.onProgress(T)}_.enqueue(y),x()}},S=>{_.error(S)})}}});return new Response(m)}else throw new Xd(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{hr.add(`file:${e}`,c);let h=Br[e];delete Br[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Br[e];if(h===void 0)throw this.manager.itemError(e),c;delete Br[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ko=new WeakMap,mh=class extends no{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=hr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=ko.get(o);u===void 0&&(u=[],ko.set(o,u)),u.push({onLoad:t,onError:i})}return o}let a=Xo("img");function l(){h(),t&&t(this);let u=ko.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}ko.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),hr.remove(`image:${e}`);let d=ko.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}ko.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),hr.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var cl=class extends no{constructor(e){super(e)}load(e,t,n,i){let r=new Pn,o=new mh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},$s=class extends wn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Nd=new Qe,R0=new L,C0=new L,hl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ea,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;R0.setFromMatrixPosition(e.matrixWorld),t.position.copy(R0),C0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(C0),t.updateMatrixWorld(),Nd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nd,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Wo||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},zc=new L,Hc=new an,lr=new L,ul=class extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zc,Hc,lr),lr.x===1&&lr.y===1&&lr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,Hc,lr.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(zc,Hc,lr),lr.x===1&&lr.y===1&&lr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,Hc,lr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ds=new L,P0=new ke,I0=new ke,pn=class extends ul{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(Va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ds.x,ds.y).multiplyScalar(-e/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ds.x,ds.y).multiplyScalar(-e/ds.z)}getViewSize(e,t){return this.getViewBounds(e,P0,I0),t.subVectors(I0,P0)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Va*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},qd=class extends hl{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Zs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},js=class extends $s{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new qd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Yd=class extends hl{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0}},dl=class extends $s{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Yd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},vs=class extends ul{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zd=class extends hl{constructor(){super(new vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ys=class extends $s{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new Zd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},fl=class extends $s{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Wr=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Fd=new WeakMap,pl=class extends no{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ne("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ne("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=hr.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Fd.has(o)===!0?(i&&i(Fd.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){hr.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){i&&i(c),Fd.set(l,c),hr.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});hr.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var zo=-90,Ho=1,gh=class extends wn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new pn(zo,Ho,e,t);i.layers=this.layers,this.add(i);let r=new pn(zo,Ho,e,t);r.layers=this.layers,this.add(r);let o=new pn(zo,Ho,e,t);o.layers=this.layers,this.add(o);let a=new pn(zo,Ho,e,t);a.layers=this.layers,this.add(a);let l=new pn(zo,Ho,e,t);l.layers=this.layers,this.add(l);let c=new pn(zo,Ho,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Zi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},_h=class extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Mf="\\[\\]\\.:\\/",hy=new RegExp("["+Mf+"]","g"),Sf="[^"+Mf+"]",uy="[^"+Mf.replace("\\.","")+"]",dy=/((?:WC+[\/:])*)/.source.replace("WC",Sf),fy=/(WCOD+)?/.source.replace("WCOD",uy),py=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sf),my=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sf),gy=new RegExp("^"+dy+fy+py+my+"$"),_y=["material","materials","bones","map"],Kd=class{constructor(e,t,n){let i=n||Ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ht=(()=>{class s{constructor(t,n,i){this.path=n,this.parsedPath=i||s.parseTrackName(n),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,n,i):new s(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(hy,"")}static parseTrackName(t){let n=gy.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=i.nodeName.substring(r+1);_y.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(o){for(let a=0;a<o.length;a++){let l=o[a];if(l.name===n||l.uuid===n)return l;let c=i(l.children);if(c)return c}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)t[n++]=i[r]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,r=n.propertyName,o=n.propertyIndex;if(t||(t=s.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=n.objectIndex;switch(i){case"materials":if(!t.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[r];if(a===void 0){let h=n.nodeName;Xe("PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return s.Composite=Kd,s})();Ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ht.prototype.GetterByBindingType=[Ht.prototype._getValue_direct,Ht.prototype._getValue_array,Ht.prototype._getValue_arrayElement,Ht.prototype._getValue_toArray];Ht.prototype.SetterByBindingTypeAndVersioning=[[Ht.prototype._setValue_direct,Ht.prototype._setValue_direct_setNeedsUpdate,Ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_array,Ht.prototype._setValue_array_setNeedsUpdate,Ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_arrayElement,Ht.prototype._setValue_arrayElement_setNeedsUpdate,Ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_fromArray,Ht.prototype._setValue_fromArray_setNeedsUpdate,Ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ww=new Float32Array(1);var D0=new Qe,ml=class{constructor(e,t,n=0,i=1/0){this.ray=new gs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Zo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return D0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(D0),this}intersectObject(e,t=!0,n=[]){return Jd(e,this,n,t),n.sort(L0),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Jd(e[i],this,n,t);return n.sort(L0),n}};function L0(s,e){return s.distance-e.distance}function Jd(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Jd(r[o],e,t,!0)}}var $d=class s{static{s.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}},O0=new ke,gl=class{constructor(e=new ke(1/0,1/0),t=new ke(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=O0.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,O0).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};function bf(s,e,t,n){let i=xy(n);switch(t){case mf:return s*e;case Eh:return s*e/i.components*i.byteLength;case Th:return s*e/i.components*i.byteLength;case bs:return s*e*2/i.components*i.byteLength;case wh:return s*e*2/i.components*i.byteLength;case gf:return s*e*3/i.components*i.byteLength;case Mi:return s*e*4/i.components*i.byteLength;case Ah:return s*e*4/i.components*i.byteLength;case vl:case yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ml:case Sl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ch:case Ih:return Math.max(s,16)*Math.max(e,8)/4;case Rh:case Ph:return Math.max(s,8)*Math.max(e,8)/2;case Dh:case Lh:case Nh:case Fh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Oh:case bl:case Uh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case zh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case qh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Kh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Jh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case $h:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case jh:case Qh:case eu:return Math.ceil(s/4)*Math.ceil(e/4)*16;case tu:case nu:return Math.ceil(s/4)*Math.ceil(e/4)*8;case El:case iu:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xy(s){switch(s){case ci:case uf:return{byteLength:1,components:1};case sa:case df:case Mr:return{byteLength:2,components:1};case Sh:case bh:return{byteLength:2,components:4};case er:case Mh:case yi:return{byteLength:4,components:1};case ff:case pf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function Wg(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function yy(s){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],g=u[f];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let g=u[f];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var My=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sy=`#ifdef USE_ALPHAHASH
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
#endif`,by=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ey=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ty=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ay=`#ifdef USE_AOMAP
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
#endif`,Ry=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Py=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Iy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ly=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Oy=`#ifdef USE_IRIDESCENCE
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
#endif`,Ny=`#ifdef USE_BUMPMAP
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
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ky=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Wy=`#define PI 3.141592653589793
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
} // validated`,Xy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qy=`vec3 transformedNormal = objectNormal;
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
#endif`,Yy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ky=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$y="gl_FragColor = linearToOutputTexel( gl_FragColor );",jy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qy=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,eM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tM=`#ifdef USE_ENVMAP
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
#endif`,nM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iM=`#ifdef USE_ENVMAP
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
#endif`,rM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lM=`#ifdef USE_GRADIENTMAP
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
}`,cM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dM=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif
#include <lightprobes_pars_fragment>`,fM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,pM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_M=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,vM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yM=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,MM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,SM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,EM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,IM=`#if defined( USE_POINTS_UV )
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
#endif`,DM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,BM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WM=`#ifdef USE_NORMALMAP
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
#endif`,XM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,$M=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,rS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,oS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lS=`#ifdef USE_SKINNING
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
#endif`,cS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hS=`#ifdef USE_SKINNING
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
#endif`,uS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pS=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mS=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gS=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,MS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SS=`uniform sampler2D t2D;
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
}`,bS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ES=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AS=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,RS=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,CS=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,PS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,IS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LS=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OS=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NS=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,FS=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,US=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,BS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,kS=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,zS=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,HS=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,VS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,GS=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,WS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,XS=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,qS=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,YS=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,ZS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,KS=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,JS=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,$S=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,jS=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,QS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,eb=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,at={alphahash_fragment:My,alphahash_pars_fragment:Sy,alphamap_fragment:by,alphamap_pars_fragment:Ey,alphatest_fragment:Ty,alphatest_pars_fragment:wy,aomap_fragment:Ay,aomap_pars_fragment:Ry,batching_pars_vertex:Cy,batching_vertex:Py,begin_vertex:Iy,beginnormal_vertex:Dy,bsdfs:Ly,iridescence_fragment:Oy,bumpmap_pars_fragment:Ny,clipping_planes_fragment:Fy,clipping_planes_pars_fragment:Uy,clipping_planes_pars_vertex:By,clipping_planes_vertex:ky,color_fragment:zy,color_pars_fragment:Hy,color_pars_vertex:Vy,color_vertex:Gy,common:Wy,cube_uv_reflection_fragment:Xy,defaultnormal_vertex:qy,displacementmap_pars_vertex:Yy,displacementmap_vertex:Zy,emissivemap_fragment:Ky,emissivemap_pars_fragment:Jy,colorspace_fragment:$y,colorspace_pars_fragment:jy,envmap_fragment:Qy,envmap_common_pars_fragment:eM,envmap_pars_fragment:tM,envmap_pars_vertex:nM,envmap_physical_pars_fragment:fM,envmap_vertex:iM,fog_vertex:rM,fog_pars_vertex:sM,fog_fragment:oM,fog_pars_fragment:aM,gradientmap_pars_fragment:lM,lightmap_pars_fragment:cM,lights_lambert_fragment:hM,lights_lambert_pars_fragment:uM,lights_pars_begin:dM,lights_toon_fragment:pM,lights_toon_pars_fragment:mM,lights_phong_fragment:gM,lights_phong_pars_fragment:_M,lights_physical_fragment:xM,lights_physical_pars_fragment:vM,lights_fragment_begin:yM,lights_fragment_maps:MM,lights_fragment_end:SM,lightprobes_pars_fragment:bM,logdepthbuf_fragment:EM,logdepthbuf_pars_fragment:TM,logdepthbuf_pars_vertex:wM,logdepthbuf_vertex:AM,map_fragment:RM,map_pars_fragment:CM,map_particle_fragment:PM,map_particle_pars_fragment:IM,metalnessmap_fragment:DM,metalnessmap_pars_fragment:LM,morphinstance_vertex:OM,morphcolor_vertex:NM,morphnormal_vertex:FM,morphtarget_pars_vertex:UM,morphtarget_vertex:BM,normal_fragment_begin:kM,normal_fragment_maps:zM,normal_pars_fragment:HM,normal_pars_vertex:VM,normal_vertex:GM,normalmap_pars_fragment:WM,clearcoat_normal_fragment_begin:XM,clearcoat_normal_fragment_maps:qM,clearcoat_pars_fragment:YM,iridescence_pars_fragment:ZM,opaque_fragment:KM,packing:JM,premultiplied_alpha_fragment:$M,project_vertex:jM,dithering_fragment:QM,dithering_pars_fragment:eS,roughnessmap_fragment:tS,roughnessmap_pars_fragment:nS,shadowmap_pars_fragment:iS,shadowmap_pars_vertex:rS,shadowmap_vertex:sS,shadowmask_pars_fragment:oS,skinbase_vertex:aS,skinning_pars_vertex:lS,skinning_vertex:cS,skinnormal_vertex:hS,specularmap_fragment:uS,specularmap_pars_fragment:dS,tonemapping_fragment:fS,tonemapping_pars_fragment:pS,transmission_fragment:mS,transmission_pars_fragment:gS,uv_pars_fragment:_S,uv_pars_vertex:xS,uv_vertex:vS,worldpos_vertex:yS,background_vert:MS,background_frag:SS,backgroundCube_vert:bS,backgroundCube_frag:ES,cube_vert:TS,cube_frag:wS,depth_vert:AS,depth_frag:RS,distance_vert:CS,distance_frag:PS,equirect_vert:IS,equirect_frag:DS,linedashed_vert:LS,linedashed_frag:OS,meshbasic_vert:NS,meshbasic_frag:FS,meshlambert_vert:US,meshlambert_frag:BS,meshmatcap_vert:kS,meshmatcap_frag:zS,meshnormal_vert:HS,meshnormal_frag:VS,meshphong_vert:GS,meshphong_frag:WS,meshphysical_vert:XS,meshphysical_frag:qS,meshtoon_vert:YS,meshtoon_frag:ZS,points_vert:KS,points_frag:JS,shadow_vert:$S,shadow_frag:jS,sprite_vert:QS,sprite_frag:eb},be={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},br={basic:{uniforms:Bn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Bn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Bn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Bn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Bn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ke(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Bn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Bn([be.points,be.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Bn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Bn([be.common,be.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Bn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Bn([be.sprite,be.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:Bn([be.common,be.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:Bn([be.lights,be.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};br.physical={uniforms:Bn([br.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var au={r:0,b:0,g:0},tb=new Qe,Xg=new tt;Xg.set(-1,0,0,0,1,0,0,0,1);function nb(s,e,t,n,i,r){let o=new Ke(0),a=i===!0?0:1,l,c,h=null,u=0,d=null;function f(x){let S=x.isScene===!0?x.background:null;if(S&&S.isTexture){let y=x.backgroundBlurriness>0;S=e.get(S,y)}return S}function p(x){let S=!1,y=f(x);y===null?m(o,a):y&&y.isColor&&(m(y,1),S=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(x,S){let y=f(S);y&&(y.isCubeTexture||y.mapping===xl)?(c===void 0&&(c=new yt(new xs(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:to(br.backgroundCube.uniforms),vertexShader:br.backgroundCube.vertexShader,fragmentShader:br.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tb.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Xg),c.material.toneMapped=ht.getTransfer(y.colorSpace)!==bt,(h!==y||u!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new yt(new mr(2,2),new Cn({name:"BackgroundMaterial",uniforms:to(br.background.uniforms),vertexShader:br.background.vertexShader,fragmentShader:br.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ht.getTransfer(y.colorSpace)!==bt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,S){x.getRGB(au,yf(s)),t.buffers.color.setClear(au.r,au.g,au.b,S,r)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,S=1){o.set(x),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(o,a)},render:p,addToRenderList:g,dispose:_}}function ib(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(P,I,H,V,O){let k=!1,F=u(P,V,H,I);r!==F&&(r=F,c(r.object)),k=f(P,V,H,O),k&&p(P,V,H,O),O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,y(P,I,H,V),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return s.createVertexArray()}function c(P){return s.bindVertexArray(P)}function h(P){return s.deleteVertexArray(P)}function u(P,I,H,V){let O=V.wireframe===!0,k=n[I.id];k===void 0&&(k={},n[I.id]=k);let F=P.isInstancedMesh===!0?P.id:0,Z=k[F];Z===void 0&&(Z={},k[F]=Z);let Q=Z[H.id];Q===void 0&&(Q={},Z[H.id]=Q);let D=Q[O];return D===void 0&&(D=d(l()),Q[O]=D),D}function d(P){let I=[],H=[],V=[];for(let O=0;O<t;O++)I[O]=0,H[O]=0,V[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:V,object:P,attributes:{},index:null}}function f(P,I,H,V){let O=r.attributes,k=I.attributes,F=0,Z=H.getAttributes();for(let Q in Z)if(Z[Q].location>=0){let pe=O[Q],Ae=k[Q];if(Ae===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(Ae=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(Ae=P.instanceColor)),pe===void 0||pe.attribute!==Ae||Ae&&pe.data!==Ae.data)return!0;F++}return r.attributesNum!==F||r.index!==V}function p(P,I,H,V){let O={},k=I.attributes,F=0,Z=H.getAttributes();for(let Q in Z)if(Z[Q].location>=0){let pe=k[Q];pe===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(pe=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(pe=P.instanceColor));let Ae={};Ae.attribute=pe,pe&&pe.data&&(Ae.data=pe.data),O[Q]=Ae,F++}r.attributes=O,r.attributesNum=F,r.index=V}function g(){let P=r.newAttributes;for(let I=0,H=P.length;I<H;I++)P[I]=0}function m(P){_(P,0)}function _(P,I){let H=r.newAttributes,V=r.enabledAttributes,O=r.attributeDivisors;H[P]=1,V[P]===0&&(s.enableVertexAttribArray(P),V[P]=1),O[P]!==I&&(s.vertexAttribDivisor(P,I),O[P]=I)}function x(){let P=r.newAttributes,I=r.enabledAttributes;for(let H=0,V=I.length;H<V;H++)I[H]!==P[H]&&(s.disableVertexAttribArray(H),I[H]=0)}function S(P,I,H,V,O,k,F){F===!0?s.vertexAttribIPointer(P,I,H,O,k):s.vertexAttribPointer(P,I,H,V,O,k)}function y(P,I,H,V){g();let O=V.attributes,k=H.getAttributes(),F=I.defaultAttributeValues;for(let Z in k){let Q=k[Z];if(Q.location>=0){let D=O[Z];if(D===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(D=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(D=P.instanceColor)),D!==void 0){let pe=D.normalized,Ae=D.itemSize,je=e.get(D);if(je===void 0)continue;let Ge=je.buffer,Fe=je.type,$=je.bytesPerElement,ae=Fe===s.INT||Fe===s.UNSIGNED_INT||D.gpuType===Mh;if(D.isInterleavedBufferAttribute){let se=D.data,Pe=se.stride,Ve=D.offset;if(se.isInstancedInterleavedBuffer){for(let De=0;De<Q.locationSize;De++)_(Q.location+De,se.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let De=0;De<Q.locationSize;De++)m(Q.location+De);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let De=0;De<Q.locationSize;De++)S(Q.location+De,Ae/Q.locationSize,Fe,pe,Pe*$,(Ve+Ae/Q.locationSize*De)*$,ae)}else{if(D.isInstancedBufferAttribute){for(let se=0;se<Q.locationSize;se++)_(Q.location+se,D.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let se=0;se<Q.locationSize;se++)m(Q.location+se);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let se=0;se<Q.locationSize;se++)S(Q.location+se,Ae/Q.locationSize,Fe,pe,Ae*$,Ae/Q.locationSize*se*$,ae)}}else if(F!==void 0){let pe=F[Z];if(pe!==void 0)switch(pe.length){case 2:s.vertexAttrib2fv(Q.location,pe);break;case 3:s.vertexAttrib3fv(Q.location,pe);break;case 4:s.vertexAttrib4fv(Q.location,pe);break;default:s.vertexAttrib1fv(Q.location,pe)}}}}x()}function T(){A();for(let P in n){let I=n[P];for(let H in I){let V=I[H];for(let O in V){let k=V[O];for(let F in k)h(k[F].object),delete k[F];delete V[O]}}delete n[P]}}function b(P){if(n[P.id]===void 0)return;let I=n[P.id];for(let H in I){let V=I[H];for(let O in V){let k=V[O];for(let F in k)h(k[F].object),delete k[F];delete V[O]}}delete n[P.id]}function w(P){for(let I in n){let H=n[I];for(let V in H){let O=H[V];if(O[P.id]===void 0)continue;let k=O[P.id];for(let F in k)h(k[F].object),delete k[F];delete O[P.id]}}}function v(P){for(let I in n){let H=n[I],V=P.isInstancedMesh===!0?P.id:0,O=H[V];if(O!==void 0){for(let k in O){let F=O[k];for(let Z in F)h(F[Z].object),delete F[Z];delete O[k]}delete H[V],Object.keys(H).length===0&&delete n[I]}}}function A(){C(),o=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function rb(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function sb(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Mi&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let v=w===Mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ci&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==yi&&!v)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ne("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:y,maxSamples:T,samples:b}}function ob(s){let e=this,t=null,n=0,i=!1,r=!1,o=new cr,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,_=s.get(u);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{let x=r?0:n,S=x*4,y=_.clippingState||null;l.value=y,y=h(p,d,S,f);for(let T=0;T!==S;++T)y[T]=t[T];_.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,p!==!0||m===null){let _=f+g*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<_)&&(m=new Float32Array(_));for(let S=0,y=f;S!==g;++S,y+=4)o.copy(u[S]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}var Es=4,Sg=[.125,.215,.35,.446,.526,.582],io=20,ab=256,wl=new vs,bg=new Ke,Ef=null,Tf=0,wf=0,Af=!1,lb=new L,cu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=lb}=r;Ef=this._renderer.getRenderTarget(),Tf=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ef,Tf,wf),this._renderer.xr.enabled=Af,e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ms||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ef=this._renderer.getRenderTarget(),Tf=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Mr,format:Mi,colorSpace:Yn,depthBuffer:!1},i=Eg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eg(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cb(r)),this._blurMaterial=ub(r,e,t),this._ggxMaterial=hb(r,e,t)}return i}_compileMaterial(e){let t=new yt(new Gt,e);this._renderer.compile(t,wl)}_sceneToCubeUV(e,t,n,i,r){let l=new pn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(bg),u.toneMapping=ji,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yt(new xs,new Zn({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,m=g.material,_=!1,x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,_=!0):(m.color.copy(bg),_=!0);for(let S=0;S<6;S++){let y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let T=this._cubeSize;la(i,y*T,S>2?T:0,T,T),u.setRenderTarget(i),_&&u.render(g,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ms||e.mapping===Qs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tg());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;la(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,wl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:p}=this,g=this._sizeLods[n],m=3*g*(n>p-Es?n-p+Es:0),_=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,la(r,m,_,3*g,2*g),i.setRenderTarget(r),i.render(a,wl),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,la(e,m,_,3*g,2*g),i.setRenderTarget(e),i.render(a,wl)}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Xe("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[i];u.material=c;let d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*io-1),g=r/p,m=isFinite(r)?1+Math.floor(h*g):io;m>io&&Ne(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${io}`);let _=[],x=0;for(let w=0;w<io;++w){let v=w/g,A=Math.exp(-v*v/2);_.push(A),w===0?x+=A:w<m&&(x+=2*A)}for(let w=0;w<_.length;w++)_[w]=_[w]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=p,d.mipInt.value=S-n;let y=this._sizeLods[i],T=3*y*(i>S-Es?i-S+Es:0),b=4*(this._cubeSize-y);la(t,T,b,3*y,2*y),l.setRenderTarget(t),l.render(u,wl)}};function cb(s){let e=[],t=[],n=[],i=s,r=s-Es+1+Sg.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Es?l=Sg[o-s+Es-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,g=3,m=2,_=1,x=new Float32Array(g*p*f),S=new Float32Array(m*p*f),y=new Float32Array(_*p*f);for(let b=0;b<f;b++){let w=b%3*2/3-1,v=b>2?0:-1,A=[w,v,0,w+2/3,v,0,w+2/3,v+1,0,w,v,0,w+2/3,v+1,0,w,v+1,0];x.set(A,g*p*b),S.set(d,m*p*b);let C=[b,b,b,b,b,b];y.set(C,_*p*b)}let T=new Gt;T.setAttribute("position",new Bt(x,g)),T.setAttribute("uv",new Bt(S,m)),T.setAttribute("faceIndex",new Bt(y,_)),n.push(new yt(T,null)),i>Es&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Eg(s,e,t){let n=new vi(s,e,t);return n.texture.mapping=xl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function la(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function hb(s,e,t){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ab,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:du(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function ub(s,e,t){let n=new Float32Array(io),i=new L(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:io,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:du(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Tg(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function wg(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function du(){return`

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
	`}var hu=class extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new tl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xs(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:to(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kn,blending:yr});r.uniforms.tEquirect.value=t;let o=new yt(i,r),a=t.minFilter;return t.minFilter===Qi&&(t.minFilter=on),new gh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}};function db(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===xh||f===vh)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let g=new hu(p.height);return g.fromEquirectangularTexture(s,d),e.set(d,g),d.addEventListener("dispose",c),a(g.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,p=f===xh||f===vh,g=f===Ms||f===Qs;if(p||g){let m=t.get(d),_=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return n===null&&(n=new cu(s)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let x=d.image;return p&&x&&x.height>0||g&&x&&l(x)?(n===null&&(n=new cu(s)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===xh?d.mapping=Ms:f===vh&&(d.mapping=Qs),d}function l(d){let f=0,p=6;for(let g=0;g<p;g++)d[g]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function fb(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Qc("WebGLRenderer: "+n+" extension not supported."),i}}}function pb(s,e,t,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,p=u.attributes.position,g=0;if(p===void 0)return;if(f!==null){let x=f.array;g=f.version;for(let S=0,y=x.length;S<y;S+=3){let T=x[S+0],b=x[S+1],w=x[S+2];d.push(T,b,b,w,w,T)}}else{let x=p.array;g=p.version;for(let S=0,y=x.length/3-1;S<y;S+=3){let T=S+0,b=S+1,w=S+2;d.push(T,b,b,w,w,T)}}let m=new(p.count>=65535?Ka:Za)(d,1);m.version=g;let _=r.get(u);_&&e.remove(_),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function mb(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*o),t.update(d,n,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let g=0;for(let m=0;m<f;m++)g+=d[m];t.update(g,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function gb(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:Xe("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function _b(s,e,t){let n=new WeakMap,i=new Rt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let C=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",C)};var f=C;d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],y=0;p===!0&&(y=1),g===!0&&(y=2),m===!0&&(y=3);let T=a.attributes.position.count*y,b=1;T>e.maxTextureSize&&(b=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let w=new Float32Array(T*b*4*u),v=new qa(w,T,b,u);v.type=yi,v.needsUpdate=!0;let A=y*4;for(let P=0;P<u;P++){let I=_[P],H=x[P],V=S[P],O=T*b*4*P;for(let k=0;k<I.count;k++){let F=k*A;p===!0&&(i.fromBufferAttribute(I,k),w[O+F+0]=i.x,w[O+F+1]=i.y,w[O+F+2]=i.z,w[O+F+3]=0),g===!0&&(i.fromBufferAttribute(H,k),w[O+F+4]=i.x,w[O+F+5]=i.y,w[O+F+6]=i.z,w[O+F+7]=0),m===!0&&(i.fromBufferAttribute(V,k),w[O+F+8]=i.x,w[O+F+9]=i.y,w[O+F+10]=i.z,w[O+F+11]=V.itemSize===4?i.w:1)}}d={count:u,texture:v,size:new ke(T,b)},n.set(a,d),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function xb(s,e,t,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var vb={[rf]:"LINEAR_TONE_MAPPING",[sf]:"REINHARD_TONE_MAPPING",[of]:"CINEON_TONE_MAPPING",[af]:"ACES_FILMIC_TONE_MAPPING",[cf]:"AGX_TONE_MAPPING",[hf]:"NEUTRAL_TONE_MAPPING",[lf]:"CUSTOM_TONE_MAPPING"};function yb(s,e,t,n,i){let r=new vi(e,t,{type:s,depthBuffer:n,stencilBuffer:i,depthTexture:n?new Hr(e,t):void 0}),o=new vi(e,t,{type:Mr,depthBuffer:!1,stencilBuffer:!1}),a=new Gt;a.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Dt([0,2,0,0,2,0],2));let l=new oh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new yt(a,l),h=new vs(-1,1,1,-1,0,1),u=null,d=null,f=!1,p,g=null,m=[],_=!1;this.setSize=function(x,S){r.setSize(x,S),o.setSize(x,S);for(let y=0;y<m.length;y++){let T=m[y];T.setSize&&T.setSize(x,S)}},this.setEffects=function(x){m=x,_=m.length>0&&m[0].isRenderPass===!0;let S=r.width,y=r.height;for(let T=0;T<m.length;T++){let b=m[T];b.setSize&&b.setSize(S,y)}},this.begin=function(x,S){if(f||x.toneMapping===ji&&m.length===0)return!1;if(g=S,S!==null){let y=S.width,T=S.height;(r.width!==y||r.height!==T)&&this.setSize(y,T)}return _===!1&&x.setRenderTarget(r),p=x.toneMapping,x.toneMapping=ji,!0},this.hasRenderPass=function(){return _},this.end=function(x,S){x.toneMapping=p,f=!0;let y=r,T=o;for(let b=0;b<m.length;b++){let w=m[b];if(w.enabled!==!1&&(w.render(x,T,y,S),w.needsSwap!==!1)){let v=y;y=T,T=v}}if(u!==x.outputColorSpace||d!==x.toneMapping){u=x.outputColorSpace,d=x.toneMapping,l.defines={},ht.getTransfer(u)===bt&&(l.defines.SRGB_TRANSFER="");let b=vb[d];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,x.setRenderTarget(g),x.render(c,h),g=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}var qg=new Pn,Pf=new Hr(1,1),Yg=new qa,Zg=new nh,Kg=new tl,Ag=[],Rg=[],Cg=new Float32Array(16),Pg=new Float32Array(9),Ig=new Float32Array(4);function ha(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Ag[i];if(r===void 0&&(r=new Float32Array(i),Ag[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function xn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function vn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function fu(s,e){let t=Rg[e];t===void 0&&(t=new Int32Array(e),Rg[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Mb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Sb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2fv(this.addr,e),vn(t,e)}}function bb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;s.uniform3fv(this.addr,e),vn(t,e)}}function Eb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4fv(this.addr,e),vn(t,e)}}function Tb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(xn(t,n))return;Ig.set(n),s.uniformMatrix2fv(this.addr,!1,Ig),vn(t,n)}}function wb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(xn(t,n))return;Pg.set(n),s.uniformMatrix3fv(this.addr,!1,Pg),vn(t,n)}}function Ab(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(xn(t,n))return;Cg.set(n),s.uniformMatrix4fv(this.addr,!1,Cg),vn(t,n)}}function Rb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Cb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2iv(this.addr,e),vn(t,e)}}function Pb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;s.uniform3iv(this.addr,e),vn(t,e)}}function Ib(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4iv(this.addr,e),vn(t,e)}}function Db(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Lb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2uiv(this.addr,e),vn(t,e)}}function Ob(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;s.uniform3uiv(this.addr,e),vn(t,e)}}function Nb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4uiv(this.addr,e),vn(t,e)}}function Fb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Pf.compareFunction=t.isReversedDepthBuffer()?ou:su,r=Pf):r=qg,t.setTexture2D(e||r,i)}function Ub(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Zg,i)}function Bb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Kg,i)}function kb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Yg,i)}function zb(s){switch(s){case 5126:return Mb;case 35664:return Sb;case 35665:return bb;case 35666:return Eb;case 35674:return Tb;case 35675:return wb;case 35676:return Ab;case 5124:case 35670:return Rb;case 35667:case 35671:return Cb;case 35668:case 35672:return Pb;case 35669:case 35673:return Ib;case 5125:return Db;case 36294:return Lb;case 36295:return Ob;case 36296:return Nb;case 35678:case 36198:case 36298:case 36306:case 35682:return Fb;case 35679:case 36299:case 36307:return Ub;case 35680:case 36300:case 36308:case 36293:return Bb;case 36289:case 36303:case 36311:case 36292:return kb}}function Hb(s,e){s.uniform1fv(this.addr,e)}function Vb(s,e){let t=ha(e,this.size,2);s.uniform2fv(this.addr,t)}function Gb(s,e){let t=ha(e,this.size,3);s.uniform3fv(this.addr,t)}function Wb(s,e){let t=ha(e,this.size,4);s.uniform4fv(this.addr,t)}function Xb(s,e){let t=ha(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function qb(s,e){let t=ha(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Yb(s,e){let t=ha(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Zb(s,e){s.uniform1iv(this.addr,e)}function Kb(s,e){s.uniform2iv(this.addr,e)}function Jb(s,e){s.uniform3iv(this.addr,e)}function $b(s,e){s.uniform4iv(this.addr,e)}function jb(s,e){s.uniform1uiv(this.addr,e)}function Qb(s,e){s.uniform2uiv(this.addr,e)}function e1(s,e){s.uniform3uiv(this.addr,e)}function t1(s,e){s.uniform4uiv(this.addr,e)}function n1(s,e,t){let n=this.cache,i=e.length,r=fu(t,i);xn(n,r)||(s.uniform1iv(this.addr,r),vn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Pf:o=qg;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function i1(s,e,t){let n=this.cache,i=e.length,r=fu(t,i);xn(n,r)||(s.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Zg,r[o])}function r1(s,e,t){let n=this.cache,i=e.length,r=fu(t,i);xn(n,r)||(s.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Kg,r[o])}function s1(s,e,t){let n=this.cache,i=e.length,r=fu(t,i);xn(n,r)||(s.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Yg,r[o])}function o1(s){switch(s){case 5126:return Hb;case 35664:return Vb;case 35665:return Gb;case 35666:return Wb;case 35674:return Xb;case 35675:return qb;case 35676:return Yb;case 5124:case 35670:return Zb;case 35667:case 35671:return Kb;case 35668:case 35672:return Jb;case 35669:case 35673:return $b;case 5125:return jb;case 36294:return Qb;case 36295:return e1;case 36296:return t1;case 35678:case 36198:case 36298:case 36306:case 35682:return n1;case 35679:case 36299:case 36307:return i1;case 35680:case 36300:case 36308:case 36293:return r1;case 36289:case 36303:case 36311:case 36292:return s1}}var If=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zb(t.type)}},Df=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=o1(t.type)}},Lf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Rf=/(\w+)(\])?(\[|\.)?/g;function Dg(s,e){s.seq.push(e),s.map[e.id]=e}function a1(s,e,t){let n=s.name,i=n.length;for(Rf.lastIndex=0;;){let r=Rf.exec(n),o=Rf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Dg(t,c===void 0?new If(a,s,e):new Df(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Lf(a),Dg(t,u)),t=u}}}var ca=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);a1(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Lg(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var l1=37297,c1=0;function h1(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Og=new tt;function u1(s){ht._getMatrix(Og,ht.workingColorSpace,s);let e=`mat3( ${Og.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(s)){case Wa:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ng(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+h1(s.getShaderSource(e),a)}else return r}function d1(s,e){let t=u1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var f1={[rf]:"Linear",[sf]:"Reinhard",[of]:"Cineon",[af]:"ACESFilmic",[cf]:"AgX",[hf]:"Neutral",[lf]:"Custom"};function p1(s,e){let t=f1[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var lu=new L;function m1(){ht.getLuminanceCoefficients(lu);let s=lu.x.toFixed(4),e=lu.y.toFixed(4),t=lu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rl).join(`
`)}function _1(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function x1(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Rl(s){return s!==""}function Fg(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ug(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var v1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Of(s){return s.replace(v1,M1)}var y1=new Map;function M1(s,e){let t=at[e];if(t===void 0){let n=y1.get(e);if(n!==void 0)t=at[n],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Of(t)}var S1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bg(s){return s.replace(S1,b1)}function b1(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function kg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var E1={[_l]:"SHADOWMAP_TYPE_PCF",[ia]:"SHADOWMAP_TYPE_VSM"};function T1(s){return E1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var w1={[Ms]:"ENVMAP_TYPE_CUBE",[Qs]:"ENVMAP_TYPE_CUBE",[xl]:"ENVMAP_TYPE_CUBE_UV"};function A1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":w1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var R1={[Qs]:"ENVMAP_MODE_REFRACTION"};function C1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":R1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var P1={[nf]:"ENVMAP_BLENDING_MULTIPLY",[ng]:"ENVMAP_BLENDING_MIX",[ig]:"ENVMAP_BLENDING_ADD"};function I1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":P1[s.combine]||"ENVMAP_BLENDING_NONE"}function D1(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function L1(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=T1(t),c=A1(t),h=C1(t),u=I1(t),d=D1(t),f=g1(t),p=_1(r),g=i.createProgram(),m,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Rl).join(`
`),m.length>0&&(m+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Rl).join(`
`),_.length>0&&(_+=`
`)):(m=[kg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rl).join(`
`),_=[kg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?at.tonemapping_pars_fragment:"",t.toneMapping!==ji?p1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,d1("linearToOutputTexel",t.outputColorSpace),m1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rl).join(`
`)),o=Of(o),o=Fg(o,t),o=Ug(o,t),a=Of(a),a=Fg(a,t),a=Ug(a,t),o=Bg(o),a=Bg(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===xf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let S=x+m+o,y=x+_+a,T=Lg(i,i.VERTEX_SHADER,S),b=Lg(i,i.FRAGMENT_SHADER,y);i.attachShader(g,T),i.attachShader(g,b),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(P){if(s.debug.checkShaderErrors){let I=i.getProgramInfoLog(g)||"",H=i.getShaderInfoLog(T)||"",V=i.getShaderInfoLog(b)||"",O=I.trim(),k=H.trim(),F=V.trim(),Z=!0,Q=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,T,b);else{let D=Ng(i,T,"vertex"),pe=Ng(i,b,"fragment");Xe("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+D+`
`+pe)}else O!==""?Ne("WebGLProgram: Program Info Log:",O):(k===""||F==="")&&(Q=!1);Q&&(P.diagnostics={runnable:Z,programLog:O,vertexShader:{log:k,prefix:m},fragmentShader:{log:F,prefix:_}})}i.deleteShader(T),i.deleteShader(b),v=new ca(i,g),A=x1(i,g)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(g,l1)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=c1++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=b,this}var O1=0,Nf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ff(e),t.set(e,n)),n}},Ff=class{constructor(e){this.id=O1++,this.code=e,this.usedTimes=0}};function N1(s){return s===bs||s===bl||s===El}function F1(s,e,t,n,i,r){let o=new Zo,a=new Nf,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,A,C,P,I,H){let V=P.fog,O=I.geometry,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Z=e.get(v.envMap||k,F),Q=Z&&Z.mapping===xl?Z.image.height:null,D=f[v.type];v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&Ne("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let pe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ae=pe!==void 0?pe.length:0,je=0;O.morphAttributes.position!==void 0&&(je=1),O.morphAttributes.normal!==void 0&&(je=2),O.morphAttributes.color!==void 0&&(je=3);let Ge,Fe,$,ae;if(D){let he=br[D];Ge=he.vertexShader,Fe=he.fragmentShader}else Ge=v.vertexShader,Fe=v.fragmentShader,a.update(v),$=a.getVertexShaderID(v),ae=a.getFragmentShaderID(v);let se=s.getRenderTarget(),Pe=s.state.buffers.depth.getReversed(),Ve=I.isInstancedMesh===!0,De=I.isBatchedMesh===!0,lt=!!v.map,Re=!!v.matcap,qe=!!Z,ot=!!v.aoMap,We=!!v.lightMap,X=!!v.bumpMap,_t=!!v.normalMap,Xt=!!v.displacementMap,U=!!v.emissiveMap,nt=!!v.metalnessMap,Je=!!v.roughnessMap,xt=v.anisotropy>0,ge=v.clearcoat>0,st=v.dispersion>0,R=v.iridescence>0,M=v.sheen>0,z=v.transmission>0,K=xt&&!!v.anisotropyMap,ee=ge&&!!v.clearcoatMap,ue=ge&&!!v.clearcoatNormalMap,ne=ge&&!!v.clearcoatRoughnessMap,Y=R&&!!v.iridescenceMap,j=R&&!!v.iridescenceThicknessMap,xe=M&&!!v.sheenColorMap,we=M&&!!v.sheenRoughnessMap,de=!!v.specularMap,le=!!v.specularColorMap,_e=!!v.specularIntensityMap,Ye=z&&!!v.transmissionMap,et=z&&!!v.thicknessMap,N=!!v.gradientMap,oe=!!v.alphaMap,J=v.alphaTest>0,Me=!!v.alphaHash,ce=!!v.extensions,te=ji;v.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(te=s.toneMapping);let re={shaderID:D,shaderType:v.type,shaderName:v.name,vertexShader:Ge,fragmentShader:Fe,defines:v.defines,customVertexShaderID:$,customFragmentShaderID:ae,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:De,batchingColor:De&&I._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&I.instanceColor!==null,instancingMorph:Ve&&I.morphTexture!==null,outputColorSpace:se===null?s.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:lt,matcap:Re,envMap:qe,envMapMode:qe&&Z.mapping,envMapCubeUVHeight:Q,aoMap:ot,lightMap:We,bumpMap:X,normalMap:_t,displacementMap:Xt,emissiveMap:U,normalMapObjectSpace:_t&&v.normalMapType===ag,normalMapTangentSpace:_t&&v.normalMapType===ru,packedNormalMap:_t&&v.normalMapType===ru&&N1(v.normalMap.format),metalnessMap:nt,roughnessMap:Je,anisotropy:xt,anisotropyMap:K,clearcoat:ge,clearcoatMap:ee,clearcoatNormalMap:ue,clearcoatRoughnessMap:ne,dispersion:st,iridescence:R,iridescenceMap:Y,iridescenceThicknessMap:j,sheen:M,sheenColorMap:xe,sheenRoughnessMap:we,specularMap:de,specularColorMap:le,specularIntensityMap:_e,transmission:z,transmissionMap:Ye,thicknessMap:et,gradientMap:N,opaque:v.transparent===!1&&v.blending===Ws&&v.alphaToCoverage===!1,alphaMap:oe,alphaTest:J,alphaHash:Me,combine:v.combine,mapUv:lt&&p(v.map.channel),aoMapUv:ot&&p(v.aoMap.channel),lightMapUv:We&&p(v.lightMap.channel),bumpMapUv:X&&p(v.bumpMap.channel),normalMapUv:_t&&p(v.normalMap.channel),displacementMapUv:Xt&&p(v.displacementMap.channel),emissiveMapUv:U&&p(v.emissiveMap.channel),metalnessMapUv:nt&&p(v.metalnessMap.channel),roughnessMapUv:Je&&p(v.roughnessMap.channel),anisotropyMapUv:K&&p(v.anisotropyMap.channel),clearcoatMapUv:ee&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ue&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:j&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:we&&p(v.sheenRoughnessMap.channel),specularMapUv:de&&p(v.specularMap.channel),specularColorMapUv:le&&p(v.specularColorMap.channel),specularIntensityMapUv:_e&&p(v.specularIntensityMap.channel),transmissionMapUv:Ye&&p(v.transmissionMap.channel),thicknessMapUv:et&&p(v.thicknessMap.channel),alphaMapUv:oe&&p(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(_t||xt),vertexNormals:!!O.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!O.attributes.uv&&(lt||oe),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||O.attributes.normal===void 0&&_t===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Pe,skinning:I.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:je,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:te,decodeVideoTexture:lt&&v.map.isVideoTexture===!0&&ht.getTransfer(v.map.colorSpace)===bt,decodeVideoTextureEmissive:U&&v.emissiveMap.isVideoTexture===!0&&ht.getTransfer(v.emissiveMap.colorSpace)===bt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===li,flipSided:v.side===Kn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ce&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&v.extensions.multiDraw===!0||De)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function m(v){let A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)A.push(C),A.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(_(A,v),x(A,v),A.push(s.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function _(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function x(v,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),v.push(o.mask)}function S(v){let A=f[v.type],C;if(A){let P=br[A];C=vg.clone(P.uniforms)}else C=v.uniforms;return C}function y(v,A){let C=h.get(A);return C!==void 0?++C.usedTimes:(C=new L1(s,A,v,i),c.push(C),h.set(A,C)),C}function T(v){if(--v.usedTimes===0){let A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function b(v){a.remove(v)}function w(){a.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:S,acquireProgram:y,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:w}}function U1(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function B1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function zg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Hg(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,g,m,_){let x=s[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:g,renderOrder:d.renderOrder,z:m,group:_},s[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=p,x.materialVariant=o(d),x.groupOrder=g,x.renderOrder=d.renderOrder,x.z=m,x.group=_),e++,x}function l(d,f,p,g,m,_){let x=a(d,f,p,g,m,_);p.transmission>0?n.push(x):p.transparent===!0?i.push(x):t.push(x)}function c(d,f,p,g,m,_){let x=a(d,f,p,g,m,_);p.transmission>0?n.unshift(x):p.transparent===!0?i.unshift(x):t.unshift(x)}function h(d,f){t.length>1&&t.sort(d||B1),n.length>1&&n.sort(f||zg),i.length>1&&i.sort(f||zg)}function u(){for(let d=e,f=s.length;d<f;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function k1(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Hg,s.set(n,[o])):i>=r.length?(o=new Hg,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function z1(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ke};break;case"SpotLight":t={position:new L,direction:new L,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function H1(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var V1=0;function G1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function W1(s){let e=new z1,t=H1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let i=new L,r=new Qe,o=new Qe;function a(c){let h=0,u=0,d=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,p=0,g=0,m=0,_=0,x=0,S=0,y=0,T=0,b=0,w=0;c.sort(G1);for(let A=0,C=c.length;A<C;A++){let P=c[A],I=P.color,H=P.intensity,V=P.distance,O=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===bs?O=P.shadow.map.texture:O=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=I.r*H,u+=I.g*H,d+=I.b*H;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],H);w++}else if(P.isDirectionalLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let F=P.shadow,Z=t.get(P);Z.shadowIntensity=F.intensity,Z.shadowBias=F.bias,Z.shadowNormalBias=F.normalBias,Z.shadowRadius=F.radius,Z.shadowMapSize=F.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=O,n.directionalShadowMatrix[f]=P.shadow.matrix,x++}n.directional[f]=k,f++}else if(P.isSpotLight){let k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(I).multiplyScalar(H),k.distance=V,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[g]=k;let F=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,F.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[g]=F.matrix,P.castShadow){let Z=t.get(P);Z.shadowIntensity=F.intensity,Z.shadowBias=F.bias,Z.shadowNormalBias=F.normalBias,Z.shadowRadius=F.radius,Z.shadowMapSize=F.mapSize,n.spotShadow[g]=Z,n.spotShadowMap[g]=O,y++}g++}else if(P.isRectAreaLight){let k=e.get(P);k.color.copy(I).multiplyScalar(H),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=k,m++}else if(P.isPointLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){let F=P.shadow,Z=t.get(P);Z.shadowIntensity=F.intensity,Z.shadowBias=F.bias,Z.shadowNormalBias=F.normalBias,Z.shadowRadius=F.radius,Z.shadowMapSize=F.mapSize,Z.shadowCameraNear=F.camera.near,Z.shadowCameraFar=F.camera.far,n.pointShadow[p]=Z,n.pointShadowMap[p]=O,n.pointShadowMatrix[p]=P.shadow.matrix,S++}n.point[p]=k,p++}else if(P.isHemisphereLight){let k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(H),k.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[_]=k,_++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let v=n.hash;(v.directionalLength!==f||v.pointLength!==p||v.spotLength!==g||v.rectAreaLength!==m||v.hemiLength!==_||v.numDirectionalShadows!==x||v.numPointShadows!==S||v.numSpotShadows!==y||v.numSpotMaps!==T||v.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=p,n.hemi.length=_,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+T-b,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,v.directionalLength=f,v.pointLength=p,v.spotLength=g,v.rectAreaLength=m,v.hemiLength=_,v.numDirectionalShadows=x,v.numPointShadows=S,v.numSpotShadows=y,v.numSpotMaps=T,v.numLightProbes=w,n.version=V1++)}function l(c,h){let u=0,d=0,f=0,p=0,g=0,m=h.matrixWorldInverse;for(let _=0,x=c.length;_<x;_++){let S=c[_];if(S.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(S.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(S.isRectAreaLight){let y=n.rectArea[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(S.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let y=n.hemi[g];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Vg(s){let e=new W1(s),t=[],n=[],i=[];function r(d){u.camera=d,t.length=0,n.length=0,i.length=0}function o(d){t.push(d)}function a(d){n.push(d)}function l(d){i.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function X1(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new Vg(s),e.set(i,[a])):r>=o.length?(a=new Vg(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var q1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Z1=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],K1=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Gg=new Qe,Al=new L,Cf=new L;function J1(s,e,t){let n=new ea,i=new ke,r=new ke,o=new Rt,a=new ah,l=new lh,c={},h=t.maxTextureSize,u={[Ji]:Kn,[Kn]:Ji,[li]:li},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:q1,fragmentShader:Y1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Gt;p.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new yt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_l;let _=this.type;this.render=function(b,w,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===U0&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=_l);let A=s.getRenderTarget(),C=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),I=s.state;I.setBlending(yr),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let H=_!==this.type;H&&w.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(O=>O.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,O=b.length;V<O;V++){let k=b[V],F=k.shadow;if(F===void 0){Ne("WebGLShadowMap:",k,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);let Z=F.getFrameExtents();i.multiply(Z),r.copy(F.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Z.x),i.x=r.x*Z.x,F.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Z.y),i.y=r.y*Z.y,F.mapSize.y=r.y));let Q=s.state.buffers.depth.getReversed();if(F.camera._reversedDepth=Q,F.map===null||H===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ia){if(k.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new vi(i.x,i.y,{format:bs,type:Mr,minFilter:on,magFilter:on,generateMipmaps:!1}),F.map.texture.name=k.name+".shadowMap",F.map.depthTexture=new Hr(i.x,i.y,yi),F.map.depthTexture.name=k.name+".shadowMapDepth",F.map.depthTexture.format=ur,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=sn,F.map.depthTexture.magFilter=sn}else k.isPointLight?(F.map=new hu(i.x),F.map.depthTexture=new sh(i.x,er)):(F.map=new vi(i.x,i.y),F.map.depthTexture=new Hr(i.x,i.y,er)),F.map.depthTexture.name=k.name+".shadowMap",F.map.depthTexture.format=ur,this.type===_l?(F.map.depthTexture.compareFunction=Q?ou:su,F.map.depthTexture.minFilter=on,F.map.depthTexture.magFilter=on):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=sn,F.map.depthTexture.magFilter=sn);F.camera.updateProjectionMatrix()}let D=F.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<D;pe++){if(F.map.isWebGLCubeRenderTarget)s.setRenderTarget(F.map,pe),s.clear();else{pe===0&&(s.setRenderTarget(F.map),s.clear());let Ae=F.getViewport(pe);o.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),I.viewport(o)}if(k.isPointLight){let Ae=F.camera,je=F.matrix,Ge=k.distance||Ae.far;Ge!==Ae.far&&(Ae.far=Ge,Ae.updateProjectionMatrix()),Al.setFromMatrixPosition(k.matrixWorld),Ae.position.copy(Al),Cf.copy(Ae.position),Cf.add(Z1[pe]),Ae.up.copy(K1[pe]),Ae.lookAt(Cf),Ae.updateMatrixWorld(),je.makeTranslation(-Al.x,-Al.y,-Al.z),Gg.multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Gg,Ae.coordinateSystem,Ae.reversedDepth)}else F.updateMatrices(k);n=F.getFrustum(),y(w,v,F.camera,k,this.type)}F.isPointLightShadow!==!0&&this.type===ia&&x(F,v),F.needsUpdate=!1}_=this.type,m.needsUpdate=!1,s.setRenderTarget(A,C,P)};function x(b,w){let v=e.update(g);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new vi(i.x,i.y,{format:bs,type:Mr})),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(w,null,v,d,g,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(w,null,v,f,g,null)}function S(b,w,v,A){let C=null,P=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)C=P;else if(C=v.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let I=C.uuid,H=w.uuid,V=c[I];V===void 0&&(V={},c[I]=V);let O=V[H];O===void 0&&(O=C.clone(),V[H]=O,w.addEventListener("dispose",T)),C=O}if(C.visible=w.visible,C.wireframe=w.wireframe,A===ia?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:u[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let I=s.properties.get(C);I.light=v}return C}function y(b,w,v,A,C){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===ia)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);let H=e.update(b),V=b.material;if(Array.isArray(V)){let O=H.groups;for(let k=0,F=O.length;k<F;k++){let Z=O[k],Q=V[Z.materialIndex];if(Q&&Q.visible){let D=S(b,Q,A,C);b.onBeforeShadow(s,b,w,v,H,D,Z),s.renderBufferDirect(v,null,H,D,b,Z),b.onAfterShadow(s,b,w,v,H,D,Z)}}}else if(V.visible){let O=S(b,V,A,C);b.onBeforeShadow(s,b,w,v,H,O,null),s.renderBufferDirect(v,null,H,O,b,null),b.onAfterShadow(s,b,w,v,H,O,null)}}let I=b.children;for(let H=0,V=I.length;H<V;H++)y(I[H],w,v,A,C)}function T(b){b.target.removeEventListener("dispose",T);for(let v in c){let A=c[v],C=b.target.uuid;C in A&&(A[C].dispose(),delete A[C])}}}function $1(s,e){function t(){let N=!1,oe=new Rt,J=null,Me=new Rt(0,0,0,0);return{setMask:function(ce){J!==ce&&!N&&(s.colorMask(ce,ce,ce,ce),J=ce)},setLocked:function(ce){N=ce},setClear:function(ce,te,re,he,ze){ze===!0&&(ce*=he,te*=he,re*=he),oe.set(ce,te,re,he),Me.equals(oe)===!1&&(s.clearColor(ce,te,re,he),Me.copy(oe))},reset:function(){N=!1,J=null,Me.set(-1,0,0,0)}}}function n(){let N=!1,oe=!1,J=null,Me=null,ce=null;return{setReversed:function(te){if(oe!==te){let re=e.get("EXT_clip_control");te?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT),oe=te;let he=ce;ce=null,this.setClear(he)}},getReversed:function(){return oe},setTest:function(te){te?se(s.DEPTH_TEST):Pe(s.DEPTH_TEST)},setMask:function(te){J!==te&&!N&&(s.depthMask(te),J=te)},setFunc:function(te){if(oe&&(te=_g[te]),Me!==te){switch(te){case Xc:s.depthFunc(s.NEVER);break;case qc:s.depthFunc(s.ALWAYS);break;case Yc:s.depthFunc(s.LESS);break;case Xs:s.depthFunc(s.LEQUAL);break;case Zc:s.depthFunc(s.EQUAL);break;case Kc:s.depthFunc(s.GEQUAL);break;case Jc:s.depthFunc(s.GREATER);break;case $c:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Me=te}},setLocked:function(te){N=te},setClear:function(te){ce!==te&&(ce=te,oe&&(te=1-te),s.clearDepth(te))},reset:function(){N=!1,J=null,Me=null,ce=null,oe=!1}}}function i(){let N=!1,oe=null,J=null,Me=null,ce=null,te=null,re=null,he=null,ze=null;return{setTest:function(ie){N||(ie?se(s.STENCIL_TEST):Pe(s.STENCIL_TEST))},setMask:function(ie){oe!==ie&&!N&&(s.stencilMask(ie),oe=ie)},setFunc:function(ie,He,Le){(J!==ie||Me!==He||ce!==Le)&&(s.stencilFunc(ie,He,Le),J=ie,Me=He,ce=Le)},setOp:function(ie,He,Le){(te!==ie||re!==He||he!==Le)&&(s.stencilOp(ie,He,Le),te=ie,re=He,he=Le)},setLocked:function(ie){N=ie},setClear:function(ie){ze!==ie&&(s.clearStencil(ie),ze=ie)},reset:function(){N=!1,oe=null,J=null,Me=null,ce=null,te=null,re=null,he=null,ze=null}}}let r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],g=null,m=!1,_=null,x=null,S=null,y=null,T=null,b=null,w=null,v=new Ke(0,0,0),A=0,C=!1,P=null,I=null,H=null,V=null,O=null,k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,Z=0,Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Q)[1]),F=Z>=1):Q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),F=Z>=2);let D=null,pe={},Ae=s.getParameter(s.SCISSOR_BOX),je=s.getParameter(s.VIEWPORT),Ge=new Rt().fromArray(Ae),Fe=new Rt().fromArray(je);function $(N,oe,J,Me){let ce=new Uint8Array(4),te=s.createTexture();s.bindTexture(N,te),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let re=0;re<J;re++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(oe,0,s.RGBA,1,1,Me,0,s.RGBA,s.UNSIGNED_BYTE,ce):s.texImage2D(oe+re,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ce);return te}let ae={};ae[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),ae[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ae[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(s.DEPTH_TEST),o.setFunc(Xs),X(!1),_t(jd),se(s.CULL_FACE),ot(yr);function se(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function Pe(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Ve(N,oe){return d[N]!==oe?(s.bindFramebuffer(N,oe),d[N]=oe,N===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=oe),N===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=oe),!0):!1}function De(N,oe){let J=p,Me=!1;if(N){J=f.get(oe),J===void 0&&(J=[],f.set(oe,J));let ce=N.textures;if(J.length!==ce.length||J[0]!==s.COLOR_ATTACHMENT0){for(let te=0,re=ce.length;te<re;te++)J[te]=s.COLOR_ATTACHMENT0+te;J.length=ce.length,Me=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,Me=!0);Me&&s.drawBuffers(J)}function lt(N){return g!==N?(s.useProgram(N),g=N,!0):!1}let Re={[ps]:s.FUNC_ADD,[k0]:s.FUNC_SUBTRACT,[z0]:s.FUNC_REVERSE_SUBTRACT};Re[H0]=s.MIN,Re[V0]=s.MAX;let qe={[G0]:s.ZERO,[W0]:s.ONE,[X0]:s.SRC_COLOR,[Gc]:s.SRC_ALPHA,[$0]:s.SRC_ALPHA_SATURATE,[K0]:s.DST_COLOR,[Y0]:s.DST_ALPHA,[q0]:s.ONE_MINUS_SRC_COLOR,[Wc]:s.ONE_MINUS_SRC_ALPHA,[J0]:s.ONE_MINUS_DST_COLOR,[Z0]:s.ONE_MINUS_DST_ALPHA,[j0]:s.CONSTANT_COLOR,[Q0]:s.ONE_MINUS_CONSTANT_COLOR,[eg]:s.CONSTANT_ALPHA,[tg]:s.ONE_MINUS_CONSTANT_ALPHA};function ot(N,oe,J,Me,ce,te,re,he,ze,ie){if(N===yr){m===!0&&(Pe(s.BLEND),m=!1);return}if(m===!1&&(se(s.BLEND),m=!0),N!==B0){if(N!==_||ie!==C){if((x!==ps||T!==ps)&&(s.blendEquation(s.FUNC_ADD),x=ps,T=ps),ie)switch(N){case Ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qd:s.blendFunc(s.ONE,s.ONE);break;case ef:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tf:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Xe("WebGLState: Invalid blending: ",N);break}else switch(N){case Ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ef:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tf:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",N);break}S=null,y=null,b=null,w=null,v.set(0,0,0),A=0,_=N,C=ie}return}ce=ce||oe,te=te||J,re=re||Me,(oe!==x||ce!==T)&&(s.blendEquationSeparate(Re[oe],Re[ce]),x=oe,T=ce),(J!==S||Me!==y||te!==b||re!==w)&&(s.blendFuncSeparate(qe[J],qe[Me],qe[te],qe[re]),S=J,y=Me,b=te,w=re),(he.equals(v)===!1||ze!==A)&&(s.blendColor(he.r,he.g,he.b,ze),v.copy(he),A=ze),_=N,C=!1}function We(N,oe){N.side===li?Pe(s.CULL_FACE):se(s.CULL_FACE);let J=N.side===Kn;oe&&(J=!J),X(J),N.blending===Ws&&N.transparent===!1?ot(yr):ot(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let Me=N.stencilWrite;a.setTest(Me),Me&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),U(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?se(s.SAMPLE_ALPHA_TO_COVERAGE):Pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function X(N){P!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),P=N)}function _t(N){N!==N0?(se(s.CULL_FACE),N!==I&&(N===jd?s.cullFace(s.BACK):N===F0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pe(s.CULL_FACE),I=N}function Xt(N){N!==H&&(F&&s.lineWidth(N),H=N)}function U(N,oe,J){N?(se(s.POLYGON_OFFSET_FILL),(V!==oe||O!==J)&&(V=oe,O=J,o.getReversed()&&(oe=-oe),s.polygonOffset(oe,J))):Pe(s.POLYGON_OFFSET_FILL)}function nt(N){N?se(s.SCISSOR_TEST):Pe(s.SCISSOR_TEST)}function Je(N){N===void 0&&(N=s.TEXTURE0+k-1),D!==N&&(s.activeTexture(N),D=N)}function xt(N,oe,J){J===void 0&&(D===null?J=s.TEXTURE0+k-1:J=D);let Me=pe[J];Me===void 0&&(Me={type:void 0,texture:void 0},pe[J]=Me),(Me.type!==N||Me.texture!==oe)&&(D!==J&&(s.activeTexture(J),D=J),s.bindTexture(N,oe||ae[N]),Me.type=N,Me.texture=oe)}function ge(){let N=pe[D];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function st(){try{s.compressedTexImage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function R(){try{s.compressedTexImage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function M(){try{s.texSubImage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function z(){try{s.texSubImage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function K(){try{s.compressedTexSubImage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function ee(){try{s.compressedTexSubImage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function ue(){try{s.texStorage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function ne(){try{s.texStorage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function Y(){try{s.texImage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function j(){try{s.texImage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function xe(N){return u[N]!==void 0?u[N]:s.getParameter(N)}function we(N,oe){u[N]!==oe&&(s.pixelStorei(N,oe),u[N]=oe)}function de(N){Ge.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Ge.copy(N))}function le(N){Fe.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),Fe.copy(N))}function _e(N,oe){let J=c.get(oe);J===void 0&&(J=new WeakMap,c.set(oe,J));let Me=J.get(N);Me===void 0&&(Me=s.getUniformBlockIndex(oe,N.name),J.set(N,Me))}function Ye(N,oe){let Me=c.get(oe).get(N);l.get(oe)!==Me&&(s.uniformBlockBinding(oe,Me,N.__bindingPointIndex),l.set(oe,Me))}function et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},D=null,pe={},d={},f=new WeakMap,p=[],g=null,m=!1,_=null,x=null,S=null,y=null,T=null,b=null,w=null,v=new Ke(0,0,0),A=0,C=!1,P=null,I=null,H=null,V=null,O=null,Ge.set(0,0,s.canvas.width,s.canvas.height),Fe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:Pe,bindFramebuffer:Ve,drawBuffers:De,useProgram:lt,setBlending:ot,setMaterial:We,setFlipSided:X,setCullFace:_t,setLineWidth:Xt,setPolygonOffset:U,setScissorTest:nt,activeTexture:Je,bindTexture:xt,unbindTexture:ge,compressedTexImage2D:st,compressedTexImage3D:R,texImage2D:Y,texImage3D:j,pixelStorei:we,getParameter:xe,updateUBOMapping:_e,uniformBlockBinding:Ye,texStorage2D:ue,texStorage3D:ne,texSubImage2D:M,texSubImage3D:z,compressedTexSubImage2D:K,compressedTexSubImage3D:ee,scissor:de,viewport:le,reset:et}}function j1(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,h=new WeakMap,u=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return p?new OffscreenCanvas(R,M):Xo("canvas")}function m(R,M,z){let K=1,ee=st(R);if((ee.width>z||ee.height>z)&&(K=z/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ue=Math.floor(K*ee.width),ne=Math.floor(K*ee.height);d===void 0&&(d=g(ue,ne));let Y=M?g(ue,ne):d;return Y.width=ue,Y.height=ne,Y.getContext("2d").drawImage(R,0,0,ue,ne),Ne("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ue+"x"+ne+")."),Y}else return"data"in R&&Ne("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function _(R){return R.generateMipmaps}function x(R){s.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(R,M,z,K,ee,ue=!1){if(R!==null){if(s[R]!==void 0)return s[R];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ne;K&&(ne=e.get("EXT_texture_norm16"),ne||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=M;if(M===s.RED&&(z===s.FLOAT&&(Y=s.R32F),z===s.HALF_FLOAT&&(Y=s.R16F),z===s.UNSIGNED_BYTE&&(Y=s.R8),z===s.UNSIGNED_SHORT&&ne&&(Y=ne.R16_EXT),z===s.SHORT&&ne&&(Y=ne.R16_SNORM_EXT)),M===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.R8UI),z===s.UNSIGNED_SHORT&&(Y=s.R16UI),z===s.UNSIGNED_INT&&(Y=s.R32UI),z===s.BYTE&&(Y=s.R8I),z===s.SHORT&&(Y=s.R16I),z===s.INT&&(Y=s.R32I)),M===s.RG&&(z===s.FLOAT&&(Y=s.RG32F),z===s.HALF_FLOAT&&(Y=s.RG16F),z===s.UNSIGNED_BYTE&&(Y=s.RG8),z===s.UNSIGNED_SHORT&&ne&&(Y=ne.RG16_EXT),z===s.SHORT&&ne&&(Y=ne.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.RG8UI),z===s.UNSIGNED_SHORT&&(Y=s.RG16UI),z===s.UNSIGNED_INT&&(Y=s.RG32UI),z===s.BYTE&&(Y=s.RG8I),z===s.SHORT&&(Y=s.RG16I),z===s.INT&&(Y=s.RG32I)),M===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),z===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),z===s.UNSIGNED_INT&&(Y=s.RGB32UI),z===s.BYTE&&(Y=s.RGB8I),z===s.SHORT&&(Y=s.RGB16I),z===s.INT&&(Y=s.RGB32I)),M===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),z===s.UNSIGNED_INT&&(Y=s.RGBA32UI),z===s.BYTE&&(Y=s.RGBA8I),z===s.SHORT&&(Y=s.RGBA16I),z===s.INT&&(Y=s.RGBA32I)),M===s.RGB&&(z===s.UNSIGNED_SHORT&&ne&&(Y=ne.RGB16_EXT),z===s.SHORT&&ne&&(Y=ne.RGB16_SNORM_EXT),z===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),M===s.RGBA){let j=ue?Wa:ht.getTransfer(ee);z===s.FLOAT&&(Y=s.RGBA32F),z===s.HALF_FLOAT&&(Y=s.RGBA16F),z===s.UNSIGNED_BYTE&&(Y=j===bt?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT&&ne&&(Y=ne.RGBA16_EXT),z===s.SHORT&&ne&&(Y=ne.RGBA16_SNORM_EXT),z===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function T(R,M){let z;return R?M===null||M===er||M===oa?z=s.DEPTH24_STENCIL8:M===yi?z=s.DEPTH32F_STENCIL8:M===sa&&(z=s.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===er||M===oa?z=s.DEPTH_COMPONENT24:M===yi?z=s.DEPTH_COMPONENT32F:M===sa&&(z=s.DEPTH_COMPONENT16),z}function b(R,M){return _(R)===!0||R.isFramebufferTexture&&R.minFilter!==sn&&R.minFilter!==on?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function w(R){let M=R.target;M.removeEventListener("dispose",w),A(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&u.delete(M)}function v(R){let M=R.target;M.removeEventListener("dispose",v),P(M)}function A(R){let M=n.get(R);if(M.__webglInit===void 0)return;let z=R.source,K=f.get(z);if(K){let ee=K[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&C(R),Object.keys(K).length===0&&f.delete(z)}n.remove(R)}function C(R){let M=n.get(R);s.deleteTexture(M.__webglTexture);let z=R.source,K=f.get(z);delete K[M.__cacheKey],o.memory.textures--}function P(R){let M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let ee=0;ee<M.__webglFramebuffer[K].length;ee++)s.deleteFramebuffer(M.__webglFramebuffer[K][ee]);else s.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)s.deleteFramebuffer(M.__webglFramebuffer[K]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let z=R.textures;for(let K=0,ee=z.length;K<ee;K++){let ue=n.get(z[K]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),o.memory.textures--),n.remove(z[K])}n.remove(R)}let I=0;function H(){I=0}function V(){return I}function O(R){I=R}function k(){let R=I;return R>=i.maxTextures&&Ne("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),I+=1,R}function F(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function Z(R,M){let z=n.get(R);if(R.isVideoTexture&&xt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){let K=R.image;if(K===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(z,R,M);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+M)}function Q(R,M){let z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Pe(z,R,M);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+M)}function D(R,M){let z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Pe(z,R,M);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+M)}function pe(R,M){let z=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){Ve(z,R,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+M)}let Ae={[ms]:s.REPEAT,[Oi]:s.CLAMP_TO_EDGE,[Go]:s.MIRRORED_REPEAT},je={[sn]:s.NEAREST,[yh]:s.NEAREST_MIPMAP_NEAREST,[eo]:s.NEAREST_MIPMAP_LINEAR,[on]:s.LINEAR,[ra]:s.LINEAR_MIPMAP_NEAREST,[Qi]:s.LINEAR_MIPMAP_LINEAR},Ge={[lg]:s.NEVER,[fg]:s.ALWAYS,[cg]:s.LESS,[su]:s.LEQUAL,[hg]:s.EQUAL,[ou]:s.GEQUAL,[ug]:s.GREATER,[dg]:s.NOTEQUAL};function Fe(R,M){if(M.type===yi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===on||M.magFilter===ra||M.magFilter===eo||M.magFilter===Qi||M.minFilter===on||M.minFilter===ra||M.minFilter===eo||M.minFilter===Qi)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Ae[M.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Ae[M.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Ae[M.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,je[M.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,je[M.minFilter]),M.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Ge[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===sn||M.minFilter!==eo&&M.minFilter!==Qi||M.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function $(R,M){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",w));let K=M.source,ee=f.get(K);ee===void 0&&(ee={},f.set(K,ee));let ue=F(M);if(ue!==R.__cacheKey){ee[ue]===void 0&&(ee[ue]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ee[ue].usedTimes++;let ne=ee[R.__cacheKey];ne!==void 0&&(ee[R.__cacheKey].usedTimes--,ne.usedTimes===0&&C(M)),R.__cacheKey=ue,R.__webglTexture=ee[ue].texture}return z}function ae(R,M,z){return Math.floor(Math.floor(R/z)/M)}function se(R,M,z,K){let ue=R.updateRanges;if(ue.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,z,K,M.data);else{ue.sort((we,de)=>we.start-de.start);let ne=0;for(let we=1;we<ue.length;we++){let de=ue[ne],le=ue[we],_e=de.start+de.count,Ye=ae(le.start,M.width,4),et=ae(de.start,M.width,4);le.start<=_e+1&&Ye===et&&ae(le.start+le.count-1,M.width,4)===Ye?de.count=Math.max(de.count,le.start+le.count-de.start):(++ne,ue[ne]=le)}ue.length=ne+1;let Y=t.getParameter(s.UNPACK_ROW_LENGTH),j=t.getParameter(s.UNPACK_SKIP_PIXELS),xe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let we=0,de=ue.length;we<de;we++){let le=ue[we],_e=Math.floor(le.start/4),Ye=Math.ceil(le.count/4),et=_e%M.width,N=Math.floor(_e/M.width),oe=Ye,J=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,et),t.pixelStorei(s.UNPACK_SKIP_ROWS,N),t.texSubImage2D(s.TEXTURE_2D,0,et,N,oe,J,z,K,M.data)}R.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,Y),t.pixelStorei(s.UNPACK_SKIP_PIXELS,j),t.pixelStorei(s.UNPACK_SKIP_ROWS,xe)}}function Pe(R,M,z){let K=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=s.TEXTURE_3D);let ee=$(R,M),ue=M.source;t.bindTexture(K,R.__webglTexture,s.TEXTURE0+z);let ne=n.get(ue);if(ue.version!==ne.__version||ee===!0){if(t.activeTexture(s.TEXTURE0+z),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let J=ht.getPrimaries(ht.workingColorSpace),Me=M.colorSpace===Xr?null:ht.getPrimaries(M.colorSpace),ce=M.colorSpace===Xr||J===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce)}t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let j=m(M.image,!1,i.maxTextureSize);j=ge(M,j);let xe=r.convert(M.format,M.colorSpace),we=r.convert(M.type),de=y(M.internalFormat,xe,we,M.normalized,M.colorSpace,M.isVideoTexture);Fe(K,M);let le,_e=M.mipmaps,Ye=M.isVideoTexture!==!0,et=ne.__version===void 0||ee===!0,N=ue.dataReady,oe=b(M,j);if(M.isDepthTexture)de=T(M.format===Ss,M.type),et&&(Ye?t.texStorage2D(s.TEXTURE_2D,1,de,j.width,j.height):t.texImage2D(s.TEXTURE_2D,0,de,j.width,j.height,0,xe,we,null));else if(M.isDataTexture)if(_e.length>0){Ye&&et&&t.texStorage2D(s.TEXTURE_2D,oe,de,_e[0].width,_e[0].height);for(let J=0,Me=_e.length;J<Me;J++)le=_e[J],Ye?N&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,le.width,le.height,xe,we,le.data):t.texImage2D(s.TEXTURE_2D,J,de,le.width,le.height,0,xe,we,le.data);M.generateMipmaps=!1}else Ye?(et&&t.texStorage2D(s.TEXTURE_2D,oe,de,j.width,j.height),N&&se(M,j,xe,we)):t.texImage2D(s.TEXTURE_2D,0,de,j.width,j.height,0,xe,we,j.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ye&&et&&t.texStorage3D(s.TEXTURE_2D_ARRAY,oe,de,_e[0].width,_e[0].height,j.depth);for(let J=0,Me=_e.length;J<Me;J++)if(le=_e[J],M.format!==Mi)if(xe!==null)if(Ye){if(N)if(M.layerUpdates.size>0){let ce=bf(le.width,le.height,M.format,M.type);for(let te of M.layerUpdates){let re=le.data.subarray(te*ce/le.data.BYTES_PER_ELEMENT,(te+1)*ce/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,te,le.width,le.height,1,xe,re)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,le.width,le.height,j.depth,xe,le.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,de,le.width,le.height,j.depth,0,le.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?N&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,le.width,le.height,j.depth,xe,we,le.data):t.texImage3D(s.TEXTURE_2D_ARRAY,J,de,le.width,le.height,j.depth,0,xe,we,le.data)}else{Ye&&et&&t.texStorage2D(s.TEXTURE_2D,oe,de,_e[0].width,_e[0].height);for(let J=0,Me=_e.length;J<Me;J++)le=_e[J],M.format!==Mi?xe!==null?Ye?N&&t.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,le.width,le.height,xe,le.data):t.compressedTexImage2D(s.TEXTURE_2D,J,de,le.width,le.height,0,le.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?N&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,le.width,le.height,xe,we,le.data):t.texImage2D(s.TEXTURE_2D,J,de,le.width,le.height,0,xe,we,le.data)}else if(M.isDataArrayTexture)if(Ye){if(et&&t.texStorage3D(s.TEXTURE_2D_ARRAY,oe,de,j.width,j.height,j.depth),N)if(M.layerUpdates.size>0){let J=bf(j.width,j.height,M.format,M.type);for(let Me of M.layerUpdates){let ce=j.data.subarray(Me*J/j.data.BYTES_PER_ELEMENT,(Me+1)*J/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Me,j.width,j.height,1,xe,we,ce)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,xe,we,j.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,de,j.width,j.height,j.depth,0,xe,we,j.data);else if(M.isData3DTexture)Ye?(et&&t.texStorage3D(s.TEXTURE_3D,oe,de,j.width,j.height,j.depth),N&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,xe,we,j.data)):t.texImage3D(s.TEXTURE_3D,0,de,j.width,j.height,j.depth,0,xe,we,j.data);else if(M.isFramebufferTexture){if(et)if(Ye)t.texStorage2D(s.TEXTURE_2D,oe,de,j.width,j.height);else{let J=j.width,Me=j.height;for(let ce=0;ce<oe;ce++)t.texImage2D(s.TEXTURE_2D,ce,de,J,Me,0,xe,we,null),J>>=1,Me>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){let J=s.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),j.parentNode!==J){J.appendChild(j),u.add(M),J.onpaint=he=>{let ze=he.changedElements;for(let ie of u)ze.includes(ie.image)&&(ie.needsUpdate=!0)},J.requestPaint();return}let Me=0,ce=s.RGBA,te=s.RGBA,re=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,Me,ce,te,re,j),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(_e.length>0){if(Ye&&et){let J=st(_e[0]);t.texStorage2D(s.TEXTURE_2D,oe,de,J.width,J.height)}for(let J=0,Me=_e.length;J<Me;J++)le=_e[J],Ye?N&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,xe,we,le):t.texImage2D(s.TEXTURE_2D,J,de,xe,we,le);M.generateMipmaps=!1}else if(Ye){if(et){let J=st(j);t.texStorage2D(s.TEXTURE_2D,oe,de,J.width,J.height)}N&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,xe,we,j)}else t.texImage2D(s.TEXTURE_2D,0,de,xe,we,j);_(M)&&x(K),ne.__version=ue.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ve(R,M,z){if(M.image.length!==6)return;let K=$(R,M),ee=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+z);let ue=n.get(ee);if(ee.version!==ue.__version||K===!0){t.activeTexture(s.TEXTURE0+z);let ne=ht.getPrimaries(ht.workingColorSpace),Y=M.colorSpace===Xr?null:ht.getPrimaries(M.colorSpace),j=M.colorSpace===Xr||ne===Y?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let xe=M.isCompressedTexture||M.image[0].isCompressedTexture,we=M.image[0]&&M.image[0].isDataTexture,de=[];for(let te=0;te<6;te++)!xe&&!we?de[te]=m(M.image[te],!0,i.maxCubemapSize):de[te]=we?M.image[te].image:M.image[te],de[te]=ge(M,de[te]);let le=de[0],_e=r.convert(M.format,M.colorSpace),Ye=r.convert(M.type),et=y(M.internalFormat,_e,Ye,M.normalized,M.colorSpace),N=M.isVideoTexture!==!0,oe=ue.__version===void 0||K===!0,J=ee.dataReady,Me=b(M,le);Fe(s.TEXTURE_CUBE_MAP,M);let ce;if(xe){N&&oe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Me,et,le.width,le.height);for(let te=0;te<6;te++){ce=de[te].mipmaps;for(let re=0;re<ce.length;re++){let he=ce[re];M.format!==Mi?_e!==null?N?J&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,re,0,0,he.width,he.height,_e,he.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,re,et,he.width,he.height,0,he.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,re,0,0,he.width,he.height,_e,Ye,he.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,re,et,he.width,he.height,0,_e,Ye,he.data)}}}else{if(ce=M.mipmaps,N&&oe){ce.length>0&&Me++;let te=st(de[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Me,et,te.width,te.height)}for(let te=0;te<6;te++)if(we){N?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,de[te].width,de[te].height,_e,Ye,de[te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,et,de[te].width,de[te].height,0,_e,Ye,de[te].data);for(let re=0;re<ce.length;re++){let ze=ce[re].image[te].image;N?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,re+1,0,0,ze.width,ze.height,_e,Ye,ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,re+1,et,ze.width,ze.height,0,_e,Ye,ze.data)}}else{N?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,_e,Ye,de[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,et,_e,Ye,de[te]);for(let re=0;re<ce.length;re++){let he=ce[re];N?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,re+1,0,0,_e,Ye,he.image[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,re+1,et,_e,Ye,he.image[te])}}}_(M)&&x(s.TEXTURE_CUBE_MAP),ue.__version=ee.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function De(R,M,z,K,ee,ue){let ne=r.convert(z.format,z.colorSpace),Y=r.convert(z.type),j=y(z.internalFormat,ne,Y,z.normalized,z.colorSpace),xe=n.get(M),we=n.get(z);if(we.__renderTarget=M,!xe.__hasExternalTextures){let de=Math.max(1,M.width>>ue),le=Math.max(1,M.height>>ue);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,ue,j,de,le,M.depth,0,ne,Y,null):t.texImage2D(ee,ue,j,de,le,0,ne,Y,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),Je(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,ee,we.__webglTexture,0,nt(M)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,ee,we.__webglTexture,ue),t.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(R,M,z){if(s.bindRenderbuffer(s.RENDERBUFFER,R),M.depthBuffer){let K=M.depthTexture,ee=K&&K.isDepthTexture?K.type:null,ue=T(M.stencilBuffer,ee),ne=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Je(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt(M),ue,M.width,M.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,nt(M),ue,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ue,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ne,s.RENDERBUFFER,R)}else{let K=M.textures;for(let ee=0;ee<K.length;ee++){let ue=K[ee],ne=r.convert(ue.format,ue.colorSpace),Y=r.convert(ue.type),j=y(ue.internalFormat,ne,Y,ue.normalized,ue.colorSpace);Je(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt(M),j,M.width,M.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,nt(M),j,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,j,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Re(R,M,z){let K=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=n.get(M.depthTexture);if(ee.__renderTarget=M,(!ee.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,M.depthTexture.addEventListener("dispose",w)),ee.__webglTexture===void 0){ee.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,M.depthTexture);let xe=r.convert(M.depthTexture.format),we=r.convert(M.depthTexture.type),de;M.depthTexture.format===ur?de=s.DEPTH_COMPONENT24:M.depthTexture.format===Ss&&(de=s.DEPTH24_STENCIL8);for(let le=0;le<6;le++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,de,M.width,M.height,0,xe,we,null)}}else Z(M.depthTexture,0);let ue=ee.__webglTexture,ne=nt(M),Y=K?s.TEXTURE_CUBE_MAP_POSITIVE_X+z:s.TEXTURE_2D,j=M.depthTexture.format===Ss?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===ur)Je(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,Y,ue,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,j,Y,ue,0);else if(M.depthTexture.format===Ss)Je(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,Y,ue,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,j,Y,ue,0);else throw new Error("Unknown depthTexture format")}function qe(R){let M=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let K=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){let ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=K}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(z)for(let K=0;K<6;K++)Re(M.__webglFramebuffer[K],R,K);else{let K=R.texture.mipmaps;K&&K.length>0?Re(M.__webglFramebuffer[0],R,0):Re(M.__webglFramebuffer,R,0)}else if(z){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=s.createRenderbuffer(),lt(M.__webglDepthbuffer[K],R,!1);else{let ee=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,ue)}}else{let K=R.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),lt(M.__webglDepthbuffer,R,!1);else{let ee=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,ue)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(R,M,z){let K=n.get(R);M!==void 0&&De(K.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&qe(R)}function We(R){let M=R.texture,z=n.get(R),K=n.get(M);R.addEventListener("dispose",v);let ee=R.textures,ue=R.isWebGLCubeRenderTarget===!0,ne=ee.length>1;if(ne||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=M.version,o.memory.textures++),ue){z.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[Y]=[];for(let j=0;j<M.mipmaps.length;j++)z.__webglFramebuffer[Y][j]=s.createFramebuffer()}else z.__webglFramebuffer[Y]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let Y=0;Y<M.mipmaps.length;Y++)z.__webglFramebuffer[Y]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(ne)for(let Y=0,j=ee.length;Y<j;Y++){let xe=n.get(ee[Y]);xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&Je(R)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Y=0;Y<ee.length;Y++){let j=ee[Y];z.__webglColorRenderbuffer[Y]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[Y]);let xe=r.convert(j.format,j.colorSpace),we=r.convert(j.type),de=y(j.internalFormat,xe,we,j.normalized,j.colorSpace,R.isXRRenderTarget===!0),le=nt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,le,de,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Y,s.RENDERBUFFER,z.__webglColorRenderbuffer[Y])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),lt(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,M);for(let Y=0;Y<6;Y++)if(M.mipmaps&&M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)De(z.__webglFramebuffer[Y][j],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,j);else De(z.__webglFramebuffer[Y],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);_(M)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){for(let Y=0,j=ee.length;Y<j;Y++){let xe=ee[Y],we=n.get(xe),de=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,we.__webglTexture),Fe(de,xe),De(z.__webglFramebuffer,R,xe,s.COLOR_ATTACHMENT0+Y,de,0),_(xe)&&x(de)}t.unbindTexture()}else{let Y=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Y=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Y,K.__webglTexture),Fe(Y,M),M.mipmaps&&M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)De(z.__webglFramebuffer[j],R,M,s.COLOR_ATTACHMENT0,Y,j);else De(z.__webglFramebuffer,R,M,s.COLOR_ATTACHMENT0,Y,0);_(M)&&x(Y),t.unbindTexture()}R.depthBuffer&&qe(R)}function X(R){let M=R.textures;for(let z=0,K=M.length;z<K;z++){let ee=M[z];if(_(ee)){let ue=S(R),ne=n.get(ee).__webglTexture;t.bindTexture(ue,ne),x(ue),t.unbindTexture()}}}let _t=[],Xt=[];function U(R){if(R.samples>0){if(Je(R)===!1){let M=R.textures,z=R.width,K=R.height,ee=s.COLOR_BUFFER_BIT,ue=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ne=n.get(R),Y=M.length>1;if(Y)for(let xe=0;xe<M.length;xe++)t.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer);let j=R.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ne.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),Y){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ne.__webglColorRenderbuffer[xe]);let we=n.get(M[xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,we,0)}s.blitFramebuffer(0,0,z,K,0,0,z,K,ee,s.NEAREST),l===!0&&(_t.length=0,Xt.length=0,_t.push(s.COLOR_ATTACHMENT0+xe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(_t.push(ue),Xt.push(ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Xt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Y)for(let xe=0;xe<M.length;xe++){t.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,ne.__webglColorRenderbuffer[xe]);let we=n.get(M[xe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,we,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let M=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function nt(R){return Math.min(i.maxSamples,R.samples)}function Je(R){let M=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function xt(R){let M=o.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function ge(R,M){let z=R.colorSpace,K=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Yn&&z!==Xr&&(ht.getTransfer(z)===bt?(K!==Mi||ee!==ci)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",z)),M}function st(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=H,this.getTextureUnits=V,this.setTextureUnits=O,this.setTexture2D=Z,this.setTexture2DArray=Q,this.setTexture3D=D,this.setTextureCube=pe,this.rebindTextures=ot,this.setupRenderTarget=We,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Q1(s,e){function t(n,i=Xr){let r,o=ht.getTransfer(i);if(n===ci)return s.UNSIGNED_BYTE;if(n===Sh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===bh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ff)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===pf)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===uf)return s.BYTE;if(n===df)return s.SHORT;if(n===sa)return s.UNSIGNED_SHORT;if(n===Mh)return s.INT;if(n===er)return s.UNSIGNED_INT;if(n===yi)return s.FLOAT;if(n===Mr)return s.HALF_FLOAT;if(n===mf)return s.ALPHA;if(n===gf)return s.RGB;if(n===Mi)return s.RGBA;if(n===ur)return s.DEPTH_COMPONENT;if(n===Ss)return s.DEPTH_STENCIL;if(n===Eh)return s.RED;if(n===Th)return s.RED_INTEGER;if(n===bs)return s.RG;if(n===wh)return s.RG_INTEGER;if(n===Ah)return s.RGBA_INTEGER;if(n===vl||n===yl||n===Ml||n===Sl)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ml)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rh||n===Ch||n===Ph||n===Ih)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ch)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ph)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ih)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dh||n===Lh||n===Oh||n===Nh||n===Fh||n===bl||n===Uh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dh||n===Lh)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Oh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Nh)return r.COMPRESSED_R11_EAC;if(n===Fh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===bl)return r.COMPRESSED_RG11_EAC;if(n===Uh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Bh||n===kh||n===zh||n===Hh||n===Vh||n===Gh||n===Wh||n===Xh||n===qh||n===Yh||n===Zh||n===Kh||n===Jh||n===$h)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$h)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jh||n===Qh||n===eu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===jh)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tu||n===nu||n===El||n===iu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===tu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===El)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===iu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===oa?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var eE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Uf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new nl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Cn({vertexShader:eE,fragmentShader:tE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yt(new mr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bf=class extends dr{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,g=typeof XRWebGLBinding<"u",m=new Uf,_={},x=t.getContextAttributes(),S=null,y=null,T=[],b=[],w=new ke,v=null,A=new pn;A.viewport=new Rt;let C=new pn;C.viewport=new Rt;let P=[A,C],I=new _h,H=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ae=T[$];return ae===void 0&&(ae=new Ko,T[$]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function($){let ae=T[$];return ae===void 0&&(ae=new Ko,T[$]=ae),ae.getGripSpace()},this.getHand=function($){let ae=T[$];return ae===void 0&&(ae=new Ko,T[$]=ae),ae.getHandSpace()};function O($){let ae=b.indexOf($.inputSource);if(ae===-1)return;let se=T[ae];se!==void 0&&(se.update($.inputSource,$.frame,c||o),se.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",F);for(let $=0;$<T.length;$++){let ae=b[$];ae!==null&&(b[$]=null,T[$].disconnect(ae))}H=null,V=null,m.reset();for(let $ in _)delete _[$];e.setRenderTarget(S),f=null,d=null,u=null,i=null,y=null,Fe.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",k),i.addEventListener("inputsourceschange",F),x.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(w),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Pe=null,Ve=null;x.depth&&(Ve=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=x.stencil?Ss:ur,Pe=x.stencil?oa:er);let De={colorFormat:t.RGBA8,depthFormat:Ve,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(De),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new vi(d.textureWidth,d.textureHeight,{format:Mi,type:ci,depthTexture:new Hr(d.textureWidth,d.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new vi(f.framebufferWidth,f.framebufferHeight,{format:Mi,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Fe.setContext(i),Fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F($){for(let ae=0;ae<$.removed.length;ae++){let se=$.removed[ae],Pe=b.indexOf(se);Pe>=0&&(b[Pe]=null,T[Pe].disconnect(se))}for(let ae=0;ae<$.added.length;ae++){let se=$.added[ae],Pe=b.indexOf(se);if(Pe===-1){for(let De=0;De<T.length;De++)if(De>=b.length){b.push(se),Pe=De;break}else if(b[De]===null){b[De]=se,Pe=De;break}if(Pe===-1)break}let Ve=T[Pe];Ve&&Ve.connect(se)}}let Z=new L,Q=new L;function D($,ae,se){Z.setFromMatrixPosition(ae.matrixWorld),Q.setFromMatrixPosition(se.matrixWorld);let Pe=Z.distanceTo(Q),Ve=ae.projectionMatrix.elements,De=se.projectionMatrix.elements,lt=Ve[14]/(Ve[10]-1),Re=Ve[14]/(Ve[10]+1),qe=(Ve[9]+1)/Ve[5],ot=(Ve[9]-1)/Ve[5],We=(Ve[8]-1)/Ve[0],X=(De[8]+1)/De[0],_t=lt*We,Xt=lt*X,U=Pe/(-We+X),nt=U*-We;if(ae.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(nt),$.translateZ(U),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ve[10]===-1)$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let Je=lt+U,xt=Re+U,ge=_t-nt,st=Xt+(Pe-nt),R=qe*Re/xt*Je,M=ot*Re/xt*Je;$.projectionMatrix.makePerspective(ge,st,R,M,Je,xt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function pe($,ae){ae===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ae.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let ae=$.near,se=$.far;m.texture!==null&&(m.depthNear>0&&(ae=m.depthNear),m.depthFar>0&&(se=m.depthFar)),I.near=C.near=A.near=ae,I.far=C.far=A.far=se,(H!==I.near||V!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),H=I.near,V=I.far),I.layers.mask=$.layers.mask|6,A.layers.mask=I.layers.mask&-5,C.layers.mask=I.layers.mask&-3;let Pe=$.parent,Ve=I.cameras;pe(I,Pe);for(let De=0;De<Ve.length;De++)pe(Ve[De],Pe);Ve.length===2?D(I,A,C):I.projectionMatrix.copy(A.projectionMatrix),Ae($,I,Pe)};function Ae($,ae,se){se===null?$.matrix.copy(ae.matrixWorld):($.matrix.copy(se.matrixWorld),$.matrix.invert(),$.matrix.multiply(ae.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Zs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function($){return _[$]};let je=null;function Ge($,ae){if(h=ae.getViewerPose(c||o),p=ae,h!==null){let se=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Pe=!1;se.length!==I.cameras.length&&(I.cameras.length=0,Pe=!0);for(let Re=0;Re<se.length;Re++){let qe=se[Re],ot=null;if(f!==null)ot=f.getViewport(qe);else{let X=u.getViewSubImage(d,qe);ot=X.viewport,Re===0&&(e.setRenderTargetTextures(y,X.colorTexture,X.depthStencilTexture),e.setRenderTarget(y))}let We=P[Re];We===void 0&&(We=new pn,We.layers.enable(Re),We.viewport=new Rt,P[Re]=We),We.matrix.fromArray(qe.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(qe.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(ot.x,ot.y,ot.width,ot.height),Re===0&&(I.matrix.copy(We.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Pe===!0&&I.cameras.push(We)}let Ve=i.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){u=n.getBinding();let Re=u.getDepthInformation(se[0]);Re&&Re.isValid&&Re.texture&&m.init(Re,i.renderState)}if(Ve&&Ve.includes("camera-access")&&g){e.state.unbindTexture(),u=n.getBinding();for(let Re=0;Re<se.length;Re++){let qe=se[Re].camera;if(qe){let ot=_[qe];ot||(ot=new nl,_[qe]=ot);let We=u.getCameraImage(qe);ot.sourceTexture=We}}}}for(let se=0;se<T.length;se++){let Pe=b[se],Ve=T[se];Pe!==null&&Ve!==void 0&&Ve.update(Pe,ae,c||o)}je&&je($,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),p=null}let Fe=new Wg;Fe.setAnimationLoop(Ge),this.setAnimationLoop=function($){je=$},this.dispose=function(){}}},nE=new Qe,Jg=new tt;Jg.set(-1,0,0,0,1,0,0,0,1);function iE(s,e){function t(m,_){m.matrixAutoUpdate===!0&&m.updateMatrix(),_.value.copy(m.matrix)}function n(m,_){_.color.getRGB(m.fogColor.value,yf(s)),_.isFog?(m.fogNear.value=_.near,m.fogFar.value=_.far):_.isFogExp2&&(m.fogDensity.value=_.density)}function i(m,_,x,S,y){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?r(m,_):_.isMeshLambertMaterial?(r(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(m,_),u(m,_)):_.isMeshPhongMaterial?(r(m,_),h(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(m,_),d(m,_),_.isMeshPhysicalMaterial&&f(m,_,y)):_.isMeshMatcapMaterial?(r(m,_),p(m,_)):_.isMeshDepthMaterial?r(m,_):_.isMeshDistanceMaterial?(r(m,_),g(m,_)):_.isMeshNormalMaterial?r(m,_):_.isLineBasicMaterial?(o(m,_),_.isLineDashedMaterial&&a(m,_)):_.isPointsMaterial?l(m,_,x,S):_.isSpriteMaterial?c(m,_):_.isShadowMaterial?(m.color.value.copy(_.color),m.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(m,_){m.opacity.value=_.opacity,_.color&&m.diffuse.value.copy(_.color),_.emissive&&m.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.bumpMap&&(m.bumpMap.value=_.bumpMap,t(_.bumpMap,m.bumpMapTransform),m.bumpScale.value=_.bumpScale,_.side===Kn&&(m.bumpScale.value*=-1)),_.normalMap&&(m.normalMap.value=_.normalMap,t(_.normalMap,m.normalMapTransform),m.normalScale.value.copy(_.normalScale),_.side===Kn&&m.normalScale.value.negate()),_.displacementMap&&(m.displacementMap.value=_.displacementMap,t(_.displacementMap,m.displacementMapTransform),m.displacementScale.value=_.displacementScale,m.displacementBias.value=_.displacementBias),_.emissiveMap&&(m.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,m.emissiveMapTransform)),_.specularMap&&(m.specularMap.value=_.specularMap,t(_.specularMap,m.specularMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest);let x=e.get(_),S=x.envMap,y=x.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(nE.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Jg),m.reflectivity.value=_.reflectivity,m.ior.value=_.ior,m.refractionRatio.value=_.refractionRatio),_.lightMap&&(m.lightMap.value=_.lightMap,m.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,m.lightMapTransform)),_.aoMap&&(m.aoMap.value=_.aoMap,m.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,m.aoMapTransform))}function o(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform))}function a(m,_){m.dashSize.value=_.dashSize,m.totalSize.value=_.dashSize+_.gapSize,m.scale.value=_.scale}function l(m,_,x,S){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.size.value=_.size*x,m.scale.value=S*.5,_.map&&(m.map.value=_.map,t(_.map,m.uvTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function c(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.rotation.value=_.rotation,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function h(m,_){m.specular.value.copy(_.specular),m.shininess.value=Math.max(_.shininess,1e-4)}function u(m,_){_.gradientMap&&(m.gradientMap.value=_.gradientMap)}function d(m,_){m.metalness.value=_.metalness,_.metalnessMap&&(m.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,m.metalnessMapTransform)),m.roughness.value=_.roughness,_.roughnessMap&&(m.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,m.roughnessMapTransform)),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)}function f(m,_,x){m.ior.value=_.ior,_.sheen>0&&(m.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),m.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(m.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,m.sheenColorMapTransform)),_.sheenRoughnessMap&&(m.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,m.sheenRoughnessMapTransform))),_.clearcoat>0&&(m.clearcoat.value=_.clearcoat,m.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(m.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,m.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(m.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Kn&&m.clearcoatNormalScale.value.negate())),_.dispersion>0&&(m.dispersion.value=_.dispersion),_.iridescence>0&&(m.iridescence.value=_.iridescence,m.iridescenceIOR.value=_.iridescenceIOR,m.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(m.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,m.iridescenceMapTransform)),_.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),_.transmission>0&&(m.transmission.value=_.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),_.transmissionMap&&(m.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,m.transmissionMapTransform)),m.thickness.value=_.thickness,_.thicknessMap&&(m.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=_.attenuationDistance,m.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(m.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(m.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=_.specularIntensity,m.specularColor.value.copy(_.specularColor),_.specularColorMap&&(m.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,m.specularColorMapTransform)),_.specularIntensityMap&&(m.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,_){_.matcap&&(m.matcap.value=_.matcap)}function g(m,_){let x=e.get(_).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function rE(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){let y=S.program;n.uniformBlockBinding(x,y)}function c(x,S){let y=i[x.id];y===void 0&&(p(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",m));let T=S.program;n.updateUBOMapping(x,T);let b=e.render.frame;r[x.id]!==b&&(d(x),r[x.id]=b)}function h(x){let S=u();x.__bindingPointIndex=S;let y=s.createBuffer(),T=x.__size,b=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,T,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,y),y}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let S=i[x.id],y=x.uniforms,T=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let b=0,w=y.length;b<w;b++){let v=Array.isArray(y[b])?y[b]:[y[b]];for(let A=0,C=v.length;A<C;A++){let P=v[A];if(f(P,b,A,T)===!0){let I=P.__offset,H=Array.isArray(P.value)?P.value:[P.value],V=0;for(let O=0;O<H.length;O++){let k=H[O],F=g(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,I+V,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):ArrayBuffer.isView(k)?P.__data.set(new k.constructor(k.buffer,k.byteOffset,P.__data.length)):(k.toArray(P.__data,V),V+=F.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,I,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,S,y,T){let b=x.value,w=S+"_"+y;if(T[w]===void 0)return typeof b=="number"||typeof b=="boolean"?T[w]=b:ArrayBuffer.isView(b)?T[w]=b.slice():T[w]=b.clone(),!0;{let v=T[w];if(typeof b=="number"||typeof b=="boolean"){if(v!==b)return T[w]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(v.equals(b)===!1)return v.copy(b),!0}}return!1}function p(x){let S=x.uniforms,y=0,T=16;for(let w=0,v=S.length;w<v;w++){let A=Array.isArray(S[w])?S[w]:[S[w]];for(let C=0,P=A.length;C<P;C++){let I=A[C],H=Array.isArray(I.value)?I.value:[I.value];for(let V=0,O=H.length;V<O;V++){let k=H[V],F=g(k),Z=y%T,Q=Z%F.boundary,D=Z+Q;y+=Q,D!==0&&T-D<F.storage&&(y+=T-D),I.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=F.storage}}}let b=y%T;return b>0&&(y+=T-b),x.__size=y,x.__cache={},this}function g(x){let S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",x),S}function m(x){let S=x.target;S.removeEventListener("dispose",m);let y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function _(){for(let x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:_}}var sE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Sr=null;function oE(){return Sr===null&&(Sr=new Qo(sE,16,16,bs,Mr),Sr.name="DFG_LUT",Sr.minFilter=on,Sr.magFilter=on,Sr.wrapS=Oi,Sr.wrapT=Oi,Sr.generateMipmaps=!1,Sr.needsUpdate=!0),Sr}var uu=class{constructor(e={}){let{canvas:t=pg(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ci}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=f,m=new Set([Ah,wh,Th]),_=new Set([ci,er,sa,oa,Sh,bh]),x=new Uint32Array(4),S=new Int32Array(4),y=new L,T=null,b=null,w=[],v=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,I=null;this._outputColorSpace=Vt;let H=0,V=0,O=null,k=-1,F=null,Z=new Rt,Q=new Rt,D=null,pe=new Ke(0),Ae=0,je=t.width,Ge=t.height,Fe=1,$=null,ae=null,se=new Rt(0,0,je,Ge),Pe=new Rt(0,0,je,Ge),Ve=!1,De=new ea,lt=!1,Re=!1,qe=new Qe,ot=new L,We=new Rt,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_t=!1;function Xt(){return O===null?Fe:1}let U=n;function nt(E,B){return t.getContext(E,B)}try{let E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"184"}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",he,!1),U===null){let B="webgl2";if(U=nt(B,E),U===null)throw nt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Xe("WebGLRenderer: "+E.message),E}let Je,xt,ge,st,R,M,z,K,ee,ue,ne,Y,j,xe,we,de,le,_e,Ye,et,N,oe,J;function Me(){Je=new fb(U),Je.init(),N=new Q1(U,Je),xt=new sb(U,Je,e,N),ge=new $1(U,Je),xt.reversedDepthBuffer&&d&&ge.buffers.depth.setReversed(!0),st=new gb(U),R=new U1,M=new j1(U,Je,ge,R,xt,N,st),z=new db(C),K=new yy(U),oe=new ib(U,K),ee=new pb(U,K,st,oe),ue=new xb(U,ee,K,oe,st),_e=new _b(U,xt,M),we=new ob(R),ne=new F1(C,z,Je,xt,oe,we),Y=new iE(C,R),j=new k1,xe=new X1(Je),le=new nb(C,z,ge,ue,p,l),de=new J1(C,ue,xt),J=new rE(U,st,xt,ge),Ye=new rb(U,Je,st),et=new mb(U,Je,st),st.programs=ne.programs,C.capabilities=xt,C.extensions=Je,C.properties=R,C.renderLists=j,C.shadowMap=de,C.state=ge,C.info=st}Me(),g!==ci&&(A=new yb(g,t.width,t.height,i,r));let ce=new Bf(C,U);this.xr=ce,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let E=Je.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Je.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(E){E!==void 0&&(Fe=E,this.setSize(je,Ge,!1))},this.getSize=function(E){return E.set(je,Ge)},this.setSize=function(E,B,q=!0){if(ce.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}je=E,Ge=B,t.width=Math.floor(E*Fe),t.height=Math.floor(B*Fe),q===!0&&(t.style.width=E+"px",t.style.height=B+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(je*Fe,Ge*Fe).floor()},this.setDrawingBufferSize=function(E,B,q){je=E,Ge=B,Fe=q,t.width=Math.floor(E*q),t.height=Math.floor(B*q),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(g===ci){Xe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){Ne("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(Z)},this.getViewport=function(E){return E.copy(se)},this.setViewport=function(E,B,q,G){E.isVector4?se.set(E.x,E.y,E.z,E.w):se.set(E,B,q,G),ge.viewport(Z.copy(se).multiplyScalar(Fe).round())},this.getScissor=function(E){return E.copy(Pe)},this.setScissor=function(E,B,q,G){E.isVector4?Pe.set(E.x,E.y,E.z,E.w):Pe.set(E,B,q,G),ge.scissor(Q.copy(Pe).multiplyScalar(Fe).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(E){ge.setScissorTest(Ve=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){ae=E},this.getClearColor=function(E){return E.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,q=!0){let G=0;if(E){let W=!1;if(O!==null){let ve=O.texture.format;W=m.has(ve)}if(W){let ve=O.texture.type,Se=_.has(ve),Ee=le.getClearColor(),Oe=le.getClearAlpha(),Ue=Ee.r,it=Ee.g,ct=Ee.b;Se?(x[0]=Ue,x[1]=it,x[2]=ct,x[3]=Oe,U.clearBufferuiv(U.COLOR,0,x)):(S[0]=Ue,S[1]=it,S[2]=ct,S[3]=Oe,U.clearBufferiv(U.COLOR,0,S))}else G|=U.COLOR_BUFFER_BIT}B&&(G|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),I=E},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",he,!1),le.dispose(),j.dispose(),xe.dispose(),R.dispose(),z.dispose(),ue.dispose(),oe.dispose(),J.dispose(),ne.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",ft),ce.removeEventListener("sessionend",kt),zt.stop()};function te(E){E.preventDefault(),Xa("WebGLRenderer: Context Lost."),P=!0}function re(){Xa("WebGLRenderer: Context Restored."),P=!1;let E=st.autoReset,B=de.enabled,q=de.autoUpdate,G=de.needsUpdate,W=de.type;Me(),st.autoReset=E,de.enabled=B,de.autoUpdate=q,de.needsUpdate=G,de.type=W}function he(E){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ze(E){let B=E.target;B.removeEventListener("dispose",ze),ie(B)}function ie(E){He(E),R.remove(E)}function He(E){let B=R.get(E).programs;B!==void 0&&(B.forEach(function(q){ne.releaseProgram(q)}),E.isShaderMaterial&&ne.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,q,G,W,ve){B===null&&(B=X);let Se=W.isMesh&&W.matrixWorld.determinant()<0,Ee=bn(E,B,q,G,W);ge.setMaterial(G,Se);let Oe=q.index,Ue=1;if(G.wireframe===!0){if(Oe=ee.getWireframeAttribute(q),Oe===void 0)return;Ue=2}let it=q.drawRange,ct=q.attributes.position,Be=it.start*Ue,At=(it.start+it.count)*Ue;ve!==null&&(Be=Math.max(Be,ve.start*Ue),At=Math.min(At,(ve.start+ve.count)*Ue)),Oe!==null?(Be=Math.max(Be,0),At=Math.min(At,Oe.count)):ct!=null&&(Be=Math.max(Be,0),At=Math.min(At,ct.count));let nn=At-Be;if(nn<0||nn===1/0)return;oe.setup(W,G,Ee,q,Oe);let Jt,Pt=Ye;if(Oe!==null&&(Jt=K.get(Oe),Pt=et,Pt.setIndex(Jt)),W.isMesh)G.wireframe===!0?(ge.setLineWidth(G.wireframeLinewidth*Xt()),Pt.setMode(U.LINES)):Pt.setMode(U.TRIANGLES);else if(W.isLine){let Nn=G.linewidth;Nn===void 0&&(Nn=1),ge.setLineWidth(Nn*Xt()),W.isLineSegments?Pt.setMode(U.LINES):W.isLineLoop?Pt.setMode(U.LINE_LOOP):Pt.setMode(U.LINE_STRIP)}else W.isPoints?Pt.setMode(U.POINTS):W.isSprite&&Pt.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))Pt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Nn=W._multiDrawStarts,Ce=W._multiDrawCounts,gi=W._multiDrawCount,Mt=Oe?K.get(Oe).bytesPerElement:1,Ii=R.get(G).currentProgram.getUniforms();for(let sr=0;sr<gi;sr++)Ii.setValue(U,"_gl_DrawID",sr),Pt.render(Nn[sr]/Mt,Ce[sr])}else if(W.isInstancedMesh)Pt.renderInstances(Be,nn,W.count);else if(q.isInstancedBufferGeometry){let Nn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ce=Math.min(q.instanceCount,Nn);Pt.renderInstances(Be,nn,Ce)}else Pt.render(Be,nn)};function Le(E,B,q){E.transparent===!0&&E.side===li&&E.forceSinglePass===!1?(E.side=Kn,E.needsUpdate=!0,Sn(E,B,q),E.side=Ji,E.needsUpdate=!0,Sn(E,B,q),E.side=li):Sn(E,B,q)}this.compile=function(E,B,q=null){q===null&&(q=E),b=xe.get(q),b.init(B),v.push(b),q.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),E!==q&&E.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights();let G=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ve=W.material;if(ve)if(Array.isArray(ve))for(let Se=0;Se<ve.length;Se++){let Ee=ve[Se];Le(Ee,q,W),G.add(Ee)}else Le(ve,q,W),G.add(ve)}),b=v.pop(),G},this.compileAsync=function(E,B,q=null){let G=this.compile(E,B,q);return new Promise(W=>{function ve(){if(G.forEach(function(Se){R.get(Se).currentProgram.isReady()&&G.delete(Se)}),G.size===0){W(E);return}setTimeout(ve,10)}Je.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Ze=null;function un(E){Ze&&Ze(E)}function ft(){zt.stop()}function kt(){zt.start()}let zt=new Wg;zt.setAnimationLoop(un),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(E){Ze=E,ce.setAnimationLoop(E),E===null?zt.stop():zt.start()},ce.addEventListener("sessionstart",ft),ce.addEventListener("sessionend",kt),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(E,B);let q=ce.enabled===!0&&ce.isPresenting===!0,G=A!==null&&(O===null||q)&&A.begin(C,O);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(B),B=ce.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,B,O),b=xe.get(E,v.length),b.init(B),b.state.textureUnits=M.getTextureUnits(),v.push(b),qe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),De.setFromProjectionMatrix(qe,Zi,B.reversedDepth),Re=this.localClippingEnabled,lt=we.init(this.clippingPlanes,Re),T=j.get(E,w.length),T.init(),w.push(T),ce.enabled===!0&&ce.isPresenting===!0){let Se=C.xr.getDepthSensingMesh();Se!==null&&Nt(Se,B,-1/0,C.sortObjects)}Nt(E,B,0,C.sortObjects),T.finish(),C.sortObjects===!0&&T.sort($,ae),_t=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,_t&&le.addToRenderList(T,E),this.info.render.frame++,lt===!0&&we.beginShadows();let W=b.state.shadowsArray;if(de.render(W,E,B),lt===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&A.hasRenderPass())===!1){let Se=T.opaque,Ee=T.transmissive;if(b.setupLights(),B.isArrayCamera){let Oe=B.cameras;if(Ee.length>0)for(let Ue=0,it=Oe.length;Ue<it;Ue++){let ct=Oe[Ue];St(Se,Ee,E,ct)}_t&&le.render(E);for(let Ue=0,it=Oe.length;Ue<it;Ue++){let ct=Oe[Ue];Ct(T,E,ct,ct.viewport)}}else Ee.length>0&&St(Se,Ee,E,B),_t&&le.render(E),Ct(T,E,B)}O!==null&&V===0&&(M.updateMultisampleRenderTarget(O),M.updateRenderTargetMipmap(O)),G&&A.end(C),E.isScene===!0&&E.onAfterRender(C,E,B),oe.resetDefaultState(),k=-1,F=null,v.pop(),v.length>0?(b=v[v.length-1],M.setTextureUnits(b.state.textureUnits),lt===!0&&we.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?T=w[w.length-1]:T=null,I!==null&&I.renderEnd()};function Nt(E,B,q,G){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLightProbeGrid)b.pushLightProbeGrid(E);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||De.intersectsSprite(E)){G&&We.setFromMatrixPosition(E.matrixWorld).applyMatrix4(qe);let Se=ue.update(E),Ee=E.material;Ee.visible&&T.push(E,Se,Ee,q,We.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||De.intersectsObject(E))){let Se=ue.update(E),Ee=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),We.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),We.copy(Se.boundingSphere.center)),We.applyMatrix4(E.matrixWorld).applyMatrix4(qe)),Array.isArray(Ee)){let Oe=Se.groups;for(let Ue=0,it=Oe.length;Ue<it;Ue++){let ct=Oe[Ue],Be=Ee[ct.materialIndex];Be&&Be.visible&&T.push(E,Se,Be,q,We.z,ct)}}else Ee.visible&&T.push(E,Se,Ee,q,We.z,null)}}let ve=E.children;for(let Se=0,Ee=ve.length;Se<Ee;Se++)Nt(ve[Se],B,q,G)}function Ct(E,B,q,G){let{opaque:W,transmissive:ve,transparent:Se}=E;b.setupLightsView(q),lt===!0&&we.setGlobalState(C.clippingPlanes,q),G&&ge.viewport(Z.copy(G)),W.length>0&&On(W,B,q),ve.length>0&&On(ve,B,q),Se.length>0&&On(Se,B,q),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function St(E,B,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){let Be=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new vi(1,1,{generateMipmaps:!0,type:Be?Mr:ci,minFilter:Qi,samples:Math.max(4,xt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let ve=b.state.transmissionRenderTarget[G.id],Se=G.viewport||Z;ve.setSize(Se.z*C.transmissionResolutionScale,Se.w*C.transmissionResolutionScale);let Ee=C.getRenderTarget(),Oe=C.getActiveCubeFace(),Ue=C.getActiveMipmapLevel();C.setRenderTarget(ve),C.getClearColor(pe),Ae=C.getClearAlpha(),Ae<1&&C.setClearColor(16777215,.5),C.clear(),_t&&le.render(q);let it=C.toneMapping;C.toneMapping=ji;let ct=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),lt===!0&&we.setGlobalState(C.clippingPlanes,G),On(E,q,G),M.updateMultisampleRenderTarget(ve),M.updateRenderTargetMipmap(ve),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let At=0,nn=B.length;At<nn;At++){let Jt=B[At],{object:Pt,geometry:Nn,material:Ce,group:gi}=Jt;if(Ce.side===li&&Pt.layers.test(G.layers)){let Mt=Ce.side;Ce.side=Kn,Ce.needsUpdate=!0,Ft(Pt,q,G,Nn,Ce,gi),Ce.side=Mt,Ce.needsUpdate=!0,Be=!0}}Be===!0&&(M.updateMultisampleRenderTarget(ve),M.updateRenderTargetMipmap(ve))}C.setRenderTarget(Ee,Oe,Ue),C.setClearColor(pe,Ae),ct!==void 0&&(G.viewport=ct),C.toneMapping=it}function On(E,B,q){let G=B.isScene===!0?B.overrideMaterial:null;for(let W=0,ve=E.length;W<ve;W++){let Se=E[W],{object:Ee,geometry:Oe,group:Ue}=Se,it=Se.material;it.allowOverride===!0&&G!==null&&(it=G),Ee.layers.test(q.layers)&&Ft(Ee,B,q,Oe,it,Ue)}}function Ft(E,B,q,G,W,ve){E.onBeforeRender(C,B,q,G,W,ve),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(C,B,q,G,E,ve),W.transparent===!0&&W.side===li&&W.forceSinglePass===!1?(W.side=Kn,W.needsUpdate=!0,C.renderBufferDirect(q,B,G,W,E,ve),W.side=Ji,W.needsUpdate=!0,C.renderBufferDirect(q,B,G,W,E,ve),W.side=li):C.renderBufferDirect(q,B,G,W,E,ve),E.onAfterRender(C,B,q,G,W,ve)}function Sn(E,B,q){B.isScene!==!0&&(B=X);let G=R.get(E),W=b.state.lights,ve=b.state.shadowsArray,Se=W.state.version,Ee=ne.getParameters(E,W.state,ve,B,q,b.state.lightProbeGridArray),Oe=ne.getProgramCacheKey(Ee),Ue=G.programs;G.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,G.fog=B.fog;let it=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;G.envMap=z.get(E.envMap||G.environment,it),G.envMapRotation=G.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Ue===void 0&&(E.addEventListener("dispose",ze),Ue=new Map,G.programs=Ue);let ct=Ue.get(Oe);if(ct!==void 0){if(G.currentProgram===ct&&G.lightsStateVersion===Se)return dn(E,Ee),ct}else Ee.uniforms=ne.getUniforms(E),I!==null&&E.isNodeMaterial&&I.build(E,q,Ee),E.onBeforeCompile(Ee,C),ct=ne.acquireProgram(Ee,Oe),Ue.set(Oe,ct),G.uniforms=Ee.uniforms;let Be=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Be.clippingPlanes=we.uniform),dn(E,Ee),G.needsLights=To(E),G.lightsStateVersion=Se,G.needsLights&&(Be.ambientLightColor.value=W.state.ambient,Be.lightProbe.value=W.state.probe,Be.directionalLights.value=W.state.directional,Be.directionalLightShadows.value=W.state.directionalShadow,Be.spotLights.value=W.state.spot,Be.spotLightShadows.value=W.state.spotShadow,Be.rectAreaLights.value=W.state.rectArea,Be.ltc_1.value=W.state.rectAreaLTC1,Be.ltc_2.value=W.state.rectAreaLTC2,Be.pointLights.value=W.state.point,Be.pointLightShadows.value=W.state.pointShadow,Be.hemisphereLights.value=W.state.hemi,Be.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Be.spotLightMatrix.value=W.state.spotLightMatrix,Be.spotLightMap.value=W.state.spotLightMap,Be.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=b.state.lightProbeGridArray.length>0,G.currentProgram=ct,G.uniformsList=null,ct}function mi(E){if(E.uniformsList===null){let B=E.currentProgram.getUniforms();E.uniformsList=ca.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function dn(E,B){let q=R.get(E);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function _n(E,B){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(B.matrixWorld);for(let q=0,G=E.length;q<G;q++){let W=E[q];if(W.texture!==null&&W.boundingBox.containsPoint(y))return W}return null}function bn(E,B,q,G,W){B.isScene!==!0&&(B=X),M.resetTextureUnits();let ve=B.fog,Se=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?B.environment:null,Ee=O===null?C.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ht.workingColorSpace,Oe=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ue=z.get(G.envMap||Se,Oe),it=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ct=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Be=!!q.morphAttributes.position,At=!!q.morphAttributes.normal,nn=!!q.morphAttributes.color,Jt=ji;G.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Jt=C.toneMapping);let Pt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Nn=Pt!==void 0?Pt.length:0,Ce=R.get(G),gi=b.state.lights;if(lt===!0&&(Re===!0||E!==F)){let Ut=E===F&&G.id===k;we.setState(G,E,Ut)}let Mt=!1;G.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==gi.state.version||Ce.outputColorSpace!==Ee||W.isBatchedMesh&&Ce.batching===!1||!W.isBatchedMesh&&Ce.batching===!0||W.isBatchedMesh&&Ce.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ce.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ce.instancing===!1||!W.isInstancedMesh&&Ce.instancing===!0||W.isSkinnedMesh&&Ce.skinning===!1||!W.isSkinnedMesh&&Ce.skinning===!0||W.isInstancedMesh&&Ce.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ce.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ce.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ce.instancingMorph===!1&&W.morphTexture!==null||Ce.envMap!==Ue||G.fog===!0&&Ce.fog!==ve||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==we.numPlanes||Ce.numIntersection!==we.numIntersection)||Ce.vertexAlphas!==it||Ce.vertexTangents!==ct||Ce.morphTargets!==Be||Ce.morphNormals!==At||Ce.morphColors!==nn||Ce.toneMapping!==Jt||Ce.morphTargetsCount!==Nn||!!Ce.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,Ce.__version=G.version);let Ii=Ce.currentProgram;Mt===!0&&(Ii=Sn(G,B,W),I&&G.isNodeMaterial&&I.onUpdateProgram(G,Ii,Ce));let sr=!1,ns=!1,wo=!1,It=Ii.getUniforms(),rn=Ce.uniforms;if(ge.useProgram(Ii.program)&&(sr=!0,ns=!0,wo=!0),G.id!==k&&(k=G.id,ns=!0),Ce.needsLights){let Ut=_n(b.state.lightProbeGridArray,W);Ce.lightProbeGrid!==Ut&&(Ce.lightProbeGrid=Ut,ns=!0)}if(sr||F!==E){ge.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),It.setValue(U,"projectionMatrix",E.projectionMatrix),It.setValue(U,"viewMatrix",E.matrixWorldInverse);let rs=It.map.cameraPosition;rs!==void 0&&rs.setValue(U,ot.setFromMatrixPosition(E.matrixWorld)),xt.logarithmicDepthBuffer&&It.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&It.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),F!==E&&(F=E,ns=!0,wo=!0)}if(Ce.needsLights&&(gi.state.directionalShadowMap.length>0&&It.setValue(U,"directionalShadowMap",gi.state.directionalShadowMap,M),gi.state.spotShadowMap.length>0&&It.setValue(U,"spotShadowMap",gi.state.spotShadowMap,M),gi.state.pointShadowMap.length>0&&It.setValue(U,"pointShadowMap",gi.state.pointShadowMap,M)),W.isSkinnedMesh){It.setOptional(U,W,"bindMatrix"),It.setOptional(U,W,"bindMatrixInverse");let Ut=W.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),It.setValue(U,"boneTexture",Ut.boneTexture,M))}W.isBatchedMesh&&(It.setOptional(U,W,"batchingTexture"),It.setValue(U,"batchingTexture",W._matricesTexture,M),It.setOptional(U,W,"batchingIdTexture"),It.setValue(U,"batchingIdTexture",W._indirectTexture,M),It.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&It.setValue(U,"batchingColorTexture",W._colorsTexture,M));let is=q.morphAttributes;if((is.position!==void 0||is.normal!==void 0||is.color!==void 0)&&_e.update(W,q,Ii),(ns||Ce.receiveShadow!==W.receiveShadow)&&(Ce.receiveShadow=W.receiveShadow,It.setValue(U,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&B.environment!==null&&(rn.envMapIntensity.value=B.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=oE()),ns){if(It.setValue(U,"toneMappingExposure",C.toneMappingExposure),Ce.needsLights&&Ir(rn,wo),ve&&G.fog===!0&&Y.refreshFogUniforms(rn,ve),Y.refreshMaterialUniforms(rn,G,Fe,Ge,b.state.transmissionRenderTarget[E.id]),Ce.needsLights&&Ce.lightProbeGrid){let Ut=Ce.lightProbeGrid;rn.probesSH.value=Ut.texture,rn.probesMin.value.copy(Ut.boundingBox.min),rn.probesMax.value.copy(Ut.boundingBox.max),rn.probesResolution.value.copy(Ut.resolution)}ca.upload(U,mi(Ce),rn,M)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ca.upload(U,mi(Ce),rn,M),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&It.setValue(U,"center",W.center),It.setValue(U,"modelViewMatrix",W.modelViewMatrix),It.setValue(U,"normalMatrix",W.normalMatrix),It.setValue(U,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let Ut=G.uniformsGroups;for(let rs=0,Ao=Ut.length;rs<Ao;rs++){let Nm=Ut[rs];J.update(Nm,Ii),J.bind(Nm,Ii)}}return Ii}function Ir(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function To(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(E,B,q){let G=R.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),R.get(E.texture).__webglTexture=B,R.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:q,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){let q=R.get(E);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0};let En=U.createFramebuffer();this.setRenderTarget=function(E,B=0,q=0){O=E,H=B,V=q;let G=null,W=!1,ve=!1;if(E){let Ee=R.get(E);if(Ee.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(U.FRAMEBUFFER,Ee.__webglFramebuffer),Z.copy(E.viewport),Q.copy(E.scissor),D=E.scissorTest,ge.viewport(Z),ge.scissor(Q),ge.setScissorTest(D),k=-1;return}else if(Ee.__webglFramebuffer===void 0)M.setupRenderTarget(E);else if(Ee.__hasExternalTextures)M.rebindTextures(E,R.get(E.texture).__webglTexture,R.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let it=E.depthTexture;if(Ee.__boundDepthTexture!==it){if(it!==null&&R.has(it)&&(E.width!==it.image.width||E.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(E)}}let Oe=E.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ve=!0);let Ue=R.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ue[B])?G=Ue[B][q]:G=Ue[B],W=!0):E.samples>0&&M.useMultisampledRTT(E)===!1?G=R.get(E).__webglMultisampledFramebuffer:Array.isArray(Ue)?G=Ue[q]:G=Ue,Z.copy(E.viewport),Q.copy(E.scissor),D=E.scissorTest}else Z.copy(se).multiplyScalar(Fe).floor(),Q.copy(Pe).multiplyScalar(Fe).floor(),D=Ve;if(q!==0&&(G=En),ge.bindFramebuffer(U.FRAMEBUFFER,G)&&ge.drawBuffers(E,G),ge.viewport(Z),ge.scissor(Q),ge.setScissorTest(D),W){let Ee=R.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ee.__webglTexture,q)}else if(ve){let Ee=B;for(let Oe=0;Oe<E.textures.length;Oe++){let Ue=R.get(E.textures[Oe]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Oe,Ue.__webglTexture,q,Ee)}}else if(E!==null&&q!==0){let Ee=R.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ee.__webglTexture,q)}k=-1},this.readRenderTargetPixels=function(E,B,q,G,W,ve,Se,Ee=0){if(!(E&&E.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=R.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Oe=Oe[Se]),Oe){ge.bindFramebuffer(U.FRAMEBUFFER,Oe);try{let Ue=E.textures[Ee],it=Ue.format,ct=Ue.type;if(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ee),!xt.textureFormatReadable(it)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(ct)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-G&&q>=0&&q<=E.height-W&&U.readPixels(B,q,G,W,N.convert(it),N.convert(ct),ve)}finally{let Ue=O!==null?R.get(O).__webglFramebuffer:null;ge.bindFramebuffer(U.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(E,B,q,G,W,ve,Se,Ee=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=R.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Oe=Oe[Se]),Oe)if(B>=0&&B<=E.width-G&&q>=0&&q<=E.height-W){ge.bindFramebuffer(U.FRAMEBUFFER,Oe);let Ue=E.textures[Ee],it=Ue.format,ct=Ue.type;if(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ee),!xt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Be=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Be),U.bufferData(U.PIXEL_PACK_BUFFER,ve.byteLength,U.STREAM_READ),U.readPixels(B,q,G,W,N.convert(it),N.convert(ct),0);let At=O!==null?R.get(O).__webglFramebuffer:null;ge.bindFramebuffer(U.FRAMEBUFFER,At);let nn=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await gg(U,nn,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Be),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ve),U.deleteBuffer(Be),U.deleteSync(nn),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,q=0){let G=Math.pow(2,-q),W=Math.floor(E.image.width*G),ve=Math.floor(E.image.height*G),Se=B!==null?B.x:0,Ee=B!==null?B.y:0;M.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,Se,Ee,W,ve),ge.unbindTexture()};let tn=U.createFramebuffer(),Pi=U.createFramebuffer();this.copyTextureToTexture=function(E,B,q=null,G=null,W=0,ve=0){let Se,Ee,Oe,Ue,it,ct,Be,At,nn,Jt=E.isCompressedTexture?E.mipmaps[ve]:E.image;if(q!==null)Se=q.max.x-q.min.x,Ee=q.max.y-q.min.y,Oe=q.isBox3?q.max.z-q.min.z:1,Ue=q.min.x,it=q.min.y,ct=q.isBox3?q.min.z:0;else{let rn=Math.pow(2,-W);Se=Math.floor(Jt.width*rn),Ee=Math.floor(Jt.height*rn),E.isDataArrayTexture?Oe=Jt.depth:E.isData3DTexture?Oe=Math.floor(Jt.depth*rn):Oe=1,Ue=0,it=0,ct=0}G!==null?(Be=G.x,At=G.y,nn=G.z):(Be=0,At=0,nn=0);let Pt=N.convert(B.format),Nn=N.convert(B.type),Ce;B.isData3DTexture?(M.setTexture3D(B,0),Ce=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(M.setTexture2DArray(B,0),Ce=U.TEXTURE_2D_ARRAY):(M.setTexture2D(B,0),Ce=U.TEXTURE_2D),ge.activeTexture(U.TEXTURE0),ge.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),ge.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),ge.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);let gi=ge.getParameter(U.UNPACK_ROW_LENGTH),Mt=ge.getParameter(U.UNPACK_IMAGE_HEIGHT),Ii=ge.getParameter(U.UNPACK_SKIP_PIXELS),sr=ge.getParameter(U.UNPACK_SKIP_ROWS),ns=ge.getParameter(U.UNPACK_SKIP_IMAGES);ge.pixelStorei(U.UNPACK_ROW_LENGTH,Jt.width),ge.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Jt.height),ge.pixelStorei(U.UNPACK_SKIP_PIXELS,Ue),ge.pixelStorei(U.UNPACK_SKIP_ROWS,it),ge.pixelStorei(U.UNPACK_SKIP_IMAGES,ct);let wo=E.isDataArrayTexture||E.isData3DTexture,It=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){let rn=R.get(E),is=R.get(B),Ut=R.get(rn.__renderTarget),rs=R.get(is.__renderTarget);ge.bindFramebuffer(U.READ_FRAMEBUFFER,Ut.__webglFramebuffer),ge.bindFramebuffer(U.DRAW_FRAMEBUFFER,rs.__webglFramebuffer);for(let Ao=0;Ao<Oe;Ao++)wo&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,R.get(E).__webglTexture,W,ct+Ao),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,R.get(B).__webglTexture,ve,nn+Ao)),U.blitFramebuffer(Ue,it,Se,Ee,Be,At,Se,Ee,U.DEPTH_BUFFER_BIT,U.NEAREST);ge.bindFramebuffer(U.READ_FRAMEBUFFER,null),ge.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||R.has(E)){let rn=R.get(E),is=R.get(B);ge.bindFramebuffer(U.READ_FRAMEBUFFER,tn),ge.bindFramebuffer(U.DRAW_FRAMEBUFFER,Pi);for(let Ut=0;Ut<Oe;Ut++)wo?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,rn.__webglTexture,W,ct+Ut):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,rn.__webglTexture,W),It?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,is.__webglTexture,ve,nn+Ut):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,is.__webglTexture,ve),W!==0?U.blitFramebuffer(Ue,it,Se,Ee,Be,At,Se,Ee,U.COLOR_BUFFER_BIT,U.NEAREST):It?U.copyTexSubImage3D(Ce,ve,Be,At,nn+Ut,Ue,it,Se,Ee):U.copyTexSubImage2D(Ce,ve,Be,At,Ue,it,Se,Ee);ge.bindFramebuffer(U.READ_FRAMEBUFFER,null),ge.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else It?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Ce,ve,Be,At,nn,Se,Ee,Oe,Pt,Nn,Jt.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Ce,ve,Be,At,nn,Se,Ee,Oe,Pt,Jt.data):U.texSubImage3D(Ce,ve,Be,At,nn,Se,Ee,Oe,Pt,Nn,Jt):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ve,Be,At,Se,Ee,Pt,Nn,Jt.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ve,Be,At,Jt.width,Jt.height,Pt,Jt.data):U.texSubImage2D(U.TEXTURE_2D,ve,Be,At,Se,Ee,Pt,Nn,Jt);ge.pixelStorei(U.UNPACK_ROW_LENGTH,gi),ge.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Mt),ge.pixelStorei(U.UNPACK_SKIP_PIXELS,Ii),ge.pixelStorei(U.UNPACK_SKIP_ROWS,sr),ge.pixelStorei(U.UNPACK_SKIP_IMAGES,ns),ve===0&&B.generateMipmaps&&U.generateMipmap(Ce),ge.unbindTexture()},this.initRenderTarget=function(E){R.get(E).__webglFramebuffer===void 0&&M.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?M.setTextureCube(E,0):E.isData3DTexture?M.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?M.setTexture2DArray(E,0):M.setTexture2D(E,0),ge.unbindTexture()},this.resetState=function(){H=0,V=0,O=null,ge.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};var Cl=new L;function Ni(s,e,t,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;Cl.copy(e),Cl[n]=0,Cl.normalize();let c=.5*o/(o+a),h=1-Cl.angleTo(s)/l;return Math.sign(Cl[t])===1?h*c:a/(o+a)+c+c*(1-h)}var pu=class s extends xs{constructor(e=1,t=1,n=1,i=2,r=.1){let o=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new L,c=new L,h=new L(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,g=new L,m=.5/o;for(let _=0,x=0;_<u.length;_+=3,x+=2)switch(l.fromArray(u,_),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[_+0]=h.x*Math.sign(l.x)+c.x*r,u[_+1]=h.y*Math.sign(l.y)+c.y*r,u[_+2]=h.z*Math.sign(l.z)+c.z*r,d[_+0]=c.x,d[_+1]=c.y,d[_+2]=c.z,Math.floor(_/p)){case 0:g.set(1,0,0),f[x+0]=Ni(g,c,"z","y",r,n),f[x+1]=1-Ni(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),f[x+0]=1-Ni(g,c,"z","y",r,n),f[x+1]=1-Ni(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),f[x+0]=1-Ni(g,c,"x","z",r,e),f[x+1]=Ni(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),f[x+0]=1-Ni(g,c,"x","z",r,e),f[x+1]=1-Ni(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),f[x+0]=1-Ni(g,c,"x","y",r,e),f[x+1]=1-Ni(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),f[x+0]=Ni(g,c,"x","y",r,e),f[x+1]=1-Ni(g,c,"y","x",r,t);break}}static fromJSON(e){return new s(e.width,e.height,e.depth,e.segments,e.radius)}};var mu=class{geometries=new Map;get(e,t){let n=[...e,t].join(":"),i=this.geometries.get(n);return i||(i=new pu(e[0],e[1],e[2],10,t),this.geometries.set(n,i)),i}clear(){this.geometries.clear()}};function jg(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Gt,c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=$g(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let g=0;g<o[h].length;++g)f.push(o[h][g][d]);let p=$g(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function $g(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Bt(o,t,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<t;p++){let g=h.getComponent(d,p);a.setComponent(d+u,p,g)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function kf(s,e){if(e===_f)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===aa||e===Tl){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===aa)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Qg(s){let e=new Map,t=new Map,n=s.clone();return e_(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function e_(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)e_(s.children[n],e.children[n],t)}var Il=class extends no{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new qf(t)}),this.register(function(t){return new Yf(t)}),this.register(function(t){return new np(t)}),this.register(function(t){return new ip(t)}),this.register(function(t){return new rp(t)}),this.register(function(t){return new Kf(t)}),this.register(function(t){return new Jf(t)}),this.register(function(t){return new $f(t)}),this.register(function(t){return new jf(t)}),this.register(function(t){return new Xf(t)}),this.register(function(t){return new Qf(t)}),this.register(function(t){return new Zf(t)}),this.register(function(t){return new tp(t)}),this.register(function(t){return new ep(t)}),this.register(function(t){return new Gf(t)}),this.register(function(t){return new gu(t,mt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new gu(t,mt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new sp(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Wr.extractUrlBase(e);o=Wr.resolveURL(c,this.path)}else o=Wr.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new na(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===s_){try{o[mt.KHR_BINARY_GLTF]=new op(e)}catch(u){i&&i(u);return}r=JSON.parse(o[mt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new fp(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case mt.KHR_MATERIALS_UNLIT:o[u]=new Wf;break;case mt.KHR_DRACO_MESH_COMPRESSION:o[u]=new ap(r,this.dracoLoader);break;case mt.KHR_TEXTURE_TRANSFORM:o[u]=new lp;break;case mt.KHR_MESH_QUANTIZATION:o[u]=new cp;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function lE(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function cn(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Gf=class{constructor(e){this.parser=e,this.name=mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Ke(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Yn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ys(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new dl(h),c.distance=u;break;case"spot":c=new js(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Er(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Wf=class{constructor(){this.name=mt.KHR_MATERIALS_UNLIT}getMaterialType(){return Zn}extendParams(e,t,n){let i=[];e.color=new Ke(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Yn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Vt))}return Promise.all(i)}},Xf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},qf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return cn(this.parser,e,this.name)!==null?oi:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ke(r,r)}return Promise.all(i)}},Yf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return cn(this.parser,e,this.name)!==null?oi:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Zf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return cn(this.parser,e,this.name)!==null?oi:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Kf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SHEEN}getMaterialType(e){return cn(this.parser,e,this.name)!==null?oi:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Ke(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Yn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Vt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},Jf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return cn(this.parser,e,this.name)!==null?oi:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},$f=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_VOLUME}getMaterialType(e){return cn(this.parser,e,this.name)!==null?oi:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ke().setRGB(r[0],r[1],r[2],Yn),Promise.all(i)}},jf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IOR}getMaterialType(e){return cn(this.parser,e,this.name)!==null?oi:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Qf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return cn(this.parser,e,this.name)!==null?oi:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ke().setRGB(r[0],r[1],r[2],Yn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Vt)),Promise.all(i)}},ep=class{constructor(e){this.parser=e,this.name=mt.EXT_MATERIALS_BUMP}getMaterialType(e){return cn(this.parser,e,this.name)!==null?oi:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},tp=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return cn(this.parser,e,this.name)!==null?oi:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},np=class{constructor(e){this.parser=e,this.name=mt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},ip=class{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},rp=class{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},gu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},sp=class{constructor(e){this.name=mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Fi.TRIANGLES&&c.mode!==Fi.TRIANGLE_STRIP&&c.mode!==Fi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let p of u){let g=new Qe,m=new L,_=new an,x=new L(1,1,1),S=new ja(p.geometry,p.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,y),l.SCALE&&x.fromBufferAttribute(l.SCALE,y),S.setMatrixAt(y,g.compose(m,_,x));for(let y in l)if(y==="_COLOR_0"){let T=l[y];S.instanceColor=new _s(T.array,T.itemSize,T.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&p.geometry.setAttribute(y,l[y]);wn.prototype.copy.call(S,p),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},s_="glTF",Pl=12,t_={JSON:1313821514,BIN:5130562},op=class{constructor(e){this.name=mt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Pl),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==s_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Pl,r=new DataView(e,Pl),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===t_.JSON){let c=new Uint8Array(e,Pl+o,a);this.content=n.decode(c)}else if(l===t_.BIN){let c=Pl+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ap=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=up[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=up[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=ua[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let p in f.attributes){let g=f.attributes[p],m=l[p];m!==void 0&&(g.normalized=m)}u(f)},a,c,Yn,d)})})}},lp=class{constructor(){this.name=mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},cp=class{constructor(){this.name=mt.KHR_MESH_QUANTIZATION}},_u=class extends gr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,p=e*c,g=p-c,m=-2*f+3*d,_=f-d,x=1-m,S=_-d+u;for(let y=0;y!==a;y++){let T=o[g+y+a],b=o[g+y+l]*h,w=o[p+y+a],v=o[p+y]*h;r[y]=x*T+S*b+m*w+_*v}return r}},cE=new an,hp=class extends _u{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return cE.fromArray(r).normalize().toArray(r),r}},Fi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ua={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},n_={9728:sn,9729:on,9984:yh,9985:ra,9986:eo,9987:Qi},i_={33071:Oi,33648:Go,10497:ms},zf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},up={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ts={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},hE={CUBICSPLINE:void 0,LINEAR:Ys,STEP:qs},Hf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function uE(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new $i({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ji})),s.DefaultMaterial}function ro(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Er(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function dE(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function fE(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function pE(s){let e,t=s.extensions&&s.extensions[mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Vf(t.attributes):e=s.indices+":"+Vf(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Vf(s.targets[n]);return e}function Vf(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function dp(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function mE(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var gE=new Qe,fp=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new lE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new cl(this.options.manager):this.textureLoader=new pl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new na(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ro(r,a,i),Er(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[mt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Wr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=zf[i.type],a=ua[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Bt(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=zf[i.type],c=ua[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,g,m;if(f&&f!==u){let _=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count,S=t.cache.get(x);S||(g=new c(a,_*f,i.count*f/h),S=new Jo(g,f/h),t.cache.add(x,S)),m=new $o(S,l,d%f/h,p)}else a===null?g=new c(i.count*l):g=new c(a,d,i.count*l),m=new Bt(g,l,p);if(i.sparse!==void 0){let _=zf.SCALAR,x=ua[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,T=new x(o[1],S,i.sparse.count*_),b=new c(o[2],y,i.sparse.count*l);a!==null&&(m=new Bt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,v=T.length;w<v;w++){let A=T[w];if(m.setX(A,b[w*l]),l>=2&&m.setY(A,b[w*l+1]),l>=3&&m.setZ(A,b[w*l+2]),l>=4&&m.setW(A,b[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=n_[d.magFilter]||on,h.minFilter=n_[d.minFilter]||Qi,h.wrapS=i_[d.wrapS]||ms,h.wrapT=i_[d.wrapT]||ms,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==sn&&h.minFilter!==on,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(g){let m=new Pn(g);m.needsUpdate=!0,d(m)}),t.load(Wr.resolveURL(u,r.path),p,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Er(u,o),u.userData.mimeType=o.mimeType||mE(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[mt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[mt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[mt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new fr,si.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new ta,si.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return $i}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[mt.KHR_MATERIALS_UNLIT]){let u=i[mt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ke(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Yn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Vt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=li);let h=r.alphaMode||Hf.OPAQUE;if(h===Hf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Hf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Zn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ke(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Zn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Zn){let u=r.emissiveFactor;a.emissive=new Ke().setRGB(u[0],u[1],u[2],Yn)}return r.emissiveTexture!==void 0&&o!==Zn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Vt)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Er(u,r),t.associations.set(u,{materials:e}),r.extensions&&ro(i,u,r),u})}createUniqueName(e){let t=Ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return r_(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=pE(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[mt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=r_(new Gt,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?uE(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,p=h.length;f<p;f++){let g=h[f],m=o[f],_,x=c[f];if(m.mode===Fi.TRIANGLES||m.mode===Fi.TRIANGLE_STRIP||m.mode===Fi.TRIANGLE_FAN||m.mode===void 0)_=r.isSkinnedMesh===!0?new Ja(g,x):new yt(g,x),_.isSkinnedMesh===!0&&_.normalizeSkinWeights(),m.mode===Fi.TRIANGLE_STRIP?_.geometry=kf(_.geometry,Tl):m.mode===Fi.TRIANGLE_FAN&&(_.geometry=kf(_.geometry,aa));else if(m.mode===Fi.LINES)_=new Qa(g,x);else if(m.mode===Fi.LINE_STRIP)_=new Ks(g,x);else if(m.mode===Fi.LINE_LOOP)_=new el(g,x);else if(m.mode===Fi.POINTS)_=new zr(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(_.geometry.morphAttributes).length>0&&fE(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),Er(_,r),m.extensions&&ro(i,_,m),t.assignFinalMaterial(_),u.push(_)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&ro(i,u[0],r),u[0];let d=new qt;r.extensions&&ro(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new pn(ye.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new vs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Er(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new Qe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new $a(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],p=i.samplers[f.sampler],g=f.target,m=g.node,_=i.parameters!==void 0?i.parameters[p.input]:p.input,x=i.parameters!==void 0?i.parameters[p.output]:p.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",_)),l.push(this.getDependency("accessor",x)),c.push(p),h.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],p=u[2],g=u[3],m=u[4],_=[];for(let S=0,y=d.length;S<y;S++){let T=d[S],b=f[S],w=p[S],v=g[S],A=m[S];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let C=n._createAnimationTracks(T,b,w,v,A);if(C)for(let P=0;P<C.length;P++)_.push(C[P])}let x=new ll(r,void 0,_);return Er(x,i),x})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,gE)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,p=u[0];h.pivot=new L().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new jo:c.length>1?h=new qt:c.length===1?h=c[0]:h=new wn,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Er(h,r),r.extensions&&ro(n,h,r),r.matrix!==void 0){let u=new Qe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,ss({},u))}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new qt;n.name&&(r.name=i.createUniqueName(n.name)),Er(r,n),n.extensions&&ro(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(Qg(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof si||d instanceof Pn)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Ts[r.path]===Ts.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(Ts[r.path]){case Ts.weights:h=_r;break;case Ts.rotation:h=xr;break;case Ts.translation:case Ts.scale:h=vr;break;default:n.itemSize===1?h=_r:h=vr;break}let u=i.interpolation!==void 0?hE[i.interpolation]:Ys,d=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let g=new h(l[f]+"."+Ts[r.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=dp(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof xr?hp:_u;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function _E(s,e,t){let n=e.attributes,i=new $t;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){let h=dp(ua[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new L,l=new L;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let g=dp(ua[d.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new ri;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function r_(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=up[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return ht.workingColorSpace!==Yn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),Er(s,e),_E(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?dE(s,e.targets,t):s})}function qr(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function p_(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var fi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ul={duration:.5,overwrite:!1,delay:0},Ip,In,Wt,Bi=1e8,Ot=1/Bi,Mp=Math.PI*2,xE=Mp/4,vE=0,m_=Math.sqrt,yE=Math.cos,ME=Math.sin,yn=function(e){return typeof e=="string"},jt=function(e){return typeof e=="function"},Zr=function(e){return typeof e=="number"},Au=function(e){return typeof e>"u"},Ar=function(e){return typeof e=="object"},di=function(e){return e!==!1},Dp=function(){return typeof window<"u"},xu=function(e){return jt(e)||yn(e)},g_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},zn=Array.isArray,SE=/random\([^)]+\)/g,bE=/,\s*/g,o_=/(?:-?\.?\d|\.)+/gi,Lp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,lo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,pp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Op=/[+-]=-?[.\d]+/,EE=/[^,'"\[\]\s]+/gi,TE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Zt,Tr,Sp,Np,bi={},Su={},__,x_=function(e){return(Su=fa(e,bi))&&Hn},Ru=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Bl=function(e,t){return!t&&console.warn(e)},v_=function(e,t){return e&&(bi[e]=t)&&Su&&(Su[e]=t)||bi},kl=function(){return 0},wE={suppressEvents:!0,isStart:!0,kill:!1},vu={suppressEvents:!0,kill:!1},AE={suppressEvents:!0},Fp={},As=[],bp={},y_,hi={},mp={},a_=30,yu=[],Up="",Bp=function(e){var t=e[0],n,i;if(Ar(t)||jt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=yu.length;i--&&!yu[i].targetTest(t););n=yu[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Vp(e[i],n)))||e.splice(i,1);return e},Rs=function(e){return e._gsap||Bp(ki(e))[0]._gsap},kp=function(e,t,n){return(n=e[t])&&jt(n)?e[t]():Au(n)&&e.getAttribute&&e.getAttribute(t)||n},Jn=function(e,t){return(e=e.split(",")).forEach(t)||e},Qt=function(e){return Math.round(e*1e5)/1e5||0},Yt=function(e){return Math.round(e*1e7)/1e7||0},co=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},RE=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},bu=function(){var e=As.length,t=As.slice(0),n,i;for(bp={},As.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},zp=function(e){return!!(e._initted||e._startAt||e.add)},M_=function(e,t,n,i){As.length&&!In&&bu(),e.render(t,n,i||!!(In&&t<0&&zp(e))),As.length&&!In&&bu()},S_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(EE).length<2?t:yn(e)?e.trim():e},b_=function(e){return e},Ei=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},CE=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},fa=function(e,t){for(var n in t)e[n]=t[n];return e},l_=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ar(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Eu=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ol=function(e){var t=e.parent||Zt,n=e.keyframes?CE(zn(e.keyframes)):Ei;if(di(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},PE=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},E_=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Cu=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Cs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},so=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},IE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ep=function(e,t,n,i){return e._startAt&&(In?e._startAt.revert(vu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},DE=function s(e){return!e||e._ts&&s(e.parent)},c_=function(e){return e._repeat?pa(e._tTime,e=e.duration()+e._rDelay)*e:0},pa=function(e,t){var n=Math.floor(e=Yt(e/t));return e&&n===e?n-1:n},Tu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Pu=function(e){return e._end=Yt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ot)||0))},Iu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Yt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Pu(e),n._dirty||so(n,e)),e},T_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Tu(e.rawTime(),t),(!t._dur||Vl(0,t.totalDuration(),n)-t._tTime>Ot)&&t.render(n,!0)),so(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ot}},wr=function(e,t,n,i){return t.parent&&Cs(t),t._start=Yt((Zr(n)?n:n||e!==Zt?Ui(e,n,t):e._time)+t._delay),t._end=Yt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),E_(e,t,"_first","_last",e._sort?"_start":0),Tp(t)||(e._recent=t),i||T_(e,t),e._ts<0&&Iu(e,e._tTime),e},w_=function(e,t){return(bi.ScrollTrigger||Ru("scrollTrigger",t))&&bi.ScrollTrigger.create(t,e)},A_=function(e,t,n,i,r){if(Xp(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!In&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&y_!==ui.frame)return As.push(e),e._lazy=[r,i],1},LE=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Tp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},OE=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&LE(e)&&!(!e._initted&&Tp(e))||(e._ts<0||e._dp._ts<0)&&!Tp(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=Vl(0,e._tDur,t),h=pa(l,a),e._yoyo&&h&1&&(o=1-o),h!==pa(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||In||i||e._zTime===Ot||!t&&e._zTime){if(!e._initted&&A_(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?Ot:0),n||(n=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Ep(e,t,n,!0),e._onUpdate&&!n&&Si(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Si(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Cs(e,1),!n&&!In&&(Si(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},NE=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ma=function(e,t,n,i){var r=e._repeat,o=Yt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Yt(o*(r+1)+e._rDelay*r):o,a>0&&!i&&Iu(e,e._tTime=e._tDur*a),e.parent&&Pu(e),n||so(e.parent,e),e},h_=function(e){return e instanceof kn?so(e):ma(e,e._dur)},FE={_start:0,endTime:kl,totalDuration:kl},Ui=function s(e,t,n){var i=e.labels,r=e._recent||FE,o=e.duration()>=Bi?r.endTime(!1):e._dur,a,l,c;return yn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(zn(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Nl=function(e,t,n){var i=Zr(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=di(l.vars.inherit)&&l.parent;o.immediateRender=di(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new hn(t[0],o,t[r+1])},Ps=function(e,t){return e||e===0?t(e):t},Vl=function(e,t,n){return n<e?e:n>t?t:n},Dn=function(e,t){return!yn(e)||!(t=TE.exec(e))?"":t[1]},UE=function(e,t,n){return Ps(n,function(i){return Vl(e,t,i)})},wp=[].slice,R_=function(e,t){return e&&Ar(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ar(e[0]))&&!e.nodeType&&e!==Tr},BE=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return yn(i)&&!t||R_(i,1)?(r=n).push.apply(r,ki(i)):n.push(i)})||n},ki=function(e,t,n){return Wt&&!t&&Wt.selector?Wt.selector(e):yn(e)&&!n&&(Sp||!ga())?wp.call((t||Np).querySelectorAll(e),0):zn(e)?BE(e,n):R_(e)?wp.call(e,0):e?[e]:[]},Ap=function(e){return e=ki(e)[0]||Bl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ki(t,n.querySelectorAll?n:n===e?Bl("Invalid scope")||Np.createElement("div"):e)}},C_=function(e){return e.sort(function(){return .5-Math.random()})},P_=function(e){if(jt(e))return e;var t=Ar(e)?e:{each:e},n=oo(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,u=i;return yn(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(d,f,p){var g=(p||t).length,m=o[g],_,x,S,y,T,b,w,v,A;if(!m){if(A=t.grid==="auto"?0:(t.grid||[1,Bi])[1],!A){for(w=-Bi;w<(w=p[A++].getBoundingClientRect().left)&&A<g;);A<g&&A--}for(m=o[g]=[],_=l?Math.min(A,g)*h-.5:i%A,x=A===Bi?0:l?g*u/A-.5:i/A|0,w=0,v=Bi,b=0;b<g;b++)S=b%A-_,y=x-(b/A|0),m[b]=T=c?Math.abs(c==="y"?y:S):m_(S*S+y*y),T>w&&(w=T),T<v&&(v=T);i==="random"&&C_(m),m.max=w-v,m.min=v,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(A>g?g-1:c?c==="y"?g/A:A:Math.max(A,g/A))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Dn(t.amount||t.each)||0,n=n&&g<0?$E(n):n}return g=(m[d]-m.min)/m.max||0,Yt(m.b+(n?n(g):g)*m.v)+m.u}},Rp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Yt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Zr(n)?0:Dn(n))}},I_=function(e,t){var n=zn(e),i,r;return!n&&Ar(e)&&(i=n=e.radius||Bi,e.values?(e=ki(e.values),(r=!Zr(e[0]))&&(i*=i)):e=Rp(e.increment)),Ps(t,n?jt(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Bi,h=0,u=e.length,d,f;u--;)r?(d=e[u].x-a,f=e[u].y-l,d=d*d+f*f):d=Math.abs(e[u]-a),d<c&&(c=d,h=u);return h=!i||c<=i?e[h]:o,r||h===o||Zr(o)?h:h+Dn(o)}:Rp(e))},D_=function(e,t,n,i){return Ps(zn(e)?!t:n===!0?!!(n=0):!i,function(){return zn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},kE=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},zE=function(e,t){return function(n){return e(parseFloat(n))+(t||Dn(n))}},HE=function(e,t,n){return O_(e,t,0,1,n)},L_=function(e,t,n){return Ps(n,function(i){return e[~~t(i)]})},VE=function s(e,t,n){var i=t-e;return zn(e)?L_(e,s(0,e.length),t):Ps(n,function(r){return(i+(r-e)%i)%i+e})},GE=function s(e,t,n){var i=t-e,r=i*2;return zn(e)?L_(e,s(0,e.length-1),t):Ps(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},_a=function(e){return e.replace(SE,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(bE);return D_(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},O_=function(e,t,n,i,r){var o=t-e,a=i-n;return Ps(r,function(l){return n+((l-e)/o*a||0)})},WE=function s(e,t,n,i){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var o=yn(e),a={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(zn(e)&&!zn(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(s(e[c-1],e[c]));u--,r=function(p){p*=u;var g=Math.min(d,~~p);return h[g](p-g)},n=t}else i||(e=fa(zn(e)?[]:{},e));if(!h){for(l in t)Gp.call(a,e,l,"get",t[l]);r=function(p){return Zp(p,a)||(o?e.p:e)}}}return Ps(n,r)},u_=function(e,t,n){var i=e.labels,r=Bi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Si=function(e,t,n){var i=e.vars,r=i[t],o=Wt,a=e._ctx,l,c,h;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&As.length&&bu(),a&&(Wt=a),h=l?r.apply(c,l):r.call(c),Wt=o,h},Dl=function(e){return Cs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!In),e.progress()<1&&Si(e,"onInterrupt"),e},da,N_=[],F_=function(e){if(e)if(e=!e.name&&e.default||e,Dp()||e.headless){var t=e.name,n=jt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:kl,render:Zp,add:Gp,kill:aT,modifier:oT,rawVars:0},o={targetTest:0,get:0,getSetter:Du,aliases:{},register:0};if(ga(),e!==i){if(hi[t])return;Ei(i,Ei(Eu(e,r),o)),fa(i.prototype,fa(r,Eu(e,o))),hi[i.prop=t]=i,e.targetTest&&(yu.push(i),Fp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}v_(t,i),e.register&&e.register(Hn,i,$n)}else N_.push(e)},Lt=255,Ll={aqua:[0,Lt,Lt],lime:[0,Lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Lt],navy:[0,0,128],white:[Lt,Lt,Lt],olive:[128,128,0],yellow:[Lt,Lt,0],orange:[Lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Lt,0,0],pink:[Lt,192,203],cyan:[0,Lt,Lt],transparent:[Lt,Lt,Lt,0]},gp=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Lt+.5|0},U_=function(e,t,n){var i=e?Zr(e)?[e>>16,e>>8&Lt,e&Lt]:0:Ll.black,r,o,a,l,c,h,u,d,f,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ll[e])i=Ll[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Lt,i&Lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Lt,e&Lt]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(o_),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=gp(l+1/3,r,o),i[1]=gp(l,r,o),i[2]=gp(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(Lp),n&&i.length<4&&(i[3]=1),i}else i=e.match(o_)||Ll.transparent;i=i.map(Number)}return t&&!p&&(r=i[0]/Lt,o=i[1]/Lt,a=i[2]/Lt,u=Math.max(r,o,a),d=Math.min(r,o,a),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===r?(o-a)/f+(o<a?6:0):u===o?(a-r)/f+2:(r-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},B_=function(e){var t=[],n=[],i=-1;return e.split(Yr).forEach(function(r){var o=r.match(lo)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},d_=function(e,t,n){var i="",r=(e+i).match(Yr),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return e;if(r=r.map(function(d){return(d=U_(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=B_(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(Yr,"1").split(lo),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=e.split(Yr),u=c.length-1;a<u;a++)i+=c[a]+r[a];return i+c[u]},Yr=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ll)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),XE=/hsl[a]?\(/,Hp=function(e){var t=e.join(" "),n;if(Yr.lastIndex=0,Yr.test(t))return n=XE.test(t),e[1]=d_(e[1],n),e[0]=d_(e[0],n,B_(e[1])),!0},zl,ui=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,u,d,f,p=function g(m){var _=s()-i,x=m===!0,S,y,T,b;if((_>e||_<0)&&(n+=_-t),i+=_,T=i-n,S=T-o,(S>0||x)&&(b=++u.frame,d=T-u.time*1e3,u.time=T=T/1e3,o+=S+(S>=r?4:r-S),y=1),x||(l=c(g)),y)for(f=0;f<a.length;f++)a[f](T,d,b,m)};return u={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){__&&(!Sp&&Dp()&&(Tr=Sp=window,Np=Tr.document||{},bi.gsap=Hn,(Tr.gsapVersions||(Tr.gsapVersions=[])).push(Hn.version),x_(Su||Tr.GreenSockGlobals||!Tr.gsap&&Tr||{}),N_.forEach(F_)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},zl=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),zl=0,c=kl},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){r=1e3/(m||240),o=u.time*1e3+r},add:function(m,_,x){var S=_?function(y,T,b,w){m(y,T,b,w),u.remove(S)}:m;return u.remove(m),a[x?"unshift":"push"](S),ga(),S},remove:function(m,_){~(_=a.indexOf(m))&&a.splice(_,1)&&f>=_&&f--},_listeners:a},u})(),ga=function(){return!zl&&ui.wake()},vt={},qE=/^[\d.\-M][\d.\-,\s]/,YE=/["']/g,ZE=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(YE,"").trim():+c,i=l.substr(a+1).trim();return t},KE=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},JE=function(e){var t=(e+"").split("("),n=vt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[ZE(t[1])]:KE(e).split(",").map(S_)):vt._CE&&qE.test(e)?vt._CE("",e):n},$E=function(e){return function(t){return 1-e(1-t)}},oo=function(e,t){return e&&(jt(e)?e:vt[e]||JE(e))||t},ho=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Jn(e,function(a){vt[a]=bi[a]=r,vt[o=a.toLowerCase()]=n;for(var l in r)vt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=vt[a+"."+l]=r[l]}),r},k_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},_p=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/Mp*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*ME((h-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:k_(a);return r=Mp/r,l.config=function(c,h){return s(e,c,h)},l},xp=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:k_(n);return i.config=function(r){return s(e,r)},i};Jn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;ho(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});vt.Linear.easeNone=vt.none=vt.Linear.easeIn;ho("Elastic",_p("in"),_p("out"),_p());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};ho("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);ho("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});ho("Circ",function(s){return-(m_(1-s*s)-1)});ho("Sine",function(s){return s===1?1:-yE(s*xE)+1});ho("Back",xp("in"),xp("out"),xp());vt.SteppedEase=vt.steps=bi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-Ot;return function(a){return((i*Vl(0,o,a)|0)+r)*n}}};Ul.ease=vt["quad.out"];Jn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Up+=s+","+s+"Params,"});var Vp=function(e,t){this.id=vE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:kp,this.set=t?t.getSetter:Du},Hl=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ma(this,+t.duration,1,1),this.data=t.data,Wt&&(this._ctx=Wt,Wt.data.push(this)),zl||ui.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ma(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ga(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Iu(this,n),!r._dp||r.parent||T_(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&wr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ot||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),M_(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+c_(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+c_(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?pa(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ot?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Tu(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ot?0:this._rts,this.totalTime(Vl(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Pu(this),IE(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ga(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ot&&(this._tTime-=Ot)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Yt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&wr(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(di(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Tu(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=AE);var i=In;return In=n,zp(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),In=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,h_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,h_(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Ui(this,n),di(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,di(i)),this._dur||(this._zTime=-Ot),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ot:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ot,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ot)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=jt(n)?n:b_,l=function(){var h=i.then;i.then=null,r&&r(),jt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Dl(this)},s})();Ei(Hl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ot,_prom:0,_ps:!1,_rts:1});var kn=(function(s){p_(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=di(n.sortChildren),Zt&&wr(n.parent||Zt,qr(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&w_(qr(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return Nl(0,arguments,this),this},t.from=function(i,r,o){return Nl(1,arguments,this),this},t.fromTo=function(i,r,o,a){return Nl(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,Ol(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new hn(i,r,Ui(this,o),1),this},t.call=function(i,r,o){return wr(this,hn.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new hn(i,o,Ui(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,Ol(o).immediateRender=di(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},t.staggerFromTo=function(i,r,o,a,l,c,h,u){return a.startAt=o,Ol(a).immediateRender=di(a.immediateRender),this.staggerTo(i,r,a,l,c,h,u)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Yt(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,p,g,m,_,x,S,y,T,b,w;if(this!==Zt&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,y=this._start,S=this._ts,_=!S,u&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(d=Yt(h%m),h===l?(g=this._repeat,d=c):(T=Yt(h/m),g=~~T,g&&g===T&&(d=c,g--),d>c&&(d=c)),T=pa(this._tTime,m),!a&&this._tTime&&T!==g&&this._tTime-T*m-this._dur<=0&&(T=g),b&&g&1&&(d=c-d,w=1),g!==T&&!this._lock){var v=b&&T&1,A=v===(b&&g&1);if(g<T&&(v=!v),a=v?0:h%c?c:h,this._lock=1,this.render(a||(w?0:Yt(g*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Si(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,T=g),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,A&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!_)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=NE(this,Yt(a),Yt(d)),x&&(h-=d-(d=x._start))),this._tTime=h,this._time=d,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!T&&(Si(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(p=f._next,(f._act||d>=f._start)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,o),d!==this._time||!this._ts&&!_){x=0,p&&(h+=this._zTime=-Ot);break}}f=p}else{f=this._last;for(var C=i<0?i:d;f;){if(p=f._prev,(f._act||C<=f._end)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,r,o||In&&zp(f)),d!==this._time||!this._ts&&!_){x=0,p&&(h+=this._zTime=C?-Ot:Ot);break}}f=p}}if(x&&!r&&(this.pause(),x.render(d>=a?0:-Ot)._zTime=d>=a?1:-1,this._ts))return this._start=y,Pu(this),this.render(i,r,o);this._onUpdate&&!r&&Si(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Cs(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(Si(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(Zr(r)||(r=Ui(this,r,i)),!(i instanceof Hl)){if(zn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(yn(i))return this.addLabel(i,r);if(jt(i))i=hn.delayedCall(0,i);else return this}return this!==i?wr(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Bi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof hn?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return yn(i)?this.removeLabel(i):jt(i)?this.killTweensOf(i):(i.parent===this&&Cu(this,i),i===this._recent&&(this._recent=this._last),so(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Yt(ui.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Ui(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=hn.delayedCall(0,r||kl,o);return a.data="isPause",this._hasPause=1,wr(this,a,Ui(this,i))},t.removePause=function(i){var r=this._first;for(i=Ui(this,i);r;)r._start===i&&r.data==="isPause"&&Cs(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ws!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=ki(i),l=this._first,c=Zr(r),h;l;)l instanceof hn?RE(l._targets,a)&&(c?(!ws||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=Ui(o,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,p=hn.to(o,Ei({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ot,onStart:function(){if(o.pause(),!f){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&ma(p,m,0,1).render(p._time,!0,!0),f=1}h&&h.apply(p,u||[])}},r));return d?p.render(0):p},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,Ei({startAt:{time:Ui(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),u_(this,Ui(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),u_(this,Ui(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ot)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Yt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return so(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),so(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=Bi,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,wr(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=Yt(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;ma(o,o===Zt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Zt._ts&&(M_(Zt,Tu(i,Zt)),y_=ui.frame),ui.frame>=a_){a_+=fi.autoSleep||120;var r=Zt._first;if((!r||!r._ts)&&fi.autoSleep&&ui._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ui.sleep()}}},e})(Hl);Ei(kn.prototype,{_lock:0,_hasPause:0,_forcing:0});var jE=function(e,t,n,i,r,o,a){var l=new $n(this._pt,e,t,0,1,Yp,null,r),c=0,h=0,u,d,f,p,g,m,_,x;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=_a(i)),o&&(x=[n,i],o(x,e,t),n=x[0],i=x[1]),d=n.match(pp)||[];u=pp.exec(i);)p=u[0],g=i.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),p!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:p.charAt(1)==="="?co(m,p)-m:parseFloat(p)-m,m:f&&f<4?Math.round:0},c=pp.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Op.test(i)||_)&&(l.e=0),this._pt=l,l},Gp=function(e,t,n,i,r,o,a,l,c,h){jt(i)&&(i=i(r||0,e,o));var u=e[t],d=n!=="get"?n:jt(u)?c?e[t.indexOf("set")||!jt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,f=jt(u)?c?iT:V_:qp,p;if(yn(i)&&(~i.indexOf("random(")&&(i=_a(i)),i.charAt(1)==="="&&(p=co(d,i)+(Dn(d)||0),(p||p===0)&&(i=p))),!h||d!==i||Cp)return!isNaN(d*i)&&i!==""?(p=new $n(this._pt,e,t,+d||0,i-(d||0),typeof u=="boolean"?sT:G_,0,f),c&&(p.fp=c),a&&p.modifier(a,this,e),this._pt=p):(!u&&!(t in e)&&Ru(t,i),jE.call(this,e,t,d,i,f,l||fi.stringFilter,c))},QE=function(e,t,n,i,r){if(jt(e)&&(e=Fl(e,r,t,n,i)),!Ar(e)||e.style&&e.nodeType||zn(e)||g_(e))return yn(e)?Fl(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=Fl(e[a],r,t,n,i);return o},Wp=function(e,t,n,i,r,o){var a,l,c,h;if(hi[e]&&(a=new hi[e]).init(r,a.rawVars?t[e]:QE(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new $n(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==da))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},ws,Cp,Xp=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,p=e._dur,g=e._startAt,m=e._targets,_=e.parent,x=_&&_.data==="nested"?_.vars.targets:m,S=e._overwrite==="auto"&&!Ip,y=e.timeline,T=i.easeReverse||u,b,w,v,A,C,P,I,H,V,O,k,F,Z;if(y&&(!d||!r)&&(r="none"),e._ease=oo(r,Ul.ease),e._rEase=T&&(oo(T)||e._ease),e._from=!y&&!!i.runBackwards,e._from&&(e.ratio=1),!y||d&&!i.stagger){if(H=m[0]?Rs(m[0]).harness:0,F=H&&i[H.prop],b=Eu(i,Fp),g&&(g._zTime<0&&g.progress(1),t<0&&h&&a&&!f?g.render(-1,!0):g.revert(h&&p?vu:wE),g._lazy=0),o){if(Cs(e._startAt=hn.set(m,Ei({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!g&&di(l),startAt:null,delay:0,onUpdate:c&&function(){return Si(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(In||!a&&!f)&&e._startAt.revert(vu),a&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&p&&!g){if(t&&(a=!1),v=Ei({overwrite:!1,data:"isFromStart",lazy:a&&!g&&di(l),immediateRender:a,stagger:0,parent:_},b),F&&(v[H.prop]=F),Cs(e._startAt=hn.set(m,v)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(In?e._startAt.revert(vu):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,Ot,Ot);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&di(l)||l&&!p,w=0;w<m.length;w++){if(C=m[w],I=C._gsap||Bp(m)[w]._gsap,e._ptLookup[w]=O={},bp[I.id]&&As.length&&bu(),k=x===m?w:x.indexOf(C),H&&(V=new H).init(C,F||b,e,k,x)!==!1&&(e._pt=A=new $n(e._pt,C,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(Q){O[Q]=A}),V.priority&&(P=1)),!H||F)for(v in b)hi[v]&&(V=Wp(v,b,e,k,C,x))?V.priority&&(P=1):O[v]=A=Gp.call(e,C,v,"get",b[v],k,x,0,i.stringFilter);e._op&&e._op[w]&&e.kill(C,e._op[w]),S&&e._pt&&(ws=e,Zt.killTweensOf(C,O,e.globalTime(t)),Z=!e.parent,ws=0),e._pt&&l&&(bp[I.id]=1)}P&&Kp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Z,d&&t<=0&&y.render(Bi,!0,!0)},eT=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(h=d[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Cp=1,e.vars[t]="+=0",Xp(e,a),Cp=0,l?Bl(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Qt(n)+Dn(u.e)),u.b&&(u.b=h.s+Dn(u.b))},tT=function(e,t){var n=e[0]?Rs(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=fa({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},nT=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(zn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},Fl=function(e,t,n,i,r){return jt(e)?e.call(t,n,i,r):yn(e)&&~e.indexOf("random(")?_a(e):e},z_=Up+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",H_={};Jn(z_+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return H_[s]=1});var hn=(function(s){p_(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Ol(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,p=l.keyframes,g=l.defaults,m=l.scrollTrigger,_=i.parent||Zt,x=(zn(n)||g_(n)?Zr(n[0]):"length"in i)?[n]:ki(n),S,y,T,b,w,v,A,C;if(a._targets=x.length?Bp(x):Bl("GSAP target "+n+" not found. https://gsap.com",!fi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,p||d||xu(c)||xu(h)){i=a.vars;var P=i.easeReverse||i.yoyoEase;if(S=a.timeline=new kn({data:"nested",defaults:g||{},targets:_&&_.data==="nested"?_.vars.targets:x}),S.kill(),S.parent=S._dp=qr(a),S._start=0,d||xu(c)||xu(h)){if(b=x.length,A=d&&P_(d),Ar(d))for(w in d)~z_.indexOf(w)&&(C||(C={}),C[w]=d[w]);for(y=0;y<b;y++)T=Eu(i,H_),T.stagger=0,P&&(T.easeReverse=P),C&&fa(T,C),v=x[y],T.duration=+Fl(c,qr(a),y,v,x),T.delay=(+Fl(h,qr(a),y,v,x)||0)-a._delay,!d&&b===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),S.to(v,T,A?A(y,v,x):0),S._ease=vt.none;S.duration()?c=h=0:a.timeline=0}else if(p){Ol(Ei(S.vars.defaults,{ease:"none"})),S._ease=oo(p.ease||i.ease||"none");var I=0,H,V,O;if(zn(p))p.forEach(function(k){return S.to(x,k,">")}),S.duration();else{T={};for(w in p)w==="ease"||w==="easeEach"||nT(w,p[w],T,p.easeEach);for(w in T)for(H=T[w].sort(function(k,F){return k.t-F.t}),I=0,y=0;y<H.length;y++)V=H[y],O={ease:V.e,duration:(V.t-(y?H[y-1].t:0))/100*c},O[w]=V.v,S.to(x,O,I),I+=O.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return f===!0&&!Ip&&(ws=qr(a),Zt.killTweensOf(x),ws=0),wr(_,qr(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!p&&a._start===Yt(_._time)&&di(u)&&DE(qr(a))&&_.data!=="nested")&&(a._tTime=-Ot,a.render(Math.max(0,-h)||0)),m&&w_(qr(a),m),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-Ot&&!h?l:i<Ot?0:i,d,f,p,g,m,_,x,S;if(!c)OE(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,o);if(d=Yt(u%g),u===l?(p=this._repeat,d=c):(m=Yt(u/g),p=~~m,p&&p===m?(d=c,p--):d>c&&(d=c)),_=this._yoyo&&p&1,_&&(d=c-d),m=pa(this._tTime,g),d===a&&!o&&this._initted&&p===m)return this._tTime=u,this;p!==m&&this.vars.repeatRefresh&&!_&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(Yt(g*p),!0).invalidate()._lock=0)}if(!this._initted){if(A_(this,h?i:d,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var y=d<a;if(y!==this._inv){var T=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(y?-1:1)/T:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(d/c);if(this._from&&(this.ratio=x=1-x),this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&u&&!r&&!m&&(Si(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(x,f.d),f=f._next;S&&S.render(i<0?i:S._dur*S._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Ep(this,i,r,o),Si(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!r&&this.parent&&Si(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Ep(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Cs(this,1),!r&&!(h&&!a)&&(u||a||_)&&(Si(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){zl||ui.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Xp(this,c),h=this._ease(c/this._dur),eT(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(Iu(this,0),this.parent||E_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Dl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!In),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,ws&&ws.vars.overwrite!==!0)._first||Dl(this),this.parent&&o!==this.timeline.totalDuration()&&ma(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ki(i):a,c=this._ptLookup,h=this._pt,u,d,f,p,g,m,_;if((!r||r==="all")&&PE(a,l))return r==="all"&&(this._pt=0),Dl(this);for(u=this._op=this._op||[],r!=="all"&&(yn(r)&&(g={},Jn(r,function(x){return g[x]=1}),r=g),r=tT(a,r)),_=a.length;_--;)if(~l.indexOf(a[_])){d=c[_],r==="all"?(u[_]=r,p=d,f={}):(f=u[_]=u[_]||{},p=r);for(g in p)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Cu(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&Dl(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Nl(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return Nl(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Zt.killTweensOf(i,r,o)},e})(Hl);Ei(hn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Jn("staggerTo,staggerFrom,staggerFromTo",function(s){hn[s]=function(){var e=new kn,t=wp.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var qp=function(e,t,n){return e[t]=n},V_=function(e,t,n){return e[t](n)},iT=function(e,t,n,i){return e[t](i.fp,n)},rT=function(e,t,n){return e.setAttribute(t,n)},Du=function(e,t){return jt(e[t])?V_:Au(e[t])&&e.setAttribute?rT:qp},G_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},sT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Yp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Zp=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},oT=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},aT=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Cu(this,t,"_pt"):t.dep||(n=1),t=i;return!n},lT=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Kp=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},$n=(function(){function s(t,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||G_,this.d=l||this,this.set=c||qp,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=lT,this.m=n,this.mt=r,this.tween=i},s})();Jn(Up+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Fp[s]=1});bi.TweenMax=bi.TweenLite=hn;bi.TimelineLite=bi.TimelineMax=kn;Zt=new kn({sortChildren:!1,defaults:Ul,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});fi.stringFilter=Hp;var ao=[],Mu={},cT=[],f_=0,hT=0,vp=function(e){return(Mu[e]||cT).map(function(t){return t()})},Pp=function(){var e=Date.now(),t=[];e-f_>2&&(vp("matchMediaInit"),ao.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Tr.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),vp("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),f_=e,vp("matchMedia"))},W_=(function(){function s(t,n){this.selector=n&&Ap(n),this.data=[],this._r=[],this.isReverted=!1,this.id=hT++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){jt(n)&&(r=i,i=n,n=jt);var o=this,a=function(){var c=Wt,h=o.selector,u;return c&&c!==o&&c.data.push(o),r&&(o.selector=Ap(r)),Wt=o,u=i.apply(o,arguments),jt(u)&&o._r.push(u),Wt=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===jt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Wt;Wt=null,n(this),Wt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof hn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof kn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof hn)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=ao.length;o--;)ao[o].id===this.id&&ao.splice(o,1)},e.revert=function(n){this.kill(n||{})},s})(),uT=(function(){function s(t){this.contexts=[],this.scope=t,Wt&&Wt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Ar(n)||(n={matches:n});var o=new W_(0,r||this.scope),a=o.conditions={},l,c,h;Wt&&!o.selector&&(o.selector=Wt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Tr.matchMedia(n[c]),l&&(ao.indexOf(o)<0&&ao.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Pp):l.addEventListener("change",Pp)));return h&&i(o,function(u){return o.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),wu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return F_(i)})},timeline:function(e){return new kn(e)},getTweensOf:function(e,t){return Zt.getTweensOf(e,t)},getProperty:function(e,t,n,i){yn(e)&&(e=ki(e)[0]);var r=Rs(e||{}).get,o=n?b_:S_;return n==="native"&&(n=""),e&&(t?o((hi[t]&&hi[t].get||r)(e,t,n,i)):function(a,l,c){return o((hi[a]&&hi[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ki(e),e.length>1){var i=e.map(function(h){return Hn.quickSetter(h,t,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}e=e[0]||{};var o=hi[t],a=Rs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;da._pt=0,u.init(e,n?h+n:h,da,0,[e]),u.render(1,u),da._pt&&Zp(1,da)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,r=Hn.to(e,Ei((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(t,l,c,h)};return o.tween=r,o},isTweening:function(e){return Zt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=oo(e.ease,Ul.ease)),l_(Ul,e||{})},config:function(e){return l_(fi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!hi[a]&&!bi[a]&&Bl(t+" effect requires "+a+" plugin.")}),mp[t]=function(a,l,c){return n(ki(a),Ei(l||{},r),c)},o&&(kn.prototype[t]=function(a,l,c){return this.add(mp[t](a,Ar(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){vt[e]=oo(t)},parseEase:function(e,t){return arguments.length?oo(e,t):vt},getById:function(e){return Zt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new kn(e),i,r;for(n.smoothChildTiming=di(e.smoothChildTiming),Zt.remove(n),n._dp=0,n._time=n._tTime=Zt._time,i=Zt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof hn&&i.vars.onComplete===i._targets[0]))&&wr(n,i,i._start-i._delay),i=r;return wr(Zt,n,0),n},context:function(e,t){return e?new W_(e,t):Wt},matchMedia:function(e){return new uT(e)},matchMediaRefresh:function(){return ao.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Pp()},addEventListener:function(e,t){var n=Mu[e]||(Mu[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Mu[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:VE,wrapYoyo:GE,distribute:P_,random:D_,snap:I_,normalize:HE,getUnit:Dn,clamp:UE,splitColor:U_,toArray:ki,selector:Ap,mapRange:O_,pipe:kE,unitize:zE,interpolate:WE,shuffle:C_},install:x_,effects:mp,ticker:ui,updateRoot:kn.updateRoot,plugins:hi,globalTimeline:Zt,core:{PropTween:$n,globals:v_,Tween:hn,Timeline:kn,Animation:Hl,getCache:Rs,_removeLinkedListItem:Cu,reverting:function(){return In},context:function(e){return e&&Wt&&(Wt.data.push(e),e._ctx=Wt),Wt},suppressOverwrites:function(e){return Ip=e}}};Jn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return wu[s]=hn[s]});ui.add(kn.updateRoot);da=wu.to({},{duration:0});var dT=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},fT=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=dT(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},yp=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(yn(r)&&(l={},Jn(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}fT(a,r)}}}},Hn=wu.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)In?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},yp("roundProps",Rp),yp("modifiers"),yp("snap",I_))||wu;hn.version=kn.version=Hn.version="3.15.0";__=1;Dp()&&ga();var pT=vt.Power0,mT=vt.Power1,gT=vt.Power2,_T=vt.Power3,xT=vt.Power4,vT=vt.Linear,yT=vt.Quad,MT=vt.Cubic,ST=vt.Quart,bT=vt.Quint,ET=vt.Strong,TT=vt.Elastic,wT=vt.Back,AT=vt.SteppedEase,RT=vt.Bounce,CT=vt.Sine,PT=vt.Expo,IT=vt.Circ;var X_,Is,va,tm,mo,DT,q_,nm,LT=function(){return typeof window<"u"},Jr={},po=180/Math.PI,ya=Math.PI/180,xa=Math.atan2,Y_=1e8,im=/([A-Z])/g,OT=/(left|right|width|margin|padding|x)/i,NT=/[\s,\(]\S/,Rr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},$p=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},FT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},UT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},BT=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},kT=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},tx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},nx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},zT=function(e,t,n){return e.style[t]=n},HT=function(e,t,n){return e.style.setProperty(t,n)},VT=function(e,t,n){return e._gsap[t]=n},GT=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},WT=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},XT=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Kt="transform",pi=Kt+"Origin",qT=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in Jr&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Rr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Kr(i,a)}):this.tfm[e]=o.x?o[e]:Kr(i,e),e===pi&&(this.tfm.zOrigin=o.zOrigin);else return Rr.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Kt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(pi,t,"")),e=Kt}(r||t)&&this.props.push(e,t,r[e])},ix=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},YT=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(im,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=nm(),(!r||!r.isStart)&&!n[Kt]&&(ix(n),i.zOrigin&&n[pi]&&(n[pi]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},rx=function(e,t){var n={target:e,props:[],revert:YT,save:qT};return e._gsap||Hn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},sx,jp=function(e,t){var n=Is.createElementNS?Is.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Is.createElement(e);return n&&n.style?n:Is.createElement(e)},Ti=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(im,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Ma(t)||t,1)||""},Z_="O,Moz,ms,Ms,Webkit".split(","),Ma=function(e,t,n){var i=t||mo,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Z_[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Z_[o]:"")+e},Qp=function(){LT()&&window.document&&(X_=window,Is=X_.document,va=Is.documentElement,mo=jp("div")||{style:{}},DT=jp("div"),Kt=Ma(Kt),pi=Kt+"Origin",mo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",sx=!!Ma("perspective"),nm=Hn.core.reverting,tm=1)},K_=function(e){var t=e.ownerSVGElement,n=jp("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),va.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),va.removeChild(n),r},J_=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},ox=function(e){var t,n;try{t=e.getBBox()}catch{t=K_(e),n=1}return t&&(t.width||t.height)||n||(t=K_(e)),t&&!t.width&&!t.x&&!t.y?{x:+J_(e,["x","cx","x1"])||0,y:+J_(e,["y","cy","y1"])||0,width:0,height:0}:t},ax=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ox(e))},Ls=function(e,t){if(t){var n=e.style,i;t in Jr&&t!==pi&&(t=Kt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(im,"-$1").toLowerCase())):n.removeAttribute(t)}},Ds=function(e,t,n,i,r,o){var a=new $n(e._pt,t,n,0,1,o?nx:tx);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},$_={deg:1,rad:1,turn:1},ZT={grid:1,flex:1},Os=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=mo.style,l=OT.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",p,g,m,_;if(i===o||!r||$_[i]||$_[o])return r;if(o!=="px"&&!d&&(r=s(e,t,n,"px")),_=e.getCTM&&ax(e),(f||o==="%")&&(Jr[t]||~t.indexOf("adius")))return p=_?e.getBBox()[l?"width":"height"]:e[h],Qt(f?r/p*u:r/100*p);if(a[l?"width":"height"]=u+(d?o:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Is||!g.appendChild)&&(g=Is.body),m=g._gsap,m&&f&&m.width&&l&&m.time===ui.time&&!m.uncache)return Qt(r/m.width*u);if(f&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=u+i,p=e[h],x?e.style[t]=x:Ls(e,t)}else(f||o==="%")&&!ZT[Ti(g,"display")]&&(a.position=Ti(e,"position")),g===e&&(a.position="static"),g.appendChild(mo),p=mo[h],g.removeChild(mo),a.position="absolute";return l&&f&&(m=Rs(g),m.time=ui.time,m.width=g[h]),Qt(d?p*r/u:p&&r?u/p*r:0)},Kr=function(e,t,n,i){var r;return tm||Qp(),t in Rr&&t!=="transform"&&(t=Rr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Jr[t]&&t!=="transform"?(r=Xl(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Ou(Ti(e,pi))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Lu[t]&&Lu[t](e,t,n)||Ti(e,t)||kp(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Os(e,t,r,n)+n:r},KT=function(e,t,n,i){if(!n||n==="none"){var r=Ma(t,e,1),o=r&&Ti(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=Ti(e,"borderTopColor"))}var a=new $n(this._pt,e.style,t,0,1,Yp),l=0,c=0,h,u,d,f,p,g,m,_,x,S,y,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Ti(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=Ti(e,t)||i,g?e.style[t]=g:Ls(e,t)),h=[n,i],Hp(h),n=h[0],i=h[1],d=n.match(lo)||[],T=i.match(lo)||[],T.length){for(;u=lo.exec(i);)m=u[0],x=i.substring(l,u.index),p?p=(p+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(p=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,y=g.substr((f+"").length),m.charAt(1)==="="&&(m=co(f,m)+y),_=parseFloat(m),S=m.substr((_+"").length),l=lo.lastIndex-S.length,S||(S=S||fi.units[t]||y,l===i.length&&(i+=S,a.e+=S)),y!==S&&(f=Os(e,t,g,S)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:f,c:_-f,m:p&&p<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?nx:tx;return Op.test(i)&&(a.e=0),this._pt=a,a},j_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},JT=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=j_[n]||n,t[1]=j_[i]||i,t.join(" ")},$T=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Jr[a]&&(l=1,a=a==="transformOrigin"?pi:Kt),Ls(n,a);l&&(Ls(n,Kt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Xl(n,1),o.uncache=1,ix(i)))}},Lu={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new $n(e._pt,t,n,0,0,$T);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},Wl=[1,0,0,1,0,0],lx={},cx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Q_=function(e){var t=Ti(e,Kt);return cx(t)?Wl:t.substr(7).match(Lp).map(Qt)},rm=function(e,t){var n=e._gsap||Rs(e),i=e.style,r=Q_(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Wl:r):(r===Wl&&!e.offsetParent&&e!==va&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,va.appendChild(e)),r=Q_(e),l?i.display=l:Ls(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):va.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},em=function(e,t,n,i,r,o){var a=e._gsap,l=r||rm(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=l[0],p=l[1],g=l[2],m=l[3],_=l[4],x=l[5],S=t.split(" "),y=parseFloat(S[0])||0,T=parseFloat(S[1])||0,b,w,v,A;n?l!==Wl&&(w=f*m-p*g)&&(v=y*(m/w)+T*(-g/w)+(g*x-m*_)/w,A=y*(-p/w)+T*(f/w)-(f*x-p*_)/w,y=v,T=A):(b=ox(e),y=b.x+(~S[0].indexOf("%")?y/100*b.width:y),T=b.y+(~(S[1]||S[0]).indexOf("%")?T/100*b.height:T)),i||i!==!1&&a.smooth?(_=y-c,x=T-h,a.xOffset=u+(_*f+x*g)-_,a.yOffset=d+(_*p+x*m)-x):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=T,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[pi]="0px 0px",o&&(Ds(o,a,"xOrigin",c,y),Ds(o,a,"yOrigin",h,T),Ds(o,a,"xOffset",u,a.xOffset),Ds(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+T)},Xl=function(e,t){var n=e._gsap||new Vp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ti(e,pi)||"0",h,u,d,f,p,g,m,_,x,S,y,T,b,w,v,A,C,P,I,H,V,O,k,F,Z,Q,D,pe,Ae,je,Ge,Fe;return h=u=d=g=m=_=x=S=y=0,f=p=1,n.svg=!!(e.getCTM&&ax(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Kt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Kt]!=="none"?l[Kt]:"")),i.scale=i.rotate=i.translate="none"),w=rm(e,n.svg),n.svg&&(n.uncache?(Z=e.getBBox(),c=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",F=""):F=!t&&e.getAttribute("data-svg-origin"),em(e,F||c,!!F||n.originIsAbsolute,n.smooth!==!1,w)),T=n.xOrigin||0,b=n.yOrigin||0,w!==Wl&&(P=w[0],I=w[1],H=w[2],V=w[3],h=O=w[4],u=k=w[5],w.length===6?(f=Math.sqrt(P*P+I*I),p=Math.sqrt(V*V+H*H),g=P||I?xa(I,P)*po:0,x=H||V?xa(H,V)*po+g:0,x&&(p*=Math.abs(Math.cos(x*ya))),n.svg&&(h-=T-(T*P+b*H),u-=b-(T*I+b*V))):(Fe=w[6],je=w[7],D=w[8],pe=w[9],Ae=w[10],Ge=w[11],h=w[12],u=w[13],d=w[14],v=xa(Fe,Ae),m=v*po,v&&(A=Math.cos(-v),C=Math.sin(-v),F=O*A+D*C,Z=k*A+pe*C,Q=Fe*A+Ae*C,D=O*-C+D*A,pe=k*-C+pe*A,Ae=Fe*-C+Ae*A,Ge=je*-C+Ge*A,O=F,k=Z,Fe=Q),v=xa(-H,Ae),_=v*po,v&&(A=Math.cos(-v),C=Math.sin(-v),F=P*A-D*C,Z=I*A-pe*C,Q=H*A-Ae*C,Ge=V*C+Ge*A,P=F,I=Z,H=Q),v=xa(I,P),g=v*po,v&&(A=Math.cos(v),C=Math.sin(v),F=P*A+I*C,Z=O*A+k*C,I=I*A-P*C,k=k*A-O*C,P=F,O=Z),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,_=180-_),f=Qt(Math.sqrt(P*P+I*I+H*H)),p=Qt(Math.sqrt(k*k+Fe*Fe)),v=xa(O,k),x=Math.abs(v)>2e-4?v*po:0,y=Ge?1/(Ge<0?-Ge:Ge):0),n.svg&&(F=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!cx(Ti(e,Kt)),F&&e.setAttribute("transform",F))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(f*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(p*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Qt(f),n.scaleY=Qt(p),n.rotation=Qt(g)+a,n.rotationX=Qt(m)+a,n.rotationY=Qt(_)+a,n.skewX=x+a,n.skewY=S+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[pi]=Ou(c)),n.xOffset=n.yOffset=0,n.force3D=fi.force3D,n.renderTransform=n.svg?QT:sx?hx:jT,n.uncache=0,n},Ou=function(e){return(e=e.split(" "))[0]+" "+e[1]},Jp=function(e,t,n){var i=Dn(t);return Qt(parseFloat(t)+parseFloat(Os(e,"x",n+"px",i)))+i},jT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,hx(e,t)},uo="0deg",Gl="0px",fo=") ",hx=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,g=n.scaleY,m=n.transformPerspective,_=n.force3D,x=n.target,S=n.zOrigin,y="",T=_==="auto"&&e&&e!==1||_===!0;if(S&&(u!==uo||h!==uo)){var b=parseFloat(h)*ya,w=Math.sin(b),v=Math.cos(b),A;b=parseFloat(u)*ya,A=Math.cos(b),o=Jp(x,o,w*A*-S),a=Jp(x,a,-Math.sin(b)*-S),l=Jp(x,l,v*A*-S+S)}m!==Gl&&(y+="perspective("+m+fo),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(T||o!==Gl||a!==Gl||l!==Gl)&&(y+=l!==Gl||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+fo),c!==uo&&(y+="rotate("+c+fo),h!==uo&&(y+="rotateY("+h+fo),u!==uo&&(y+="rotateX("+u+fo),(d!==uo||f!==uo)&&(y+="skew("+d+", "+f+fo),(p!==1||g!==1)&&(y+="scale("+p+", "+g+fo),x.style[Kt]=y||"translate(0, 0)"},QT=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,g=n.yOrigin,m=n.xOffset,_=n.yOffset,x=n.forceCSS,S=parseFloat(o),y=parseFloat(a),T,b,w,v,A;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ya,c*=ya,T=Math.cos(l)*u,b=Math.sin(l)*u,w=Math.sin(l-c)*-d,v=Math.cos(l-c)*d,c&&(h*=ya,A=Math.tan(c-h),A=Math.sqrt(1+A*A),w*=A,v*=A,h&&(A=Math.tan(h),A=Math.sqrt(1+A*A),T*=A,b*=A)),T=Qt(T),b=Qt(b),w=Qt(w),v=Qt(v)):(T=u,v=d,b=w=0),(S&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(S=Os(f,"x",o,"px"),y=Os(f,"y",a,"px")),(p||g||m||_)&&(S=Qt(S+p-(p*T+g*w)+m),y=Qt(y+g-(p*b+g*v)+_)),(i||r)&&(A=f.getBBox(),S=Qt(S+i/100*A.width),y=Qt(y+r/100*A.height)),A="matrix("+T+","+b+","+w+","+v+","+S+","+y+")",f.setAttribute("transform",A),x&&(f.style[Kt]=A)},ew=function(e,t,n,i,r){var o=360,a=yn(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?po:1),c=l-i,h=i+c+"deg",u,d;return a&&(u=r.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Y_)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Y_)%o-~~(c/o)*o)),e._pt=d=new $n(e._pt,t,n,i,c,FT),d.e=h,d.u="deg",e._props.push(n),d},ex=function(e,t){for(var n in t)e[n]=t[n];return e},tw=function(e,t,n){var i=ex({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,f,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Kt]=t,a=Xl(n,1),Ls(n,Kt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Kt],o[Kt]=t,a=Xl(n,1),o[Kt]=c);for(l in Jr)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(f=Dn(c),p=Dn(h),u=f!==p?Os(n,l,c,p):parseFloat(c),d=parseFloat(h),e._pt=new $n(e._pt,a,l,u,d-u,$p),e._pt.u=p||0,e._props.push(l));ex(a,i)};Jn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});Lu[e>1?"border"+s:s]=function(a,l,c,h,u){var d,f;if(arguments.length<4)return d=o.map(function(p){return Kr(a,p,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(p,g){return f[p]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,f,u)}});var sm={name:"css",register:Qp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,h,u,d,f,p,g,m,_,x,S,y,T,b,w,v,A;tm||Qp(),this.styles=this.styles||rx(e),v=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(h=t[g],!(hi[g]&&Wp(g,t,n,i,e,r)))){if(f=typeof h,p=Lu[g],f==="function"&&(h=h.call(n,i,e,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=_a(h)),p)p(this,e,g,h,n)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",Yr.lastIndex=0,Yr.test(c)||(m=Dn(c),_=Dn(h),_?m!==_&&(c=Os(e,g,c,_)+_):m&&(h+=m)),this.add(a,"setProperty",c,h,i,r,0,0,g),o.push(g),v.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],yn(c)&&~c.indexOf("random(")&&(c=_a(c)),Dn(c+"")||c==="auto"||(c+=fi.units[g]||Dn(Kr(e,g))||""),(c+"").charAt(1)==="="&&(c=Kr(e,g))):c=Kr(e,g),d=parseFloat(c),x=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),u=parseFloat(h),g in Rr&&(g==="autoAlpha"&&(d===1&&Kr(e,"visibility")==="hidden"&&u&&(d=0),v.push("visibility",0,a.visibility),Ds(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Rr[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in Jr,S){if(this.styles.save(g),A=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=Ti(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var C=e.style.perspective;e.style.perspective=h,h=Ti(e,"perspective"),C?e.style.perspective=C:Ls(e,"perspective")}u=parseFloat(h)}if(y||(T=e._gsap,T.renderTransform&&!t.parseTransform||Xl(e,t.parseTransform),b=t.smoothOrigin!==!1&&T.smooth,y=this._pt=new $n(this._pt,a,Kt,0,1,T.renderTransform,T,0,-1),y.dep=1),g==="scale")this._pt=new $n(this._pt,T,"scaleY",T.scaleY,(x?co(T.scaleY,x+u):u)-T.scaleY||0,$p),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){v.push(pi,0,a[pi]),h=JT(h),T.svg?em(e,h,0,b,0,this):(_=parseFloat(h.split(" ")[2])||0,_!==T.zOrigin&&Ds(this,T,"zOrigin",T.zOrigin,_),Ds(this,a,g,Ou(c),Ou(h)));continue}else if(g==="svgOrigin"){em(e,h,1,b,0,this);continue}else if(g in lx){ew(this,T,g,d,x?co(d,x+h):h);continue}else if(g==="smoothOrigin"){Ds(this,T,"smooth",T.smooth,h);continue}else if(g==="force3D"){T[g]=h;continue}else if(g==="transform"){tw(this,h,e);continue}}else g in a||(g=Ma(g)||g);if(S||(u||u===0)&&(d||d===0)&&!NT.test(h)&&g in a)m=(c+"").substr((d+"").length),u||(u=0),_=Dn(h)||(g in fi.units?fi.units[g]:m),m!==_&&(d=Os(e,g,c,_)),this._pt=new $n(this._pt,S?T:a,g,d,(x?co(d,x+u):u)-d,!S&&(_==="px"||g==="zIndex")&&t.autoRound!==!1?kT:$p),this._pt.u=_||0,S&&A!==h?(this._pt.b=c,this._pt.e=A,this._pt.r=BT):m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=UT);else if(g in a)KT.call(this,e,g,c,x?x+h:h);else if(g in e)this.add(e,g,c||e[g],x?x+h:h,i,r);else if(g!=="parseTransform"){Ru(g,h);continue}S||(g in a?v.push(g,0,a[g]):typeof e[g]=="function"?v.push(g,2,e[g]()):v.push(g,1,c||e[g])),o.push(g)}}w&&Kp(this)},render:function(e,t){if(t.tween._time||!nm())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Kr,aliases:Rr,getSetter:function(e,t,n){var i=Rr[t];return i&&i.indexOf(",")<0&&(t=i),t in Jr&&t!==pi&&(e._gsap.x||Kr(e,"x"))?n&&q_===n?t==="scale"?GT:VT:(q_=n||{})&&(t==="scale"?WT:XT):e.style&&!Au(e.style[t])?zT:~t.indexOf("-")?HT:Du(e,t)},core:{_removeProperty:Ls,_getMatrix:rm}};Hn.utils.checkPrefix=Ma;Hn.core.getStyleSaver=rx;(function(s,e,t,n){var i=Jn(s+","+e+","+t,function(r){Jr[r]=1});Jn(e,function(r){fi.units[r]="deg",lx[r]=1}),Rr[i[13]]=s+","+e,Jn(n,function(r){var o=r.split(":");Rr[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Jn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){fi.units[s]="px"});Hn.registerPlugin(sm);var rt=Hn.registerPlugin(sm)||Hn,hC=rt.core.Tween;function ux(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function nw(s,e,t){return e&&ux(s.prototype,e),t&&ux(s,t),s}var Ln,Uu,iw,wi,Ns,Fs,ba,fx,go,Ea,px,$r,tr,mx,gx=function(){return Ln||typeof window<"u"&&(Ln=window.gsap)&&Ln.registerPlugin&&Ln},_x=1,Sa=[],ut=[],nr=[],Yl=Date.now,om=function(e,t){return t},rw=function(){var e=Ea.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ut),i.push.apply(i,nr),ut=n,nr=i,om=function(o,a){return t[o](a)}},Qr=function(e,t){return~nr.indexOf(e)&&nr[nr.indexOf(e)+1][t]},Zl=function(e){return!!~px.indexOf(e)},Qn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},jn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Nu="scrollLeft",Fu="scrollTop",am=function(){return $r&&$r.isPressed||ut.cache++},Bu=function(e,t){var n=function i(r){if(r||r===0){_x&&(wi.history.scrollRestoration="manual");var o=$r&&$r.isPressed;r=i.v=Math.round(r)||($r&&$r.iOS?1:0),e(r),i.cacheID=ut.cache,o&&om("ss",r)}else(t||ut.cache!==i.cacheID||om("ref"))&&(i.cacheID=ut.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Vn={s:Nu,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Bu(function(s){return arguments.length?wi.scrollTo(s,mn.sc()):wi.pageXOffset||Ns[Nu]||Fs[Nu]||ba[Nu]||0})},mn={s:Fu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Vn,sc:Bu(function(s){return arguments.length?wi.scrollTo(Vn.sc(),s):wi.pageYOffset||Ns[Fu]||Fs[Fu]||ba[Fu]||0})},ei=function(e,t){return(t&&t._ctx&&t._ctx.selector||Ln.utils.toArray)(e)[0]||(typeof e=="string"&&Ln.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},sw=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},jr=function(e,t){var n=t.s,i=t.sc;Zl(e)&&(e=Ns.scrollingElement||Fs);var r=ut.indexOf(e),o=i===mn.sc?1:2;!~r&&(r=ut.push(e)-1),ut[r+o]||Qn(e,"scroll",am);var a=ut[r+o],l=a||(ut[r+o]=Bu(Qr(e,n),!0)||(Zl(e)?i:Bu(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Ln.getProperty(e,"scrollBehavior")==="smooth"),l},ku=function(e,t,n){var i=e,r=e,o=Yl(),a=o,l=t||50,c=Math.max(500,l*3),h=function(p,g){var m=Yl();g||m-o>l?(r=i,i=p,a=o,o=m):n?i+=p:i=r+(p-r)/(m-a)*(o-a)},u=function(){r=i=n?0:i,a=o=0},d=function(p){var g=a,m=r,_=Yl();return(p||p===0)&&p!==i&&h(p),o===a||_-a>c?0:(i+(n?m:-m))/((n?_:o)-g)*1e3};return{update:h,reset:u,getVelocity:d}},ql=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},dx=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},xx=function(){Ea=Ln.core.globals().ScrollTrigger,Ea&&Ea.core&&rw()},vx=function(e){return Ln=e||gx(),!Uu&&Ln&&typeof document<"u"&&document.body&&(wi=window,Ns=document,Fs=Ns.documentElement,ba=Ns.body,px=[wi,Ns,Fs,ba],iw=Ln.utils.clamp,mx=Ln.core.context||function(){},go="onpointerenter"in ba?"pointer":"mouse",fx=en.isTouch=wi.matchMedia&&wi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in wi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,tr=en.eventTypes=("ontouchstart"in Fs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Fs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return _x=0},500),Uu=1),Ea||xx(),Uu};Vn.op=mn;ut.cache=0;var en=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){Uu||vx(Ln)||console.warn("Please gsap.registerPlugin(Observer)"),Ea||xx();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,u=n.onStop,d=n.onStopDelay,f=n.ignore,p=n.wheelSpeed,g=n.event,m=n.onDragStart,_=n.onDragEnd,x=n.onDrag,S=n.onPress,y=n.onRelease,T=n.onRight,b=n.onLeft,w=n.onUp,v=n.onDown,A=n.onChangeX,C=n.onChangeY,P=n.onChange,I=n.onToggleX,H=n.onToggleY,V=n.onHover,O=n.onHoverEnd,k=n.onMove,F=n.ignoreCheck,Z=n.isNormalizer,Q=n.onGestureStart,D=n.onGestureEnd,pe=n.onWheel,Ae=n.onEnable,je=n.onDisable,Ge=n.onClick,Fe=n.scrollSpeed,$=n.capture,ae=n.allowClicks,se=n.lockAxis,Pe=n.onLockAxis;this.target=a=ei(a)||Fs,this.vars=n,f&&(f=Ln.utils.toArray(f)),i=i||1e-9,r=r||0,p=p||1,Fe=Fe||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(wi.getComputedStyle(ba).lineHeight)||22);var Ve,De,lt,Re,qe,ot,We,X=this,_t=0,Xt=0,U=n.passive||!h&&n.passive!==!1,nt=jr(a,Vn),Je=jr(a,mn),xt=nt(),ge=Je(),st=~o.indexOf("touch")&&!~o.indexOf("pointer")&&tr[0]==="pointerdown",R=Zl(a),M=a.ownerDocument||Ns,z=[0,0,0],K=[0,0,0],ee=0,ue=function(){return ee=Yl()},ne=function(he,ze){return(X.event=he)&&f&&sw(he.target,f)||ze&&st&&he.pointerType!=="touch"||F&&F(he,ze)},Y=function(){X._vx.reset(),X._vy.reset(),De.pause(),u&&u(X)},j=function(){var he=X.deltaX=dx(z),ze=X.deltaY=dx(K),ie=Math.abs(he)>=i,He=Math.abs(ze)>=i;P&&(ie||He)&&P(X,he,ze,z,K),ie&&(T&&X.deltaX>0&&T(X),b&&X.deltaX<0&&b(X),A&&A(X),I&&X.deltaX<0!=_t<0&&I(X),_t=X.deltaX,z[0]=z[1]=z[2]=0),He&&(v&&X.deltaY>0&&v(X),w&&X.deltaY<0&&w(X),C&&C(X),H&&X.deltaY<0!=Xt<0&&H(X),Xt=X.deltaY,K[0]=K[1]=K[2]=0),(Re||lt)&&(k&&k(X),lt&&(m&&lt===1&&m(X),x&&x(X),lt=0),Re=!1),ot&&!(ot=!1)&&Pe&&Pe(X),qe&&(pe(X),qe=!1),Ve=0},xe=function(he,ze,ie){z[ie]+=he,K[ie]+=ze,X._vx.update(he),X._vy.update(ze),c?Ve||(Ve=requestAnimationFrame(j)):j()},we=function(he,ze){se&&!We&&(X.axis=We=Math.abs(he)>Math.abs(ze)?"x":"y",ot=!0),We!=="y"&&(z[2]+=he,X._vx.update(he,!0)),We!=="x"&&(K[2]+=ze,X._vy.update(ze,!0)),c?Ve||(Ve=requestAnimationFrame(j)):j()},de=function(he){if(!ne(he,1)){he=ql(he,h);var ze=he.clientX,ie=he.clientY,He=ze-X.x,Le=ie-X.y,Ze=X.isDragging;X.x=ze,X.y=ie,(Ze||(He||Le)&&(Math.abs(X.startX-ze)>=r||Math.abs(X.startY-ie)>=r))&&(lt||(lt=Ze?2:1),Ze||(X.isDragging=!0),we(He,Le))}},le=X.onPress=function(re){ne(re,1)||re&&re.button||(X.axis=We=null,De.pause(),X.isPressed=!0,re=ql(re),_t=Xt=0,X.startX=X.x=re.clientX,X.startY=X.y=re.clientY,X._vx.reset(),X._vy.reset(),Qn(Z?a:M,tr[1],de,U,!0),X.deltaX=X.deltaY=0,S&&S(X))},_e=X.onRelease=function(re){if(!ne(re,1)){jn(Z?a:M,tr[1],de,!0);var he=!isNaN(X.y-X.startY),ze=X.isDragging,ie=ze&&(Math.abs(X.x-X.startX)>3||Math.abs(X.y-X.startY)>3),He=ql(re);!ie&&he&&(X._vx.reset(),X._vy.reset(),h&&ae&&Ln.delayedCall(.08,function(){if(Yl()-ee>300&&!re.defaultPrevented){if(re.target.click)re.target.click();else if(M.createEvent){var Le=M.createEvent("MouseEvents");Le.initMouseEvent("click",!0,!0,wi,1,He.screenX,He.screenY,He.clientX,He.clientY,!1,!1,!1,!1,0,null),re.target.dispatchEvent(Le)}}})),X.isDragging=X.isGesturing=X.isPressed=!1,u&&ze&&!Z&&De.restart(!0),lt&&j(),_&&ze&&_(X),y&&y(X,ie)}},Ye=function(he){return he.touches&&he.touches.length>1&&(X.isGesturing=!0)&&Q(he,X.isDragging)},et=function(){return(X.isGesturing=!1)||D(X)},N=function(he){if(!ne(he)){var ze=nt(),ie=Je();xe((ze-xt)*Fe,(ie-ge)*Fe,1),xt=ze,ge=ie,u&&De.restart(!0)}},oe=function(he){if(!ne(he)){he=ql(he,h),pe&&(qe=!0);var ze=(he.deltaMode===1?l:he.deltaMode===2?wi.innerHeight:1)*p;xe(he.deltaX*ze,he.deltaY*ze,0),u&&!Z&&De.restart(!0)}},J=function(he){if(!ne(he)){var ze=he.clientX,ie=he.clientY,He=ze-X.x,Le=ie-X.y;X.x=ze,X.y=ie,Re=!0,u&&De.restart(!0),(He||Le)&&we(He,Le)}},Me=function(he){X.event=he,V(X)},ce=function(he){X.event=he,O(X)},te=function(he){return ne(he)||ql(he,h)&&Ge(X)};De=X._dc=Ln.delayedCall(d||.25,Y).pause(),X.deltaX=X.deltaY=0,X._vx=ku(0,50,!0),X._vy=ku(0,50,!0),X.scrollX=nt,X.scrollY=Je,X.isDragging=X.isGesturing=X.isPressed=!1,mx(this),X.enable=function(re){return X.isEnabled||(Qn(R?M:a,"scroll",am),o.indexOf("scroll")>=0&&Qn(R?M:a,"scroll",N,U,$),o.indexOf("wheel")>=0&&Qn(a,"wheel",oe,U,$),(o.indexOf("touch")>=0&&fx||o.indexOf("pointer")>=0)&&(Qn(a,tr[0],le,U,$),Qn(M,tr[2],_e),Qn(M,tr[3],_e),ae&&Qn(a,"click",ue,!0,!0),Ge&&Qn(a,"click",te),Q&&Qn(M,"gesturestart",Ye),D&&Qn(M,"gestureend",et),V&&Qn(a,go+"enter",Me),O&&Qn(a,go+"leave",ce),k&&Qn(a,go+"move",J)),X.isEnabled=!0,X.isDragging=X.isGesturing=X.isPressed=Re=lt=!1,X._vx.reset(),X._vy.reset(),xt=nt(),ge=Je(),re&&re.type&&le(re),Ae&&Ae(X)),X},X.disable=function(){X.isEnabled&&(Sa.filter(function(re){return re!==X&&Zl(re.target)}).length||jn(R?M:a,"scroll",am),X.isPressed&&(X._vx.reset(),X._vy.reset(),jn(Z?a:M,tr[1],de,!0)),jn(R?M:a,"scroll",N,$),jn(a,"wheel",oe,$),jn(a,tr[0],le,$),jn(M,tr[2],_e),jn(M,tr[3],_e),jn(a,"click",ue,!0),jn(a,"click",te),jn(M,"gesturestart",Ye),jn(M,"gestureend",et),jn(a,go+"enter",Me),jn(a,go+"leave",ce),jn(a,go+"move",J),X.isEnabled=X.isPressed=X.isDragging=!1,je&&je(X))},X.kill=X.revert=function(){X.disable();var re=Sa.indexOf(X);re>=0&&Sa.splice(re,1),$r===X&&($r=0)},Sa.push(X),Z&&Zl(a)&&($r=X),X.enable(g)},nw(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();en.version="3.15.0";en.create=function(s){return new en(s)};en.register=vx;en.getAll=function(){return Sa.slice()};en.getById=function(s){return Sa.filter(function(e){return e.vars.id===s})[0]};gx()&&Ln.registerPlugin(en);var Ie,Ra,gt,wt,Ci,Et,Mm,td,lc,tc,Jl,zu,Gn,rd,pm,ni,yx,Mx,Ca,Ux,lm,Bx,ti,mm,kx,zx,Us,gm,Sm,Pa,bm,nc,_m,cm,Hu=1,Wn=Date.now,hm=Wn(),Vi=0,$l=0,Sx=function(e,t,n){var i=Ri(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},bx=function(e,t){return t&&(!Ri(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},ow=function s(){return $l&&requestAnimationFrame(s)},Ex=function(){return rd=1},Tx=function(){return rd=0},Cr=function(e){return e},jl=function(e){return Math.round(e*1e5)/1e5||0},Hx=function(){return typeof window<"u"},Vx=function(){return Ie||Hx()&&(Ie=window.gsap)&&Ie.registerPlugin&&Ie},So=function(e){return!!~Mm.indexOf(e)},Gx=function(e){return(e==="Height"?bm:gt["inner"+e])||Ci["client"+e]||Et["client"+e]},Wx=function(e){return Qr(e,"getBoundingClientRect")||(So(e)?function(){return ed.width=gt.innerWidth,ed.height=bm,ed}:function(){return es(e)})},aw=function(e,t,n){var i=n.d,r=n.d2,o=n.a;return(o=Qr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Gx(r):e["client"+r])||0}},lw=function(e,t){return!t||~nr.indexOf(e)?Wx(e):function(){return ed}},Pr=function(e,t){var n=t.s,i=t.d2,r=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Qr(e,n))?o()-Wx(e)()[r]:So(e)?(Ci[n]||Et[n])-Gx(i):e[n]-e["offset"+i])},Vu=function(e,t){for(var n=0;n<Ca.length;n+=3)(!t||~t.indexOf(Ca[n+1]))&&e(Ca[n],Ca[n+1],Ca[n+2])},Ri=function(e){return typeof e=="string"},Xn=function(e){return typeof e=="function"},Ql=function(e){return typeof e=="number"},_o=function(e){return typeof e=="object"},Kl=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ta=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},wa=Math.abs,Xx="left",qx="top",Em="right",Tm="bottom",vo="width",yo="height",ic="Right",rc="Left",sc="Top",oc="Bottom",gn="padding",zi="margin",Da="Width",wm="Height",Mn="px",Hi=function(e){return gt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},cw=function(e){var t=Hi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},wx=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},es=function(e,t){var n=t&&Hi(e)[pm]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ie.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},nd=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Yx=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},hw=function(e){return function(t){return Ie.utils.snap(Yx(e),t)}},Am=function(e){var t=Ie.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return t(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=t(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:t(r<0?i-e:i+e)}},uw=function(e){return function(t,n){return Am(Yx(e))(t,n.direction)}},Gu=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},Rn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},An=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Wu=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Ax={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Xu={toggleActions:"play",anticipatePin:0},id={top:0,left:0,center:.5,bottom:1,right:1},Ju=function(e,t){if(Ri(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in id?id[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},qu=function(e,t,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,u=r.fontSize,d=r.indent,f=r.fontWeight,p=wt.createElement("div"),g=So(n)||Qr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,_=g?Et:n.tagName==="IFRAME"?n.contentDocument.body:n,x=e.indexOf("start")!==-1,S=x?c:h,y="border-color:"+S+";font-size:"+u+";color:"+S+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(y+=(i===mn?Em:Tm)+":"+(o+parseFloat(d))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=x,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=y,p.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(p,_.children[0]):_.appendChild(p),p._offset=p["offset"+i.op.d2],$u(p,0,i,x),p},$u=function(e,t,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+Da]=1,r["border"+a+Da]=0,r[n.p]=t+"px",Ie.set(e,r)},dt=[],xm={},cc,Rx=function(){return Wn()-Vi>34&&(cc||(cc=requestAnimationFrame(ts)))},Aa=function(){(!ti||!ti.isPressed||ti.startX>Et.clientWidth)&&(ut.cache++,ti?cc||(cc=requestAnimationFrame(ts)):ts(),Vi||Eo("scrollStart"),Vi=Wn())},um=function(){zx=gt.innerWidth,kx=gt.innerHeight},ec=function(e){ut.cache++,(e===!0||!Gn&&!Bx&&!wt.fullscreenElement&&!wt.webkitFullscreenElement&&(!mm||zx!==gt.innerWidth||Math.abs(gt.innerHeight-kx)>gt.innerHeight*.25))&&td.restart(!0)},bo={},dw=[],Zx=function s(){return An($e,"scrollEnd",s)||xo(!0)},Eo=function(e){return bo[e]&&bo[e].map(function(t){return t()})||dw},Ai=[],Kx=function(e){for(var t=0;t<Ai.length;t+=5)(!e||Ai[t+4]&&Ai[t+4].query===e)&&(Ai[t].style.cssText=Ai[t+1],Ai[t].getBBox&&Ai[t].setAttribute("transform",Ai[t+2]||""),Ai[t+3].uncache=1)},Jx=function(){return ut.forEach(function(e){return Xn(e)&&++e.cacheID&&(e.rec=e())})},Rm=function(e,t){var n;for(ni=0;ni<dt.length;ni++)n=dt[ni],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));nc=!0,t&&Kx(t),t||Eo("revert")},$x=function(e,t){ut.cache++,(t||!ii)&&ut.forEach(function(n){return Xn(n)&&n.cacheID++&&(n.rec=0)}),Ri(e)&&(gt.history.scrollRestoration=Sm=e)},ii,Mo=0,Cx,fw=function(){if(Cx!==Mo){var e=Cx=Mo;requestAnimationFrame(function(){return e===Mo&&xo(!0)})}},jx=function(){Et.appendChild(Pa),bm=!ti&&Pa.offsetHeight||gt.innerHeight,Et.removeChild(Pa)},Px=function(e){return lc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},xo=function(e,t){if(Ci=wt.documentElement,Et=wt.body,Mm=[gt,wt,Ci,Et],Vi&&!e&&!nc){Rn($e,"scrollEnd",Zx);return}jx(),ii=$e.isRefreshing=!0,nc||Jx();var n=Eo("refreshInit");Ux&&$e.sort(),t||Rm(),ut.forEach(function(i){Xn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),dt.slice(0).forEach(function(i){return i.refresh()}),nc=!1,dt.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),_m=1,Px(!0),dt.forEach(function(i){var r=Pr(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),Px(!1),_m=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ut.forEach(function(i){Xn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),$x(Sm,1),td.pause(),Mo++,ii=2,ts(2),dt.forEach(function(i){return Xn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),ii=$e.isRefreshing=!1,Eo("refresh")},vm=0,ju=1,ac,ts=function(e){if(e===2||!ii&&!nc){$e.isUpdating=!0,ac&&ac.update(0);var t=dt.length,n=Wn(),i=n-hm>=50,r=t&&dt[0].scroll();if(ju=vm>r?-1:1,ii||(vm=r),i&&(Vi&&!rd&&n-Vi>200&&(Vi=0,Eo("scrollEnd")),Jl=hm,hm=n),ju<0){for(ni=t;ni-- >0;)dt[ni]&&dt[ni].update(0,i);ju=1}else for(ni=0;ni<t;ni++)dt[ni]&&dt[ni].update(0,i);$e.isUpdating=!1}cc=0},ym=[Xx,qx,Tm,Em,zi+oc,zi+ic,zi+sc,zi+rc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Qu=ym.concat([vo,yo,"boxSizing","max"+Da,"max"+wm,"position",zi,gn,gn+sc,gn+ic,gn+oc,gn+rc]),pw=function(e,t,n){Ia(n);var i=e._gsap;if(i.spacerIsNative)Ia(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},dm=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=ym.length,o=t.style,a=e.style,l;r--;)l=ym[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Tm]=a[Em]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[vo]=nd(e,Vn)+Mn,o[yo]=nd(e,mn)+Mn,o[gn]=a[zi]=a[qx]=a[Xx]="0",Ia(i),a[vo]=a["max"+Da]=n[vo],a[yo]=a["max"+wm]=n[yo],a[gn]=n[gn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},mw=/([A-Z])/g,Ia=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,o;for((e.t._gsap||Ie.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],r=e[i],o?t[r]=o:t[r]&&t.removeProperty(r.replace(mw,"-$1").toLowerCase())}},Yu=function(e){for(var t=Qu.length,n=e.style,i=[],r=0;r<t;r++)i.push(Qu[r],n[Qu[r]]);return i.t=e,i},gw=function(e,t,n){for(var i=[],r=e.length,o=n?8:0,a;o<r;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},ed={left:0,top:0},Ix=function(e,t,n,i,r,o,a,l,c,h,u,d,f,p){Xn(e)&&(e=e(l)),Ri(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Ju("0"+e.substr(3),n):0));var g=f?f.time():0,m,_,x;if(f&&f.seek(0),isNaN(e)||(e=+e),Ql(e))f&&(e=Ie.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),a&&$u(a,n,i,!0);else{Xn(t)&&(t=t(l));var S=(e||"0").split(" "),y,T,b,w;x=ei(t,l)||Et,y=es(x)||{},(!y||!y.left&&!y.top)&&Hi(x).display==="none"&&(w=x.style.display,x.style.display="block",y=es(x),w?x.style.display=w:x.style.removeProperty("display")),T=Ju(S[0],y[i.d]),b=Ju(S[1]||"0",n),e=y[i.p]-c[i.p]-h+T+r-b,a&&$u(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(p&&(l[p]=e||-.001,e<0&&(e=0)),o){var v=e+n,A=o._isStart;m="scroll"+i.d2,$u(o,v,i,A&&v>20||!A&&(u?Math.max(Et[m],Ci[m]):o.parentNode[m])<=v+1),u&&(c=es(a),u&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Mn))}return f&&x&&(m=es(x),f.seek(d),_=es(x),f._caScrollDist=m[i.p]-_[i.p],e=e/f._caScrollDist*d),f&&f.seek(g),f?e:Math.round(e)},_w=/(webkit|moz|length|cssText|inset)/i,Dx=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,o,a;if(t===Et){e._stOrig=r.cssText,a=Hi(e);for(o in a)!+o&&!_w.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=e._stOrig;Ie.core.getCache(e).uncache=1,t.appendChild(e)}},Qx=function(e,t,n){var i=t,r=i;return function(o){var a=Math.round(e());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},Zu=function(e,t,n){var i={};i[t.p]="+="+n,Ie.set(e,i)},Lx=function(e,t){var n=jr(e,t),i="_scroll"+t.p2,r=function o(a,l,c,h,u){var d=o.tween,f=l.onComplete,p={};c=c||n();var g=Qx(n,c,function(){d.kill(),o.tween=0});return u=h&&u||0,h=h||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return g(c+h*d.ratio+u*d.ratio*d.ratio)},l.onUpdate=function(){ut.cache++,o.tween&&ts()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=Ie.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},Rn(e,"wheel",n.wheelHandler),$e.isTouch&&Rn(e,"touchmove",n.wheelHandler),r},$e=(function(){function s(t,n){Ra||s.register(Ie)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),gm(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!$l){this.update=this.refresh=this.kill=Cr;return}n=wx(Ri(n)||Ql(n)||n.nodeType?{trigger:n}:n,Xu);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,u=r.scrub,d=r.trigger,f=r.pin,p=r.pinSpacing,g=r.invalidateOnRefresh,m=r.anticipatePin,_=r.onScrubComplete,x=r.onSnapComplete,S=r.once,y=r.snap,T=r.pinReparent,b=r.pinSpacer,w=r.containerAnimation,v=r.fastScrollEnd,A=r.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Vn:mn,P=!u&&u!==0,I=ei(n.scroller||gt),H=Ie.core.getCache(I),V=So(I),O=("pinType"in n?n.pinType:Qr(I,"pinType")||V&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],F=P&&n.toggleActions.split(" "),Z="markers"in n?n.markers:Xu.markers,Q=V?0:parseFloat(Hi(I)["border"+C.p2+Da])||0,D=this,pe=n.onRefreshInit&&function(){return n.onRefreshInit(D)},Ae=aw(I,V,C),je=lw(I,V),Ge=0,Fe=0,$=0,ae=jr(I,C),se,Pe,Ve,De,lt,Re,qe,ot,We,X,_t,Xt,U,nt,Je,xt,ge,st,R,M,z,K,ee,ue,ne,Y,j,xe,we,de,le,_e,Ye,et,N,oe,J,Me,ce;if(D._startClamp=D._endClamp=!1,D._dir=C,m*=45,D.scroller=I,D.scroll=w?w.time.bind(w):ae,De=ae(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(Ux=1,n.refreshPriority===-9999&&(ac=D)),H.tweenScroll=H.tweenScroll||{top:Lx(I,mn),left:Lx(I,Vn)},D.tweenTo=se=H.tweenScroll[C.p],D.scrubDuration=function(ie){Ye=Ql(ie)&&ie,Ye?_e?_e.duration(ie):_e=Ie.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ye,paused:!0,onComplete:function(){return _&&_(D)}}):(_e&&_e.progress(1).kill(),_e=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(u),de=0,l||(l=i.vars.id)),y&&((!_o(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in Et.style&&Ie.set(V?[Et,Ci]:I,{scrollBehavior:"auto"}),ut.forEach(function(ie){return Xn(ie)&&ie.target===(V?wt.scrollingElement||Ci:I)&&(ie.smooth=!1)}),Ve=Xn(y.snapTo)?y.snapTo:y.snapTo==="labels"?hw(i):y.snapTo==="labelsDirectional"?uw(i):y.directional!==!1?function(ie,He){return Am(y.snapTo)(ie,Wn()-Fe<500?0:He.direction)}:Ie.utils.snap(y.snapTo),et=y.duration||{min:.1,max:2},et=_o(et)?tc(et.min,et.max):tc(et,et),N=Ie.delayedCall(y.delay||Ye/2||.1,function(){var ie=ae(),He=Wn()-Fe<500,Le=se.tween;if((He||Math.abs(D.getVelocity())<10)&&!Le&&!rd&&Ge!==ie){var Ze=(ie-Re)/nt,un=i&&!P?i.totalProgress():Ze,ft=He?0:(un-le)/(Wn()-Jl)*1e3||0,kt=Ie.utils.clamp(-Ze,1-Ze,wa(ft/2)*ft/.185),zt=Ze+(y.inertia===!1?0:kt),Nt,Ct,St=y,On=St.onStart,Ft=St.onInterrupt,Sn=St.onComplete;if(Nt=Ve(zt,D),Ql(Nt)||(Nt=zt),Ct=Math.max(0,Math.round(Re+Nt*nt)),ie<=qe&&ie>=Re&&Ct!==ie){if(Le&&!Le._initted&&Le.data<=wa(Ct-ie))return;y.inertia===!1&&(kt=Nt-Ze),se(Ct,{duration:et(wa(Math.max(wa(zt-un),wa(Nt-un))*.185/ft/.05||0)),ease:y.ease||"power3",data:wa(Ct-ie),onInterrupt:function(){return N.restart(!0)&&Ft&&Ta(D,Ft)},onComplete:function(){D.update(),Ge=ae(),i&&!P&&(_e?_e.resetTo("totalProgress",Nt,i._tTime/i._tDur):i.progress(Nt)),de=le=i&&!P?i.totalProgress():D.progress,x&&x(D),Sn&&Ta(D,Sn)}},ie,kt*nt,Ct-ie-kt*nt),On&&Ta(D,On,se.tween)}}else D.isActive&&Ge!==ie&&N.restart(!0)}).pause()),l&&(xm[l]=D),d=D.trigger=ei(d||f!==!0&&f),ce=d&&d._gsap&&d._gsap.stRevert,ce&&(ce=ce(D)),f=f===!0?d:ei(f),Ri(a)&&(a={targets:d,className:a}),f&&(p===!1||p===zi||(p=!p&&f.parentNode&&f.parentNode.style&&Hi(f.parentNode).display==="flex"?!1:gn),D.pin=f,Pe=Ie.core.getCache(f),Pe.spacer?Je=Pe.pinState:(b&&(b=ei(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),Pe.spacerIsNative=!!b,b&&(Pe.spacerState=Yu(b))),Pe.spacer=st=b||wt.createElement("div"),st.classList.add("pin-spacer"),l&&st.classList.add("pin-spacer-"+l),Pe.pinState=Je=Yu(f)),n.force3D!==!1&&Ie.set(f,{force3D:!0}),D.spacer=st=Pe.spacer,we=Hi(f),ue=we[p+C.os2],M=Ie.getProperty(f),z=Ie.quickSetter(f,C.a,Mn),dm(f,st,we),ge=Yu(f)),Z){Xt=_o(Z)?wx(Z,Ax):Ax,X=qu("scroller-start",l,I,C,Xt,0),_t=qu("scroller-end",l,I,C,Xt,0,X),R=X["offset"+C.op.d2];var te=ei(Qr(I,"content")||I);ot=this.markerStart=qu("start",l,te,C,Xt,R,0,w),We=this.markerEnd=qu("end",l,te,C,Xt,R,0,w),w&&(Me=Ie.quickSetter([ot,We],C.a,Mn)),!O&&!(nr.length&&Qr(I,"fixedMarkers")===!0)&&(cw(V?Et:I),Ie.set([X,_t],{force3D:!0}),Y=Ie.quickSetter(X,C.a,Mn),xe=Ie.quickSetter(_t,C.a,Mn))}if(w){var re=w.vars.onUpdate,he=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){D.update(0,0,1),re&&re.apply(w,he||[])})}if(D.previous=function(){return dt[dt.indexOf(D)-1]},D.next=function(){return dt[dt.indexOf(D)+1]},D.revert=function(ie,He){if(!He)return D.kill(!0);var Le=ie!==!1||!D.enabled,Ze=Gn;Le!==D.isReverted&&(Le&&(oe=Math.max(ae(),D.scroll.rec||0),$=D.progress,J=i&&i.progress()),ot&&[ot,We,X,_t].forEach(function(un){return un.style.display=Le?"none":"block"}),Le&&(Gn=D,D.update(Le)),f&&(!T||!D.isActive)&&(Le?pw(f,st,Je):dm(f,st,Hi(f),ne)),Le||D.update(Le),Gn=Ze,D.isReverted=Le)},D.refresh=function(ie,He,Le,Ze){if(!((Gn||!D.enabled)&&!He)){if(f&&ie&&Vi){Rn(s,"scrollEnd",Zx);return}!ii&&pe&&pe(D),Gn=D,se.tween&&!Le&&(se.tween.kill(),se.tween=0),_e&&_e.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Se){return Se.vars.immediateRender&&Se.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var un=Ae(),ft=je(),kt=w?w.duration():Pr(I,C),zt=nt<=.01||!nt,Nt=0,Ct=Ze||0,St=_o(Le)?Le.end:n.end,On=n.endTrigger||d,Ft=_o(Le)?Le.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),Sn=D.pinnedContainer=n.pinnedContainer&&ei(n.pinnedContainer,D),mi=d&&Math.max(0,dt.indexOf(D))||0,dn=mi,_n,bn,Ir,To,En,tn,Pi,E,B,q,G,W,ve;for(Z&&_o(Le)&&(W=Ie.getProperty(X,C.p),ve=Ie.getProperty(_t,C.p));dn-- >0;)tn=dt[dn],tn.end||tn.refresh(0,1)||(Gn=D),Pi=tn.pin,Pi&&(Pi===d||Pi===f||Pi===Sn)&&!tn.isReverted&&(q||(q=[]),q.unshift(tn),tn.revert(!0,!0)),tn!==dt[dn]&&(mi--,dn--);for(Xn(Ft)&&(Ft=Ft(D)),Ft=Sx(Ft,"start",D),Re=Ix(Ft,d,un,C,ae(),ot,X,D,ft,Q,O,kt,w,D._startClamp&&"_startClamp")||(f?-.001:0),Xn(St)&&(St=St(D)),Ri(St)&&!St.indexOf("+=")&&(~St.indexOf(" ")?St=(Ri(Ft)?Ft.split(" ")[0]:"")+St:(Nt=Ju(St.substr(2),un),St=Ri(Ft)?Ft:(w?Ie.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,Re):Re)+Nt,On=d)),St=Sx(St,"end",D),qe=Math.max(Re,Ix(St||(On?"100% 0":kt),On,un,C,ae()+Nt,We,_t,D,ft,Q,O,kt,w,D._endClamp&&"_endClamp"))||-.001,Nt=0,dn=mi;dn--;)tn=dt[dn]||{},Pi=tn.pin,Pi&&tn.start-tn._pinPush<=Re&&!w&&tn.end>0&&(_n=tn.end-(D._startClamp?Math.max(0,tn.start):tn.start),(Pi===d&&tn.start-tn._pinPush<Re||Pi===Sn)&&isNaN(Ft)&&(Nt+=_n*(1-tn.progress)),Pi===f&&(Ct+=_n));if(Re+=Nt,qe+=Nt,D._startClamp&&(D._startClamp+=Nt),D._endClamp&&!ii&&(D._endClamp=qe||-.001,qe=Math.min(qe,Pr(I,C))),nt=qe-Re||(Re-=.01)&&.001,zt&&($=Ie.utils.clamp(0,1,Ie.utils.normalize(Re,qe,oe))),D._pinPush=Ct,ot&&Nt&&(_n={},_n[C.a]="+="+Nt,Sn&&(_n[C.p]="-="+ae()),Ie.set([ot,We],_n)),f&&!(_m&&D.end>=Pr(I,C)))_n=Hi(f),To=C===mn,Ir=ae(),K=parseFloat(M(C.a))+Ct,!kt&&qe>1&&(G=(V?wt.scrollingElement||Ci:I).style,G={style:G,value:G["overflow"+C.a.toUpperCase()]},V&&Hi(Et)["overflow"+C.a.toUpperCase()]!=="scroll"&&(G.style["overflow"+C.a.toUpperCase()]="scroll")),dm(f,st,_n),ge=Yu(f),bn=es(f,!0),E=O&&jr(I,To?Vn:mn)(),p?(ne=[p+C.os2,nt+Ct+Mn],ne.t=st,dn=p===gn?nd(f,C)+nt+Ct:0,dn&&(ne.push(C.d,dn+Mn),st.style.flexBasis!=="auto"&&(st.style.flexBasis=dn+Mn)),Ia(ne),Sn&&dt.forEach(function(Se){Se.pin===Sn&&Se.vars.pinSpacing!==!1&&(Se._subPinOffset=!0)}),O&&ae(oe)):(dn=nd(f,C),dn&&st.style.flexBasis!=="auto"&&(st.style.flexBasis=dn+Mn)),O&&(En={top:bn.top+(To?Ir-Re:E)+Mn,left:bn.left+(To?E:Ir-Re)+Mn,boxSizing:"border-box",position:"fixed"},En[vo]=En["max"+Da]=Math.ceil(bn.width)+Mn,En[yo]=En["max"+wm]=Math.ceil(bn.height)+Mn,En[zi]=En[zi+sc]=En[zi+ic]=En[zi+oc]=En[zi+rc]="0",En[gn]=_n[gn],En[gn+sc]=_n[gn+sc],En[gn+ic]=_n[gn+ic],En[gn+oc]=_n[gn+oc],En[gn+rc]=_n[gn+rc],xt=gw(Je,En,T),ii&&ae(0)),i?(B=i._initted,lm(1),i.render(i.duration(),!0,!0),ee=M(C.a)-K+nt+Ct,j=Math.abs(nt-ee)>1,O&&j&&xt.splice(xt.length-2,2),i.render(0,!0,!0),B||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),lm(0)):ee=nt,G&&(G.value?G.style["overflow"+C.a.toUpperCase()]=G.value:G.style.removeProperty("overflow-"+C.a));else if(d&&ae()&&!w)for(bn=d.parentNode;bn&&bn!==Et;)bn._pinOffset&&(Re-=bn._pinOffset,qe-=bn._pinOffset),bn=bn.parentNode;q&&q.forEach(function(Se){return Se.revert(!1,!0)}),D.start=Re,D.end=qe,De=lt=ii?oe:ae(),!w&&!ii&&(De<oe&&ae(oe),D.scroll.rec=0),D.revert(!1,!0),Fe=Wn(),N&&(Ge=-1,N.restart(!0)),Gn=0,i&&P&&(i._initted||J)&&i.progress()!==J&&i.progress(J||0,!0).render(i.time(),!0,!0),(zt||$!==D.progress||w||g||i&&!i._initted)&&(i&&!P&&(i._initted||$||i.vars.immediateRender!==!1)&&i.totalProgress(w&&Re<-.001&&!$?Ie.utils.normalize(Re,qe,0):$,!0),D.progress=zt||(De-Re)/nt===$?0:$),f&&p&&(st._pinOffset=Math.round(D.progress*ee)),_e&&_e.invalidate(),isNaN(W)||(W-=Ie.getProperty(X,C.p),ve-=Ie.getProperty(_t,C.p),Zu(X,C,W),Zu(ot,C,W-(Ze||0)),Zu(_t,C,ve),Zu(We,C,ve-(Ze||0))),zt&&!ii&&D.update(),h&&!ii&&!U&&(U=!0,h(D),U=!1)}},D.getVelocity=function(){return(ae()-lt)/(Wn()-Jl)*1e3||0},D.endAnimation=function(){Kl(D.callbackAnimation),i&&(_e?_e.progress(1):i.paused()?P||Kl(i,D.direction<0,1):Kl(i,i.reversed()))},D.labelToScroll=function(ie){return i&&i.labels&&(Re||D.refresh()||Re)+i.labels[ie]/i.duration()*nt||0},D.getTrailing=function(ie){var He=dt.indexOf(D),Le=D.direction>0?dt.slice(0,He).reverse():dt.slice(He+1);return(Ri(ie)?Le.filter(function(Ze){return Ze.vars.preventOverlaps===ie}):Le).filter(function(Ze){return D.direction>0?Ze.end<=Re:Ze.start>=qe})},D.update=function(ie,He,Le){if(!(w&&!Le&&!ie)){var Ze=ii===!0?oe:D.scroll(),un=ie?0:(Ze-Re)/nt,ft=un<0?0:un>1?1:un||0,kt=D.progress,zt,Nt,Ct,St,On,Ft,Sn,mi;if(He&&(lt=De,De=w?ae():Ze,y&&(le=de,de=i&&!P?i.totalProgress():ft)),m&&f&&!Gn&&!Hu&&Vi&&(!ft&&Re<Ze+(Ze-lt)/(Wn()-Jl)*m?ft=1e-4:ft===1&&qe>Ze+(Ze-lt)/(Wn()-Jl)*m&&(ft=.9999)),ft!==kt&&D.enabled){if(zt=D.isActive=!!ft&&ft<1,Nt=!!kt&&kt<1,Ft=zt!==Nt,On=Ft||!!ft!=!!kt,D.direction=ft>kt?1:-1,D.progress=ft,On&&!Gn&&(Ct=ft&&!kt?0:ft===1?1:kt===1?2:3,P&&(St=!Ft&&F[Ct+1]!=="none"&&F[Ct+1]||F[Ct],mi=i&&(St==="complete"||St==="reset"||St in i))),A&&(Ft||mi)&&(mi||u||!i)&&(Xn(A)?A(D):D.getTrailing(A).forEach(function(Ir){return Ir.endAnimation()})),P||(_e&&!Gn&&!Hu?(_e._dp._time-_e._start!==_e._time&&_e.render(_e._dp._time-_e._start),_e.resetTo?_e.resetTo("totalProgress",ft,i._tTime/i._tDur):(_e.vars.totalProgress=ft,_e.invalidate().restart())):i&&i.totalProgress(ft,!!(Gn&&(Fe||ie)))),f){if(ie&&p&&(st.style[p+C.os2]=ue),!O)z(jl(K+ee*ft));else if(On){if(Sn=!ie&&ft>kt&&qe+1>Ze&&Ze+1>=Pr(I,C),T)if(!ie&&(zt||Sn)){var dn=es(f,!0),_n=Ze-Re;Dx(f,Et,dn.top+(C===mn?_n:0)+Mn,dn.left+(C===mn?0:_n)+Mn)}else Dx(f,st);Ia(zt||Sn?xt:ge),j&&ft<1&&zt||z(K+(ft===1&&!Sn?ee:0))}}y&&!se.tween&&!Gn&&!Hu&&N.restart(!0),a&&(Ft||S&&ft&&(ft<1||!cm))&&lc(a.targets).forEach(function(Ir){return Ir.classList[zt||S?"add":"remove"](a.className)}),o&&!P&&!ie&&o(D),On&&!Gn?(P&&(mi&&(St==="complete"?i.pause().totalProgress(1):St==="reset"?i.restart(!0).pause():St==="restart"?i.restart(!0):i[St]()),o&&o(D)),(Ft||!cm)&&(c&&Ft&&Ta(D,c),k[Ct]&&Ta(D,k[Ct]),S&&(ft===1?D.kill(!1,1):k[Ct]=0),Ft||(Ct=ft===1?1:3,k[Ct]&&Ta(D,k[Ct]))),v&&!zt&&Math.abs(D.getVelocity())>(Ql(v)?v:2500)&&(Kl(D.callbackAnimation),_e?_e.progress(1):Kl(i,St==="reverse"?1:!ft,1))):P&&o&&!Gn&&o(D)}if(xe){var bn=w?Ze/w.duration()*(w._caScrollDist||0):Ze;Y(bn+(X._isFlipped?1:0)),xe(bn)}Me&&Me(-Ze/w.duration()*(w._caScrollDist||0))}},D.enable=function(ie,He){D.enabled||(D.enabled=!0,Rn(I,"resize",ec),V||Rn(I,"scroll",Aa),pe&&Rn(s,"refreshInit",pe),ie!==!1&&(D.progress=$=0,De=lt=Ge=ae()),He!==!1&&D.refresh())},D.getTween=function(ie){return ie&&se?se.tween:_e},D.setPositions=function(ie,He,Le,Ze){if(w){var un=w.scrollTrigger,ft=w.duration(),kt=un.end-un.start;ie=un.start+kt*ie/ft,He=un.start+kt*He/ft}D.refresh(!1,!1,{start:bx(ie,Le&&!!D._startClamp),end:bx(He,Le&&!!D._endClamp)},Ze),D.update()},D.adjustPinSpacing=function(ie){if(ne&&ie){var He=ne.indexOf(C.d)+1;ne[He]=parseFloat(ne[He])+ie+Mn,ne[1]=parseFloat(ne[1])+ie+Mn,Ia(ne)}},D.disable=function(ie,He){if(ie!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,He||_e&&_e.pause(),oe=0,Pe&&(Pe.uncache=1),pe&&An(s,"refreshInit",pe),N&&(N.pause(),se.tween&&se.tween.kill()&&(se.tween=0)),!V)){for(var Le=dt.length;Le--;)if(dt[Le].scroller===I&&dt[Le]!==D)return;An(I,"resize",ec),V||An(I,"scroll",Aa)}},D.kill=function(ie,He){D.disable(ie,He),_e&&!He&&_e.kill(),l&&delete xm[l];var Le=dt.indexOf(D);Le>=0&&dt.splice(Le,1),Le===ni&&ju>0&&ni--,Le=0,dt.forEach(function(Ze){return Ze.scroller===D.scroller&&(Le=1)}),Le||ii||(D.scroll.rec=0),i&&(i.scrollTrigger=null,ie&&i.revert({kill:!1}),He||i.kill()),ot&&[ot,We,X,_t].forEach(function(Ze){return Ze.parentNode&&Ze.parentNode.removeChild(Ze)}),ac===D&&(ac=0),f&&(Pe&&(Pe.uncache=1),Le=0,dt.forEach(function(Ze){return Ze.pin===f&&Le++}),Le||(Pe.spacer=0)),n.onKill&&n.onKill(D)},dt.push(D),D.enable(!1,!1),ce&&ce(D),i&&i.add&&!nt){var ze=D.update;D.update=function(){D.update=ze,ut.cache++,Re||qe||D.refresh()},Ie.delayedCall(.01,D.update),nt=.01,Re=qe=0}else D.refresh();f&&fw()},s.register=function(n){return Ra||(Ie=n||Vx(),Hx()&&window.document&&s.enable(),Ra=$l),Ra},s.defaults=function(n){if(n)for(var i in n)Xu[i]=n[i];return Xu},s.disable=function(n,i){$l=0,dt.forEach(function(o){return o[i?"kill":"disable"](n)}),An(gt,"wheel",Aa),An(wt,"scroll",Aa),clearInterval(zu),An(wt,"touchcancel",Cr),An(Et,"touchstart",Cr),Gu(An,wt,"pointerdown,touchstart,mousedown",Ex),Gu(An,wt,"pointerup,touchend,mouseup",Tx),td.kill(),Vu(An);for(var r=0;r<ut.length;r+=3)Wu(An,ut[r],ut[r+1]),Wu(An,ut[r],ut[r+2])},s.enable=function(){if(gt=window,wt=document,Ci=wt.documentElement,Et=wt.body,Ie){if(lc=Ie.utils.toArray,tc=Ie.utils.clamp,gm=Ie.core.context||Cr,lm=Ie.core.suppressOverwrites||Cr,Sm=gt.history.scrollRestoration||"auto",vm=gt.pageYOffset||0,Ie.core.globals("ScrollTrigger",s),Et){$l=1,Pa=document.createElement("div"),Pa.style.height="100vh",Pa.style.position="absolute",jx(),ow(),en.register(Ie),s.isTouch=en.isTouch,Us=en.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),mm=en.isTouch===1,Rn(gt,"wheel",Aa),Mm=[gt,wt,Ci,Et],Ie.matchMedia?(s.matchMedia=function(h){var u=Ie.matchMedia(),d;for(d in h)u.add(d,h[d]);return u},Ie.addEventListener("matchMediaInit",function(){Jx(),Rm()}),Ie.addEventListener("matchMediaRevert",function(){return Kx()}),Ie.addEventListener("matchMedia",function(){xo(0,1),Eo("matchMedia")}),Ie.matchMedia().add("(orientation: portrait)",function(){return um(),um})):console.warn("Requires GSAP 3.11.0 or later"),um(),Rn(wt,"scroll",Aa);var n=Et.hasAttribute("style"),i=Et.style,r=i.borderTopStyle,o=Ie.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=es(Et),mn.m=Math.round(a.top+mn.sc())||0,Vn.m=Math.round(a.left+Vn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(Et.setAttribute("style",""),Et.removeAttribute("style")),zu=setInterval(Rx,250),Ie.delayedCall(.5,function(){return Hu=0}),Rn(wt,"touchcancel",Cr),Rn(Et,"touchstart",Cr),Gu(Rn,wt,"pointerdown,touchstart,mousedown",Ex),Gu(Rn,wt,"pointerup,touchend,mouseup",Tx),pm=Ie.utils.checkPrefix("transform"),Qu.push(pm),Ra=Wn(),td=Ie.delayedCall(.2,xo).pause(),Ca=[wt,"visibilitychange",function(){var h=gt.innerWidth,u=gt.innerHeight;wt.hidden?(yx=h,Mx=u):(yx!==h||Mx!==u)&&ec()},wt,"DOMContentLoaded",xo,gt,"load",xo,gt,"resize",ec],Vu(Rn),dt.forEach(function(h){return h.enable(0,1)}),l=0;l<ut.length;l+=3)Wu(An,ut[l],ut[l+1]),Wu(An,ut[l],ut[l+2])}else if(wt){var c=function h(){s.enable(),wt.removeEventListener("DOMContentLoaded",h)};wt.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(cm=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(zu)||(zu=i)&&setInterval(Rx,i),"ignoreMobileResize"in n&&(mm=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Vu(An)||Vu(Rn,n.autoRefreshEvents||"none"),Bx=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=ei(n),o=ut.indexOf(r),a=So(r);~o&&ut.splice(o,a?6:2),i&&(a?nr.unshift(gt,i,Et,i,Ci,i):nr.unshift(r,i))},s.clearMatchMedia=function(n){dt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(Ri(n)?ei(n):n).getBoundingClientRect(),a=o[r?vo:yo]*i||0;return r?o.right-a>0&&o.left+a<gt.innerWidth:o.bottom-a>0&&o.top+a<gt.innerHeight},s.positionInViewport=function(n,i,r){Ri(n)&&(n=ei(n));var o=n.getBoundingClientRect(),a=o[r?vo:yo],l=i==null?a/2:i in id?id[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/gt.innerWidth:(o.top+l)/gt.innerHeight},s.killAll=function(n){if(dt.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=bo.killAll||[];bo={},i.forEach(function(r){return r()})}},s})();$e.version="3.15.0";$e.saveStyles=function(s){return s?lc(s).forEach(function(e){if(e&&e.style){var t=Ai.indexOf(e);t>=0&&Ai.splice(t,5),Ai.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ie.core.getCache(e),gm())}}):Ai};$e.revert=function(s,e){return Rm(!s,e)};$e.create=function(s,e){return new $e(s,e)};$e.refresh=function(s){return s?ec(!0):(Ra||$e.register())&&xo(!0)};$e.update=function(s){return++ut.cache&&ts(s===!0?2:0)};$e.clearScrollMemory=$x;$e.maxScroll=function(s,e){return Pr(s,e?Vn:mn)};$e.getScrollFunc=function(s,e){return jr(ei(s),e?Vn:mn)};$e.getById=function(s){return xm[s]};$e.getAll=function(){return dt.filter(function(s){return s.vars.id!=="ScrollSmoother"})};$e.isScrolling=function(){return!!Vi};$e.snapDirectional=Am;$e.addEventListener=function(s,e){var t=bo[s]||(bo[s]=[]);~t.indexOf(e)||t.push(e)};$e.removeEventListener=function(s,e){var t=bo[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};$e.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,o=function(c,h){var u=[],d=[],f=Ie.delayedCall(i,function(){h(u,d),u=[],d=[]}).pause();return function(p){u.length||f.restart(!0),u.push(p.trigger),d.push(p),r<=u.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Xn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Xn(r)&&(r=r(),Rn($e,"refresh",function(){return r=e.batchMax()})),lc(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push($e.create(c))}),t};var Ox=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},fm=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(en.isTouch?" pinch-zoom":""):"none",e===Ci&&s(Et,t)},Ku={auto:1,scroll:1},xw=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||Ie.core.getCache(r),a=Wn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==Et&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Ku[(l=Hi(r)).overflowY]||Ku[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!So(r)&&(Ku[(l=Hi(r)).overflowY]||Ku[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},ev=function(e,t,n,i){return en.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&xw,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Rn(wt,en.eventTypes[0],Fx,!1,!0)},onDisable:function(){return An(wt,en.eventTypes[0],Fx,!0)}})},vw=/(input|label|select|textarea)/i,Nx,Fx=function(e){var t=vw.test(e.target.tagName);(t||Nx)&&(e._gsapAllow=!0,Nx=t)},yw=function(e){_o(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,l,c=ei(e.target)||Ci,h=Ie.core.globals().ScrollSmoother,u=h&&h.get(),d=Us&&(e.content&&ei(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),f=jr(c,mn),p=jr(c,Vn),g=1,m=(en.isTouch&&gt.visualViewport?gt.visualViewport.scale*gt.visualViewport.width:gt.outerWidth)/gt.innerWidth,_=0,x=Xn(i)?function(){return i(a)}:function(){return i||2.8},S,y,T=ev(c,e.type,!0,r),b=function(){return y=!1},w=Cr,v=Cr,A=function(){l=Pr(c,mn),v=tc(Us?1:0,l),n&&(w=tc(0,Pr(c,Vn))),S=Mo},C=function(){d._gsap.y=jl(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},P=function(){if(y){requestAnimationFrame(b);var Z=jl(a.deltaY/2),Q=v(f.v-Z);if(d&&Q!==f.v+f.offset){f.offset=Q-f.v;var D=jl((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",d._gsap.y=D+"px",f.cacheID=ut.cache,ts()}return!0}f.offset&&C(),y=!0},I,H,V,O,k=function(){A(),I.isActive()&&I.vars.scrollY>l&&(f()>l?I.progress(1)&&f(l):I.resetTo("scrollY",l))};return d&&Ie.set(d,{y:"+=0"}),e.ignoreCheck=function(F){return Us&&F.type==="touchmove"&&P(F)||g>1.05&&F.type!=="touchstart"||a.isGesturing||F.touches&&F.touches.length>1},e.onPress=function(){y=!1;var F=g;g=jl((gt.visualViewport&&gt.visualViewport.scale||1)/m),I.pause(),F!==g&&fm(c,g>1.01?!0:n?!1:"x"),H=p(),V=f(),A(),S=Mo},e.onRelease=e.onGestureStart=function(F,Z){if(f.offset&&C(),!Z)O.restart(!0);else{ut.cache++;var Q=x(),D,pe;n&&(D=p(),pe=D+Q*.05*-F.velocityX/.227,Q*=Ox(p,D,pe,Pr(c,Vn)),I.vars.scrollX=w(pe)),D=f(),pe=D+Q*.05*-F.velocityY/.227,Q*=Ox(f,D,pe,Pr(c,mn)),I.vars.scrollY=v(pe),I.invalidate().duration(Q).play(.01),(Us&&I.vars.scrollY>=l||D>=l-1)&&Ie.to({},{onUpdate:k,duration:Q})}o&&o(F)},e.onWheel=function(){I._ts&&I.pause(),Wn()-_>1e3&&(S=0,_=Wn())},e.onChange=function(F,Z,Q,D,pe){if(Mo!==S&&A(),Z&&n&&p(w(D[2]===Z?H+(F.startX-F.x):p()+Z-D[1])),Q){f.offset&&C();var Ae=pe[2]===Q,je=Ae?V+F.startY-F.y:f()+Q-pe[1],Ge=v(je);Ae&&je!==Ge&&(V+=Ge-je),f(Ge)}(Q||Z)&&ts()},e.onEnable=function(){fm(c,n?!1:"x"),$e.addEventListener("refresh",k),Rn(gt,"resize",k),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=p.smooth=!1),T.enable()},e.onDisable=function(){fm(c,!0),An(gt,"resize",k),$e.removeEventListener("refresh",k),T.kill()},e.lockAxis=e.lockAxis!==!1,a=new en(e),a.iOS=Us,Us&&!f()&&f(1),Us&&Ie.ticker.add(Cr),O=a._dc,I=Ie.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Qx(f,f(),function(){return I.pause()})},onUpdate:ts,onComplete:O.vars.onComplete}),a};$e.sort=function(s){if(Xn(s))return dt.sort(s);var e=gt.pageYOffset||0;return $e.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+gt.innerHeight}),dt.sort(s||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};$e.observe=function(s){return new en(s)};$e.normalizeScroll=function(s){if(typeof s>"u")return ti;if(s===!0&&ti)return ti.enable();if(s===!1){ti&&ti.kill(),ti=s;return}var e=s instanceof en?s:yw(s);return ti&&ti.target===e.target&&ti.kill(),So(e.target)&&(ti=e),e};$e.core={_getVelocityProp:ku,_inputObserver:ev,_scrollers:ut,_proxies:nr,bridge:{ss:function(){Vi||Eo("scrollStart"),Vi=Wn()},ref:function(){return Gn}}};Vx()&&Ie.registerPlugin($e);var sd=class s{element=Dr(Vm).nativeElement;enter(e,t=!1){e.pointerType==="touch"&&!t||(this.move(e),this.element.classList.add("ripple-active"))}move(e){let t=this.element.getBoundingClientRect();!t.width||!t.height||this.position((e.clientX-t.left)/t.width*100,(e.clientY-t.top)/t.height*100)}focus(){this.position(50,50),this.element.classList.add("ripple-active")}leave(){this.element.classList.remove("ripple-active")}release(e){e.pointerType==="touch"&&this.leave()}position(e,t){this.element.style.setProperty("--ripple-x",`${e}%`),this.element.style.setProperty("--ripple-y",`${t}%`),this.element.style.setProperty("--ripple-size",`${Math.hypot(this.element.clientWidth,this.element.clientHeight)*2}px`)}static \u0275fac=function(t){return new(t||s)};static \u0275dir=Wm({type:s,selectors:[["","appRipple",""]],hostAttrs:[1,"position-aware-ripple"],hostBindings:function(t,n){t&1&&qm("pointerenter",function(r){return n.enter(r)})("pointermove",function(r){return n.move(r)})("pointerleave",function(){return n.leave()})("pointerdown",function(r){return n.enter(r,!0)})("pointerup",function(r){return n.release(r)})("pointercancel",function(){return n.leave()})("focusin",function(){return n.focus()})("focusout",function(){return n.leave()})}})};function nv(s){let e=s.quaternion.clone().multiply(s.rotation);return{center:s.offset.clone().applyQuaternion(s.quaternion).add(s.position),axes:[new L(1,0,0),new L(0,1,0),new L(0,0,1)].map(t=>t.applyQuaternion(e)),half:s.halfSize.toArray(),radius:s.halfSize.length()}}function Mw(s,e){let t=nv(s),n=nv(e),i=n.center.clone().sub(t.center);if(i.lengthSq()>=(t.radius+n.radius)**2)return;let r=[...t.axes,...n.axes];for(let l of t.axes)for(let c of n.axes)r.push(l.clone().cross(c));let o=1/0,a;for(let l of r){if(l.lengthSq()<1e-10)continue;l.normalize();let h=t.axes.reduce((u,d,f)=>u+Math.abs(d.dot(l))*t.half[f],0)+n.axes.reduce((u,d,f)=>u+Math.abs(d.dot(l))*n.half[f],0)-Math.abs(i.dot(l));if(h<=1e-7)return;h<o&&(o=h,a=l.clone().multiplyScalar(i.dot(l)<0?-1:1))}return a?.multiplyScalar(o)}function Cm(s){for(let e=0;e<64;e++){let t=0;for(let n=0;n<s.length;n++)for(let i=n+1;i<s.length;i++){let r=s[n].inverseMass??1,o=s[i].inverseMass??1,a=r+o;if(a===0)continue;let l=Mw(s[n],s[i]);l&&(t++,l.addScaledVector(l.clone().normalize(),.001),s[n].position.addScaledVector(l,-r/a),s[i].position.addScaledVector(l,o/a))}if(!t)return}}var Pm=Math.PI/60;function iv(s,e){let t=s*2.399963229728653,n=3.8+s*7%13/12*2;return Math.sin(t+e*Math.PI*2/n)*Pm}function rv(s,e,t){let n=Math.min(Math.max(t,0),.05),i=e-s;if(Math.abs(i)<1e-5)return e;let r=Math.min(Math.abs(i)*(1-Math.exp(-n/.12)),.42*n);return s+Math.sign(i)*r}function od(s){let e=new Set,t=new Set,n=new Set;for(let i of s)i?.traverse(r=>{let o=r;if(o.geometry&&e.add(o.geometry),o.material)for(let a of Array.isArray(o.material)?o.material:[o.material])t.add(a)});for(let i of t){for(let r of Object.values(i))r instanceof Pn&&n.add(r);if(i instanceof Cn)for(let r of Object.values(i.uniforms)){let o=Array.isArray(r.value)?r.value:[r.value];for(let a of o)a instanceof Pn&&n.add(a)}}e.forEach(i=>i.dispose()),t.forEach(i=>i.dispose()),n.forEach(i=>i.dispose())}var sv=["CRP","Troponin I","SARS-CoV-2","Vancomycin","Chloride Ions","Cystatin C","Insulin"];var{PI:Bs,sin:ir,cos:rr,tan:CC,asin:cv,atan2:Sw,acos:bw,sqrt:Ew,abs:Tw,round:hv}=Math,Gi=Bs/180,uv=1e3*60*60*24,dv=2440588,hc=2451545;function ad(s){return new Date((s+.5-dv)*uv)}function ww(s){return s.valueOf()/uv-.5+dv-hc}function Aw(s){let e=2e3+s/365.2425,t;return e<1920?(t=e-1900,-2.79+t*(1.494119+t*(-.0598939+t*(.0061966-t*197e-6)))):e<1941?(t=e-1920,21.2+t*(.84493+t*(-.0761+t*.0020936))):e<1961?(t=e-1950,29.07+t*(.407+t*(-1/233+t/2547))):e<1986?(t=e-1975,45.45+t*(1.067+t*(-1/260-t/718))):e<2005?(t=e-2e3,63.86+t*(.3345+t*(-.060374+t*(.0017275+t*(651814e-9+t*2373599e-11))))):e<2050?(t=e-2e3,62.92+t*(.32217+t*.005589)):(t=(e-1820)/100,-20+32*t*t-.5628*(2150-e))}function Im(s){return s+Aw(s)/86400}function fv(s,e,t){return cv(ir(e)*ir(t)+rr(e)*rr(t)*rr(s))}function pv(s,e){return Gi*(280.46061837+360.98564736629*s)-e}function Dm(s){let e=s/36525,t=Gi*(280.46646+e*(36000.76983+e*3032e-7)),n=Gi*(357.52911+e*(35999.05029-e*1537e-7)),i=ir(n),r=rr(n),o=Gi*((1.914602-e*(.004817+e*14e-6))*i+(.019993-101e-6*e)*2*i*r+289e-6*i*(3-4*i*i)),a=Gi*(125.04-1934.136*e),l=t+o-Gi*(.00569+.00478*ir(a)),c=Gi*(23.439291-e*(.0130042+e*(16e-8-e*504e-9)))+Gi*.00256*rr(a);return{ra:Sw(rr(c)*ir(l),rr(l)),dec:cv(ir(c)*ir(l))}}var ov=[[-.833,"sunrise","sunset"],[-.3,"sunriseEnd","sunsetStart"],[-6,"dawn","dusk"],[-12,"nauticalDawn","nauticalDusk"],[-18,"nightEnd","night"],[6,"goldenHourEnd","goldenHour"]];var av=9e-4;function Rw(s){return-2.076*Ew(s)/60}function mv(s){return s-2*Bs*hv(s/(2*Bs))}function Cw(s,e){for(let t=0;t<3;t++){let n=mv(pv(s,e)-Dm(Im(s)).ra);s-=n/(2*Bs)}return s}function lv(s,e,t,n,i,r){let o=(ir(s)-ir(i)*ir(r))/(rr(i)*rr(r));if(o<-1||o>1)return NaN;let a=e+t*bw(o)/(2*Bs);for(let l=0;l<2;l++){let c=Dm(Im(a)),h=mv(pv(a,n)-c.ra),u=fv(h,i,c.dec),d=rr(i)*rr(c.dec)*ir(h);if(Tw(d)<1e-6)break;a+=(u-s)/(2*Bs*d)}return a}function gv(s,e,t,n=0){let i=Gi*-t,r=Gi*e,o=Rw(n),a=hv(ww(s)-av-i/(2*Bs)),l=Cw(a+av+i/(2*Bs),i),c=Dm(Im(l)).dec,h={solarNoon:ad(l+hc),nadir:ad(l+hc-.5)};for(let[u,d,f]of ov){let p=(u+o)*Gi,g=lv(p,l,-1,i,r,c),m=lv(p,l,1,i,r,c);h[d]=Number.isNaN(g)?null:ad(g+hc),h[f]=Number.isNaN(m)?null:ad(m+hc)}if(h.sunrise===null){let u=fv(0,r,c),d=(ov[0][0]+o)*Gi;h.alwaysUp=u>d,h.alwaysDown=u<=d}return h}var PC=new Int32Array([0,0,1,0,6288774,-20905355,2,0,-1,0,1274027,-3699111,2,0,0,0,658314,-2955968,0,0,2,0,213618,-569925,0,1,0,0,-185116,48888,0,0,0,2,-114332,-3149,2,0,-2,0,58793,246158,2,-1,-1,0,57066,-152138,2,0,1,0,53322,-170733,2,-1,0,0,45758,-204586,0,1,-1,0,-40923,-129620,1,0,0,0,-34720,108743,0,1,1,0,-30383,104755,2,0,0,-2,15327,10321,0,0,1,2,-12528,0,0,0,1,-2,10980,79661,4,0,-1,0,10675,-34782,0,0,3,0,10034,-23210,4,0,-2,0,8548,-21636,2,1,-1,0,-7888,24208,2,1,0,0,-6766,30824,1,0,-1,0,-5163,-8379,1,1,0,0,4987,-16675,2,-1,1,0,4036,-12831,2,0,2,0,3994,-10445,4,0,0,0,3861,-11650,2,0,-3,0,3665,14403,0,1,-2,0,-2689,-7003,2,0,-1,2,-2602,0,2,-1,-2,0,2390,10056,1,0,1,0,-2348,6322,2,-2,0,0,2236,-9884,0,1,2,0,-2120,5751,0,2,0,0,-2069,0,2,-2,-1,0,2048,-4950,2,0,1,-2,-1773,4130,2,0,0,2,-1595,0,4,-1,-1,0,1215,-3958,0,0,2,2,-1110,0,3,0,-1,0,-892,3258,2,1,1,0,-810,2616,4,-1,-2,0,759,-1897,0,2,-1,0,-713,-2117,2,2,-1,0,-700,2354,2,1,-2,0,691,0,2,-1,0,-2,596,0,4,0,1,0,549,-1423,0,0,4,0,537,-1117,4,-1,0,0,520,-1571,1,0,-2,0,-487,-1739,2,1,0,-2,-399,0,0,0,2,-2,-381,-4421,1,1,1,0,351,0,3,0,-2,0,-340,0,4,0,-3,0,330,0,2,-1,2,0,327,0,0,2,1,0,-323,1165,1,1,-1,0,299,0,2,0,3,0,294,0,2,0,-1,-2,0,8752]),IC=new Int32Array([0,0,0,1,5128122,0,0,1,1,280602,0,0,1,-1,277693,2,0,0,-1,173237,2,0,-1,1,55413,2,0,-1,-1,46271,2,0,0,1,32573,0,0,2,1,17198,2,0,1,-1,9266,0,0,2,-1,8822,2,-1,0,-1,8216,2,0,-2,-1,4324,2,0,1,1,4200,2,1,0,-1,-3359,2,-1,-1,1,2463,2,-1,0,1,2211,2,-1,-1,-1,2065,0,1,-1,-1,-1870,4,0,-1,-1,1828,0,1,0,1,-1794,0,0,0,3,-1749,0,1,-1,1,-1565,1,0,0,1,-1491,0,1,1,1,-1475,0,1,1,-1,-1410,0,1,0,-1,-1344,1,0,0,-1,-1335,0,0,3,1,1107,4,0,0,-1,1021,4,0,-1,1,833,0,0,1,-3,777,4,0,-2,1,671,2,0,0,-3,607,2,0,2,-1,596,2,-1,1,-1,491,2,0,-2,1,-451,0,0,3,-1,439,2,0,2,1,422,2,0,-3,-1,421,2,1,-1,1,-366,2,1,0,1,-351,4,0,0,1,331,2,-1,1,1,315,2,-2,0,-1,302,0,0,1,3,-283,2,1,1,-1,-229,1,1,0,-1,223,1,1,0,1,223,0,1,-2,-1,-220,2,1,-1,-1,-220,1,0,1,1,-185,2,-1,-2,-1,181,0,1,2,1,-177,4,0,-2,-1,176,4,-1,-1,-1,166,1,0,1,-1,-164,4,0,1,-1,132,1,0,-1,-1,-119,4,-1,0,-1,115,2,-2,0,1,107]);var Pw={winter:[420,1020],spring:[390,1170],summer:[360,1260],fall:[420,1080]};function Lm(s){return Number.isFinite(s.latitude)&&Math.abs(s.latitude)<=90&&Number.isFinite(s.longitude)&&Math.abs(s.longitude)<=180}function _v(s,e=!1){let t=(s.getMonth()+(e?6:0))%12,n=t<2||t===11?"winter":t<5?"spring":t<8?"summer":"fall",[i,r]=Pw[n],o=new Date(s.getFullYear(),s.getMonth(),s.getDate(),Math.floor(i/60),i%60),a=new Date(s.getFullYear(),s.getMonth(),s.getDate(),Math.floor(r/60),r%60);return{theme:s>=o&&s<a?"light":"dark",source:"seasonal",sunrise:o,sunset:a,season:n}}function Om(s,e){if(!e||!Lm(e))return _v(s);try{let{sunrise:t,sunset:n,alwaysUp:i,alwaysDown:r}=gv(s,e.latitude,e.longitude);if(i||r)return{theme:i?"light":"dark",source:"sun",sunrise:null,sunset:null,polar:i?"day":"night"};if(t&&n&&Number.isFinite(+t)&&Number.isFinite(+n))return{theme:s>=t&&s<n?"light":"dark",source:"sun",sunrise:t,sunset:n}}catch{}return _v(s,e.latitude<0)}var Iw=new Um("Screen geolocation",{providedIn:"root",factory:()=>typeof navigator>"u"?void 0:navigator.geolocation}),uc=class s{document=Dr(Bm);geolocation=Dr(Iw);location;destroyed=!1;current=zm(Om(new Date));daylight=this.current.asReadonly();constructor(){let e=Dr(km);if(!Km(Dr(Hm)))return;let t=this.document.defaultView;if(!t)return;let n=()=>this.refresh(),i=t.setInterval(n,3e4);this.document.addEventListener("visibilitychange",n),t.addEventListener("pageshow",n),e.onDestroy(()=>{this.destroyed=!0,t.clearInterval(i),this.document.removeEventListener("visibilitychange",n),t.removeEventListener("pageshow",n)});try{this.geolocation?.getCurrentPosition(r=>{if(this.destroyed)return;let{latitude:o,longitude:a}=r.coords;Lm({latitude:o,longitude:a})&&(this.location={latitude:o,longitude:a}),this.refresh()},()=>this.refresh(),{enableHighAccuracy:!1,timeout:8e3,maximumAge:15*6e4})}catch{this.refresh()}}refresh(){this.destroyed||this.current.set(Om(new Date,this.location))}static \u0275fac=function(t){return new(t||s)};static \u0275prov=Fm({token:s,factory:s.\u0275fac})};var Dw=["canvasHost"],Lw=["hero"],Ow=["readerCopy"],Nw=["sampleCopy"],Fw=["deviceStage"],Uw=["sensorCta"],Bw=["phrase"],kw=["sampleFluid"],zw=["instructionFluid"];function Hw(s,e){if(s&1&&(fe(0,"span",13,6),Te(2),me()),s&2){let t=e.$implicit;os(2),mc(t)}}function Vw(s,e){if(s&1&&(fe(0,"span",34,7),Te(2),me()),s&2){let t=e.$implicit;os(2),mc(t)}}function Gw(s,e){if(s&1&&(fe(0,"span",70,8),Te(2),me()),s&2){let t=e.$implicit;os(2),mc(t)}}rt.registerPlugin($e);$e.config({ignoreMobileResize:!0});var xv=class s{canvasHost;hero;readerCopy;sampleCopy;deviceStage;sensorCta;phraseElements;sampleFluidElements;instructionFluidElements;phrases=sv;screenTheme=Dr(uc);sampleFluids=["whole blood","serum","urine","saliva","water","most liquids"];initialModelPosition=new L(.7,-.05,0);initialModelRotation=new ln(.26,-.48,0);cartridgeInsertedX=1.6;cartridgePulledX=2.48;cartridgeSlotY=.14;cartridgeSlotZ=.015;cartridgeLengthScale=1.4;cartridgeWidthScale=1.7;cartridgeHeightScale=1.6;cartridgeSampleX=.6;cartridgeSampleZ=.15;scrollSpinBackProgress=.055;centerSensorDisplayRotation=new ln(Math.PI/2-.4,.5,0);scene;destroyed=!1;roundedGeometries=new mu;startupFrameId=0;startupTimerId=0;readerAssetReady=!1;sceneReady=!1;readerRevealed=!1;readerLoadTimeoutId=0;retiredObjects=[];camera;renderer;nebulaBackground;nebulaUniforms;topLight;frontFill;frameId=0;scrollTimeline;scrollTriggerInstance;phraseTimeline;openingOrientationTimeline;openingFrameId=0;openingScrollLocked=!1;openingScrollGuard=()=>{window.scrollY!==0&&window.scrollTo({top:0,behavior:"instant"})};openingInputGuard=e=>{e instanceof KeyboardEvent&&(!["ArrowUp","ArrowDown","PageUp","PageDown","Home","End"," "].includes(e.key)||e.target instanceof Element&&e.target.closest('input, textarea, select, [contenteditable="true"]'))||(e.preventDefault(),e.stopImmediatePropagation())};topRotationRig;model;readerFallbackParts=[];readerMaterials=[];readerFade={opacity:1};optimizedCartridgeTemplate;sensorGroup;sensorFallbackParts=[];pipetteGroup;dropletGroup;dropMesh;puddleMesh;particles;sensorConstellation;sensorConstellationGeometry;sensorConstellationMaterial;sensorStarStartPositions;sensorStarTargetPositions;sensorStarFallPositions;sensorStarMotion={progress:0,fall:0};centerSensorReveal={opacity:0};sensorMessage;sensorMessageGeometry;sensorMessageMaterial;sensorMessageTextMaterial;sensorMessageStartPositions;sensorMessageTargetPositions;sensorMessageMotion={progress:0};sensorFieldReveal={progress:0};sensorFillCard;sensorFillMaterial;centerSensor;centerSensorMaterials=[];sensorField;sensorFieldItems=[];sensorFieldMaterialGroups=[];sensorFieldRevealStarts=[];sensorFieldMaterials=[];sensorFieldIsOpaque=!1;scrollProgressCurrent=0;scrollProgressTarget=0;scrollLastUpdate=performance.now();scrollHandoff={x:0,y:0,z:0};isPointerDown=!1;isTopInteractive=!0;resizeRefreshId=0;initialScrollResetId=0;resizeObserver;viewportSize={width:0,height:0};sensorPresentation=new qt;assemblyBounds;assemblyFramePoints=[];sensorCompactScale=1;sensorFallWorker;sensorFallRecording;sensorFallRevision=0;sensorFallRefreshId=0;sensorCollider;fallQuaternion=new an;sensorRockQuaternion=new an;sensorRockAxis=new L(0,0,1);centerSensorPose={position:new L,rotation:new ln,scale:new L};pointerStart=new ke;dragStartRotation=new ln;scrollStartRigRotation;raycaster=new ml;selectedFieldSensor;resizeHandler=()=>this.onResize();scrollHandler=()=>this.syncInteractionMode();pageShowHandler=()=>this.resetScrollPosition();pointerDownHandler=e=>this.onPointerDown(e);pointerMoveHandler=e=>this.onPointerMove(e);pointerUpHandler=()=>this.onPointerUp();ngAfterViewInit(){hd(this.hero.nativeElement),this.startupFrameId=requestAnimationFrame(()=>{this.startupTimerId=window.setTimeout(()=>{this.destroyed||this.initializeExperience()},0)})}initializeExperience(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),this.resetScrollPosition(),$e.normalizeScroll(!0),this.setOpeningScrollLocked(!0),this.initScene(),this.createParticles(),this.createReaderModel(),this.createPipetteAndDroplet(),this.createSensorConstellationScene(),this.createSensorMessageScene(),this.scene.add(this.sensorPresentation);for(let e of[this.sensorConstellation,this.sensorFillCard,this.centerSensor,this.sensorField])e&&this.sensorPresentation.add(e);this.buildScrollAnimation(),this.animate(),window.addEventListener("pageshow",this.pageShowHandler),window.addEventListener("resize",this.resizeHandler),window.addEventListener("scroll",this.scrollHandler,{passive:!0}),this.renderer.domElement.addEventListener("pointerdown",this.pointerDownHandler),window.addEventListener("pointermove",this.pointerMoveHandler),window.addEventListener("pointerup",this.pointerUpHandler),this.syncInteractionMode(),this.resizeObserver=new ResizeObserver(()=>this.onResize()),this.resizeObserver.observe(this.hero.nativeElement),this.resizeObserver.observe(this.canvasHost.nativeElement),this.openingFrameId=requestAnimationFrame(()=>{this.resetScrollPosition(),this.onResize(),this.syncInteractionMode(),$e.refresh(),this.sceneReady=!0,this.revealReaderWhenReady()}),this.initialScrollResetId=window.setTimeout(()=>this.resetScrollPosition(),90)}ngOnDestroy(){this.destroyed=!0,cancelAnimationFrame(this.startupFrameId),window.clearTimeout(this.startupTimerId),window.clearTimeout(this.readerLoadTimeoutId),cancelAnimationFrame(this.frameId),cancelAnimationFrame(this.openingFrameId),this.setOpeningScrollLocked(!1),window.clearTimeout(this.resizeRefreshId),window.clearTimeout(this.initialScrollResetId),this.resizeObserver?.disconnect(),window.clearTimeout(this.sensorFallRefreshId),this.sensorFallWorker?.terminate(),window.removeEventListener("pageshow",this.pageShowHandler),window.removeEventListener("resize",this.resizeHandler),window.removeEventListener("scroll",this.scrollHandler),this.renderer?.domElement.removeEventListener("pointerdown",this.pointerDownHandler),window.removeEventListener("pointermove",this.pointerMoveHandler),window.removeEventListener("pointerup",this.pointerUpHandler),this.scrollTriggerInstance?.kill(),this.scrollTimeline?.kill(),this.phraseTimeline?.kill(),this.openingOrientationTimeline?.kill(),$e.normalizeScroll(!1),od([this.scene,this.camera,this.optimizedCartridgeTemplate,...this.retiredObjects]),this.roundedGeometries.clear(),this.retiredObjects=[],this.renderer?.dispose()}resetScrollPosition(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),window.scrollTo({top:0,left:0,behavior:"auto"}),document.documentElement.scrollTop=0,document.body.scrollTop=0,this.scrollProgressCurrent=0,this.scrollProgressTarget=0,this.scrollTimeline?.progress(0),this.hero?.nativeElement.style.setProperty("--scroll-progress","0"),this.nebulaUniforms&&(this.nebulaUniforms.uProgress.value=0)}initScene(){let e=this.canvasHost.nativeElement;this.scene=new Ya;let t=this.getViewportSize();this.camera=new pn(34,t.width/t.height,.1,100),this.camera.position.set(0,.72,6.7),this.camera.lookAt(0,0,0),this.scene.add(this.camera),this.renderer=new uu({antialias:!0,alpha:!0}),this.renderer.setClearColor(0,0),this.renderer.setPixelRatio(this.getRenderPixelRatio()),this.renderer.setSize(t.width,t.height,!1),this.renderer.outputColorSpace=Vt,this.renderer.domElement.style.cursor="grab",this.renderer.domElement.style.display="block",this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.touchAction="pan-y",this.canvasHost.nativeElement.style.cursor="grab",this.hero.nativeElement.style.cursor="grab",e.appendChild(this.renderer.domElement),this.createNebulaBackground(),this.scene.add(new fl("#ffffff",.16));let n=new js("#f4e5c4",82,15,Math.PI/6.5,.52,1.25);n.position.set(0,5.6,2.6),n.target.position.set(0,0,0),this.topLight=n,this.scene.add(n,n.target);let i=new ys("#9fb1ff",1.08);i.position.set(-3,2,-4),this.scene.add(i);let r=new ys("#ffffff",.48);r.position.set(4,1,4),this.frontFill=r,this.scene.add(r)}createParticles(){let e=window.innerWidth<900?460:920,t=new Float32Array(e*3);for(let o=0;o<e;o++)t[o*3]=(Math.random()-.5)*8,t[o*3+1]=Math.random()*5-1.5,t[o*3+2]=(Math.random()-.5)*5;let n=new Gt;n.setAttribute("position",new Bt(t,3));let i=new fr({color:"#f7efe2",size:.014,transparent:!0,opacity:.74,depthWrite:!1}),r=new zr(n,i);r.name="dust_particles",this.particles=r,this.scene.add(r)}setOpeningScrollLocked(e){if(this.openingScrollLocked===e)return;this.openingScrollLocked=e;let t=$e.normalizeScroll();e?(t?.disable(),window.addEventListener("wheel",this.openingInputGuard,{capture:!0,passive:!1}),window.addEventListener("touchmove",this.openingInputGuard,{capture:!0,passive:!1}),window.addEventListener("keydown",this.openingInputGuard,!0),window.addEventListener("scroll",this.openingScrollGuard,!0)):(window.removeEventListener("wheel",this.openingInputGuard,!0),window.removeEventListener("touchmove",this.openingInputGuard,!0),window.removeEventListener("keydown",this.openingInputGuard,!0),window.removeEventListener("scroll",this.openingScrollGuard,!0),this.scrollLastUpdate=performance.now(),t?.enable())}runOpeningOrientationAnimation(){if(!this.model||!this.topRotationRig||window.scrollY>2){this.setOpeningScrollLocked(!1);return}this.openingOrientationTimeline?.kill(),this.setOpeningScrollLocked(!0);let e=this.getInitialModelPosition(),t=this.getInitialModelScale(),n=this.getInitialModelRotation(),i=e.clone().add(new L(-.16,.08,0)),r=t*1.18;this.topRotationRig.position.copy(i),this.topRotationRig.scale.setScalar(r),this.topRotationRig.rotation.set(0,0,0),this.model.rotation.set(.48,-1.42,-.08),this.openingOrientationTimeline=rt.timeline({defaults:{ease:"power2.inOut"},onInterrupt:()=>this.setOpeningScrollLocked(!1),onComplete:()=>{this.model?.rotation.copy(n),this.topRotationRig?.position.copy(e),this.topRotationRig?.scale.setScalar(t),this.setOpeningScrollLocked(!1),this.syncInteractionMode()}}).to(this.model.rotation,{x:n.x,y:n.y,z:n.z,duration:1.18},0).to(this.topRotationRig.position,{x:e.x,y:e.y,z:e.z,duration:1.18},0).to(this.topRotationRig.scale,{x:t,y:t,z:t,duration:1.18},0)}createNebulaBackground(){let e=this.getViewportSize();this.nebulaUniforms={uProgress:{value:0},uTime:{value:0},uAspect:{value:e.width/e.height}};let t=new Cn({uniforms:this.nebulaUniforms,depthTest:!1,depthWrite:!1,vertexShader:`
        varying vec2 vUv;

        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        precision highp float;

        uniform float uProgress;
        uniform float uTime;
        uniform float uAspect;
        varying vec2 vUv;

        float softBlob(vec2 uv, vec2 center, vec2 radius, float rotation) {
          vec2 p = uv - center;
          float c = cos(rotation);
          float s = sin(rotation);
          p = mat2(c, -s, s, c) * p;
          p.x *= uAspect;
          float d = dot(p / radius, p / radius);
          return exp(-d * 1.45);
        }

        float wave(vec2 uv, float shift) {
          return sin((uv.x * 4.8 + uv.y * 2.2 + shift) * 3.14159) * 0.5 + 0.5;
        }

        void main() {
          vec2 uv = vUv;
          float p = smoothstep(0.0, 1.0, uProgress);
          float early = smoothstep(0.0, 0.38, p);
          float late = smoothstep(0.52, 1.0, p);
          float middle = smoothstep(0.16, 0.48, p) * (1.0 - smoothstep(0.7, 1.0, p));
          float beatA = sin(p * 110.84956) * 0.5 + 0.5;
          float beatB = sin(p * 31.41593 + 1.7) * 0.5 + 0.5;
          float beatC = sin(p * 25.13274 + 3.2) * 0.5 + 0.5;
          beatA = smoothstep(0.12, 0.88, beatA);
          beatB = smoothstep(0.16, 0.84, beatB);
          beatC = smoothstep(0.18, 0.82, beatC);
          float t = uTime * 0.05;

          vec3 baseA = vec3(0.027, 0.018, 0.052);
          vec3 baseB = vec3(0.014, 0.020, 0.040);
          vec3 colorPink = mix(vec3(0.78, 0.25, 0.48), vec3(0.94, 0.41, 0.28), p);
          vec3 colorViolet = mix(vec3(0.30, 0.15, 0.58), vec3(0.20, 0.12, 0.48), p);
          vec3 colorCyan = mix(vec3(0.20, 0.66, 0.72), vec3(0.46, 0.86, 0.64), p);
          vec3 colorGold = mix(vec3(0.85, 0.67, 0.28), vec3(0.68, 0.86, 0.35), p);

          vec2 leftStart = vec2(0.06, 0.32);
          vec2 leftMid = vec2(0.58, 0.48);
          vec2 leftEnd = vec2(0.18, 0.64);
          vec2 rightStart = vec2(0.94, 0.42);
          vec2 rightMid = vec2(0.38, 0.3);
          vec2 rightEnd = vec2(0.82, 0.25);
          vec2 lowerStart = vec2(0.68, 0.74);
          vec2 lowerMid = vec2(0.28, 0.58);
          vec2 lowerEnd = vec2(0.62, 0.82);

          vec2 sideSweep = vec2((sin(p * 12.56637 - 0.55) * 0.5 + 0.5 - 0.5) * 0.22, 0.0);
          vec2 scrollDrift = vec2((beatA - 0.5) * 0.14, (beatB - 0.5) * 0.06);
          vec2 counterDrift = vec2((beatC - 0.5) * -0.13, (beatA - 0.5) * 0.045);
          vec2 leftCenter = mix(mix(leftStart, leftMid, early), leftEnd, late) + scrollDrift + vec2(sin(t) * 0.018, cos(t * 0.8) * 0.012);
          vec2 rightCenter = mix(mix(rightStart, rightMid, early), rightEnd, late) + counterDrift + vec2(cos(t * 0.9) * 0.014, sin(t * 0.7) * 0.014);
          vec2 lowerCenter = mix(mix(lowerStart, lowerMid, early), lowerEnd, late) + vec2((beatB - 0.5) * 0.1, (beatC - 0.5) * 0.045);
          leftCenter += sideSweep;
          rightCenter -= sideSweep * 0.72;
          lowerCenter += sideSweep * 0.44;
          vec2 bridgeCenter = mix(vec2(0.42, 0.49), vec2(0.62, 0.39), middle) + sideSweep * 0.28 + vec2((beatA - beatC) * 0.07, (beatB - 0.5) * -0.035);

          vec2 leftRadius = mix(mix(vec2(0.44, 0.36), vec2(0.34, 0.5), early), vec2(0.64, 0.34), late) + vec2((beatB - 0.5) * 0.09, (beatC - 0.5) * 0.055);
          vec2 rightRadius = mix(mix(vec2(0.5, 0.34), vec2(0.36, 0.44), early), vec2(0.58, 0.28), late) + vec2((beatA - 0.5) * 0.075, (beatB - 0.5) * 0.05);
          vec2 lowerRadius = mix(mix(vec2(0.58, 0.28), vec2(0.44, 0.34), early), vec2(0.72, 0.24), late) + vec2((beatC - 0.5) * 0.08, (beatA - 0.5) * 0.045);
          vec2 bridgeRadius = mix(vec2(0.34, 0.18), vec2(0.46, 0.15), middle) + vec2((beatB - 0.5) * 0.06, (beatC - 0.5) * 0.035);

          float left = softBlob(uv, leftCenter, leftRadius, -0.58 + p * 1.35 + (beatA - 0.5) * 0.28);
          float right = softBlob(uv, rightCenter, rightRadius, 0.42 - p * 1.05 + (beatB - 0.5) * -0.22);
          float lower = softBlob(uv, lowerCenter, lowerRadius, 0.22 + p * 0.72 + (beatC - 0.5) * 0.18);
          float bridge = softBlob(uv, bridgeCenter, bridgeRadius, -0.08 + p * 0.58 + (beatA - beatB) * 0.16);
          float upperMist = softBlob(
            uv,
            mix(vec2(0.32, 0.2), vec2(0.78, 0.16), late) + sideSweep * 0.36 + vec2((beatB - 0.5) * 0.1, (beatA - 0.5) * -0.035),
            mix(vec2(0.62, 0.18), vec2(0.48, 0.24), middle) + vec2((beatC - 0.5) * 0.07, 0.0),
            -0.35 + p * 0.44 + (beatC - 0.5) * 0.2
          );

          float texture = wave(uv, p * 0.8 + t) * 0.08 + wave(uv.yx, p * 1.3 - t * 0.7) * 0.05;
          vec3 color = mix(baseA, baseB, uv.y);
          color += colorPink * left * 0.20;
          color += colorCyan * right * 0.18;
          color += colorGold * lower * 0.08;
          color += colorViolet * bridge * 0.16;
          color += mix(colorViolet, colorPink, p) * upperMist * 0.08;
          color += (colorPink + colorCyan) * bridge * texture;

          float vignette = smoothstep(0.92, 0.24, distance(uv, vec2(0.5, 0.52)));
          color *= 0.62 + vignette * 0.58;

          gl_FragColor = vec4(color, 1.0);
        }
      `}),n=new yt(new mr(1,1),t);n.name="scroll_shift_nebula_background",n.position.set(0,0,-24),n.renderOrder=-1e3,this.nebulaBackground=n,this.camera.add(n),this.updateNebulaBackgroundSize()}createReaderModel(){let e=this.createMaterial("#f4efe2",.38,.18),t=this.createMaterial("#fff7e8",.34,.16),n=this.createMaterial("#8f9ba0",.45,.1),i=this.createMaterial("#22282d",.58,.08),r=this.createMaterial("#0d0e10",.7,.05),o=this.createMaterial("#5b2393",.42,.18),a=this.createMaterial("#1d7396",.3,.08);this.topRotationRig=new qt,this.topRotationRig.name="top_interaction_rotation_rig",this.topRotationRig.position.copy(this.getInitialModelPosition()),this.topRotationRig.scale.setScalar(this.getInitialModelScale()),this.scene.add(this.topRotationRig),this.model=new qt,this.model.name="reader_model",this.model.rotation.copy(this.getInitialModelRotation()),this.topRotationRig.add(this.model),this.model.add(this.roundedBox("reader_body_shell",[4.35,.72,1.28],[0,0,0],e,.33)),this.model.add(this.roundedBox("reader_top_gray_panel",[2.25,.08,1.02],[-.54,.38,0],n,.23)),this.model.add(this.roundedBox("reader_front_white_collar",[.72,.82,1.38],[1.56,.02,0],t,.24)),this.model.add(this.roundedBox("reader_front_dark_cap",[.42,.54,.92],[1.87,.2,0],i,.22)),this.model.add(this.roundedBox("reader_front_slot_shadow",[.08,.32,.74],[2.12,.02,0],r,.12)),this.model.add(this.roundedBox("reader_purple_socket",[.1,.36,.76],[2.08,.01,0],o,.1)),this.model.add(this.roundedBox("reader_purple_center_band",[.28,.86,1.42],[.58,.02,0],o,.11)),this.model.add(this.roundedBox("reader_side_purple_rail",[2.45,.18,.08],[-.46,-.08,-.68],o,.09)),this.model.add(this.roundedBox("reader_side_logo_plate",[1.02,.2,.09],[-1.04,-.1,-.72],o,.08)),this.model.add(this.createLogoPlane());let l=new yt(new pr(.055,.055,.025,28),r);l.name="reader_status_aperture",l.rotation.x=Math.PI/2,l.position.set(.58,.47,-.18),this.model.add(l),this.sensorGroup=this.createSensorGroup({white:t,charcoal:i,blue:a}),this.sensorGroup.position.set(this.cartridgePulledX,this.cartridgeSlotY,0),this.sensorGroup.visible=!1,this.model.add(this.sensorGroup),this.sensorFallbackParts=[...this.sensorGroup.children],this.setFallbackSensorVisibility(!1),this.readerFallbackParts=this.model.children.filter(c=>c!==this.sensorGroup),this.setFallbackReaderVisibility(!1),this.readerMaterials=this.collectMaterials(this.model),this.loadReaderAsset(),this.loadCartridgeAsset()}revealReaderWhenReady(){this.destroyed||!this.sceneReady||!this.readerAssetReady||this.readerRevealed||(this.readerRevealed=!0,window.clearTimeout(this.readerLoadTimeoutId),this.runOpeningOrientationAnimation(),this.renderer.render(this.scene,this.camera),this.canvasHost.nativeElement.classList.add("is-ready"),this.setupPhraseAnimation())}loadReaderAsset(){if(!this.model)return;this.readerLoadTimeoutId=window.setTimeout(()=>{this.destroyed||this.readerAssetReady||(this.setFallbackReaderVisibility(!0),this.readerAssetReady=!0,this.revealReaderWhenReady())},8e3),new Il().load(this.getAssetUrl("assets/models/reader/reader-optimized.glb"),t=>{if(this.destroyed){od([t.scene]);return}if(!this.model)return;let n=this.prepareReaderAsset(t.scene);this.retiredObjects.push(...this.readerFallbackParts),this.readerFallbackParts.forEach(i=>this.model?.remove(i)),this.readerFallbackParts=[],this.model.add(n),this.assemblyBounds=void 0,this.readerMaterials=this.collectMaterials(this.model),this.setReaderOpacity(this.readerFade.opacity),this.readerAssetReady=!0,this.revealReaderWhenReady()},void 0,t=>{this.destroyed||(console.error("Unable to load reader model asset",t),this.setFallbackReaderVisibility(!0),this.readerAssetReady=!0,this.revealReaderWhenReady())})}setFallbackReaderVisibility(e){this.readerFallbackParts.forEach(t=>{t.visible=e})}prepareReaderAsset(e){let t=e;t.name="fusion_reader_model",t.rotation.set(-Math.PI/2,0,-Math.PI/2),t.rotateY(Math.PI),t.rotateOnWorldAxis(new L(0,1,0),Math.PI),t.updateMatrixWorld(!0);let n=new $t().setFromObject(t),i=n.getSize(new L),r=n.getCenter(new L),o=Math.max(i.x,i.y,i.z),l=o>0?4.35/o:1;return t.position.set(-r.x*l,-r.y*l,-r.z*l),t.scale.setScalar(l),this.prepareAssetMaterials(t),t}prepareAssetMaterials(e){e.traverse(t=>{let n=t;if(!n.isMesh)return;n.castShadow=!1,n.receiveShadow=!1,(Array.isArray(n.material)?n.material:[n.material]).forEach(r=>{r.depthTest=!0,r.depthWrite=!0,r.needsUpdate=!0})})}loadCartridgeAsset(){if(!this.sensorGroup)return;new Il().load(this.getAssetUrl("assets/models/cartridge/Cartridge Base_V2.gltf"),t=>{if(this.destroyed){od([t.scene]);return}if(!this.sensorGroup)return;let n=this.prepareCartridgeAsset(t.scene);this.retiredObjects.push(...this.sensorFallbackParts),this.sensorFallbackParts.forEach(i=>this.sensorGroup?.remove(i)),this.sensorFallbackParts=[],this.sensorGroup.add(n),this.assemblyBounds=void 0,this.optimizedCartridgeTemplate=this.createOptimizedCartridgeTemplate(n),this.refreshStandaloneSensorsFromTemplate(),this.updateSensorStarTargetsFromTemplate(),this.readerMaterials=this.collectMaterials(this.model??this.sensorGroup),this.setReaderOpacity(this.readerFade.opacity)},void 0,t=>{console.error("Unable to load cartridge model asset",t),this.setFallbackSensorVisibility(!0)})}prepareCartridgeAsset(e){let t=e;t.name="fusion_cartridge_model",t.rotation.set(-Math.PI/2,0,0),t.updateMatrixWorld(!0);let i=new $t().setFromObject(t).getSize(new L),r=Math.max(i.x,i.y,i.z),a=r>0?1.62/r:1;t.scale.set(a*this.cartridgeLengthScale,a*this.cartridgeWidthScale,a*this.cartridgeHeightScale),t.updateMatrixWorld(!0);let c=new $t().setFromObject(t).getCenter(new L);return t.position.set(.55-c.x,-.02-c.y,this.cartridgeSlotZ-c.z),this.prepareAssetMaterials(t),t}setFallbackSensorVisibility(e){this.sensorFallbackParts.forEach(t=>{t.visible=e})}getAssetUrl(e){return new URL(e,document.baseURI).toString()}buildScrollAnimation(){if(!this.model||!this.sensorGroup||!this.topRotationRig)return;let e=rt.timeline({paused:!0});this.scrollTimeline=e,this.scrollTriggerInstance=$e.create({trigger:this.hero.nativeElement,start:"top top",end:"+=11800",pin:!0,anticipatePin:1,invalidateOnRefresh:!0,onEnter:()=>{window.scrollY>2&&this.disableTopInteraction()},onEnterBack:()=>this.syncInteractionMode()});let t=this.pipetteGroup,n=this.dropletGroup,i=this.dropMesh,r=this.puddleMesh,o=this.readerCopy.nativeElement,a=Array.from(o.children),l=this.sampleCopy.nativeElement,c=this.sampleFluidElements.toArray().map(v=>v.nativeElement),h=this.instructionFluidElements.toArray().map(v=>v.nativeElement),u=this.deviceStage.nativeElement,d=this.sensorCta.nativeElement,f=u.querySelectorAll(".device-copy"),p=u.querySelector("[data-screen-page]"),g=Array.from(u.querySelectorAll(".screen-panel")),m=u.querySelector(".app-progress-orb"),_=u.querySelector(".app-progress-check path"),x=_?.getTotalLength()??1,S=u.querySelector("[data-result-time]"),y=u.querySelector("[data-bluetooth-signal]"),T=y?Array.from(y.querySelectorAll("span:not(.bluetooth-core)")):[],b=Array.from(u.querySelectorAll("[data-copy-row]")).sort((v,A)=>{let C=Number(v.dataset.copyRow)-Number(A.dataset.copyRow);return C!==0?C:v.closest(".device-copy-left")?-1:1}),w=this.particles?.material;this.sensorStarMotion.progress=0,this.sensorStarMotion.fall=0,this.sensorMessageMotion.progress=0,this.sensorFieldReveal.progress=0,this.hero.nativeElement.classList.remove("is-product-cta"),this.sensorGroup.position.set(this.getSensorEntryX(),this.cartridgeSlotY,0),this.sensorGroup.rotation.set(0,0,0),this.sensorGroup.visible=!1,rt.set(this.topRotationRig,{visible:!0}),rt.set(this.model,{visible:!0}),rt.set(u,{autoAlpha:0,filter:"blur(0px)",y:"0vh","--device-w":()=>this.getBannerPhoneFrame().width,"--device-h":()=>this.getBannerPhoneFrame().height,"--screen-type-scale":()=>this.getDeviceContentScale("phone"),"--device-r":"1.85rem","--device-x":"0vw","--device-y":()=>this.getBannerPhoneOffsetY(),"--stand-o":0,"--keyboard-o":0,"--home-o":0,"--screen-r":"1.25rem","--screen-bg-opacity":1,"--device-shell-bg":"rgba(38, 42, 52, 0.96)","--device-frame-border":"rgba(38, 42, 52, 0.96)","--frame-edge-opacity":1,"--device-shadow-o":.42,"--device-inner-shadow-o":.18}),rt.set(f,{autoAlpha:0,filter:"blur(0px)",y:"-10vh"}),rt.set(b,{autoAlpha:0,filter:"blur(12px)",y:18}),rt.set(p,{autoAlpha:0,filter:"blur(10px)"}),rt.set(g,{autoAlpha:0,filter:"blur(14px)"}),g[0]&&rt.set(g[0],{autoAlpha:1,filter:"blur(0px)"}),rt.set(m,{"--analysis-progress":"0deg"}),_&&(_.setAttribute("stroke-dasharray",`${x}`),_.setAttribute("stroke-dashoffset",`${x}`)),rt.set(_,{autoAlpha:0}),rt.set(y,{autoAlpha:0}),rt.set(T,{opacity:0,scale:.42}),rt.set(d,{autoAlpha:0,filter:"blur(18px)","--cta-y":"20px",pointerEvents:"none"}),rt.set(o,{autoAlpha:1,filter:"none",x:0,y:0}),rt.set(a,{autoAlpha:1,filter:"blur(0px)"}),rt.set(l,{autoAlpha:0,filter:"blur(14px)",y:18}),rt.set(c,{autoAlpha:0,filter:"blur(10px)",yPercent:36}),c[0]&&rt.set(c[0],{autoAlpha:1,filter:"blur(0px)",yPercent:0}),rt.set(h,{autoAlpha:0,filter:"blur(10px)",yPercent:36}),h[0]&&rt.set(h[0],{autoAlpha:1,filter:"blur(0px)",yPercent:0}),this.sensorFieldIsOpaque=!1,this.readerFade.opacity=1,this.setReaderOpacity(1),this.centerSensorReveal.opacity=0,this.centerSensorPose.position.set(0,0,.09),this.centerSensorPose.rotation.copy(this.centerSensorDisplayRotation),this.centerSensorPose.scale.setScalar(1.48),this.sensorConstellationMaterial&&rt.set(this.sensorConstellationMaterial,{opacity:0,size:.023}),this.sensorFillMaterial&&rt.set(this.sensorFillMaterial,{opacity:0}),this.sensorMessageMaterial&&rt.set(this.sensorMessageMaterial,{opacity:0,size:.014}),this.sensorMessageTextMaterial&&rt.set(this.sensorMessageTextMaterial,{opacity:0}),this.setMaterialsOpacity(this.centerSensorMaterials,0),this.setMaterialsOpacity(this.sensorFieldMaterials,0),e.fromTo(this.topRotationRig.position,this.vectorTweenDynamic(()=>this.getInitialModelPosition(),0),La(ss({},this.vectorTweenDynamic(()=>this.getSensorSequenceModelPosition(),.34)),{immediateRender:!1}),0).fromTo(this.model.rotation,{x:()=>this.getInitialModelRotation().x,y:()=>this.getInitialModelRotation().y,z:()=>this.getInitialModelRotation().z},{x:()=>this.getSensorSequenceModelRotation().x,y:()=>this.getSensorSequenceModelRotation().y,z:()=>this.getSensorSequenceModelRotation().z,duration:.34,immediateRender:!1},0).fromTo(this.topRotationRig.scale,{x:()=>this.getInitialModelScale(),y:()=>this.getInitialModelScale(),z:()=>this.getInitialModelScale()},{x:()=>this.getSensorSequenceModelScale(),y:()=>this.getSensorSequenceModelScale(),z:()=>this.getSensorSequenceModelScale(),duration:.34,immediateRender:!1},0).to(o,{autoAlpha:0,x:()=>this.isMobileLayout()?"0vw":"-38vw",y:()=>this.isMobileLayout()?"-31dvh":"0vh",duration:.34,ease:"power2.in"},0).to(a,{autoAlpha:0,filter:"blur(10px)",duration:.34,ease:"power2.in"},0).to(u,{autoAlpha:1,duration:.28,ease:"power2.out"},.62).to(u,{"--device-w":()=>this.getBannerPhoneFrame().width,"--device-h":()=>this.getBannerPhoneFrame().height,"--screen-type-scale":()=>this.getDeviceContentScale("phone"),"--device-r":"1.85rem","--device-x":"0vw","--device-y":()=>this.getBannerPhoneOffsetY(),"--stand-o":0,"--keyboard-o":0,"--home-o":0,"--screen-r":"1.25rem","--screen-bg-opacity":1,"--device-shell-bg":"rgba(38, 42, 52, 0.96)",duration:.4,ease:"power2.out"},.62).to(p,{autoAlpha:.96,filter:"blur(0px)",duration:.34,ease:"power2.out"},.74).to(y,{autoAlpha:1,duration:.18,ease:"power2.out"},.98).to(T,{opacity:.8,scale:1.2,duration:.52,stagger:.16,ease:"power2.out"},1.02).to(T,{opacity:0,duration:.2,stagger:.16,ease:"power2.in"},1.42).to(y,{autoAlpha:0,duration:.18,ease:"power2.in"},1.64).set(this.sensorGroup,{visible:!0},1.68).set(this.sensorGroup.position,{x:()=>this.getSensorEntryX(),y:this.cartridgeSlotY,z:0},1.68).to(this.sensorGroup.position,{x:this.cartridgeInsertedX,y:this.cartridgeSlotY,z:0,duration:1.12,ease:"power1.inOut"},1.68).to(this.topRotationRig.position,this.vectorTweenDynamic(()=>this.getSampleDropModelPosition(),1.12),1.68).to(this.sensorGroup.rotation,{x:0,y:0,z:0,duration:.28},1.68).to(g[0]??{},{autoAlpha:0,filter:"blur(12px)",duration:.2,ease:"power2.in"},2.92).to(g[1]??{},{autoAlpha:1,filter:"blur(0px)",duration:.3,ease:"power2.out"},3.02).to(h[0]??{},{autoAlpha:0,filter:"blur(10px)",yPercent:-32,duration:.1},3.5).to(h[1]??{},{autoAlpha:1,filter:"blur(0px)",yPercent:0,duration:.12},3.6).to(h[1]??{},{autoAlpha:0,filter:"blur(10px)",yPercent:-32,duration:.1},3.72).to(h[2]??{},{autoAlpha:1,filter:"blur(0px)",yPercent:0,duration:.12},3.82).to(h[2]??{},{autoAlpha:0,filter:"blur(10px)",yPercent:-32,duration:.1},3.94).to(h[3]??{},{autoAlpha:1,filter:"blur(0px)",yPercent:0,duration:.12},4.04).to(h[3]??{},{autoAlpha:0,filter:"blur(10px)",yPercent:-32,duration:.1},4.16).to(h[4]??{},{autoAlpha:1,filter:"blur(0px)",yPercent:0,duration:.12},4.26).to(h[4]??{},{autoAlpha:0,filter:"blur(10px)",yPercent:-32,duration:.1},4.38).to(h[5]??{},{autoAlpha:1,filter:"blur(0px)",yPercent:0,duration:.12},4.48).set(t?.position??{},{y:9.5},3.5).set(t??{},{visible:!0},3.5).to(t?.position??{},{y:.88,duration:.72,ease:"power2.out"},3.5).to(this.topLight??{},{intensity:44,duration:.28,ease:"power2.out"},3.7).to(this.frontFill??{},{intensity:.22,duration:.28,ease:"power2.out"},3.7).set(n??{},{visible:!0},4.22).set(i??{},{visible:!0},4.22).to(i?.scale??{},{x:.68,y:.68,z:.68,duration:.04},4.22).to(i?.position??{},{y:.055,duration:.18,ease:"power1.in"},4.24).set(r??{},{visible:!0},4.34).to(i?.scale??{},{x:.24,y:.18,z:.24,duration:.07},4.35).to(r?.scale??{},{x:1,y:1,z:1,duration:.1},4.35).set(i??{},{visible:!1},4.41).to(t?.position??{},{y:5.8,duration:.32,ease:"power2.in"},4.46).set(t??{},{visible:!1},4.8).to(r?.scale??{},{x:0,y:0,z:0,duration:.08},4.52).set(r??{},{visible:!1},4.62).set(n??{},{visible:!1},4.62).to(g[1]??{},{autoAlpha:0,filter:"blur(12px)",duration:.2,ease:"power2.in"},4.72).to(g[2]??{},{autoAlpha:1,filter:"blur(0px)",duration:.3,ease:"power2.out"},4.82).to(m??{},{"--analysis-progress":"360deg",duration:.98,ease:"power1.inOut"},4.84).call(()=>this.updateResultTimestamp(S),void 0,5.82).to(_??{},{autoAlpha:1,duration:.01,ease:"none"},5.82).to(_??{},{attr:{"stroke-dashoffset":0},duration:.72,ease:"power1.inOut"},5.84).to(this.topLight??{},{intensity:82,duration:.26,ease:"power2.inOut"},5).to(this.frontFill??{},{intensity:.48,duration:.26,ease:"power2.inOut"},5).to(g[2]??{},{autoAlpha:0,filter:"blur(12px)",duration:.2,ease:"power2.in"},6.64).to(g[3]??{},{autoAlpha:1,filter:"blur(0px)",duration:.3,ease:"power2.out"},6.74).to(g[3]??{},{autoAlpha:0,filter:"blur(12px)",duration:.24,ease:"power2.in"},7.2).to(g[4]??{},{autoAlpha:1,filter:"blur(0px)",duration:.34,ease:"power2.out"},7.3).to(g[4]??{},{autoAlpha:0,filter:"blur(12px)",duration:.24,ease:"power2.in"},8.42).to(u,{"--device-shell-bg":"rgba(241, 236, 224, 0)","--device-frame-border":"rgba(241, 236, 224, 0)","--frame-edge-opacity":0,"--screen-bg-opacity":0,"--keyboard-o":0,"--stand-o":0,"--device-shadow-o":0,"--device-inner-shadow-o":0,duration:.38,ease:"power2.inOut"},8.5).call(()=>{this.hero.nativeElement.classList.toggle("is-product-cta",(e.scrollTrigger?.direction??1)>0)},void 0,8.9).to(g[5]??{},{autoAlpha:1,filter:"blur(0px)",duration:.34,ease:"power2.out"},8.96).to(this.topRotationRig.position,this.vectorTweenDynamic(()=>this.getCenteredInsertedModelPosition(),.58),3.56).to(this.topRotationRig.rotation,{x:0,y:0,z:0,duration:.58,ease:"power2.inOut"},3.56).to(this.model.rotation,{x:()=>this.getSensorSequenceModelRotation().x,y:()=>this.getSensorSequenceModelRotation().y,z:()=>this.getSensorSequenceModelRotation().z,duration:.58,ease:"power2.inOut"},3.56).to(this.topRotationRig.scale,{x:()=>this.getSensorSequenceModelScale(),y:()=>this.getSensorSequenceModelScale(),z:()=>this.getSensorSequenceModelScale(),duration:.58,ease:"power2.inOut"},3.56).to(u,{autoAlpha:1,duration:.28,ease:"power2.out"},2.24).to(p,{autoAlpha:.96,filter:"blur(0px)",duration:.38,ease:"power2.out"},2.36).to(b,{autoAlpha:0,duration:.01},2.42).to(u,{"--device-w":()=>this.getBannerPhoneFrame().width,"--device-h":()=>this.getBannerPhoneFrame().height,"--screen-type-scale":()=>this.getDeviceContentScale("phone"),"--device-r":"1.85rem","--device-x":"0vw","--device-y":()=>this.getBannerPhoneOffsetY(),"--stand-o":0,"--keyboard-o":0,"--home-o":0,"--screen-r":"1.25rem","--screen-bg-opacity":1,"--device-shell-bg":"rgba(38, 42, 52, 0.96)","--device-frame-border":"rgba(38, 42, 52, 0.96)","--device-shadow-o":.42,"--device-inner-shadow-o":.18,duration:.4,ease:"power2.out"},2.24).to(u,{"--device-w":()=>this.getBannerPhoneFrame().width,"--device-h":()=>this.getBannerPhoneFrame().height,"--screen-type-scale":()=>this.getDeviceContentScale("phone"),"--device-r":"1.85rem","--device-y":()=>this.getBannerPhoneOffsetY(),"--stand-o":0,"--keyboard-o":0,"--home-o":0,"--screen-r":"1.25rem","--screen-bg-opacity":1,"--device-shell-bg":"rgba(38, 42, 52, 0.96)","--device-frame-border":"rgba(38, 42, 52, 0.96)","--device-shadow-o":.42,"--device-inner-shadow-o":.18,duration:.01,ease:"power2.inOut"},3.62).to(this.topRotationRig.position,this.vectorTweenDynamic(()=>this.getCenteredInsertedModelPosition(),.01),3.62).to(this.model.rotation,{x:()=>this.getSensorSequenceModelRotation().x,y:()=>this.getSensorSequenceModelRotation().y,z:()=>this.getSensorSequenceModelRotation().z,duration:.01,ease:"power2.inOut"},3.62).to(this.topRotationRig.scale,{x:()=>this.getSensorSequenceModelScale(),y:()=>this.getSensorSequenceModelScale(),z:()=>this.getSensorSequenceModelScale(),duration:.01,ease:"power2.inOut"},3.62).to(f,{y:"-10vh",duration:3.6,ease:"none"},3.18).to(u,{"--device-w":()=>this.getDeviceFrame("laptop").width,"--device-h":()=>this.getDeviceFrame("laptop").height,"--screen-type-scale":()=>this.getDeviceContentScale("laptop"),"--device-r":"0.75rem","--device-y":"-3vh","--stand-o":0,"--keyboard-o":()=>this.isPortraitViewport()?0:1,"--home-o":0,"--screen-r":"0.12rem","--screen-bg-opacity":1,"--device-shell-bg":"rgba(38, 42, 52, 0.96)","--device-frame-border":"rgba(38, 42, 52, 0.96)","--device-shadow-o":.42,"--device-inner-shadow-o":.18,duration:.7,ease:"power2.inOut"},7.55).to(this.topRotationRig.position,this.vectorTweenDynamic(()=>this.getDeviceModelPosition("laptop"),.7),7.55).to(this.model.rotation,{x:()=>this.getDeviceModelRotation("laptop").x,y:()=>this.getDeviceModelRotation("laptop").y,z:()=>this.getDeviceModelRotation("laptop").z,duration:.7,ease:"power2.inOut"},7.55).to(this.topRotationRig.scale,{x:()=>this.getDeviceModelScale("laptop"),y:()=>this.getDeviceModelScale("laptop"),z:()=>this.getDeviceModelScale("laptop"),duration:.7,ease:"power2.inOut"},7.55).to(this.topRotationRig.position,this.vectorTweenDynamic(()=>this.getFinalDeviceModelPosition(),.72),8.58).to(this.topRotationRig.scale,{x:()=>this.getFinalDeviceModelScale(),y:()=>this.getFinalDeviceModelScale(),z:()=>this.getFinalDeviceModelScale(),duration:.72,ease:"power2.inOut"},8.58).to(u,{y:"-118vh",autoAlpha:0,duration:.68,ease:"power2.inOut"},10.1).to(this.topRotationRig.position,La(ss({},this.vectorTweenDynamic(()=>this.getSceneExitModelPosition(),.68)),{ease:"power2.inOut"}),10.1).call(()=>{this.hero.nativeElement.classList.toggle("is-product-cta",(e.scrollTrigger?.direction??1)<0)},void 0,10.72).call(()=>this.setReaderOpacity(1),void 0,10.16).set(u,{autoAlpha:0,y:"0vh"},10.8).set(this.model??{},{visible:!1},10.8).set(this.topRotationRig,{visible:!1},10.8).to(w??{},{opacity:.88,size:.018,duration:.5,ease:"power2.out"},10.32).to(this.topLight??{},{intensity:38,duration:.42,ease:"power2.out"},10.32).to(this.frontFill??{},{intensity:.16,duration:.42,ease:"power2.out"},10.32).to(this.sensorConstellationMaterial??{},{opacity:.96,size:.025,duration:.45,ease:"power2.out"},10.38).to(this.sensorStarMotion,{progress:1,duration:.95,ease:"none"},10.51).to(this.sensorConstellationMaterial??{},{opacity:.26,size:.012,duration:.34,ease:"power2.inOut"},11.38).call(()=>this.prepareMaterialsForReveal(this.centerSensorMaterials),void 0,11.36).to(this.centerSensorReveal,{opacity:1,duration:.34,ease:"power2.out",onUpdate:()=>this.setMaterialsOpacity(this.centerSensorMaterials,this.centerSensorReveal.opacity)},11.38).to(this.sensorFillMaterial??{},{opacity:0,duration:.01,ease:"none"},11.38).to(this.sensorConstellationMaterial??{},{opacity:0,duration:.22,ease:"power2.in"},11.42).to(this.sensorMessageMaterial??{},{opacity:.92,size:.016,duration:.35,ease:"power2.out"},11.48).to(this.sensorMessageMotion,{progress:1,duration:1.02,ease:"none"},11.54).to(this.centerSensorPose.rotation,{x:()=>this.centerSensorDisplayRotation.x+.22,y:()=>this.centerSensorDisplayRotation.y+.28,z:()=>this.centerSensorDisplayRotation.z+Math.PI,duration:.86,ease:"power2.inOut"},11.52).to(this.sensorMessageMaterial??{},{opacity:0,duration:.26,ease:"power2.out"},12.42).to(this.sensorMessageTextMaterial??{},{opacity:.96,duration:.34,ease:"power2.out"},12.48).to(this.sensorMessageTextMaterial??{},{opacity:0,duration:.34,ease:"power2.in"},12.9).to(this.centerSensorPose.rotation,{x:()=>this.centerSensorDisplayRotation.x,y:()=>this.centerSensorDisplayRotation.y,z:()=>this.centerSensorDisplayRotation.z,duration:.42,ease:"power2.inOut"},12.44).to(this.sensorMessageMaterial??{},{opacity:.82,size:.016,duration:.18,ease:"power2.out"},13.04).to(this.sensorMessageMotion,{progress:0,duration:.64,ease:"power2.in"},13.12).to(this.sensorMessageMaterial??{},{opacity:0,size:.011,duration:.42,ease:"power2.in"},13.36).to(this.centerSensorPose.position,this.vectorTweenDynamic(()=>this.centerSensor?.userData.fieldPosition??new L,.6),12.86).to(this.centerSensorPose.rotation,{x:()=>this.centerSensor?.userData.fieldRotation?.x??0,y:()=>this.centerSensor?.userData.fieldRotation?.y??0,z:()=>this.centerSensor?.userData.fieldRotation?.z??0,duration:.6,ease:"power2.inOut"},12.86).to(this.centerSensorPose.scale,{x:()=>this.centerSensor?.userData.fieldScale??.34,y:()=>this.centerSensor?.userData.fieldScale??.34,z:()=>this.centerSensor?.userData.fieldScale??.34,duration:.6,ease:"power2.inOut"},12.86).call(()=>this.prepareMaterialsForReveal(this.sensorFieldMaterials),void 0,12.9).to(this.sensorFieldReveal,{progress:1,duration:.9,ease:"none"},12.96).to(this.sensorStarMotion,{fall:1,duration:.9,ease:"none"},14.06).to(this.topLight??{},{intensity:82,duration:.46,ease:"power2.inOut"},14.96).to(this.frontFill??{},{intensity:.48,duration:.46,ease:"power2.inOut"},14.96).to(d,{autoAlpha:1,filter:"blur(0px)","--cta-y":"0px",pointerEvents:"auto",duration:.9,ease:"none"},14.06)}setupPhraseAnimation(){let e=this.phraseElements.toArray().map(i=>i.nativeElement);if(!e.length||(this.phraseTimeline?.kill(),rt.set(e.slice(1),{autoAlpha:0,clipPath:"inset(0 100% 0 0)",filter:"blur(18px)",x:"-0.55em"}),rt.set(e[0],{autoAlpha:1,clipPath:"inset(0 0% 0 0)",filter:"blur(0px)",x:0}),e.length===1))return;let t=rt.timeline({repeat:-1,repeatDelay:.12});this.phraseTimeline=t;let n=i=>{t.set(i,{autoAlpha:1,clipPath:"inset(0 100% 0 0)",filter:"blur(18px)",x:"-0.55em"}).to(i,{clipPath:"inset(0 0% 0 0)",filter:"blur(0px)",x:0,duration:.72,ease:"power3.out"})};e.forEach((i,r)=>{r>0&&n(i),t.to(i,{duration:2.85}).to(i,{clipPath:"inset(0 0 0 100%)",filter:"blur(16px)",x:"0.45em",duration:.54,ease:"power3.in"}).set(i,{autoAlpha:0})}),n(e[0])}updateResultTimestamp(e){if(!e)return;let t=new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});e.textContent=`Today at ${t}`}createSensorGroup(e){let t=new qt;t.name="sensor_group";let n=this.roundedBox("sensor_base_card",[1.88,.045,.68],[.5,-.02,0],e.white,.035);t.add(n);let i=this.roundedBox("sensor_front_pad",[.52,.052,.64],[1.18,-.014,0],e.white,.03);t.add(i);let r=this.roundedBox("sensor_blue_readout_line",[1.48,.012,.025],[.35,.012,-.3],e.blue,.006);t.add(r);let o=new yt(new pr(.07,.07,.012,28),e.blue);o.name="sensor_sample_dot",o.rotation.x=Math.PI/2,o.position.set(.48,.018,.06),t.add(o);for(let l=0;l<14;l++){let c=this.roundedBox(`sensor_contact_${l}`,[.024,.018,.12],[1.22+l%2*.038,.018,-.28+l*.043],e.charcoal,.006);t.add(c)}let a=this.createSensorLabelPlane();return a.scale.set(1.18,1,1),a.position.set(.12,.024,.02),t.add(a),t}createPipetteAndDroplet(){if(!this.sensorGroup)return;let e=new $i({color:"#dff7ff",transparent:!0,opacity:.38,roughness:.1,metalness:0}),t=new $i({color:"#d8ffff",transparent:!0,opacity:.68,roughness:.04,metalness:0});this.pipetteGroup=new qt,this.pipetteGroup.name="pipette_group",this.pipetteGroup.position.set(this.cartridgeSampleX,3.6,this.cartridgeSampleZ),this.pipetteGroup.rotation.set(0,0,0),this.pipetteGroup.visible=!1,this.sensorGroup.add(this.pipetteGroup);let n=new yt(new pr(.05,.06,.68,28),e);n.name="pipette_barrel",n.position.set(0,.08,0),this.pipetteGroup.add(n);let i=new yt(new pr(.03,.036,.5,24),t);i.name="pipette_liquid_core",i.position.set(0,.1,0),this.pipetteGroup.add(i);let r=new yt(new ol(.11,28,18),e);r.name="pipette_bulb",r.scale.set(.82,1.42,.82),r.position.set(0,.56,0),this.pipetteGroup.add(r);let o=new yt(new pr(.042,.05,.18,24),e);o.name="pipette_neck",o.position.set(0,-.34,0),this.pipetteGroup.add(o);let a=new yt(new rl(.05,.28,28),e);a.name="pipette_tip",a.rotation.x=Math.PI,a.position.set(0,-.57,0),this.pipetteGroup.add(a),this.dropletGroup=new qt,this.dropletGroup.name="solution_droplet",this.dropletGroup.position.set(this.cartridgeSampleX,0,this.cartridgeSampleZ),this.dropletGroup.visible=!1,this.sensorGroup.add(this.dropletGroup);let l=new yt(this.createDropletGeometry(),t);l.name="transparent_solution_drop",l.position.set(0,.17,0),l.scale.setScalar(0),l.visible=!1,this.dropMesh=l,this.dropletGroup.add(l);let c=new yt(new il(.075,40),t);c.name="solution_contact_puddle",c.rotation.x=-Math.PI/2,c.position.set(0,.034,0),c.scale.setScalar(0),c.visible=!1,this.puddleMesh=c,this.dropletGroup.add(c)}createSensorConstellationScene(){let e=this.getViewportSize().width<760?2600:5200,t=new Float32Array(e*3),n=new Float32Array(e*3),i=new Float32Array(e*3),r=this.createSensorStarTargets(e);for(let p=0;p<e;p++){let g=p*3;if(Math.random()<.18){let _=Math.floor(Math.random()*4);t[g]=_<2?Math.random()<.5?-4.5:4.5:(Math.random()-.5)*8.4,t[g+1]=_>=2?Math.random()<.5?-2.8:2.8:(Math.random()-.5)*5.1}else t[g]=(Math.random()-.5)*7.6,t[g+1]=(Math.random()-.5)*4.4;t[g+2]=-.28+Math.random()*.56,n[g]=r[g],n[g+1]=r[g+1],n[g+2]=r[g+2],i[g]=n[g]+(Math.random()-.5)*.18,i[g+1]=-2.85-Math.random()*.55,i[g+2]=n[g+2]+(Math.random()-.5)*.14}let o=new Gt;o.setAttribute("position",new Bt(t.slice(),3));let a=new fr({color:"#f7efe2",size:.023,transparent:!0,opacity:0,depthWrite:!1});this.sensorConstellation=new zr(o,a),this.sensorConstellation.name="sensor_constellation",this.sensorConstellationGeometry=o,this.sensorConstellationMaterial=a,this.sensorStarStartPositions=t,this.sensorStarTargetPositions=n,this.sensorStarFallPositions=i,this.scene.add(this.sensorConstellation),this.sensorFillMaterial=this.createTransparentMaterial("#f7f1df",.34,.08),this.sensorFillMaterial.opacity=0,this.sensorFillCard=this.roundedBox("sensor_fill_card",[2.42,.6,.025],[0,0,.035],this.sensorFillMaterial,.035),this.scene.add(this.sensorFillCard);let l=this.getSensorFieldLayout(),c=Math.floor(l.length/2),h=l[c],u=h?.position.clone()??new L(0,-.34,.08),d=h?.rotation.clone()??this.centerSensorDisplayRotation.clone();this.centerSensor=this.createStandaloneSensorModel(1.48),this.centerSensor.name="center_revealed_sensor",this.centerSensor.position.set(0,0,.09),this.centerSensor.rotation.copy(this.centerSensorDisplayRotation),this.centerSensor.userData.fieldPosition=u,this.centerSensor.userData.fieldRotation=d,this.centerSensor.userData.fallRotation=new ln(d.x+2.4,d.y-1.8,d.z+2.8),this.centerSensor.userData.fieldScale=h?.scale??.38,this.centerSensor.userData.baseRotation=d.clone(),this.centerSensor.userData.fallX=u.x,this.centerSensor.userData.fallY=-4.2,this.centerSensor.userData.fallZ=u.z+.72,this.centerSensor.visible=!0,this.centerSensorMaterials=this.collectMaterials(this.centerSensor),this.setMaterialsOpacity(this.centerSensorMaterials,0),this.scene.add(this.centerSensor),this.sensorField=new qt,this.sensorField.name="sensor_field",this.sensorFieldRevealStarts=[];let f=this.sensorField;l.forEach((p,g)=>{if(g===c)return;let m=this.createStandaloneSensorModel(p.scale),_=this.createSensorGatherStartPosition(p.position),x=new ln(p.rotation.x+(Math.random()-.5)*.5,p.rotation.y+(Math.random()-.5)*.42,p.rotation.z+(Math.random()-.5)*.5);m.position.copy(_),m.rotation.copy(x),m.userData.fieldPosition=p.position.clone(),m.userData.gatherStartPosition=_,m.userData.gatherStartRotation=x,m.userData.baseRotation=p.rotation.clone(),m.userData.fieldRotation=p.rotation.clone(),m.userData.fallStart=p.fallStart,m.userData.fallRotation=new ln(p.rotation.x+(Math.random()-.5)*4.6,p.rotation.y+(Math.random()-.5)*5.2,p.rotation.z+(Math.random()-.5)*4.8),m.userData.startY=p.position.y,m.userData.fallX=p.fallPosition.x,m.userData.fallY=p.fallPosition.y,m.userData.fallZ=p.fallPosition.z,this.sensorFieldRevealStarts.push(p.position.y>.46?.62+Math.random()*.2:Math.random()*.5);let S=this.collectMaterials(m);this.setMaterialsOpacity(S,0),this.sensorFieldMaterialGroups.push(S),this.sensorFieldItems.push(m),f.add(m)}),this.sensorField.visible=!0,this.sensorFieldMaterials=this.collectMaterials(this.sensorField),this.scene.add(this.sensorField)}createSensorMessageScene(){let e=this.getViewportSize().width<760,t=e?3200:5600,n=["Each sensor carries the chemistry","for a clearer reader result."],i=new Float32Array(t*3),r=this.createTextStarTargets(n,t);for(let c=0;c<t;c++){let h=c*3,u=Math.floor(Math.random()*4),d=e?4.8:6.6,f=e?3.2:4.4;u===0?(i[h]=(Math.random()-.5)*d,i[h+1]=3+Math.random()*f*.45):u===1?(i[h]=(Math.random()-.5)*d,i[h+1]=-2.4-Math.random()*f*.45):u===2?(i[h]=-3.8-Math.random()*d*.45,i[h+1]=1.3+(Math.random()-.5)*f):(i[h]=3.8+Math.random()*d*.45,i[h+1]=1.3+(Math.random()-.5)*f),i[h+2]=-1.6+Math.random()*3.2}let o=new Gt;o.setAttribute("position",new Bt(i.slice(),3));let a=new fr({color:"#f7efe2",size:.014,transparent:!0,opacity:0,depthWrite:!1});this.sensorMessage=new zr(o,a),this.sensorMessage.name="sensor_message_stars",this.sensorMessageGeometry=o,this.sensorMessageMaterial=a,this.sensorMessageStartPositions=i,this.sensorMessageTargetPositions=r,this.scene.add(this.sensorMessage);let l=this.createSensorMessageTextPlane(n);this.scene.add(l)}createTextStarTargets(e,t){let n=this.getSensorMessageLayout(),i=document.createElement("canvas");i.width=n.canvasWidth,i.height=n.canvasHeight;let r=i.getContext("2d",{willReadFrequently:!0}),o=[];if(r){r.clearRect(0,0,i.width,i.height),r.fillStyle="#ffffff",r.textAlign="center",r.textBaseline="middle",r.font=n.font;let l=i.height/2-(e.length-1)*n.lineHeight/2;e.forEach((u,d)=>{r.fillText(u,i.width/2,l+d*n.lineHeight,i.width*n.maxTextWidth)});let c=r.getImageData(0,0,i.width,i.height).data,h=3;for(let u=0;u<i.height;u+=h)for(let d=0;d<i.width;d+=h){let f=c[(u*i.width+d)*4+3];f>40&&o.push({x:d,y:u,weight:f/255})}}let a=new Float32Array(t*3);for(let l=0;l<t;l++){let c=l*3,h=o.length?o[Math.floor(Math.random()*o.length)]:{x:Math.random()*i.width,y:Math.random()*i.height,weight:1},u=h.x/i.width-.5,d=.5-h.y/i.height;a[c]=u*n.worldWidth+(Math.random()-.5)*.006,a[c+1]=n.worldY+d*n.worldHeight+(Math.random()-.5)*.006,a[c+2]=(Math.random()-.5)*.06}return a}createSensorMessageTextPlane(e){let t=this.getSensorMessageLayout(),n=document.createElement("canvas");n.width=t.canvasWidth,n.height=t.canvasHeight;let i=n.getContext("2d");if(i){i.clearRect(0,0,n.width,n.height),i.fillStyle="#f7efe2",i.textAlign="center",i.textBaseline="middle",i.font=t.font;let l=n.height/2-(e.length-1)*t.lineHeight/2;e.forEach((c,h)=>{i.fillText(c,n.width/2,l+h*t.lineHeight,n.width*t.maxTextWidth)})}let r=new Js(n);r.colorSpace=Vt,r.needsUpdate=!0;let o=new Zn({map:r,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,toneMapped:!1}),a=new yt(new mr(t.worldWidth,t.worldHeight),o);return a.name="sensor_message_text",a.position.set(0,t.worldY,.18),a.renderOrder=40,this.sensorMessageTextMaterial=o,a}getSensorMessageLayout(){return{canvasWidth:1800,canvasHeight:480,font:"700 126px Arial",lineHeight:150,maxTextWidth:.92,worldWidth:5.95,worldHeight:1.58,worldY:1.28}}getSensorFieldLayout(){let c=this.getPortraitProgress(),h=Math.min(1,this.getWorldWidth()/ye.lerp(6.2,4.9,c)),u=this.getWorldWidth()*1.08/(h*ye.lerp(9*1.18,6*1.02,c)),d=this.getWorldWidth()/this.camera.aspect*1.22/(h*ye.lerp(6*.72,9*.66,c)),f=[];for(let p=0;p<7;p++)for(let g=0;g<10;g++){let m=p*10+g,_=ye.lerp((g-9/2)*1.18,(m%7-6/2)*1.02,c)*u,x=ye.lerp((p-6/2)*.72+-.08,(Math.floor(m/7)-9/2)*.66,c)*d,S=7-p-1,y=g-9/2,T=S/Math.max(1,6)*.34+g%3*.026,b=_+y*.2+(p%2===0?-.08:.08),w=-this.getWorldWidth()/this.camera.aspect/h-3-S*.32,v=.28+p*.17+g%3*.06;f.push({position:new L(_,x,-.04+(p*10+g)%5*.018),rotation:new ln(this.centerSensorDisplayRotation.x-.08+(p-6/2)*.01,this.centerSensorDisplayRotation.y*.28+y*.018,(p-6/2)*.018),scale:.46,fallStart:T,fallPosition:new L(b,w,v)})}return f}createSensorGatherStartPosition(e){let t=this.getViewportSize().width<760,n=t?.05:.07,i=t?.08:.1,r=t?.9:1.18;return new L(e.x+(Math.random()-.5)*n,e.y+(Math.random()-.5)*i,e.z-r-Math.random()*.42)}createSensorStarTargets(e){let t=this.createSensorStarTargetsFromTemplate(e);if(t)return t;let n=new Float32Array(e*3),i=3.05,r=.92,o=i/2,a=r/2;for(let l=0;l<e;l++){let c=l*3,h=l<e*.12,u=l>=e*.12&&l<e*.28,d=l>=e*.28&&l<e*.38,f=l>=e*.38&&l<e*.74,p=0,g=0;if(u){let _=l%16;p=o-.22+(Math.random()-.5)*.085,g=-a+.11+_*((r-.22)/15)+(Math.random()-.5)*.012}else if(d){let _=l%3;p=-o+.18+Math.random()*(i-.42),g=-a+.1+_*.055+(Math.random()-.5)*.012}else if(f){let _=Math.random();p=-o+.18+_*(i-.64),g=(Math.random()-.5)*r*.62}else if(h){let _=Math.floor(Math.random()*4);_===0?(p=-o+Math.random()*i,g=-a):_===1?(p=-o+Math.random()*i,g=a):_===2?(p=-o,g=-a+Math.random()*r):(p=o,g=-a+Math.random()*r)}else p=(Math.random()-.5)*i*.96,g=(Math.random()-.5)*r*.86;if(l%31===0){let _=Math.random()*Math.PI*2,x=Math.random()*.085;p=.48+Math.cos(_)*x,g=.08+Math.sin(_)*x}n[c]=p,n[c+1]=g,n[c+2]=(Math.random()-.5)*.06}return n}createSensorStarTargetsFromTemplate(e){if(!this.optimizedCartridgeTemplate)return;let t=[],n=new Qe,i=new Qe().makeRotationFromEuler(this.centerSensorDisplayRotation),r=new L,o=1.48;if(this.optimizedCartridgeTemplate.updateMatrixWorld(!0),new $t().setFromObject(this.optimizedCartridgeTemplate).getCenter(r),this.optimizedCartridgeTemplate.traverse(h=>{let u=h;if(!u.isMesh||!u.geometry)return;let f=u.geometry.getAttribute("position");if(!(!f||f.count<3)){n.copy(u.matrixWorld);for(let p=0;p<f.count-2;p+=3){let g=new L().fromBufferAttribute(f,p).applyMatrix4(n).sub(r),m=new L().fromBufferAttribute(f,p+1).applyMatrix4(n).sub(r),_=new L().fromBufferAttribute(f,p+2).applyMatrix4(n).sub(r),x=m.clone().sub(g).cross(_.clone().sub(g)).length()*.5;x>1e-6&&t.push({a:g,b:m,c:_,area:x})}}}),!t.length)return;let a=t.reduce((h,u)=>h+u.area,0),l=new Float32Array(e*3),c=new L;for(let h=0;h<e;h++){let u=Math.random()*a,d=t[t.length-1];for(let m of t)if(u-=m.area,u<=0){d=m;break}let f=Math.random(),p=Math.random();f+p>1&&(f=1-f,p=1-p),c.copy(d.a).add(d.b.clone().sub(d.a).multiplyScalar(f)).add(d.c.clone().sub(d.a).multiplyScalar(p)).applyMatrix4(i).multiplyScalar(o);let g=h*3;l[g]=c.x+(Math.random()-.5)*.015,l[g+1]=c.y+(Math.random()-.5)*.015,l[g+2]=c.z+.09+(Math.random()-.5)*.035}return l}updateSensorStarTargetsFromTemplate(){if(!this.sensorStarTargetPositions)return;let e=this.createSensorStarTargetsFromTemplate(this.sensorStarTargetPositions.length/3);e&&this.sensorStarTargetPositions.set(e)}createStandaloneSensorModel(e){if(this.optimizedCartridgeTemplate){let o=this.createOptimizedCartridgeClone();return o.scale.setScalar(e),o}let t=this.createTransparentMaterial("#f7f1df",.38,.08),n=this.createTransparentMaterial("#20262b",.52,.06),i=this.createTransparentMaterial("#1d8bb2",.28,.06),r=this.createSensorGroup({white:t,charcoal:n,blue:i});return r.scale.setScalar(e),r}createOptimizedCartridgeTemplate(e){e.updateMatrixWorld(!0);let t=new Map;e.traverse(c=>{let h=c;if(!h.isMesh||!h.geometry||!h.material)return;let u=Array.isArray(h.material)?h.material[0]:h.material,d=u.name||u.uuid,f=h.geometry.clone();f.applyMatrix4(h.matrixWorld),f.index&&(f=f.toNonIndexed()),Object.keys(f.attributes).forEach(g=>{g!=="position"&&g!=="normal"&&f.deleteAttribute(g)}),f.getAttribute("normal")||f.computeVertexNormals();let p=t.get(d)??{material:u,geometries:[]};p.geometries.push(f),t.set(d,p)});let n=new qt;n.name="optimized_cartridge_template",t.forEach(({material:c,geometries:h})=>{let u=jg(h,!1);if(h.forEach(p=>p.dispose()),!u)return;let d=c.clone(),f=new yt(u,d);f.name=`optimized_cartridge_${n.children.length}`,n.add(f)});let r=new $t().setFromObject(n).getCenter(new L);n.children.forEach(c=>{c.position.sub(r)});let o=e.getWorldQuaternion(new an),a=n.clone(!0);a.quaternion.copy(o).invert(),a.updateMatrixWorld(!0);let l=new $t().setFromObject(a,!0);return this.sensorCollider={halfSize:l.getSize(new L).multiplyScalar(.5),rotation:o,offset:l.getCenter(new L).applyQuaternion(o)},this.prepareAssetMaterials(n),n}createOptimizedCartridgeClone(){let e=new qt;return e.name="standalone_optimized_cartridge",this.optimizedCartridgeTemplate?.children.forEach(t=>{let n=t;if(!n.isMesh)return;let i=new yt(n.geometry,Array.isArray(n.material)?n.material.map(r=>r.clone()):n.material.clone());i.name=n.name,i.position.copy(n.position),i.rotation.copy(n.rotation),i.scale.copy(n.scale),e.add(i)}),e}refreshStandaloneSensorsFromTemplate(){if(!this.optimizedCartridgeTemplate)return;[this.centerSensor,...this.sensorFieldItems].filter(t=>!!t).forEach(t=>{let n=this.collectMaterials(t)[0]?.opacity??0,i=this.createOptimizedCartridgeClone();this.retiredObjects.push(...t.children),t.clear(),t.add(...i.children);let r=this.collectMaterials(t);if(this.setMaterialsOpacity(r,n),t===this.centerSensor)this.centerSensorMaterials=r;else{let o=this.sensorFieldItems.indexOf(t);o>=0&&(this.sensorFieldMaterialGroups[o]=r)}}),this.sensorFieldMaterials=this.sensorField?this.collectMaterials(this.sensorField):[],this.scheduleSensorFall()}createTransparentMaterial(e,t,n){let i=this.createMaterial(e,t,n);return i.transparent=!0,i.depthWrite=!1,i.depthTest=!0,i.side=li,i}collectMaterials(e){let t=new Set;return e.traverse(n=>{let r=n.material;r&&(Array.isArray(r)?r.forEach(o=>t.add(o)):t.add(r))}),Array.from(t)}setMaterialsOpacity(e,t){e.forEach(n=>{n.transparent=t<1,n.opacity=t,n.depthWrite=t>=1,n.depthTest=!0,n.needsUpdate=!0})}setReaderOpacity(e){let t=e>=.999,n=e<=.001;this.readerMaterials.forEach(i=>{i.opacity=e,i.transparent=!t,i.depthWrite=t,i.depthTest=!0,i.visible=!n,i.needsUpdate=!0})}prepareMaterialsForReveal(e){e.forEach(t=>{t.transparent=!0,t.depthWrite=!0,t.depthTest=!0,t.needsUpdate=!0})}createDropletGeometry(){let e=[new ke(0,-.085),new ke(.04,-.06),new ke(.055,-.008),new ke(.038,.045),new ke(.014,.09),new ke(0,.125)];return new sl(e,36)}roundedBox(e,t,n,i,r){let o=this.roundedGeometries.get(t,r),a=new yt(o,i);return a.name=e,a.position.set(...n),a}createMaterial(e,t,n){return new $i({color:e,roughness:t,metalness:n})}createLogoPlane(){let e=document.createElement("canvas");e.width=512,e.height=128;let t=e.getContext("2d");t&&(t.clearRect(0,0,e.width,e.height),t.fillStyle="#ffffff",t.font="bold 76px Arial",t.fillText("trax",84,88));let n=new Js(e);n.colorSpace=Vt;let i=new Zn({map:n,transparent:!0}),r=new yt(new mr(.96,.24),i);return r.name="reader_side_logo",r.position.set(-1.04,-.08,-.773),r.rotation.set(0,Math.PI,0),r}createSensorLabelPlane(){let e=document.createElement("canvas");e.width=512,e.height=256;let t=e.getContext("2d");t&&(t.fillStyle="#f9f7ef",t.fillRect(0,0,e.width,e.height),t.fillStyle="#293039",t.font="bold 34px Arial",t.fillText("SAMPLE",38,58),t.font="22px Arial",t.fillText("Reader test sensor",38,102),t.fillText("ID 2048",38,140),t.fillRect(38,174,168,14),t.fillRect(38,198,238,10),t.strokeStyle="#c7c2b8",t.lineWidth=5,t.strokeRect(12,12,e.width-24,e.height-24));let n=new Js(e);n.colorSpace=Vt;let i=new Zn({map:n,transparent:!0}),r=new yt(new mr(.64,.32),i);return r.name="sensor_label",r.rotation.x=-Math.PI/2,r}animate(){this.frameId=requestAnimationFrame(()=>this.animate()),this.particles&&(this.particles.rotation.y+=this.isPointerDown?.002:.001),this.nebulaUniforms&&(this.nebulaUniforms.uTime.value=performance.now()*.001),this.syncScrollTimelineWithNativeScroll(),this.updateSensorConstellation(),this.updateSensorMessage(),this.updateSensorField(),this.topRotationRig&&this.isTopInteractive&&!this.isPointerDown&&(this.topRotationRig.rotation.y+=86e-5,this.topRotationRig.rotation.y=this.shortestAngle(this.topRotationRig.rotation.y)),this.syncSensorVisibility(),this.applySensorRock(),this.resolveSensorContacts(),this.renderer.render(this.scene,this.camera)}updateSensorConstellation(){if(!this.sensorConstellationGeometry||!this.sensorStarStartPositions||!this.sensorStarTargetPositions||!this.sensorStarFallPositions)return;let e=this.sensorConstellationGeometry.getAttribute("position"),t=e.array,n=rt.parseEase("power2.inOut")(this.sensorStarMotion.progress),i=rt.parseEase("power2.in")(this.sensorStarMotion.fall);for(let r=0;r<t.length;r+=3){let o=ye.lerp(this.sensorStarStartPositions[r],this.sensorStarTargetPositions[r],n),a=ye.lerp(this.sensorStarStartPositions[r+1],this.sensorStarTargetPositions[r+1],n),l=ye.lerp(this.sensorStarStartPositions[r+2],this.sensorStarTargetPositions[r+2],n);t[r]=ye.lerp(o,this.sensorStarFallPositions[r],i),t[r+1]=ye.lerp(a,this.sensorStarFallPositions[r+1],i),t[r+2]=ye.lerp(l,this.sensorStarFallPositions[r+2],i)}e.needsUpdate=!0}updateSensorMessage(){if(!this.sensorMessageGeometry||!this.sensorMessageStartPositions||!this.sensorMessageTargetPositions)return;let e=this.sensorMessageGeometry.getAttribute("position"),t=e.array,n=rt.parseEase("power2.inOut")(this.sensorMessageMotion.progress);for(let i=0;i<t.length;i+=3)t[i]=ye.lerp(this.sensorMessageStartPositions[i],this.sensorMessageTargetPositions[i],n),t[i+1]=ye.lerp(this.sensorMessageStartPositions[i+1],this.sensorMessageTargetPositions[i+1],n),t[i+2]=ye.lerp(this.sensorMessageStartPositions[i+2],this.sensorMessageTargetPositions[i+2],n);e.needsUpdate=!0}updateSensorField(){if(this.centerSensor&&(this.centerSensor.position.copy(this.centerSensorPose.position),this.centerSensor.rotation.copy(this.centerSensorPose.rotation),this.centerSensor.scale.copy(this.centerSensorPose.scale)),this.syncSensorFieldMaterialMode(),this.updateSensorFieldReveal(),this.sensorStarMotion.fall>0){if(!this.applySensorFall())for(let e of[...this.sensorFieldItems,this.centerSensor])e&&(e.position.copy(e.userData.fieldPosition),e.rotation.copy(e.userData.fieldRotation));return}if(!(!this.selectedFieldSensor&&this.applySensorAppearance())&&(this.sensorFieldItems.forEach((e,t)=>{if(e===this.selectedFieldSensor)return;let n=e.userData.baseRotation,i=e.userData.gatherStartRotation,r=e.userData.gatherStartPosition,o=e.userData.fieldPosition,a=this.getSensorFieldItemRevealProgress(t,this.sensorFieldItems.length);o&&r&&e.position.lerpVectors(r,o,a),n&&i&&e.rotation.set(ye.lerp(i.x,n.x,a),ye.lerp(i.y,n.y,a),ye.lerp(i.z,n.z,a))}),this.centerSensor&&this.sensorFieldReveal.progress>.98)){this.centerSensor.position.copy(this.centerSensor.userData.fieldPosition);let e=this.centerSensor.userData.fieldRotation;this.centerSensor.rotation.copy(e)}}applySensorRock(e=performance.now()/1e3){if(!this.sensorField?.visible||this.sensorStarMotion.fall>0)return;let t=this.scrollProgressCurrent*(this.scrollTimeline?.duration()??1),n=1-ye.smoothstep(t,13.86,14.06);[...this.sensorFieldItems,this.centerSensor].forEach((i,r)=>{if(!i||i===this.selectedFieldSensor)return;let o=i===this.centerSensor?ye.smoothstep(this.sensorFieldReveal.progress,.2,.65):this.getSensorFieldItemRevealProgress(r,this.sensorFieldItems.length),a=iv(r,e)*o*n;i.quaternion.premultiply(this.sensorRockQuaternion.setFromAxisAngle(this.sensorRockAxis,a))})}resolveSensorContacts(){let e=this.sensorCollider;if(!e||!this.sensorField?.visible)return;let t=[...this.sensorFieldItems];this.centerSensor?.visible&&t.push(this.centerSensor);let n=t.filter(i=>i.visible).map(i=>({position:i.position,quaternion:i.quaternion,halfSize:e.halfSize.clone().multiply(i.scale).addScalar(.008),offset:e.offset.clone().multiply(i.scale),rotation:e.rotation}));Cm(n)}scheduleSensorFall(){let e=++this.sensorFallRevision;window.clearTimeout(this.sensorFallRefreshId),this.sensorFallRefreshId=window.setTimeout(()=>this.prepareSensorFall(e),140)}prepareSensorFall(e){if(!this.optimizedCartridgeTemplate||!this.centerSensor||!this.sensorCollider)return;this.sensorFallWorker||(this.sensorFallWorker=new Worker(new URL("worker-SHYTWJAI.js",import.meta.url),{type:"module"}),this.sensorFallWorker.onmessage=({data:o})=>{o.revision===this.sensorFallRevision&&(this.sensorFallRecording=o)});let t=this.sensorCollider,n=[...this.sensorFieldItems,this.centerSensor],i={revision:e,bodies:n.map(o=>{let a=o===this.centerSensor?o.userData.fieldScale:o.scale.x,l=o.userData.fieldRotation;return{position:o.userData.fieldPosition.toArray(),quaternion:new an().setFromEuler(l).toArray(),halfExtents:t.halfSize.clone().multiplyScalar(a).toArray(),shapeQuaternion:t.rotation.toArray(),shapeOffset:t.offset.clone().multiplyScalar(a).toArray(),release:o===this.centerSensor?.18:o.userData.fallStart}})},r=i.bodies.map(o=>({position:new L(...o.position),quaternion:new an(...o.quaternion),halfSize:new L(...o.halfExtents.map(a=>Math.max(.06,a+.016))),offset:new L(...o.shapeOffset),rotation:new an(...o.shapeQuaternion)}));Cm(r),r.forEach((o,a)=>{i.bodies[a].position=o.position.toArray();let l=n[a].userData.fieldPosition,c=n[a].userData.gatherStartPosition;c&&c.add(o.position).sub(l),l.copy(o.position)}),i.appearance=this.createSensorAppearanceTargets(n),this.sensorFallWorker.postMessage(i,[i.appearance.targets.buffer])}createSensorAppearanceTargets(e){let n=new Float32Array(1201*e.length*8),i=rt.parseEase("power2.inOut"),r=rt.parseEase("power2.out"),o=rt.parseEase("power1.out"),a=new L,l=new ln,c=new an,h=new L(0,0,.09);for(let d=0;d<1201;d++){let f=12.86+d*.001,p=ye.clamp((f-12.96)/.9,0,1);e.forEach((g,m)=>{let _=g===this.centerSensor,x=g.userData.fieldPosition,S=g.userData.fieldRotation,y=_?ye.clamp((f-12.86)/.6,0,1):p>=1?1:ye.clamp((p-this.sensorFieldRevealStarts[m])*4.2,0,1),T=_?i(y):r(y);a.lerpVectors(_?h:g.userData.gatherStartPosition,x,_?o(y):T);let b=_?this.centerSensorDisplayRotation:g.userData.gatherStartRotation;l.set(ye.lerp(b.x,S.x,T),ye.lerp(b.y,S.y,T),ye.lerp(b.z,S.z,T)),c.setFromEuler(l);let w=_?ye.lerp(1.48,g.userData.fieldScale,T):g.scale.x;n.set([...a.toArray(),...c.toArray(),w],(d*e.length+m)*8)})}let u=this.sensorCollider;return{frames:1201,count:e.length,frameSeconds:.001,targets:n,settledFrames:e.map((d,f)=>d===this.centerSensor?600:Math.ceil((.1+.9*Math.min(1,this.sensorFieldRevealStarts[f]+1/4.2))*1e3)),colliders:e.map(()=>({halfExtents:u.halfSize.toArray(),rotationClearance:2*(u.halfSize.length()+u.offset.length())*Math.sin(Pm/2),shapeOffset:u.offset.toArray(),shapeQuaternion:u.rotation.toArray()}))}}applySensorAppearance(){let e=this.sensorFallRecording?.appearance,t=this.scrollProgressCurrent*(this.scrollTimeline?.duration()??1);if(!e||!this.centerSensor||t<12.86)return!1;let n=this.sensorFieldItems.length+1,i=ye.clamp((t-12.86)/1.2,0,1)*(e.frames-1),r=Math.floor(i),o=Math.min(r+1,e.frames-1),a=i-r;for(let l=0;l<n;l++){let c=this.sensorFieldItems[l]??this.centerSensor,h=(r*n+l)*8,u=(o*n+l)*8,d=e.poses;c.position.set(ye.lerp(d[h],d[u],a),ye.lerp(d[h+1],d[u+1],a),ye.lerp(d[h+2],d[u+2],a)),c.quaternion.fromArray(d,h+3),c.quaternion.slerp(this.fallQuaternion.fromArray(d,u+3),a),c.scale.setScalar(ye.lerp(d[h+7],d[u+7],a))}return!0}applySensorFall(){let e=this.sensorFallRecording;if(!e||!this.centerSensor)return!1;let t=ye.clamp(this.sensorStarMotion.fall,0,1)*(e.frames-1),n=Math.floor(t),i=Math.min(n+1,e.frames-1),r=t-n,o=e.poses;for(let a=0;a<e.count;a++){let l=this.sensorFieldItems[a]??this.centerSensor,c=(n*e.count+a)*7,h=(i*e.count+a)*7;l.position.set(ye.lerp(o[c],o[h],r),ye.lerp(o[c+1],o[h+1],r),ye.lerp(o[c+2],o[h+2],r)),l.quaternion.fromArray(o,c+3),this.fallQuaternion.fromArray(o,h+3),l.quaternion.slerp(this.fallQuaternion,r)}return!0}updateSensorFieldReveal(){let e=this.sensorFieldMaterialGroups.length;e&&this.sensorFieldMaterialGroups.forEach((t,n)=>{let i=this.getSensorFieldItemRevealProgress(n,e);t.forEach(r=>{this.sensorFieldIsOpaque||(r.transparent=i<.999,r.opacity=i,r.depthWrite=i>.02,r.depthTest=!0,r.needsUpdate=!0)})})}getSensorFieldItemRevealProgress(e,t){if(!t)return 0;let n=this.sensorFieldRevealStarts[e]??Math.random()*.62,i=ye.clamp((this.sensorFieldReveal.progress-n)*4.2,0,1);return rt.parseEase("power2.out")(i)}syncSensorFieldMaterialMode(){let e=this.sensorStarMotion.fall>.01;e!==this.sensorFieldIsOpaque&&(this.sensorFieldIsOpaque=e,[...this.sensorFieldMaterials,...this.centerSensorMaterials].forEach(t=>{t.transparent=!e,t.depthWrite=e||t.opacity>.02,t.depthTest=!0,t.needsUpdate=!0}))}onPointerDown(e){if(!this.openingScrollLocked&&this.topRotationRig){if(!this.isTopInteractive){this.trySelectSensorFieldItem(e);return}this.topRotationRig.rotation.y=this.shortestAngle(this.topRotationRig.rotation.y),this.isPointerDown=!0,this.pointerStart.set(e.clientX,e.clientY),this.dragStartRotation.copy(this.topRotationRig.rotation),this.renderer.domElement.setPointerCapture(e.pointerId),this.renderer.domElement.style.cursor="grabbing",this.canvasHost.nativeElement.style.cursor="grabbing",this.hero.nativeElement.style.cursor="grabbing"}}onPointerMove(e){if(this.selectedFieldSensor){let i=e.clientX-this.pointerStart.x,r=e.clientY-this.pointerStart.y;this.selectedFieldSensor.rotation.y=this.dragStartRotation.y+i*.012,this.selectedFieldSensor.rotation.x=this.dragStartRotation.x+r*.008,this.selectedFieldSensor.rotation.z=this.dragStartRotation.z+i*.003;return}if(!this.topRotationRig||!this.isPointerDown||!this.isTopInteractive)return;let t=e.clientX-this.pointerStart.x,n=e.clientY-this.pointerStart.y;this.topRotationRig.rotation.y=this.dragStartRotation.y+t*.008,this.topRotationRig.rotation.x=ye.clamp(this.dragStartRotation.x+n*.004,-.35,.55),this.particles&&(this.particles.rotation.y+=t*2e-6,this.particles.rotation.x+=n*1e-6)}onPointerUp(){this.isPointerDown&&(this.isPointerDown=!1,this.selectedFieldSensor=void 0,this.setInteractionCursor(this.isTopInteractive?"grab":"default"),!(!this.model||!this.topRotationRig||!this.isTopInteractive)&&(this.topRotationRig.rotation.y=this.shortestAngle(this.topRotationRig.rotation.y),rt.to(this.topRotationRig.position,{x:this.getInitialModelPosition().x,y:this.getInitialModelPosition().y,z:this.getInitialModelPosition().z,duration:.75,ease:"power3.out"}),rt.to(this.topRotationRig.rotation,{x:0,y:0,z:0,duration:.75,ease:"power3.out"}),rt.to(this.topRotationRig.scale,{x:this.getInitialModelScale(),y:this.getInitialModelScale(),z:this.getInitialModelScale(),duration:.75,ease:"power3.out"})))}trySelectSensorFieldItem(e){if(!this.sensorField||!this.sensorFieldItems.length||this.sensorStarMotion.fall>.02||(this.sensorFieldMaterials[0]?.opacity??0)<.2)return;let n=this.getViewportSize(),i=new ke(e.clientX/n.width*2-1,-(e.clientY/n.height)*2+1);this.raycaster.setFromCamera(i,this.camera);let o=this.raycaster.intersectObjects(this.sensorFieldItems,!0)[0]?.object;if(!o)return;let a=o;for(;a?.parent&&a.parent!==this.sensorField;)a=a.parent;!a||a.parent!==this.sensorField||(this.selectedFieldSensor=a,this.isPointerDown=!0,this.pointerStart.set(e.clientX,e.clientY),this.dragStartRotation.copy(this.selectedFieldSensor.rotation),this.renderer.domElement.setPointerCapture(e.pointerId),this.setInteractionCursor("grabbing"))}syncInteractionMode(){let e=window.scrollY<=2;this.isTopInteractive=e,this.setInteractionCursor(e?"grab":"default"),e||this.disableTopInteraction()}enableTopInteraction(){window.scrollY>2||(this.scrollStartRigRotation=void 0,this.isTopInteractive=!0,this.setInteractionCursor("grab"))}disableTopInteraction(){this.isTopInteractive=!1,this.isPointerDown=!1,this.setInteractionCursor("default")}setInteractionCursor(e){this.renderer.domElement.style.cursor=e,this.canvasHost.nativeElement.style.cursor=e,this.hero.nativeElement.style.cursor=e}vectorTweenDynamic(e,t){return{x:()=>e().x,y:()=>e().y,z:()=>e().z,duration:t}}syncScrollHandoffRotation(e){if(!this.topRotationRig)return;if(e<=1e-5){this.scrollStartRigRotation=void 0,this.scrollHandoff.x=0,this.scrollHandoff.y=0,this.scrollHandoff.z=0;return}if(!this.scrollStartRigRotation){let i=this.shortestAngle(this.topRotationRig.rotation.y);this.topRotationRig.rotation.y=i,this.scrollStartRigRotation=new ln(this.topRotationRig.rotation.x,i,this.topRotationRig.rotation.z),this.scrollHandoff.x=this.scrollStartRigRotation.x,this.scrollHandoff.y=i,this.scrollHandoff.z=this.scrollStartRigRotation.z}if(this.isTopInteractive)return;let n=1-ye.clamp(e/this.scrollSpinBackProgress,0,1);this.scrollHandoff.x=this.scrollStartRigRotation.x*n,this.scrollHandoff.y=this.scrollStartRigRotation.y*n,this.scrollHandoff.z=this.scrollStartRigRotation.z*n,this.topRotationRig.rotation.set(this.scrollHandoff.x,this.scrollHandoff.y,this.scrollHandoff.z)}syncScrollTimelineWithNativeScroll(){if(!this.scrollTimeline||!this.scrollTriggerInstance)return;if(this.openingScrollLocked){this.openingScrollGuard(),this.scrollProgressTarget=0,this.scrollProgressCurrent=0,this.scrollLastUpdate=performance.now();return}let e=this.scrollTriggerInstance.start,t=this.scrollTriggerInstance.end;this.scrollProgressTarget=window.scrollY<=2?0:t>e?ye.clamp((window.scrollY-e)/(t-e),0,1):0;let n=performance.now();this.scrollProgressCurrent=rv(this.scrollProgressCurrent,this.scrollProgressTarget,(n-this.scrollLastUpdate)/1e3),this.scrollLastUpdate=n;let i=this.scrollProgressCurrent;this.scrollTimeline.progress(i),this.hero.nativeElement.style.setProperty("--scroll-progress",i.toFixed(4)),this.syncProductCtaLayer(i),this.nebulaUniforms&&(this.nebulaUniforms.uProgress.value=i),i>8e-4?this.disableTopInteraction():this.enableTopInteraction(),this.syncScrollHandoffRotation(i)}shortestAngle(e){return Math.atan2(Math.sin(e),Math.cos(e))}onResize(){let e=this.getViewportSize();if(e.width===this.viewportSize.width&&e.height===this.viewportSize.height)return;this.viewportSize=e,this.openingOrientationTimeline?.kill(),this.camera.aspect=e.width/e.height,this.camera.position.z=ye.lerp(6.7,7.65,this.getCompactProgress()),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld(!0),this.renderer.setPixelRatio(this.getRenderPixelRatio()),this.renderer.setSize(e.width,e.height,!1),this.updateNebulaBackgroundSize(),this.updateResponsivePresentation();let t=this.scrollProgressCurrent;this.scrollTimeline?.progress(0,!0),this.topRotationRig&&(this.topRotationRig.position.copy(this.getInitialModelPosition()),this.topRotationRig.scale.setScalar(this.getInitialModelScale())),this.model&&this.model.rotation.copy(this.getInitialModelRotation()),this.scrollTimeline?.invalidate().progress(t,!0),this.syncProductCtaLayer(t),window.clearTimeout(this.resizeRefreshId),this.resizeRefreshId=window.setTimeout(()=>{$e.refresh(!0),$e.update(),this.syncScrollTimelineWithNativeScroll()},120)}getRenderPixelRatio(){return Math.min(window.devicePixelRatio,window.innerWidth<900?1:1.5)}updateNebulaBackgroundSize(){if(!this.nebulaBackground||!this.nebulaUniforms)return;let e=Math.abs(this.nebulaBackground.position.z),t=2*Math.tan(ye.degToRad(this.camera.fov)/2)*e,n=t*this.camera.aspect;this.nebulaBackground.scale.set(n,t,1),this.nebulaUniforms.uAspect.value=this.camera.aspect}getViewportSize(){let e=this.hero.nativeElement;return{width:e.clientWidth||window.innerWidth,height:e.clientHeight||window.innerHeight}}syncSensorVisibility(){let e=this.scrollProgressCurrent*(this.scrollTimeline?.duration()??1),t=this.sensorStarMotion.fall>=.999;this.sensorConstellation&&(this.sensorConstellation.visible=e>=10.38&&e<11.64),this.sensorMessage&&(this.sensorMessage.visible=e>=11.48&&e<13.78),this.sensorField&&(this.sensorField.visible=e>=12.86&&!t),this.centerSensor&&(this.centerSensor.visible=e>=11.36&&!t),this.sensorPresentation.scale.setScalar(this.sensorCompactScale)}getCompactProgress(){return ye.smoothstep(1100-this.getViewportSize().width,0,700)}getWorldWidth(){return 2*Math.tan(ye.degToRad(this.camera.fov/2))*this.camera.position.z*this.camera.aspect}updateResponsivePresentation(){let e=this.getPortraitProgress();hd(this.hero.nativeElement);let t=Math.min(1,this.getWorldWidth()/ye.lerp(6.2,4.9,e));this.sensorCompactScale=t,this.syncSensorVisibility();let n=this.getSensorFieldLayout(),i=Math.floor(n.length/2);n.forEach((c,h)=>{let u=h===i?this.centerSensor:this.sensorFieldItems[h<i?h:h-1];if(!u)return;let d=u.userData.fieldPosition,f=u.userData.gatherStartPosition;f&&f.add(c.position).sub(d),d.copy(c.position),u.userData.fallX=c.fallPosition.x,u.userData.fallY=c.fallPosition.y}),this.scheduleSensorFall();let r=this.scene.getObjectByName("sensor_message_text"),o=this.getSensorMessageLayout().worldWidth,a=Math.min(1,this.getWorldWidth()*.9/o);this.sensorMessage?.scale.set(a,a,1);let l=this.getSensorMessageLayout().worldY;this.sensorMessage&&(this.sensorMessage.position.y=l*(1-a)),r&&(r.scale.set(a,a,1),r.position.y=l)}syncProductCtaLayer(e){let t=this.scrollTimeline?.duration()??1,n=e*t;this.hero.nativeElement.classList.toggle("is-product-cta",n>=8.9&&n<=10.72)}getScaledFrameSize(e,t,n){let i=this.getViewportSize(),r=i.width*t,o=i.height*n,a=o*e,l=o;return a>r&&(a=r,l=a/e),{width:Math.round(a),height:Math.round(l)}}getScaledFrame(e,t,n){let i=this.getScaledFrameSize(e,t,n);return{width:`${i.width}px`,height:`${i.height}px`}}getDeviceContentScale(e){let t=e==="phone"?this.getBannerPhoneFrame():this.getDeviceFrame(e),n=e==="desktop"?{width:57,height:32}:e==="laptop"?{width:ye.lerp(48,28,this.getPortraitProgress()),height:30}:{width:20.5,height:36.5},i=Math.min(parseFloat(t.width)/n.width,parseFloat(t.height)/n.height),r=8,o=e==="desktop"?28:e==="laptop"?26:22;return`${ye.clamp(i,r,o).toFixed(2)}px`}getInitialModelPosition(){let e=this.getViewportSize().width,t=this.getPortraitProgress(),n=ye.smoothstep(e,1100,1440);return new L(ye.lerp(ye.lerp(.82,this.initialModelPosition.x,n),0,t),ye.lerp(-.05,-.58,t),0)}getSensorSequenceModelPosition(){let e=this.getPortraitProgress();return new L(0,ye.lerp(-1.4,-1.52,e),0)}getSampleDropModelPosition(){return this.getSensorSequenceModelPosition()}getInitialModelScale(){let e=this.getPortraitProgress();return Math.min(ye.lerp(1,.62,e),this.getWorldWidth()/ye.lerp(5.5,3.2,e))}getSensorSequenceModelScale(){return Math.min(ye.lerp(.62,.72,this.getCompactProgress()),this.getWorldWidth()*.86/6)}getSensorEntryX(){return this.cartridgePulledX+(this.getViewportSize().width<760?3.2:5.4)}getCenteredInsertedModelPosition(){return this.getSensorSequenceModelPosition()}getInitialModelRotation(){let e=this.getPortraitProgress();return e<=0?this.initialModelRotation:new ln(ye.lerp(this.initialModelRotation.x,.42,e),ye.lerp(this.initialModelRotation.y,-.22,e),ye.lerp(this.initialModelRotation.z,-1.08,e))}getSensorSequenceModelRotation(){let e=this.getPortraitProgress(),t=new ln(this.initialModelRotation.x,0,0);return e<=0?t:new ln(ye.lerp(t.x,.34,e),ye.lerp(t.y,-.1,e),ye.lerp(t.z,.04,e))}getPortraitProgress(){let{width:e,height:t}=this.getViewportSize();return Math.max(ye.smoothstep(900-e,0,400),1-ye.smoothstep(e/t,.85,1.3))}isMobileLayout(){let e=this.getViewportSize();return e.width<=900||e.height>e.width}getDeviceFrame(e){let t=this.getCompactProgress(),n=1-ye.smoothstep(this.getViewportSize().height,390,820);if(e==="desktop")return this.getScaledFrame(16/9,ye.lerp(.58,.86,t),ye.lerp(.7,.64,n));if(e==="laptop"){if(this.isPortraitViewport()){let{width:i,height:r}=this.getViewportSize();return this.getScaledFrame(Math.min(3/4,i*.88/(r*.76)),.88,.76)}return this.getScaledFrame(16/10,ye.lerp(.74,.84,t),ye.lerp(.72,.66,n))}return e==="tablet"?this.getScaledFrame(3/4,ye.lerp(.32,.64,t),ye.lerp(.68,.64,n)):this.getBannerPhoneFrame()}getBannerPhoneFrame(){let e=this.getViewportSize(),t=this.getCompactProgress(),n=1-ye.smoothstep(e.height,390,820);return this.getScaledFrame(9/16,ye.lerp(.25,.68,t),ye.lerp(.62,.56,n))}getBannerPhoneOffsetY(){return`${this.getViewportSize().height*ye.lerp(-.18,-.16,this.getCompactProgress())}px`}getDeviceModelPosition(e){if(e==="laptop")return this.getAssemblyPosition(this.getDeviceModelScale(e),.06);let n=this.getViewportSize().width<760?.02:0;return{desktop:new L(0+n,.08,0),laptop:new L(0+n,.08,0),tablet:new L(-.06+n,.11,0),phone:new L(-.05+n,-.18,0)}[e]}getFinalDeviceModelPosition(){return this.getAssemblyPosition(this.getFinalDeviceModelScale())}getAssemblyPosition(e,t=0){let n=this.getAssemblyBounds().getCenter(new L).multiplyScalar(-e);for(let i=0;i<3&&this.assemblyFramePoints.length;i++){let r=new gl;for(let a of this.assemblyFramePoints){let l=a.clone().multiplyScalar(e).add(n).project(this.camera);r.expandByPoint(new ke(l.x,l.y))}let o=r.getCenter(new ke);n.x-=o.x*this.getWorldWidth()/2,n.y-=(o.y-t)*this.getWorldWidth()/this.camera.aspect/2}return n}isPortraitViewport(){let{width:e,height:t}=this.getViewportSize();return t>e}getAssemblyBounds(){if(this.assemblyBounds)return this.assemblyBounds;let e=new qt,t=this.model?.getObjectByName("fusion_reader_model"),n=this.sensorGroup?.getObjectByName("fusion_cartridge_model");if(!t||!n)return new $t(new L(-2.2,-.8,-1),new L(3.6,.8,1));e.add(t.clone(!0));let i=new qt;return i.add(n.clone(!0)),i.position.set(this.cartridgeInsertedX,this.cartridgeSlotY,0),e.add(i),e.rotation.copy(this.initialModelRotation),e.updateMatrixWorld(!0),this.assemblyBounds=new $t().setFromObject(e),this.assemblyFramePoints=[],e.traverse(r=>{let o=r;if(!o.isMesh)return;o.geometry.boundingBox||o.geometry.computeBoundingBox();let a=o.geometry.boundingBox;for(let l of[a.min.x,a.max.x])for(let c of[a.min.y,a.max.y])for(let h of[a.min.z,a.max.z])this.assemblyFramePoints.push(new L(l,c,h).applyMatrix4(o.matrixWorld))}),this.assemblyBounds}getSceneExitModelPosition(){let e=this.getFinalDeviceModelPosition();return e.y+=this.getViewportSize().width<760?3.4:4.15,e}getDeviceModelRotation(e){return e==="tablet"||e==="phone"?new ln(Math.PI/2,-Math.PI/2,0):this.initialModelRotation}getFinalDeviceModelScale(){let e=this.getAssemblyBounds().getSize(new L);return Math.min(.6,this.getWorldWidth()*.76/e.x,this.getWorldWidth()/this.camera.aspect*.36/e.y)}getDeviceModelScale(e){if(e==="laptop"){let i=this.getDeviceFrame(e),r=this.getViewportSize(),o=this.getAssemblyBounds().getSize(new L);return Math.min(.48,this.getWorldWidth()*parseFloat(i.width)/r.width*.8/o.x,this.getWorldWidth()/this.camera.aspect*parseFloat(i.height)/r.height*.8/o.y)}let t=ye.lerp(1,.84,this.getCompactProgress()),n={desktop:.54*t,laptop:.48*t,tablet:.34*t,phone:.21*t};return Math.min(n[e],this.getWorldWidth()*.82/6)}static \u0275fac=function(t){return new(t||s)};static \u0275cmp=Gm({type:s,selectors:[["app-reader-hero"]],viewQuery:function(t,n){if(t&1&&Ym(Dw,7)(Lw,7)(Ow,7)(Nw,7)(Fw,7)(Uw,7)(Bw,5)(kw,5)(zw,5),t&2){let i;or(i=ar())&&(n.canvasHost=i.first),or(i=ar())&&(n.hero=i.first),or(i=ar())&&(n.readerCopy=i.first),or(i=ar())&&(n.sampleCopy=i.first),or(i=ar())&&(n.deviceStage=i.first),or(i=ar())&&(n.sensorCta=i.first),or(i=ar())&&(n.phraseElements=i),or(i=ar())&&(n.sampleFluidElements=i),or(i=ar())&&(n.instructionFluidElements=i)}},features:[Zm([uc])],decls:230,vars:1,consts:[["hero",""],["canvasHost",""],["sampleCopy",""],["deviceStage",""],["readerCopy",""],["sensorCta",""],["sampleFluid",""],["instructionFluid",""],["phrase",""],[1,"reader-hero"],["aria-hidden","true",1,"reader-canvas"],["aria-hidden","true",1,"sample-copy"],[1,"sample-fluid-stage"],[1,"sample-fluid"],[1,"device-stage"],[1,"device-copy","device-copy-left"],["data-copy-row","0",1,"eyebrow"],["data-copy-row","1"],["data-copy-row","2"],["data-copy-row","3"],["data-copy-row","4"],["data-copy-row","5"],["data-copy-row","6"],["data-copy-row","7"],[1,"device-shell"],[1,"device-screen"],["data-screen-page","",1,"screen-page"],[1,"screen-panel","screen-panel-intro"],[1,"app-welcome-card"],[1,"app-logo-mark"],[1,"screen-panel","screen-panel-phone-dashboard"],[1,"app-header"],[1,"app-instruction"],[1,"app-fluid-stage"],[1,"app-fluid"],[1,"app-sensor-figure"],[1,"app-note"],["data-screen-loading","",1,"screen-panel","screen-panel-tablet-dashboard"],[1,"app-processing"],[1,"app-progress-orb"],["viewBox","0 0 48 48","aria-hidden","true",1,"app-progress-check"],["d","M13 25.5 21 33 36 16"],["data-screen-result","",1,"screen-panel","screen-panel-laptop-research"],[1,"app-result"],[1,"app-result-main"],["data-result-time",""],[1,"app-result-card"],[1,"app-result-insights"],[1,"app-result-chart"],[1,"screen-panel","screen-panel-desktop-research"],[1,"app-dashboard"],[1,"app-dashboard-hero"],[1,"app-dashboard-chart"],[1,"app-dashboard-grid"],[1,"app-dashboard-details"],[1,"screen-panel","screen-panel-final"],[1,"marketplace-cta"],["appRipple","","href","https://www.bio-stream.ca/category/all-products","target","_blank","rel","noopener noreferrer",1,"marketplace-buy"],["aria-hidden","true",1,"button-ripple"],[1,"button-label"],[1,"device-stand"],[1,"device-keyboard"],["data-bluetooth-signal","","aria-hidden","true",1,"bluetooth-signal"],[1,"bluetooth-core"],["viewBox","0 0 24 24","aria-hidden","true","focusable","false"],["d","M7 7 17 17 12 21V3L17 7 7 17"],[1,"device-copy","device-copy-right"],[1,"reader-copy"],[1,"reader-headline"],["aria-live","polite",1,"phrase-stage"],[1,"phrase"],[1,"diagnostic-phrases"],["aria-hidden","true",1,"sensor-cta"],[1,"eyebrow"],["appRipple","","href","https://www.bio-stream.ca/category/all-products","target","_blank","rel","noopener noreferrer"],["aria-hidden","true",1,"progress"]],template:function(t,n){t&1&&(fe(0,"section",9,0),Di(2,"div",10,1),fe(4,"div",11,2)(6,"p"),Te(7,"Reader and sensor can read signals from"),me(),fe(8,"div",12),fc(9,Hw,3,1,"span",13,dc),me(),fe(11,"p"),Te(12,"to help turn a small sample into clearer results."),me()(),fe(13,"div",14,3)(15,"div",15)(16,"p",16),Te(17,"Connected results"),me(),fe(18,"h2",17),Te(19,"Review insights wherever you are."),me(),fe(20,"p",18),Te(21,"The reader processes the sample, then turns sensor output into a clear result view."),me(),fe(22,"p",19),Te(23,"Your dashboard keeps the same context as you move from phone to research view."),me(),fe(24,"p",20),Te(25,"Results can be reviewed at home, shared with a care team, or revisited later."),me(),fe(26,"p",21),Te(27,"Each scan can keep a simple history, so changes over time are easier to understand."),me(),fe(28,"p",22),Te(29,"The interface can highlight what changed, what stayed stable, and what may need follow-up."),me(),fe(30,"p",23),Te(31,"Designed as a proof-of-concept for making sample data feel immediate, readable, and portable."),me()(),fe(32,"div",24)(33,"div",25)(34,"div",26)(35,"div",27)(36,"div",28)(37,"div",29),Te(38,"bt"),me(),fe(39,"h3"),Te(40,"Welcome to biztrax"),me()()(),fe(41,"div",30)(42,"header",31)(43,"h3"),Te(44,"Test Instructions"),me(),fe(45,"p"),Te(46,"General workflow"),me()(),fe(47,"section",32)(48,"h4"),Te(49,"Prepare Your Sample"),me(),fe(50,"p"),Te(51," Place the prepared sample on the sensor well. The pipette can carry "),me(),fe(52,"div",33),fc(53,Vw,3,1,"span",34,dc),me(),fe(55,"div",35),Di(56,"span"),me(),fe(57,"p",36),Te(58,"Keep the reader still while the sample is being read."),me()()(),fe(59,"div",37)(60,"header",31)(61,"h3"),Te(62,"Processing Your Test"),me()(),fe(63,"section",38)(64,"h4"),Te(65,"Analyzing Measurement"),me(),fe(66,"p"),Te(67,"Please wait while we analyze your sample."),me(),fe(68,"div",39),ld(),fe(69,"svg",40),Di(70,"path",41),me()()()(),cd(),fe(71,"div",42)(72,"header",31)(73,"h3"),Te(74,"Test Result"),me()(),fe(75,"section",43)(76,"div",44)(77,"h4"),Te(78,"Analysis Complete"),me(),fe(79,"p"),Te(80,"Test Result"),me(),fe(81,"span",45),Te(82,"Today"),me(),fe(83,"div",46)(84,"div"),Te(85,"Calculated Result"),me(),fe(86,"strong"),Te(87,"2953.39"),me()()(),fe(88,"div",47)(89,"div")(90,"span"),Te(91,"Procedure"),me(),fe(92,"strong"),Te(93,"General sample workflow"),me()(),fe(94,"div")(95,"span"),Te(96,"Reader"),me(),fe(97,"strong"),Te(98,"Connected"),me()(),fe(99,"div")(100,"span"),Te(101,"Sensor"),me(),fe(102,"strong"),Te(103,"Processed"),me()(),fe(104,"div",48),Di(105,"span")(106,"span")(107,"span")(108,"span"),me()()()(),fe(109,"div",49)(110,"header",31)(111,"h3"),Te(112,"Dashboard"),me()(),fe(113,"section",50)(114,"div",51)(115,"span"),Te(116,"Latest Result"),me(),fe(117,"strong"),Te(118,"2953.39"),me()(),fe(119,"div",52),Di(120,"span")(121,"span")(122,"span")(123,"span")(124,"span"),me(),fe(125,"div",53)(126,"div")(127,"span"),Te(128,"Previous"),me(),fe(129,"strong"),Te(130,"104.45"),me()(),fe(131,"div")(132,"span"),Te(133,"Baseline"),me(),fe(134,"strong"),Te(135,"1.00"),me()(),fe(136,"div")(137,"span"),Te(138,"Trend"),me(),fe(139,"strong"),Te(140,"Rising"),me()(),fe(141,"div")(142,"span"),Te(143,"Status"),me(),fe(144,"strong"),Te(145,"Saved"),me()()(),fe(146,"div",54)(147,"div")(148,"span"),Te(149,"Recent workflow"),me(),fe(150,"strong"),Te(151,"Sample prepared, sensor read, result stored."),me()(),fe(152,"div")(153,"span"),Te(154,"Reader status"),me(),fe(155,"strong"),Te(156,"Ready for next test"),me()(),fe(157,"div")(158,"span"),Te(159,"Review notes"),me(),fe(160,"strong"),Te(161,"Compare latest result with prior field runs."),me()()()()(),fe(162,"div",55)(163,"section",56)(164,"p"),Te(165,"TraxReader development kit"),me(),fe(166,"h3"),Te(167,"Bring focused sensing into your workflow."),me(),fe(168,"span"),Te(169," A compact reader for prototyping portable sample workflows, guided tests, and connected result capture. "),me(),fe(170,"a",57),Di(171,"span",58),fe(172,"span",59),Te(173,"Buy it now"),me()()()()()(),Di(174,"div",60)(175,"div",61),me(),fe(176,"div",62)(177,"span",63),ld(),fe(178,"svg",64),Di(179,"path",65),me()(),cd(),Di(180,"span")(181,"span"),me(),fe(182,"div",66)(183,"p",16),Te(184,"Focused sensors"),me(),fe(185,"h2",17),Te(186,"One reader. Focused sensors."),me(),fe(187,"p",18),Te(188,"Each sensor is designed for a specific marker, panel, or sample workflow."),me(),fe(189,"p",19),Te(190,"Swap the sensor to change what the reader is looking for."),me(),fe(191,"p",20),Te(192,"The scanner stays familiar while the sensor defines the test path."),me(),fe(193,"p",21),Te(194,"A sensor can carry the chemistry, sample zone, and contact layout for its intended signal."),me(),fe(195,"p",22),Te(196,"The reader measures electrochemical signals and connects them to the software."),me(),fe(197,"p",23),Te(198,"That separation keeps the system flexible while keeping the user experience consistent."),me()()(),fe(199,"div",67,4)(201,"h1",68)(202,"span"),Te(203,"See results for"),me(),fe(204,"span",69),fc(205,Gw,3,1,"span",70,dc),me(),fe(207,"span"),Te(208,"with trax\u2122."),me()(),fe(209,"p",71)(210,"span"),Te(211,"Faster Diagnostics."),me(),fe(212,"span"),Te(213,"Better Decisions."),me(),fe(214,"span"),Te(215,"Healthier Outcomes."),me()()(),fe(216,"div",72,5)(218,"p",73),Te(219,"Focused health sensing"),me(),fe(220,"h2"),Te(221,"Understand more from every sample."),me(),fe(222,"p"),Te(223,"Explore sensors for research and test development on the trax\u2122 platform."),me(),fe(224,"a",74),Di(225,"span",58),fe(226,"span",59),Te(227,"Explore sensors"),me()()(),fe(228,"div",75),Di(229,"span"),me()()),t&2&&(os(9),pc(n.sampleFluids),os(24),Xm("data-screen-theme",n.screenTheme.daylight().theme),os(20),pc(n.sampleFluids),os(152),pc(n.phrases))},dependencies:[sd],styles:['.reader-hero[_ngcontent-%COMP%]{position:relative;isolation:isolate;width:100%;height:100vh;height:100dvh;overflow:hidden;background:#07050d;color:#f7efe2;cursor:grab}.reader-hero[_ngcontent-%COMP%]:before{position:absolute;z-index:0;top:-4vh;left:41vw;width:28vw;height:86vh;content:"";background:conic-gradient(from 165deg at 50% 0%,transparent 0deg,rgba(210,94,159,.035) 12deg,rgba(115,217,168,.08) 22deg,rgba(240,212,107,.045) 33deg,transparent 46deg),radial-gradient(ellipse at 50% 66%,rgba(91,45,130,.14),rgba(210,94,159,.045) 28%,transparent 64%);filter:blur(8px);opacity:.54;mix-blend-mode:screen;-webkit-mask-image:linear-gradient(180deg,black 0%,black 70%,rgba(0,0,0,.34) 86%,transparent 100%);mask-image:linear-gradient(180deg,black 0%,black 70%,rgba(0,0,0,.34) 86%,transparent 100%);pointer-events:none}.reader-hero[_ngcontent-%COMP%]:after{position:absolute;z-index:0;top:48vh;left:29vw;width:62vw;height:34vh;content:"";background:radial-gradient(ellipse at 55% 42%,rgba(115,217,168,.09),rgba(240,212,107,.045) 28%,rgba(91,45,130,.05) 54%,transparent 76%);filter:blur(24px);opacity:.48;mix-blend-mode:screen;pointer-events:none}.reader-copy[_ngcontent-%COMP%]{--%NS%headline-size: clamp(2.55rem, min(5.7vw, 11dvh), 5.45rem);--%NS%eyebrow-size: clamp(.7rem, calc(var(--%NS%headline-size) * .14), 1.2rem);--%NS%body-size: clamp(.84rem, calc(var(--%NS%headline-size) * .21), 1.14rem);position:relative;z-index:3;box-sizing:border-box;display:flex;flex-direction:column;isolation:isolate;width:min(46rem,50vw - 1rem);min-width:28rem;height:100vh;height:100dvh;padding:clamp(3.5rem,11dvh,9.5rem) 0 clamp(1.25rem,3dvh,2.5rem) clamp(1rem,6vw,6rem);overflow:visible;pointer-events:none}.reader-copy[_ngcontent-%COMP%]:before{position:absolute;top:0;bottom:0;left:0;z-index:-1;width:100vw;content:"";background:linear-gradient(90deg,rgba(5,5,7,.74) 0%,rgba(5,5,7,.64) 28%,rgba(5,5,7,.34) 48%,transparent 70%);border-radius:0;box-shadow:none}.reader-copy[_ngcontent-%COMP%]:after{display:none;content:""}.eyebrow[_ngcontent-%COMP%]{margin:0 0 1rem;color:#f7efe2b8;font-size:var(--%NS%eyebrow-size, clamp(.7rem, 1vw, .9rem));letter-spacing:.18em;text-shadow:0 .12em .45em rgba(0,0,0,.42);text-transform:uppercase}.reader-headline[_ngcontent-%COMP%]{display:grid;flex:0 1 70%;align-content:start;row-gap:.08em;max-width:none;margin:0;font-size:var(--%NS%headline-size);font-weight:760;line-height:1.08;letter-spacing:0;text-shadow:0 .03em .12em rgba(0,0,0,.48),0 .12em .38em rgba(0,0,0,.26)}.reader-headline[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:block;white-space:nowrap}.phrase-stage[_ngcontent-%COMP%]{position:relative;display:block;width:100%;height:1.08em;overflow:visible}.phrase[_ngcontent-%COMP%]{position:absolute;inset:.04em auto auto 0;display:block;width:100%;max-width:100%;padding-bottom:.22em;color:#f7efe2;line-height:1.08;overflow-wrap:normal;word-break:normal;white-space:nowrap;will-change:clip-path,filter,transform,opacity}.reader-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{flex:0 0 30%;display:flex;align-items:flex-end;max-width:29rem;margin:auto 0 0;color:#f7efe2c7;font-size:calc(var(--%NS%body-size) * 2);line-height:1.55;transform:translateY(-100%);text-shadow:0 .12em .45em rgba(0,0,0,.46)}.reader-copy[_ngcontent-%COMP%]   p.diagnostic-phrases[_ngcontent-%COMP%]{flex:0 0 auto;display:block;align-items:initial;max-width:32rem;margin:1.25rem 0 0;font-size:calc(var(--%NS%body-size) * 2);line-height:1.45;transform:none}.diagnostic-phrases[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:block;white-space:nowrap}@media(min-width:2200px){.reader-copy[_ngcontent-%COMP%]{--%NS%headline-size: max(5.45rem, min(4.2vw, 8dvh));--%NS%eyebrow-size: calc(var(--%NS%headline-size) * .14);--%NS%body-size: calc(var(--%NS%headline-size) * .21);width:35vw;min-width:0;padding-top:clamp(9rem,9dvh,18rem);padding-right:0;padding-bottom:clamp(3rem,4dvh,8rem);padding-left:clamp(6rem,5vw,16rem)}.eyebrow[_ngcontent-%COMP%]{margin-bottom:clamp(1rem,1.2dvh,2.4rem)}.reader-headline[_ngcontent-%COMP%]{flex:0 1 62%;max-width:12.8ch}.phrase-stage[_ngcontent-%COMP%]{height:1.08em}.reader-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{flex:0 0 24%;max-width:58rem}}@media(max-width:1100px),(max-aspect-ratio:13/10){.reader-copy[_ngcontent-%COMP%]{--%NS%headline-size: var(--%NS%intro-headline);width:var(--%NS%intro-width);min-width:0;height:calc(100% - var(--%NS%layout-stack) * 68%);padding:max(env(safe-area-inset-top),var(--%NS%intro-top)) var(--%NS%intro-inset) 1rem}.reader-copy[_ngcontent-%COMP%]:before{inset:0;width:100vw;background:linear-gradient(calc(90deg + var(--%NS%layout-stack) * 90deg),rgba(5,5,7,.3),transparent 85%)}.reader-headline[_ngcontent-%COMP%]{flex:0 0 auto}.reader-copy[_ngcontent-%COMP%]   p.diagnostic-phrases[_ngcontent-%COMP%]{margin-top:clamp(.5rem,2dvh,1.25rem);font-size:var(--%NS%intro-body);line-height:1.3}}@media(max-height:500px)and (min-aspect-ratio:13/10){.reader-copy[_ngcontent-%COMP%]{padding-top:max(1rem,env(safe-area-inset-top))}.reader-copy[_ngcontent-%COMP%]   p.diagnostic-phrases[_ngcontent-%COMP%]{margin-top:.65rem;font-size:clamp(.95rem,4dvh,1.5rem)}}.reader-canvas[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:1;width:100%;height:100vh;height:100dvh;cursor:grab}.reader-hero.is-product-cta[_ngcontent-%COMP%]   .reader-canvas[_ngcontent-%COMP%]{z-index:4;pointer-events:none}.reader-hero.is-product-cta[_ngcontent-%COMP%]   .device-stage[_ngcontent-%COMP%]{z-index:5}.reader-hero.is-product-cta[_ngcontent-%COMP%]   .device-shell[_ngcontent-%COMP%]{position:fixed;inset:0;width:100%;height:100dvh;transform:none;border-color:transparent;border-radius:0;background:transparent;box-shadow:none}.reader-hero.is-product-cta[_ngcontent-%COMP%]   .device-shell[_ngcontent-%COMP%]:after{opacity:0}.reader-hero.is-product-cta[_ngcontent-%COMP%]   .device-screen[_ngcontent-%COMP%], .reader-hero.is-product-cta[_ngcontent-%COMP%]   .screen-panel-final[_ngcontent-%COMP%]{background:transparent}.reader-hero.is-product-cta[_ngcontent-%COMP%]   .screen-panel[_ngcontent-%COMP%]:not(.screen-panel-final){display:none!important;opacity:0!important;visibility:hidden!important;filter:none!important}.reader-hero.is-product-cta[_ngcontent-%COMP%]   .device-stand[_ngcontent-%COMP%], .reader-hero.is-product-cta[_ngcontent-%COMP%]   .device-keyboard[_ngcontent-%COMP%]{opacity:0}.reader-canvas[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{display:block;width:100%!important;height:100%!important}.device-stage[_ngcontent-%COMP%]{--%NS%device-w: min(62vw, 54rem);--%NS%device-h: min(58vh, 34rem);--%NS%device-r: 1rem;--%NS%screen-type-scale: 16px;--%NS%device-x: 0vw;--%NS%device-y: 0vh;--%NS%copy-edge: clamp(1.25rem, 3.8vw, 4.25rem);--%NS%copy-gap: clamp(1.5rem, 3vw, 4rem);--%NS%stand-o: 1;--%NS%keyboard-o: 0;--%NS%home-o: 0;--%NS%screen-r: var(--%NS%device-r);--%NS%screen-bg-opacity: 1;--%NS%device-shell-bg: rgba(38, 42, 52, .96);--%NS%device-frame-border: rgba(38, 42, 52, .96);--%NS%frame-edge-opacity: 1;--%NS%device-shadow-o: .42;--%NS%device-inner-shadow-o: .18;position:absolute;inset:0;z-index:3;opacity:0;pointer-events:auto}.device-shell[_ngcontent-%COMP%]{--%NS%frame-border-width: clamp(.34rem, .75vw, .68rem);position:absolute;z-index:2;left:50%;top:50%;container-type:size;width:var(--%NS%device-w);height:var(--%NS%device-h);transform:translate(calc(-50% + var(--%NS%device-x)),calc(-50% + var(--%NS%device-y)));border:clamp(.45rem,1vw,.9rem) solid var(--%NS%device-frame-border);border-radius:var(--%NS%device-r);background:var(--%NS%device-shell-bg);box-shadow:0 1.5rem 5rem rgba(0,0,0,var(--%NS%device-shadow-o)),inset 0 0 0 1px rgba(255,255,255,var(--%NS%device-inner-shadow-o));pointer-events:none}.device-shell[_ngcontent-%COMP%]:after{position:absolute;inset:calc(-1 * var(--%NS%frame-border-width));z-index:3;content:"";opacity:var(--%NS%frame-edge-opacity);border:1px solid rgba(210,220,235,.7);border-radius:var(--%NS%device-r);box-shadow:inset 0 1px #f8fbff9e,inset 0 -1px #080b12b8;pointer-events:none}.device-screen[_ngcontent-%COMP%]{--%NS%screen-clip-radius: max(.5rem, var(--%NS%screen-r));position:absolute;inset:0;border-radius:var(--%NS%screen-clip-radius);background:rgb(var(--%NS%app-bg-rgb)/var(--%NS%screen-bg-opacity));overflow:hidden;clip-path:inset(0 round var(--%NS%screen-clip-radius))}.screen-page[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:1;display:block;height:100%;opacity:0;filter:blur(10px);will-change:filter,opacity;pointer-events:none}.screen-panel[_ngcontent-%COMP%]{position:absolute;inset:0;box-sizing:border-box;width:100%;height:100%;min-height:0;overflow:hidden;font-size:var(--%NS%screen-type-scale);opacity:0;filter:blur(14px);will-change:filter,opacity}.marketplace-cta[_ngcontent-%COMP%]{display:grid;grid-template-rows:auto auto auto 1fr;justify-items:center;min-height:100%;padding:max(1.25rem,6svh) 1.45em max(1.25rem,7svh);text-align:center}.marketplace-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#725897;font-size:.68em;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.reader-hero.is-product-cta[_ngcontent-%COMP%]   .marketplace-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .reader-hero.is-product-cta[_ngcontent-%COMP%]   .marketplace-cta[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .reader-hero.is-product-cta[_ngcontent-%COMP%]   .marketplace-cta[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:#f7efe2;text-shadow:0 .12em .55em rgba(0,0,0,.62)}.reader-hero.is-product-cta[_ngcontent-%COMP%]   .marketplace-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#c8aeff;font-size:clamp(.68rem,.78vw,.92rem)}.reader-hero.is-product-cta[_ngcontent-%COMP%]   .marketplace-cta[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{max-width:16em;font-size:clamp(1.55rem,2.15vw,2.8rem)}.reader-hero.is-product-cta[_ngcontent-%COMP%]   .marketplace-cta[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{max-width:38em;font-size:clamp(.78rem,.9vw,1rem)}.reader-hero.is-product-cta[_ngcontent-%COMP%]   .marketplace-buy[_ngcontent-%COMP%]{min-width:clamp(12rem,15vw,17rem);min-height:clamp(3.1rem,4vw,4.35rem);font-size:clamp(1.05rem,1.35vw,1.55rem)}.marketplace-cta[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{max-width:12.5em;margin:.38em 0 0;color:#1b1720;font-size:1.72em;line-height:1.02}.marketplace-cta[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{max-width:28em;margin-top:.64em;color:#5b5360;font-size:.78em;line-height:1.38}.marketplace-buy[_ngcontent-%COMP%]{position:relative;z-index:2;display:inline-grid;place-items:center;min-width:8.9em;min-height:2.36em;margin-bottom:.26em;padding:.68em 1.42em;align-self:end;border-radius:999px;background:#725897;color:#fff;font-size:.82em;font-weight:900;text-decoration:none;box-shadow:0 .32rem 1.25rem #72589747,0 0 1.25rem #6fe7bd57;pointer-events:auto;animation:_ngcontent-%COMP%_marketplaceGlow 2.8s ease-in-out infinite}.marketplace-buy[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:-.3rem;z-index:-1;border-radius:inherit;background:linear-gradient(135deg,#6fe7bdbf,#8d5dffb8,#ff77caa6);filter:blur(.5rem);opacity:.44;animation:_ngcontent-%COMP%_marketplaceGlow 2.8s ease-in-out infinite reverse}@keyframes _ngcontent-%COMP%_marketplaceGlow{50%{box-shadow:0 .32rem 1.8rem .2rem #725897a6,.28rem -.16rem 1.8rem #6fe7bd99,-.32rem .18rem 1.7rem #ff77ca8c}}@container (min-width: 28rem){.screen-panel-laptop-research[_ngcontent-%COMP%]   .app-result[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,.92fr) minmax(0,1.08fr);align-items:stretch;gap:clamp(.52rem,1.75cqw,.78rem);text-align:left}.screen-panel-laptop-research[_ngcontent-%COMP%]   .app-result-main[_ngcontent-%COMP%]{align-items:stretch;justify-content:center;text-align:center}.screen-panel-laptop-research[_ngcontent-%COMP%]   .app-result-insights[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:clamp(.34rem,1.08cqw,.52rem);align-content:center}.screen-panel-desktop-research[_ngcontent-%COMP%]   .app-dashboard[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,.92fr) minmax(0,1.08fr);grid-template-rows:minmax(0,.82fr) minmax(0,.72fr) minmax(0,1.46fr);align-items:stretch;gap:.58em}.screen-panel-desktop-research[_ngcontent-%COMP%]   .app-dashboard-hero[_ngcontent-%COMP%]{min-height:0}.screen-panel-desktop-research[_ngcontent-%COMP%]   .app-dashboard-chart[_ngcontent-%COMP%]{grid-row:span 3;min-height:0}.screen-panel-desktop-research[_ngcontent-%COMP%]   .app-dashboard-grid[_ngcontent-%COMP%]{align-content:start;gap:.46em}.screen-panel-desktop-research[_ngcontent-%COMP%]   .app-dashboard-details[_ngcontent-%COMP%]{display:grid;grid-template-rows:repeat(3,minmax(0,1fr));gap:.46em;min-height:0}.screen-panel-desktop-research[_ngcontent-%COMP%]   .app-dashboard-details[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding:.6em .82em}.screen-panel-desktop-research[_ngcontent-%COMP%]   .app-dashboard-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.74em}.screen-panel-desktop-research[_ngcontent-%COMP%]   .app-dashboard-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:min(.9em,2.8cqw,2.4cqh);line-height:1.1}}.device-stand[_ngcontent-%COMP%], .device-keyboard[_ngcontent-%COMP%], .device-home[_ngcontent-%COMP%]{position:absolute;left:50%;transform:translate(-50%);background:#f1ece0e6}.device-stand[_ngcontent-%COMP%]{z-index:3;bottom:-18%;width:22%;height:18%;opacity:var(--%NS%stand-o);clip-path:polygon(34% 0,66% 0,82% 100%,18% 100%)}.device-keyboard[_ngcontent-%COMP%]{z-index:3;bottom:-16%;width:116%;height:14%;opacity:var(--%NS%keyboard-o);border-radius:0 0 1rem 1rem}.bluetooth-signal[_ngcontent-%COMP%]{position:absolute;top:67.25vh;left:50vw;z-index:2;display:grid;place-items:center;width:3.6rem;height:3.6rem;color:#fff;opacity:0;pointer-events:none;translate:-50% -50%}.bluetooth-core[_ngcontent-%COMP%]{position:relative;z-index:1;display:grid;place-items:center;width:1.75rem;height:1.75rem;border:1px solid rgba(216,238,255,.42);border-radius:999px;background:linear-gradient(180deg,#2289ff,#085bd5);box-shadow:0 0 1.4rem #2289ff52}.bluetooth-core[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:1.05rem;height:1.05rem;fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.9}.bluetooth-signal[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.bluetooth-core){position:absolute;inset:0;border:1px solid rgba(34,137,255,.54);border-radius:999px;opacity:0;transform:scale(.42);transform-origin:center}.device-copy[_ngcontent-%COMP%]{position:absolute;top:13vh;width:min(30rem,(100vw - var(--%NS%device-w)) / 2 - var(--%NS%copy-edge) - var(--%NS%copy-gap));color:#f7efe2db;filter:blur(14px);opacity:0;overflow-wrap:break-word}.device-copy-left[_ngcontent-%COMP%]{left:var(--%NS%copy-edge)}.device-copy-right[_ngcontent-%COMP%]{right:var(--%NS%copy-edge)}.device-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;color:#f7efe2;font-size:clamp(1.28rem,2.05vw,2.8rem);line-height:1.06;letter-spacing:0}.device-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(.eyebrow){margin:clamp(.55rem,1.05vh,.9rem) 0 0;font-size:clamp(.76rem,.82vw,.96rem);line-height:1.44}.sample-copy[_ngcontent-%COMP%]{position:absolute;left:50%;top:66vh;z-index:3;width:min(34rem,100vw - 2rem);color:#f7efe2;text-align:center;transform:translate(-50%,-50%);opacity:0;pointer-events:none}.sample-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:44rem;margin:0 auto;color:#f7efe2bd;font-size:clamp(.72rem,1vw,.95rem);line-height:1.42}.sample-fluid-stage[_ngcontent-%COMP%]{position:relative;height:clamp(2rem,3.6vw,3.2rem);margin:.05rem 0 .4rem}.sample-fluid[_ngcontent-%COMP%]{position:absolute;inset:0;display:grid;place-items:center;color:#f7efe2;font-size:clamp(1.3rem,2.8vw,2.5rem)}.sensor-cta[_ngcontent-%COMP%]{--%NS%cta-y: 0px;position:absolute;left:50%;top:50%;z-index:3;width:min(58rem,100vw - 2rem);color:#f7efe2;text-align:center;transform:translate(-50%,calc(-50% + var(--%NS%cta-y)));opacity:0;filter:blur(18px);pointer-events:none}.sensor-cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{max-width:12ch;margin:0 auto;font-size:clamp(3rem,7.8vw,7.5rem);line-height:.96;letter-spacing:0}.sensor-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(.eyebrow){max-width:38rem;margin:clamp(1rem,2.4vh,1.8rem) auto 0;color:#f7efe2c7;font-size:clamp(1rem,1.35vw,1.28rem);line-height:1.5}.sensor-cta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;min-height:3rem;margin-top:clamp(1rem,2.6vh,2rem);padding:0 1.35rem;color:#08090b;font-weight:760;background:#74e4b3;border-radius:999px;cursor:pointer;text-decoration:none}.progress[_ngcontent-%COMP%]{display:none;position:fixed;right:clamp(1rem,3vw,2rem);bottom:clamp(1rem,3vw,2rem);z-index:4;width:10rem;height:.25rem;overflow:hidden;background:#f7efe224;border-radius:999px}.progress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;width:calc(var(--%NS%scroll-progress, 0) * 100%);height:100%;background:#8f55ff}.reader-hero[_ngcontent-%COMP%]{--%NS%page-gutter: clamp(1rem, 4vw, 3rem)}.reader-canvas[_ngcontent-%COMP%]{height:100%}.reader-headline[_ngcontent-%COMP%]{min-height:min-content}.device-copy[_ngcontent-%COMP%]{width:max(0px,min(30rem,(100vw - var(--%NS%device-w)) / 2 - var(--%NS%copy-edge) - var(--%NS%copy-gap)))}.sample-copy[_ngcontent-%COMP%]{top:66%;width:min(34rem,100% - 2 * var(--%NS%page-gutter))}.bluetooth-signal[_ngcontent-%COMP%]{top:67.25%;left:50%;width:clamp(2rem,7vmin,3.6rem);height:auto;aspect-ratio:1}.sensor-cta[_ngcontent-%COMP%]{width:min(58rem,100% - 2 * var(--%NS%page-gutter));max-height:calc(100% - 2rem - env(safe-area-inset-top) - env(safe-area-inset-bottom));overflow-y:auto}.sensor-cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:clamp(2rem,min(7.8vw,13dvh),7.5rem);text-wrap:balance}.sensor-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(.eyebrow){margin-top:clamp(.65rem,2.4dvh,1.8rem);font-size:clamp(.9rem,min(1.35vw,3.5dvh),1.28rem);text-wrap:pretty}.sensor-cta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-top:clamp(.65rem,2.6dvh,2rem)}.sensor-cta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible, .marketplace-buy[_ngcontent-%COMP%]:focus-visible{outline:3px solid #fff;outline-offset:5px}.marketplace-cta[_ngcontent-%COMP%]{min-height:0;height:100%;padding:max(1rem,6dvh,env(safe-area-inset-top)) var(--%NS%page-gutter) max(1rem,7dvh,env(safe-area-inset-bottom))}.reader-hero.is-product-cta[_ngcontent-%COMP%]   .marketplace-cta[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:clamp(1.35rem,min(2.15vw,5.5dvh),2.8rem);text-wrap:balance}.reader-hero.is-product-cta[_ngcontent-%COMP%]   .marketplace-cta[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{text-wrap:pretty}.reader-hero.is-product-cta[_ngcontent-%COMP%]   .marketplace-buy[_ngcontent-%COMP%]{margin-top:1rem}@container (max-height: 30rem){.app-header[_ngcontent-%COMP%]{padding:min(.84em,2.4cqh) 1.12em}.app-instruction[_ngcontent-%COMP%], .app-processing[_ngcontent-%COMP%], .app-result[_ngcontent-%COMP%], .screen-panel-phone-dashboard[_ngcontent-%COMP%]   .app-instruction[_ngcontent-%COMP%]{padding:min(1.18em,2cqh) 1em}.app-fluid-stage[_ngcontent-%COMP%], .screen-panel-phone-dashboard[_ngcontent-%COMP%]   .app-fluid-stage[_ngcontent-%COMP%]{flex-shrink:0;height:min(4.25em,10cqh);margin:.4em 0}.screen-panel-phone-dashboard[_ngcontent-%COMP%]   .app-sensor-figure[_ngcontent-%COMP%]{flex-shrink:0;width:min(3.45em,9cqh);margin:min(.56em,1cqh) auto}.app-progress-orb[_ngcontent-%COMP%]{flex-shrink:0;width:min(6.6em,25cqh);margin:min(2em,4cqh) 0 .5em}.app-result-card[_ngcontent-%COMP%]{margin-top:min(1.7em,3cqh)}}@media(max-width:600px)and (min-aspect-ratio:13/10){.reader-copy[_ngcontent-%COMP%]{--%NS%intro-headline: clamp(1.1rem, 4.8vw, 2rem);--%NS%intro-body: clamp(.85rem, 3vw, 1.2rem)}}@media(max-height:500px)and (min-aspect-ratio:13/10){.reader-copy[_ngcontent-%COMP%]{padding-top:max(1rem,env(safe-area-inset-top))}.reader-copy[_ngcontent-%COMP%]   p.diagnostic-phrases[_ngcontent-%COMP%]{margin-top:.65rem;font-size:clamp(.95rem,4dvh,1.5rem)}.marketplace-cta[_ngcontent-%COMP%]{padding-top:1rem;padding-bottom:max(1rem,env(safe-area-inset-bottom))}.reader-hero.is-product-cta[_ngcontent-%COMP%]   .marketplace-cta[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{max-width:42em}.reader-hero.is-product-cta[_ngcontent-%COMP%]   .marketplace-buy[_ngcontent-%COMP%]{min-height:2.75rem;padding-block:.5em}.sensor-cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{max-width:22ch}}.phrase[_ngcontent-%COMP%]{opacity:0;visibility:hidden}.phrase[_ngcontent-%COMP%]:first-child{opacity:1;visibility:visible}.reader-canvas[_ngcontent-%COMP%]{opacity:0;transition:opacity .35s ease-out}.reader-canvas.is-ready[_ngcontent-%COMP%]{opacity:1}@media(prefers-reduced-motion:reduce){.reader-canvas[_ngcontent-%COMP%]{transition:none}}']})};export{xv as ReaderHeroComponent};
