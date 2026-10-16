(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Wo="182",lu=0,Tl=1,cu=2,Sr=1,sh=2,ys=3,ti=0,Fe=1,qe=2,kn=0,vi=1,Te=2,wl=3,Al=4,hu=5,pi=100,uu=101,fu=102,du=103,pu=104,mu=200,gu=201,_u=202,xu=203,Ba=204,ka=205,vu=206,Mu=207,Su=208,yu=209,bu=210,Eu=211,Tu=212,wu=213,Au=214,za=0,Va=1,Ga=2,Ki=3,Ha=4,Wa=5,Xa=6,qa=7,Xo=0,Ru=1,Cu=2,bn=0,rh=1,ah=2,oh=3,qo=4,lh=5,ch=6,hh=7,uh=300,Mi=301,ji=302,Ya=303,Ja=304,Or=306,Rr=1e3,On=1001,Za=1002,Le=1003,Pu=1004,Gs=1005,Ne=1006,qr=1007,_i=1008,Qe=1009,fh=1010,dh=1011,Ps=1012,Yo=1013,Tn=1014,pn=1015,Gn=1016,Jo=1017,Zo=1018,Ls=1020,ph=35902,mh=35899,gh=1021,_h=1022,mn=1023,Hn=1026,xi=1027,Ko=1028,jo=1029,$i=1030,$o=1031,Qo=1033,yr=33776,br=33777,Er=33778,Tr=33779,Ka=35840,ja=35841,$a=35842,Qa=35843,to=36196,eo=37492,no=37496,io=37488,so=37489,ro=37490,ao=37491,oo=37808,lo=37809,co=37810,ho=37811,uo=37812,fo=37813,po=37814,mo=37815,go=37816,_o=37817,xo=37818,vo=37819,Mo=37820,So=37821,yo=36492,bo=36494,Eo=36495,To=36283,wo=36284,Ao=36285,Ro=36286,Lu=3200,tl=0,Iu=1,$n="",Xe="srgb",Qi="srgb-linear",Cr="linear",ne="srgb",Ti=7680,Rl=519,Du=512,Uu=513,Nu=514,el=515,Fu=516,Ou=517,nl=518,Bu=519,Co=35044,os=35048,Cl="300 es",Sn=2e3,Pr=2001;function xh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ku(){const i=Lr("canvas");return i.style.display="block",i}const Pl={};function Ir(...i){const t="THREE."+i.shift();console.log(t,...i)}function kt(...i){const t="THREE."+i.shift();console.warn(t,...i)}function Kt(...i){const t="THREE."+i.shift();console.error(t,...i)}function Is(...i){const t=i.join(" ");t in Pl||(Pl[t]=!0,kt(...i))}function zu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}class ns{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yr=Math.PI/180,Po=180/Math.PI;function zn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Jt(i,t,e){return Math.max(t,Math.min(e,i))}function Vu(i,t){return(i%t+t)%t}function Jr(i,t,e){return(1-e)*i+e*t}function Mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class tt{constructor(t=0,e=0){tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o>=1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==f||c!==d||h!==g){let m=l*f+c*d+h*g+u*v;m<0&&(f=-f,d=-d,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){const y=Math.acos(m),E=Math.sin(y);p=Math.sin(p*y)/E,o=Math.sin(o*y)/E,l=l*p+f*o,c=c*p+d*o,h=h*p+g*o,u=u*p+v*o}else{l=l*p+f*o,c=c*p+d*o,h=h*p+g*o,u=u*p+v*o;const y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-o*d,t[e+2]=c*g+h*d+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ll.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ll.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zr.copy(this).projectOnVector(t),this.sub(Zr)}reflect(t){return this.sub(Zr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zr=new I,Ll=new yi;class Wt{constructor(t,e,n,s,r,a,o,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],v=s[0],m=s[3],p=s[6],y=s[1],E=s[4],S=s[7],A=s[2],R=s[5],P=s[8];return r[0]=a*v+o*y+l*A,r[3]=a*m+o*E+l*R,r[6]=a*p+o*S+l*P,r[1]=c*v+h*y+u*A,r[4]=c*m+h*E+u*R,r[7]=c*p+h*S+u*P,r[2]=f*v+d*y+g*A,r[5]=f*m+d*E+g*R,r[8]=f*p+d*S+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Kr.makeScale(t,e)),this}rotate(t){return this.premultiply(Kr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Kr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Kr=new Wt,Il=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dl=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gu(){const i={enabled:!0,workingColorSpace:Qi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ne&&(s.r=Vn(s.r),s.g=Vn(s.g),s.b=Vn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ne&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$n?Cr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qi]:{primaries:t,whitePoint:n,transfer:Cr,toXYZ:Il,fromXYZ:Dl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:Il,fromXYZ:Dl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),i}const jt=Gu();function Vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ji(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let wi;class Hu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{wi===void 0&&(wi=Lr("canvas")),wi.width=t.width,wi.height=t.height;const s=wi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=wi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Lr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Vn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vn(e[n]/255)*255):e[n]=Vn(e[n]);return{data:e,width:t.width,height:t.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Wu=0;class il{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=zn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(jr(s[a].image)):r.push(jr(s[a]))}else r=jr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function jr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}let Xu=0;const $r=new I;class Oe extends ns{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=On,s=On,r=Ne,a=_i,o=mn,l=Qe,c=Oe.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=zn(),this.name="",this.source=new il(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($r).x}get height(){return this.source.getSize($r).y}get depth(){return this.source.getSize($r).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rr:t.x=t.x-Math.floor(t.x);break;case On:t.x=t.x<0?0:1;break;case Za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rr:t.y=t.y-Math.floor(t.y);break;case On:t.y=t.y<0?0:1;break;case Za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=uh;Oe.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,n=0,s=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,S=(d+1)/2,A=(p+1)/2,R=(h+f)/4,P=(u+v)/4,L=(g+m)/4;return E>S&&E>A?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=R/n,r=P/n):S>A?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=R/s,r=L/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=P/r,s=L/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-v)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qu extends ns{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ne,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Oe(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ne,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new il(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class En extends qu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class vh extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yu extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bi{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,un):un.fromBufferAttribute(r,a),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hs.copy(n.boundingBox)),Hs.applyMatrix4(t.matrixWorld),this.union(Hs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ls),Ws.subVectors(this.max,ls),Ai.subVectors(t.a,ls),Ri.subVectors(t.b,ls),Ci.subVectors(t.c,ls),Wn.subVectors(Ri,Ai),Xn.subVectors(Ci,Ri),ri.subVectors(Ai,Ci);let e=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-ri.z,ri.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,ri.z,0,-ri.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-ri.y,ri.x,0];return!Qr(e,Ai,Ri,Ci,Ws)||(e=[1,0,0,0,1,0,0,0,1],!Qr(e,Ai,Ri,Ci,Ws))?!1:(Xs.crossVectors(Wn,Xn),e=[Xs.x,Xs.y,Xs.z],Qr(e,Ai,Ri,Ci,Ws))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Rn=[new I,new I,new I,new I,new I,new I,new I,new I],un=new I,Hs=new bi,Ai=new I,Ri=new I,Ci=new I,Wn=new I,Xn=new I,ri=new I,ls=new I,Ws=new I,Xs=new I,ai=new I;function Qr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ai.fromArray(i,r);const o=s.x*Math.abs(ai.x)+s.y*Math.abs(ai.y)+s.z*Math.abs(ai.z),l=t.dot(ai),c=e.dot(ai),h=n.dot(ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ju=new bi,cs=new I,ta=new I;class is{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ju.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cs.subVectors(t,this.center);const e=cs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(cs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ta.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cs.copy(t.center).add(ta)),this.expandByPoint(cs.copy(t.center).sub(ta))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Cn=new I,ea=new I,qs=new I,qn=new I,na=new I,Ys=new I,ia=new I;class Mh{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Cn.copy(this.origin).addScaledVector(this.direction,e),Cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ea.copy(t).add(e).multiplyScalar(.5),qs.copy(e).sub(t).normalize(),qn.copy(this.origin).sub(ea);const r=t.distanceTo(e)*.5,a=-this.direction.dot(qs),o=qn.dot(this.direction),l=-qn.dot(qs),c=qn.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ea).addScaledVector(qs,f),d}intersectSphere(t,e){Cn.subVectors(t.center,this.origin);const n=Cn.dot(this.direction),s=Cn.dot(Cn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Cn)!==null}intersectTriangle(t,e,n,s,r){na.subVectors(e,t),Ys.subVectors(n,t),ia.crossVectors(na,Ys);let a=this.direction.dot(ia),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,t);const l=o*this.direction.dot(Ys.crossVectors(qn,Ys));if(l<0)return null;const c=o*this.direction.dot(na.cross(qn));if(c<0||l+c>a)return null;const h=-o*qn.dot(ia);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(t,e,n,s,r,a,o,l,c,h,u,f,d,g,v,m){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,d,g,v,m)}set(t,e,n,s,r,a,o,l,c,h,u,f,d,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Pi.setFromMatrixColumn(t,0).length(),r=1/Pi.setFromMatrixColumn(t,1).length(),a=1/Pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,d=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,v=c*u;e[0]=f+v*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,v=c*u;e[0]=f-v*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,d=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-v*u}else if(t.order==="XZY"){const f=a*l,d=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zu,t,Ku)}lookAt(t,e,n){const s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Yn.crossVectors(n,Ke),Yn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Yn.crossVectors(n,Ke)),Yn.normalize(),Js.crossVectors(Ke,Yn),s[0]=Yn.x,s[4]=Js.x,s[8]=Ke.x,s[1]=Yn.y,s[5]=Js.y,s[9]=Ke.y,s[2]=Yn.z,s[6]=Js.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],y=n[3],E=n[7],S=n[11],A=n[15],R=s[0],P=s[4],L=s[8],_=s[12],M=s[1],w=s[5],N=s[9],F=s[13],z=s[2],G=s[6],W=s[10],k=s[14],$=s[3],pt=s[7],ot=s[11],ht=s[15];return r[0]=a*R+o*M+l*z+c*$,r[4]=a*P+o*w+l*G+c*pt,r[8]=a*L+o*N+l*W+c*ot,r[12]=a*_+o*F+l*k+c*ht,r[1]=h*R+u*M+f*z+d*$,r[5]=h*P+u*w+f*G+d*pt,r[9]=h*L+u*N+f*W+d*ot,r[13]=h*_+u*F+f*k+d*ht,r[2]=g*R+v*M+m*z+p*$,r[6]=g*P+v*w+m*G+p*pt,r[10]=g*L+v*N+m*W+p*ot,r[14]=g*_+v*F+m*k+p*ht,r[3]=y*R+E*M+S*z+A*$,r[7]=y*P+E*w+S*G+A*pt,r[11]=y*L+E*N+S*W+A*ot,r[15]=y*_+E*F+S*k+A*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15],y=l*d-c*f,E=o*d-c*u,S=o*f-l*u,A=a*d-c*h,R=a*f-l*h,P=a*u-o*h;return e*(v*y-m*E+p*S)-n*(g*y-m*A+p*R)+s*(g*E-v*A+p*P)-r*(g*S-v*R+m*P)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],y=u*m*c-v*f*c+v*l*d-o*m*d-u*l*p+o*f*p,E=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,S=h*v*c-g*u*c+g*o*d-a*v*d-h*o*p+a*u*p,A=g*u*l-h*v*l-g*o*f+a*v*f+h*o*m-a*u*m,R=e*y+n*E+s*S+r*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return t[0]=y*P,t[1]=(v*f*r-u*m*r-v*s*d+n*m*d+u*s*p-n*f*p)*P,t[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*p+n*l*p)*P,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*d-n*l*d)*P,t[4]=E*P,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*P,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*P,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*d+e*l*d)*P,t[8]=S*P,t[9]=(g*u*r-h*v*r-g*n*d+e*v*d+h*n*p-e*u*p)*P,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*p+e*o*p)*P,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*d-e*o*d)*P,t[12]=A*P,t[13]=(h*v*s-g*u*s+g*n*f-e*v*f-h*n*m+e*u*m)*P,t[14]=(g*o*s-a*v*s-g*n*l+e*v*l+a*n*m-e*o*m)*P,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*P,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,v=a*h,m=a*u,p=o*u,y=l*c,E=l*h,S=l*u,A=n.x,R=n.y,P=n.z;return s[0]=(1-(v+p))*A,s[1]=(d+S)*A,s[2]=(g-E)*A,s[3]=0,s[4]=(d-S)*R,s[5]=(1-(f+p))*R,s[6]=(m+y)*R,s[7]=0,s[8]=(g+E)*P,s[9]=(m-y)*P,s[10]=(1-(f+v))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;if(t.x=s[12],t.y=s[13],t.z=s[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let r=Pi.set(s[0],s[1],s[2]).length();const a=Pi.set(s[4],s[5],s[6]).length(),o=Pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),fn.copy(this);const c=1/r,h=1/a,u=1/o;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,e.setFromRotationMatrix(fn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Sn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===Sn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Pr)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Sn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s);let g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===Sn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Pr)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Pi=new I,fn=new Qt,Zu=new I(0,0,0),Ku=new I(1,1,1),Yn=new I,Js=new I,Ke=new I,Ul=new Qt,Nl=new yi;class on{constructor(t=0,e=0,n=0,s=on.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ul.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ul,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class Sh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ju=0;const Fl=new I,Li=new yi,Pn=new Qt,Zs=new I,hs=new I,$u=new I,Qu=new yi,Ol=new I(1,0,0),Bl=new I(0,1,0),kl=new I(0,0,1),zl={type:"added"},tf={type:"removed"},Ii={type:"childadded",child:null},sa={type:"childremoved",child:null};class Ae extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new I,e=new on,n=new yi,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Wt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.multiply(Li),this}rotateOnWorldAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.premultiply(Li),this}rotateX(t){return this.rotateOnAxis(Ol,t)}rotateY(t){return this.rotateOnAxis(Bl,t)}rotateZ(t){return this.rotateOnAxis(kl,t)}translateOnAxis(t,e){return Fl.copy(t).applyQuaternion(this.quaternion),this.position.add(Fl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ol,t)}translateY(t){return this.translateOnAxis(Bl,t)}translateZ(t){return this.translateOnAxis(kl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zs.copy(t):Zs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(hs,Zs,this.up):Pn.lookAt(Zs,hs,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Li.setFromRotationMatrix(Pn),this.quaternion.premultiply(Li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zl),Ii.child=t,this.dispatchEvent(Ii),Ii.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tf),sa.child=t,this.dispatchEvent(sa),sa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zl),Ii.child=t,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,t,$u),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,Qu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ae.DEFAULT_UP=new I(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new I,Ln=new I,ra=new I,In=new I,Di=new I,Ui=new I,Vl=new I,aa=new I,oa=new I,la=new I,ca=new ye,ha=new ye,ua=new ye;class an{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),dn.subVectors(t,e),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){dn.subVectors(s,e),Ln.subVectors(n,e),ra.subVectors(t,e);const a=dn.dot(dn),o=dn.dot(Ln),l=dn.dot(ra),c=Ln.dot(Ln),h=Ln.dot(ra),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,In.x),l.addScaledVector(a,In.y),l.addScaledVector(o,In.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ca.setScalar(0),ha.setScalar(0),ua.setScalar(0),ca.fromBufferAttribute(t,e),ha.fromBufferAttribute(t,n),ua.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ca,r.x),a.addScaledVector(ha,r.y),a.addScaledVector(ua,r.z),a}static isFrontFacing(t,e,n,s){return dn.subVectors(n,e),Ln.subVectors(t,e),dn.cross(Ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),dn.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return an.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Di.subVectors(s,n),Ui.subVectors(r,n),aa.subVectors(t,n);const l=Di.dot(aa),c=Ui.dot(aa);if(l<=0&&c<=0)return e.copy(n);oa.subVectors(t,s);const h=Di.dot(oa),u=Ui.dot(oa);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Di,a);la.subVectors(t,r);const d=Di.dot(la),g=Ui.dot(la);if(g>=0&&d<=g)return e.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ui,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Vl.subVectors(r,s),o=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Vl,o);const p=1/(m+v+f);return a=v*p,o=f*p,e.copy(n).addScaledVector(Di,a).addScaledVector(Ui,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function fa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=Vu(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=fa(a,r,t+1/3),this.g=fa(a,r,t),this.b=fa(a,r,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,e=Xe){function n(r){r!==void 0&&parseFloat(r)<1&&kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){const n=yh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return jt.workingToColorSpace(De.copy(this),t),Math.round(Jt(De.r*255,0,255))*65536+Math.round(Jt(De.g*255,0,255))*256+Math.round(Jt(De.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(De.copy(this),e);const n=De.r,s=De.g,r=De.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Xe){jt.workingToColorSpace(De.copy(this),t);const e=De.r,n=De.g,s=De.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(Ks);const n=Jr(Jn.h,Ks.h,e),s=Jr(Jn.s,Ks.s,e),r=Jr(Jn.l,Ks.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new zt;zt.NAMES=yh;let ef=0;class ni extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=vi,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ba,this.blendDst=ka,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){kt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ba&&(n.blendSrc=this.blendSrc),this.blendDst!==ka&&(n.blendDst=this.blendDst),this.blendEquation!==pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Se extends ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new I,js=new tt;let nf=0;class fe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Co,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)js.fromBufferAttribute(this,e),js.applyMatrix3(t),this.setXY(e,js.x,js.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Co&&(t.usage=this.usage),t}}class bh extends fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Eh extends fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends fe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let sf=0;const sn=new Qt,da=new Ae,Ni=new I,je=new bi,us=new bi,Pe=new I;class _e extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xh(t)?Eh:bh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return da.lookAt(t),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ie(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];us.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(je.min,us.min),je.expandByPoint(Pe),Pe.addVectors(je.max,us.max),je.expandByPoint(Pe)):(je.expandByPoint(us.min),je.expandByPoint(us.max))}je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Pe.fromBufferAttribute(o,c),l&&(Ni.fromBufferAttribute(t,c),Pe.add(Ni)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new I,l[L]=new I;const c=new I,h=new I,u=new I,f=new tt,d=new tt,g=new tt,v=new I,m=new I;function p(L,_,M){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,_),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,L),d.fromBufferAttribute(r,_),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const w=1/(d.x*g.y-g.x*d.y);isFinite(w)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(w),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(w),o[L].add(v),o[_].add(v),o[M].add(v),l[L].add(m),l[_].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let L=0,_=y.length;L<_;++L){const M=y[L],w=M.start,N=M.count;for(let F=w,z=w+N;F<z;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const E=new I,S=new I,A=new I,R=new I;function P(L){A.fromBufferAttribute(s,L),R.copy(A);const _=o[L];E.copy(_),E.sub(A.multiplyScalar(A.dot(_))).normalize(),S.crossVectors(R,_);const w=S.dot(l[L])<0?-1:1;a.setXYZW(L,E.x,E.y,E.z,w)}for(let L=0,_=y.length;L<_;++L){const M=y[L],w=M.start,N=M.count;for(let F=w,z=w+N;F<z;F+=3)P(t.getX(F+0)),P(t.getX(F+1)),P(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new fe(f,h,u)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _e,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gl=new Qt,oi=new Mh,$s=new is,Hl=new I,Qs=new I,tr=new I,er=new I,pa=new I,nr=new I,Wl=new I,ir=new I;class Ft extends Ae{constructor(t=new _e,e=new Se){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){nr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(pa.fromBufferAttribute(u,t),a?nr.addScaledVector(pa,h):nr.addScaledVector(pa.sub(e),h))}e.add(nr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(r),oi.copy(t.ray).recast(t.near),!($s.containsPoint(oi.origin)===!1&&(oi.intersectSphere($s,Hl)===null||oi.origin.distanceToSquared(Hl)>(t.far-t.near)**2))&&(Gl.copy(r).invert(),oi.copy(t.ray).applyMatrix4(Gl),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,oi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,A=E;S<A;S+=3){const R=o.getX(S),P=o.getX(S+1),L=o.getX(S+2);s=sr(this,p,t,n,c,h,u,R,P,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const y=o.getX(m),E=o.getX(m+1),S=o.getX(m+2);s=sr(this,a,t,n,c,h,u,y,E,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,A=E;S<A;S+=3){const R=S,P=S+1,L=S+2;s=sr(this,p,t,n,c,h,u,R,P,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const y=m,E=m+1,S=m+2;s=sr(this,a,t,n,c,h,u,y,E,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function rf(i,t,e,n,s,r,a,o){let l;if(t.side===Fe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ti,o),l===null)return null;ir.copy(o),ir.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ir);return c<e.near||c>e.far?null:{distance:c,point:ir.clone(),object:i}}function sr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Qs),i.getVertexPosition(l,tr),i.getVertexPosition(c,er);const h=rf(i,t,e,n,Qs,tr,er,Wl);if(h){const u=new I;an.getBarycoord(Wl,Qs,tr,er,u),s&&(h.uv=an.getInterpolatedAttribute(s,o,l,c,u,new tt)),r&&(h.uv1=an.getInterpolatedAttribute(r,o,l,c,u,new tt)),a&&(h.normal=an.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new I,materialIndex:0};an.getNormal(Qs,tr,er,f.normal),h.face=f,h.barycoord=u}return h}class we extends _e{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function g(v,m,p,y,E,S,A,R,P,L,_){const M=S/P,w=A/L,N=S/2,F=A/2,z=R/2,G=P+1,W=L+1;let k=0,$=0;const pt=new I;for(let ot=0;ot<W;ot++){const ht=ot*w-F;for(let Gt=0;Gt<G;Gt++){const Bt=Gt*M-N;pt[v]=Bt*y,pt[m]=ht*E,pt[p]=z,c.push(pt.x,pt.y,pt.z),pt[v]=0,pt[m]=0,pt[p]=R>0?1:-1,h.push(pt.x,pt.y,pt.z),u.push(Gt/P),u.push(1-ot/L),k+=1}}for(let ot=0;ot<L;ot++)for(let ht=0;ht<P;ht++){const Gt=f+ht+G*ot,Bt=f+ht+G*(ot+1),se=f+(ht+1)+G*(ot+1),re=f+(ht+1)+G*ot;l.push(Gt,Bt,re),l.push(Bt,se,re),$+=6}o.addGroup(d,$,_),d+=$,f+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ts(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ze(i){const t={};for(let e=0;e<i.length;e++){const n=ts(i[e]);for(const s in n)t[s]=n[s]}return t}function af(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Th(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const wh={clone:ts,merge:ze};var of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=of,this.fragmentShader=lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=af(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ah extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new I,Xl=new tt,ql=new tt;class $e extends Ah{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Po*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Po*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,Xl,ql),e.subVectors(ql,Xl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Yr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Fi=-90,Oi=1;class cf extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $e(Fi,Oi,t,e);s.layers=this.layers,this.add(s);const r=new $e(Fi,Oi,t,e);r.layers=this.layers,this.add(r);const a=new $e(Fi,Oi,t,e);a.layers=this.layers,this.add(a);const o=new $e(Fi,Oi,t,e);o.layers=this.layers,this.add(o);const l=new $e(Fi,Oi,t,e);l.layers=this.layers,this.add(l);const c=new $e(Fi,Oi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Rh extends Oe{constructor(t=[],e=Mi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ch extends En{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Rh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new we(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:kn});r.uniforms.tEquirect.value=e;const a=new Ft(s,r),o=e.minFilter;return e.minFilter===_i&&(e.minFilter=Ne),new cf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class Ye extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hf={type:"move"};class ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ye;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class sl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new zt(t),this.density=e}clone(){return new sl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ph extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class uf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Co,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ke=new I;class Dr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ir("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Dr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ir("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Zi extends ni{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Bi;const fs=new I,ki=new I,zi=new I,Vi=new tt,ds=new tt,Lh=new Qt,rr=new I,ps=new I,ar=new I,Yl=new tt,ga=new tt,Jl=new tt;class Bs extends Ae{constructor(t=new Zi){if(super(),this.isSprite=!0,this.type="Sprite",Bi===void 0){Bi=new _e;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new uf(e,5);Bi.setIndex([0,1,2,0,2,3]),Bi.setAttribute("position",new Dr(n,3,0,!1)),Bi.setAttribute("uv",new Dr(n,2,3,!1))}this.geometry=Bi,this.material=t,this.center=new tt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ki.setFromMatrixScale(this.matrixWorld),Lh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),zi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ki.multiplyScalar(-zi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;or(rr.set(-.5,-.5,0),zi,a,ki,s,r),or(ps.set(.5,-.5,0),zi,a,ki,s,r),or(ar.set(.5,.5,0),zi,a,ki,s,r),Yl.set(0,0),ga.set(1,0),Jl.set(1,1);let o=t.ray.intersectTriangle(rr,ps,ar,!1,fs);if(o===null&&(or(ps.set(-.5,.5,0),zi,a,ki,s,r),ga.set(0,1),o=t.ray.intersectTriangle(rr,ar,ps,!1,fs),o===null))return;const l=t.ray.origin.distanceTo(fs);l<t.near||l>t.far||e.push({distance:l,point:fs.clone(),uv:an.getInterpolation(fs,rr,ps,ar,Yl,ga,Jl,new tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function or(i,t,e,n,s,r){Vi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ds.x=r*Vi.x-s*Vi.y,ds.y=s*Vi.x+r*Vi.y):ds.copy(Vi),i.copy(t),i.x+=ds.x,i.y+=ds.y,i.applyMatrix4(Lh)}class Ih extends Oe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Le,h=Le,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zl extends fe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Gi=new Qt,Kl=new Qt,lr=[],jl=new bi,ff=new Qt,ms=new Ft,gs=new is;class df extends Ft{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Zl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ff)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gi),jl.copy(t.boundingBox).applyMatrix4(Gi),this.boundingBox.union(jl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new is),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gi),gs.copy(t.boundingSphere).applyMatrix4(Gi),this.boundingSphere.union(gs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ms.geometry=this.geometry,ms.material=this.material,ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gs.copy(this.boundingSphere),gs.applyMatrix4(n),t.ray.intersectsSphere(gs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gi),Kl.multiplyMatrices(n,Gi),ms.matrixWorld=Kl,ms.raycast(t,lr);for(let a=0,o=lr.length;a<o;a++){const l=lr[a];l.instanceId=r,l.object=this,e.push(l)}lr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Zl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ih(new Float32Array(s*this.count),s,this.count,Ko,pn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _a=new I,pf=new I,mf=new Wt;class di{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=_a.subVectors(n,e).cross(pf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(_a),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||mf.getNormalMatrix(t),s=this.coplanarPoint(_a).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new is,gf=new tt(.5,.5),cr=new I;class rl{constructor(t=new di,e=new di,n=new di,s=new di,r=new di,a=new di){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],v=r[9],m=r[10],p=r[11],y=r[12],E=r[13],S=r[14],A=r[15];if(s[0].setComponents(c-a,d-h,p-g,A-y).normalize(),s[1].setComponents(c+a,d+h,p+g,A+y).normalize(),s[2].setComponents(c+o,d+u,p+v,A+E).normalize(),s[3].setComponents(c-o,d-u,p-v,A-E).normalize(),n)s[4].setComponents(l,f,m,S).normalize(),s[5].setComponents(c-l,d-f,p-m,A-S).normalize();else if(s[4].setComponents(c-l,d-f,p-m,A-S).normalize(),e===Sn)s[5].setComponents(c+l,d+f,p+m,A+S).normalize();else if(e===Pr)s[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){li.center.set(0,0,0);const e=gf.distanceTo(t.center);return li.radius=.7071067811865476+e,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(cr.x=s.normal.x>0?t.max.x:t.min.x,cr.y=s.normal.y>0?t.max.y:t.min.y,cr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(cr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dh extends ni{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const $l=new Qt,Lo=new Mh,hr=new is,ur=new I;class Uh extends Ae{constructor(t=new _e,e=new Dh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(s),hr.radius+=r,t.ray.intersectsSphere(hr)===!1)return;$l.copy(s).invert(),Lo.copy(t.ray).applyMatrix4($l);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,v=d;g<v;g++){const m=c.getX(g);ur.fromBufferAttribute(u,m),Ql(ur,m,l,s,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,v=d;g<v;g++)ur.fromBufferAttribute(u,g),Ql(ur,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ql(i,t,e,n,s,r,a){const o=Lo.distanceSqToPoint(i);if(o<e){const l=new I;Lo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class _f extends Oe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ds extends Oe{constructor(t,e,n=Tn,s,r,a,o=Le,l=Le,c,h=Hn,u=1){if(h!==Hn&&h!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new il(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class xf extends Ds{constructor(t,e=Tn,n=Mi,s,r,a=Le,o=Le,l,c=Hn){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Nh extends Oe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class al extends _e{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,g=n*2+r,v=s+1,m=new I,p=new I;for(let y=0;y<=g;y++){let E=0,S=0,A=0,R=0;if(y<=n){const _=y/n,M=_*Math.PI/2;S=-h-t*Math.cos(M),A=t*Math.sin(M),R=-t*Math.cos(M),E=_*u}else if(y<=n+r){const _=(y-n)/r;S=-h+_*e,A=t,R=0,E=u+_*f}else{const _=(y-n-r)/n,M=_*Math.PI/2;S=h+t*Math.sin(M),A=t*Math.cos(M),R=t*Math.sin(M),E=u+f+_*u}const P=Math.max(0,Math.min(1,E/d));let L=0;y===0?L=.5/s:y===g&&(L=-.5/s);for(let _=0;_<=s;_++){const M=_/s,w=M*Math.PI*2,N=Math.sin(w),F=Math.cos(w);p.x=-A*F,p.y=S,p.z=A*N,o.push(p.x,p.y,p.z),m.set(-A*F,R,A*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(M+L,P)}if(y>0){const _=(y-1)*v;for(let M=0;M<s;M++){const w=_+M,N=_+M+1,F=y*v+M,z=y*v+M+1;a.push(w,N,F),a.push(N,z,F)}}}this.setIndex(a),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new al(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class ei extends _e{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const v=[],m=n/2;let p=0;y(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(f,3)),this.setAttribute("uv",new ie(d,2));function y(){const S=new I,A=new I;let R=0;const P=(e-t)/n;for(let L=0;L<=r;L++){const _=[],M=L/r,w=M*(e-t)+t;for(let N=0;N<=s;N++){const F=N/s,z=F*l+o,G=Math.sin(z),W=Math.cos(z);A.x=w*G,A.y=-M*n+m,A.z=w*W,u.push(A.x,A.y,A.z),S.set(G,P,W).normalize(),f.push(S.x,S.y,S.z),d.push(F,1-M),_.push(g++)}v.push(_)}for(let L=0;L<s;L++)for(let _=0;_<r;_++){const M=v[_][L],w=v[_+1][L],N=v[_+1][L+1],F=v[_][L+1];(t>0||_!==0)&&(h.push(M,w,F),R+=3),(e>0||_!==r-1)&&(h.push(w,N,F),R+=3)}c.addGroup(p,R,0),p+=R}function E(S){const A=g,R=new tt,P=new I;let L=0;const _=S===!0?t:e,M=S===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const w=g;for(let N=0;N<=s;N++){const z=N/s*l+o,G=Math.cos(z),W=Math.sin(z);P.x=_*W,P.y=m*M,P.z=_*G,u.push(P.x,P.y,P.z),f.push(0,M,0),R.x=G*.5+.5,R.y=W*.5*M+.5,d.push(R.x,R.y),g++}for(let N=0;N<s;N++){const F=A+N,z=w+N;S===!0?h.push(z,z+1,F):h.push(z+1,z,F),L+=3}c.addGroup(p,L,S===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ei(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Br extends ei{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Br(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ol extends _e{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const E=new I,S=new I,A=new I;for(let R=0;R<e.length;R+=3)d(e[R+0],E),d(e[R+1],S),d(e[R+2],A),l(E,S,A,y)}function l(y,E,S,A){const R=A+1,P=[];for(let L=0;L<=R;L++){P[L]=[];const _=y.clone().lerp(S,L/R),M=E.clone().lerp(S,L/R),w=R-L;for(let N=0;N<=w;N++)N===0&&L===R?P[L][N]=_:P[L][N]=_.clone().lerp(M,N/w)}for(let L=0;L<R;L++)for(let _=0;_<2*(R-L)-1;_++){const M=Math.floor(_/2);_%2===0?(f(P[L][M+1]),f(P[L+1][M]),f(P[L][M])):(f(P[L][M+1]),f(P[L+1][M+1]),f(P[L+1][M]))}}function c(y){const E=new I;for(let S=0;S<r.length;S+=3)E.x=r[S+0],E.y=r[S+1],E.z=r[S+2],E.normalize().multiplyScalar(y),r[S+0]=E.x,r[S+1]=E.y,r[S+2]=E.z}function h(){const y=new I;for(let E=0;E<r.length;E+=3){y.x=r[E+0],y.y=r[E+1],y.z=r[E+2];const S=m(y)/2/Math.PI+.5,A=p(y)/Math.PI+.5;a.push(S,1-A)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){const E=a[y+0],S=a[y+2],A=a[y+4],R=Math.max(E,S,A),P=Math.min(E,S,A);R>.9&&P<.1&&(E<.2&&(a[y+0]+=1),S<.2&&(a[y+2]+=1),A<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,E){const S=y*3;E.x=t[S+0],E.y=t[S+1],E.z=t[S+2]}function g(){const y=new I,E=new I,S=new I,A=new I,R=new tt,P=new tt,L=new tt;for(let _=0,M=0;_<r.length;_+=9,M+=6){y.set(r[_+0],r[_+1],r[_+2]),E.set(r[_+3],r[_+4],r[_+5]),S.set(r[_+6],r[_+7],r[_+8]),R.set(a[M+0],a[M+1]),P.set(a[M+2],a[M+3]),L.set(a[M+4],a[M+5]),A.copy(y).add(E).add(S).divideScalar(3);const w=m(A);v(R,M+0,y,w),v(P,M+2,E,w),v(L,M+4,S,w)}}function v(y,E,S,A){A<0&&y.x===1&&(a[E]=y.x-1),S.x===0&&S.z===0&&(a[E]=A/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.vertices,t.indices,t.radius,t.detail)}}class wn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new tt:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,s=[],r=[],a=[],o=new I,l=new Qt;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Jt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Jt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ll extends wn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new tt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class vf extends ll{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function cl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const fr=new I,xa=new cl,va=new cl,Ma=new cl;class Mf extends wn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(fr.subVectors(s[0],s[1]).add(s[0]),c=fr);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(fr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=fr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),xa.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,m),va.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,m),Ma.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(xa.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),va.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ma.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(xa.calc(l),va.calc(l),Ma.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function tc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Sf(i,t){const e=1-i;return e*e*t}function yf(i,t){return 2*(1-i)*i*t}function bf(i,t){return i*i*t}function Ts(i,t,e,n){return Sf(i,t)+yf(i,e)+bf(i,n)}function Ef(i,t){const e=1-i;return e*e*e*t}function Tf(i,t){const e=1-i;return 3*e*e*i*t}function wf(i,t){return 3*(1-i)*i*i*t}function Af(i,t){return i*i*i*t}function ws(i,t,e,n,s){return Ef(i,t)+Tf(i,e)+wf(i,n)+Af(i,s)}class Fh extends wn{constructor(t=new tt,e=new tt,n=new tt,s=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new tt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ws(t,s.x,r.x,a.x,o.x),ws(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Rf extends wn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ws(t,s.x,r.x,a.x,o.x),ws(t,s.y,r.y,a.y,o.y),ws(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Oh extends wn{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cf extends wn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bh extends wn{constructor(t=new tt,e=new tt,n=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new tt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ts(t,s.x,r.x,a.x),Ts(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pf extends wn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ts(t,s.x,r.x,a.x),Ts(t,s.y,r.y,a.y),Ts(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kh extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(tc(o,l.x,c.x,h.x,u.x),tc(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new tt().fromArray(s))}return this}}var Io=Object.freeze({__proto__:null,ArcCurve:vf,CatmullRomCurve3:Mf,CubicBezierCurve:Fh,CubicBezierCurve3:Rf,EllipseCurve:ll,LineCurve:Oh,LineCurve3:Cf,QuadraticBezierCurve:Bh,QuadraticBezierCurve3:Pf,SplineCurve:kh});class Lf extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Io[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Io[s.type]().fromJSON(s))}return this}}class ec extends Lf{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Oh(this.currentPoint.clone(),new tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Bh(this.currentPoint.clone(),new tt(t,e),new tt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Fh(this.currentPoint.clone(),new tt(t,e),new tt(n,s),new tt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new kh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new ll(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ss extends ec{constructor(t){super(t),this.uuid=zn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new ec().fromJSON(s))}return this}}function If(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=zh(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Of(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,u=l;for(let f=e;f<s;f+=e){const d=i[f],g=i[f+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Us(r,a,e,o,l,c,0),a}function zh(i,t,e,n,s){let r;if(s===Jf(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=nc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=nc(a/n|0,i[a],i[a+1],r);return r&&es(r,r.next)&&(Fs(r),r=r.next),r}function Si(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(es(e,e.next)||ge(e.prev,e,e.next)===0)){if(Fs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Us(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Gf(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Uf(i,n,s,r):Df(i)){t.push(l.i,i.i,c.i),Fs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Nf(Si(i),t),Us(i,t,e,n,s,r,2)):a===2&&Ff(i,t,e,n,s,r):Us(Si(i),t,e,n,s,r,1);break}}}function Df(i){const t=i.prev,e=i,n=i.next;if(ge(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),d=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&bs(s,o,r,l,a,c,g.x,g.y)&&ge(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Uf(i,t,e,n){const s=i.prev,r=i,a=i.next;if(ge(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=Math.min(o,l,c),g=Math.min(h,u,f),v=Math.max(o,l,c),m=Math.max(h,u,f),p=Do(d,g,t,e,n),y=Do(v,m,t,e,n);let E=i.prevZ,S=i.nextZ;for(;E&&E.z>=p&&S&&S.z<=y;){if(E.x>=d&&E.x<=v&&E.y>=g&&E.y<=m&&E!==s&&E!==a&&bs(o,h,l,u,c,f,E.x,E.y)&&ge(E.prev,E,E.next)>=0||(E=E.prevZ,S.x>=d&&S.x<=v&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&bs(o,h,l,u,c,f,S.x,S.y)&&ge(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;E&&E.z>=p;){if(E.x>=d&&E.x<=v&&E.y>=g&&E.y<=m&&E!==s&&E!==a&&bs(o,h,l,u,c,f,E.x,E.y)&&ge(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;S&&S.z<=y;){if(S.x>=d&&S.x<=v&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&bs(o,h,l,u,c,f,S.x,S.y)&&ge(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Nf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!es(n,s)&&Gh(n,e,e.next,s)&&Ns(n,s)&&Ns(s,n)&&(t.push(n.i,e.i,s.i),Fs(e),Fs(e.next),e=i=s),e=e.next}while(e!==i);return Si(e)}function Ff(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Xf(a,o)){let l=Hh(a,o);a=Si(a,a.next),l=Si(l,l.next),Us(a,t,e,n,s,r,0),Us(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Of(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=zh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Wf(c))}s.sort(Bf);for(let r=0;r<s.length;r++)e=kf(s[r],e);return e}function Bf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function kf(i,t){const e=zf(i,t);if(!e)return t;const n=Hh(e,i);return Si(n,n.next),Si(e,e.next)}function zf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(es(i,e))return e;do{if(es(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Vh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);Ns(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Vf(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Vf(i,t){return ge(i.prev,i,t.prev)<0&&ge(t.next,i,i.next)<0}function Gf(i,t,e,n){let s=i;do s.z===0&&(s.z=Do(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Hf(s)}function Hf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Do(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Wf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Vh(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function bs(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Vh(i,t,e,n,s,r,a,o)}function Xf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!qf(i,t)&&(Ns(i,t)&&Ns(t,i)&&Yf(i,t)&&(ge(i.prev,i,t.prev)||ge(i,t.prev,t))||es(i,t)&&ge(i.prev,i,i.next)>0&&ge(t.prev,t,t.next)>0)}function ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function es(i,t){return i.x===t.x&&i.y===t.y}function Gh(i,t,e,n){const s=pr(ge(i,t,e)),r=pr(ge(i,t,n)),a=pr(ge(e,n,i)),o=pr(ge(e,n,t));return!!(s!==r&&a!==o||s===0&&dr(i,e,t)||r===0&&dr(i,n,t)||a===0&&dr(e,i,n)||o===0&&dr(e,t,n))}function dr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function pr(i){return i>0?1:i<0?-1:0}function qf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Gh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ns(i,t){return ge(i.prev,i,i.next)<0?ge(i,t,i.next)>=0&&ge(i,i.prev,t)>=0:ge(i,t,i.prev)<0||ge(i,i.next,t)<0}function Yf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Hh(i,t){const e=Uo(i.i,i.x,i.y),n=Uo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function nc(i,t,e,n){const s=Uo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Uo(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Jf(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Zf{static triangulate(t,e,n=2){return If(t,e,n)}}class Bn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Bn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];ic(t),sc(n,t);let a=t.length;e.forEach(ic);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,sc(n,e[l]);const o=Zf.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function ic(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function sc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Os extends _e{constructor(t=new ss([new tt(.5,.5),new tt(-.5,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new ie(s,3)),this.setAttribute("uv",new ie(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Kf;let E,S=!1,A,R,P,L;if(p){E=p.getSpacedPoints(h),S=!0,f=!1;const K=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(h,K),R=new I,P=new I,L=new I}f||(m=0,d=0,g=0,v=0);const _=o.extractPoints(c);let M=_.shape;const w=_.holes;if(!Bn.isClockWise(M)){M=M.reverse();for(let K=0,nt=w.length;K<nt;K++){const j=w[K];Bn.isClockWise(j)&&(w[K]=j.reverse())}}function F(K){const j=10000000000000001e-36;let mt=K[0];for(let C=1;C<=K.length;C++){const Pt=C%K.length,xt=K[Pt],Ut=xt.x-mt.x,rt=xt.y-mt.y,T=Ut*Ut+rt*rt,x=Math.max(Math.abs(xt.x),Math.abs(xt.y),Math.abs(mt.x),Math.abs(mt.y)),U=j*x*x;if(T<=U){K.splice(Pt,1),C--;continue}mt=xt}}F(M),w.forEach(F);const z=w.length,G=M;for(let K=0;K<z;K++){const nt=w[K];M=M.concat(nt)}function W(K,nt,j){return nt||Kt("ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(nt,j)}const k=M.length;function $(K,nt,j){let mt,C,Pt;const xt=K.x-nt.x,Ut=K.y-nt.y,rt=j.x-K.x,T=j.y-K.y,x=xt*xt+Ut*Ut,U=xt*T-Ut*rt;if(Math.abs(U)>Number.EPSILON){const X=Math.sqrt(x),J=Math.sqrt(rt*rt+T*T),q=nt.x-Ut/X,At=nt.y+xt/X,at=j.x-T/J,Tt=j.y+rt/J,Nt=((at-q)*T-(Tt-At)*rt)/(xt*T-Ut*rt);mt=q+xt*Nt-K.x,C=At+Ut*Nt-K.y;const et=mt*mt+C*C;if(et<=2)return new tt(mt,C);Pt=Math.sqrt(et/2)}else{let X=!1;xt>Number.EPSILON?rt>Number.EPSILON&&(X=!0):xt<-Number.EPSILON?rt<-Number.EPSILON&&(X=!0):Math.sign(Ut)===Math.sign(T)&&(X=!0),X?(mt=-Ut,C=xt,Pt=Math.sqrt(x)):(mt=xt,C=Ut,Pt=Math.sqrt(x/2))}return new tt(mt/Pt,C/Pt)}const pt=[];for(let K=0,nt=G.length,j=nt-1,mt=K+1;K<nt;K++,j++,mt++)j===nt&&(j=0),mt===nt&&(mt=0),pt[K]=$(G[K],G[j],G[mt]);const ot=[];let ht,Gt=pt.concat();for(let K=0,nt=z;K<nt;K++){const j=w[K];ht=[];for(let mt=0,C=j.length,Pt=C-1,xt=mt+1;mt<C;mt++,Pt++,xt++)Pt===C&&(Pt=0),xt===C&&(xt=0),ht[mt]=$(j[mt],j[Pt],j[xt]);ot.push(ht),Gt=Gt.concat(ht)}let Bt;if(m===0)Bt=Bn.triangulateShape(G,w);else{const K=[],nt=[];for(let j=0;j<m;j++){const mt=j/m,C=d*Math.cos(mt*Math.PI/2),Pt=g*Math.sin(mt*Math.PI/2)+v;for(let xt=0,Ut=G.length;xt<Ut;xt++){const rt=W(G[xt],pt[xt],Pt);Dt(rt.x,rt.y,-C),mt===0&&K.push(rt)}for(let xt=0,Ut=z;xt<Ut;xt++){const rt=w[xt];ht=ot[xt];const T=[];for(let x=0,U=rt.length;x<U;x++){const X=W(rt[x],ht[x],Pt);Dt(X.x,X.y,-C),mt===0&&T.push(X)}mt===0&&nt.push(T)}}Bt=Bn.triangulateShape(K,nt)}const se=Bt.length,re=g+v;for(let K=0;K<k;K++){const nt=f?W(M[K],Gt[K],re):M[K];S?(P.copy(A.normals[0]).multiplyScalar(nt.x),R.copy(A.binormals[0]).multiplyScalar(nt.y),L.copy(E[0]).add(P).add(R),Dt(L.x,L.y,L.z)):Dt(nt.x,nt.y,0)}for(let K=1;K<=h;K++)for(let nt=0;nt<k;nt++){const j=f?W(M[nt],Gt[nt],re):M[nt];S?(P.copy(A.normals[K]).multiplyScalar(j.x),R.copy(A.binormals[K]).multiplyScalar(j.y),L.copy(E[K]).add(P).add(R),Dt(L.x,L.y,L.z)):Dt(j.x,j.y,u/h*K)}for(let K=m-1;K>=0;K--){const nt=K/m,j=d*Math.cos(nt*Math.PI/2),mt=g*Math.sin(nt*Math.PI/2)+v;for(let C=0,Pt=G.length;C<Pt;C++){const xt=W(G[C],pt[C],mt);Dt(xt.x,xt.y,u+j)}for(let C=0,Pt=w.length;C<Pt;C++){const xt=w[C];ht=ot[C];for(let Ut=0,rt=xt.length;Ut<rt;Ut++){const T=W(xt[Ut],ht[Ut],mt);S?Dt(T.x,T.y+E[h-1].y,E[h-1].x+j):Dt(T.x,T.y,u+j)}}}Y(),Q();function Y(){const K=s.length/3;if(f){let nt=0,j=k*nt;for(let mt=0;mt<se;mt++){const C=Bt[mt];bt(C[2]+j,C[1]+j,C[0]+j)}nt=h+m*2,j=k*nt;for(let mt=0;mt<se;mt++){const C=Bt[mt];bt(C[0]+j,C[1]+j,C[2]+j)}}else{for(let nt=0;nt<se;nt++){const j=Bt[nt];bt(j[2],j[1],j[0])}for(let nt=0;nt<se;nt++){const j=Bt[nt];bt(j[0]+k*h,j[1]+k*h,j[2]+k*h)}}n.addGroup(K,s.length/3-K,0)}function Q(){const K=s.length/3;let nt=0;St(G,nt),nt+=G.length;for(let j=0,mt=w.length;j<mt;j++){const C=w[j];St(C,nt),nt+=C.length}n.addGroup(K,s.length/3-K,1)}function St(K,nt){let j=K.length;for(;--j>=0;){const mt=j;let C=j-1;C<0&&(C=K.length-1);for(let Pt=0,xt=h+m*2;Pt<xt;Pt++){const Ut=k*Pt,rt=k*(Pt+1),T=nt+mt+Ut,x=nt+C+Ut,U=nt+C+rt,X=nt+mt+rt;Zt(T,x,U,X)}}}function Dt(K,nt,j){l.push(K),l.push(nt),l.push(j)}function bt(K,nt,j){ae(K),ae(nt),ae(j);const mt=s.length/3,C=y.generateTopUV(n,s,mt-3,mt-2,mt-1);Ht(C[0]),Ht(C[1]),Ht(C[2])}function Zt(K,nt,j,mt){ae(K),ae(nt),ae(mt),ae(nt),ae(j),ae(mt);const C=s.length/3,Pt=y.generateSideWallUV(n,s,C-6,C-3,C-2,C-1);Ht(Pt[0]),Ht(Pt[1]),Ht(Pt[3]),Ht(Pt[1]),Ht(Pt[2]),Ht(Pt[3])}function ae(K){s.push(l[K*3+0]),s.push(l[K*3+1]),s.push(l[K*3+2])}function Ht(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return jf(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Io[s.type]().fromJSON(s)),new Os(n,t.options)}}const Kf={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new tt(r,a),new tt(o,l),new tt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new tt(a,1-l),new tt(c,1-u),new tt(f,1-g),new tt(v,1-p)]:[new tt(o,1-l),new tt(h,1-u),new tt(d,1-g),new tt(m,1-p)]}};function jf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class hl extends ol{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new hl(t.radius,t.detail)}}class en extends _e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const y=p*f-a;for(let E=0;E<c;E++){const S=E*u-r;g.push(S,-y,0),v.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const E=y+c*p,S=y+c*(p+1),A=y+1+c*(p+1),R=y+1+c*p;d.push(E,S,R),d.push(S,A,R)}this.setIndex(d),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new en(t.width,t.height,t.widthSegments,t.heightSegments)}}class ul extends _e{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,d=new I,g=new tt;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<s;v++){const m=v*(n+1);for(let p=0;p<n;p++){const y=p+m,E=y,S=y+n+1,A=y+n+2,R=y+1;o.push(E,S,R),o.push(S,A,R)}}this.setIndex(o),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ul(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class fl extends _e{constructor(t=new ss([new tt(0,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ie(s,3)),this.setAttribute("normal",new ie(r,3)),this.setAttribute("uv",new ie(a,2));function c(h){const u=s.length/3,f=h.extractPoints(e);let d=f.shape;const g=f.holes;Bn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];Bn.isClockWise(y)===!0&&(g[m]=y.reverse())}const v=Bn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];d=d.concat(y)}for(let m=0,p=d.length;m<p;m++){const y=d[m];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=v.length;m<p;m++){const y=v[m],E=y[0]+u,S=y[1]+u,A=y[2]+u;n.push(E,S,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return $f(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new fl(n,t.curveSegments)}}function $f(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class dl extends _e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new I,f=new I,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const y=[],E=p/n;let S=0;p===0&&a===0?S=.5/e:p===n&&l===Math.PI&&(S=-.5/e);for(let A=0;A<=e;A++){const R=A/e;u.x=-t*Math.cos(s+R*r)*Math.sin(a+E*o),u.y=t*Math.cos(a+E*o),u.z=t*Math.sin(s+R*r)*Math.sin(a+E*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(R+S,1-E),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const E=h[p][y+1],S=h[p][y],A=h[p+1][y],R=h[p+1][y+1];(p!==0||a>0)&&d.push(E,S,R),(p!==n-1||l<Math.PI)&&d.push(S,A,R)}this.setIndex(d),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Qf extends ln{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ue extends ni{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tl,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class td extends ni{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tl,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ed extends ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nd extends ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class pl extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class id extends pl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Sa=new Qt,rc=new I,ac=new I;class Wh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=Qe,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rl,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;rc.setFromMatrixPosition(t.matrixWorld),e.position.copy(rc),ac.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ac),e.updateMatrixWorld(),Sa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sa,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class sd extends Wh{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0}}class rd extends pl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new sd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class ml extends Ah{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ad extends Wh{constructor(){super(new ml(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oc extends pl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new ad}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class od extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function lc(i,t,e,n){const s=ld(n);switch(e){case gh:return i*t;case Ko:return i*t/s.components*s.byteLength;case jo:return i*t/s.components*s.byteLength;case $i:return i*t*2/s.components*s.byteLength;case $o:return i*t*2/s.components*s.byteLength;case _h:return i*t*3/s.components*s.byteLength;case mn:return i*t*4/s.components*s.byteLength;case Qo:return i*t*4/s.components*s.byteLength;case yr:case br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Er:case Tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:case Qa:return Math.max(i,16)*Math.max(t,8)/4;case Ka:case $a:return Math.max(i,8)*Math.max(t,8)/2;case to:case eo:case io:case so:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case no:case ro:case ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case co:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ho:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case uo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case fo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case po:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case mo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case go:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case _o:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case xo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case vo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Mo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case So:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case yo:case bo:case Eo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case To:case wo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ao:case Ro:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ld(i){switch(i){case Qe:case fh:return{byteLength:1,components:1};case Ps:case dh:case Gn:return{byteLength:2,components:1};case Jo:case Zo:return{byteLength:2,components:4};case Tn:case Yo:case pn:return{byteLength:4,components:1};case ph:case mh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wo}}));typeof window<"u"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wo);function Xh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function cd(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const v=u[d];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ud=`#ifdef USE_ALPHAHASH
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
#endif`,fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gd=`#ifdef USE_AOMAP
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
#endif`,_d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xd=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Md=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bd=`#ifdef USE_IRIDESCENCE
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
#endif`,Ed=`#ifdef USE_BUMPMAP
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
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Dd=`#define PI 3.141592653589793
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
} // validated`,Ud=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nd=`vec3 transformedNormal = objectNormal;
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
#endif`,Fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Hd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wd=`#ifdef USE_ENVMAP
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
#endif`,Xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qd=`#ifdef USE_ENVMAP
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
#endif`,Yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jd=`#ifdef USE_GRADIENTMAP
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
}`,$d=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ep=`uniform bool receiveShadow;
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
#endif`,np=`#ifdef USE_ENVMAP
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
#endif`,ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,op=`PhysicalMaterial material;
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
#endif`,lp=`uniform sampler2D dfgLUT;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
}`,cp=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hp=`#if defined( RE_IndirectDiffuse )
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
#endif`,up=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vp=`#if defined( USE_POINTS_UV )
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
#endif`,Mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tp=`#ifdef USE_MORPHTARGETS
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
#endif`,wp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ip=`#ifdef USE_NORMALMAP
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
#endif`,Dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Up=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Np=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Op=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jp=`float getShadowMask() {
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
}`,Zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kp=`#ifdef USE_SKINNING
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
#endif`,jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$p=`#ifdef USE_SKINNING
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
#endif`,Qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,im=`#ifdef USE_TRANSMISSION
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
#endif`,sm=`#ifdef USE_TRANSMISSION
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hm=`uniform sampler2D t2D;
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`#include <common>
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
}`,gm=`#if DEPTH_PACKING == 3200
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
}`,_m=`#define DISTANCE
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
}`,xm=`#define DISTANCE
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`uniform float scale;
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
}`,ym=`uniform vec3 diffuse;
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
}`,bm=`#include <common>
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
}`,Em=`uniform vec3 diffuse;
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
}`,Tm=`#define LAMBERT
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
}`,wm=`#define LAMBERT
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
}`,Am=`#define MATCAP
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
}`,Rm=`#define MATCAP
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
}`,Cm=`#define NORMAL
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
}`,Pm=`#define NORMAL
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
}`,Lm=`#define PHONG
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
}`,Im=`#define PHONG
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
}`,Dm=`#define STANDARD
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
}`,Um=`#define STANDARD
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
}`,Nm=`#define TOON
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
}`,Fm=`#define TOON
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
}`,Om=`uniform float size;
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
}`,Bm=`uniform vec3 diffuse;
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
}`,km=`#include <common>
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
}`,zm=`uniform vec3 color;
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
}`,Vm=`uniform float rotation;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:hd,alphahash_pars_fragment:ud,alphamap_fragment:fd,alphamap_pars_fragment:dd,alphatest_fragment:pd,alphatest_pars_fragment:md,aomap_fragment:gd,aomap_pars_fragment:_d,batching_pars_vertex:xd,batching_vertex:vd,begin_vertex:Md,beginnormal_vertex:Sd,bsdfs:yd,iridescence_fragment:bd,bumpmap_pars_fragment:Ed,clipping_planes_fragment:Td,clipping_planes_pars_fragment:wd,clipping_planes_pars_vertex:Ad,clipping_planes_vertex:Rd,color_fragment:Cd,color_pars_fragment:Pd,color_pars_vertex:Ld,color_vertex:Id,common:Dd,cube_uv_reflection_fragment:Ud,defaultnormal_vertex:Nd,displacementmap_pars_vertex:Fd,displacementmap_vertex:Od,emissivemap_fragment:Bd,emissivemap_pars_fragment:kd,colorspace_fragment:zd,colorspace_pars_fragment:Vd,envmap_fragment:Gd,envmap_common_pars_fragment:Hd,envmap_pars_fragment:Wd,envmap_pars_vertex:Xd,envmap_physical_pars_fragment:np,envmap_vertex:qd,fog_vertex:Yd,fog_pars_vertex:Jd,fog_fragment:Zd,fog_pars_fragment:Kd,gradientmap_pars_fragment:jd,lightmap_pars_fragment:$d,lights_lambert_fragment:Qd,lights_lambert_pars_fragment:tp,lights_pars_begin:ep,lights_toon_fragment:ip,lights_toon_pars_fragment:sp,lights_phong_fragment:rp,lights_phong_pars_fragment:ap,lights_physical_fragment:op,lights_physical_pars_fragment:lp,lights_fragment_begin:cp,lights_fragment_maps:hp,lights_fragment_end:up,logdepthbuf_fragment:fp,logdepthbuf_pars_fragment:dp,logdepthbuf_pars_vertex:pp,logdepthbuf_vertex:mp,map_fragment:gp,map_pars_fragment:_p,map_particle_fragment:xp,map_particle_pars_fragment:vp,metalnessmap_fragment:Mp,metalnessmap_pars_fragment:Sp,morphinstance_vertex:yp,morphcolor_vertex:bp,morphnormal_vertex:Ep,morphtarget_pars_vertex:Tp,morphtarget_vertex:wp,normal_fragment_begin:Ap,normal_fragment_maps:Rp,normal_pars_fragment:Cp,normal_pars_vertex:Pp,normal_vertex:Lp,normalmap_pars_fragment:Ip,clearcoat_normal_fragment_begin:Dp,clearcoat_normal_fragment_maps:Up,clearcoat_pars_fragment:Np,iridescence_pars_fragment:Fp,opaque_fragment:Op,packing:Bp,premultiplied_alpha_fragment:kp,project_vertex:zp,dithering_fragment:Vp,dithering_pars_fragment:Gp,roughnessmap_fragment:Hp,roughnessmap_pars_fragment:Wp,shadowmap_pars_fragment:Xp,shadowmap_pars_vertex:qp,shadowmap_vertex:Yp,shadowmask_pars_fragment:Jp,skinbase_vertex:Zp,skinning_pars_vertex:Kp,skinning_vertex:jp,skinnormal_vertex:$p,specularmap_fragment:Qp,specularmap_pars_fragment:tm,tonemapping_fragment:em,tonemapping_pars_fragment:nm,transmission_fragment:im,transmission_pars_fragment:sm,uv_pars_fragment:rm,uv_pars_vertex:am,uv_vertex:om,worldpos_vertex:lm,background_vert:cm,background_frag:hm,backgroundCube_vert:um,backgroundCube_frag:fm,cube_vert:dm,cube_frag:pm,depth_vert:mm,depth_frag:gm,distance_vert:_m,distance_frag:xm,equirect_vert:vm,equirect_frag:Mm,linedashed_vert:Sm,linedashed_frag:ym,meshbasic_vert:bm,meshbasic_frag:Em,meshlambert_vert:Tm,meshlambert_frag:wm,meshmatcap_vert:Am,meshmatcap_frag:Rm,meshnormal_vert:Cm,meshnormal_frag:Pm,meshphong_vert:Lm,meshphong_frag:Im,meshphysical_vert:Dm,meshphysical_frag:Um,meshtoon_vert:Nm,meshtoon_frag:Fm,points_vert:Om,points_frag:Bm,shadow_vert:km,shadow_frag:zm,sprite_vert:Vm,sprite_frag:Gm},dt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},vn={basic:{uniforms:ze([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:ze([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:ze([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:ze([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:ze([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:ze([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:ze([dt.points,dt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:ze([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:ze([dt.common,dt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:ze([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:ze([dt.sprite,dt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:ze([dt.common,dt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:ze([dt.lights,dt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};vn.physical={uniforms:ze([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const mr={r:0,b:0,g:0},ci=new on,Hm=new Qt;function Wm(i,t,e,n,s,r,a){const o=new zt(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?e:t).get(S)),S}function v(E){let S=!1;const A=g(E);A===null?p(o,l):A&&A.isColor&&(p(A,1),S=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,S){const A=g(S);A&&(A.isCubeTexture||A.mapping===Or)?(h===void 0&&(h=new Ft(new we(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:ts(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ci.copy(S.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Hm.makeRotationFromEuler(ci)),h.material.toneMapped=jt.getTransfer(A.colorSpace)!==ne,(u!==A||f!==A.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,d=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Ft(new en(2,2),new ln({name:"BackgroundMaterial",uniforms:ts(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=jt.getTransfer(A.colorSpace)!==ne,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,f=A.version,d=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,S){E.getRGB(mr,Th(i)),n.buffers.color.setClear(mr.r,mr.g,mr.b,S,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:v,addToRenderList:m,dispose:y}}function Xm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(M,w,N,F,z){let G=!1;const W=u(F,N,w);r!==W&&(r=W,c(r.object)),G=d(M,F,N,z),G&&g(M,F,N,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,S(M,w,N,F),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,w,N){const F=N.wireframe===!0;let z=n[M.id];z===void 0&&(z={},n[M.id]=z);let G=z[w.id];G===void 0&&(G={},z[w.id]=G);let W=G[F];return W===void 0&&(W=f(l()),G[F]=W),W}function f(M){const w=[],N=[],F=[];for(let z=0;z<e;z++)w[z]=0,N[z]=0,F[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:N,attributeDivisors:F,object:M,attributes:{},index:null}}function d(M,w,N,F){const z=r.attributes,G=w.attributes;let W=0;const k=N.getAttributes();for(const $ in k)if(k[$].location>=0){const ot=z[$];let ht=G[$];if(ht===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor)),ot===void 0||ot.attribute!==ht||ht&&ot.data!==ht.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function g(M,w,N,F){const z={},G=w.attributes;let W=0;const k=N.getAttributes();for(const $ in k)if(k[$].location>=0){let ot=G[$];ot===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(ot=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(ot=M.instanceColor));const ht={};ht.attribute=ot,ot&&ot.data&&(ht.data=ot.data),z[$]=ht,W++}r.attributes=z,r.attributesNum=W,r.index=F}function v(){const M=r.newAttributes;for(let w=0,N=M.length;w<N;w++)M[w]=0}function m(M){p(M,0)}function p(M,w){const N=r.newAttributes,F=r.enabledAttributes,z=r.attributeDivisors;N[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),z[M]!==w&&(i.vertexAttribDivisor(M,w),z[M]=w)}function y(){const M=r.newAttributes,w=r.enabledAttributes;for(let N=0,F=w.length;N<F;N++)w[N]!==M[N]&&(i.disableVertexAttribArray(N),w[N]=0)}function E(M,w,N,F,z,G,W){W===!0?i.vertexAttribIPointer(M,w,N,z,G):i.vertexAttribPointer(M,w,N,F,z,G)}function S(M,w,N,F){v();const z=F.attributes,G=N.getAttributes(),W=w.defaultAttributeValues;for(const k in G){const $=G[k];if($.location>=0){let pt=z[k];if(pt===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor)),pt!==void 0){const ot=pt.normalized,ht=pt.itemSize,Gt=t.get(pt);if(Gt===void 0)continue;const Bt=Gt.buffer,se=Gt.type,re=Gt.bytesPerElement,Y=se===i.INT||se===i.UNSIGNED_INT||pt.gpuType===Yo;if(pt.isInterleavedBufferAttribute){const Q=pt.data,St=Q.stride,Dt=pt.offset;if(Q.isInstancedInterleavedBuffer){for(let bt=0;bt<$.locationSize;bt++)p($.location+bt,Q.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let bt=0;bt<$.locationSize;bt++)m($.location+bt);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let bt=0;bt<$.locationSize;bt++)E($.location+bt,ht/$.locationSize,se,ot,St*re,(Dt+ht/$.locationSize*bt)*re,Y)}else{if(pt.isInstancedBufferAttribute){for(let Q=0;Q<$.locationSize;Q++)p($.location+Q,pt.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Q=0;Q<$.locationSize;Q++)m($.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let Q=0;Q<$.locationSize;Q++)E($.location+Q,ht/$.locationSize,se,ot,ht*re,ht/$.locationSize*Q*re,Y)}}else if(W!==void 0){const ot=W[k];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv($.location,ot);break;case 3:i.vertexAttrib3fv($.location,ot);break;case 4:i.vertexAttrib4fv($.location,ot);break;default:i.vertexAttrib1fv($.location,ot)}}}}y()}function A(){L();for(const M in n){const w=n[M];for(const N in w){const F=w[N];for(const z in F)h(F[z].object),delete F[z];delete w[N]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const w=n[M.id];for(const N in w){const F=w[N];for(const z in F)h(F[z].object),delete F[z];delete w[N]}delete n[M.id]}function P(M){for(const w in n){const N=n[w];if(N[M.id]===void 0)continue;const F=N[M.id];for(const z in F)h(F[z].object),delete F[z];delete N[M.id]}}function L(){_(),a=!0,r!==s&&(r=s,c(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:_,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function qm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ym(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==mn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const L=P===Gn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Qe&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==pn&&!L)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(kt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:S,maxSamples:A,samples:R}}function Jm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new di,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,E=y*4;let S=p.clippingState||null;l.value=S,S=h(g,f,E,d);for(let A=0;A!==E;++A)S[A]=e[A];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,S=d;E!==v;++E,S+=4)a.copy(u[E]).applyMatrix4(y,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Zm(i){let t=new WeakMap;function e(a,o){return o===Ya?a.mapping=Mi:o===Ja&&(a.mapping=ji),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ya||o===Ja)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ch(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Qn=4,cc=[.125,.215,.35,.446,.526,.582],mi=20,Km=256,_s=new ml,hc=new zt;let ya=null,ba=0,Ea=0,Ta=!1;const jm=new I;class No{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=jm}=r;ya=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ya,ba,Ea),this._renderer.xr.enabled=Ta,t.scissorTest=!1,Hi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mi||t.mapping===ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ya=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:Gn,format:mn,colorSpace:Qi,depthBuffer:!1},s=uc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uc(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$m(r)),this._blurMaterial=t0(r,t,e),this._ggxMaterial=Qm(r,t,e)}return s}_compileMaterial(t){const e=new Ft(new _e,t);this._renderer.compile(e,_s)}_sceneToCubeUV(t,e,n,s,r){const l=new $e(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(hc),u.toneMapping=bn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ft(new we,new Se({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const y=t.background;y?y.isColor&&(m.color.copy(y),t.background=null,p=!0):(m.color.copy(hc),p=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));const A=this._cubeSize;Hi(s,S*A,E>2?A:0,A,A),u.setRenderTarget(s),p&&u.render(v,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Mi||t.mapping===ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Hi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,_s)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=0+c*1.25,d=u*f,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-Qn?n-g+Qn:0),p=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,Hi(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,_s),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Hi(t,m,p,3*v,2*v),s.setRenderTarget(t),s.render(o,_s)}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Kt("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[s];u.material=c;const f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*mi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):mi;m>mi&&kt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mi}`);const p=[];let y=0;for(let P=0;P<mi;++P){const L=P/v,_=Math.exp(-L*L/2);p.push(_),P===0?y+=_:P<m&&(y+=2*_)}for(let P=0;P<p.length;P++)p[P]=p[P]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;const S=this._sizeLods[s],A=3*S*(s>E-Qn?s-E+Qn:0),R=4*(this._cubeSize-S);Hi(e,A,R,3*S,2*S),l.setRenderTarget(e),l.render(u,_s)}}function $m(i){const t=[],e=[],n=[];let s=i;const r=i-Qn+1+cc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Qn?l=cc[a-i+Qn-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*d),E=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let R=0;R<d;R++){const P=R%3*2/3-1,L=R>2?0:-1,_=[P,L,0,P+2/3,L,0,P+2/3,L+1,0,P,L,0,P+2/3,L+1,0,P,L+1,0];y.set(_,v*g*R),E.set(f,m*g*R);const M=[R,R,R,R,R,R];S.set(M,p*g*R)}const A=new _e;A.setAttribute("position",new fe(y,v)),A.setAttribute("uv",new fe(E,m)),A.setAttribute("faceIndex",new fe(S,p)),n.push(new Ft(A,null)),s>Qn&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function uc(i,t,e){const n=new En(i,t,e);return n.texture.mapping=Or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hi(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Qm(i,t,e){return new ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Km,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kr(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function t0(i,t,e){const n=new Float32Array(mi),s=new I(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kr(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function fc(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kr(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function dc(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function kr(){return`

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
	`}function e0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ya||l===Ja,h=l===Mi||l===ji;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new No(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new No(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function n0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Is("WebGLRenderer: "+n+" extension not supported."),s}}}function i0(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const y=d.array;v=d.version;for(let E=0,S=y.length;E<S;E+=3){const A=y[E+0],R=y[E+1],P=y[E+2];f.push(A,R,R,P,P,A)}}else if(g!==void 0){const y=g.array;v=g.version;for(let E=0,S=y.length/3-1;E<S;E+=3){const A=E+0,R=E+1,P=E+2;f.push(A,R,R,P,P,A)}}else return;const m=new(xh(f)?Eh:bh)(f,1);m.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function s0(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*a,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*v[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function r0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Kt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function a0(i,t,e){const n=new WeakMap,s=new ye;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let M=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let A=o.attributes.position.count*S,R=1;A>t.maxTextureSize&&(R=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const P=new Float32Array(A*R*4*u),L=new vh(P,A,R,u);L.type=pn,L.needsUpdate=!0;const _=S*4;for(let w=0;w<u;w++){const N=p[w],F=y[w],z=E[w],G=A*R*4*w;for(let W=0;W<N.count;W++){const k=W*_;g===!0&&(s.fromBufferAttribute(N,W),P[G+k+0]=s.x,P[G+k+1]=s.y,P[G+k+2]=s.z,P[G+k+3]=0),v===!0&&(s.fromBufferAttribute(F,W),P[G+k+4]=s.x,P[G+k+5]=s.y,P[G+k+6]=s.z,P[G+k+7]=0),m===!0&&(s.fromBufferAttribute(z,W),P[G+k+8]=s.x,P[G+k+9]=s.y,P[G+k+10]=s.z,P[G+k+11]=z.itemSize===4?s.w:1)}}f={count:u,texture:L,size:new tt(A,R)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function o0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const l0={[rh]:"LINEAR_TONE_MAPPING",[ah]:"REINHARD_TONE_MAPPING",[oh]:"CINEON_TONE_MAPPING",[qo]:"ACES_FILMIC_TONE_MAPPING",[ch]:"AGX_TONE_MAPPING",[hh]:"NEUTRAL_TONE_MAPPING",[lh]:"CUSTOM_TONE_MAPPING"};function c0(i,t,e,n,s){const r=new En(t,e,{type:i,depthBuffer:n,stencilBuffer:s}),a=new En(t,e,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),o=new _e;o.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ie([0,2,0,0,2,0],2));const l=new Qf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ft(o,l),h=new ml(-1,1,1,-1,0,1);let u=null,f=null,d=!1,g,v=null,m=[],p=!1;this.setSize=function(y,E){r.setSize(y,E),a.setSize(y,E);for(let S=0;S<m.length;S++){const A=m[S];A.setSize&&A.setSize(y,E)}},this.setEffects=function(y){m=y,p=m.length>0&&m[0].isRenderPass===!0;const E=r.width,S=r.height;for(let A=0;A<m.length;A++){const R=m[A];R.setSize&&R.setSize(E,S)}},this.begin=function(y,E){if(d||y.toneMapping===bn&&m.length===0)return!1;if(v=E,E!==null){const S=E.width,A=E.height;(r.width!==S||r.height!==A)&&this.setSize(S,A)}return p===!1&&y.setRenderTarget(r),g=y.toneMapping,y.toneMapping=bn,!0},this.hasRenderPass=function(){return p},this.end=function(y,E){y.toneMapping=g,d=!0;let S=r,A=a;for(let R=0;R<m.length;R++){const P=m[R];if(P.enabled!==!1&&(P.render(y,A,S,E),P.needsSwap!==!1)){const L=S;S=A,A=L}}if(u!==y.outputColorSpace||f!==y.toneMapping){u=y.outputColorSpace,f=y.toneMapping,l.defines={},jt.getTransfer(u)===ne&&(l.defines.SRGB_TRANSFER="");const R=l0[f];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,y.setRenderTarget(v),y.render(c,h),v=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const qh=new Oe,Fo=new Ds(1,1),Yh=new vh,Jh=new Yu,Zh=new Rh,pc=[],mc=[],gc=new Float32Array(16),_c=new Float32Array(9),xc=new Float32Array(4);function rs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=pc[s];if(r===void 0&&(r=new Float32Array(s),pc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function zr(i,t){let e=mc[t];e===void 0&&(e=new Int32Array(t),mc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function h0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function u0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function f0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function d0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function p0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;xc.set(n),i.uniformMatrix2fv(this.addr,!1,xc),Ce(e,n)}}function m0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;_c.set(n),i.uniformMatrix3fv(this.addr,!1,_c),Ce(e,n)}}function g0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;gc.set(n),i.uniformMatrix4fv(this.addr,!1,gc),Ce(e,n)}}function _0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function x0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function v0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function M0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function S0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function y0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function b0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function E0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function T0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Fo.compareFunction=e.isReversedDepthBuffer()?nl:el,r=Fo):r=qh,e.setTexture2D(t||r,s)}function w0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jh,s)}function A0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Zh,s)}function R0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Yh,s)}function C0(i){switch(i){case 5126:return h0;case 35664:return u0;case 35665:return f0;case 35666:return d0;case 35674:return p0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return _0;case 35667:case 35671:return x0;case 35668:case 35672:return v0;case 35669:case 35673:return M0;case 5125:return S0;case 36294:return y0;case 36295:return b0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return R0}}function P0(i,t){i.uniform1fv(this.addr,t)}function L0(i,t){const e=rs(t,this.size,2);i.uniform2fv(this.addr,e)}function I0(i,t){const e=rs(t,this.size,3);i.uniform3fv(this.addr,e)}function D0(i,t){const e=rs(t,this.size,4);i.uniform4fv(this.addr,e)}function U0(i,t){const e=rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function N0(i,t){const e=rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function F0(i,t){const e=rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function O0(i,t){i.uniform1iv(this.addr,t)}function B0(i,t){i.uniform2iv(this.addr,t)}function k0(i,t){i.uniform3iv(this.addr,t)}function z0(i,t){i.uniform4iv(this.addr,t)}function V0(i,t){i.uniform1uiv(this.addr,t)}function G0(i,t){i.uniform2uiv(this.addr,t)}function H0(i,t){i.uniform3uiv(this.addr,t)}function W0(i,t){i.uniform4uiv(this.addr,t)}function X0(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Fo:a=qh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function q0(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Jh,r[a])}function Y0(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Zh,r[a])}function J0(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Yh,r[a])}function Z0(i){switch(i){case 5126:return P0;case 35664:return L0;case 35665:return I0;case 35666:return D0;case 35674:return U0;case 35675:return N0;case 35676:return F0;case 5124:case 35670:return O0;case 35667:case 35671:return B0;case 35668:case 35672:return k0;case 35669:case 35673:return z0;case 5125:return V0;case 36294:return G0;case 36295:return H0;case 36296:return W0;case 35678:case 36198:case 36298:case 36306:case 35682:return X0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return J0}}class K0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=C0(e.type)}}class j0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Z0(e.type)}}class $0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const wa=/(\w+)(\])?(\[|\.)?/g;function vc(i,t){i.seq.push(t),i.map[t.id]=t}function Q0(i,t,e){const n=i.name,s=n.length;for(wa.lastIndex=0;;){const r=wa.exec(n),a=wa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){vc(e,c===void 0?new K0(o,i,t):new j0(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new $0(o),vc(e,u)),e=u}}}class wr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Q0(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Mc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const tg=37297;let eg=0;function ng(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Sc=new Wt;function ig(i){jt._getMatrix(Sc,jt.workingColorSpace,i);const t=`mat3( ${Sc.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case Cr:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function yc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+ng(i.getShaderSource(t),o)}else return r}function sg(i,t){const e=ig(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const rg={[rh]:"Linear",[ah]:"Reinhard",[oh]:"Cineon",[qo]:"ACESFilmic",[ch]:"AgX",[hh]:"Neutral",[lh]:"Custom"};function ag(i,t){const e=rg[t];return e===void 0?(kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const gr=new I;function og(){jt.getLuminanceCoefficients(gr);const i=gr.x.toFixed(4),t=gr.y.toFixed(4),e=gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function cg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function hg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Es(i){return i!==""}function bc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ec(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ug=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oo(i){return i.replace(ug,dg)}const fg=new Map;function dg(i,t){let e=Xt[t];if(e===void 0){const n=fg.get(t);if(n!==void 0)e=Xt[n],kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Oo(e)}const pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tc(i){return i.replace(pg,mg)}function mg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const gg={[Sr]:"SHADOWMAP_TYPE_PCF",[ys]:"SHADOWMAP_TYPE_VSM"};function _g(i){return gg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xg={[Mi]:"ENVMAP_TYPE_CUBE",[ji]:"ENVMAP_TYPE_CUBE",[Or]:"ENVMAP_TYPE_CUBE_UV"};function vg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":xg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Mg={[ji]:"ENVMAP_MODE_REFRACTION"};function Sg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Mg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yg={[Xo]:"ENVMAP_BLENDING_MULTIPLY",[Ru]:"ENVMAP_BLENDING_MIX",[Cu]:"ENVMAP_BLENDING_ADD"};function bg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":yg[i.combine]||"ENVMAP_BLENDING_NONE"}function Eg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Tg(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=_g(e),c=vg(e),h=Sg(e),u=bg(e),f=Eg(e),d=lg(e),g=cg(r),v=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Es).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Es).join(`
`),p.length>0&&(p+=`
`)):(m=[wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),p=[wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bn?"#define TONE_MAPPING":"",e.toneMapping!==bn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==bn?ag("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,sg("linearToOutputTexel",e.outputColorSpace),og(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Es).join(`
`)),a=Oo(a),a=bc(a,e),a=Ec(a,e),o=Oo(o),o=bc(o,e),o=Ec(o,e),a=Tc(a),o=Tc(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=y+m+a,S=y+p+o,A=Mc(s,s.VERTEX_SHADER,E),R=Mc(s,s.FRAGMENT_SHADER,S);s.attachShader(v,A),s.attachShader(v,R),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(w){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(v)||"",F=s.getShaderInfoLog(A)||"",z=s.getShaderInfoLog(R)||"",G=N.trim(),W=F.trim(),k=z.trim();let $=!0,pt=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,A,R);else{const ot=yc(s,A,"vertex"),ht=yc(s,R,"fragment");Kt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+G+`
`+ot+`
`+ht)}else G!==""?kt("WebGLProgram: Program Info Log:",G):(W===""||k==="")&&(pt=!1);pt&&(w.diagnostics={runnable:$,programLog:G,vertexShader:{log:W,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(A),s.deleteShader(R),L=new wr(s,v),_=hg(s,v)}let L;this.getUniforms=function(){return L===void 0&&P(this),L};let _;this.getAttributes=function(){return _===void 0&&P(this),_};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,tg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=eg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=R,this}let wg=0;class Ag{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Rg(t),e.set(t,n)),n}}class Rg{constructor(t){this.id=wg++,this.code=t,this.usedTimes=0}}function Cg(i,t,e,n,s,r,a){const o=new Sh,l=new Ag,c=new Set,h=[],u=new Map,f=s.logarithmicDepthBuffer;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,M,w,N,F){const z=N.fog,G=F.geometry,W=_.isMeshStandardMaterial?N.environment:null,k=(_.isMeshStandardMaterial?e:t).get(_.envMap||W),$=k&&k.mapping===Or?k.image.height:null,pt=g[_.type];_.precision!==null&&(d=s.getMaxPrecision(_.precision),d!==_.precision&&kt("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const ot=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ht=ot!==void 0?ot.length:0;let Gt=0;G.morphAttributes.position!==void 0&&(Gt=1),G.morphAttributes.normal!==void 0&&(Gt=2),G.morphAttributes.color!==void 0&&(Gt=3);let Bt,se,re,Y;if(pt){const te=vn[pt];Bt=te.vertexShader,se=te.fragmentShader}else Bt=_.vertexShader,se=_.fragmentShader,l.update(_),re=l.getVertexShaderID(_),Y=l.getFragmentShaderID(_);const Q=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),Dt=F.isInstancedMesh===!0,bt=F.isBatchedMesh===!0,Zt=!!_.map,ae=!!_.matcap,Ht=!!k,K=!!_.aoMap,nt=!!_.lightMap,j=!!_.bumpMap,mt=!!_.normalMap,C=!!_.displacementMap,Pt=!!_.emissiveMap,xt=!!_.metalnessMap,Ut=!!_.roughnessMap,rt=_.anisotropy>0,T=_.clearcoat>0,x=_.dispersion>0,U=_.iridescence>0,X=_.sheen>0,J=_.transmission>0,q=rt&&!!_.anisotropyMap,At=T&&!!_.clearcoatMap,at=T&&!!_.clearcoatNormalMap,Tt=T&&!!_.clearcoatRoughnessMap,Nt=U&&!!_.iridescenceMap,et=U&&!!_.iridescenceThicknessMap,ut=X&&!!_.sheenColorMap,wt=X&&!!_.sheenRoughnessMap,Rt=!!_.specularMap,ct=!!_.specularColorMap,qt=!!_.specularIntensityMap,D=J&&!!_.transmissionMap,_t=J&&!!_.thicknessMap,st=!!_.gradientMap,vt=!!_.alphaMap,it=_.alphaTest>0,Z=!!_.alphaHash,lt=!!_.extensions;let Vt=bn;_.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Vt=i.toneMapping);const de={shaderID:pt,shaderType:_.type,shaderName:_.name,vertexShader:Bt,fragmentShader:se,defines:_.defines,customVertexShaderID:re,customFragmentShaderID:Y,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:bt,batchingColor:bt&&F._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&F.instanceColor!==null,instancingMorph:Dt&&F.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Qi,alphaToCoverage:!!_.alphaToCoverage,map:Zt,matcap:ae,envMap:Ht,envMapMode:Ht&&k.mapping,envMapCubeUVHeight:$,aoMap:K,lightMap:nt,bumpMap:j,normalMap:mt,displacementMap:C,emissiveMap:Pt,normalMapObjectSpace:mt&&_.normalMapType===Iu,normalMapTangentSpace:mt&&_.normalMapType===tl,metalnessMap:xt,roughnessMap:Ut,anisotropy:rt,anisotropyMap:q,clearcoat:T,clearcoatMap:At,clearcoatNormalMap:at,clearcoatRoughnessMap:Tt,dispersion:x,iridescence:U,iridescenceMap:Nt,iridescenceThicknessMap:et,sheen:X,sheenColorMap:ut,sheenRoughnessMap:wt,specularMap:Rt,specularColorMap:ct,specularIntensityMap:qt,transmission:J,transmissionMap:D,thicknessMap:_t,gradientMap:st,opaque:_.transparent===!1&&_.blending===vi&&_.alphaToCoverage===!1,alphaMap:vt,alphaTest:it,alphaHash:Z,combine:_.combine,mapUv:Zt&&v(_.map.channel),aoMapUv:K&&v(_.aoMap.channel),lightMapUv:nt&&v(_.lightMap.channel),bumpMapUv:j&&v(_.bumpMap.channel),normalMapUv:mt&&v(_.normalMap.channel),displacementMapUv:C&&v(_.displacementMap.channel),emissiveMapUv:Pt&&v(_.emissiveMap.channel),metalnessMapUv:xt&&v(_.metalnessMap.channel),roughnessMapUv:Ut&&v(_.roughnessMap.channel),anisotropyMapUv:q&&v(_.anisotropyMap.channel),clearcoatMapUv:At&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:at&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:et&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:wt&&v(_.sheenRoughnessMap.channel),specularMapUv:Rt&&v(_.specularMap.channel),specularColorMapUv:ct&&v(_.specularColorMap.channel),specularIntensityMapUv:qt&&v(_.specularIntensityMap.channel),transmissionMapUv:D&&v(_.transmissionMap.channel),thicknessMapUv:_t&&v(_.thicknessMap.channel),alphaMapUv:vt&&v(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(mt||rt),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(Zt||vt),fog:!!z,useFog:_.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:St,skinning:F.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:Gt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Zt&&_.map.isVideoTexture===!0&&jt.getTransfer(_.map.colorSpace)===ne,decodeVideoTextureEmissive:Pt&&_.emissiveMap.isVideoTexture===!0&&jt.getTransfer(_.emissiveMap.colorSpace)===ne,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===qe,flipSided:_.side===Fe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:lt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&_.extensions.multiDraw===!0||bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return de.vertexUv1s=c.has(1),de.vertexUv2s=c.has(2),de.vertexUv3s=c.has(3),c.clear(),de}function p(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const w in _.defines)M.push(w),M.push(_.defines[w]);return _.isRawShaderMaterial===!1&&(y(M,_),E(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function y(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function E(_,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),_.push(o.mask)}function S(_){const M=g[_.type];let w;if(M){const N=vn[M];w=wh.clone(N.uniforms)}else w=_.uniforms;return w}function A(_,M){let w=u.get(M);return w!==void 0?++w.usedTimes:(w=new Tg(i,M,_,r),h.push(w),u.set(M,w)),w}function R(_){if(--_.usedTimes===0){const M=h.indexOf(_);h[M]=h[h.length-1],h.pop(),u.delete(_.cacheKey),_.destroy()}}function P(_){l.remove(_)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:A,releaseProgram:R,releaseShaderCache:P,programs:h,dispose:L}}function Pg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Lg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ac(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Rc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,d,g,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function o(u,f,d,g,v,m){const p=a(u,f,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,g,v,m){const p=a(u,f,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||Lg),n.length>1&&n.sort(f||Ac),s.length>1&&s.sort(f||Ac)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Ig(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Rc,i.set(n,[a])):s>=r.length?(a=new Rc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Dg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new zt};break;case"SpotLight":e={position:new I,direction:new I,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Ug(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Ng=0;function Fg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Og(i){const t=new Dg,e=Ug(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new Qt,a=new Qt;function o(c){let h=0,u=0,f=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,y=0,E=0,S=0,A=0,R=0,P=0;c.sort(Fg);for(let _=0,M=c.length;_<M;_++){const w=c[_],N=w.color,F=w.intensity,z=w.distance;let G=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===$i?G=w.shadow.map.texture:G=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)h+=N.r*F,u+=N.g*F,f+=N.b*F;else if(w.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(w.sh.coefficients[W],F);P++}else if(w.isDirectionalLight){const W=t.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const k=w.shadow,$=e.get(w);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,n.directionalShadow[d]=$,n.directionalShadowMap[d]=G,n.directionalShadowMatrix[d]=w.shadow.matrix,y++}n.directional[d]=W,d++}else if(w.isSpotLight){const W=t.get(w);W.position.setFromMatrixPosition(w.matrixWorld),W.color.copy(N).multiplyScalar(F),W.distance=z,W.coneCos=Math.cos(w.angle),W.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),W.decay=w.decay,n.spot[v]=W;const k=w.shadow;if(w.map&&(n.spotLightMap[A]=w.map,A++,k.updateMatrices(w),w.castShadow&&R++),n.spotLightMatrix[v]=k.matrix,w.castShadow){const $=e.get(w);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,n.spotShadow[v]=$,n.spotShadowMap[v]=G,S++}v++}else if(w.isRectAreaLight){const W=t.get(w);W.color.copy(N).multiplyScalar(F),W.halfWidth.set(w.width*.5,0,0),W.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=W,m++}else if(w.isPointLight){const W=t.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),W.distance=w.distance,W.decay=w.decay,w.castShadow){const k=w.shadow,$=e.get(w);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,$.shadowCameraNear=k.camera.near,$.shadowCameraFar=k.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=w.shadow.matrix,E++}n.point[g]=W,g++}else if(w.isHemisphereLight){const W=t.get(w);W.skyColor.copy(w.color).multiplyScalar(F),W.groundColor.copy(w.groundColor).multiplyScalar(F),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==y||L.numPointShadows!==E||L.numSpotShadows!==S||L.numSpotMaps!==A||L.numLightProbes!==P)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+A-R,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=P,L.directionalLength=d,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=y,L.numPointShadows=E,L.numSpotShadows=S,L.numSpotMaps=A,L.numLightProbes=P,n.version=Ng++)}function l(c,h){let u=0,f=0,d=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const E=c[p];if(E.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(E.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Cc(i){const t=new Og(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Bg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Cc(i),t.set(s,[o])):r>=a.length?(o=new Cc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const kg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zg=`uniform sampler2D shadow_pass;
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
}`,Vg=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Gg=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Pc=new Qt,xs=new I,Aa=new I;function Hg(i,t,e){let n=new rl;const s=new tt,r=new tt,a=new ye,o=new ed,l=new nd,c={},h=e.maxTextureSize,u={[ti]:Fe,[Fe]:ti,[qe]:qe},f=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:kg,fragmentShader:zg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new _e;g.setAttribute("position",new fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ft(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sr;let p=this.type;this.render=function(R,P,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;R.type===sh&&(kt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=Sr);const _=i.getRenderTarget(),M=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),N=i.state;N.setBlending(kn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=p!==this.type;F&&P.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(G=>G.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,G=R.length;z<G;z++){const W=R[z],k=W.shadow;if(k===void 0){kt("WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const $=k.getFrameExtents();if(s.multiply($),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,k.mapSize.y=r.y)),k.map===null||F===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ys){if(W.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new En(s.x,s.y,{format:$i,type:Gn,minFilter:Ne,magFilter:Ne,generateMipmaps:!1}),k.map.texture.name=W.name+".shadowMap",k.map.depthTexture=new Ds(s.x,s.y,pn),k.map.depthTexture.name=W.name+".shadowMapDepth",k.map.depthTexture.format=Hn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Le,k.map.depthTexture.magFilter=Le}else{W.isPointLight?(k.map=new Ch(s.x),k.map.depthTexture=new xf(s.x,Tn)):(k.map=new En(s.x,s.y),k.map.depthTexture=new Ds(s.x,s.y,Tn)),k.map.depthTexture.name=W.name+".shadowMap",k.map.depthTexture.format=Hn;const ot=i.state.buffers.depth.getReversed();this.type===Sr?(k.map.depthTexture.compareFunction=ot?nl:el,k.map.depthTexture.minFilter=Ne,k.map.depthTexture.magFilter=Ne):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Le,k.map.depthTexture.magFilter=Le)}k.camera.updateProjectionMatrix()}const pt=k.map.isWebGLCubeRenderTarget?6:1;for(let ot=0;ot<pt;ot++){if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,ot),i.clear();else{ot===0&&(i.setRenderTarget(k.map),i.clear());const ht=k.getViewport(ot);a.set(r.x*ht.x,r.y*ht.y,r.x*ht.z,r.y*ht.w),N.viewport(a)}if(W.isPointLight){const ht=k.camera,Gt=k.matrix,Bt=W.distance||ht.far;Bt!==ht.far&&(ht.far=Bt,ht.updateProjectionMatrix()),xs.setFromMatrixPosition(W.matrixWorld),ht.position.copy(xs),Aa.copy(ht.position),Aa.add(Vg[ot]),ht.up.copy(Gg[ot]),ht.lookAt(Aa),ht.updateMatrixWorld(),Gt.makeTranslation(-xs.x,-xs.y,-xs.z),Pc.multiplyMatrices(ht.projectionMatrix,ht.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Pc,ht.coordinateSystem,ht.reversedDepth)}else k.updateMatrices(W);n=k.getFrustum(),S(P,L,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===ys&&y(k,L),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(_,M,w)};function y(R,P){const L=t.update(v);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new En(s.x,s.y,{format:$i,type:Gn})),f.uniforms.shadow_pass.value=R.map.depthTexture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(P,null,L,f,v,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(P,null,L,d,v,null)}function E(R,P,L,_){let M=null;const w=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)M=w;else if(M=L.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const N=M.uuid,F=P.uuid;let z=c[N];z===void 0&&(z={},c[N]=z);let G=z[F];G===void 0&&(G=M.clone(),z[F]=G,P.addEventListener("dispose",A)),M=G}if(M.visible=P.visible,M.wireframe=P.wireframe,_===ys?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:u[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=i.properties.get(M);N.light=L}return M}function S(R,P,L,_,M){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===ys)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const F=t.update(R),z=R.material;if(Array.isArray(z)){const G=F.groups;for(let W=0,k=G.length;W<k;W++){const $=G[W],pt=z[$.materialIndex];if(pt&&pt.visible){const ot=E(R,pt,_,M);R.onBeforeShadow(i,R,P,L,F,ot,$),i.renderBufferDirect(L,null,F,ot,R,$),R.onAfterShadow(i,R,P,L,F,ot,$)}}}else if(z.visible){const G=E(R,z,_,M);R.onBeforeShadow(i,R,P,L,F,G,null),i.renderBufferDirect(L,null,F,G,R,null),R.onAfterShadow(i,R,P,L,F,G,null)}}const N=R.children;for(let F=0,z=N.length;F<z;F++)S(N[F],P,L,_,M)}function A(R){R.target.removeEventListener("dispose",A);for(const L in c){const _=c[L],M=R.target.uuid;M in _&&(_[M].dispose(),delete _[M])}}}const Wg={[za]:Va,[Ga]:Xa,[Ha]:qa,[Ki]:Wa,[Va]:za,[Xa]:Ga,[qa]:Ha,[Wa]:Ki};function Xg(i,t){function e(){let D=!1;const _t=new ye;let st=null;const vt=new ye(0,0,0,0);return{setMask:function(it){st!==it&&!D&&(i.colorMask(it,it,it,it),st=it)},setLocked:function(it){D=it},setClear:function(it,Z,lt,Vt,de){de===!0&&(it*=Vt,Z*=Vt,lt*=Vt),_t.set(it,Z,lt,Vt),vt.equals(_t)===!1&&(i.clearColor(it,Z,lt,Vt),vt.copy(_t))},reset:function(){D=!1,st=null,vt.set(-1,0,0,0)}}}function n(){let D=!1,_t=!1,st=null,vt=null,it=null;return{setReversed:function(Z){if(_t!==Z){const lt=t.get("EXT_clip_control");Z?lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.ZERO_TO_ONE_EXT):lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.NEGATIVE_ONE_TO_ONE_EXT),_t=Z;const Vt=it;it=null,this.setClear(Vt)}},getReversed:function(){return _t},setTest:function(Z){Z?Q(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(Z){st!==Z&&!D&&(i.depthMask(Z),st=Z)},setFunc:function(Z){if(_t&&(Z=Wg[Z]),vt!==Z){switch(Z){case za:i.depthFunc(i.NEVER);break;case Va:i.depthFunc(i.ALWAYS);break;case Ga:i.depthFunc(i.LESS);break;case Ki:i.depthFunc(i.LEQUAL);break;case Ha:i.depthFunc(i.EQUAL);break;case Wa:i.depthFunc(i.GEQUAL);break;case Xa:i.depthFunc(i.GREATER);break;case qa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=Z}},setLocked:function(Z){D=Z},setClear:function(Z){it!==Z&&(_t&&(Z=1-Z),i.clearDepth(Z),it=Z)},reset:function(){D=!1,st=null,vt=null,it=null,_t=!1}}}function s(){let D=!1,_t=null,st=null,vt=null,it=null,Z=null,lt=null,Vt=null,de=null;return{setTest:function(te){D||(te?Q(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(te){_t!==te&&!D&&(i.stencilMask(te),_t=te)},setFunc:function(te,_n,An){(st!==te||vt!==_n||it!==An)&&(i.stencilFunc(te,_n,An),st=te,vt=_n,it=An)},setOp:function(te,_n,An){(Z!==te||lt!==_n||Vt!==An)&&(i.stencilOp(te,_n,An),Z=te,lt=_n,Vt=An)},setLocked:function(te){D=te},setClear:function(te){de!==te&&(i.clearStencil(te),de=te)},reset:function(){D=!1,_t=null,st=null,vt=null,it=null,Z=null,lt=null,Vt=null,de=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,y=null,E=null,S=null,A=null,R=null,P=new zt(0,0,0),L=0,_=!1,M=null,w=null,N=null,F=null,z=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,k=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec($)[1]),W=k>=1):$.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),W=k>=2);let pt=null,ot={};const ht=i.getParameter(i.SCISSOR_BOX),Gt=i.getParameter(i.VIEWPORT),Bt=new ye().fromArray(ht),se=new ye().fromArray(Gt);function re(D,_t,st,vt){const it=new Uint8Array(4),Z=i.createTexture();i.bindTexture(D,Z),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let lt=0;lt<st;lt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D(_t+lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return Z}const Y={};Y[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(Ki),j(!1),mt(Tl),Q(i.CULL_FACE),K(kn);function Q(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function St(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Dt(D,_t){return u[D]!==_t?(i.bindFramebuffer(D,_t),u[D]=_t,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=_t),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function bt(D,_t){let st=d,vt=!1;if(D){st=f.get(_t),st===void 0&&(st=[],f.set(_t,st));const it=D.textures;if(st.length!==it.length||st[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,lt=it.length;Z<lt;Z++)st[Z]=i.COLOR_ATTACHMENT0+Z;st.length=it.length,vt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,vt=!0);vt&&i.drawBuffers(st)}function Zt(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const ae={[pi]:i.FUNC_ADD,[uu]:i.FUNC_SUBTRACT,[fu]:i.FUNC_REVERSE_SUBTRACT};ae[du]=i.MIN,ae[pu]=i.MAX;const Ht={[mu]:i.ZERO,[gu]:i.ONE,[_u]:i.SRC_COLOR,[Ba]:i.SRC_ALPHA,[bu]:i.SRC_ALPHA_SATURATE,[Su]:i.DST_COLOR,[vu]:i.DST_ALPHA,[xu]:i.ONE_MINUS_SRC_COLOR,[ka]:i.ONE_MINUS_SRC_ALPHA,[yu]:i.ONE_MINUS_DST_COLOR,[Mu]:i.ONE_MINUS_DST_ALPHA,[Eu]:i.CONSTANT_COLOR,[Tu]:i.ONE_MINUS_CONSTANT_COLOR,[wu]:i.CONSTANT_ALPHA,[Au]:i.ONE_MINUS_CONSTANT_ALPHA};function K(D,_t,st,vt,it,Z,lt,Vt,de,te){if(D===kn){v===!0&&(St(i.BLEND),v=!1);return}if(v===!1&&(Q(i.BLEND),v=!0),D!==hu){if(D!==m||te!==_){if((p!==pi||S!==pi)&&(i.blendEquation(i.FUNC_ADD),p=pi,S=pi),te)switch(D){case vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Te:i.blendFunc(i.ONE,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Al:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Kt("WebGLState: Invalid blending: ",D);break}else switch(D){case vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Te:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case wl:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Al:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",D);break}y=null,E=null,A=null,R=null,P.set(0,0,0),L=0,m=D,_=te}return}it=it||_t,Z=Z||st,lt=lt||vt,(_t!==p||it!==S)&&(i.blendEquationSeparate(ae[_t],ae[it]),p=_t,S=it),(st!==y||vt!==E||Z!==A||lt!==R)&&(i.blendFuncSeparate(Ht[st],Ht[vt],Ht[Z],Ht[lt]),y=st,E=vt,A=Z,R=lt),(Vt.equals(P)===!1||de!==L)&&(i.blendColor(Vt.r,Vt.g,Vt.b,de),P.copy(Vt),L=de),m=D,_=!1}function nt(D,_t){D.side===qe?St(i.CULL_FACE):Q(i.CULL_FACE);let st=D.side===Fe;_t&&(st=!st),j(st),D.blending===vi&&D.transparent===!1?K(kn):K(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const vt=D.stencilWrite;o.setTest(vt),vt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Pt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function j(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function mt(D){D!==lu?(Q(i.CULL_FACE),D!==w&&(D===Tl?i.cullFace(i.BACK):D===cu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),w=D}function C(D){D!==N&&(W&&i.lineWidth(D),N=D)}function Pt(D,_t,st){D?(Q(i.POLYGON_OFFSET_FILL),(F!==_t||z!==st)&&(i.polygonOffset(_t,st),F=_t,z=st)):St(i.POLYGON_OFFSET_FILL)}function xt(D){D?Q(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function Ut(D){D===void 0&&(D=i.TEXTURE0+G-1),pt!==D&&(i.activeTexture(D),pt=D)}function rt(D,_t,st){st===void 0&&(pt===null?st=i.TEXTURE0+G-1:st=pt);let vt=ot[st];vt===void 0&&(vt={type:void 0,texture:void 0},ot[st]=vt),(vt.type!==D||vt.texture!==_t)&&(pt!==st&&(i.activeTexture(st),pt=st),i.bindTexture(D,_t||Y[D]),vt.type=D,vt.texture=_t)}function T(){const D=ot[pt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(D){Kt("WebGLState:",D)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(D){Kt("WebGLState:",D)}}function X(){try{i.texSubImage2D(...arguments)}catch(D){Kt("WebGLState:",D)}}function J(){try{i.texSubImage3D(...arguments)}catch(D){Kt("WebGLState:",D)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Kt("WebGLState:",D)}}function At(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Kt("WebGLState:",D)}}function at(){try{i.texStorage2D(...arguments)}catch(D){Kt("WebGLState:",D)}}function Tt(){try{i.texStorage3D(...arguments)}catch(D){Kt("WebGLState:",D)}}function Nt(){try{i.texImage2D(...arguments)}catch(D){Kt("WebGLState:",D)}}function et(){try{i.texImage3D(...arguments)}catch(D){Kt("WebGLState:",D)}}function ut(D){Bt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Bt.copy(D))}function wt(D){se.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),se.copy(D))}function Rt(D,_t){let st=c.get(_t);st===void 0&&(st=new WeakMap,c.set(_t,st));let vt=st.get(D);vt===void 0&&(vt=i.getUniformBlockIndex(_t,D.name),st.set(D,vt))}function ct(D,_t){const vt=c.get(_t).get(D);l.get(_t)!==vt&&(i.uniformBlockBinding(_t,vt,D.__bindingPointIndex),l.set(_t,vt))}function qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},pt=null,ot={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,y=null,E=null,S=null,A=null,R=null,P=new zt(0,0,0),L=0,_=!1,M=null,w=null,N=null,F=null,z=null,Bt.set(0,0,i.canvas.width,i.canvas.height),se.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:St,bindFramebuffer:Dt,drawBuffers:bt,useProgram:Zt,setBlending:K,setMaterial:nt,setFlipSided:j,setCullFace:mt,setLineWidth:C,setPolygonOffset:Pt,setScissorTest:xt,activeTexture:Ut,bindTexture:rt,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:U,texImage2D:Nt,texImage3D:et,updateUBOMapping:Rt,uniformBlockBinding:ct,texStorage2D:at,texStorage3D:Tt,texSubImage2D:X,texSubImage3D:J,compressedTexSubImage2D:q,compressedTexSubImage3D:At,scissor:ut,viewport:wt,reset:qt}}function qg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return d?new OffscreenCanvas(T,x):Lr("canvas")}function v(T,x,U){let X=1;const J=rt(T);if((J.width>U||J.height>U)&&(X=U/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(X*J.width),At=Math.floor(X*J.height);u===void 0&&(u=g(q,At));const at=x?g(q,At):u;return at.width=q,at.height=At,at.getContext("2d").drawImage(T,0,0,q,At),kt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+At+")."),at}else return"data"in T&&kt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,x,U,X,J=!1){if(T!==null){if(i[T]!==void 0)return i[T];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=x;if(x===i.RED&&(U===i.FLOAT&&(q=i.R32F),U===i.HALF_FLOAT&&(q=i.R16F),U===i.UNSIGNED_BYTE&&(q=i.R8)),x===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.R8UI),U===i.UNSIGNED_SHORT&&(q=i.R16UI),U===i.UNSIGNED_INT&&(q=i.R32UI),U===i.BYTE&&(q=i.R8I),U===i.SHORT&&(q=i.R16I),U===i.INT&&(q=i.R32I)),x===i.RG&&(U===i.FLOAT&&(q=i.RG32F),U===i.HALF_FLOAT&&(q=i.RG16F),U===i.UNSIGNED_BYTE&&(q=i.RG8)),x===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RG8UI),U===i.UNSIGNED_SHORT&&(q=i.RG16UI),U===i.UNSIGNED_INT&&(q=i.RG32UI),U===i.BYTE&&(q=i.RG8I),U===i.SHORT&&(q=i.RG16I),U===i.INT&&(q=i.RG32I)),x===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RGB8UI),U===i.UNSIGNED_SHORT&&(q=i.RGB16UI),U===i.UNSIGNED_INT&&(q=i.RGB32UI),U===i.BYTE&&(q=i.RGB8I),U===i.SHORT&&(q=i.RGB16I),U===i.INT&&(q=i.RGB32I)),x===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),U===i.UNSIGNED_INT&&(q=i.RGBA32UI),U===i.BYTE&&(q=i.RGBA8I),U===i.SHORT&&(q=i.RGBA16I),U===i.INT&&(q=i.RGBA32I)),x===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),x===i.RGBA){const At=J?Cr:jt.getTransfer(X);U===i.FLOAT&&(q=i.RGBA32F),U===i.HALF_FLOAT&&(q=i.RGBA16F),U===i.UNSIGNED_BYTE&&(q=At===ne?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function S(T,x){let U;return T?x===null||x===Tn||x===Ls?U=i.DEPTH24_STENCIL8:x===pn?U=i.DEPTH32F_STENCIL8:x===Ps&&(U=i.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Tn||x===Ls?U=i.DEPTH_COMPONENT24:x===pn?U=i.DEPTH_COMPONENT32F:x===Ps&&(U=i.DEPTH_COMPONENT16),U}function A(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Le&&T.minFilter!==Ne?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function R(T){const x=T.target;x.removeEventListener("dispose",R),L(x),x.isVideoTexture&&h.delete(x)}function P(T){const x=T.target;x.removeEventListener("dispose",P),M(x)}function L(T){const x=n.get(T);if(x.__webglInit===void 0)return;const U=T.source,X=f.get(U);if(X){const J=X[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&_(T),Object.keys(X).length===0&&f.delete(U)}n.remove(T)}function _(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const U=T.source,X=f.get(U);delete X[x.__cacheKey],a.memory.textures--}function M(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let J=0;J<x.__webglFramebuffer[X].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[X][J]);else i.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)i.deleteFramebuffer(x.__webglFramebuffer[X]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=T.textures;for(let X=0,J=U.length;X<J;X++){const q=n.get(U[X]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(U[X])}n.remove(T)}let w=0;function N(){w=0}function F(){const T=w;return T>=s.maxTextures&&kt("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),w+=1,T}function z(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function G(T,x){const U=n.get(T);if(T.isVideoTexture&&xt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&U.__version!==T.version){const X=T.image;if(X===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(U,T,x);return}}else T.isExternalTexture&&(U.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+x)}function W(T,x){const U=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){Y(U,T,x);return}else T.isExternalTexture&&(U.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+x)}function k(T,x){const U=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){Y(U,T,x);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+x)}function $(T,x){const U=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&U.__version!==T.version){Q(U,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+x)}const pt={[Rr]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[Za]:i.MIRRORED_REPEAT},ot={[Le]:i.NEAREST,[Pu]:i.NEAREST_MIPMAP_NEAREST,[Gs]:i.NEAREST_MIPMAP_LINEAR,[Ne]:i.LINEAR,[qr]:i.LINEAR_MIPMAP_NEAREST,[_i]:i.LINEAR_MIPMAP_LINEAR},ht={[Du]:i.NEVER,[Bu]:i.ALWAYS,[Uu]:i.LESS,[el]:i.LEQUAL,[Nu]:i.EQUAL,[nl]:i.GEQUAL,[Fu]:i.GREATER,[Ou]:i.NOTEQUAL};function Gt(T,x){if(x.type===pn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ne||x.magFilter===qr||x.magFilter===Gs||x.magFilter===_i||x.minFilter===Ne||x.minFilter===qr||x.minFilter===Gs||x.minFilter===_i)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,pt[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,pt[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,pt[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ot[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ot[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ht[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Le||x.minFilter!==Gs&&x.minFilter!==_i||x.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Bt(T,x){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",R));const X=x.source;let J=f.get(X);J===void 0&&(J={},f.set(X,J));const q=z(x);if(q!==T.__cacheKey){J[q]===void 0&&(J[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),J[q].usedTimes++;const At=J[T.__cacheKey];At!==void 0&&(J[T.__cacheKey].usedTimes--,At.usedTimes===0&&_(x)),T.__cacheKey=q,T.__webglTexture=J[q].texture}return U}function se(T,x,U){return Math.floor(Math.floor(T/U)/x)}function re(T,x,U,X){const q=T.updateRanges;if(q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,U,X,x.data);else{q.sort((et,ut)=>et.start-ut.start);let At=0;for(let et=1;et<q.length;et++){const ut=q[At],wt=q[et],Rt=ut.start+ut.count,ct=se(wt.start,x.width,4),qt=se(ut.start,x.width,4);wt.start<=Rt+1&&ct===qt&&se(wt.start+wt.count-1,x.width,4)===ct?ut.count=Math.max(ut.count,wt.start+wt.count-ut.start):(++At,q[At]=wt)}q.length=At+1;const at=i.getParameter(i.UNPACK_ROW_LENGTH),Tt=i.getParameter(i.UNPACK_SKIP_PIXELS),Nt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let et=0,ut=q.length;et<ut;et++){const wt=q[et],Rt=Math.floor(wt.start/4),ct=Math.ceil(wt.count/4),qt=Rt%x.width,D=Math.floor(Rt/x.width),_t=ct,st=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,qt),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,qt,D,_t,st,U,X,x.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,at),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Tt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Nt)}}function Y(T,x,U){let X=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=i.TEXTURE_3D);const J=Bt(T,x),q=x.source;e.bindTexture(X,T.__webglTexture,i.TEXTURE0+U);const At=n.get(q);if(q.version!==At.__version||J===!0){e.activeTexture(i.TEXTURE0+U);const at=jt.getPrimaries(jt.workingColorSpace),Tt=x.colorSpace===$n?null:jt.getPrimaries(x.colorSpace),Nt=x.colorSpace===$n||at===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let et=v(x.image,!1,s.maxTextureSize);et=Ut(x,et);const ut=r.convert(x.format,x.colorSpace),wt=r.convert(x.type);let Rt=E(x.internalFormat,ut,wt,x.colorSpace,x.isVideoTexture);Gt(X,x);let ct;const qt=x.mipmaps,D=x.isVideoTexture!==!0,_t=At.__version===void 0||J===!0,st=q.dataReady,vt=A(x,et);if(x.isDepthTexture)Rt=S(x.format===xi,x.type),_t&&(D?e.texStorage2D(i.TEXTURE_2D,1,Rt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Rt,et.width,et.height,0,ut,wt,null));else if(x.isDataTexture)if(qt.length>0){D&&_t&&e.texStorage2D(i.TEXTURE_2D,vt,Rt,qt[0].width,qt[0].height);for(let it=0,Z=qt.length;it<Z;it++)ct=qt[it],D?st&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ct.width,ct.height,ut,wt,ct.data):e.texImage2D(i.TEXTURE_2D,it,Rt,ct.width,ct.height,0,ut,wt,ct.data);x.generateMipmaps=!1}else D?(_t&&e.texStorage2D(i.TEXTURE_2D,vt,Rt,et.width,et.height),st&&re(x,et,ut,wt)):e.texImage2D(i.TEXTURE_2D,0,Rt,et.width,et.height,0,ut,wt,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){D&&_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Rt,qt[0].width,qt[0].height,et.depth);for(let it=0,Z=qt.length;it<Z;it++)if(ct=qt[it],x.format!==mn)if(ut!==null)if(D){if(st)if(x.layerUpdates.size>0){const lt=lc(ct.width,ct.height,x.format,x.type);for(const Vt of x.layerUpdates){const de=ct.data.subarray(Vt*lt/ct.data.BYTES_PER_ELEMENT,(Vt+1)*lt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,Vt,ct.width,ct.height,1,ut,de)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,ct.width,ct.height,et.depth,ut,ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,Rt,ct.width,ct.height,et.depth,0,ct.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?st&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,ct.width,ct.height,et.depth,ut,wt,ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,Rt,ct.width,ct.height,et.depth,0,ut,wt,ct.data)}else{D&&_t&&e.texStorage2D(i.TEXTURE_2D,vt,Rt,qt[0].width,qt[0].height);for(let it=0,Z=qt.length;it<Z;it++)ct=qt[it],x.format!==mn?ut!==null?D?st&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,ct.width,ct.height,ut,ct.data):e.compressedTexImage2D(i.TEXTURE_2D,it,Rt,ct.width,ct.height,0,ct.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?st&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ct.width,ct.height,ut,wt,ct.data):e.texImage2D(i.TEXTURE_2D,it,Rt,ct.width,ct.height,0,ut,wt,ct.data)}else if(x.isDataArrayTexture)if(D){if(_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Rt,et.width,et.height,et.depth),st)if(x.layerUpdates.size>0){const it=lc(et.width,et.height,x.format,x.type);for(const Z of x.layerUpdates){const lt=et.data.subarray(Z*it/et.data.BYTES_PER_ELEMENT,(Z+1)*it/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,et.width,et.height,1,ut,wt,lt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ut,wt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,et.width,et.height,et.depth,0,ut,wt,et.data);else if(x.isData3DTexture)D?(_t&&e.texStorage3D(i.TEXTURE_3D,vt,Rt,et.width,et.height,et.depth),st&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ut,wt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,et.width,et.height,et.depth,0,ut,wt,et.data);else if(x.isFramebufferTexture){if(_t)if(D)e.texStorage2D(i.TEXTURE_2D,vt,Rt,et.width,et.height);else{let it=et.width,Z=et.height;for(let lt=0;lt<vt;lt++)e.texImage2D(i.TEXTURE_2D,lt,Rt,it,Z,0,ut,wt,null),it>>=1,Z>>=1}}else if(qt.length>0){if(D&&_t){const it=rt(qt[0]);e.texStorage2D(i.TEXTURE_2D,vt,Rt,it.width,it.height)}for(let it=0,Z=qt.length;it<Z;it++)ct=qt[it],D?st&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ut,wt,ct):e.texImage2D(i.TEXTURE_2D,it,Rt,ut,wt,ct);x.generateMipmaps=!1}else if(D){if(_t){const it=rt(et);e.texStorage2D(i.TEXTURE_2D,vt,Rt,it.width,it.height)}st&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,wt,et)}else e.texImage2D(i.TEXTURE_2D,0,Rt,ut,wt,et);m(x)&&p(X),At.__version=q.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Q(T,x,U){if(x.image.length!==6)return;const X=Bt(T,x),J=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+U);const q=n.get(J);if(J.version!==q.__version||X===!0){e.activeTexture(i.TEXTURE0+U);const At=jt.getPrimaries(jt.workingColorSpace),at=x.colorSpace===$n?null:jt.getPrimaries(x.colorSpace),Tt=x.colorSpace===$n||At===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Nt=x.isCompressedTexture||x.image[0].isCompressedTexture,et=x.image[0]&&x.image[0].isDataTexture,ut=[];for(let Z=0;Z<6;Z++)!Nt&&!et?ut[Z]=v(x.image[Z],!0,s.maxCubemapSize):ut[Z]=et?x.image[Z].image:x.image[Z],ut[Z]=Ut(x,ut[Z]);const wt=ut[0],Rt=r.convert(x.format,x.colorSpace),ct=r.convert(x.type),qt=E(x.internalFormat,Rt,ct,x.colorSpace),D=x.isVideoTexture!==!0,_t=q.__version===void 0||X===!0,st=J.dataReady;let vt=A(x,wt);Gt(i.TEXTURE_CUBE_MAP,x);let it;if(Nt){D&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,qt,wt.width,wt.height);for(let Z=0;Z<6;Z++){it=ut[Z].mipmaps;for(let lt=0;lt<it.length;lt++){const Vt=it[lt];x.format!==mn?Rt!==null?D?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,Vt.width,Vt.height,Rt,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,qt,Vt.width,Vt.height,0,Vt.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,Vt.width,Vt.height,Rt,ct,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,qt,Vt.width,Vt.height,0,Rt,ct,Vt.data)}}}else{if(it=x.mipmaps,D&&_t){it.length>0&&vt++;const Z=rt(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,qt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(et){D?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ut[Z].width,ut[Z].height,Rt,ct,ut[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,qt,ut[Z].width,ut[Z].height,0,Rt,ct,ut[Z].data);for(let lt=0;lt<it.length;lt++){const de=it[lt].image[Z].image;D?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,de.width,de.height,Rt,ct,de.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,qt,de.width,de.height,0,Rt,ct,de.data)}}else{D?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Rt,ct,ut[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,qt,Rt,ct,ut[Z]);for(let lt=0;lt<it.length;lt++){const Vt=it[lt];D?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,Rt,ct,Vt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,qt,Rt,ct,Vt.image[Z])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),q.__version=J.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function St(T,x,U,X,J,q){const At=r.convert(U.format,U.colorSpace),at=r.convert(U.type),Tt=E(U.internalFormat,At,at,U.colorSpace),Nt=n.get(x),et=n.get(U);if(et.__renderTarget=x,!Nt.__hasExternalTextures){const ut=Math.max(1,x.width>>q),wt=Math.max(1,x.height>>q);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,q,Tt,ut,wt,x.depth,0,At,at,null):e.texImage2D(J,q,Tt,ut,wt,0,At,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Pt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,J,et.__webglTexture,0,C(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,J,et.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(T,x,U){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){const X=x.depthTexture,J=X&&X.isDepthTexture?X.type:null,q=S(x.stencilBuffer,J),At=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Pt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C(x),q,x.width,x.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,C(x),q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,T)}else{const X=x.textures;for(let J=0;J<X.length;J++){const q=X[J],At=r.convert(q.format,q.colorSpace),at=r.convert(q.type),Tt=E(q.internalFormat,At,at,q.colorSpace);Pt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C(x),Tt,x.width,x.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,C(x),Tt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(T,x,U){const X=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(x.depthTexture);if(J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X){if(J.__webglInit===void 0&&(J.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Gt(i.TEXTURE_CUBE_MAP,x.depthTexture);const Nt=r.convert(x.depthTexture.format),et=r.convert(x.depthTexture.type);let ut;x.depthTexture.format===Hn?ut=i.DEPTH_COMPONENT24:x.depthTexture.format===xi&&(ut=i.DEPTH24_STENCIL8);for(let wt=0;wt<6;wt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,ut,x.width,x.height,0,Nt,et,null)}}else G(x.depthTexture,0);const q=J.__webglTexture,At=C(x),at=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,Tt=x.depthTexture.format===xi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Hn)Pt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Tt,at,q,0,At):i.framebufferTexture2D(i.FRAMEBUFFER,Tt,at,q,0);else if(x.depthTexture.format===xi)Pt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Tt,at,q,0,At):i.framebufferTexture2D(i.FRAMEBUFFER,Tt,at,q,0);else throw new Error("Unknown depthTexture format")}function Zt(T){const x=n.get(T),U=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=X}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let X=0;X<6;X++)bt(x.__webglFramebuffer[X],T,X);else{const X=T.texture.mipmaps;X&&X.length>0?bt(x.__webglFramebuffer[0],T,0):bt(x.__webglFramebuffer,T,0)}else if(U){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=i.createRenderbuffer(),Dt(x.__webglDepthbuffer[X],T,!1);else{const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}else{const X=T.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Dt(x.__webglDepthbuffer,T,!1);else{const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(T,x,U){const X=n.get(T);x!==void 0&&St(X.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Zt(T)}function Ht(T){const x=T.texture,U=n.get(T),X=n.get(x);T.addEventListener("dispose",P);const J=T.textures,q=T.isWebGLCubeRenderTarget===!0,At=J.length>1;if(At||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=x.version,a.memory.textures++),q){U.__webglFramebuffer=[];for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[at]=[];for(let Tt=0;Tt<x.mipmaps.length;Tt++)U.__webglFramebuffer[at][Tt]=i.createFramebuffer()}else U.__webglFramebuffer[at]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let at=0;at<x.mipmaps.length;at++)U.__webglFramebuffer[at]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(At)for(let at=0,Tt=J.length;at<Tt;at++){const Nt=n.get(J[at]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Pt(T)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let at=0;at<J.length;at++){const Tt=J[at];U.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[at]);const Nt=r.convert(Tt.format,Tt.colorSpace),et=r.convert(Tt.type),ut=E(Tt.internalFormat,Nt,et,Tt.colorSpace,T.isXRRenderTarget===!0),wt=C(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,ut,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,U.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(U.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Gt(i.TEXTURE_CUBE_MAP,x);for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0)for(let Tt=0;Tt<x.mipmaps.length;Tt++)St(U.__webglFramebuffer[at][Tt],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Tt);else St(U.__webglFramebuffer[at],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let at=0,Tt=J.length;at<Tt;at++){const Nt=J[at],et=n.get(Nt);let ut=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ut=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,et.__webglTexture),Gt(ut,Nt),St(U.__webglFramebuffer,T,Nt,i.COLOR_ATTACHMENT0+at,ut,0),m(Nt)&&p(ut)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(at=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,X.__webglTexture),Gt(at,x),x.mipmaps&&x.mipmaps.length>0)for(let Tt=0;Tt<x.mipmaps.length;Tt++)St(U.__webglFramebuffer[Tt],T,x,i.COLOR_ATTACHMENT0,at,Tt);else St(U.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,at,0);m(x)&&p(at),e.unbindTexture()}T.depthBuffer&&Zt(T)}function K(T){const x=T.textures;for(let U=0,X=x.length;U<X;U++){const J=x[U];if(m(J)){const q=y(T),At=n.get(J).__webglTexture;e.bindTexture(q,At),p(q),e.unbindTexture()}}}const nt=[],j=[];function mt(T){if(T.samples>0){if(Pt(T)===!1){const x=T.textures,U=T.width,X=T.height;let J=i.COLOR_BUFFER_BIT;const q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(T),at=x.length>1;if(at)for(let Nt=0;Nt<x.length;Nt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);const Tt=T.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Nt=0;Nt<x.length;Nt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Nt]);const et=n.get(x[Nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,U,X,0,0,U,X,J,i.NEAREST),l===!0&&(nt.length=0,j.length=0,nt.push(i.COLOR_ATTACHMENT0+Nt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(nt.push(q),j.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,j)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let Nt=0;Nt<x.length;Nt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,At.__webglColorRenderbuffer[Nt]);const et=n.get(x[Nt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,et,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function C(T){return Math.min(s.maxSamples,T.samples)}function Pt(T){const x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function xt(T){const x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Ut(T,x){const U=T.colorSpace,X=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||U!==Qi&&U!==$n&&(jt.getTransfer(U)===ne?(X!==mn||J!==Qe)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",U)),x}function rt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=W,this.setTexture3D=k,this.setTextureCube=$,this.rebindTextures=ae,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Pt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Yg(i,t){function e(n,s=$n){let r;const a=jt.getTransfer(s);if(n===Qe)return i.UNSIGNED_BYTE;if(n===Jo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ph)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===fh)return i.BYTE;if(n===dh)return i.SHORT;if(n===Ps)return i.UNSIGNED_SHORT;if(n===Yo)return i.INT;if(n===Tn)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===Gn)return i.HALF_FLOAT;if(n===gh)return i.ALPHA;if(n===_h)return i.RGB;if(n===mn)return i.RGBA;if(n===Hn)return i.DEPTH_COMPONENT;if(n===xi)return i.DEPTH_STENCIL;if(n===Ko)return i.RED;if(n===jo)return i.RED_INTEGER;if(n===$i)return i.RG;if(n===$o)return i.RG_INTEGER;if(n===Qo)return i.RGBA_INTEGER;if(n===yr||n===br||n===Er||n===Tr)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ka||n===ja||n===$a||n===Qa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===to||n===eo)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===no)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===io)return r.COMPRESSED_R11_EAC;if(n===so)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ro)return r.COMPRESSED_RG11_EAC;if(n===ao)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===xo||n===vo||n===Mo||n===So)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===oo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===co)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ho)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===po)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===go)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_o)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===So)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yo||n===bo||n===Eo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===yo)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===To||n===wo||n===Ao||n===Ro)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===To)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ro)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Jg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zg=`
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

}`;class Kg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Nh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ln({vertexShader:Jg,fragmentShader:Zg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ft(new en(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jg extends ns{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Kg,p={},y=e.getContextAttributes();let E=null,S=null;const A=[],R=[],P=new tt;let L=null;const _=new $e;_.viewport=new ye;const M=new $e;M.viewport=new ye;const w=[_,M],N=new od;let F=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=A[Y];return Q===void 0&&(Q=new ma,A[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=A[Y];return Q===void 0&&(Q=new ma,A[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=A[Y];return Q===void 0&&(Q=new ma,A[Y]=Q),Q.getHandSpace()};function G(Y){const Q=R.indexOf(Y.inputSource);if(Q===-1)return;const St=A[Q];St!==void 0&&(St.update(Y.inputSource,Y.frame,c||a),St.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",k);for(let Y=0;Y<A.length;Y++){const Q=R[Y];Q!==null&&(R[Y]=null,A[Y].disconnect(Q))}F=null,z=null,m.reset();for(const Y in p)delete p[Y];t.setRenderTarget(E),d=null,f=null,u=null,s=null,S=null,re.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",W),s.addEventListener("inputsourceschange",k),y.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Dt=null,bt=null;y.depth&&(bt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=y.stencil?xi:Hn,Dt=y.stencil?Ls:Tn);const Zt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Zt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new En(f.textureWidth,f.textureHeight,{format:mn,type:Qe,depthTexture:new Ds(f.textureWidth,f.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const St={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new En(d.framebufferWidth,d.framebufferHeight,{format:mn,type:Qe,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),re.setContext(s),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(Y){for(let Q=0;Q<Y.removed.length;Q++){const St=Y.removed[Q],Dt=R.indexOf(St);Dt>=0&&(R[Dt]=null,A[Dt].disconnect(St))}for(let Q=0;Q<Y.added.length;Q++){const St=Y.added[Q];let Dt=R.indexOf(St);if(Dt===-1){for(let Zt=0;Zt<A.length;Zt++)if(Zt>=R.length){R.push(St),Dt=Zt;break}else if(R[Zt]===null){R[Zt]=St,Dt=Zt;break}if(Dt===-1)break}const bt=A[Dt];bt&&bt.connect(St)}}const $=new I,pt=new I;function ot(Y,Q,St){$.setFromMatrixPosition(Q.matrixWorld),pt.setFromMatrixPosition(St.matrixWorld);const Dt=$.distanceTo(pt),bt=Q.projectionMatrix.elements,Zt=St.projectionMatrix.elements,ae=bt[14]/(bt[10]-1),Ht=bt[14]/(bt[10]+1),K=(bt[9]+1)/bt[5],nt=(bt[9]-1)/bt[5],j=(bt[8]-1)/bt[0],mt=(Zt[8]+1)/Zt[0],C=ae*j,Pt=ae*mt,xt=Dt/(-j+mt),Ut=xt*-j;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ut),Y.translateZ(xt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),bt[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const rt=ae+xt,T=Ht+xt,x=C-Ut,U=Pt+(Dt-Ut),X=K*Ht/T*rt,J=nt*Ht/T*rt;Y.projectionMatrix.makePerspective(x,U,X,J,rt,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ht(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Q=Y.near,St=Y.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(St=m.depthFar)),N.near=M.near=_.near=Q,N.far=M.far=_.far=St,(F!==N.near||z!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),F=N.near,z=N.far),N.layers.mask=Y.layers.mask|6,_.layers.mask=N.layers.mask&3,M.layers.mask=N.layers.mask&5;const Dt=Y.parent,bt=N.cameras;ht(N,Dt);for(let Zt=0;Zt<bt.length;Zt++)ht(bt[Zt],Dt);bt.length===2?ot(N,_,M):N.projectionMatrix.copy(_.projectionMatrix),Gt(Y,N,Dt)};function Gt(Y,Q,St){St===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(St.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Po*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Y){return p[Y]};let Bt=null;function se(Y,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){const St=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let Dt=!1;St.length!==N.cameras.length&&(N.cameras.length=0,Dt=!0);for(let Ht=0;Ht<St.length;Ht++){const K=St[Ht];let nt=null;if(d!==null)nt=d.getViewport(K);else{const mt=u.getViewSubImage(f,K);nt=mt.viewport,Ht===0&&(t.setRenderTargetTextures(S,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(S))}let j=w[Ht];j===void 0&&(j=new $e,j.layers.enable(Ht),j.viewport=new ye,w[Ht]=j),j.matrix.fromArray(K.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(K.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(nt.x,nt.y,nt.width,nt.height),Ht===0&&(N.matrix.copy(j.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Dt===!0&&N.cameras.push(j)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const Ht=u.getDepthInformation(St[0]);Ht&&Ht.isValid&&Ht.texture&&m.init(Ht,s.renderState)}if(bt&&bt.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let Ht=0;Ht<St.length;Ht++){const K=St[Ht].camera;if(K){let nt=p[K];nt||(nt=new Nh,p[K]=nt);const j=u.getCameraImage(K);nt.sourceTexture=j}}}}for(let St=0;St<A.length;St++){const Dt=R[St],bt=A[St];Dt!==null&&bt!==void 0&&bt.update(Dt,Q,c||a)}Bt&&Bt(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const re=new Xh;re.setAnimationLoop(se),this.setAnimationLoop=function(Y){Bt=Y},this.dispose=function(){}}}const hi=new on,$g=new Qt;function Qg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Th(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,E,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),E=y.envMap,S=y.envMapRotation;E&&(m.envMap.value=E,hi.copy(S),hi.x*=-1,hi.y*=-1,hi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),m.envMapRotation.value.setFromMatrix4($g.makeRotationFromEuler(hi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function t_(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){const S=E.program;n.uniformBlockBinding(y,S)}function c(y,E){let S=s[y.id];S===void 0&&(g(y),S=h(y),s[y.id]=S,y.addEventListener("dispose",m));const A=E.program;n.updateUBOMapping(y,A);const R=t.render.frame;r[y.id]!==R&&(f(y),r[y.id]=R)}function h(y){const E=u();y.__bindingPointIndex=E;const S=i.createBuffer(),A=y.__size,R=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const E=s[y.id],S=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let R=0,P=S.length;R<P;R++){const L=Array.isArray(S[R])?S[R]:[S[R]];for(let _=0,M=L.length;_<M;_++){const w=L[_];if(d(w,R,_,A)===!0){const N=w.__offset,F=Array.isArray(w.value)?w.value:[w.value];let z=0;for(let G=0;G<F.length;G++){const W=F[G],k=v(W);typeof W=="number"||typeof W=="boolean"?(w.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,N+z,w.__data)):W.isMatrix3?(w.__data[0]=W.elements[0],w.__data[1]=W.elements[1],w.__data[2]=W.elements[2],w.__data[3]=0,w.__data[4]=W.elements[3],w.__data[5]=W.elements[4],w.__data[6]=W.elements[5],w.__data[7]=0,w.__data[8]=W.elements[6],w.__data[9]=W.elements[7],w.__data[10]=W.elements[8],w.__data[11]=0):(W.toArray(w.__data,z),z+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,E,S,A){const R=y.value,P=E+"_"+S;if(A[P]===void 0)return typeof R=="number"||typeof R=="boolean"?A[P]=R:A[P]=R.clone(),!0;{const L=A[P];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return A[P]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(y){const E=y.uniforms;let S=0;const A=16;for(let P=0,L=E.length;P<L;P++){const _=Array.isArray(E[P])?E[P]:[E[P]];for(let M=0,w=_.length;M<w;M++){const N=_[M],F=Array.isArray(N.value)?N.value:[N.value];for(let z=0,G=F.length;z<G;z++){const W=F[z],k=v(W),$=S%A,pt=$%k.boundary,ot=$+pt;S+=pt,ot!==0&&A-ot<k.storage&&(S+=A-ot),N.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=k.storage}}}const R=S%A;return R>0&&(S+=A-R),y.__size=S,y.__cache={},this}function v(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):kt("WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){const E=y.target;E.removeEventListener("dispose",m);const S=a.indexOf(E.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}const e_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let xn=null;function n_(){return xn===null&&(xn=new Ih(e_,16,16,$i,Gn),xn.name="DFG_LUT",xn.minFilter=Ne,xn.magFilter=Ne,xn.wrapS=On,xn.wrapT=On,xn.generateMipmaps=!1,xn.needsUpdate=!0),xn}class i_{constructor(t={}){const{canvas:e=ku(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Qe}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const v=d,m=new Set([Qo,$o,jo]),p=new Set([Qe,Tn,Ps,Ls,Jo,Zo]),y=new Uint32Array(4),E=new Int32Array(4);let S=null,A=null;const R=[],P=[];let L=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let M=!1;this._outputColorSpace=Xe;let w=0,N=0,F=null,z=-1,G=null;const W=new ye,k=new ye;let $=null;const pt=new zt(0);let ot=0,ht=e.width,Gt=e.height,Bt=1,se=null,re=null;const Y=new ye(0,0,ht,Gt),Q=new ye(0,0,ht,Gt);let St=!1;const Dt=new rl;let bt=!1,Zt=!1;const ae=new Qt,Ht=new I,K=new ye,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function mt(){return F===null?Bt:1}let C=n;function Pt(b,O){return e.getContext(b,O)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wo}`),e.addEventListener("webglcontextlost",Vt,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",te,!1),C===null){const O="webgl2";if(C=Pt(O,b),C===null)throw Pt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Kt("WebGLRenderer: "+b.message),b}let xt,Ut,rt,T,x,U,X,J,q,At,at,Tt,Nt,et,ut,wt,Rt,ct,qt,D,_t,st,vt,it;function Z(){xt=new n0(C),xt.init(),st=new Yg(C,xt),Ut=new Ym(C,xt,t,st),rt=new Xg(C,xt),Ut.reversedDepthBuffer&&f&&rt.buffers.depth.setReversed(!0),T=new r0(C),x=new Pg,U=new qg(C,xt,rt,x,Ut,st,T),X=new Zm(_),J=new e0(_),q=new cd(C),vt=new Xm(C,q),At=new i0(C,q,T,vt),at=new o0(C,At,q,T),qt=new a0(C,Ut,U),wt=new Jm(x),Tt=new Cg(_,X,J,xt,Ut,vt,wt),Nt=new Qg(_,x),et=new Ig,ut=new Bg(xt),ct=new Wm(_,X,J,rt,at,g,l),Rt=new Hg(_,at,Ut),it=new t_(C,T,Ut,rt),D=new qm(C,xt,T),_t=new s0(C,xt,T),T.programs=Tt.programs,_.capabilities=Ut,_.extensions=xt,_.properties=x,_.renderLists=et,_.shadowMap=Rt,_.state=rt,_.info=T}Z(),v!==Qe&&(L=new c0(v,e.width,e.height,s,r));const lt=new jg(_,C);this.xr=lt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const b=xt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=xt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Bt},this.setPixelRatio=function(b){b!==void 0&&(Bt=b,this.setSize(ht,Gt,!1))},this.getSize=function(b){return b.set(ht,Gt)},this.setSize=function(b,O,H=!0){if(lt.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}ht=b,Gt=O,e.width=Math.floor(b*Bt),e.height=Math.floor(O*Bt),H===!0&&(e.style.width=b+"px",e.style.height=O+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(ht*Bt,Gt*Bt).floor()},this.setDrawingBufferSize=function(b,O,H){ht=b,Gt=O,Bt=H,e.width=Math.floor(b*H),e.height=Math.floor(O*H),this.setViewport(0,0,b,O)},this.setEffects=function(b){if(v===Qe){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let O=0;O<b.length;O++)if(b[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(W)},this.getViewport=function(b){return b.copy(Y)},this.setViewport=function(b,O,H,V){b.isVector4?Y.set(b.x,b.y,b.z,b.w):Y.set(b,O,H,V),rt.viewport(W.copy(Y).multiplyScalar(Bt).round())},this.getScissor=function(b){return b.copy(Q)},this.setScissor=function(b,O,H,V){b.isVector4?Q.set(b.x,b.y,b.z,b.w):Q.set(b,O,H,V),rt.scissor(k.copy(Q).multiplyScalar(Bt).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(b){rt.setScissorTest(St=b)},this.setOpaqueSort=function(b){se=b},this.setTransparentSort=function(b){re=b},this.getClearColor=function(b){return b.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,H=!0){let V=0;if(b){let B=!1;if(F!==null){const ft=F.texture.format;B=m.has(ft)}if(B){const ft=F.texture.type,yt=p.has(ft),gt=ct.getClearColor(),Et=ct.getClearAlpha(),Ct=gt.r,Ot=gt.g,Lt=gt.b;yt?(y[0]=Ct,y[1]=Ot,y[2]=Lt,y[3]=Et,C.clearBufferuiv(C.COLOR,0,y)):(E[0]=Ct,E[1]=Ot,E[2]=Lt,E[3]=Et,C.clearBufferiv(C.COLOR,0,E))}else V|=C.COLOR_BUFFER_BIT}O&&(V|=C.DEPTH_BUFFER_BIT),H&&(V|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Vt,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",te,!1),ct.dispose(),et.dispose(),ut.dispose(),x.dispose(),X.dispose(),J.dispose(),at.dispose(),vt.dispose(),it.dispose(),Tt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",xl),lt.removeEventListener("sessionend",vl),ii.stop()};function Vt(b){b.preventDefault(),Ir("WebGLRenderer: Context Lost."),M=!0}function de(){Ir("WebGLRenderer: Context Restored."),M=!1;const b=T.autoReset,O=Rt.enabled,H=Rt.autoUpdate,V=Rt.needsUpdate,B=Rt.type;Z(),T.autoReset=b,Rt.enabled=O,Rt.autoUpdate=H,Rt.needsUpdate=V,Rt.type=B}function te(b){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function _n(b){const O=b.target;O.removeEventListener("dispose",_n),An(O)}function An(b){tu(b),x.remove(b)}function tu(b){const O=x.get(b).programs;O!==void 0&&(O.forEach(function(H){Tt.releaseProgram(H)}),b.isShaderMaterial&&Tt.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,H,V,B,ft){O===null&&(O=nt);const yt=B.isMesh&&B.matrixWorld.determinant()<0,gt=nu(b,O,H,V,B);rt.setMaterial(V,yt);let Et=H.index,Ct=1;if(V.wireframe===!0){if(Et=At.getWireframeAttribute(H),Et===void 0)return;Ct=2}const Ot=H.drawRange,Lt=H.attributes.position;let Yt=Ot.start*Ct,oe=(Ot.start+Ot.count)*Ct;ft!==null&&(Yt=Math.max(Yt,ft.start*Ct),oe=Math.min(oe,(ft.start+ft.count)*Ct)),Et!==null?(Yt=Math.max(Yt,0),oe=Math.min(oe,Et.count)):Lt!=null&&(Yt=Math.max(Yt,0),oe=Math.min(oe,Lt.count));const xe=oe-Yt;if(xe<0||xe===1/0)return;vt.setup(B,V,gt,H,Et);let ve,ce=D;if(Et!==null&&(ve=q.get(Et),ce=_t,ce.setIndex(ve)),B.isMesh)V.wireframe===!0?(rt.setLineWidth(V.wireframeLinewidth*mt()),ce.setMode(C.LINES)):ce.setMode(C.TRIANGLES);else if(B.isLine){let It=V.linewidth;It===void 0&&(It=1),rt.setLineWidth(It*mt()),B.isLineSegments?ce.setMode(C.LINES):B.isLineLoop?ce.setMode(C.LINE_LOOP):ce.setMode(C.LINE_STRIP)}else B.isPoints?ce.setMode(C.POINTS):B.isSprite&&ce.setMode(C.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Is("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ce.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))ce.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const It=B._multiDrawStarts,ee=B._multiDrawCounts,$t=B._multiDrawCount,Je=Et?q.get(Et).bytesPerElement:1,Ei=x.get(V).currentProgram.getUniforms();for(let Ze=0;Ze<$t;Ze++)Ei.setValue(C,"_gl_DrawID",Ze),ce.render(It[Ze]/Je,ee[Ze])}else if(B.isInstancedMesh)ce.renderInstances(Yt,xe,B.count);else if(H.isInstancedBufferGeometry){const It=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ee=Math.min(H.instanceCount,It);ce.renderInstances(Yt,xe,ee)}else ce.render(Yt,xe)};function _l(b,O,H){b.transparent===!0&&b.side===qe&&b.forceSinglePass===!1?(b.side=Fe,b.needsUpdate=!0,Vs(b,O,H),b.side=ti,b.needsUpdate=!0,Vs(b,O,H),b.side=qe):Vs(b,O,H)}this.compile=function(b,O,H=null){H===null&&(H=b),A=ut.get(H),A.init(O),P.push(A),H.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(A.pushLight(B),B.castShadow&&A.pushShadow(B))}),b!==H&&b.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(A.pushLight(B),B.castShadow&&A.pushShadow(B))}),A.setupLights();const V=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ft=B.material;if(ft)if(Array.isArray(ft))for(let yt=0;yt<ft.length;yt++){const gt=ft[yt];_l(gt,H,B),V.add(gt)}else _l(ft,H,B),V.add(ft)}),A=P.pop(),V},this.compileAsync=function(b,O,H=null){const V=this.compile(b,O,H);return new Promise(B=>{function ft(){if(V.forEach(function(yt){x.get(yt).currentProgram.isReady()&&V.delete(yt)}),V.size===0){B(b);return}setTimeout(ft,10)}xt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Hr=null;function eu(b){Hr&&Hr(b)}function xl(){ii.stop()}function vl(){ii.start()}const ii=new Xh;ii.setAnimationLoop(eu),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(b){Hr=b,lt.setAnimationLoop(b),b===null?ii.stop():ii.start()},lt.addEventListener("sessionstart",xl),lt.addEventListener("sessionend",vl),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const H=lt.enabled===!0&&lt.isPresenting===!0,V=L!==null&&(F===null||H)&&L.begin(_,F);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(O),O=lt.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,O,F),A=ut.get(b,P.length),A.init(O),P.push(A),ae.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Dt.setFromProjectionMatrix(ae,Sn,O.reversedDepth),Zt=this.localClippingEnabled,bt=wt.init(this.clippingPlanes,Zt),S=et.get(b,R.length),S.init(),R.push(S),lt.enabled===!0&&lt.isPresenting===!0){const yt=_.xr.getDepthSensingMesh();yt!==null&&Wr(yt,O,-1/0,_.sortObjects)}Wr(b,O,0,_.sortObjects),S.finish(),_.sortObjects===!0&&S.sort(se,re),j=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,j&&ct.addToRenderList(S,b),this.info.render.frame++,bt===!0&&wt.beginShadows();const B=A.state.shadowsArray;if(Rt.render(B,b,O),bt===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&L.hasRenderPass())===!1){const yt=S.opaque,gt=S.transmissive;if(A.setupLights(),O.isArrayCamera){const Et=O.cameras;if(gt.length>0)for(let Ct=0,Ot=Et.length;Ct<Ot;Ct++){const Lt=Et[Ct];Sl(yt,gt,b,Lt)}j&&ct.render(b);for(let Ct=0,Ot=Et.length;Ct<Ot;Ct++){const Lt=Et[Ct];Ml(S,b,Lt,Lt.viewport)}}else gt.length>0&&Sl(yt,gt,b,O),j&&ct.render(b),Ml(S,b,O)}F!==null&&N===0&&(U.updateMultisampleRenderTarget(F),U.updateRenderTargetMipmap(F)),V&&L.end(_),b.isScene===!0&&b.onAfterRender(_,b,O),vt.resetDefaultState(),z=-1,G=null,P.pop(),P.length>0?(A=P[P.length-1],bt===!0&&wt.setGlobalState(_.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?S=R[R.length-1]:S=null};function Wr(b,O,H,V){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)A.pushLight(b),b.castShadow&&A.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Dt.intersectsSprite(b)){V&&K.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ae);const yt=at.update(b),gt=b.material;gt.visible&&S.push(b,yt,gt,H,K.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Dt.intersectsObject(b))){const yt=at.update(b),gt=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),K.copy(b.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),K.copy(yt.boundingSphere.center)),K.applyMatrix4(b.matrixWorld).applyMatrix4(ae)),Array.isArray(gt)){const Et=yt.groups;for(let Ct=0,Ot=Et.length;Ct<Ot;Ct++){const Lt=Et[Ct],Yt=gt[Lt.materialIndex];Yt&&Yt.visible&&S.push(b,yt,Yt,H,K.z,Lt)}}else gt.visible&&S.push(b,yt,gt,H,K.z,null)}}const ft=b.children;for(let yt=0,gt=ft.length;yt<gt;yt++)Wr(ft[yt],O,H,V)}function Ml(b,O,H,V){const{opaque:B,transmissive:ft,transparent:yt}=b;A.setupLightsView(H),bt===!0&&wt.setGlobalState(_.clippingPlanes,H),V&&rt.viewport(W.copy(V)),B.length>0&&zs(B,O,H),ft.length>0&&zs(ft,O,H),yt.length>0&&zs(yt,O,H),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function Sl(b,O,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[V.id]===void 0){const Yt=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[V.id]=new En(1,1,{generateMipmaps:!0,type:Yt?Gn:Qe,minFilter:_i,samples:Ut.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace})}const ft=A.state.transmissionRenderTarget[V.id],yt=V.viewport||W;ft.setSize(yt.z*_.transmissionResolutionScale,yt.w*_.transmissionResolutionScale);const gt=_.getRenderTarget(),Et=_.getActiveCubeFace(),Ct=_.getActiveMipmapLevel();_.setRenderTarget(ft),_.getClearColor(pt),ot=_.getClearAlpha(),ot<1&&_.setClearColor(16777215,.5),_.clear(),j&&ct.render(H);const Ot=_.toneMapping;_.toneMapping=bn;const Lt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),A.setupLightsView(V),bt===!0&&wt.setGlobalState(_.clippingPlanes,V),zs(b,H,V),U.updateMultisampleRenderTarget(ft),U.updateRenderTargetMipmap(ft),xt.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let oe=0,xe=O.length;oe<xe;oe++){const ve=O[oe],{object:ce,geometry:It,material:ee,group:$t}=ve;if(ee.side===qe&&ce.layers.test(V.layers)){const Je=ee.side;ee.side=Fe,ee.needsUpdate=!0,yl(ce,H,V,It,ee,$t),ee.side=Je,ee.needsUpdate=!0,Yt=!0}}Yt===!0&&(U.updateMultisampleRenderTarget(ft),U.updateRenderTargetMipmap(ft))}_.setRenderTarget(gt,Et,Ct),_.setClearColor(pt,ot),Lt!==void 0&&(V.viewport=Lt),_.toneMapping=Ot}function zs(b,O,H){const V=O.isScene===!0?O.overrideMaterial:null;for(let B=0,ft=b.length;B<ft;B++){const yt=b[B],{object:gt,geometry:Et,group:Ct}=yt;let Ot=yt.material;Ot.allowOverride===!0&&V!==null&&(Ot=V),gt.layers.test(H.layers)&&yl(gt,O,H,Et,Ot,Ct)}}function yl(b,O,H,V,B,ft){b.onBeforeRender(_,O,H,V,B,ft),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(_,O,H,V,b,ft),B.transparent===!0&&B.side===qe&&B.forceSinglePass===!1?(B.side=Fe,B.needsUpdate=!0,_.renderBufferDirect(H,O,V,B,b,ft),B.side=ti,B.needsUpdate=!0,_.renderBufferDirect(H,O,V,B,b,ft),B.side=qe):_.renderBufferDirect(H,O,V,B,b,ft),b.onAfterRender(_,O,H,V,B,ft)}function Vs(b,O,H){O.isScene!==!0&&(O=nt);const V=x.get(b),B=A.state.lights,ft=A.state.shadowsArray,yt=B.state.version,gt=Tt.getParameters(b,B.state,ft,O,H),Et=Tt.getProgramCacheKey(gt);let Ct=V.programs;V.environment=b.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(b.isMeshStandardMaterial?J:X).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Ct===void 0&&(b.addEventListener("dispose",_n),Ct=new Map,V.programs=Ct);let Ot=Ct.get(Et);if(Ot!==void 0){if(V.currentProgram===Ot&&V.lightsStateVersion===yt)return El(b,gt),Ot}else gt.uniforms=Tt.getUniforms(b),b.onBeforeCompile(gt,_),Ot=Tt.acquireProgram(gt,Et),Ct.set(Et,Ot),V.uniforms=gt.uniforms;const Lt=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Lt.clippingPlanes=wt.uniform),El(b,gt),V.needsLights=su(b),V.lightsStateVersion=yt,V.needsLights&&(Lt.ambientLightColor.value=B.state.ambient,Lt.lightProbe.value=B.state.probe,Lt.directionalLights.value=B.state.directional,Lt.directionalLightShadows.value=B.state.directionalShadow,Lt.spotLights.value=B.state.spot,Lt.spotLightShadows.value=B.state.spotShadow,Lt.rectAreaLights.value=B.state.rectArea,Lt.ltc_1.value=B.state.rectAreaLTC1,Lt.ltc_2.value=B.state.rectAreaLTC2,Lt.pointLights.value=B.state.point,Lt.pointLightShadows.value=B.state.pointShadow,Lt.hemisphereLights.value=B.state.hemi,Lt.directionalShadowMap.value=B.state.directionalShadowMap,Lt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Lt.spotShadowMap.value=B.state.spotShadowMap,Lt.spotLightMatrix.value=B.state.spotLightMatrix,Lt.spotLightMap.value=B.state.spotLightMap,Lt.pointShadowMap.value=B.state.pointShadowMap,Lt.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=Ot,V.uniformsList=null,Ot}function bl(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=wr.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function El(b,O){const H=x.get(b);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function nu(b,O,H,V,B){O.isScene!==!0&&(O=nt),U.resetTextureUnits();const ft=O.fog,yt=V.isMeshStandardMaterial?O.environment:null,gt=F===null?_.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Qi,Et=(V.isMeshStandardMaterial?J:X).get(V.envMap||yt),Ct=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ot=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Lt=!!H.morphAttributes.position,Yt=!!H.morphAttributes.normal,oe=!!H.morphAttributes.color;let xe=bn;V.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(xe=_.toneMapping);const ve=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ce=ve!==void 0?ve.length:0,It=x.get(V),ee=A.state.lights;if(bt===!0&&(Zt===!0||b!==G)){const Be=b===G&&V.id===z;wt.setState(V,b,Be)}let $t=!1;V.version===It.__version?(It.needsLights&&It.lightsStateVersion!==ee.state.version||It.outputColorSpace!==gt||B.isBatchedMesh&&It.batching===!1||!B.isBatchedMesh&&It.batching===!0||B.isBatchedMesh&&It.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&It.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&It.instancing===!1||!B.isInstancedMesh&&It.instancing===!0||B.isSkinnedMesh&&It.skinning===!1||!B.isSkinnedMesh&&It.skinning===!0||B.isInstancedMesh&&It.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&It.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&It.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&It.instancingMorph===!1&&B.morphTexture!==null||It.envMap!==Et||V.fog===!0&&It.fog!==ft||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==wt.numPlanes||It.numIntersection!==wt.numIntersection)||It.vertexAlphas!==Ct||It.vertexTangents!==Ot||It.morphTargets!==Lt||It.morphNormals!==Yt||It.morphColors!==oe||It.toneMapping!==xe||It.morphTargetsCount!==ce)&&($t=!0):($t=!0,It.__version=V.version);let Je=It.currentProgram;$t===!0&&(Je=Vs(V,O,B));let Ei=!1,Ze=!1,as=!1;const pe=Je.getUniforms(),He=It.uniforms;if(rt.useProgram(Je.program)&&(Ei=!0,Ze=!0,as=!0),V.id!==z&&(z=V.id,Ze=!0),Ei||G!==b){rt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),pe.setValue(C,"projectionMatrix",b.projectionMatrix),pe.setValue(C,"viewMatrix",b.matrixWorldInverse);const We=pe.map.cameraPosition;We!==void 0&&We.setValue(C,Ht.setFromMatrixPosition(b.matrixWorld)),Ut.logarithmicDepthBuffer&&pe.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&pe.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),G!==b&&(G=b,Ze=!0,as=!0)}if(It.needsLights&&(ee.state.directionalShadowMap.length>0&&pe.setValue(C,"directionalShadowMap",ee.state.directionalShadowMap,U),ee.state.spotShadowMap.length>0&&pe.setValue(C,"spotShadowMap",ee.state.spotShadowMap,U),ee.state.pointShadowMap.length>0&&pe.setValue(C,"pointShadowMap",ee.state.pointShadowMap,U)),B.isSkinnedMesh){pe.setOptional(C,B,"bindMatrix"),pe.setOptional(C,B,"bindMatrixInverse");const Be=B.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),pe.setValue(C,"boneTexture",Be.boneTexture,U))}B.isBatchedMesh&&(pe.setOptional(C,B,"batchingTexture"),pe.setValue(C,"batchingTexture",B._matricesTexture,U),pe.setOptional(C,B,"batchingIdTexture"),pe.setValue(C,"batchingIdTexture",B._indirectTexture,U),pe.setOptional(C,B,"batchingColorTexture"),B._colorsTexture!==null&&pe.setValue(C,"batchingColorTexture",B._colorsTexture,U));const nn=H.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&qt.update(B,H,Je),(Ze||It.receiveShadow!==B.receiveShadow)&&(It.receiveShadow=B.receiveShadow,pe.setValue(C,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(He.envMap.value=Et,He.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(He.envMapIntensity.value=O.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=n_()),Ze&&(pe.setValue(C,"toneMappingExposure",_.toneMappingExposure),It.needsLights&&iu(He,as),ft&&V.fog===!0&&Nt.refreshFogUniforms(He,ft),Nt.refreshMaterialUniforms(He,V,Bt,Gt,A.state.transmissionRenderTarget[b.id]),wr.upload(C,bl(It),He,U)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(wr.upload(C,bl(It),He,U),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&pe.setValue(C,"center",B.center),pe.setValue(C,"modelViewMatrix",B.modelViewMatrix),pe.setValue(C,"normalMatrix",B.normalMatrix),pe.setValue(C,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Be=V.uniformsGroups;for(let We=0,Xr=Be.length;We<Xr;We++){const si=Be[We];it.update(si,Je),it.bind(si,Je)}}return Je}function iu(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function su(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(b,O,H){const V=x.get(b);V.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),x.get(b.texture).__webglTexture=O,x.get(b.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:H,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){const H=x.get(b);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0};const ru=C.createFramebuffer();this.setRenderTarget=function(b,O=0,H=0){F=b,w=O,N=H;let V=null,B=!1,ft=!1;if(b){const gt=x.get(b);if(gt.__useDefaultFramebuffer!==void 0){rt.bindFramebuffer(C.FRAMEBUFFER,gt.__webglFramebuffer),W.copy(b.viewport),k.copy(b.scissor),$=b.scissorTest,rt.viewport(W),rt.scissor(k),rt.setScissorTest($),z=-1;return}else if(gt.__webglFramebuffer===void 0)U.setupRenderTarget(b);else if(gt.__hasExternalTextures)U.rebindTextures(b,x.get(b.texture).__webglTexture,x.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ot=b.depthTexture;if(gt.__boundDepthTexture!==Ot){if(Ot!==null&&x.has(Ot)&&(b.width!==Ot.image.width||b.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(b)}}const Et=b.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(ft=!0);const Ct=x.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ct[O])?V=Ct[O][H]:V=Ct[O],B=!0):b.samples>0&&U.useMultisampledRTT(b)===!1?V=x.get(b).__webglMultisampledFramebuffer:Array.isArray(Ct)?V=Ct[H]:V=Ct,W.copy(b.viewport),k.copy(b.scissor),$=b.scissorTest}else W.copy(Y).multiplyScalar(Bt).floor(),k.copy(Q).multiplyScalar(Bt).floor(),$=St;if(H!==0&&(V=ru),rt.bindFramebuffer(C.FRAMEBUFFER,V)&&rt.drawBuffers(b,V),rt.viewport(W),rt.scissor(k),rt.setScissorTest($),B){const gt=x.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+O,gt.__webglTexture,H)}else if(ft){const gt=O;for(let Et=0;Et<b.textures.length;Et++){const Ct=x.get(b.textures[Et]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Et,Ct.__webglTexture,H,gt)}}else if(b!==null&&H!==0){const gt=x.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,gt.__webglTexture,H)}z=-1},this.readRenderTargetPixels=function(b,O,H,V,B,ft,yt,gt=0){if(!(b&&b.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=x.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&yt!==void 0&&(Et=Et[yt]),Et){rt.bindFramebuffer(C.FRAMEBUFFER,Et);try{const Ct=b.textures[gt],Ot=Ct.format,Lt=Ct.type;if(!Ut.textureFormatReadable(Ot)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(Lt)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-V&&H>=0&&H<=b.height-B&&(b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+gt),C.readPixels(O,H,V,B,st.convert(Ot),st.convert(Lt),ft))}finally{const Ct=F!==null?x.get(F).__webglFramebuffer:null;rt.bindFramebuffer(C.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(b,O,H,V,B,ft,yt,gt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=x.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&yt!==void 0&&(Et=Et[yt]),Et)if(O>=0&&O<=b.width-V&&H>=0&&H<=b.height-B){rt.bindFramebuffer(C.FRAMEBUFFER,Et);const Ct=b.textures[gt],Ot=Ct.format,Lt=Ct.type;if(!Ut.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Yt),C.bufferData(C.PIXEL_PACK_BUFFER,ft.byteLength,C.STREAM_READ),b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+gt),C.readPixels(O,H,V,B,st.convert(Ot),st.convert(Lt),0);const oe=F!==null?x.get(F).__webglFramebuffer:null;rt.bindFramebuffer(C.FRAMEBUFFER,oe);const xe=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await zu(C,xe,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Yt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ft),C.deleteBuffer(Yt),C.deleteSync(xe),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,H=0){const V=Math.pow(2,-H),B=Math.floor(b.image.width*V),ft=Math.floor(b.image.height*V),yt=O!==null?O.x:0,gt=O!==null?O.y:0;U.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,H,0,0,yt,gt,B,ft),rt.unbindTexture()};const au=C.createFramebuffer(),ou=C.createFramebuffer();this.copyTextureToTexture=function(b,O,H=null,V=null,B=0,ft=null){ft===null&&(B!==0?(Is("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ft=B,B=0):ft=0);let yt,gt,Et,Ct,Ot,Lt,Yt,oe,xe;const ve=b.isCompressedTexture?b.mipmaps[ft]:b.image;if(H!==null)yt=H.max.x-H.min.x,gt=H.max.y-H.min.y,Et=H.isBox3?H.max.z-H.min.z:1,Ct=H.min.x,Ot=H.min.y,Lt=H.isBox3?H.min.z:0;else{const nn=Math.pow(2,-B);yt=Math.floor(ve.width*nn),gt=Math.floor(ve.height*nn),b.isDataArrayTexture?Et=ve.depth:b.isData3DTexture?Et=Math.floor(ve.depth*nn):Et=1,Ct=0,Ot=0,Lt=0}V!==null?(Yt=V.x,oe=V.y,xe=V.z):(Yt=0,oe=0,xe=0);const ce=st.convert(O.format),It=st.convert(O.type);let ee;O.isData3DTexture?(U.setTexture3D(O,0),ee=C.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(U.setTexture2DArray(O,0),ee=C.TEXTURE_2D_ARRAY):(U.setTexture2D(O,0),ee=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);const $t=C.getParameter(C.UNPACK_ROW_LENGTH),Je=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ei=C.getParameter(C.UNPACK_SKIP_PIXELS),Ze=C.getParameter(C.UNPACK_SKIP_ROWS),as=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ve.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ve.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ct),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ot),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Lt);const pe=b.isDataArrayTexture||b.isData3DTexture,He=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){const nn=x.get(b),Be=x.get(O),We=x.get(nn.__renderTarget),Xr=x.get(Be.__renderTarget);rt.bindFramebuffer(C.READ_FRAMEBUFFER,We.__webglFramebuffer),rt.bindFramebuffer(C.DRAW_FRAMEBUFFER,Xr.__webglFramebuffer);for(let si=0;si<Et;si++)pe&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,x.get(b).__webglTexture,B,Lt+si),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,x.get(O).__webglTexture,ft,xe+si)),C.blitFramebuffer(Ct,Ot,yt,gt,Yt,oe,yt,gt,C.DEPTH_BUFFER_BIT,C.NEAREST);rt.bindFramebuffer(C.READ_FRAMEBUFFER,null),rt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(B!==0||b.isRenderTargetTexture||x.has(b)){const nn=x.get(b),Be=x.get(O);rt.bindFramebuffer(C.READ_FRAMEBUFFER,au),rt.bindFramebuffer(C.DRAW_FRAMEBUFFER,ou);for(let We=0;We<Et;We++)pe?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,nn.__webglTexture,B,Lt+We):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,nn.__webglTexture,B),He?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Be.__webglTexture,ft,xe+We):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Be.__webglTexture,ft),B!==0?C.blitFramebuffer(Ct,Ot,yt,gt,Yt,oe,yt,gt,C.COLOR_BUFFER_BIT,C.NEAREST):He?C.copyTexSubImage3D(ee,ft,Yt,oe,xe+We,Ct,Ot,yt,gt):C.copyTexSubImage2D(ee,ft,Yt,oe,Ct,Ot,yt,gt);rt.bindFramebuffer(C.READ_FRAMEBUFFER,null),rt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else He?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(ee,ft,Yt,oe,xe,yt,gt,Et,ce,It,ve.data):O.isCompressedArrayTexture?C.compressedTexSubImage3D(ee,ft,Yt,oe,xe,yt,gt,Et,ce,ve.data):C.texSubImage3D(ee,ft,Yt,oe,xe,yt,gt,Et,ce,It,ve):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ft,Yt,oe,yt,gt,ce,It,ve.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ft,Yt,oe,ve.width,ve.height,ce,ve.data):C.texSubImage2D(C.TEXTURE_2D,ft,Yt,oe,yt,gt,ce,It,ve);C.pixelStorei(C.UNPACK_ROW_LENGTH,$t),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Je),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ei),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ze),C.pixelStorei(C.UNPACK_SKIP_IMAGES,as),ft===0&&O.generateMipmaps&&C.generateMipmap(ee),rt.unbindTexture()},this.initRenderTarget=function(b){x.get(b).__webglFramebuffer===void 0&&U.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?U.setTextureCube(b,0):b.isData3DTexture?U.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?U.setTexture2DArray(b,0):U.setTexture2D(b,0),rt.unbindTexture()},this.resetState=function(){w=0,N=0,F=null,rt.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}const s_={},Mt={STEP:1/120,G:24,CRUISE:24,BOOST:35,DRIVE_ACC:14,CAR_L:4.4,CAR_H:1.24,CAR_W:1.95,RIDE:.62,JUMP_V:13,JUMP_MAX_SLOPE:.7,JUMP_COOLDOWN:.16,FUEL_MAX:1.5,FUEL_REFILL:.75,FLOAT_G:.42,SINK_G:.15,RETRO_ACC:50,HOVER_V:-2.6,ROLL_W:15,ROLL_A:110,PITCH_W:10.5,PITCH_A:64,LEVEL_W:5,LEVEL_A:24,ROLL_TOL:.55,PITCH_TOL:.62,HARD_V:25,GOOD_V:15,SOFT_V:8,PERFECT_ANG:.16},ks={sedan:{w:1.9,h:1.45,l:4.7},suv:{w:1.95,h:1.68,l:4.8},pickup:{w:2.15,h:1.9,l:5.7},semi:{w:2.6,h:3.85,l:7},bus:{w:2.55,h:3.2,l:11}},Ve={trick:{kickflip:100,heelflip:100,backflip:200,frontflip:200},perVehicle:40,gap:120,vert:250,pickup:50,perfectMult:2,hardMult:.5},Bo=7,r_=30,a_=!s_;class o_ extends Ph{constructor(){super(),this.name="RoomEnvironment";const t=new we;t.deleteAttribute("uv");const e=new Ue({side:Fe}),n=new Ue,s=new rd(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Ft(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new df(t,n,6),o=new Ae;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new Ft(t,Wi(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Ft(t,Wi(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new Ft(t,Wi(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new Ft(t,Wi(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const f=new Ft(t,Wi(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const d=new Ft(t,Wi(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Wi(i){return new td({color:0,emissive:16777215,emissiveIntensity:i})}function ko(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new _e;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Lc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let v=0;v<a[h].length;++v)d.push(a[h][v][f]);const g=Lc(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Lc(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new fe(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){const v=h.getComponent(f,g);o.setComponent(f+u,g,v)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}const Yi=Math.PI*2,tn=(i,t,e)=>i<t?t:i>e?e:i,Ge=(i,t,e)=>i+(t-i)*e,rn=(i,t,e,n)=>Ge(i,t,1-Math.exp(-e*n)),me=(i=0,t=1)=>i+Math.random()*(t-i),Ur=i=>i-Yi*Math.round(i/Yi),Ic=(i,t,e)=>{const n=tn((e-i)/(t-i),0,1);return n*n*(3-2*n)};function l_(i){let t=i>>>0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function zo(i,t){let e=0,n=i.length-2;if(n<=0||t<=i[0])return 0;if(t>=i[n])return n;for(;e<n;){const s=e+n+1>>1;i[s]<=t?e=s:n=s-1}return e}const ue=10,c_=.25;class h_{constructor(){this.xs=[],this.ys=[],this.ang=[],this.kap=[],this.tag=[],this.s=[]}get x0(){return this.xs[0]}get x1(){return this.xs[this.xs.length-1]}get len(){return this.s[this.s.length-1]}add(t,e,n,s,r){const a=this.xs.length;if(a&&Math.abs(t-this.xs[a-1])<1e-6&&Math.abs(e-this.ys[a-1])<1e-6){this.ang[a-1]=n,this.kap[a-1]=s,this.tag[a-1]=r;return}this.s.push(a?this.s[a-1]+Math.hypot(t-this.xs[a-1],e-this.ys[a-1]):0),this.xs.push(t),this.ys.push(e),this.ang.push(n),this.kap.push(s),this.tag.push(r)}_at(t,e,n){return n.x=Ge(this.xs[t],this.xs[t+1],e),n.y=Ge(this.ys[t],this.ys[t+1],e),n.ang=Ge(this.ang[t],this.ang[t+1],e),n.kap=this.kap[t],n.tag=this.tag[t],n.s=Ge(this.s[t],this.s[t+1],e),n}sampleS(t,e={}){const n=zo(this.s,t);return this._at(n,tn((t-this.s[n])/(this.s[n+1]-this.s[n]||1),0,1),e)}sampleX(t,e={}){const n=zo(this.xs,t);return this._at(n,tn((t-this.xs[n])/(this.xs[n+1]-this.xs[n]||1),0,1),e)}}class u_{constructor(){this.sections=[],this.gaps=[],this.vehicles=[],this.rows=[],this.boosts=[],this.ramps=[],this.pickups=[],this.pieces=[],this.marks=[],this.sec=null,this.x=0,this.y=0,this.a=0,this.startX=0,this.finishX=0}begin(t,e=0){this.sec=new h_,this.sections.push(this.sec),this.x=t,this.y=e,this.a=0,this.sec.add(t,e,0,0,"road")}line(t,e="road"){const n=Math.max(1,Math.ceil(t/(this.a===0?4:1))),s=Math.cos(this.a),r=Math.sin(this.a),a=this.x,o=this.y;this.sec.add(a,o,this.a,0,e);for(let l=1;l<=n;l++){const c=t*l/n;this.sec.add(a+s*c,o+r*c,this.a,0,e)}this.x=a+s*t,this.y=o+r*t}arc(t,e,n){const s=this.a,r=e>s?1:-1,a=r/t,o=this.x-r*t*Math.sin(s),l=this.y+r*t*Math.cos(s),c=Math.max(2,Math.ceil(t*Math.abs(e-s)/c_));this.sec.add(this.x,this.y,s,a,n);let h=this.x,u=this.y;for(let f=1;f<=c;f++){const d=s+(e-s)*f/c;h=o+r*t*Math.sin(d),u=l-r*t*Math.cos(d),this.sec.add(h,u,d,a,n)}this.x=h,this.y=u,this.a=e}hump(t,e){const n=Math.ceil(e/.3),s=this.x;for(let r=0;r<=n;r++){const a=e*r/n,o=2*Math.PI/e,l=t*(1-Math.cos(o*a))/2,c=t*o*Math.sin(o*a)/2,h=t*o*o*Math.cos(o*a)/2;this.sec.add(s+a,l,Math.atan(c),h/Math.pow(1+c*c,1.5),"road")}this.x=s+e,this.y=0,this.a=0}flat(t){t>.01&&this.line(t,"road")}lip(t,e,n={}){const s={kind:t,sec:this.sections.length-1,x0:e,x1:this.x,h:this.y,a:this.a,...n};return this.ramps.push(s),s}placeVehicles(t,e,n){const s=this.x;let r=s;t.forEach((a,o)=>{const l=ks[a];this.vehicles.push({type:a,x0:r,x1:r+l.w,top:l.h,color:n?n[o%n.length]:o}),r+=l.w+e}),r-=e,this.flat(r-s),this.rows.push({x0:s,x1:r,n:t.length})}piece(t){const e=this.x;switch(t.t){case"row":this.placeVehicles(t.v,t.sp??.55,t.c);break;case"kicker":{const n=t.h/(1-Math.cos(t.a));this.arc(n,t.a,"ramp"),this.lip("kicker",e,{R:n}),this.begin(this.x,0),t.v?.length&&(this.flat(t.d??3),this.placeVehicles(t.v,t.sp??.55,t.c));break}case"gap":{let n=0;if(t.k){const r=t.k.h/(1-Math.cos(t.k.a));this.arc(r,t.k.a,"ramp"),this.lip("kicker",e,{R:r}),n=t.k.h}const s=this.x;this.gaps.push({x0:s,x1:s+t.len,lipH:n}),this.begin(s+t.len,0);break}case"vert":{this.boosts.push({x0:e-20,x1:e-13}),this.arc(t.R,t.a,"ramp"),t.st&&this.line(t.st,"ramp"),this.lip("vert",e,{R:t.R}),this.begin(this.x,0);break}case"rollers":for(let n=0;n<t.n;n++)this.hump(t.h,t.l);break;default:throw new Error("unknown piece "+t.t)}return{x0:e,x1:this.x}}finalize(){this.sec=null,this.x0=this.sections[0].x0,this.x1=this.sections[this.sections.length-1].x1,this.vehicles.sort((t,e)=>t.x0-e.x0),this._sx=this.sections.map(t=>t.x0).concat(1/0)}sectionAt(t){const e=zo(this._sx,t),n=this.sections[e];return t>=n.x0-1e-6&&t<=n.x1+1e-6?e:-1}ground(t,e={}){const n=this.sectionAt(t);return n<0?null:(this.sections[n].sampleX(t,e),e.si=n,e)}inGap(t){for(const e of this.gaps)if(t>e.x0&&t<e.x1)return e;return null}vehicleFrom(t){const e=this.vehicles;let n=0,s=e.length;for(;n<s;){const r=n+s>>1;e[r].x1<t?n=r+1:s=r}return n}}const gi=-30;function Dc(i){const t=new u_;return t.begin(-90,0),t.flat(90),t.startX=0,i.pieces.forEach((e,n)=>{t.flat(e.run??40);const s=t.piece(e);t.pieces.push({...e,idx:n,x0:s.x0,x1:s.x1})}),t.flat(i.tail??40),t.finishX=t.x,t.flat(200),t.finalize(),t}const f_={sedan:["#1f3f93","#9d1b22","#e7eaee","#1d2027","#c9a66b"],suv:["#e7eaee","#1f3f93","#5a5f68","#9d1b22","#c9a66b"],pickup:["#a7adb5","#8e949c","#b4bac2","#1d2027","#a7adb5"],semi:["#eef0f3","#eef0f3","#d8dce1","#eef0f3","#1d2027"],bus:["#f2b705","#f2b705","#e9a400","#f2b705","#f2b705"]},Kn="#0a0d12",d_="#0c0c0e",p_="#8b9098",Ra="#15171b";function Uc(i,t){const e=i.index?i.toNonIndexed():i;e.deleteAttribute("uv");const n=new zt(t),s=e.attributes.position.count,r=new Float32Array(s*3);for(let a=0;a<s;a++)r[a*3]=n.r,r[a*3+1]=n.g,r[a*3+2]=n.b;return e.setAttribute("color",new fe(r,3)),e}function Dn(i,t,e=.05,n=!1){const s=new ss;if(n)s.moveTo(i[0][0],i[0][1]),s.splineThru(i.slice(1).map(([a,o])=>new tt(a,o)));else{s.moveTo(i[0][0],i[0][1]);for(let a=1;a<i.length;a++)s.lineTo(i[a][0],i[a][1])}s.closePath();const r=new Os(s,{depth:t,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelSegments:1,curveSegments:6});return r.translate(0,0,-t/2),r}const be=(i,t,e,n,s,r)=>new we(i,t,e).translate(n,s,r);function vs(i,t,e,n){for(const s of t)for(const r of[-n,n])i.push([new ei(e,e,.3,14).rotateX(Math.PI/2).translate(s,e,r),d_]),i.push([new ei(e*.58,e*.58,.32,10).rotateX(Math.PI/2).translate(s,e,r),p_])}function m_(i,t){const e=[],n=[];switch(i){case"sedan":{e.push([Dn([[-2.34,.3],[-2.38,.78],[-2.1,.96],[-1.55,1],[1.05,1.02],[2.25,.82],[2.38,.55],[2.33,.3]],1.74),t]),e.push([Dn([[-1.62,.98],[-.95,1.4],[.35,1.43],[1.12,1]],1.56,.04),Kn]),vs(e,[-1.45,1.45],.34,.8),n.push([be(.04,.06,1.5,-2.4,.86,0),"#ff2236"],[be(.04,.05,.42,2.37,.72,.6),"#ffffff"],[be(.04,.05,.42,2.37,.72,-.6),"#ffffff"]);break}case"suv":{e.push([Dn([[-2.38,.34],[-2.42,.95],[-2.2,1.06],[1.15,1.08],[2.3,.9],[2.42,.6],[2.38,.34]],1.78),t]),e.push([Dn([[-2.22,1.04],[-1.75,1.62],[.5,1.66],[1.2,1.06]],1.6,.04),Kn]),vs(e,[-1.5,1.5],.37,.82),n.push([be(.04,.07,1.55,-2.45,.98,0),"#ff2236"],[be(.04,.05,.45,2.41,.78,.6),"#ffffff"],[be(.04,.05,.45,2.41,.78,-.6),"#ffffff"]);break}case"pickup":{e.push([Dn([[-2.85,.4],[-2.85,1.18],[-.25,1.9],[2.85,1.1],[2.85,.4]],1.96,.02),t]),e.push([Dn([[-.75,1.68],[-.27,1.9],[1.75,1.39],[1.25,1.35]],2.02,.01),Kn]),e.push([be(5.8,.18,2.04,0,.42,0),Ra]),vs(e,[-1.9,1.9],.42,.9),n.push([be(.03,.05,1.96,2.87,1.06,0),"#ffffff"],[be(.03,.05,1.96,-2.87,1.14,0),"#ff2236"]);break}case"semi":{e.push([Dn([[0,.6],[0,3.55],[.3,3.85],[2.7,3.8],[3.15,2.95],[3.4,1.55],[3.5,.6]],2.38),t]),e.push([Dn([[2.72,3.7],[3.17,2.92],[3.3,2.25],[3.13,2.25],[2.6,3.62]],2.2,.03),Kn]),e.push([be(1,1.05,.02,1.9,2.95,1.25),Kn],[be(1,1.05,.02,1.9,2.95,-1.25),Kn]),e.push([be(3.6,.5,1.9,-1.8,.95,0),Ra],[be(.5,1.6,2,-.35,1.5,0),"#2b2f36"]),vs(e,[-2.6,-1.4,2.4],.52,1),n.push([be(.03,.06,2.2,3.51,.9,0),"#ffffff"],[be(1.8,.05,.03,1.5,3.83,0),"#ffffff"]);break}case"bus":{e.push([Dn([[-5.5,.45],[-5.5,3.08],[-5.3,3.2],[5.25,3.2],[5.5,2.95],[5.5,.45]],2.36,.04),t]);for(const s of[-1.24,1.24])e.push([be(9.6,.8,.03,-.3,2.3,s),Kn],[be(10.9,.12,.03,0,1.45,s),Ra]);e.push([be(.03,1.1,2.1,5.53,2.35,0),Kn]),vs(e,[-3.6,3.7],.52,1),n.push([be(.03,.12,.3,5.53,.9,.85),"#ffffff"],[be(.03,.12,.3,5.53,.9,-.85),"#ffffff"],[be(.03,.12,2,-5.53,1,0),"#ff2236"]);break}default:throw new Error(i)}return{body:e,lights:n}}let Ca,Pa;function g_(){return Ca||(Ca=new Ue({vertexColors:!0,metalness:.45,roughness:.38,envMapIntensity:1.1})),Pa||(Pa=new Se({vertexColors:!0,toneMapped:!1})),{bodyMat:Ca,lightMat:Pa}}function __(i){const{bodyMat:t,lightMat:e}=g_(),n=[],s=[],r=new Qt,a=new Qt;i.vehicles.forEach((l,c)=>{const h=ks[l.type],u=f_[l.type][(l.color??c)%5],{body:f,lights:d}=m_(l.type,u);a.makeRotationY(-Math.PI/2),r.makeTranslation((l.x0+l.x1)/2,0,0).multiply(a);for(const[g,v]of f)n.push(Uc(g.applyMatrix4(r),v));for(const[g,v]of d)s.push(Uc(g.applyMatrix4(r),v));l.len=h.l});const o=new Ye;if(n.length){const l=new Ft(ko(n),t);l.castShadow=!0,l.receiveShadow=!0,o.add(l),o.add(new Ft(ko(s),e))}return n.concat(s).forEach(l=>l.dispose()),o}let Kh=4;const x_=i=>{Kh=i};function cn(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function hn(i,{repeat:t=!1,srgb:e=!0}={}){const n=new _f(i);return e&&(n.colorSpace=Xe),t&&(n.wrapS=n.wrapT=Rr),n.anisotropy=Kh,n}function Vr(i,t,e,n,s,r=9e3,a=2){i.fillStyle=n,i.fillRect(0,0,t,e);for(let o=0;o<r;o++){const l=Math.random();i.fillStyle=l<.5?`rgba(0,0,0,${s*Math.random()})`:`rgba(255,255,255,${s*.6*Math.random()})`,i.fillRect(Math.random()*t,Math.random()*e,a*Math.random()+.5,a*Math.random()+.5)}}const Nc={},gn=(i,t)=>Nc[i]||(Nc[i]=t()),v_=()=>gn("asphalt",()=>{const[i,t]=cn(256,512);Vr(t,256,512,"#23262d",.22,14e3);const e=t.createLinearGradient(0,0,256,0);return e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(.5,"rgba(255,255,255,0.05)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,256,512),t.fillStyle="rgba(240,240,240,0.92)",t.fillRect(124,0,8,256),t.fillRect(9,0,5,512),t.fillRect(242,0,5,512),hn(i,{repeat:!0})}),M_=()=>gn("concrete",()=>{const[i,t]=cn(256,256);Vr(t,256,256,"#a9adb3",.18,9e3);for(let e=0;e<256;e+=64)t.fillStyle="rgba(0,0,0,0.12)",t.fillRect(0,e,256,2);return t.fillStyle="#f4f4f4",t.fillRect(124,0,7,256),t.fillStyle="#e8303e",t.fillRect(0,0,9,256),t.fillRect(247,0,9,256),hn(i,{repeat:!0})}),S_=()=>gn("side",()=>{const[i,t]=cn(256,256);Vr(t,256,256,"#7d8289",.2,6e3),t.strokeStyle="rgba(0,0,0,0.25)",t.lineWidth=2;for(let e=0;e<256;e+=64)t.beginPath(),t.moveTo(e,0),t.lineTo(e,256),t.stroke();return hn(i,{repeat:!0})}),y_=()=>gn("ground",()=>{const[i,t]=cn(256,256);return Vr(t,256,256,"#121419",.25,9e3),hn(i,{repeat:!0})}),yn=()=>gn("soft",()=>{const[i,t]=cn(128,128),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.55)"),e.addColorStop(.7,"rgba(255,255,255,0.12)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),hn(i,{srgb:!1})}),b_=()=>gn("puff",()=>{const[i,t]=cn(128,128);for(let n=0;n<18;n++){const s=64+(Math.random()-.5)*50,r=64+(Math.random()-.5)*50,a=18+Math.random()*26,o=t.createRadialGradient(s,r,0,s,r,a);o.addColorStop(0,"rgba(255,255,255,0.32)"),o.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=o,t.fillRect(0,0,128,128)}t.globalCompositeOperation="destination-in";const e=t.createRadialGradient(64,64,20,64,64,64);return e.addColorStop(0,"rgba(0,0,0,1)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),hn(i,{srgb:!1})}),Fc=()=>gn("strip",()=>{const[i,t]=cn(64,4),e=t.createLinearGradient(0,0,64,0);return e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.5,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,4),hn(i,{srgb:!1})}),Oc=()=>gn("chev",()=>{const[i,t]=cn(256,512);t.clearRect(0,0,256,512),t.strokeStyle="rgba(120,225,255,1)",t.lineWidth=22,t.lineJoin="round",t.lineCap="round";for(let e=0;e<3;e++){const n=120+e*120;t.globalAlpha=.35+e*.3,t.beginPath(),t.moveTo(40,n-70),t.lineTo(128,n),t.lineTo(216,n-70),t.stroke()}return t.globalAlpha=1,t.fillStyle="rgba(160,236,255,1)",t.fillRect(0,470,256,42),hn(i,{srgb:!1})}),E_=()=>gn("boost",()=>{const[i,t]=cn(256,512);t.fillStyle="rgba(0,0,0,0)",t.clearRect(0,0,256,512),t.strokeStyle="#ffe36b",t.lineWidth=26,t.lineJoin="miter";for(let e=0;e<4;e++){const n=90+e*120;t.globalAlpha=.5+e*.16,t.beginPath(),t.moveTo(30,n-80),t.lineTo(128,n),t.lineTo(226,n-80),t.stroke()}return hn(i,{srgb:!1})}),T_=()=>gn("checker",()=>{const[i,t]=cn(256,64);for(let e=0;e<16;e++)for(let n=0;n<4;n++)t.fillStyle=(e+n)%2?"#111":"#f2f2f2",t.fillRect(e*16,n*16,16,16);return hn(i,{repeat:!0})});function w_(i,{color:t="#fff",bg:e=null,font:n='900 120px "Russo One", sans-serif',w:s=1024,h:r=192}={}){const[a,o]=cn(s,r);return e&&(o.fillStyle=e,o.fillRect(0,0,s,r)),o.font=n,o.fillStyle=t,o.textAlign="center",o.textBaseline="middle",o.fillText(i,s/2,r/2+6),hn(a)}const Bc=()=>gn("jet",()=>{const[i,t]=cn(64,256),e=t.createLinearGradient(0,0,0,256);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.15,"rgba(255,255,255,0.85)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,256);const n=t.createLinearGradient(0,0,64,0);return n.addColorStop(0,"rgba(0,0,0,1)"),n.addColorStop(.5,"rgba(0,0,0,0)"),n.addColorStop(1,"rgba(0,0,0,1)"),t.globalCompositeOperation="destination-out",t.fillStyle=n,t.fillRect(0,0,64,256),hn(i,{srgb:!1})}),kc="#ff2135";class A_{constructor(t){const e=this.scene=new Ph;e.background=new zt("#04060b"),e.fog=new sl("#05070d",.0085);const n=new No(t);e.environment=n.fromScene(new o_,.04).texture,e.environmentIntensity=.32,n.dispose(),e.add(new id("#8ea3d6","#0b0b12",.75));const s=this.key=new oc("#e4ecff",2.4);s.position.set(30,40,18),s.castShadow=!0,s.shadow.mapSize.set(1024,1024);const r=s.shadow.camera;r.left=-22,r.right=22,r.top=22,r.bottom=-22,r.near=1,r.far=120,s.shadow.bias=-6e-4,s.shadow.normalBias=.03,e.add(s,s.target);const a=new oc("#ff4256",.45);a.position.set(-30,10,-20),e.add(a);const o=new Ft(new dl(900,24,12),new ln({side:Fe,depthWrite:!1,fog:!1,uniforms:{},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:"varying vec3 vP; void main(){ float h = clamp(vP.y, 0., 1.); vec3 c = mix(vec3(0.05,0.07,0.12), vec3(0.008,0.01,0.02), pow(h, 0.45)); gl_FragColor = vec4(c, 1.); }"}));this.sky=o,e.add(o),this.level=null,this.anim=[]}follow(t,e){this.key.position.set(t+30,e+40,18),this.key.target.position.set(t+8,e,0),this.sky.position.set(t,0,0)}clear(){this.level&&(this.scene.remove(this.level),this.level.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.userData.own&&t.material.dispose()}),this.level=null,this.anim=[])}build(t,e=0){this.clear();const n=this.level=new Ye;this.track=t;const s=R_(),r=[],a=[],o=[],l=[];for(const _ of t.sections){let M=0;for(let w=1;w<_.xs.length;w++){if(!(w===_.xs.length-1||_.tag[w]!==_.tag[M]))continue;const F=_.tag[M]==="ramp";(F?a:r).push(ui(_,M,w,-ue/2,ue/2,0,F?9:12)),F?(o.push(ui(_,M,w,ue/2-.22,ue/2-.08,.03,4)),o.push(ui(_,M,w,-ue/2+.08,-ue/2+.22,.03,4))):(o.push(ui(_,M,w,ue/2+.45,ue/2+.62,.02,4)),o.push(ui(_,M,w,-ue/2-.62,-ue/2-.45,.02,4)),l.push(ui(_,M,w,ue/2-.9,ue/2+2,.015,4)),l.push(ui(_,M,w,-ue/2-2,-ue/2+.9,.015,4))),M=w}}const c=(_,M,w)=>{if(!_.length)return null;const N=new Ft(ko(_),M);return _.forEach(F=>F.dispose()),w&&(N.receiveShadow=!0,N.castShadow=w==="cast"),n.add(N),N};c(r,s.road,!0),c(a,s.ramp,"cast"),c(o,s.led),c(l,s.ledGlow);const h=[],u=[],f=[];for(const _ of t.ramps){const M=t.sections[_.sec],w=[];for(let F=0;F<M.xs.length;F++)M.xs[F]>_.x0+.001&&w.push(new tt(M.xs[F],M.ys[F]));const N=new ss([new tt(_.x0,0),...w,new tt(_.x1,0)]);for(const F of[ue/2,-ue/2]){const z=new fl(N),G=z.attributes.uv,W=z.attributes.position;for(let k=0;k<G.count;k++)G.setXY(k,W.getX(k)/6,W.getY(k)/6);h.push(z.translate(0,0,F))}u.push(new en(ue,_.h).rotateY(Math.PI/2).translate(_.x1,_.h/2,0)),_.kind==="vert"&&C_(f,_,M)}c(h,s.side,"cast"),c(u,s.side,"cast"),c(f,s.steel,"cast");const d=[],g=[];let v=t.x0-300;const m=[...t.gaps].sort((_,M)=>_.x0-M.x0);for(const _ of m)d.push(zc(v,_.x0)),g.push(new en(600,-gi).rotateY(Math.PI/2).translate(_.x0,gi/2,0)),g.push(new en(600,-gi).rotateY(-Math.PI/2).translate(_.x1,gi/2,0)),v=_.x1;d.push(zc(v,t.x1+400)),c(d,s.ground,!0),c(g,s.pit);for(const _ of m){const M=new Ft(new we(.25,.08,600),s.led);M.position.set(_.x0-.15,.04,0);const w=M.clone();w.position.x=_.x1+.15;const N=new Ft(new en(_.x1-_.x0,600).rotateX(-Math.PI/2),s.pitGlow);N.position.set((_.x0+_.x1)/2,gi*.4,0),n.add(M,w,N)}n.add(__(t));for(const _ of t.marks){const M=La(_.x-7,_.x+.4,-ue*.42,ue*.42,.03,!0),w=new Ft(M,_.hold?s.markHold:s.mark);w.renderOrder=2,n.add(w),this.anim.push({kind:"pulse",mat:w.material})}for(const _ of t.boosts){const M=new Ft(La(_.x0,_.x1,-ue*.4,ue*.4,.03,!0),s.boost);n.add(M)}const p=t.finishX,y=new Ft(La(p-1.2,p+1.2,-ue/2,ue/2,.025),s.checker);y.receiveShadow=!0,n.add(y,Vc(p,"FINISH",s),Vc(t.startX+7,"KICKFLIP",s,!0));for(let _=t.x0+20,M=0;_<t.finishX+120;_+=46+M%3*8,M++)n.add(P_(_,(M%2?1:-1)*(22+M%3*3),s));const E=260,S=new Float32Array(E*3),A=new Float32Array(E*3),R=new zt;for(let _=0;_<E;_++){const M=Math.random()<.5?-1:1;S[_*3]=me(t.x0-200,t.x1+300),S[_*3+1]=me(.5,14)*(Math.random()<.8?1:3),S[_*3+2]=M*me(160,380),R.set(Math.random()<.3?"#ff6a4a":Math.random()<.5?"#9fc6ff":"#ffe2b0"),A.set([R.r,R.g,R.b],_*3)}const P=new _e;P.setAttribute("position",new fe(S,3)),P.setAttribute("color",new fe(A,3));const L=new Uh(P,new Dh({size:3,sizeAttenuation:!1,vertexColors:!0,map:yn(),transparent:!0,depthWrite:!1,blending:Te,fog:!1}));L.userData.own=!0,n.add(L),this.pickups=t.pickups.map(_=>{const M=_.kind==="fuel"?L_(s):I_(s);return M.position.set(_.x,_.y,0),n.add(M),M}),this.scene.add(n)}update(t,e){for(const n of this.anim)n.kind==="pulse"&&(n.mat.opacity=.55+Math.sin(t*6)*.25);this.pickups?.forEach((n,s)=>{n.visible=!e?.taken[s],n.rotation.y=t*2.2+s,n.position.y=this.track.pickups[s].y+Math.sin(t*3+s)*.15})}}let _r;function R_(){if(_r)return _r;const i=v_(),t=M_(),e=(n,s)=>new Se({map:Fc(),color:n,transparent:!0,opacity:s,blending:Te,depthWrite:!1,toneMapped:!1});return _r={road:new Ue({map:i,roughness:.78,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),ramp:new Ue({map:t,roughness:.7,metalness:.02}),side:new Ue({map:S_(),roughness:.85,side:qe,color:"#9aa0a8"}),steel:new Ue({color:"#4a5260",metalness:.8,roughness:.45}),ground:new Ue({map:y_(),roughness:.95,color:"#c4c8d2"}),pit:new Se({color:"#07080b",side:qe}),pitGlow:new Se({map:Fc(),color:"#ff1a2c",transparent:!0,opacity:.6,blending:Te,depthWrite:!1,toneMapped:!1}),led:new Se({color:kc,toneMapped:!1}),ledGlow:e(kc,.42),mark:new Se({map:Oc(),color:"#7fe0ff",transparent:!0,opacity:.8,blending:Te,depthWrite:!1,toneMapped:!1}),markHold:new Se({map:Oc(),color:"#ffa94d",transparent:!0,opacity:.8,blending:Te,depthWrite:!1,toneMapped:!1}),boost:new Se({map:E_(),color:"#ffe36b",transparent:!0,opacity:.95,blending:Te,depthWrite:!1,toneMapped:!1}),checker:new Ue({map:T_(),roughness:.6,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),pole:new Ue({color:"#2a2f38",metalness:.6,roughness:.5}),lamp:new Se({color:"#f4f8ff",toneMapped:!1}),beam:new Se({color:"#9fc0ff",transparent:!0,opacity:.022,blending:Te,depthWrite:!1,side:qe,toneMapped:!1}),halo:new Zi({map:yn(),color:"#dfe9ff",blending:Te,depthWrite:!1,transparent:!0,toneMapped:!1}),pool:new Se({map:yn(),color:"#6f86b8",transparent:!0,opacity:.28,blending:Te,depthWrite:!1,toneMapped:!1}),fuel:new Se({color:"#7fe0ff",toneMapped:!1}),star:new Ue({color:"#ffcf3f",emissive:"#ff9d00",emissiveIntensity:.9,metalness:.6,roughness:.3}),pickGlow:new Zi({map:yn(),color:"#7fe0ff",blending:Te,depthWrite:!1,transparent:!0,toneMapped:!1}),starGlow:new Zi({map:yn(),color:"#ffb52e",blending:Te,depthWrite:!1,transparent:!0,toneMapped:!1})},_r}function ui(i,t,e,n,s,r,a){const o=e-t+1,l=new Float32Array(o*6),c=new Float32Array(o*6),h=new Float32Array(o*4);for(let d=0;d<o;d++){const g=t+d,v=i.ang[g],m=-Math.sin(v),p=Math.cos(v),y=i.xs[g]+m*r,E=i.ys[g]+p*r,S=i.s[g]/a;l.set([y,E,s,y,E,n],d*6),c.set([m,p,0,m,p,0],d*6),h.set([0,S,1,S],d*4)}const u=[];for(let d=0;d<o-1;d++){const g=d*2;u.push(g,g+2,g+1,g+1,g+2,g+3)}const f=new _e;return f.setAttribute("position",new fe(l,3)),f.setAttribute("normal",new fe(c,3)),f.setAttribute("uv",new fe(h,2)),f.setIndex(u),f}function La(i,t,e,n,s,r=!1,a=1){const o=new _e,l=r?1:0,c=r?0:1;return o.setAttribute("position",new fe(new Float32Array([i,s,n,i,s,e,t,s,n,t,s,e]),3)),o.setAttribute("normal",new fe(new Float32Array([0,1,0,0,1,0,0,1,0,0,1,0]),3)),o.setAttribute("uv",new fe(new Float32Array(r?[0,l,1,l,0,c,1,c]:[0,0,a,0,0,1,a,1]),2)),o.setIndex([0,2,1,1,2,3]),o}function zc(i,t){const e=new en(t-i,600).rotateX(-Math.PI/2).translate((i+t)/2,-.04,0),n=e.attributes.uv,s=e.attributes.position;for(let r=0;r<n.count;r++)n.setXY(r,s.getX(r)/14,s.getZ(r)/14);return e}function C_(i,t,e){for(const s of[ue/2-.4,-ue/2+.4]){for(let a=t.x0+3;a<=t.x1+.01;a+=2.2){const o=e.sampleX(Math.min(a,t.x1)).y;o<.6||i.push(new we(.22,o,.22).translate(Math.min(a,t.x1)+.4,o/2,s))}const r=new we(.3,t.h,.3).translate(t.x1+1.6,t.h/2,s);i.push(r);for(let a=1.5;a<t.h;a+=2.4){i.push(new we(2,.12,.12).translate(t.x1+.6,a,s));const o=new we(2.6,.1,.1).rotateZ(.9).translate(t.x1+.6,a+1.1,s);i.push(o)}}for(let s=2;s<t.h;s+=3)i.push(new we(.14,.14,ue-.8).translate(t.x1+1.6,s,0))}function Vc(i,t,e,n=!1){const s=new Ye,r=7.5,a=ue+3;for(const h of[a/2,-a/2]){const u=new Ft(new we(.6,r,.6),e.pole);u.position.set(i,r/2,h),u.castShadow=!0;const f=new Ft(new we(.62,r,.08),e.led);f.position.set(i,r/2,h-Math.sign(h)*.3),s.add(u,f)}const o=new Ft(new we(.8,1.6,a+.6),e.pole);o.position.set(i,r,0);const l=new Se({map:w_(t,{color:"#ffffff",bg:n?"#0d1016":"#c8102e"}),toneMapped:!1});l.userData.own=!0;const c=new Ft(new en(a*.9,1.3),l);return c.rotation.y=-Math.PI/2,c.position.set(i-.42,r,0),c.userData.own=!0,s.add(o,c),s}function P_(i,t,e){const n=new Ye,s=20+Math.random()*6,r=new Ft(new ei(.25,.4,s,8),e.pole);r.position.set(i,s/2,t);const a=new Ft(new we(2.4,1.1,.4),e.lamp);a.position.set(i,s,t),a.lookAt(i,0,0);const o=new Bs(e.halo);o.scale.setScalar(9),o.position.set(i,s,t);const l=new I(i+4,0,t*.12).sub(new I(i,s,t)),c=l.length(),h=new Ft(new Br(4.5,c,20,1,!0).translate(0,-c/2,0),e.beam);h.position.set(i,s,t),h.quaternion.setFromUnitVectors(new I(0,-1,0),l.normalize());const u=new Ft(new en(26,26).rotateX(-Math.PI/2),e.pool);return u.position.set(i,.01,t*.35),n.add(r,a,o,h,u),n}function L_(i){const t=new Ye,e=new Ft(new al(.32,.6,4,10),i.fuel);e.rotation.z=.4;const n=new Bs(i.pickGlow);return n.scale.setScalar(3.2),t.add(e,n),t}function I_(i){const t=new Ye,e=new Ft(new hl(.55),i.star),n=new Bs(i.starGlow);return n.scale.setScalar(3.4),t.add(e,n),t}const D_=new zt("#7fd6ff");function U_(i,t){const e=new ss;e.moveTo(t[0][0],t[0][1]);for(let n=1;n<t.length;n++)e.lineTo(t[n][0],t[n][1]);return e.splineThru(i.map(([n,s])=>new tt(n,s))),e.closePath(),e}function Ia(i,t){const e=new Ye,n=new Br(t,i,12,1,!0).translate(0,-i/2,0),s=new Ft(n,new Se({map:Bc(),color:D_,transparent:!0,depthWrite:!1,blending:Te,side:qe,toneMapped:!1,fog:!1})),r=new Ft(n,new Se({map:Bc(),color:"#ffffff",transparent:!0,depthWrite:!1,blending:Te,side:qe,toneMapped:!1,fog:!1}));r.scale.set(.38,.55,.38);const a=new Bs(new Zi({map:yn(),color:"#bfeaff",blending:Te,depthWrite:!1,transparent:!0,toneMapped:!1,fog:!1}));return a.scale.setScalar(.9),e.add(s,r,a),e.visible=!1,e.userData={outer:s,core:r,flare:a,level:0},e}class N_{constructor(){this.root=new Ye,this.body=new Ye,this.root.add(this.body);const t=new Ue({color:"#eef1f5",metalness:.4,roughness:.22,envMapIntensity:1.4}),e=new Ue({color:"#07090d",metalness:.9,roughness:.08,envMapIntensity:1.6}),n=new Ue({color:"#111317",metalness:.3,roughness:.6}),s=U_([[-2.24,-.04],[-2.1,.13],[-1.45,.2],[.85,.2],[1.65,.05],[2.16,-.13],[2.25,-.3]],[[2.12,-.41],[-2.16,-.41]]),r=new Os(s,{depth:1.78,bevelEnabled:!0,bevelThickness:.09,bevelSize:.07,bevelSegments:3,curveSegments:10});r.translate(0,0,-.89);const a=new Ft(r,t);a.castShadow=!0;const o=new ss;o.moveTo(-1.5,.18),o.splineThru([new tt(-.95,.39),new tt(-.1,.5),new tt(.88,.2)]),o.closePath();const l=new Os(o,{depth:1.34,bevelEnabled:!0,bevelThickness:.1,bevelSize:.06,bevelSegments:3,curveSegments:10});l.translate(0,0,-.67);const c=new Ft(l,e);c.castShadow=!0;const h=new Ft(new we(3.9,.12,1.98),n);h.position.set(0,-.38,0);const u=new Se({color:"#ff1e32",toneMapped:!1}),f=new Se({color:"#ffffff",toneMapped:!1}),d=new Ft(new we(.05,.05,1.8),u);d.position.set(-2.31,0,0);const g=new Ft(new we(.3,.035,.42),f);g.position.set(2.08,-.1,.6),g.rotation.z=-.32;const v=g.clone();v.position.z=-.6,this.body.add(a,c,h,d,g,v);const m=(R,P,L,_,M)=>{const w=new Bs(new Zi({map:yn(),color:R,blending:Te,depthWrite:!1,transparent:!0,toneMapped:!1}));return w.scale.set(P,P*.55,1),w.position.set(L,_,M),this.body.add(w),w};this.tailGlow=m("#ff2a3a",2.6,-2.45,0,0),m("#dff3ff",1.1,2.25,-.1,.6),m("#dff3ff",1.1,2.25,-.1,-.6);const p=new Ft(new en(12,6),new Se({map:yn(),color:"#b9d8ff",transparent:!0,opacity:.3,blending:Te,depthWrite:!1,toneMapped:!1}));p.rotation.x=-Math.PI/2,p.position.set(7.5,-.6,0),this.pool=p,this.body.add(p),this.wheels=[];const y=new Ue({color:"#0d0d0f",roughness:.85}),E=new Ue({color:"#9aa1aa",metalness:.85,roughness:.3}),S=new ei(.33,.33,.27,22).rotateX(Math.PI/2),A=new ei(.22,.22,.285,6).rotateX(Math.PI/2);for(const R of[-1.38,1.38])for(const P of[-.87,.87]){const L=new Ye,_=new Ft(S,y);_.castShadow=!0,L.add(_,new Ft(A,E)),L.position.set(R,-.29,P),this.root.add(L),this.wheels.push(L)}this.jets={down:[],rollPos:[],rollNeg:[],pitchUp:[],pitchDn:[]};for(const R of[-1.15,1.15])for(const P of[-.55,.55]){const L=Ia(3.4,.24);L.position.set(R,-.42,P),this.body.add(L),this.jets.down.push(L)}for(const R of[1,-1])for(const P of[-.9,.9]){const L=Ia(2.4,.18);L.position.set(P,.2,R*1),L.rotation.x=Math.PI+R*.5,this.body.add(L),(R>0?this.jets.rollPos:this.jets.rollNeg).push(L)}for(const[R,P,L]of[[2,"pitchUp",0],[-2,"pitchUp",Math.PI],[2,"pitchDn",Math.PI],[-2,"pitchDn",0]]){const _=Ia(2.2,.18);_.position.set(R,0,0),_.rotation.z=L,this.body.add(_),this.jets[P].push(_)}this.spin=0,this.susp=0,this.suspV=0,this.visPitch=0,this.visRoll=0}bump(t){this.suspV-=t}setJet(t,e,n){for(const s of t){const r=s.userData;if(r.level=e>r.level?e:rn(r.level,e,18,n),s.visible=r.level>.03,!s.visible)continue;const a=r.level*me(.82,1.12);s.scale.set(.7+a*.5,a,.7+a*.5),r.flare.scale.setScalar(.5+a*.9)}}update(t,e,n={}){const s=t.mode==="ground";this.suspV+=(-this.susp*220-this.suspV*16)*e,this.susp+=this.suspV*e,this.susp<-.22&&(this.susp=-.22,this.suspV=Math.max(0,this.suspV));const r=s?0:.07;this.body.position.y=this.susp+r*.5;for(const l of this.wheels)l.position.y=-.29-r;n.snap?(this.visPitch=t.pitch,this.visRoll=t.roll):s?(this.visPitch=rn(this.visPitch,t.pitch,26,e),this.visRoll=rn(this.visRoll,0,20,e)):(this.visPitch=t.pitch,this.visRoll=t.roll),this.root.position.set(t.x,t.y,0),this.root.rotation.set(this.visRoll,0,this.visPitch,"ZYX");const a=s?t.v:Math.hypot(t.vx,t.vy)*.6;this.spin-=a*e/.33;for(const l of this.wheels)l.rotation.z=this.spin;this.pool.visible=s;const o=t.jet;this.setJet(this.jets.down,o.down,e),this.setJet(this.jets.rollPos,Math.max(0,o.roll),e),this.setJet(this.jets.rollNeg,Math.max(0,-o.roll),e),this.setJet(this.jets.pitchUp,Math.max(0,o.pitch)*.9,e),this.setJet(this.jets.pitchDn,Math.max(0,-o.pitch)*.9,e)}}class F_{constructor(t){this.cam=t,this.pos=new I(-12,5,4),this.look=new I(0,1,0),this.trauma=0,this.fovKick=0,this.mode="chase",this.orbit=0,this.side=0,this._p=new I,this._l=new I}shake(t){this.trauma=Math.min(1,this.trauma+t)}kick(t){this.fovKick=Math.max(this.fovKick,t)}snap(){this.cam.position.copy(this.pos),this.cam.lookAt(this.look)}update(t,e,n,s={}){const r=s.aspect<1,a=this._p,o=this._l,l=e.x,c=e.y;let h=4.5,u=7;if(this.mode==="orbit"){this.orbit+=t*.18;const v=r?11:9;a.set(l+Math.cos(this.orbit)*v,2.2+Math.sin(this.orbit*.7)*.6,Math.sin(this.orbit)*v),o.set(l+.6,.9,0),h=2.5}else if(this.mode==="wreck")this.orbit+=t*.25,a.set(l-9*Math.cos(this.orbit*.4),Math.max(c,0)+4,8+3*Math.sin(this.orbit*.4)),o.set(l,Math.max(.5,c),0),h=2;else if(this.mode==="side"){const v=n.ground(l),m=v?Math.max(0,v.y):0;a.set(l-1.5,Math.max(2.4,m+(c-m)*.55+2.2),15.5),o.set(l+1.2,m+(c-m)*.75+.9,0),h=6,u=9}else if(this.mode==="finish")a.set(l+9,2.4,8),o.set(l,.9,0),h=1.6;else{const v=n.ground(l),m=v?v.y:0,p=Math.max(0,c-Math.max(0,m)-.6),y=e.mode==="air",E=Math.max(Ic(2.5,12,p),e.mode==="ground"?Ic(.5,1.2,e.pitch):0);this.side=rn(this.side,E,2.2,t);const S=this.side,A=Ge(r?13:10.5,r?19:16,S),R=r?5.6:4.2,P=Ge(r?3.4:4.5,r?15:13,S),L=Math.max(0,m),_=Ge(c,L,.5*S),M=Ge(c+R,_+3.5,S);a.set(l-A,Math.max(1.6,M),P);let w=!1;for(const z of n.ramps)z.h>4&&l>z.x1&&a.x<z.x1+2&&(a.x=z.x1+2,a.z=Math.max(a.z,17),w=!0);let N=w?l+1.5:l+Ge(r?11:13,4,S),F=Ge(c+.4,_,S);y&&e.landX!=null&&!w&&(N=Ge(N,e.landX+2,.25*S)),o.set(N,F,0),y&&(h=Ge(4.5,3,S))}if(this.pos.x=rn(this.pos.x,a.x,h,t),this.pos.y=rn(this.pos.y,a.y,h,t),this.pos.z=rn(this.pos.z,a.z,h,t),(this.mode==="chase"||this.mode==="side")&&(this.pos.x=Ge(this.pos.x,a.x,tn(t*9,0,1))),this.look.x=rn(this.look.x,o.x,u*1.4,t),this.look.y=rn(this.look.y,o.y,u,t),this.look.z=rn(this.look.z,o.z,u,t),this.cam.position.copy(this.pos),this.trauma>0){const v=this.trauma*this.trauma;this.cam.position.x+=(Math.random()-.5)*v*.7,this.cam.position.y+=(Math.random()-.5)*v*.7,this.cam.position.z+=(Math.random()-.5)*v*.4,this.trauma=Math.max(0,this.trauma-t*1.6)}this.cam.lookAt(this.look);const f=r?62:54,d=tn(((e.mode==="ground"?e.v:e.vx)-24)*.45,-4,7);this.fovKick=rn(this.fovKick,0,2.5,t);const g=f+d+this.fovKick*8;Math.abs(this.cam.fov-g)>.05&&(this.cam.fov=rn(this.cam.fov,g,5,t),this.cam.updateProjectionMatrix())}}const O_=`
attribute float size;
attribute float alpha;
attribute float spin;
attribute vec3 tint;
uniform float uScale;
varying float vAlpha;
varying vec3 vTint;
varying float vSpin;
#include <fog_pars_vertex>
void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = min(size * uScale / max(0.1, -mvPosition.z), 900.0);
  vAlpha = alpha; vTint = tint; vSpin = spin;
  #include <fog_vertex>
}`,B_=`
uniform sampler2D map;
varying float vAlpha;
varying vec3 vTint;
varying float vSpin;
#include <fog_pars_fragment>
void main() {
  vec2 p = gl_PointCoord - 0.5;
  float c = cos(vSpin), s = sin(vSpin);
  p = mat2(c, -s, s, c) * p + 0.5;
  vec4 t = texture2D(map, p);
  gl_FragColor = vec4(vTint * t.rgb, t.a * vAlpha);
  if (gl_FragColor.a < 0.004) discard;
  #include <fog_fragment>
}`;class Gc{constructor(t,e,{map:n,blending:s=vi,fog:r=!0}){this.n=e,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.spin=new Float32Array(e),this.tint=new Float32Array(e*3),this.life=new Float32Array(e),this.max=new Float32Array(e),this.grow=new Float32Array(e),this.a0=new Float32Array(e),this.drag=new Float32Array(e),this.grav=new Float32Array(e),this.vspin=new Float32Array(e),this.next=0;const a=new _e;a.setAttribute("position",new fe(this.pos,3).setUsage(os)),a.setAttribute("size",new fe(this.size,1).setUsage(os)),a.setAttribute("alpha",new fe(this.alpha,1).setUsage(os)),a.setAttribute("spin",new fe(this.spin,1).setUsage(os)),a.setAttribute("tint",new fe(this.tint,3).setUsage(os)),this.mat=new ln({uniforms:wh.merge([dt.fog,{map:{value:n},uScale:{value:400}}]),vertexShader:O_,fragmentShader:B_,transparent:!0,depthWrite:!1,blending:s,fog:r}),this.mat.uniforms.map.value=n,this.points=new Uh(a,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,t.add(this.points)}spawn(t,e,n,s,r,a,o){const l=this.next;this.next=(l+1)%this.n;const c=l*3;this.pos[c]=t,this.pos[c+1]=e,this.pos[c+2]=n,this.vel[c]=s,this.vel[c+1]=r,this.vel[c+2]=a,this.size[l]=o.size,this.grow[l]=o.grow??0,this.max[l]=this.life[l]=o.life,this.a0[l]=o.alpha??1,this.drag[l]=o.drag??1.5,this.grav[l]=o.grav??0,this.spin[l]=Math.random()*6.28,this.vspin[l]=me(-.6,.6);const h=o.color;this.tint[c]=h.r,this.tint[c+1]=h.g,this.tint[c+2]=h.b}update(t){const{pos:e,vel:n,life:s,max:r,alpha:a,size:o,grow:l,a0:c,drag:h,grav:u,spin:f,vspin:d}=this;for(let v=0;v<this.n;v++){if(s[v]<=0){a[v]=0;continue}s[v]-=t;const m=v*3,p=Math.exp(-h[v]*t);n[m]*=p,n[m+1]=n[m+1]*p-u[v]*t,n[m+2]*=p,e[m]+=n[m]*t,e[m+1]+=n[m+1]*t,e[m+2]+=n[m+2]*t,e[m+1]<.05&&u[v]>0&&(e[m+1]=.05,n[m+1]*=-.3),o[v]+=l[v]*t,f[v]+=d[v]*t;const y=1-s[v]/r[v];a[v]=c[v]*Math.min(1,y*8)*(1-y)*(1-y*.3)}const g=this.points.geometry.attributes;g.position.needsUpdate=g.alpha.needsUpdate=g.size.needsUpdate=g.spin.needsUpdate=g.tint.needsUpdate=!0}clear(){this.life.fill(0),this.alpha.fill(0)}}const Hc=new zt("#dfe3ea"),k_=new zt("#f3b9c3"),z_=new zt("#bfe6ff");class V_{constructor(t){this.smokePool=new Gc(t,900,{map:b_()}),this.sparkPool=new Gc(t,400,{map:yn(),blending:Te,fog:!1}),this.tmpC=new zt}setScale(t){this.smokePool.mat.uniforms.uScale.value=t,this.sparkPool.mat.uniforms.uScale.value=t}smoke(t,e,n,s,{spread:r=2,speed:a=6,up:o=1.5,size:l=3,grow:c=3,life:h=2.4,alpha:u=.55,vx:f=0,pink:d=.25}={}){for(let g=0;g<s;g++){const v=Math.random()*Math.PI*2,m=Math.random(),p=Math.random()<d?k_:Math.random()<.15?z_:Hc;this.smokePool.spawn(t+Math.cos(v)*r*m,e+Math.random()*.5,n+Math.sin(v)*r*m,Math.cos(v)*a*(.4+m)+f,o*(.3+Math.random()),Math.sin(v)*a*(.4+m),{size:l*me(.6,1.3),grow:c*me(.6,1.4),life:h*me(.6,1.2),alpha:u*me(.6,1),drag:1.6,color:p})}}trail(t,e,n,s,r,a){this.smokePool.spawn(t,e,n,s,r,a,{size:1,grow:2.4,life:1.6,alpha:.35,drag:2.2,color:Hc})}sparks(t,e,n,s,{speed:r=12,color:a="#ffb347",life:o=.7,size:l=.35}={}){const c=this.tmpC.set(a);for(let h=0;h<s;h++){const u=Math.random()*Math.PI*2,f=me(-.2,1.2),d=r*me(.3,1);this.sparkPool.spawn(t,e,n,Math.cos(u)*d*Math.cos(f),Math.sin(f)*d+2,Math.sin(u)*d*Math.cos(f),{size:l*me(.6,1.4),life:o*me(.5,1.2),alpha:1,drag:.6,grav:18,color:c})}}confetti(t,e,n,s=160){const r=["#ff3b4f","#ffd23f","#5fd4ff","#ffffff","#8cff7a"];for(let a=0;a<s;a++){const o=this.tmpC.set(r[a%r.length]);this.sparkPool.spawn(t+me(-4,4),e,n+me(-4,4),me(-6,6),me(8,18),me(-6,6),{size:me(.25,.45),life:me(1.8,3),alpha:1,drag:1.2,grav:6,color:o})}}update(t){this.smokePool.update(t),this.sparkPool.update(t)}clear(){this.smokePool.clear(),this.sparkPool.clear()}}class G_{constructor(){this.ctx=null,this.on=!0}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.on?.8:0;const n=e.createDynamicsCompressor();this.master.connect(n).connect(e.destination);const s=e.sampleRate*2;this.noise=e.createBuffer(1,s,e.sampleRate);const r=this.noise.getChannelData(0);for(let h=0;h<s;h++)r[h]=Math.random()*2-1;this.motorGain=e.createGain(),this.motorGain.gain.value=0;const a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=1800,this.o1=e.createOscillator(),this.o1.type="sawtooth",this.o2=e.createOscillator(),this.o2.type="triangle",this.o1.connect(a),this.o2.connect(a),a.connect(this.motorGain).connect(this.master),this.o1.start(),this.o2.start(),this.jetGain=e.createGain(),this.jetGain.gain.value=0,this.jetBp=e.createBiquadFilter(),this.jetBp.type="bandpass",this.jetBp.frequency.value=1400,this.jetBp.Q.value=.7;const o=e.createBufferSource();o.buffer=this.noise,o.loop=!0,o.connect(this.jetBp).connect(this.jetGain).connect(this.master),o.start(),this.windGain=e.createGain(),this.windGain.gain.value=0;const l=e.createBiquadFilter();l.type="lowpass",l.frequency.value=500;const c=e.createBufferSource();c.buffer=this.noise,c.loop=!0,c.playbackRate.value=.7,c.connect(l).connect(this.windGain).connect(this.master),c.start()}setOn(t){this.on=t,this.master&&this.master.gain.setTargetAtTime(t?.8:0,this.ctx.currentTime,.05)}drive({speed:t=0,running:e=!1,jet:n=0,air:s=!1}){if(!this.ctx)return;const r=this.ctx.currentTime,a=70+t*9;this.o1.frequency.setTargetAtTime(a,r,.08),this.o2.frequency.setTargetAtTime(a*2.01,r,.08),this.motorGain.gain.setTargetAtTime(e?.035+Math.min(t,35)*.0016:0,r,.12),this.jetGain.gain.setTargetAtTime(n*.32,r,.03),this.jetBp.frequency.setTargetAtTime(900+n*1400,r,.05),this.windGain.gain.setTargetAtTime(s?.06+Math.min(t,35)*.002:0,r,.2)}_burst({dur:t=.3,f:e=800,q:n=1,type:s="bandpass",gain:r=.5,f2:a}={}){const o=this.ctx,l=o.currentTime,c=o.createBufferSource();c.buffer=this.noise;const h=o.createBiquadFilter();h.type=s,h.frequency.setValueAtTime(e,l),h.Q.value=n,a&&h.frequency.exponentialRampToValueAtTime(a,l+t);const u=o.createGain();u.gain.setValueAtTime(r,l),u.gain.exponentialRampToValueAtTime(.001,l+t),c.connect(h).connect(u).connect(this.master),c.start(l,Math.random()),c.stop(l+t+.05)}_tone({f:t=440,f2:e,dur:n=.15,type:s="sine",gain:r=.2,delay:a=0}={}){const o=this.ctx,l=o.currentTime+a,c=o.createOscillator();c.type=s,c.frequency.setValueAtTime(t,l),e&&c.frequency.exponentialRampToValueAtTime(e,l+n);const h=o.createGain();h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(r,l+.01),h.gain.exponentialRampToValueAtTime(1e-4,l+n),c.connect(h).connect(this.master),c.start(l),c.stop(l+n+.05)}play(t,e=1){if(!(!this.ctx||!this.on))switch(t){case"jump":this._burst({dur:.45,f:2400,f2:600,q:.6,gain:.55}),this._tone({f:90,f2:50,dur:.25,gain:.25});break;case"launch":this._burst({dur:.3,f:500,f2:200,q:.8,gain:.25});break;case"swipe":this._burst({dur:.22,f:1800,f2:3800,q:1.5,gain:.28});break;case"trick":this._tone({f:660,dur:.1,type:"triangle",gain:.18}),this._tone({f:990,dur:.14,type:"triangle",gain:.18,delay:.07});break;case"land":this._burst({dur:.35,f:260,q:.6,type:"lowpass",gain:.5*e}),this._tone({f:70,f2:40,dur:.22,gain:.35*e});break;case"perfect":[784,988,1175,1568].forEach((n,s)=>this._tone({f:n,dur:.18,type:"triangle",gain:.16,delay:s*.06}));break;case"crash":this._burst({dur:.9,f:400,q:.5,type:"lowpass",gain:.9}),this._burst({dur:.5,f:3200,q:2,gain:.35}),[180,233,311].forEach((n,s)=>this._tone({f:n,f2:n*.6,dur:.3,type:"square",gain:.06,delay:s*.05}));break;case"boost":this._burst({dur:.6,f:600,f2:3e3,q:1.2,gain:.35}),this._tone({f:220,f2:660,dur:.4,type:"sawtooth",gain:.08});break;case"pickup":this._tone({f:1046,dur:.12,type:"sine",gain:.2}),this._tone({f:1568,dur:.16,type:"sine",gain:.16,delay:.06});break;case"finish":[523,659,784,1046].forEach((n,s)=>this._tone({f:n,dur:.3,type:"triangle",gain:.2,delay:s*.1}));break;case"click":this._tone({f:520,f2:760,dur:.06,type:"triangle",gain:.12});break;case"go":this._tone({f:330,f2:990,dur:.35,type:"sawtooth",gain:.06}),this._burst({dur:.8,f:300,q:.4,type:"lowpass",gain:.4});break}}}let jh=!0;const Wc=i=>{jh=i},H_={light:10,medium:22,heavy:40,success:[20,40,30]};function Nn(i="light"){if(jh)try{navigator.vibrate?.(H_[i]||10)}catch{}}const he=i=>document.getElementById(i),xr=["home","levels","ready","crash","win","pause"];class W_{constructor(t){this.g=t,this.scr=Object.fromEntries(xr.map(n=>[n,he(`scr-${n}`)])),this.hudEl=he("hud"),this.h={level:he("hud-level"),prog:he("hud-prog"),car:he("hud-car"),score:he("hud-score"),best:he("hud-best"),fuel:he("hud-fuel"),fuelBox:document.querySelector(".fuel"),speed:he("hud-speed")},this.pops=he("pops"),this.coachEl=he("coach"),this.last={};const e=(n,s)=>he(n).addEventListener("click",r=>{r.stopPropagation(),t.sound.unlock(),t.sound.play("click"),Nn("light"),s()});e("btn-play",()=>t.play(t.currentLevel())),e("btn-levels",()=>this.showLevels()),e("btn-levels-back",()=>t.home()),e("btn-retry",()=>t.retry()),e("btn-crash-home",()=>t.home()),e("btn-next",()=>t.next()),e("btn-win-retry",()=>t.retry()),e("btn-win-home",()=>t.home()),e("btn-pause",()=>t.pause()),e("btn-resume",()=>t.resume()),e("btn-restart",()=>t.retry()),e("btn-pause-home",()=>t.home()),e("btn-sound",()=>t.toggleSound()),e("btn-vibe",()=>t.toggleVibration());for(const n of xr)n!=="ready"&&this.scr[n].addEventListener("pointerdown",s=>s.stopPropagation())}show(t){for(const e of xr)this.scr[e].hidden=e!==t;(t==="home"||t==="levels")&&this.hud(!1),t==="home"&&this.refreshHome(),t!=="ready"&&this.coach(null)}hud(t){this.hudEl.hidden=!t}refreshHome(){const t=this.g.save;he("play-level").textContent=`LEVEL ${this.g.currentLevel()}`,he("btn-sound").classList.toggle("off",!t.sfx),he("btn-vibe").classList.toggle("off",!t.vibration)}showLevels(){const t=this.g.save,e=he("level-grid");e.innerHTML="";const n=Math.max(r_,t.unlocked+8);let s=0;for(let r=1;r<=n;r++){const a=t.stars[r]||0;s+=a;const o=document.createElement("button");o.className="lvl-tile"+(r>t.unlocked?" locked":"")+(r===t.unlocked?" current":"")+(r%5===0?" boss":""),o.innerHTML=`<b>${r}</b><span class="st">${"★".repeat(a)}${"☆".repeat(r<=t.unlocked?3-a:0)}</span>`,r<=t.unlocked&&o.addEventListener("click",()=>{this.g.sound.unlock(),this.g.sound.play("click"),this.g.play(r)}),e.appendChild(o)}he("stars-total").textContent=`★ ${s}`,this.show("levels")}ready(t,e){this.show("ready"),this.hud(!0),he("intro").hidden=!e,e&&(he("intro-title").textContent=e.title,he("intro-text").textContent=e.text),this.h.level.textContent=`LEVEL ${t.number} · ${t.name.toUpperCase()}`}play(){for(const t of xr)this.scr[t].hidden=!0;this.hud(!0)}setHud({prog:t,score:e,best:n,fuel:s,speed:r}){const a=this.last;if(a.prog!==t){const l=`${(t*100).toFixed(1)}%`;this.h.prog.style.width=l,this.h.car.style.left=l,a.prog=t}a.score!==e&&(this.h.score.textContent=e.toLocaleString("en-US"),a.score=e),a.best!==n&&(this.h.best.textContent=`BEST ${n.toLocaleString("en-US")}`,a.best=n);const o=Math.round(s*100)/100;a.fuel!==o&&(this.h.fuel.style.transform=`scaleX(${o})`,this.h.fuelBox.classList.toggle("low",o<.25),a.fuel=o),a.speed!==r&&(this.h.speed.firstChild.textContent=r,a.speed=r)}pop(t,e=""){const n=document.createElement("div");for(n.className="pop "+e,n.textContent=t,this.pops.appendChild(n);this.pops.children.length>4;)this.pops.firstChild.remove();this.g.later(1.4,()=>n.remove())}clearPops(){this.pops.innerHTML=""}coach(t){this.last.coach!==t&&(this.last.coach=t,this.coachEl.hidden=!t,t&&(this.coachEl.textContent=t))}crash(t,e){he("crash-reason").textContent=t,he("crash-score").textContent=e.toLocaleString("en-US"),this.show("crash")}win({stars:t,score:e,best:n,newBest:s,stats:r,next:a}){[...he("win-stars").children].forEach((o,l)=>o.classList.toggle("on",l<t)),he("win-score").textContent=e.toLocaleString("en-US"),he("win-best").textContent=s?"NEW BEST!":`BEST ${n.toLocaleString("en-US")}`,he("win-stats").innerHTML=`<span>FLIPS <b>${r.flips}</b></span><span>BEST AIR <b>${r.air.toFixed(1)}s</b></span><span>PERFECT <b>${r.perfect}</b></span>`,he("next-level").textContent=`LEVEL ${a}`,this.show("win")}pause(){this.show("pause")}}const X_=26,Xc=110;class q_{constructor(t,{press:e,swipe:n}){this.el=t,this.onPress=e,this.onSwipe=n,this.id=null,this.down=!1,this.swiped=!1,this.t0=0,this.ax=0,this.ay=0,this.key=!1,this.enabled=!0,t.addEventListener("pointerdown",r=>{if(!(!this.enabled||this.id!==null)){this.id=r.pointerId;try{t.setPointerCapture(r.pointerId)}catch{}this.down=!0,this.swiped=!1,this.lastDir=null,this.t0=performance.now(),this.ax=r.clientX,this.ay=r.clientY,this.onPress(),r.preventDefault()}}),t.addEventListener("pointermove",r=>{if(r.pointerId!==this.id)return;const a=r.clientX-this.ax,o=r.clientY-this.ay;if(Math.hypot(a,o)<X_)return;const l=Math.abs(a)>Math.abs(o)?a>0?"right":"left":o<0?"up":"down";this.ax=r.clientX,this.ay=r.clientY,this.swiped=!0,l!==this.lastDir&&(this.lastDir=l,this.onSwipe(l))});const s=r=>{r.pointerId===this.id&&(this.id=null,this.down=!1)};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),t.addEventListener("contextmenu",r=>r.preventDefault()),window.addEventListener("keydown",r=>{if(!this.enabled||r.repeat)return;const a={ArrowLeft:"left",ArrowRight:"right",ArrowUp:"up",ArrowDown:"down",KeyA:"left",KeyD:"right",KeyW:"up",KeyS:"down"};r.code==="Space"?(this.key=!0,this.keyT0=performance.now(),this.onPress(),r.preventDefault()):a[r.code]&&(this.onSwipe(a[r.code]),r.preventDefault())}),window.addEventListener("keyup",r=>{r.code==="Space"&&(this.key=!1)})}get holding(){const t=performance.now();return this.key&&t-this.keyT0>Xc?!0:this.down&&!this.swiped&&t-this.t0>Xc}reset(){this.id=null,this.down=!1,this.key=!1,this.swiped=!1}}const Fn=Mt.CAR_L/2,Vo=Mt.CAR_H/2,qc=Mt.CAR_W/2,As=[];for(const i of[-Fn,-Fn/2,0,Fn/2,Fn])for(const t of[-Vo,Vo])for(const e of[-qc,qc])As.push(i,t,e);const vr=As.length/3,Y_=.25,J_={roll:{1:"kickflip",[-1]:"heelflip"},pitch:{1:"backflip",[-1]:"frontflip"}},Yc=["mode","si","s","v","x","y","vx","vy","pitch","roll","wp","wr","fuel","hold","cool","driving","finished","offP","offR","base","t","thrusting","retro","launchSec","boostAt","landX","landY","landAng","predK","lastLand","pressT"];class gl{constructor(t){this.T=t,this.g={},this.g2={},this.pts=new Float64Array(vr*2),this.reset()}reset(){const t=this.T;this.mode="ground",this.si=t.sectionAt(t.startX),this.s=t.sections[this.si].sampleX(t.startX,this.g).s,this.v=0,this.x=t.startX,this.y=Mt.RIDE,this.vx=0,this.vy=0,this.pitch=0,this.roll=0,this.wp=0,this.wr=0,this.fuel=Mt.FUEL_MAX,this.hold=!1,this.cool=0,this.driving=!1,this.finished=!1,this.tq=[],this.offP=0,this.offR=0,this.base=0,this.air=null,this.crash=null,this.t=0,this.thrusting=!1,this.retro=!1,this.launchSec=-1,this.boostAt=-1,this.landX=null,this.landY=0,this.landAng=0,this.predK=0,this.lastLand=null,this.taken=t.pickups.map(()=>!1),this.pressQ=!1,this.pressT=0,this.swipeQ=[],this.events=[],this.jet={down:0,roll:0,pitch:0}}snapshot(){const t={};for(const e of Yc)t[e]=this[e];return t.tq=this.tq.map(e=>({...e})),t.air=this.air?{...this.air,tricks:this.air.tricks.slice()}:null,t.taken=this.taken.slice(),t}restore(t){for(const e of Yc)this[e]=t[e];this.tq=t.tq.map(e=>({...e})),this.air=t.air?{...t.air,tricks:t.air.tricks.slice()}:null,this.taken=t.taken.slice(),this.crash=null,this.pressQ=!1,this.swipeQ=[],this.events=[]}start(){this.driving=!0}press(){this.pressQ=!0,this.pressT=Y_}swipe(t){this.swipeQ.push(t)}get grounded(){return this.mode==="ground"}get pending(){return this.tq.some(t=>!t.done)}step(t){if(this.mode==="crash")return;this.t+=t,this.cool=Math.max(0,this.cool-t),this.pressQ=this.pressT>0,this.pressT=Math.max(0,this.pressT-t);const e=this.jet;e.down=Math.max(0,e.down-t*1.8),e.roll*=.8,e.pitch*=.8,this.mode==="ground"?this._ground(t):this._air(t),this.pressQ=!1,this.mode!=="crash"&&this._pickups()}emit(t,e={}){this.events.push({type:t,t:this.t,x:this.x,y:this.y,...e})}_ground(t){const e=this.T,n=e.sections[this.si];let s=n.sampleS(this.s,this.g);if(this.pressQ&&this.driving&&!this.finished&&this.cool<=0&&Math.abs(s.ang)<Mt.JUMP_MAX_SLOPE){this.pressT=0,this._launch(s,!0);return}this.swipeQ.length=0;const r=this.finished||!this.driving?0:Mt.CRUISE;let a;if(this.v<r?a=Math.min(Mt.DRIVE_ACC,(r-this.v)*3+2):a=-(this.v-r)*(this.finished?1.4:.32),a-=Mt.G*Math.sin(s.ang),this.v+=a*t,!this.driving&&this.v<0&&(this.v=0),this.s+=this.v*t,this.s>=n.len){this.s=n.len,s=n.sampleS(this.s,this.g),this._place(s),this._launch(s,!1);return}if(this.s<0&&(this.s=0,this.v=Math.max(0,this.v)),s=n.sampleS(this.s,this.g),this._place(s),Mt.G*Math.cos(s.ang)+this.v*this.v*s.kap<0&&this.v>3||s.ang>1&&this.v<1.5){this._launch(s,!1);return}for(let h=0;h<e.boosts.length;h++){const u=e.boosts[h];this.x>u.x0&&this.x<u.x1&&this.boostAt!==h&&(this.boostAt=h,this.v=Math.max(this.v,Mt.BOOST),this.emit("boost"))}const l=e.vehicles,c=this.y-Vo;for(let h=e.vehicleFrom(this.x-Fn);h<l.length&&l[h].x0<this.x+Fn+.2;h++)if(l[h].top>c+.25){this._crash("hit",{veh:h});return}this.fuel=Math.min(Mt.FUEL_MAX,this.fuel+Mt.FUEL_REFILL*t),this.thrusting=!1,this.retro=!1,!this.finished&&this.x>=e.finishX&&(this.finished=!0,this.emit("finish"))}_place(t){const e=Math.cos(t.ang),n=Math.sin(t.ang);this.x=t.x-n*Mt.RIDE,this.y=t.y+e*Mt.RIDE,this.vx=this.v*e,this.vy=this.v*n,this.pitch=t.ang,this.roll=0,this.wp=0,this.wr=0}_launch(t,e){const n=Math.cos(t.ang),s=Math.sin(t.ang);this.vx=this.v*n,this.vy=this.v*s,this.pitch=t.ang,this.roll=0,this.wp=e?0:this.v*t.kap,this.wr=0,e&&(this.vy+=Mt.JUMP_V,this.jet.down=1),this.mode="air",this.launchSec=this.si,this.tq=[],this.offP=0,this.offR=0,this.base=t.ang,this.air={t:0,x0:this.x,maxY:this.y,jumped:e,tricks:[],fuelUsed:0,lipAng:t.ang},this.predK=0,this._predict(),this.emit(e?"jump":"launch",{ang:t.ang,v:this.v})}_air(t){const e=this.T,n=this.air;n.t+=t;for(const w of this.swipeQ){if(this.tq.filter(z=>!z.done).length>=3)break;const N=w==="left"||w==="right"?"roll":"pitch",F=w==="right"||w==="up"?1:-1;this.tq.push({axis:N,dir:F,done:!1}),this.emit("swipe",{axis:N,dir:F})}this.swipeQ.length=0;const s=this.hold&&this.fuel>0;let r=-24;this.retro=!1,s&&(this.vy>0?r=-24*Mt.FLOAT_G:this.vy>Mt.HOVER_V?r=-24*Mt.SINK_G:(r=Mt.RETRO_ACC,this.retro=!0),this.fuel=Math.max(0,this.fuel-t),n.fuelUsed+=t,this.jet.down=Math.max(this.jet.down,this.retro?1:.65)),this.thrusting=s,this.vy+=r*t,this.retro&&this.vy>Mt.HOVER_V&&(this.vy=Mt.HOVER_V),this.vx-=this.vx*.015*t,this.x+=this.vx*t,this.y+=this.vy*t,this.y>n.maxY&&(n.maxY=this.y),++this.predK>=6&&(this.predK=0,this._predict());let a=null,o=null;for(const w of this.tq)w.done||(w.axis==="roll"?a||(a=w):o||(o=w));const l=this.offR+(a?a.dir*Yi:0),c=this.base+this.offP+(o?o.dir*Yi:0),h=this.wr,u=this.wp,f=o||this.tq.some(w=>w.axis==="pitch")&&(Math.abs(this.wp)>.6||Math.abs(this.pitch-c)>.15);this.wr=Jc(this.roll,this.wr,l,Mt.ROLL_W,Mt.ROLL_A,t),this.wp=Jc(this.pitch,this.wp,c,f?Mt.PITCH_W:Mt.LEVEL_W,f?Mt.PITCH_A:Mt.LEVEL_A,t),this.roll+=this.wr*t,this.pitch+=this.wp*t;const d=(this.wr-h)/(Mt.ROLL_A*t),g=(this.wp-u)/(Mt.PITCH_A*t);this.jet.roll=Math.abs(d)>.15?tn(d,-1,1):Math.abs(this.wr)>2?Math.sign(this.wr)*.55:this.jet.roll,this.jet.pitch=Math.abs(g)>.15?tn(g,-1,1):f&&Math.abs(this.wp)>2?Math.sign(this.wp)*.55:this.jet.pitch,a&&a.dir*(this.roll-l)>-.5&&this._trickDone(a),o&&o.dir*(this.pitch-c)>-.55&&this._trickDone(o),this._bodyPoints();const v=e.vehicles,m=this.pts;for(let w=e.vehicleFrom(this.x-Fn-1);w<v.length&&v[w].x0<this.x+Fn+1;w++){const N=v[w];for(let F=0;F<vr;F++){const z=m[F*2],G=m[F*2+1];if(z>N.x0&&z<N.x1&&G<N.top){this._crash("hit",{veh:w});return}}}if(this.y<-4){this._crash("fell");return}let p=0,y=-1;for(let w=0;w<vr;w++){const N=m[w*2],F=m[w*2+1],z=e.ground(N,this.g2);if(!z||z.si===this.launchSec&&this.vy>0)continue;const G=z.y-F;G>p&&(p=G,y=w)}if(y<0)return;const E=e.ground(this.x,this.g);if(!E){this._crash(e.inGap(this.x)?"short":"wall");return}const S=Math.abs(e.ground(m[y*2],this.g2).ang)>.9;if(p>1&&S){this._crash("wall");return}const A=E.ang,R=Math.cos(A),P=Math.sin(A),L=Math.abs(Ur(this.roll)),_=Math.abs(Ur(this.pitch-A)),M=this.vx*P-this.vy*R;if(L>Mt.ROLL_TOL){this._crash("roll");return}if(_>Mt.PITCH_TOL){this._crash("pitch");return}if(M>Mt.HARD_V){this._crash("hard",{vn:M});return}this._land(E,L,_,M)}_trickDone(t){t.done=!0,t.axis==="roll"?this.offR+=t.dir*Yi:this.offP+=t.dir*Yi;const e=J_[t.axis][t.dir];this.air.tricks.push(e),this.emit("trick",{name:e,n:this.air.tricks.length})}_land(t,e,n,s){const r=this.air,a=this.tq.some(p=>!p.done);let o="good";s>Mt.GOOD_V?o="hard":e<Mt.PERFECT_ANG&&n<Mt.PERFECT_ANG*1.3&&s<Mt.SOFT_V&&!a&&(o="perfect");const l=Math.cos(t.ang),c=Math.sin(t.ang);let h=this.vx*l+this.vy*c;o==="hard"&&(h*=.8),this.mode="ground",this.si=t.si,this.s=t.s,this.v=Math.max(h,3),this.cool=Mt.JUMP_COOLDOWN,this.roll=0;const u=this.T,d=u.rows.filter(p=>p.x0>r.x0-2&&p.x1<this.x+Fn).reduce((p,y)=>p+y.n,0),g=u.gaps.filter(p=>p.x0>r.x0-3&&p.x1<this.x).length,v=u.ramps.filter(p=>p.kind==="vert"&&Math.abs(p.x1-r.x0)<3).length;this.lastLand={quality:o,vn:s,errR:e,errP:n,airTime:r.t,tricks:r.tricks.slice(),cleared:d,gaps:g,verts:v,height:r.maxY},this.emit("land",this.lastLand),this.air=null,this.tq=[],this.thrusting=!1,this.retro=!1,this.launchSec=-1;const m=u.sections[this.si];this._place(m.sampleS(this.s,this.g))}_crash(t,e={}){this.mode="crash",this.crash={reason:t,x:this.x,y:this.y,vx:this.vx,vy:this.vy,pitch:this.pitch,roll:this.roll,wp:this.wp,wr:this.wr,...e},this.emit("crash",this.crash)}_pickups(){const t=this.T.pickups;for(let e=0;e<t.length;e++){if(this.taken[e])continue;const n=t[e],s=n.x-this.x,r=n.y-this.y;s*s+r*r<2.4*2.4&&(this.taken[e]=!0,n.kind==="fuel"&&(this.fuel=Math.min(Mt.FUEL_MAX,this.fuel+.7)),this.emit("pickup",{i:e,kind:n.kind}))}}_bodyPoints(){const t=Math.cos(this.pitch),e=Math.sin(this.pitch),n=Math.cos(this.roll),s=Math.sin(this.roll),r=this.pts;for(let a=0;a<vr;a++){const o=As[a*3],l=As[a*3+1],c=As[a*3+2],h=l*n-c*s;r[a*2]=this.x+o*t-h*e,r[a*2+1]=this.y+o*e+h*t}}_predict(){let t=this.x,e=this.y,n=this.vy;const s=this.vx,r=.03,a=this.T;for(let o=0;o<200;o++){n-=Mt.G*r,t+=s*r,e+=n*r;const l=a.ground(t,this.g2);if(l&&l.si===this.launchSec&&n>0)continue;const c=l?l.y:gi;if(e-Mt.RIDE<=c){this.landX=t,this.landY=c,this.landAng=l?l.ang:0,this.base=l?l.ang:0;return}}this.landX=null}}function Jc(i,t,e,n,s,r){const a=e-i;let o=Math.sign(a)*Math.min(n,Math.sqrt(2*s*Math.abs(a)));return Math.abs(a)<.001&&(o=0),t+tn(o-t,-s*r,s*r)}function Rs(i,t,e,n=14){const s=i.T;let r=t.jumpX==null,a=!t.trick,o=0,l=!1;const c=Mt.STEP;let h=null,u=-1;for(;o<n;){!r&&i.mode==="ground"&&i.x>=t.jumpX&&(i.press(),r=!0);let f=!1;if(i.mode==="air"){if(l=!0,t.hold==="float"&&r&&i.air.t>.1&&(f=!0),t.retro&&i.vy<0){const d=s.ground(i.x,i.g2);d&&i.y-d.y<t.retro&&(f=!0)}!a&&i.air.t>(t.trickAt??.06)&&(i.swipe(t.trick),a=!0),i.y>u&&(u=i.y,h=i.x)}if(i.hold=f,i.step(c),o+=c,i.mode==="crash")return{ok:!1,reason:i.crash.reason,t:o,apexX:h,apexY:u};if(i.mode==="ground"&&i.x>e&&(l||t.jumpX==null))return{ok:!0,t:o,apexX:h,apexY:u,land:i.lastLand}}return{ok:!1,reason:"timeout",t:o,apexX:h,apexY:u}}const Zc=Mt.CAR_L/2,Kc=Mt.CAR_H/2,jc=Mt.CAR_W/2,$h=[];for(const i of[-Zc,Zc])for(const t of[-Kc,Kc])for(const e of[-jc,jc])$h.push(new I(i,t,e));const Da=new I(12/(Mt.CAR_H**2+Mt.CAR_W**2),12/(Mt.CAR_L**2+Mt.CAR_W**2),12/(Mt.CAR_L**2+Mt.CAR_H**2)),Un=new I,Xi=new I,Mr=new I,fi=new I,jn=new I,qi=new I,Ua=new Wt,$c=new Wt,Z_=new Qt,Ms=new yi,Na=new I(0,1,0);class K_{constructor(t){this.T=t,this.pos=new I,this.vel=new I,this.w=new I,this.q=new yi,this.impacts=[],this.rest=0}start(t){this.pos.set(t.x,t.y,0),this.vel.set(t.vx*.85,Math.max(t.vy,0)*.6+3,me(-3,3)),this.q.setFromEuler(new on(t.roll,0,t.pitch,"ZYX"));const e=t.reason==="hit"||t.reason==="wall"||t.reason==="short";this.w.set(t.wr+me(-4,4),me(-2.5,2.5),t.wp+(e?me(3,7):me(-3,3))),e&&(this.vel.x*=.45),this.rest=0,this.t=0}floor(t,e){const n=this.T.ground(t);let s=n?n.y:this.T.inGap(t)?gi:0;const r=this.T.vehicles;for(let a=this.T.vehicleFrom(t);a<r.length&&r[a].x0<=t;a++){const o=r[a];Math.abs(e)<ks[o.type].l/2&&(s=Math.max(s,o.top))}return s}_iinv(t,e){return e.copy(t).applyMatrix3($c),e.set(e.x*Da.x,e.y*Da.y,e.z*Da.z).applyMatrix3(Ua),e}step(t){this.t+=t,this.impacts.length=0,this.vel.y-=Mt.G*t,this.pos.addScaledVector(this.vel,t),Ms.set(this.w.x,this.w.y,this.w.z,0).multiply(this.q),this.q.x+=.5*t*Ms.x,this.q.y+=.5*t*Ms.y,this.q.z+=.5*t*Ms.z,this.q.w+=.5*t*Ms.w,this.q.normalize(),Ua.setFromMatrix4(Z_.makeRotationFromQuaternion(this.q)),$c.copy(Ua).transpose();let e=0;for(const n of $h){Un.copy(n).applyQuaternion(this.q),Xi.copy(this.pos).add(Un);const s=this.floor(Xi.x,Xi.z),r=s-Xi.y;if(r<=0)continue;if(r>1.5&&s>.5){this.vel.x>0&&(this.vel.x*=-.25);continue}e=Math.max(e,r),Mr.copy(this.w).cross(Un).add(this.vel);const a=Mr.y;if(a>=0)continue;const o=.6;jn.copy(Un).cross(Na),this._iinv(jn,qi);const l=1+qi.cross(Un).dot(Na),c=-1.28*a/l;this.vel.y+=c,jn.copy(Un).cross(Na).multiplyScalar(c),this.w.add(this._iinv(jn,qi)),fi.set(Mr.x,0,Mr.z);const h=fi.length();if(h>1e-4){fi.multiplyScalar(-1/h),jn.copy(Un).cross(fi),this._iinv(jn,qi);const u=1+qi.cross(Un).dot(fi),f=Math.min(h/u,o*c);this.vel.addScaledVector(fi,f),jn.copy(Un).cross(fi).multiplyScalar(f),this.w.add(this._iinv(jn,qi))}-a>3&&this.impacts.push({x:Xi.x,y:s,z:Xi.z,k:Math.min(1,-a/18)})}e>0&&(this.pos.y+=e*.7),this.w.multiplyScalar(Math.exp(-.35*t)),this.vel.lengthSq()<.5&&this.w.lengthSq()<.5?this.rest+=t:this.rest=0}}class Qc{constructor(t,{tricks:e=!0,soft:n=!0,prefer:s=null,floatUp:r=!1}={}){this.prefer=s,this.floatUp=r,this.plan=t.plan,this.T=t.track,this.tricks=e,this.soft=n,this.ghost=new gl(t.track),this.g={},this.k=0,this.reset()}reset(){this.jumped=!1,this.trickDone=!1,this.st={soft:this.soft,burning:!1}}holdFor(t,e,n){if(t.mode!=="air")return n.burning=!1,!1;const s=e.pol;let r=!1;if(s.hold==="float"&&t.air.t>.1&&(!this.floatUp||t.vy>0)&&(r=!0),s.retro&&t.vy<0){const a=this.T.ground(t.x,this.g);a&&t.y-a.y<s.retro&&(r=!0)}if(n.burning)return!0;if(n.soft&&t.vy<-9&&!t.pending&&t.fuel>.15){const a=this.T.ground(t.x,this.g),o=(t.vy*t.vy-Mt.HOVER_V*Mt.HOVER_V)/(2*Mt.RETRO_ACC)+.9;if(a&&t.y-Mt.RIDE-a.y<o)return n.burning=!0,!0}return r}lookahead(t,e,n,s){const r=this.ghost;r.restore(t.snapshot()),s&&r.swipe(s);const a={...n};for(let o=0;o<1200;o++){if(r.hold=this.holdFor(r,e,a),r.step(Mt.STEP),r.mode==="crash")return null;if(r.mode==="ground")return{x:r.x,fuel:r.fuel}}return null}safe(t){if(!t)return!1;const e=this.plan[this.k+1];if(!e||e.pol.jumpX==null)return!0;if(t.x>e.pol.jumpX-2)return!1;const n=(e.pol.jumpX-t.x)/Mt.CRUISE*Mt.FUEL_REFILL;return e.pol.hold!=="float"||t.fuel+n>=Mt.FUEL_MAX-.1}control(t){const e=this.T;for(;this.k<this.plan.length&&t.mode==="ground"&&t.x>e.pieces[this.plan[this.k].k].x1+3;)this.k++,this.reset();const n=this.plan[this.k];if(!n){t.hold=!1;return}const s=n.pol;if(s.jumpX!=null&&!this.jumped&&t.mode==="ground"&&t.x>=s.jumpX&&(t.press(),this.jumped=!0),t.mode==="air"&&this.tricks&&!this.trickDone&&t.air.t>.06){this.trickDone=!0;const l=(this.prefer==="right"?["right","up"]:["up","right"]).filter(c=>n.tricks.includes(c));for(const c of l)if(this.safe(this.lookahead(t,n,{soft:!1,burning:!1},c))){t.swipe(c);break}}const r=this.st.burning;let a=this.holdFor(t,n,this.st);!r&&this.st.burning&&!this.safe(this.lookahead(t,n,this.st))&&(this.st.burning=!1,this.st.soft=!1,a=this.holdFor(t,n,this.st)),t.hold=a}}const Gr=Math.PI/180,Me=(i,t={})=>({t:"row",v:i,...t}),Ar=(i,t,e=null,n={})=>({t:"kicker",h:i,a:t*Gr,v:e,...n}),Cs=(i,t=null,e={})=>({t:"gap",len:i,k:t&&{h:t[0],a:t[1]*Gr},...e}),Nr=(i,t,e=0,n={})=>({t:"vert",R:i,a:t*Gr,st:e,run:62,...n}),Go=(i,t,e,n={})=>({t:"rollers",n:i,h:t,l:e,...n}),th=[{name:"First Hop",intro:"jump",pieces:[Me(["sedan","sedan"],{run:70}),Me(["sedan","suv","sedan"]),Me(["suv","sedan","suv","sedan"])]},{name:"Kickflip",intro:"flip",pieces:[Me(["sedan","sedan","suv"],{run:60}),Me(["suv","sedan","suv","sedan"]),Me(["sedan","pickup","sedan"]),Me(["pickup","suv","pickup","suv"])]},{name:"Launch Pad",intro:"kicker",pieces:[Me(["sedan","suv"],{run:60}),Ar(1.5,22,["sedan","semi","sedan"]),Me(["suv","suv","sedan","suv"]),Ar(2.2,28,["semi","semi"],{d:5})]},{name:"Thrusters",intro:"hold",pieces:[Me(["sedan","sedan","sedan"],{run:60}),Me(["semi","semi"]),Cs(14),Me(["sedan","suv","sedan","suv","sedan","suv"])]},{name:"Rollers",intro:"rollers",pieces:[Go(3,1.5,17,{run:60}),Me(["suv","pickup","suv"]),Cs(11,[1.4,22]),Go(2,2,19),Me(["sedan","sedan","pickup","sedan"])]},{name:"The Wall",intro:"vert",pieces:[Me(["sedan","suv"],{run:60}),Nr(11,80,2),Me(["suv","sedan","suv"],{run:64})]},{name:"Showtime",boss:!0,pieces:[Ar(2,27,["bus","bus","bus","bus"],{run:60}),Me(["sedan","suv","pickup","sedan"]),Nr(12,81,3),Cs(20,[1.6,24],{run:64}),Me(["semi","semi","semi"])]}],Ho=i=>i.x1+3;function j_(i,t,e){const n=[];if(i.t==="row"||i.t==="gap"&&!i.k)for(let s=i.x0-36;s<=i.x0-.5;s+=1)s>e+1&&n.push({jumpX:s});else if(i.t==="kicker"||i.t==="gap"){const s=t.ramps.find(r=>Math.abs(r.x0-i.x0)<1e-6);for(let r=6;r>=.4;r-=.6)n.push({jumpX:s.x1-r});n.push({jumpX:null})}else if(i.t==="vert")for(let s=5;s<=26;s+=1)n.push({jumpX:null,retro:s});else n.push({jumpX:null});return n}function $_(i){let t=[-1,0],e=-1;for(let n=0;n<=i.length;n++)n<i.length&&i[n]?e<0&&(e=n):e>=0&&(n-e>t[1]&&(t=[e,n-e]),e=-1);return t}function Q_(i,t,e,n){const s=Ho(e),r=j_(e,n,t.x);for(const a of["none","float"]){if(a==="float"&&e.t!=="row"&&e.t!=="gap"&&e.t!=="kicker")break;const o=r.map(d=>{i.restore(t);const g={...d,hold:a};return{pol:g,r:Rs(i,g,s)}}),l=o.map(d=>d.r.ok),[c,h]=$_(l);if(h===0)continue;const u=o[c+Math.floor((h-1)/2)],f=[];for(const d of["right","up"])i.restore(t),Rs(i,{...u.pol,trick:d},s).ok&&f.push(d);return{k:e.idx,t:e.t,pol:u.pol,win:h,tricks:f,apexX:u.r.apexX,apexY:u.r.apexY,land:u.r.land}}return null}function eh(i){const t=new gl(i);t.start();const e=[];for(const s of i.pieces){const r=t.snapshot(),a=Q_(t,r,s,i);if(!a)return{ok:!1,failAt:s.idx,plan:e};const o=ax(a,s);if(o&&(i.pickups.push(o),t.restore(r),Rs(t,a.pol,Ho(s)).ok||i.pickups.pop()),e.push(a),t.restore(r),!Rs(t,a.pol,Ho(s)).ok)return{ok:!1,failAt:s.idx,plan:e}}const n=Rs(t,{jumpX:null},i.finishX+2,20);return{ok:n.ok,failAt:n.ok?-1:i.pieces.length,plan:e}}const tx=5;function ex(i,t,e){const n=o=>{let l=i()*o.reduce((c,[,h])=>c+h,0);for(const[c,h]of o)if((l-=h)<=0)return c;return o[0][0]},s=()=>n([["sedan",4],["suv",3],["pickup",.6+t*2]]),r=()=>n([["semi",2],["bus",2],["pickup",1]]),a=()=>Array.from({length:8},()=>Math.floor(i()*tx));switch(e){case"row":{const o=2+Math.floor(i()*(2.2+t*3.6));return Me(Array.from({length:o},s),{sp:.4+i()*.4,c:a()})}case"kicker":{const o=2+Math.floor(i()*(1.5+t*3)),l=i()<.5?r:()=>i()<.4+t*.4?r():s();return Ar(1.3+i()*(.6+t*.9),20+i()*(5+t*6),Array.from({length:o},l),{d:3+i()*3,c:a()})}case"gap":return i()<.3+t*.4?Cs(12+i()*(6+t*10),[1.3+i()*.7,20+i()*6]):Cs(8+i()*(4+t*6));case"vert":return Nr(10+i()*3,76+i()*6,i()*3);case"rollers":return Go(2+Math.floor(i()*3),1.1+i()*(.5+t*.6),15+i()*5);default:throw new Error(e)}}function nx(i){const t={...i,run:(i.run??40)+6};return t.v&&t.v.length>1?t.v=t.v.slice(0,-1):t.v&&(t.v=t.v.map(e=>ks[e].h>2?"sedan":e)),t.t==="gap"&&(t.len=Math.max(6,t.len-2.5)),t.t==="vert"&&(t.a=Math.min(t.a,78*Gr),t.st=0),t.t==="rollers"&&(t.h=Math.max(.8,t.h-.3)),t.t==="kicker"&&!t.v&&(t.h=Math.max(1,t.h-.3)),t}const nh=["Night Shift","Semi Circle","Floodlights","Red Line","Overpass","Cold Gas","Long Haul","Low Orbit","Burnout Alley","Hangtime","Dead Lift","Afterburn","Full Send","Parking Lot","Steel Rain","Tailwind"];function ix(i){const t=l_(i*7919+13),e=Math.min(1,(i-Bo)/30),n=4+Math.floor(e*2.5+t()*2),s=i%5===0,r=[];let a=0;for(let o=0;o<n+(s?1:0);o++){const l=r[o-1]?.t,c=[["row",4],["kicker",2+e],["gap",1.2+e*1.6],["rollers",.9],["vert",a<1+(s?1:0)&&l!=="vert"&&o>0?.9+e*.8:0]];let h=t()*c.reduce((d,[,g])=>d+g,0),u="row";for(const[d,g]of c)if((h-=g)<=0){u=d;break}u==="vert"&&a++;const f=ex(t,e,u);f.run=f.run??(l==="vert"?64:32+t()*12),o===0&&(f.run=60),r.push(f)}return s&&!r.some(o=>o.t==="vert")&&r.splice(2,0,{...Nr(11.5,80,2),run:62}),{name:nh[i%nh.length],boss:s,generated:!0,pieces:r}}const Fa=new Map,sx=i=>i<=Bo?1:Math.round(Ge(5,2,Math.min(1,(i-Bo)/30))),ih={[-1]:{name:"The Line-up",pieces:[Me(["sedan","suv","semi","pickup","sedan"],{run:46,sp:.5,c:[0,0,0,0,4]})],tail:70}};function rx(i){if(Fa.has(i))return Fa.get(i);let t=ih[i]?structuredClone(ih[i]):i<=th.length?structuredClone(th[i-1]):ix(i),e,n;for(let a=0;a<24;a++){e=Dc(t),n=eh(e);let o=n.ok?-1:n.failAt;if(n.ok&&t.generated){const l=n.plan.find(c=>(c.t==="row"||c.t==="gap"&&!e.pieces[c.k].k)&&c.win<(c.pol.hold==="none"?sx(i):3));l&&(o=l.k)}if(o<0)break;if(o>=t.pieces.length){t.tail=(t.tail??40)+20;continue}t={...t,pieces:t.pieces.map((l,c)=>c===o?nx(l):l)}}n.ok||(t={...t,pieces:[Me(["sedan","sedan"],{run:60}),Me(["sedan","suv","sedan"])]},e=Dc(t),n=eh(e)),ox(e,n.plan);const s=n.plan.reduce((a,o)=>a+lx(o,e),0),r={...t,number:i,track:e,plan:n.plan,solved:n.ok,par:Math.round(s/10)*10};return Fa.set(i,r),r}function ax(i,t){return i.apexX==null||t.t==="vert"||i.apexY<=2?null:{x:i.apexX,y:i.apexY+.4,kind:i.pol.hold==="float"||t.t==="gap"?"fuel":"star"}}function ox(i,t){i.marks=[];for(const e of t){const n=i.pieces[e.k];e.pol.jumpX!=null&&(n.t==="row"||n.t==="gap"&&!n.k)&&i.marks.push({x:e.pol.jumpX,hold:e.pol.hold==="float",win:e.win})}}function lx(i,t){const e=t.pieces[i.k],n=(e.v?.length??0)*Ve.perVehicle,s=i.tricks.includes("up")?Ve.trick.backflip:i.tricks.includes("right")?Ve.trick.kickflip:0;return n+(e.t==="gap"?Ve.gap:0)+(e.t==="vert"?Ve.vert:0)+s*1.5+(i.apexY>2&&e.t!=="vert"?Ve.pickup*.5:0)}const cx={jump:{title:"THRUSTER HOP",text:"Tap anywhere to fire the down jets and hop the cars. Jump on the blue line."},flip:{title:"KICKFLIP",text:"In the air, swipe left or right to barrel-roll. Land it wheels down!"},kicker:{title:"KICKERS",text:"Ride the ramp to clear the big rigs. Tap right at the lip to pop even higher."},hold:{title:"HOLD TO BURN",text:"Hold your finger down in the air: you float on the way up and brake the fall on the way down."},rollers:{title:"ROLLERS",text:"Crests throw you off the road at speed. Swipe up for a backflip."},vert:{title:"THE WALL",text:"Hit the boost and ride the vert ramp. Hold to retro-burn before you hit the ground."}},Qh="kickflip.v1";function hx(){return{unlocked:1,best:{},stars:{},sfx:!0,vibration:!0,seen:{},totalFlips:0}}function ux(){const i=hx();let t=null;try{t=JSON.parse(localStorage.getItem(Qh)||"null")}catch{t=null}return t?{...i,...t,best:{...t.best||{}},stars:{...t.stars||{}},seen:{...t.seen||{}}}:i}function Oa(i){try{localStorage.setItem(Qh,JSON.stringify(i))}catch{}}const fx={kickflip:"KICKFLIP",heelflip:"HEELFLIP",backflip:"BACKFLIP",frontflip:"FRONTFLIP"},dx=["","","DOUBLE ","TRIPLE "],px={roll:"Landed on its side. Finish the flip before you touch down.",pitch:"Nosed it in. Let the jets level you out before landing.",hard:"Too hard a landing. Hold to retro-burn the fall.",short:"Came up short. Jump earlier, or hold to float further.",wall:"Straight into the wall.",fell:"Into the pit."};class mx{constructor(t,e={}){this.canvas=t,this.opts=e,this.save=ux();const n=this.renderer=new i_({canvas:t,antialias:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio||1,e.capture?3:2)),n.outputColorSpace=Xe,n.toneMapping=qo,n.toneMappingExposure=1.1,n.shadowMap.enabled=!0,n.shadowMap.type=sh,x_(Math.min(8,n.capabilities.getMaxAnisotropy())),this.world=new A_(n),this.scene=this.world.scene,this.camera=new $e(60,1,.1,1500),this.rig=new F_(this.camera),this.car=new N_,this.scene.add(this.car.root),this.fx=new V_(this.scene),this.sound=new G_,this.sound.on=this.save.sfx,Wc(this.save.vibration),this.ui=new W_(this),this.input=new q_(t,{press:()=>this.onPress(),swipe:s=>this.onSwipe(s)}),this.blob=new Ft(new en(1,1).rotateX(-Math.PI/2),new Se({map:yn(),color:"#000000",transparent:!0,opacity:.6,depthWrite:!1})),this.blob.renderOrder=3,this.ring=new Ft(new ul(1.6,2.05,48).rotateX(-Math.PI/2),new Se({color:"#5dff9b",transparent:!0,opacity:.8,blending:Te,depthWrite:!1,toneMapped:!1})),this.ring.renderOrder=4,this.scene.add(this.blob,this.ring),this.state="boot",this.timeScale=1,this.slowT=0,this.acc=0,this.clock=0,this.last=0,this.level=null,this.sim=null,this.auto=null,this.trailT=0,this.hoverT=0,this.score=0,window.addEventListener("resize",()=>this.resize()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="playing"&&this.pause()}),this.resize()}start(){if(this.opts.capture){this.last=0;return}const t=e=>{this.frame(e),requestAnimationFrame(t)};requestAnimationFrame(e=>{this.last=e,t(e)})}later(t,e){(this.timers||(this.timers=[])).push({at:this.clock+t,fn:e})}tick(t){this.animT||(this.animT=new WeakMap);for(const e of document.getAnimations()){const n=(this.animT.get(e)??0)+t;e.pause(),e.currentTime=n,this.animT.set(e,n)}this.frame(this.last+t)}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}currentLevel(){return Math.max(1,this.save.unlocked)}load(t){this.level=rx(t);const e=this.level.track;this.world.build(e),this.sim=new gl(e),this.tumble=new K_(e),this.fx.clear(),this.ui.clearPops(),this.score=0,this.stats={flips:0,air:0,perfect:0},this.auto=null,this.acc=0,this.slowT=0,this.timeScale=1,this.car.update(this.sim,0,{snap:!0}),this.rig.mode="chase",this.rig.side=0,this.rig.update(10,this.sim,e,{aspect:this.camera.aspect}),this.input.reset()}home(){this.load(this.currentLevel()),this.state="demo",this.auto=new Qc(this.level),this.sim.start(),this.ui.show("home"),this.demoEnd=0}play(t){this.load(t),this.state="ready",this.readyAt=this.clock;const e=this.level.intro&&cx[this.level.intro];this.ui.ready(this.level,e),this.best=this.save.best[t]||0,this.opts.auto&&(this.go(),this.auto=new Qc(this.level,{prefer:this.opts.trick}))}go(){this.state="playing",this.sim.start(),this.ui.play(),this.sound.play("go"),Nn("medium");for(const t of[-.85,.85])this.fx.smoke(this.sim.x-1.4,.2,t,14,{spread:.6,speed:3,up:1,size:1.8,grow:3,life:2,vx:-6})}retry(){this.play(this.level.number)}next(){this.play(this.level.number+1)}pause(){this.state==="playing"&&(this.state="paused",this.ui.pause())}resume(){this.state==="paused"&&(this.state="playing",this.ui.play(),this.input.reset(),this.last=performance.now())}toggleSound(){this.save.sfx=!this.save.sfx,this.sound.setOn(this.save.sfx),Oa(this.save),this.ui.refreshHome()}toggleVibration(){this.save.vibration=!this.save.vibration,Wc(this.save.vibration),this.save.vibration&&Nn("medium"),Oa(this.save),this.ui.refreshHome()}onPress(){this.sound.unlock(),this.state==="ready"&&this.clock-this.readyAt>.25?this.go():this.state==="playing"&&!this.auto&&this.sim.press()}onSwipe(t){this.state==="playing"&&!this.auto&&this.sim.swipe(t)}frame(t){const e=Math.min(.05,Math.max(0,(t-this.last)/1e3));if(this.last=t,this.clock+=e,this.timers?.length){const r=this.timers.filter(a=>a.at<=this.clock);r.length&&(this.timers=this.timers.filter(a=>a.at>this.clock),r.forEach(a=>a.fn()))}this.slowT>0?(this.slowT-=e,this.timeScale+=(.3-this.timeScale)*Math.min(1,e*12)):this.timeScale+=(1-this.timeScale)*Math.min(1,e*3);const n=this.state==="paused"?0:e*this.timeScale,s=this.sim;if(s&&this.state!=="boot"){const r=this.state,a=r==="playing"||r==="finished"||r==="demo";this.acc+=n;let o=0;const l=this.stepSize||Mt.STEP;for(;this.acc>=l&&o<14;)if(this.acc-=l,o++,s.mode==="crash"){this.tumble.step(l);for(const c of this.tumble.impacts)this.wreckImpact(c)}else a&&(this.auto?this.auto.control(s):r==="playing"&&(s.hold=this.input.holding),s.step(l),s.events.length&&this.handleEvents());this.acc>l*4&&(this.acc=0),this.visuals(n,e),r==="demo"&&this.demoEnd&&this.clock>this.demoEnd&&this.home()}this.renderer.render(this.scene,this.camera)}handleEvents(){const t=this.sim,e=this.state==="demo";if(this.evlog)for(const r of t.events)this.evlog.push({type:r.type,quality:r.quality,vn:r.vn,name:r.name,reason:r.reason});const n=(r,a)=>{e||this.ui.pop(r,a)},s=(r,a)=>{e||this.sound.play(r,a)};for(const r of t.events)switch(r.type){case"jump":{s("jump"),e||Nn("light");const a=this.level.track.ground(r.x);this.fx.smoke(r.x,(a?a.y:0)+.1,0,26,{spread:1.6,speed:9,up:.8,size:2.6,grow:4.5,life:2.4,vx:r.v*.25}),this.rig.kick(.3);break}case"launch":s("launch");break;case"swipe":s("swipe");break;case"trick":{const a=(t.air?.tricks||[]).filter(o=>o===r.name).length;n(`${a>=4?a+"X ":dx[a]||""}${fx[r.name]}`,"small"),s("trick"),e||Nn("light"),this.stats.flips++;break}case"boost":s("boost"),n("BOOST","small"),this.rig.kick(1),e||Nn("medium");break;case"pickup":{s("pickup");const a=this.level.track.pickups[r.i];this.fx.sparks(a.x,a.y,0,24,{color:a.kind==="fuel"?"#7fe0ff":"#ffcf3f",speed:7,life:.6,size:.4}),this.score+=Ve.pickup,n(a.kind==="fuel"?`+FUEL  +${Ve.pickup}`:`+${Ve.pickup}`,"pts");break}case"land":this.onLand(r,e);break;case"crash":this.onCrash(r,e);break;case"finish":this.onFinish(e);break}t.events.length=0}onLand(t,e){const n=this.sim;let s=0;t.tricks.forEach((u,f)=>{s+=Ve.trick[u]*(1+f*.5)});const r=t.quality==="perfect"?Ve.perfectMult:t.quality==="hard"?Ve.hardMult:1,a=t.cleared*Ve.perVehicle+t.gaps*Ve.gap+t.verts*Ve.vert,o=t.airTime>1.2?Math.floor((t.airTime-1)*60):0,l=Math.round((s*r+a+o)/5)*5;this.score+=l,this.stats.air=Math.max(this.stats.air,t.airTime),t.quality==="perfect"&&this.stats.perfect++,e||(t.quality==="perfect"&&(t.tricks.length||t.airTime>.9)?(this.ui.pop("PERFECT LANDING","perfect"),this.sound.play("perfect")):t.quality==="hard"&&this.ui.pop("HARD LANDING","bad"),t.cleared&&this.ui.pop(`${t.cleared} ${t.cleared===1?"CAR":"CARS"} CLEARED`,"small"),l>0&&this.ui.pop(`+${l}`,"pts"),this.sound.play("land",tn(t.vn/16,.3,1)),Nn(t.vn>14?"heavy":"medium"));const c=this.level.track.ground(n.x),h=tn(t.vn/22,.15,1);this.fx.smoke(n.x,(c?c.y:0)+.1,0,Math.round(16+h*50),{spread:2+h*2,speed:4+h*9,up:1+h,size:2.6+h*1.6,grow:3+h*4,life:2.6,vx:n.v*.3}),this.car.bump(Math.min(2.4,t.vn*.09)),this.rig.shake(tn((t.vn-4)/30,0,.7))}onCrash(t,e){if(this.tumble.start(t),this.rig.mode="wreck",this.rig.shake(1),this.slowT=.7,this.fx.sparks(t.x,t.y,0,60,{speed:14}),this.fx.smoke(t.x,Math.max(.2,t.y-.5),0,30,{spread:1.5,speed:6,size:2.6,grow:4,life:3,pink:.1}),e){this.demoEnd=this.clock+2.5;return}this.state="crashed",this.sound.play("crash"),Nn("heavy");let n=px[t.reason];if(t.reason==="hit"){const s=this.level.track.vehicles[t.veh],r={sedan:"sedan",suv:"SUV",pickup:"pickup",semi:"semi",bus:"bus"}[s?.type]||"car";n=ks[s?.type]?.h>3?`Clipped the ${r}. Big rigs need a kicker or a held burn.`:`Clipped a parked ${r}. Jump on the blue line.`}this.later(1.5,()=>{this.state==="crashed"&&this.ui.crash(n,this.score)})}onFinish(t){if(this.fx.confetti(this.sim.x+6,2,0),this.later(.5,()=>{this.sim&&this.rig.mode==="chase"&&(this.rig.mode="finish")}),t){this.demoEnd=this.clock+3;return}this.state="finished",this.sound.play("finish"),Nn("success");const e=this.level.number,n=this.level.par,s=this.score>=n?3:this.score>=n*.5?2:1,r=this.save,a=r.best[e]||0,o=this.score>a;o&&(r.best[e]=this.score),r.stars[e]=Math.max(r.stars[e]||0,s),r.unlocked=Math.max(r.unlocked,e+1),r.totalFlips=(r.totalFlips||0)+this.stats.flips,Oa(r);const l={stars:s,score:this.score,best:Math.max(a,this.score),newBest:o&&a>0,stats:this.stats,next:e+1};this.later(1.7,()=>{this.state==="finished"&&this.ui.win(l)})}wreckImpact(t){this.evlog&&this.evlog.push({type:"impact",k:t.k}),this.fx.sparks(t.x,t.y+.1,t.z,Math.round(10+t.k*30),{speed:6+t.k*10}),this.fx.smoke(t.x,t.y+.1,t.z,Math.round(4+t.k*12),{spread:1,speed:3,size:2,grow:3,life:2}),this.state==="crashed"&&(this.sound.play("land",t.k*.8),this.rig.shake(t.k*.5))}visuals(t,e){const n=this.sim,s=this.level.track,r=this.car,a=n.mode==="crash";let o=n.x,l=n.y;a?(r.root.position.copy(this.tumble.pos),r.root.quaternion.copy(this.tumble.q),r.setJet(r.jets.down,0,t),r.setJet(r.jets.rollPos,0,t),r.setJet(r.jets.rollNeg,0,t),r.setJet(r.jets.pitchUp,0,t),r.setJet(r.jets.pitchDn,0,t),r.pool.visible=!1,o=this.tumble.pos.x,l=this.tumble.pos.y,Math.random()<.3&&this.fx.trail(o,l,0,0,1.5,0)):r.update(n,t),this.world.follow(o,l),this.world.update(this.clock,n);const c=n.mode==="air";if(!a&&n.jet.down>.3){const f=s.ground(n.x),d=f?f.y:-50,g=n.y-d;if(this.hoverT-=t,g<9&&this.hoverT<=0&&(this.hoverT=.03,this.fx.smoke(n.x,d+.1,0,2,{spread:1,speed:7*(1-g/10)+2,up:.4,size:2.2,grow:3.5,life:2,alpha:.45,vx:n.vx*.3})),this.trailT-=t,c&&this.trailT<=0){this.trailT=.035;for(const v of[-.55,.55])this.fx.trail(n.x+me(-1,1),n.y-1.2,v,n.vx*.2,-5,0)}}if(c){const f=s.ground(n.x),d=f?n.y-f.y:0;if(this.blob.visible=!!f,f){this.blob.position.set(n.x,f.y+.04,0),this.blob.rotation.z=f.ang;const v=3.4+d*.12;this.blob.scale.set(v*1.4,1,v),this.blob.material.opacity=tn(.65-d*.025,.15,.65)}const g=n.landX!=null&&n.air.t>.12&&n.y-n.landY>2;if(this.ring.visible=g,g){const v=!n.pending&&Math.abs(Ur(n.roll))<Mt.ROLL_TOL*.8&&Math.abs(Ur(n.pitch-n.landAng))<Mt.PITCH_TOL*.8&&!this.onVehicle(n.landX);this.ring.material.color.set(v?"#5dff9b":"#ff3b4f"),this.ring.position.set(n.landX,n.landY+.06,0),this.ring.rotation.z=n.landAng;const m=1+Math.sin(this.clock*10)*.06;this.ring.scale.setScalar(m)}}else this.blob.visible=!1,this.ring.visible=!1;this.rig.update(e,a?{x:o,y:l,mode:"crash",v:0,vx:0,pitch:0}:n,s,{aspect:this.camera.aspect});const h=this.renderer.domElement.height/(2*Math.tan(this.camera.fov*Math.PI/360));this.fx.setScale(h),this.fx.update(t);const u=this.state==="demo";if(this.sound.drive({speed:a?0:Math.abs(c?n.vx:n.v),running:!u&&!a&&(this.state==="playing"||this.state==="finished"||this.state==="ready"),jet:u||a?0:Math.max(n.jet.down,Math.abs(n.jet.roll)*.7,Math.abs(n.jet.pitch)*.6),air:!u&&c}),!u){const f=s.finishX-s.startX;this.ui.setHud({prog:tn((n.x-s.startX)/f,0,1),score:this.score,best:this.best||0,fuel:n.fuel/Mt.FUEL_MAX,speed:Math.round((n.mode==="ground"?Math.abs(n.v):Math.hypot(n.vx,n.vy))*3.6)}),this.ui.coach(this.coachText())}}onVehicle(t){return this.level.track.vehicles.some(e=>t+2>e.x0&&t-2<e.x1)}coachText(){if(this.state!=="playing"||this.auto)return null;const t=this.level,e=this.sim,n=t.track,s=t.intro;if(!s)return null;if(e.mode==="ground"){const a=n.marks.find(o=>e.x>o.x-10&&e.x<o.x+.5);return a?a.hold?"TAP — THEN HOLD":"TAP TO JUMP":s==="kicker"&&n.ramps.find(l=>l.kind==="kicker"&&e.x>l.x0-2&&e.x<l.x1)?"TAP AT THE LIP!":s==="vert"&&n.boosts.some(o=>e.x>o.x0-20&&e.x<o.x1+14)?"HIT THE BOOST":null}if(e.mode!=="air")return null;if(s==="flip"&&!e.tq.length&&e.vy>-4)return"SWIPE ← OR → TO FLIP";if(s==="rollers"&&!e.tq.length&&e.vy>-2)return"SWIPE ↑ TO BACKFLIP";const r=n.ground(e.x);if(r&&e.vy<0&&e.fuel>.1){const a=e.y-r.y;if(Math.sqrt(e.vy*e.vy+2*Mt.G*Math.max(0,a-Mt.RIDE))>Mt.GOOD_V&&a<16)return"HOLD TO BURN!"}return s==="hold"&&e.vy>0&&n.marks.some(a=>a.hold&&Math.abs(e.air.x0-a.x)<3)?"HOLD!":null}}const Ss=new URLSearchParams(location.search),Fr=document.getElementById("boot");function gx(i){Fr.querySelector(".boot-bar")?.remove();const t=document.createElement("p");t.className="boot-error",t.textContent=i,Fr.appendChild(t)}try{const i=new mx(document.getElementById("c"),{auto:Ss.get("auto")==="1",capture:Ss.get("capture")==="1",trick:Ss.get("trick")});(a_||Ss.has("debug"))&&(window.__game=i);const t=document.fonts?.ready??Promise.resolve();Promise.race([t,new Promise(e=>setTimeout(e,1500))]).then(()=>{const e=Number(Ss.get("play"));e>0||e<0&&i.opts.capture?i.play(e):i.home(),i.start(),Fr.classList.add("out"),setTimeout(()=>Fr.remove(),500)})}catch(i){console.error(i),gx("This device could not start the 3D view (WebGL).")}
