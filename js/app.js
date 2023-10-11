"use strict";
var main;(function(){
var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,cls){return obj!==null&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i
=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_createArray(cls,sz){var data=new Array(sz);var arr=new $rt_array(cls,data);if(sz>0){var i=0;do {data[i]=null;i=i+1|0;}while(i<sz);}return arr;}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new Array(sz));}function $rt_createLongArray(sz){var data=new Array(sz);var arr=new $rt_array($rt_longcls(),data);for(var i=0;i<sz;i=i+1|0){data[i]=Long_ZERO;}return arr;}function $rt_createNumericArray(cls,
nativeArray){return new $rt_array(cls,nativeArray);}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new Uint16Array(sz));}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new Int8Array(sz));}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new Int16Array(sz));}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new Int32Array(sz));}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),
new Int8Array(sz));}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new Float32Array(sz));}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new Float64Array(sz));}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false};arraycls.classObject=null;arraycls.$array
=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls(){return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache
=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache
===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long","J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double",
"D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex){throw $rt_exception(ex);}function $rt_exception(ex){var err=ex.$jsException;if(!err){err=new Error("Java exception thrown");if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,
ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_objcls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first
=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays=new Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays
=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for
(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]
|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim
=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value){if(typeof value==='number'&&isNaN(value)){throw "NaN";}return value;}var $rt_stdoutBuffer="";var $rt_putStdout=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:function(ch){if(ch===0xA){if(console){console.info($rt_stdoutBuffer);}$rt_stdoutBuffer
="";}else {$rt_stdoutBuffer+=String.fromCharCode(ch);}};var $rt_stderrBuffer="";var $rt_putStderr=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:function(ch){if(ch===0xA){if(console){console.error($rt_stderrBuffer);}$rt_stderrBuffer="";}else {$rt_stderrBuffer+=String.fromCharCode(ch);}};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]
=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype
=Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]
=func;}}}cls.$array=null;}}function $rt_threadStarter(f){return function(){var args=Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f){return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i){javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance
=new Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target){return target.$clinit=function(){};}var $rt_numberConversionView=new DataView(new ArrayBuffer(8));function $rt_doubleToLongBits(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));}function $rt_longBitsToDouble(n)
{$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);}function $rt_floatToIntBits(n){$rt_numberConversionView.setFloat32(0,n);return $rt_numberConversionView.getInt32(0);}function $rt_intBitsToFloat(n){$rt_numberConversionView.setInt32(0,n);return $rt_numberConversionView.getFloat32(0);}function $rt_javaException(e){return e instanceof Error&&typeof e.$javaException==='object'?e.$javaException:null;}function $rt_jsException(e)
{return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err.$javaException;if(!ex){ex=$rt_createException($rt_str("(JavaScript) "+err.toString()));err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if
(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};Long.prototype.toString
=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push(String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};var Long_ZERO=new Long(0,0);var Long_MAX_NORMAL=1<<18;function Long_fromInt(val){return val>=0?new Long(val,0):new Long(val, -1);}function Long_fromNumber(val)
{if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}}function Long_toNumber(val){var lo=val.lo;var hi=val.hi;if(lo<0){lo+=0x100000000;}return 0x100000000*hi+lo;}var $rt_imul=Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){if(a<0){a+=0x100000000;}if(b<0){b+=0x100000000;}return a/b|0;};var $rt_umod=function(a,b){if(a<0){a+=0x100000000;}if
(b<0){b+=0x100000000;}return a%b|0;};function $rt_setCloneMethod(target, f){target.uh=f;}
function $rt_cls(cls){return Yq(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return SD(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bp.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(AOm());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return ACm();}
function $rt_setThread(t){return Ed(t);}
function $rt_createException(message){return FY(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var H=$rt_throw;var BN=$rt_compare;var APO=$rt_nullCheck;var F=$rt_cls;var I=$rt_createArray;var Kx=$rt_isInstance;var De=$rt_nativeThread;var N=$rt_suspending;var F5=$rt_resuming;var FI=$rt_invalidPointer;var B=$rt_s;var Bx=$rt_eraseClinit;var K=$rt_imul;var D=$rt_wrapException;
function C(){this.bW=null;this.$id$=0;}
function APP(){var a=new C();AAe(a);return a;}
function AKW(b){var c;if(b.bW===null)O_(b);if(b.bW.dc===null)b.bW.dc=APQ;else if(b.bW.dc!==APQ){c=new Dv;Bb(c,B(0));H(c);}b=b.bW;b.dz=b.dz+1|0;}
function ABR(b){var c,d;if(!FZ(b)&&b.bW.dc===APQ){c=b.bW;d=c.dz-1|0;c.dz=d;if(!d)b.bW.dc=null;FZ(b);return;}b=new Hg;R(b);H(b);}
function YH(b){if(b.bW===null)O_(b);if(b.bW.dc===null)b.bW.dc=APQ;if(b.bW.dc!==APQ)AHI(b,1);else{b=b.bW;b.dz=b.dz+1|0;}}
function O_(b){var c;c=new M5;c.dc=APQ;b.bW=c;}
function AHI(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.wA=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.wV=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=AOV(callback);return thread.suspend(function(){try{AOT(b,c,callback);}catch($e){callback.wV($rt_exception($e));}});}
function AOT(b,c,d){var e,f,g;e=APQ;if(b.bW===null){O_(b);Ed(e);b=b.bW;b.dz=b.dz+c|0;CZ(d,null);return;}if(b.bW.dc===null){b.bW.dc=e;Ed(e);b=b.bW;b.dz=b.dz+c|0;CZ(d,null);return;}f=b.bW;if(f.eC===null)f.eC=AHL();f=f.eC;g=new Pr;g.ra=e;g.rb=b;g.q$=c;g.q_=d;d=g;f.push(d);}
function J2(b){var c;if(!FZ(b)&&b.bW.dc===APQ){c=b.bW;c.dz=c.dz-1|0;if(c.dz<=0){c.dc=null;if(c.eC!==null&&!HZ(c.eC)){c=new R5;c.rC=b;Pg(c);}else FZ(b);}return;}b=new Hg;R(b);H(b);}
function FZ(a){var b;b=a.bW;if(b===null)return 1;a:{if(b.dc===null&&!(b.eC!==null&&!HZ(b.eC))){if(b.lh===null)break a;if(HZ(b.lh))break a;}return 0;}a.bW=null;return 1;}
function AAe(a){return;}
function Dw(a){return Yq(a.constructor);}
function AE$(a){return Lb(a);}
function XR(a,b){return a!==b?0:1;}
function AEf(a){var b,c,d,e,f,g,h,i;b=new W;Ba(b);b=E(E(b,Hv(Dw(a))),B(1));c=Lb(a);if(!c)d=B(2);else{e=(((32-LS(c)|0)+4|0)-1|0)/4|0;f=$rt_createCharArray(e);g=f.data;e=(e-1|0)*4|0;h=0;while(e>=0){i=h+1|0;g[h]=GI(c>>>e&15,16);e=e-4|0;h=i;}d=SD(f);}return X(E(b,d));}
function Lb(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AH3(a){var b,c,d;if(!Kx(a,Dy)&&a.constructor.$meta.item===null){b=new QU;R(b);H(b);}b=ACL(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function RT(a){var b,c;if(!(a.bW!==null&&a.bW.dc===APQ?1:0)){b=new Hg;R(b);H(b);}b=a.bW.lh;if(b===null)return;while(!HZ(b)){c=YG(b);if(!c.G5())Pg(c);}a.bW.lh=null;}
function Hr(){C.call(this);}
var APR=null;var APS=null;var APT=null;function AAY(b){var c,d,e,f,g,h,$$je,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:UG();AAX();AAc();Zo();TV();TK();AB5();TS();Tl();S7();ABJ();Uu();ZU();AB9();Ys();St();Ye();Wr();XQ();Vg();Z4();XF();X8();AB0();ABf();VD();VI();Vj();YE();S1();AAz();WS();ABZ();Vv();U_();UH();YT();WQ();Vz();Xf();Ut();Uq();Wa();Wb();Zs();TQ();X5();c=window.minecraftOpts;if(c===null)d=null;else{d=I(Ca,
c.length);b=d.data;e=0;f=b.length;while(e<f){b[e]=$rt_str(c[e]);e=e+1|0;}}a:{try{b=d.data;c=window.document;g=b[0];c=c.getElementById($rt_ustr(g));APR=c;g=b[1];$p=1;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){}else if($$je instanceof D9){c=$$je;break a;}else{throw $$e;}}return;}g=new Jh;JU(g);g.js=AMT(16);g.jX=g.js;K1(c,Yr(g));return;case 1:b:{c:{d:{try{Vc(c,g);if(N()){break _;}break d;}catch($$e){$$je=D($$e);if($$je instanceof J){}else if($$je instanceof D9){c=$$je;break c;}else{throw $$e;}}return;}try
{break b;}catch($$e){$$je=D($$e);if($$je instanceof D9){c=$$je;}else{throw $$e;}}}g=new Jh;JU(g);g.js=AMT(16);g.jX=g.js;K1(c,Yr(g));return;}c=new NL;e=UP();f=AA9();g=new O9;g.cu=1.0;g.h=0.0;g.B=1.0;g.cj=20.0;g.Q=Bq();g.R=Long_div(Cd(),Long_fromInt(1000000));c.P=g;c.fC=null;c.cx=0;c.em=0;c.G=null;g=new Rx;g.kI=B(3);g.kt=B(3);g.di=c;c.po=g;g=new Pu;g.E=1.0;g.bC=0;g.k=0.5;g.i=0.800000011920929;g.j=1.0;g.bz=0.0;g.wn=0;g.wo=0;g.jx=Je(16);g.a=c;c.cv=g;g=new Nz;g.x9=c.po;c.nF=g;g=new Lt;h=c.po;g.U=new HK;g.dd=$rt_createIntArray(1048576);g.dJ
=h;c.td=g;c.be=0;c.mV=null;c.rM=0;c.cs=0;c.xM=AEw();c.bm=null;c.u_=null;c.x7=0;c.cb=0;c.cl=B(3);c.b7=0;c.fe=0;g=new NQ;Qx(g,null,null);g.s0=1;In(g);c.l=e;c.c=f;c.cF=UM();g=c.cF;h=new Ox;Bj();NG(h,APU.dY);h.iX=$rt_createFloatArray(256);h.kD=$rt_createFloatArray(256);h.gc=$rt_createFloatArray(256);h.lt=$rt_createFloatArray(256);Lu(g,h);g=c.cF;h=new NP;NG(h,APV.dY);h.iC=$rt_createFloatArray(256);h.kl=$rt_createFloatArray(256);h.j1=$rt_createFloatArray(256);h.ka=$rt_createFloatArray(256);h.oR=0;Lu(g,h);APS=c;g=
APS;h=new IL;Gq();h.lP=B(4);h.x1=B(5);g.fC=h;APS.fC.xn=B(6);APT=TF(APS,B(7));In(APT);return;default:FI();}}De().s(b,c,d,e,f,g,h,$p);}
function UG(){APR=null;APS=null;APT=null;}
function Ly(){}
function Re(){var a=this;C.call(a);a.m3=null;a.gM=null;}
function Yq(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Re;c.gM=b;d=c;b.classObject=d;}return c;}
function ADI(a){return a.gM;}
function U5(a,b){var c;b=b;c=a.gM;return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&Yw(b.constructor,c)?1:0;}
function Hv(a){if(a.m3===null)a.m3=$rt_str(a.gM.$meta.name);return a.m3;}
function Hi(a){return a.gM.$meta.primitive?1:0;}
function HB(a){return Yq(a.gM.$meta.item);}
function Uw(){C.call(this);}
function Cy(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function JY(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function T9(){C.call(this);}
function ACL(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function Yw(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(Yw(d[e],c))return 1;e=e+1|0;}return 0;}
function AKi(b){return setTimeout(function(){$rt_threadStarter(ADz)(b);},0);}
function ADz(b){var $p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:b.fo();if(N()){break _;}return;default:FI();}}De().s(b,$p);}
function Pg(b){Z9(b,0);}
function Z9(b,c){return setTimeout(function(){ADz(b);},c);}
function ZQ(b){return String.fromCharCode(b);}
function AHL(){return [];}
function B6(){}
function C0(){}
function H9(){}
function Ca(){var a=this;C.call(a);a.bp=null;a.j4=0;}
var APW=null;function SD(a){var b=new Ca();Ir(b,a);return b;}
function FU(a,b,c){var d=new Ca();ACh(d,a,b,c);return d;}
function ACz(a,b){var c=new Ca();Tf(c,a,b);return c;}
function AMm(a,b,c){var d=new Ca();Sw(d,a,b,c);return d;}
function Ir(a,b){var c,d;b=b.data;c=b.length;a.bp=$rt_createCharArray(c);d=0;while(d<c){a.bp.data[d]=b[d];d=d+1|0;}}
function ACh(a,b,c,d){var e,f;a.bp=$rt_createCharArray(d);e=0;while(e<d){f=b.data;a.bp.data[e]=f[e+c|0];e=e+1|0;}}
function Tf(a,b,c){c=XW(c,WN(b,0,b.data.length));if(T7(c)&&!c.J&&c.b0==c.gq)a.bp=Y5(c);else{a.bp=$rt_createCharArray(BL(c));Zh(c,a.bp);}}
function Sw(a,b,c,d){var e,f,g,h,i,j;a.bp=$rt_createCharArray(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.bp.data;j=e+1|0;g[e]=i&65535;}else{g=a.bp.data;c=e+1|0;g[e]=Gc(i);g=a.bp.data;j=c+1|0;g[c]=GA(i);}f=f+1|0;c=h;e=j;}if(e<a.bp.data.length)a.bp=LO(a.bp,e);}
function M(a,b){var c;if(b>=0&&b<a.bp.data.length)return a.bp.data[b];c=new FB;R(c);H(c);}
function O(a){return a.bp.data.length;}
function C8(a){return a.bp.data.length?0:1;}
function ABe(a,b){var c,d,e;if(a===b)return 0;c=BY(O(a),O(b));d=0;while(true){if(d>=c)return O(a)-O(b)|0;e=M(a,d)-M(b,d)|0;if(e)break;d=d+1|0;}return e;}
function J6(a,b,c){var d,e,f;if((c+O(b)|0)>O(a))return 0;d=0;while(d<O(b)){e=M(b,d);f=c+1|0;if(e!=M(a,c))return 0;d=d+1|0;c=f;}return 1;}
function D8(a,b){if(a===b)return 1;return J6(a,b,0);}
function NB(a,b){var c,d,e,f;if(a===b)return 1;if(O(b)>O(a))return 0;c=0;d=O(a)-O(b)|0;while(d<O(a)){e=M(a,d);f=c+1|0;if(e!=M(b,c))return 0;d=d+1|0;c=f;}return 1;}
function C_(a,b,c){var d,e,f,g;d=CB(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.bp.data.length)return (-1);if(a.bp.data[d]==e)break;d=d+1|0;}return d;}f=Gc(b);g=GA(b);while(true){if(d>=(a.bp.data.length-1|0))return (-1);if(a.bp.data[d]==f&&a.bp.data[d+1|0]==g)break;d=d+1|0;}return d;}
function D6(a,b){return C_(a,b,0);}
function Do(a,b,c){var d,e,f,g,h;d=BY(c,O(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bp.data[d]==e)break;d=d+(-1)|0;}return d;}f=Gc(b);g=GA(b);while(true){if(d<1)return (-1);if(a.bp.data[d]==g){h=a.bp.data;b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function Hm(a,b){return Do(a,b,O(a)-1|0);}
function IZ(a,b,c){var d,e,f;d=CB(0,c);e=O(a)-O(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=O(b))break a;if(M(a,d+f|0)!=M(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function PZ(a,b){return IZ(a,b,0);}
function Nw(a,b,c){var d,e;d=BY(c,O(a)-O(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=O(b))break a;if(M(a,d+e|0)!=M(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function Wl(a,b){return Nw(a,b,O(a));}
function BK(a,b,c){var d;if(b<=c)return FU(a.bp,b,c-b|0);d=new BB;R(d);H(d);}
function DM(a,b){return BK(a,b,O(a));}
function AFS(a,b,c){return BK(a,b,c);}
function Kf(a,b,c){var d,e,f,g;d=new W;Ba(d);e=O(a)-O(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=O(b)){BX(d,c);f=f+(O(b)-1|0)|0;break a;}if(M(a,f+g|0)!=M(b,g))break;g=g+1|0;}CL(d,M(a,f));}f=f+1|0;}BX(d,DM(a,f));return X(d);}
function Ev(a){var b,c;b=0;c=O(a)-1|0;a:{while(b<=c){if(M(a,b)>32)break a;b=b+1|0;}}while(b<=c&&M(a,c)<=32){c=c+(-1)|0;}return BK(a,b,c+1|0);}
function AEd(a){return a;}
function Ho(a){var b,c,d,e;b=$rt_createCharArray(a.bp.data.length);c=b.data;d=0;e=c.length;while(d<e){c[d]=a.bp.data[d];d=d+1|0;}return b;}
function Nf(b){return b===null?B(8):b.df();}
function OR(b){var c,d;c=new Ca;d=$rt_createCharArray(1);d.data[0]=b;Ir(c,d);return c;}
function PL(b){var c;c=new W;Ba(c);return X(S(c,b));}
function BR(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Ca))return 0;c=b;if(O(c)!=O(a))return 0;d=0;while(d<O(c)){if(M(a,d)!=M(c,d))return 0;d=d+1|0;}return 1;}
function JV(a){var b,c,d,e;a:{if(!a.j4){b=a.bp.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.j4=(31*a.j4|0)+e|0;d=d+1|0;}}}return a.j4;}
function IT(a){var b,c,d,e,f,g,h;if(C8(a))return a;b=$rt_createIntArray(a.bp.data.length);c=b.data;d=0;e=0;while(e<a.bp.data.length){a:{if(e!=(a.bp.data.length-1|0)&&CQ(a.bp.data[e])){f=a.bp.data;g=e+1|0;if(C5(f[g])){h=d+1|0;c[d]=Fa(DB(a.bp.data[e],a.bp.data[g]));e=g;break a;}}h=d+1|0;c[d]=Eh(a.bp.data[e]);}e=e+1|0;d=h;}return AMm(b,0,d);}
function X_(a){var b,c,d,e,f,g,h;if(C8(a))return a;b=$rt_createIntArray(a.bp.data.length);c=b.data;d=0;e=0;while(e<a.bp.data.length){a:{if(e!=(a.bp.data.length-1|0)&&CQ(a.bp.data[e])){f=a.bp.data;g=e+1|0;if(C5(f[g])){h=d+1|0;c[d]=E$(DB(a.bp.data[e],a.bp.data[g]));e=g;break a;}}h=d+1|0;c[d]=DX(a.bp.data[e]);}e=e+1|0;d=h;}return AMm(b,0,d);}
function OZ(a,b){var c,d;if(b===null){b=new Dm;Bb(b,B(9));H(b);}APX=1;c=new Of;c.mM=I(C$,10);c.fc=(-1);c.gg=(-1);c.cp=(-1);d=new Gi;d.fa=1;d.dm=b;d.bv=$rt_createCharArray(O(b)+2|0);CM(Ho(b),0,d.bv,0,O(b));d.bv.data[d.bv.data.length-1|0]=0;d.bv.data[d.bv.data.length-2|0]=0;d.sr=d.bv.data.length;d.hM=0;ER(d);ER(d);c.e=d;c.dS=0;c.n7=Sa(c,(-1),c.dS,null);if(!Di(c.e))H(Cc(B(3),c.e.dm,c.e.fq));if(c.qy)c.n7.fO();return Tj(c,a);}
function AGb(a,b){return ABe(a,b);}
function AAX(){APW=new PW;}
function D9(){var a=this;C.call(a);a.oO=null;a.ga=null;a.lp=0;a.l1=0;a.kv=null;}
function APY(){var a=new D9();R(a);return a;}
function APZ(a){var b=new D9();Bb(b,a);return b;}
function R(a){a.lp=1;a.l1=1;}
function Bb(a,b){a.lp=1;a.l1=1;a.oO=b;}
function AF5(a){return a;}
function AK1(a){return a.oO;}
function AGx(a){return a.gv();}
function AAw(a){var b,c,d;b=a.gv();c=new W;Ba(c);c=E(c,Hv(Dw(a)));if(b===null)b=B(3);else{d=new W;Ba(d);b=X(E(E(d,B(10)),b));}return X(E(c,b));}
function Bv(a){Sb(a,Df());}
function Sb(a,b){var c,d,e,f,g;Hn(b,Hv(Dw(a)));c=a.gv();if(c!==null){d=new W;Ba(d);Hn(b,X(E(E(d,B(10)),c)));}a:{Zq(b);if(a.kv!==null){e=a.kv.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];Hn(b,B(11));W7(b,d);g=g+1|0;}}}if(a.ga!==null&&a.ga!==a){Hn(b,B(12));Sb(a.ga,b);}}
function K1(a,b){var c,d,e,f,g;Ft(b,Hv(Dw(a)));c=a.gv();if(c!==null){d=new W;Ba(d);Ft(b,X(E(E(d,B(10)),c)));}a:{RV(b);if(a.kv!==null){e=a.kv.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];Ft(b,B(13));Vu(b,d);g=g+1|0;}}}if(a.ga!==null&&a.ga!==a){Ft(b,B(12));K1(a.ga,b);}}
function DN(){D9.call(this);}
function GJ(){DN.call(this);}
function Wk(){GJ.call(this);}
function F4(){var a=this;C.call(a);a.A=null;a.bH=0;}
function AP0(){var a=new F4();Ba(a);return a;}
function APC(a){var b=new F4();FL(b,a);return b;}
function Ba(a){FL(a,16);}
function FL(a,b){a.A=$rt_createCharArray(b);}
function LM(a,b,c){return WF(a,a.bH,b,c);}
function WF(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c;}a:{if(c<d){if(e)Cq(a,b,b+1|0);else{Cq(a,b,b+2|0);f=a.A.data;g=b+1|0;f[b]=45;b=g;}a.A.data[b]=GI(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=K(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;Cq(a,b,b+i|0);if(e)e=b;else{f=a.A.data;e=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.A.data;b=e+1|0;f[e]=GI(c/k|0,d);c=c%k|0;k=k/d|0;e=b;}}}return a;}
function XV(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(Long_lt(c,Long_ZERO)){e=0;c=Long_neg(c);}a:{f=Long_fromInt(d);if(Long_lt(c,f)){if(e)Cq(a,b,b+1|0);else{Cq(a,b,b+2|0);g=a.A.data;h=b+1|0;g[b]=45;b=h;}a.A.data[b]=GI(c.lo,d);}else{i=1;j=Long_fromInt(1);while(true){k=Long_mul(j,f);if(Long_le(k,j))break;if(Long_gt(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;Cq(a,b,b+i|0);if(e)i=b;else{g=a.A.data;i=b+1|0;g[b]=45;}while(true){if(Long_le(j,Long_ZERO))break a;g=a.A.data;b=i+1|0;g[i]=GI(Long_div(c,j).lo,d);c=Long_rem(c,j);j=Long_div(j,
f);i=b;}}}return a;}
function Yf(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BN(c,0.0);if(!d){Cq(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=48;e=a.A.data;b=d+1|0;e[d]=46;a.A.data[b]=48;return a;}if(!d){Cq(a,b,b+4|0);e=a.A.data;d=b+1|0;e[b]=45;e=a.A.data;b=d+1|0;e[d]=48;e=a.A.data;d=b+1|0;e[b]=46;a.A.data[d]=48;return a;}if(isNaN(c)?1:0){Cq(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=78;e=a.A.data;b=d+1|0;e[d]=97;a.A.data[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Cq(a,b,b+8|0);d=b;}else{Cq(a,b,b+9|0);e=a.A.data;d=b+1|0;e[b]=45;}e=a.A.data;b=d+1|0;e[d]
=73;e=a.A.data;d=b+1|0;e[b]=110;e=a.A.data;b=d+1|0;e[d]=102;e=a.A.data;d=b+1|0;e[b]=105;e=a.A.data;b=d+1|0;e[d]=110;e=a.A.data;d=b+1|0;e[b]=105;e=a.A.data;b=d+1|0;e[d]=116;a.A.data[b]=121;return a;}f=AP1;X6(c,f);d=f.nk;g=f.mW;h=f.qI;i=1;j=1;if(h){h=1;j=2;}k=9;l=ALP(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=CB(k,i+1|0);g=0;}else if(g<0){d=d/AP2.data[ -g]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Cq(a,b,b+(j+k|0)|0);if(!h)h=b;else{e=a.A.data;h=b+1
|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.A.data;b=h+1|0;e[h]=(48+o|0)&65535;i=i+(-1)|0;if(i)h=b;else{e=a.A.data;h=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.A.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g;e=a.A.data;d=b+1|0;e[b]=45;}if(g<10)l=d;else{e=a.A.data;l=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}a.A.data[l]=(48+(g%10|0)|0)&65535;}return a;}
function UZ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=BN(c,0.0);if(!d){Cq(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=48;e=a.A.data;b=d+1|0;e[d]=46;a.A.data[b]=48;return a;}if(!d){Cq(a,b,b+4|0);e=a.A.data;d=b+1|0;e[b]=45;e=a.A.data;b=d+1|0;e[d]=48;e=a.A.data;d=b+1|0;e[b]=46;a.A.data[d]=48;return a;}if(isNaN(c)?1:0){Cq(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=78;e=a.A.data;b=d+1|0;e[d]=97;a.A.data[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Cq(a,b,b+8|0);d=b;}else{Cq(a,b,b+9|0);e=a.A.data;d=b+1|0;e[b]=45;}e=a.A.data;b=d+1|0;e[d]
=73;e=a.A.data;d=b+1|0;e[b]=110;e=a.A.data;b=d+1|0;e[d]=102;e=a.A.data;d=b+1|0;e[b]=105;e=a.A.data;b=d+1|0;e[d]=110;e=a.A.data;d=b+1|0;e[b]=105;e=a.A.data;b=d+1|0;e[d]=116;a.A.data[b]=121;return a;}f=AP3;WL(c,f);g=f.n8;h=f.mA;i=f.qx;j=1;k=1;if(i)k=2;l=18;d=AJ4(g);if(d>0)l=l-d|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=CB(l,j+1|0);h=0;}else if(h<0){g=Long_div(g,AP4.data[ -h]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Cq(a,b,b+(k+l|0)|0);if
(!i)i=b;else{e=a.A.data;i=b+1|0;e[b]=45;}m=new Long(1569325056, 23283064);n=0;while(n<l){if(Long_le(m,Long_ZERO))o=0;else{o=Long_div(g,m).lo;g=Long_rem(g,m);}e=a.A.data;b=i+1|0;e[i]=(48+o|0)&65535;j=j+(-1)|0;if(j)i=b;else{e=a.A.data;i=b+1|0;e[b]=46;}m=Long_div(m,Long_fromInt(10));n=n+1|0;}if(h){e=a.A.data;b=i+1|0;e[i]=69;if(h>=0)d=b;else{h= -h;e=a.A.data;d=b+1|0;e[b]=45;}if(h>=100){e=a.A.data;b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;e=a.A.data;j=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)j=d;else{e
=a.A.data;j=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}a.A.data[j]=(48+(h%10|0)|0)&65535;}return a;}
function ALP(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AJ4(b){var c,d,e,f;c=Long_fromInt(1);d=0;e=16;f=AP5.data.length-1|0;while(f>=0){if(Long_eq(Long_rem(b,Long_mul(c,AP5.data[f])),Long_ZERO)){d=d|e;c=Long_mul(c,AP5.data[f]);}e=e>>>1;f=f+(-1)|0;}return d;}
function CL(a,b){return a.pl(a.bH,b);}
function H$(a,b,c){Cq(a,b,b+1|0);a.A.data[b]=c;return a;}
function IE(a,b){var c;if(a.A.data.length>=b)return;c=a.A.data.length>=1073741823?2147483647:CB(b,CB(a.A.data.length*2|0,5));a.A=LO(a.A,c);}
function X(a){return FU(a.A,0,a.bH);}
function GE(a,b,c,d){return a.oA(a.bH,b,c,d);}
function GU(a,b,c,d,e){var f,g,h,i;Cq(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.A.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Fi(a,b){return a.nq(b,0,b.data.length);}
function Cq(a,b,c){var d,e;d=a.bH-b|0;a.jU((a.bH+c|0)-b|0);e=d-1|0;while(e>=0){a.A.data[c+e|0]=a.A.data[b+e|0];e=e+(-1)|0;}a.bH=a.bH+(c-b|0)|0;}
function F6(){}
function W(){F4.call(this);}
function Bh(){var a=new W();AM_(a);return a;}
function AM_(a){Ba(a);}
function E(a,b){Hu(a,a.bH,b);return a;}
function S(a,b){LM(a,b,10);return a;}
function V$(a,b){NI(a,a.bH,b);return a;}
function AGJ(a,b){Q3(a,a.bH,b);return a;}
function UQ(a,b){Ot(a,a.bH,b);return a;}
function GO(a,b){CL(a,b);return a;}
function AE6(a,b,c,d){GE(a,b,c,d);return a;}
function ALv(a,b){Fi(a,b);return a;}
function BX(a,b){R7(a,a.bH,b);return a;}
function GZ(a,b){PC(a,a.bH,b);return a;}
function NI(a,b,c){XV(a,b,c,10);return a;}
function Q3(a,b,c){Yf(a,b,c);return a;}
function Ot(a,b,c){UZ(a,b,c);return a;}
function AKC(a,b,c,d,e){GU(a,b,c,d,e);return a;}
function R7(a,b,c){Hu(a,b,c===null?B(8):c.df());return a;}
function PC(a,b,c){Hu(a,b,!c?B(14):B(15));return a;}
function AJs(a,b,c){H$(a,b,c);return a;}
function ABl(a,b,c){var d,e,f,g,h,i,j;d=BN(b,c);if(d<=0&&b<=a.bH){if(d){e=a.bH-c|0;a.bH=a.bH-(c-b|0)|0;d=0;while(d<e){f=a.A.data;g=b+1|0;h=a.A.data;i=c+1|0;f[b]=h[c];d=d+1|0;b=g;c=i;}}return a;}j=new FB;R(j);H(j);}
function Q5(a,b){var c,d,e,f;if(b>=0&&b<a.bH){a.bH=a.bH-1|0;while(b<a.bH){c=a.A.data;d=a.A.data;e=b+1|0;c[b]=d[e];b=e;}return a;}f=new FB;R(f);H(f);}
function Hu(a,b,c){var d,e,f;if(b>=0&&b<=a.bH){a:{if(c===null)c=B(8);else if(C8(c))break a;IE(a,a.bH+O(c)|0);d=a.bH-1|0;while(d>=b){a.A.data[d+O(c)|0]=a.A.data[d];d=d+(-1)|0;}a.bH=a.bH+O(c)|0;d=0;while(d<O(c)){e=a.A.data;f=b+1|0;e[b]=M(c,d);d=d+1|0;b=f;}}return a;}c=new FB;R(c);H(c);}
function Xd(a,b){a.bH=b;}
function Vk(a,b,c,d,e){var f,g,h,i,j;if(b>c){f=new BB;Bb(f,B(16));H(f);}while(b<c){g=d.data;h=e+1|0;i=a.A.data;j=b+1|0;g[e]=i[b];e=h;b=j;}}
function AHS(a,b,c,d,e){GU(a,b,c,d,e);return a;}
function AFr(a,b,c,d){GE(a,b,c,d);return a;}
function G1(a){return a.bH;}
function Bf(a){return X(a);}
function AH1(a,b){IE(a,b);}
function AH6(a,b,c){return PC(a,b,c);}
function AIU(a,b,c){return R7(a,b,c);}
function AIl(a,b,c){H$(a,b,c);return a;}
function ALo(a,b,c){return Ot(a,b,c);}
function AGM(a,b,c){return Q3(a,b,c);}
function AEz(a,b,c){return NI(a,b,c);}
function ANP(a,b,c){return Hu(a,b,c);}
function DJ(){C.call(this);}
function Er(){DJ.call(this);this.ev=0;}
var AP6=null;var AP7=null;function AAJ(a){var b=new Er();IX(b,a);return b;}
function IX(a,b){a.ev=b;}
function GV(b,c){var d,e,f,g,h,i,j;if(c>=2&&c<=36){if(b!==null&&!C8(b)){a:{d=0;e=0;switch(M(b,0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==O(b)){b=new Dp;R(b);H(b);}while(e<O(b)){g=e+1|0;h=MV(M(b,e));if(h<0){i=new Dp;j=new W;Ba(j);Bb(i,X(E(E(j,B(17)),b)));H(i);}if(h>=c){i=new Dp;j=new W;Ba(j);Bb(i,X(E(E(S(E(j,B(18)),c),B(10)),b)));H(i);}f=K(c,f)+h|0;if(f<0){if(g==O(b)&&f==(-2147483648)&&d)return (-2147483648);i=new Dp;j=new W;Ba(j);Bb(i,X(E(E(j,B(19)),b)));H(i);}e=g;}if(d)f= -f;return f;}b
=new Dp;Bb(b,B(20));H(b);}i=new Dp;b=new W;Ba(b);Bb(i,X(S(E(b,B(21)),c)));H(i);}
function IV(b){return GV(b,10);}
function DZ(b){var c;if(b>=(-128)&&b<=127){a:{if(AP7===null){AP7=I(Er,256);c=0;while(true){if(c>=AP7.data.length)break a;AP7.data[c]=AAJ(c-128|0);c=c+1|0;}}}return AP7.data[b+128|0];}return AAJ(b);}
function ADm(a){return a.ev;}
function KK(a){var b;b=a.ev;return LM(APC(20),b,10).df();}
function ACB(a){return a.ev>>>4^a.ev<<28^a.ev<<8^a.ev>>>24;}
function ANp(a,b){if(a===b)return 1;return b instanceof Er&&b.ev==a.ev?1:0;}
function Vl(a,b){return BN(a.ev,b.ev);}
function LS(b){var c,d;if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;b=d>>>8;if(!b)b=d;else c=c|8;d=b>>>4;if(!d)d=b;else c=c|4;b=d>>>2;if(!b)b=d;else c=c|2;if(b>>>1)c=c|1;return (32-c|0)-1|0;}
function HP(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function AHY(a,b){return Vl(a,b);}
function AAc(){AP6=F($rt_intcls());}
function Gx(){GJ.call(this);}
function AP8(a){var b=new Gx();N5(b,a);return b;}
function N5(a,b){Bb(a,b);}
function YF(){Gx.call(this);}
function AP9(a){var b=new YF();AEl(b,a);return b;}
function AEl(a,b){N5(a,b);}
function V0(){Gx.call(this);}
function AP$(a){var b=new V0();AEG(b,a);return b;}
function AEG(a,b){N5(a,b);}
function J(){D9.call(this);}
function BQ(){J.call(this);}
function FY(a){var b=new BQ();AMJ(b,a);return b;}
function AMJ(a,b){Bb(a,b);}
function CG(){}
function Fd(){}
function Ng(){}
function Ou(){}
function Ok(){}
function PI(){}
function Qo(){}
function ME(){}
function IN(){}
function Ts(){C.call(this);}
function AIg(a,b,c){a.DR($rt_str(b),JY(c,"handleEvent"));}
function AIB(a,b,c){a.Bd($rt_str(b),JY(c,"handleEvent"));}
function ADq(a,b){return a.u4(b);}
function AJB(a,b,c,d){a.zm($rt_str(b),JY(c,"handleEvent"),d?1:0);}
function AMH(a,b){return !!a.D1(b);}
function AEu(a){return a.w8();}
function ACJ(a,b,c,d){a.CD($rt_str(b),JY(c,"handleEvent"),d?1:0);}
function Bi(){C.call(this);}
var AP_=0;var AQa=null;var AQb=null;var AQc=null;var AQd=null;var AQe=null;var AQf=null;var AQg=null;var AQh=null;var AQi=null;var AQj=null;var AQk=null;var AQl=null;var AQm=null;var AQn=null;var AQo=null;var AQp=null;var AQq=null;var AQr=null;var AQs=null;var AQt=0;var AQu=0;var AQv=0.0;var AQw=0.0;var AQx=0;var AQy=0;var AQz=0;var AQA=0;var AQB=0;var AQC=null;var AQD=null;var AQE=null;var AQF=null;var AQG=null;var AQH=0;var AQI=null;var AQJ=null;var AQK=null;var AQL=null;var AQM=null;var AQN=null;var AQO=
Long_ZERO;var AQP=0;var AQQ=0;var AQR=0;var AQS=null;var AQT=null;var AQU=null;var AQV=0;var AQW=0;var AQX=0;var AQY=null;var AQZ=null;var AQ0=null;var AQ1=0;var AQ2=null;var AQ3=null;var AQ4=0.0;var AQ5=null;var AQ6=0;var AQ7=null;var AQ8=null;var AQ9=0;var AQ$=null;var AQ_=0;function T(){T=Bx(Bi);ADx();}
function M3(){T();return B(22);}
function I9(b){T();if(D8(b,B(23)))b=DM(b,1);return Ek(ARa,b);}
function WY(b){var c;T();c=I9(b);if(c===null)return null;return ACz(c,SY(B(24)));}
function VJ(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.wA=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.wV=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=AOV(callback);return thread.suspend(function(){try{ACR(b,callback);}catch($e){callback.wV($rt_exception($e));}});}
function ACR(b,c){var d,e;T();d=new XMLHttpRequest();e="arraybuffer";d.responseType=e;d.open("GET",$rt_ustr(b),!!1);b=new RH;b.oD=d;b.rS=c;b=Cy(b,"stateChanged");d.onreadystatechange=b;d.send();}
function Vc(b,c){var d,e,f,$$je,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:T();AQb=b;d=$rt_str(AQb.getAttribute("style"));e=AQb;f=new W;Ba(f);if(d===null)d=B(3);d=X(E(E(f,d),B(25)));e.setAttribute("style",$rt_ustr(d));AQg=window;AQa=AQg.document;AQc=AQa.createElement("canvas");AQx=b.clientWidth;AQy=b.clientHeight;f=AQc;e=AQx;f.width=e;f=AQc;e=AQy;f.height=e;AQd=AQc.getContext("2d");AQc.setAttribute("id","deevis589723589");f=AQc;b.appendChild(f);AQe
=AQa.createElement("canvas");b=AQe;f=AQx;b.width=f;b=AQe;f=AQy;b.height=f;b=AQe;e=Za();AQf=b.getContext("webgl2",e);if(AQf===null){b=new BQ;c=new W;Ba(c);Bb(b,X(E(E(E(c,B(26)),$rt_str(window.navigator.userAgent)),B(27))));H(b);}SZ(AQf);AQf.getExtension("EXT_texture_filter_anisotropic");b=AQg;e=new RI;AQi=e;b.addEventListener("contextmenu",Cy(e,"handleEvent"));b=AQc;e=new RQ;AQj=e;b.addEventListener("mousedown",Cy(e,"handleEvent"));b=AQc;e=new RR;AQk=e;b.addEventListener("mouseup",Cy(e,"handleEvent"));b=AQc;e
=new RO;AQl=e;b.addEventListener("mousemove",Cy(e,"handleEvent"));b=AQg;e=new RP;AQm=e;b.addEventListener("keydown",Cy(e,"handleEvent"));b=AQg;e=new RM;AQn=e;b.addEventListener("keyup",Cy(e,"handleEvent"));b=AQg;e=new RN;AQo=e;b.addEventListener("keypress",Cy(e,"handleEvent"));b=AQc;e=new RL;AQp=e;b.addEventListener("wheel",Cy(e,"handleEvent"));b=AQg;e=new OE;b.addEventListener("blur",Cy(e,"handleEvent"));b=AQg;e=new OD;b.addEventListener("focus",Cy(e,"handleEvent"));XM();$p=1;case 1:Ul();if(N()){break _;}$p
=2;case 2:VJ(c);if(N()){break _;}a:{try{Wi(AQh);break a;}catch($$e){$$je=D($$e);if($$je instanceof BI){f=$$je;}else{throw $$e;}}Bv(f);}AQ3=AIJ();KS(AQr);KS(AQs);return;default:FI();}}De().s(b,c,d,e,f,$p);}
function Ic(b){T();AQf.enable(b);}
function GP(b){T();AQf.disable(b);}
function Ss(){var b,c;T();b=new PV;b.fQ=AQf.createProgram();c=AQB+1|0;AQB=c;b.nr=c;return b;}
function K_(b){var c;T();c=new P0;c.fT=AQf.createShader(b);return c;}
function QR(b,c){var d;T();d=AQf;b=b.fQ;c=c.fT;d.attachShader(b,c);}
function NN(b,c){var d;T();d=AQf;b=b.fQ;c=c.fT;d.detachShader(b,c);}
function QW(b){var c;T();c=AQf;b=b.fT;c.compileShader(b);}
function Vw(b){var c;T();c=AQf;b=b.fQ;c.linkProgram(b);}
function LG(b,c){var d;T();d=AQf;b=b.fT;d.shaderSource(b,$rt_ustr(c));}
function MP(b){var c;T();c=AQf;b=b.fT;return $rt_str(c.getShaderInfoLog(b));}
function ABU(b){var c;T();c=AQf;b=b.fQ;return $rt_str(c.getProgramInfoLog(b));}
function Or(b){var c;T();c=AQf;b=b.fT;return c.getShaderParameter(b,35713)!=1?0:1;}
function AA3(b){var c;T();c=AQf;b=b.fQ;return c.getProgramParameter(b,35714)!=1?0:1;}
function Li(b){var c;T();c=AQf;b=b.fT;c.deleteShader(b);}
function J5(){var b;T();b=new Qa;b.sw=AQf.createBuffer();return b;}
function E_(b,c){var d;T();d=AQf;c=c!==null?c.sw:null;d.bindBuffer(b,c);}
function MQ(b,c,d){var e;T();e=AQf;c=c;e.bufferData(b,c,d);}
function Kk(b){T();AQf.enableVertexAttribArray(b);}
function CS(b,c){var d;T();d=AQf;b=b.fQ;d=d.getUniformLocation(b,$rt_ustr(c));if(d===null)b=null;else{b=new RW;b.gx=d;}return b;}
function JQ(b,c,d){var e;T();e=AQf;b=b.fQ;e.bindAttribLocation(b,c,$rt_ustr(d));}
function FK(b,c){var d;T();if(b!==null){d=AQf;b=b.gx;d.uniform1f(b,c);}}
function IP(b,c,d,e){var f;T();if(b!==null){f=AQf;b=b.gx;f.uniform3f(b,c,d,e);}}
function M4(b,c,d,e,f){var g,h;T();if(b!==null){g=AQf;h=b.gx;g.uniform4f(h,c,d,e,f);}}
function Pq(b,c){var d;T();if(b!==null){d=AQf;b=b.gx;d.uniform1i(b,c);}}
function Kl(b,c){var d,e;T();AQG.set(c.data);if(b!==null){d=AQf;e=b.gx;b=AQG;d.uniformMatrix4fv(e,!!0,b);}}
function PS(b){var c;T();if(b!==null&&AQH!=b.nr){AQH=b.nr;c=AQf;b=b.fQ;c.useProgram(b);}}
function Kq(b,c,d,e,f,g){T();AQf.vertexAttribPointer(b,c,d,!!e,f,g);}
function L0(){var b;T();b=new Rq;b.tb=AQf.createVertexArray();b.ph=0;return b;}
function Qu(b){var c;T();c=AQf;b=b!==null?b.tb:null;c.bindVertexArray(b);}
function Zl(b){var c,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:T();c=new ArrayBuffer(b.data.length);(new Uint8Array(c)).set(b.data);$p=1;case 1:$z=S2(c);if(N()){break _;}c=$z;return c;default:FI();}}De().s(b,c,$p);}
function S2(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.wA=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.wV=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=AOV(callback);return thread.suspend(function(){try{AG6(b,callback);}catch($e){callback.wV($rt_exception($e));}});}
function AG6(b,c){var d,e,f;T();d=AQa.createElement("img");e=new OH;e.d3=d;e.o2=c;d.addEventListener("load",Cy(e,"handleEvent"));f=new OG;f.ta=d;f.t8=c;d.addEventListener("error",Cy(f,"handleEvent"));e=$rt_str(Xz(b,"image/png"));if(e===null)CZ(c,null);else{b=$rt_ustr(e);d.src=b;}}
function ND(b){T();return b.byteLength;}
function MA(b){T();return b<=AQ8.data.length&&b>=0?AQ8.data[b]:(-1);}
function P3(){T();return AQh;}
function Qm(){T();return AQM;}
function Ih(){T();return AQr;}
function KB(){T();if(Long_gt(Long_sub(Bq(),AQO),Long_fromInt(3000))&&AQQ&&!(document.pointerLockElement!=null?1:0)){AQc.requestPointerLock();if(document.pointerLockElement!=null?1:0)AQQ=0;}}
function NF(){T();return AQN;}
function OI(b){T();return b.which;}
function So(b){T();return MA(b);}
function JM(){T();return AQs;}
function R8(b){T();AQA=b;return b;}
function Fk(){T();return AQI;}
function H1(){T();return AQJ;}
function QX(b){T();URL.revokeObjectURL($rt_ustr(b));}
function PB(){T();return AQP;}
function IB(b){T();AQP=b;return b;}
function NA(){T();return AQO;}
function ADx(){var b,c;AP_=0;AQa=null;AQb=null;AQc=null;AQd=null;AQe=null;AQf=null;AQg=null;AQh=null;AQi=null;AQj=null;AQk=null;AQl=null;AQm=null;AQn=null;AQo=null;AQp=null;AQq=I(Ca,0);AQr=XE();AQs=XE();AQt=0;AQu=0;AQv=0.0;AQw=0.0;AQx=0;AQy=0;AQz=0;AQA=1;AQB=0;AQC=$rt_createIntArray(4);AQD=new Uint8Array(new ArrayBuffer(4194304));AQE=new Float32Array(4);AQF=new Float32Array(9);AQG=new Float32Array(16);AQH=(-1);AQI=null;AQJ=null;AQK=null;AQL=null;AQM=$rt_createBooleanArray(8);AQN=$rt_createBooleanArray(256);AQO
=Long_ZERO;AQP=0;AQQ=0;AQR=0;AQS=ABW();AQT=ABW();AQU=null;AQV=0;AQW=0;AQX=0;AQY=XE();AQZ=null;AQ0=null;AQ1=0;AQ2=C9();AQ3=null;AQ4=0.029999999329447746;AQ5=C9();AQ6=0;b=I(Ca,256);c=b.data;c[0]=B(28);c[1]=B(29);c[2]=B(30);c[3]=B(31);c[4]=B(32);c[5]=B(33);c[6]=B(34);c[7]=B(35);c[8]=B(36);c[9]=B(37);c[10]=B(38);c[11]=B(2);c[12]=B(39);c[13]=B(40);c[14]=B(41);c[15]=B(42);c[16]=B(43);c[17]=B(44);c[18]=B(45);c[19]=B(46);c[20]=B(47);c[21]=B(48);c[22]=B(49);c[23]=B(50);c[24]=B(51);c[25]=B(52);c[26]=B(53);c[27]=B(54);c[28]
=B(55);c[29]=B(56);c[30]=B(57);c[31]=B(58);c[32]=B(59);c[33]=B(60);c[34]=B(61);c[35]=B(62);c[36]=B(63);c[37]=B(64);c[38]=B(65);c[39]=B(66);c[40]=B(67);c[41]=B(68);c[42]=B(69);c[43]=B(70);c[44]=B(71);c[45]=B(72);c[46]=B(73);c[47]=B(74);c[48]=B(75);c[49]=B(76);c[50]=B(77);c[51]=B(78);c[52]=B(79);c[53]=B(80);c[54]=B(81);c[55]=B(82);c[56]=B(83);c[57]=B(84);c[58]=B(85);c[59]=B(86);c[60]=B(87);c[61]=B(88);c[62]=B(89);c[63]=B(90);c[64]=B(91);c[65]=B(92);c[66]=B(93);c[67]=B(94);c[68]=B(95);c[69]=B(96);c[70]=B(97);c[71]
=B(98);c[72]=B(99);c[73]=B(100);c[74]=B(101);c[75]=B(102);c[76]=B(103);c[77]=B(104);c[78]=B(105);c[79]=B(106);c[80]=B(107);c[81]=B(108);c[82]=B(109);c[83]=B(110);c[84]=B(8);c[85]=B(8);c[86]=B(8);c[87]=B(111);c[88]=B(112);c[89]=B(8);c[90]=B(8);c[91]=B(8);c[92]=B(8);c[93]=B(8);c[94]=B(8);c[95]=B(8);c[96]=B(8);c[97]=B(8);c[98]=B(8);c[99]=B(8);c[100]=B(113);c[101]=B(114);c[102]=B(115);c[103]=B(116);c[104]=B(117);c[105]=B(118);c[106]=B(8);c[107]=B(8);c[108]=B(8);c[109]=B(8);c[110]=B(8);c[111]=B(8);c[112]=B(119);c[113]
=B(120);c[114]=B(8);c[115]=B(8);c[116]=B(8);c[117]=B(8);c[118]=B(8);c[119]=B(8);c[120]=B(8);c[121]=B(121);c[122]=B(8);c[123]=B(122);c[124]=B(8);c[125]=B(123);c[126]=B(8);c[127]=B(8);c[128]=B(8);c[129]=B(8);c[130]=B(8);c[131]=B(8);c[132]=B(8);c[133]=B(8);c[134]=B(8);c[135]=B(8);c[136]=B(8);c[137]=B(8);c[138]=B(8);c[139]=B(8);c[140]=B(8);c[141]=B(124);c[142]=B(8);c[143]=B(8);c[144]=B(125);c[145]=B(126);c[146]=B(127);c[147]=B(128);c[148]=B(129);c[149]=B(130);c[150]=B(131);c[151]=B(132);c[152]=B(8);c[153]=B(8);c[154]
=B(8);c[155]=B(8);c[156]=B(133);c[157]=B(134);c[158]=B(8);c[159]=B(8);c[160]=B(8);c[161]=B(8);c[162]=B(8);c[163]=B(8);c[164]=B(8);c[165]=B(8);c[166]=B(8);c[167]=B(135);c[168]=B(8);c[169]=B(8);c[170]=B(8);c[171]=B(8);c[172]=B(8);c[173]=B(8);c[174]=B(8);c[175]=B(8);c[176]=B(8);c[177]=B(8);c[178]=B(8);c[179]=B(136);c[180]=B(8);c[181]=B(137);c[182]=B(8);c[183]=B(138);c[184]=B(139);c[185]=B(8);c[186]=B(8);c[187]=B(8);c[188]=B(8);c[189]=B(8);c[190]=B(8);c[191]=B(8);c[192]=B(8);c[193]=B(8);c[194]=B(8);c[195]=B(8);c[196]
=B(140);c[197]=B(141);c[198]=B(8);c[199]=B(142);c[200]=B(143);c[201]=B(144);c[202]=B(8);c[203]=B(145);c[204]=B(8);c[205]=B(146);c[206]=B(8);c[207]=B(147);c[208]=B(148);c[209]=B(149);c[210]=B(150);c[211]=B(151);c[212]=B(8);c[213]=B(8);c[214]=B(8);c[215]=B(8);c[216]=B(8);c[217]=B(8);c[218]=B(152);c[219]=B(153);c[220]=B(154);c[221]=B(155);c[222]=B(156);c[223]=B(157);c[224]=B(8);c[225]=B(8);c[226]=B(8);c[227]=B(8);c[228]=B(8);c[229]=B(8);c[230]=B(8);c[231]=B(8);c[232]=B(8);c[233]=B(8);c[234]=B(8);c[235]=B(8);c[236]
=B(8);c[237]=B(8);c[238]=B(8);c[239]=B(8);c[240]=B(8);c[241]=B(8);c[242]=B(8);c[243]=B(8);c[244]=B(8);c[245]=B(8);c[246]=B(8);c[247]=B(8);c[248]=B(8);c[249]=B(8);c[250]=B(8);c[251]=B(8);c[252]=B(8);c[253]=B(8);c[254]=B(8);c[255]=B(8);AQ7=b;b=$rt_createIntArray(224);c=b.data;c[0]=(-1);c[1]=(-1);c[2]=(-1);c[3]=(-1);c[4]=(-1);c[5]=(-1);c[6]=(-1);c[7]=(-1);c[8]=14;c[9]=15;c[10]=(-1);c[11]=(-1);c[12]=(-1);c[13]=28;c[14]=(-1);c[15]=(-1);c[16]=42;c[17]=29;c[18]=56;c[19]=(-1);c[20]=(-1);c[21]=(-1);c[22]=(-1);c[23]=
(-1);c[24]=(-1);c[25]=(-1);c[26]=(-1);c[27]=1;c[28]=(-1);c[29]=(-1);c[30]=(-1);c[31]=(-1);c[32]=57;c[33]=210;c[34]=201;c[35]=207;c[36]=199;c[37]=203;c[38]=200;c[39]=205;c[40]=208;c[41]=205;c[42]=208;c[43]=(-1);c[44]=(-1);c[45]=210;c[46]=211;c[47]=211;c[48]=11;c[49]=2;c[50]=3;c[51]=4;c[52]=5;c[53]=6;c[54]=7;c[55]=8;c[56]=9;c[57]=10;c[58]=(-1);c[59]=(-1);c[60]=(-1);c[61]=(-1);c[62]=(-1);c[63]=(-1);c[64]=(-1);c[65]=30;c[66]=48;c[67]=46;c[68]=32;c[69]=18;c[70]=33;c[71]=34;c[72]=35;c[73]=23;c[74]=36;c[75]=37;c[76]
=38;c[77]=50;c[78]=49;c[79]=24;c[80]=25;c[81]=16;c[82]=19;c[83]=31;c[84]=20;c[85]=22;c[86]=47;c[87]=17;c[88]=45;c[89]=21;c[90]=44;c[91]=(-1);c[92]=(-1);c[93]=(-1);c[94]=(-1);c[95]=(-1);c[96]=(-1);c[97]=(-1);c[98]=(-1);c[99]=(-1);c[100]=(-1);c[101]=(-1);c[102]=(-1);c[103]=(-1);c[104]=(-1);c[105]=(-1);c[106]=(-1);c[107]=(-1);c[108]=(-1);c[109]=12;c[110]=52;c[111]=53;c[112]=(-1);c[113]=(-1);c[114]=(-1);c[115]=(-1);c[116]=(-1);c[117]=(-1);c[118]=(-1);c[119]=(-1);c[120]=(-1);c[121]=(-1);c[122]=(-1);c[123]=(-1);c[124]
=(-1);c[125]=(-1);c[126]=(-1);c[127]=(-1);c[128]=(-1);c[129]=(-1);c[130]=(-1);c[131]=(-1);c[132]=(-1);c[133]=(-1);c[134]=(-1);c[135]=(-1);c[136]=(-1);c[137]=(-1);c[138]=(-1);c[139]=(-1);c[140]=(-1);c[141]=(-1);c[142]=(-1);c[143]=(-1);c[144]=(-1);c[145]=(-1);c[146]=(-1);c[147]=(-1);c[148]=(-1);c[149]=(-1);c[150]=(-1);c[151]=(-1);c[152]=(-1);c[153]=(-1);c[154]=(-1);c[155]=(-1);c[156]=(-1);c[157]=(-1);c[158]=(-1);c[159]=(-1);c[160]=(-1);c[161]=(-1);c[162]=(-1);c[163]=(-1);c[164]=(-1);c[165]=(-1);c[166]=(-1);c[167]
=(-1);c[168]=(-1);c[169]=(-1);c[170]=(-1);c[171]=(-1);c[172]=(-1);c[173]=(-1);c[174]=(-1);c[175]=(-1);c[176]=(-1);c[177]=(-1);c[178]=(-1);c[179]=(-1);c[180]=(-1);c[181]=(-1);c[182]=(-1);c[183]=(-1);c[184]=(-1);c[185]=(-1);c[186]=39;c[187]=13;c[188]=51;c[189]=12;c[190]=52;c[191]=53;c[192]=(-1);c[193]=(-1);c[194]=(-1);c[195]=(-1);c[196]=(-1);c[197]=(-1);c[198]=(-1);c[199]=(-1);c[200]=(-1);c[201]=(-1);c[202]=(-1);c[203]=(-1);c[204]=(-1);c[205]=(-1);c[206]=(-1);c[207]=(-1);c[208]=(-1);c[209]=(-1);c[210]=(-1);c[211]
=(-1);c[212]=(-1);c[213]=(-1);c[214]=(-1);c[215]=(-1);c[216]=(-1);c[217]=(-1);c[218]=(-1);c[219]=(-1);c[220]=26;c[221]=43;c[222]=27;c[223]=40;AQ8=b;AQ9=0;AQ$=new Int32Array(new ArrayBuffer(2100000));AQ_=0;}
function SZ(b){window.currentContext=b;}
function XM(){if (!XM.$native){
XM.$native=function(){return (function(){window.eagsFileChooser = {
inputElement: null,
openFileChooser: function(ext, mime){
var el = window.eagsFileChooser.inputElement = document.createElement("input");
el.type = "file";
el.multiple = false;
el.addEventListener("change", function(evt){
var f = window.eagsFileChooser.inputElement.files;
if(f.length == 0){
window.eagsFileChooser.getFileChooserResult = null;
}else{
(async function(){
window.eagsFileChooser.getFileChooserResult = await f[0].arrayBuffer();
window.eagsFileChooser.getFileChooserResultName = f[0].name;
})();
}
});
window.eagsFileChooser.getFileChooserResult = null;
window.eagsFileChooser.getFileChooserResultName = null;
el.accept = mime;
el.click();
},
getFileChooserResult: null,
getFileChooserResultName: null
};})();};XM=XM.$native;}return XM();}
function Za(){return {antialias:false,depth:true,powerPreference:"high-performance",desynchronized:false,preserveDrawingBuffer:false,premultipliedAlpha:false,alpha:false};}
function Xz(b,c){return URL.createObjectURL(new Blob([b],{type:c}));}
function Xv(b){if(b.commit)b.commit();}
function R9(){}
function Gg(){}
function J_(){}
function En(){C.call(this);this.jX=null;}
function ARb(){var a=new En();JU(a);return a;}
function JU(a){a.jX=a;}
function Jh(){En.call(this);this.js=null;}
function AC5(a){return;}
function AFY(a){return;}
function AJ8(a,b,c,d){var e,f;if(c>=0){e=b.data.length;if(c<=e&&d>=0&&d<=(e-c|0)){if(!d)return;GE(a.js,b,c,d);return;}}f=new BB;R(f);H(f);}
function Vi(){var a=this;En.call(a);a.gp=null;a.vs=0;a.tE=0;}
function Yr(a){var b=new Vi();ALX(b,a);return b;}
function ALX(a,b){if(b!==null){a.jX=b;a.tE=0;a.gp=b;return;}b=new Dm;R(b);H(b);}
function UX(a){var $$je;if(a.gp!==null){a:{try{a.gp.eT();break a;}catch($$e){$$je=D($$e);if($$je instanceof BI){}else{throw $$e;}}FW(a);}a.gp=null;}}
function Z1(a){var $$je;a:{if(a.gp===null)FW(a);else{try{a.gp.jm();break a;}catch($$e){$$je=D($$e);if($$je instanceof BI){}else{throw $$e;}}FW(a);}}}
function Ft(a,b){if(b===null)b=Nf(null);Td(a,b);}
function RV(a){Ft(a,B(158));if(a.tE)Z1(a);}
function Vu(a,b){Eu(a,Nf(b));}
function Eu(a,b){Ft(a,b);RV(a);}
function FW(a){a.vs=1;}
function ABG(a,b){U9(a,b,0,b.data.length);}
function U9(a,b,c,d){var $$je;a:{if(a.gp===null)FW(a);else{try{a.gp.nQ(b,c,d);break a;}catch($$e){$$je=D($$e);if($$je instanceof BI){}else{throw $$e;}}FW(a);}}}
function Td(a,b){ABG(a,Ho(b));}
function ZH(){C.call(this);}
function AAl(){C.call(this);}
function HO(){}
function NL(){var a=this;C.call(a);a.l=0;a.c=0;a.P=null;a.g=null;a.H=null;a.d=null;a.bX=null;a.fC=null;a.xt=null;a.cx=0;a.cF=null;a.eB=null;a.em=0;a.G=null;a.po=null;a.cv=null;a.nF=null;a.td=null;a.be=0;a.mV=null;a.rM=0;a.fy=null;a.cs=0;a.xM=null;a.bm=null;a.F=null;a.u_=null;a.x7=0;a.cb=0;a.cl=null;a.b7=0;a.fe=0;}
function BA(a,b){if(!(a.G instanceof E3)){if(a.G!==null)a.G.sC();a.G=b;if(b===null)D3(a);else{if(a.b7){YP(a.d);a.b7=0;WO(0);}VT(b,a,(a.l*240|0)/a.c|0,(a.c*240|0)/a.c|0);a.cs=0;}}}
function B2(b){var c,d,e,f;Bz();T();c=AQf.getError();if(c==(-144))c=(-144);if(c){a:{switch(c){case -144:break;case 1280:d=B(159);break a;case 1281:d=B(160);break a;case 1282:d=B(161);break a;case 1285:d=B(162);break a;default:d=B(163);break a;}d=B(164);}Cg(D2(),B(165));e=D2();f=new W;Ba(f);Cg(e,X(E(E(f,B(166)),b)));e=D2();f=new W;Ba(f);Cg(e,X(E(E(S(f,c),B(10)),d)));e=new J;Bb(e,b);Bv(e);}}
function Bc(a){var b,$$je;a:{try{ANg(a.g,ADF(J9(B(167))));break a;}catch($$e){$$je=D($$e);if($$je instanceof J){b=$$je;}else{throw $$e;}}Bv(b);}}
function Z7(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD,$$je,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();bD=$T.l();bC=$T.l();bB=$T.l();bA=$T.l();bz=$T.l();by=$T.l();bx=$T.l();bw=$T.l();bv=$T.l();bu=$T.l();bt=$T.l();bs=$T.l();br=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y
=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.cb=1;a.l=UP();a.c=AA9();B2(B(168));Bd(3553);TB(7425);XT(1.0);Bd(2929);E0(515);Bd(3008);AAZ(516,0.0);I3(1029);V(5889);Y();V(5888);B2(B(169));b=new OX;c=B(170);$p=1;case 1:ABO(b,c);if(N()){break _;}a.eB=b;AAn(QK(AK9(256)),256);BF(0,0,a.l,a.c);a:{try{if(a.mV
!==null){c=a.mV;d=a.rM;$p=2;continue _;}c=YZ(a.nF,WM(J9(B(167))));if(!(c===null?0:1))c=Zk(a.nF,WM(J9(B(167))));d=c===null?0:1;if(!d)break a;$p=6;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){e=$$je;}else{throw $$e;}}Bv(e);d=0;}if(!d){d=1;$p=3;continue _;}a.H=OS(a.cF);a.bX=R_(a.g,a.cF);f=LK(B(171),Bf(GO(E(Bh(),B(172)),47)));if(!Gn(f)&&!HM(f))H(FY(Bf(BX(E(Bh(),B(173)),f))));a.F=K9(a,f);a.d=Nq(a.g,Qv(a.F));Du(a.d);if(a.g!==null){c=a.g;$p=4;continue _;}B2(B(174));a.fy=Jm(a,a.l,a.c);g=Bq();d=0;b:{c:{d:
{e:{f:{try{while(a.cb){if(a.cx)break f;try{h=d;i=a.P;j=Bq();k=Long_sub(j,i.Q);l=Long_div(Cd(),Long_fromInt(1000000));if(Long_gt(k,Long_fromInt(1000))){h=d;m=Long_toNumber(k)/Long_toNumber(Long_sub(l,i.R));i.B=i.B+(m-i.B)*0.20000000298023224;i.Q=j;i.R=l;}h=d;if(Long_lt(k,Long_ZERO)){h=d;i.Q=j;i.R=l;}h=d;n=Long_toNumber(l)/1000.0;m=(n-i.bA)*i.B;i.bA=n;if(m<0.0){h=d;m=0.0;}h=d;if(m>1.0){h=d;m=1.0;}h=d;i.h=i.h+m*i.cu*i.cj;i.q=i.h|0;if(i.q>100){h=d;i.q=100;}h=d;i.h=i.h-i.q;i.bD=i.h;o=0;h=d;if(o<a.P.q){h=d;a.be=a.be
+1|0;$p=7;continue _;}h=d;B2(B(175));p=a.P.bD;q=a.cv;if(q.bC){h=d;if(!BJ()){h=d;Ce(q.a);}}h=d;q.bC=BJ();if(q.a.b7){h=d;r=CA();s=Cx();t=1;if(q.a.F.b_){h=d;t=(-1);}h=d;Cu(q.a.d,r,K(s,t));}h=d;if(q.a.cs){h=d;u=Long_fromInt(5);$p=8;continue _;}h=d;v=(q.a.l*240|0)/q.a.c|0;w=(q.a.c*240|0)/q.a.c|0;x=K(Cz(),v)/q.a.l|0;y=(w-(K(CD(),w)/q.a.c|0)|0)-1|0;if(q.a.g===null){h=d;BF(0,0,q.a.l,q.a.c);BG(0.0,0.0,0.0,0.0);BD(16640);V(5889);Y();V(5888);Y();Ch(q);h=d;if(q.a.G===null){h=d;$p=9;continue _;}h=d;c=q.a.G;$p=11;continue _;}h
=d;z=q.a.d;ba=q.a.g;bb=q.a.H;bc=q.a.bX;BF(0,0,q.a.l,q.a.c);bd=q.a.g;be=q.a.d;bf=CF(1.0/(4-q.a.F.br|0),0.25);bg=1.0-bf;q.k=0.6000000238418579*bg+bf;q.i=0.800000011920929*bg+bf;q.j=1.0*bg+bf;q.k=q.k*q.E;q.i=q.i*q.E;q.j=q.j*q.E;Bj();bh=ARc.data[Bp(bd,be.r|0,be.p+0.11999999731779099|0,be.s|0)];if(bh!==null){h=d;if(bh.bd()!==ARd){h=d;bi=bh.bd();if(bi===ARe){h=d;q.k=0.019999999552965164;q.i=0.019999999552965164;q.j=0.20000000298023224;}else{h=d;if(bi===ARf){h=d;q.k=0.6000000238418579;q.i=0.10000000149011612;q.j=0.0;}}}}h
=d;BG(q.k,q.i,q.j,0.0);BD(16640);c=q.a.d;bf=c.D+(c.ba-c.D)*p;bj=c.C+(c.bc-c.C)*p;bk=BC(c.y+(c.r-c.y)*p,c.z+(c.p-c.z)*p,c.x+(c.s-c.x)*p);m= -bj*3.141592653589793/180.0+3.141592653589793;bj=Bo(m);bl=Bn(m);m= -bf*3.141592653589793/180.0;bf=Bo(m);bg=Bn(m);bm=bl*bf;bf=bj*bf;bn=bm*5.0;bo=bg*5.0;bf=bf*5.0;bp=BC(bk.bk+bn,bk.bl+bo,bk.bj+bf);q.a.bm=Cm(q.a.g,bk,bp);q.E=1.0;q.bz=512>>(q.a.F.br<<1);V(5889);Y();Cs(70.0,q.a.l/q.a.c,0.05000000074505806,q.bz);V(5888);Y();bq=q.a.d;Bt(0.0,0.0,(-0.30000001192092896));By(bq.D+(bq.ba
-bq.D)*p,1.0,0.0,0.0);By(bq.C+(bq.bc-bq.C)*p,0.0,1.0,0.0);Bt( -(bq.y+(bq.r-bq.y)*p), -(bq.z+(bq.p-bq.z)*p), -(bq.x+(bq.s-bq.x)*p));Bd(2884);br=Cn();bs=q.a.H;r=0;while(true){h=d;if(r>=bs.bh.data.length)break;h=d;Cj(bs.bh.data[r],br);r=r+1|0;}h=d;c=q.a.H;bt=CI(CH(z));Cr(bt,c.bu);s=4;bu=Ck(bt);g:{while(true){h=d;if(!bu.b9())break g;h=d;bv=bu.b2();Co(bv);Cw(c.bu,bv);s=s+(-1)|0;if(!s)break;h=d;}h=d;}h=d;bw=Cl(ba,z.r,z.p,z.s,0.10000000149011612);B7(q);Bd(2912);r=0;$p=12;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J)
{bx=$$je;}else{throw $$e;}}BA(a,CV(B(176),Bf(E(BX(E(Bh(),B(177)),bx),B(178)))));Bv(bx);d=h;while(true){u=Bq();j=Long_add(g,Long_fromInt(1000));if(Long_lt(u,j))break;c=E(S(Bh(),d),B(179));Cp();a.cl=Bf(E(S(c,ARg),B(180)));ARg=0;d=0;g=j;}}}catch($$e){$$je=D($$e);if($$je instanceof Bs){break e;}else if($$je instanceof J){by=$$je;break d;}else{c=$$je;break c;}}Bc(a);return;}try{u=Long_fromInt(100);$p=5;continue _;}catch($$e){$$je=D($$e);if($$je instanceof Bs){}else if($$je instanceof J){by=$$je;break d;}else{c=$$je;break c;}}}Bc(a);return;}try
{Bv(by);break b;}catch($$e){$$je=D($$e);c=$$je;}}Bc(a);H(c);}Bc(a);return;case 2:a:{try{$z=Uc(a,c,d);if(N()){break _;}d=$z;break a;}catch($$e){$$je=D($$e);if($$je instanceof J){e=$$je;}else{throw $$e;}}Bv(e);d=0;}if(!d){d=1;$p=3;continue _;}a.H=OS(a.cF);a.bX=R_(a.g,a.cF);f=LK(B(171),Bf(GO(E(Bh(),B(172)),47)));if(!Gn(f)&&!HM(f))H(FY(Bf(BX(E(Bh(),B(173)),f))));a.F=K9(a,f);a.d=Nq(a.g,Qv(a.F));Du(a.d);if(a.g!==null){c=a.g;$p=4;continue _;}B2(B(174));a.fy=Jm(a,a.l,a.c);g=Bq();d=0;h:{i:{j:{k:{l:{try{while(a.cb){if
(a.cx)break l;try{h=d;i=a.P;j=Bq();k=Long_sub(j,i.Q);l=Long_div(Cd(),Long_fromInt(1000000));if(Long_gt(k,Long_fromInt(1000))){h=d;m=Long_toNumber(k)/Long_toNumber(Long_sub(l,i.R));i.B=i.B+(m-i.B)*0.20000000298023224;i.Q=j;i.R=l;}h=d;if(Long_lt(k,Long_ZERO)){h=d;i.Q=j;i.R=l;}h=d;n=Long_toNumber(l)/1000.0;m=(n-i.bA)*i.B;i.bA=n;if(m<0.0){h=d;m=0.0;}h=d;if(m>1.0){h=d;m=1.0;}h=d;i.h=i.h+m*i.cu*i.cj;i.q=i.h|0;if(i.q>100){h=d;i.q=100;}h=d;i.h=i.h-i.q;i.bD=i.h;o=0;h=d;if(o<a.P.q){h=d;a.be=a.be+1|0;$p=7;continue _;}h
=d;B2(B(175));p=a.P.bD;q=a.cv;if(q.bC){h=d;if(!BJ()){h=d;Ce(q.a);}}h=d;q.bC=BJ();if(q.a.b7){h=d;r=CA();s=Cx();t=1;if(q.a.F.b_){h=d;t=(-1);}h=d;Cu(q.a.d,r,K(s,t));}h=d;if(q.a.cs){h=d;u=Long_fromInt(5);$p=8;continue _;}h=d;v=(q.a.l*240|0)/q.a.c|0;w=(q.a.c*240|0)/q.a.c|0;x=K(Cz(),v)/q.a.l|0;y=(w-(K(CD(),w)/q.a.c|0)|0)-1|0;if(q.a.g===null){h=d;BF(0,0,q.a.l,q.a.c);BG(0.0,0.0,0.0,0.0);BD(16640);V(5889);Y();V(5888);Y();Ch(q);h=d;if(q.a.G===null){h=d;$p=9;continue _;}h=d;c=q.a.G;$p=11;continue _;}h=d;z=q.a.d;ba=q.a.g;bb
=q.a.H;bc=q.a.bX;BF(0,0,q.a.l,q.a.c);bd=q.a.g;be=q.a.d;bf=CF(1.0/(4-q.a.F.br|0),0.25);bg=1.0-bf;q.k=0.6000000238418579*bg+bf;q.i=0.800000011920929*bg+bf;q.j=1.0*bg+bf;q.k=q.k*q.E;q.i=q.i*q.E;q.j=q.j*q.E;Bj();bh=ARc.data[Bp(bd,be.r|0,be.p+0.11999999731779099|0,be.s|0)];if(bh!==null){h=d;if(bh.bd()!==ARd){h=d;bi=bh.bd();if(bi===ARe){h=d;q.k=0.019999999552965164;q.i=0.019999999552965164;q.j=0.20000000298023224;}else{h=d;if(bi===ARf){h=d;q.k=0.6000000238418579;q.i=0.10000000149011612;q.j=0.0;}}}}h=d;BG(q.k,q.i,
q.j,0.0);BD(16640);c=q.a.d;bf=c.D+(c.ba-c.D)*p;bj=c.C+(c.bc-c.C)*p;bk=BC(c.y+(c.r-c.y)*p,c.z+(c.p-c.z)*p,c.x+(c.s-c.x)*p);m= -bj*3.141592653589793/180.0+3.141592653589793;bj=Bo(m);bl=Bn(m);m= -bf*3.141592653589793/180.0;bf=Bo(m);bg=Bn(m);bm=bl*bf;bf=bj*bf;bn=bm*5.0;bo=bg*5.0;bf=bf*5.0;bp=BC(bk.bk+bn,bk.bl+bo,bk.bj+bf);q.a.bm=Cm(q.a.g,bk,bp);q.E=1.0;q.bz=512>>(q.a.F.br<<1);V(5889);Y();Cs(70.0,q.a.l/q.a.c,0.05000000074505806,q.bz);V(5888);Y();bq=q.a.d;Bt(0.0,0.0,(-0.30000001192092896));By(bq.D+(bq.ba-bq.D)*p,
1.0,0.0,0.0);By(bq.C+(bq.bc-bq.C)*p,0.0,1.0,0.0);Bt( -(bq.y+(bq.r-bq.y)*p), -(bq.z+(bq.p-bq.z)*p), -(bq.x+(bq.s-bq.x)*p));Bd(2884);br=Cn();bs=q.a.H;r=0;while(true){h=d;if(r>=bs.bh.data.length)break;h=d;Cj(bs.bh.data[r],br);r=r+1|0;}h=d;c=q.a.H;bt=CI(CH(z));Cr(bt,c.bu);s=4;bu=Ck(bt);m:{while(true){h=d;if(!bu.b9())break m;h=d;bv=bu.b2();Co(bv);Cw(c.bu,bv);s=s+(-1)|0;if(!s)break;h=d;}h=d;}h=d;bw=Cl(ba,z.r,z.p,z.s,0.10000000149011612);B7(q);Bd(2912);r=0;$p=12;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J)
{bx=$$je;}else{throw $$e;}}BA(a,CV(B(176),Bf(E(BX(E(Bh(),B(177)),bx),B(178)))));Bv(bx);d=h;while(true){u=Bq();j=Long_add(g,Long_fromInt(1000));if(Long_lt(u,j))break;c=E(S(Bh(),d),B(179));Cp();a.cl=Bf(E(S(c,ARg),B(180)));ARg=0;d=0;g=j;}}}catch($$e){$$je=D($$e);if($$je instanceof Bs){break k;}else if($$je instanceof J){by=$$je;break j;}else{c=$$je;break i;}}Bc(a);return;}try{u=Long_fromInt(100);$p=5;continue _;}catch($$e){$$je=D($$e);if($$je instanceof Bs){}else if($$je instanceof J){by=$$je;break j;}else{c=$$je;break i;}}}Bc(a);return;}try
{Bv(by);break h;}catch($$e){$$je=D($$e);c=$$je;}}Bc(a);H(c);}Bc(a);return;case 3:UD(a,d);if(N()){break _;}a.H=OS(a.cF);a.bX=R_(a.g,a.cF);f=LK(B(171),Bf(GO(E(Bh(),B(172)),47)));if(!Gn(f)&&!HM(f))H(FY(Bf(BX(E(Bh(),B(173)),f))));a.F=K9(a,f);a.d=Nq(a.g,Qv(a.F));Du(a.d);if(a.g!==null){c=a.g;$p=4;continue _;}B2(B(174));a.fy=Jm(a,a.l,a.c);g=Bq();d=0;n:{o:{p:{h:{i:{try{while(a.cb){if(a.cx)break i;try{h=d;i=a.P;j=Bq();k=Long_sub(j,i.Q);l=Long_div(Cd(),Long_fromInt(1000000));if(Long_gt(k,Long_fromInt(1000))){h=d;m=Long_toNumber(k)
/Long_toNumber(Long_sub(l,i.R));i.B=i.B+(m-i.B)*0.20000000298023224;i.Q=j;i.R=l;}h=d;if(Long_lt(k,Long_ZERO)){h=d;i.Q=j;i.R=l;}h=d;n=Long_toNumber(l)/1000.0;m=(n-i.bA)*i.B;i.bA=n;if(m<0.0){h=d;m=0.0;}h=d;if(m>1.0){h=d;m=1.0;}h=d;i.h=i.h+m*i.cu*i.cj;i.q=i.h|0;if(i.q>100){h=d;i.q=100;}h=d;i.h=i.h-i.q;i.bD=i.h;o=0;h=d;if(o<a.P.q){h=d;a.be=a.be+1|0;$p=7;continue _;}h=d;B2(B(175));p=a.P.bD;q=a.cv;if(q.bC){h=d;if(!BJ()){h=d;Ce(q.a);}}h=d;q.bC=BJ();if(q.a.b7){h=d;r=CA();s=Cx();t=1;if(q.a.F.b_){h=d;t=(-1);}h=d;Cu(q.a.d,
r,K(s,t));}h=d;if(q.a.cs){h=d;u=Long_fromInt(5);$p=8;continue _;}h=d;v=(q.a.l*240|0)/q.a.c|0;w=(q.a.c*240|0)/q.a.c|0;x=K(Cz(),v)/q.a.l|0;y=(w-(K(CD(),w)/q.a.c|0)|0)-1|0;if(q.a.g===null){h=d;BF(0,0,q.a.l,q.a.c);BG(0.0,0.0,0.0,0.0);BD(16640);V(5889);Y();V(5888);Y();Ch(q);h=d;if(q.a.G===null){h=d;$p=9;continue _;}h=d;c=q.a.G;$p=11;continue _;}h=d;z=q.a.d;ba=q.a.g;bb=q.a.H;bc=q.a.bX;BF(0,0,q.a.l,q.a.c);bd=q.a.g;be=q.a.d;bf=CF(1.0/(4-q.a.F.br|0),0.25);bg=1.0-bf;q.k=0.6000000238418579*bg+bf;q.i=0.800000011920929*
bg+bf;q.j=1.0*bg+bf;q.k=q.k*q.E;q.i=q.i*q.E;q.j=q.j*q.E;Bj();bh=ARc.data[Bp(bd,be.r|0,be.p+0.11999999731779099|0,be.s|0)];if(bh!==null){h=d;if(bh.bd()!==ARd){h=d;bi=bh.bd();if(bi===ARe){h=d;q.k=0.019999999552965164;q.i=0.019999999552965164;q.j=0.20000000298023224;}else{h=d;if(bi===ARf){h=d;q.k=0.6000000238418579;q.i=0.10000000149011612;q.j=0.0;}}}}h=d;BG(q.k,q.i,q.j,0.0);BD(16640);c=q.a.d;bf=c.D+(c.ba-c.D)*p;bj=c.C+(c.bc-c.C)*p;bk=BC(c.y+(c.r-c.y)*p,c.z+(c.p-c.z)*p,c.x+(c.s-c.x)*p);m= -bj*3.141592653589793/
180.0+3.141592653589793;bj=Bo(m);bl=Bn(m);m= -bf*3.141592653589793/180.0;bf=Bo(m);bg=Bn(m);bm=bl*bf;bf=bj*bf;bn=bm*5.0;bo=bg*5.0;bf=bf*5.0;bp=BC(bk.bk+bn,bk.bl+bo,bk.bj+bf);q.a.bm=Cm(q.a.g,bk,bp);q.E=1.0;q.bz=512>>(q.a.F.br<<1);V(5889);Y();Cs(70.0,q.a.l/q.a.c,0.05000000074505806,q.bz);V(5888);Y();bq=q.a.d;Bt(0.0,0.0,(-0.30000001192092896));By(bq.D+(bq.ba-bq.D)*p,1.0,0.0,0.0);By(bq.C+(bq.bc-bq.C)*p,0.0,1.0,0.0);Bt( -(bq.y+(bq.r-bq.y)*p), -(bq.z+(bq.p-bq.z)*p), -(bq.x+(bq.s-bq.x)*p));Bd(2884);br=Cn();bs=q.a.H;r
=0;while(true){h=d;if(r>=bs.bh.data.length)break;h=d;Cj(bs.bh.data[r],br);r=r+1|0;}h=d;c=q.a.H;bt=CI(CH(z));Cr(bt,c.bu);s=4;bu=Ck(bt);q:{while(true){h=d;if(!bu.b9())break q;h=d;bv=bu.b2();Co(bv);Cw(c.bu,bv);s=s+(-1)|0;if(!s)break;h=d;}h=d;}h=d;bw=Cl(ba,z.r,z.p,z.s,0.10000000149011612);B7(q);Bd(2912);r=0;$p=12;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;}else{throw $$e;}}BA(a,CV(B(176),Bf(E(BX(E(Bh(),B(177)),bx),B(178)))));Bv(bx);d=h;while(true){u=Bq();j=Long_add(g,Long_fromInt(1000));if
(Long_lt(u,j))break;c=E(S(Bh(),d),B(179));Cp();a.cl=Bf(E(S(c,ARg),B(180)));ARg=0;d=0;g=j;}}}catch($$e){$$je=D($$e);if($$je instanceof Bs){break h;}else if($$je instanceof J){by=$$je;break p;}else{c=$$je;break o;}}Bc(a);return;}try{u=Long_fromInt(100);$p=5;continue _;}catch($$e){$$je=D($$e);if($$je instanceof Bs){}else if($$je instanceof J){by=$$je;break p;}else{c=$$je;break o;}}}Bc(a);return;}try{Bv(by);break n;}catch($$e){$$je=D($$e);c=$$je;}}Bc(a);H(c);}Bc(a);return;case 4:Y9(a,c);if(N()){break _;}B2(B(174));a.fy
=Jm(a,a.l,a.c);g=Bq();d=0;a:{r:{n:{o:{p:{try{while(a.cb){if(a.cx)break p;try{h=d;i=a.P;j=Bq();k=Long_sub(j,i.Q);l=Long_div(Cd(),Long_fromInt(1000000));if(Long_gt(k,Long_fromInt(1000))){h=d;m=Long_toNumber(k)/Long_toNumber(Long_sub(l,i.R));i.B=i.B+(m-i.B)*0.20000000298023224;i.Q=j;i.R=l;}h=d;if(Long_lt(k,Long_ZERO)){h=d;i.Q=j;i.R=l;}h=d;n=Long_toNumber(l)/1000.0;m=(n-i.bA)*i.B;i.bA=n;if(m<0.0){h=d;m=0.0;}h=d;if(m>1.0){h=d;m=1.0;}h=d;i.h=i.h+m*i.cu*i.cj;i.q=i.h|0;if(i.q>100){h=d;i.q=100;}h=d;i.h=i.h-i.q;i.bD=
i.h;o=0;h=d;if(o<a.P.q){h=d;a.be=a.be+1|0;$p=7;continue _;}h=d;B2(B(175));p=a.P.bD;q=a.cv;if(q.bC){h=d;if(!BJ()){h=d;Ce(q.a);}}h=d;q.bC=BJ();if(q.a.b7){h=d;r=CA();s=Cx();t=1;if(q.a.F.b_){h=d;t=(-1);}h=d;Cu(q.a.d,r,K(s,t));}h=d;if(q.a.cs){h=d;u=Long_fromInt(5);$p=8;continue _;}h=d;v=(q.a.l*240|0)/q.a.c|0;w=(q.a.c*240|0)/q.a.c|0;x=K(Cz(),v)/q.a.l|0;y=(w-(K(CD(),w)/q.a.c|0)|0)-1|0;if(q.a.g===null){h=d;BF(0,0,q.a.l,q.a.c);BG(0.0,0.0,0.0,0.0);BD(16640);V(5889);Y();V(5888);Y();Ch(q);h=d;if(q.a.G===null){h=d;$p=9;continue _;}h
=d;c=q.a.G;$p=11;continue _;}h=d;z=q.a.d;ba=q.a.g;bb=q.a.H;bc=q.a.bX;BF(0,0,q.a.l,q.a.c);bd=q.a.g;be=q.a.d;bf=CF(1.0/(4-q.a.F.br|0),0.25);bg=1.0-bf;q.k=0.6000000238418579*bg+bf;q.i=0.800000011920929*bg+bf;q.j=1.0*bg+bf;q.k=q.k*q.E;q.i=q.i*q.E;q.j=q.j*q.E;Bj();bh=ARc.data[Bp(bd,be.r|0,be.p+0.11999999731779099|0,be.s|0)];if(bh!==null){h=d;if(bh.bd()!==ARd){h=d;bi=bh.bd();if(bi===ARe){h=d;q.k=0.019999999552965164;q.i=0.019999999552965164;q.j=0.20000000298023224;}else{h=d;if(bi===ARf){h=d;q.k=0.6000000238418579;q.i
=0.10000000149011612;q.j=0.0;}}}}h=d;BG(q.k,q.i,q.j,0.0);BD(16640);c=q.a.d;bf=c.D+(c.ba-c.D)*p;bj=c.C+(c.bc-c.C)*p;bk=BC(c.y+(c.r-c.y)*p,c.z+(c.p-c.z)*p,c.x+(c.s-c.x)*p);m= -bj*3.141592653589793/180.0+3.141592653589793;bj=Bo(m);bl=Bn(m);m= -bf*3.141592653589793/180.0;bf=Bo(m);bg=Bn(m);bm=bl*bf;bf=bj*bf;bn=bm*5.0;bo=bg*5.0;bf=bf*5.0;bp=BC(bk.bk+bn,bk.bl+bo,bk.bj+bf);q.a.bm=Cm(q.a.g,bk,bp);q.E=1.0;q.bz=512>>(q.a.F.br<<1);V(5889);Y();Cs(70.0,q.a.l/q.a.c,0.05000000074505806,q.bz);V(5888);Y();bq=q.a.d;Bt(0.0,0.0,
(-0.30000001192092896));By(bq.D+(bq.ba-bq.D)*p,1.0,0.0,0.0);By(bq.C+(bq.bc-bq.C)*p,0.0,1.0,0.0);Bt( -(bq.y+(bq.r-bq.y)*p), -(bq.z+(bq.p-bq.z)*p), -(bq.x+(bq.s-bq.x)*p));Bd(2884);br=Cn();bs=q.a.H;r=0;while(true){h=d;if(r>=bs.bh.data.length)break;h=d;Cj(bs.bh.data[r],br);r=r+1|0;}h=d;c=q.a.H;bt=CI(CH(z));Cr(bt,c.bu);s=4;bu=Ck(bt);s:{while(true){h=d;if(!bu.b9())break s;h=d;bv=bu.b2();Co(bv);Cw(c.bu,bv);s=s+(-1)|0;if(!s)break;h=d;}h=d;}h=d;bw=Cl(ba,z.r,z.p,z.s,0.10000000149011612);B7(q);Bd(2912);r=0;$p=12;continue _;}
catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;}else{throw $$e;}}BA(a,CV(B(176),Bf(E(BX(E(Bh(),B(177)),bx),B(178)))));Bv(bx);d=h;while(true){u=Bq();j=Long_add(g,Long_fromInt(1000));if(Long_lt(u,j))break;c=E(S(Bh(),d),B(179));Cp();a.cl=Bf(E(S(c,ARg),B(180)));ARg=0;d=0;g=j;}}}catch($$e){$$je=D($$e);if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}Bc(a);return;}try{u=Long_fromInt(100);$p=5;continue _;}catch($$e){$$je=D($$e);if($$je instanceof Bs){}else if($$je instanceof J)
{by=$$je;break n;}else{c=$$je;break r;}}}Bc(a);return;}try{Bv(by);break a;}catch($$e){$$je=D($$e);c=$$je;}}Bc(a);H(c);}Bc(a);return;case 5:a:{r:{n:{o:{try{U4(u);if(N()){break _;}}catch($$e){$$je=D($$e);if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}p:{try{while(a.cb){if(a.cx)break p;try{h=d;i=a.P;j=Bq();k=Long_sub(j,i.Q);l=Long_div(Cd(),Long_fromInt(1000000));if(Long_gt(k,Long_fromInt(1000))){h=d;m=Long_toNumber(k)/Long_toNumber(Long_sub(l,i.R));i.B=i.B+(m-
i.B)*0.20000000298023224;i.Q=j;i.R=l;}h=d;if(Long_lt(k,Long_ZERO)){h=d;i.Q=j;i.R=l;}h=d;n=Long_toNumber(l)/1000.0;m=(n-i.bA)*i.B;i.bA=n;if(m<0.0){h=d;m=0.0;}h=d;if(m>1.0){h=d;m=1.0;}h=d;i.h=i.h+m*i.cu*i.cj;i.q=i.h|0;if(i.q>100){h=d;i.q=100;}h=d;i.h=i.h-i.q;i.bD=i.h;o=0;h=d;if(o<a.P.q){h=d;a.be=a.be+1|0;$p=7;continue _;}h=d;B2(B(175));p=a.P.bD;q=a.cv;if(q.bC){h=d;if(!BJ()){h=d;Ce(q.a);}}h=d;q.bC=BJ();if(q.a.b7){h=d;r=CA();s=Cx();t=1;if(q.a.F.b_){h=d;t=(-1);}h=d;Cu(q.a.d,r,K(s,t));}h=d;if(q.a.cs){h=d;u=Long_fromInt(5);$p
=8;continue _;}h=d;v=(q.a.l*240|0)/q.a.c|0;w=(q.a.c*240|0)/q.a.c|0;x=K(Cz(),v)/q.a.l|0;y=(w-(K(CD(),w)/q.a.c|0)|0)-1|0;if(q.a.g===null){h=d;BF(0,0,q.a.l,q.a.c);BG(0.0,0.0,0.0,0.0);BD(16640);V(5889);Y();V(5888);Y();Ch(q);h=d;if(q.a.G===null){h=d;$p=9;continue _;}h=d;c=q.a.G;$p=11;continue _;}h=d;z=q.a.d;ba=q.a.g;bb=q.a.H;bc=q.a.bX;BF(0,0,q.a.l,q.a.c);bd=q.a.g;be=q.a.d;bf=CF(1.0/(4-q.a.F.br|0),0.25);bg=1.0-bf;q.k=0.6000000238418579*bg+bf;q.i=0.800000011920929*bg+bf;q.j=1.0*bg+bf;q.k=q.k*q.E;q.i=q.i*q.E;q.j=q.j
*q.E;Bj();bh=ARc.data[Bp(bd,be.r|0,be.p+0.11999999731779099|0,be.s|0)];if(bh!==null){h=d;if(bh.bd()!==ARd){h=d;bi=bh.bd();if(bi===ARe){h=d;q.k=0.019999999552965164;q.i=0.019999999552965164;q.j=0.20000000298023224;}else{h=d;if(bi===ARf){h=d;q.k=0.6000000238418579;q.i=0.10000000149011612;q.j=0.0;}}}}h=d;BG(q.k,q.i,q.j,0.0);BD(16640);c=q.a.d;bf=c.D+(c.ba-c.D)*p;bj=c.C+(c.bc-c.C)*p;bk=BC(c.y+(c.r-c.y)*p,c.z+(c.p-c.z)*p,c.x+(c.s-c.x)*p);m= -bj*3.141592653589793/180.0+3.141592653589793;bj=Bo(m);bl=Bn(m);m= -bf*3.141592653589793
/180.0;bf=Bo(m);bg=Bn(m);bm=bl*bf;bf=bj*bf;bn=bm*5.0;bo=bg*5.0;bf=bf*5.0;bp=BC(bk.bk+bn,bk.bl+bo,bk.bj+bf);q.a.bm=Cm(q.a.g,bk,bp);q.E=1.0;q.bz=512>>(q.a.F.br<<1);V(5889);Y();Cs(70.0,q.a.l/q.a.c,0.05000000074505806,q.bz);V(5888);Y();bq=q.a.d;Bt(0.0,0.0,(-0.30000001192092896));By(bq.D+(bq.ba-bq.D)*p,1.0,0.0,0.0);By(bq.C+(bq.bc-bq.C)*p,0.0,1.0,0.0);Bt( -(bq.y+(bq.r-bq.y)*p), -(bq.z+(bq.p-bq.z)*p), -(bq.x+(bq.s-bq.x)*p));Bd(2884);br=Cn();bs=q.a.H;r=0;while(true){h=d;if(r>=bs.bh.data.length)break;h=d;Cj(bs.bh.data[r],
br);r=r+1|0;}h=d;c=q.a.H;bt=CI(CH(z));Cr(bt,c.bu);s=4;bu=Ck(bt);s:{while(true){h=d;if(!bu.b9())break s;h=d;bv=bu.b2();Co(bv);Cw(c.bu,bv);s=s+(-1)|0;if(!s)break;h=d;}h=d;}h=d;bw=Cl(ba,z.r,z.p,z.s,0.10000000149011612);B7(q);Bd(2912);r=0;$p=12;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;}else{throw $$e;}}BA(a,CV(B(176),Bf(E(BX(E(Bh(),B(177)),bx),B(178)))));Bv(bx);d=h;while(true){u=Bq();j=Long_add(g,Long_fromInt(1000));if(Long_lt(u,j))break;c=E(S(Bh(),d),B(179));Cp();a.cl=Bf(E(S(c,ARg),B(180)));ARg
=0;d=0;g=j;}}}catch($$e){$$je=D($$e);if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}Bc(a);return;}try{u=Long_fromInt(100);continue _;}catch($$e){$$je=D($$e);if($$je instanceof Bs){}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}}Bc(a);return;}try{Bv(by);break a;}catch($$e){$$je=D($$e);c=$$je;}}Bc(a);H(c);}Bc(a);return;case 6:a:{try{Y9(a,c);if(N()){break _;}break a;}catch($$e){$$je=D($$e);if($$je instanceof J){e=$$je;}else{throw $$e;}}Bv(e);d
=0;}if(!d){d=1;$p=3;continue _;}a.H=OS(a.cF);a.bX=R_(a.g,a.cF);f=LK(B(171),Bf(GO(E(Bh(),B(172)),47)));if(!Gn(f)&&!HM(f))H(FY(Bf(BX(E(Bh(),B(173)),f))));a.F=K9(a,f);a.d=Nq(a.g,Qv(a.F));Du(a.d);if(a.g!==null){c=a.g;$p=4;continue _;}B2(B(174));a.fy=Jm(a,a.l,a.c);g=Bq();d=0;h:{i:{j:{k:{l:{try{while(a.cb){if(a.cx)break l;try{h=d;i=a.P;j=Bq();k=Long_sub(j,i.Q);l=Long_div(Cd(),Long_fromInt(1000000));if(Long_gt(k,Long_fromInt(1000))){h=d;m=Long_toNumber(k)/Long_toNumber(Long_sub(l,i.R));i.B=i.B+(m-i.B)*0.20000000298023224;i.Q
=j;i.R=l;}h=d;if(Long_lt(k,Long_ZERO)){h=d;i.Q=j;i.R=l;}h=d;n=Long_toNumber(l)/1000.0;m=(n-i.bA)*i.B;i.bA=n;if(m<0.0){h=d;m=0.0;}h=d;if(m>1.0){h=d;m=1.0;}h=d;i.h=i.h+m*i.cu*i.cj;i.q=i.h|0;if(i.q>100){h=d;i.q=100;}h=d;i.h=i.h-i.q;i.bD=i.h;o=0;h=d;if(o<a.P.q){h=d;a.be=a.be+1|0;$p=7;continue _;}h=d;B2(B(175));p=a.P.bD;q=a.cv;if(q.bC){h=d;if(!BJ()){h=d;Ce(q.a);}}h=d;q.bC=BJ();if(q.a.b7){h=d;r=CA();s=Cx();t=1;if(q.a.F.b_){h=d;t=(-1);}h=d;Cu(q.a.d,r,K(s,t));}h=d;if(q.a.cs){h=d;u=Long_fromInt(5);$p=8;continue _;}h
=d;v=(q.a.l*240|0)/q.a.c|0;w=(q.a.c*240|0)/q.a.c|0;x=K(Cz(),v)/q.a.l|0;y=(w-(K(CD(),w)/q.a.c|0)|0)-1|0;if(q.a.g===null){h=d;BF(0,0,q.a.l,q.a.c);BG(0.0,0.0,0.0,0.0);BD(16640);V(5889);Y();V(5888);Y();Ch(q);h=d;if(q.a.G===null){h=d;$p=9;continue _;}h=d;c=q.a.G;$p=11;continue _;}h=d;z=q.a.d;ba=q.a.g;bb=q.a.H;bc=q.a.bX;BF(0,0,q.a.l,q.a.c);bd=q.a.g;be=q.a.d;bf=CF(1.0/(4-q.a.F.br|0),0.25);bg=1.0-bf;q.k=0.6000000238418579*bg+bf;q.i=0.800000011920929*bg+bf;q.j=1.0*bg+bf;q.k=q.k*q.E;q.i=q.i*q.E;q.j=q.j*q.E;Bj();bh=ARc.data[Bp(bd,
be.r|0,be.p+0.11999999731779099|0,be.s|0)];if(bh!==null){h=d;if(bh.bd()!==ARd){h=d;bi=bh.bd();if(bi===ARe){h=d;q.k=0.019999999552965164;q.i=0.019999999552965164;q.j=0.20000000298023224;}else{h=d;if(bi===ARf){h=d;q.k=0.6000000238418579;q.i=0.10000000149011612;q.j=0.0;}}}}h=d;BG(q.k,q.i,q.j,0.0);BD(16640);c=q.a.d;bf=c.D+(c.ba-c.D)*p;bj=c.C+(c.bc-c.C)*p;bk=BC(c.y+(c.r-c.y)*p,c.z+(c.p-c.z)*p,c.x+(c.s-c.x)*p);m= -bj*3.141592653589793/180.0+3.141592653589793;bj=Bo(m);bl=Bn(m);m= -bf*3.141592653589793/180.0;bf=Bo(m);bg
=Bn(m);bm=bl*bf;bf=bj*bf;bn=bm*5.0;bo=bg*5.0;bf=bf*5.0;bp=BC(bk.bk+bn,bk.bl+bo,bk.bj+bf);q.a.bm=Cm(q.a.g,bk,bp);q.E=1.0;q.bz=512>>(q.a.F.br<<1);V(5889);Y();Cs(70.0,q.a.l/q.a.c,0.05000000074505806,q.bz);V(5888);Y();bq=q.a.d;Bt(0.0,0.0,(-0.30000001192092896));By(bq.D+(bq.ba-bq.D)*p,1.0,0.0,0.0);By(bq.C+(bq.bc-bq.C)*p,0.0,1.0,0.0);Bt( -(bq.y+(bq.r-bq.y)*p), -(bq.z+(bq.p-bq.z)*p), -(bq.x+(bq.s-bq.x)*p));Bd(2884);br=Cn();bs=q.a.H;r=0;while(true){h=d;if(r>=bs.bh.data.length)break;h=d;Cj(bs.bh.data[r],br);r=r+1|0;}h
=d;c=q.a.H;bt=CI(CH(z));Cr(bt,c.bu);s=4;bu=Ck(bt);m:{while(true){h=d;if(!bu.b9())break m;h=d;bv=bu.b2();Co(bv);Cw(c.bu,bv);s=s+(-1)|0;if(!s)break;h=d;}h=d;}h=d;bw=Cl(ba,z.r,z.p,z.s,0.10000000149011612);B7(q);Bd(2912);r=0;$p=12;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;}else{throw $$e;}}BA(a,CV(B(176),Bf(E(BX(E(Bh(),B(177)),bx),B(178)))));Bv(bx);d=h;while(true){u=Bq();j=Long_add(g,Long_fromInt(1000));if(Long_lt(u,j))break;c=E(S(Bh(),d),B(179));Cp();a.cl=Bf(E(S(c,ARg),B(180)));ARg=0;d=0;g
=j;}}}catch($$e){$$je=D($$e);if($$je instanceof Bs){break k;}else if($$je instanceof J){by=$$je;break j;}else{c=$$je;break i;}}Bc(a);return;}try{u=Long_fromInt(100);$p=5;continue _;}catch($$e){$$je=D($$e);if($$je instanceof Bs){}else if($$je instanceof J){by=$$je;break j;}else{c=$$je;break i;}}}Bc(a);return;}try{Bv(by);break h;}catch($$e){$$je=D($$e);c=$$je;}}Bc(a);H(c);}Bc(a);return;case 7:a:{r:{n:{o:{p:{try{h:{i:{try{Xt(a);if(N()){break _;}o=o+1|0;break i;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;}
else{throw $$e;}}k:while(true){c=new E3;b=B(176);bz=Bh();f=B(177);bz=E(bz,f);bz=BX(bz,bx);f=B(178);bz=E(bz,f);bz=Bf(bz);Hf(c,b,bz);BA(a,c);Bv(bx);d=h;while(true){u=Bq();j=Long_fromInt(1000);j=Long_add(g,j);r=Long_compare(u,j);if(r<0)break;c=Bh();c=S(c,d);b=B(179);c=E(c,b);Cp();d=ARg;c=S(c,d);b=B(180);c=E(c,b);c=Bf(c);a.cl=c;d=0;ARg=d;d=0;g=j;}r=a.cb;if(!r)break h;r=a.cx;if(r)break p;t:{try{h=d;i=a.P;j=Bq();u=i.Q;k=Long_sub(j,u);u=Cd();l=Long_fromInt(1000000);l=Long_div(u,l);u=Long_fromInt(1000);r=Long_compare(k,
u);if(r<=0)break t;h=d;u=i.R;u=Long_sub(l,u);m=Long_toNumber(k);n=Long_toNumber(u);m=m/n;n=i.B;bA=i.B;m=m-bA;bA=0.20000000298023224;m=m*bA;m=n+m;i.B=m;i.Q=j;i.R=l;break t;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue k;}else{throw $$e;}}}u:{try{h=d;u=Long_ZERO;r=Long_compare(k,u);if(r>=0)break u;h=d;i.Q=j;i.R=l;break u;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue k;}else{throw $$e;}}}v:{b:{try{h=d;m=Long_toNumber(l);n=1000.0;n=m/n;m=i.bA;m=n-m;bA=i.B;m=m*bA;i.bA=n;n=0.0;r=
BN(m,n);if(r<0)break b;break v;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue k;}else{throw $$e;}}}try{h=d;m=0.0;break v;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue k;}else{throw $$e;}}}c:{d:{try{h=d;n=1.0;r=BN(m,n);if(r>0)break d;break c;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue k;}else{throw $$e;}}}try{h=d;m=1.0;break c;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue k;}else{throw $$e;}}}e:{try{h=d;bf=i.h;n=bf;bf=i.cu;bA=bf;m=m*bA;bf=i.cj;bA
=bf;m=m*bA;m=n+m;bf=m;i.h=bf;bf=i.h;r=bf|0;i.q=r;r=i.q;s=100;r=BN(r,s);if(r<=0)break e;h=d;r=100;i.q=r;break e;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue k;}else{throw $$e;}}}try{h=d;bf=i.h;r=i.q;bj=r;bf=bf-bj;i.h=bf;bf=i.h;i.bD=bf;o=0;break i;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;}else{throw $$e;}}}}f:while(true){try{h=d;if(o<a.P.q){h=d;a.be=a.be+1|0;continue _;}h=d;B2(B(175));p=a.P.bD;q=a.cv;if(q.bC){h=d;if(!BJ()){h=d;Ce(q.a);}}h=d;q.bC=BJ();if(q.a.b7){h=d;r=CA();s=Cx();t
=1;if(q.a.F.b_){h=d;t=(-1);}h=d;Cu(q.a.d,r,K(s,t));}h=d;if(q.a.cs){h=d;u=Long_fromInt(5);$p=8;continue _;}h=d;v=(q.a.l*240|0)/q.a.c|0;w=(q.a.c*240|0)/q.a.c|0;x=K(Cz(),v)/q.a.l|0;y=(w-(K(CD(),w)/q.a.c|0)|0)-1|0;if(q.a.g===null){h=d;BF(0,0,q.a.l,q.a.c);BG(0.0,0.0,0.0,0.0);BD(16640);V(5889);Y();V(5888);Y();Ch(q);h=d;if(q.a.G===null){h=d;$p=9;continue _;}h=d;c=q.a.G;$p=11;continue _;}h=d;z=q.a.d;ba=q.a.g;bb=q.a.H;bc=q.a.bX;BF(0,0,q.a.l,q.a.c);bd=q.a.g;be=q.a.d;bf=CF(1.0/(4-q.a.F.br|0),0.25);bg=1.0-bf;q.k=0.6000000238418579
*bg+bf;q.i=0.800000011920929*bg+bf;q.j=1.0*bg+bf;q.k=q.k*q.E;q.i=q.i*q.E;q.j=q.j*q.E;Bj();bh=ARc.data[Bp(bd,be.r|0,be.p+0.11999999731779099|0,be.s|0)];if(bh!==null){h=d;if(bh.bd()!==ARd){h=d;bi=bh.bd();if(bi===ARe){h=d;q.k=0.019999999552965164;q.i=0.019999999552965164;q.j=0.20000000298023224;}else{h=d;if(bi===ARf){h=d;q.k=0.6000000238418579;q.i=0.10000000149011612;q.j=0.0;}}}}h=d;BG(q.k,q.i,q.j,0.0);BD(16640);c=q.a.d;bf=c.D+(c.ba-c.D)*p;bj=c.C+(c.bc-c.C)*p;bk=BC(c.y+(c.r-c.y)*p,c.z+(c.p-c.z)*p,c.x+(c.s-c.x)
*p);m= -bj*3.141592653589793/180.0+3.141592653589793;bj=Bo(m);bl=Bn(m);m= -bf*3.141592653589793/180.0;bf=Bo(m);bg=Bn(m);bm=bl*bf;bf=bj*bf;bn=bm*5.0;bo=bg*5.0;bf=bf*5.0;bp=BC(bk.bk+bn,bk.bl+bo,bk.bj+bf);q.a.bm=Cm(q.a.g,bk,bp);q.E=1.0;q.bz=512>>(q.a.F.br<<1);V(5889);Y();Cs(70.0,q.a.l/q.a.c,0.05000000074505806,q.bz);V(5888);Y();bq=q.a.d;Bt(0.0,0.0,(-0.30000001192092896));By(bq.D+(bq.ba-bq.D)*p,1.0,0.0,0.0);By(bq.C+(bq.bc-bq.C)*p,0.0,1.0,0.0);Bt( -(bq.y+(bq.r-bq.y)*p), -(bq.z+(bq.p-bq.z)*p), -(bq.x+(bq.s-bq.x)*
p));Bd(2884);br=Cn();bs=q.a.H;r=0;while(true){h=d;if(r>=bs.bh.data.length)break;h=d;Cj(bs.bh.data[r],br);r=r+1|0;}h=d;c=q.a.H;bt=CI(CH(z));Cr(bt,c.bu);s=4;bu=Ck(bt);m:{while(true){h=d;if(!bu.b9())break m;h=d;bv=bu.b2();Co(bv);Cw(c.bu,bv);s=s+(-1)|0;if(!s)break;h=d;}h=d;}h=d;bw=Cl(ba,z.r,z.p,z.s,0.10000000149011612);B7(q);Bd(2912);r=0;$p=12;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;}else{throw $$e;}}w:while(true){c=new E3;b=B(176);bz=Bh();f=B(177);bz=E(bz,f);bz=BX(bz,bx);f=B(178);bz=E(bz,
f);bz=Bf(bz);Hf(c,b,bz);BA(a,c);Bv(bx);d=h;while(true){u=Bq();j=Long_fromInt(1000);j=Long_add(g,j);r=Long_compare(u,j);if(r<0)break;c=Bh();c=S(c,d);b=B(179);c=E(c,b);Cp();d=ARg;c=S(c,d);b=B(180);c=E(c,b);c=Bf(c);a.cl=c;d=0;ARg=d;d=0;g=j;}r=a.cb;if(!r)break h;r=a.cx;if(r)break p;x:{try{h=d;i=a.P;j=Bq();u=i.Q;k=Long_sub(j,u);u=Cd();l=Long_fromInt(1000000);l=Long_div(u,l);u=Long_fromInt(1000);r=Long_compare(k,u);if(r<=0)break x;h=d;u=i.R;u=Long_sub(l,u);m=Long_toNumber(k);n=Long_toNumber(u);m=m/n;n=i.B;bA=i.B;m
=m-bA;bA=0.20000000298023224;m=m*bA;m=n+m;i.B=m;i.Q=j;i.R=l;break x;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue w;}else{throw $$e;}}}y:{try{h=d;u=Long_ZERO;r=Long_compare(k,u);if(r>=0)break y;h=d;i.Q=j;i.R=l;break y;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue w;}else{throw $$e;}}}z:{g:{try{h=d;m=Long_toNumber(l);n=1000.0;n=m/n;m=i.bA;m=n-m;bA=i.B;m=m*bA;i.bA=n;n=0.0;r=BN(m,n);if(r<0)break g;break z;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue w;}else{throw $$e;}}}try
{h=d;m=0.0;break z;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue w;}else{throw $$e;}}}ba:{bb:{try{h=d;n=1.0;r=BN(m,n);if(r>0)break bb;break ba;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue w;}else{throw $$e;}}}try{h=d;m=1.0;break ba;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue w;}else{throw $$e;}}}bc:{try{h=d;bf=i.h;n=bf;bf=i.cu;bA=bf;m=m*bA;bf=i.cj;bA=bf;m=m*bA;m=n+m;bf=m;i.h=bf;bf=i.h;r=bf|0;i.q=r;r=i.q;s=100;r=BN(r,s);if(r<=0)break bc;h=d;r=100;i.q=r;break bc;}
catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue w;}else{throw $$e;}}}try{h=d;bf=i.h;r=i.q;bj=r;bf=bf-bj;i.h=bf;bf=i.h;i.bD=bf;o=0;continue f;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;}else{throw $$e;}}}}}}catch($$e){$$je=D($$e);if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}Bc(a);return;}try{u=Long_fromInt(100);$p=5;continue _;}catch($$e){$$je=D($$e);if($$je instanceof Bs){}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}}Bc(a);return;}try
{Bv(by);break a;}catch($$e){$$je=D($$e);c=$$je;}}Bc(a);H(c);}Bc(a);return;case 8:a:{r:{n:{o:{try{p:{try{U4(u);if(N()){break _;}B2(B(181));d=d+1|0;h=d;break p;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;}else{throw $$e;}}c=new E3;b=B(176);bz=Bh();f=B(177);bz=E(bz,f);bz=BX(bz,bx);f=B(178);bz=E(bz,f);bz=Bf(bz);Hf(c,b,bz);BA(a,c);Bv(bx);d=h;}}catch($$e){$$je=D($$e);if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}i:{try{while(true){u=Bq();j=Long_add(g,Long_fromInt(1000));if
(Long_ge(u,j)){c=E(S(Bh(),d),B(179));Cp();a.cl=Bf(E(S(c,ARg),B(180)));ARg=0;d=0;g=j;continue;}if(!a.cb)break;if(a.cx)break i;try{h=d;i=a.P;j=Bq();k=Long_sub(j,i.Q);l=Long_div(Cd(),Long_fromInt(1000000));if(Long_gt(k,Long_fromInt(1000))){h=d;m=Long_toNumber(k)/Long_toNumber(Long_sub(l,i.R));i.B=i.B+(m-i.B)*0.20000000298023224;i.Q=j;i.R=l;}h=d;if(Long_lt(k,Long_ZERO)){h=d;i.Q=j;i.R=l;}h=d;n=Long_toNumber(l)/1000.0;m=(n-i.bA)*i.B;i.bA=n;if(m<0.0){h=d;m=0.0;}h=d;if(m>1.0){h=d;m=1.0;}h=d;i.h=i.h+m*i.cu*i.cj;i.q=
i.h|0;if(i.q>100){h=d;i.q=100;}h=d;i.h=i.h-i.q;i.bD=i.h;o=0;h=d;if(o<a.P.q){h=d;a.be=a.be+1|0;$p=7;continue _;}h=d;B2(B(175));p=a.P.bD;q=a.cv;if(q.bC){h=d;if(!BJ()){h=d;Ce(q.a);}}h=d;q.bC=BJ();if(q.a.b7){h=d;r=CA();s=Cx();t=1;if(q.a.F.b_){h=d;t=(-1);}h=d;Cu(q.a.d,r,K(s,t));}h=d;if(q.a.cs){h=d;u=Long_fromInt(5);continue _;}h=d;v=(q.a.l*240|0)/q.a.c|0;w=(q.a.c*240|0)/q.a.c|0;x=K(Cz(),v)/q.a.l|0;y=(w-(K(CD(),w)/q.a.c|0)|0)-1|0;if(q.a.g===null){h=d;BF(0,0,q.a.l,q.a.c);BG(0.0,0.0,0.0,0.0);BD(16640);V(5889);Y();V(5888);Y();Ch(q);h
=d;if(q.a.G===null){h=d;$p=9;continue _;}h=d;c=q.a.G;$p=11;continue _;}h=d;z=q.a.d;ba=q.a.g;bb=q.a.H;bc=q.a.bX;BF(0,0,q.a.l,q.a.c);bd=q.a.g;be=q.a.d;bf=CF(1.0/(4-q.a.F.br|0),0.25);bg=1.0-bf;q.k=0.6000000238418579*bg+bf;q.i=0.800000011920929*bg+bf;q.j=1.0*bg+bf;q.k=q.k*q.E;q.i=q.i*q.E;q.j=q.j*q.E;Bj();bh=ARc.data[Bp(bd,be.r|0,be.p+0.11999999731779099|0,be.s|0)];if(bh!==null){h=d;if(bh.bd()!==ARd){h=d;bi=bh.bd();if(bi===ARe){h=d;q.k=0.019999999552965164;q.i=0.019999999552965164;q.j=0.20000000298023224;}else{h
=d;if(bi===ARf){h=d;q.k=0.6000000238418579;q.i=0.10000000149011612;q.j=0.0;}}}}h=d;BG(q.k,q.i,q.j,0.0);BD(16640);c=q.a.d;bf=c.D+(c.ba-c.D)*p;bj=c.C+(c.bc-c.C)*p;bk=BC(c.y+(c.r-c.y)*p,c.z+(c.p-c.z)*p,c.x+(c.s-c.x)*p);m= -bj*3.141592653589793/180.0+3.141592653589793;bj=Bo(m);bl=Bn(m);m= -bf*3.141592653589793/180.0;bf=Bo(m);bg=Bn(m);bm=bl*bf;bf=bj*bf;bn=bm*5.0;bo=bg*5.0;bf=bf*5.0;bp=BC(bk.bk+bn,bk.bl+bo,bk.bj+bf);q.a.bm=Cm(q.a.g,bk,bp);q.E=1.0;q.bz=512>>(q.a.F.br<<1);V(5889);Y();Cs(70.0,q.a.l/q.a.c,0.05000000074505806,
q.bz);V(5888);Y();bq=q.a.d;Bt(0.0,0.0,(-0.30000001192092896));By(bq.D+(bq.ba-bq.D)*p,1.0,0.0,0.0);By(bq.C+(bq.bc-bq.C)*p,0.0,1.0,0.0);Bt( -(bq.y+(bq.r-bq.y)*p), -(bq.z+(bq.p-bq.z)*p), -(bq.x+(bq.s-bq.x)*p));Bd(2884);br=Cn();bs=q.a.H;r=0;while(true){h=d;if(r>=bs.bh.data.length)break;h=d;Cj(bs.bh.data[r],br);r=r+1|0;}h=d;c=q.a.H;bt=CI(CH(z));Cr(bt,c.bu);s=4;bu=Ck(bt);bd:{while(true){h=d;if(!bu.b9())break bd;h=d;bv=bu.b2();Co(bv);Cw(c.bu,bv);s=s+(-1)|0;if(!s)break;h=d;}h=d;}h=d;bw=Cl(ba,z.r,z.p,z.s,0.10000000149011612);B7(q);Bd(2912);r
=0;$p=12;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;}else{throw $$e;}}c=new E3;b=B(176);bz=Bh();f=B(177);bz=E(bz,f);bz=BX(bz,bx);f=B(178);bz=E(bz,f);bz=Bf(bz);Hf(c,b,bz);BA(a,c);Bv(bx);d=h;}}catch($$e){$$je=D($$e);if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}Bc(a);return;}try{u=Long_fromInt(100);$p=5;continue _;}catch($$e){$$je=D($$e);if($$je instanceof Bs){}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}}Bc(a);return;}try
{Bv(by);break a;}catch($$e){$$je=D($$e);c=$$je;}}Bc(a);H(c);}Bc(a);return;case 9:a:{r:{n:{o:{try{SA();if(N()){break _;}$p=10;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;}else if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}h:{try{i:while(true){BA(a,CV(B(176),Bf(E(BX(E(Bh(),B(177)),bx),B(178)))));Bv(bx);d=h;while(true){u=Bq();j=Long_add(g,Long_fromInt(1000));if(Long_lt(u,j))break;c=E(S(Bh(),d),B(179));Cp();a.cl=Bf(E(S(c,ARg),B(180)));ARg=
0;d=0;g=j;}if(!a.cb)break;if(a.cx)break h;l:{try{h=d;i=a.P;j=Bq();k=Long_sub(j,i.Q);l=Long_div(Cd(),Long_fromInt(1000000));if(Long_le(k,Long_fromInt(1000)))break l;h=d;m=Long_toNumber(k)/Long_toNumber(Long_sub(l,i.R));i.B=i.B+(m-i.B)*0.20000000298023224;i.Q=j;i.R=l;break l;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}t:{try{h=d;if(Long_ge(k,Long_ZERO))break t;h=d;i.Q=j;i.R=l;break t;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}u:{v:
{try{h=d;n=Long_toNumber(l)/1000.0;m=(n-i.bA)*i.B;i.bA=n;if(m<0.0)break v;break u;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}try{h=d;m=0.0;break u;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}b:{c:{try{h=d;if(m>1.0)break c;break b;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}try{h=d;m=1.0;break b;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}d:{try{h=d;i.h
=i.h+m*i.cu*i.cj;i.q=i.h|0;if(i.q<=100)break d;h=d;i.q=100;break d;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}try{h=d;i.h=i.h-i.q;i.bD=i.h;o=0;h=d;if(o<a.P.q){h=d;a.be=a.be+1|0;$p=7;continue _;}h=d;B2(B(175));p=a.P.bD;q=a.cv;if(q.bC){h=d;if(!BJ()){h=d;Ce(q.a);}}h=d;q.bC=BJ();if(q.a.b7){h=d;r=CA();s=Cx();t=1;if(q.a.F.b_){h=d;t=(-1);}h=d;Cu(q.a.d,r,K(s,t));}h=d;if(q.a.cs){h=d;u=Long_fromInt(5);$p=8;continue _;}h=d;v=(q.a.l*240|0)/q.a.c|0;w=(q.a.c*240|0)/q.a.c|0;x=K(Cz(),
v)/q.a.l|0;y=(w-(K(CD(),w)/q.a.c|0)|0)-1|0;if(q.a.g===null){h=d;BF(0,0,q.a.l,q.a.c);BG(0.0,0.0,0.0,0.0);BD(16640);V(5889);Y();V(5888);Y();Ch(q);h=d;if(q.a.G===null){h=d;continue _;}h=d;c=q.a.G;$p=11;continue _;}h=d;z=q.a.d;ba=q.a.g;bb=q.a.H;bc=q.a.bX;BF(0,0,q.a.l,q.a.c);bd=q.a.g;be=q.a.d;bf=CF(1.0/(4-q.a.F.br|0),0.25);bg=1.0-bf;q.k=0.6000000238418579*bg+bf;q.i=0.800000011920929*bg+bf;q.j=1.0*bg+bf;q.k=q.k*q.E;q.i=q.i*q.E;q.j=q.j*q.E;Bj();bh=ARc.data[Bp(bd,be.r|0,be.p+0.11999999731779099|0,be.s|0)];if(bh!==null)
{h=d;if(bh.bd()!==ARd){h=d;bi=bh.bd();if(bi===ARe){h=d;q.k=0.019999999552965164;q.i=0.019999999552965164;q.j=0.20000000298023224;}else{h=d;if(bi===ARf){h=d;q.k=0.6000000238418579;q.i=0.10000000149011612;q.j=0.0;}}}}h=d;BG(q.k,q.i,q.j,0.0);BD(16640);c=q.a.d;bf=c.D+(c.ba-c.D)*p;bj=c.C+(c.bc-c.C)*p;bk=BC(c.y+(c.r-c.y)*p,c.z+(c.p-c.z)*p,c.x+(c.s-c.x)*p);m= -bj*3.141592653589793/180.0+3.141592653589793;bj=Bo(m);bl=Bn(m);m= -bf*3.141592653589793/180.0;bf=Bo(m);bg=Bn(m);bm=bl*bf;bf=bj*bf;bn=bm*5.0;bo=bg*5.0;bf=bf*
5.0;bp=BC(bk.bk+bn,bk.bl+bo,bk.bj+bf);q.a.bm=Cm(q.a.g,bk,bp);q.E=1.0;q.bz=512>>(q.a.F.br<<1);V(5889);Y();Cs(70.0,q.a.l/q.a.c,0.05000000074505806,q.bz);V(5888);Y();bq=q.a.d;Bt(0.0,0.0,(-0.30000001192092896));By(bq.D+(bq.ba-bq.D)*p,1.0,0.0,0.0);By(bq.C+(bq.bc-bq.C)*p,0.0,1.0,0.0);Bt( -(bq.y+(bq.r-bq.y)*p), -(bq.z+(bq.p-bq.z)*p), -(bq.x+(bq.s-bq.x)*p));Bd(2884);br=Cn();bs=q.a.H;r=0;while(true){h=d;if(r>=bs.bh.data.length)break;h=d;Cj(bs.bh.data[r],br);r=r+1|0;}h=d;c=q.a.H;bt=CI(CH(z));Cr(bt,c.bu);s=4;bu=Ck(bt);q:
{while(true){h=d;if(!bu.b9())break q;h=d;bv=bu.b2();Co(bv);Cw(c.bu,bv);s=s+(-1)|0;if(!s)break;h=d;}h=d;}h=d;bw=Cl(ba,z.r,z.p,z.s,0.10000000149011612);B7(q);Bd(2912);r=0;$p=12;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue;}else{throw $$e;}}}}catch($$e){$$je=D($$e);if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}Bc(a);return;}try{u=Long_fromInt(100);$p=5;continue _;}catch($$e){$$je=D($$e);if($$je instanceof Bs){}else if($$je instanceof J)
{by=$$je;break n;}else{c=$$je;break r;}}}Bc(a);return;}try{Bv(by);break a;}catch($$e){$$je=D($$e);c=$$je;}}Bc(a);H(c);}Bc(a);return;case 10:a:{r:{n:{o:{try{AEU();if(N()){break _;}h=d;u=Long_fromInt(5);$p=8;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;}else if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}h:{try{i:while(true){BA(a,CV(B(176),Bf(E(BX(E(Bh(),B(177)),bx),B(178)))));Bv(bx);d=h;while(true){u=Bq();j=Long_add(g,Long_fromInt(1000));if
(Long_lt(u,j))break;c=E(S(Bh(),d),B(179));Cp();a.cl=Bf(E(S(c,ARg),B(180)));ARg=0;d=0;g=j;}if(!a.cb)break;if(a.cx)break h;l:{try{h=d;i=a.P;j=Bq();k=Long_sub(j,i.Q);l=Long_div(Cd(),Long_fromInt(1000000));if(Long_le(k,Long_fromInt(1000)))break l;h=d;m=Long_toNumber(k)/Long_toNumber(Long_sub(l,i.R));i.B=i.B+(m-i.B)*0.20000000298023224;i.Q=j;i.R=l;break l;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}t:{try{h=d;if(Long_ge(k,Long_ZERO))break t;h=d;i.Q=j;i.R=l;break t;}catch($$e)
{$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}u:{v:{try{h=d;n=Long_toNumber(l)/1000.0;m=(n-i.bA)*i.B;i.bA=n;if(m<0.0)break v;break u;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}try{h=d;m=0.0;break u;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}b:{c:{try{h=d;if(m>1.0)break c;break b;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}try{h=d;m=1.0;break b;}catch($$e){$$je=
D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}d:{try{h=d;i.h=i.h+m*i.cu*i.cj;i.q=i.h|0;if(i.q<=100)break d;h=d;i.q=100;break d;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}try{h=d;i.h=i.h-i.q;i.bD=i.h;o=0;h=d;if(o<a.P.q){h=d;a.be=a.be+1|0;$p=7;continue _;}h=d;B2(B(175));p=a.P.bD;q=a.cv;if(q.bC){h=d;if(!BJ()){h=d;Ce(q.a);}}h=d;q.bC=BJ();if(q.a.b7){h=d;r=CA();s=Cx();t=1;if(q.a.F.b_){h=d;t=(-1);}h=d;Cu(q.a.d,r,K(s,t));}h=d;if(q.a.cs){h=d;u=Long_fromInt(5);$p
=8;continue _;}h=d;v=(q.a.l*240|0)/q.a.c|0;w=(q.a.c*240|0)/q.a.c|0;x=K(Cz(),v)/q.a.l|0;y=(w-(K(CD(),w)/q.a.c|0)|0)-1|0;if(q.a.g===null){h=d;BF(0,0,q.a.l,q.a.c);BG(0.0,0.0,0.0,0.0);BD(16640);V(5889);Y();V(5888);Y();Ch(q);h=d;if(q.a.G===null){h=d;$p=9;continue _;}h=d;c=q.a.G;$p=11;continue _;}h=d;z=q.a.d;ba=q.a.g;bb=q.a.H;bc=q.a.bX;BF(0,0,q.a.l,q.a.c);bd=q.a.g;be=q.a.d;bf=CF(1.0/(4-q.a.F.br|0),0.25);bg=1.0-bf;q.k=0.6000000238418579*bg+bf;q.i=0.800000011920929*bg+bf;q.j=1.0*bg+bf;q.k=q.k*q.E;q.i=q.i*q.E;q.j=q.j
*q.E;Bj();bh=ARc.data[Bp(bd,be.r|0,be.p+0.11999999731779099|0,be.s|0)];if(bh!==null){h=d;if(bh.bd()!==ARd){h=d;bi=bh.bd();if(bi===ARe){h=d;q.k=0.019999999552965164;q.i=0.019999999552965164;q.j=0.20000000298023224;}else{h=d;if(bi===ARf){h=d;q.k=0.6000000238418579;q.i=0.10000000149011612;q.j=0.0;}}}}h=d;BG(q.k,q.i,q.j,0.0);BD(16640);c=q.a.d;bf=c.D+(c.ba-c.D)*p;bj=c.C+(c.bc-c.C)*p;bk=BC(c.y+(c.r-c.y)*p,c.z+(c.p-c.z)*p,c.x+(c.s-c.x)*p);m= -bj*3.141592653589793/180.0+3.141592653589793;bj=Bo(m);bl=Bn(m);m= -bf*3.141592653589793
/180.0;bf=Bo(m);bg=Bn(m);bm=bl*bf;bf=bj*bf;bn=bm*5.0;bo=bg*5.0;bf=bf*5.0;bp=BC(bk.bk+bn,bk.bl+bo,bk.bj+bf);q.a.bm=Cm(q.a.g,bk,bp);q.E=1.0;q.bz=512>>(q.a.F.br<<1);V(5889);Y();Cs(70.0,q.a.l/q.a.c,0.05000000074505806,q.bz);V(5888);Y();bq=q.a.d;Bt(0.0,0.0,(-0.30000001192092896));By(bq.D+(bq.ba-bq.D)*p,1.0,0.0,0.0);By(bq.C+(bq.bc-bq.C)*p,0.0,1.0,0.0);Bt( -(bq.y+(bq.r-bq.y)*p), -(bq.z+(bq.p-bq.z)*p), -(bq.x+(bq.s-bq.x)*p));Bd(2884);br=Cn();bs=q.a.H;r=0;while(true){h=d;if(r>=bs.bh.data.length)break;h=d;Cj(bs.bh.data[r],
br);r=r+1|0;}h=d;c=q.a.H;bt=CI(CH(z));Cr(bt,c.bu);s=4;bu=Ck(bt);q:{while(true){h=d;if(!bu.b9())break q;h=d;bv=bu.b2();Co(bv);Cw(c.bu,bv);s=s+(-1)|0;if(!s)break;h=d;}h=d;}h=d;bw=Cl(ba,z.r,z.p,z.s,0.10000000149011612);B7(q);Bd(2912);r=0;$p=12;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue;}else{throw $$e;}}}}catch($$e){$$je=D($$e);if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}Bc(a);return;}try{u=Long_fromInt(100);$p=5;continue _;}catch
($$e){$$je=D($$e);if($$je instanceof Bs){}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}}Bc(a);return;}try{Bv(by);break a;}catch($$e){$$je=D($$e);c=$$je;}}Bc(a);H(c);}Bc(a);return;case 11:a:{r:{n:{o:{try{c.f6(x,y);if(N()){break _;}h=d;$p=9;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;}else if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}h:{try{i:while(true){BA(a,CV(B(176),Bf(E(BX(E(Bh(),B(177)),bx),B(178)))));Bv(bx);d=
h;while(true){u=Bq();j=Long_add(g,Long_fromInt(1000));if(Long_lt(u,j))break;c=E(S(Bh(),d),B(179));Cp();a.cl=Bf(E(S(c,ARg),B(180)));ARg=0;d=0;g=j;}if(!a.cb)break;if(a.cx)break h;l:{try{h=d;i=a.P;j=Bq();k=Long_sub(j,i.Q);l=Long_div(Cd(),Long_fromInt(1000000));if(Long_le(k,Long_fromInt(1000)))break l;h=d;m=Long_toNumber(k)/Long_toNumber(Long_sub(l,i.R));i.B=i.B+(m-i.B)*0.20000000298023224;i.Q=j;i.R=l;break l;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}t:{try{h=d;if(Long_ge(k,
Long_ZERO))break t;h=d;i.Q=j;i.R=l;break t;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}u:{v:{try{h=d;n=Long_toNumber(l)/1000.0;m=(n-i.bA)*i.B;i.bA=n;if(m<0.0)break v;break u;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}try{h=d;m=0.0;break u;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}b:{c:{try{h=d;if(m>1.0)break c;break b;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else
{throw $$e;}}}try{h=d;m=1.0;break b;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}d:{try{h=d;i.h=i.h+m*i.cu*i.cj;i.q=i.h|0;if(i.q<=100)break d;h=d;i.q=100;break d;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}try{h=d;i.h=i.h-i.q;i.bD=i.h;o=0;h=d;if(o<a.P.q){h=d;a.be=a.be+1|0;$p=7;continue _;}h=d;B2(B(175));p=a.P.bD;q=a.cv;if(q.bC){h=d;if(!BJ()){h=d;Ce(q.a);}}h=d;q.bC=BJ();if(q.a.b7){h=d;r=CA();s=Cx();t=1;if(q.a.F.b_){h=d;t=(-1);}h=d;Cu(q.a.d,
r,K(s,t));}h=d;if(q.a.cs){h=d;u=Long_fromInt(5);$p=8;continue _;}h=d;v=(q.a.l*240|0)/q.a.c|0;w=(q.a.c*240|0)/q.a.c|0;x=K(Cz(),v)/q.a.l|0;y=(w-(K(CD(),w)/q.a.c|0)|0)-1|0;if(q.a.g===null){h=d;BF(0,0,q.a.l,q.a.c);BG(0.0,0.0,0.0,0.0);BD(16640);V(5889);Y();V(5888);Y();Ch(q);h=d;if(q.a.G===null){h=d;$p=9;continue _;}h=d;c=q.a.G;continue _;}h=d;z=q.a.d;ba=q.a.g;bb=q.a.H;bc=q.a.bX;BF(0,0,q.a.l,q.a.c);bd=q.a.g;be=q.a.d;bf=CF(1.0/(4-q.a.F.br|0),0.25);bg=1.0-bf;q.k=0.6000000238418579*bg+bf;q.i=0.800000011920929*bg+bf;q.j
=1.0*bg+bf;q.k=q.k*q.E;q.i=q.i*q.E;q.j=q.j*q.E;Bj();bh=ARc.data[Bp(bd,be.r|0,be.p+0.11999999731779099|0,be.s|0)];if(bh!==null){h=d;if(bh.bd()!==ARd){h=d;bi=bh.bd();if(bi===ARe){h=d;q.k=0.019999999552965164;q.i=0.019999999552965164;q.j=0.20000000298023224;}else{h=d;if(bi===ARf){h=d;q.k=0.6000000238418579;q.i=0.10000000149011612;q.j=0.0;}}}}h=d;BG(q.k,q.i,q.j,0.0);BD(16640);c=q.a.d;bf=c.D+(c.ba-c.D)*p;bj=c.C+(c.bc-c.C)*p;bk=BC(c.y+(c.r-c.y)*p,c.z+(c.p-c.z)*p,c.x+(c.s-c.x)*p);m= -bj*3.141592653589793/180.0+3.141592653589793;bj
=Bo(m);bl=Bn(m);m= -bf*3.141592653589793/180.0;bf=Bo(m);bg=Bn(m);bm=bl*bf;bf=bj*bf;bn=bm*5.0;bo=bg*5.0;bf=bf*5.0;bp=BC(bk.bk+bn,bk.bl+bo,bk.bj+bf);q.a.bm=Cm(q.a.g,bk,bp);q.E=1.0;q.bz=512>>(q.a.F.br<<1);V(5889);Y();Cs(70.0,q.a.l/q.a.c,0.05000000074505806,q.bz);V(5888);Y();bq=q.a.d;Bt(0.0,0.0,(-0.30000001192092896));By(bq.D+(bq.ba-bq.D)*p,1.0,0.0,0.0);By(bq.C+(bq.bc-bq.C)*p,0.0,1.0,0.0);Bt( -(bq.y+(bq.r-bq.y)*p), -(bq.z+(bq.p-bq.z)*p), -(bq.x+(bq.s-bq.x)*p));Bd(2884);br=Cn();bs=q.a.H;r=0;while(true){h=d;if(r>=
bs.bh.data.length)break;h=d;Cj(bs.bh.data[r],br);r=r+1|0;}h=d;c=q.a.H;bt=CI(CH(z));Cr(bt,c.bu);s=4;bu=Ck(bt);q:{while(true){h=d;if(!bu.b9())break q;h=d;bv=bu.b2();Co(bv);Cw(c.bu,bv);s=s+(-1)|0;if(!s)break;h=d;}h=d;}h=d;bw=Cl(ba,z.r,z.p,z.s,0.10000000149011612);B7(q);Bd(2912);r=0;$p=12;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue;}else{throw $$e;}}}}catch($$e){$$je=D($$e);if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}Bc(a);return;}try
{u=Long_fromInt(100);$p=5;continue _;}catch($$e){$$je=D($$e);if($$je instanceof Bs){}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}}Bc(a);return;}try{Bv(by);break a;}catch($$e){$$je=D($$e);c=$$je;}}Bc(a);H(c);}Bc(a);return;case 12:a:{r:{n:{o:{p:{h:{try{SL(bb,z,r);if(N()){break _;}if(!bw)break h;h=d;bB=z.r|0;r=z.p|0;bC=z.s|0;s=bB-1|0;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;break p;}else if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}bw
=bB+1|0;bB=r-1|0;t=r+1|0;o=bC-1|0;v=bC+1|0;while(true){try{h=d;if(s>bw)break h;h=d;r=bB;while(true){h=d;if(r>t)break;h=d;bD=o;while(true){h=d;if(bD>v)break;h=d;Zi(bb,s,r,bD);bD=bD+1|0;}h=d;r=r+1|0;}h=d;s=s+1|0;continue;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;break p;}else if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}}}try{h=d;MH(q,1);$p=13;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;}else if($$je instanceof Bs){break o;}
else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}}l:{try{t:while(true){try{BA(a,CV(B(176),Bf(E(BX(E(Bh(),B(177)),bx),B(178)))));Bv(bx);d=h;while(true){u=Bq();j=Long_add(g,Long_fromInt(1000));if(Long_lt(u,j))break;c=E(S(Bh(),d),B(179));Cp();a.cl=Bf(E(S(c,ARg),B(180)));ARg=0;d=0;g=j;}if(!a.cb)break;if(a.cx)break l;b:{try{h=d;i=a.P;j=Bq();k=Long_sub(j,i.Q);l=Long_div(Cd(),Long_fromInt(1000000));if(Long_le(k,Long_fromInt(1000)))break b;h=d;m=Long_toNumber(k)/Long_toNumber(Long_sub(l,i.R));i.B=i.B
+(m-i.B)*0.20000000298023224;i.Q=j;i.R=l;break b;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue t;}else{throw $$e;}}}c:{try{h=d;if(Long_ge(k,Long_ZERO))break c;h=d;i.Q=j;i.R=l;break c;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue t;}else{throw $$e;}}}d:{e:{try{h=d;n=Long_toNumber(l)/1000.0;m=(n-i.bA)*i.B;i.bA=n;if(m<0.0)break e;break d;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue t;}else{throw $$e;}}}try{h=d;m=0.0;break d;}catch($$e){$$je=D($$e);if($$je instanceof J)
{bx=$$je;continue t;}else{throw $$e;}}}f:{be:{try{h=d;if(m>1.0)break be;break f;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue t;}else{throw $$e;}}}try{h=d;m=1.0;break f;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue t;}else{throw $$e;}}}bf:{try{h=d;i.h=i.h+m*i.cu*i.cj;i.q=i.h|0;if(i.q<=100)break bf;h=d;i.q=100;break bf;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue t;}else{throw $$e;}}}try{h=d;i.h=i.h-i.q;i.bD=i.h;o=0;h=d;if(o<a.P.q){h=d;a.be=a.be+1|0;$p=7;continue _;}h
=d;B2(B(175));p=a.P.bD;q=a.cv;if(q.bC){h=d;if(!BJ()){h=d;Ce(q.a);}}h=d;q.bC=BJ();if(q.a.b7){h=d;r=CA();s=Cx();t=1;if(q.a.F.b_){h=d;t=(-1);}h=d;Cu(q.a.d,r,K(s,t));}h=d;if(q.a.cs){h=d;u=Long_fromInt(5);$p=8;continue _;}h=d;v=(q.a.l*240|0)/q.a.c|0;w=(q.a.c*240|0)/q.a.c|0;x=K(Cz(),v)/q.a.l|0;y=(w-(K(CD(),w)/q.a.c|0)|0)-1|0;if(q.a.g===null){h=d;BF(0,0,q.a.l,q.a.c);BG(0.0,0.0,0.0,0.0);BD(16640);V(5889);Y();V(5888);Y();Ch(q);h=d;if(q.a.G===null){h=d;$p=9;continue _;}h=d;c=q.a.G;$p=11;continue _;}h=d;z=q.a.d;ba=q.a.g;bb
=q.a.H;bc=q.a.bX;BF(0,0,q.a.l,q.a.c);bd=q.a.g;be=q.a.d;bf=CF(1.0/(4-q.a.F.br|0),0.25);bg=1.0-bf;q.k=0.6000000238418579*bg+bf;q.i=0.800000011920929*bg+bf;q.j=1.0*bg+bf;q.k=q.k*q.E;q.i=q.i*q.E;q.j=q.j*q.E;Bj();bh=ARc.data[Bp(bd,be.r|0,be.p+0.11999999731779099|0,be.s|0)];if(bh!==null){h=d;if(bh.bd()!==ARd){h=d;bi=bh.bd();if(bi===ARe){h=d;q.k=0.019999999552965164;q.i=0.019999999552965164;q.j=0.20000000298023224;}else{h=d;if(bi===ARf){h=d;q.k=0.6000000238418579;q.i=0.10000000149011612;q.j=0.0;}}}}h=d;BG(q.k,q.i,
q.j,0.0);BD(16640);c=q.a.d;bf=c.D+(c.ba-c.D)*p;bj=c.C+(c.bc-c.C)*p;bk=BC(c.y+(c.r-c.y)*p,c.z+(c.p-c.z)*p,c.x+(c.s-c.x)*p);m= -bj*3.141592653589793/180.0+3.141592653589793;bj=Bo(m);bl=Bn(m);m= -bf*3.141592653589793/180.0;bf=Bo(m);bg=Bn(m);bm=bl*bf;bf=bj*bf;bn=bm*5.0;bo=bg*5.0;bf=bf*5.0;bp=BC(bk.bk+bn,bk.bl+bo,bk.bj+bf);q.a.bm=Cm(q.a.g,bk,bp);q.E=1.0;q.bz=512>>(q.a.F.br<<1);V(5889);Y();Cs(70.0,q.a.l/q.a.c,0.05000000074505806,q.bz);V(5888);Y();bq=q.a.d;Bt(0.0,0.0,(-0.30000001192092896));By(bq.D+(bq.ba-bq.D)*p,
1.0,0.0,0.0);By(bq.C+(bq.bc-bq.C)*p,0.0,1.0,0.0);Bt( -(bq.y+(bq.r-bq.y)*p), -(bq.z+(bq.p-bq.z)*p), -(bq.x+(bq.s-bq.x)*p));Bd(2884);br=Cn();bs=q.a.H;r=0;while(true){h=d;if(r>=bs.bh.data.length)break;h=d;Cj(bs.bh.data[r],br);r=r+1|0;}h=d;c=q.a.H;bt=CI(CH(z));Cr(bt,c.bu);s=4;bu=Ck(bt);bg:{while(true){h=d;if(!bu.b9())break bg;h=d;bv=bu.b2();Co(bv);Cw(c.bu,bv);s=s+(-1)|0;if(!s)break;h=d;}h=d;}h=d;bw=Cl(ba,z.r,z.p,z.s,0.10000000149011612);B7(q);Bd(2912);r=0;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J)
{bx=$$je;continue;}else{throw $$e;}}}catch($$e){$$je=D($$e);if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{throw $$e;}}}}catch($$e){$$je=D($$e);c=$$je;break r;}Bc(a);return;}try{u=Long_fromInt(100);$p=5;continue _;}catch($$e){$$je=D($$e);if($$je instanceof Bs){}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}}Bc(a);return;}try{Bv(by);break a;}catch($$e){$$je=D($$e);c=$$je;}}Bc(a);H(c);}Bc(a);return;case 13:a:{r:{n:{o:{try{Z8(bb,br,p);if(N()){break _;}MH(q,
0);B7(q);$p=14;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;}else if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}h:{try{i:while(true){BA(a,CV(B(176),Bf(E(BX(E(Bh(),B(177)),bx),B(178)))));Bv(bx);d=h;while(true){u=Bq();j=Long_add(g,Long_fromInt(1000));if(Long_lt(u,j))break;c=E(S(Bh(),d),B(179));Cp();a.cl=Bf(E(S(c,ARg),B(180)));ARg=0;d=0;g=j;}if(!a.cb)break;if(a.cx)break h;l:{try{h=d;i=a.P;j=Bq();k=Long_sub(j,i.Q);l=Long_div(Cd(),Long_fromInt(1000000));if
(Long_le(k,Long_fromInt(1000)))break l;h=d;m=Long_toNumber(k)/Long_toNumber(Long_sub(l,i.R));i.B=i.B+(m-i.B)*0.20000000298023224;i.Q=j;i.R=l;break l;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}t:{try{h=d;if(Long_ge(k,Long_ZERO))break t;h=d;i.Q=j;i.R=l;break t;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}u:{v:{try{h=d;n=Long_toNumber(l)/1000.0;m=(n-i.bA)*i.B;i.bA=n;if(m<0.0)break v;break u;}catch($$e){$$je=D($$e);if($$je instanceof J)
{bx=$$je;continue i;}else{throw $$e;}}}try{h=d;m=0.0;break u;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}b:{c:{try{h=d;if(m>1.0)break c;break b;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}try{h=d;m=1.0;break b;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}d:{try{h=d;i.h=i.h+m*i.cu*i.cj;i.q=i.h|0;if(i.q<=100)break d;h=d;i.q=100;break d;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}
else{throw $$e;}}}try{h=d;i.h=i.h-i.q;i.bD=i.h;o=0;h=d;if(o<a.P.q){h=d;a.be=a.be+1|0;$p=7;continue _;}h=d;B2(B(175));p=a.P.bD;q=a.cv;if(q.bC){h=d;if(!BJ()){h=d;Ce(q.a);}}h=d;q.bC=BJ();if(q.a.b7){h=d;r=CA();s=Cx();t=1;if(q.a.F.b_){h=d;t=(-1);}h=d;Cu(q.a.d,r,K(s,t));}h=d;if(q.a.cs){h=d;u=Long_fromInt(5);$p=8;continue _;}h=d;v=(q.a.l*240|0)/q.a.c|0;w=(q.a.c*240|0)/q.a.c|0;x=K(Cz(),v)/q.a.l|0;y=(w-(K(CD(),w)/q.a.c|0)|0)-1|0;if(q.a.g===null){h=d;BF(0,0,q.a.l,q.a.c);BG(0.0,0.0,0.0,0.0);BD(16640);V(5889);Y();V(5888);Y();Ch(q);h
=d;if(q.a.G===null){h=d;$p=9;continue _;}h=d;c=q.a.G;$p=11;continue _;}h=d;z=q.a.d;ba=q.a.g;bb=q.a.H;bc=q.a.bX;BF(0,0,q.a.l,q.a.c);bd=q.a.g;be=q.a.d;bf=CF(1.0/(4-q.a.F.br|0),0.25);bg=1.0-bf;q.k=0.6000000238418579*bg+bf;q.i=0.800000011920929*bg+bf;q.j=1.0*bg+bf;q.k=q.k*q.E;q.i=q.i*q.E;q.j=q.j*q.E;Bj();bh=ARc.data[Bp(bd,be.r|0,be.p+0.11999999731779099|0,be.s|0)];if(bh!==null){h=d;if(bh.bd()!==ARd){h=d;bi=bh.bd();if(bi===ARe){h=d;q.k=0.019999999552965164;q.i=0.019999999552965164;q.j=0.20000000298023224;}else{h
=d;if(bi===ARf){h=d;q.k=0.6000000238418579;q.i=0.10000000149011612;q.j=0.0;}}}}h=d;BG(q.k,q.i,q.j,0.0);BD(16640);c=q.a.d;bf=c.D+(c.ba-c.D)*p;bj=c.C+(c.bc-c.C)*p;bk=BC(c.y+(c.r-c.y)*p,c.z+(c.p-c.z)*p,c.x+(c.s-c.x)*p);m= -bj*3.141592653589793/180.0+3.141592653589793;bj=Bo(m);bl=Bn(m);m= -bf*3.141592653589793/180.0;bf=Bo(m);bg=Bn(m);bm=bl*bf;bf=bj*bf;bn=bm*5.0;bo=bg*5.0;bf=bf*5.0;bp=BC(bk.bk+bn,bk.bl+bo,bk.bj+bf);q.a.bm=Cm(q.a.g,bk,bp);q.E=1.0;q.bz=512>>(q.a.F.br<<1);V(5889);Y();Cs(70.0,q.a.l/q.a.c,0.05000000074505806,
q.bz);V(5888);Y();bq=q.a.d;Bt(0.0,0.0,(-0.30000001192092896));By(bq.D+(bq.ba-bq.D)*p,1.0,0.0,0.0);By(bq.C+(bq.bc-bq.C)*p,0.0,1.0,0.0);Bt( -(bq.y+(bq.r-bq.y)*p), -(bq.z+(bq.p-bq.z)*p), -(bq.x+(bq.s-bq.x)*p));Bd(2884);br=Cn();bs=q.a.H;r=0;while(true){h=d;if(r>=bs.bh.data.length)break;h=d;Cj(bs.bh.data[r],br);r=r+1|0;}h=d;c=q.a.H;bt=CI(CH(z));Cr(bt,c.bu);s=4;bu=Ck(bt);q:{while(true){h=d;if(!bu.b9())break q;h=d;bv=bu.b2();Co(bv);Cw(c.bu,bv);s=s+(-1)|0;if(!s)break;h=d;}h=d;}h=d;bw=Cl(ba,z.r,z.p,z.s,0.10000000149011612);B7(q);Bd(2912);r
=0;$p=12;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue;}else{throw $$e;}}}}catch($$e){$$je=D($$e);if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}Bc(a);return;}try{u=Long_fromInt(100);$p=5;continue _;}catch($$e){$$je=D($$e);if($$je instanceof Bs){}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}}Bc(a);return;}try{Bv(by);break a;}catch($$e){$$je=D($$e);c=$$je;}}Bc(a);H(c);}Bc(a);return;case 14:a:{r:{n:{o:{try{AB4(bc,
z,p);if(N()){break _;}FE(bb.hu);BM(2896);B7(q);$p=15;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;}else if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}h:{try{i:while(true){BA(a,CV(B(176),Bf(E(BX(E(Bh(),B(177)),bx),B(178)))));Bv(bx);d=h;while(true){u=Bq();j=Long_add(g,Long_fromInt(1000));if(Long_lt(u,j))break;c=E(S(Bh(),d),B(179));Cp();a.cl=Bf(E(S(c,ARg),B(180)));ARg=0;d=0;g=j;}if(!a.cb)break;if(a.cx)break h;l:{try{h=d;i=a.P;j=Bq();k=Long_sub(j,
i.Q);l=Long_div(Cd(),Long_fromInt(1000000));if(Long_le(k,Long_fromInt(1000)))break l;h=d;m=Long_toNumber(k)/Long_toNumber(Long_sub(l,i.R));i.B=i.B+(m-i.B)*0.20000000298023224;i.Q=j;i.R=l;break l;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}t:{try{h=d;if(Long_ge(k,Long_ZERO))break t;h=d;i.Q=j;i.R=l;break t;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}u:{v:{try{h=d;n=Long_toNumber(l)/1000.0;m=(n-i.bA)*i.B;i.bA=n;if(m<0.0)break v;break u;}
catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}try{h=d;m=0.0;break u;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}b:{c:{try{h=d;if(m>1.0)break c;break b;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}try{h=d;m=1.0;break b;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}d:{try{h=d;i.h=i.h+m*i.cu*i.cj;i.q=i.h|0;if(i.q<=100)break d;h=d;i.q=100;break d;}catch($$e){$$je
=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}try{h=d;i.h=i.h-i.q;i.bD=i.h;o=0;h=d;if(o<a.P.q){h=d;a.be=a.be+1|0;$p=7;continue _;}h=d;B2(B(175));p=a.P.bD;q=a.cv;if(q.bC){h=d;if(!BJ()){h=d;Ce(q.a);}}h=d;q.bC=BJ();if(q.a.b7){h=d;r=CA();s=Cx();t=1;if(q.a.F.b_){h=d;t=(-1);}h=d;Cu(q.a.d,r,K(s,t));}h=d;if(q.a.cs){h=d;u=Long_fromInt(5);$p=8;continue _;}h=d;v=(q.a.l*240|0)/q.a.c|0;w=(q.a.c*240|0)/q.a.c|0;x=K(Cz(),v)/q.a.l|0;y=(w-(K(CD(),w)/q.a.c|0)|0)-1|0;if(q.a.g===null){h=d;BF(0,0,q.a.l,q.a.c);BG(0.0,
0.0,0.0,0.0);BD(16640);V(5889);Y();V(5888);Y();Ch(q);h=d;if(q.a.G===null){h=d;$p=9;continue _;}h=d;c=q.a.G;$p=11;continue _;}h=d;z=q.a.d;ba=q.a.g;bb=q.a.H;bc=q.a.bX;BF(0,0,q.a.l,q.a.c);bd=q.a.g;be=q.a.d;bf=CF(1.0/(4-q.a.F.br|0),0.25);bg=1.0-bf;q.k=0.6000000238418579*bg+bf;q.i=0.800000011920929*bg+bf;q.j=1.0*bg+bf;q.k=q.k*q.E;q.i=q.i*q.E;q.j=q.j*q.E;Bj();bh=ARc.data[Bp(bd,be.r|0,be.p+0.11999999731779099|0,be.s|0)];if(bh!==null){h=d;if(bh.bd()!==ARd){h=d;bi=bh.bd();if(bi===ARe){h=d;q.k=0.019999999552965164;q.i
=0.019999999552965164;q.j=0.20000000298023224;}else{h=d;if(bi===ARf){h=d;q.k=0.6000000238418579;q.i=0.10000000149011612;q.j=0.0;}}}}h=d;BG(q.k,q.i,q.j,0.0);BD(16640);c=q.a.d;bf=c.D+(c.ba-c.D)*p;bj=c.C+(c.bc-c.C)*p;bk=BC(c.y+(c.r-c.y)*p,c.z+(c.p-c.z)*p,c.x+(c.s-c.x)*p);m= -bj*3.141592653589793/180.0+3.141592653589793;bj=Bo(m);bl=Bn(m);m= -bf*3.141592653589793/180.0;bf=Bo(m);bg=Bn(m);bm=bl*bf;bf=bj*bf;bn=bm*5.0;bo=bg*5.0;bf=bf*5.0;bp=BC(bk.bk+bn,bk.bl+bo,bk.bj+bf);q.a.bm=Cm(q.a.g,bk,bp);q.E=1.0;q.bz=512>>(q.a.F.br
<<1);V(5889);Y();Cs(70.0,q.a.l/q.a.c,0.05000000074505806,q.bz);V(5888);Y();bq=q.a.d;Bt(0.0,0.0,(-0.30000001192092896));By(bq.D+(bq.ba-bq.D)*p,1.0,0.0,0.0);By(bq.C+(bq.bc-bq.C)*p,0.0,1.0,0.0);Bt( -(bq.y+(bq.r-bq.y)*p), -(bq.z+(bq.p-bq.z)*p), -(bq.x+(bq.s-bq.x)*p));Bd(2884);br=Cn();bs=q.a.H;r=0;while(true){h=d;if(r>=bs.bh.data.length)break;h=d;Cj(bs.bh.data[r],br);r=r+1|0;}h=d;c=q.a.H;bt=CI(CH(z));Cr(bt,c.bu);s=4;bu=Ck(bt);q:{while(true){h=d;if(!bu.b9())break q;h=d;bv=bu.b2();Co(bv);Cw(c.bu,bv);s=s+(-1)|0;if(!s)break;h
=d;}h=d;}h=d;bw=Cl(ba,z.r,z.p,z.s,0.10000000149011612);B7(q);Bd(2912);r=0;$p=12;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue;}else{throw $$e;}}}}catch($$e){$$je=D($$e);if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}Bc(a);return;}try{u=Long_fromInt(100);$p=5;continue _;}catch($$e){$$je=D($$e);if($$je instanceof Bs){}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}}Bc(a);return;}try{Bv(by);break a;}catch($$e){$$je
=D($$e);c=$$je;}}Bc(a);H(c);}Bc(a);return;case 15:a:{r:{n:{o:{try{ACc(bb,p);if(N()){break _;}B7(q);Bd(2896);if(q.a.bm!==null){h=d;BM(2896);BM(3008);c=q.a.bm;r=q.a.em;s=F2(z.dG);$p=17;continue _;}h=d;El(770,771);B7(q);FE(bb.hu+1|0);Bd(3042);IC(0,0,0,0);r=1;$p=16;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;}else if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}i:{try{j:while(true){BA(a,CV(B(176),Bf(E(BX(E(Bh(),B(177)),bx),B(178)))));Bv(bx);d
=h;while(true){u=Bq();j=Long_add(g,Long_fromInt(1000));if(Long_lt(u,j))break;c=E(S(Bh(),d),B(179));Cp();a.cl=Bf(E(S(c,ARg),B(180)));ARg=0;d=0;g=j;}if(!a.cb)break;if(a.cx)break i;t:{try{h=d;i=a.P;j=Bq();k=Long_sub(j,i.Q);l=Long_div(Cd(),Long_fromInt(1000000));if(Long_le(k,Long_fromInt(1000)))break t;h=d;m=Long_toNumber(k)/Long_toNumber(Long_sub(l,i.R));i.B=i.B+(m-i.B)*0.20000000298023224;i.Q=j;i.R=l;break t;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue j;}else{throw $$e;}}}u:{try{h=d;if(Long_ge(k,
Long_ZERO))break u;h=d;i.Q=j;i.R=l;break u;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue j;}else{throw $$e;}}}v:{b:{try{h=d;n=Long_toNumber(l)/1000.0;m=(n-i.bA)*i.B;i.bA=n;if(m<0.0)break b;break v;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue j;}else{throw $$e;}}}try{h=d;m=0.0;break v;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue j;}else{throw $$e;}}}c:{d:{try{h=d;if(m>1.0)break d;break c;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue j;}else
{throw $$e;}}}try{h=d;m=1.0;break c;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue j;}else{throw $$e;}}}e:{try{h=d;i.h=i.h+m*i.cu*i.cj;i.q=i.h|0;if(i.q<=100)break e;h=d;i.q=100;break e;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue j;}else{throw $$e;}}}try{h=d;i.h=i.h-i.q;i.bD=i.h;o=0;h=d;if(o<a.P.q){h=d;a.be=a.be+1|0;$p=7;continue _;}h=d;B2(B(175));p=a.P.bD;q=a.cv;if(q.bC){h=d;if(!BJ()){h=d;Ce(q.a);}}h=d;q.bC=BJ();if(q.a.b7){h=d;r=CA();s=Cx();t=1;if(q.a.F.b_){h=d;t=(-1);}h=d;Cu(q.a.d,
r,K(s,t));}h=d;if(q.a.cs){h=d;u=Long_fromInt(5);$p=8;continue _;}h=d;v=(q.a.l*240|0)/q.a.c|0;w=(q.a.c*240|0)/q.a.c|0;x=K(Cz(),v)/q.a.l|0;y=(w-(K(CD(),w)/q.a.c|0)|0)-1|0;if(q.a.g===null){h=d;BF(0,0,q.a.l,q.a.c);BG(0.0,0.0,0.0,0.0);BD(16640);V(5889);Y();V(5888);Y();Ch(q);h=d;if(q.a.G===null){h=d;$p=9;continue _;}h=d;c=q.a.G;$p=11;continue _;}h=d;z=q.a.d;ba=q.a.g;bb=q.a.H;bc=q.a.bX;BF(0,0,q.a.l,q.a.c);bd=q.a.g;be=q.a.d;bf=CF(1.0/(4-q.a.F.br|0),0.25);bg=1.0-bf;q.k=0.6000000238418579*bg+bf;q.i=0.800000011920929*
bg+bf;q.j=1.0*bg+bf;q.k=q.k*q.E;q.i=q.i*q.E;q.j=q.j*q.E;Bj();bh=ARc.data[Bp(bd,be.r|0,be.p+0.11999999731779099|0,be.s|0)];if(bh!==null){h=d;if(bh.bd()!==ARd){h=d;bi=bh.bd();if(bi===ARe){h=d;q.k=0.019999999552965164;q.i=0.019999999552965164;q.j=0.20000000298023224;}else{h=d;if(bi===ARf){h=d;q.k=0.6000000238418579;q.i=0.10000000149011612;q.j=0.0;}}}}h=d;BG(q.k,q.i,q.j,0.0);BD(16640);c=q.a.d;bf=c.D+(c.ba-c.D)*p;bj=c.C+(c.bc-c.C)*p;bk=BC(c.y+(c.r-c.y)*p,c.z+(c.p-c.z)*p,c.x+(c.s-c.x)*p);m= -bj*3.141592653589793/
180.0+3.141592653589793;bj=Bo(m);bl=Bn(m);m= -bf*3.141592653589793/180.0;bf=Bo(m);bg=Bn(m);bm=bl*bf;bf=bj*bf;bn=bm*5.0;bo=bg*5.0;bf=bf*5.0;bp=BC(bk.bk+bn,bk.bl+bo,bk.bj+bf);q.a.bm=Cm(q.a.g,bk,bp);q.E=1.0;q.bz=512>>(q.a.F.br<<1);V(5889);Y();Cs(70.0,q.a.l/q.a.c,0.05000000074505806,q.bz);V(5888);Y();bq=q.a.d;Bt(0.0,0.0,(-0.30000001192092896));By(bq.D+(bq.ba-bq.D)*p,1.0,0.0,0.0);By(bq.C+(bq.bc-bq.C)*p,0.0,1.0,0.0);Bt( -(bq.y+(bq.r-bq.y)*p), -(bq.z+(bq.p-bq.z)*p), -(bq.x+(bq.s-bq.x)*p));Bd(2884);br=Cn();bs=q.a.H;r
=0;while(true){h=d;if(r>=bs.bh.data.length)break;h=d;Cj(bs.bh.data[r],br);r=r+1|0;}h=d;c=q.a.H;bt=CI(CH(z));Cr(bt,c.bu);s=4;bu=Ck(bt);bh:{while(true){h=d;if(!bu.b9())break bh;h=d;bv=bu.b2();Co(bv);Cw(c.bu,bv);s=s+(-1)|0;if(!s)break;h=d;}h=d;}h=d;bw=Cl(ba,z.r,z.p,z.s,0.10000000149011612);B7(q);Bd(2912);r=0;$p=12;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue;}else{throw $$e;}}}}catch($$e){$$je=D($$e);if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c
=$$je;break r;}}Bc(a);return;}try{u=Long_fromInt(100);$p=5;continue _;}catch($$e){$$je=D($$e);if($$je instanceof Bs){}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}}Bc(a);return;}try{Bv(by);break a;}catch($$e){$$je=D($$e);c=$$je;}}Bc(a);H(c);}Bc(a);return;case 16:a:{r:{n:{o:{try{$z=SL(bb,z,r);if(N()){break _;}bB=$z;IC(1,1,1,1);if(bB>0){h=d;Bd(3553);r=3553;c=bb.e6;b=B(182);$p=18;continue _;}h=d;RZ(1);BM(3042);BM(2896);BM(2912);BM(3553);if(q.a.bm!==null){h=d;E0(513);BM(3008);c=q.a.bm;r=q.a.em;s
=F2(z.dG);$p=19;continue _;}h=d;c=q.a.fy;if(q.a.G===null){h=d;r=0;}else{h=d;r=1;}h=d;$p=20;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;}else if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}l:{try{t:while(true){BA(a,CV(B(176),Bf(E(BX(E(Bh(),B(177)),bx),B(178)))));Bv(bx);d=h;while(true){u=Bq();j=Long_add(g,Long_fromInt(1000));if(Long_lt(u,j))break;c=E(S(Bh(),d),B(179));Cp();a.cl=Bf(E(S(c,ARg),B(180)));ARg=0;d=0;g=j;}if(!a.cb)break;if(a.cx)break l;b:
{try{h=d;i=a.P;j=Bq();k=Long_sub(j,i.Q);l=Long_div(Cd(),Long_fromInt(1000000));if(Long_le(k,Long_fromInt(1000)))break b;h=d;m=Long_toNumber(k)/Long_toNumber(Long_sub(l,i.R));i.B=i.B+(m-i.B)*0.20000000298023224;i.Q=j;i.R=l;break b;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue t;}else{throw $$e;}}}c:{try{h=d;if(Long_ge(k,Long_ZERO))break c;h=d;i.Q=j;i.R=l;break c;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue t;}else{throw $$e;}}}d:{e:{try{h=d;n=Long_toNumber(l)/1000.0;m=(n-i.bA)
*i.B;i.bA=n;if(m<0.0)break e;break d;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue t;}else{throw $$e;}}}try{h=d;m=0.0;break d;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue t;}else{throw $$e;}}}f:{be:{try{h=d;if(m>1.0)break be;break f;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue t;}else{throw $$e;}}}try{h=d;m=1.0;break f;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue t;}else{throw $$e;}}}bf:{try{h=d;i.h=i.h+m*i.cu*i.cj;i.q=i.h|0;if(i.q<=100)break bf;h
=d;i.q=100;break bf;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue t;}else{throw $$e;}}}try{h=d;i.h=i.h-i.q;i.bD=i.h;o=0;h=d;if(o<a.P.q){h=d;a.be=a.be+1|0;$p=7;continue _;}h=d;B2(B(175));p=a.P.bD;q=a.cv;if(q.bC){h=d;if(!BJ()){h=d;Ce(q.a);}}h=d;q.bC=BJ();if(q.a.b7){h=d;r=CA();s=Cx();t=1;if(q.a.F.b_){h=d;t=(-1);}h=d;Cu(q.a.d,r,K(s,t));}h=d;if(q.a.cs){h=d;u=Long_fromInt(5);$p=8;continue _;}h=d;v=(q.a.l*240|0)/q.a.c|0;w=(q.a.c*240|0)/q.a.c|0;x=K(Cz(),v)/q.a.l|0;y=(w-(K(CD(),w)/q.a.c|0)|0)-1|0;if
(q.a.g===null){h=d;BF(0,0,q.a.l,q.a.c);BG(0.0,0.0,0.0,0.0);BD(16640);V(5889);Y();V(5888);Y();Ch(q);h=d;if(q.a.G===null){h=d;$p=9;continue _;}h=d;c=q.a.G;$p=11;continue _;}h=d;z=q.a.d;ba=q.a.g;bb=q.a.H;bc=q.a.bX;BF(0,0,q.a.l,q.a.c);bd=q.a.g;be=q.a.d;bf=CF(1.0/(4-q.a.F.br|0),0.25);bg=1.0-bf;q.k=0.6000000238418579*bg+bf;q.i=0.800000011920929*bg+bf;q.j=1.0*bg+bf;q.k=q.k*q.E;q.i=q.i*q.E;q.j=q.j*q.E;Bj();bh=ARc.data[Bp(bd,be.r|0,be.p+0.11999999731779099|0,be.s|0)];if(bh!==null){h=d;if(bh.bd()!==ARd){h=d;bi=bh.bd();if
(bi===ARe){h=d;q.k=0.019999999552965164;q.i=0.019999999552965164;q.j=0.20000000298023224;}else{h=d;if(bi===ARf){h=d;q.k=0.6000000238418579;q.i=0.10000000149011612;q.j=0.0;}}}}h=d;BG(q.k,q.i,q.j,0.0);BD(16640);c=q.a.d;bf=c.D+(c.ba-c.D)*p;bj=c.C+(c.bc-c.C)*p;bk=BC(c.y+(c.r-c.y)*p,c.z+(c.p-c.z)*p,c.x+(c.s-c.x)*p);m= -bj*3.141592653589793/180.0+3.141592653589793;bj=Bo(m);bl=Bn(m);m= -bf*3.141592653589793/180.0;bf=Bo(m);bg=Bn(m);bm=bl*bf;bf=bj*bf;bn=bm*5.0;bo=bg*5.0;bf=bf*5.0;bp=BC(bk.bk+bn,bk.bl+bo,bk.bj+bf);q.a.bm
=Cm(q.a.g,bk,bp);q.E=1.0;q.bz=512>>(q.a.F.br<<1);V(5889);Y();Cs(70.0,q.a.l/q.a.c,0.05000000074505806,q.bz);V(5888);Y();bq=q.a.d;Bt(0.0,0.0,(-0.30000001192092896));By(bq.D+(bq.ba-bq.D)*p,1.0,0.0,0.0);By(bq.C+(bq.bc-bq.C)*p,0.0,1.0,0.0);Bt( -(bq.y+(bq.r-bq.y)*p), -(bq.z+(bq.p-bq.z)*p), -(bq.x+(bq.s-bq.x)*p));Bd(2884);br=Cn();bs=q.a.H;r=0;while(true){h=d;if(r>=bs.bh.data.length)break;h=d;Cj(bs.bh.data[r],br);r=r+1|0;}h=d;c=q.a.H;bt=CI(CH(z));Cr(bt,c.bu);s=4;bu=Ck(bt);bg:{while(true){h=d;if(!bu.b9())break bg;h=
d;bv=bu.b2();Co(bv);Cw(c.bu,bv);s=s+(-1)|0;if(!s)break;h=d;}h=d;}h=d;bw=Cl(ba,z.r,z.p,z.s,0.10000000149011612);B7(q);Bd(2912);r=0;$p=12;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue;}else{throw $$e;}}}}catch($$e){$$je=D($$e);if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}Bc(a);return;}try{u=Long_fromInt(100);$p=5;continue _;}catch($$e){$$je=D($$e);if($$je instanceof Bs){}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}}Bc(a);return;}try
{Bv(by);break a;}catch($$e){$$je=D($$e);c=$$je;}}Bc(a);H(c);}Bc(a);return;case 17:a:{r:{n:{o:{try{WU(bb,z,c,r,s);if(N()){break _;}Xn(q.a.bm,q.a.em);Bd(3008);Bd(2896);h=d;El(770,771);B7(q);FE(bb.hu+1|0);Bd(3042);IC(0,0,0,0);r=1;$p=16;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;}else if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}h:{try{i:while(true){BA(a,CV(B(176),Bf(E(BX(E(Bh(),B(177)),bx),B(178)))));Bv(bx);d=h;while(true){u=Bq();j=Long_add(g,
Long_fromInt(1000));if(Long_lt(u,j))break;c=E(S(Bh(),d),B(179));Cp();a.cl=Bf(E(S(c,ARg),B(180)));ARg=0;d=0;g=j;}if(!a.cb)break;if(a.cx)break h;l:{try{h=d;i=a.P;j=Bq();k=Long_sub(j,i.Q);l=Long_div(Cd(),Long_fromInt(1000000));if(Long_le(k,Long_fromInt(1000)))break l;h=d;m=Long_toNumber(k)/Long_toNumber(Long_sub(l,i.R));i.B=i.B+(m-i.B)*0.20000000298023224;i.Q=j;i.R=l;break l;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}t:{try{h=d;if(Long_ge(k,Long_ZERO))break t;h=d;i.Q=j;i.R
=l;break t;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}u:{v:{try{h=d;n=Long_toNumber(l)/1000.0;m=(n-i.bA)*i.B;i.bA=n;if(m<0.0)break v;break u;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}try{h=d;m=0.0;break u;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}b:{c:{try{h=d;if(m>1.0)break c;break b;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}try{h=d;m=1.0;break b;}
catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}d:{try{h=d;i.h=i.h+m*i.cu*i.cj;i.q=i.h|0;if(i.q<=100)break d;h=d;i.q=100;break d;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue i;}else{throw $$e;}}}try{h=d;i.h=i.h-i.q;i.bD=i.h;o=0;h=d;if(o<a.P.q){h=d;a.be=a.be+1|0;$p=7;continue _;}h=d;B2(B(175));p=a.P.bD;q=a.cv;if(q.bC){h=d;if(!BJ()){h=d;Ce(q.a);}}h=d;q.bC=BJ();if(q.a.b7){h=d;r=CA();s=Cx();t=1;if(q.a.F.b_){h=d;t=(-1);}h=d;Cu(q.a.d,r,K(s,t));}h=d;if(q.a.cs){h
=d;u=Long_fromInt(5);$p=8;continue _;}h=d;v=(q.a.l*240|0)/q.a.c|0;w=(q.a.c*240|0)/q.a.c|0;x=K(Cz(),v)/q.a.l|0;y=(w-(K(CD(),w)/q.a.c|0)|0)-1|0;if(q.a.g===null){h=d;BF(0,0,q.a.l,q.a.c);BG(0.0,0.0,0.0,0.0);BD(16640);V(5889);Y();V(5888);Y();Ch(q);h=d;if(q.a.G===null){h=d;$p=9;continue _;}h=d;c=q.a.G;$p=11;continue _;}h=d;z=q.a.d;ba=q.a.g;bb=q.a.H;bc=q.a.bX;BF(0,0,q.a.l,q.a.c);bd=q.a.g;be=q.a.d;bf=CF(1.0/(4-q.a.F.br|0),0.25);bg=1.0-bf;q.k=0.6000000238418579*bg+bf;q.i=0.800000011920929*bg+bf;q.j=1.0*bg+bf;q.k=q.k
*q.E;q.i=q.i*q.E;q.j=q.j*q.E;Bj();bh=ARc.data[Bp(bd,be.r|0,be.p+0.11999999731779099|0,be.s|0)];if(bh!==null){h=d;if(bh.bd()!==ARd){h=d;bi=bh.bd();if(bi===ARe){h=d;q.k=0.019999999552965164;q.i=0.019999999552965164;q.j=0.20000000298023224;}else{h=d;if(bi===ARf){h=d;q.k=0.6000000238418579;q.i=0.10000000149011612;q.j=0.0;}}}}h=d;BG(q.k,q.i,q.j,0.0);BD(16640);c=q.a.d;bf=c.D+(c.ba-c.D)*p;bj=c.C+(c.bc-c.C)*p;bk=BC(c.y+(c.r-c.y)*p,c.z+(c.p-c.z)*p,c.x+(c.s-c.x)*p);m= -bj*3.141592653589793/180.0+3.141592653589793;bj=
Bo(m);bl=Bn(m);m= -bf*3.141592653589793/180.0;bf=Bo(m);bg=Bn(m);bm=bl*bf;bf=bj*bf;bn=bm*5.0;bo=bg*5.0;bf=bf*5.0;bp=BC(bk.bk+bn,bk.bl+bo,bk.bj+bf);q.a.bm=Cm(q.a.g,bk,bp);q.E=1.0;q.bz=512>>(q.a.F.br<<1);V(5889);Y();Cs(70.0,q.a.l/q.a.c,0.05000000074505806,q.bz);V(5888);Y();bq=q.a.d;Bt(0.0,0.0,(-0.30000001192092896));By(bq.D+(bq.ba-bq.D)*p,1.0,0.0,0.0);By(bq.C+(bq.bc-bq.C)*p,0.0,1.0,0.0);Bt( -(bq.y+(bq.r-bq.y)*p), -(bq.z+(bq.p-bq.z)*p), -(bq.x+(bq.s-bq.x)*p));Bd(2884);br=Cn();bs=q.a.H;r=0;while(true){h=d;if(r>=
bs.bh.data.length)break;h=d;Cj(bs.bh.data[r],br);r=r+1|0;}h=d;c=q.a.H;bt=CI(CH(z));Cr(bt,c.bu);s=4;bu=Ck(bt);q:{while(true){h=d;if(!bu.b9())break q;h=d;bv=bu.b2();Co(bv);Cw(c.bu,bv);s=s+(-1)|0;if(!s)break;h=d;}h=d;}h=d;bw=Cl(ba,z.r,z.p,z.s,0.10000000149011612);B7(q);Bd(2912);r=0;$p=12;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue;}else{throw $$e;}}}}catch($$e){$$je=D($$e);if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}Bc(a);return;}try
{u=Long_fromInt(100);$p=5;continue _;}catch($$e){$$je=D($$e);if($$je instanceof Bs){}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}}Bc(a);return;}try{Bv(by);break a;}catch($$e){$$je=D($$e);c=$$je;}}Bc(a);H(c);}Bc(a);return;case 18:a:{r:{n:{o:{try{$z=We(c,b);if(N()){break _;}s=$z;CR(r,s);Rn(bb.fu);BM(3553);h=d;RZ(1);BM(3042);BM(2896);BM(2912);BM(3553);if(q.a.bm!==null){h=d;E0(513);BM(3008);c=q.a.bm;r=q.a.em;s=F2(z.dG);$p=19;continue _;}h=d;c=q.a.fy;if(q.a.G===null){h=d;r=0;}else{h=d;r=1;}h
=d;$p=20;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;}else if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}k:{try{l:while(true){BA(a,CV(B(176),Bf(E(BX(E(Bh(),B(177)),bx),B(178)))));Bv(bx);d=h;while(true){u=Bq();j=Long_add(g,Long_fromInt(1000));if(Long_lt(u,j))break;c=E(S(Bh(),d),B(179));Cp();a.cl=Bf(E(S(c,ARg),B(180)));ARg=0;d=0;g=j;}if(!a.cb)break;if(a.cx)break k;v:{try{h=d;i=a.P;j=Bq();k=Long_sub(j,i.Q);l=Long_div(Cd(),Long_fromInt(1000000));if
(Long_le(k,Long_fromInt(1000)))break v;h=d;m=Long_toNumber(k)/Long_toNumber(Long_sub(l,i.R));i.B=i.B+(m-i.B)*0.20000000298023224;i.Q=j;i.R=l;break v;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue l;}else{throw $$e;}}}b:{try{h=d;if(Long_ge(k,Long_ZERO))break b;h=d;i.Q=j;i.R=l;break b;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue l;}else{throw $$e;}}}c:{d:{try{h=d;n=Long_toNumber(l)/1000.0;m=(n-i.bA)*i.B;i.bA=n;if(m<0.0)break d;break c;}catch($$e){$$je=D($$e);if($$je instanceof J)
{bx=$$je;continue l;}else{throw $$e;}}}try{h=d;m=0.0;break c;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue l;}else{throw $$e;}}}e:{f:{try{h=d;if(m>1.0)break f;break e;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue l;}else{throw $$e;}}}try{h=d;m=1.0;break e;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue l;}else{throw $$e;}}}be:{try{h=d;i.h=i.h+m*i.cu*i.cj;i.q=i.h|0;if(i.q<=100)break be;h=d;i.q=100;break be;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue l;}
else{throw $$e;}}}try{h=d;i.h=i.h-i.q;i.bD=i.h;o=0;h=d;if(o<a.P.q){h=d;a.be=a.be+1|0;$p=7;continue _;}h=d;B2(B(175));p=a.P.bD;q=a.cv;if(q.bC){h=d;if(!BJ()){h=d;Ce(q.a);}}h=d;q.bC=BJ();if(q.a.b7){h=d;r=CA();s=Cx();t=1;if(q.a.F.b_){h=d;t=(-1);}h=d;Cu(q.a.d,r,K(s,t));}h=d;if(q.a.cs){h=d;u=Long_fromInt(5);$p=8;continue _;}h=d;v=(q.a.l*240|0)/q.a.c|0;w=(q.a.c*240|0)/q.a.c|0;x=K(Cz(),v)/q.a.l|0;y=(w-(K(CD(),w)/q.a.c|0)|0)-1|0;if(q.a.g===null){h=d;BF(0,0,q.a.l,q.a.c);BG(0.0,0.0,0.0,0.0);BD(16640);V(5889);Y();V(5888);Y();Ch(q);h
=d;if(q.a.G===null){h=d;$p=9;continue _;}h=d;c=q.a.G;$p=11;continue _;}h=d;z=q.a.d;ba=q.a.g;bb=q.a.H;bc=q.a.bX;BF(0,0,q.a.l,q.a.c);bd=q.a.g;be=q.a.d;bf=CF(1.0/(4-q.a.F.br|0),0.25);bg=1.0-bf;q.k=0.6000000238418579*bg+bf;q.i=0.800000011920929*bg+bf;q.j=1.0*bg+bf;q.k=q.k*q.E;q.i=q.i*q.E;q.j=q.j*q.E;Bj();bh=ARc.data[Bp(bd,be.r|0,be.p+0.11999999731779099|0,be.s|0)];if(bh!==null){h=d;if(bh.bd()!==ARd){h=d;bi=bh.bd();if(bi===ARe){h=d;q.k=0.019999999552965164;q.i=0.019999999552965164;q.j=0.20000000298023224;}else{h
=d;if(bi===ARf){h=d;q.k=0.6000000238418579;q.i=0.10000000149011612;q.j=0.0;}}}}h=d;BG(q.k,q.i,q.j,0.0);BD(16640);c=q.a.d;bf=c.D+(c.ba-c.D)*p;bj=c.C+(c.bc-c.C)*p;bk=BC(c.y+(c.r-c.y)*p,c.z+(c.p-c.z)*p,c.x+(c.s-c.x)*p);m= -bj*3.141592653589793/180.0+3.141592653589793;bj=Bo(m);bl=Bn(m);m= -bf*3.141592653589793/180.0;bf=Bo(m);bg=Bn(m);bm=bl*bf;bf=bj*bf;bn=bm*5.0;bo=bg*5.0;bf=bf*5.0;bp=BC(bk.bk+bn,bk.bl+bo,bk.bj+bf);q.a.bm=Cm(q.a.g,bk,bp);q.E=1.0;q.bz=512>>(q.a.F.br<<1);V(5889);Y();Cs(70.0,q.a.l/q.a.c,0.05000000074505806,
q.bz);V(5888);Y();bq=q.a.d;Bt(0.0,0.0,(-0.30000001192092896));By(bq.D+(bq.ba-bq.D)*p,1.0,0.0,0.0);By(bq.C+(bq.bc-bq.C)*p,0.0,1.0,0.0);Bt( -(bq.y+(bq.r-bq.y)*p), -(bq.z+(bq.p-bq.z)*p), -(bq.x+(bq.s-bq.x)*p));Bd(2884);br=Cn();bs=q.a.H;r=0;while(true){h=d;if(r>=bs.bh.data.length)break;h=d;Cj(bs.bh.data[r],br);r=r+1|0;}h=d;c=q.a.H;bt=CI(CH(z));Cr(bt,c.bu);s=4;bu=Ck(bt);m:{while(true){h=d;if(!bu.b9())break m;h=d;bv=bu.b2();Co(bv);Cw(c.bu,bv);s=s+(-1)|0;if(!s)break;h=d;}h=d;}h=d;bw=Cl(ba,z.r,z.p,z.s,0.10000000149011612);B7(q);Bd(2912);r
=0;$p=12;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue;}else{throw $$e;}}}}catch($$e){$$je=D($$e);if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}Bc(a);return;}try{u=Long_fromInt(100);$p=5;continue _;}catch($$e){$$je=D($$e);if($$je instanceof Bs){}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}}Bc(a);return;}try{Bv(by);break a;}catch($$e){$$je=D($$e);c=$$je;}}Bc(a);H(c);}Bc(a);return;case 19:a:{r:{n:{o:{try{WU(bb,
z,c,r,s);if(N()){break _;}Xn(q.a.bm,q.a.em);Bd(3008);E0(515);h=d;c=q.a.fy;if(q.a.G===null){h=d;r=0;}else{h=d;r=1;}h=d;$p=20;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;}else if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}j:{try{k:while(true){BA(a,CV(B(176),Bf(E(BX(E(Bh(),B(177)),bx),B(178)))));Bv(bx);d=h;while(true){u=Bq();j=Long_add(g,Long_fromInt(1000));if(Long_lt(u,j))break;c=E(S(Bh(),d),B(179));Cp();a.cl=Bf(E(S(c,ARg),B(180)));ARg=0;d
=0;g=j;}if(!a.cb)break;if(a.cx)break j;u:{try{h=d;i=a.P;j=Bq();k=Long_sub(j,i.Q);l=Long_div(Cd(),Long_fromInt(1000000));if(Long_le(k,Long_fromInt(1000)))break u;h=d;m=Long_toNumber(k)/Long_toNumber(Long_sub(l,i.R));i.B=i.B+(m-i.B)*0.20000000298023224;i.Q=j;i.R=l;break u;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue k;}else{throw $$e;}}}v:{try{h=d;if(Long_ge(k,Long_ZERO))break v;h=d;i.Q=j;i.R=l;break v;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue k;}else{throw $$e;}}}b:{c:{try
{h=d;n=Long_toNumber(l)/1000.0;m=(n-i.bA)*i.B;i.bA=n;if(m<0.0)break c;break b;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue k;}else{throw $$e;}}}try{h=d;m=0.0;break b;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue k;}else{throw $$e;}}}d:{e:{try{h=d;if(m>1.0)break e;break d;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue k;}else{throw $$e;}}}try{h=d;m=1.0;break d;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue k;}else{throw $$e;}}}f:{try{h=d;i.h=
i.h+m*i.cu*i.cj;i.q=i.h|0;if(i.q<=100)break f;h=d;i.q=100;break f;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue k;}else{throw $$e;}}}try{h=d;i.h=i.h-i.q;i.bD=i.h;o=0;h=d;if(o<a.P.q){h=d;a.be=a.be+1|0;$p=7;continue _;}h=d;B2(B(175));p=a.P.bD;q=a.cv;if(q.bC){h=d;if(!BJ()){h=d;Ce(q.a);}}h=d;q.bC=BJ();if(q.a.b7){h=d;r=CA();s=Cx();t=1;if(q.a.F.b_){h=d;t=(-1);}h=d;Cu(q.a.d,r,K(s,t));}h=d;if(q.a.cs){h=d;u=Long_fromInt(5);$p=8;continue _;}h=d;v=(q.a.l*240|0)/q.a.c|0;w=(q.a.c*240|0)/q.a.c|0;x=K(Cz(),
v)/q.a.l|0;y=(w-(K(CD(),w)/q.a.c|0)|0)-1|0;if(q.a.g===null){h=d;BF(0,0,q.a.l,q.a.c);BG(0.0,0.0,0.0,0.0);BD(16640);V(5889);Y();V(5888);Y();Ch(q);h=d;if(q.a.G===null){h=d;$p=9;continue _;}h=d;c=q.a.G;$p=11;continue _;}h=d;z=q.a.d;ba=q.a.g;bb=q.a.H;bc=q.a.bX;BF(0,0,q.a.l,q.a.c);bd=q.a.g;be=q.a.d;bf=CF(1.0/(4-q.a.F.br|0),0.25);bg=1.0-bf;q.k=0.6000000238418579*bg+bf;q.i=0.800000011920929*bg+bf;q.j=1.0*bg+bf;q.k=q.k*q.E;q.i=q.i*q.E;q.j=q.j*q.E;Bj();bh=ARc.data[Bp(bd,be.r|0,be.p+0.11999999731779099|0,be.s|0)];if(bh
!==null){h=d;if(bh.bd()!==ARd){h=d;bi=bh.bd();if(bi===ARe){h=d;q.k=0.019999999552965164;q.i=0.019999999552965164;q.j=0.20000000298023224;}else{h=d;if(bi===ARf){h=d;q.k=0.6000000238418579;q.i=0.10000000149011612;q.j=0.0;}}}}h=d;BG(q.k,q.i,q.j,0.0);BD(16640);c=q.a.d;bf=c.D+(c.ba-c.D)*p;bj=c.C+(c.bc-c.C)*p;bk=BC(c.y+(c.r-c.y)*p,c.z+(c.p-c.z)*p,c.x+(c.s-c.x)*p);m= -bj*3.141592653589793/180.0+3.141592653589793;bj=Bo(m);bl=Bn(m);m= -bf*3.141592653589793/180.0;bf=Bo(m);bg=Bn(m);bm=bl*bf;bf=bj*bf;bn=bm*5.0;bo=bg*5.0;bf
=bf*5.0;bp=BC(bk.bk+bn,bk.bl+bo,bk.bj+bf);q.a.bm=Cm(q.a.g,bk,bp);q.E=1.0;q.bz=512>>(q.a.F.br<<1);V(5889);Y();Cs(70.0,q.a.l/q.a.c,0.05000000074505806,q.bz);V(5888);Y();bq=q.a.d;Bt(0.0,0.0,(-0.30000001192092896));By(bq.D+(bq.ba-bq.D)*p,1.0,0.0,0.0);By(bq.C+(bq.bc-bq.C)*p,0.0,1.0,0.0);Bt( -(bq.y+(bq.r-bq.y)*p), -(bq.z+(bq.p-bq.z)*p), -(bq.x+(bq.s-bq.x)*p));Bd(2884);br=Cn();bs=q.a.H;r=0;while(true){h=d;if(r>=bs.bh.data.length)break;h=d;Cj(bs.bh.data[r],br);r=r+1|0;}h=d;c=q.a.H;bt=CI(CH(z));Cr(bt,c.bu);s=4;bu=Ck(bt);bd:
{while(true){h=d;if(!bu.b9())break bd;h=d;bv=bu.b2();Co(bv);Cw(c.bu,bv);s=s+(-1)|0;if(!s)break;h=d;}h=d;}h=d;bw=Cl(ba,z.r,z.p,z.s,0.10000000149011612);B7(q);Bd(2912);r=0;$p=12;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue;}else{throw $$e;}}}}catch($$e){$$je=D($$e);if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}Bc(a);return;}try{u=Long_fromInt(100);$p=5;continue _;}catch($$e){$$je=D($$e);if($$je instanceof Bs){}else if($$je instanceof J)
{by=$$je;break n;}else{c=$$je;break r;}}}Bc(a);return;}try{Bv(by);break a;}catch($$e){$$je=D($$e);c=$$je;}}Bc(a);H(c);}Bc(a);return;case 20:a:{r:{n:{o:{try{Ze(c,r,x,y);if(N()){break _;}h=d;c=q.a;c=c.G;if(c===null){h=d;$p=9;continue _;}h=d;c=q.a;c=c.G;$p=11;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;}else if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}i:{try{j:while(true){BA(a,CV(B(176),Bf(E(BX(E(Bh(),B(177)),bx),B(178)))));Bv(bx);d=h;while
(true){u=Bq();j=Long_add(g,Long_fromInt(1000));if(Long_lt(u,j))break;c=E(S(Bh(),d),B(179));Cp();a.cl=Bf(E(S(c,ARg),B(180)));ARg=0;d=0;g=j;}if(!a.cb)break;if(a.cx)break i;t:{try{h=d;i=a.P;j=Bq();k=Long_sub(j,i.Q);l=Long_div(Cd(),Long_fromInt(1000000));if(Long_le(k,Long_fromInt(1000)))break t;h=d;m=Long_toNumber(k)/Long_toNumber(Long_sub(l,i.R));i.B=i.B+(m-i.B)*0.20000000298023224;i.Q=j;i.R=l;break t;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue j;}else{throw $$e;}}}u:{try{h=d;if(Long_ge(k,Long_ZERO))break u;h
=d;i.Q=j;i.R=l;break u;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue j;}else{throw $$e;}}}v:{b:{try{h=d;n=Long_toNumber(l)/1000.0;m=(n-i.bA)*i.B;i.bA=n;if(m<0.0)break b;break v;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue j;}else{throw $$e;}}}try{h=d;m=0.0;break v;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue j;}else{throw $$e;}}}c:{d:{try{h=d;if(m>1.0)break d;break c;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue j;}else{throw $$e;}}}try{h
=d;m=1.0;break c;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue j;}else{throw $$e;}}}e:{try{h=d;i.h=i.h+m*i.cu*i.cj;i.q=i.h|0;if(i.q<=100)break e;h=d;i.q=100;break e;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue j;}else{throw $$e;}}}try{h=d;i.h=i.h-i.q;i.bD=i.h;o=0;h=d;if(o<a.P.q){h=d;a.be=a.be+1|0;$p=7;continue _;}h=d;B2(B(175));p=a.P.bD;q=a.cv;if(q.bC){h=d;if(!BJ()){h=d;Ce(q.a);}}h=d;q.bC=BJ();if(q.a.b7){h=d;r=CA();s=Cx();t=1;if(q.a.F.b_){h=d;t=(-1);}h=d;Cu(q.a.d,r,K(s,t));}h
=d;if(q.a.cs){h=d;u=Long_fromInt(5);$p=8;continue _;}h=d;v=(q.a.l*240|0)/q.a.c|0;w=(q.a.c*240|0)/q.a.c|0;x=K(Cz(),v)/q.a.l|0;y=(w-(K(CD(),w)/q.a.c|0)|0)-1|0;if(q.a.g===null){h=d;BF(0,0,q.a.l,q.a.c);BG(0.0,0.0,0.0,0.0);BD(16640);V(5889);Y();V(5888);Y();Ch(q);h=d;c=q.a;c=c.G;if(c===null){h=d;$p=9;continue _;}h=d;c=q.a;c=c.G;$p=11;continue _;}h=d;z=q.a.d;ba=q.a.g;bb=q.a.H;bc=q.a.bX;BF(0,0,q.a.l,q.a.c);bd=q.a.g;be=q.a.d;bf=CF(1.0/(4-q.a.F.br|0),0.25);bg=1.0-bf;q.k=0.6000000238418579*bg+bf;q.i=0.800000011920929*
bg+bf;q.j=1.0*bg+bf;q.k=q.k*q.E;q.i=q.i*q.E;q.j=q.j*q.E;Bj();bh=ARc.data[Bp(bd,be.r|0,be.p+0.11999999731779099|0,be.s|0)];if(bh!==null){h=d;if(bh.bd()!==ARd){h=d;bi=bh.bd();if(bi===ARe){h=d;q.k=0.019999999552965164;q.i=0.019999999552965164;q.j=0.20000000298023224;}else{h=d;if(bi===ARf){h=d;q.k=0.6000000238418579;q.i=0.10000000149011612;q.j=0.0;}}}}h=d;BG(q.k,q.i,q.j,0.0);BD(16640);c=q.a.d;bf=c.D+(c.ba-c.D)*p;bj=c.C+(c.bc-c.C)*p;bk=BC(c.y+(c.r-c.y)*p,c.z+(c.p-c.z)*p,c.x+(c.s-c.x)*p);m= -bj*3.141592653589793/
180.0+3.141592653589793;bj=Bo(m);bl=Bn(m);m= -bf*3.141592653589793/180.0;bf=Bo(m);bg=Bn(m);bm=bl*bf;bf=bj*bf;bn=bm*5.0;bo=bg*5.0;bf=bf*5.0;bp=BC(bk.bk+bn,bk.bl+bo,bk.bj+bf);q.a.bm=Cm(q.a.g,bk,bp);q.E=1.0;q.bz=512>>(q.a.F.br<<1);V(5889);Y();Cs(70.0,q.a.l/q.a.c,0.05000000074505806,q.bz);V(5888);Y();bq=q.a.d;Bt(0.0,0.0,(-0.30000001192092896));By(bq.D+(bq.ba-bq.D)*p,1.0,0.0,0.0);By(bq.C+(bq.bc-bq.C)*p,0.0,1.0,0.0);Bt( -(bq.y+(bq.r-bq.y)*p), -(bq.z+(bq.p-bq.z)*p), -(bq.x+(bq.s-bq.x)*p));Bd(2884);br=Cn();bs=q.a.H;r
=0;while(true){h=d;if(r>=bs.bh.data.length)break;h=d;Cj(bs.bh.data[r],br);r=r+1|0;}h=d;c=q.a.H;bt=CI(CH(z));Cr(bt,c.bu);s=4;bu=Ck(bt);bh:{while(true){h=d;if(!bu.b9())break bh;h=d;bv=bu.b2();Co(bv);Cw(c.bu,bv);s=s+(-1)|0;if(!s)break;h=d;}h=d;}h=d;bw=Cl(ba,z.r,z.p,z.s,0.10000000149011612);B7(q);Bd(2912);r=0;$p=12;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){bx=$$je;continue;}else{throw $$e;}}}}catch($$e){$$je=D($$e);if($$je instanceof Bs){break o;}else if($$je instanceof J){by=$$je;break n;}else{c
=$$je;break r;}}Bc(a);return;}try{u=Long_fromInt(100);$p=5;continue _;}catch($$e){$$je=D($$e);if($$je instanceof Bs){}else if($$je instanceof J){by=$$je;break n;}else{c=$$je;break r;}}}Bc(a);return;}try{Bv(by);break a;}catch($$e){$$je=D($$e);c=$$je;}}Bc(a);H(c);}Bc(a);return;default:FI();}}De().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD,$p);}
function D3(a){if(!a.b7){a.b7=1;WO(1);BA(a,null);a.fe=a.be+10000|0;}}
function Ce(a){var b;if(!(a.G instanceof Jg)){b=new Jg;Eb(b);BA(a,b);}}
function G0(a){var b,c,d,e,f,g,h;a:{if(a.bm!==null){b=a.bm.hf;c=a.bm.hg;d=a.bm.hh;if(a.em){if(!a.bm.cP)c=c+(-1)|0;if(a.bm.cP==1)c=c+1|0;if(a.bm.cP==2)d=d+(-1)|0;if(a.bm.cP==3)d=d+1|0;if(a.bm.cP==4)b=b+(-1)|0;if(a.bm.cP==5)b=b+1|0;}Bj();e=ARc.data[Bp(a.g,b,c,d)];if(!a.em){if(e===ARh&&a.d.s1<100)break a;f=Rp(a.g,b,c,d,0);if(e!==null&&f&&e.n$!==ARi)AAP(e,a.g,b,c,d,a.bX);return;}g=F2(a.d.dG);h=ARc.data[Bp(a.g,b,c,d)];if(!(h!==null&&h!==APV&&h!==ARj&&h!==APU&&h!==ARk)){h=ARc.data[g].i6(b,c,d);if(h!==null){if(N0(a.d.cD,
h))break a;if(!Uo(a.g,h))break a;}Rp(a.g,b,c,d,F2(a.d.dG));ARc.data[g].nR(a.g,b,c,d);}}}}
function Xt(a){var b,c,d,e,f,g,h,i,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.fy;c=0;while(c<HQ(b.el)){d=Br(b.el,c);d.jL=d.jL+1|0;c=c+1|0;}c=3553;d=a.cF;b=B(182);$p=1;case 1:$z=We(d,b);if(N()){break _;}e=$z;CR(c,e);d=a.cF;e=0;while(e<HQ(d.l4)){f=Br(d.l4,e);f.ms();L9(d.fH);Jf(d.fH,f.eN);Vm(AAr(d.fH,0),f.eN.data.length);AAh(3553,0,(f.pH%16|0)<<4,(f.pH/16|0)<<4,16,16,6408,5121,d.fH);e=e+1|0;}if(!(a.G
!==null&&!a.G.nt)){while(KE()){e=S6();if(e)O4(a.d.dG,e);a:{if(a.G!==null)break a;if(!a.b7&&D_()){D3(a);break a;}if(!Fq()&&D_()){G0(a);a.fe=a.be;}if(Fq()==1&&D_())a.em=(a.em+1|0)%2|0;if(Fq()!=2)break a;if(!D_())break a;if(a.bm===null)break a;c=Bp(a.g,a.bm.hf,a.bm.hg,a.bm.hh);Bj();if(c==ARl.bn)c=ARm.bn;g=a.d.dG;h=JS(g,c);if(h>=0){g.cY=h;break a;}if(c<=0)break a;Gq();if(!Pm(ARn,ARc.data[c]))break a;KC(g,ARc.data[c]);}if(a.G===null)continue;else{b=a.G;$p=3;continue _;}}while(Jq()){Qe(a.d,CW(),HY());if(!HY())continue;if
(a.G!==null)GY(a.G);if(a.G===null){if(CW()==1)Ce(a);if(CW()==a.F.kZ.cS)Du(a.d);if(CW()==a.F.kM.cS){NM(a.g,a.d.r|0,a.d.p|0,a.d.s|0,a.d.bc);Du(a.d);}if(CW()==34&&HQ(a.g.db)<256)Bg(a.g.db,AK3(a.g,a.d.r,a.d.p,a.d.s));if(CW()==a.F.j6.cS)BA(a,AIy());}e=0;while(e<9){if(CW()==(e+2|0))a.d.dG.cY=e;e=e+1|0;}if(CW()!=a.F.kb.cS)continue;Kg(a.F,4,!JZ(42)&&!JZ(54)?1:(-1));}if(a.G===null&&Yn(0)&&(a.be-a.fe|0)>=a.P.cj/4.0&&a.b7){G0(a);a.fe=a.be;}}if(a.G!==null)a.fe=a.be+10000|0;if(a.G===null){if(a.g!==null){i=a.H;i.gm=i.gm+
1|0;Jn(a.g);Ip(a.g);Iv(a.bX);KR(a.d);}return;}b=a.G;$p=2;case 2:VH(b);if(N()){break _;}if(a.G!==null)a.G.ft();if(a.g!==null){i=a.H;i.gm=i.gm+1|0;Jn(a.g);Ip(a.g);Iv(a.bX);KR(a.d);}return;case 3:ZC(b);if(N()){break _;}while(true){if(!KE()){while(Jq()){Qe(a.d,CW(),HY());if(!HY())continue;if(a.G!==null)GY(a.G);if(a.G===null){if(CW()==1)Ce(a);if(CW()==a.F.kZ.cS)Du(a.d);if(CW()==a.F.kM.cS){NM(a.g,a.d.r|0,a.d.p|0,a.d.s|0,a.d.bc);Du(a.d);}if(CW()==34&&HQ(a.g.db)<256)Bg(a.g.db,AK3(a.g,a.d.r,a.d.p,a.d.s));if(CW()==a.F.j6.cS)BA(a,
AIy());}e=0;while(e<9){if(CW()==(e+2|0))a.d.dG.cY=e;e=e+1|0;}if(CW()!=a.F.kb.cS)continue;Kg(a.F,4,!JZ(42)&&!JZ(54)?1:(-1));}if(a.G===null&&Yn(0)&&(a.be-a.fe|0)>=a.P.cj/4.0&&a.b7){G0(a);a.fe=a.be;}if(a.G!==null)a.fe=a.be+10000|0;if(a.G===null){if(a.g!==null){i=a.H;i.gm=i.gm+1|0;Jn(a.g);Ip(a.g);Iv(a.bX);KR(a.d);}return;}b=a.G;$p=2;continue _;}e=S6();if(e)O4(a.d.dG,e);b:{if(a.G!==null)break b;if(!a.b7&&D_()){D3(a);break b;}if(!Fq()&&D_()){G0(a);a.fe=a.be;}if(Fq()==1&&D_())a.em=(a.em+1|0)%2|0;if(Fq()!=2)break b;if
(!D_())break b;if(a.bm===null)break b;c=Bp(a.g,a.bm.hf,a.bm.hg,a.bm.hh);Bj();if(c==ARl.bn)c=ARm.bn;g=a.d.dG;h=JS(g,c);if(h>=0){g.cY=h;break b;}if(c<=0)break b;Gq();if(!Pm(ARn,ARc.data[c]))break b;KC(g,ARc.data[c]);}if(a.G===null)continue;else break;}b=a.G;continue _;default:FI();}}De().s(a,b,c,d,e,f,g,h,i,$p);}
function UD(a,b){var c,d,e,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.fC===null?B(183):a.fC.lP;d=a.td;b=128<<b;e=64;$p=1;case 1:$z=Vr(d,c,b,b,e);if(N()){break _;}c=$z;$p=2;case 2:Y9(a,c);if(N()){break _;}return;default:FI();}}De().s(a,b,c,d,e,$p);}
function Uc(a,b,c){var $p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:return 0;default:FI();}}De().s(a,b,c,$p);}
function Y9(a,b){var c,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.g=b;if(b!==null)b.vk=a;if(a.H!==null){c=a.H;if(c.bb!==null)WJ(c.bb,c);c.bb=b;if(b!==null){TD(b,c);$p=1;continue _;}}if(a.bX!==null)Ep(a.bX.fp);if(a.d!==null){a.d.dj=b;Du(a.d);}return;case 1:SP(c);if(N()){break _;}if(a.bX!==null)Ep(a.bX.fp);if(a.d!==null){a.d.dj=b;Du(a.d);}return;default:FI();}}De().s(a,b,c,$p);}
function Ug(){C.call(this);}
function BJ(){var b,c;T();b=document.pointerLockElement!=null?1:0;c=AQR;AQR=b;if(!c&&b){AQv=0.0;AQw=0.0;}a:{b:{if(AQA){if(!c)break b;if(b)break b;}c=0;break a;}c=1;}return c;}
function AEU(){var b,c,d,e,f,g,h,i,$$je,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:T();Xv(AQf);b=AQd;c=AQe;d=AQc.width;e=AQc.height;b.drawImage(c,0.0,0.0,d,e);f=AQc.clientWidth;g=AQc.clientHeight;if(!(f==AQx&&g==AQy)){AQx=f;AQy=g;c=AQe;h=f;c.width=h;c=AQe;h=g;c.height=h;}try{i=Long_fromInt(1);$p=1;continue _;}catch($$e){$$je=D($$e);if($$je instanceof E4){}else{throw $$e;}}return;case 1:a:{try{U4(i);if(N())
{break _;}break a;}catch($$e){$$je=D($$e);if($$je instanceof E4){}else{throw $$e;}}}return;default:FI();}}De().s(b,c,d,e,f,g,h,i,$p);}
function UP(){var b,c,d;T();b=AQb.clientWidth;if(b!=AQx){c=AQc;d=b;c.width=d;c=AQe;d=b;c.width=d;AQx=b;}return b;}
function AA9(){var b,c,d;T();b=AQb.clientHeight;if(b!=AQy){c=AQc;d=b;c.height=d;c=AQe;d=b;c.height=d;AQy=b;}return b;}
function IL(){var a=this;C.call(a);a.lP=null;a.x1=null;a.xn=null;}
var ARn=null;function Gq(){Gq=Bx(IL);AHq();}
function AHq(){var b;b=CU();ARn=b;Bj();Bg(b,ARo);Bg(ARn,ARp);Bg(ARn,ARm);Bg(ARn,ARq);Bg(ARn,ARr);Bg(ARn,ARs);Bg(ARn,ARt);Bg(ARn,ARu);Bg(ARn,ARv);Bg(ARn,ARw);Bg(ARn,ARx);Bg(ARn,ARy);Bg(ARn,ARz);Bg(ARn,ARA);Bg(ARn,ARB);Bg(ARn,ARC);Bg(ARn,ARD);Bg(ARn,ARE);Bg(ARn,ARF);Bg(ARn,ARG);Bg(ARn,ARH);Bg(ARn,ARI);Bg(ARn,ARJ);Bg(ARn,ARK);Bg(ARn,ARL);Bg(ARn,ARM);Bg(ARn,ARN);Bg(ARn,ARO);Bg(ARn,ARP);Bg(ARn,ARQ);Bg(ARn,ARR);Bg(ARn,ARS);}
function Ey(){var a=this;C.call(a);a.xR=Long_ZERO;a.s0=0;a.sh=Long_ZERO;a.m4=0;a.hx=null;a.rd=null;a.vr=null;a.mh=0;a.pR=null;}
var ART=null;var APQ=null;var ARU=Long_ZERO;var ARV=0;function TF(a,b){var c=new Ey();Qx(c,a,b);return c;}
function Qx(a,b,c){var d;a.hx=new C;a.mh=1;a.vr=c;a.pR=b;d=ARU;ARU=Long_add(d,Long_fromInt(1));a.xR=d;}
function In(a){var b;b=new QL;b.rq=a;AKi(b);}
function Ed(b){if(APQ!==b)APQ=b;APQ.sh=Bq();}
function ABd(a){var b,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.pR===null)return;b=a.pR;$p=1;case 1:b.fo();if(N()){break _;}return;default:FI();}}De().s(a,b,$p);}
function ACm(){return APQ;}
function AMh(a,b){a.s0=b;}
function SA(){var b,c,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=APQ;c=b.m4+1|0;b.m4=c;if(c<30)return;APQ.m4=0;if(Long_ge(Long_add(b.sh,Long_fromInt(100)),Bq()))return;$p=1;case 1:V7(b);if(N()){break _;}return;default:FI();}}De().s(b,c,$p);}
function V7(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.wA=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.wV=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=AOV(callback);return thread.suspend(function(){try{ADr(b,callback);}catch($e){callback.wV($rt_exception($e));}});}
function ADr(b,c){var d;d=new Sc;d.qk=b;d.qj=c;Pg(d);}
function U4(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.wA=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.wV=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=AOV(callback);return thread.suspend(function(){try{AFt(b,callback);}catch($e){callback.wV($rt_exception($e));}});}
function AFt(b,c){var d,e;d=APQ;e=new Mb;e.pZ=d;e.tw=c;e.xy=Z9(e,Long_ge(b,Long_fromInt(2147483647))?2147483647:b.lo);d.rd=e;}
function TK(){ART=TF(null,B(184));APQ=ART;ARU=Long_fromInt(1);ARV=1;}
function C2(){}
function RI(){C.call(this);}
function ACg(a,b){b.preventDefault();b.stopPropagation();}
function W6(a,b){ACg(a,b);}
function AMK(a,b){W6(a,b);}
function RQ(){C.call(this);}
function ABq(a,b){var c,d;c=b.button;d=Qm();if(c==1)c=2;else if(c==2)c=1;d.data[c]=1;Fr(Ih(),b);b.preventDefault();b.stopPropagation();KB();}
function Tp(a,b){ABq(a,b);}
function AHW(a,b){Tp(a,b);}
function RR(){C.call(this);}
function AAi(a,b){var c,d;c=b.button;d=Qm();if(c==1)c=2;else if(c==2)c=1;d.data[c]=0;Fr(Ih(),b);b.preventDefault();b.stopPropagation();}
function Ur(a,b){AAi(a,b);}
function AC7(a,b){Ur(a,b);}
function RO(){C.call(this);}
function Yp(a,b){var c;T();AQt=b.offsetX;AQu=AQc.clientHeight-b.offsetY|0;c=b.movementX;AQv=AQv+c;c= -b.movementY;AQw=AQw+c;b.preventDefault();b.stopPropagation();}
function X1(a,b){Yp(a,b);}
function ACo(a,b){X1(a,b);}
function RP(){C.call(this);}
function Y8(a,b){NF().data[So(OI(b))]=1;Fr(JM(),b);b.preventDefault();b.stopPropagation();KB();}
function AAv(a,b){Y8(a,b);}
function ADi(a,b){AAv(a,b);}
function RM(){C.call(this);}
function Ud(a,b){NF().data[So(OI(b))]=0;Fr(JM(),b);b.preventDefault();b.stopPropagation();}
function SU(a,b){Ud(a,b);}
function ANt(a,b){SU(a,b);}
function RN(){C.call(this);}
function ABP(a,b){T();if(AQz&&(b.repeat?1:0))Fr(JM(),b);b.preventDefault();b.stopPropagation();}
function Vt(a,b){ABP(a,b);}
function AG7(a,b){Vt(a,b);}
function RL(){C.call(this);}
function ZS(a,b){Fr(Ih(),b);b.preventDefault();b.stopPropagation();}
function Xb(a,b){ZS(a,b);}
function AEb(a,b){Xb(a,b);}
function OE(){C.call(this);}
function ZT(a,b){R8(0);}
function WB(a,b){ZT(a,b);}
function AH5(a,b){WB(a,b);}
function OD(){C.call(this);}
function ABp(a,b){R8(1);KB();}
function Wz(a,b){ABp(a,b);}
function AI9(a,b){Wz(a,b);}
function J1(){C.call(this);}
var ARW=null;var ARX=null;function Ul(){var b,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=B(185);$p=1;case 1:$z=AC$(b);if(N()){break _;}b=$z;if(b===null){ARW=B(163);return ARY;}if(b.t$)return ARZ;if(!b.ut&&b.oB!==null){ARX=b.oB;return AR0;}ARW=b.nn!==null?b.nn:B(186);return ARY;default:FI();}}De().s(b,$p);}
function AB5(){ARW=B(3);ARX=null;}
function VK(){C.call(this);}
function AIJ(){var Context=window.AudioContext||window.webkitAudioContext;return new Context();}
function N2(){C.call(this);}
var ARa=null;function Wi(b){var c,d,e,f,g,h,i,j,k,l,m;c=Nb(b);d=AN6(c);e=$rt_createByteArray(8);JT(d,e);if(!BR(B(187),ACz(e,SY(B(24))))){c=new BI;Bb(c,B(188));H(c);}HW(d);f=new NE;d=new Rg;g=new M6;g.dW=ALs();g.l$=0;h=ZF(g,15,0);if(h){c=new NK;f=new W;Ba(f);Bb(c,X(E(E(S(f,h),B(10)),g.bO)));H(c);}QH(d,c);d.l0=0;d.jK=0;d.tu=1;d.sZ=0;d.uK=$rt_createByteArray(1);d.xD=$rt_createByteArray(512);d.ep=g;d.je=$rt_createByteArray(512);d.tu=1;d.sZ=1;S3(f,d);g=new Pv;g.ff=$rt_createByteArray(4);g.fW=0;g.de=$rt_createIntArray(80);Ln(g);while
(true){d=HW(f);if(!BR(B(189),d)){if(U2(f)<=0&&BR(B(190),d))return;c=new BI;Bb(c,B(188));H(c);}i=HW(f);j=$rt_createByteArray(20);k=$rt_createByteArray(20);JT(f,j);h=ZP(f);l=$rt_createByteArray(h);JT(f,l);if(GW(ARa,i))continue;a:{YA(g,l,0,h);Wf(g,k,0);if(j===k)h=1;else{if(j!==null&&k!==null){b=j.data;e=k.data;h=b.length;if(h==e.length){m=0;while(m<h){if(b[m]!=e[m]){h=0;break a;}m=m+1|0;}h=1;break a;}}h=0;}}if(!h){c=new BI;f=new W;Ba(f);Bb(c,X(E(E(f,B(191)),i)));H(c);}DA(ARa,i,l);if(!BR(B(192),HW(f)))break;}c=
new BI;Bb(c,B(188));H(c);}
function TS(){ARa=C9();}
function BI(){J.call(this);}
function Md(){F4.call(this);}
function AMT(a){var b=new Md();AML(b,a);return b;}
function AML(a,b){FL(a,b);}
function ALJ(a,b){CL(a,b);return a;}
function ANm(a,b,c,d){GE(a,b,c,d);return a;}
function AFI(a,b){Fi(a,b);return a;}
function AIK(a,b,c,d,e){GU(a,b,c,d,e);return a;}
function AME(a,b,c){H$(a,b,c);return a;}
function AF8(a,b,c,d,e){GU(a,b,c,d,e);return a;}
function ADU(a,b,c,d){GE(a,b,c,d);return a;}
function SM(a,b){var c;if(b>=0&&b<a.bH)return a.A.data[b];c=new BB;R(c);H(c);}
function KX(a){return a.bH;}
function AD3(a){return X(a);}
function AEj(a,b){IE(a,b);}
function ALM(a,b,c){H$(a,b,c);return a;}
function EM(){}
function PW(){C.call(this);}
function Ec(){C.call(this);}
var AR1=null;var AR2=null;var AR3=null;var AR4=null;var AR5=null;var AR6=null;function Rv(b){var c,d;c=new Ca;d=$rt_createCharArray(1);d.data[0]=b;Ir(c,d);return c;}
function KI(b){return b>=65536&&b<=1114111?1:0;}
function CQ(b){return (b&64512)!=55296?0:1;}
function C5(b){return (b&64512)!=56320?0:1;}
function KM(b){return !CQ(b)&&!C5(b)?0:1;}
function GT(b,c){return CQ(b)&&C5(c)?1:0;}
function DB(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function Gc(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function GA(b){return (56320|b&1023)&65535;}
function Eh(b){return Fa(b)&65535;}
function Fa(b){return ZQ(b).toLowerCase().charCodeAt(0);}
function DX(b){return E$(b)&65535;}
function E$(b){return ZQ(b).toUpperCase().charCodeAt(0);}
function Qn(b,c){if(c>=2&&c<=36){b=MV(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function MV(b){var c,d,e,f,g,h,i,j,k;if(AR2===null){if(AR5===null)AR5=Wo();c=(AR5.value!==null?$rt_str(AR5.value):null);d=new QA;d.qQ=Ho(c);e=Tb(d);f=$rt_createIntArray(e);g=f.data;h=0;while(h<e){g[h]=Tb(d);h=h+1|0;}AR2=f;}f=AR2.data;h=0;i=(f.length/2|0)-1|0;while(i>=h){j=(h+i|0)/2|0;e=j*2|0;k=BN(b,f[e]);if(k>0)h=j+1|0;else{if(k>=0)return f[e+1|0];i=j-1|0;}}return (-1);}
function GI(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function F$(b){var c,d;if(b<65536){c=$rt_createCharArray(1);c.data[0]=b&65535;return c;}c=$rt_createCharArray(2);d=c.data;d[0]=Gc(b);d[1]=GA(b);return c;}
function CO(b){var c,d,e,f,g;c=b>0&&b<=65535?1:0;if(c&&KM(b&65535))return 19;if(AR3===null){if(AR6===null)AR6=AB$();AR3=ANS((AR6.value!==null?$rt_str(AR6.value):null));}d=AR3.data;e=0;c=d.length-1|0;while(e<=c){f=(e+c|0)/2|0;g=d[f];if(b>=g.sl)e=f+1|0;else{if(b>=g.nh)return g.rv.data[b-g.nh|0];c=f-1|0;}}return 0;}
function ID(b){a:{switch(CO(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function F7(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CO(b)!=16?0:1;}
function Np(b){switch(CO(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Og(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Np(b);}return 1;}
function Tl(){AR1=F($rt_charcls());AR4=I(Ec,128);}
function Wo(){return {"value":"oD#*% .%%2%)6%-:%1>%5B%9F%=J%AN%Eo%Is%Mw%Q{%U!\'Y&\'^*\'b.\'f2\'j6\'n:\'r>\'vB\'zF\'!#J\'&#N\'*#R\'.#V\'2#Z\'6#_\':#c\'>#g\'B#k\'F#o\'J#s\'N#w\'R#6)I:)M>)QB)UF)YJ)^N)bR)fV)jZ)n_)rc)vg)zk)!#o)&#s)*#w).#{)2#!+6#&+:#*+>#.+B#2+F#6+J#:+N#>+R#{R# !T#%&T#)*T#-.T#12T#56T#9:T#=>T#ABT#E6a# :a#%>a#)Ba#-Fa#1Ja#5Na#9Ra#=Va#AZa#E:s# >s#%Bs#)Fs#-Js#1Ns#5Rs#9Vs#=Zs#A_s#EZ:% _:%%c:%)g:%-k:%1o:%5s:%9w:%={:%A!<%E2F% 6F%%:F%)>F%-BF%1FF%5JF%9NF%=RF%AVF%EgP% kP%%oP%)sP%-wP%1{P%5!R%9&R%=*R%A.R%E>]% B]%%F]%)J]%-N]%1R]%5V]%9Z]%=_]%Ac]%Esg% wg%%{g%)!i%-&"
+"i%1*i%5.i%92i%=6i%A:i%EJs% Ns%%Rs%)Vs%-Zs%1_s%5cs%9gs%=ks%Aos%E!!\' &!\'%*!\').!\'-2!\'16!\'5:!\'9>!\'=B!\'AF!\'EV,\' Z,\'%_,\')c,\'-g,\'1k,\'5o,\'9s,\'=w,\'A{,\'E.8\' 28\'%68\'):8\'->8\'1B8\'5F8\'9J8\'=N8\'AR8\'EcB\' gB\'%kB\')oB\'-sB\'1wB\'5{B\'9!D\'=&D\'A*D\'E>L\' BL\'%FL\')JL\'-NL\'1RL\'5VL\'9ZL\'=_L\'AcL\'EsV\' wV\'%{V\')!X\'-&X\'1*X\'5.X\'92X\'=6X\'A:X\'EB_\' F_\'%J_\')N_\'-R_\'1V_\'5Z_\'9__\'=c_\'Ag_\'Esw\' ww\'%{w\')!y\'-&y\'1*y\'5.y\'92y\'=6y\'A:y\'EB!) F!)%J!))N!)-R!)1V!)5Z!)9_!)=c!)Ag!)Egi+ ki+%oi+)si+-wi+1{i+5!k+9&k+=*k+A.k+Eom+ sm+%wm+){m+-!o+1&o+5*o+9.o+=2o+A6o+E>,- B,-%F"
+",-)J,--N,-1R,-5V,-9Z,-=_,-Ac,-E>8- B8-%F8-)J8--N8-1R8-5V8-9Z8-=_8-Ac8-E{F- !H-%&H-)*H--.H-12H-56H-9:H-=>H-ABH-E_H- cH-%gH-)kH--oH-1sH-5wH-9{H-=!J-A&J-E!Z- &Z-%*Z-).Z--2Z-16Z-5:Z-9>Z-=BZ-AFZ-E2c- 6c-%:c-)>c--Bc-1Fc-5Jc-9Nc-=Rc-AVc-EJo- No-%Ro-)Vo--Zo-1_o-5co-9go-=ko-Aoo-E.q- 2q-%6q-):q-->q-1Bq-5Fq-9Jq-=Nq-ARq-E&4r *4r%.4r)24r-64r1:4r5>4r9B4r=F4rAJ4rE{or !qr%&qr)*qr-.qr12qr56qr9:qr=>qrABqrE&ur *ur%.ur)2ur-6ur1:ur5>ur9Bur=FurAJurE**t .*t%2*t)6*t-:*t1>*t5B*t9F*t=J*tAN*tEN,t R,t%V,t)Z,t-_,t1c,t5g,t9k,t=o,tAs,tE_"
+"4t c4t%g4t)k4t-o4t1s4t5w4t9{4t=!6tA&6tEgXt kXt%oXt)sXt-wXt1{Xt5!Zt9&Zt=*ZtA.ZtE{c@# !e@#%&e@#)*e@#-.e@#12e@#56e@#9:e@#=>e@#ABe@#Ece@#Ige@#Mke@#Qoe@#Use@#Ywe@#^{e@#b!g@#f&g@#j*g@#n.g@#r2g@#v6g@#z:g@#!#>g@#&#Bg@#*#Fg@#.#Jg@#2#Ng@#6#Rg@#:#Vg@#>#Zg@#B#_g@#F#cg@#J#gg@#N#kg@#R#*i@#I.i@#M2i@#Q6i@#U:i@#Y>i@#^Bi@#bFi@#fJi@#jNi@#nRi@#rVi@#vZi@#z_i@#!#ci@#&#gi@#*#ki@#.#oi@#2#si@#6#wi@#:#{i@#>#!k@#B#&k@#F#*k@#J#.k@#N#2k@#R#s&D# w&D#%{&D#)!(D#-&(D#1*(D#5.(D#92(D#=6(D#A:(D#E2.H# 6.H#%:.H#)>.H#-B.H#1F.H#5J.H#9N.H#=R.H#AV."
+"H#EwuH# {uH#%!wH#)&wH#-*wH#1.wH#52wH#96wH#=:wH#A>wH#Ew$J# {$J#%!&J#)&&J#-*&J#1.&J#52&J#96&J#=:&J#A>&J#E{*J# !,J#%&,J#)*,J#-.,J#12,J#56,J#9:,J#=>,J#AB,J#E_8J# c8J#%g8J#)k8J#-o8J#1s8J#5w8J#9{8J#=!:J#A&:J#E2RJ# 6RJ#%:RJ#)>RJ#-BRJ#1FRJ#5JRJ#9NRJ#=RRJ#AVRJ#ENqJ# RqJ#%VqJ#)ZqJ#-_qJ#1cqJ#5gqJ#9kqJ#=oqJ#AsqJ#E&}J# *}J#%.}J#)2}J#-6}J#1:}J#5>}J#9B}J#=F}J#AJ}J#Eg@L# k@L#%o@L#)s@L#-w@L#1{@L#5!BL#9&BL#=*BL#A.BL#EZJL# _JL#%cJL#)gJL#-kJL#1oJL#5sJL#9wJL#={JL#A!LL#ENTL# RTL#%VTL#)ZTL#-_TL#1cTL#5gTL#9kTL#=oTL#AsTL#E:{L# >{L#"
+"%B{L#)F{L#-J{L#1N{L#5R{L#9V{L#=Z{L#A_{L#ERkN# VkN#%ZkN#)_kN#-ckN#1gkN#5kkN#9okN#=skN#AwkN#E_$P# c$P#%g$P#)k$P#-o$P#1s$P#5w$P#9{$P#=!&P#A&&P#E.,P# 2,P#%6,P#):,P#->,P#1B,P#5F,P#9J,P#=N,P#AR,P#EFau# Jau#%Nau#)Rau#-Vau#1Zau#5_au#9cau#=gau#Akau#Eouu# suu#%wuu#){uu#-!wu#1&wu#5*wu#9.wu#=2wu#A6wu#EF0N% J0N%%N0N%)R0N%-V0N%1Z0N%5_0N%9c0N%=g0N%Ak0N%Eo0N% s0N%%w0N%){0N%-!2N%1&2N%5*2N%9.2N%=22N%A62N%E:2N% >2N%%B2N%)F2N%-J2N%1N2N%5R2N%9V2N%=Z2N%A_2N%Ec2N% g2N%%k2N%)o2N%-s2N%1w2N%5{2N%9!4N%=&4N%A*4N%E.4N% 24N%%64N%):4N%->"
+"4N%1B4N%5F4N%9J4N%=N4N%AR4N%ERJR% VJR%%ZJR%)_JR%-cJR%1gJR%5kJR%9oJR%=sJR%AwJR%E>qR% BqR%%FqR%)JqR%-NqR%1RqR%5VqR%9ZqR%=_qR%AcqR%E:FV% >FV%%BFV%)FFV%-JFV%1NFV%5RFV%9VFV%=ZFV%A_FV%E"};}
function AB$(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
+"!#!#!#!#!#!#!#!#!#!#!#!#!#=G&H#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!# BGA#%Y\'CJ95A#^#; GN5\'9G#9G#9\'A)F<A%F%Y#A,Q\'Z$Y#;Y#^#G,91 Y#FA%F+G6J+Y%F#\'b&D! 9&G(1=G\'E#G#=G%F#J+F$^#&Y/ 1&\'F?G<A#b&:! G,&A/J+FBG*E#=Y$%A#\'[#F7G%%G*%G$%G&A#Y0 F:G$A#9 F,AVF6 F)A6G01GA)FW\')\'&I$G)I%\'I#&G(F+G#Y#J+9%F0\'I# F)A#F#A#F7 F( &A$F%A#\'&I$G%A#I#A#I#\'&A))A%F# F$G#A#J+F#[#L\'=;&9\'A#G#) F\'A%F#A#F7 F( F# F# F#A#\' "
+"I$G#A%G#A#G$A$\'A(F% &A(J+G#F$\'9A+G#) F* F$ F7 F( F# F&A#\'&I$G& G#) I#\'A#&A0F#G#A#J+9;A(&G\' \'I# F)A#F#A#F7 F( F# F&A#\'&)\')G%A#I#A#I#\'A)\')A%F# F$G#A#J+=&L\'A+\'& F\'A$F$ F%A$F# & F#A$F#A$F$A$F-A%I#\'I#A$I$ I$\'A#&A\')A/J+L$^\';=A&\'I$\'F) F$ F8 F1A$&G$I% G$ G%A(G# F$A&F#G#A#J+A(9L(=&\'I#9F) F$ F8 F+ F&A#\'&)\'I& \'I# I#G#A(I#A(& F#G#A#J+ F#A.G#I# F) F$ FJG#&I$G% I$ I$\'&=A%F$)L(F$G#A#J+L*=F\'A#I# F3A$F9 F* &A#F(A$\'A%I$G$ \' I)A\'J+A#I#9A-FQ\'F#G(A%;F\'%G)9J+Y#AFF# & F& F9 & F+\'F#G*&A#F& % G\'A#J+A#F%AA&^$Y0=9^$G#^\'J+L+=\'=\'=\'6767"
+"I#F) FEA%G/)G&9G#F&G, GE ^)\'^\' ^#Y&^%Y#AFFLI#G%)G\')G#I#G#&J+Y\'F\'I#G#F%G$&I$F#I(F$G%F.\'I#G#I\'\'&)J+I$\'^#BG !A&!A#CL9%C$b&*&  F%A#F( & F%A#FJ F%A#FB F%A#F( & F%A#F0 FZ F%A#FeA#G$Y*L5A$F1^+A\'b!7! A#C\'A#5b&M* =9F2-F;67A$FmY$K$F)A(F. F%G$A,F3G$Y#A*F3G#A-F. F$ G#A-FUG#)G(I)\'I#G,Y$%Y$;&\'A#J+A\'L+A\'Y\'5Y%G$1 J+A\'FD%FVA(F&G#FC\'&A&FhA+F@ G$I%G#I$A%I#\'I\'G$A%=A$Y#J+F?A#F&A,FMA%F;A\'J+,A$^CF8G#I#\'A#Y#FV)\')G( \')\'I#G)I\'G+A#\'J+A\'J+A\'Y(%Y\'A#G/(AcG%)FP\')G&)\'I&\'I#F(A%J+Y(^+G*^*A$G#)F?)G%I#G#)G$F#J+FM\')G#I$\')G$I#A)Y%FEI)G)I#G#A$Y&"
+"J+A$F$J+F?E\'Y#C*A(BLA#B$Y)A)G$9G.)G(F%\'F\'\'F#)G#&A&CMEaC.%CCEFG[ G&!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*B)C\'A#B\'A#C)B)C)B)C\'A#B\'A#C) ! ! ! !C)B)C/A#C)D)C)D)C)D)C& C#B%$<#]$C$ C#B%$]$C%A#C#B% ]$C)B&]$A#C$ C#B%$]# M,Q&U\'Y#>?6_#?6>Y)./Q&-Y*>?Y%X#Y$:67Y,:98Y+-Q& Q+,%A#L\'Z$67%L+Z$67 E.A$[AA1G.H%\'H$G-A0^#"
+"!^%!^##B$C#B$#=!^#:B&^\'!=!=!=B%=#B%#F%#^#C#B#Z&!C%=:^##=L1KD!#K%,^#A%Z&^&Z#^%:^#:^#:^(:^@Z#^#:=:^@b:-% ^)6767^5Z#^(67b=2! :^?Z:^IZ\'^gA:^,A6L^^pL7b=X# :^*:^WZ)b=P! :b=Y$ 67676767676767L?^MZ&67Z@6767676767Z1b= % b:$# 6767676767676767676767Za6767ZA67b:#% ^QZ6^#Z\'^HA#^AA#b=I! BP CP !#B$C#!#!#!#B%#!C#!C\'E#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#^\'!#!#G$!#A&Y%,Y#CG #A&#A#FYA(%9A/\'F8A*F( F( F( F( F( F( F( F( GAY#>?>?Y$>?9>?Y*5Y#59>?Y#>?67676767Y&%Y+U#Y%"
+"596Y.AQ^; b=:! A-b=7$ A;^-A%-Y$=%&+6767676767^#6767676756W#=K*G%I#5E&^#K$%&9^# b&7! A#G#]#E#&5b&;! 9E$&A&FL b&?!  ^#L%^+F<A&^EA-F1^@ L+^?L)=L0^AL+^HL0b= & &b UG!&A+^b&b   %b O(!&A1F6%b&X2 A$^XA*FIE\'Y#b&-% %Y$F1J+F#A5!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#&\'H$9G+9%!#!#!#!#!#!#!#!#!#!#!#!#!#!#E#G#FhK+G#Y\'A)]8E*]#!#!#!#!#!#!#!C$!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#%C)!#!#B##!#!#!#!#%]#!#!#&!#!C$!#!#!#!#!#!#!#!#!#!#B&#B&#!#!#!#!#!#A#!#B$AQ&E##F(\'F$\'F%\'F8I#G#)^%A%L\'^#;=A\'FUY%A)I#F"
+"SI1G#A)Y#J+A\'G3F\'Y$&9F#\'J+F=G)Y#F8G,I#A,9F>A$G$)FP\'I#G%I#G#I$Y. %J+A%Y#F&\'%F*J+F& FJG\'I#G#I#G#A*F$\'F)\')A#J+A#Y%F1%F\'^$&)\')FS\'&G$F#G#F&G#&\'&A9F#%Y#F,)G#I#Y#&E#)\'A+F\'A#F\'A#F\'A*F( F( CL<E%C)A)b#1! FDI#\'I#\'I#9)\'A#J+A\'&b CO#&A-F8A%FRA%4b `. T#b `! T#b `0 43b `D!3b&O& A#b&K! AGC(A-C&A&&\'F+:F. F& & F# F# b&M! ]1A2b&L& 76A1FbA#FWAIF-;=A#G1Y(679A\'G19U#X#6767676767676767Y#67Y%X$Y$ Y%5676767Y$:5Z$ 9;Y#A%F& b&(# A#1 Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:67967Y#F+%FNE#F@A$F\'A#F\'A#F\'A#F$A$[#:<=[# =Z%^#A+Q$^#A#F- F; F4 F# F0"
+"A#F/ACb&]! A&Y$A%LNA$^*KVL%^2L#^$ ^-A%=AP^N\'b ## F>A$FRA0\'L<A%FAL%A*F5+F)+A&FGG&A&F? 9FEA%F)9K&AKBICIFpA#J+A\'BEA%CEA%FIA)FUA,9b 1# b&X% A*F7A+F)b 9# F\'A#& FM F#A$&A#F8 9L)F8^#L(F@A)L*AQF4 F#A&L&F7L\'A$9F;A&9AbFYA%L#F#L1A#LO&G$ G#A&G%F% F$ F>A#G$A%\'L*A(Y*A(F>L#9F>L$AAF)=F=G#A%L&Y(A*FWA$Y(F7A#L)F4A&L)F3A(Y%A-L(b 1! FkAXBTA.CTA(L\'FEG%A)J+b G% L@b !# F>L+&A)F7G,L%Y&b \'# F8A*)\')FVG0Y(A%L5J+A0G$)FNI$G%I#G#Y#1Y%A,1A#F:A(J+A\'G$FEG&)G) J+Y%&I#A*FD\'Y#&A*G#)FQI$G*I#F%Y%G%9A#J+&9&Y$ L5A,F3 F:I$G$I#\')G#Y\'\'AcF( & F% F0 F+"
+"9A\'FP\'I$G)A&J+A\'G#I# F)A#F#A#F7 F( F# F& G#&I#\'I%A#I#A#I$A#&A\')A&F&I#A#G(A$G&b ,# FVI$G)I#G$)\'F%Y&J+ 9 9\'&AAFQI$G\')\'I%G#)G#F#9&A)J+b G# FPI$G%A#I%G#)G#Y8F%G#ACFQI$G)I#\')G#Y$&A,J+A\'Y.A4FL\')\'I#G\')\'&A(J+AWF<A#G$I#G%)G&A%J+L#Y$=b  $ FMI$G*)G#9b E! BACAJ+L*A-&b A# F)A#FHI$G%A#G#I%\'&9&)A<&G+FIG\')&G%Y)\'A)&G\'I#G$FOG.)G#Y$&Y&A>FZb (% F* FF)G( G\')\'&Y&A+J+L4A$Y#F?A#G7 )G()G#)G#AkF( F# FGG\'A$\' G# G(&\'A)J+A\'F\' F# FAI& G# I#\')\'&A(J+b W% F4G#I#Y#b ($ L6^)[%^2A.9b&;/ b G! b+P!  Y&A,b&%$ b ^K b&P1  Q*b (a b&(* b Z\'#b&Z) A(F"
+"@ J+A%Y#b A! F?A#G&9A+FQG(Y&^%E%9=A+J+ L( F6A&F4b Q+ BACAL8Y%b F! FmA%\'&IXA(G%E.AbE#9%A=&b W@!&A)b&T, b .5#b&@% ARF$A2F%A)b&-\' b %E b&L! A&F.A$F*A(F+A#=G#9Q%b =.!b=W$ A+^HA#^^I#G$^$I\'Q)G)^#G(^?G%^]A8^dG$=b ;# L5A-b=8! A*L:b (# B;C;B;C( C3B;C;! B#A#!A#B#A#B% B)C% # C( C,B;C;B# B%A#B) B( C;B# B% B& !A$B( C;B;C;B;C;B;C;B;C;B;C;B;C=A#B::C::C\'B::C::C\'B::C::C\'B::C::C\'B::C::C\'!#A#JSb= ) GX^%GS^)\'^/\'^#Y&A0G& G0b 16 G( G2A#G( G# G&b 6$ FNA$G(E(A#J+A%&=b Q& FMG%J+A&;b  5 b&&$ A#L*G(AJBCCCG(%A%J+A%Y#b 2- L]=L$;L%AnLN="
+"L0b #$ F% F< F# &A#& F+ F% & &A\'&A%& & & F$ F# &A#& & & & & F# &A#F% F( F% F% & F+ F2A&F$ F& F2AUZ#b /% ^MA%b=E! A-^0A#^0 ^0 ^FA+L.A$b=>! A$^_AZ^>A.^MA%^*A(^#A/^\'b ;# b=]$ ]&b=7, A+^.A$^,A&b=U! A-b=:! A(^-A5^-A%^YA)^+A\'^IA)^?b 3! ^- b=F!  ^%A$^JA#^\'A$^>A#b=(# A-^/A#^%A%^$A&^$A.^\'b K6 &b   %b   %b 6<#&AJ&b T !&A,&b =$ &A#&b  ;!&A/&b PU!&b @Q b&?) b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   "
+"%b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b D8 1A?b1A! b  # b\'Q$ b   %b   %b   %b 1Y$3b   %b   %b   %b ^a$3A#3b   %b   %b   %b ^a$3"};}
function O9(){var a=this;C.call(a);a.cj=0.0;a.bA=0.0;a.q=0;a.bD=0.0;a.cu=0.0;a.h=0.0;a.Q=Long_ZERO;a.R=Long_ZERO;a.B=0.0;}
function Rx(){var a=this;C.call(a);a.kI=null;a.di=null;a.kt=null;}
function V2(a,b){var c,d;if(!a.di.cb)H(Wx());a.kt=b;c=(a.di.l*240|0)/a.di.c|0;d=(a.di.c*240|0)/a.di.c|0;BD(256);V(5889);Y();Nv(0.0,c,d,0.0,100.0,300.0);V(5888);Y();Bt(0.0,0.0,(-200.0));}
function Uy(a,b){var c,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.di.cb)H(Wx());a.kI=b;c=(-1);$p=1;case 1:Tw(a,c);if(N()){break _;}return;default:FI();}}De().s(a,b,c,$p);}
function Tw(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$$je,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.di.cb)H(Wx());c=(a.di.l*240|0)/a.di.c|0;d=(a.di.c*240|0)/a.di.c|0;BD(16640);C4();e=AR7;Bd(3553);f=a.di.cF;g=B(193);$p=1;case 1:$z=We(f,g);if(N()){break _;}h=$z;CR(3553,h);Ct(e);Kw(e,4210752);i=d;j=i;k=i/32.0;Q(e,0.0,j,0.0,
0.0,k);i=c;l=i;m=i/32.0;Q(e,l,j,0.0,m,k);Q(e,l,0.0,0.0,m,0.0);Q(e,0.0,0.0,0.0,0.0,0.0);B5(e);if(b>=0){h=(c/2|0)-50|0;n=(d/2|0)+16|0;BM(3553);Ct(e);Kw(e,8421504);l=h;o=n;Z(e,l,o,0.0);m=n+2|0;Z(e,l,m,0.0);j=h+100|0;Z(e,j,m,0.0);Z(e,j,o,0.0);Kw(e,8454016);Z(e,l,o,0.0);Z(e,l,m,0.0);l=h+b|0;Z(e,l,m,0.0);Z(e,l,o,0.0);B5(e);Bd(3553);}g=a.di.eB;p=a.kt;b=(c-J$(a.di.eB,a.kt)|0)/2|0;h=(d/2|0)-4|0;n=h-16|0;q=16777215;$p=2;case 2:ABg(g,p,b,n,q);if(N()){break _;}e=a.di.eB;f=a.kI;b=(c-J$(a.di.eB,a.kI)|0)/2|0;c=h+8|0;h=16777215;$p
=3;case 3:ABg(e,f,b,c,h);if(N()){break _;}$p=4;case 4:AEU();if(N()){break _;}try{$p=5;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){}else{throw $$e;}}return;case 5:a:{try{SA();if(N()){break _;}break a;}catch($$e){$$je=D($$e);if($$je instanceof J){}else{throw $$e;}}}return;default:FI();}}De().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function Pu(){var a=this;C.call(a);a.a=null;a.E=0.0;a.bC=0;a.k=0.0;a.i=0.0;a.j=0.0;a.bz=0.0;a.wn=0;a.wo=0;a.jx=null;}
function MH(a,b){var c;if(!b){BM(2896);BM(16384);}else{Bd(2896);Bd(16384);Bd(2903);c=GQ(BC(0.0,(-1.0),0.5));DW(a,c.bk,c.bl,c.bj,0.0);DW(a,0.30000001192092896,0.30000001192092896,0.30000001192092896,1.0);DW(a,0.0,0.0,0.0,1.0);DW(a,0.699999988079071,0.699999988079071,0.699999988079071,1.0);}}
function Ch(a){var b,c;b=(a.a.l*240|0)/a.a.c|0;c=(a.a.c*240|0)/a.a.c|0;BD(256);V(5889);Y();Nv(0.0,b,c,0.0,100.0,300.0);V(5888);Y();Bt(0.0,0.0,(-200.0));}
function B7(a){var b,c,d,e,f,g;b=a.a.g;c=a.a.d;d=DW(a,a.k,a.i,a.j,1.0);Bz();AR8=Hk(d);AR9=Hk(d);AR$=Hk(d);AR_=Hk(d);e=EO(1.0);f=0.0/e;ASa=f;ASb=(-1.0)/e;ASc=f;C1(1.0,1.0,1.0,1.0);Bj();d=ARc.data[Bp(b,c.r|0,c.p+0.11999999731779099|0,c.s|0)];if(d!==null&&d.bd()!==ARd){g=d.bd();Qk(2917,2048);if(g===ARe){Hp(2914,0.10000000149011612);DW(a,0.4000000059604645,0.4000000059604645,0.8999999761581421,1.0);}else if(g===ARf){Hp(2914,2.0);DW(a,0.4000000059604645,0.30000001192092896,0.30000001192092896,1.0);}}else{Qk(2917,
9729);Hp(2915,0.0);Hp(2916,a.bz);DW(a,1.0,1.0,1.0,1.0);}Bd(2903);Bd(2896);}
function DW(a,b,c,d,e){DG(a.jx);Cv(Cv(Cv(Cv(a.jx,b),c),d),e);DD(a.jx);return a.jx;}
function Nz(){C.call(this);this.x9=null;}
function AL0(a,b,c,d,e,f,g){return 0;}
function AJX(a,b,c,d){return null;}
function YZ(a,b){return null;}
function Zk(a,b){return null;}
function ANg(b,c){return;}
function Lt(){var a=this;C.call(a);a.dJ=null;a.V=0;a.bB=0;a.cQ=0;a.U=null;a.ce=null;a.dd=null;}
function Vr(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD,bE,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();bE=$T.l();bD=$T.l();bC=$T.l();bB=$T.l();bA=$T.l();bz=$T.l();by=$T.l();bx=$T.l();bw=$T.l();bv=$T.l();bu=$T.l();bt=$T.l();bs=$T.l();br=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z
=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:V2(a.dJ,B(194));a.V=c;a.bB=d;a.cQ=64;a.ce=$rt_createByteArray(K(c,d)<<6);f=a.dJ;g=B(195);$p=1;case 1:Uy(f,g);if(N()){break _;}f=Si(Dx(a.U,8),Dx(a.U,8));g=Si(Dx(a.U,8),Dx(a.U,8));h=Dx(a.U,8);i=$rt_createIntArray(K(a.V,a.bB));j=i.data;k=1.2999999523162842;l
=0;if(l>=a.V){f=a.dJ;g=B(196);$p=2;continue _;}e=(l*100|0)/(a.V-1|0)|0;$p=3;continue _;case 2:Uy(f,g);if(N()){break _;}f=Si(Dx(a.U,8),Dx(a.U,8));m=Si(Dx(a.U,8),Dx(a.U,8));n=0;if(n>=a.V){f=a.dJ;g=B(197);$p=4;continue _;}e=(n*100|0)/(a.V-1|0)|0;$p=5;continue _;case 3:Xm(a,e);if(N()){break _;}o=0;while(o<a.bB){p=l*k;q=o*k;r=HG(f,p,q)/8.0-8.0;p=HG(g,p,q)/6.0+6.0;if(Fn(h,l,o)/8.0>0.0)p=r;s=AKg(r,p)/2.0;if(s<0.0)s=s*0.8;j[l+K(o,a.V)|0]=s|0;o=o+1|0;}l=l+1|0;if(l>=a.V){f=a.dJ;g=B(196);$p=2;continue _;}e=(l*100|0)/(a.V
-1|0)|0;continue _;case 4:Uy(f,g);if(N()){break _;}t=a.V;u=a.bB;l=a.cQ;v=Dx(a.U,8);n=0;if(n>=t){f=a.dJ;g=B(198);$p=6;continue _;}e=(n*100|0)/(a.V-1|0)|0;$p=7;continue _;case 5:Xm(a,e);if(N()){break _;}w=0;while(w<a.bB){p=n<<1;q=w<<1;x=HG(f,p,q)/8.0;y=HG(m,p,q)<=0.0?0:1;if(x>2.0)j[n+K(w,a.V)|0]=(((j[n+K(w,a.V)|0]-y|0)/2|0)<<1)+y|0;w=w+1|0;}n=n+1|0;if(n>=a.V){f=a.dJ;g=B(197);$p=4;continue _;}e=(n*100|0)/(a.V-1|0)|0;continue _;case 6:Uy(f,g);if(N()){break _;}e=a.V;z=a.bB;w=a.cQ;y=(K(K(e,z),w)/256|0)/64|0;ba=0;n
=y-1|0;bb=e;bc=w;bd=z;if(ba<y){e=((ba*100|0)/n|0)/4|0;$p=13;continue _;}Bj();e=ASd.bn;z=90;o=1;y=4;$p=8;continue _;case 7:Xm(a,e);if(N()){break _;}o=0;while(o<u){y=(Fn(v,n,o)/24.0|0)-4|0;e=n+K(o,t)|0;be=j[e]+(l/2|0)|0;bf=be+y|0;j[e]=CB(be,bf);bg=0;while(bg<l){bh=K(K(bg,a.bB)+o|0,a.V)+n|0;bi=0;if(bg<=be){Bj();bi=ARm.bn;}if(bg<=bf){Bj();bi=ARo.bn;}a.ce.data[bh]=bi<<24>>24;bg=bg+1|0;}o=o+1|0;}n=n+1|0;if(n>=t){f=a.dJ;g=B(198);$p=6;continue _;}e=(n*100|0)/(a.V-1|0)|0;continue _;case 8:TO(a,e,z,o,y);if(N()){break _;}e
=ASe.bn;z=70;o=2;y=4;$p=9;case 9:TO(a,e,z,o,y);if(N()){break _;}e=ASf.bn;z=50;o=3;y=4;$p=10;case 10:TO(a,e,z,o,y);if(N()){break _;}f=a.dJ;g=B(199);$p=11;case 11:Uy(f,g);if(N()){break _;}bj=Cd();bk=Long_ZERO;e=ARj.bn;z=0;$p=12;case 12:Xm(a,z);if(N()){break _;}z=0;while(z<a.V){bk=Long_add(Long_add(bk,D0(a,z,(a.cQ/2|0)-1|0,0,0,e)),D0(a,z,(a.cQ/2|0)-1|0,a.bB-1|0,0,e));z=z+1|0;}z=0;while(z<a.bB){bk=Long_add(Long_add(bk,D0(a,0,(a.cQ/2|0)-1|0,z,0,e)),D0(a,a.V-1|0,(a.cQ/2|0)-1|0,z,0,e));z=z+1|0;}z=K(a.V,a.bB)/200|0;y
=0;u=z-1|0;while(y<z){if(!(y%100|0)){o=(y*100|0)/u|0;$p=22;continue _;}be=B3(a.U,a.V);bf=((a.cQ/2|0)-1|0)-B3(a.U,3)|0;bg=B3(a.U,a.bB);if(!a.ce.data[K(K(bf,a.bB)+bg|0,a.V)+be|0])bk=Long_add(bk,D0(a,be,bf,bg,0,e));y=y+1|0;}e=100;$p=14;continue _;case 13:Xm(a,e);if(N()){break _;}bl=B4(a.U)*bb;bm=B4(a.U)*bc;bn=B4(a.U)*bd;bg=(B4(a.U)+B4(a.U))*75.0|0;bo=B4(a.U)*3.141592653589793*2.0;bp=0.0;bq=B4(a.U)*3.141592653589793*2.0;br=0.0;bs=0;x=bg;while(bs<bg){a:{p=bl;q=bo;r=Bn(q);s=bq;bl=p+r*Bo(s);bn=bn+Bo(q)*Bo(s);bm=bm
+Bn(s);bo=bo+bp*0.20000000298023224;bp=bp*0.8999999761581421+B4(a.U)-B4(a.U);bq=(bq+br*0.5)*0.5;br=br*0.8999999761581421+B4(a.U)-B4(a.U);if(B4(a.U)>=0.30000001192092896){bt=bl+B4(a.U)*4.0-2.0;bu=bm+B4(a.U)*4.0-2.0;bv=bn+B4(a.U)*4.0-2.0;bw=Bn(bs*3.141592653589793/x)*2.5+1.0;bx=bt-bw|0;l=bt+bw|0;be=bu-bw|0;bf=bu+bw|0;t=bv-bw|0;u=bv+bw|0;bw=bw*bw;while(true){if(bx>l)break a;by=be;while(by<=bf){bz=t;while(bz<=u){b:{bA=bx-bt;bB=by-bu;bC=bz-bv;if(bA*bA+bB*bB*2.0+bC*bC>=bw)break b;if(bx<1)break b;if(by<1)break b;if
(bz<1)break b;if(bx>=(a.V-1|0))break b;if(by>=(a.cQ-1|0))break b;if(bz>=(a.bB-1|0))break b;z=K(K(by,a.bB)+bz|0,a.V)+bx|0;e=a.ce.data[z];Bj();if(e!=ARo.bn)break b;a.ce.data[z]=0;}bz=bz+1|0;}by=by+1|0;}bx=bx+1|0;}}}bs=bs+1|0;}ba=ba+1|0;if(ba<y){e=((ba*100|0)/n|0)/4|0;continue _;}Bj();e=ASd.bn;z=90;o=1;y=4;$p=8;continue _;case 14:Xm(a,e);if(N()){break _;}bD=Cd();Cg(D2(),Bf(E(UQ(E(V$(E(Bh(),B(200)),bk),B(201)),Long_toNumber(Long_sub(bD,bj))/1000000.0),B(202))));f=a.dJ;g=B(203);$p=15;case 15:Uy(f,g);if(N()){break _;}$p
=16;case 16:Tc(a);if(N()){break _;}f=a.dJ;g=B(204);$p=17;case 17:Uy(f,g);if(N()){break _;}$p=18;case 18:ZV(a,i);if(N()){break _;}f=a.dJ;g=B(205);$p=19;case 19:Uy(f,g);if(N()){break _;}$p=20;case 20:AA1(a,i);if(N()){break _;}bE=AOs();e=64;i=a.ce;$p=21;case 21:X0(bE,c,e,d,i);if(N()){break _;}bE.uV=Bq();bE.u0=b;bE.wM=B(206);return bE;case 22:Xm(a,o);if(N()){break _;}while(true){be=B3(a.U,a.V);bf=((a.cQ/2|0)-1|0)-B3(a.U,3)|0;bg=B3(a.U,a.bB);if(!a.ce.data[K(K(bf,a.bB)+bg|0,a.V)+be|0])bk=Long_add(bk,D0(a,be,bf,bg,
0,e));y=y+1|0;if(y>=z)break;if(y%100|0)continue;else{o=(y*100|0)/u|0;continue _;}}e=100;$p=14;continue _;default:FI();}}De().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD,bE,$p);}
function ZV(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.V;d=a.bB;e=a.cQ;f=Dx(a.U,8);g=Dx(a.U,8);h=0;if(h>=c)return;i=(h*100|0)/(a.V-1|0)|0;$p=1;case 1:Xm(a,i);if(N()){break _;}i=0;while(i<d){j=h;k=i;l=Fn(f,j,k)<=8.0?0:1;m=Fn(g,j,k)<=12.0?0:1;n=b.data[h+K(i,c)|0];o=K(K(n,a.bB)+i|0,a.V)
+h|0;p=a.ce.data[K(K(n+1|0,a.bB)+i|0,a.V)+h|0]&255;Bj();if(!(p!=APV.bn&&p!=ARj.bn)&&n<=((e/2|0)-1|0)&&m)a.ce.data[o]=ARz.bn<<24>>24;if(!p){q=ARl.bn;if(n<=((e/2|0)-1|0)&&l)q=ARy.bn;a.ce.data[o]=q<<24>>24;}i=i+1|0;}h=h+1|0;if(h>=c)return;i=(h*100|0)/(a.V-1|0)|0;continue _;default:FI();}}De().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function AA1(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.V;d=K(a.V,a.bB)/4000|0;e=0;f=d-1|0;if(e>=d)return;g=(e*100|0)/f|0;$p=1;case 1:Xm(a,g);if(N()){break _;}h=B3(a.U,a.V);i=B3(a.U,a.bB);j=0;while
(j<20){k=0;l=h;m=i;while(k<20){a:{l=l+(B3(a.U,6)-B3(a.U,6)|0)|0;m=m+(B3(a.U,6)-B3(a.U,6)|0)|0;if(l>=0&&m>=0&&l<a.V&&m<a.bB){g=b.data[l+K(m,c)|0]+1|0;n=B3(a.U,3)+4|0;o=1;p=(g+1|0)+n|0;q=p-2|0;r=g;while(r<=p){s=1;if(r>=q)s=2;t=l-s|0;while(t<=(l+s|0)&&o){u=m-s|0;while(u<=(m+s|0)&&o){if(!(t>=0&&r>=0&&u>=0&&t<a.V&&r<a.cQ&&u<a.bB))o=0;else if(a.ce.data[K(K(r,a.bB)+u|0,a.V)+t|0]&255)o=0;u=u+1|0;}t=t+1|0;}r=r+1|0;}if(o){o=K(K(g,a.bB)+m|0,a.V)+l|0;v=a.ce.data[K(K(g-1|0,a.bB)+m|0,a.V)+l|0]&255;Bj();if(v==ARl.bn&&g<((a.cQ
-n|0)-1|0)){a.ce.data[o-K(1*a.V|0,a.bB)|0]=ARm.bn<<24>>24;q=(g-3|0)+n|0;g=g+n|0;while(q<=g){u=q-g|0;p=1-(u/2|0)|0;w=l-p|0;s=l+p|0;v=m-p|0;r=m+p|0;while(w<=s){t=w-l|0;x=v;while(x<=r){b:{y=x-m|0;if(SK(t)==p&&SK(y)==p){if(!B3(a.U,2))break b;if(!u)break b;}a.ce.data[K(K(q,a.bB)+x|0,a.V)+w|0]=ARs.bn<<24>>24;}x=x+1|0;}w=w+1|0;}q=q+1|0;}g=0;while(true){if(g>=n)break a;a.ce.data[o+K(K(g,a.V),a.bB)|0]=ARr.bn<<24>>24;g=g+1|0;}}}}}k=k+1|0;}j=j+1|0;}e=e+1|0;if(e>=d)return;g=(e*100|0)/f|0;continue _;default:FI();}}De().s(a,
b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p);}
function TO(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c
=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b<<24>>24;b=a.V;g=a.bB;h=a.cQ;i=K((K(K(b,g),h)/256|0)/64|0,c)/100|0;j=0;k=i-1|0;l=d*100|0;m=b;n=h;o=g;p=c;q=c;if(j>=i)return;b=(((j*100|0)/k|0)/4|0)+(l/4|0)|0;$p=1;case 1:Xm(a,b);if(N()){break _;}r=B4(a.U)*m;s=B4(a.U)*n;t=B4(a.U)*o;u=(B4(a.U)+B4(a.U))*75.0*p/100.0|0;v=B4(a.U)*3.141592653589793*2.0;w=0.0;x=B4(a.U)*3.141592653589793*2.0;y=0.0;z=0;ba=u;while(z<u){bb=r;bc=v;bd=Bn(bc);be=x;r=bb+bd*Bo(be);t=t+Bo(bc)*Bo(be);s=s+Bn(be);v=v+w*0.20000000298023224;w
=w*0.8999999761581421+B4(a.U)-B4(a.U);x=(x+y*0.5)*0.5;y=y*0.8999999761581421+B4(a.U)-B4(a.U);bf=Bn(z*3.141592653589793/ba)*q/100.0+1.0;bg=r-bf|0;c=r+bf|0;bh=s-bf|0;e=s+bf|0;g=t-bf|0;h=t+bf|0;bi=bf*bf;while(bg<=c){bj=bh;while(bj<=e){bk=g;while(bk<=h){a:{bl=bg-r;bm=bj-s;bn=bk-t;if(bl*bl+bm*bm*2.0+bn*bn>=bi)break a;if(bg<1)break a;if(bj<1)break a;if(bk<1)break a;if(bg>=(a.V-1|0))break a;if(bj>=(a.cQ-1|0))break a;if(bk>=(a.bB-1|0))break a;bo=K(K(bj,a.bB)+bk|0,a.V)+bg|0;b=a.ce.data[bo];Bj();if(b!=ARo.bn)break a;a.ce.data[bo]
=f;}bk=bk+1|0;}bj=bj+1|0;}bg=bg+1|0;}z=z+1|0;}j=j+1|0;if(j>=i)return;b=(((j*100|0)/k|0)/4|0)+(l/4|0)|0;continue _;default:FI();}}De().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,$p);}
function Xm(a,b){var c,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.dJ;$p=1;case 1:Tw(c,b);if(N()){break _;}return;default:FI();}}De().s(a,b,c,$p);}
function Tc(a){var b,c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;c=K(K(a.V,a.bB),a.cQ)/10000|0;d=0;e=c-1|0;while(d<c){if(!(d%100|0)){f=(d*100|0)/e|0;$p=2;continue _;}g=B3(a.U,a.V);h=B3(a.U,(a.cQ/2|0)-4|0);i=B3(a.U,a.bB);if(!a.ce.data[K(K(h,a.bB)+i|0,a.V)+g|0]){b=b+1|0;Bj();D0(a,g,h,i,0,ARk.bn);}d=d+1|0;}f=100;$p=1;case 1:Xm(a,f);if(N()){break _;}j=D2();k=new W;Ba(k);Cg(j,
X(S(E(k,B(207)),b)));return;case 2:Xm(a,f);if(N()){break _;}while(true){g=B3(a.U,a.V);h=B3(a.U,(a.cQ/2|0)-4|0);i=B3(a.U,a.bB);if(!a.ce.data[K(K(h,a.bB)+i|0,a.V)+g|0]){b=b+1|0;Bj();D0(a,g,h,i,0,ARk.bn);}d=d+1|0;if(d>=c)break;if(d%100|0)continue;else{f=(d*100|0)/e|0;continue _;}}f=100;$p=1;continue _;default:FI();}}De().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function D0(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba;g=f<<24>>24;h=CU();i=1;j=1;while(1<<i<a.V){i=i+1|0;}while(1<<j<a.bB){j=j+1|0;}k=a.bB-1|0;l=a.V-1|0;m=1;a.dd.data[0]=(((c<<j)+d|0)<<i)+b|0;n=Long_ZERO;d=K(a.V,a.bB);while(m>0){m=m+(-1)|0;e=a.dd.data[m];if(!m&&h.X>0){Cg(D2(),B(208));a.dd=EE(h,h.X-1|0);m=a.dd.data.length;}f=e>>i&k;c=i+j|0;o=e>>c;p=e&l;q=p;a:{while(q>0){if(a.ce.data[e-1|0])break a;q=q+(-1)|0;e=e+(-1)|0;}}while(p<a.V&&!a.ce.data[(e+p|0)-q|0]){p=p+1|0;}r=e>>i&k;s=e>>c;if(!(r==
f&&s==o))Cg(D2(),B(209));t=0;u=0;v=0;n=Long_add(n,Long_fromInt(p-q|0));while(q<p){a.ce.data[e]=g;if(f<=0)w=t;else{w=a.ce.data[e-a.V|0]?0:1;if(w&&!t){if(m!=a.dd.data.length)c=m;else{Bg(h,a.dd);a.dd=$rt_createIntArray(1048576);c=0;}x=a.dd.data;m=c+1|0;x[c]=e-a.V|0;}}if(f>=(a.bB-1|0))y=u;else{y=a.ce.data[e+a.V|0]?0:1;if(y&&!u){if(m!=a.dd.data.length)b=m;else{Bg(h,a.dd);a.dd=$rt_createIntArray(1048576);b=0;}x=a.dd.data;m=b+1|0;x[b]=e+a.V|0;}}if(o>0){x=a.ce.data;r=e-d|0;z=x[r];Bj();if(!(g!=APU.bn&&g!=ARk.bn)&&!(z
!=APV.bn&&z!=ARj.bn))a.ce.data[r]=ARo.bn<<24>>24;ba=z?0:1;if(ba&&!v){if(m!=a.dd.data.length)b=m;else{Bg(h,a.dd);a.dd=$rt_createIntArray(1048576);b=0;}x=a.dd.data;m=b+1|0;x[b]=r;}v=ba;}e=e+1|0;q=q+1|0;t=w;u=y;}}return n;}
function ZI(){var a=this;C.call(a);a.iQ=null;a.l9=null;a.f3=null;a.f2=null;a.jE=null;a.jF=null;}
function AEw(){var a=new ZI();AEO(a);return a;}
function AEO(a){a.iQ=HS(0,0);Fc(a.iQ,(-4.0),(-8.0),(-4.0),8,8,8);a.l9=HS(16,16);Fc(a.l9,(-4.0),0.0,(-2.0),8,12,4);a.f3=HS(40,16);Fc(a.f3,(-3.0),(-2.0),(-2.0),4,12,4);Hc(a.f3,(-5.0),2.0,0.0);a.f2=HS(40,16);Fc(a.f2,(-1.0),(-2.0),(-2.0),4,12,4);Hc(a.f2,5.0,2.0,0.0);a.jE=HS(0,16);Fc(a.jE,(-2.0),0.0,(-2.0),4,12,4);Hc(a.jE,(-2.0),12.0,0.0);a.jF=HS(0,16);Fc(a.jF,(-2.0),0.0,(-2.0),4,12,4);Hc(a.jF,2.0,12.0,0.0);}
function AB2(a,b,c,d,e,f,g){var h,i,j,k;a.iQ.qo=e/57.295780181884766;a.iQ.fi=f/57.295780181884766;h=a.f3;i=b;j=i*0.6662;k=j+3.141592653589793;h.fi=Bo(k)*2.0*c;a.f3.gV=(Bo(i*0.2312)+1.0)*c;a.f2.fi=Bo(j)*2.0*c;a.f2.gV=(Bo(i*0.2812)-1.0)*c;a.jE.fi=Bo(j)*1.399999976158142*c;a.jF.fi=Bo(k)*1.399999976158142*c;h=a.f3;b=h.gV;k=d;j=k*0.09;h.gV=b+Bo(j)*0.05000000074505806+0.05000000074505806;h=a.f2;h.gV=h.gV-(Bo(j)*0.05000000074505806+0.05000000074505806);h=a.f3;b=h.fi;j=k*0.067;h.fi=b+Bn(j)*0.05000000074505806;h=a.f2;h.fi
=h.fi-Bn(j)*0.05000000074505806;Fv(a.iQ,g);Fv(a.l9,g);Fv(a.f3,g);Fv(a.f2,g);Fv(a.jE,g);Fv(a.jF,g);}
function NQ(){Ey.call(this);}
function Wm(a){var b,$$je,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:while(true){try{b=Long_fromInt(2147483647);$p=1;continue _;}catch($$e){$$je=D($$e);if($$je instanceof E4){}else{throw $$e;}}}case 1:a:{try{U4(b);if(N()){break _;}break a;}catch($$e){$$je=D($$e);if($$je instanceof E4){}else{throw $$e;}}}while(true){try{b=Long_fromInt(2147483647);continue _;}catch($$e){$$je=D($$e);if($$je instanceof E4){}else{throw $$e;}}}default:FI();}}De().s(a,b,$p);}
function L7(){var a=this;C.call(a);a.lb=null;a.fH=null;a.l4=null;}
var ASg=null;function UM(){var a=new L7();ABz(a);return a;}
function ABz(a){var b;a.lb=Kj(1);b=I1($rt_createByteArray(262144));b.i_=ASh;a.fH=b;a.l4=CU();}
function We(a,b){var c,d,e,$$je,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=Ek(ASg,b);if(c!==null)return c.ev;try{QK(a.lb);ST(a.lb);d=XN(a.lb,0);e=I9(b);$p=1;continue _;}catch($$e){$$je=D($$e);if($$je instanceof BI){}else{throw $$e;}}b=new BQ;Bb(b,B(210));H(b);case 1:a:{try{$z=Xa(a,e);if(N()){break _;}c=$z;SS(a,c,d);Ya(ASg,b,DZ(d));}catch($$e){$$je=D($$e);if($$je instanceof BI){break a;}else{throw $$e;}}return d;}b=new BQ;Bb(b,B(210));H(b);default:
FI();}}De().s(a,b,c,d,e,$p);}
function SS(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;Pp(a,c);Hl(3553,10241,9728);Hl(3553,10240,9728);Hl(3553,10242,10497);Hl(3553,10243,10497);d=b.nG;e=b.rO;f=b.mu;g=$rt_createByteArray(K(d,e)*4|0);h=g.data;i=0;while(true){j=f.data;if(i>=j.length)break;k=j[i]>>24&255;l=j[i]>>16&255;m=j[i]>>8&255;n=j[i]>>0&255;c=i*4|0;h[c+0|0]=l<<24>>24;h[c+1|0]=m<<24>>24;h[c+2|0]=n<<24>>24;h[c+3|0]=k<<24>>24;i=i+1|0;}DG(a.fH);Jf(a.fH,g);b=a.fH;C7(b,0);He(b,h.length);b=a.fH;T();if(b===null){b=AQf;o=null;b.texImage2D(3553,0,32856,
d,e,0,6408,5121,o);}else{k=BL(b);p=AQD;q=0;while(q<k){r=(N4(b)&255)<<16>>16;p[q]=r;q=q+1|0;}p=new Uint8Array(AQD.buffer,0,k);AQf.texImage2D(3553,0,32856,d,e,0,6408,5121,p);}}
function Pp(a,b){if(b<0)return;CR(3553,b);}
function Xa(a,b){var c,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Zl(b);if(N()){break _;}c=$z;return c;default:FI();}}De().s(a,b,c,$p);}
function Lu(a,b){Bg(a.l4,b);b.ms();}
function S7(){ASg=C9();}
function Gb(){var a=this;C.call(a);a.eN=null;a.pH=0;}
function ASi(a){var b=new Gb();NG(b,a);return b;}
function NG(a,b){a.eN=$rt_createByteArray(1024);a.pH=b;}
function Ox(){var a=this;Gb.call(a);a.iX=null;a.kD=null;a.gc=null;a.lt=null;}
function AED(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=0;while(b<16){c=0;while(c<16){d=0.0;e=Bn(c*3.141592653589793*2.0/16.0)*1.2000000476837158|0;f=Bn(b*3.141592653589793*2.0/16.0)*1.2000000476837158|0;g=b-1|0;while(true){h=b+1|0;if(g>h)break;h=c-1|0;while(h<=(c+1|0)){i=(g+e|0)&15;j=(h+f|0)&15;d=d+a.iX.data[i+(j<<4)|0];h=h+1|0;}g=g+1|0;}k=a.kD.data;f=b+(c<<4)|0;d=d/10.0;l=a.gc.data;g=b&15;m=(c&15)<<4;n=l[g+m|0];l=a.gc.data;e=h&15;o=n+l[e+m|0];l=a.gc.data;c=c+1|0;m=(c&15)<<4;k[f]=d+(o+l[e+m|0]+a.gc.data[g+m|0])/
4.0*0.800000011920929;l=a.gc.data;l[f]=l[f]+a.lt.data[f]*0.009999999776482582;if(a.gc.data[f]<0.0)a.gc.data[f]=0.0;l=a.lt.data;l[f]=l[f]-0.05999999865889549;if(CJ()<0.005)a.lt.data[f]=1.5;}b=b+1|0;}l=a.kD;a.kD=a.iX;a.iX=l;m=0;while(m<256){d=a.iX.data[m]*2.0;if(d>1.0)d=1.0;if(d<0.0)d=0.0;f=d*100.0+155.0|0;o=d*d;g=o*255.0|0;h=o*d*d*128.0|0;l=a.eN.data;c=m<<2;l[c]=f<<24>>24;a.eN.data[c+1|0]=g<<24>>24;a.eN.data[c+2|0]=h<<24>>24;a.eN.data[c+3|0]=(-1);m=m+1|0;}}
function NP(){var a=this;Gb.call(a);a.iC=null;a.kl=null;a.j1=null;a.ka=null;a.oR=0;}
function AIv(a){var b,c,d,e,f,g,h,i,j;a.oR=a.oR+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=b-1|0;while(e<=(b+1|0)){f=e&15;g=c&15;d=d+a.iC.data[f+(g<<4)|0];e=e+1|0;}h=a.kl.data;e=b+(c<<4)|0;h[e]=d/3.299999952316284+a.j1.data[e]*0.800000011920929;c=c+1|0;}b=b+1|0;}b=0;while(b<16){c=0;while(c<16){i=a.j1.data;e=b+(c<<4)|0;i[e]=i[e]+a.ka.data[e]*0.05000000074505806;if(a.j1.data[e]<0.0)a.j1.data[e]=0.0;i=a.ka.data;i[e]=i[e]-0.10000000149011612;if(CJ()<0.05)a.ka.data[e]=0.5;c=c+1|0;}b=b+1|0;}i=a.kl;a.kl=a.iC;a.iC
=i;c=0;while(c<256){d=a.iC.data[c];if(d>1.0)d=1.0;if(d<0.0)d=0.0;j=d*d;i=a.eN.data;e=c<<2;i[e]=(32.0+j*32.0|0)<<24>>24;a.eN.data[e+1|0]=(50.0+j*64.0|0)<<24>>24;a.eN.data[e+2|0]=(-1);a.eN.data[e+3|0]=(146.0+j*50.0|0)<<24>>24;c=c+1|0;}}
function Q7(){}
function FO(){}
function Gd(){C.call(this);}
function Ny(a){return a.eW?0:1;}
function Pm(a,b){var c,d;c=G$(a);a:{while(HJ(c)){b:{d=H2(c);if(d!==null){if(!d.dv(b))break b;else break a;}if(b===null)break a;}}return 0;}return 1;}
function I7(a,b){var c,d,e,f,g;c=b.data;d=a.X;e=c.length;if(e<d)b=Y7(HB(Dw(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=G$(a);while(HJ(f)){c=b.data;g=e+1|0;c[e]=H2(f);e=g;}return b;}
function Cr(a,b){var c,d;c=0;d=AB3(b);while(d.b9()){if(!TZ(a,d.b2()))continue;c=1;}return c;}
function Im(){}
function DF(){Gd.call(this);this.cV=0;}
function Fr(a,b){a.pT(a.ex(),b);return 1;}
function G$(a){var b;b=new LN;b.iI=a;b.tR=b.iI.cV;b.rz=b.iI.ex();b.st=(-1);return b;}
function AL8(a,b,c){c=new Es;R(c);H(c);}
function V3(a,b){var c,d,e;c=a.X;d=0;a:{while(d<c){b:{e=Br(a,d);if(b!==null){if(!XR(b,e))break b;else break a;}if(e===null)break a;}d=d+1|0;}return (-1);}return d;}
function AI_(a,b){var c,d,e;if(!Kx(b,Im))return 0;c=b;if(a.ex()!=c.ex())return 0;d=0;while(d<c.ex()){b=a.h1(d);e=c.h1(d);if(!(b===e?1:b!==null?b.dv(e):e!==null?0:1))return 0;d=d+1|0;}return 1;}
function KF(){DF.call(this);}
function AKr(a,b,c){if(b>=0){Wg(Qr(a,b),c);return;}c=new BB;R(c);H(c);}
function Lr(a,b){var c,d;if(b>=0){c=Qr(a,b);d=TI(c);ABH(c);return d;}c=new BB;R(c);H(c);}
function K$(){}
function R3(){}
function Y4(){var a=this;KF.call(a);a.kR=null;a.j3=null;a.eW=0;}
function XE(){var a=new Y4();ANZ(a);return a;}
function ANZ(a){return;}
function AKD(a){return a.eW;}
function KS(a){a.kR=null;a.j3=null;a.eW=0;a.cV=a.cV+1|0;}
function Qr(a,b){var c,d,e;if(b<0){c=new BB;R(c);H(c);}if(b<=(a.eW/2|0)){d=a.kR;e=0;while(e<b){d=d.eM;e=e+1|0;}return AD$(a,d,d===null?null:d.fh,b);}if(b>a.eW){c=new BB;R(c);H(c);}c=a.j3;e=b;while(e<a.eW){c=c.fh;e=e+1|0;}return AD$(a,c===null?null:c.eM,c,b);}
function X3(){C.call(this);}
function DT(){C.call(this);}
function Wq(){DT.call(this);}
function U7(){DT.call(this);}
function G6(){}
function CK(){Gd.call(this);}
function AGp(a,b){var c,d;if(a===b)return 1;if(!Kx(b,G6))return 0;c=b;if(ZM(a)!=c.ex())return 0;d=c.eP();while(d.b9()){if(ZZ(a,d.b2()))continue;else return 0;}return 1;}
function Dy(){}
function AAa(){CK.call(this);this.gO=null;}
function ABW(){var a=new AAa();AL2(a);return a;}
function AL2(a){a.gO=C9();}
function ABN(a,b){return DA(a.gO,b,a)!==null?0:1;}
function Xw(a){Wt(a.gO);}
function ZZ(a,b){return GW(a.gO,b);}
function AB3(a){return M$(a.gO).eP();}
function Cw(a,b){return XX(a.gO,b)===null?0:1;}
function ZM(a){return a.gO.dl;}
function HD(){}
function DH(){C.call(this);this.hE=null;}
function AAT(a){var b;if(a.hE===null){b=new R1;b.sL=a;a.hE=b;}return a.hE;}
function Jt(){var a=this;DH.call(a);a.dl=0;a.ca=null;a.dV=0;a.uj=0.0;a.iZ=0;}
function C9(){var a=new Jt();Vb(a);return a;}
function AGF(a,b){return I(HF,b);}
function Vb(a){var b;b=ABu(16);a.dl=0;a.ca=a.mG(b);a.uj=0.75;Qp(a);}
function ABu(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Wt(a){var b;if(a.dl>0){a.dl=0;b=a.ca;Uf(b,0,b.data.length,null);a.dV=a.dV+1|0;}}
function Qp(a){a.iZ=a.ca.data.length*a.uj|0;}
function GW(a,b){return Pw(a,b)===null?0:1;}
function Zu(a){var b;b=new Qq;b.r0=a;return b;}
function Ek(a,b){var c;c=Pw(a,b);if(c===null)return null;return c.d0;}
function Pw(a,b){var c,d;if(b===null)c=Hy(a);else{d=b.jA();c=Hd(a,b,d&(a.ca.data.length-1|0),d);}return c;}
function Hd(a,b,c,d){var e;e=a.ca.data[c];while(e!==null&&!(e.ld==d&&Tz(b,e.e3))){e=e.d6;}return e;}
function Hy(a){var b;b=a.ca.data[0];while(b!==null&&b.e3!==null){b=b.d6;}return b;}
function M$(a){var b;if(a.hE===null){b=new M8;b.qK=a;a.hE=b;}return a.hE;}
function Ya(a,b,c){return DA(a,b,c);}
function DA(a,b,c){var d,e,f,g;if(b===null){d=Hy(a);if(d===null){a.dV=a.dV+1|0;d=Qj(a,null,0,0);e=a.dl+1|0;a.dl=e;if(e>a.iZ)HX(a);}}else{e=b.jA();f=e&(a.ca.data.length-1|0);d=Hd(a,b,f,e);if(d===null){a.dV=a.dV+1|0;d=Qj(a,b,f,e);e=a.dl+1|0;a.dl=e;if(e>a.iZ)HX(a);}}g=d.d0;d.d0=c;return g;}
function Qj(a,b,c,d){var e;e=APl(b,d);e.d6=a.ca.data[c];a.ca.data[c]=e;return e;}
function VY(a,b){var c,d,e,f,g,h,i;c=ABu(!b?1:b<<1);d=a.mG(c);e=0;c=c-1|0;while(e<a.ca.data.length){f=a.ca.data[e];a.ca.data[e]=null;while(f!==null){g=d.data;h=f.ld&c;i=f.d6;f.d6=g[h];g[h]=f;f=i;}e=e+1|0;}a.ca=d;Qp(a);}
function HX(a){VY(a,a.ca.data.length);}
function XX(a,b){var c;c=P$(a,b);if(c===null)return null;return c.d0;}
function P$(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.ca.data[0];while(e!==null){if(e.e3===null)break a;f=e.d6;d=e;e=f;}}else{g=b.jA();c=g&(a.ca.data.length-1|0);e=a.ca.data[c];while(e!==null&&!(e.ld==g&&Tz(b,e.e3))){f=e.d6;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.d6=e.d6;else a.ca.data[c]=e.d6;a.dV=a.dV+1|0;a.dl=a.dl-1|0;return e;}
function AER(a){return a.dl;}
function Tz(b,c){return b!==c&&!b.dv(c)?0:1;}
function UF(){DT.call(this);}
function Tx(){C.call(this);}
function AC$(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.wA=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.wV=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=AOV(callback);return thread.suspend(function(){try{AO_(b,callback);}catch($e){callback.wV($rt_exception($e));}});}
function AO_(b,c){var d,e;d=typeof indexedDB!=='undefined'?indexedDB:null;if(d===null){CZ(c,R6(0,0,B(211),null));return;}e=d.open($rt_ustr(b),1);b=new LW;b.sV=c;b=Cy(b,"handleEvent");e.onBlocked=b;b=new LV;b.th=c;b.tM=e;b=Cy(b,"handleEvent");e.onsuccess=b;b=new LU;b.rV=c;b=Cy(b,"handleEvent");e.onerror=b;b=new LT;b.tT=e;b=Cy(b,"handleEvent");e.onupgradeneeded=b;}
function Zv(){var a=this;C.call(a);a.ut=0;a.t$=0;a.nn=null;a.oB=null;}
function R6(a,b,c,d){var e=new Zv();AHK(e,a,b,c,d);return e;}
function AHK(a,b,c,d,e){a.ut=b;a.t$=c;a.nn=d;a.oB=e;}
function GH(){var a=this;C.call(a);a.uS=null;a.xk=0;}
function ASj(a,b){var c=new GH();H8(c,a,b);return c;}
function H8(a,b,c){a.uS=b;a.xk=c;}
function DR(){GH.call(this);}
var AR0=null;var ARZ=null;var ARY=null;var ASk=null;function ABJ(){var b,c,d;b=new DR;H8(b,B(212),0);AR0=b;b=new DR;H8(b,B(213),1);ARZ=b;b=new DR;H8(b,B(214),2);ARY=b;c=I(DR,3);d=c.data;d[0]=AR0;d[1]=ARZ;d[2]=ARY;ASk=c;}
function Ov(){}
function Od(){C.call(this);this.pS=null;}
function AOV(b){var c;c=new Od;c.pS=b;return c;}
function CZ(a,b){a.pS.wA(b);}
function ANk(a,b){a.pS.wV(b);}
function AAB(){C.call(this);}
function KU(){}
function RH(){var a=this;C.call(a);a.oD=null;a.rS=null;}
function AA$(a){var b,c,d;if(a.oD.readyState==4){b=new Uint8Array(a.oD.response);c=$rt_createByteArray(b.byteLength);T();AQh=c;d=0;while(d<P3().data.length){P3().data[d]=b[d]<<24>>24;d=d+1|0;}CZ(a.rS,B(215));}}
function AM1(a){AA$(a);}
function EC(){C.call(this);}
function Z5(){var a=this;EC.call(a);a.ri=null;a.jp=0;a.v0=0;a.mP=0;}
function Nb(a){var b=new Z5();ADR(b,a);return b;}
function ADR(a,b){var c;c=b.data.length;a.ri=b;a.jp=0;a.v0=0;a.mP=0+c|0;}
function ANi(a,b,c,d){var e,f,g,h,i;e=BY(d,a.mP-a.jp|0);f=0;while(f<e){g=b.data;d=c+1|0;h=a.ri.data;i=a.jp;a.jp=i+1|0;g[c]=h[i];f=f+1|0;c=d;}if(e<=0)e=(-1);return e;}
function AFP(a){return a.mP-a.jp|0;}
function AG0(a){return;}
function GC(){EC.call(this);this.g$=null;}
function ASl(a){var b=new GC();QH(b,a);return b;}
function QH(a,b){a.g$=b;}
function U2(a){return a.g$.mU();}
function Mh(){}
function NE(){GC.call(this);this.fU=null;}
function AN6(a){var b=new NE();S3(b,a);return b;}
function S3(a,b){QH(a,b);a.fU=$rt_createByteArray(8);}
function JT(a,b){var c;c=b.data;return a.g$.f$(b,0,c.length);}
function LL(a,b){var c,d;c=0;while(c<b){d=a.g$.f$(a.fU,c,b-c|0);if(d==(-1))return d;c=c+d|0;}return c;}
function Xl(a,b,c,d){var e,f;if(d<0){e=new BB;R(e);H(e);}if(!d)return;if(a.g$===null){e=new Dm;R(e);H(e);}if(b===null){e=new Dm;R(e);H(e);}if(c>=0&&c<=(b.data.length-d|0)){while(d>0){f=a.g$.f$(b,c,d);if(f<0){e=new FP;R(e);H(e);}c=c+f|0;d=d-f|0;}return;}e=new BB;R(e);H(e);}
function ZP(a){var b;if(LL(a,4)<0){b=new FP;R(b);H(b);}return (a.fU.data[0]&255)<<24|(a.fU.data[1]&255)<<16|(a.fU.data[2]&255)<<8|a.fU.data[3]&255;}
function Zt(a){var b;if(LL(a,2)<0){b=new FP;R(b);H(b);}return ((a.fU.data[0]&255)<<8|a.fU.data[1]&255)&65535;}
function HW(a){return VW(a,Zt(a));}
function VW(a,b){var c,d;c=$rt_createByteArray(b);d=$rt_createCharArray(b);Xl(a,c,0,b);return AHi(c,d,0,b);}
function AHi(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=0;g=0;a:{while(f<e){h=b.data;i=c.data;j=f+1|0;k=h[d+f|0]&65535;i[g]=k;l=i[g];if(k<128)g=g+1|0;else if((l&224)==192){if(j>=e){m=new FC;Bb(m,B(216));H(m);}k=j+1|0;j=h[d+j|0];if((j&192)!=128){m=new FC;Bb(m,B(217));H(m);}n=g+1|0;i[g]=((l&31)<<6|j&63)&65535;g=n;j=k;}else{if((l&240)!=224){m=new FC;Bb(m,B(217));H(m);}f=j+1|0;if(f>=e){m=new FC;Bb(m,B(217));H(m);}n=h[d+j|0];j=f+1|0;o=h[d+f|0];if((n&192)!=128)break a;if((o&192)!=128)break a;f=g+1|0;i[g]=((l&15)<<12|(n&63)
<<6|o&63)&65535;g=f;}f=j;}return FU(c,0,g);}m=new FC;Bb(m,B(217));H(m);}
function It(){var a=this;C.call(a);a.uA=null;a.vz=null;}
function QD(b){var c,d;if(C8(b))H(VO(b));if(!Zz(M(b,0)))H(VO(b));c=1;while(c<O(b)){a:{d=M(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(Zz(d))break a;else H(VO(b));}}c=c+1|0;}}
function Zz(b){return !(b>=48&&b<=57)&&!(b>=97&&b<=122)&&b<65&&b>90?0:1;}
function SY(b){var c;if(b===null){b=new BW;Bb(b,B(218));H(b);}QD(b);c=Ek(ASm,X_(b));if(c!==null)return c;c=new On;R(c);c.wb=b;H(c);}
function XW(a,b){var c,d,$$je;a:{try{b=Uh(PH(Rh(QT(a),ASn),ASn),b);}catch($$e){$$je=D($$e);if($$je instanceof FA){c=$$je;break a;}else{throw $$e;}}return b;}d=new RB;d.lp=1;d.l1=1;d.oO=B(219);d.ga=c;H(d);}
function Rg(){var a=this;GC.call(a);a.ep=null;a.je=null;a.l0=0;a.jK=0;a.tu=0;a.sZ=0;a.uK=null;a.xD=null;}
function AGG(a,b,c,d){var e,f,g;if(a.l0){e=new BI;Bb(e,B(220));H(e);}if(b===null){e=new Dm;R(e);H(e);}if(c>=0&&d>=0&&d<=(b.data.length-c|0)){if(!d)return 0;if(a.jK)return (-1);f=0;Vx(a.ep,b,c,d);a:{while(!a.jK){if(!a.ep.w)V_(a);b:{g=AAC(a.ep,0);f=f+(a.ep.ja-c|0)|0;c=a.ep.ja;switch(g){case -3:e=new BI;Bb(e,a.ep.bO);H(e);case 1:case 2:break;default:break b;}a.jK=1;if(g==2)return (-1);}if(!a.ep.fk)break a;}}return f;}e=new BB;R(e);H(e);}
function AK5(a){var b;if(!a.l0){if(!a.jK)return 1;return 0;}b=new BI;Bb(b,B(220));H(b);}
function V_(a){var b,c;if(a.l0){b=new BI;Bb(b,B(220));H(b);}a:{c=a.g$.f$(a.je,0,a.je.data.length);if(c==(-1)){if(a.ep.f4.cL)break a;if(S8(a.ep))break a;a.je.data[0]=0;c=1;}Uz(a.ep,a.je,0,c,1);return;}if(Long_ne(a.ep.f4.j2,Long_fromInt(-1))){b=new BI;Bb(b,B(221));H(b);}b=new FP;Bb(b,B(222));H(b);}
function IQ(){var a=this;C.call(a);a.ff=null;a.fW=0;a.h4=Long_ZERO;}
function G4(a,b){var c,d;c=a.ff.data;d=a.fW;a.fW=d+1|0;c[d]=b;if(a.fW==a.ff.data.length){K4(a,a.ff,0);a.fW=0;}a.h4=Long_add(a.h4,Long_fromInt(1));}
function YA(a,b,c,d){a:{while(a.fW){if(d<=0)break a;G4(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}while(d>a.ff.data.length){K4(a,b,c);c=c+a.ff.data.length|0;d=d-a.ff.data.length|0;a.h4=Long_add(a.h4,Long_fromInt(a.ff.data.length));}while(d>0){G4(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}
function Y3(a){var b;b=Long_shl(a.h4,3);G4(a,(-128));while(a.fW){G4(a,0);}Vs(a,b);KW(a);}
function Pv(){var a=this;IQ.call(a);a.iR=0;a.iS=0;a.iT=0;a.iU=0;a.iV=0;a.de=null;a.hy=0;}
function K4(a,b,c){var d,e;d=b.data;b=a.de.data;e=a.hy;a.hy=e+1|0;b[e]=(d[c]&255)<<24|(d[c+1|0]&255)<<16|(d[c+2|0]&255)<<8|d[c+3|0]&255;if(a.hy==16)KW(a);}
function F3(a,b,c,d){c=c.data;c[d]=b>>>24<<24>>24;c[d+1|0]=b>>>16<<24>>24;c[d+2|0]=b>>>8<<24>>24;c[d+3|0]=b<<24>>24;}
function Vs(a,b){if(a.hy>14)KW(a);a.de.data[14]=b.hi;a.de.data[15]=Long_and(b,Long_fromInt(-1)).lo;}
function Wf(a,b,c){Y3(a);F3(a,a.iR,b,c);F3(a,a.iS,b,c+4|0);F3(a,a.iT,b,c+8|0);F3(a,a.iU,b,c+12|0);F3(a,a.iV,b,c+16|0);Ln(a);return 20;}
function Ln(a){var b;a.h4=Long_ZERO;a.fW=0;b=0;while(b<a.ff.data.length){a.ff.data[b]=0;b=b+1|0;}a.iR=1732584193;a.iS=(-271733879);a.iT=(-1732584194);a.iU=271733878;a.iV=(-1009589776);a.hy=0;b=0;while(b!=a.de.data.length){a.de.data[b]=0;b=b+1|0;}}
function Os(a,b,c,d){return b^c^d;}
function DL(a,b,c){return b<<c|b>>>(32-c|0);}
function KW(a){var b,c,d,e,f,g,h,i,j;b=16;while(b<=79){a.de.data[b]=DL(a,a.de.data[b-3|0]^a.de.data[b-8|0]^a.de.data[b-14|0]^a.de.data[b-16|0],1);b=b+1|0;}c=a.iR;d=a.iS;e=a.iT;f=a.iU;g=a.iV;h=0;while(h<=19){i=(((DL(a,c,5)+(d&e|(d^(-1))&f)|0)+g|0)+a.de.data[h]|0)+1518500249|0;b=DL(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=20;while(j<=39){i=(((DL(a,c,5)+Os(a,d,e,f)|0)+g|0)+a.de.data[j]|0)+1859775393|0;b=DL(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}h=40;while(h<=59){i=(((DL(a,c,5)+(d&e|d&f|e&f)|0)+g|0)+a.de.data[h]|0)
+(-1894007588)|0;b=DL(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=60;while(j<=79){i=(((DL(a,c,5)+Os(a,d,e,f)|0)+g|0)+a.de.data[j]|0)+(-899497514)|0;b=DL(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}a.iR=a.iR+c|0;a.iS=a.iS+d|0;a.iT=a.iT+e|0;a.iU=a.iU+f|0;a.iV=a.iV+g|0;a.hy=0;b=0;while(b!=a.de.data.length){a.de.data[b]=0;b=b+1|0;}}
function TE(){C.call(this);}
function LO(b,c){var d,e,f,g;b=b.data;d=$rt_createCharArray(c);e=d.data;f=BY(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function H5(b,c){var d,e,f,g;b=b.data;d=$rt_createByteArray(c);e=d.data;f=BY(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function F9(b,c){var d,e,f,g;d=b.data;e=Y7(HB(Dw(b)),c);f=BY(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function G2(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BW;R(f);H(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function Uf(b,c,d,e){var f,g;if(c>d){e=new BW;R(e);H(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function Yg(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length;if(d>e){f=new BW;R(f);H(f);}g=e-1|0;a:{while(true){e=(d+g|0)/2|0;h=b[e];if(h==c)break;if(c>=h){d=e+1|0;if(d>g){e= -e-2|0;break a;}}else{g=e-1|0;if(g<d){e= -e-1|0;break a;}}}}return e;}
function J4(){C.call(this);}
var ASo=null;var ASp=null;function D2(){if(ASo===null)ASo=AI$(new RS,0);return ASo;}
function Df(){if(ASp===null)ASp=AI$(new Na,0);return ASp;}
function CM(b,c,d,e,f){var g,h,i,j,k,l,m;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Y2(b)&&(e+f|0)<=Y2(d)){a:{b:{if(b!==d){g=HB(Dw(b));h=HB(Dw(d));if(g!==null&&h!==null){if(g===h)break b;if(!Hi(g)&&!Hi(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;if(!U5(h,l[k])){OL(b,c,d,e,j);b=new H4;R(b);H(b);}j=j+1|0;k=m;}OL(b,c,d,e,f);return;}if(!Hi(g))break a;if(Hi(h))break b;else break a;}b=new H4;R(b);H(b);}}OL(b,c,d,e,f);return;}b=new H4;R(b);H(b);}b=new BB;R(b);H(b);}d=new Dm;Bb(d,B(223));H(d);}
function OL(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Bq(){return Long_fromNumber(new Date().getTime());}
function Cd(){return Long_fromNumber(performance.now()*1000000.0);}
function FH(){C.call(this);}
var ASq=null;var ASr=null;function AB6(b){var c;AKW(F(FH));try{c=HE(b);Bg(ASq,DZ(c));Bg(ASq,DZ(b));return c;}finally{ABR(F(FH));}}
function ST(b){var c,d,e,f,g;AKW(F(FH));try{c=b.J;while(c<b.b0){Bz();d=ASs;T();e=new L4;f=AQf.createTexture();e.v2=(-1);e.v1=(-1);e.wl=1;e.x4=0;e.p5=f;g=Sk(d,e);AAS(b,c,g);Bg(ASr,DZ(g));c=c+1|0;}}finally{ABR(F(FH));}}
function Kj(b){return V9($rt_createIntArray(b));}
function Uu(){ASq=CU();ASr=CU();}
function ABT(){FH.call(this);}
function Je(b){var c,d,e,f;c=$rt_createFloatArray(b);d=c.data.length;e=new Rf;f=0+d|0;H0(e,d);e.J=0;e.b0=f;e.pu=0;e.nU=0;e.nA=c;return e;}
function AK9(b){return Kj(b);}
function HK(){C.call(this);}
function APy(){var a=new HK();ACI(a);return a;}
function ACI(a){return;}
function AAE(a,b){if(b==32)return Ha(a)*4.294967295E9+(-2.147483648E9)|0;return Ha(a)*Long_toNumber(Long_shl(Long_fromInt(1),BY(32,b)))|0;}
function UW(a){return AAE(a,32);}
function B3(a,b){return Ha(a)*b|0;}
function B4(a){return Ha(a);}
function Ha(a){return Math.random();}
function Vq(){var a=this;C.call(a);a.fz=null;a.fJ=null;a.d8=0;a.d5=0;a.tl=0.0;a.tm=0.0;a.tn=0.0;a.fi=0.0;a.qo=0.0;a.gV=0.0;a.pt=0;a.lj=0;}
function HS(a,b){var c=new Vq();ADe(c,a,b);return c;}
function ADe(a,b,c){a.pt=0;a.lj=0;a.d8=b;a.d5=c;}
function Fc(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;a.fz=I(DO,8);a.fJ=I(D$,6);h=b+e;i=c+f;j=d+g;k=Fp(b,c,d,0.0,0.0);l=Fp(h,c,d,0.0,8.0);m=Fp(h,i,d,8.0,8.0);n=Fp(b,i,d,8.0,0.0);o=Fp(b,c,j,0.0,0.0);p=Fp(h,c,j,0.0,8.0);q=Fp(h,i,j,8.0,8.0);r=Fp(b,i,j,8.0,0.0);a.fz.data[0]=k;a.fz.data[1]=l;a.fz.data[2]=m;a.fz.data[3]=n;a.fz.data[4]=o;a.fz.data[5]=p;a.fz.data[6]=q;a.fz.data[7]=r;s=a.fJ.data;t=new D$;u=I(DO,4);v=u.data;v[0]=p;v[1]=l;v[2]=m;v[3]=q;Ff(t,u,(a.d8+g|0)+e|0,a.d5+g|0,((a.d8+g|0)+e|0)+g|0,(a.d5+g
|0)+f|0);s[0]=t;v=a.fJ.data;t=new D$;s=I(DO,4);u=s.data;u[0]=k;u[1]=o;u[2]=r;u[3]=n;Ff(t,s,a.d8,a.d5+g|0,a.d8+g|0,(a.d5+g|0)+f|0);v[1]=t;v=a.fJ.data;t=new D$;s=I(DO,4);u=s.data;u[0]=p;u[1]=o;u[2]=k;u[3]=l;Ff(t,s,a.d8+g|0,a.d5,(a.d8+g|0)+e|0,a.d5+g|0);v[2]=t;u=a.fJ.data;t=new D$;s=I(DO,4);v=s.data;v[0]=m;v[1]=n;v[2]=r;v[3]=q;Ff(t,s,(a.d8+g|0)+e|0,a.d5,((a.d8+g|0)+e|0)+e|0,a.d5+g|0);u[3]=t;v=a.fJ.data;t=new D$;s=I(DO,4);u=s.data;u[0]=l;u[1]=k;u[2]=n;u[3]=m;Ff(t,s,a.d8+g|0,a.d5+g|0,(a.d8+g|0)+e|0,(a.d5+g|0)+f|
0);v[4]=t;v=a.fJ.data;t=new D$;s=I(DO,4);u=s.data;u[0]=o;u[1]=p;u[2]=q;u[3]=r;Ff(t,s,((a.d8+g|0)+e|0)+g|0,a.d5+g|0,(((a.d8+g|0)+e|0)+g|0)+e|0,(a.d5+g|0)+f|0);v[5]=t;}
function Hc(a,b,c,d){a.tl=b;a.tm=c;a.tn=0.0;}
function Fv(a,b){var c,d,e,f,g,h,i;if(!a.pt){a.lj=HE(1);Eq(a.lj,4864);C4();c=AR7;Fz(c,7);d=0;while(d<a.fJ.data.length){e=a.fJ.data[d];f=GQ(LR(e.hX.data[1].e4,e.hX.data[0].e4));g=GQ(LR(e.hX.data[1].e4,e.hX.data[2].e4));f=GQ(BC(f.bl*g.bj-f.bj*g.bl,f.bj*g.bk-f.bk*g.bj,f.bk*g.bl-f.bl*g.bk));Ui(c,f.bk,f.bl,f.bj);h=0;while(h<4){i=e.hX.data[h];Fy(c,i.mX/64.0,i.mY/32.0);Z(c,i.e4.bk*b,i.e4.bl*b,i.e4.bj*b);h=h+1|0;}d=d+1|0;}B5(c);Eo();a.pt=1;}E5();Bt(a.tl*b,a.tm*b,a.tn*b);By(a.gV*57.295780181884766,0.0,0.0,1.0);By(a.qo
*57.295780181884766,0.0,1.0,0.0);By(a.fi*57.295780181884766,1.0,0.0,0.0);FE(a.lj);F_();}
function P9(){}
function TL(){var a=this;DF.call(a);a.dr=null;a.X=0;}
function CU(){var a=new TL();AGe(a);return a;}
function AGe(a){a.dr=I(C,10);}
function LJ(a,b){var c;if(a.dr.data.length<b){c=a.dr.data.length>=1073741823?2147483647:CB(b,CB(a.dr.data.length*2|0,5));a.dr=F9(a.dr,c);}}
function Br(a,b){Ll(a,b);return a.dr.data[b];}
function HQ(a){return a.X;}
function Bg(a,b){var c,d;LJ(a,a.X+1|0);c=a.dr.data;d=a.X;a.X=d+1|0;c[d]=b;a.cV=a.cV+1|0;return 1;}
function WP(a,b,c){var d;if(b>=0&&b<=a.X){LJ(a,a.X+1|0);d=a.X;while(d>b){a.dr.data[d]=a.dr.data[d-1|0];d=d+(-1)|0;}a.dr.data[b]=c;a.X=a.X+1|0;a.cV=a.cV+1|0;return;}c=new BB;R(c);H(c);}
function EE(a,b){var c,d,e,f;Ll(a,b);c=a.dr.data[b];a.X=a.X-1|0;while(b<a.X){d=a.dr.data;e=a.dr.data;f=b+1|0;d[b]=e[f];b=f;}a.dr.data[a.X]=null;a.cV=a.cV+1|0;return c;}
function AAf(a,b){var c;c=V3(a,b);if(c<0)return 0;EE(a,c);return 1;}
function Ep(a){Uf(a.dr,0,a.X,null);a.X=0;}
function Ll(a,b){var c;if(b>=0&&b<a.X)return;c=new BB;R(c);H(c);}
function Bl(){var a=this;C.call(a);a.dY=0;a.bn=0;a.n$=null;a.oQ=0.0;a.on=0.0;a.nW=0.0;a.oP=0.0;a.om=0.0;a.nV=0.0;a.qa=0.0;}
var ASt=null;var ARc=null;var ASu=null;var ASv=null;var ARo=null;var ARl=null;var ARm=null;var ARp=null;var ARq=null;var ARt=null;var ARh=null;var APV=null;var ARj=null;var APU=null;var ARk=null;var ARy=null;var ARz=null;var ASf=null;var ASe=null;var ASd=null;var ARr=null;var ARs=null;var ARB=null;var ARA=null;var ARD=null;var ARE=null;var ARF=null;var ARG=null;var ARH=null;var ARI=null;var ARJ=null;var ARK=null;var ARL=null;var ARM=null;var ARN=null;var ARO=null;var ARP=null;var ARQ=null;var ARR=null;var ARS
=null;var ARu=null;var ARv=null;var ARw=null;var ARx=null;var ARC=null;function Bj(){Bj=Bx(Bl);AH_();}
function ASw(a){var b=new Bl();EF(b,a);return b;}
function Cf(a,b){var c=new Bl();Gl(c,a,b);return c;}
function EF(a,b){Bj();ARc.data[b]=a;a.bn=b;Se(a,0.0,0.0,0.0,1.0,1.0,1.0);}
function BE(a,b,c,d){a.qa=d;a.n$=b;return a;}
function Hb(a,b){ASu.data[a.bn]=b;}
function Se(a,b,c,d,e,f,g){a.oQ=b;a.on=c;a.nW=d;a.oP=e;a.om=f;a.nV=g;}
function Gl(a,b,c){Bj();EF(a,b);a.dY=c;}
function TW(a,b){ASv.data[a.bn]=16;}
function AGq(a,b,c,d,e,f,g){var h,i,j,k;h=0;i=f-1|0;if(a.fx(c,e,i,g,d,0)){j=0.5*a.hk(c,e,i,g);Ei(b,j,j,j);a.fE(b,e,f,g,0);h=1;}k=f+1|0;if(a.fx(c,e,k,g,d,1)){j=a.hk(c,e,k,g)*1.0;Ei(b,j,j,j);a.fE(b,e,f,g,1);h=1;}k=g-1|0;if(a.fx(c,e,f,k,d,2)){j=0.800000011920929*a.hk(c,e,f,k);Ei(b,j,j,j);a.fE(b,e,f,g,2);h=1;}k=g+1|0;if(a.fx(c,e,f,k,d,3)){j=0.800000011920929*a.hk(c,e,f,k);Ei(b,j,j,j);a.fE(b,e,f,g,3);h=1;}k=e-1|0;if(a.fx(c,k,f,g,d,4)){j=0.6000000238418579*a.hk(c,k,f,g);Ei(b,j,j,j);a.fE(b,e,f,g,4);h=1;}k=e+1|0;if
(a.fx(c,k,f,g,d,5)){j=0.6000000238418579*a.hk(c,k,f,g);Ei(b,j,j,j);a.fE(b,e,f,g,5);h=1;}return h;}
function ACU(a,b,c,d,e){return IR(b,c,d,e);}
function Jc(a,b,c,d,e,f,g){return f==1?0:YR(b,c,d,e)?0:1;}
function AIj(a,b){return a.dY;}
function Z_(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;g=a.ou(f);h=(g%16|0)<<4;g=(g/16|0)<<4;i=h;j=i/256.0;k=(i+15.989999771118164)/256.0;i=g;l=i/256.0;i=(i+15.989999771118164)/256.0;m=c;n=m+a.oQ;m=m+a.oP;o=d;p=o+a.on;o=o+a.om;q=e;r=q+a.nW;q=q+a.nV;if(!f){s=n;t=p;u=q;v=j;w=i;Q(b,s,t,u,v,w);x=r;y=l;Q(b,s,t,x,v,y);s=m;v=k;Q(b,s,t,x,v,y);Q(b,s,t,u,v,w);}else if(f==1){s=m;t=o;u=q;v=k;w=i;Q(b,s,t,u,v,w);x=r;y=l;Q(b,s,t,x,v,y);s=n;v=j;Q(b,s,t,x,v,y);Q(b,s,t,u,v,w);}else if(f==2){s=n;t=o;u=r;v=k;w=l;Q(b,
s,t,u,v,w);x=m;y=j;Q(b,x,t,u,y,w);t=p;w=i;Q(b,x,t,u,y,w);Q(b,s,t,u,v,w);}else if(f==3){y=n;s=o;t=q;u=j;v=l;Q(b,y,s,t,u,v);w=p;x=i;Q(b,y,w,t,u,x);u=m;y=k;Q(b,u,w,t,y,x);Q(b,u,s,t,y,v);}else if(f==4){s=n;t=o;u=q;v=k;w=l;Q(b,s,t,u,v,w);x=r;y=j;Q(b,s,t,x,y,w);t=p;w=i;Q(b,s,t,x,y,w);Q(b,s,t,u,v,w);}else if(f==5){s=m;t=p;u=q;v=j;w=i;Q(b,s,t,u,v,w);x=r;y=k;Q(b,s,t,x,y,w);t=o;w=l;Q(b,s,t,x,y,w);Q(b,s,t,u,v,w);}}
function VX(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;g=a.dY;h=(g%16|0)/16.0;i=h+0.062437500804662704;j=(g/16|0)/16.0;k=j+0.062437500804662704;l=c;m=l+a.oQ;n=l+a.oP;l=d;o=l+a.on;l=l+a.om;p=e;q=p+a.nW;r=p+a.nV;if(!f){s=n;t=o;u=r;v=i;w=k;Q(b,s,t,u,v,w);x=q;y=j;Q(b,s,t,x,v,y);s=m;v=h;Q(b,s,t,x,v,y);Q(b,s,t,u,v,w);}if(f==1){s=m;t=l;u=r;v=h;w=k;Q(b,s,t,u,v,w);x=q;y=j;Q(b,s,t,x,v,y);s=n;v=i;Q(b,s,t,x,v,y);Q(b,s,t,u,v,w);}if(f==2){s=m;t=o;u=q;v=i;w=k;Q(b,s,t,u,v,w);x=n;y=h;Q(b,x,t,u,y,w);t=l;w=j;Q(b,x,
t,u,y,w);Q(b,s,t,u,v,w);}if(f==3){s=n;t=l;u=r;v=i;w=j;Q(b,s,t,u,v,w);x=o;y=k;Q(b,s,x,u,v,y);s=m;v=h;Q(b,s,x,u,v,y);Q(b,s,t,u,v,w);}if(f==4){u=m;s=o;v=r;w=i;t=k;Q(b,u,s,v,w,t);x=q;y=h;Q(b,u,s,x,y,t);t=l;s=j;Q(b,u,t,x,y,s);Q(b,u,t,v,w,s);}if(f==5){s=n;t=l;u=r;v=h;w=j;Q(b,s,t,u,v,w);x=q;y=i;Q(b,s,t,x,y,w);t=o;w=k;Q(b,s,t,x,y,w);Q(b,s,t,u,v,w);}}
function X2(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q;Bj();h=d;i=h+1.0;j=e;k=j+1.0;l=f;m=l+1.0;if(!g&&j>b.p){n=h;o=j;p=m;Z(c,n,o,p);q=l;Z(c,n,o,q);n=i;Z(c,n,o,q);Z(c,n,o,p);}if(g==1&&j<b.p){n=i;o=k;p=m;Z(c,n,o,p);q=l;Z(c,n,o,q);n=h;Z(c,n,o,q);Z(c,n,o,p);}if(g==2&&l>b.s){n=h;o=k;p=l;Z(c,n,o,p);q=i;Z(c,q,o,p);o=j;Z(c,q,o,p);Z(c,n,o,p);}if(g==3&&l<b.s){n=h;o=k;p=m;Z(c,n,o,p);q=j;Z(c,n,q,p);n=i;Z(c,n,q,p);Z(c,n,o,p);}if(g==4&&h>b.r){q=h;n=k;o=m;Z(c,q,n,o);p=l;Z(c,q,n,p);n=j;Z(c,q,n,p);Z(c,q,n,o);}if(g==5&&h<b.r){n=i;o
=j;p=m;Z(c,n,o,p);q=l;Z(c,n,o,q);o=k;Z(c,n,o,q);Z(c,n,o,p);}}
function ANF(a,b,c,d){return Ie(b,c,d,b+1|0,c+1|0,d+1|0);}
function AMV(a){return 1;}
function AKs(a){return 1;}
function AJV(a,b,c,d,e,f){return;}
function AAP(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;g=0;h=c;i=d;j=e;while(g<4){k=0;while(k<4){l=0;while(l<4){m=h+(g+0.5)/4.0;n=i+(k+0.5)/4.0;o=j+(l+0.5)/4.0;p=AOu(b,m,n,o,m-h-0.5,n-i-0.5,o-j-0.5,a);Bg(f.fp,p);l=l+1|0;}k=k+1|0;}g=g+1|0;}}
function AHA(a){return ARd;}
function AEn(a,b,c,d,e,f){return;}
function AG2(a,b,c,d,e){return;}
function ADv(a){return 0;}
function AMg(a,b,c,d,e){return;}
function AGw(a,b,c,d,e){return;}
function AH_(){ASt=APy();ARc=I(Bl,256);ASu=$rt_createBooleanArray(256);ASv=$rt_createIntArray(256);ARo=BE(Cf(1,1),ASx,1.0,1.0);ARl=BE(AOe(2),ASy,0.8999999761581421,1.0);ARm=BE(APn(3,2),ASy,0.800000011920929,1.0);ARp=BE(Cf(4,16),ASx,1.0,1.0);ARq=BE(Cf(5,4),ASz,1.0,1.0);ARt=BE(Kn(6,15),ARi,0.699999988079071,1.0);ARh=BE(Cf(7,17),ASx,1.0,1.0);APV=BE(AD9(8,ARe),ARi,1.0,1.0);ARj=BE(ALU(9,ARe),ARi,1.0,1.0);APU=BE(AD9(10,ARf),ARi,1.0,1.0);ARk=BE(ALU(11,ARf),ARi,1.0,1.0);ARy=BE(AHJ(12,18),ASA,0.800000011920929,1.0);ARz
=BE(AHJ(13,19),ASA,0.800000011920929,1.0);ASf=BE(Cf(14,32),ASx,1.0,1.0);ASe=BE(Cf(15,33),ASx,1.0,1.0);ASd=BE(Cf(16,34),ASx,1.0,1.0);ARr=BE(AOD(17),ASz,1.0,1.0);ARs=BE(AOE(18,22,1),ASy,1.0,0.4000000059604645);ARB=BE(AN_(19),ASB,1.0,0.8999999761581421);ARA=BE(APK(20,49,0),ASC,1.0,1.0);ARD=BE(Cf(21,64),ASB,1.0,1.0);ARE=BE(Cf(22,65),ASB,1.0,1.0);ARF=BE(Cf(23,66),ASB,1.0,1.0);ARG=BE(Cf(24,67),ASB,1.0,1.0);ARH=BE(Cf(25,68),ASB,1.0,1.0);ARI=BE(Cf(26,69),ASB,1.0,1.0);ARJ=BE(Cf(27,70),ASB,1.0,1.0);ARK=BE(Cf(28,71),ASB,
1.0,1.0);ARL=BE(Cf(29,72),ASB,1.0,1.0);ARM=BE(Cf(30,73),ASB,1.0,1.0);ARN=BE(Cf(31,74),ASB,1.0,1.0);ARO=BE(Cf(32,75),ASB,1.0,1.0);ARP=BE(Cf(33,76),ASB,1.0,1.0);ARQ=BE(Cf(34,77),ASB,1.0,1.0);ARR=BE(Cf(35,78),ASB,1.0,1.0);ARS=BE(Cf(36,79),ASB,1.0,1.0);ARu=BE(Kn(37,13),ARi,0.699999988079071,1.0);ARv=BE(Kn(38,12),ARi,0.699999988079071,1.0);ARw=BE(Kn(39,29),ARi,0.699999988079071,1.0);ARx=BE(Kn(40,28),ARi,0.699999988079071,1.0);ARC=BE(Cf(41,40),ASC,0.699999988079071,1.0);}
function GN(){}
function LW(){C.call(this);this.sV=null;}
function AAx(a){CZ(a.sV,R6(0,1,null,null));}
function AGv(a){AAx(a);}
function LV(){var a=this;C.call(a);a.th=null;a.tM=null;}
function AAt(a){CZ(a.th,R6(0,0,null,a.tM.result));}
function ACN(a){AAt(a);}
function LU(){C.call(this);this.rV=null;}
function ABX(a){CZ(a.rV,R6(1,0,B(224),null));}
function AJR(a){ABX(a);}
function LT(){C.call(this);this.tT=null;}
function UA(a,b){var c,d,e,f,g,h,i;c=a.tT.result;d=ALy();e=I(Ca,1).data;e[0]=B(225);f=e.length;g=new Array(f);h=0;while(h<f){i=$rt_ustr(e[h]);g[h]=i;h=h+1|0;}d.keyPath=g;c.createObjectStore("filesystem",d);}
function XB(a,b){UA(a,b);}
function AHj(a,b){XB(a,b);}
function Rr(){C.call(this);}
var ASm=null;function ZU(){ASm=C9();DA(ASm,B(24),Rz());}
function BW(){BQ.call(this);}
function On(){BW.call(this);this.wb=null;}
function Dm(){BQ.call(this);}
function AOm(){var a=new Dm();AEB(a);return a;}
function AEB(a){R(a);}
function VZ(){C.call(this);}
function DS(){var a=this;C.call(a);a.gq=0;a.J=0;a.b0=0;a.fI=0;}
function ASD(a){var b=new DS();H0(b,a);return b;}
function H0(a,b){a.fI=(-1);a.gq=b;a.b0=b;}
function AFD(a){return a.gq;}
function YC(a){return a.J;}
function C7(a,b){var c,d;if(b>=0&&b<=a.b0){a.J=b;if(b<a.fI)a.fI=0;return a;}c=new BW;d=new W;Ba(d);Bb(c,X(E(S(E(S(E(d,B(226)),b),B(227)),a.b0),B(178))));H(c);}
function AL1(a){return a.b0;}
function He(a,b){var c,d;if(b>=0&&b<=a.gq){if(a.fI>b)a.fI=(-1);a.b0=b;if(a.J>a.b0)a.J=a.b0;return a;}c=new BW;d=new W;Ba(d);Bb(c,X(E(S(E(S(E(d,B(228)),b),B(227)),a.gq),B(178))));H(c);}
function DG(a){a.J=0;a.b0=a.gq;a.fI=(-1);return a;}
function DD(a){a.b0=a.J;a.J=0;a.fI=(-1);return a;}
function BL(a){return a.b0-a.J|0;}
function CX(a){return a.J>=a.b0?0:1;}
function IM(){DS.call(this);}
function V9(b){var c,d;c=b.data.length;d=new NZ;MU(d,c,0,0+c|0);d.oC=0;d.tY=0;d.mI=b;return d;}
function QK(a){DG(a);return a;}
function ANM(a){DD(a);return a;}
function AAn(a,b){He(a,b);return a;}
function ZG(){BW.call(this);this.uR=null;}
function VO(a){var b=new ZG();ALY(b,a);return b;}
function ALY(a,b){R(a);a.uR=b;}
function Is(){var a=this;C.call(a);a.bU=null;a.n=0;a.w=0;a.u=Long_ZERO;a.n2=null;a.ja=0;a.fk=0;a.ig=Long_ZERO;a.bO=null;a.f4=null;a.dW=null;}
function Vx(a,b,c,d){a.n2=b;a.ja=c;a.fk=d;}
function Uz(a,b,c,d,e){var f;if(d<=0&&e&&a.bU!==null)return;if(a.w>0&&e){f=$rt_createByteArray(a.w+d|0);CM(a.bU,a.n,f,0,a.w);CM(b,c,f,a.w,d);a.bU=f;a.n=0;a.w=a.w+d|0;}else{a.bU=b;a.n=c;a.w=d;}}
function M6(){Is.call(this);this.l$=0;}
function ZF(a,b,c){var d;a.l$=0;d=new Js;d.j2=Long_fromInt(-1);d.fw=(-1);d.oh=$rt_createByteArray(4);d.b3=null;d.dZ=null;d.t=a;a.f4=d;d=a.f4;if(c)b= -b;return Sx(d,b);}
function AAC(a,b){var c;if(a.f4===null)return (-2);c=ABk(a.f4,b);if(c==1)a.l$=1;return c;}
function S8(a){return a.f4.bE!=12?0:1;}
function J8(){DS.call(this);}
function X7(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BB;i=new W;Ba(i);Bb(h,X(S(E(S(E(i,B(229)),g),B(230)),f)));H(h);}if(BL(a)<d){h=new EH;R(h);H(h);}if(d<0){h=new BB;i=new W;Ba(i);Bb(h,X(E(S(E(i,B(231)),d),B(232))));H(h);}g=a.J;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=Qf(a,g);j=j+1|0;c=k;g=f;}a.J=a.J+d|0;return a;}}b=b.data;i=new BB;h=new W;Ba(h);Bb(i,X(E(S(E(S(E(h,B(233)),c),B(227)),b.length),B(27))));H(i);}
function Pt(a,b){return X7(a,b,0,b.data.length);}
function JJ(a){DG(a);return a;}
function Ma(a){DD(a);return a;}
function N1(a,b){He(a,b);return a;}
function IO(){var a=this;DS.call(a);a.f9=0;a.ci=null;a.i_=null;}
function WN(b,c,d){return AF2(0,b.data.length,b,c,c+d|0,0,0);}
function I1(b){return WN(b,0,b.data.length);}
function UI(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BB;i=new W;Ba(i);Bb(h,X(S(E(S(E(i,B(234)),g),B(230)),f)));H(h);}if(BL(a)<d){i=new EH;R(i);H(i);}if(d<0){i=new BB;h=new W;Ba(h);Bb(i,X(E(S(E(h,B(231)),d),B(232))));H(i);}g=a.J+a.f9|0;j=0;while(j<d){k=c+1|0;b=a.ci.data;f=g+1|0;e[c]=b[g];j=j+1|0;c=k;g=f;}a.J=a.J+d|0;return a;}}b=b.data;h=new BB;i=new W;Ba(i);Bb(h,X(E(S(E(S(E(i,B(233)),c),B(227)),b.length),B(27))));H(h);}
function Rs(a,b,c,d){var e,f,g,h,i,j,k;if(!d)return a;if(a.hs){e=new DU;R(e);H(e);}if(BL(a)<d){e=new E6;R(e);H(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BB;i=new W;Ba(i);Bb(e,X(S(E(S(E(i,B(235)),h),B(230)),g)));H(e);}if(d<0){e=new BB;i=new W;Ba(i);Bb(e,X(E(S(E(i,B(231)),d),B(232))));H(e);}h=a.J+a.f9|0;j=0;while(j<d){b=a.ci.data;k=h+1|0;g=c+1|0;b[h]=f[c];j=j+1|0;h=k;c=g;}a.J=a.J+d|0;return a;}}b=b.data;i=new BB;e=new W;Ba(e);Bb(i,X(E(S(E(S(E(e,B(233)),c),B(227)),b.length),B(27))));H(i);}
function Jf(a,b){return Rs(a,b,0,b.data.length);}
function AHk(a){return a.ci;}
function AK4(a,b){a.i_=b;return a;}
function L9(a){DG(a);return a;}
function AL4(a){DD(a);return a;}
function Vm(a,b){He(a,b);return a;}
function AAr(a,b){C7(a,b);return a;}
function Jl(){C.call(this);this.wW=null;}
var ASh=null;var ASE=null;function AFE(a){var b=new Jl();Sy(b,a);return b;}
function Sy(a,b){a.wW=b;}
function AB9(){ASh=AFE(B(236));ASE=AFE(B(237));}
function DE(){var a=this;GH.call(a);a.vt=null;a.xw=0.0;a.v_=0.0;}
var ARi=null;var ASy=null;var ASB=null;var ASA=null;var ASx=null;var ASC=null;var ASz=null;var ASF=null;function GF(a,b,c,d,e){var f=new DE();SF(f,a,b,c,d,e);return f;}
function SF(a,b,c,d,e,f){H8(a,b,c);a.vt=d;a.xw=e;a.v_=f;}
function Zo(){var b,c;ARi=GF(B(238),0,B(239),0.0,0.0);ASy=GF(B(240),1,B(240),0.6000000238418579,1.0);ASB=GF(B(241),2,B(240),0.699999988079071,1.2000000476837158);ASA=GF(B(242),3,B(242),1.0,1.0);ASx=GF(B(243),4,B(243),1.0,1.0);ASC=GF(B(244),5,B(243),1.0,2.0);ASz=GF(B(245),6,B(245),1.0,1.0);b=I(DE,7);c=b.data;c[0]=ARi;c[1]=ASy;c[2]=ASB;c[3]=ASA;c[4]=ASx;c[5]=ASC;c[6]=ASz;ASF=b;}
function XI(){Bl.call(this);}
function AOe(a){var b=new XI();AFu(b,a);return b;}
function AFu(a,b){EF(a,2);a.dY=3;Hb(a,1);}
function AJe(a,b){return b==1?0:b?3:2;}
function ANv(a,b,c,d,e,f){var g,h,i,j,k;a:{if(!B3(f,4)){if(!Gu(b,c,d+1|0,e)){Bj();EK(b,c,d,e,ARm.bn);}else{g=0;while(true){if(g>=4)break a;h=(c+B3(f,3)|0)-1|0;i=(d+B3(f,5)|0)-3|0;j=(e+B3(f,3)|0)-1|0;k=Bp(b,h,i,j);Bj();if(k==ARm.bn&&Gu(b,h,i+1|0,j))EK(b,h,i,j,ARl.bn);g=g+1|0;}}}}}
function WW(){Bl.call(this);}
function APn(a,b){var c=new WW();AJA(c,a,b);return c;}
function AJA(a,b,c){Gl(a,3,2);}
function U1(){Bl.call(this);}
function Kn(a,b){var c=new U1();AIk(c,a,b);return c;}
function AIk(a,b,c){EF(a,b);a.dY=c;Hb(a,1);}
function AMW(a,b,c,d,e,f){var g;a:{g=Bp(b,c,d-1|0,e);if(Gu(b,c,d,e)){Bj();if(g==ARm.bn)break a;if(g==ARl.bn)break a;}EK(b,c,d,e,0);}}
function ADn(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;if(Gu(c,e,f,g)^(d==1?0:1))return 0;h=a.dY;i=(h%16|0)/16.0;j=i+0.062437500804662704;k=(h/16|0)/16.0;l=k+0.062437500804662704;IK(b,255,255,255);m=0;n=e+0.5;o=f;p=o+1.0;q=g+0.5;r=p;s=j;t=k;u=i;v=o;w=l;while(m<2){x=m*3.141592653589793/2.0+0.7853981633974483;y=Bn(x)*0.5;z=Bo(x)*0.5;ba=n-y;k=y+n;bb=q-z;j=z+q;x=ba;bc=bb;Q(b,x,r,bc,s,t);bd=k;be=j;Q(b,bd,r,be,u,t);Q(b,bd,v,be,u,w);Q(b,x,v,bc,s,w);Q(b,bd,r,be,s,t);Q(b,x,r,bc,u,t);Q(b,
x,v,bc,u,w);Q(b,bd,v,be,s,w);m=m+1|0;}return 1;}
function AFR(a,b,c,d){return null;}
function ALK(a){return 0;}
function AGL(a){return 0;}
function Jd(){var a=this;Bl.call(a);a.ek=null;a.le=0;a.fr=0;}
function AD9(a,b){var c=new Jd();YQ(c,a,b);return c;}
function YQ(a,b,c){EF(a,b);a.ek=c;a.dY=14;if(c===ARf)a.dY=30;a.fr=b;a.le=b+1|0;Se(a,0.009999999776482582,(-0.09000000357627869),0.009999999776482582,1.0099999904632568,0.9099999666213989,1.0099999904632568);Hb(a,1);if(c===ARf)TW(a,16);}
function AIe(a,b,c,d,e){Gh(b,c,d,e,a.fr);}
function ALb(a,b,c,d,e,f){var g,h;g=0;a:{while(true){d=d+(-1)|0;if(Bp(b,c,d,e))break;if(!K3(a,b,c,d,e))break a;h=EK(b,c,d,e,a.fr);if(h)g=1;if(!h)break a;if(a.ek===ARf)break a;}}d=d+1|0;if(!(a.ek!==ARe&&g))g=g|H6(a,b,c-1|0,d,e)|H6(a,b,c+1|0,d,e)|H6(a,b,c,d,e-1|0)|H6(a,b,c,d,e+1|0);if(g)Gh(b,c,d,e,a.fr);else Lg(b,c,d,e,a.le);}
function K3(a,b,c,d,e){var f,g,h,i,j,k,l;a:{if(a.ek===ARe){f=c-2|0;g=c+2|0;h=d-2|0;i=d+2|0;j=e-2|0;e=e+2|0;while(true){if(f>g)break a;k=h;while(k<=i){l=j;while(l<=e){d=Bp(b,f,k,l);Bj();if(d==ARB.bn)return 0;l=l+1|0;}k=k+1|0;}f=f+1|0;}}}return 1;}
function H6(a,b,c,d,e){if(!Bp(b,c,d,e)){if(!K3(a,b,c,d,e))return 0;if(EK(b,c,d,e,a.fr))Gh(b,c,d,e,a.fr);}return 0;}
function ALr(a,b,c,d,e){return a.ek!==ARf?IR(b,c,d,e):100.0;}
function AGZ(a,b,c,d,e,f,g){if(c>=0&&d>=0&&e>=0&&c<b.bf&&e<b.bq){if(f!=1&&a.ek===ARe)return 0;f=Bp(b,c,d,e);return f!=a.fr&&f!=a.le?(g==1&&!(Bp(b,c-1|0,d,e)&&Bp(b,c+1|0,d,e)&&Bp(b,c,d,e-1|0)&&Bp(b,c,d,e+1|0))?1:Jc(a,b,c,d,e,(-1),g)):0;}return 0;}
function AKt(a,b,c,d,e,f){Z_(a,b,c,d,e,f);VX(a,b,c,d,e,f);}
function AHU(a,b,c,d){return null;}
function ALH(a){return 1;}
function AFp(a){return 0;}
function AEJ(a){return a.ek;}
function AFk(a,b,c,d,e,f){var g;a:{if(f){Bj();g=ARc.data[f].bd();if(a.ek===ARe&&g===ARf)break a;if(g===ARe&&a.ek===ARf)break a;}Gh(b,c,d,e,f);return;}EK(b,c,d,e,ARo.bn);}
function ALn(a){return a.ek!==ARf?0:5;}
function Fo(){C.call(this);}
var ASG=null;var ARd=null;var ARe=null;var ARf=null;function WK(a){var b=new Fo();AAp(b,a);return b;}
function AAp(a,b){ASG.data[b]=a;}
function TV(){ASG=I(Fo,4);ARd=WK(0);ARe=WK(1);ARf=WK(2);}
function YD(){Jd.call(this);}
function ALU(a,b){var c=new YD();AMQ(c,a,b);return c;}
function AMQ(a,b,c){YQ(a,b,c);a.fr=b-1|0;a.le=b;Hb(a,0);}
function ANn(a,b,c,d,e,f){return;}
function AGk(a,b,c,d,e,f){var g,h;g=0;if(!Bp(b,c-1|0,d,e))g=1;if(!Bp(b,c+1|0,d,e))g=1;if(!Bp(b,c,d,e-1|0))g=1;if(!Bp(b,c,d,e+1|0))g=1;if(!Bp(b,c,d-1|0,e))g=1;a:{if(f){Bj();h=ARc.data[f].bd();if(!(a.ek===ARe&&h===ARf)){if(h!==ARe)break a;if(a.ek!==ARf)break a;}EK(b,c,d,e,ARo.bn);return;}}if(g){Lg(b,c,d,e,a.fr);Gh(b,c,d,e,a.fr);}}
function Zf(){Bl.call(this);}
function AHJ(a,b){var c=new Zf();AJo(c,a,b);return c;}
function AJo(a,b,c){Gl(a,b,c);}
function AIS(a,b,c,d,e){LY(a,b,c,d,e);}
function AHH(a,b,c,d,e,f){LY(a,b,c,d,e);}
function LY(a,b,c,d,e){var f,g,h,i;f=d;while(true){g=Bp(b,c,f-1|0,e);if(!g)h=1;else{Bj();i=ARc.data[g].bd();h=i===ARe?1:i!==ARf?0:1;}if(!h)break;if(f<=0)break;f=f+(-1)|0;}if(f!=d)Vh(b,c,d,e,c,f,e);}
function Xk(){Bl.call(this);}
function AOD(a){var b=new Xk();AM9(b,a);return b;}
function AM9(a,b){EF(a,17);a.dY=20;}
function AI7(a,b){return b==1?21:b?20:21;}
function VB(){Bl.call(this);this.sm=0;}
function AOE(a,b,c){var d=new VB();AKH(d,a,b,c);return d;}
function AKH(a,b,c,d){Gl(a,18,22);a.sm=1;}
function AE5(a){return 0;}
function AKI(a,b,c,d,e,f,g){var h;h=Bp(b,c,d,e);return !a.sm&&h==a.bn?0:Jc(a,b,c,d,e,f,g);}
function AM0(a){return 0;}
function Yl(){Bl.call(this);}
function AN_(a){var b=new Yl();AF0(b,a);return b;}
function AF0(a,b){EF(a,19);a.dY=48;}
function AFA(a,b,c,d,e){var f,g,h,i,j,k;f=c-2|0;g=c+2|0;h=d-2|0;d=d+2|0;i=e-2|0;e=e+2|0;while(f<=g){j=h;while(j<=d){k=i;while(k<=e){if(ABL(b,f,j,k))GS(b,f,j,k,0);k=k+1|0;}j=j+1|0;}f=f+1|0;}}
function AE1(a,b,c,d,e){var f,g,h,i,j,k,l;f=c-2|0;g=c+2|0;h=d-2|0;i=d+2|0;j=e-2|0;c=e+2|0;while(f<=g){k=h;while(k<=i){l=j;while(l<=c){GM(b,f,k,l,Bp(b,f,k,l));l=l+1|0;}k=k+1|0;}f=f+1|0;}}
function Xo(){Bl.call(this);this.qJ=0;}
function APK(a,b,c){var d=new Xo();AGP(d,a,b,c);return d;}
function AGP(a,b,c,d){Gl(a,20,49);a.qJ=0;}
function AKK(a){return 0;}
function AJ0(a,b,c,d,e,f,g){var h;h=Bp(b,c,d,e);return !a.qJ&&h==a.bn?0:Jc(a,b,c,d,e,f,g);}
function AKj(a){return 0;}
function AB7(){It.call(this);}
function Rz(){var a=new AB7();AMU(a);return a;}
function AMU(a){var b,c,d,e;b=I(Ca,0);c=b.data;QD(B(24));d=c.length;e=0;while(e<d){QD(c[e]);e=e+1|0;}a.uA=B(24);a.vz=b.uh();}
function QT(a){var b;b=new PE;b.gJ=B(246);b.hA=ASH;b.ly=ASH;b.vo=a;b.p9=0.3333333432674408;b.vU=0.5;return b;}
function RE(a){var b,c,d,e,f;b=new Nl;c=$rt_createByteArray(1);d=c.data;d[0]=63;b.oJ=ASH;b.nM=ASH;e=d.length;if(e&&e>=b.p4){b.uN=a;b.np=c.uh();b.wR=2.0;b.p4=4.0;return b;}f=new BW;Bb(f,B(247));H(f);}
function F8(){IM.call(this);}
function ASI(a,b,c){var d=new F8();MU(d,a,b,c);return d;}
function MU(a,b,c,d){H0(a,b);a.J=c;a.b0=d;}
function Rc(a){var b,c;if(a.J<a.b0){b=a.J;a.J=b+1|0;return a.pG(b);}c=new EH;R(c);H(c);}
function HI(a,b){var c,d;if(a.hH()){c=new DU;R(c);H(c);}if(a.J<a.b0){d=a.J;a.J=d+1|0;a.ok(d,b);return a;}c=new E6;R(c);H(c);}
function XN(a,b){var c,d;if(b>=0&&b<a.b0)return Yv(a,b);c=new BB;d=new W;Ba(d);Bb(c,X(E(S(E(S(E(d,B(248)),b),B(227)),a.b0),B(27))));H(c);}
function AAS(a,b,c){var d,e;if(a.hH()){d=new DU;R(d);H(d);}if(b>=0&&b<a.b0){XA(a,b,c);return a;}e=new BB;d=new W;Ba(d);Bb(e,X(E(S(E(S(E(d,B(248)),b),B(227)),a.b0),B(27))));H(e);}
function AIb(a){return a.hH();}
function NZ(){var a=this;F8.call(a);a.tY=0;a.oC=0;a.mI=null;}
function Yv(a,b){return a.mI.data[b+a.oC|0];}
function XA(a,b,c){a.mI.data[b+a.oC|0]=c;}
function ACu(a){return a.tY;}
function ABb(){var a=this;IO.call(a);a.wp=0;a.hs=0;}
function AF2(a,b,c,d,e,f,g){var h=new ABb();ACX(h,a,b,c,d,e,f,g);return h;}
function ACX(a,b,c,d,e,f,g,h){H0(a,c);a.i_=ASh;a.f9=b;a.ci=d;a.J=e;a.b0=f;a.wp=g;a.hs=h;}
function N4(a){var b,c,d,e;if(a.J>=a.b0){b=new EH;R(b);H(b);}c=a.ci.data;d=a.f9;e=a.J;a.J=e+1|0;return c[d+e|0];}
function XP(a){var b,c,d,e,f,g,h,i,j;if(a.hs){b=new DU;R(b);H(b);}a:{c=BL(a);if(a.J>0){d=a.f9;e=a.f9+a.J|0;f=0;while(true){if(f>=c)break a;g=a.ci.data;h=d+1|0;i=a.ci.data;j=e+1|0;g[d]=i[e];f=f+1|0;d=h;e=j;}}}a.J=c;a.b0=a.gq;a.fI=(-1);return a;}
function AMu(a){return a.hs;}
function AB8(a){var b,c;b=BL(a)/4|0;if(a.i_!==ASh){c=new L6;Lq(c,a.f9+a.J|0,b,a,0,b,a.hs);return c;}c=new Py;Lq(c,a.f9+a.J|0,b,a,0,b,a.hs);return c;}
function O6(){}
function JP(){DS.call(this);}
function ABM(b){var c,d;if(b>=0)return AKa(0,b,$rt_createCharArray(b),0,b,0);c=new BW;d=new W;Ba(d);Bb(c,X(S(E(d,B(249)),b)));H(c);}
function OO(b,c,d){return AKa(0,b.data.length,b,c,c+d|0,0);}
function X9(b){return OO(b,0,b.data.length);}
function Iy(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BB;i=new W;Ba(i);Bb(h,X(S(E(S(E(i,B(250)),g),B(230)),f)));H(h);}if(BL(a)<d){h=new EH;R(h);H(h);}if(d<0){h=new BB;i=new W;Ba(i);Bb(h,X(E(S(E(i,B(231)),d),B(232))));H(h);}g=a.J;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=PT(a,g);j=j+1|0;c=k;g=f;}a.J=a.J+d|0;return a;}}b=b.data;i=new BB;h=new W;Ba(h);Bb(i,X(E(S(E(S(E(h,B(233)),c),B(227)),b.length),B(27))));H(i);}
function Zh(a,b){return Iy(a,b,0,b.data.length);}
function AB_(a,b,c,d){var e,f,g,h,i,j,k;if(KT(a)){e=new DU;R(e);H(e);}if(BL(a)<d){e=new E6;R(e);H(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BB;i=new W;Ba(i);Bb(e,X(S(E(S(E(i,B(251)),h),B(230)),g)));H(e);}if(d<0){e=new BB;i=new W;Ba(i);Bb(e,X(E(S(E(i,B(231)),d),B(232))));H(e);}h=a.J;j=0;while(j<d){k=h+1|0;g=c+1|0;JF(a,h,f[c]);j=j+1|0;h=k;c=g;}a.J=a.J+d|0;return a;}}b=b.data;i=new BB;e=new W;Ba(e);Bb(i,X(E(S(E(S(E(e,B(233)),c),B(227)),b.length),B(27))));H(i);}
function TJ(a,b,c,d){var e,f,g,h,i,j;if(KT(a)){b=new DU;R(b);H(b);}e=d-c|0;if(BL(a)<e){b=new E6;R(b);H(b);}if(c>=0&&c<O(b)){if(d>O(b)){f=new BB;g=new W;Ba(g);Bb(f,X(S(E(S(E(g,B(251)),d),B(252)),O(b))));H(f);}if(c>d){b=new BB;f=new W;Ba(f);Bb(b,X(S(E(S(E(f,B(253)),c),B(254)),d)));H(b);}h=a.J;while(c<d){i=h+1|0;j=c+1|0;JF(a,h,M(b,c));h=i;c=j;}a.J=a.J+e|0;return a;}g=new BB;f=new W;Ba(f);Bb(g,X(E(S(E(S(E(f,B(253)),c),B(227)),O(b)),B(27))));H(g);}
function I8(a,b){return TJ(a,b,0,O(b));}
function T7(a){return 1;}
function Y5(a){return a.hT;}
function AIV(a){DD(a);return a;}
function AIf(a,b){C7(a,b);return a;}
function NK(){BI.call(this);}
function I6(){J8.call(this);}
function Hk(a){var b,c;if(a.J<a.b0){b=a.J;a.J=b+1|0;return Qf(a,b);}c=new EH;R(c);H(c);}
function Cv(a,b){var c,d;if(UR(a)){c=new DU;R(c);H(c);}if(a.J<a.b0){d=a.J;a.J=d+1|0;Yz(a,d,b);return a;}c=new E6;R(c);H(c);}
function UR(a){return a.nU;}
function Rf(){var a=this;I6.call(a);a.nU=0;a.pu=0;a.nA=null;}
function Qf(a,b){return a.nA.data[b+a.pu|0];}
function Yz(a,b,c){a.nA.data[b+a.pu|0]=c;}
function AJF(a){return a.nU;}
function Ke(){}
function AAV(){var a=this;C.call(a);a.cN=Long_ZERO;a.ds=Long_ZERO;}
function ALs(){var a=new AAV();AKP(a);return a;}
function AKP(a){a.cN=Long_fromInt(1);a.ds=Long_ZERO;}
function ACC(a,b){a.cN=Long_and(b,Long_fromInt(65535));a.ds=Long_and(Long_shr(b,16),Long_fromInt(65535));}
function AJ1(a){a.cN=Long_fromInt(1);a.ds=Long_ZERO;}
function ADT(a){return Long_or(Long_shl(a.ds,16),a.cN);}
function AJp(a,b,c,d){var e,f,g,h,i,j;if(d==1){b=b.data;a.cN=Long_add(a.cN,Long_fromInt(b[c]&255));a.ds=Long_add(a.ds,a.cN);a.cN=Long_rem(a.cN,Long_fromInt(65521));a.ds=Long_rem(a.ds,Long_fromInt(65521));return;}e=d/5552|0;f=d%5552|0;while(true){g=e+(-1)|0;if(e<=0)break;h=5552;while(true){e=h+(-1)|0;if(h<=0)break;i=b.data;j=a.cN;d=c+1|0;a.cN=Long_add(j,Long_fromInt(i[c]&255));a.ds=Long_add(a.ds,a.cN);h=e;c=d;}a.cN=Long_rem(a.cN,Long_fromInt(65521));a.ds=Long_rem(a.ds,Long_fromInt(65521));e=g;}while(true){d=
f+(-1)|0;if(f<=0)break;i=b.data;j=a.cN;e=c+1|0;a.cN=Long_add(j,Long_fromInt(i[c]&255));a.ds=Long_add(a.ds,a.cN);f=d;c=e;}a.cN=Long_rem(a.cN,Long_fromInt(65521));a.ds=Long_rem(a.ds,Long_fromInt(65521));}
function QU(){J.call(this);}
function EQ(){}
function Ju(){var a=this;C.call(a);a.e3=null;a.d0=null;}
function AFc(a,b){var c,d;if(a===b)return 1;if(!Kx(b,EQ))return 0;a:{b:{c:{c=b;if(a.e3===null){if(c.is()!==null)break c;}else if(!a.e3.dv(c.is()))break c;if(a.d0===null){if(c.h6()!==null)break c;break b;}if(a.d0.dv(c.h6()))break b;}d=0;break a;}d=1;}return d;}
function AG8(a){return a.e3;}
function ANs(a){return a.d0;}
function HF(){var a=this;Ju.call(a);a.ld=0;a.d6=null;}
function APl(a,b){var c=new HF();YY(c,a,b);return c;}
function YY(a,b,c){var d;d=null;a.e3=b;a.d0=d;a.ld=c;}
function BB(){BQ.call(this);}
function AOd(){var a=new BB();AEo(a);return a;}
function AEo(a){R(a);}
function FB(){BB.call(this);}
function EW(){}
function QL(){C.call(this);this.rq=null;}
function Ty(a){var b,c,d,$$je,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.rq;try{ARV=ARV+1|0;Ed(b);$p=1;continue _;}catch($$e){$$je=D($$e);c=$$je;}d=b.hx;$p=2;continue _;case 1:a:{try{b.fo();if(N()){break _;}}catch($$e){$$je=D($$e);c=$$je;break a;}c=b.hx;$p=3;continue _;}d=b.hx;$p=2;case 2:YH(d);if(N()){break _;}a:{try{RT(b.hx);J2(d);break a;}catch($$e){$$je=D($$e);b=$$je;}J2(d);H(b);}b.mh=0;ARV=ARV-1|0;Ed(ART);H(c);case 3:YH(c);if(N()){break _;}a:
{try{RT(b.hx);J2(c);break a;}catch($$e){$$je=D($$e);b=$$je;}J2(c);H(b);}b.mh=0;ARV=ARV-1|0;Ed(ART);return;default:FI();}}De().s(a,b,c,d,$p);}
function FP(){BI.call(this);}
function DO(){var a=this;C.call(a);a.e4=null;a.mX=0.0;a.mY=0.0;}
function Fp(a,b,c,d,e){var f=new DO();AGa(f,a,b,c,d,e);return f;}
function AGa(a,b,c,d,e,f){a.e4=BC(b,c,d);a.mX=e;a.mY=f;}
function HA(a,b,c){var d;d=new DO;d.e4=a.e4;d.mX=b;d.mY=c;return d;}
function D$(){C.call(this);this.hX=null;}
function ASJ(a,b,c,d,e){var f=new D$();Ff(f,a,b,c,d,e);return f;}
function Ff(a,b,c,d,e,f){var g,h,i,j,k;g=b.data;a.hX=b;h=g[0];i=e;j=d;g[0]=HA(h,i,j);h=g[1];k=c;g[1]=HA(h,k,j);h=g[2];j=f;g[2]=HA(h,k,j);g[3]=HA(g[3],i,j);}
function Js(){var a=this;C.call(a);a.bE=0;a.jr=0;a.j2=Long_ZERO;a.bg=Long_ZERO;a.jH=0;a.cL=0;a.oN=0;a.fl=null;a.t=null;a.du=0;a.fw=0;a.oh=null;a.b3=null;a.dZ=null;}
var ASK=null;function AAd(a){var b;if(a.t===null)return (-2);b=a.t;a.t.ig=Long_ZERO;b.u=Long_ZERO;a.t.bO=null;a.bE=14;a.fw=(-1);HR(a.fl);return 0;}
function AAj(a){if(a.fl!==null)R$(a.fl);return 0;}
function Sx(a,b){var c,d,e,f;a.t.bO=null;a.fl=null;a.cL=0;if(b<0)b= -b;else if(b&1073741824){a.cL=4;b=b&(-1073741825);if(b<48)b=b&15;}else if(b&(-32)){a.cL=4;b=b&15;}else{a.cL=(b>>4)+1|0;if(b<48)b=b&15;}if(b>=8&&b<=15){if(a.fl!==null&&a.oN!=b){R$(a.fl);a.fl=null;}a.oN=b;c=new HL;d=a.t;b=1<<b;c.ku=$rt_createIntArray(1);c.jG=$rt_createIntArray(1);c.hF=$rt_createIntArray(1);c.hD=$rt_createIntArray(1);c.o_=I($rt_arraycls($rt_intcls()),1);c.pa=I($rt_arraycls($rt_intcls()),1);c.oo=$rt_createIntArray(1);c.ov=$rt_createIntArray(1);e
=new DY;e.fY=null;e.f7=null;e.dp=null;e.dK=null;e.gQ=null;e.e8=null;c.m9=e;c.m=d;e=new Ji;f=c.m;e.hi=0;e.O=f;e.o=c;c.iW=e;c.gh=$rt_createIntArray(4320);c.cc=$rt_createByteArray(b);c.b8=b;c.li=d.f4.cL?1:0;c.cK=0;HR(c);a.fl=c;AAd(a);return 0;}AAj(a);return (-2);}
function ABk(a,b){var c,d,e,f,g,h,i,$$je;if(a.t!==null&&a.t.bU!==null){c=b!=4?0:(-5);d=(-5);a:{b:{c:{d:{e:{f:{g:{h:{i:while(true){j:{k:{l:{m:{n:{o:{p:{q:{r:{s:{t:{u:{v:{w:{switch(a.bE){case 6:a.bE=13;a.t.bO=B(255);a.jH=0;return (-2);case 7:d=T3(a.fl,d);if(d==(-3)){a.bE=13;a.jH=0;continue i;}if(!d)d=c;if(d!=1)break i;a.j2=a.t.dW.pQ();HR(a.fl);if(!a.cL){a.bE=12;d=c;continue i;}a.bE=8;d=c;break w;case 12:break e;case 13:return (-3);case 14:break r;case 23:try{d=EI(a,2,d,c);}catch($$e){$$je=D($$e);if($$je instanceof C6)
{e=$$je;return e.eE;}else{throw $$e;}}a.du=a.bg.lo&65535;if((a.du&255)!=8){a.t.bO=B(256);a.bE=13;continue i;}if(a.du&57344){a.t.bO=B(257);a.bE=13;continue i;}if(a.du&512)FV(a,2,a.bg);a.bE=16;break p;case 2:break d;case 3:break c;case 4:break b;case 5:c=d;break a;case 8:break w;case 9:break v;case 10:break u;case 11:break t;case 15:break s;case 16:break p;case 17:break o;case 18:break n;case 19:break q;case 20:break l;case 21:break k;case 22:break;default:return (-2);}break j;}if(!a.t.w)return d;e=a.t;e.w=e.w
-1|0;e=a.t;e.u=Long_add(e.u,Long_fromInt(1));f=a.t.bU.data;e=a.t;b=e.n;e.n=b+1|0;a.bg=Long_and(Long_fromInt((f[b]&255)<<24),new Long(4278190080, 0));a.bE=9;d=c;}if(!a.t.w)return d;e=a.t;e.w=e.w-1|0;e=a.t;e.u=Long_add(e.u,Long_fromInt(1));g=a.bg;f=a.t.bU.data;e=a.t;b=e.n;e.n=b+1|0;a.bg=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<16),Long_fromInt(16711680)));a.bE=10;d=c;}if(!a.t.w)return d;e=a.t;e.w=e.w-1|0;e=a.t;e.u=Long_add(e.u,Long_fromInt(1));g=a.bg;f=a.t.bU.data;e=a.t;b=e.n;e.n=b+1|0;a.bg=Long_add(g,Long_and(Long_fromInt((f[b]
&255)<<8),Long_fromInt(65280)));a.bE=11;d=c;}if(!a.t.w)return d;e=a.t;e.w=e.w-1|0;e=a.t;e.u=Long_add(e.u,Long_fromInt(1));g=a.bg;f=a.t.bU.data;e=a.t;b=e.n;e.n=b+1|0;a.bg=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));if(a.du)a.bg=Long_and(Long_or(Long_or(Long_or(Long_shr(Long_and(a.bg,Long_fromInt(-16777216)),24),Long_shr(Long_and(a.bg,Long_fromInt(16711680)),8)),Long_shl(Long_and(a.bg,Long_fromInt(65280)),8)),Long_shl(Long_and(a.bg,Long_fromInt(65535)),24)),new Long(4294967295, 0));if(a.j2.lo!=
a.bg.lo)a.t.bO=B(258);else if(a.du&&a.b3!==null)a.b3.uO=a.bg;a.bE=15;d=c;}if(!(a.cL&&a.du)){if(a.t.bO===null)break f;if(!BR(a.t.bO,B(258)))break f;a.bE=13;a.jH=5;continue i;}try{d=EI(a,4,d,c);}catch($$e){$$je=D($$e);if($$je instanceof C6){e=$$je;return e.eE;}else{throw $$e;}}if(a.t.bO!==null&&BR(a.t.bO,B(258))){a.bE=13;a.jH=5;continue i;}if(Long_eq(a.bg,Long_and(a.t.ig,new Long(4294967295, 0)))){a.t.bO=null;break f;}a.t.bO=B(259);a.bE=13;continue i;}if(!a.cL){a.bE=7;continue i;}try{d=EI(a,2,d,c);}catch($$e)
{$$je=D($$e);if($$je instanceof C6){e=$$je;return e.eE;}else{throw $$e;}}if(!(a.cL!=4&&!(a.cL&2))&&Long_eq(a.bg,Long_fromInt(35615))){if(a.cL==4)a.cL=2;a.t.dW=AGr();FV(a,2,a.bg);if(a.b3===null)a.b3=AO9();a.bE=23;continue i;}if(a.cL&2){a.bE=13;a.t.bO=B(260);continue i;}a.du=0;a.jr=a.bg.lo&255;h=Long_shr(a.bg,8).lo&255;if(!(a.cL&1&&!(((a.jr<<8)+h|0)%31|0))&&(a.jr&15)!=8){if(a.cL!=4){a.bE=13;a.t.bO=B(260);continue i;}e=a.t;e.n=e.n-2|0;e=a.t;e.w=e.w+2|0;e=a.t;e.u=Long_sub(e.u,Long_fromInt(2));a.cL=0;a.bE=7;continue i;}if
((a.jr&15)!=8){a.bE=13;a.t.bO=B(256);continue i;}if(a.cL==4)a.cL=1;if(((a.jr>>4)+8|0)>a.oN){a.bE=13;a.t.bO=B(261);continue i;}a.t.dW=ALs();if(h&32){a.bE=2;break d;}a.bE=7;continue i;}break m;}try{d=EI(a,4,d,c);}catch($$e){$$je=D($$e);if($$je instanceof C6){e=$$je;return e.eE;}else{throw $$e;}}if(a.b3!==null)a.b3.vi=a.bg;if(a.du&512)FV(a,4,a.bg);a.bE=17;}try{d=EI(a,2,d,c);}catch($$e){$$je=D($$e);if($$je instanceof C6){e=$$je;return e.eE;}else{throw $$e;}}if(a.b3!==null){a.b3.w4=a.bg.lo&255;a.b3.tz=a.bg.lo>>8
&255;}if(a.du&512)FV(a,2,a.bg);a.bE=18;}if(a.du&1024){try{d=EI(a,2,d,c);}catch($$e){$$je=D($$e);if($$je instanceof C6){e=$$je;return e.eE;}else{throw $$e;}}if(a.b3!==null)a.b3.iP=$rt_createByteArray(a.bg.lo&65535);if(a.du&512)FV(a,2,a.bg);}else if(a.b3!==null)a.b3.iP=null;a.bE=19;}if(a.du&1024)x:{try{d=XK(a,d,c);if(a.b3===null)break x;f=Il(a.dZ);i=f.data;a.dZ=null;b=i.length;if(b!=a.b3.iP.data.length){a.t.bO=B(262);a.bE=13;continue i;}CM(f,0,a.b3.iP,0,b);break x;}catch($$e){$$je=D($$e);if($$je instanceof C6)
{e=$$je;return e.eE;}else{throw $$e;}}}else if(a.b3!==null)a.b3.iP=null;a.bE=20;}y:{if(a.du&2048){z:{try{d=M7(a,d,c);if(a.b3===null)break z;a.b3.qe=Il(a.dZ);break z;}catch($$e){$$je=D($$e);if($$je instanceof C6){e=$$je;break h;}else{throw $$e;}}}try{a.dZ=null;break y;}catch($$e){$$je=D($$e);if($$je instanceof C6){e=$$je;break h;}else{throw $$e;}}}else if(a.b3!==null)a.b3.qe=null;}a.bE=21;}ba:{if(a.du&4096){bb:{try{d=M7(a,d,c);if(a.b3===null)break bb;a.b3.sy=Il(a.dZ);break bb;}catch($$e){$$je=D($$e);if($$je instanceof C6)
{e=$$je;break g;}else{throw $$e;}}}try{a.dZ=null;break ba;}catch($$e){$$je=D($$e);if($$je instanceof C6){e=$$je;break g;}else{throw $$e;}}}else if(a.b3!==null)a.b3.sy=null;}a.bE=22;}if(a.du&512){try{d=EI(a,2,d,c);}catch($$e){$$je=D($$e);if($$je instanceof C6){e=$$je;return e.eE;}else{throw $$e;}}if(a.b3!==null)a.b3.yf=Long_and(a.bg,Long_fromInt(65535)).lo;if(Long_ne(a.bg,Long_and(a.t.dW.pQ(),Long_fromInt(65535)))){a.bE=13;a.t.bO=B(263);a.jH=5;continue;}}a.t.dW=AGr();a.bE=7;}return d;}return e.eE;}return e.eE;}a.bE
=12;}return 1;}if(!a.t.w)return d;e=a.t;e.w=e.w-1|0;e=a.t;e.u=Long_add(e.u,Long_fromInt(1));f=a.t.bU.data;e=a.t;d=e.n;e.n=d+1|0;a.bg=Long_and(Long_fromInt((f[d]&255)<<24),new Long(4278190080, 0));a.bE=3;d=c;}if(!a.t.w)return d;e=a.t;e.w=e.w-1|0;e=a.t;e.u=Long_add(e.u,Long_fromInt(1));g=a.bg;f=a.t.bU.data;e=a.t;d=e.n;e.n=d+1|0;a.bg=Long_add(g,Long_and(Long_fromInt((f[d]&255)<<16),Long_fromInt(16711680)));a.bE=4;d=c;}if(!a.t.w)return d;e=a.t;e.w=e.w-1|0;e=a.t;e.u=Long_add(e.u,Long_fromInt(1));g=a.bg;f=a.t.bU.data;e
=a.t;b=e.n;e.n=b+1|0;a.bg=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<8),Long_fromInt(65280)));a.bE=5;}if(!a.t.w)return c;e=a.t;e.w=e.w-1|0;e=a.t;e.u=Long_add(e.u,Long_fromInt(1));g=a.bg;f=a.t.bU.data;e=a.t;b=e.n;e.n=b+1|0;a.bg=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));a.t.dW.t6(a.bg);a.bE=6;return 2;}if(b==4&&a.bE==14)return 0;return (-2);}
function EI(a,b,c,d){var e,f,g,h;if(a.fw==(-1)){a.fw=b;a.bg=Long_ZERO;}while(true){if(a.fw<=0){if(b==2)a.bg=Long_and(a.bg,Long_fromInt(65535));else if(b==4)a.bg=Long_and(a.bg,new Long(4294967295, 0));a.fw=(-1);return c;}if(!a.t.w)break;e=a.t;e.w=e.w-1|0;e=a.t;e.u=Long_add(e.u,Long_fromInt(1));f=a.bg;g=a.t.bU.data;e=a.t;h=e.n;e.n=h+1|0;a.bg=Long_or(f,Long_fromInt((g[h]&255)<<((b-a.fw|0)*8|0)));a.fw=a.fw-1|0;c=d;}H(ABC(a,c));}
function M7(a,b,c){var d,e;if(a.dZ===null)a.dZ=AIG();while(true){if(!a.t.w)H(ABC(a,b));d=a.t;d.w=d.w-1|0;d=a.t;d.u=Long_add(d.u,Long_fromInt(1));e=a.t.bU.data[a.t.n];if(e)PQ(a.dZ,a.t.bU,a.t.n,1);a.t.dW.gS(a.t.bU,a.t.n,1);d=a.t;d.n=d.n+1|0;if(!e)break;b=c;}return c;}
function XK(a,b,c){var d;if(a.dZ===null)a.dZ=AIG();while(Long_gt(a.bg,Long_ZERO)){if(!a.t.w)H(ABC(a,b));d=a.t;d.w=d.w-1|0;d=a.t;d.u=Long_add(d.u,Long_fromInt(1));PQ(a.dZ,a.t.bU,a.t.n,1);a.t.dW.gS(a.t.bU,a.t.n,1);d=a.t;d.n=d.n+1|0;a.bg=Long_sub(a.bg,Long_fromInt(1));b=c;}return b;}
function FV(a,b,c){var d;d=0;while(d<b){a.oh.data[d]=Long_and(c,Long_fromInt(255)).lo<<24>>24;c=Long_shr(c,8);d=d+1|0;}a.t.dW.gS(a.oh,0,b);}
function Ys(){var b,c;b=$rt_createByteArray(4);c=b.data;c[0]=0;c[1]=0;c[2]=(-1);c[3]=(-1);ASK=b;}
function Dj(){C.call(this);}
function S5(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.qv(f[c]);e=e+1|0;c=g;}}
function Iz(){Dj.call(this);this.pX=null;}
function VV(){var a=this;Iz.call(a);a.w1=0;a.nC=0;a.e7=null;a.iM=null;a.s7=null;}
function AI$(a,b){var c=new VV();AMn(c,a,b);return c;}
function AMn(a,b,c){a.pX=b;b=new W;Ba(b);a.e7=b;a.iM=$rt_createCharArray(32);a.w1=c;a.s7=Rz();}
function PF(a,b,c,d){var $$je;if(a.pX===null)a.nC=1;if(!(a.nC?0:1))return;a:{try{S5(a.pX,b,c,d);break a;}catch($$e){$$je=D($$e);if($$je instanceof BI){}else{throw $$e;}}a.nC=1;}}
function L$(a,b,c,d){var e,f,g,h,i;e=b.data;f=OO(b,c,d-c|0);e=$rt_createByteArray(CB(16,BY(e.length,1024)));g=I1(e);h=RC(O8(RE(a.s7),ASn),ASn);while(true){i=EJ(L2(h,f,g,1));PF(a,e,0,g.J);DG(g);if(!i)break;}while(true){i=EJ(SV(h,g));PF(a,e,0,g.J);DG(g);if(!i)break;}}
function U6(a,b){a.iM.data[0]=b;L$(a,a.iM,0,1);}
function Hn(a,b){E(a.e7,b);IA(a);}
function Cg(a,b){CL(E(a.e7,b),10);IA(a);}
function W7(a,b){CL(BX(a.e7,b),10);IA(a);}
function Zq(a){U6(a,10);}
function IA(a){var b;b=a.e7.bH<=a.iM.data.length?a.iM:$rt_createCharArray(a.e7.bH);Vk(a.e7,0,a.e7.bH,b,0);L$(a,b,0,a.e7.bH);Xd(a.e7,0);}
function Na(){Dj.call(this);}
function AGK(a,b){$rt_putStderr(b);}
function X$(){var a=this;C.call(a);a.bk=0.0;a.bl=0.0;a.bj=0.0;}
function BC(a,b,c){var d=new X$();ANT(d,a,b,c);return d;}
function ANT(a,b,c,d){a.bk=b;a.bl=c;a.bj=d;}
function LR(a,b){return BC(a.bk-b.bk,a.bl-b.bl,a.bj-b.bj);}
function GQ(a){var b;b=EO(a.bk*a.bk+a.bl*a.bl+a.bj*a.bj);return BC(a.bk/b,a.bl/b,a.bj/b);}
function Ww(){C.call(this);}
function Bn(b){return Math.sin(b);}
function Bo(b){return Math.cos(b);}
function EO(b){return Math.sqrt(b);}
function C3(b){return Math.floor(b);}
function CF(b,c){return Math.pow(b,c);}
function CJ(){return ANE();}
function ANE(){return Math.random();}
function BY(b,c){if(b<c)c=b;return c;}
function CB(b,c){if(b>c)c=b;return c;}
function AKg(b,c){if(b>c)c=b;return c;}
function SK(b){if(b<=0)b= -b;return b;}
function US(){C.call(this);}
function ALy(){return {};}
function Nd(){}
function Tm(){C.call(this);}
function HL(){var a=this;C.call(a);a.cK=0;a.i5=0;a.jJ=0;a.d7=0;a.dU=null;a.ku=null;a.jG=null;a.hF=null;a.hD=null;a.o_=null;a.pa=null;a.oo=null;a.ov=null;a.iW=null;a.lK=0;a.by=0;a.bx=0;a.gh=null;a.cc=null;a.b8=0;a.bJ=0;a.W=0;a.li=0;a.m9=null;a.m=null;}
var ASL=null;var ASM=null;function HR(a){a.cK=0;a.by=0;a.bx=0;a.W=0;a.bJ=0;if(a.li)a.m.dW.gH();}
function T3(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;c=a.m.n;d=a.m.w;e=a.bx;f=a.by;g=a.W;h=g>=a.bJ?a.b8-g|0:(a.bJ-g|0)-1|0;a:{b:{c:{d:{e:while(true){f:{g:{h:{i:{j:{switch(a.cK){case 2:break f;case 9:a.bx=e;a.by=f;a.m.w=d;i=a.m;i.u=Long_add(i.u,Long_fromInt(c-a.m.n|0));a.m.n=c;a.W=g;return BO(a,(-3));case 0:break j;case 1:break;case 3:while(f<14){if(!d){a.bx=e;a.by=f;a.m.w=d;i=a.m;i.u=Long_add(i.u,Long_fromInt(c-a.m.n|0));a.m.n=c;a.W=g;return BO(a,b);}b=0;d=d+(-1)|0;j=a.m.bU.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+
8|0;c=k;}k=e&16383;a.jJ=k;l=k&31;if(l>29)break d;k=k>>5&31;if(k>29)break d;k:{k=(258+l|0)+k|0;if(!(a.dU!==null&&a.dU.data.length>=k))a.dU=$rt_createIntArray(k);else{l=0;while(true){if(l>=k)break k;a.dU.data[l]=0;l=l+1|0;}}}e=e>>>14;f=f+(-14)|0;a.d7=0;a.cK=4;break i;case 4:break i;case 5:break h;case 6:break g;case 7:break b;case 8:break a;default:a.bx=e;a.by=f;a.m.w=d;i=a.m;i.u=Long_add(i.u,Long_fromInt(c-a.m.n|0));a.m.n=c;a.W=g;return BO(a,(-2));}while(f<32){if(!d){a.bx=e;a.by=f;a.m.w=d;i=a.m;i.u=Long_add(i.u,
Long_fromInt(c-a.m.n|0));a.m.n=c;a.W=g;return BO(a,b);}b=0;d=d+(-1)|0;j=a.m.bU.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}k=(e^(-1))>>>16&65535;l=e&65535;if(k!=l){a.cK=9;a.m.bO=B(264);a.bx=e;a.by=f;a.m.w=d;i=a.m;i.u=Long_add(i.u,Long_fromInt(c-a.m.n|0));a.m.n=c;a.W=g;return BO(a,(-3));}a.i5=l;f=0;a.cK=a.i5?2:!a.lK?0:7;e=f;continue e;}while(f<3){if(!d){a.bx=e;a.by=f;a.m.w=d;i=a.m;i.u=Long_add(i.u,Long_fromInt(c-a.m.n|0));a.m.n=c;a.W=g;return BO(a,b);}b=0;d=d+(-1)|0;j=a.m.bU.data;k=c+1|0;e=e|(j[c]&255)<<f;f=
f+8|0;c=k;}l:{m=e&7;a.lK=m&1;switch(m>>>1){case 0:k=e>>>3;l=f+(-3)|0;n=l&7;e=k>>>n;f=l-n|0;a.cK=1;break l;case 1:YS(a.hF,a.hD,a.o_,a.pa,a.m);RG(a.iW,a.hF.data[0],a.hD.data[0],a.o_.data[0],0,a.pa.data[0],0);e=e>>>3;f=f+(-3)|0;a.cK=6;break l;case 2:e=e>>>3;f=f+(-3)|0;a.cK=3;break l;case 3:b=e>>>3;k=f+(-3)|0;a.cK=9;a.m.bO=B(265);a.bx=b;a.by=k;a.m.w=d;i=a.m;i.u=Long_add(i.u,Long_fromInt(c-a.m.n|0));a.m.n=c;a.W=g;return BO(a,(-3));default:}}continue e;}while(a.d7<(4+(a.jJ>>>10)|0)){while(f<3){if(!d){a.bx=e;a.by=
f;a.m.w=d;i=a.m;i.u=Long_add(i.u,Long_fromInt(c-a.m.n|0));a.m.n=c;a.W=g;return BO(a,b);}b=0;d=d+(-1)|0;j=a.m.bU.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}o=a.dU.data;j=ASM.data;k=a.d7;a.d7=k+1|0;o[j[k]]=e&7;e=e>>>3;f=f+(-3)|0;}while(a.d7<19){o=a.dU.data;j=ASM.data;k=a.d7;a.d7=k+1|0;o[j[k]]=0;}a.ku.data[0]=7;k=ZO(a.m9,a.dU,a.ku,a.jG,a.gh,a.m);if(k){if(k==(-3)){a.dU=null;a.cK=9;}a.bx=e;a.by=f;a.m.w=d;i=a.m;i.u=Long_add(i.u,Long_fromInt(c-a.m.n|0));a.m.n=c;a.W=g;return BO(a,k);}a.d7=0;a.cK=5;}while(true){k=a.jJ;if
(a.d7>=((258+(k&31)|0)+(k>>5&31)|0))break;k=a.ku.data[0];while(f<k){if(!d){a.bx=e;a.by=f;a.m.w=d;i=a.m;i.u=Long_add(i.u,Long_fromInt(c-a.m.n|0));a.m.n=c;a.W=g;return BO(a,b);}b=0;d=d+(-1)|0;j=a.m.bU.data;l=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=l;}k=a.gh.data[((a.jG.data[0]+(e&ASL.data[k])|0)*3|0)+1|0];n=a.gh.data[((a.jG.data[0]+(e&ASL.data[k])|0)*3|0)+2|0];l=BN(n,16);if(l<0){e=e>>>k;f=f-k|0;j=a.dU.data;k=a.d7;a.d7=k+1|0;j[k]=n;}else{p=BN(n,18);q=!p?7:n-14|0;p=p?3:11;while(f<(k+q|0)){if(!d){a.bx=e;a.by=f;a.m.w=d;i
=a.m;i.u=Long_add(i.u,Long_fromInt(c-a.m.n|0));a.m.n=c;a.W=g;return BO(a,b);}b=0;d=d+(-1)|0;j=a.m.bU.data;n=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=n;}n=e>>>k;k=f-k|0;p=p+(n&ASL.data[q])|0;e=n>>>q;f=k-q|0;h=a.d7;q=a.jJ;if((h+p|0)>((258+(q&31)|0)+(q>>5&31)|0))break c;if(!l&&h<1)break c;k=l?0:a.dU.data[h-1|0];while(true){j=a.dU.data;l=h+1|0;j[h]=k;p=p+(-1)|0;if(!p)break;h=l;}a.d7=l;}}a.jG.data[0]=(-1);a.hF.data[0]=9;a.hD.data[0]=6;k=a.jJ;k=To(a.m9,257+(k&31)|0,1+(k>>5&31)|0,a.dU,a.hF,a.hD,a.oo,a.ov,a.gh,a.m);if(k){if
(k==(-3)){a.dU=null;a.cK=9;}a.bx=e;a.by=f;a.m.w=d;i=a.m;i.u=Long_add(i.u,Long_fromInt(c-a.m.n|0));a.m.n=c;a.W=g;return BO(a,k);}RG(a.iW,a.hF.data[0],a.hD.data[0],a.gh,a.oo.data[0],a.gh,a.ov.data[0]);a.cK=6;}a.bx=e;a.by=f;a.m.w=d;i=a.m;i.u=Long_add(i.u,Long_fromInt(c-a.m.n|0));a.m.n=c;a.W=g;b=Wj(a.iW,b);if(b!=1)break e;b=0;VG(a.iW,a.m);c=a.m.n;d=a.m.w;e=a.bx;f=a.by;g=a.W;h=g>=a.bJ?a.b8-g|0:(a.bJ-g|0)-1|0;if(a.lK){a.cK=7;break b;}a.cK=0;continue e;}if(!d){a.bx=e;a.by=f;a.m.w=d;i=a.m;i.u=Long_add(i.u,Long_fromInt(c
-a.m.n|0));a.m.n=c;a.W=g;return BO(a,b);}if(!h){if(g==a.b8&&a.bJ){g=0;h=g>=a.bJ?a.b8-g|0:(a.bJ-g|0)-1|0;}if(!h){a.W=g;b=BO(a,b);g=a.W;h=g>=a.bJ?a.b8-g|0:(a.bJ-g|0)-1|0;if(g==a.b8&&a.bJ){g=0;h=g>=a.bJ?a.b8-g|0:(a.bJ-g|0)-1|0;}if(!h){a.bx=e;a.by=f;a.m.w=d;i=a.m;i.u=Long_add(i.u,Long_fromInt(c-a.m.n|0));a.m.n=c;a.W=g;return BO(a,b);}}}b=0;k=a.i5;if(k>d)k=d;if(k>h)k=h;CM(a.m.bU,c,a.cc,g,k);c=c+k|0;d=d-k|0;g=g+k|0;h=h-k|0;k=a.i5-k|0;a.i5=k;if(k)continue;a.cK=!a.lK?0:7;}return BO(a,b);}a.cK=9;a.m.bO=B(266);a.bx=e;a.by
=f;a.m.w=d;i=a.m;i.u=Long_add(i.u,Long_fromInt(c-a.m.n|0));a.m.n=c;a.W=g;return BO(a,(-3));}a.dU=null;a.cK=9;a.m.bO=B(267);a.bx=e;a.by=f;a.m.w=d;i=a.m;i.u=Long_add(i.u,Long_fromInt(c-a.m.n|0));a.m.n=c;a.W=g;return BO(a,(-3));}a.W=g;b=BO(a,b);g=a.W;if(a.bJ!=a.W){a.bx=e;a.by=f;a.m.w=d;i=a.m;i.u=Long_add(i.u,Long_fromInt(c-a.m.n|0));a.m.n=c;a.W=g;return BO(a,b);}a.cK=8;}a.bx=e;a.by=f;a.m.w=d;i=a.m;i.u=Long_add(i.u,Long_fromInt(c-a.m.n|0));a.m.n=c;a.W=g;return BO(a,1);}
function R$(a){HR(a);a.cc=null;a.gh=null;}
function BO(a,b){var c,d,e,f,g;c=a.m.ja;d=a.bJ;e=(d>a.W?a.b8:a.W)-d|0;if(e>a.m.fk)e=a.m.fk;if(e&&b==(-5))b=0;f=a.m;f.fk=f.fk-e|0;f=a.m;f.ig=Long_add(f.ig,Long_fromInt(e));if(a.li&&e>0)a.m.dW.gS(a.cc,d,e);CM(a.cc,d,a.m.n2,c,e);c=c+e|0;g=d+e|0;if(g==a.b8){if(a.W==a.b8)a.W=0;d=a.W-0|0;if(d>a.m.fk)d=a.m.fk;if(d&&b==(-5))b=0;f=a.m;f.fk=f.fk-d|0;f=a.m;f.ig=Long_add(f.ig,Long_fromInt(d));if(a.li&&d>0)a.m.dW.gS(a.cc,0,d);CM(a.cc,0,a.m.n2,c,d);c=c+d|0;g=0+d|0;}a.m.ja=c;a.bJ=g;return b;}
function St(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;ASL=b;b=$rt_createIntArray(19);c=b.data;c[0]=16;c[1]=17;c[2]=18;c[3]=0;c[4]=8;c[5]=7;c[6]=9;c[7]=6;c[8]=10;c[9]=5;c[10]=11;c[11]=4;c[12]=12;c[13]=3;c[14]=13;c[15]=2;c[16]=14;c[17]=1;c[18]=15;ASM=b;}
function Yd(){C.call(this);}
function Y2(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(ASN());}return b.data.length;}
function Y7(b,c){if(b===null){b=new Dm;R(b);H(b);}if(b===F($rt_voidcls())){b=new BW;R(b);H(b);}if(c>=0)return AMR(b.gM,c);b=new Sl;R(b);H(b);}
function AMR(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function DY(){var a=this;C.call(a);a.fY=null;a.f7=null;a.dp=null;a.dK=null;a.gQ=null;a.e8=null;}
var ASO=null;var ASP=null;var ASQ=null;var ASR=null;var ASS=null;var AST=null;function JH(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;m=0;n=d;while(true){o=b.data;p=a.dp.data;q=o[c+m|0];p[q]=p[q]+1|0;m=m+1|0;n=n+(-1)|0;if(!n)break;}if(a.dp.data[0]==d){b=h.data;f=i.data;b[0]=(-1);f[0]=0;return 0;}i=i.data;r=i[0];s=1;a:{while(true){if(s>15)break a;if(a.dp.data[s])break;s=s+1|0;}}if(r<s)r=s;t=15;b:{while(true){if(!t)break b;if(a.dp.data[t])break;t=t+(-1)|0;}}if(r>t)r=t;i[0]=r;u=1<<s;m
=s;while(true){if(m>=t){v=u-a.dp.data[t]|0;if(v<0)return (-3);b=a.dp.data;b[t]=b[t]+v|0;b=a.e8.data;u=0;b[1]=u;m=1;w=2;x=t;while(true){x=x+(-1)|0;if(!x)break;i=a.e8.data;u=u+a.dp.data[m]|0;i[w]=u;w=w+1|0;m=m+1|0;}m=0;w=0;while(true){x=o[c+w|0];if(x){i=l.data;b=a.e8.data;q=b[x];b[x]=q+1|0;i[q]=m;}w=w+1|0;m=m+1|0;if(m>=d)break;}u=a.e8.data[t];b=a.e8.data;m=0;b[0]=m;w=0;y=(-1);z= -r;a.gQ.data[0]=0;ba=0;bb=0;c:while(true){if(s>t)return v&&t!=1?(-5):0;bc=a.dp.data[s];while(true){bd=bc+(-1)|0;if(!bc)break;n=bd+1|
0;while(true){be=z+r|0;if(s<=be)break;y=y+1|0;x=t-be|0;if(x>r)x=r;d:{bc=s-be|0;c=1<<bc;if(c>n){q=c-n|0;if(bc<x){c=s;while(true){bc=bc+1|0;if(bc>=x)break;d=q<<1;b=a.dp.data;c=c+1|0;if(d<=b[c])break d;q=d-a.dp.data[c]|0;}}}}b=k.data;bb=1<<bc;if((b[0]+bb|0)>1440)break c;i=a.gQ.data;ba=b[0];i[y]=ba;b[0]=b[0]+bb|0;if(!y){h.data[0]=ba;z=be;continue;}a.e8.data[y]=m;a.dK.data[0]=bc<<24>>24;a.dK.data[1]=r<<24>>24;c=m>>>(be-r|0);i=a.dK.data;b=a.gQ.data;q=y-1|0;i[2]=(ba-b[q]|0)-c|0;CM(a.dK,0,j,(a.gQ.data[q]+c|0)*3|0,3);z
=be;}b=a.dK.data;x=s-z|0;b[1]=x<<24>>24;if(w>=u)a.dK.data[0]=192;else{p=l.data;if(p[w]>=e){i=g.data;o=f.data;a.dK.data[0]=((i[p[w]-e|0]+16|0)+64|0)<<24>>24;b=a.dK.data;d=w+1|0;b[2]=o[p[w]-e|0];w=d;}else{b=a.dK;b.data[0]=(p[w]>=256?96:0)<<24>>24;b=a.dK.data;d=w+1|0;b[2]=p[w];w=d;}}q=1<<x;c=m>>>z;while(c<bb){CM(a.dK,0,j,(ba+c|0)*3|0,3);c=c+q|0;}c=1<<(s-1|0);while(m&c){m=m^c;c=c>>>1;}m=m^c;x=(1<<z)-1|0;while((m&x)!=a.e8.data[y]){y=y+(-1)|0;z=z-r|0;x=(1<<z)-1|0;}bc=bd;}s=s+1|0;}return (-3);}q=u-a.dp.data[m]|0;if
(q<0)break;m=m+1|0;u=q<<1;}return (-3);}
function ZO(a,b,c,d,e,f){var g;II(a,19);a.fY.data[0]=0;g=JH(a,b,0,19,19,null,null,d,c,e,a.fY,a.f7);if(g==(-3))f.bO=B(268);else if(!(g!=(-5)&&c.data[0])){f.bO=B(269);g=(-3);}return g;}
function To(a,b,c,d,e,f,g,h,i,j){var k;II(a,288);a.fY.data[0]=0;k=JH(a,d,0,b,257,ASQ,ASR,g,e,i,a.fY,a.f7);if(!k&&e.data[0]){II(a,288);c=JH(a,d,b,c,0,ASS,AST,h,f,i,a.fY,a.f7);if(!c&&!(!f.data[0]&&b>257))return 0;if(c==(-3))j.bO=B(270);else if(c==(-5)){j.bO=B(271);c=(-3);}else if(c!=(-4)){j.bO=B(272);c=(-3);}return c;}if(k==(-3))j.bO=B(273);else if(k!=(-4)){j.bO=B(274);k=(-3);}return k;}
function YS(b,c,d,e,f){e=e.data;d=d.data;c=c.data;b.data[0]=9;c[0]=5;d[0]=ASO;e[0]=ASP;return 0;}
function II(a,b){var c;if(a.fY===null){a.fY=$rt_createIntArray(1);a.f7=$rt_createIntArray(b);a.dp=$rt_createIntArray(16);a.dK=$rt_createIntArray(3);a.gQ=$rt_createIntArray(15);a.e8=$rt_createIntArray(16);}if(a.f7.data.length<b)a.f7=$rt_createIntArray(b);c=0;while(c<b){a.f7.data[c]=0;c=c+1|0;}c=0;while(c<16){a.dp.data[c]=0;c=c+1|0;}c=0;while(c<3){a.dK.data[c]=0;c=c+1|0;}CM(a.dp,0,a.gQ,0,15);CM(a.dp,0,a.e8,0,16);}
function Ye(){var b,c;b=$rt_createIntArray(1536);c=b.data;c[0]=96;c[1]=7;c[2]=256;c[3]=0;c[4]=8;c[5]=80;c[6]=0;c[7]=8;c[8]=16;c[9]=84;c[10]=8;c[11]=115;c[12]=82;c[13]=7;c[14]=31;c[15]=0;c[16]=8;c[17]=112;c[18]=0;c[19]=8;c[20]=48;c[21]=0;c[22]=9;c[23]=192;c[24]=80;c[25]=7;c[26]=10;c[27]=0;c[28]=8;c[29]=96;c[30]=0;c[31]=8;c[32]=32;c[33]=0;c[34]=9;c[35]=160;c[36]=0;c[37]=8;c[38]=0;c[39]=0;c[40]=8;c[41]=128;c[42]=0;c[43]=8;c[44]=64;c[45]=0;c[46]=9;c[47]=224;c[48]=80;c[49]=7;c[50]=6;c[51]=0;c[52]=8;c[53]=88;c[54]
=0;c[55]=8;c[56]=24;c[57]=0;c[58]=9;c[59]=144;c[60]=83;c[61]=7;c[62]=59;c[63]=0;c[64]=8;c[65]=120;c[66]=0;c[67]=8;c[68]=56;c[69]=0;c[70]=9;c[71]=208;c[72]=81;c[73]=7;c[74]=17;c[75]=0;c[76]=8;c[77]=104;c[78]=0;c[79]=8;c[80]=40;c[81]=0;c[82]=9;c[83]=176;c[84]=0;c[85]=8;c[86]=8;c[87]=0;c[88]=8;c[89]=136;c[90]=0;c[91]=8;c[92]=72;c[93]=0;c[94]=9;c[95]=240;c[96]=80;c[97]=7;c[98]=4;c[99]=0;c[100]=8;c[101]=84;c[102]=0;c[103]=8;c[104]=20;c[105]=85;c[106]=8;c[107]=227;c[108]=83;c[109]=7;c[110]=43;c[111]=0;c[112]=8;c[113]
=116;c[114]=0;c[115]=8;c[116]=52;c[117]=0;c[118]=9;c[119]=200;c[120]=81;c[121]=7;c[122]=13;c[123]=0;c[124]=8;c[125]=100;c[126]=0;c[127]=8;c[128]=36;c[129]=0;c[130]=9;c[131]=168;c[132]=0;c[133]=8;c[134]=4;c[135]=0;c[136]=8;c[137]=132;c[138]=0;c[139]=8;c[140]=68;c[141]=0;c[142]=9;c[143]=232;c[144]=80;c[145]=7;c[146]=8;c[147]=0;c[148]=8;c[149]=92;c[150]=0;c[151]=8;c[152]=28;c[153]=0;c[154]=9;c[155]=152;c[156]=84;c[157]=7;c[158]=83;c[159]=0;c[160]=8;c[161]=124;c[162]=0;c[163]=8;c[164]=60;c[165]=0;c[166]=9;c[167]
=216;c[168]=82;c[169]=7;c[170]=23;c[171]=0;c[172]=8;c[173]=108;c[174]=0;c[175]=8;c[176]=44;c[177]=0;c[178]=9;c[179]=184;c[180]=0;c[181]=8;c[182]=12;c[183]=0;c[184]=8;c[185]=140;c[186]=0;c[187]=8;c[188]=76;c[189]=0;c[190]=9;c[191]=248;c[192]=80;c[193]=7;c[194]=3;c[195]=0;c[196]=8;c[197]=82;c[198]=0;c[199]=8;c[200]=18;c[201]=85;c[202]=8;c[203]=163;c[204]=83;c[205]=7;c[206]=35;c[207]=0;c[208]=8;c[209]=114;c[210]=0;c[211]=8;c[212]=50;c[213]=0;c[214]=9;c[215]=196;c[216]=81;c[217]=7;c[218]=11;c[219]=0;c[220]=8;c[221]
=98;c[222]=0;c[223]=8;c[224]=34;c[225]=0;c[226]=9;c[227]=164;c[228]=0;c[229]=8;c[230]=2;c[231]=0;c[232]=8;c[233]=130;c[234]=0;c[235]=8;c[236]=66;c[237]=0;c[238]=9;c[239]=228;c[240]=80;c[241]=7;c[242]=7;c[243]=0;c[244]=8;c[245]=90;c[246]=0;c[247]=8;c[248]=26;c[249]=0;c[250]=9;c[251]=148;c[252]=84;c[253]=7;c[254]=67;c[255]=0;c[256]=8;c[257]=122;c[258]=0;c[259]=8;c[260]=58;c[261]=0;c[262]=9;c[263]=212;c[264]=82;c[265]=7;c[266]=19;c[267]=0;c[268]=8;c[269]=106;c[270]=0;c[271]=8;c[272]=42;c[273]=0;c[274]=9;c[275]
=180;c[276]=0;c[277]=8;c[278]=10;c[279]=0;c[280]=8;c[281]=138;c[282]=0;c[283]=8;c[284]=74;c[285]=0;c[286]=9;c[287]=244;c[288]=80;c[289]=7;c[290]=5;c[291]=0;c[292]=8;c[293]=86;c[294]=0;c[295]=8;c[296]=22;c[297]=192;c[298]=8;c[299]=0;c[300]=83;c[301]=7;c[302]=51;c[303]=0;c[304]=8;c[305]=118;c[306]=0;c[307]=8;c[308]=54;c[309]=0;c[310]=9;c[311]=204;c[312]=81;c[313]=7;c[314]=15;c[315]=0;c[316]=8;c[317]=102;c[318]=0;c[319]=8;c[320]=38;c[321]=0;c[322]=9;c[323]=172;c[324]=0;c[325]=8;c[326]=6;c[327]=0;c[328]=8;c[329]
=134;c[330]=0;c[331]=8;c[332]=70;c[333]=0;c[334]=9;c[335]=236;c[336]=80;c[337]=7;c[338]=9;c[339]=0;c[340]=8;c[341]=94;c[342]=0;c[343]=8;c[344]=30;c[345]=0;c[346]=9;c[347]=156;c[348]=84;c[349]=7;c[350]=99;c[351]=0;c[352]=8;c[353]=126;c[354]=0;c[355]=8;c[356]=62;c[357]=0;c[358]=9;c[359]=220;c[360]=82;c[361]=7;c[362]=27;c[363]=0;c[364]=8;c[365]=110;c[366]=0;c[367]=8;c[368]=46;c[369]=0;c[370]=9;c[371]=188;c[372]=0;c[373]=8;c[374]=14;c[375]=0;c[376]=8;c[377]=142;c[378]=0;c[379]=8;c[380]=78;c[381]=0;c[382]=9;c[383]
=252;c[384]=96;c[385]=7;c[386]=256;c[387]=0;c[388]=8;c[389]=81;c[390]=0;c[391]=8;c[392]=17;c[393]=85;c[394]=8;c[395]=131;c[396]=82;c[397]=7;c[398]=31;c[399]=0;c[400]=8;c[401]=113;c[402]=0;c[403]=8;c[404]=49;c[405]=0;c[406]=9;c[407]=194;c[408]=80;c[409]=7;c[410]=10;c[411]=0;c[412]=8;c[413]=97;c[414]=0;c[415]=8;c[416]=33;c[417]=0;c[418]=9;c[419]=162;c[420]=0;c[421]=8;c[422]=1;c[423]=0;c[424]=8;c[425]=129;c[426]=0;c[427]=8;c[428]=65;c[429]=0;c[430]=9;c[431]=226;c[432]=80;c[433]=7;c[434]=6;c[435]=0;c[436]=8;c[437]
=89;c[438]=0;c[439]=8;c[440]=25;c[441]=0;c[442]=9;c[443]=146;c[444]=83;c[445]=7;c[446]=59;c[447]=0;c[448]=8;c[449]=121;c[450]=0;c[451]=8;c[452]=57;c[453]=0;c[454]=9;c[455]=210;c[456]=81;c[457]=7;c[458]=17;c[459]=0;c[460]=8;c[461]=105;c[462]=0;c[463]=8;c[464]=41;c[465]=0;c[466]=9;c[467]=178;c[468]=0;c[469]=8;c[470]=9;c[471]=0;c[472]=8;c[473]=137;c[474]=0;c[475]=8;c[476]=73;c[477]=0;c[478]=9;c[479]=242;c[480]=80;c[481]=7;c[482]=4;c[483]=0;c[484]=8;c[485]=85;c[486]=0;c[487]=8;c[488]=21;c[489]=80;c[490]=8;c[491]
=258;c[492]=83;c[493]=7;c[494]=43;c[495]=0;c[496]=8;c[497]=117;c[498]=0;c[499]=8;c[500]=53;c[501]=0;c[502]=9;c[503]=202;c[504]=81;c[505]=7;c[506]=13;c[507]=0;c[508]=8;c[509]=101;c[510]=0;c[511]=8;c[512]=37;c[513]=0;c[514]=9;c[515]=170;c[516]=0;c[517]=8;c[518]=5;c[519]=0;c[520]=8;c[521]=133;c[522]=0;c[523]=8;c[524]=69;c[525]=0;c[526]=9;c[527]=234;c[528]=80;c[529]=7;c[530]=8;c[531]=0;c[532]=8;c[533]=93;c[534]=0;c[535]=8;c[536]=29;c[537]=0;c[538]=9;c[539]=154;c[540]=84;c[541]=7;c[542]=83;c[543]=0;c[544]=8;c[545]
=125;c[546]=0;c[547]=8;c[548]=61;c[549]=0;c[550]=9;c[551]=218;c[552]=82;c[553]=7;c[554]=23;c[555]=0;c[556]=8;c[557]=109;c[558]=0;c[559]=8;c[560]=45;c[561]=0;c[562]=9;c[563]=186;c[564]=0;c[565]=8;c[566]=13;c[567]=0;c[568]=8;c[569]=141;c[570]=0;c[571]=8;c[572]=77;c[573]=0;c[574]=9;c[575]=250;c[576]=80;c[577]=7;c[578]=3;c[579]=0;c[580]=8;c[581]=83;c[582]=0;c[583]=8;c[584]=19;c[585]=85;c[586]=8;c[587]=195;c[588]=83;c[589]=7;c[590]=35;c[591]=0;c[592]=8;c[593]=115;c[594]=0;c[595]=8;c[596]=51;c[597]=0;c[598]=9;c[599]
=198;c[600]=81;c[601]=7;c[602]=11;c[603]=0;c[604]=8;c[605]=99;c[606]=0;c[607]=8;c[608]=35;c[609]=0;c[610]=9;c[611]=166;c[612]=0;c[613]=8;c[614]=3;c[615]=0;c[616]=8;c[617]=131;c[618]=0;c[619]=8;c[620]=67;c[621]=0;c[622]=9;c[623]=230;c[624]=80;c[625]=7;c[626]=7;c[627]=0;c[628]=8;c[629]=91;c[630]=0;c[631]=8;c[632]=27;c[633]=0;c[634]=9;c[635]=150;c[636]=84;c[637]=7;c[638]=67;c[639]=0;c[640]=8;c[641]=123;c[642]=0;c[643]=8;c[644]=59;c[645]=0;c[646]=9;c[647]=214;c[648]=82;c[649]=7;c[650]=19;c[651]=0;c[652]=8;c[653]
=107;c[654]=0;c[655]=8;c[656]=43;c[657]=0;c[658]=9;c[659]=182;c[660]=0;c[661]=8;c[662]=11;c[663]=0;c[664]=8;c[665]=139;c[666]=0;c[667]=8;c[668]=75;c[669]=0;c[670]=9;c[671]=246;c[672]=80;c[673]=7;c[674]=5;c[675]=0;c[676]=8;c[677]=87;c[678]=0;c[679]=8;c[680]=23;c[681]=192;c[682]=8;c[683]=0;c[684]=83;c[685]=7;c[686]=51;c[687]=0;c[688]=8;c[689]=119;c[690]=0;c[691]=8;c[692]=55;c[693]=0;c[694]=9;c[695]=206;c[696]=81;c[697]=7;c[698]=15;c[699]=0;c[700]=8;c[701]=103;c[702]=0;c[703]=8;c[704]=39;c[705]=0;c[706]=9;c[707]
=174;c[708]=0;c[709]=8;c[710]=7;c[711]=0;c[712]=8;c[713]=135;c[714]=0;c[715]=8;c[716]=71;c[717]=0;c[718]=9;c[719]=238;c[720]=80;c[721]=7;c[722]=9;c[723]=0;c[724]=8;c[725]=95;c[726]=0;c[727]=8;c[728]=31;c[729]=0;c[730]=9;c[731]=158;c[732]=84;c[733]=7;c[734]=99;c[735]=0;c[736]=8;c[737]=127;c[738]=0;c[739]=8;c[740]=63;c[741]=0;c[742]=9;c[743]=222;c[744]=82;c[745]=7;c[746]=27;c[747]=0;c[748]=8;c[749]=111;c[750]=0;c[751]=8;c[752]=47;c[753]=0;c[754]=9;c[755]=190;c[756]=0;c[757]=8;c[758]=15;c[759]=0;c[760]=8;c[761]
=143;c[762]=0;c[763]=8;c[764]=79;c[765]=0;c[766]=9;c[767]=254;c[768]=96;c[769]=7;c[770]=256;c[771]=0;c[772]=8;c[773]=80;c[774]=0;c[775]=8;c[776]=16;c[777]=84;c[778]=8;c[779]=115;c[780]=82;c[781]=7;c[782]=31;c[783]=0;c[784]=8;c[785]=112;c[786]=0;c[787]=8;c[788]=48;c[789]=0;c[790]=9;c[791]=193;c[792]=80;c[793]=7;c[794]=10;c[795]=0;c[796]=8;c[797]=96;c[798]=0;c[799]=8;c[800]=32;c[801]=0;c[802]=9;c[803]=161;c[804]=0;c[805]=8;c[806]=0;c[807]=0;c[808]=8;c[809]=128;c[810]=0;c[811]=8;c[812]=64;c[813]=0;c[814]=9;c[815]
=225;c[816]=80;c[817]=7;c[818]=6;c[819]=0;c[820]=8;c[821]=88;c[822]=0;c[823]=8;c[824]=24;c[825]=0;c[826]=9;c[827]=145;c[828]=83;c[829]=7;c[830]=59;c[831]=0;c[832]=8;c[833]=120;c[834]=0;c[835]=8;c[836]=56;c[837]=0;c[838]=9;c[839]=209;c[840]=81;c[841]=7;c[842]=17;c[843]=0;c[844]=8;c[845]=104;c[846]=0;c[847]=8;c[848]=40;c[849]=0;c[850]=9;c[851]=177;c[852]=0;c[853]=8;c[854]=8;c[855]=0;c[856]=8;c[857]=136;c[858]=0;c[859]=8;c[860]=72;c[861]=0;c[862]=9;c[863]=241;c[864]=80;c[865]=7;c[866]=4;c[867]=0;c[868]=8;c[869]
=84;c[870]=0;c[871]=8;c[872]=20;c[873]=85;c[874]=8;c[875]=227;c[876]=83;c[877]=7;c[878]=43;c[879]=0;c[880]=8;c[881]=116;c[882]=0;c[883]=8;c[884]=52;c[885]=0;c[886]=9;c[887]=201;c[888]=81;c[889]=7;c[890]=13;c[891]=0;c[892]=8;c[893]=100;c[894]=0;c[895]=8;c[896]=36;c[897]=0;c[898]=9;c[899]=169;c[900]=0;c[901]=8;c[902]=4;c[903]=0;c[904]=8;c[905]=132;c[906]=0;c[907]=8;c[908]=68;c[909]=0;c[910]=9;c[911]=233;c[912]=80;c[913]=7;c[914]=8;c[915]=0;c[916]=8;c[917]=92;c[918]=0;c[919]=8;c[920]=28;c[921]=0;c[922]=9;c[923]
=153;c[924]=84;c[925]=7;c[926]=83;c[927]=0;c[928]=8;c[929]=124;c[930]=0;c[931]=8;c[932]=60;c[933]=0;c[934]=9;c[935]=217;c[936]=82;c[937]=7;c[938]=23;c[939]=0;c[940]=8;c[941]=108;c[942]=0;c[943]=8;c[944]=44;c[945]=0;c[946]=9;c[947]=185;c[948]=0;c[949]=8;c[950]=12;c[951]=0;c[952]=8;c[953]=140;c[954]=0;c[955]=8;c[956]=76;c[957]=0;c[958]=9;c[959]=249;c[960]=80;c[961]=7;c[962]=3;c[963]=0;c[964]=8;c[965]=82;c[966]=0;c[967]=8;c[968]=18;c[969]=85;c[970]=8;c[971]=163;c[972]=83;c[973]=7;c[974]=35;c[975]=0;c[976]=8;c[977]
=114;c[978]=0;c[979]=8;c[980]=50;c[981]=0;c[982]=9;c[983]=197;c[984]=81;c[985]=7;c[986]=11;c[987]=0;c[988]=8;c[989]=98;c[990]=0;c[991]=8;c[992]=34;c[993]=0;c[994]=9;c[995]=165;c[996]=0;c[997]=8;c[998]=2;c[999]=0;c[1000]=8;c[1001]=130;c[1002]=0;c[1003]=8;c[1004]=66;c[1005]=0;c[1006]=9;c[1007]=229;c[1008]=80;c[1009]=7;c[1010]=7;c[1011]=0;c[1012]=8;c[1013]=90;c[1014]=0;c[1015]=8;c[1016]=26;c[1017]=0;c[1018]=9;c[1019]=149;c[1020]=84;c[1021]=7;c[1022]=67;c[1023]=0;c[1024]=8;c[1025]=122;c[1026]=0;c[1027]=8;c[1028]
=58;c[1029]=0;c[1030]=9;c[1031]=213;c[1032]=82;c[1033]=7;c[1034]=19;c[1035]=0;c[1036]=8;c[1037]=106;c[1038]=0;c[1039]=8;c[1040]=42;c[1041]=0;c[1042]=9;c[1043]=181;c[1044]=0;c[1045]=8;c[1046]=10;c[1047]=0;c[1048]=8;c[1049]=138;c[1050]=0;c[1051]=8;c[1052]=74;c[1053]=0;c[1054]=9;c[1055]=245;c[1056]=80;c[1057]=7;c[1058]=5;c[1059]=0;c[1060]=8;c[1061]=86;c[1062]=0;c[1063]=8;c[1064]=22;c[1065]=192;c[1066]=8;c[1067]=0;c[1068]=83;c[1069]=7;c[1070]=51;c[1071]=0;c[1072]=8;c[1073]=118;c[1074]=0;c[1075]=8;c[1076]=54;c[1077]
=0;c[1078]=9;c[1079]=205;c[1080]=81;c[1081]=7;c[1082]=15;c[1083]=0;c[1084]=8;c[1085]=102;c[1086]=0;c[1087]=8;c[1088]=38;c[1089]=0;c[1090]=9;c[1091]=173;c[1092]=0;c[1093]=8;c[1094]=6;c[1095]=0;c[1096]=8;c[1097]=134;c[1098]=0;c[1099]=8;c[1100]=70;c[1101]=0;c[1102]=9;c[1103]=237;c[1104]=80;c[1105]=7;c[1106]=9;c[1107]=0;c[1108]=8;c[1109]=94;c[1110]=0;c[1111]=8;c[1112]=30;c[1113]=0;c[1114]=9;c[1115]=157;c[1116]=84;c[1117]=7;c[1118]=99;c[1119]=0;c[1120]=8;c[1121]=126;c[1122]=0;c[1123]=8;c[1124]=62;c[1125]=0;c[1126]
=9;c[1127]=221;c[1128]=82;c[1129]=7;c[1130]=27;c[1131]=0;c[1132]=8;c[1133]=110;c[1134]=0;c[1135]=8;c[1136]=46;c[1137]=0;c[1138]=9;c[1139]=189;c[1140]=0;c[1141]=8;c[1142]=14;c[1143]=0;c[1144]=8;c[1145]=142;c[1146]=0;c[1147]=8;c[1148]=78;c[1149]=0;c[1150]=9;c[1151]=253;c[1152]=96;c[1153]=7;c[1154]=256;c[1155]=0;c[1156]=8;c[1157]=81;c[1158]=0;c[1159]=8;c[1160]=17;c[1161]=85;c[1162]=8;c[1163]=131;c[1164]=82;c[1165]=7;c[1166]=31;c[1167]=0;c[1168]=8;c[1169]=113;c[1170]=0;c[1171]=8;c[1172]=49;c[1173]=0;c[1174]=9;c[1175]
=195;c[1176]=80;c[1177]=7;c[1178]=10;c[1179]=0;c[1180]=8;c[1181]=97;c[1182]=0;c[1183]=8;c[1184]=33;c[1185]=0;c[1186]=9;c[1187]=163;c[1188]=0;c[1189]=8;c[1190]=1;c[1191]=0;c[1192]=8;c[1193]=129;c[1194]=0;c[1195]=8;c[1196]=65;c[1197]=0;c[1198]=9;c[1199]=227;c[1200]=80;c[1201]=7;c[1202]=6;c[1203]=0;c[1204]=8;c[1205]=89;c[1206]=0;c[1207]=8;c[1208]=25;c[1209]=0;c[1210]=9;c[1211]=147;c[1212]=83;c[1213]=7;c[1214]=59;c[1215]=0;c[1216]=8;c[1217]=121;c[1218]=0;c[1219]=8;c[1220]=57;c[1221]=0;c[1222]=9;c[1223]=211;c[1224]
=81;c[1225]=7;c[1226]=17;c[1227]=0;c[1228]=8;c[1229]=105;c[1230]=0;c[1231]=8;c[1232]=41;c[1233]=0;c[1234]=9;c[1235]=179;c[1236]=0;c[1237]=8;c[1238]=9;c[1239]=0;c[1240]=8;c[1241]=137;c[1242]=0;c[1243]=8;c[1244]=73;c[1245]=0;c[1246]=9;c[1247]=243;c[1248]=80;c[1249]=7;c[1250]=4;c[1251]=0;c[1252]=8;c[1253]=85;c[1254]=0;c[1255]=8;c[1256]=21;c[1257]=80;c[1258]=8;c[1259]=258;c[1260]=83;c[1261]=7;c[1262]=43;c[1263]=0;c[1264]=8;c[1265]=117;c[1266]=0;c[1267]=8;c[1268]=53;c[1269]=0;c[1270]=9;c[1271]=203;c[1272]=81;c[1273]
=7;c[1274]=13;c[1275]=0;c[1276]=8;c[1277]=101;c[1278]=0;c[1279]=8;c[1280]=37;c[1281]=0;c[1282]=9;c[1283]=171;c[1284]=0;c[1285]=8;c[1286]=5;c[1287]=0;c[1288]=8;c[1289]=133;c[1290]=0;c[1291]=8;c[1292]=69;c[1293]=0;c[1294]=9;c[1295]=235;c[1296]=80;c[1297]=7;c[1298]=8;c[1299]=0;c[1300]=8;c[1301]=93;c[1302]=0;c[1303]=8;c[1304]=29;c[1305]=0;c[1306]=9;c[1307]=155;c[1308]=84;c[1309]=7;c[1310]=83;c[1311]=0;c[1312]=8;c[1313]=125;c[1314]=0;c[1315]=8;c[1316]=61;c[1317]=0;c[1318]=9;c[1319]=219;c[1320]=82;c[1321]=7;c[1322]
=23;c[1323]=0;c[1324]=8;c[1325]=109;c[1326]=0;c[1327]=8;c[1328]=45;c[1329]=0;c[1330]=9;c[1331]=187;c[1332]=0;c[1333]=8;c[1334]=13;c[1335]=0;c[1336]=8;c[1337]=141;c[1338]=0;c[1339]=8;c[1340]=77;c[1341]=0;c[1342]=9;c[1343]=251;c[1344]=80;c[1345]=7;c[1346]=3;c[1347]=0;c[1348]=8;c[1349]=83;c[1350]=0;c[1351]=8;c[1352]=19;c[1353]=85;c[1354]=8;c[1355]=195;c[1356]=83;c[1357]=7;c[1358]=35;c[1359]=0;c[1360]=8;c[1361]=115;c[1362]=0;c[1363]=8;c[1364]=51;c[1365]=0;c[1366]=9;c[1367]=199;c[1368]=81;c[1369]=7;c[1370]=11;c[1371]
=0;c[1372]=8;c[1373]=99;c[1374]=0;c[1375]=8;c[1376]=35;c[1377]=0;c[1378]=9;c[1379]=167;c[1380]=0;c[1381]=8;c[1382]=3;c[1383]=0;c[1384]=8;c[1385]=131;c[1386]=0;c[1387]=8;c[1388]=67;c[1389]=0;c[1390]=9;c[1391]=231;c[1392]=80;c[1393]=7;c[1394]=7;c[1395]=0;c[1396]=8;c[1397]=91;c[1398]=0;c[1399]=8;c[1400]=27;c[1401]=0;c[1402]=9;c[1403]=151;c[1404]=84;c[1405]=7;c[1406]=67;c[1407]=0;c[1408]=8;c[1409]=123;c[1410]=0;c[1411]=8;c[1412]=59;c[1413]=0;c[1414]=9;c[1415]=215;c[1416]=82;c[1417]=7;c[1418]=19;c[1419]=0;c[1420]
=8;c[1421]=107;c[1422]=0;c[1423]=8;c[1424]=43;c[1425]=0;c[1426]=9;c[1427]=183;c[1428]=0;c[1429]=8;c[1430]=11;c[1431]=0;c[1432]=8;c[1433]=139;c[1434]=0;c[1435]=8;c[1436]=75;c[1437]=0;c[1438]=9;c[1439]=247;c[1440]=80;c[1441]=7;c[1442]=5;c[1443]=0;c[1444]=8;c[1445]=87;c[1446]=0;c[1447]=8;c[1448]=23;c[1449]=192;c[1450]=8;c[1451]=0;c[1452]=83;c[1453]=7;c[1454]=51;c[1455]=0;c[1456]=8;c[1457]=119;c[1458]=0;c[1459]=8;c[1460]=55;c[1461]=0;c[1462]=9;c[1463]=207;c[1464]=81;c[1465]=7;c[1466]=15;c[1467]=0;c[1468]=8;c[1469]
=103;c[1470]=0;c[1471]=8;c[1472]=39;c[1473]=0;c[1474]=9;c[1475]=175;c[1476]=0;c[1477]=8;c[1478]=7;c[1479]=0;c[1480]=8;c[1481]=135;c[1482]=0;c[1483]=8;c[1484]=71;c[1485]=0;c[1486]=9;c[1487]=239;c[1488]=80;c[1489]=7;c[1490]=9;c[1491]=0;c[1492]=8;c[1493]=95;c[1494]=0;c[1495]=8;c[1496]=31;c[1497]=0;c[1498]=9;c[1499]=159;c[1500]=84;c[1501]=7;c[1502]=99;c[1503]=0;c[1504]=8;c[1505]=127;c[1506]=0;c[1507]=8;c[1508]=63;c[1509]=0;c[1510]=9;c[1511]=223;c[1512]=82;c[1513]=7;c[1514]=27;c[1515]=0;c[1516]=8;c[1517]=111;c[1518]
=0;c[1519]=8;c[1520]=47;c[1521]=0;c[1522]=9;c[1523]=191;c[1524]=0;c[1525]=8;c[1526]=15;c[1527]=0;c[1528]=8;c[1529]=143;c[1530]=0;c[1531]=8;c[1532]=79;c[1533]=0;c[1534]=9;c[1535]=255;ASO=b;b=$rt_createIntArray(96);c=b.data;c[0]=80;c[1]=5;c[2]=1;c[3]=87;c[4]=5;c[5]=257;c[6]=83;c[7]=5;c[8]=17;c[9]=91;c[10]=5;c[11]=4097;c[12]=81;c[13]=5;c[14]=5;c[15]=89;c[16]=5;c[17]=1025;c[18]=85;c[19]=5;c[20]=65;c[21]=93;c[22]=5;c[23]=16385;c[24]=80;c[25]=5;c[26]=3;c[27]=88;c[28]=5;c[29]=513;c[30]=84;c[31]=5;c[32]=33;c[33]=92;c[34]
=5;c[35]=8193;c[36]=82;c[37]=5;c[38]=9;c[39]=90;c[40]=5;c[41]=2049;c[42]=86;c[43]=5;c[44]=129;c[45]=192;c[46]=5;c[47]=24577;c[48]=80;c[49]=5;c[50]=2;c[51]=87;c[52]=5;c[53]=385;c[54]=83;c[55]=5;c[56]=25;c[57]=91;c[58]=5;c[59]=6145;c[60]=81;c[61]=5;c[62]=7;c[63]=89;c[64]=5;c[65]=1537;c[66]=85;c[67]=5;c[68]=97;c[69]=93;c[70]=5;c[71]=24577;c[72]=80;c[73]=5;c[74]=4;c[75]=88;c[76]=5;c[77]=769;c[78]=84;c[79]=5;c[80]=49;c[81]=92;c[82]=5;c[83]=12289;c[84]=82;c[85]=5;c[86]=13;c[87]=90;c[88]=5;c[89]=3073;c[90]=86;c[91]
=5;c[92]=193;c[93]=192;c[94]=5;c[95]=24577;ASP=b;b=$rt_createIntArray(31);c=b.data;c[0]=3;c[1]=4;c[2]=5;c[3]=6;c[4]=7;c[5]=8;c[6]=9;c[7]=10;c[8]=11;c[9]=13;c[10]=15;c[11]=17;c[12]=19;c[13]=23;c[14]=27;c[15]=31;c[16]=35;c[17]=43;c[18]=51;c[19]=59;c[20]=67;c[21]=83;c[22]=99;c[23]=115;c[24]=131;c[25]=163;c[26]=195;c[27]=227;c[28]=258;c[29]=0;c[30]=0;ASQ=b;b=$rt_createIntArray(31);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]=0;c[5]=0;c[6]=0;c[7]=0;c[8]=1;c[9]=1;c[10]=1;c[11]=1;c[12]=2;c[13]=2;c[14]=2;c[15]=2;c[16]
=3;c[17]=3;c[18]=3;c[19]=3;c[20]=4;c[21]=4;c[22]=4;c[23]=4;c[24]=5;c[25]=5;c[26]=5;c[27]=5;c[28]=0;c[29]=112;c[30]=112;ASR=b;b=$rt_createIntArray(30);c=b.data;c[0]=1;c[1]=2;c[2]=3;c[3]=4;c[4]=5;c[5]=7;c[6]=9;c[7]=13;c[8]=17;c[9]=25;c[10]=33;c[11]=49;c[12]=65;c[13]=97;c[14]=129;c[15]=193;c[16]=257;c[17]=385;c[18]=513;c[19]=769;c[20]=1025;c[21]=1537;c[22]=2049;c[23]=3073;c[24]=4097;c[25]=6145;c[26]=8193;c[27]=12289;c[28]=16385;c[29]=24577;ASS=b;b=$rt_createIntArray(30);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]
=1;c[5]=1;c[6]=2;c[7]=2;c[8]=3;c[9]=3;c[10]=4;c[11]=4;c[12]=5;c[13]=5;c[14]=6;c[15]=6;c[16]=7;c[17]=7;c[18]=8;c[19]=8;c[20]=9;c[21]=9;c[22]=10;c[23]=10;c[24]=11;c[25]=11;c[26]=12;c[27]=12;c[28]=13;c[29]=13;AST=b;}
function Ji(){var a=this;C.call(a);a.dE=0;a.hv=0;a.dH=null;a.hi=0;a.hQ=0;a.qw=0;a.k0=0;a.kN=0;a.nP=0;a.nl=0;a.p0=null;a.pr=0;a.pg=null;a.pC=0;a.O=null;a.o=null;}
var ASU=null;function RG(a,b,c,d,e,f,g){a.dE=0;a.nP=b<<24>>24;a.nl=c<<24>>24;a.p0=d;a.pr=e;a.pg=f;a.pC=g;a.dH=null;}
function Wj(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.O.n;d=a.O.w;e=a.o.bx;f=a.o.by;g=a.o.W;h=g>=a.o.bJ?a.o.b8-g|0:(a.o.bJ-g|0)-1|0;a:{b:while(true){c:{d:{e:{f:{g:{switch(a.dE){case 0:break f;case 2:i=a.k0;while(f<i){if(!d){a.o.bx=e;a.o.by=f;a.O.w=d;j=a.O;j.u=Long_add(j.u,Long_fromInt(c-a.O.n|0));a.O.n=c;a.o.W=g;return BO(a.o,b);}b=0;d=d+(-1)|0;k=a.O.bU.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.hv=a.hv+(e&ASU.data[i])|0;e=e>>i;f=f-i|0;a.hQ=a.nl;a.dH=a.pg;a.hi=a.pC;a.dE=3;break g;case 4:i=a.k0;while(f<i){if
(!d){a.o.bx=e;a.o.by=f;a.O.w=d;j=a.O;j.u=Long_add(j.u,Long_fromInt(c-a.O.n|0));a.O.n=c;a.o.W=g;return BO(a.o,b);}b=0;d=d+(-1)|0;k=a.O.bU.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.kN=a.kN+(e&ASU.data[i])|0;e=e>>i;f=f-i|0;a.dE=5;break c;case 6:break d;case 7:if(f>7){f=f+(-8)|0;d=d+1|0;c=c+(-1)|0;}a.o.W=g;b=BO(a.o,b);g=a.o.W;if(a.o.bJ!=a.o.W){a.o.bx=e;a.o.by=f;a.O.w=d;j=a.O;j.u=Long_add(j.u,Long_fromInt(c-a.O.n|0));a.O.n=c;a.o.W=g;return BO(a.o,b);}a.dE=8;break a;case 9:a.o.bx=e;a.o.by=f;a.O.w=d;j=a.O;j.u=
Long_add(j.u,Long_fromInt(c-a.O.n|0));a.O.n=c;a.o.W=g;return BO(a.o,(-3));case 1:break e;case 3:break;case 5:break c;case 8:break a;default:a.o.bx=e;a.o.by=f;a.O.w=d;j=a.O;j.u=Long_add(j.u,Long_fromInt(c-a.O.n|0));a.O.n=c;a.o.W=g;return BO(a.o,(-2));}}l=a.hQ;while(f<l){if(!d){a.o.bx=e;a.o.by=f;a.O.w=d;j=a.O;j.u=Long_add(j.u,Long_fromInt(c-a.O.n|0));a.O.n=c;a.o.W=g;return BO(a.o,b);}b=0;d=d+(-1)|0;k=a.O.bU.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.hi+(e&ASU.data[l])|0)*3|0;k=a.dH.data;i=m+1|0;e=e>>k[i];f
=f-a.dH.data[i]|0;l=a.dH.data[m];if(l&16){a.k0=l&15;a.kN=a.dH.data[m+2|0];a.dE=4;continue b;}if(l&64){a.dE=9;a.O.bO=B(275);a.o.bx=e;a.o.by=f;a.O.w=d;j=a.O;j.u=Long_add(j.u,Long_fromInt(c-a.O.n|0));a.O.n=c;a.o.W=g;return BO(a.o,(-3));}a.hQ=l;a.hi=(m/3|0)+a.dH.data[m+2|0]|0;continue b;}if(h>=258&&d>=10){a.o.bx=e;a.o.by=f;a.O.w=d;j=a.O;j.u=Long_add(j.u,Long_fromInt(c-a.O.n|0));a.O.n=c;a.o.W=g;b=W4(a,a.nP,a.nl,a.p0,a.pr,a.pg,a.pC,a.o,a.O);c=a.O.n;d=a.O.w;e=a.o.bx;f=a.o.by;g=a.o.W;h=g>=a.o.bJ?a.o.b8-g|0:(a.o.bJ-
g|0)-1|0;if(b){a.dE=b!=1?9:7;continue b;}}a.hQ=a.nP;a.dH=a.p0;a.hi=a.pr;a.dE=1;}l=a.hQ;while(f<l){if(!d)break b;b=0;d=d+(-1)|0;k=a.O.bU.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.hi+(e&ASU.data[l])|0)*3|0;k=a.dH.data;i=m+1|0;e=e>>>k[i];f=f-a.dH.data[i]|0;n=a.dH.data[m];if(!n){a.qw=a.dH.data[m+2|0];a.dE=6;continue b;}if(n&16){a.k0=n&15;a.hv=a.dH.data[m+2|0];a.dE=2;continue b;}if(!(n&64)){a.hQ=n;a.hi=(m/3|0)+a.dH.data[m+2|0]|0;continue b;}if(!(n&32)){a.dE=9;a.O.bO=B(276);a.o.bx=e;a.o.by=f;a.O.w=d;j=a.O;j.u
=Long_add(j.u,Long_fromInt(c-a.O.n|0));a.O.n=c;a.o.W=g;return BO(a.o,(-3));}a.dE=7;continue b;}if(h)i=g;else{if(g!=a.o.b8)i=g;else if(!a.o.bJ)i=g;else{i=0;h=i>=a.o.bJ?a.o.b8-i|0:(a.o.bJ-i|0)-1|0;}if(!h){a.o.W=i;b=BO(a.o,b);i=a.o.W;h=i>=a.o.bJ?a.o.b8-i|0:(a.o.bJ-i|0)-1|0;if(i==a.o.b8&&a.o.bJ){i=0;h=i>=a.o.bJ?a.o.b8-i|0:(a.o.bJ-i|0)-1|0;}if(!h){a.o.bx=e;a.o.by=f;a.O.w=d;j=a.O;j.u=Long_add(j.u,Long_fromInt(c-a.O.n|0));a.O.n=c;a.o.W=i;return BO(a.o,b);}}}b=0;k=a.o.cc.data;g=i+1|0;k[i]=a.qw<<24>>24;h=h+(-1)|0;a.dE
=0;continue b;}i=g-a.kN|0;while(i<0){i=i+a.o.b8|0;}while(a.hv){if(h)l=g;else{if(g!=a.o.b8)l=g;else if(!a.o.bJ)l=g;else{l=0;h=l>=a.o.bJ?a.o.b8-l|0:(a.o.bJ-l|0)-1|0;}if(!h){a.o.W=l;b=BO(a.o,b);l=a.o.W;h=l>=a.o.bJ?a.o.b8-l|0:(a.o.bJ-l|0)-1|0;if(l==a.o.b8&&a.o.bJ){l=0;h=l>=a.o.bJ?a.o.b8-l|0:(a.o.bJ-l|0)-1|0;}if(!h){a.o.bx=e;a.o.by=f;a.O.w=d;j=a.O;j.u=Long_add(j.u,Long_fromInt(c-a.O.n|0));a.O.n=c;a.o.W=l;return BO(a.o,b);}}}o=a.o.cc.data;g=l+1|0;k=a.o.cc.data;m=i+1|0;o[l]=k[i];h=h+(-1)|0;i=m==a.o.b8?0:m;a.hv=a.hv
-1|0;}a.dE=0;}a.o.bx=e;a.o.by=f;a.O.w=d;j=a.O;j.u=Long_add(j.u,Long_fromInt(c-a.O.n|0));a.O.n=c;a.o.W=g;return BO(a.o,b);}a.o.bx=e;a.o.by=f;a.O.w=d;j=a.O;j.u=Long_add(j.u,Long_fromInt(c-a.O.n|0));a.O.n=c;a.o.W=g;return BO(a.o,1);}
function VG(a,b){return;}
function W4(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;j=i.n;k=i.w;l=h.bx;m=h.by;n=h.W;o=n>=h.bJ?h.b8-n|0:(h.bJ-n|0)-1|0;p=ASU.data[b];q=ASU.data[c];while(true){if(m<20){k=k+(-1)|0;r=i.bU.data;b=j+1|0;l=l|(r[j]&255)<<m;m=m+8|0;j=b;continue;}a:{s=d.data;t=l&p;u=(e+t|0)*3|0;c=s[u];if(!c){b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.cc.data;c=n+1|0;r[n]=s[u+2|0]<<24>>24;o=o+(-1)|0;}else{while(true){b=u+1|0;l=l>>s[b];m=m-s[b]|0;if(c&16){b=c&15;v=s[u+2|0]+(l&ASU.data[b])|0;w=l>>b;m=m-b|0;while(m<15){k=k+(-1)|0;r=i.bU.data;b
=j+1|0;w=w|(r[j]&255)<<m;m=m+8|0;j=b;}r=f.data;b=w&q;x=(g+b|0)*3|0;c=r[x];while(true){l=x+1|0;w=w>>r[l];m=m-r[l]|0;if(c&16)break;if(c&64){i.bO=B(275);b=i.w-k|0;c=m>>3;if(c<b)b=c;c=k+b|0;e=j-b|0;b=m-(b<<3)|0;h.bx=w;h.by=b;i.w=c;i.u=Long_add(i.u,Long_fromInt(e-i.n|0));i.n=e;h.W=n;return (-3);}b=(b+r[x+2|0]|0)+(w&ASU.data[c])|0;x=(g+b|0)*3|0;c=r[x];}b=c&15;while(m<b){k=k+(-1)|0;s=i.bU.data;c=j+1|0;w=w|(s[j]&255)<<m;m=m+8|0;j=c;}x=r[x+2|0]+(w&ASU.data[b])|0;l=w>>b;m=m-b|0;o=o-v|0;if(n>=x){w=n-x|0;b=n-w|0;if(b>0
&&2>b){s=h.cc.data;b=n+1|0;r=h.cc.data;c=w+1|0;s[n]=r[w];s=h.cc.data;n=b+1|0;r=h.cc.data;w=c+1|0;s[b]=r[c];v=v+(-2)|0;}else{CM(h.cc,w,h.cc,n,2);n=n+2|0;w=w+2|0;v=v+(-2)|0;}}else{w=n-x|0;while(true){w=w+h.b8|0;if(w>=0)break;}b=h.b8-w|0;if(v>b){v=v-b|0;c=n-w|0;if(c>0&&b>c){c=n;while(true){s=h.cc.data;n=c+1|0;r=h.cc.data;x=w+1|0;s[c]=r[w];b=b+(-1)|0;if(!b)break;c=n;w=x;}}else{CM(h.cc,w,h.cc,n,b);n=n+b|0;}w=0;}}b=n-w|0;if(b>0&&v>b){while(true){s=h.cc.data;c=n+1|0;r=h.cc.data;b=w+1|0;s[n]=r[w];v=v+(-1)|0;if(!v)break;n
=c;w=b;}break a;}CM(h.cc,w,h.cc,n,v);c=n+v|0;break a;}if(c&64){if(c&32){v=i.w-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;c=j-v|0;e=m-(v<<3)|0;h.bx=l;h.by=e;i.w=b;i.u=Long_add(i.u,Long_fromInt(c-i.n|0));i.n=c;h.W=n;return 1;}i.bO=B(276);v=i.w-k|0;b=m>>3;if(b<v)v=b;e=k+v|0;b=j-v|0;c=m-(v<<3)|0;h.bx=l;h.by=c;i.w=e;i.u=Long_add(i.u,Long_fromInt(b-i.n|0));i.n=b;h.W=n;return (-3);}t=(t+s[u+2|0]|0)+(l&ASU.data[c])|0;u=(e+t|0)*3|0;c=s[u];if(!c)break;}b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.cc.data;c=n+1|0;r[n]=s[u+2|0]<<24>>24;o=o+(-1)
|0;}}if(o<258)break;if(k<10)break;n=c;}v=i.w-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;e=j-v|0;g=m-(v<<3)|0;h.bx=l;h.by=g;i.w=b;i.u=Long_add(i.u,Long_fromInt(e-i.n|0));i.n=e;h.W=c;return 0;}
function Wr(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;ASU=b;}
function FC(){BI.call(this);}
function Sl(){BQ.call(this);}
function VR(){C.call(this);}
function AND(a,b){return a.u4(b);}
function AEs(a){return a.w8();}
function Hg(){BQ.call(this);}
function M5(){var a=this;C.call(a);a.eC=null;a.lh=null;a.dc=null;a.dz=0;}
function Dv(){J.call(this);}
function S9(){C.call(this);}
function HZ(b){return b.length?0:1;}
function YG(b){return b.shift();}
function R5(){C.call(this);this.rC=null;}
function AA5(a){var b,c,d;b=a.rC;if(!FZ(b)&&b.bW.dc===null){c=b.bW;if(c.eC!==null&&!HZ(c.eC)){b=c.eC;d=YG(b);if(b===null)c.eC=null;Oq(d);}}}
function Pr(){var a=this;C.call(a);a.ra=null;a.rb=null;a.q$=0;a.q_=null;}
function Oq(a){var b,c,d,e;b=a.ra;c=a.rb;d=a.q$;e=a.q_;Ed(b);c.bW.dc=b;b=c.bW;b.dz=b.dz+d|0;CZ(e,null);}
function G8(){C.call(this);this.xz=null;}
var ASV=null;var ASn=null;var ASH=null;function ABs(a){var b=new G8();Zw(b,a);return b;}
function Zw(a,b){a.xz=b;}
function XQ(){ASV=ABs(B(277));ASn=ABs(B(278));ASH=ABs(B(279));}
function FA(){BI.call(this);}
function RB(){DN.call(this);}
function E4(){J.call(this);}
function KH(){var a=this;C.call(a);a.vo=null;a.p9=0.0;a.vU=0.0;a.gJ=null;a.hA=null;a.ly=null;a.e9=0;}
function Rh(a,b){var c;if(b!==null){a.hA=b;return a;}c=new BW;Bb(c,B(280));H(c);}
function AMt(a,b){return;}
function PH(a,b){var c;if(b!==null){a.ly=b;return a;}c=new BW;Bb(c,B(280));H(c);}
function AGT(a,b){return;}
function Jb(a,b,c,d){var e,f,$$je;if(!(a.e9==2&&!d)&&a.e9!=3){a.e9=d?2:1;while(true){try{e=AAW(a,b,c);}catch($$e){$$je=D($$e);if($$je instanceof BQ){f=$$je;H(AFd(f));}else{throw $$e;}}if(EJ(e))return e;if(Gf(e)){if(d&&CX(b)){if(a.hA===ASH)return DP(BL(b));if(BL(c)<=O(a.gJ))return ASW;C7(b,b.J+BL(b)|0);if(a.hA===ASn)I8(c,a.gJ);}return e;}if(N9(e)){if(a.hA===ASH)return e;if(a.hA===ASn){if(BL(c)<O(a.gJ))return ASW;I8(c,a.gJ);}C7(b,b.J+Ja(e)|0);}else if(KG(e)){if(a.ly===ASH)break;if(a.ly===ASn){if(BL(c)<O(a.gJ))return ASW;I8(c,
a.gJ);}C7(b,b.J+Ja(e)|0);}}return e;}b=new Dv;R(b);H(b);}
function OK(a,b){if(a.e9!=3&&a.e9!=2){b=new Dv;R(b);H(b);}a.e9=3;return ASX;}
function ABi(a){a.e9=0;return a;}
function Uh(a,b){var c,d;if(a.e9&&a.e9!=3){b=new Dv;R(b);H(b);}if(!BL(b))return ABM(0);if(a.e9)ABi(a);c=ABM(CB(8,BL(b)*a.p9|0));while(true){d=Jb(a,b,c,0);if(Gf(d))break;if(EJ(d))c=Pe(a,c);if(!Jx(d))continue;QJ(d);}b=Jb(a,b,c,1);if(Jx(b))QJ(b);while(!Gf(OK(a,c))){c=Pe(a,c);}DD(c);return c;}
function Pe(a,b){var c,d;c=b.hT;d=X9(LO(c,CB(8,c.data.length*2|0)));C7(d,b.J);return d;}
function AI4(a,b){return ASX;}
function AFJ(a){return;}
function Q2(){}
function Ra(){}
function Mb(){var a=this;C.call(a);a.pZ=null;a.tw=null;a.v$=0;a.xy=0;}
function Y_(a){if(!a.v$){a.pZ.rd=null;Ed(a.pZ);CZ(a.tw,null);}}
function I0(){JP.call(this);}
function Tv(a){var b,c,d,e,f;if(KT(a)){b=new DU;R(b);H(b);}a:{c=BL(a);if(a.J>0){d=a.J;e=0;while(true){if(e>=c)break a;f=d+1|0;JF(a,e,PT(a,d));e=e+1|0;d=f;}}}a.J=c;a.b0=a.gq;a.fI=(-1);return a;}
function KT(a){return a.pM;}
function WA(){var a=this;I0.call(a);a.pM=0;a.pe=0;a.hT=null;}
function AKa(a,b,c,d,e,f){var g=new WA();ANO(g,a,b,c,d,e,f);return g;}
function ANO(a,b,c,d,e,f,g){H0(a,c);a.J=e;a.b0=f;a.pe=b;a.pM=g;a.hT=d;}
function PT(a,b){return a.hT.data[b+a.pe|0];}
function JF(a,b,c){a.hT.data[b+a.pe|0]=c;}
function AJu(a){return 1;}
function AGl(a){return a.hT;}
function ANj(a){return a.pM;}
function JE(){var a=this;C.call(a);a.uN=null;a.np=null;a.wR=0.0;a.p4=0.0;a.oJ=null;a.nM=null;a.hN=0;}
function O8(a,b){var c;if(b!==null){a.oJ=b;return a;}c=new BW;Bb(c,B(281));H(c);}
function ANl(a,b){return;}
function RC(a,b){var c;if(b!==null){a.nM=b;return a;}c=new BW;Bb(c,B(281));H(c);}
function AHa(a,b){return;}
function L2(a,b,c,d){var e,f,g,h,$$je;a:{if(a.hN!=3){if(d)break a;if(a.hN!=2)break a;}b=new Dv;R(b);H(b);}a.hN=!d?1:2;while(true){try{e=TG(a,b,c);}catch($$e){$$je=D($$e);if($$je instanceof BQ){f=$$je;H(AFd(f));}else{throw $$e;}}if(Gf(e)){if(!d)return e;g=BL(b);if(g<=0)return e;e=DP(g);}else if(EJ(e))break;h=!KG(e)?a.oJ:a.nM;b:{if(h!==ASn){if(h===ASV)break b;else return e;}if(BL(c)<a.np.data.length)return ASW;Jf(c,a.np);}C7(b,b.J+Ja(e)|0);}return e;}
function SV(a,b){var c;if(a.hN!=2&&a.hN!=4){b=new Dv;R(b);H(b);}c=ASX;if(c===ASX)a.hN=3;return c;}
function AIz(a,b){return ASX;}
function Kt(){var a=this;C.call(a);a.il=0;a.ki=0;}
var ASX=null;var ASW=null;function TY(a,b){var c=new Kt();UK(c,a,b);return c;}
function UK(a,b,c){a.il=b;a.ki=c;}
function Gf(a){return a.il?0:1;}
function EJ(a){return a.il!=1?0:1;}
function Jx(a){return !N9(a)&&!KG(a)?0:1;}
function N9(a){return a.il!=2?0:1;}
function KG(a){return a.il!=3?0:1;}
function Ja(a){var b;if(Jx(a))return a.ki;b=new Es;R(b);H(b);}
function DP(b){return TY(2,b);}
function QJ(a){var b,c;switch(a.il){case 0:b=new NJ;R(b);H(b);case 1:b=new RD;R(b);H(b);case 2:b=new QC;c=a.ki;R(b);b.t0=c;H(b);case 3:b=new NC;c=a.ki;R(b);b.tP=c;H(b);default:}}
function Vg(){ASX=TY(0,0);ASW=TY(1,0);}
function Jp(){KH.call(this);}
function AAW(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createByteArray(BY(BL(b),512));e=d.data;f=0;g=0;h=$rt_createCharArray(BY(BL(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&CX(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=BY(BL(b)+k|0,e.length);UI(b,d,k,g-k|0);f=0;}if(!CX(c)){l=!CX(b)&&f>=g?ASX:ASW;break a;}k=BY(BL(c),i.length);m=new Qw;m.sk=b;m.tp=c;l=ABx(a,d,f,g,h,0,k,m);f=m.pI;if(l===null&&0==m.kj)l=ASX;AB_(c,h,0,m.kj);if(l!==null)break;}}C7(b,b.J-(g-f|0)|0);return l;}
function PE(){Jp.call(this);}
function ABx(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(JR(h))break a;i=ASX;break a;}n=k+1|0;k=j[k];if(!Fu(a,k)){c=n+(-2)|0;i=DP(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|k&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(JR(h))break a;i=ASX;break a;}c=k+1|0;m=j[k];k=c+1|0;o=j[c];if(!Fu(a,m))break b;if(!Fu(a,o))break b;p=((l&15)<<12|(m
&63)<<6|o&63)&65535;if(KM(p)){c=k+(-3)|0;i=DP(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=DP(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(JR(h))break a;i=ASX;break a;}if((f+2|0)>g){c=k+(-1)|0;if(TX(h,2))break a;i=ASW;break a;}c=k+1|0;m=j[k];n=c+1|0;o=j[c];k=n+1|0;n=j[n];if(!Fu(a,m))break c;if(!Fu(a,o))break c;if(!Fu(a,n))break c;j=e.data;q=(l&7)<<18|(m&63)<<12|(o&63)<<6|n&63;c=f+1|0;j[f]=Gc(q);m=c+1|0;j[c]=GA(q);}c=k;f=m;}break a;}c=k+(-3)|0;i=DP(1);break a;}c=k+(-3)|0;i=DP(1);}h.pI=c;h.kj
=f;return i;}
function Fu(a,b){return (b&192)!=128?0:1;}
function C6(){var a=this;J.call(a);a.eE=0;a.wK=null;}
function ABC(a,b){var c=new C6();AFe(c,a,b);return c;}
function AFe(a,b,c){a.wK=b;R(a);a.eE=c;}
function Xr(){var a=this;C.call(a);a.xC=0;a.xi=0;a.vi=Long_ZERO;a.w4=0;a.tz=0;a.iP=null;a.qe=null;a.sy=null;a.yf=0;a.uO=Long_ZERO;a.xm=0;a.vH=Long_ZERO;}
function AO9(){var a=new Xr();AJN(a);return a;}
function AJN(a){a.xC=0;a.xi=0;a.tz=255;a.xm=0;a.vH=Long_ZERO;}
function Lx(){C.call(this);this.hU=0;}
var ASY=null;function AGr(){var a=new Lx();TN(a);return a;}
function TN(a){a.hU=0;}
function ANK(a,b,c,d){var e,f,g,h;e=a.hU^(-1);while(true){d=d+(-1)|0;if(d<0)break;f=b.data;g=ASY.data;h=c+1|0;e=g[(e^f[c])&255]^e>>>8;c=h;}a.hU=e^(-1);}
function AG4(a){a.hU=0;}
function ALu(a,b){a.hU=Long_and(b,new Long(4294967295, 0)).lo;}
function AIC(a){return Long_and(Long_fromInt(a.hU),new Long(4294967295, 0));}
function Z4(){var b,c,d;ASY=null;ASY=$rt_createIntArray(256);b=0;while(b<256){c=8;d=b;while(true){c=c+(-1)|0;if(c<0)break;if(!(d&1)){d=d>>>1;continue;}d=(-306674912)^d>>>1;}ASY.data[b]=d;b=b+1|0;}}
function Oj(){}
function Bk(){Bi.call(this);}
var ASZ=0;var ASs=null;var AS0=0;var AS1=0;var AS2=0;var AS3=0.0;var AS4=0;var AS5=null;var AS6=0;var AS7=0;var AS8=0.0;var AS9=0.0;var AS$=0.0;var AS_=0.0;var ASa=0.0;var ASb=0.0;var ASc=0.0;var ATa=0.0;var ATb=0.0;var ATc=0;var AR8=0.0;var AR9=0.0;var AR$=0.0;var AR_=0.0;var ATd=0;var ATe=0;var ATf=0;var ATg=0.0;var ATh=0.0;var ATi=0.0;var ATj=0;var ATk=0;var ATl=0;var ATm=0;var ATn=null;var ATo=0;var ATp=null;var ATq=0;var ATr=null;var ATs=0;var ATt=null;var ATu=null;var ATv=null;var ATw=null;var ATx=null;var ATy
=null;var ATz=null;var ATA=null;var ATB=null;var ATC=0;var ATD=null;var ATE=null;var ATF=null;var ATG=null;var ATH=null;var ATI=null;var ATJ=null;var ATK=null;var ATL=null;var ATM=null;var ATN=null;var ATO=null;var ATP=null;var ATQ=null;var ATR=Long_ZERO;var ATS=0;function Bz(){Bz=Bx(Bk);AMB();}
function Bd(b){Bz();a:{switch(b){case 2884:Ic(2884);break a;case 2896:AS1=1;break a;case 2903:ATc=1;break a;case 2912:ATe=1;break a;case 2929:Ic(2929);break a;case 3008:AS2=1;break a;case 3042:Ic(3042);break a;case 3553:AS0=1;break a;case 32823:Ic(32823);break a;case 32826:break;default:break a;}}}
function TB(b){Bz();}
function XT(b){Bz();b= -b;T();AQf.clearDepth(b);}
function E0(b){var c;Bz();a:{c=518;switch(b){case 514:c=514;break a;case 515:c=518;break a;case 516:c=513;break a;default:}}T();AQf.depthFunc(c);}
function AAZ(b,c){Bz();AS3=c;}
function I3(b){Bz();T();AQf.cullFace(b);}
function V(b){Bz();ATm=b;}
function E9(){Bz();switch(ATm){case 5888:break;case 5889:return ATp.data[ATq];case 5890:return ATr.data[ATs];default:}return ATn.data[ATo];}
function Y(){Bz();Ow(E9());}
function BF(b,c,d,e){Bz();T();AQC.data[0]=b;AQC.data[1]=c;AQC.data[2]=d;AQC.data[3]=e;AQf.viewport(b,c,d,e);}
function BD(b){Bz();T();AQf.clear(b);}
function Nv(b,c,d,e,f,g){var h,i,j,k;Bz();h=E9();i=c-b;h.c4=2.0/i;h.c2=0.0;h.c3=0.0;h.c1=0.0;h.c7=0.0;j=e-d;h.c8=2.0/j;h.c5=0.0;h.c6=0.0;h.da=0.0;h.c$=0.0;k=g-f;h.c_=2.0/k;h.c9=0.0;h.eg= -(c+b)/i;h.eh= -(e+d)/j;h.ee=(g+f)/k;h.ef=1.0;}
function Bt(b,c,d){var e;Bz();J0(ATx,b,c,d);e=E9();Oc(e,ATx,e);if(!AS4)return;e=new BW;Bb(e,B(282));H(e);}
function BG(b,c,d,e){Bz();T();AQf.clearColor(b,c,d,e);}
function BM(b){Bz();a:{switch(b){case 2884:GP(2884);break a;case 2896:AS1=0;break a;case 2903:ATc=0;break a;case 2912:ATe=0;break a;case 2929:GP(2929);break a;case 3008:AS2=0;break a;case 3042:GP(3042);break a;case 3553:AS0=0;break a;case 32823:GP(32823);break a;case 32826:break;default:break a;}}}
function C1(b,c,d,e){Bz();AS8=b;AS9=c;AS$=d;AS_=e;}
function E5(){Bz();a:{switch(ATm){case 5888:break;case 5889:if(ATq>=(ATp.data.length-1|0)){Cg(Df(),B(283));break a;}ATq=ATq+1|0;Fb(ATp.data[ATq],ATp.data[ATq-1|0]);break a;case 5890:if(ATs>=(ATr.data.length-1|0)){Cg(Df(),B(284));break a;}ATs=ATs+1|0;Fb(ATr.data[ATs],ATr.data[ATs-1|0]);break a;default:}if(ATo>=(ATn.data.length-1|0))Cg(Df(),B(285));else{ATo=ATo+1|0;Fb(ATn.data[ATo],ATn.data[ATo-1|0]);}}}
function By(b,c,d,e){var f;Bz();J0(ATx,c,d,e);f=E9();Ru(f,b*0.01745329238474369,ATx,f);if(!AS4)return;f=new BW;Bb(f,B(282));H(f);}
function F_(){Bz();a:{switch(ATm){case 5888:break;case 5889:if(ATq<=0){Cg(Df(),B(286));break a;}ATq=ATq-1|0;break a;case 5890:if(ATs<=0){Cg(Df(),B(287));break a;}ATs=ATs-1|0;break a;default:}if(ATo<=0)Cg(Df(),B(288));else ATo=ATo-1|0;}}
function Mf(b,c){Bz();a:{switch(b){case 2982:break;case 2983:Mi(ATp.data[ATq],c);break a;default:}Mi(ATn.data[ATo],c);}}
function DV(b,c,d){var e;Bz();J0(ATx,b,c,d);Ue(E9(),ATx);if(!AS4)return;e=new BW;Bb(e,B(282));H(e);}
function El(b,c){Bz();ATf=b==1&&c==771?1:0;T();AQf.blendFunc(b,c);}
function RZ(b){Bz();T();AQf.depthMask(!!b);}
function IC(b,c,d,e){Bz();T();AQf.colorMask(!!b,!!c,!!d,!!e);}
function CR(b,c){var d,e;Bz();d=XC(ASs,c);T();e=AQf;d=d!==null?d.p5:null;e.bindTexture(3553,d);}
function Hl(b,c,d){Bz();if(!(d!=33071&&d!=10496))d=33071;T();AQf.texParameteri(b,c,d);}
function HE(b){var c,d,e,f,g,h;Bz();c=ATC+1|0;d=0;while(d<b){e=ATC+1|0;ATC=e;f=ATv;g=DZ(e);h=new PO;h.t3=e;h.lf=null;h.iy=null;h.ho=(-1);h.gf=0;DA(f,g,h);d=d+1|0;}return c;}
function KD(b){Bz();ATu=b;Qu(b);}
function FE(b){var c;Bz();if(!AS4){c=Ek(ATw,DZ(b));if(c!==null&&c.gf>0){PN(c.ho|0|(ATc&&AS1?8:0)|(!ATe?0:16)|(!AS2?0:32)|(!AS0?0:64));KD(c.lf);MJ(0,c.gf);ATk=ATk+((c.gf*6|0)/4|0)|0;ATl=ATl+(c.gf/2|0)|0;}}}
function Eq(b,c){Bz();if(!AS4){AS5=Ek(ATv,DZ(b));if(AS5!==null){AS5.ho=(-1);AS5.gf=0;AS4=1;}}}
function Eo(){var b,c,d,e;Bz();if(AS4){AS4=0;T();b=AQ$.buffer;c=AQ9;d=new Int32Array(b,0,c);AQ9=0;e=ND(d);if(e>0){if(AS5.iy===null){DA(ATw,DZ(AS5.t3),AS5);AS5.lf=L0();AS5.iy=J5();b=L1(AS5.ho);KD(AS5.lf);E_(34962,AS5.iy);P5(b);}E_(34962,AS5.iy);MQ(34962,d,35044);ATj=ATj+e|0;}}}
function Gv(b,c,d){Bz();AS8=b;AS9=c;AS$=d;AS_=1.0;}
function Rn(b){Bz();while(CX(b)){FE(Rc(b));}}
function KA(b){Bz();a:{switch(b){case 32886:break;case 32888:AS7=1;break a;default:break a;}AS6=1;}}
function Iq(b){Bz();a:{switch(b){case 32886:break;case 32888:AS7=0;break a;default:break a;}AS6=0;}}
function NW(){Bz();return 0|(!AS6?0:1)|(!AS7?0:4);}
function PN(b){var c;Bz();c=L1(b);ATD=c;AAQ(c);if(AS2)Tn(c,AS3);V6(c,AS8,AS9,AS$,AS_);if(ATe){VM(c,(!ATf?0:2)+ATd|0);Z0(c,AR8,AR9,AR$,AR_);Vd(c,ATi);Zx(c,ATg,ATh);}WC(c,ATn.data[ATo]);W3(c,ATp.data[ATq]);Uv(c,ATr.data[ATs]);if(ATc&&AS1){WR(c,ASa,ASb,ASc);W_(c,ATA,ATB);}Yu(c,ATa,ATb);}
function VP(b,c,d,e){var f;Bz();if(AS4){if(b!=7)Cg(Df(),B(289));else{if(AS5.ho==(-1))AS5.ho=NW();else if(AS5.ho!=NW())Cg(Df(),B(290));f=AS5;f.gf=f.gf+d|0;T();e=e;if((AQ9+e.length|0)<AQ$.length){f=AQ$;b=AQ9;f.set(e,b);AQ9=AQ9+e.length|0;}}}else{ATj=ATj+ND(e)|0;ATk=ATk+d|0;PN(0|(!AS6?0:1)|(!AS7?0:4)|(ATc&&AS1?8:0)|(!ATe?0:16)|(!AS2?0:32)|(!AS0?0:64));KD(ATD.mN);E_(34962,ATD.nH);if(!ATD.ni){ATD.ni=1;MQ(34962,ATE,35048);}f=AQf;e=e;f.bufferSubData(34962,0,e);if(b==7){MJ(c,d);ATl=ATl+(d/2|0)|0;}else{a:{b:{switch(b)
{case 1:break;case 2:case 4:break b;case 3:b=3;ATl=ATl+(d-1|0)|0;break a;case 5:b=5;ATl=ATl+(d-2|0)|0;break a;case 6:b=6;ATl=ATl+(d-2|0)|0;break a;default:break b;}b=1;ATl=ATl+(d/2|0)|0;break a;}b=4;ATl=ATl+(d/3|0)|0;}AQf.drawArrays(b,c,d);}}}
function MJ(b,c){var d,e,f,g,h,i,j;Bz();if(ATt===null){if(ASZ)d=V9($rt_createIntArray(49200));else{e=AF2(0,196800,$rt_createByteArray(196800),0,196800,1,0);e.i_=ASh;d=AB8(e);}f=0;while(f<16384){g=f*4|0;h=g+1|0;i=g+2|0;j=g+3|0;h=h<<16;HI(d,g|h);HI(d,j|h);HI(d,i|j<<16);f=f+1|0;}DD(d);ATt=J5();E_(34963,ATt);g=BL(d);e=new Int32Array(AQD.buffer);h=0;while(h<g){i=Rc(d);e[h]=i;h=h+1|0;}d=AQD.buffer;g=g*4|0;e=new Uint8Array(d,0,g);AQf.bufferData(34963,e,35044);}if(!ATu.ph){ATu.ph=1;E_(34963,ATt);}g=(c*6|0)/4|0;b=(b
*6|0)/4|0;T();AQf.drawElements(4,g,5123,b);}
function AAh(b,c,d,e,f,g,h,i,j){var k,l;Bz();switch(b){case 3553:break;default:}ATj=ATj+BL(j)|0;T();b=BL(j);h=0;while(h<b){k=AQD;i=(N4(j)&255)<<16>>16;k[h]=i;h=h+1|0;}l=new Uint8Array(AQD.buffer,0,b);AQf.texSubImage2D(3553,c,d,e,f,g,6408,5121,l);}
function Qk(b,c){Bz();a:{if(b==2917){b:{switch(c){case 2048:break;case 9729:break b;default:break b;}ATd=2;break a;}ATd=1;}}}
function Hp(b,c){Bz();a:{switch(b){case 2914:break;case 2915:ATg=c;break a;case 2916:ATh=c;break a;default:break a;}ATi=c;}}
function Cs(b,c,d,e){var f,g,h;Bz();f=E9();g=b*0.01745329238474369*0.5;h=Bo(g)/Bn(g);f.c4=h/c;f.c2=0.0;f.c3=0.0;f.c1=0.0;f.c7=0.0;f.c8=h;f.c5=0.0;f.c6=0.0;f.da=0.0;f.c$=0.0;b=e+d;c=e-d;f.c_=b/c;f.c9=(-1.0);f.eg=0.0;f.eh=0.0;f.ee=2.0*e*d/c;f.ef=0.0;}
function AMB(){var b;T();ASZ=1;ASs=ANz(256);AS0=0;AS1=0;AS2=0;AS3=0.10000000149011612;AS4=0;AS5=null;AS6=0;AS7=0;AS8=1.0;AS9=1.0;AS$=1.0;AS_=1.0;ASa=1.0;ASb=0.0;ASc=0.0;ATa=0.0;ATb=0.0;ATc=0;AR8=1.0;AR9=1.0;AR$=1.0;AR_=1.0;ATd=1;ATe=0;ATf=0;ATg=1.0;ATh=1.0;ATi=1.0;ATj=0;ATk=0;ATl=0;ATm=5888;ATn=I(Go,32);ATo=0;ATp=I(Go,6);ATq=0;ATr=I(Go,16);ATs=0;b=0;while(b<ATn.data.length){ATn.data[b]=DK();b=b+1|0;}b=0;while(b<ATp.data.length){ATp.data[b]=DK();b=b+1|0;}b=0;while(b<ATr.data.length){ATr.data[b]=DK();b=b+1|0;}ATt
=null;ATu=null;ATv=C9();ATw=C9();ATx=new N8;ATy=new E1;ATz=new E1;ATA=new E1;ATB=new E1;ATC=0;ATD=null;ATE=new Int32Array(525000);ATF=null;ATG=null;ATH=null;ATI=null;ATJ=null;ATK=ANz(256);ATL=Hz(DK());ATM=$rt_createFloatArray(16);ATN=$rt_createFloatArray(16);ATO=DK();ATP=DK();ATQ=new E1;ATR=Long_ZERO;ATS=0;}
function OX(){var a=this;C.call(a);a.kA=null;a.my=null;a.lo=0;}
function ATT(a){var b=new OX();ABO(b,a);return b;}
function ABO(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.kA=$rt_createIntArray(256);a.my=null;c=I9(b);$p=1;case 1:$z=Zl(c);if(N()){break _;}d=$z;e=d.nG;c=d.mu;f=0;while(f<256)
{g=f%16|0;h=f/16|0;i=7;g=g*8|0;h=h*8|0;a:{while(i>=0){j=g+i|0;k=1;l=0;while(l<8&&k){if((c.data[j+K(h+l|0,e)|0]&255)>0)k=0;l=l+1|0;}if(!k)break a;i=i+(-1)|0;}}if(f==32)i=2;a.kA.data[f]=i+2|0;f=f+1|0;}a.my=b;a.lo=AB6(288);C4();m=AR7;n=0;while(n<256){Eq(a.lo+n|0,4864);Fz(m,7);o=(n%16|0)*8|0;p=(n/16|0)*8|0;q=o;r=q/128.0+0.0;s=p;t=(s+7.989999771118164)/128.0+0.0;Q(m,0.0,7.989999771118164,0.0,r,t);u=(q+7.989999771118164)/128.0+0.0;Q(m,7.989999771118164,7.989999771118164,0.0,u,t);v=s/128.0+0.0;Q(m,7.989999771118164,
0.0,0.0,u,v);Q(m,0.0,0.0,0.0,r,v);B5(m);Eo();n=n+1|0;}w=0;while(w<32){x=(w>>3&1)*85|0;y=((w>>2&1)*170|0)+x|0;z=((w>>1&1)*170|0)+x|0;ba=((w>>0&1)*170|0)+x|0;if(w==6)y=y+85|0;if(w<16?0:1){y=y/4|0;z=z/4|0;ba=ba/4|0;}Eq((a.lo+256|0)+w|0,4864);Gv(y/255.0,z/255.0,ba/255.0);Eo();w=w+1|0;}return;default:FI();}}De().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p);}
function ABg(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c+1|0;g=d+1|0;h=1;$p=1;case 1:Z$(a,b,f,g,e,h);if(N()){break _;}$p=2;case 2:Xu(a,b,c,d,e);if(N()){break _;}return;default:FI();}}De().s(a,b,c,d,e,f,g,h,$p);}
function Xu(a,b,c,d,e){var f,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;$p=1;case 1:Z$(a,b,c,d,e,f);if(N()){break _;}return;default:FI();}}De().s(a,b,c,d,e,f,$p);}
function Z$(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b===null)return;if(f)e=((e&16579836)>>2)+(e&(-16777216))|0;g=new Ij;g.og=a.my;g.hO=(-1);Bg(ATU,g);$p=1;case 1:SW(g);if(N()){break _;}h=(e>>16&255)/255.0;i=(e>>8&255)/255.0;j=(e&255)/255.0;k=(e>>24&255)/255.0;if(k===0.0)k=1.0;C1(h,i,j,k);E5();Bt(c,d,0.0);l=0;while
(l<O(b)){c=l;while(true){d=O(b);l=c+1|0;if(d<=l)break;if(M(b,c)!=167)break;m=D6(B(291),M(IT(b),l));c=c+2|0;}if(c<O(b)){n=Op(M(b,c));if(n>=0){FE((a.lo+n|0)+32|0);Bt(a.kA.data[n+32|0],0.0,0.0);}}}F_();return;default:FI();}}De().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function J$(a,b){var c,d,e;if(b===null)return 0;c=0;d=0;while(d<O(b)){if(M(b,d)==167)d=d+1|0;else{e=Op(M(b,d));if(e>=0)c=c+a.kA.data[e+32|0]|0;}d=d+1|0;}return c;}
function RX(){EC.call(this);this.jP=null;}
var ATV=null;function WM(a){var b=new RX();Yt(b,a);return b;}
function Yt(a,b){var c;c=Ht(b);if(c!==null&&!JA(c)){a.jP=M2(c,1,0,0);if(a.jP!==null)return;b=new EU;R(b);H(b);}b=new EU;R(b);H(b);}
function ADt(a,b,c,d){var e,f,g;G_(b);if(c>=0&&d>=0&&c<=(b.data.length-d|0)){if(!d)return 0;if(a.jP===null){e=new BI;Bb(e,B(292));H(e);}f=W$(a.jP,b,c,d);if(f<=0)f=(-1);return f;}g=new BB;R(g);H(g);}
function AE8(a){a.jP=null;}
function XF(){ATV=$rt_createByteArray(1);}
function EX(){C.call(this);this.cr=null;}
var ATW=0;var ATX=null;var ATY=0;var ATZ=null;function J9(a){var b=new EX();AAk(b,a);return b;}
function LK(a,b){var c=new EX();W9(c,a,b);return c;}
function AAk(a,b){G_(b);a.cr=GK(b);}
function W9(a,b,c){G_(c);a.cr=b!==null?MZ(b,c):GK(c);}
function AHc(a){return a.cr;}
function Nr(a){var b;b=Wl(a.cr,ATX);return b<0?a.cr:BK(a.cr,b+1|0,O(a.cr));}
function Dz(){return AT0;}
function Sp(a){var b,c,d,e;if(XO(a))return a.cr;b=Dz().pm;if(C8(a.cr))return b;c=O(b);d=new W;d.A=$rt_createCharArray(O(b));e=0;while(e<d.A.data.length){d.A.data[e]=M(b,e);e=e+1|0;}d.bH=O(b);if(M(b,c-1|0)==ATW)Dz();else if(M(a.cr,0)!=ATW)E(d,ATX);E(d,a.cr);return X(d);}
function XO(a){return MD(a,a.cr);}
function MD(a,b){Dz();return !C8(b)&&M(b,0)==ATW?1:0;}
function ACy(b){a:{b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
function IG(a){var b,c,d,e,f,g,h,i,j,k,l;b=Sp(a);c=1;d=0;while(d<O(b)){if(M(b,d)==ATW)c=c+1|0;d=d+1|0;}e=$rt_createIntArray(c).data;Dz();f=$rt_createCharArray(O(b)+1|0);g=f.data;h=0;i=0;j=0;e[i]=0;d=0;a:{while(true){if(d>O(b))break a;if(d<0){c=h+1|0;g[h]=M(b,d);}else if(d!=O(b)&&M(b,d)!=ATW){if(M(b,d)==46){j=j+1|0;c=h;}else{if(j>0){k=0;while(k<j){l=h+1|0;g[h]=46;k=k+1|0;h=l;}}c=h+1|0;g[h]=M(b,d);j=0;}}else{if(d==O(b)&&!j)break;l=BN(j,1);if(!l){j=0;c=h;}else if(l<=0){i=i+1|0;e[i]=h;c=h+1|0;g[h]=ATW;}else{l=j
-1|0;i=i<=l?0:i-l|0;c=e[i]+1|0;j=0;}}d=d+1|0;h=c;}}if(h>1&&g[h-1|0]==ATW)h=h+(-1)|0;return FU(f,0,h);}
function Oz(a){var b,c;b=O(a.cr);c=Hm(a.cr,ATW);if(c!=(-1)&&M(a.cr,b-1|0)!=ATW){a:{if(D6(a.cr,ATW)==c){if(MD(a,a.cr))break a;if(!c)break a;}return BK(a.cr,0,c);}return BK(a.cr,0,c+1|0);}return null;}
function AAu(a){return Oz(a)===null?null:J9(Oz(a));}
function Gn(a){var b;b=Ht(a);if(b===null)return 0;return !JA(b)&&!P7(b)?0:1;}
function HM(a){var b,c,d,e,f;b=IG(a);if(D6(b,ATW)<0)return 0;c=O(b);a:{while(true){d=Iw(Dz(),BK(b,0,c));if(JA(d))break a;if(P7(d))break;c=Do(b,ATW,c-1|0);if(c<0)break a;}return 0;}e=c+1|0;b:{while(true){if(e>=O(b))break b;f=C_(b,ATW,e);if(f<0)f=O(b);if(f==(e+1|0))break b;if(!Xx(Iw(Dz(),BK(b,0,e)),BK(b,e,f)))break;e=f+1|0;}return 0;}return 1;}
function AMk(a){return a.cr;}
function GK(b){var c,d,e,f,g,h,i,j;c=O(b);d=0;Dz();e=0;f=Ho(b);g=0;while(g<c){h=f.data;i=h[g];if(i!=47&&i!=ATW){j=d+1|0;h[d]=i;e=0;}else if(e&&g)j=d;else{j=d+1|0;h[d]=ATW;e=1;}g=g+1|0;d=j;}a:{if(e){if(d<=1){if(d!=2)break a;if(f.data[0]==47)break a;}d=d+(-1)|0;}}return FU(f,0,d);}
function MZ(b,c){var d,e;b=GK(b);if(C8(c)&&!C8(b))return b;c=GK(c);d=0;while(d<O(c)&&M(c,d)==ATW){d=d+1|0;}if(d>0)c=DM(c,d);if(!C8(b)&&M(b,O(b)-1|0)==ATW){e=new W;Ba(e);return X(E(E(e,b),c));}e=new W;Ba(e);b=E(e,b);CL(b,ATW);return X(E(b,c));}
function Ht(a){return Iw(Dz(),IG(a));}
function Yh(a){var b;b=IG(a);if(!C8(b)&&!BR(b,B(23)))return Ht(AAu(J9(b)));return null;}
function AB0(){Dz();ATW=47;ATX=OR(ATW);Dz();ATY=58;ATZ=OR(ATY);}
function Ym(){var a=this;C.call(a);a.bb=null;a.e6=null;a.hu=0;a.fu=null;a.bu=null;a.iB=null;a.bh=null;a.eV=0;a.fb=0;a.iq=0;a.qA=0;a.gm=0;a.ml=0.0;a.mq=0.0;a.mp=0.0;}
function OS(a){var b=new Ym();ADD(b,a);return b;}
function ADD(a,b){a.fu=Kj(65536);a.bu=ABW();a.gm=0;a.ml=(-9999.0);a.mq=(-9999.0);a.mp=(-9999.0);a.e6=b;a.hu=HE(2);a.qA=HE(524288);}
function SP(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(a.bh!==null){b=0;while(true){if(b>=a.bh.data.length)break a;AA2(a.bh.data[b]);b=b+1|0;}}}a.eV=a.bb.bf/16|0;a.fb=a.bb.cn/16|0;a.iq=a.bb.bq/16|0;a.bh=I(Gs,K(K(a.eV,a.fb),a.iq));a.iB
=I(Gs,K(K(a.eV,a.fb),a.iq));b=0;c=0;while(c<a.eV){d=0;while(d<a.fb){e=0;while(e<a.iq){a.bh.data[K(K(e,a.fb)+d|0,a.eV)+c|0]=AOB(a.bb,c<<4,d<<4,e<<4,16,a.qA+b|0);a.iB.data[K(K(e,a.fb)+d|0,a.eV)+c|0]=a.bh.data[K(K(e,a.fb)+d|0,a.eV)+c|0];b=b+2|0;e=e+1|0;}d=d+1|0;}c=c+1|0;}Xw(a.bu);Eq(a.hu,4864);Bd(3553);f=3553;g=a.e6;h=B(293);$p=1;case 1:$z=We(g,h);if(N()){break _;}b=$z;CR(f,b);C1(0.5,0.5,0.5,1.0);C4();g=AR7;i=P1(a.bb);f=128;if(128>a.bb.bf)f=a.bb.bf;if(f>a.bb.bq)f=a.bb.bq;j=2048/f|0;Ct(g);c=K( -f,j);k=c;while(true)
{b=a.bb.bf;e=K(f,j);if(k>=(b+e|0))break;l=c;while(l<(a.bb.bq+e|0)){m=k<0?i:l<0?i:k>=a.bb.bf?i:l<a.bb.bq?0.0:i;n=k;o=m;p=l+f|0;q=p;r=f;Q(g,n,o,q,0.0,r);s=k+f|0;Q(g,s,o,q,r,r);q=l;Q(g,s,o,q,r,0.0);Q(g,n,o,q,0.0,0.0);l=p;}k=k+f|0;}B5(g);b=3553;h=a.e6;t=B(293);$p=2;case 2:$z=We(h,t);if(N()){break _;}c=$z;CR(b,c);Gv(0.800000011920929,0.800000011920929,0.800000011920929);Ct(g);c=0;u=i;while(c<a.bb.bf){n=c;Q(g,n,0.0,0.0,0.0,0.0);c=c+f|0;o=c;r=f;Q(g,o,0.0,0.0,r,0.0);Q(g,o,u,0.0,r,u);Q(g,n,u,0.0,0.0,u);Q(g,n,u,a.bb.bq,
0.0,u);Q(g,o,u,a.bb.bq,r,u);Q(g,o,0.0,a.bb.bq,r,0.0);Q(g,n,0.0,a.bb.bq,0.0,0.0);}Gv(0.6000000238418579,0.6000000238418579,0.6000000238418579);c=0;while(c<a.bb.bq){v=c;Q(g,0.0,u,v,0.0,0.0);c=c+f|0;o=c;q=f;Q(g,0.0,u,o,q,0.0);Q(g,0.0,0.0,o,q,u);Q(g,0.0,0.0,v,0.0,u);Q(g,a.bb.bf,0.0,v,0.0,u);Q(g,a.bb.bf,0.0,o,q,u);Q(g,a.bb.bf,u,o,q,0.0);Q(g,a.bb.bf,u,v,0.0,0.0);}B5(g);BM(3042);BM(3553);Eo();Eq(a.hu+1|0,4864);Bd(3553);Gv(1.0,1.0,1.0);f=3553;g=a.e6;h=B(294);$p=3;case 3:$z=We(g,h);if(N()){break _;}b=$z;CR(f,b);i=IS(a.bb);Bd(3042);El(770,
771);g=AR7;e=128;if(128>a.bb.bf)e=a.bb.bf;if(e>a.bb.bq)e=a.bb.bq;f=2048/e|0;Ct(g);b=K( -e,f);q=i-0.10000000149011612;c=b;while(true){l=a.bb.bf;p=K(e,f);if(c>=(l+p|0))break;l=b;while(l<(a.bb.bq+p|0)){if(!(c>=0&&l>=0&&c<a.bb.bf&&l<a.bb.bq)){o=c;s=l+e|0;r=e;Q(g,o,q,s,0.0,r);n=c+e|0;Q(g,n,q,s,r,r);v=l;Q(g,n,q,v,r,0.0);Q(g,o,q,v,0.0,0.0);Q(g,o,q,v,0.0,0.0);Q(g,n,q,v,r,0.0);Q(g,n,q,s,r,r);Q(g,o,q,s,0.0,r);}l=l+e|0;}c=c+e|0;}B5(g);BM(3042);BM(3553);Eo();Iu(a,0,0,0,a.bb.bf,a.bb.cn,a.bb.bq);return;default:FI();}}De().s(a,
b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function Z8(a,b,c){var d,e,f,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0;while(d<a.bb.db.X){if(P8(b,Br(a.bb.db,d).cD)){e=Br(a.bb.db,d);f=a.e6;$p=1;continue _;}d=d+1|0;}return;case 1:e.sX(f,c);if(N()){break _;}while(true){d=d+1|0;if(d>=a.bb.db.X)break;if(!P8(b,Br(a.bb.db,d).cD))continue;else{e=Br(a.bb.db,d);f=a.e6;continue _;}}return;default:FI();}}De().s(a,b,c,d,e,f,$p);}
function SL(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b.r-a.ml;e=b.p-a.mq;f=b.s-a.mp;if(d*d+e*e+f*f>64.0){a.ml=b.r;a.mq=b.p;a.mp=b.s;g=a.iB;h=g.data;i=new O7;i.pq=b;j=h.length;if(j){k=I(C,j);l=1;m=g;while(l<j){n=0;while
(true){o=m.data;p=o.length;if(n>=p)break;q=BY(p,n+l|0);r=n+(2*l|0)|0;s=BY(p,r);t=n;u=q;a:{b:{while(n!=q){if(u==s)break b;v=o[n];b=o[u];if(V8(i,v,b)>0){h=k.data;w=t+1|0;h[t]=b;u=u+1|0;}else{h=k.data;w=t+1|0;h[t]=v;n=n+1|0;}t=w;}while(true){if(u>=s)break a;h=k.data;w=t+1|0;p=u+1|0;h[t]=o[u];t=w;u=p;}}while(true){if(n>=q)break a;h=k.data;p=t+1|0;w=n+1|0;h[t]=o[n];t=p;n=w;}}n=r;}l=l*2|0;h=m;m=k;k=h;}c:{if(m!==g){j=0;while(true){h=m.data;if(j>=h.length)break c;k.data[j]=h[j];j=j+1|0;}}}}}DG(a.fu);j=0;while(j<a.iB.data.length)
{YU(a.iB.data[j],a.fu,c);j=j+1|0;}DD(a.fu);if(BL(a.fu)<=0)return BL(a.fu);Bd(3553);c=3553;b=a.e6;i=B(182);$p=1;case 1:$z=We(b,i);if(N()){break _;}j=$z;CR(c,j);Rn(a.fu);BM(3553);return BL(a.fu);default:FI();}}De().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function ACc(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bd(3553);c=3553;d=a.e6;e=B(295);$p=1;case 1:$z=We(d,e);if(N()){break _;}f=$z;CR(c,f);C1(1.0,1.0,1.0,1.0);C4();e=AR7;g=a.bb.cn+2|0;h=(a.gm+b)*4.8828125E-4*0.029999999329447746;Ct(e);c=(-2048);i=g;while(c<(a.bb.bf
+2048|0)){f=(-2048);while(f<(a.bb.bq+2048|0)){b=c;j=b;k=f+512|0;g=k;l=g;m=b*4.8828125E-4+h;n=g*4.8828125E-4;Q(e,j,i,l,m,n);b=c+512|0;o=b;p=b*4.8828125E-4+h;Q(e,o,i,l,p,n);b=f;q=b;r=b*4.8828125E-4;Q(e,o,i,q,p,r);Q(e,j,i,q,m,r);Q(e,j,i,q,m,r);Q(e,o,i,q,p,r);Q(e,o,i,l,p,n);Q(e,j,i,l,m,n);f=k;}c=c+512|0;}B5(e);BM(3553);Ct(e);Ei(e,0.5,0.800000011920929,1.0);b=a.bb.cn+10|0;s=(-2048);p=b;while(s<(a.bb.bf+2048|0)){f=(-2048);while(f<(a.bb.bq+2048|0)){o=s;q=f;Z(e,o,p,q);r=s+512|0;Z(e,r,p,q);f=f+512|0;q=f;Z(e,r,p,q);Z(e,
o,p,q);}s=s+512|0;}B5(e);return;default:FI();}}De().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function Zi(a,b,c,d){var e,f,g;e=Bp(a.bb,b,c,d);if(e){Bj();if(ARc.data[e].gU()){Bd(3553);C1(0.20000000298023224,0.20000000298023224,0.20000000298023224,1.0);E0(513);C4();f=AR7;Ct(f);g=0;while(g<6){ARc.data[e].fE(f,b,c,d,g);g=g+1|0;}B5(f);I3(1028);Ct(f);g=0;while(g<6){ARc.data[e].fE(f,b,c,d,g);g=g+1|0;}B5(f);I3(1029);BM(3553);E0(515);}}}
function WU(a,b,c,d,e){var f,g,h,i,j,k,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:C4();f=AR7;Bd(3042);Bd(3008);El(770,1);C1(1.0,1.0,1.0,(Bn(Long_toNumber(Bq())/100.0)*0.20000000298023224+0.4000000059604645)*0.5);if(!d){Ct(f);d=0;while(d<6){X2(b,f,c.hf,c.hg,c.hh,d);d=d+1|0;}B5(f);BM(3042);BM(3008);return;}El(770,771);g=Bn(Long_toNumber(Bq())/100.0)*0.20000000298023224+0.800000011920929;C1(g,
g,g,Bn(Long_toNumber(Bq())/200.0)*0.20000000298023224+0.5);Bd(3553);b=a.e6;h=B(182);$p=1;case 1:$z=We(b,h);if(N()){break _;}i=$z;CR(3553,i);i=c.hf;j=c.hg;k=c.hh;if(!c.cP)j=j+(-1)|0;if(c.cP==1)j=j+1|0;if(c.cP==2)k=k+(-1)|0;if(c.cP==3)k=k+1|0;if(c.cP==4)i=i+(-1)|0;if(c.cP==5)i=i+1|0;Ct(f);Xg(f);Bj();ARc.data[e].hY(f,a.bb,0,i,j,k);ARc.data[e].hY(f,a.bb,1,i,j,k);B5(f);BM(3553);BM(3042);BM(3008);return;default:FI();}}De().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function Xn(b,c){var d,e,f,g,h,i,j,k,l,m;Bd(3042);El(770,771);C1(0.0,0.0,0.0,0.4000000059604645);d=b.hf;e=b.hg;f=b.hh;if(c==1){if(!b.cP)e=e-1.0;if(b.cP==1)e=e+1.0;if(b.cP==2)f=f-1.0;if(b.cP==3)f=f+1.0;if(b.cP==4)d=d-1.0;if(b.cP==5)d=d+1.0;}C4();g=AR7;Fz(g,3);h=d;i=e;j=f;Z(g,h,i,j);k=d+1.0;Z(g,k,i,j);l=f+1.0;Z(g,k,i,l);Z(g,h,i,l);Z(g,h,i,j);B5(g);Fz(g,3);m=e+1.0;Z(g,h,m,j);Z(g,k,m,j);Z(g,k,m,l);Z(g,h,m,l);Z(g,h,m,j);B5(g);Fz(g,1);Z(g,h,i,j);Z(g,h,m,j);Z(g,k,i,j);Z(g,k,m,j);Z(g,k,i,l);Z(g,k,m,l);Z(g,h,i,l);Z(g,
h,m,l);B5(g);BM(3042);}
function Iu(a,b,c,d,e,f,g){var h,i,j,k,l;h=b/16|0;i=c/16|0;j=d/16|0;e=e/16|0;c=f/16|0;d=g/16|0;if(h<0)h=0;if(i<0)i=0;if(j<0)j=0;if(e>(a.eV-1|0))e=a.eV-1|0;if(c>(a.fb-1|0))c=a.fb-1|0;if(d>(a.iq-1|0))d=a.iq-1|0;while(h<=e){k=i;while(k<=c){l=j;while(l<=d){ABN(a.bu,a.bh.data[K(K(l,a.fb)+k|0,a.eV)+h|0]);l=l+1|0;}k=k+1|0;}h=h+1|0;}}
function AAG(){var a=this;C.call(a);a.fp=null;a.tX=null;}
function R_(a,b){var c=new AAG();AKV(c,a,b);return c;}
function AKV(a,b,c){a.fp=CU();a.tX=c;}
function Iv(a){var b,c,d;b=0;while(b<a.fp.X){c=Br(a.fp,b);XU(c);if(!c.kK)d=b;else{c=a.fp;d=b+(-1)|0;EE(c,b);}b=d+1|0;}}
function AB4(a,b,c){var d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.fp.X)return;Bd(3553);d=a.tX;e=B(182);$p=1;case 1:$z=We(d,e);if(N()){break _;}f=$z;CR(3553,f);g= -Bo(b.bc*3.141592653589793/180.0);h= -Bn(b.bc*3.141592653589793/180.0);i= -h*Bn(b.ba*3.141592653589793/180.0);j=g*Bn(b.ba*3.141592653589793/180.0);k=Bo(b.ba*3.141592653589793
/180.0);C4();e=AR7;Ct(e);l=0;while(l<a.fp.X){d=Br(a.fp,l);m=0.800000011920929*Q0(d);Ei(e,m,m,m);VS(d,e,c,g,k,h,i,j);l=l+1|0;}B5(e);BM(3553);return;default:FI();}}De().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function Oo(){var a=this;C.call(a);a.ik=0;a.hC=0;a.b_=0;a.g1=0;a.br=0;a.oj=null;a.m5=null;a.nI=null;a.nL=null;a.pU=null;a.j6=null;a.t5=null;a.kb=null;a.kM=null;a.kZ=null;a.eo=null;a.l3=null;}
var AT1=null;function K9(a,b){var c=new Oo();TR(c,a,b);return c;}
function TR(a,b,c){var d,e;a.ik=1;a.hC=1;a.b_=0;a.g1=0;a.br=0;a.oj=D5(B(296),17);a.m5=D5(B(297),30);a.nI=D5(B(298),31);a.nL=D5(B(299),32);a.pU=D5(B(300),57);a.j6=D5(B(301),48);a.t5=D5(B(302),20);a.kb=D5(B(303),33);a.kM=D5(B(304),28);a.kZ=D5(B(305),19);d=I(O1,10);e=d.data;e[0]=a.oj;e[1]=a.m5;e[2]=a.nI;e[3]=a.nL;e[4]=a.pU;e[5]=a.j6;e[6]=a.t5;e[7]=a.kb;e[8]=a.kM;e[9]=a.kZ;a.eo=d;b=new EX;G_(B(306));b.cr=c===null?GK(B(306)):MZ(c.cr,B(306));a.l3=b;U3(a);}
function Ia(a,b){var c;c=new W;Ba(c);c=E(E(c,a.eo.data[b].k7),B(10));b=a.eo.data[b].cS;T();return X(E(c,b>=0&&b<256?AQ7.data[b]:B(8)));}
function X4(a,b,c){a.eo.data[b].cS=c;Oe(a);}
function Kg(a,b,c){if(!b)a.ik=a.ik?0:1;if(b==1)a.hC=a.hC?0:1;if(b==2)a.b_=a.b_?0:1;if(b==3)a.g1=a.g1?0:1;if(b==4)a.br=(a.br+c|0)&3;Oe(a);}
function PJ(a,b){var c;if(!b){c=new W;Ba(c);c=X(E(E(c,B(307)),!a.ik?B(308):B(309)));}else if(b==1){c=new W;Ba(c);c=X(E(E(c,B(310)),!a.hC?B(308):B(309)));}else if(b==2){c=new W;Ba(c);c=X(E(E(c,B(311)),!a.b_?B(308):B(309)));}else if(b!=3){if(b!=4)c=B(3);else{c=new W;Ba(c);c=X(E(E(c,B(312)),AT1.data[a.br]));}}else{c=new W;Ba(c);c=X(E(E(c,B(313)),!a.g1?B(308):B(309)));}return c;}
function U3(a){var b,c,d,e,$$je;a:{b:{try{if(!Gn(a.l3))break a;b=AN1(APr(a.l3));while(true){c=Sd(b);if(c===null)break;d=OZ(c,B(314)).data;if(BR(d[0],B(315)))a.ik=BR(d[1],B(15));if(BR(d[0],B(316)))a.hC=BR(d[1],B(15));if(BR(d[0],B(317)))a.b_=BR(d[1],B(15));if(BR(d[0],B(318)))a.g1=BR(d[1],B(15));if(BR(d[0],B(319)))a.br=IV(d[1]);e=0;while(e<a.eo.data.length){if(BR(d[0],Bf(E(E(Bh(),B(320)),a.eo.data[e].k7))))a.eo.data[e].cS=IV(d[1]);e=e+1|0;}}Xe(b);}catch($$e){$$je=D($$e);if($$je instanceof J){c=$$je;break b;}else
{throw $$e;}}return;}Cg(D2(),B(321));Bv(c);}}
function Oe(a){var b,c,d,$$je;a:{try{b=Yr(AOQ(a.l3));Eu(b,Bf(GZ(E(Bh(),B(322)),a.ik)));Eu(b,Bf(GZ(E(Bh(),B(323)),a.hC)));Eu(b,Bf(GZ(E(Bh(),B(324)),a.b_)));Eu(b,Bf(GZ(E(Bh(),B(325)),a.g1)));Eu(b,Bf(S(E(Bh(),B(326)),a.br)));c=0;while(c<a.eo.data.length){Eu(b,Bf(S(E(E(E(Bh(),B(320)),a.eo.data[c].k7),B(314)),a.eo.data[c].cS)));c=c+1|0;}UX(b);break a;}catch($$e){$$je=D($$e);if($$je instanceof J){d=$$je;}else{throw $$e;}}Cg(D2(),B(327));Bv(d);}}
function ABf(){var b,c;b=I(Ca,4);c=b.data;c[0]=B(328);c[1]=B(329);c[2]=B(330);c[3]=B(331);AT1=b;}
function Et(){var a=this;C.call(a);a.dj=null;a.y=0.0;a.z=0.0;a.x=0.0;a.r=0.0;a.p=0.0;a.s=0.0;a.cz=0.0;a.bZ=0.0;a.cA=0.0;a.bc=0.0;a.ba=0.0;a.C=0.0;a.D=0.0;a.cD=null;a.fv=0;a.lA=0;a.kK=0;a.io=0.0;a.p1=0.0;a.kQ=0.0;a.g5=0.0;a.od=0;}
function AT2(a){var b=new Et();IH(b,a);return b;}
function IH(a,b){a.fv=0;a.lA=0;a.kK=0;a.io=0.0;a.p1=0.6000000238418579;a.kQ=1.7999999523162842;a.g5=0.0;a.od=1;a.dj=b;HU(a,0.0,0.0,0.0);}
function Du(a){var b,c,d;if(a.dj!==null){b=a.dj.kp+0.5;c=a.dj.k_;d=a.dj.kx+0.5;a:{while(true){if(c<=0.0)break a;HU(a,b,c,d);if(!Jz(a.dj,a.cD).X)break;c=c+1.0;}}a.cA=0.0;a.bZ=0.0;a.cz=0.0;a.bc=a.dj.rF;a.ba=0.0;}}
function O2(a){a.kK=1;}
function ABc(a,b,c){a.p1=b;a.kQ=c;}
function HU(a,b,c,d){var e,f;a.r=b;a.p=c;a.s=d;e=a.p1/2.0;f=a.kQ/2.0;a.cD=Ie(b-e,c-f,d-e,b+e,c+f,d+e);}
function Cu(a,b,c){var d,e;d=a.ba;e=a.bc;a.bc=a.bc+b*0.15;a.ba=a.ba-c*0.15;if(a.ba<(-90.0))a.ba=(-90.0);if(a.ba>90.0)a.ba=90.0;a.D=a.D+a.ba-d;a.C=a.C+a.bc-e;}
function Nk(a,b,c,d){var e;e=Sr(a.cD,b,c,d);return Jz(a.dj,e).X>0?0:ABE(a.dj,e)?0:1;}
function FQ(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.r;f=a.s;g=Jz(a.dj,YK(a.cD,b,c,d));h=0;i=c;while(h<g.X){i=T0(Br(g,h),a.cD,i);h=h+1|0;}JO(a.cD,0.0,i,0.0);h=0;j=b;while(h<g.X){j=Uk(Br(g,h),a.cD,j);h=h+1|0;}JO(a.cD,j,0.0,0.0);h=0;k=d;while(h<g.X){k=ABy(Br(g,h),a.cD,k);h=h+1|0;}JO(a.cD,0.0,0.0,k);h=BN(b,j);a.lA=!h&&d===k?0:1;l=BN(c,i);a.fv=l&&c<0.0?1:0;if(h)a.cz=0.0;if(l)a.bZ=0.0;if(d!==k)a.cA=0.0;a.r=(a.cD.ch+a.cD.cC)/2.0;a.p=a.cD.cf+a.io;a.s=(a.cD.cg+a.cD.cB)/2.0;k=a.r-e;b=a.s-f;a.g5=a.g5+EO(k*k+b*b)*0.6;if(a.od)
{l=Bp(a.dj,a.r|0,a.p-0.20000000298023224-a.io|0,a.s|0);if(a.g5>1.0&&l>0){Bj();if(ARc.data[l].n$!==ARi)a.g5=a.g5-(a.g5|0);}}}
function SH(a){return Sh(a.dj,O$(a.cD,0.0,(-0.4000000059604645),0.0),ARe);}
function U8(a){return Sh(a.dj,O$(a.cD,0.0,(-0.4000000059604645),0.0),ARf);}
function Hw(a,b,c,d){var e,f,g,h;e=EO(b*b+c*c);if(e>=0.009999999776482582){if(e<1.0)e=1.0;d=d/e;b=b*d;f=c*d;g=Bn(a.bc*3.141592653589793/180.0);h=Bo(a.bc*3.141592653589793/180.0);a.cz=a.cz+b*h-f*g;a.cA=a.cA+f*h+b*g;}}
function Q0(a){var b,c,d;b=a.r|0;c=a.p+a.io/2.0|0;d=a.s|0;return IR(a.dj,b,c,d);}
function Tu(a,b,c){return;}
function AJ2(a,b){a.dj=b;}
function ABa(){var a=this;Et.call(a);a.dI=null;a.dG=null;a.s1=0;}
function Nq(a,b){var c=new ABa();ALR(c,a,b);return c;}
function ALR(a,b,c){var d,e;IH(a,b);b=new Ni;b.dA=$rt_createIntArray(9);b.cY=0;d=0;while(d<9){e=b.dA.data;Gq();e[d]=Br(ARn,d).bn;d=d+1|0;}a.dG=b;a.s1=0;a.io=1.6200000047683716;a.dI=c;}
function KR(a){var b,c,d;a.y=a.r;a.z=a.p;a.x=a.s;a.D=a.ba;a.C=a.bc;b=SH(a);c=U8(a);ABo(a.dI);if(!a.dI.no)a.dI.kX=0;else if(b)a.bZ=a.bZ+0.03999999910593033;else if(c)a.bZ=a.bZ+0.03999999910593033;else if(a.fv&&!a.dI.kX){a.bZ=0.41999998688697815;a.dI.kX=1;}if(b){d=a.p;Hw(a,a.dI.fN,a.dI.fL,0.019999999552965164);FQ(a,a.cz,a.bZ,a.cA);a.cz=a.cz*0.800000011920929;a.bZ=a.bZ*0.800000011920929;a.cA=a.cA*0.800000011920929;a.bZ=a.bZ-0.02;if(a.lA&&Nk(a,a.cz,a.bZ+0.6000000238418579-a.p+d,a.cA))a.bZ=0.30000001192092896;}else if
(c){d=a.p;Hw(a,a.dI.fN,a.dI.fL,0.019999999552965164);FQ(a,a.cz,a.bZ,a.cA);a.cz=a.cz*0.5;a.bZ=a.bZ*0.5;a.cA=a.cA*0.5;a.bZ=a.bZ-0.02;if(a.lA&&Nk(a,a.cz,a.bZ+0.6000000238418579-a.p+d,a.cA))a.bZ=0.30000001192092896;}else{Hw(a,a.dI.fN,a.dI.fL,!a.fv?0.019999999552965164:0.10000000149011612);FQ(a,a.cz,a.bZ,a.cA);a.cz=a.cz*0.9100000262260437;a.bZ=a.bZ*0.9800000190734863;a.cA=a.cA*0.9100000262260437;a.bZ=a.bZ-0.08;if(a.fv){a.cz=a.cz*0.6000000238418579;a.cA=a.cA*0.6000000238418579;}}}
function YP(a){VU(a.dI);}
function Qe(a,b,c){WE(a.dI,b,c);}
function I_(){var a=this;C.call(a);a.fN=0.0;a.fL=0.0;a.kX=0;a.no=0;}
function VF(){var a=this;I_.call(a);a.gs=null;a.ib=null;}
function Qv(a){var b=new VF();AKQ(b,a);return b;}
function AKQ(a,b){a.fN=0.0;a.fL=0.0;a.kX=0;a.no=0;a.gs=$rt_createBooleanArray(10);a.ib=b;}
function WE(a,b,c){var d;d=(-1);if(b==a.ib.oj.cS)d=0;if(b==a.ib.nI.cS)d=1;if(b==a.ib.m5.cS)d=2;if(b==a.ib.nL.cS)d=3;if(b==a.ib.pU.cS)d=4;if(d>=0)a.gs.data[d]=c;}
function VU(a){var b;b=0;while(b<10){a.gs.data[b]=0;b=b+1|0;}}
function ABo(a){a.fN=0.0;a.fL=0.0;if(a.gs.data[0])a.fL=a.fL-1.0;if(a.gs.data[1])a.fL=a.fL+1.0;if(a.gs.data[2])a.fN=a.fN-1.0;if(a.gs.data[3])a.fN=a.fN+1.0;a.no=a.gs.data[4];}
function EA(){C.call(this);this.hL=0.0;}
function AT3(){var a=new EA();Jw(a);return a;}
function Jw(a){a.hL=0.0;}
function AA4(b,c,d,e,f){var g,h,i,j,k,l,m,n;g=(f>>>24)/255.0;h=(f>>16&255)/255.0;i=(f>>8&255)/255.0;j=(f&255)/255.0;C4();k=AR7;Bd(3042);El(770,771);C1(h,i,j,g);Ct(k);l=b;m=e;Z(k,l,m,0.0);n=d;Z(k,n,m,0.0);m=c;Z(k,n,m,0.0);Z(k,l,m,0.0);B5(k);BM(3042);}
function D1(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s;h=(f>>>24)/255.0;i=(f>>16&255)/255.0;j=(f>>8&255)/255.0;k=(f&255)/255.0;l=(g>>>24)/255.0;m=(g>>16&255)/255.0;n=(g>>8&255)/255.0;o=(g&255)/255.0;Bd(3042);El(770,771);C4();p=AR7;Fz(p,7);Nx(p,i,j,k,h);q=d;r=c;Fy(p,q,r);s=b;Fy(p,s,r);Nx(p,m,n,o,l);r=e;Fy(p,s,r);Fy(p,q,r);B5(p);BM(3042);}
function ACZ(b,c,d,e,f){var $p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:d=d-(J$(b,c)/2|0)|0;$p=1;case 1:ABg(b,c,d,e,f);if(N()){break _;}return;default:FI();}}De().s(b,c,d,e,f,$p);}
function H3(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o;C4();h=AR7;Ct(h);i=b;j=c+g|0;k=a.hL;l=d*0.00390625;m=(e+g|0)*0.00390625;Q(h,i,j,k,l,m);n=b+f|0;k=a.hL;o=(d+f|0)*0.00390625;Q(h,n,j,k,o,m);k=c;j=a.hL;m=e*0.00390625;Q(h,n,k,j,o,m);Q(h,i,k,a.hL,l,m);B5(h);}
function Wc(){var a=this;EA.call(a);a.el=null;a.ez=null;a.gn=0;a.eF=0;a.kk=null;}
function Jm(a,b,c){var d=new Wc();AGB(d,a,b,c);return d;}
function AGB(a,b,c,d){Jw(a);a.el=CU();a.kk=null;a.ez=b;a.gn=(c*240|0)/d|0;a.eF=(d*240|0)/d|0;}
function Ze(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.ez.eB;Ch(a.ez.cv);f=a.ez.cF;b=3553;g=a.ez.cF;h=B(332);$p=1;case 1:$z=We(g,h);if(N()){break _;}c=$z;CR(b,c);Bd(3553);C4();i=AR7;C1(1.0,1.0,1.0,1.0);Bd(3042);j=a.ez.d.dG;a.hL=(-90.0);H3(a,(a.gn/2|0)-91|0,a.eF-
22|0,0,0,182,22);H3(a,(((a.gn/2|0)-91|0)-1|0)+(j.cY*20|0)|0,(a.eF-22|0)-1|0,0,22,24,22);BM(3042);k=0;while(k<j.dA.data.length){l=j.dA.data[k];if(l>0){E5();Bt(((a.gn/2|0)-90|0)+(k*20|0)|0,a.eF-16|0,(-50.0));DV(10.0,10.0,10.0);Bt(1.0,0.5,0.0);By((-30.0),1.0,0.0,0.0);By(45.0,0.0,1.0,0.0);Bt((-1.5),0.5,0.5);DV((-1.0),(-1.0),(-1.0));h=B(182);$p=4;continue _;}k=k+1|0;}h=B(333);b=2;c=2;d=16777215;$p=2;case 2:ABg(e,h,b,c,d);if(N()){break _;}if(a.ez.F.g1){h=a.ez.cl;b=2;c=12;d=16777215;$p=3;continue _;}m=10;n=0;if(a.ez.G instanceof Kp)
{m=20;n=1;}o=0;a:{while(o<a.el.X&&o<m){if(Br(a.el,o).jL<200)break a;if(n)break a;o=o+1|0;}b=a.gn/2|0;p=a.eF/2|0;C1(1.0,1.0,1.0,1.0);Ct(i);q=b+1|0;r=p-4|0;Z(i,q,r,0.0);s=b;Z(i,s,r,0.0);r=p+5|0;Z(i,s,r,0.0);Z(i,q,r,0.0);q=b+5|0;r=p;Z(i,q,r,0.0);s=b-4|0;Z(i,s,r,0.0);r=p+1|0;Z(i,s,r,0.0);Z(i,q,r,0.0);B5(i);a.kk=null;return;}h=Br(a.el,o).l7;b=2;c=((a.eF-8|0)-(o*9|0)|0)-20|0;d=16777215;$p=5;continue _;case 3:ABg(e,h,b,c,d);if(N()){break _;}m=10;n=0;if(a.ez.G instanceof Kp){m=20;n=1;}o=0;b:{while(o<a.el.X&&o<m){if
(Br(a.el,o).jL<200)break b;if(n)break b;o=o+1|0;}b=a.gn/2|0;p=a.eF/2|0;C1(1.0,1.0,1.0,1.0);Ct(i);q=b+1|0;r=p-4|0;Z(i,q,r,0.0);s=b;Z(i,s,r,0.0);r=p+5|0;Z(i,s,r,0.0);Z(i,q,r,0.0);q=b+5|0;r=p;Z(i,q,r,0.0);s=b-4|0;Z(i,s,r,0.0);r=p+1|0;Z(i,s,r,0.0);Z(i,q,r,0.0);B5(i);a.kk=null;return;}h=Br(a.el,o).l7;b=2;c=((a.eF-8|0)-(o*9|0)|0)-20|0;d=16777215;$p=5;continue _;case 4:$z=We(f,h);if(N()){break _;}o=$z;CR(3553,o);Bd(3553);Ct(i);Bj();ARc.data[l].hY(i,a.ez.g,0,(-2),0,0);B5(i);BM(3553);F_();while(true){k=k+1|0;if(k>=j.dA.data.length)break;l
=j.dA.data[k];if(l<=0)continue;else{E5();Bt(((a.gn/2|0)-90|0)+(k*20|0)|0,a.eF-16|0,(-50.0));DV(10.0,10.0,10.0);Bt(1.0,0.5,0.0);By((-30.0),1.0,0.0,0.0);By(45.0,0.0,1.0,0.0);Bt((-1.5),0.5,0.5);DV((-1.0),(-1.0),(-1.0));h=B(182);continue _;}}h=B(333);b=2;c=2;d=16777215;$p=2;continue _;case 5:ABg(e,h,b,c,d);if(N()){break _;}c:{while(true){o=o+1|0;if(o>=a.el.X)break;if(o>=m)break;if(Br(a.el,o).jL<200)break c;if(!n)continue;else break c;}b=a.gn/2|0;p=a.eF/2|0;C1(1.0,1.0,1.0,1.0);Ct(i);q=b+1|0;r=p-4|0;Z(i,q,r,0.0);s
=b;Z(i,s,r,0.0);r=p+5|0;Z(i,s,r,0.0);Z(i,q,r,0.0);q=b+5|0;r=p;Z(i,q,r,0.0);s=b-4|0;Z(i,s,r,0.0);r=p+1|0;Z(i,s,r,0.0);Z(i,q,r,0.0);B5(i);a.kk=null;return;}h=Br(a.el,o).l7;b=2;c=((a.eF-8|0)-(o*9|0)|0)-20|0;d=16777215;continue _;default:FI();}}De().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function Bs(){DN.call(this);}
function Wx(){var a=new Bs();AJW(a);return a;}
function AJW(a){R(a);}
function Ub(){C.call(this);}
function CA(){var b;T();b=AQv;AQv=0.0;return b|0;}
function Cx(){var b;T();b=AQw;AQw=0.0;return b|0;}
function Cz(){T();return AQt;}
function CD(){T();return AQu;}
function WO(b){T();AQQ=b;if(b){AQv=0.0;AQw=0.0;setTimeout(Cy(new OF,"onTimer"),200);}else{AQO=Bq();if(AQP)clearTimeout(AQP);AQP=0;AQa.exitPointerLock();}}
function KE(){var b,c;a:{T();AQK=null;if(!Ny(AQr)){b=Lr(AQr,0);AQK=b;if(b!==null){c=1;break a;}}c=0;}return c;}
function D_(){T();return AQK===null?0:BR($rt_str(AQK.type),B(334));}
function Fq(){var b;T();if(AQK===null)b=(-1);else{b=AQK.button;if(b==1)b=2;else if(b==2)b=1;}return b;}
function Yn(b){T();return AQM.data[b];}
function S6(){T();return !BR(B(335),$rt_str(AQK.type))?0:AQK.deltaY===0.0?0:AQK.deltaY<=0.0?1:(-1);}
function Km(){var a=this;C.call(a);a.S=null;a.iO=null;a.jQ=null;a.rm=null;a.M=null;a.L=null;a.N=null;}
var AT4=null;function Cn(){var b;b=AT4;JJ(b.iO);JJ(b.jQ);JJ(b.rm);Mf(2983,b.iO);Mf(2982,b.jQ);N1(Ma(b.iO),16);Pt(b.iO,b.M);N1(Ma(b.jQ),16);Pt(b.jQ,b.L);b.N.data[0]=b.L.data[0]*b.M.data[0]+b.L.data[1]*b.M.data[4]+b.L.data[2]*b.M.data[8]+b.L.data[3]*b.M.data[12];b.N.data[1]=b.L.data[0]*b.M.data[1]+b.L.data[1]*b.M.data[5]+b.L.data[2]*b.M.data[9]+b.L.data[3]*b.M.data[13];b.N.data[2]=b.L.data[0]*b.M.data[2]+b.L.data[1]*b.M.data[6]+b.L.data[2]*b.M.data[10]+b.L.data[3]*b.M.data[14];b.N.data[3]=b.L.data[0]*b.M.data[3]
+b.L.data[1]*b.M.data[7]+b.L.data[2]*b.M.data[11]+b.L.data[3]*b.M.data[15];b.N.data[4]=b.L.data[4]*b.M.data[0]+b.L.data[5]*b.M.data[4]+b.L.data[6]*b.M.data[8]+b.L.data[7]*b.M.data[12];b.N.data[5]=b.L.data[4]*b.M.data[1]+b.L.data[5]*b.M.data[5]+b.L.data[6]*b.M.data[9]+b.L.data[7]*b.M.data[13];b.N.data[6]=b.L.data[4]*b.M.data[2]+b.L.data[5]*b.M.data[6]+b.L.data[6]*b.M.data[10]+b.L.data[7]*b.M.data[14];b.N.data[7]=b.L.data[4]*b.M.data[3]+b.L.data[5]*b.M.data[7]+b.L.data[6]*b.M.data[11]+b.L.data[7]*b.M.data[15];b.N.data[8]
=b.L.data[8]*b.M.data[0]+b.L.data[9]*b.M.data[4]+b.L.data[10]*b.M.data[8]+b.L.data[11]*b.M.data[12];b.N.data[9]=b.L.data[8]*b.M.data[1]+b.L.data[9]*b.M.data[5]+b.L.data[10]*b.M.data[9]+b.L.data[11]*b.M.data[13];b.N.data[10]=b.L.data[8]*b.M.data[2]+b.L.data[9]*b.M.data[6]+b.L.data[10]*b.M.data[10]+b.L.data[11]*b.M.data[14];b.N.data[11]=b.L.data[8]*b.M.data[3]+b.L.data[9]*b.M.data[7]+b.L.data[10]*b.M.data[11]+b.L.data[11]*b.M.data[15];b.N.data[12]=b.L.data[12]*b.M.data[0]+b.L.data[13]*b.M.data[4]+b.L.data[14]
*b.M.data[8]+b.L.data[15]*b.M.data[12];b.N.data[13]=b.L.data[12]*b.M.data[1]+b.L.data[13]*b.M.data[5]+b.L.data[14]*b.M.data[9]+b.L.data[15]*b.M.data[13];b.N.data[14]=b.L.data[12]*b.M.data[2]+b.L.data[13]*b.M.data[6]+b.L.data[14]*b.M.data[10]+b.L.data[15]*b.M.data[14];b.N.data[15]=b.L.data[12]*b.M.data[3]+b.L.data[13]*b.M.data[7]+b.L.data[14]*b.M.data[11]+b.L.data[15]*b.M.data[15];b.S.data[0].data[0]=b.N.data[3]-b.N.data[0];b.S.data[0].data[1]=b.N.data[7]-b.N.data[4];b.S.data[0].data[2]=b.N.data[11]-b.N.data[8];b.S.data[0].data[3]
=b.N.data[15]-b.N.data[12];EV(b.S,0);b.S.data[1].data[0]=b.N.data[3]+b.N.data[0];b.S.data[1].data[1]=b.N.data[7]+b.N.data[4];b.S.data[1].data[2]=b.N.data[11]+b.N.data[8];b.S.data[1].data[3]=b.N.data[15]+b.N.data[12];EV(b.S,1);b.S.data[2].data[0]=b.N.data[3]+b.N.data[1];b.S.data[2].data[1]=b.N.data[7]+b.N.data[5];b.S.data[2].data[2]=b.N.data[11]+b.N.data[9];b.S.data[2].data[3]=b.N.data[15]+b.N.data[13];EV(b.S,2);b.S.data[3].data[0]=b.N.data[3]-b.N.data[1];b.S.data[3].data[1]=b.N.data[7]-b.N.data[5];b.S.data[3].data[2]
=b.N.data[11]-b.N.data[9];b.S.data[3].data[3]=b.N.data[15]-b.N.data[13];EV(b.S,3);b.S.data[4].data[0]=b.N.data[3]-b.N.data[2];b.S.data[4].data[1]=b.N.data[7]-b.N.data[6];b.S.data[4].data[2]=b.N.data[11]-b.N.data[10];b.S.data[4].data[3]=b.N.data[15]-b.N.data[14];EV(b.S,4);b.S.data[5].data[0]=b.N.data[3]+b.N.data[2];b.S.data[5].data[1]=b.N.data[7]+b.N.data[6];b.S.data[5].data[2]=b.N.data[11]+b.N.data[10];b.S.data[5].data[3]=b.N.data[15]+b.N.data[14];EV(b.S,5);return AT4;}
function EV(b,c){var d,e;b=b.data;d=EO(b[c].data[0]*b[c].data[0]+b[c].data[1]*b[c].data[1]+b[c].data[2]*b[c].data[2]);e=b[c].data;e[0]=e[0]/d;e=b[c].data;e[1]=e[1]/d;e=b[c].data;e[2]=e[2]/d;b=b[c].data;b[3]=b[3]/d;}
function NT(a,b,c,d,e,f,g){var h;h=0;while(h<6){if(a.S.data[h].data[0]*b+a.S.data[h].data[1]*c+a.S.data[h].data[2]*d+a.S.data[h].data[3]<=0.0&&a.S.data[h].data[0]*e+a.S.data[h].data[1]*c+a.S.data[h].data[2]*d+a.S.data[h].data[3]<=0.0&&a.S.data[h].data[0]*b+a.S.data[h].data[1]*f+a.S.data[h].data[2]*d+a.S.data[h].data[3]<=0.0&&a.S.data[h].data[0]*e+a.S.data[h].data[1]*f+a.S.data[h].data[2]*d+a.S.data[h].data[3]<=0.0&&a.S.data[h].data[0]*b+a.S.data[h].data[1]*c+a.S.data[h].data[2]*g+a.S.data[h].data[3]<=0.0&&a.S.data[h].data[0]
*e+a.S.data[h].data[1]*c+a.S.data[h].data[2]*g+a.S.data[h].data[3]<=0.0&&a.S.data[h].data[0]*b+a.S.data[h].data[1]*f+a.S.data[h].data[2]*g+a.S.data[h].data[3]<=0.0&&a.S.data[h].data[0]*e+a.S.data[h].data[1]*f+a.S.data[h].data[2]*g+a.S.data[h].data[3]<=0.0)return 0;h=h+1|0;}return 1;}
function P8(a,b){return NT(a,b.ch,b.cf,b.cg,b.cC,b.cH,b.cB);}
function VD(){var b;b=new Km;b.S=$rt_createFloatMultiArray([4,6]);b.iO=Je(16);b.jQ=Je(16);b.rm=Je(16);b.M=$rt_createFloatArray(16);b.L=$rt_createFloatArray(16);b.N=$rt_createFloatArray(16);AT4=b;}
function M9(){}
function QV(){}
function Sj(){CK.call(this);this.nJ=null;}
var AT5=null;function CI(a){var b=new Sj();ZW(b,a);return b;}
function ZW(a,b){var c;c=new M0;c.xr=b;if(b===null){b=new O3;b.w_=c;}c.hp=b;a.nJ=c;}
function Ck(a){return AAT(a.nJ).eP();}
function TZ(a,b){return ACf(a.nJ,b,b)===AT5?0:1;}
function VI(){AT5=new C;}
function AAg(){C.call(this);this.mQ=null;}
function CH(a){var b=new AAg();AEE(b,a);return b;}
function AEE(a,b){a.mQ=b;}
function AHN(a,b,c){var d,e,f,g;d=b;e=c;f=d.iY;g=e.iY;return f&&!g?(-1):!(g&&!f)&&Hs(d,a.mQ)<Hs(e,a.mQ)?(-1):1;}
function Gs(){var a=this;C.call(a);a.lF=null;a.iA=0;a.ia=0;a.h9=0;a.h3=0;a.jo=0;a.jn=0;a.jj=0;a.lq=null;a.iY=0;}
var AT6=null;var ARg=0;function Cp(){Cp=Bx(Gs);AFq();}
function AOB(a,b,c,d,e,f){var g=new Gs();ABY(g,a,b,c,d,e,f);return g;}
function ABY(a,b,c,d,e,f,g){Cp();a.iA=(-1);a.lq=$rt_createBooleanArray(2);a.iY=0;a.lF=b;a.ia=c;a.h9=d;a.h3=e;a.jj=16;a.jn=16;a.jo=16;EO((K(a.jo,a.jo)+K(a.jn,a.jn)|0)+K(a.jj,a.jj)|0);a.iA=g;Lo(a);}
function Hs(a,b){var c,d,e;c=b.r-a.ia;d=b.p-a.h9;e=b.s-a.h3;return c*c+d*d+e*e;}
function Lo(a){var b;b=0;while(b<2){Eq(a.iA+b|0,4864);Eo();b=b+1|0;}}
function AA2(a){Lo(a);a.lF=null;}
function Co(a){var b,c,d,e,f,g,h,i,j,k,l,m;ARg=ARg+1|0;b=0;while(b<2){c=a.ia;d=a.h9;e=a.h3;f=a.ia+a.jo|0;g=a.h9+a.jn|0;h=a.h3+a.jj|0;Eq(a.iA+b|0,4864);Ct(AT6);i=0;while(c<f){j=d;while(j<g){k=e;while(k<h){l=Bp(a.lF,c,j,k);if(l>0){Bj();i=i|ARc.data[l].hY(AT6,a.lF,b,c,j,k);}k=k+1|0;}j=j+1|0;}c=c+1|0;}B5(AT6);Eo();if(a.lq.data[b]!=(i?0:1)){m=a.lq;m.data[b]=i?0:1;}b=b+1|0;}}
function YU(a,b,c){if(a.iY&&!a.lq.data[c])HI(b,a.iA+c|0);}
function Cj(a,b){a.iY=NT(b,a.ia,a.h9,a.h3,a.ia+a.jo|0,a.h9+a.jn|0,a.h3+a.jj|0);}
function AFq(){C4();AT6=AR7;ARg=0;}
function CC(){var a=this;EA.call(a);a.bF=null;a.bw=0;a.bT=0;a.bi=null;a.nt=0;a.ei=null;}
function AT7(){var a=new CC();Eb(a);return a;}
function Eb(a){Jw(a);a.bi=CU();a.nt=0;}
function WT(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0;while(d<a.bi.X){e=Br(a.bi,d);f=a.bF;if(e.gd){g=f.eB;Bd(3553);h=3553;i=f.cF;f=B(332);$p=1;continue _;}d=d+1|0;}return;case 1:$z=We(i,f);if(N()){break _;}j=$z;CR(h,j);C1(1.0,1.0,1.0,1.0);k=1;l=b>=e.et&&c>=e.es&&b<(e.et+e.eu|0)&&c<(e.es+e.fm|0)?1:0;if(!e.d2)k
=0;else if(l)k=2;m=e.et;n=e.es;o=46+(k*20|0)|0;H3(e,m,n,0,o,e.eu/2|0,e.fm);H3(e,e.et+(e.eu/2|0)|0,e.es,200-(e.eu/2|0)|0,o,e.eu/2|0,e.fm);if(!e.d2){f=e.eG;h=e.et+(e.eu/2|0)|0;j=e.es+((e.fm-8|0)/2|0)|0;k=(-6250336);$p=2;continue _;}if(!l){f=e.eG;h=e.et+(e.eu/2|0)|0;j=e.es+((e.fm-8|0)/2|0)|0;k=14737632;$p=3;continue _;}f=e.eG;h=e.et+(e.eu/2|0)|0;j=e.es+((e.fm-8|0)/2|0)|0;k=16777120;$p=4;continue _;case 2:ACZ(g,f,h,j,k);if(N()){break _;}while(true){d=d+1|0;if(d>=a.bi.X)break;e=Br(a.bi,d);f=a.bF;if(!e.gd)continue;else
{g=f.eB;Bd(3553);h=3553;i=f.cF;f=B(332);$p=1;continue _;}}return;case 3:ACZ(g,f,h,j,k);if(N()){break _;}while(true){d=d+1|0;if(d>=a.bi.X)break;e=Br(a.bi,d);f=a.bF;if(!e.gd)continue;else{g=f.eB;Bd(3553);h=3553;i=f.cF;f=B(332);$p=1;continue _;}}return;case 4:ACZ(g,f,h,j,k);if(N()){break _;}while(true){d=d+1|0;if(d>=a.bi.X)break;e=Br(a.bi,d);f=a.bF;if(!e.gd)continue;else{g=f.eB;Bd(3553);h=3553;i=f.cF;f=B(332);$p=1;continue _;}}return;default:FI();}}De().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function Tt(a,b,c){if(c==1){BA(a.bF,null);D3(a.bF);}}
function UJ(a,b,c,d){var e,f,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!d){e=0;while(true){if(e>=a.bi.X)break a;f=Br(a.bi,e);if(f.d2&&b>=f.et&&c>=f.es&&b<(f.et+f.eu|0)&&c<(f.es+f.fm|0)){$p=1;continue _;}e=e+1|0;}}}return;case 1:a.gz(f);if(N()){break _;}while(true){e=e+1|0;if(e>=a.bi.X)break;f=Br(a.bi,e);if(!f.d2)continue;if(b<f.et)continue;if(c<f.es)continue;if(b>=(f.et+f.eu|0))continue;if(c>=(f.es+f.fm|0))continue;else
{continue _;}}return;default:FI();}}De().s(a,b,c,d,e,f,$p);}
function SG(a,b){return;}
function VT(a,b,c,d){a.bF=b;a.ei=b.eB;a.bw=c;a.bT=d;a.gk();}
function AMM(a){return;}
function VH(a){var $p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!KE()){while(Jq()){GY(a);}return;}$p=1;case 1:ZC(a);if(N()){break _;}if(!KE()){while(Jq()){GY(a);}return;}continue _;default:FI();}}De().s(a,$p);}
function ZC(a){var b,c,d,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!D_())return;T();b=AQK===null?(-1):AQK.clientX;b=K(b,a.bw)/a.bF.l|0;c=(a.bT-(K(AQK===null?(-1):AQc.clientHeight-AQK.clientY|0,a.bT)/a.bF.c|0)|0)-1|0;d=Fq();$p=1;case 1:a.xe(b,c,d);if(N()){break _;}return;default:FI();}}De().s(a,b,c,d,$p);}
function GY(a){var b,c;if(HY()){T();if(AQL===null)b=0;else{c=$rt_str(AQL.key);b=AQL===null?32:O(c)>1?0:M(c,0);}a.lG(b,CW());}}
function AK7(a){return;}
function AIZ(a){return;}
function E3(){var a=this;CC.call(a);a.sQ=null;a.t4=null;}
function CV(a,b){var c=new E3();Hf(c,a,b);return c;}
function Hf(a,b,c){Eb(a);a.sQ=b;a.t4=c;}
function AKe(a){return;}
function UO(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:D1(0,0,a.bw,a.bT,(-12574688),(-11530224));d=a.ei;e=a.sQ;f=a.bw/2|0;g=90;h=16777215;$p=1;case 1:ACZ(d,e,f,g,h);if(N()){break _;}d=a.ei;e=a.t4;f=a.bw/2|0;g=110;h=16777215;$p=2;case 2:ACZ(d,e,f,g,h);if(N()){break _;}$p=3;case 3:WT(a,b,c);if(N()){break _;}return;default:FI();}}De().s(a,b,c,d,e,f,g,h,$p);}
function AEC(a,b,c){return;}
function JC(){JE.call(this);}
function TG(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createCharArray(BY(BL(b),512));e=d.data;f=0;g=0;h=$rt_createByteArray(BY(BL(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&CX(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=BY(BL(b)+k|0,e.length);Iy(b,d,k,g-k|0);f=0;}if(!CX(c)){l=!CX(b)&&f>=g?ASX:ASW;break a;}k=BY(BL(c),i.length);m=new LQ;m.qh=b;m.rD=c;l=Xc(a,d,f,g,h,0,k,m);f=m.o7;if(l===null&&0==m.lU)l=ASX;Rs(c,h,0,m.lU);if(l!==null)break;}}C7(b,b.J-(g-f|0)|0);return l;}
function Nl(){JC.call(this);}
function Xc(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Kr(h,2))break a;i=ASW;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!KM(l)){if((f+3|0)>g){j=j+(-1)|0;if(Kr(h,3))break a;i=ASW;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CQ(l)){i=DP(1);break a;}if
(j>=d){if(Ve(h))break a;i=ASX;break a;}c=j+1|0;j=k[j];if(!C5(j)){j=c+(-2)|0;i=DP(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Kr(h,4))break a;i=ASW;break a;}k=e.data;n=DB(l,j);j=f+1|0;k[f]=(240|n>>18)<<24>>24;f=j+1|0;k[j]=(128|n>>12&63)<<24>>24;j=f+1|0;k[f]=(128|n>>6&63)<<24>>24;m=j+1|0;k[j]=(128|n&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.o7=j;h.lU=f;return i;}
function ABS(){var a=this;Dj.call(a);a.gu=null;a.lV=0;}
function AIG(){var a=new ABS();AH0(a);return a;}
function AH0(a){a.gu=$rt_createByteArray(32);}
function PQ(a,b,c,d){var e,f,g,h,i;e=a.lV+d|0;if(a.gu.data.length<e){f=CB(e,(a.gu.data.length*3|0)/2|0);a.gu=H5(a.gu,f);}e=0;while(e<d){g=b.data;h=a.gu.data;f=a.lV;a.lV=f+1|0;i=c+1|0;h[f]=g[c];e=e+1|0;c=i;}}
function Il(a){return H5(a.gu,a.lV);}
function H4(){BQ.call(this);}
function Lj(){var a=this;C.call(a);a.mu=null;a.nG=0;a.rO=0;a.uu=0;}
function I5(){var a=this;C.call(a);a.nK=null;a.tk=null;a.hl=0;a.uo=0.0;a.up=0.0;a.sK=0;a.gT=0;a.g3=0;a.ii=0;a.h7=0;a.j0=0;a.jD=0;a.wS=0.0;a.u3=0.0;a.uE=0.0;a.i9=0;a.uU=0;a.x2=0;a.mm=0;a.rf=0;}
var AR7=null;function C4(){C4=Bx(I5);AKc();}
function B5(a){var b,c,d,e,f;if(!a.i9)return 0;a.i9=0;if(a.hl>0){if(a.g3)KA(32888);if(a.gT)KA(32886);if(a.ii)KA(32885);b=a.mm;c=a.hl;d=a.nK.buffer;e=a.hl*7|0;VP(b,0,c,new Int32Array(d,0,e));if(a.g3)Iq(32888);if(a.gT)Iq(32886);if(a.ii)Iq(32885);}f=a.h7*4|0;Ko(a);return f;}
function Ko(a){a.hl=0;a.h7=0;a.j0=0;}
function Ct(a){a.mm=7;a.i9=1;Ko(a);a.ii=0;a.gT=0;a.g3=0;a.jD=0;}
function Fz(a,b){a.mm=b;a.i9=1;Ko(a);a.gT=0;a.g3=0;a.jD=0;}
function Fy(a,b,c){a.g3=1;a.uo=b;a.up=c;}
function Ei(a,b,c,d){IK(a,b*255.0|0,c*255.0|0,d*255.0|0);}
function Nx(a,b,c,d,e){Om(a,b*255.0|0,c*255.0|0,d*255.0|0,e*255.0|0);}
function IK(a,b,c,d){Om(a,b,c,d,255);}
function Om(a,b,c,d,e){if(!a.jD){if(b>255)b=255;if(c>255)c=255;if(d>255)d=255;if(e>255)e=255;if(b<0)b=0;if(c<0)c=0;if(d<0)d=0;if(e<0)e=0;a.gT=1;a.sK=e<<24|d<<16|c<<8|b;}}
function Q(a,b,c,d,e,f){Fy(a,e,f);Z(a,b,c,d);}
function Z(a,b,c,d){var e,f,g,h,i,j;if(a.j0>65534)return;a.j0=a.j0+1|0;a.hl=a.hl+1|0;e=a.h7;f=a.nK;g=a.tk;h=e+0|0;i=b+a.wS;g[h]=i;h=e+1|0;i=c+a.u3;g[h]=i;h=e+2|0;i=d+a.uE;g[h]=i;if(a.g3){h=e+3|0;i=a.uo;g[h]=i;h=e+4|0;i=a.up;g[h]=i;}if(a.gT){h=e+5|0;j=a.sK;f[h]=j;}if(a.ii){e=e+6|0;h=a.rf;f[e]=h;}a.h7=a.h7+7|0;}
function Kw(a,b){IK(a,b>>16&255,b>>8&255,b&255);}
function Xg(a){a.jD=1;}
function Ui(a,b,c,d){var e;a.ii=1;e=EO(b*b+c*c+d*d);a.rf=((b/e*127.0|0)+127|0)&255|(((c/e*127.0|0)+127|0)&255)<<8|(((d/e*127.0|0)+127|0)&255)<<16;}
function AKc(){var b,c;b=new I5;C4();b.hl=0;b.gT=0;b.g3=0;b.ii=0;b.h7=0;b.j0=0;b.jD=0;b.i9=0;b.uU=0;b.x2=525000;c=new ArrayBuffer(2100000);b.nK=new Int32Array(c);b.tk=new Float32Array(c);AR7=b;}
function AAD(){C.call(this);}
function G_(b){if(b!==null)return b;b=new Dm;Bb(b,B(3));H(b);}
function EU(){BI.call(this);}
function O1(){var a=this;C.call(a);a.k7=null;a.cS=0;}
function D5(a,b){var c=new O1();AIx(c,a,b);return c;}
function AIx(a,b,c){a.k7=b;a.cS=c;}
function Ni(){var a=this;C.call(a);a.dA=null;a.cY=0;}
function F2(a){return a.dA.data[a.cY];}
function JS(a,b){var c;c=0;while(true){if(c>=a.dA.data.length)return (-1);if(b==a.dA.data[c])break;c=c+1|0;}return c;}
function O4(a,b){if(b>0)b=1;if(b<0)b=(-1);a.cY=a.cY-b|0;while(a.cY<0){a.cY=a.cY+a.dA.data.length|0;}while(a.cY>=a.dA.data.length){a.cY=a.cY-a.dA.data.length|0;}}
function KC(a,b){var c;if(b!==null){c=JS(a,b.bn);if(c>=0)a.dA.data[c]=a.dA.data[a.cY];a.dA.data[a.cY]=b.bn;}}
function Y1(){var a=this;C.call(a);a.l7=null;a.jL=0;}
function Xh(){C.call(this);}
function Jq(){var b,c;T();if(!AQ_)a:{AQL=null;if(!Ny(AQs)){b=Lr(AQs,0);AQL=b;if(b!==null){c=1;break a;}}c=0;}else{KS(AQs);AQL=null;AQN.data[29]=0;AQN.data[157]=0;AQN.data[28]=0;AQN.data[219]=0;AQN.data[220]=0;AQ_=0;c=0;}return c;}
function HY(){T();return AQL===null?0:BR($rt_str(AQL.type),B(336))?0:1;}
function CW(){T();return AQL===null?(-1):MA(AQL.which);}
function ZE(b){T();AQz=b;}
function JZ(b){T();if(AQ_){AQN.data[28]=0;AQN.data[29]=0;AQN.data[157]=0;AQN.data[219]=0;AQN.data[220]=0;}return AQN.data[b];}
function L3(){var a=this;C.call(a);a.hf=0;a.hg=0;a.hh=0;a.cP=0;}
function ZY(){var a=this;C.call(a);a.bf=0;a.bq=0;a.cn=0;a.eX=null;a.wM=null;a.u0=null;a.uV=Long_ZERO;a.kp=0;a.k_=0;a.kx=0;a.rF=0.0;a.ey=null;a.jw=null;a.ko=null;a.kV=0;a.gY=null;a.db=null;a.jR=0;a.vk=null;a.hS=0;a.lk=0;}
function AOs(){var a=new ZY();ALz(a);return a;}
function ALz(a){a.ey=CU();a.ko=new HK;a.kV=UW(a.ko);a.gY=CU();a.db=CU();a.jR=0;a.hS=0;a.lk=0;}
function X0(a,b,c,d,e){var f,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bf=b;a.bq=d;a.cn=c;a.eX=e;a.jw=$rt_createIntArray(K(b,d));G2(a.jw,a.cn);PY(a,0,0,b,d);b=0;if(b>=a.ey.X){Ep(a.gY);Nc(a);return;}f=Br(a.ey,b);$p=1;case 1:SP(f);if(N()){break _;}b=b+1|0;if(b>=a.ey.X){Ep(a.gY);Nc(a);return;}f=Br(a.ey,b);continue _;default:FI();}}De().s(a,b,c,d,e,f,$p);}
function Nc(a){var b,c,d,e,f;b=new HK;c=0;while(true){c=c+1|0;d=B3(b,a.bf/2|0)+(a.bf/4|0)|0;e=B3(b,a.bq/2|0)+(a.bq/4|0)|0;f=SQ(a,d,e)+1|0;if(c==10000){a.kp=d;a.k_=(-100);a.kx=e;return;}if(f>IS(a))break;}a.kp=d;a.k_=f;a.kx=e;}
function PY(a,b,c,d,e){var f,g,h,i,j,k,l;f=b+d|0;g=c+e|0;while(b<f){h=c;while(h<g){i=a.jw.data[b+K(h,a.bf)|0];j=a.cn-1|0;while(j>0&&!SX(a,b,j,h)){j=j+(-1)|0;}a:{a.jw.data[b+K(h,a.bf)|0]=j+1|0;d=BN(i,j);if(d){k=d>=0?j:i;if(d>0)j=i;l=0;while(true){if(l>=a.ey.X)break a;Iu(Br(a.ey,l),b-1|0,k-1|0,h-1|0,b+1|0,j+1|0,h+1|0);l=l+1|0;}}}h=h+1|0;}b=b+1|0;}}
function TD(a,b){Bg(a.ey,b);}
function WJ(a,b){AAf(a.ey,b);}
function SX(a,b,c,d){var e;Bj();e=ARc.data[Bp(a,b,c,d)];return e!==null?e.jf():0;}
function Jz(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=CU();d=b.ch|0;e=(b.cC|0)+1|0;f=b.cf|0;g=(b.cH|0)+1|0;h=b.cg|0;i=(b.cB|0)+1|0;if(b.ch<0.0)d=d+(-1)|0;if(b.cf<0.0)f=f+(-1)|0;if(b.cg<0.0)h=h+(-1)|0;while(d<e){j=f;while(j<g){k=h;while(k<i){if(d>=0&&j>=0&&k>=0&&d<a.bf&&j<a.cn&&k<a.bq){Bj();l=ARc.data[Bp(a,d,j,k)];if(l!==null){m=l.i6(d,j,k);if(m!==null)Bg(c,m);}}else if(!(d>=0&&j>=0&&k>=0&&d<a.bf&&k<a.bq)){Bj();m=ARh.i6(d,j,k);if(m!==null)Bg(c,m);}k=k+1|0;}j=j+1|0;}d=d+1|0;}return c;}
function Vh(a,b,c,d,e,f,g){var h,i;if(!a.jR){h=Bp(a,b,c,d);i=Bp(a,e,f,g);GS(a,b,c,d,i);GS(a,e,f,g,h);GM(a,b,c,d,i);GM(a,e,f,g,h);}}
function GS(a,b,c,d,e){return !a.jR?QP(a,b,c,d,e):0;}
function QP(a,b,c,d,e){var f,g,h,i,j;if(b>=0&&c>=0&&d>=0&&b<a.bf&&c<a.cn&&d<a.bq){if(e==a.eX.data[K(K(c,a.bq)+d|0,a.bf)+b|0])return 0;if(!e&&!(b&&d&&b!=(a.bf-1|0)&&d!=(a.bq-1|0))){f=c;if(f>=P1(a)&&f<IS(a)){Bj();e=APV.bn;}}g=a.eX.data[K(K(c,a.bq)+d|0,a.bf)+b|0];a.eX.data[K(K(c,a.bq)+d|0,a.bf)+b|0]=e<<24>>24;if(g){Bj();ARc.data[g].qq(a,b,c,d);}if(e){Bj();ARc.data[e].rE(a,b,c,d);}PY(a,b,d,1,1);e=0;g=b-1|0;h=c-1|0;i=d-1|0;b=b+1|0;c=c+1|0;j=d+1|0;while(e<a.ey.X){Iu(Br(a.ey,e),g,h,i,b,c,j);e=e+1|0;}return 1;}return 0;}
function EK(a,b,c,d,e){if(a.jR)return 0;if(!GS(a,b,c,d,e))return 0;GM(a,b,c,d,e);return 1;}
function Rp(a,b,c,d,e){if(!QP(a,b,c,d,e))return 0;GM(a,b,c,d,e);return 1;}
function GM(a,b,c,d,e){Fs(a,b-1|0,c,d,e);Fs(a,b+1|0,c,d,e);Fs(a,b,c-1|0,d,e);Fs(a,b,c+1|0,d,e);Fs(a,b,c,d-1|0,e);Fs(a,b,c,d+1|0,e);}
function Lg(a,b,c,d,e){if(b>=0&&c>=0&&d>=0&&b<a.bf&&c<a.cn&&d<a.bq){if(e==a.eX.data[K(K(c,a.bq)+d|0,a.bf)+b|0])return 0;a.eX.data[K(K(c,a.bq)+d|0,a.bf)+b|0]=e<<24>>24;return 1;}return 0;}
function Fs(a,b,c,d,e){var f;if(b>=0&&c>=0&&d>=0&&b<a.bf&&c<a.cn&&d<a.bq){Bj();f=ARc.data[a.eX.data[K(K(c,a.bq)+d|0,a.bf)+b|0]];if(f!==null)f.lr(a,b,c,d,e);}}
function Gu(a,b,c,d){return b>=0&&c>=0&&d>=0&&b<a.bf&&c<a.cn&&d<a.bq?(c<a.jw.data[b+K(d,a.bf)|0]?0:1):1;}
function Bp(a,b,c,d){return b>=0&&c>=0&&d>=0&&b<a.bf&&c<a.cn&&d<a.bq?a.eX.data[K(K(c,a.bq)+d|0,a.bf)+b|0]&255:0;}
function YR(a,b,c,d){var e;Bj();e=ARc.data[Bp(a,b,c,d)];return e!==null?e.gU():0;}
function Jn(a){var b,c,d;b=0;while(b<a.db.X){Br(a.db,b).ft();if(!Br(a.db,b).kK)c=b;else{d=a.db;c=b+(-1)|0;EE(d,b);}b=c+1|0;}}
function Ip(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;a.lk=a.lk+1|0;b=1;c=1;while(1<<b<a.bf){b=b+1|0;}while(1<<c<a.bq){c=c+1|0;}a:{d=a.bq-1|0;e=a.bf-1|0;f=a.cn-1|0;if(!(a.lk%5|0)){g=a.gY.X;h=0;while(true){if(h>=g)break a;i=EE(a.gY,0);if(i.lz>0){i.lz=i.lz-1|0;Bg(a.gY,i);}else{j=i.kh;k=i.kf;l=i.kg;if(j>=0&&k>=0&&l>=0&&j<a.bf&&k<a.cn&&l<a.bq?1:0){l=a.eX.data[K(K(i.kf,a.bq)+i.kg|0,a.bf)+i.kh|0];if(l==i.tQ&&l>0){Bj();ARc.data[l].id(a,i.kh,i.kf,i.kg,a.ko);}}}h=h+1|0;}}}a.hS=a.hS+K(K(a.bf,a.bq),a.cn)|0;m=a.hS/200|0;a.hS
=a.hS-(m*200|0)|0;k=0;while(k<m){a.kV=(a.kV*3|0)+1013904223|0;n=a.kV>>2;o=n&e;p=n>>b&d;l=n>>(b+c|0)&f;j=a.eX.data[K(K(l,a.bq)+p|0,a.bf)+o|0];Bj();if(ASu.data[j])ARc.data[j].id(a,o,l,p,a.ko);k=k+1|0;}}
function P1(a){return (a.cn/2|0)-2|0;}
function IS(a){return a.cn/2|0;}
function ABE(a,b){var c,d,e,f,g,h,i,j,k;c=b.ch|0;d=(b.cC|0)+1|0;e=b.cf|0;f=(b.cH|0)+1|0;g=b.cg|0;h=(b.cB|0)+1|0;if(b.ch<0.0)c=c+(-1)|0;if(b.cf<0.0)e=e+(-1)|0;if(b.cg<0.0)g=g+(-1)|0;if(c<0)c=0;if(e<0)e=0;if(g<0)g=0;if(d>a.bf)d=a.bf;if(f>a.cn)f=a.cn;if(h>a.bq)h=a.bq;while(c<d){i=e;while(i<f){j=g;while(j<h){Bj();k=ARc.data[Bp(a,c,i,j)];if(k!==null&&k.bd()!==ARd)return 1;j=j+1|0;}i=i+1|0;}c=c+1|0;}return 0;}
function Sh(a,b,c){var d,e,f,g,h,i,j,k,l;d=b.ch|0;e=(b.cC|0)+1|0;f=b.cf|0;g=(b.cH|0)+1|0;h=b.cg|0;i=(b.cB|0)+1|0;if(b.ch<0.0)d=d+(-1)|0;if(b.cf<0.0)f=f+(-1)|0;if(b.cg<0.0)h=h+(-1)|0;if(d<0)d=0;if(f<0)f=0;if(h<0)h=0;if(e>a.bf)e=a.bf;if(g>a.cn)g=a.cn;if(i>a.bq)i=a.bq;while(d<e){j=f;while(j<g){k=h;while(k<i){Bj();l=ARc.data[Bp(a,d,j,k)];if(l!==null&&l.bd()===c)return 1;k=k+1|0;}j=j+1|0;}d=d+1|0;}return 0;}
function Gh(a,b,c,d,e){var f;if(!a.jR){f=new QS;f.kh=b;f.kf=c;f.kg=d;f.tQ=e;if(e>0){Bj();f.lz=ARc.data[e].sg();}Bg(a.gY,f);}}
function Uo(a,b){var c;c=0;while(c<a.db.X){if(N0(Br(a.db,c).cD,b))return 0;c=c+1|0;}return 1;}
function Cl(a,b,c,d,e){var f,g,h,i;f=b-e;g=c-e;h=d-e;if(Eg(a,f,g,h))i=1;else{d=d+e;if(Eg(a,f,g,d))i=1;else{c=c+e;if(Eg(a,f,c,h))i=1;else if(Eg(a,f,c,d))i=1;else{b=b+e;i=Eg(a,b,g,h)?1:Eg(a,b,g,d)?1:!Eg(a,b,c,h)?Eg(a,b,c,d):1;}}}return i;}
function Eg(a,b,c,d){var e;a:{e=Bp(a,b|0,c|0,d|0);if(e>0){Bj();if(ARc.data[e].gU()){e=1;break a;}}e=0;}return e;}
function SQ(a,b,c){var d,e;d=a.cn;while(true){e=d-1|0;if(Bp(a,b,e,c)){Bj();if(ARc.data[Bp(a,b,e,c)].bd()===ARd)break;}if(d<=0)break;d=d+(-1)|0;}return d;}
function NM(a,b,c,d,e){a.kp=b;a.k_=c;a.kx=d;a.rF=e;}
function IR(a,b,c,d){return !Gu(a,b,c,d)?0.6000000238418579:1.0;}
function ABL(a,b,c,d){var e;a:{e=Bp(a,b,c,d);if(e>0){Bj();if(ARc.data[e].bd()===ARe){b=1;break a;}}b=0;}return b;}
function Cm(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;if(!(isNaN(b.bk)?1:0)&&!(isNaN(b.bl)?1:0)&&!(isNaN(b.bj)?1:0)){if(!(isNaN(c.bk)?1:0)&&!(isNaN(c.bl)?1:0)&&!(isNaN(c.bj)?1:0)){d=C3(c.bk)|0;e=C3(c.bl)|0;f=C3(c.bj)|0;g=C3(b.bk)|0;h=C3(b.bl)|0;i=C3(b.bj)|0;j=20;a:{while(true){k=j+(-1)|0;if(j<0)break;if(isNaN(b.bk)?1:0)break a;if(isNaN(b.bl)?1:0)break a;if(isNaN(b.bj)?1:0)break a;if(g==d&&h==e&&i==f)return null;l=999.0;m=999.0;n=999.0;o=BN(d,g);if(o>0)l=g+1.0;if(o<0)l=g;g=BN(e,h);if(g>0)m=h+1.0;if(g<
0)m=h;p=BN(f,i);if(p>0)n=i+1.0;if(p<0)n=i;q=999.0;r=999.0;s=999.0;t=c.bk-b.bk;u=c.bl-b.bl;v=c.bj-b.bj;if(l!==999.0)q=(l-b.bk)/t;if(m!==999.0)r=(m-b.bl)/u;if(n!==999.0)s=(n-b.bj)/v;if(q<r&&q<s){p=o<=0?5:4;b.bk=l;b.bl=b.bl+u*q;b.bj=b.bj+v*q;}else if(r>=s){p=p<=0?3:2;b.bk=b.bk+t*s;b.bl=b.bl+u*s;b.bj=n;}else{p=g<=0?1:0;b.bk=b.bk+t*r;b.bl=m;b.bj=b.bj+v*r;}g=C3(b.bk)|0;if(p==5)g=g+(-1)|0;h=C3(b.bl)|0;if(p==1)h=h+(-1)|0;i=C3(b.bj)|0;if(p==3)i=i+(-1)|0;o=Bp(a,g,h,i);if(o<=0){j=k;continue;}Bj();if(ARc.data[o].bd()===
ARd){b=new L3;b.hf=g;b.hg=h;b.hh=i;b.cP=p;return b;}j=k;}return null;}return null;}return null;}return null;}
function QI(){var a=this;Et.call(a);a.hI=0.0;a.p_=0.0;a.sI=0.0;a.h_=0.0;}
var AT8=null;function AK3(a,b,c,d){var e=new QI();ABB(e,a,b,c,d);return e;}
function ABB(a,b,c,d,e){IH(a,b);a.h_=(CJ()+1.0)*0.009999999776482582;HU(a,c,d,e);a.p_=CJ()*1239813.0;a.hI=CJ()*3.141592653589793*2.0;a.sI=1.0;}
function ADX(a){var b,c;a.y=a.r;a.z=a.p;a.x=a.s;if(a.p<(-100.0))O2(a);a.hI=a.hI+a.h_;a.h_=a.h_*0.99;a.h_=a.h_+(CJ()-CJ())*CJ()*CJ()*0.07999999821186066;b=Bn(a.hI);c=Bo(a.hI);if(a.fv&&CJ()<0.08)a.bZ=0.5;Hw(a,b,c,!a.fv?0.019999999552965164:0.10000000149011612);a.bZ=a.bZ-0.08;FQ(a,a.cz,a.bZ,a.cA);a.cz=a.cz*0.9100000262260437;a.bZ=a.bZ*0.9800000190734863;a.cA=a.cA*0.9100000262260437;if(a.fv){a.cz=a.cz*0.699999988079071;a.cA=a.cA*0.699999988079071;}}
function YL(a,b,c){var d,e,f,g,h,i,j,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bd(3553);d=3553;e=B(337);$p=1;case 1:$z=We(b,e);if(N()){break _;}f=$z;CR(d,f);E5();g=Long_toNumber(Cd())/1.0E9*10.0*a.sI+a.p_;h=Q0(a);Gv(h,h,h);i=Bn(g*0.6662);if(i<=0.0)i= -i;j= -i*5.0-23.0;Bt(a.y+(a.r-a.y)*c,a.z+(a.p-a.z)*c,a.x+(a.s-a.x)*c);DV(1.0,(-1.0),1.0);Bt(0.0,j*0.05833333358168602,0.0);By(a.hI*57.295780181884766
+180.0,0.0,1.0,0.0);DV((-1.0),1.0,1.0);AB2(AT8,g,1.0,0.0,0.0,0.0,0.05833333358168602);F_();BM(3553);return;default:FI();}}De().s(a,b,c,d,e,f,g,h,i,j,$p);}
function Vj(){AT8=AEw();}
function T$(){CC.call(this);}
function AIy(){var a=new T$();ACD(a);return a;}
function ACD(a){Eb(a);a.nt=1;}
function P4(a,b,c){var d,e,f;d=0;while(true){Gq();if(d>=ARn.X)return (-1);e=(((a.bw/2|0)+((d%8|0)*24|0)|0)-96|0)-3|0;f=(((a.bT/2|0)+((d/8|0)*24|0)|0)-48|0)+3|0;if(b>=e&&b<=(e+24|0)&&c>=(f-12|0)&&c<=(f+12|0))break;d=d+1|0;}return d;}
function ABQ(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=P4(a,b,c);D1((a.bw/2|0)-120|0,30,(a.bw/2|0)+120|0,180,(-1878719232),(-1070583712));if(d>=0){b=((a.bw/2|0)+((d%8|0)*24|0)|0)-96|0;e=((a.bT/2|0)+((d/8|0)*24|0)|0)-48|0;D1(b-3|0,e-8|0,b+23|0,(e+24|0)-6|0,(-1862270977),(-1056964609));}f=a.ei;g=B(338);b=a.bw/2|0;c=40;e=16777215;$p=1;case 1:ACZ(f,g,b,c,e);if(N()){break _;}g=a.bF.cF;C4();f
=AR7;h=B(182);$p=2;case 2:$z=We(g,h);if(N()){break _;}b=$z;CR(3553,b);Bd(3553);c=0;while(true){Gq();if(c>=ARn.X)break;h=Br(ARn,c);E5();Bt(((a.bw/2|0)+((c%8|0)*24|0)|0)-96|0,((a.bT/2|0)+((c/8|0)*24|0)|0)-48|0,0.0);DV(10.0,10.0,10.0);Bt(1.0,0.5,8.0);By((-30.0),1.0,0.0,0.0);By(45.0,0.0,1.0,0.0);if(d==c)DV(1.600000023841858,1.600000023841858,1.600000023841858);Bt((-1.5),0.5,0.5);DV((-1.0),(-1.0),(-1.0));Ct(f);h.hY(f,a.bF.g,0,(-2),0,0);B5(f);F_();c=c+1|0;}BM(3553);return;default:FI();}}De().s(a,b,c,d,e,f,g,h,$p);}
function ABA(a,b,c,d){var e;if(!d){e=a.bF.d.dG;b=P4(a,b,c);if(b>=0){Gq();KC(e,Br(ARn,b));}BA(a.bF,null);}}
function Ks(){C.call(this);}
function Go(){var a=this;Ks.call(a);a.c4=0.0;a.c2=0.0;a.c3=0.0;a.c1=0.0;a.c7=0.0;a.c8=0.0;a.c5=0.0;a.c6=0.0;a.da=0.0;a.c$=0.0;a.c_=0.0;a.c9=0.0;a.eg=0.0;a.eh=0.0;a.ee=0.0;a.ef=0.0;}
function DK(){var a=new Go();AFf(a);return a;}
function AFf(a){Ow(a);}
function Ow(a){a.c4=1.0;a.c2=0.0;a.c3=0.0;a.c1=0.0;a.c7=0.0;a.c8=1.0;a.c5=0.0;a.c6=0.0;a.da=0.0;a.c$=0.0;a.c_=1.0;a.c9=0.0;a.eg=0.0;a.eh=0.0;a.ee=0.0;a.ef=1.0;return a;}
function Hz(a){a.c4=0.0;a.c2=0.0;a.c3=0.0;a.c1=0.0;a.c7=0.0;a.c8=0.0;a.c5=0.0;a.c6=0.0;a.da=0.0;a.c$=0.0;a.c_=0.0;a.c9=0.0;a.eg=0.0;a.eh=0.0;a.ee=0.0;a.ef=0.0;return a;}
function Fb(a,b){a.c4=b.c4;a.c2=b.c2;a.c3=b.c3;a.c1=b.c1;a.c7=b.c7;a.c8=b.c8;a.c5=b.c5;a.c6=b.c6;a.da=b.da;a.c$=b.c$;a.c_=b.c_;a.c9=b.c9;a.eg=b.eg;a.eh=b.eh;a.ee=b.ee;a.ef=b.ef;return a;}
function Mi(a,b){Cv(b,a.c4);Cv(b,a.c2);Cv(b,a.c3);Cv(b,a.c1);Cv(b,a.c7);Cv(b,a.c8);Cv(b,a.c5);Cv(b,a.c6);Cv(b,a.da);Cv(b,a.c$);Cv(b,a.c_);Cv(b,a.c9);Cv(b,a.eg);Cv(b,a.eh);Cv(b,a.ee);Cv(b,a.ef);return a;}
function J3(a,b){b=b.data;b[0]=a.c4;b[1]=a.c2;b[2]=a.c3;b[3]=a.c1;b[4]=a.c7;b[5]=a.c8;b[6]=a.c5;b[7]=a.c6;b[8]=a.da;b[9]=a.c$;b[10]=a.c_;b[11]=a.c9;b[12]=a.eg;b[13]=a.eh;b[14]=a.ee;b[15]=a.ef;return a;}
function AMb(a,b){return Oc(a,b,a);}
function Ue(a,b){a.c4=a.c4*b.dP;a.c2=a.c2*b.dP;a.c3=a.c3*b.dP;a.c1=a.c1*b.dP;a.c7=a.c7*b.dR;a.c8=a.c8*b.dR;a.c5=a.c5*b.dR;a.c6=a.c6*b.dR;a.da=a.da*b.dQ;a.c$=a.c$*b.dQ;a.c_=a.c_*b.dQ;a.c9=a.c9*b.dQ;return a;}
function ADG(a,b,c){return Ru(a,b,c,a);}
function Ru(a,b,c,d){return AG_(b,c,a,d);}
function AG_(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;if(e===null)e=DK();f=b;g=Bo(f);h=Bn(f);i=1.0-g;j=c.dP*c.dR;k=c.dR*c.dQ;l=c.dP*c.dQ;m=c.dP*h;n=c.dR*h;o=c.dQ*h;p=c.dP*c.dP*i+g;b=j*i;q=b+o;r=l*i;s=r-n;t=b-o;u=c.dR*c.dR*i+g;b=k*i;v=b+m;w=r+n;x=b-m;y=c.dQ*c.dQ*i+g;z=d.c4*p+d.c7*q+d.da*s;ba=d.c2*p+d.c8*q+d.c$*s;bb=d.c3*p+d.c5*q+d.c_*s;bc=d.c1*p+d.c6*q+d.c9*s;bd=d.c4*t+d.c7*u+d.da*v;be=d.c2*t+d.c8*u+d.c$*v;bf=d.c3*t+d.c5*u+d.c_*v;r=d.c1*t+d.c6*u+d.c9*v;e.da=d.c4*w+d.c7*x+d.da*
y;e.c$=d.c2*w+d.c8*x+d.c$*y;e.c_=d.c3*w+d.c5*x+d.c_*y;e.c9=d.c1*w+d.c6*x+d.c9*y;e.c4=z;e.c2=ba;e.c3=bb;e.c1=bc;e.c7=bd;e.c8=be;e.c5=bf;e.c6=r;return e;}
function Oc(a,b,c){if(c===null)c=DK();c.eg=c.eg+a.c4*b.dP+a.c7*b.dR+a.da*b.dQ;c.eh=c.eh+a.c2*b.dP+a.c8*b.dR+a.c$*b.dQ;c.ee=c.ee+a.c3*b.dP+a.c5*b.dR+a.c_*b.dQ;c.ef=c.ef+a.c1*b.dP+a.c6*b.dR+a.c9*b.dQ;return c;}
function I4(a,b){var c;a:{if(b instanceof Go){b:{c:{b=b;if(a.c4!==b.c4)break c;if(a.c2!==b.c2)break c;if(a.c3!==b.c3)break c;if(a.c1!==b.c1)break c;if(a.c7!==b.c7)break c;if(a.c8!==b.c8)break c;if(a.c5!==b.c5)break c;if(a.c6!==b.c6)break c;if(a.da!==b.da)break c;if(a.c$!==b.c$)break c;if(a.c_!==b.c_)break c;if(a.c9!==b.c9)break c;if(a.eg!==b.eg)break c;if(a.eh!==b.eh)break c;if(a.ee!==b.ee)break c;if(a.ef===b.ef){c=1;break b;}}c=0;}if(c){c=1;break a;}}c=0;}return c;}
function RY(){}
function Lw(){}
function M0(){var a=this;DH.call(a);a.d9=null;a.hp=null;a.xr=null;a.l2=0;a.mE=null;}
function ACf(a,b,c){var d,e;a.d9=KJ(a,a.d9,b);d=Zj(a,b);e=K6(d,c);K6(d,c);a.l2=a.l2+1|0;return e;}
function Zj(a,b){var c,d;c=a.d9;while(true){if(c===null)return null;d=a.hp.gr(b,c.eH);if(!d)break;c=d>=0?c.cU:c.cX;}return c;}
function Sf(a,b,c){var d,e,f,g;d=a.d9;e=null;while(d!==null){f=a.hp.gr(b,d.eH);if(c)f= -f;if(!f)return d;if(f>=0)g=FJ(d,c);else{g=Ez(d,c);e=d;}d=g;}return e;}
function Sg(a,b,c){var d,e,f,g,h;d=I(FM,K2(a));e=0;f=a.d9;a:{while(f!==null){g=a.hp.gr(b,f.eH);if(c)g= -g;if(!g){h=d.data;c=e+1|0;h[e]=f;break a;}if(g>=0)f=FJ(f,c);else{h=d.data;g=e+1|0;h[e]=f;f=Ez(f,c);e=g;}}c=e;}return F9(d,c);}
function N7(a,b,c){var d,e,f,g;d=a.d9;e=null;while(d!==null){f=a.hp.gr(b,d.eH);if(c)f= -f;if(f>=0)g=FJ(d,c);else{g=Ez(d,c);e=d;}d=g;}return e;}
function Mj(a,b,c){var d,e,f,g,h;d=I(FM,K2(a));e=0;f=a.d9;while(f!==null){g=a.hp.gr(b,f.eH);if(c)g= -g;if(g>=0)f=FJ(f,c);else{h=d.data;g=e+1|0;h[e]=f;f=Ez(f,c);e=g;}}return F9(d,e);}
function Q8(a,b){var c,d,e,f,g;c=I(FM,K2(a));d=0;e=a.d9;while(e!==null){f=c.data;g=d+1|0;f[d]=e;e=Ez(e,b);d=g;}return F9(c,d);}
function KJ(a,b,c){var d,e;if(b===null){b=new FM;d=null;b.eH=c;b.hK=d;b.go=1;b.gt=1;return b;}e=a.hp.gr(c,b.eH);if(!e)return b;if(e>=0)b.cU=KJ(a,b.cU,c);else b.cX=KJ(a,b.cX,c);Ge(b);return T2(b);}
function Z6(a){var b,c,d;if(a.mE===null){b=new NO;c=null;d=null;b.wP=(-1);b.dw=a;b.pp=c;b.pw=1;b.o0=0;b.g9=d;b.mb=1;b.n9=0;b.sv=0;a.mE=b;}return a.mE;}
function K2(a){return a.d9===null?0:a.d9.go;}
function TH(b,c){var d,e;b=b.d9;d=null;while(b!==null){e=Ez(b,c);d=b;b=e;}return d;}
function PO(){var a=this;C.call(a);a.t3=0;a.lf=null;a.iy=null;a.ho=0;a.gf=0;}
function RS(){Dj.call(this);}
function AIA(a,b){$rt_putStdout(b);}
function ZN(){var a=this;C.call(a);a.gw=null;a.f5=0;a.fn=0;a.o4=0;}
function ANz(a){var b=new ZN();AE0(b,a);return b;}
function AE0(a,b){a.gw=I(C,b);a.f5=b;a.fn=0;a.o4=0;}
function Sk(a,b){var c,d;c=a.fn;while(true){a.fn=a.fn+1|0;if(a.fn>=a.f5)a.fn=0;if(a.fn==c){c=a.f5;a.f5=a.f5+(a.f5/2|0)|0;d=a.gw;a.gw=I(C,a.f5);CM(d,0,a.gw,0,c);return Sk(a,b);}if(a.gw.data[a.fn]!==null)continue;else break;}a.gw.data[a.fn]=b;a.o4=a.o4+1|0;return a.fn;}
function XC(a,b){if(b<a.f5&&b>=0)return a.gw.data[b];return null;}
function Ku(){}
function GL(){C.call(this);}
function Ql(){}
function Kd(){}
function QE(){}
function Kh(){}
function N8(){var a=this;GL.call(a);a.dP=0.0;a.dR=0.0;a.dQ=0.0;}
function J0(a,b,c,d){a.dP=b;a.dR=c;a.dQ=d;}
function Qi(){}
function Qy(){}
function E1(){var a=this;GL.call(a);a.gF=0.0;a.gG=0.0;a.gE=0.0;a.iJ=0.0;}
function ACv(){var a=new E1();AKl(a);return a;}
function AKl(a){return;}
function Ph(a,b){a.gF=b.gF;a.gG=b.gG;a.gE=b.gE;a.iJ=b.iJ;return a;}
function ANw(a){return a.gF;}
function AC0(a){return a.gG;}
function AKv(a){return a.gE;}
function AFW(a){return a.iJ;}
function K7(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(Dw(a)!==Dw(b))return 0;c=b;if(a.gF===c.gF&&a.gG===c.gG&&a.gE===c.gE&&a.iJ===c.iJ)return 1;return 0;}
function GR(){var a=this;C.call(a);a.kH=0;a.kW=0;a.oW=0;a.o6=0;a.n3=0;a.sd=0;a.b1=null;a.pN=null;a.pO=null;a.pP=null;a.mH=null;a.mZ=null;a.ot=null;a.nc=null;a.oZ=null;a.nS=null;a.mo=null;a.nb=null;a.ns=null;a.l8=null;a.mF=null;a.pb=null;a.k6=0;a.jk=0;a.jB=0;a.wI=0;a.xQ=0;a.mN=null;a.nH=null;a.ni=0;a.m0=null;a.oT=null;a.pE=null;a.pn=null;a.pv=null;a.oU=null;a.h2=null;a.it=null;a.oM=0;a.j_=0.0;a.j$=0.0;a.j9=0.0;a.j8=0.0;a.k1=0.0;a.lM=0.0;a.lR=0.0;a.kP=0.0;a.kE=0.0;a.kF=0.0;a.lE=0.0;a.lD=0.0;a.lC=0.0;a.lB=0.0;a.ln
=0.0;a.ll=0.0;a.lm=0.0;}
var AT9=null;var AT$=null;function AOt(a,b,c,d,e,f,g){var h=new GR();SN(h,a,b,c,d,e,f,g);return h;}
function L1(b){var c,d,e,f,g,h,i;c=AT9.data[b];if(c===null){d=0;e=0;f=0;g=0;h=0;i=0;if((b&1)==1)d=1;if((b&4)==4)e=1;if((b&8)==8)f=1;if((b&16)==16)g=1;if((b&32)==32)h=1;if((b&64)==64)i=1;c=AOt(b,d,e,f,g,h,i);AT9.data[b]=c;}return c;}
function SN(a,b,c,d,e,f,g,h){var i,j,k;AAe(a);a.pN=null;a.pO=null;a.pP=null;a.mH=null;a.mZ=null;a.ot=null;a.nc=null;a.oZ=null;a.nS=null;a.mo=null;a.nb=null;a.ns=null;a.l8=null;a.mF=null;a.pb=null;a.ni=0;a.m0=$rt_createFloatArray(16);a.oT=$rt_createFloatArray(16);a.pE=$rt_createFloatArray(16);a.pn=Hz(DK());a.pv=Hz(DK());a.oU=Hz(DK());a.h2=ACv();a.it=ACv();a.oM=0;a.j_=0.0;a.j$=0.0;a.j9=0.0;a.j8=0.0;a.k1=0.0;a.lM=0.0;a.lR=0.0;a.kP=0.0;a.kE=0.0;a.kF=0.0;a.lE=0.0;a.lD=0.0;a.lC=0.0;a.lB=0.0;a.ln=0.0;a.ll=0.0;a.lm
=0.0;a.kH=c;a.kW=d;a.oW=e;a.o6=f;a.n3=g;a.sd=h;if(AT$===null)AT$=WY(B(339));i=B(3);if(a.kH)i=Bf(E(E(Bh(),i),B(340)));if(a.kW)i=Bf(E(E(Bh(),i),B(341)));if(a.oW)i=Bf(E(E(Bh(),i),B(342)));if(a.o6)i=Bf(E(E(Bh(),i),B(343)));if(a.n3)i=Bf(E(E(Bh(),i),B(344)));if(a.sd)i=Bf(E(E(Bh(),i),B(345)));i=Bf(E(E(Bh(),i),AT$));j=K_(35633);LG(j,Bf(E(E(E(Bh(),M3()),B(346)),i)));QW(j);if(!Or(j)){Cg(Df(),Kf(Bf(E(E(Bh(),B(347)),MP(j))),B(158),B(348)));H(FY(B(349)));}k=K_(35632);LG(k,Bf(E(E(E(Bh(),M3()),B(350)),i)));QW(k);if(!Or(k))
{Cg(Df(),Kf(Bf(E(E(Bh(),B(347)),MP(k))),B(158),B(351)));H(FY(B(349)));}a.b1=Ss();QR(a.b1,j);QR(a.b1,k);b=1;a.k6=0;JQ(a.b1,a.k6,B(352));if(!a.kW)a.jk=(-1);else{a.jk=b;JQ(a.b1,a.jk,B(353));b=2;}if(!a.kH)a.jB=(-1);else{c=b+1|0;a.jB=b;JQ(a.b1,a.jB,B(354));b=c;}a.wI=(-1);a.xQ=b;Vw(a.b1);NN(a.b1,j);NN(a.b1,k);Li(j);Li(k);if(!AA3(a.b1)){Cg(Df(),Kf(Bf(E(E(Bh(),B(347)),ABU(a.b1))),B(158),B(355)));H(FY(B(349)));}PS(a.b1);a.pN=CS(a.b1,B(356));a.pO=CS(a.b1,B(357));a.pP=CS(a.b1,B(358));a.mo=CS(a.b1,B(359));if(a.oW){a.nb
=CS(a.b1,B(360));a.mF=CS(a.b1,B(361));a.pb=CS(a.b1,B(362));}if(a.o6){a.mH=CS(a.b1,B(363));a.mZ=CS(a.b1,B(364));a.ot=CS(a.b1,B(365));a.nc=CS(a.b1,B(366));a.oZ=CS(a.b1,B(367));a.nS=CS(a.b1,B(368));}if(a.n3)a.ns=CS(a.b1,B(369));Pq(CS(a.b1,B(370)),0);a.l8=CS(a.b1,B(371));a.mN=L0();a.nH=J5();Qu(a.mN);E_(34962,a.nH);P5(a);}
function P5(a){Kk(a.k6);Kq(a.k6,3,5126,0,28,0);if(a.kW){Kk(a.jk);Kq(a.jk,2,5126,0,28,12);}if(a.kH){Kk(a.jB);Kq(a.jB,4,5121,1,28,20);}}
function AAQ(a){PS(a.b1);}
function AD6(a){return;}
function WC(a,b){if(!I4(b,a.pn)){J3(Fb(a.pn,b),a.m0);Kl(a.pN,a.m0);}}
function W3(a,b){if(!I4(b,a.pv)){J3(Fb(a.pv,b),a.oT);Kl(a.pO,a.oT);}}
function Uv(a,b){if(!I4(b,a.oU)){J3(Fb(a.oU,b),a.pE);Kl(a.pP,a.pE);}}
function W_(a,b,c){if(!(K7(b,a.h2)&&K7(c,a.it))){Ph(a.h2,b);Ph(a.it,c);IP(a.mF,a.h2.gF,a.h2.gG,a.h2.gE);IP(a.pb,a.it.gF,a.it.gG,a.it.gE);}}
function VM(a,b){if(a.oM!=b){a.oM=b;Pq(a.mZ,b%2|0);FK(a.nS,b/2|0);}}
function Z0(a,b,c,d,e){if(!(a.j_===b&&a.j$===c&&a.j9===d&&a.j8===e)){a.j_=b;a.j$=c;a.j9=d;a.j8=e;M4(a.mH,a.j_,a.j$,a.j9,a.j8);}}
function Zx(a,b,c){if(!(a.k1===b&&a.lM===c)){a.k1=b;a.lM=c;FK(a.ot,a.k1);FK(a.nc,a.lM);}}
function Vd(a,b){if(a.lR!==b){a.lR=b;FK(a.oZ,a.lR);}}
function Tn(a,b){if(a.kP!==b){a.kP=b;FK(a.ns,a.kP);}}
function Yu(a,b,c){var d,e;if(!(a.kE===b&&a.kF===c)){a.kE=b;a.kF=c;d=a.l8;b=a.kE;c=a.kF;T();if(d!==null){e=AQf;d=d.gx;e.uniform2f(d,b,c);}}}
function V6(a,b,c,d,e){if(!(a.lE===b&&a.lD===c&&a.lC===d&&a.lB===e)){a.lE=b;a.lD=c;a.lC=d;a.lB=e;M4(a.mo,a.lE,a.lD,a.lC,a.lB);}}
function WR(a,b,c,d){if(!(a.ln===b&&a.ll===c&&a.lm===d)){a.ln=b;a.ll=c;a.lm=d;IP(a.nb,a.ln,a.ll,a.lm);}}
function YE(){AT9=I(GR,128);AT$=null;}
function F0(){C.call(this);this.vy=null;}
function AT_(){var a=new F0();PM(a);return a;}
function PM(a){a.vy=new C;}
function Px(){var a=this;F0.call(a);a.jT=null;a.hR=null;a.fR=0;a.ks=0;a.of=0;a.te=0;}
function AN1(a){var b=new Px();Va(b,a);return b;}
function Va(a,b){PM(a);a.te=(-1);a.jT=b;a.hR=$rt_createCharArray(CB(64,1024));}
function Xe(a){Rb(a);AAA(a.jT);a.jT=null;}
function Sd(a){var b,c,d,e;Rb(a);if(a.of&&a.fR>=a.ks)return null;b=new W;Ba(b);a:{while(true){if(a.fR>=a.ks&&!Pn(a,0))break a;c=a.hR.data;d=a.fR;a.fR=d+1|0;e=c[d];if(e==10)break;if(e==13){if(a.fR>=a.ks&&!Pn(a,0))break a;if(a.hR.data[a.fR]!=10)break a;a.fR=a.fR+1|0;break a;}CL(b,e);}}return X(b);}
function Pn(a,b){var c;if(a.of)return 0;a:{while(true){if(b>=a.hR.data.length)break a;c=Wu(a.jT,a.hR,b,a.hR.data.length-b|0);if(c==(-1)){a.of=1;break a;}if(!c)break;b=b+c|0;}}a.ks=b;a.fR=0;a.te=(-1);return 1;}
function Rb(a){var b;if(a.jT!==null)return;b=new BI;R(b);H(b);}
function GX(){var a=this;F0.call(a);a.oL=null;a.pi=null;a.ug=null;a.dL=null;a.q9=null;a.eK=null;a.lI=0;a.pd=0;}
function AUa(a){var b=new GX();Lh(b,a);return b;}
function Lh(a,b){var c;c=PH(Rh(QT(Rz()),ASn),ASn);PM(a);a.ug=$rt_createByteArray(8192);a.dL=I1(a.ug);a.q9=$rt_createCharArray(1024);a.eK=X9(a.q9);a.oL=b;a.pi=c;C7(a.eK,a.eK.b0);C7(a.dL,a.dL.b0);}
function AAA(a){a.oL.eT();}
function Wu(a,b,c,d){var e,f,g;if(a.pd&&!CX(a.eK))return (-1);e=0;a:{while(d>0){f=BY(d,BL(a.eK));Iy(a.eK,b,c+e|0,f);d=d-f|0;e=e+f|0;if(!CX(a.eK)){if(a.pd)g=0;else{Tv(a.eK);b:{while(true){if(!CX(a.dL)){if(a.lI)g=0;else{XP(a.dL);c:{while(true){if(!CX(a.dL))break c;g=a.oL.f$(a.dL.ci,a.dL.J,BL(a.dL));if(g==(-1)){a.lI=1;break c;}C7(a.dL,a.dL.J+g|0);if(!g)break;}}DD(a.dL);g=1;}if(!g)break b;}if(!EJ(Jb(a.pi,a.dL,a.eK,a.lI)))continue;else break;}}if(!CX(a.dL)&&a.lI&&Gf(OK(a.pi,a.eK)))a.pd=1;DD(a.eK);g=1;}if(!g)break a;}}}return e;}
function Yb(){GX.call(this);}
function APr(a){var b=new Yb();AJO(b,a);return b;}
function AJO(a,b){Lh(a,WM(b));}
function O3(){C.call(this);this.w_=null;}
function AMP(a,b,c){return b===null?c.p2(b):b.p2(c);}
function Rq(){var a=this;C.call(a);a.tb=null;a.ph=0;}
function L4(){var a=this;C.call(a);a.p5=null;a.v2=0;a.v1=0;a.wl=0;a.x4=0;}
function Sc(){var a=this;C.call(a);a.qk=null;a.qj=null;}
function S$(a){var b,c;b=a.qk;c=a.qj;Ed(b);CZ(c,null);}
function OH(){var a=this;C.call(a);a.d3=null;a.o2=null;}
function T6(a,b){var c,d,e,f,g,h,i,j,k,l;if(Fk()===null)AQI=AQa.createElement("canvas");if(Fk().width<a.d3.width){b=Fk();c=a.d3.width;b.width=c;}if(Fk().height<a.d3.height){b=Fk();c=a.d3.height;b.height=c;}if(H1()===null)AQJ=Fk().getContext("2d");b=H1();d=a.d3.width;e=a.d3.height;b.clearRect(0.0,0.0,d,e);b=H1();c=a.d3;d=a.d3.width;e=a.d3.height;b.drawImage(c,0.0,0.0,d,e);b=H1();d=a.d3.width;e=a.d3.height;f=b.getImageData(0.0,0.0,d,e);c=f.data;g=K(f.width,f.height);QX($rt_str(a.d3.src));if(c.byteLength<(g*4|
0)){CZ(a.o2,null);return;}h=$rt_createIntArray(g);i=h.data;j=0;g=i.length;while(j<g){k=j*4|0;i[j]=c[k]<<16|c[k+1|0]<<8|c[k+2|0]|c[k+3|0]<<24;j=j+1|0;}b=a.o2;c=new Lj;k=f.width;l=f.height;if(g==K(k,l)){c.nG=k;c.rO=l;c.uu=1;c.mu=h;CZ(b,c);return;}b=new BW;Bb(b,B(372));H(b);}
function AIu(a,b){T6(a,b);}
function OG(){var a=this;C.call(a);a.ta=null;a.t8=null;}
function T_(a,b){QX($rt_str(a.ta.src));CZ(a.t8,null);}
function AIO(a,b){T_(a,b);}
function Qa(){C.call(this);this.sw=null;}
function Ri(){C.call(this);}
var AT0=null;function X8(){var b;b=new NH;b.qN=AGW(B(3));b.pm=B(23);AT0=b;}
function YO(){var a=this;C.call(a);a.gB=0.0;a.ch=0.0;a.cf=0.0;a.cg=0.0;a.cC=0.0;a.cH=0.0;a.cB=0.0;}
function Ie(a,b,c,d,e,f){var g=new YO();AFH(g,a,b,c,d,e,f);return g;}
function AFH(a,b,c,d,e,f,g){a.gB=0.0;a.ch=b;a.cf=c;a.cg=d;a.cC=e;a.cH=f;a.cB=g;}
function YK(a,b,c,d){var e,f,g,h,i,j,k;e=a.ch;f=a.cf;g=a.cg;h=a.cC;i=a.cH;j=a.cB;k=BN(b,0.0);if(k<0)e=e+b;if(k>0)h=h+b;k=BN(c,0.0);if(k<0)f=f+c;if(k>0)i=i+c;k=BN(d,0.0);if(k<0)g=g+d;if(k>0)j=j+d;return Ie(e,f,g,h,i,j);}
function O$(a,b,c,d){return Ie(a.ch-b,a.cf-c,a.cg-d,b+a.cC,c+a.cH,a.cB+d);}
function Sr(a,b,c,d){return Ie(a.ch+d,a.cf+c,a.cg+d,a.cC+b,a.cH+c,a.cB+d);}
function Uk(a,b,c){var d,e;if(b.cH>a.cf&&b.cf<a.cH){if(b.cB>a.cg&&b.cg<a.cB){if(c<=0.0)d=c;else if(b.cC>a.ch)d=c;else{d=a.ch-b.cC-a.gB;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.ch<a.cC)e=d;else{e=a.cC-b.ch+a.gB;if(e<=d)e=d;}return e;}return c;}return c;}
function T0(a,b,c){var d,e;if(b.cC>a.ch&&b.ch<a.cC){if(b.cB>a.cg&&b.cg<a.cB){if(c<=0.0)d=c;else if(b.cH>a.cf)d=c;else{d=a.cf-b.cH-a.gB;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.cf<a.cH)e=d;else{e=a.cH-b.cf+a.gB;if(e<=d)e=d;}return e;}return c;}return c;}
function ABy(a,b,c){var d,e;if(b.cC>a.ch&&b.ch<a.cC){if(b.cH>a.cf&&b.cf<a.cH){if(c<=0.0)d=c;else if(b.cB>a.cg)d=c;else{d=a.cg-b.cB-a.gB;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.cg<a.cB)e=d;else{e=a.cB-b.cg+a.gB;if(e<=d)e=d;}return e;}return c;}return c;}
function N0(a,b){return b.cC>a.ch&&b.ch<a.cC?(b.cH>a.cf&&b.cf<a.cH?(b.cB>a.cg&&b.cg<a.cB?1:0):0):0;}
function JO(a,b,c,d){a.ch=a.ch+b;a.cf=a.cf+c;a.cg=a.cg+d;a.cC=a.cC+b;a.cH=a.cH+c;a.cB=a.cB+d;}
function Dp(){BW.call(this);}
function P0(){C.call(this);this.fT=null;}
function PV(){var a=this;C.call(a);a.fQ=null;a.nr=0;}
function RW(){C.call(this);this.gx=null;}
function Qg(){}
function NH(){var a=this;C.call(a);a.qN=null;a.pm=null;}
function Iw(a,b){var c;c=new Oa;c.um=a;c.ir=b;return c;}
function AFC(a){return a.pm;}
function ANX(a){return 0;}
function Gp(){var a=this;C.call(a);a.iG=null;a.rU=null;a.s_=Long_ZERO;a.sE=0;}
function AUb(a){var b=new Gp();N6(b,a);return b;}
function N6(a,b){a.s_=Bq();a.iG=b;}
function ALS(a){return a.iG;}
function Pz(a){return a.sE?0:1;}
function Nn(a){a.s_=Bq();}
function WI(){Gp.call(this);this.jV=null;}
function AGW(a){var b=new WI();ANC(b,a);return b;}
function ANC(a,b){N6(a,b);b=new PK;Vb(b);b.lH=0;b.gD=null;a.jV=b;}
function AJ9(a){return 1;}
function AL5(a){return 0;}
function Zp(a,b){return XY(a.jV,b);}
function AFU(a,b,c,d){return null;}
function AFM(a,b){var c;if(!Pz(a)){b=new BI;Bb(b,B(373));H(b);}if(GW(a.jV,b))return null;c=new RU;N6(c,b);c.gP=$rt_createByteArray(0);PD(a,c);return c;}
function ADC(a,b){var c;if(Pz(a)&&Zp(a,b)===null){c=AGW(b);PD(a,c);return c;}return null;}
function PD(a,b){var c,d;if(!GW(a.jV,b.iG)){b.rU=a;ABj(a.jV,b.iG,b);Nn(a);return;}c=new BW;d=new W;Ba(d);Bb(c,X(E(E(E(d,B(374)),b.iG),B(375))));H(c);}
function PK(){var a=this;Jt.call(a);a.lH=0;a.gD=null;a.dk=null;}
function AD0(a,b){return I(Kz,b);}
function XY(a,b){var c,d,e,f;if(b===null)c=Hy(a);else{d=JV(b);c=Hd(a,b,(d&2147483647)%a.ca.data.length|0,d);}if(c===null)return null;if(a.lH&&a.dk!==c){e=c.ea;f=c.dD;f.ea=e;if(e===null)a.gD=f;else e.dD=f;c.dD=null;c.ea=a.dk;a.dk.dD=c;a.dk=c;}return c.d0;}
function OQ(a,b,c,d){var e;e=new Kz;YY(e,b,d);e.dD=null;e.ea=null;e.d6=a.ca.data[c];a.ca.data[c]=e;JL(a,e);return e;}
function ABj(a,b,c){return ABV(a,b,c);}
function ABV(a,b,c){var d,e,f,g,h,i;if(!a.dl){a.gD=null;a.dk=null;}if(b===null){d=Hy(a);if(d!==null)JL(a,d);else{a.dV=a.dV+1|0;e=a.dl+1|0;a.dl=e;if(e>a.iZ)HX(a);d=OQ(a,null,0,0);}}else{f=JV(b);e=f&2147483647;g=e%a.ca.data.length|0;d=Hd(a,b,g,f);if(d!==null)JL(a,d);else{a.dV=a.dV+1|0;h=a.dl+1|0;a.dl=h;if(h>a.iZ){HX(a);g=e%a.ca.data.length|0;}d=OQ(a,b,g,f);}}i=d.d0;d.d0=c;return i;}
function JL(a,b){var c,d;if(a.dk===b)return;if(a.gD===null){a.gD=b;a.dk=b;return;}c=b.ea;d=b.dD;if(c!==null){if(d===null)return;if(a.lH){c.dD=d;d.ea=c;b.dD=null;b.ea=a.dk;a.dk.dD=b;a.dk=b;}return;}if(d===null){b.ea=a.dk;b.dD=null;a.dk.dD=b;a.dk=b;}else if(a.lH){a.gD=d;d.ea=null;b.ea=a.dk;b.dD=null;a.dk.dD=b;a.dk=b;}}
function AKG(a,b){var c,d,e;c=P$(a,b);if(c===null)return null;d=c.ea;e=c.dD;if(d===null)a.gD=e;else d.dD=e;if(e===null)a.dk=d;else e.ea=d;return c.d0;}
function AIR(a,b){return 0;}
function UT(){C.call(this);}
function T8(){C.call(this);}
function Jv(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function ANS(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=I(LH,16384);d=c.data;e=$rt_createByteArray(16384);f=e.data;g=0;h=0;i=0;j=0;while(j<O(b)){k=Jv(M(b,j));if(k==64){j=j+1|0;k=Jv(M(b,j));l=0;m=1;n=0;while(n<3){j=j+1|0;l=l|K(m,Jv(M(b,j)));m=m*64|0;n=n+1|0;}}else if(k<32)l=1;else{k=(k-32|0)<<24>>24;j=j+1|0;l=Jv(M(b,j));}if(!k&&l>=128){if(g>0){m=h+1|0;d[h]=AF9(i,i+g|0,H5(e,g));h=m;}i=i+(g+l|0)|0;g=0;}else{o=g+l|0;if(o<f.length)n=h;else{n=h+1|0;d[h]=AF9(i,i+g|0,H5(e,g));i=i+o|0;g=0;}while(true){m=l+(-1)|0;if(l<=0)break;o
=g+1|0;f[g]=k;g=o;l=m;}h=n;}j=j+1|0;}return F9(c,h);}
function QA(){var a=this;C.call(a);a.qQ=null;a.rP=0;}
function Wd(){C.call(this);}
function Tb(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.qQ.data;f=b.rP;b.rP=f+1|0;f=e[f];g=f<34?f-32|0:f>=92?(f-32|0)-2|0:(f-32|0)-1|0;h=(g%2|0)!=1?0:1;c=c+K(d,g/2|0)|0;d=d*46|0;if(!h)break;}h=c/2|0;if(c%2|0)h= -h;return h;}
function EH(){BQ.call(this);}
function Gt(){var a=this;F8.call(a);a.cZ=null;a.r9=0;a.c0=0;}
function AUc(a,b,c,d,e,f){var g=new Gt();Lq(g,a,b,c,d,e,f);return g;}
function Lq(a,b,c,d,e,f,g){MU(a,c,e,f);a.c0=b;a.cZ=d;a.r9=g;}
function AH4(a){return a.r9;}
function L6(){Gt.call(this);}
function AGg(a,b){var c,d;c=a.cZ.ci.data;d=a.c0;b=b*4|0;return c[d+b|0]&255|(a.cZ.ci.data[(a.c0+b|0)+1|0]&255)<<8|(a.cZ.ci.data[(a.c0+b|0)+2|0]&255)<<16|(a.cZ.ci.data[(a.c0+b|0)+3|0]&255)<<24;}
function ACt(a,b,c){var d,e;d=a.cZ.ci.data;e=a.c0;b=b*4|0;d[e+b|0]=c<<24>>24;a.cZ.ci.data[(a.c0+b|0)+1|0]=c>>8<<24>>24;a.cZ.ci.data[(a.c0+b|0)+2|0]=c>>16<<24>>24;a.cZ.ci.data[(a.c0+b|0)+3|0]=c>>24<<24>>24;}
function Py(){Gt.call(this);}
function ALO(a,b){var c,d;c=a.cZ.ci.data;d=a.c0;b=b*4|0;return (c[d+b|0]&255)<<24|(a.cZ.ci.data[(a.c0+b|0)+1|0]&255)<<16|(a.cZ.ci.data[(a.c0+b|0)+2|0]&255)<<8|a.cZ.ci.data[(a.c0+b|0)+3|0]&255;}
function ADu(a,b,c){var d,e;d=a.cZ.ci.data;e=a.c0;b=b*4|0;d[e+b|0]=c>>24<<24>>24;a.cZ.ci.data[(a.c0+b|0)+1|0]=c>>16<<24>>24;a.cZ.ci.data[(a.c0+b|0)+2|0]=c>>8<<24>>24;a.cZ.ci.data[(a.c0+b|0)+3|0]=c<<24>>24;}
function Kz(){var a=this;HF.call(a);a.dD=null;a.ea=null;}
function Ef(){}
function Nj(){}
function XG(){var a=this;C.call(a);a.dO=null;a.fj=null;a.gC=null;a.jy=0;a.la=0;a.e2=null;}
function AD$(a,b,c,d){var e=new XG();AEe(e,a,b,c,d);return e;}
function AEe(a,b,c,d,e){a.e2=b;a.la=a.e2.cV;a.dO=c;a.fj=d;a.jy=e;}
function W2(a){return a.dO===null?0:1;}
function TI(a){var b;PR(a);if(a.dO===null){b=new Id;R(b);H(b);}b=a.dO.qM;a.gC=a.dO;a.fj=a.dO;a.dO=a.dO.eM;a.jy=a.jy+1|0;return b;}
function ABH(a){var b,c;if(a.gC===null){b=new Dv;R(b);H(b);}b=a.e2;c=a.gC;if(c.fh===null)b.kR=c.eM;else c.fh.eM=c.eM;if(c.eM===null)b.j3=c.fh;else c.eM.fh=c.fh;b.eW=b.eW-1|0;b.cV=b.cV+1|0;if(a.gC===a.fj){a.fj=!W2(a)?null:a.dO.fh;a.jy=a.jy-1|0;}else if(a.gC===a.dO)a.dO=!Us(a)?null:a.fj.eM;a.la=a.e2.cV;a.gC=null;}
function Us(a){return a.fj===null?0:1;}
function Wg(a,b){var c;PR(a);c=new Qc;c.qM=b;c.fh=a.fj;c.eM=a.dO;if(a.fj!==null)a.fj.eM=c;else a.e2.kR=c;if(a.dO!==null)a.dO.fh=c;else a.e2.j3=c;a.fj=c;b=a.e2;b.eW=b.eW+1|0;b=a.e2;b.cV=b.cV+1|0;a.la=a.e2.cV;a.gC=null;}
function PR(a){var b;if(a.la>=a.e2.cV)return;b=new Gw;R(b);H(b);}
function Qc(){var a=this;C.call(a);a.qM=null;a.eM=null;a.fh=null;}
function L5(){Dj.call(this);this.iN=null;}
var AUd=null;function ADF(a){var b=new L5();Wp(b,a);return b;}
function Wp(a,b){var c,$$je;if(C8(Nr(b))){b=new EU;Bb(b,B(376));H(b);}c=Yh(b);if(c!==null)a:{try{Te(c,Nr(b));break a;}catch($$e){$$je=D($$e);if($$je instanceof BI){}else{throw $$e;}}b=new EU;R(b);H(b);}a.iN=M2(Ht(b),0,1,0);if(a.iN!==null)return;b=new EU;R(b);H(b);}
function MG(a,b,c,d){var e;G_(b);if(c>=0&&d>=0&&c<=(b.data.length-d|0)){LB(a);TM(a.iN,b,c,d);return;}e=new BB;R(e);H(e);}
function Q1(a){LB(a);}
function YJ(a){a.iN=null;}
function LB(a){var b;if(a.iN!==null)return;b=new BI;Bb(b,B(292));H(b);}
function S1(){AUd=$rt_createByteArray(1);}
function Jg(){CC.call(this);}
function ACK(a){Ep(a.bi);Bg(a.bi,CY(0,(a.bw/2|0)-100|0,a.bT/4|0,B(377)));Bg(a.bi,CY(1,(a.bw/2|0)-100|0,(a.bT/4|0)+24|0,B(378)));Bg(a.bi,CY(2,(a.bw/2|0)-100|0,(a.bT/4|0)+48|0,B(379)));Bg(a.bi,CY(3,(a.bw/2|0)-100|0,(a.bT/4|0)+72|0,B(380)));Bg(a.bi,CY(4,(a.bw/2|0)-100|0,(a.bT/4|0)+120|0,B(381)));if(a.bF.fC===null){Br(a.bi,2).d2=0;Br(a.bi,3).d2=0;}}
function Xi(a,b){var c,d,e;if(!b.cy){c=a.bF;d=new LF;e=a.bF.F;Eb(d);d.tf=B(382);d.q8=a;d.iE=e;BA(c,d);}if(b.cy==1){c=a.bF;d=new OB;Eb(d);d.qn=a;BA(c,d);}if(a.bF.fC!==null){if(b.cy==2){c=a.bF;d=new O5;XH(d,a);d.n1=B(383);BA(c,d);}if(b.cy==3)BA(a.bF,AON(a));}if(b.cy==4){BA(a.bF,null);D3(a.bF);}}
function Xp(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:D1(0,0,a.bw,a.bT,1610941696,(-1607454624));d=a.ei;e=B(384);f=a.bw/2|0;g=40;h=16777215;$p=1;case 1:ACZ(d,e,f,g,h);if(N()){break _;}$p=2;case 2:WT(a,b,c);if(N()){break _;}return;default:FI();}}De().s(a,b,c,d,e,f,g,h,$p);}
function O7(){C.call(this);this.pq=null;}
function V8(a,b,c){var d,e;d=b;e=c;return Hs(d,a.pq)>=Hs(e,a.pq)?1:(-1);}
function Kp(){CC.call(this);}
function Z3(){var a=this;Et.call(a);a.eY=0.0;a.eZ=0.0;a.e1=0.0;a.pV=0;a.tN=0.0;a.qE=0.0;a.lv=0;a.nD=0;a.rX=0.0;a.q2=0.0;}
function AOu(a,b,c,d,e,f,g,h){var i=new Z3();AIH(i,a,b,c,d,e,f,g,h);return i;}
function AIH(a,b,c,d,e,f,g,h,i){var j;IH(a,b);a.lv=0;a.nD=0;a.pV=i.dY;a.q2=i.qa;ABc(a,0.20000000298023224,0.20000000298023224);a.io=a.kQ/2.0;HU(a,c,d,e);a.eY=f+(CJ()*2.0-1.0)*0.4000000059604645;a.eZ=g+(CJ()*2.0-1.0)*0.4000000059604645;a.e1=h+(CJ()*2.0-1.0)*0.4000000059604645;j=(CJ()+CJ()+1.0)*0.15000000596046448;c=EO(a.eY*a.eY+a.eZ*a.eZ+a.e1*a.e1);a.eY=a.eY/c*j*0.4000000059604645;a.eZ=a.eZ/c*j*0.4000000059604645+0.10000000149011612;a.e1=a.e1/c*j*0.4000000059604645;a.tN=CJ()*3.0;a.qE=CJ()*3.0;a.rX=CJ()*0.5+0.5;a.nD
=4.0/(CJ()*0.9+0.1)|0;a.lv=0;a.od=0;}
function XU(a){var b;a.y=a.r;a.z=a.p;a.x=a.s;b=a.lv;a.lv=b+1|0;if(b>=a.nD)O2(a);a.eZ=a.eZ-0.04*a.q2;FQ(a,a.eY,a.eZ,a.e1);a.eY=a.eY*0.9800000190734863;a.eZ=a.eZ*0.9800000190734863;a.e1=a.e1*0.9800000190734863;if(a.fv){a.eY=a.eY*0.699999988079071;a.e1=a.e1*0.699999988079071;}}
function VS(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;i=((a.pV%16|0)+a.tN/4.0)/16.0;j=i+0.015609375201165676;k=((a.pV/16|0)+a.qE/4.0)/16.0;l=k+0.015609375201165676;m=0.10000000149011612*a.rX;n=a.y+(a.r-a.y)*c;o=a.z+(a.p-a.z)*c;p=a.x+(a.s-a.x)*c;c=d*m;d=n-c;g=g*m;q=d-g;e=e*m;r=o-e;f=f*m;s=p-f;h=h*m;t=s-h;u=i;v=l;Q(b,q,r,t,u,v);q=d+g;t=o+e;w=s+h;x=k;Q(b,q,t,w,u,x);c=n+c;q=c+g;d=p+f;u=d+h;w=j;Q(b,q,t,u,w,x);Q(b,c-g,r,d-h,w,v);}
function Es(){BQ.call(this);}
function DU(){Es.call(this);}
function E6(){BQ.call(this);}
function J7(){var a=this;En.call(a);a.ip=null;a.rt=null;a.kz=null;a.he=null;a.m$=0;}
function NU(b){if(b!==null)return b;b=new Dm;R(b);H(b);}
function AHw(a){if(!a.m$){UE(a);a.m$=1;Q1(a.ip);YJ(a.ip);}}
function UE(a){N$(a);if(a.he.J>0){MG(a.ip,a.kz,0,a.he.J);DG(a.he);}Q1(a.ip);}
function N$(a){var b;if(!a.m$)return;b=new BI;Bb(b,B(385));H(b);}
function AJk(a,b,c,d){var e,f,g,$$je;e=a.jX;AKW(e);a:{try{N$(a);if(b===null)H(AOm());if(!(c>=0&&c<=(b.data.length-d|0)&&d>=0))H(AOd());f=OO(b,c,d);while(CX(f)){if(!EJ(L2(a.rt,f,a.he,0)))continue;MG(a.ip,a.kz,0,YC(a.he));L9(a.he);}ABR(e);}catch($$e){$$je=D($$e);g=$$je;break a;}return;}ABR(e);H(g);}
function Xj(){J7.call(this);}
function AOQ(a){var b=new Xj();ALl(b,a);return b;}
function ALl(a,b){var c;c=NU(ADF(b));b=Rz();c=NU(c);b=RC(O8(RE(b),ASn),ASn);JU(a);a.kz=$rt_createByteArray(512);a.he=I1(a.kz);a.ip=NU(c);a.rt=b;}
function KN(){}
function OF(){C.call(this);}
function T4(a){var b,c,d;T();AQc.requestPointerLock();b=Bq();if(PB())clearTimeout(PB());IB(0);if(Long_lt(Long_sub(b,NA()),Long_fromInt(3000))){c=new LI;c.xu=a;d=3000-Long_sub(b,NA()).lo|0;IB(setTimeout(Cy(c,"onTimer"),d));}}
function AMG(a){T4(a);}
function EP(){C.call(this);}
function Ux(){var a=this;EP.call(a);a.rQ=null;a.t9=null;}
function Si(a,b){var c=new Ux();AIX(c,a,b);return c;}
function AIX(a,b,c){a.rQ=b;a.t9=c;}
function HG(a,b,c){return Fn(a.rQ,b+Fn(a.t9,b,c),c);}
function Su(){var a=this;EP.call(a);a.ng=null;a.rg=0;}
function Dx(a,b){var c=new Su();AHx(c,a,b);return c;}
function AHx(a,b,c){var d,e,f,g,h,i;a.ng=I(Jk,8);a.rg=8;d=0;while(d<8){e=a.ng;f=new Jk;f.ct=$rt_createIntArray(512);g=0;while(g<256){h=f.ct.data;c=g+1|0;h[g]=g;g=c;}c=0;while(c<256){g=B3(b,256-c|0)+c|0;i=f.ct.data[c];f.ct.data[c]=f.ct.data[g];f.ct.data[g]=i;f.ct.data[c+256|0]=f.ct.data[c];c=c+1|0;}e.data[d]=f;d=d+1|0;}}
function Fn(a,b,c){var d,e,f;d=0.0;e=1.0;f=0;while(f<a.rg){d=d+S0(a.ng.data[f],b/e,c/e)*e;e=e*2.0;f=f+1|0;}return d;}
function Rl(){}
function Oa(){var a=this;C.call(a);a.um=null;a.ir=null;}
function JA(a){var b;b=FT(a);return b!==null&&b.oX()?1:0;}
function P7(a){var b;b=FT(a);return b!==null&&b.oK()?1:0;}
function M2(a,b,c,d){var e;e=FT(a);return e===null?null:e.mB(b,c,d);}
function Te(a,b){var c;c=FT(a);if(c===null){c=new BI;Bb(c,B(386));H(c);}return c.qm(b)===null?0:1;}
function Xx(a,b){var c;c=FT(a);return c!==null&&c.qW(b)!==null?1:0;}
function FT(a){var b,c,d;b=a.um.qN;c=0;if(D8(a.ir,B(23)))c=1;a:{while(c<O(a.ir)){d=C_(a.ir,47,c);if(d<0)d=O(a.ir);b=b.tA(BK(a.ir,c,d));if(b===null)break a;c=d+1|0;}}return b;}
function R1(){CK.call(this);this.sL=null;}
function AFL(a){var b,c;b=TP(Z6(a.sL));c=new PP;c.vv=a;c.mw=b;return c;}
function LN(){var a=this;C.call(a);a.lL=0;a.tR=0;a.rz=0;a.st=0;a.iI=null;}
function HJ(a){return a.lL>=a.rz?0:1;}
function H2(a){var b,c;if(a.tR<a.iI.cV){b=new Gw;R(b);H(b);}a.st=a.lL;b=a.iI;c=a.lL;a.lL=c+1|0;return b.h1(c);}
function Of(){var a=this;C.call(a);a.e=null;a.dS=0;a.mM=null;a.qy=0;a.fc=0;a.gg=0;a.cp=0;a.n7=null;}
function V5(a,b){var c,d,e,f,g,h,i,j;c=new Pa;c.kC=(-1);c.kJ=(-1);c.u7=a;c.tD=a.n7;c.i3=b;c.kC=0;c.kJ=O(c.i3);d=new Qz;e=c.kC;f=c.kJ;g=a.fc;h=AAO(a);i=YM(a);d.g_=(-1);j=g+1|0;d.q3=j;d.en=$rt_createIntArray(j*2|0);d.jS=$rt_createIntArray(i);G2(d.jS,(-1));if(h>0)d.nO=$rt_createIntArray(h);G2(d.en,(-1));R2(d,b,e,f);c.cE=d;return c;}
function Tk(a,b,c){var d,e,f,g,h,i;d=CU();e=V5(a,b);f=0;g=0;if(!O(b)){h=I(Ca,1);h.data[0]=B(3);return h;}while(V1(e)){i=f+1|0;if(i>=c&&c>0)break;Bg(d,BK(b,g,ABD(e)));g=Vo(e);f=i;}a:{Bg(d,BK(b,g,O(b)));f=f+1|0;if(!c)while(true){f=f+(-1)|0;if(f<0)break;if(O(Br(d,f)))break a;EE(d,f);}}if(f<0)f=0;return I7(d,I(Ca,f));}
function Tj(a,b){return Tk(a,b,0);}
function IU(a){return a.e.dm;}
function Sa(a,b,c,d){var e,f,g,h,i;e=CU();f=a.dS;g=0;if(c!=a.dS)a.dS=c;a:{switch(b){case -1073741784:h=new OM;c=a.cp+1|0;a.cp=c;E7(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Nu;c=a.cp+1|0;a.cp=c;E7(h,c);break a;case -33554392:h=new Pk;c=a.cp+1|0;a.cp=c;E7(h,c);break a;default:a.fc=a.fc+1|0;if(d!==null)h=APf(a.fc);else{h=new Fe;E7(h,0);g=1;}if(a.fc<=(-1))break a;if(a.fc>=10)break a;a.mM.data[a.fc]=h;break a;}h=new R4;E7(h,(-1));}while(true){if(EN(a.e)&&a.e.v==(-536870788))
{d=AMv(Ci(a,2),Ci(a,64));while(!Di(a.e)&&EN(a.e)&&!(a.e.v&&a.e.v!=(-536870788)&&a.e.v!=(-536870871))){CP(d,Bw(a.e));if(a.e.b5!=(-536870788))continue;Bw(a.e);}i=JB(a,d);i.bR(h);}else if(a.e.b5==(-536870788)){i=Gk(h);Bw(a.e);}else{i=MY(a,h);if(a.e.b5==(-536870788))Bw(a.e);}if(i!==null)Bg(e,i);if(Di(a.e))break;if(a.e.b5==(-536870871))break;}if(a.e.kL==(-536870788))Bg(e,Gk(h));if(a.dS!=f&&!g){a.dS=f;T5(a.e,a.dS);}switch(b){case -1073741784:break;case -536870872:d=new Lc;Fh(d,e,h);return d;case -268435416:d=new Q4;Fh(d,
e,h);return d;case -134217688:d=new Oh;Fh(d,e,h);return d;case -67108824:d=new PG;Fh(d,e,h);return d;case -33554392:d=new DC;Fh(d,e,h);return d;default:switch(e.X){case 0:break;case 1:return AO$(Br(e,0),h);default:return AOS(e,h);}return Gk(h);}d=new Ib;Fh(d,e,h);return d;}
function ZL(a){var b,c,d,e,f,g;b=$rt_createIntArray(4);c=(-1);d=(-1);if(!Di(a.e)&&EN(a.e)){e=b.data;c=Bw(a.e);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=$rt_createCharArray(3);b=e.data;b[0]=c&65535;f=a.e.b5;c=f-4449|0;if(c>=0&&c<21){b[1]=f&65535;Bw(a.e);f=a.e.b5;d=f-4519|0;if(d>=0&&d<28){b[2]=f&65535;Bw(a.e);return AMe(e,3);}return AMe(e,2);}if(!Ci(a,2))return UV(b[0]);if(Ci(a,64))return AKx(b[0]);return AEq(b[0]);}e=b.data;c=1;while(c<4&&!Di(a.e)&&EN(a.e)){f=c+1|0;e[c]=Bw(a.e);c=f;}if(c==1){f=e[0];if(!(AUe.tt(f)==
AUf?0:1))return R0(a,e[0]);}if(!Ci(a,2))return APN(b,c);if(Ci(a,64)){g=new RJ;L8(g,b,c);return g;}g=new PX;L8(g,b,c);return g;}
function MY(a,b){var c,d,e,f;if(EN(a.e)&&!IJ(a.e)&&Jj(a.e.v)){if(Ci(a,128)){c=ZL(a);if(!Di(a.e)&&!(a.e.b5==(-536870871)&&!(b instanceof Fe))&&a.e.b5!=(-536870788)&&!EN(a.e))c=KP(a,b,c);}else if(!Mc(a.e)&&!QB(a.e)){d=new Md;Ba(d);while(!Di(a.e)&&EN(a.e)&&!Mc(a.e)&&!QB(a.e)&&!(!(!IJ(a.e)&&!a.e.v)&&!(!IJ(a.e)&&Jj(a.e.v))&&a.e.v!=(-536870871)&&(a.e.v&(-2147418113))!=(-2147483608)&&a.e.v!=(-536870788)&&a.e.v!=(-536870876))){e=Bw(a.e);if(!KI(e))CL(d,e&65535);else Fi(d,F$(e));}if(!Ci(a,2))c=AOJ(d);else if(Ci(a,64))c
=APL(d);else{c=new LE;Dr(c);c.i4=X(d);c.cq=KX(d);}}else c=KP(a,b,RF(a,b));}else if(a.e.b5!=(-536870871))c=KP(a,b,RF(a,b));else{if(b instanceof Fe)H(Cc(B(3),a.e.dm,a.e.fq));c=Gk(b);}if(!Di(a.e)&&!(a.e.b5==(-536870871)&&!(b instanceof Fe))&&a.e.b5!=(-536870788)){f=MY(a,b);if(c instanceof Dd&&!(c instanceof ES)&&!(c instanceof Da)&&!(c instanceof Em)){b=c;if(!f.cO(b.bG)){c=new Rd;EB(c,b.bG,b.f,b.ju);c.bG.bR(c);}}if((f.jI()&65535)!=43)c.bR(f);else c.bR(f.bG);}else{if(c===null)return null;c.bR(b);}if((c.jI()&65535)
!=43)return c;return c.bG;}
function KP(a,b,c){var d,e,f,g;d=a.e.b5;if(c!==null&&!(c instanceof Cb)){switch(d){case -2147483606:Bw(a.e);e=new Sm;Dh(e,c,b,d);c.bR(AUg);return e;case -2147483605:Bw(a.e);e=new Ns;Dh(e,c,b,(-2147483606));c.bR(AUg);return e;case -2147483585:Bw(a.e);e=new M_;Dh(e,c,b,(-536870849));c.bR(AUg);return e;case -2147483525:e=new Lz;f=EY(a.e);d=a.gg+1|0;a.gg=d;Ii(e,f,c,b,(-536870849),d);c.bR(AUg);return e;case -1073741782:case -1073741781:Bw(a.e);f=new OA;Dh(f,c,b,d);c.bR(f);return f;case -1073741761:Bw(a.e);f=new NX;Dh(f,
c,b,(-536870849));c.bR(b);return f;case -1073741701:f=new Qs;e=EY(a.e);g=a.gg+1|0;a.gg=g;Ii(f,e,c,b,(-536870849),g);c.bR(f);return f;case -536870870:case -536870869:Bw(a.e);if(c.jI()!=(-2147483602)){f=new Da;Dh(f,c,b,d);}else if(Ci(a,32)){f=new OC;Dh(f,c,b,d);}else{f=new Mk;e=Ne(a.dS);Dh(f,c,b,d);f.na=e;}c.bR(f);return f;case -536870849:Bw(a.e);f=new FD;Dh(f,c,b,(-536870849));c.bR(b);return f;case -536870789:f=new EZ;e=EY(a.e);g=a.gg+1|0;a.gg=g;Ii(f,e,c,b,(-536870849),g);c.bR(f);return f;default:}return c;}e
=null;if(c!==null)e=c;switch(d){case -2147483606:case -2147483605:Bw(a.e);f=new Sn;EB(f,e,b,d);e.f=f;return f;case -2147483585:Bw(a.e);c=new Q9;EB(c,e,b,(-2147483585));return c;case -2147483525:c=new MX;O0(c,EY(a.e),e,b,(-2147483525));return c;case -1073741782:case -1073741781:Bw(a.e);f=new NV;EB(f,e,b,d);e.f=f;return f;case -1073741761:Bw(a.e);c=new P2;EB(c,e,b,(-1073741761));return c;case -1073741701:c=new Oi;O0(c,EY(a.e),e,b,(-1073741701));return c;case -536870870:case -536870869:Bw(a.e);f=APb(e,b,d);e.f
=f;return f;case -536870849:Bw(a.e);c=new Em;EB(c,e,b,(-536870849));return c;case -536870789:return AOw(EY(a.e),e,b,(-536870789));default:}return c;}
function RF(a,b){var c,d,e,f,g,h,i;c=null;d=b instanceof Fe;while(true){a:{e=Hx(a.e);if((e&(-2147418113))==(-2147483608)){Bw(a.e);f=(e&16711680)>>16;e=e&(-16711681);if(e==(-16777176))a.dS=f;else{if(e!=(-1073741784))f=a.dS;c=Sa(a,e,f,b);if(Hx(a.e)!=(-536870871))H(Cc(B(3),Ds(a.e),FR(a.e)));Bw(a.e);}}else{b:{c:{switch(e){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:g=(e&2147483647)-48|0;if(a.fc<g)H(Cc(B(3),
Ds(a.e),FR(a.e)));Bw(a.e);a.cp=a.cp+1|0;c=!Ci(a,2)?AOa(g,a.cp):Ci(a,64)?AOG(g,a.cp):APH(g,a.cp);a.mM.data[g].mJ=1;a.qy=1;break a;case -2147483583:break;case -2147483582:Bw(a.e);c=AL3(0);break a;case -2147483577:Bw(a.e);c=AOx();break a;case -2147483558:Bw(a.e);c=new Ry;g=a.cp+1|0;a.cp=g;AAq(c,g);break a;case -2147483550:Bw(a.e);c=AL3(1);break a;case -2147483526:Bw(a.e);c=APp();break a;case -536870876:break c;case -536870866:Bw(a.e);if(Ci(a,32)){c=APB();break a;}c=APd(Ne(a.dS));break a;case -536870821:Bw(a.e);h
=0;if(Hx(a.e)==(-536870818)){h=1;Bw(a.e);}c=Yo(a,h,b);if(Hx(a.e)!=(-536870819))H(Cc(B(3),Ds(a.e),FR(a.e)));MI(a.e,1);Bw(a.e);break a;case -536870818:Bw(a.e);a.cp=a.cp+1|0;if(!Ci(a,8)){c=AMa();break a;}c=APq(Ne(a.dS));break a;case 0:i=Nm(a.e);if(i!==null)c=JB(a,i);else{if(Di(a.e)){c=Gk(b);break a;}c=UV(e&65535);}Bw(a.e);break a;default:break b;}Bw(a.e);c=AMa();break a;}Bw(a.e);a.cp=a.cp+1|0;if(Ci(a,8)){if(Ci(a,1)){c=AOH(a.cp);break a;}c=AN5(a.cp);break a;}if(Ci(a,1)){c=AOX(a.cp);break a;}c=APh(a.cp);break a;}if
(e>=0&&!Gm(a.e)){c=R0(a,e);Bw(a.e);}else if(e==(-536870788))c=Gk(b);else{if(e!=(-536870871))H(Cc(!Gm(a.e)?Rv(e&65535):Nm(a.e).df(),Ds(a.e),FR(a.e)));if(d)H(Cc(B(3),Ds(a.e),FR(a.e)));c=Gk(b);}}}if(e!=(-16777176))break;}return c;}
function Yo(a,b,c){var d;d=JB(a,FN(a,b));d.bR(c);return d;}
function FN(a,b){var c,d,e,f,g,h,i,j,$$je;c=AMv(Ci(a,2),Ci(a,64));Ej(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Di(a.e))break a;f=a.e.b5==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.e.b5){case -536870874:if(d>=0)CP(c,d);d=Bw(a.e);if(a.e.b5!=(-536870874)){d=38;break d;}if(a.e.v==(-536870821)){Bw(a.e);e=1;d=(-1);break d;}Bw(a.e);if(g){c=FN(a,0);break d;}if(a.e.b5==(-536870819))break d;Rk(c,FN(a,0));break d;case -536870867:if(!g&&a.e.v!=(-536870819)&&a.e.v!=(-536870821)&&d>=0){Bw(a.e);h=a.e.b5;if(Gm(a.e))break c;if
(h<0&&a.e.v!=(-536870819)&&a.e.v!=(-536870821)&&d>=0)break c;e:{try{if(Jj(h))break e;h=h&65535;break e;}catch($$e){$$je=D($$e);if($$je instanceof J){break b;}else{throw $$e;}}}try{B$(c,d,h);}catch($$e){$$je=D($$e);if($$je instanceof J){break b;}else{throw $$e;}}Bw(a.e);d=(-1);break d;}if(d>=0)CP(c,d);d=45;Bw(a.e);break d;case -536870821:if(d>=0){CP(c,d);d=(-1);}Bw(a.e);i=0;if(a.e.b5==(-536870818)){Bw(a.e);i=1;}if(!e)SJ(c,FN(a,i));else Rk(c,FN(a,i));e=0;Bw(a.e);break d;case -536870819:if(d>=0)CP(c,d);d=93;Bw(a.e);break d;case -536870818:if
(d>=0)CP(c,d);d=94;Bw(a.e);break d;case 0:if(d>=0)CP(c,d);j=a.e.ha;if(j===null)d=0;else{ACe(c,j);d=(-1);}Bw(a.e);break d;default:}if(d>=0)CP(c,d);d=Bw(a.e);}g=0;}H(Cc(B(3),IU(a),a.e.fq));}H(Cc(B(3),IU(a),a.e.fq));}if(!f){if(d>=0)CP(c,d);return c;}H(Cc(B(3),IU(a),a.e.fq-1|0));}
function R0(a,b){var c,d,e;c=KI(b);if(Ci(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AEq(b&65535);}if(Ci(a,64)&&b>128){if(c){d=new K8;Dr(d);d.cq=2;d.rR=Fa(E$(b));return d;}if(MS(b))return AJr(b&65535);if(!Pc(b))return AKx(b&65535);return AHd(b&65535);}}if(!c){if(MS(b))return AJr(b&65535);if(!Pc(b))return UV(b&65535);return AHd(b&65535);}d=new DI;Dr(d);d.cq=2;d.gA=b;e=F$(b).data;d.lY=e[0];d.ky=e[1];return d;}
function JB(a,b){var c,d,e;if(!XS(b)){if(!b.bQ){if(b.iL())return AGR(b);return AL6(b);}if(!b.iL())return AHM(b);c=new Ik;Qd(c,b);return c;}c=TA(b);d=new Lk;B9(d);d.rp=c;d.uF=c.bV;if(!b.bQ){if(b.iL())return YV(AGR(G3(b)),d);return YV(AL6(G3(b)),d);}if(!b.iL())return YV(AHM(G3(b)),d);c=new NR;e=new Ik;Qd(e,G3(b));ABK(c,e,d);return c;}
function ACW(a){return a.fc;}
function AAO(a){return a.gg+1|0;}
function YM(a){return a.cp+1|0;}
function G5(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Ci(a,b){return (a.dS&b)!=b?0:1;}
function Id(){BQ.call(this);}
function LI(){C.call(this);this.xu=null;}
function Yj(a){T();AQc.requestPointerLock();IB(0);}
function ANy(a){Yj(a);}
function Gw(){BQ.call(this);}
function KV(){var a=this;EA.call(a);a.eu=0;a.fm=0;a.et=0;a.es=0;a.eG=null;a.cy=0;a.d2=0;a.gd=0;}
function CY(a,b,c,d){var e=new KV();AID(e,a,b,c,d);return e;}
function AUh(a,b,c,d,e,f){var g=new KV();P_(g,a,b,c,d,e,f);return g;}
function AID(a,b,c,d,e){P_(a,b,c,d,200,20,e);}
function P_(a,b,c,d,e,f,g){Jw(a);a.eu=200;a.fm=20;a.d2=1;a.gd=1;a.cy=b;a.et=c;a.es=d;a.eu=e;a.fm=20;a.eG=g;}
function Jk(){EP.call(this);this.ct=null;}
function Ro(b){return b*b*b*(b*(b*6.0-15.0)+10.0);}
function ET(b,c,d){return c+b*(d-c);}
function ED(b,c,d,e){var f;b=b&15;f=b>=8?d:c;if(b>=4)d=b!=12&&b!=14?e:c;if(b&1)f= -f;if(b&2)d= -d;return f+d;}
function S0(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=(C3(b)|0)&255;e=(C3(c)|0)&255;f=(C3(0.0)|0)&255;g=b-C3(b);b=c-C3(c);c=0.0-C3(0.0);h=Ro(g);i=Ro(b);j=Ro(c);k=a.ct.data[d]+e|0;l=a.ct.data[k]+f|0;m=a.ct.data[k+1|0]+f|0;d=a.ct.data[d+1|0]+e|0;e=a.ct.data[d]+f|0;f=a.ct.data[d+1|0]+f|0;n=ED(a.ct.data[l],g,b,c);d=a.ct.data[e];o=g-1.0;n=ET(h,n,ED(d,o,b,c));d=a.ct.data[m];p=b-1.0;q=ET(i,n,ET(h,ED(d,g,p,c),ED(a.ct.data[f],o,p,c)));d=a.ct.data[l+1|0];n=c-1.0;return ET(j,q,ET(i,ET(h,ED(d,g,b,n),ED(a.ct.data[e+1|0],
o,b,n)),ET(h,ED(a.ct.data[m+1|0],g,p,n),ED(a.ct.data[f+1|0],o,p,n))));}
function Ij(){var a=this;C.call(a);a.og=null;a.hO=0;}
var ATU=null;function Ti(a){var b,c,d,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=UM();if(a.hO!=(-1))return a.hO;c=a.og;$p=1;case 1:$z=We(b,c);if(N()){break _;}d=$z;a.hO=d;if(a.hO==(-1)){b=Df();c=new W;Ba(c);Cg(b,X(E(E(c,B(387)),a.og)));}return a.hO;default:FI();}}De().s(a,b,c,d,$p);}
function SW(a){var b,c,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=UM();$p=1;case 1:$z=Ti(a);if(N()){break _;}c=$z;if(c!=(-1))Pp(b,c);return c;default:FI();}}De().s(a,b,c,$p);}
function AAz(){ATU=CU();}
function JN(){C.call(this);}
var AUi=null;var AUj=null;function Op(b){var c;c=0;while(true){if(c>=AUi.data.length)return (-1);if(b==AUi.data[c])break;c=c+1|0;}return c;}
function WS(){var b,c;b=$rt_createIntArray(144);c=b.data;c[0]=32;c[1]=33;c[2]=34;c[3]=35;c[4]=36;c[5]=37;c[6]=38;c[7]=39;c[8]=40;c[9]=41;c[10]=42;c[11]=43;c[12]=44;c[13]=45;c[14]=46;c[15]=47;c[16]=48;c[17]=49;c[18]=50;c[19]=51;c[20]=52;c[21]=53;c[22]=54;c[23]=55;c[24]=56;c[25]=57;c[26]=58;c[27]=59;c[28]=60;c[29]=61;c[30]=62;c[31]=63;c[32]=64;c[33]=65;c[34]=66;c[35]=67;c[36]=68;c[37]=69;c[38]=70;c[39]=71;c[40]=72;c[41]=73;c[42]=74;c[43]=75;c[44]=76;c[45]=77;c[46]=78;c[47]=79;c[48]=80;c[49]=81;c[50]=82;c[51]=
83;c[52]=84;c[53]=85;c[54]=86;c[55]=87;c[56]=88;c[57]=89;c[58]=90;c[59]=91;c[60]=92;c[61]=93;c[62]=94;c[63]=95;c[64]=39;c[65]=97;c[66]=98;c[67]=99;c[68]=100;c[69]=101;c[70]=102;c[71]=103;c[72]=104;c[73]=105;c[74]=106;c[75]=107;c[76]=108;c[77]=109;c[78]=110;c[79]=111;c[80]=112;c[81]=113;c[82]=114;c[83]=115;c[84]=116;c[85]=117;c[86]=118;c[87]=119;c[88]=120;c[89]=121;c[90]=122;c[91]=123;c[92]=124;c[93]=125;c[94]=126;c[95]=8962;c[96]=199;c[97]=252;c[98]=233;c[99]=226;c[100]=228;c[101]=224;c[102]=229;c[103]=231;c[104]
=234;c[105]=235;c[106]=232;c[107]=239;c[108]=238;c[109]=236;c[110]=196;c[111]=197;c[112]=201;c[113]=230;c[114]=198;c[115]=244;c[116]=246;c[117]=242;c[118]=251;c[119]=249;c[120]=255;c[121]=214;c[122]=220;c[123]=248;c[124]=163;c[125]=216;c[126]=215;c[127]=402;c[128]=225;c[129]=237;c[130]=243;c[131]=250;c[132]=241;c[133]=209;c[134]=170;c[135]=186;c[136]=191;c[137]=174;c[138]=172;c[139]=189;c[140]=188;c[141]=161;c[142]=171;c[143]=187;AUi=b;b=$rt_createCharArray(15);c=b.data;c[0]=47;c[1]=10;c[2]=13;c[3]=9;c[4]=0;c[5]
=12;c[6]=96;c[7]=63;c[8]=42;c[9]=92;c[10]=60;c[11]=62;c[12]=124;c[13]=34;c[14]=58;AUj=b;}
function BT(){var a=this;C.call(a);a.f=null;a.dn=0;a.q6=null;a.ju=0;}
var APX=0;function AUk(){var a=new BT();B9(a);return a;}
function AUl(a){var b=new BT();Jy(b,a);return b;}
function B9(a){var b,c;b=new Er;c=APX;APX=c+1|0;IX(b,c);a.q6=KK(b);}
function Jy(a,b){var c,d;c=new Er;d=APX;APX=d+1|0;IX(c,d);a.q6=KK(c);a.f=b;}
function G7(a,b,c,d){var e;e=d.bs;while(true){if(b>e)return (-1);if(a.b(b,c,d)>=0)break;b=b+1|0;}return b;}
function Hh(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.b(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AEW(a,b){a.ju=b;}
function AD8(a){return a.ju;}
function ALp(a){return a.f;}
function AMj(a,b){a.f=b;}
function AMi(a,b){return 1;}
function AM$(a){return null;}
function Ig(a){var b;a.dn=1;if(a.f!==null){if(!a.f.dn){b=a.f.g6();if(b!==null){a.f.dn=1;a.f=b;}a.f.fO();}else if(a.f instanceof Ga&&a.f.d_.mJ)a.f=a.f.f;}}
function ABZ(){APX=1;}
function C$(){var a=this;BT.call(a);a.mJ=0;a.eU=0;}
var AUg=null;function APf(a){var b=new C$();E7(b,a);return b;}
function E7(a,b){B9(a);a.eU=b;}
function ADw(a,b,c,d){var e,f;e=HV(d,a.eU);IF(d,a.eU,b);f=a.f.b(b,c,d);if(f<0)IF(d,a.eU,e);return f;}
function AIE(a){return a.eU;}
function ADV(a,b){return 0;}
function Vv(){var b;b=new Me;B9(b);AUg=b;}
function Gi(){var a=this;C.call(a);a.bv=null;a.hM=0;a.fa=0;a.tJ=0;a.kL=0;a.b5=0;a.v=0;a.sr=0;a.ha=null;a.f_=null;a.T=0;a.jW=0;a.fq=0;a.i1=0;a.dm=null;}
var AUm=null;var AUe=null;var AUf=0;function Hx(a){return a.b5;}
function MI(a,b){if(b>0&&b<3)a.fa=b;if(b==1){a.v=a.b5;a.f_=a.ha;a.T=a.i1;a.i1=a.fq;ER(a);}}
function T5(a,b){a.hM=b;a.v=a.b5;a.f_=a.ha;a.T=a.fq+1|0;a.i1=a.fq;ER(a);}
function Nm(a){return a.ha;}
function Gm(a){return a.ha===null?0:1;}
function IJ(a){return a.f_===null?0:1;}
function Bw(a){ER(a);return a.kL;}
function EY(a){var b;b=a.ha;ER(a);return b;}
function ADp(a){return a.v;}
function AF1(a){return a.kL;}
function ER(a){var b,c,d,e,f,$$je;a.kL=a.b5;a.b5=a.v;a.ha=a.f_;a.fq=a.i1;a.i1=a.T;while(true){b=0;a.v=a.T>=a.bv.data.length?0:Ki(a);a.f_=null;if(a.fa==4){if(a.v!=92)return;a.v=a.T>=a.bv.data.length?0:a.bv.data[B_(a)];switch(a.v){case 69:break;default:a.v=92;a.T=a.jW;return;}a.fa=a.tJ;a.v=a.T>(a.bv.data.length-2|0)?0:Ki(a);}a:{if(a.v!=92){if(a.fa==1)switch(a.v){case 36:a.v=(-536870876);break a;case 40:if(a.bv.data[a.T]!=63){a.v=(-2147483608);break a;}B_(a);c=a.bv.data[a.T];d=0;while(true){b:{if(d){d=0;switch
(c){case 33:break;case 61:a.v=(-134217688);B_(a);break b;default:H(Cc(B(3),Ds(a),a.T));}a.v=(-67108824);B_(a);}else{switch(c){case 33:break;case 60:B_(a);c=a.bv.data[a.T];d=1;break b;case 61:a.v=(-536870872);B_(a);break b;case 62:a.v=(-33554392);B_(a);break b;default:a.v=AB1(a);if(a.v<256){a.hM=a.v;a.v=a.v<<16;a.v=(-1073741784)|a.v;break b;}a.v=a.v&255;a.hM=a.v;a.v=a.v<<16;a.v=(-16777176)|a.v;break b;}a.v=(-268435416);B_(a);}}if(!d)break;}break a;case 41:a.v=(-536870871);break a;case 42:case 43:case 63:switch
(a.T>=a.bv.data.length?42:a.bv.data[a.T]){case 43:a.v=a.v|(-2147483648);B_(a);break a;case 63:a.v=a.v|(-1073741824);B_(a);break a;default:}a.v=a.v|(-536870912);break a;case 46:a.v=(-536870866);break a;case 91:a.v=(-536870821);MI(a,2);break a;case 93:if(a.fa!=2)break a;a.v=(-536870819);break a;case 94:a.v=(-536870818);break a;case 123:a.f_=AA7(a,a.v);break a;case 124:a.v=(-536870788);break a;default:}else if(a.fa==2)switch(a.v){case 38:a.v=(-536870874);break a;case 45:a.v=(-536870867);break a;case 91:a.v=(-536870821);break a;case 93:a.v
=(-536870819);break a;case 94:a.v=(-536870818);break a;default:}}else{c=a.T>=(a.bv.data.length-2|0)?(-1):Ki(a);c:{a.v=c;switch(a.v){case -1:H(Cc(B(3),Ds(a),a.T));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.v
=Yx(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.fa!=1)break a;a.v=(-2147483648)|a.v;break a;case 65:a.v=(-2147483583);break a;case 66:a.v=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:H(Cc(B(3),Ds(a),a.T));case 68:case 83:case 87:case 100:case 115:case 119:a.f_=OW(FU(a.bv,
a.jW,1),0);a.v=0;break a;case 71:a.v=(-2147483577);break a;case 80:case 112:break c;case 81:a.tJ=a.fa;a.fa=4;b=1;break a;case 90:a.v=(-2147483558);break a;case 97:a.v=7;break a;case 98:a.v=(-2147483550);break a;case 99:if(a.T>=(a.bv.data.length-2|0))H(Cc(B(3),Ds(a),a.T));a.v=a.bv.data[B_(a)]&31;break a;case 101:a.v=27;break a;case 102:a.v=12;break a;case 110:a.v=10;break a;case 114:a.v=13;break a;case 116:a.v=9;break a;case 117:a.v=Nt(a,4);break a;case 120:a.v=Nt(a,2);break a;case 122:a.v=(-2147483526);break a;default:}break a;}e
=Yc(a);f=0;if(a.v==80)f=1;try{a.f_=OW(e,f);}catch($$e){$$je=D($$e);if($$je instanceof Io){H(Cc(B(3),Ds(a),a.T));}else{throw $$e;}}a.v=0;}}if(b)continue;else break;}}
function Yc(a){var b,c,d;b=new W;FL(b,10);if(a.T<(a.bv.data.length-2|0)){if(a.bv.data[a.T]!=123){b=new W;Ba(b);return X(E(E(b,B(388)),FU(a.bv,B_(a),1)));}B_(a);c=0;a:{while(a.T<(a.bv.data.length-2|0)){c=a.bv.data[B_(a)];if(c==125)break a;CL(b,c);}}if(c!=125)H(Cc(B(3),a.dm,a.T));}if(!G1(b))H(Cc(B(3),a.dm,a.T));d=X(b);if(O(d)==1){b=new W;Ba(b);return X(E(E(b,B(388)),d));}b:{c:{if(O(d)>3){if(D8(d,B(388)))break c;if(D8(d,B(389)))break c;}break b;}d=DM(d,2);}return d;}
function AA7(a,b){var c,d,e,f,$$je;c=new W;FL(c,4);d=(-1);e=2147483647;a:{while(true){if(a.T>=a.bv.data.length)break a;b=a.bv.data[B_(a)];if(b==125)break a;if(b==44&&d<0)try{d=GV(Bf(c),10);ABl(c,0,G1(c));continue;}catch($$e){$$je=D($$e);if($$je instanceof Dp){break;}else{throw $$e;}}CL(c,b&65535);}H(Cc(B(3),a.dm,a.T));}if(b!=125)H(Cc(B(3),a.dm,a.T));if(G1(c)>0)b:{try{e=GV(Bf(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=D($$e);if($$je instanceof Dp){}else{throw $$e;}}H(Cc(B(3),a.dm,a.T));}else if(d<0)H(Cc(B(3),
a.dm,a.T));if((d|e|(e-d|0))<0)H(Cc(B(3),a.dm,a.T));f=a.T>=a.bv.data.length?42:a.bv.data[a.T];c:{switch(f){case 43:a.v=(-2147483525);B_(a);break c;case 63:a.v=(-1073741701);B_(a);break c;default:}a.v=(-536870789);}c=new Ls;c.fF=d;c.e$=e;return c;}
function Ds(a){return a.dm;}
function Di(a){return !a.b5&&!a.v&&a.T==a.sr&&!Gm(a)?1:0;}
function Jj(b){return b<0?0:1;}
function EN(a){return !Di(a)&&!Gm(a)&&Jj(a.b5)?1:0;}
function Mc(a){return a.b5<=56319&&a.b5>=55296?1:0;}
function QB(a){return a.b5<=57343&&a.b5>=56320?1:0;}
function Pc(b){return b<=56319&&b>=55296?1:0;}
function MS(b){return b<=57343&&b>=56320?1:0;}
function Nt(a,b){var c,d,e,f,$$je;c=new W;FL(c,b);d=a.bv.data.length-2|0;e=0;while(true){f=BN(e,b);if(f>=0)break;if(a.T>=d)break;CL(c,a.bv.data[B_(a)]);e=e+1|0;}if(!f)a:{try{b=GV(Bf(c),16);}catch($$e){$$je=D($$e);if($$je instanceof Dp){break a;}else{throw $$e;}}return b;}H(Cc(B(3),a.dm,a.T));}
function Yx(a){var b,c,d,e,f;b=3;c=1;d=a.bv.data.length-2|0;e=Qn(a.bv.data[a.T],8);switch(e){case -1:break;default:if(e>3)b=2;B_(a);a:{while(true){if(c>=b)break a;if(a.T>=d)break a;f=Qn(a.bv.data[a.T],8);if(f<0)break;e=(e*8|0)+f|0;B_(a);c=c+1|0;}}return e;}H(Cc(B(3),a.dm,a.T));}
function AB1(a){var b,c;b=1;c=a.hM;a:while(true){if(a.T>=a.bv.data.length)H(Cc(B(3),a.dm,a.T));b:{c:{switch(a.bv.data[a.T]){case 41:B_(a);return c|256;case 45:if(!b)H(Cc(B(3),a.dm,a.T));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}B_(a);}B_(a);return c;}
function B_(a){var b,c;a.jW=a.T;if(!(a.hM&4))a.T=a.T+1|0;else{b=a.bv.data.length-2|0;a.T=a.T+1|0;a:while(true){if(a.T<b&&Og(a.bv.data[a.T])){a.T=a.T+1|0;continue;}if(a.T>=b)break;if(a.bv.data[a.T]!=35)break;a.T=a.T+1|0;while(true){if(a.T>=b)continue a;c=a.bv.data[a.T];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue a;a.T=a.T+1|0;}}}return a.jW;}
function AAK(b){return AUm.Cn(b);}
function Ki(a){var b,c,d;b=a.bv.data[B_(a)];if(CQ(b)){c=a.jW+1|0;if(c<a.bv.data.length){d=a.bv.data[c];if(C5(d)){B_(a);return DB(b,d);}}}return b;}
function FR(a){return a.fq;}
function AA8(){var a=this;BW.call(a);a.sW=null;a.k9=null;a.i0=0;}
function Cc(a,b,c){var d=new AA8();AC9(d,a,b,c);return d;}
function AC9(a,b,c,d){R(a);a.i0=(-1);a.sW=b;a.k9=c;a.i0=d;}
function AM5(a){var b,c,d,e,f,g,h,i;b=B(3);if(a.i0>=1){c=$rt_createCharArray(a.i0);d=c.data;e=0;f=d.length;if(e>f){b=new BW;R(b);H(b);}while(e<f){g=e+1|0;d[e]=32;e=g;}b=SD(c);}h=new W;Ba(h);h=E(h,a.sW);if(a.k9!==null&&O(a.k9)){i=new W;Ba(i);b=X(E(E(E(E(S(i,a.i0),B(390)),a.k9),B(390)),b));}else b=B(3);return X(E(h,b));}
function OM(){C$.call(this);}
function AC1(a,b,c,d){var e;e=a.eU;B0(d,e,b-Dk(d,e)|0);return a.f.b(b,c,d);}
function AK8(a,b){return 0;}
function R4(){C$.call(this);}
function AET(a,b,c,d){return b;}
function Nu(){C$.call(this);}
function AD5(a,b,c,d){if(Dk(d,a.eU)!=b)b=(-1);return b;}
function Pk(){C$.call(this);this.mn=0;}
function AC6(a,b,c,d){var e;e=a.eU;B0(d,e,b-Dk(d,e)|0);a.mn=b;return b;}
function AD_(a){return a.mn;}
function AJY(a,b){return 0;}
function Fe(){C$.call(this);}
function AMz(a,b,c,d){if(d.ih!=1&&b!=d.bs)return (-1);ABm(d);IF(d,0,b);return b;}
function Cb(){BT.call(this);this.cq=0;}
function AUn(){var a=new Cb();Dr(a);return a;}
function Dr(a){B9(a);a.cq=1;}
function ANB(a,b,c,d){var e;if((b+a.cR()|0)>d.bs){d.eJ=1;return (-1);}e=a.co(b,c);if(e<0)return (-1);return a.f.b(b+e|0,c,d);}
function ALN(a){return a.cq;}
function AHo(a,b){return 1;}
function AAm(){Cb.call(this);}
function Gk(a){var b=new AAm();AIP(b,a);return b;}
function AIP(a,b){Jy(a,b);a.cq=1;a.ju=1;a.cq=0;}
function ALj(a,b,c){return 0;}
function AF3(a,b,c,d){var e,f,g;e=d.bs;f=d.dy;while(true){g=BN(b,e);if(g>0)return (-1);if(g<0&&C5(M(c,b))&&b>f&&CQ(M(c,b-1|0))){b=b+1|0;continue;}if(a.f.b(b,c,d)>=0)break;b=b+1|0;}return b;}
function AEH(a,b,c,d,e){var f,g;f=e.bs;g=e.dy;while(true){if(c<b)return (-1);if(c<f&&C5(M(d,c))&&c>g&&CQ(M(d,c-1|0))){c=c+(-1)|0;continue;}if(a.f.b(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AC4(a,b){return 0;}
function B8(){var a=this;BT.call(a);a.ck=null;a.d_=null;a.b4=0;}
function AOS(a,b){var c=new B8();Fh(c,a,b);return c;}
function Fh(a,b,c){B9(a);a.ck=b;a.d_=c;a.b4=c.eU;}
function AGC(a,b,c,d){var e,f,g,h;if(a.ck===null)return (-1);e=Fl(d,a.b4);Dq(d,a.b4,b);f=a.ck.X;g=0;while(true){if(g>=f){Dq(d,a.b4,e);return (-1);}h=Br(a.ck,g).b(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AJQ(a,b){a.d_.f=b;}
function AIa(a,b){var c;a:{if(a.ck!==null){c=G$(a.ck);while(true){if(!HJ(c))break a;if(!H2(c).cO(b))continue;else return 1;}}}return 0;}
function AKn(a,b){return HV(b,a.b4)>=0&&Fl(b,a.b4)==HV(b,a.b4)?0:1;}
function AEy(a){var b,c,d,e;a.dn=1;if(a.d_!==null&&!a.d_.dn)Ig(a.d_);a:{if(a.ck!==null){b=a.ck.X;c=0;while(true){if(c>=b)break a;d=Br(a.ck,c);e=d.g6();if(e===null)e=d;else{d.dn=1;EE(a.ck,c);WP(a.ck,c,e);}if(!e.dn)e.fO();c=c+1|0;}}}if(a.f!==null)Ig(a);}
function Ib(){B8.call(this);}
function AJE(a,b,c,d){var e,f,g,h;e=Dk(d,a.b4);B0(d,a.b4,b);f=a.ck.X;g=0;while(true){if(g>=f){B0(d,a.b4,e);return (-1);}h=Br(a.ck,g).b(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AKJ(a,b){return !Dk(b,a.b4)?0:1;}
function DC(){Ib.call(this);}
function AFj(a,b,c,d){var e,f,g;e=Dk(d,a.b4);B0(d,a.b4,b);f=a.ck.X;g=0;while(g<f){if(Br(a.ck,g).b(b,c,d)>=0)return a.f.b(a.d_.mn,c,d);g=g+1|0;}B0(d,a.b4,e);return (-1);}
function AKu(a,b){a.f=b;}
function Lc(){DC.call(this);}
function AJL(a,b,c,d){var e,f;e=a.ck.X;f=0;while(f<e){if(Br(a.ck,f).b(b,c,d)>=0)return a.f.b(b,c,d);f=f+1|0;}return (-1);}
function AMp(a,b){return 0;}
function Q4(){DC.call(this);}
function ADO(a,b,c,d){var e,f;e=a.ck.X;f=0;while(true){if(f>=e)return a.f.b(b,c,d);if(Br(a.ck,f).b(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function ALT(a,b){return 0;}
function Oh(){DC.call(this);}
function AEv(a,b,c,d){var e,f,g,h;e=a.ck.X;f=d.jc?0:d.dy;a:{g=a.f.b(b,c,d);if(g>=0){B0(d,a.b4,b);h=0;while(true){if(h>=e)break a;if(Br(a.ck,h).dt(f,b,c,d)>=0){B0(d,a.b4,(-1));return g;}h=h+1|0;}}}return (-1);}
function ANR(a,b){return 0;}
function PG(){DC.call(this);}
function ACE(a,b,c,d){var e,f;e=a.ck.X;B0(d,a.b4,b);f=0;while(true){if(f>=e)return a.f.b(b,c,d);if(Br(a.ck,f).dt(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AKX(a,b){return 0;}
function Ga(){B8.call(this);this.dF=null;}
function AO$(a,b){var c=new Ga();UC(c,a,b);return c;}
function UC(a,b,c){B9(a);a.dF=b;a.d_=c;a.b4=c.eU;}
function ACT(a,b,c,d){var e,f;e=Fl(d,a.b4);Dq(d,a.b4,b);f=a.dF.b(b,c,d);if(f>=0)return f;Dq(d,a.b4,e);return (-1);}
function AIn(a,b,c,d){var e;e=a.dF.dq(b,c,d);if(e>=0)Dq(d,a.b4,e);return e;}
function AK$(a,b,c,d,e){var f;f=a.dF.dt(b,c,d,e);if(f>=0)Dq(e,a.b4,f);return f;}
function AH9(a,b){return a.dF.cO(b);}
function AJT(a){var b;b=new Lv;UC(b,a.dF,a.d_);a.f=b;return b;}
function ANd(a){var b;a.dn=1;if(a.d_!==null&&!a.d_.dn)Ig(a.d_);if(a.dF!==null&&!a.dF.dn){b=a.dF.g6();if(b!==null){a.dF.dn=1;a.dF=b;}a.dF.fO();}}
function Gj(){C.call(this);}
function Be(){var a=this;Gj.call(a);a.bV=0;a.cJ=0;a.bP=null;a.jM=null;a.kd=null;a.bQ=0;}
var AUo=null;function AUp(){var a=new Be();BH(a);return a;}
function BH(a){var b;b=new Rt;b.bo=$rt_createIntArray(64);a.bP=b;}
function ADS(a){return null;}
function ADd(a){return a.bP;}
function XS(a){return !a.cJ?(GG(a.bP,0)>=2048?0:1):YX(a.bP,0)>=2048?0:1;}
function AGQ(a){return a.bQ;}
function ALG(a){return a;}
function TA(a){var b,c;if(a.kd===null){b=a.gl();c=new Q_;c.xx=a;c.qF=b;BH(c);a.kd=c;Ej(a.kd,a.cJ);}return a.kd;}
function G3(a){var b,c;if(a.jM===null){b=a.gl();c=new Q$;c.w9=a;c.to=b;c.tL=a;BH(c);a.jM=c;Ej(a.jM,a.bV);a.jM.bQ=a.bQ;}return a.jM;}
function AM7(a){return 0;}
function Ej(a,b){if(a.bV^b){a.bV=a.bV?0:1;a.cJ=a.cJ?0:1;}if(!a.bQ)a.bQ=1;return a;}
function AF6(a){return a.bV;}
function HN(b,c){if(b.eA()!==null&&c.eA()!==null)return YN(b.eA(),c.eA());return 1;}
function OW(b,c){return Zy(ABh(AUo,b),c);}
function UH(){AUo=new Gy;}
function Un(){var a=this;Be.call(a);a.oe=0;a.qs=0;a.h8=0;a.nE=0;a.fg=0;a.gX=0;a.bL=null;a.cd=null;}
function Dl(){var a=new Un();ANI(a);return a;}
function AMv(a,b){var c=new Un();AEV(c,a,b);return c;}
function ANI(a){BH(a);a.bL=ANU();}
function AEV(a,b,c){BH(a);a.bL=ANU();a.oe=b;a.qs=c;}
function CP(a,b){a:{if(a.oe){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.fg){KZ(a.bL,G5(b&65535));break a;}Kc(a.bL,G5(b&65535));break a;}if(a.qs&&b>128){a.h8=1;b=Fa(E$(b));}}}if(!(!Pc(b)&&!MS(b))){if(a.nE)KZ(a.bP,b-55296|0);else Kc(a.bP,b-55296|0);}if(a.fg)KZ(a.bL,b);else Kc(a.bL,b);if(!a.bQ&&KI(b))a.bQ=1;return a;}
function ACe(a,b){var c,d,e;if(!a.bQ&&b.bQ)a.bQ=1;if(a.nE){if(!b.cJ)FF(a.bP,b.gl());else Dg(a.bP,b.gl());}else if(!b.cJ)Fw(a.bP,b.gl());else{E8(a.bP,b.gl());Dg(a.bP,b.gl());a.cJ=a.cJ?0:1;a.nE=1;}if(!a.gX&&b.eA()!==null){if(a.fg){if(!b.bV)FF(a.bL,b.eA());else Dg(a.bL,b.eA());}else if(!b.bV)Fw(a.bL,b.eA());else{E8(a.bL,b.eA());Dg(a.bL,b.eA());a.bV=a.bV?0:1;a.fg=1;}}else{c=a.bV;if(a.cd!==null){d=a.cd;if(!c){e=new My;e.u2=a;e.t1=c;e.tG=d;e.ty=b;BH(e);a.cd=e;}else{e=new Mz;e.x6=a;e.r5=c;e.rT=d;e.rB=b;BH(e);a.cd=
e;}}else{if(c&&!a.fg&&KL(a.bL)){d=new Mv;d.wq=a;d.rY=b;BH(d);a.cd=d;}else if(!c){d=new Mt;d.nm=a;d.ma=c;d.qY=b;BH(d);a.cd=d;}else{d=new Mu;d.ow=a;d.mg=c;d.tC=b;BH(d);a.cd=d;}a.gX=1;}}return a;}
function B$(a,b,c){var d;if(b>c){d=new BW;R(d);H(d);}a:{b:{if(!a.oe){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CP(a,b);b=b+1|0;}}if(a.fg)Ta(a.bL,b,c+1|0);else Hj(a.bL,b,c+1|0);}return a;}
function SJ(a,b){var c,d,e;if(!a.bQ&&b.bQ)a.bQ=1;if(b.h8)a.h8=1;if(!(a.cJ^b.cJ)){if(!a.cJ)Fw(a.bP,b.bP);else Dg(a.bP,b.bP);}else if(a.cJ)FF(a.bP,b.bP);else{E8(a.bP,b.bP);Dg(a.bP,b.bP);a.cJ=1;}if(!a.gX&&Db(b)!==null){if(!(a.bV^b.bV)){if(!a.bV)Fw(a.bL,Db(b));else Dg(a.bL,Db(b));}else if(a.bV)FF(a.bL,Db(b));else{E8(a.bL,Db(b));Dg(a.bL,Db(b));a.bV=1;}}else{c=a.bV;if(a.cd!==null){d=a.cd;if(!c){e=new Mo;e.uI=a;e.s6=c;e.tB=d;e.tU=b;BH(e);a.cd=e;}else{e=new M1;e.vb=a;e.tS=c;e.ql=d;e.qu=b;BH(e);a.cd=e;}}else{if(!a.fg
&&KL(a.bL)){if(!c){d=new Mw;d.ya=a;d.rx=b;BH(d);a.cd=d;}else{d=new Mx;d.vg=a;d.tK=b;BH(d);a.cd=d;}}else if(!c){d=new MB;d.s8=a;d.si=b;d.rW=c;BH(d);a.cd=d;}else{d=new MC;d.su=a;d.sB=b;d.sH=c;BH(d);a.cd=d;}a.gX=1;}}}
function Rk(a,b){var c,d,e;if(!a.bQ&&b.bQ)a.bQ=1;if(b.h8)a.h8=1;if(!(a.cJ^b.cJ)){if(!a.cJ)Dg(a.bP,b.bP);else Fw(a.bP,b.bP);}else if(!a.cJ)FF(a.bP,b.bP);else{E8(a.bP,b.bP);Dg(a.bP,b.bP);a.cJ=0;}if(!a.gX&&Db(b)!==null){if(!(a.bV^b.bV)){if(!a.bV)Dg(a.bL,Db(b));else Fw(a.bL,Db(b));}else if(!a.bV)FF(a.bL,Db(b));else{E8(a.bL,Db(b));Dg(a.bL,Db(b));a.bV=0;}}else{c=a.bV;if(a.cd!==null){d=a.cd;if(!c){e=new Mq;e.u1=a;e.s9=c;e.qC=d;e.r3=b;BH(e);a.cd=e;}else{e=new Mr;e.vn=a;e.sO=c;e.qf=d;e.s5=b;BH(e);a.cd=e;}}else{if(!a.fg
&&KL(a.bL)){if(!c){d=new Mm;d.vj=a;d.rl=b;BH(d);a.cd=d;}else{d=new Mn;d.xY=a;d.rn=b;BH(d);a.cd=d;}}else if(!c){d=new Ms;d.ur=a;d.tZ=b;d.sz=c;BH(d);a.cd=d;}else{d=new Ml;d.sx=a;d.sU=b;d.r7=c;BH(d);a.cd=d;}a.gX=1;}}}
function Dc(a,b){if(a.cd!==null)return a.bV^a.cd.K(b);return a.bV^Dn(a.bL,b);}
function Db(a){if(!a.gX)return a.bL;return null;}
function AFV(a){return a.bP;}
function AL_(a){var b,c;if(a.cd!==null)return a;b=Db(a);c=new Mp;c.uG=a;c.kB=b;BH(c);return Ej(c,a.bV);}
function AJc(a){var b,c;b=new W;Ba(b);c=GG(a.bL,0);while(c>=0){Fi(b,F$(c));CL(b,124);c=GG(a.bL,c+1|0);}if(b.bH>0)Q5(b,b.bH-1|0);return X(b);}
function AF7(a){return a.h8;}
function Io(){var a=this;BQ.call(a);a.xT=null;a.xA=null;}
function DQ(){BT.call(this);this.bG=null;}
function AUq(a,b,c){var d=new DQ();Dh(d,a,b,c);return d;}
function Dh(a,b,c,d){Jy(a,c);a.bG=b;a.ju=d;}
function ANH(a){return a.bG;}
function ALa(a,b){return !a.bG.cO(b)&&!a.f.cO(b)?0:1;}
function AMw(a,b){return 1;}
function AIM(a){var b;a.dn=1;if(a.f!==null&&!a.f.dn){b=a.f.g6();if(b!==null){a.f.dn=1;a.f=b;}a.f.fO();}if(a.bG!==null){if(!a.bG.dn){b=a.bG.g6();if(b!==null){a.bG.dn=1;a.bG=b;}a.bG.fO();}else if(a.bG instanceof Ga&&a.bG.d_.mJ)a.bG=a.bG.f;}}
function Dd(){DQ.call(this);this.b6=null;}
function APb(a,b,c){var d=new Dd();EB(d,a,b,c);return d;}
function EB(a,b,c,d){Dh(a,b,c,d);a.b6=b;}
function ACG(a,b,c,d){var e,f;e=0;a:{while((b+a.b6.cR()|0)<=d.bs){f=a.b6.co(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.f.b(b,c,d);if(f>=0)break;b=b-a.b6.cR()|0;e=e+(-1)|0;}return f;}
function ES(){Dd.call(this);this.g8=null;}
function AOw(a,b,c,d){var e=new ES();O0(e,a,b,c,d);return e;}
function O0(a,b,c,d,e){EB(a,c,d,e);a.g8=b;}
function ADA(a,b,c,d){var e,f,g,h;e=a.g8.fF;f=a.g8.e$;g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.b6.cR()|0)>d.bs)break a;h=a.b6.co(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.f.b(b,c,d);if(h>=0)break;b=b-a.b6.cR()|0;g=g+(-1)|0;}return h;}if((b+a.b6.cR()|0)>d.bs){d.eJ=1;return (-1);}h=a.b6.co(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function Da(){DQ.call(this);}
function ACS(a,b,c,d){var e;if(!a.bG.bM(d))return a.f.b(b,c,d);e=a.bG.b(b,c,d);if(e>=0)return e;return a.f.b(b,c,d);}
function Em(){Dd.call(this);}
function AIs(a,b,c,d){var e;e=a.bG.b(b,c,d);if(e<0)e=a.f.b(b,c,d);return e;}
function ANV(a,b){a.f=b;a.bG.bR(b);}
function Rd(){Dd.call(this);}
function ANu(a,b,c,d){while((b+a.b6.cR()|0)<=d.bs&&a.b6.co(b,c)>0){b=b+a.b6.cR()|0;}return a.f.b(b,c,d);}
function AJb(a,b,c,d){var e,f,g;e=a.f.dq(b,c,d);if(e<0)return (-1);f=e-a.b6.cR()|0;while(f>=b&&a.b6.co(f,c)>0){g=f-a.b6.cR()|0;e=f;f=g;}return e;}
function Ls(){var a=this;Gj.call(a);a.fF=0;a.e$=0;}
function AGy(a){return a.fF;}
function AMq(a){return a.e$;}
function AJh(a){var b;b=new W;Ba(b);return X(E(E(E(S(E(b,B(391)),a.fF),B(392)),a.e$==2147483647?B(3):KK(AAJ(a.e$))),B(393)));}
function Me(){BT.call(this);}
function AHP(a,b,c,d){return b;}
function AJP(a,b){return 0;}
function Rt(){var a=this;C.call(a);a.bo=null;a.bY=0;}
function ANU(){var a=new Rt();AEk(a);return a;}
function AEk(a){a.bo=$rt_createIntArray(0);}
function Kc(a,b){var c,d;c=b/32|0;if(b>=a.bY){HT(a,c+1|0);a.bY=b+1|0;}d=a.bo.data;d[c]=d[c]|1<<(b%32|0);}
function Hj(a,b,c){var d,e,f,g,h;if(b>c){d=new BB;R(d);H(d);}e=b/32|0;f=c/32|0;if(c>a.bY){HT(a,f+1|0);a.bY=c;}if(e==f){g=a.bo.data;g[e]=g[e]|G9(a,b)&HH(a,c);}else{g=a.bo.data;g[e]=g[e]|G9(a,b);h=e+1|0;while(h<f){a.bo.data[h]=(-1);h=h+1|0;}g=a.bo.data;g[f]=g[f]|HH(a,c);}}
function G9(a,b){return (-1)<<(b%32|0);}
function HH(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0);}
function KZ(a,b){var c,d,e,f;c=b/32|0;if(c<a.bo.data.length){d=a.bo.data;e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|(-2)>>>(32-f|0));if(b==(a.bY-1|0))GB(a);}}
function Ta(a,b,c){var d,e,f,g,h;if(b>c){d=new BB;R(d);H(d);}if(b>=a.bY)return;c=BY(a.bY,c);e=b/32|0;f=c/32|0;if(e==f){g=a.bo.data;g[e]=g[e]&(HH(a,b)|G9(a,c));}else{g=a.bo.data;g[e]=g[e]&HH(a,b);h=e+1|0;while(h<f){a.bo.data[h]=0;h=h+1|0;}g=a.bo.data;g[f]=g[f]&G9(a,c);}GB(a);}
function Dn(a,b){var c;c=b/32|0;return c<a.bo.data.length&&a.bo.data[c]&1<<(b%32|0)?1:0;}
function GG(a,b){var c,d,e;if(b>=a.bY)return (-1);c=b/32|0;d=a.bo.data[c]>>>(b%32|0);if(d)return HP(d)+b|0;d=(a.bY+31|0)/32|0;e=c+1|0;while(e<d){if(a.bo.data[e])return (e*32|0)+HP(a.bo.data[e])|0;e=e+1|0;}return (-1);}
function YX(a,b){var c,d,e;if(b>=a.bY)return b;c=b/32|0;d=(a.bo.data[c]^(-1))>>>(b%32|0);if(d)return HP(d)+b|0;d=(a.bY+31|0)/32|0;e=c+1|0;while(e<d){if(a.bo.data[e]!=(-1))return (e*32|0)+HP(a.bo.data[e]^(-1))|0;e=e+1|0;}return a.bY;}
function HT(a,b){var c,d,e,f;if(a.bo.data.length>=b)return;c=CB((b*3|0)/2|0,(a.bo.data.length*2|0)+1|0);d=a.bo.data;e=$rt_createIntArray(c);f=e.data;b=BY(c,d.length);c=0;while(c<b){f[c]=d[c];c=c+1|0;}a.bo=e;}
function GB(a){var b,c,d;b=(a.bY+31|0)/32|0;a.bY=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=LS(a.bo.data[c]);if(d<32)break;c=c+(-1)|0;a.bY=a.bY-32|0;}a.bY=a.bY-d|0;}}
function YN(a,b){var c,d;c=BY(a.bo.data.length,b.bo.data.length);d=0;while(d<c){if(a.bo.data[d]&b.bo.data[d])return 1;d=d+1|0;}return 0;}
function Dg(a,b){var c,d,e;c=BY(a.bo.data.length,b.bo.data.length);d=0;while(d<c){e=a.bo.data;e[d]=e[d]&b.bo.data[d];d=d+1|0;}while(c<a.bo.data.length){a.bo.data[c]=0;c=c+1|0;}a.bY=BY(a.bY,b.bY);GB(a);}
function FF(a,b){var c,d,e;c=BY(a.bo.data.length,b.bo.data.length);d=0;while(d<c){e=a.bo.data;e[d]=e[d]&(b.bo.data[d]^(-1));d=d+1|0;}GB(a);}
function Fw(a,b){var c,d,e;a.bY=CB(a.bY,b.bY);HT(a,(a.bY+31|0)/32|0);c=BY(a.bo.data.length,b.bY);d=0;while(d<c){e=a.bo.data;e[d]=e[d]|b.bo.data[d];d=d+1|0;}}
function E8(a,b){var c,d,e;a.bY=CB(a.bY,b.bY);HT(a,(a.bY+31|0)/32|0);c=BY(a.bo.data.length,b.bY);d=0;while(d<c){e=a.bo.data;e[d]=e[d]^b.bo.data[d];d=d+1|0;}GB(a);}
function KL(a){return a.bY?0:1;}
function Lk(){var a=this;B8.call(a);a.rp=null;a.uF=0;}
function AF4(a,b){a.f=b;}
function Ws(a,b,c,d){var e,f,g,h,i;e=d.dy;f=d.bs;g=b+1|0;h=BN(g,f);if(h>0){d.eJ=1;return (-1);}i=M(c,b);if(!a.rp.K(i))return (-1);if(CQ(i)){if(h<0&&C5(M(c,g)))return (-1);}else if(C5(i)&&b>e&&CQ(M(c,b-1|0)))return (-1);return a.f.b(g,c,d);}
function NR(){var a=this;B8.call(a);a.pc=null;a.oy=null;}
function YV(a,b){var c=new NR();ABK(c,a,b);return c;}
function ABK(a,b,c){B9(a);a.pc=b;a.oy=c;}
function ADs(a,b,c,d){var e;e=a.pc.b(b,c,d);if(e<0)e=Ws(a.oy,b,c,d);if(e>=0)return e;return (-1);}
function AJC(a,b){a.f=b;a.oy.f=b;a.pc.bR(b);}
function AEa(a,b){return 1;}
function ADQ(a,b){return 1;}
function Dt(){var a=this;B8.call(a);a.e5=null;a.wc=0;}
function AHM(a){var b=new Dt();Qd(b,a);return b;}
function Qd(a,b){B9(a);a.e5=b.lc();a.wc=b.bV;}
function AFN(a,b,c,d){var e,f,g;e=d.bs;if(b<e){f=b+1|0;g=M(c,b);if(a.K(g)){b=a.f.b(f,c,d);if(b>0)return b;}if(f<e){b=f+1|0;f=M(c,f);if(GT(g,f)&&a.K(DB(g,f)))return a.f.b(b,c,d);}}return (-1);}
function AGf(a,b){return a.e5.K(b);}
function ADl(a,b){if(b instanceof DI)return a.e5.K(b.gA);if(b instanceof Ee)return a.e5.K(b.ed);if(b instanceof Dt)return HN(a.e5,b.e5);if(!(b instanceof D7))return 1;return HN(a.e5,b.f1);}
function AHC(a){return a.e5;}
function ALB(a,b){a.f=b;}
function AFZ(a,b){return 1;}
function Ik(){Dt.call(this);}
function AHp(a,b){return a.e5.K(Fa(E$(b)));}
function Ua(){var a=this;Cb.call(a);a.rG=null;a.vJ=0;}
function AGR(a){var b=new Ua();AJl(b,a);return b;}
function AJl(a,b){Dr(a);a.rG=b.lc();a.vJ=b.bV;}
function AHQ(a,b,c){return !a.rG.K(Eh(DX(M(c,b))))?(-1):1;}
function D7(){var a=this;Cb.call(a);a.f1=null;a.wN=0;}
function AL6(a){var b=new D7();AJ_(b,a);return b;}
function AJ_(a,b){Dr(a);a.f1=b.lc();a.wN=b.bV;}
function K5(a,b,c){return !a.f1.K(M(c,b))?(-1):1;}
function AJS(a,b){if(b instanceof Ee)return a.f1.K(b.ed);if(b instanceof D7)return HN(a.f1,b.f1);if(!(b instanceof Dt)){if(!(b instanceof DI))return 1;return 0;}return HN(a.f1,b.e5);}
function AJG(a){return a.f1;}
function MF(){var a=this;B8.call(a);a.fS=null;a.oY=null;a.jz=0;}
function AMe(a,b){var c=new MF();ACV(c,a,b);return c;}
function ACV(a,b,c){B9(a);a.fS=b;a.jz=c;}
function AIr(a,b){a.f=b;}
function NY(a){if(a.oY===null)a.oY=SD(a.fS);return a.oY;}
function ACw(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d.bs;f=$rt_createIntArray(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=M(c,b);k=j-44032|0;if(k>=0&&k<11172){b=4352+(k/588|0)|0;l=4449+((k%588|0)/28|0)|0;k=k%28|0;if(!k){m=$rt_createIntArray(2);n=m.data;n[0]=b;n[1]=l;}else{o=4519+k|0;m=$rt_createIntArray(3);n=m.data;n[0]=b;n[1]=l;n[2]=o;}}else m=null;if(m!==null){m=m.data;l=0;if(m.length!=a.jz)return (-1);while(true){if(l>=a.jz)return a.f.b(i,c,d);if(m[l]!=a.fS.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]
=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=M(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=M(c,k);h=j-4519|0;}if(h>=0&&h<28){b=k+1|0;f[2]=j;return a.jz==3&&f[0]==a.fS.data[0]&&f[1]==a.fS.data[1]&&f[2]==a.fS.data[2]?a.f.b(b,c,d):(-1);}return a.jz==2&&f[0]==a.fS.data[0]&&f[1]==a.fS.data[1]?a.f.b(k,c,d):(-1);}return (-1);}return (-1);}
function AD1(a,b){return b instanceof MF&&!BR(NY(b),NY(a))?0:1;}
function AMc(a,b){return 1;}
function Ee(){Cb.call(this);this.ed=0;}
function UV(a){var b=new Ee();AKd(b,a);return b;}
function AKd(a,b){Dr(a);a.ed=b;}
function AHz(a){return 1;}
function AGN(a,b,c){return a.ed!=M(c,b)?(-1):1;}
function AFK(a,b,c,d){var e,f,g,h;if(!(c instanceof Ca))return G7(a,b,c,d);e=c;f=d.bs;while(true){if(b>=f)return (-1);g=C_(e,a.ed,b);if(g<0)return (-1);h=a.f;b=g+1|0;if(h.b(b,c,d)>=0)break;}return g;}
function AHF(a,b,c,d,e){var f,g;if(!(d instanceof Ca))return Hh(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=Do(f,a.ed,c);if(g<0)break a;if(g<b)break a;if(a.f.b(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ADP(a){return a.ed;}
function AL9(a,b){if(b instanceof Ee)return b.ed!=a.ed?0:1;if(!(b instanceof D7)){if(b instanceof Dt)return b.K(a.ed);if(!(b instanceof DI))return 1;return 0;}return K5(b,0,Rv(a.ed))<=0?0:1;}
function ABt(){Cb.call(this);this.p7=0;}
function AKx(a){var b=new ABt();AI8(b,a);return b;}
function AI8(a,b){Dr(a);a.p7=Eh(DX(b));}
function ACp(a,b,c){return a.p7!=Eh(DX(M(c,b)))?(-1):1;}
function SO(){var a=this;Cb.call(a);a.tW=0;a.qz=0;}
function AEq(a){var b=new SO();AKS(b,a);return b;}
function AKS(a,b){Dr(a);a.tW=b;a.qz=G5(b);}
function ACO(a,b,c){return a.tW!=M(c,b)&&a.qz!=M(c,b)?(-1):1;}
function E2(){var a=this;B8.call(a);a.ji=0;a.m2=null;a.mc=null;a.l6=0;}
function APN(a,b){var c=new E2();L8(c,a,b);return c;}
function L8(a,b,c){B9(a);a.ji=1;a.mc=b;a.l6=c;}
function ANb(a,b){a.f=b;}
function AJD(a,b,c,d){var e,f,g,h,i,j,k,l;e=$rt_createIntArray(4);f=d.bs;if(b>=f)return (-1);g=Jr(a,b,c,f);h=b+a.ji|0;i=AAK(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;CM(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=Jr(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=AAK(g).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.ji|0;if(h>=f){b=k;break a;}g=Jr(a,h,c,f);b=k;}}}if(b!=a.l6)return (-1);i=e.data;g=0;while
(true){if(g>=b)return a.f.b(h,c,d);if(i[g]!=a.mc.data[g])break;g=g+1|0;}return (-1);}
function Rj(a){var b,c;if(a.m2===null){b=new W;Ba(b);c=0;while(c<a.l6){Fi(b,F$(a.mc.data[c]));c=c+1|0;}a.m2=X(b);}return a.m2;}
function Jr(a,b,c,d){var e,f,g;a.ji=1;if(b>=(d-1|0))e=M(c,b);else{d=b+1|0;e=M(c,b);f=M(c,d);if(GT(e,f)){g=$rt_createCharArray(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CQ(g[0])&&C5(g[1])?DB(g[0],g[1]):g[0];a.ji=2;}}return e;}
function AHR(a,b){return b instanceof E2&&!BR(Rj(b),Rj(a))?0:1;}
function AKw(a,b){return 1;}
function RJ(){E2.call(this);}
function PX(){E2.call(this);}
function Sm(){Da.call(this);}
function AEZ(a,b,c,d){var e;while(true){e=a.bG.b(b,c,d);if(e<=0)break;b=e;}return a.f.b(b,c,d);}
function Ns(){Da.call(this);}
function AIY(a,b,c,d){var e;e=a.bG.b(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.bG.b(e,c,d);if(b<=e)break;e=b;}b=e;}return a.f.b(b,c,d);}
function FD(){Da.call(this);}
function ALx(a,b,c,d){var e;if(!a.bG.bM(d))return a.f.b(b,c,d);e=a.bG.b(b,c,d);if(e>=0)return e;return a.f.b(b,c,d);}
function AMC(a,b){a.f=b;a.bG.bR(b);}
function M_(){FD.call(this);}
function AHB(a,b,c,d){var e;e=a.bG.b(b,c,d);if(e<=0)e=b;return a.f.b(e,c,d);}
function AJi(a,b){a.f=b;}
function EZ(){var a=this;Da.call(a);a.gL=null;a.eQ=0;}
function AUr(a,b,c,d,e){var f=new EZ();Ii(f,a,b,c,d,e);return f;}
function Ii(a,b,c,d,e,f){Dh(a,c,d,e);a.gL=b;a.eQ=f;}
function ANN(a,b,c,d){var e,f;e=Lm(d,a.eQ);if(!a.bG.bM(d))return a.f.b(b,c,d);if(e>=a.gL.e$)return a.f.b(b,c,d);f=a.eQ;e=e+1|0;D4(d,f,e);f=a.bG.b(b,c,d);if(f>=0){D4(d,a.eQ,0);return f;}f=a.eQ;e=e+(-1)|0;D4(d,f,e);if(e>=a.gL.fF)return a.f.b(b,c,d);D4(d,a.eQ,0);return (-1);}
function Lz(){EZ.call(this);}
function AG9(a,b,c,d){var e,f,g;e=0;f=a.gL.e$;a:{while(true){g=a.bG.b(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.gL.fF)return (-1);return a.f.b(b,c,d);}
function OA(){Da.call(this);}
function ANo(a,b,c,d){var e;if(!a.bG.bM(d))return a.f.b(b,c,d);e=a.f.b(b,c,d);if(e>=0)return e;return a.bG.b(b,c,d);}
function NX(){FD.call(this);}
function AEc(a,b,c,d){var e;if(!a.bG.bM(d))return a.f.b(b,c,d);e=a.f.b(b,c,d);if(e<0)e=a.bG.b(b,c,d);return e;}
function Qs(){EZ.call(this);}
function AC8(a,b,c,d){var e,f;e=Lm(d,a.eQ);if(!a.bG.bM(d))return a.f.b(b,c,d);if(e>=a.gL.e$){D4(d,a.eQ,0);return a.f.b(b,c,d);}if(e<a.gL.fF){D4(d,a.eQ,e+1|0);f=a.bG.b(b,c,d);}else{f=a.f.b(b,c,d);if(f>=0){D4(d,a.eQ,0);return f;}D4(d,a.eQ,e+1|0);f=a.bG.b(b,c,d);}return f;}
function OC(){DQ.call(this);}
function ANG(a,b,c,d){var e;e=d.bs;if(e>b)return a.f.dt(b,e,c,d);return a.f.b(b,c,d);}
function ALI(a,b,c,d){var e;e=d.bs;if(a.f.dt(b,e,c,d)>=0)return b;return (-1);}
function Mk(){DQ.call(this);this.na=null;}
function AJU(a,b,c,d){var e,f;e=d.bs;f=Qt(a,b,e,c);if(f>=0)e=f;if(e>b)return a.f.dt(b,e,c,d);return a.f.b(b,c,d);}
function ACA(a,b,c,d){var e,f,g,h;e=d.bs;f=a.f.dq(b,c,d);if(f<0)return (-1);g=Qt(a,f,e,c);if(g>=0)e=g;g=a.f.dt(f,e,c,d);if(f<g)f=g;if(f<=0)h=f?(-1):0;else{h=f-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.na.jt(M(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=f?h:h+1|0;return b;}
function Qt(a,b,c,d){while(true){if(b>=c)return (-1);if(a.na.jt(M(d,b)))break;b=b+1|0;}return b;}
function Ew(){C.call(this);}
var AUs=null;var AUt=null;function Ne(b){if(!(b&1)){if(AUt!==null)return AUt;AUt=new QG;return AUt;}if(AUs!==null)return AUs;AUs=new QF;return AUs;}
function Sn(){Dd.call(this);}
function ADa(a,b,c,d){var e;a:{while(true){if((b+a.b6.cR()|0)>d.bs)break a;e=a.b6.co(b,c);if(e<1)break;b=b+e|0;}}return a.f.b(b,c,d);}
function Q9(){Em.call(this);}
function AIW(a,b,c,d){var e;if((b+a.b6.cR()|0)<=d.bs){e=a.b6.co(b,c);if(e>=1)b=b+e|0;}return a.f.b(b,c,d);}
function MX(){ES.call(this);}
function ALd(a,b,c,d){var e,f,g,h,i;e=a.g8.fF;f=a.g8.e$;g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.b6.cR()|0)>d.bs)break a;h=a.b6.co(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.f.b(b,c,d);}if((b+a.b6.cR()|0)>d.bs){d.eJ=1;return (-1);}i=a.b6.co(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function NV(){Dd.call(this);}
function AJM(a,b,c,d){var e;while(true){e=a.f.b(b,c,d);if(e>=0)break;if((b+a.b6.cR()|0)<=d.bs){e=a.b6.co(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
function P2(){Em.call(this);}
function ADh(a,b,c,d){var e;e=a.f.b(b,c,d);if(e>=0)return e;return a.bG.b(b,c,d);}
function Oi(){ES.call(this);}
function ALk(a,b,c,d){var e,f,g,h,i;e=a.g8.fF;f=a.g8.e$;g=0;while(true){if(g>=e){a:{while(true){h=a.f.b(b,c,d);if(h>=0)break;if((b+a.b6.cR()|0)<=d.bs){h=a.b6.co(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.b6.cR()|0)>d.bs){d.eJ=1;return (-1);}i=a.b6.co(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function Wy(){BT.call(this);}
function AMa(){var a=new Wy();AFm(a);return a;}
function AFm(a){B9(a);}
function AH$(a,b,c,d){if(b&&!(d.gZ&&b==d.dy))return (-1);return a.f.b(b,c,d);}
function AHg(a,b){return 0;}
function U$(){BT.call(this);this.tH=0;}
function AL3(a){var b=new U$();AHu(b,a);return b;}
function AHu(a,b){B9(a);a.tH=b;}
function ADN(a,b,c,d){var e,f,g;e=b<d.bs?M(c,b):32;f=!b?32:M(c,b-1|0);g=d.jc?0:d.dy;return (e!=32&&!N3(a,e,b,g,c)?0:1)^(f!=32&&!N3(a,f,b-1|0,g,c)?0:1)^a.tH?(-1):a.f.b(b,c,d);}
function ADZ(a,b){return 0;}
function N3(a,b,c,d,e){var f;if(!ID(b)&&b!=95){a:{if(CO(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=M(e,c);if(ID(f))return 0;if(CO(f)!=6)return 1;}}return 1;}return 0;}
function T1(){BT.call(this);}
function AOx(){var a=new T1();ALD(a);return a;}
function ALD(a){B9(a);}
function AHs(a,b,c,d){if(b!=d.g_)return (-1);return a.f.b(b,c,d);}
function ANJ(a,b){return 0;}
function Ry(){BT.call(this);this.hP=0;}
function APh(a){var b=new Ry();AAq(b,a);return b;}
function AAq(a,b){B9(a);a.hP=b;}
function AKh(a,b,c,d){var e,f,g;e=!d.gZ?O(c):d.bs;if(b>=e){B0(d,a.hP,0);return a.f.b(b,c,d);}f=e-b|0;if(f==2&&M(c,b)==13&&M(c,b+1|0)==10){B0(d,a.hP,0);return a.f.b(b,c,d);}a:{if(f==1){g=M(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}B0(d,a.hP,0);return a.f.b(b,c,d);}
function AEM(a,b){var c;c=!Dk(b,a.hP)?0:1;B0(b,a.hP,(-1));return c;}
function AA0(){BT.call(this);}
function APp(){var a=new AA0();AHl(a);return a;}
function AHl(a){B9(a);}
function AJy(a,b,c,d){if(b<(d.jc?O(c):d.bs))return (-1);d.eJ=1;d.xl=1;return a.f.b(b,c,d);}
function ACn(a,b){return 0;}
function Th(){BT.call(this);this.se=null;}
function APq(a){var b=new Th();AKk(b,a);return b;}
function AKk(a,b){B9(a);a.se=b;}
function AEx(a,b,c,d){a:{if(b!=d.bs){if(!b)break a;if(d.gZ&&b==d.dy)break a;if(a.se.sR(M(c,b-1|0),M(c,b)))break a;}return (-1);}return a.f.b(b,c,d);}
function AGt(a,b){return 0;}
function AAU(){B8.call(this);}
function APB(){var a=new AAU();AJt(a);return a;}
function AJt(a){B9(a);}
function ANr(a,b,c,d){var e,f,g,h;e=d.bs;f=b+1|0;if(f>e){d.eJ=1;return (-1);}g=M(c,b);if(CQ(g)){h=b+2|0;if(h<=e&&GT(g,M(c,f)))return a.f.b(h,c,d);}return a.f.b(f,c,d);}
function AD4(a,b){a.f=b;}
function AJn(a){return (-2147483602);}
function AD2(a,b){return 1;}
function Uj(){B8.call(this);this.nY=null;}
function APd(a){var b=new Uj();AEK(b,a);return b;}
function AEK(a,b){B9(a);a.nY=b;}
function AJv(a,b,c,d){var e,f,g,h;e=d.bs;f=b+1|0;if(f>e){d.eJ=1;return (-1);}g=M(c,b);if(CQ(g)){b=b+2|0;if(b<=e){h=M(c,f);if(GT(g,h))return a.nY.jt(DB(g,h))?(-1):a.f.b(b,c,d);}}return a.nY.jt(g)?(-1):a.f.b(f,c,d);}
function AK2(a,b){a.f=b;}
function ACk(a){return (-2147483602);}
function ANA(a,b){return 1;}
function AAH(){BT.call(this);this.i7=0;}
function AOX(a){var b=new AAH();AGo(b,a);return b;}
function AGo(a,b){B9(a);a.i7=b;}
function AHV(a,b,c,d){var e;e=!d.gZ?O(c):d.bs;if(b>=e){B0(d,a.i7,0);return a.f.b(b,c,d);}if((e-b|0)==1&&M(c,b)==10){B0(d,a.i7,1);return a.f.b(b+1|0,c,d);}return (-1);}
function AGm(a,b){var c;c=!Dk(b,a.i7)?0:1;B0(b,a.i7,(-1));return c;}
function XZ(){BT.call(this);this.jh=0;}
function AOH(a){var b=new XZ();AGS(b,a);return b;}
function AGS(a,b){B9(a);a.jh=b;}
function AJx(a,b,c,d){if((!d.gZ?O(c)-b|0:d.bs-b|0)<=0){B0(d,a.jh,0);return a.f.b(b,c,d);}if(M(c,b)!=10)return (-1);B0(d,a.jh,1);return a.f.b(b+1|0,c,d);}
function AGd(a,b){var c;c=!Dk(b,a.jh)?0:1;B0(b,a.jh,(-1));return c;}
function SI(){BT.call(this);this.hd=0;}
function AN5(a){var b=new SI();ANQ(b,a);return b;}
function ANQ(a,b){B9(a);a.hd=b;}
function AHb(a,b,c,d){var e,f,g;e=!d.gZ?O(c)-b|0:d.dy-b|0;if(!e){B0(d,a.hd,0);return a.f.b(b,c,d);}if(e<2){f=M(c,b);g=97;}else{f=M(c,b);g=M(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:B0(d,a.hd,0);return a.f.b(b,c,d);case 13:if(g!=10){B0(d,a.hd,0);return a.f.b(b,c,d);}B0(d,a.hd,0);return a.f.b(b,c,d);default:}return (-1);}
function AES(a,b){var c;c=!Dk(b,a.hd)?0:1;B0(b,a.hd,(-1));return c;}
function Gz(){var a=this;B8.call(a);a.qr=0;a.iu=0;}
function APH(a,b){var c=new Gz();MR(c,a,b);return c;}
function MR(a,b,c){B9(a);a.qr=b;a.iu=c;}
function ADb(a,b,c,d){var e,f,g,h;e=FX(a,d);if(e!==null&&(b+O(e)|0)<=d.bs){f=0;while(true){if(f>=O(e)){B0(d,a.iu,O(e));return a.f.b(b+O(e)|0,c,d);}g=M(e,f);h=b+f|0;if(g!=M(c,h)&&G5(M(e,f))!=M(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AKq(a,b){a.f=b;}
function FX(a,b){return W8(b,a.qr);}
function AKL(a,b){var c;c=!Dk(b,a.iu)?0:1;B0(b,a.iu,(-1));return c;}
function AAM(){Gz.call(this);}
function AOa(a,b){var c=new AAM();AMx(c,a,b);return c;}
function AMx(a,b,c){MR(a,b,c);}
function AEY(a,b,c,d){var e,f;e=FX(a,d);if(e!==null&&(b+O(e)|0)<=d.bs){f=!J6(c,e,b)?(-1):O(e);if(f<0)return (-1);B0(d,a.iu,f);return a.f.b(b+f|0,c,d);}return (-1);}
function AMl(a,b,c,d){var e,f,g;e=FX(a,d);f=d.dy;if(e!==null&&(b+O(e)|0)<=f){g=c;while(true){if(b>f)return (-1);b=IZ(g,e,b);if(b<0)return (-1);if(a.f.b(b+O(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AC2(a,b,c,d,e){var f,g,h;f=FX(a,e);if(f===null)return (-1);g=d;a:{while(true){if(c<b)return (-1);h=Nw(g,f,c);if(h<0)break a;if(h<b)break a;if(a.f.b(h+O(f)|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function AIT(a,b){return 1;}
function Wn(){Gz.call(this);}
function AOG(a,b){var c=new Wn();AGj(c,a,b);return c;}
function AGj(a,b,c){MR(a,b,c);}
function AIi(a,b,c,d){var e,f;e=FX(a,d);if(e!==null&&(b+O(e)|0)<=d.bs){f=0;while(true){if(f>=O(e)){B0(d,a.iu,O(e));return a.f.b(b+O(e)|0,c,d);}if(Eh(DX(M(e,f)))!=Eh(DX(M(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
function W0(){var a=this;Cb.call(a);a.dx=null;a.m7=null;a.n_=null;}
function AOJ(a){var b=new W0();AFb(b,a);return b;}
function AFb(a,b){var c;Dr(a);a.dx=X(b);a.cq=KX(b);a.m7=AJm(a.cq);a.n_=AJm(a.cq);c=0;while(c<(a.cq-1|0)){Ol(a.m7,M(a.dx,c),(a.cq-c|0)-1|0);Ol(a.n_,M(a.dx,(a.cq-c|0)-1|0),(a.cq-c|0)-1|0);c=c+1|0;}}
function AFh(a,b,c){return !Jo(a,c,b)?(-1):a.cq;}
function ADJ(a,b,c,d){var e,f;e=d.bs;while(true){if(b>e)return (-1);f=AA6(a,c,b,e);if(f<0)return (-1);if(a.f.b(f+a.cq|0,c,d)>=0)break;b=f+1|0;}return f;}
function AGs(a,b,c,d,e){while(true){if(c<b)return (-1);c=AAo(a,d,b,c);if(c<0)return (-1);if(a.f.b(c+a.cq|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AGY(a,b){var c;if(b instanceof Ee)return b.ed!=M(a.dx,0)?0:1;if(b instanceof D7)return K5(b,0,BK(a.dx,0,1))<=0?0:1;if(!(b instanceof Dt)){if(!(b instanceof DI))return 1;return O(a.dx)>1&&b.gA==DB(M(a.dx,0),M(a.dx,1))?1:0;}a:{b:{b=b;if(!b.K(M(a.dx,0))){if(O(a.dx)<=1)break b;if(!b.K(DB(M(a.dx,0),M(a.dx,1))))break b;}c=1;break a;}c=0;}return c;}
function AA6(a,b,c,d){var e,f;e=M(a.dx,a.cq-1|0);while(true){if(c>(d-a.cq|0))return (-1);f=M(b,(c+a.cq|0)-1|0);if(f==e&&Jo(a,b,c))break;c=c+Pf(a.m7,f)|0;}return c;}
function AAo(a,b,c,d){var e,f,g;e=M(a.dx,0);f=(O(b)-d|0)-a.cq|0;if(f<=0)d=d+f|0;while(true){if(d<c)return (-1);g=M(b,d);if(g==e&&Jo(a,b,d))break;d=d-Pf(a.n_,g)|0;}return d;}
function Jo(a,b,c){var d;d=0;while(d<a.cq){if(M(b,d+c|0)!=M(a.dx,d))return 0;d=d+1|0;}return 1;}
function SE(){Cb.call(this);this.k$=null;}
function APL(a){var b=new SE();AL$(b,a);return b;}
function AL$(a,b){var c,d;Dr(a);c=new W;Ba(c);d=0;while(d<KX(b)){CL(c,Eh(DX(SM(b,d))));d=d+1|0;}a.k$=X(c);a.cq=G1(c);}
function AIp(a,b,c){var d;d=0;while(true){if(d>=O(a.k$))return O(a.k$);if(M(a.k$,d)!=Eh(DX(M(c,b+d|0))))break;d=d+1|0;}return (-1);}
function LE(){Cb.call(this);this.i4=null;}
function ALf(a,b,c){var d,e,f;d=0;while(true){if(d>=O(a.i4))return O(a.i4);e=M(a.i4,d);f=b+d|0;if(e!=M(c,f)&&G5(M(a.i4,d))!=M(c,f))break;d=d+1|0;}return (-1);}
function Gy(){C.call(this);}
var AUu=null;var AUv=null;var AUw=null;function ABh(a,b){var c,d,e;c=0;while(true){if(c>=AUw.data.length){d=new Io;Bb(d,B(3));d.xT=B(3);d.xA=b;H(d);}e=AUw.data[c].data;if(BR(b,e[0]))break;c=c+1|0;}return e[1];}
function U_(){var b,c,d,e;AUu=APo();AUv=AOR();b=I($rt_arraycls(C),194);c=b.data;d=I(C,2);e=d.data;e[0]=B(394);e[1]=API();c[0]=d;d=I(C,2);e=d.data;e[0]=B(395);e[1]=AN4();c[1]=d;d=I(C,2);e=d.data;e[0]=B(396);e[1]=APm();c[2]=d;d=I(C,2);e=d.data;e[0]=B(397);e[1]=APx();c[3]=d;d=I(C,2);e=d.data;e[0]=B(398);e[1]=AUv;c[4]=d;d=I(C,2);e=d.data;e[0]=B(399);e[1]=AO0();c[5]=d;d=I(C,2);e=d.data;e[0]=B(400);e[1]=AOK();c[6]=d;d=I(C,2);e=d.data;e[0]=B(401);e[1]=AOf();c[7]=d;d=I(C,2);e=d.data;e[0]=B(402);e[1]=AN$();c[8]=d;d=
I(C,2);e=d.data;e[0]=B(403);e[1]=AOj();c[9]=d;d=I(C,2);e=d.data;e[0]=B(404);e[1]=AOA();c[10]=d;d=I(C,2);e=d.data;e[0]=B(405);e[1]=AOh();c[11]=d;d=I(C,2);e=d.data;e[0]=B(406);e[1]=APa();c[12]=d;d=I(C,2);e=d.data;e[0]=B(407);e[1]=AN2();c[13]=d;d=I(C,2);e=d.data;e[0]=B(408);e[1]=APs();c[14]=d;d=I(C,2);e=d.data;e[0]=B(409);e[1]=AOz();c[15]=d;d=I(C,2);e=d.data;e[0]=B(410);e[1]=AOY();c[16]=d;d=I(C,2);e=d.data;e[0]=B(411);e[1]=AOv();c[17]=d;d=I(C,2);e=d.data;e[0]=B(412);e[1]=AOZ();c[18]=d;d=I(C,2);e=d.data;e[0]=B(413);e[1]
=AOl();c[19]=d;d=I(C,2);e=d.data;e[0]=B(414);e[1]=APA();c[20]=d;d=I(C,2);e=d.data;e[0]=B(415);e[1]=AOr();c[21]=d;d=I(C,2);e=d.data;e[0]=B(416);e[1]=AO1();c[22]=d;d=I(C,2);e=d.data;e[0]=B(417);e[1]=APk();c[23]=d;d=I(C,2);e=d.data;e[0]=B(418);e[1]=APi();c[24]=d;d=I(C,2);e=d.data;e[0]=B(419);e[1]=APz();c[25]=d;d=I(C,2);e=d.data;e[0]=B(420);e[1]=AOk();c[26]=d;d=I(C,2);e=d.data;e[0]=B(421);e[1]=APc();c[27]=d;d=I(C,2);e=d.data;e[0]=B(422);e[1]=AUu;c[28]=d;d=I(C,2);e=d.data;e[0]=B(423);e[1]=AO4();c[29]=d;d=I(C,2);e
=d.data;e[0]=B(44);e[1]=AOg();c[30]=d;d=I(C,2);e=d.data;e[0]=B(424);e[1]=AUu;c[31]=d;d=I(C,2);e=d.data;e[0]=B(58);e[1]=AN0();c[32]=d;d=I(C,2);e=d.data;e[0]=B(425);e[1]=AUv;c[33]=d;d=I(C,2);e=d.data;e[0]=B(59);e[1]=AOC();c[34]=d;d=I(C,2);e=d.data;e[0]=B(426);e[1]=P(0,127);c[35]=d;d=I(C,2);e=d.data;e[0]=B(427);e[1]=P(128,255);c[36]=d;d=I(C,2);e=d.data;e[0]=B(428);e[1]=P(256,383);c[37]=d;d=I(C,2);e=d.data;e[0]=B(429);e[1]=P(384,591);c[38]=d;d=I(C,2);e=d.data;e[0]=B(430);e[1]=P(592,687);c[39]=d;d=I(C,2);e=d.data;e[0]
=B(431);e[1]=P(688,767);c[40]=d;d=I(C,2);e=d.data;e[0]=B(432);e[1]=P(768,879);c[41]=d;d=I(C,2);e=d.data;e[0]=B(433);e[1]=P(880,1023);c[42]=d;d=I(C,2);e=d.data;e[0]=B(434);e[1]=P(1024,1279);c[43]=d;d=I(C,2);e=d.data;e[0]=B(435);e[1]=P(1280,1327);c[44]=d;d=I(C,2);e=d.data;e[0]=B(436);e[1]=P(1328,1423);c[45]=d;d=I(C,2);e=d.data;e[0]=B(437);e[1]=P(1424,1535);c[46]=d;d=I(C,2);e=d.data;e[0]=B(438);e[1]=P(1536,1791);c[47]=d;d=I(C,2);e=d.data;e[0]=B(439);e[1]=P(1792,1871);c[48]=d;d=I(C,2);e=d.data;e[0]=B(440);e[1]=
P(1872,1919);c[49]=d;d=I(C,2);e=d.data;e[0]=B(441);e[1]=P(1920,1983);c[50]=d;d=I(C,2);e=d.data;e[0]=B(442);e[1]=P(2304,2431);c[51]=d;d=I(C,2);e=d.data;e[0]=B(443);e[1]=P(2432,2559);c[52]=d;d=I(C,2);e=d.data;e[0]=B(444);e[1]=P(2560,2687);c[53]=d;d=I(C,2);e=d.data;e[0]=B(445);e[1]=P(2688,2815);c[54]=d;d=I(C,2);e=d.data;e[0]=B(446);e[1]=P(2816,2943);c[55]=d;d=I(C,2);e=d.data;e[0]=B(447);e[1]=P(2944,3071);c[56]=d;d=I(C,2);e=d.data;e[0]=B(448);e[1]=P(3072,3199);c[57]=d;d=I(C,2);e=d.data;e[0]=B(449);e[1]=P(3200,3327);c[58]
=d;d=I(C,2);e=d.data;e[0]=B(450);e[1]=P(3328,3455);c[59]=d;d=I(C,2);e=d.data;e[0]=B(451);e[1]=P(3456,3583);c[60]=d;d=I(C,2);e=d.data;e[0]=B(452);e[1]=P(3584,3711);c[61]=d;d=I(C,2);e=d.data;e[0]=B(453);e[1]=P(3712,3839);c[62]=d;d=I(C,2);e=d.data;e[0]=B(454);e[1]=P(3840,4095);c[63]=d;d=I(C,2);e=d.data;e[0]=B(455);e[1]=P(4096,4255);c[64]=d;d=I(C,2);e=d.data;e[0]=B(456);e[1]=P(4256,4351);c[65]=d;d=I(C,2);e=d.data;e[0]=B(457);e[1]=P(4352,4607);c[66]=d;d=I(C,2);e=d.data;e[0]=B(458);e[1]=P(4608,4991);c[67]=d;d=I(C,
2);e=d.data;e[0]=B(459);e[1]=P(4992,5023);c[68]=d;d=I(C,2);e=d.data;e[0]=B(460);e[1]=P(5024,5119);c[69]=d;d=I(C,2);e=d.data;e[0]=B(461);e[1]=P(5120,5759);c[70]=d;d=I(C,2);e=d.data;e[0]=B(462);e[1]=P(5760,5791);c[71]=d;d=I(C,2);e=d.data;e[0]=B(463);e[1]=P(5792,5887);c[72]=d;d=I(C,2);e=d.data;e[0]=B(464);e[1]=P(5888,5919);c[73]=d;d=I(C,2);e=d.data;e[0]=B(465);e[1]=P(5920,5951);c[74]=d;d=I(C,2);e=d.data;e[0]=B(466);e[1]=P(5952,5983);c[75]=d;d=I(C,2);e=d.data;e[0]=B(467);e[1]=P(5984,6015);c[76]=d;d=I(C,2);e=d.data;e[0]
=B(468);e[1]=P(6016,6143);c[77]=d;d=I(C,2);e=d.data;e[0]=B(469);e[1]=P(6144,6319);c[78]=d;d=I(C,2);e=d.data;e[0]=B(470);e[1]=P(6400,6479);c[79]=d;d=I(C,2);e=d.data;e[0]=B(471);e[1]=P(6480,6527);c[80]=d;d=I(C,2);e=d.data;e[0]=B(472);e[1]=P(6528,6623);c[81]=d;d=I(C,2);e=d.data;e[0]=B(473);e[1]=P(6624,6655);c[82]=d;d=I(C,2);e=d.data;e[0]=B(474);e[1]=P(6656,6687);c[83]=d;d=I(C,2);e=d.data;e[0]=B(475);e[1]=P(7424,7551);c[84]=d;d=I(C,2);e=d.data;e[0]=B(476);e[1]=P(7552,7615);c[85]=d;d=I(C,2);e=d.data;e[0]=B(477);e[1]
=P(7616,7679);c[86]=d;d=I(C,2);e=d.data;e[0]=B(478);e[1]=P(7680,7935);c[87]=d;d=I(C,2);e=d.data;e[0]=B(479);e[1]=P(7936,8191);c[88]=d;d=I(C,2);e=d.data;e[0]=B(480);e[1]=P(8192,8303);c[89]=d;d=I(C,2);e=d.data;e[0]=B(481);e[1]=P(8304,8351);c[90]=d;d=I(C,2);e=d.data;e[0]=B(482);e[1]=P(8352,8399);c[91]=d;d=I(C,2);e=d.data;e[0]=B(483);e[1]=P(8400,8447);c[92]=d;d=I(C,2);e=d.data;e[0]=B(484);e[1]=P(8448,8527);c[93]=d;d=I(C,2);e=d.data;e[0]=B(485);e[1]=P(8528,8591);c[94]=d;d=I(C,2);e=d.data;e[0]=B(486);e[1]=P(8592,
8703);c[95]=d;d=I(C,2);e=d.data;e[0]=B(487);e[1]=P(8704,8959);c[96]=d;d=I(C,2);e=d.data;e[0]=B(488);e[1]=P(8960,9215);c[97]=d;d=I(C,2);e=d.data;e[0]=B(489);e[1]=P(9216,9279);c[98]=d;d=I(C,2);e=d.data;e[0]=B(490);e[1]=P(9280,9311);c[99]=d;d=I(C,2);e=d.data;e[0]=B(491);e[1]=P(9312,9471);c[100]=d;d=I(C,2);e=d.data;e[0]=B(492);e[1]=P(9472,9599);c[101]=d;d=I(C,2);e=d.data;e[0]=B(493);e[1]=P(9600,9631);c[102]=d;d=I(C,2);e=d.data;e[0]=B(494);e[1]=P(9632,9727);c[103]=d;d=I(C,2);e=d.data;e[0]=B(495);e[1]=P(9728,9983);c[104]
=d;d=I(C,2);e=d.data;e[0]=B(496);e[1]=P(9984,10175);c[105]=d;d=I(C,2);e=d.data;e[0]=B(497);e[1]=P(10176,10223);c[106]=d;d=I(C,2);e=d.data;e[0]=B(498);e[1]=P(10224,10239);c[107]=d;d=I(C,2);e=d.data;e[0]=B(499);e[1]=P(10240,10495);c[108]=d;d=I(C,2);e=d.data;e[0]=B(500);e[1]=P(10496,10623);c[109]=d;d=I(C,2);e=d.data;e[0]=B(501);e[1]=P(10624,10751);c[110]=d;d=I(C,2);e=d.data;e[0]=B(502);e[1]=P(10752,11007);c[111]=d;d=I(C,2);e=d.data;e[0]=B(503);e[1]=P(11008,11263);c[112]=d;d=I(C,2);e=d.data;e[0]=B(504);e[1]=P(11264,
11359);c[113]=d;d=I(C,2);e=d.data;e[0]=B(505);e[1]=P(11392,11519);c[114]=d;d=I(C,2);e=d.data;e[0]=B(506);e[1]=P(11520,11567);c[115]=d;d=I(C,2);e=d.data;e[0]=B(507);e[1]=P(11568,11647);c[116]=d;d=I(C,2);e=d.data;e[0]=B(508);e[1]=P(11648,11743);c[117]=d;d=I(C,2);e=d.data;e[0]=B(509);e[1]=P(11776,11903);c[118]=d;d=I(C,2);e=d.data;e[0]=B(510);e[1]=P(11904,12031);c[119]=d;d=I(C,2);e=d.data;e[0]=B(511);e[1]=P(12032,12255);c[120]=d;d=I(C,2);e=d.data;e[0]=B(512);e[1]=P(12272,12287);c[121]=d;d=I(C,2);e=d.data;e[0]=B(513);e[1]
=P(12288,12351);c[122]=d;d=I(C,2);e=d.data;e[0]=B(514);e[1]=P(12352,12447);c[123]=d;d=I(C,2);e=d.data;e[0]=B(515);e[1]=P(12448,12543);c[124]=d;d=I(C,2);e=d.data;e[0]=B(516);e[1]=P(12544,12591);c[125]=d;d=I(C,2);e=d.data;e[0]=B(517);e[1]=P(12592,12687);c[126]=d;d=I(C,2);e=d.data;e[0]=B(518);e[1]=P(12688,12703);c[127]=d;d=I(C,2);e=d.data;e[0]=B(519);e[1]=P(12704,12735);c[128]=d;d=I(C,2);e=d.data;e[0]=B(520);e[1]=P(12736,12783);c[129]=d;d=I(C,2);e=d.data;e[0]=B(521);e[1]=P(12784,12799);c[130]=d;d=I(C,2);e=d.data;e[0]
=B(522);e[1]=P(12800,13055);c[131]=d;d=I(C,2);e=d.data;e[0]=B(523);e[1]=P(13056,13311);c[132]=d;d=I(C,2);e=d.data;e[0]=B(524);e[1]=P(13312,19893);c[133]=d;d=I(C,2);e=d.data;e[0]=B(525);e[1]=P(19904,19967);c[134]=d;d=I(C,2);e=d.data;e[0]=B(526);e[1]=P(19968,40959);c[135]=d;d=I(C,2);e=d.data;e[0]=B(527);e[1]=P(40960,42127);c[136]=d;d=I(C,2);e=d.data;e[0]=B(528);e[1]=P(42128,42191);c[137]=d;d=I(C,2);e=d.data;e[0]=B(529);e[1]=P(42752,42783);c[138]=d;d=I(C,2);e=d.data;e[0]=B(530);e[1]=P(43008,43055);c[139]=d;d=I(C,
2);e=d.data;e[0]=B(531);e[1]=P(44032,55203);c[140]=d;d=I(C,2);e=d.data;e[0]=B(532);e[1]=P(55296,56191);c[141]=d;d=I(C,2);e=d.data;e[0]=B(533);e[1]=P(56192,56319);c[142]=d;d=I(C,2);e=d.data;e[0]=B(534);e[1]=P(56320,57343);c[143]=d;d=I(C,2);e=d.data;e[0]=B(535);e[1]=P(57344,63743);c[144]=d;d=I(C,2);e=d.data;e[0]=B(536);e[1]=P(63744,64255);c[145]=d;d=I(C,2);e=d.data;e[0]=B(537);e[1]=P(64256,64335);c[146]=d;d=I(C,2);e=d.data;e[0]=B(538);e[1]=P(64336,65023);c[147]=d;d=I(C,2);e=d.data;e[0]=B(539);e[1]=P(65024,65039);c[148]
=d;d=I(C,2);e=d.data;e[0]=B(540);e[1]=P(65040,65055);c[149]=d;d=I(C,2);e=d.data;e[0]=B(541);e[1]=P(65056,65071);c[150]=d;d=I(C,2);e=d.data;e[0]=B(542);e[1]=P(65072,65103);c[151]=d;d=I(C,2);e=d.data;e[0]=B(543);e[1]=P(65104,65135);c[152]=d;d=I(C,2);e=d.data;e[0]=B(544);e[1]=P(65136,65279);c[153]=d;d=I(C,2);e=d.data;e[0]=B(545);e[1]=P(65280,65519);c[154]=d;d=I(C,2);e=d.data;e[0]=B(546);e[1]=P(0,1114111);c[155]=d;d=I(C,2);e=d.data;e[0]=B(547);e[1]=AOi();c[156]=d;d=I(C,2);e=d.data;e[0]=B(548);e[1]=B1(0,1);c[157]
=d;d=I(C,2);e=d.data;e[0]=B(549);e[1]=H7(62,1);c[158]=d;d=I(C,2);e=d.data;e[0]=B(550);e[1]=B1(1,1);c[159]=d;d=I(C,2);e=d.data;e[0]=B(551);e[1]=B1(2,1);c[160]=d;d=I(C,2);e=d.data;e[0]=B(552);e[1]=B1(3,0);c[161]=d;d=I(C,2);e=d.data;e[0]=B(553);e[1]=B1(4,0);c[162]=d;d=I(C,2);e=d.data;e[0]=B(554);e[1]=B1(5,1);c[163]=d;d=I(C,2);e=d.data;e[0]=B(555);e[1]=H7(448,1);c[164]=d;d=I(C,2);e=d.data;e[0]=B(556);e[1]=B1(6,1);c[165]=d;d=I(C,2);e=d.data;e[0]=B(557);e[1]=B1(7,0);c[166]=d;d=I(C,2);e=d.data;e[0]=B(558);e[1]=B1(8,
1);c[167]=d;d=I(C,2);e=d.data;e[0]=B(76);e[1]=H7(3584,1);c[168]=d;d=I(C,2);e=d.data;e[0]=B(559);e[1]=B1(9,1);c[169]=d;d=I(C,2);e=d.data;e[0]=B(560);e[1]=B1(10,1);c[170]=d;d=I(C,2);e=d.data;e[0]=B(561);e[1]=B1(11,1);c[171]=d;d=I(C,2);e=d.data;e[0]=B(562);e[1]=H7(28672,0);c[172]=d;d=I(C,2);e=d.data;e[0]=B(563);e[1]=B1(12,0);c[173]=d;d=I(C,2);e=d.data;e[0]=B(564);e[1]=B1(13,0);c[174]=d;d=I(C,2);e=d.data;e[0]=B(565);e[1]=B1(14,0);c[175]=d;d=I(C,2);e=d.data;e[0]=B(566);e[1]=AOI(983040,1,1);c[176]=d;d=I(C,2);e=d.data;e[0]
=B(567);e[1]=B1(15,0);c[177]=d;d=I(C,2);e=d.data;e[0]=B(568);e[1]=B1(16,1);c[178]=d;d=I(C,2);e=d.data;e[0]=B(569);e[1]=B1(18,1);c[179]=d;d=I(C,2);e=d.data;e[0]=B(570);e[1]=AOW(19,0,1);c[180]=d;d=I(C,2);e=d.data;e[0]=B(571);e[1]=H7(1643118592,1);c[181]=d;d=I(C,2);e=d.data;e[0]=B(572);e[1]=B1(20,0);c[182]=d;d=I(C,2);e=d.data;e[0]=B(573);e[1]=B1(21,0);c[183]=d;d=I(C,2);e=d.data;e[0]=B(574);e[1]=B1(22,0);c[184]=d;d=I(C,2);e=d.data;e[0]=B(575);e[1]=B1(23,0);c[185]=d;d=I(C,2);e=d.data;e[0]=B(576);e[1]=B1(24,1);c[186]
=d;d=I(C,2);e=d.data;e[0]=B(577);e[1]=H7(2113929216,1);c[187]=d;d=I(C,2);e=d.data;e[0]=B(578);e[1]=B1(25,1);c[188]=d;d=I(C,2);e=d.data;e[0]=B(579);e[1]=B1(26,0);c[189]=d;d=I(C,2);e=d.data;e[0]=B(580);e[1]=B1(27,0);c[190]=d;d=I(C,2);e=d.data;e[0]=B(581);e[1]=B1(28,1);c[191]=d;d=I(C,2);e=d.data;e[0]=B(582);e[1]=B1(29,0);c[192]=d;d=I(C,2);e=d.data;e[0]=B(583);e[1]=B1(30,0);c[193]=d;AUw=b;}
function Bm(){var a=this;C.call(a);a.oE=null;a.nj=null;}
function Zy(a,b){if(!b&&a.oE===null)a.oE=a.bK();else if(b&&a.nj===null)a.nj=Ej(a.bK(),1);if(b)return a.nj;return a.oE;}
function K8(){Cb.call(this);this.rR=0;}
function ALi(a,b,c){var d,e;d=b+1|0;e=M(c,b);d=M(c,d);return a.rR!=Fa(E$(DB(e,d)))?(-1):2;}
function JK(){B8.call(this);this.h5=0;}
function AJr(a){var b=new JK();AEg(b,a);return b;}
function AEg(a,b){B9(a);a.h5=b;}
function AJK(a,b){a.f=b;}
function AEN(a,b,c,d){var e,f;e=b+1|0;if(e>d.bs){d.eJ=1;return (-1);}f=M(c,b);if(b>d.dy&&CQ(M(c,b-1|0)))return (-1);if(a.h5!=f)return (-1);return a.f.b(e,c,d);}
function AGV(a,b,c,d){var e,f,g,h,i;if(!(c instanceof Ca))return G7(a,b,c,d);e=c;f=d.dy;g=d.bs;while(true){if(b>=g)return (-1);h=C_(e,a.h5,b);if(h<0)return (-1);if(h>f&&CQ(M(e,h-1|0))){b=h+1|0;continue;}i=a.f;b=h+1|0;if(i.b(b,c,d)>=0)break;}return h;}
function AFo(a,b,c,d,e){var f,g;if(!(d instanceof Ca))return Hh(a,b,c,d,e);f=e.dy;g=d;a:{while(true){if(c<b)return (-1);c=Do(g,a.h5,c);if(c<0)break a;if(c<b)break a;if(c>f&&CQ(M(g,c-1|0))){c=c+(-2)|0;continue;}if(a.f.b(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function ACY(a,b){if(b instanceof Ee)return 0;if(b instanceof D7)return 0;if(b instanceof Dt)return 0;if(b instanceof DI)return 0;if(b instanceof JW)return 0;if(!(b instanceof JK))return 1;return b.h5!=a.h5?0:1;}
function ALW(a,b){return 1;}
function JW(){B8.call(this);this.hB=0;}
function AHd(a){var b=new JW();AJw(b,a);return b;}
function AJw(a,b){B9(a);a.hB=b;}
function AEi(a,b){a.f=b;}
function ACF(a,b,c,d){var e,f,g,h;e=d.bs;f=b+1|0;g=BN(f,e);if(g>0){d.eJ=1;return (-1);}h=M(c,b);if(g<0&&C5(M(c,f)))return (-1);if(a.hB!=h)return (-1);return a.f.b(f,c,d);}
function AJ3(a,b,c,d){var e,f,g;if(!(c instanceof Ca))return G7(a,b,c,d);e=c;f=d.bs;while(true){if(b>=f)return (-1);g=C_(e,a.hB,b);if(g<0)return (-1);b=g+1|0;if(b<f&&C5(M(e,b))){b=g+2|0;continue;}if(a.f.b(b,c,d)>=0)break;}return g;}
function ALe(a,b,c,d,e){var f,g,h;if(!(d instanceof Ca))return Hh(a,b,c,d,e);f=d;g=e.bs;a:{while(true){if(c<b)return (-1);c=Do(f,a.hB,c);if(c<0)break a;if(c<b)break a;h=c+1|0;if(h<g&&C5(M(f,h))){c=c+(-1)|0;continue;}if(a.f.b(h,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function AFi(a,b){if(b instanceof Ee)return 0;if(b instanceof D7)return 0;if(b instanceof Dt)return 0;if(b instanceof DI)return 0;if(b instanceof JK)return 0;if(!(b instanceof JW))return 1;return b.hB!=a.hB?0:1;}
function AJ7(a,b){return 1;}
function DI(){var a=this;Cb.call(a);a.lY=0;a.ky=0;a.gA=0;}
function AKM(a,b,c){var d,e;d=b+1|0;e=M(c,b);d=M(c,d);return a.lY==e&&a.ky==d?2:(-1);}
function AJd(a,b,c,d){var e,f,g;if(!(c instanceof Ca))return G7(a,b,c,d);e=c;f=d.bs;while(b<f){b=C_(e,a.lY,b);if(b<0)return (-1);b=b+1|0;if(b>=f)continue;g=M(e,b);if(a.ky==g&&a.f.b(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AEh(a,b,c,d,e){var f;if(!(d instanceof Ca))return Hh(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);c=Do(f,a.ky,c)+(-1)|0;if(c<0)break a;if(c<b)break a;if(a.lY==M(f,c)&&a.f.b(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function ACH(a){return a.gA;}
function AKz(a,b){if(b instanceof DI)return b.gA!=a.gA?0:1;if(b instanceof Dt)return b.K(a.gA);if(b instanceof Ee)return 0;if(!(b instanceof D7))return 1;return 0;}
function QF(){Ew.call(this);}
function AEr(a,b){return b!=10?0:1;}
function AKF(a,b,c){return b!=10?0:1;}
function QG(){Ew.call(this);}
function ALm(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AM3(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function Zc(){var a=this;C.call(a);a.jZ=null;a.mf=null;a.dX=0;a.ud=0;}
function AJm(a){var b=new Zc();AHr(b,a);return b;}
function AHr(a,b){while(b>=a.dX){a.dX=a.dX<<1|1;}a.dX=a.dX<<1|1;a.jZ=$rt_createIntArray(a.dX+1|0);a.mf=$rt_createIntArray(a.dX+1|0);a.ud=b;}
function Ol(a,b,c){var d,e;d=0;e=b&a.dX;while(a.jZ.data[e]&&a.jZ.data[e]!=b){d=(d+1|0)&a.dX;e=(e+d|0)&a.dX;}a.jZ.data[e]=b;a.mf.data[e]=c;}
function Pf(a,b){var c,d,e;c=b&a.dX;d=0;while(true){e=a.jZ.data[c];if(!e)break;if(e==b)return a.mf.data[c];d=(d+1|0)&a.dX;c=(c+d|0)&a.dX;}return a.ud;}
function Tg(){C.call(this);}
function JI(){Bm.call(this);}
function APo(){var a=new JI();AG$(a);return a;}
function AG$(a){return;}
function Wv(a){return CP(B$(Dl(),9,13),32);}
function IW(){Bm.call(this);}
function AOR(){var a=new IW();ALQ(a);return a;}
function ALQ(a){return;}
function XD(a){return B$(Dl(),48,57);}
function Y6(){Bm.call(this);}
function API(){var a=new Y6();AGD(a);return a;}
function AGD(a){return;}
function AK6(a){return B$(Dl(),97,122);}
function ZR(){Bm.call(this);}
function AN4(){var a=new ZR();AHy(a);return a;}
function AHy(a){return;}
function ALZ(a){return B$(Dl(),65,90);}
function ZX(){Bm.call(this);}
function APm(){var a=new ZX();ADK(a);return a;}
function ADK(a){return;}
function AFO(a){return B$(Dl(),0,127);}
function JD(){Bm.call(this);}
function APx(){var a=new JD();AE2(a);return a;}
function AE2(a){return;}
function Up(a){return B$(B$(Dl(),97,122),65,90);}
function Ka(){JD.call(this);}
function AO0(){var a=new Ka();AHf(a);return a;}
function AHf(a){return;}
function VN(a){return B$(Up(a),48,57);}
function ACd(){Bm.call(this);}
function AOK(){var a=new ACd();AI1(a);return a;}
function AI1(a){return;}
function AGU(a){return B$(B$(B$(Dl(),33,64),91,96),123,126);}
function K0(){Ka.call(this);}
function AOf(){var a=new K0();AKm(a);return a;}
function AKm(a){return;}
function SB(a){return B$(B$(B$(VN(a),33,64),91,96),123,126);}
function WV(){K0.call(this);}
function AN$(){var a=new WV();ALF(a);return a;}
function ALF(a){return;}
function AIN(a){return CP(SB(a),32);}
function Xq(){Bm.call(this);}
function AOj(){var a=new Xq();ALg(a);return a;}
function ALg(a){return;}
function AFa(a){return CP(CP(Dl(),32),9);}
function U0(){Bm.call(this);}
function AOA(){var a=new U0();AMS(a);return a;}
function AMS(a){return;}
function AII(a){return CP(B$(Dl(),0,31),127);}
function UB(){Bm.call(this);}
function AOh(){var a=new UB();ADY(a);return a;}
function ADY(a){return;}
function AM6(a){return B$(B$(B$(Dl(),48,57),97,102),65,70);}
function Z2(){Bm.call(this);}
function APa(){var a=new Z2();ADy(a);return a;}
function ADy(a){return;}
function AJj(a){var b;b=new Ps;b.wa=a;BH(b);b.bQ=1;return b;}
function ACj(){Bm.call(this);}
function AN2(){var a=new ACj();AKB(a);return a;}
function AKB(a){return;}
function ACx(a){var b;b=new Lf;b.ws=a;BH(b);b.bQ=1;return b;}
function Zd(){Bm.call(this);}
function APs(){var a=new Zd();ADM(a);return a;}
function ADM(a){return;}
function AHe(a){var b;b=new OU;b.vC=a;BH(b);return b;}
function YW(){Bm.call(this);}
function AOz(){var a=new YW();AIL(a);return a;}
function AIL(a){return;}
function AKO(a){var b;b=new OT;b.vm=a;BH(b);return b;}
function AAs(){Bm.call(this);}
function AOY(){var a=new AAs();AEX(a);return a;}
function AEX(a){return;}
function AE9(a){var b;b=new Rm;b.xs=a;BH(b);Hj(b.bP,0,2048);b.bQ=1;return b;}
function TC(){Bm.call(this);}
function AOv(){var a=new TC();AEm(a);return a;}
function AEm(a){return;}
function AFs(a){var b;b=new MT;b.wO=a;BH(b);b.bQ=1;return b;}
function S4(){Bm.call(this);}
function AOZ(){var a=new S4();AIm(a);return a;}
function AIm(a){return;}
function AMZ(a){var b;b=new L_;b.xX=a;BH(b);b.bQ=1;return b;}
function Zr(){Bm.call(this);}
function AOl(){var a=new Zr();AI2(a);return a;}
function AI2(a){return;}
function ACq(a){var b;b=new N_;b.wd=a;BH(b);return b;}
function ZD(){Bm.call(this);}
function APA(){var a=new ZD();AG3(a);return a;}
function AG3(a){return;}
function AHZ(a){var b;b=new La;b.uv=a;BH(b);b.bQ=1;return b;}
function VC(){Bm.call(this);}
function AOr(){var a=new VC();AC3(a);return a;}
function AC3(a){return;}
function AFy(a){var b;b=new Le;b.wT=a;BH(b);b.bQ=1;return b;}
function Xy(){Bm.call(this);}
function AO1(){var a=new Xy();AEt(a);return a;}
function AEt(a){return;}
function AGu(a){var b;b=new LX;b.xq=a;BH(b);b.bQ=1;return b;}
function ABF(){Bm.call(this);}
function APk(){var a=new ABF();AH7(a);return a;}
function AH7(a){return;}
function AH2(a){var b;b=new Nh;b.xE=a;BH(b);b.bQ=1;return b;}
function ZA(){Bm.call(this);}
function APi(){var a=new ZA();AJg(a);return a;}
function AJg(a){return;}
function AMf(a){var b;b=new No;b.vF=a;BH(b);return b;}
function Wh(){Bm.call(this);}
function APz(){var a=new Wh();AEp(a);return a;}
function AEp(a){return;}
function AKf(a){var b;b=new PU;b.w3=a;BH(b);return b;}
function VA(){Bm.call(this);}
function AOk(){var a=new VA();AKR(a);return a;}
function AKR(a){return;}
function AJf(a){var b;b=new Pb;b.uB=a;BH(b);b.bQ=1;return b;}
function ACi(){Bm.call(this);}
function APc(){var a=new ACi();AG1(a);return a;}
function AG1(a){return;}
function AKY(a){var b;b=new Lp;b.yb=a;BH(b);b.bQ=1;return b;}
function Ix(){Bm.call(this);}
function AO4(){var a=new Ix();AFG(a);return a;}
function AFG(a){return;}
function Xs(a){return CP(B$(B$(B$(Dl(),97,122),65,90),48,57),95);}
function AAy(){Ix.call(this);}
function AOg(){var a=new AAy();AG5(a);return a;}
function AG5(a){return;}
function AI5(a){var b;b=Ej(Xs(a),1);b.bQ=1;return b;}
function W1(){JI.call(this);}
function AN0(){var a=new W1();AMD(a);return a;}
function AMD(a){return;}
function ADH(a){var b;b=Ej(Wv(a),1);b.bQ=1;return b;}
function Vn(){IW.call(this);}
function AOC(){var a=new Vn();AHO(a);return a;}
function AHO(a){return;}
function AGI(a){var b;b=Ej(XD(a),1);b.bQ=1;return b;}
function UL(){var a=this;Bm.call(a);a.rL=0;a.r_=0;}
function P(a,b){var c=new UL();AMX(c,a,b);return c;}
function AMX(a,b,c){a.rL=b;a.r_=c;}
function AIc(a){return B$(Dl(),a.rL,a.r_);}
function Vf(){Bm.call(this);}
function AOi(){var a=new Vf();ANf(a);return a;}
function ANf(a){return;}
function AMO(a){return B$(B$(Dl(),65279,65279),65520,65533);}
function WH(){var a=this;Bm.call(a);a.o5=0;a.l5=0;a.q7=0;}
function B1(a,b){var c=new WH();AEP(c,a,b);return c;}
function AOW(a,b,c){var d=new WH();AMY(d,a,b,c);return d;}
function AEP(a,b,c){a.l5=c;a.o5=b;}
function AMY(a,b,c,d){a.q7=d;a.l5=c;a.o5=b;}
function AF_(a){var b;b=APF(a.o5);if(a.q7)Hj(b.bP,0,2048);b.bQ=a.l5;return b;}
function WX(){var a=this;Bm.call(a);a.o3=0;a.mj=0;a.qt=0;}
function H7(a,b){var c=new WX();AFz(c,a,b);return c;}
function AOI(a,b,c){var d=new WX();ACs(d,a,b,c);return d;}
function AFz(a,b,c){a.mj=c;a.o3=b;}
function ACs(a,b,c,d){a.qt=d;a.mj=c;a.o3=b;}
function ACr(a){var b;b=new OP;Yy(b,a.o3);if(a.qt)Hj(b.bP,0,2048);b.bQ=a.mj;return b;}
function LH(){var a=this;C.call(a);a.nh=0;a.sl=0;a.rv=null;}
function AF9(a,b,c){var d=new LH();ALE(d,a,b,c);return d;}
function ALE(a,b,c,d){a.nh=b;a.sl=c;a.rv=d;}
function YI(){DN.call(this);}
function AFd(a){var b=new YI();AIQ(b,a);return b;}
function AIQ(a,b){a.lp=1;a.l1=1;a.ga=b;}
function KO(){DJ.call(this);}
var AUx=0.0;var AUy=null;function YT(){AUx=NaN;AUy=F($rt_floatcls());}
function QS(){var a=this;C.call(a);a.kh=0;a.kf=0;a.kg=0;a.tQ=0;a.lz=0;}
function PP(){var a=this;C.call(a);a.mw=null;a.vv=null;}
function AKo(a){return ZK(a.mw);}
function AHD(a){return Po(a.mw).eH;}
function M8(){CK.call(this);this.qK=null;}
function AId(a){var b;b=new Pj;Pd(b,a.qK);return b;}
function Q_(){var a=this;Be.call(a);a.qF=null;a.xx=null;}
function AFT(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cJ^Dn(a.qF,c):0;}
function Q$(){var a=this;Be.call(a);a.to=null;a.tL=null;a.w9=null;}
function ACQ(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cJ^Dn(a.to,c):0;return a.tL.K(b)&&!d?1:0;}
function Mp(){var a=this;Be.call(a);a.kB=null;a.uG=null;}
function AH8(a,b){return a.bV^Dn(a.kB,b);}
function AGz(a){var b,c;b=new W;Ba(b);c=GG(a.kB,0);while(c>=0){Fi(b,F$(c));CL(b,124);c=GG(a.kB,c+1|0);}if(b.bH>0)Q5(b,b.bH-1|0);return X(b);}
function Mv(){var a=this;Be.call(a);a.rY=null;a.wq=null;}
function AKN(a,b){return a.rY.K(b);}
function Mt(){var a=this;Be.call(a);a.ma=0;a.qY=null;a.nm=null;}
function ALh(a,b){return !(a.ma^Dn(a.nm.bL,b))&&!(a.ma^a.nm.fg^a.qY.K(b))?0:1;}
function Mu(){var a=this;Be.call(a);a.mg=0;a.tC=null;a.ow=null;}
function AIo(a,b){return !(a.mg^Dn(a.ow.bL,b))&&!(a.mg^a.ow.fg^a.tC.K(b))?1:0;}
function My(){var a=this;Be.call(a);a.t1=0;a.tG=null;a.ty=null;a.u2=null;}
function AFv(a,b){return a.t1^(!a.tG.K(b)&&!a.ty.K(b)?0:1);}
function Mz(){var a=this;Be.call(a);a.r5=0;a.rT=null;a.rB=null;a.x6=null;}
function ACl(a,b){return a.r5^(!a.rT.K(b)&&!a.rB.K(b)?0:1)?0:1;}
function Mw(){var a=this;Be.call(a);a.rx=null;a.ya=null;}
function AGE(a,b){return Dc(a.rx,b);}
function Mx(){var a=this;Be.call(a);a.tK=null;a.vg=null;}
function AIq(a,b){return Dc(a.tK,b)?0:1;}
function MB(){var a=this;Be.call(a);a.si=null;a.rW=0;a.s8=null;}
function AMr(a,b){return !Dc(a.si,b)&&!(a.rW^Dn(a.s8.bL,b))?0:1;}
function MC(){var a=this;Be.call(a);a.sB=null;a.sH=0;a.su=null;}
function AE4(a,b){return !Dc(a.sB,b)&&!(a.sH^Dn(a.su.bL,b))?1:0;}
function Mo(){var a=this;Be.call(a);a.s6=0;a.tB=null;a.tU=null;a.uI=null;}
function ANY(a,b){return !(a.s6^a.tB.K(b))&&!Dc(a.tU,b)?0:1;}
function M1(){var a=this;Be.call(a);a.tS=0;a.ql=null;a.qu=null;a.vb=null;}
function AGH(a,b){return !(a.tS^a.ql.K(b))&&!Dc(a.qu,b)?1:0;}
function Mm(){var a=this;Be.call(a);a.rl=null;a.vj=null;}
function AE3(a,b){return Dc(a.rl,b);}
function Mn(){var a=this;Be.call(a);a.rn=null;a.xY=null;}
function AGi(a,b){return Dc(a.rn,b)?0:1;}
function Ms(){var a=this;Be.call(a);a.tZ=null;a.sz=0;a.ur=null;}
function AHv(a,b){return Dc(a.tZ,b)&&a.sz^Dn(a.ur.bL,b)?1:0;}
function Ml(){var a=this;Be.call(a);a.sU=null;a.r7=0;a.sx=null;}
function AL7(a,b){return Dc(a.sU,b)&&a.r7^Dn(a.sx.bL,b)?0:1;}
function Mq(){var a=this;Be.call(a);a.s9=0;a.qC=null;a.r3=null;a.u1=null;}
function ADW(a,b){return a.s9^a.qC.K(b)&&Dc(a.r3,b)?1:0;}
function Mr(){var a=this;Be.call(a);a.sO=0;a.qf=null;a.s5=null;a.vn=null;}
function AJ6(a,b){return a.sO^a.qf.K(b)&&Dc(a.s5,b)?0:1;}
function KY(){var a=this;C.call(a);a.eH=null;a.hK=null;}
function AKA(a){return a.hK;}
function K6(a,b){var c;c=a.hK;a.hK=b;return c;}
function AHT(a){return a.eH;}
function AFF(a,b){var c;if(!Kx(b,EQ))return 0;a:{c=b;if(a.eH===null){if(c.is()===null)break a;}else if(a.eH.dv(c.is()))break a;return 0;}return a.hK!==null?a.hK.dv(c.h6()):c.h6()!==null?0:1;}
function FM(){var a=this;KY.call(a);a.cX=null;a.cU=null;a.go=0;a.gt=0;}
function T2(a){var b;b=JG(a);if(b==2){if(JG(a.cU)<0)a.cU=LA(a.cU);return MK(a);}if(b!=(-2))return a;if(JG(a.cX)>0)a.cX=MK(a.cX);return LA(a);}
function JG(a){return (a.cU===null?0:a.cU.go)-(a.cX===null?0:a.cX.go)|0;}
function LA(a){var b;b=a.cX;a.cX=b.cU;b.cU=a;Ge(a);Ge(b);return b;}
function MK(a){var b;b=a.cU;a.cU=b.cX;b.cX=a;Ge(a);Ge(b);return b;}
function Ge(a){var b,c;b=a.cU===null?0:a.cU.go;c=a.cX===null?0:a.cX.go;a.go=CB(b,c)+1|0;a.gt=1;if(a.cX!==null)a.gt=a.gt+a.cX.gt|0;if(a.cU!==null)a.gt=a.gt+a.cU.gt|0;}
function Ez(a,b){return b?a.cU:a.cX;}
function FJ(a,b){return b?a.cX:a.cU;}
function Fj(){C.call(this);}
var AP2=null;var AP4=null;var AP5=null;var AP3=null;var AP1=null;function WQ(){var b,c;b=$rt_createIntArray(10);c=b.data;c[0]=1;c[1]=10;c[2]=100;c[3]=1000;c[4]=10000;c[5]=100000;c[6]=1000000;c[7]=10000000;c[8]=100000000;c[9]=1000000000;AP2=b;b=$rt_createLongArray(19);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(1000);c[4]=Long_fromInt(10000);c[5]=Long_fromInt(100000);c[6]=Long_fromInt(1000000);c[7]=Long_fromInt(10000000);c[8]=Long_fromInt(100000000);c[9]=Long_fromInt(1000000000);c[10]
=new Long(1410065408, 2);c[11]=new Long(1215752192, 23);c[12]=new Long(3567587328, 232);c[13]=new Long(1316134912, 2328);c[14]=new Long(276447232, 23283);c[15]=new Long(2764472320, 232830);c[16]=new Long(1874919424, 2328306);c[17]=new Long(1569325056, 23283064);c[18]=new Long(2808348672, 232830643);AP4=b;b=$rt_createLongArray(6);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(10000);c[4]=Long_fromInt(100000000);c[5]=new Long(1874919424, 2328306);AP5=b;AP3=new P6;AP1
=new QM;}
function I2(){C.call(this);}
var AUz=null;var AUA=null;function X6(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=$rt_floatToIntBits(b);c.qI=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.nk=0;c.mW=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(Long_eq(Long_and(Long_fromInt(e),Long_fromInt(8388608)),Long_ZERO)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=Yg(AUA,f);if(h<0)h= -h-2|0;i=9+(f-AUA.data[h]|0)|0;j=Long_fromInt(e);k=Long_shru(Long_mul(j,Long_fromInt(AUz.data[h])),32-i|0).lo;if(k>=1000000000){h=h+1|0;i=9+(f-AUA.data[h]|0)|0;k=Long_shru(Long_mul(j,
Long_fromInt(AUz.data[h])),32-i|0).lo;}g=(31-i|0)-g|0;l=g>=0?AUz.data[h]>>>g:AUz.data[h]<< -g;m=(l+1|0)>>1;n=l>>1;if(e==4194304)n=n>>2;o=10;while(o<=n){o=o*10|0;}if((k%o|0)>=(n/2|0))o=o/10|0;p=10;while(p<=m){p=p*10|0;}if((p-(k%p|0)|0)>(m/2|0))p=p/10|0;e=BN(o,p);e=e>0?K(k/o|0,o):e<0?K(k/p|0,p)+p|0:K((k+(p/2|0)|0)/p|0,p);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.nk=e;c.mW=h-50|0;}
function Vz(){var b,c,d,e,f,g,h,i;AUz=$rt_createIntArray(100);AUA=$rt_createIntArray(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=AUz.data;g=d+50|0;f[g]=$rt_udiv(e,20);AUA.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:Long_add(Long_fromInt(h),Long_shr(Long_mul(Long_fromInt(b&((1<<i)-1|0)),Long_fromInt(10)),i)).lo;f=AUz.data;i=(50-d|0)-1|0;f[i]
=$rt_udiv(b,20);AUA.data[i]=c;d=d+1|0;}}
function QM(){var a=this;C.call(a);a.nk=0;a.mW=0;a.qI=0;}
function P6(){var a=this;C.call(a);a.n8=Long_ZERO;a.mA=0;a.qx=0;}
function Lv(){Ga.call(this);}
function AGc(a,b,c,d){var e,f,g;e=0;f=d.bs;a:{while(true){if(b>f){b=e;break a;}g=Fl(d,a.b4);Dq(d,a.b4,b);e=a.dF.b(b,c,d);if(e>=0)break;Dq(d,a.b4,g);b=b+1|0;}}return b;}
function ANL(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Fl(e,a.b4);Dq(e,a.b4,c);f=a.dF.b(c,d,e);if(f>=0)break;Dq(e,a.b4,g);c=c+(-1)|0;}}return c;}
function AEL(a){return null;}
function Gr(){var a=this;C.call(a);a.hJ=0;a.sG=0;a.hb=null;a.gR=null;a.ry=null;a.jl=null;}
function AUB(a){var b=new Gr();Pd(b,a);return b;}
function Pd(a,b){a.jl=b;a.sG=b.dV;a.hb=null;}
function LD(a){if(a.hb!==null)return 1;while(a.hJ<a.jl.ca.data.length){if(a.jl.ca.data[a.hJ]!==null)return 1;a.hJ=a.hJ+1|0;}return 0;}
function UY(a){var b;if(a.sG==a.jl.dV)return;b=new Gw;R(b);H(b);}
function Qb(a){var b,c,d;UY(a);if(!LD(a)){b=new Id;R(b);H(b);}if(a.hb===null){c=a.jl.ca.data;d=a.hJ;a.hJ=d+1|0;a.gR=c[d];a.hb=a.gR.d6;a.ry=null;}else{if(a.gR!==null)a.ry=a.gR;a.gR=a.hb;a.hb=a.hb.d6;}}
function Pj(){Gr.call(this);}
function AEF(a){Qb(a);return a.gR.e3;}
function NJ(){BQ.call(this);}
function RD(){BQ.call(this);}
function QC(){FA.call(this);this.t0=0;}
function AFX(a){var b;b=new W;Ba(b);return X(S(E(b,B(584)),a.t0));}
function NC(){FA.call(this);this.tP=0;}
function AFn(a){var b;b=new W;Ba(b);return X(S(E(b,B(585)),a.tP));}
function Qw(){var a=this;C.call(a);a.sk=null;a.tp=null;a.pI=0;a.kj=0;}
function JR(a){return CX(a.sk);}
function TX(a,b){return BL(a.tp)<b?0:1;}
function AMo(a,b){a.pI=b;}
function AKE(a,b){a.kj=b;}
function LQ(){var a=this;C.call(a);a.qh=null;a.rD=null;a.o7=0;a.lU=0;}
function Ve(a){return CX(a.qh);}
function Kr(a,b){return BL(a.rD)<b?0:1;}
function AGh(a,b){a.o7=b;}
function ANW(a,b){a.lU=b;}
function NO(){var a=this;CK.call(a);a.wP=0;a.dw=null;a.pp=null;a.pw=0;a.o0=0;a.g9=null;a.mb=0;a.n9=0;a.sv=0;}
function TP(a){var b,c,d;if(a.sv){b=!a.n9?Q8(a.dw,1):!a.mb?Mj(a.dw,a.g9,1):Sg(a.dw,a.g9,1);c=!a.o0?TH(a.dw,0):!a.pw?N7(a.dw,a.g9,0):Sf(a.dw,a.g9,0);d=AI6(a.dw,b,c,1);}else{b=!a.o0?Q8(a.dw,0):!a.pw?Mj(a.dw,a.pp,0):Sg(a.dw,a.pp,0);c=!a.n9?TH(a.dw,1):!a.mb?N7(a.dw,a.g9,1):Sf(a.dw,a.g9,1);d=AI6(a.dw,b,c,0);}return d;}
function LF(){var a=this;CC.call(a);a.q8=null;a.tf=null;a.iE=null;}
function AKT(a){var b;b=0;while(b<5){Bg(a.bi,CY(b,(a.bw/2|0)-100|0,(a.bT/6|0)+(b*24|0)|0,PJ(a.iE,b)));b=b+1|0;}Bg(a.bi,CY(10,(a.bw/2|0)-100|0,((a.bT/6|0)+120|0)+12|0,B(586)));Bg(a.bi,CY(20,(a.bw/2|0)-100|0,(a.bT/6|0)+168|0,B(587)));}
function Zm(a,b){var c,d,e;if(b.d2){if(b.cy<5){Kg(a.iE,b.cy,1);b.eG=PJ(a.iE,b.cy);}if(b.cy==10){c=a.bF;d=new LZ;e=a.iE;Eb(d);d.sD=B(588);d.hj=(-1);d.tq=a;d.ge=e;BA(c,d);}if(b.cy==20)BA(a.bF,a.q8);}}
function Um(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:D1(0,0,a.bw,a.bT,1610941696,(-1607454624));d=a.ei;e=a.tf;f=a.bw/2|0;g=20;h=16777215;$p=1;case 1:ACZ(d,e,f,g,h);if(N()){break _;}$p=2;case 2:WT(a,b,c);if(N()){break _;}return;default:FI();}}De().s(a,b,c,d,e,f,g,h,$p);}
function OB(){CC.call(this);this.qn=null;}
function ADf(a){Ep(a.bi);Bg(a.bi,CY(0,(a.bw/2|0)-100|0,a.bT/3|0,B(589)));Bg(a.bi,CY(1,(a.bw/2|0)-100|0,(a.bT/3|0)+32|0,B(590)));Bg(a.bi,CY(2,(a.bw/2|0)-100|0,(a.bT/3|0)+64|0,B(591)));Bg(a.bi,CY(3,(a.bw/2|0)-100|0,(a.bT/3|0)+96|0,B(592)));}
function Sv(a,b){var c,d,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.cy==3){BA(a.bF,a.qn);return;}c=a.bF;d=b.cy;$p=1;case 1:UD(c,d);if(N()){break _;}BA(a.bF,null);D3(a.bF);return;default:FI();}}De().s(a,b,c,d,$p);}
function Sz(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:D1(0,0,a.bw,a.bT,1610941696,(-1607454624));d=a.ei;e=B(593);f=a.bw/2|0;g=40;h=16777215;$p=1;case 1:ACZ(d,e,f,g,h);if(N()){break _;}$p=2;case 2:WT(a,b,c);if(N()){break _;}return;default:FI();}}De().s(a,b,c,d,e,f,g,h,$p);}
function I$(){var a=this;CC.call(a);a.l_=null;a.ie=0;a.h$=0;a.i$=null;a.hr=null;a.n1=null;}
function AON(a){var b=new I$();XH(b,a);return b;}
function XH(a,b){Eb(a);a.ie=0;a.h$=0;a.i$=null;a.hr=B(3);a.n1=B(594);a.l_=b;}
function Zg(a){var b,c,d,$$je,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:try{a.hr=B(595);b=APE(Bf(E(E(E(E(Bh(),B(596)),a.bF.xt),B(597)),a.bF.fC.lP)));c=new Px;d=new GX;b=ABn(b);$p=1;continue _;}catch($$e){$$je=D($$e);if($$je instanceof J){d=$$je;}else{throw $$e;}}Bv(d);a.hr=B(598);a.ie=1;return;case 1:a:{b:{c:{try{$z=XJ(b);if(N()){break _;}b=$z;Lh(d,b);Va(c,d);a.i$=OZ(Sd(c),B(599));if(a.i$.data.length<5)break c;a.ul(a.i$);a.h$=1;}catch($$e)
{$$je=D($$e);if($$je instanceof J){d=$$je;break b;}else{throw $$e;}}return;}try{a.hr=a.i$.data[0];a.ie=1;break a;}catch($$e){$$je=D($$e);if($$je instanceof J){d=$$je;}else{throw $$e;}}}Bv(d);a.hr=B(598);a.ie=1;}return;default:FI();}}De().s(a,b,c,d,$p);}
function ADc(a,b){var c,d;c=0;while(c<5){d=b.data;Br(a.bi,c).d2=BR(d[c],B(239))?0:1;Br(a.bi,c).eG=d[c];Br(a.bi,c).gd=1;c=c+1|0;}}
function ALq(a){var b;In(TF(a,null));b=0;while(b<5){Bg(a.bi,CY(b,(a.bw/2|0)-100|0,(a.bT/4|0)+(b*24|0)|0,B(600)));Br(a.bi,b).gd=0;b=b+1|0;}Bg(a.bi,CY(5,(a.bw/2|0)-100|0,(a.bT/4|0)+144|0,B(592)));}
function AAL(a,b){var c,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(b.d2){if(a.h$&&b.cy<5){c=b.cy;$p=1;continue _;}if(!a.ie){if(!a.h$)break a;if(b.cy!=5)break a;}BA(a.bF,a.l_);}}return;case 1:a.vT(c);if(N()){break _;}b:{if(!a.ie){if(!a.h$)break b;if(b.cy!=5)break b;}BA(a.bF,a.l_);}return;default:FI();}}De().s(a,b,c,$p);}
function AA_(a,b){var c,d,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.bF;d=a.bF.fC.lP;$p=1;case 1:Uc(c,d,b);if(N()){break _;}BA(a.bF,null);D3(a.bF);return;default:FI();}}De().s(a,b,c,d,$p);}
function AAR(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:D1(0,0,a.bw,a.bT,1610941696,(-1607454624));d=a.ei;e=a.n1;f=a.bw/2|0;g=40;h=16777215;$p=1;case 1:ACZ(d,e,f,g,h);if(N()){break _;}if(a.h$){$p=2;continue _;}d=a.ei;e=a.hr;f=a.bw/2|0;g=(a.bT/2|0)-4|0;h=16777215;$p=3;continue _;case 2:WT(a,b,c);if(N()){break _;}return;case 3:ACZ(d,e,f,g,h);if(N()){break _;}$p=2;continue _;default:FI();}}De().s(a,
b,c,d,e,f,g,h,$p);}
function O5(){I$.call(this);}
function ALc(a,b){var c,d;c=0;while(c<5){d=b.data;Br(a.bi,c).eG=d[c];Br(a.bi,c).gd=1;c=c+1|0;}}
function AAF(a,b){var c,d,e;c=a.bF;d=new Q6;e=Br(a.bi,b).eG;Eb(d);d.sb=B(601);d.lQ=0;d.sf=a;d.v5=b;d.dB=e;if(BR(d.dB,B(239)))d.dB=B(3);BA(c,d);}
function Ky(){}
function Pa(){var a=this;C.call(a);a.u7=null;a.tD=null;a.i3=null;a.cE=null;a.kC=0;a.kJ=0;}
function Ld(a,b){var c,d;c=O(a.i3);if(b>=0&&b<=c){UN(a.cE);a.cE.ih=1;ZJ(a.cE,b);b=a.tD.dq(b,a.i3,a.cE);if(b==(-1))a.cE.eJ=1;if(b>=0&&a.cE.i8){XL(a.cE);return 1;}a.cE.eR=(-1);return 0;}d=new BB;Bb(d,PL(b));H(d);}
function V1(a){var b,c;b=O(a.i3);if(!Tr(a))b=a.kJ;if(a.cE.eR>=0&&a.cE.ih==1){a.cE.eR=If(a.cE);if(If(a.cE)==Y$(a.cE)){c=a.cE;c.eR=c.eR+1|0;}return a.cE.eR<=b&&Ld(a,a.cE.eR)?1:0;}return Ld(a,a.kC);}
function ACb(a,b){return MW(a.cE,b);}
function S_(a,b){return OV(a.cE,b);}
function ABD(a){return ACb(a,0);}
function Vo(a){return S_(a,0);}
function Tr(a){return a.cE.jc;}
function Ps(){Be.call(this);this.wa=null;}
function AMy(a,b){return CO(b)!=2?0:1;}
function Lf(){Be.call(this);this.ws=null;}
function ADE(a,b){return CO(b)!=1?0:1;}
function OU(){Be.call(this);this.vC=null;}
function ADg(a,b){return Og(b);}
function OT(){Be.call(this);this.vm=null;}
function AF$(a,b){return 0;}
function Rm(){Be.call(this);this.xs=null;}
function AHm(a,b){return !CO(b)?0:1;}
function MT(){Be.call(this);this.wO=null;}
function AMA(a,b){return CO(b)!=9?0:1;}
function L_(){Be.call(this);this.xX=null;}
function AJI(a,b){return F7(b);}
function N_(){Be.call(this);this.wd=null;}
function AKU(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function La(){Be.call(this);this.uv=null;}
function ANx(a,b){a:{b:{switch(CO(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=F7(b);}return b;}
function Le(){Be.call(this);this.wT=null;}
function AFl(a,b){a:{b:{switch(CO(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=F7(b);}return b;}
function LX(){Be.call(this);this.xq=null;}
function AMN(a,b){a:{switch(CO(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Nh(){Be.call(this);this.xE=null;}
function AIF(a,b){return ID(b);}
function No(){Be.call(this);this.vF=null;}
function AKp(a,b){return Np(b);}
function PU(){Be.call(this);this.w3=null;}
function AMs(a,b){return CO(b)!=3?0:1;}
function Pb(){Be.call(this);this.uB=null;}
function ANh(a,b){a:{b:{switch(CO(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=F7(b);}return b;}
function Lp(){Be.call(this);this.yb=null;}
function AE_(a,b){a:{b:{switch(CO(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=F7(b);}return b;}
function KQ(){Be.call(this);this.ol=0;}
function APF(a){var b=new KQ();Yy(b,a);return b;}
function Yy(a,b){BH(a);a.ol=b;}
function AJJ(a,b){return a.bV^(a.ol!=CO(b&65535)?0:1);}
function OP(){KQ.call(this);}
function ALC(a,b){return a.bV^(!(a.ol>>CO(b&65535)&1)?0:1);}
function RU(){var a=this;Gp.call(a);a.gP=null;a.lN=0;}
function AGO(a){return 0;}
function ANc(a){return 1;}
function AEQ(a,b){b=new Es;R(b);H(b);}
function AFx(a,b,c,d){var e;if(a.rU===null)return null;if(c&&a.sE)return null;e=new LC;e.fA=a;e.qB=d;if(e.qB)e.eD=e.fA.lN;return e;}
function ALw(a,b){var c,d;c=new BI;d=new W;Ba(d);Bb(c,X(E(E(E(d,B(602)),b),B(603))));H(c);}
function AKb(a,b){b=new Es;R(b);H(b);}
function LZ(){var a=this;CC.call(a);a.tq=null;a.sD=null;a.ge=null;a.hj=0;}
function AK0(a){var b,c,d;b=0;while(b<a.ge.eo.data.length){c=a.bi;d=new PA;P_(d,b,((a.bw/2|0)-155|0)+((b%2|0)*160|0)|0,(a.bT/6|0)+(24*(b>>1)|0)|0,150,20,Ia(a.ge,b));Bg(c,d);b=b+1|0;}Bg(a.bi,CY(200,(a.bw/2|0)-100|0,(a.bT/6|0)+168|0,B(587)));}
function VQ(a,b){var c,d;c=0;while(c<a.ge.eo.data.length){Br(a.bi,c).eG=Ia(a.ge,c);c=c+1|0;}if(b.cy==200)BA(a.bF,a.tq);else{a.hj=b.cy;d=new W;Ba(d);b.eG=X(E(E(E(d,B(604)),Ia(a.ge,b.cy)),B(605)));}}
function AMd(a,b,c){if(a.hj<0)Tt(a,b,c);else{X4(a.ge,a.hj,c);Br(a.bi,a.hj).eG=Ia(a.ge,a.hj);a.hj=(-1);}}
function ABI(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:D1(0,0,a.bw,a.bT,1610941696,(-1607454624));d=a.ei;e=a.sD;f=a.bw/2|0;g=20;h=16777215;$p=1;case 1:ACZ(d,e,f,g,h);if(N()){break _;}$p=2;case 2:WT(a,b,c);if(N()){break _;}return;default:FI();}}De().s(a,b,c,d,e,f,g,h,$p);}
function Sq(){var a=this;C.call(a);a.rr=0;a.tV=null;a.pL=null;a.m1=null;a.ti=null;a.gi=0;a.oS=0;}
function AI6(a,b,c,d){var e=new Sq();AM2(e,a,b,c,d);return e;}
function AM2(a,b,c,d,e){var f,g;a.tV=b;a.rr=b.l2;f=b.d9===null?0:b.d9.go;g=c.data;a.pL=F9(c,f);a.gi=g.length;a.ti=d;a.oS=e;}
function ZK(a){return a.gi<=0?0:1;}
function Po(a){var b,c,d,e,f;if(a.rr!=a.tV.l2){b=new Gw;R(b);H(b);}if(!a.gi){b=new Id;R(b);H(b);}a:{c=a.pL.data;d=a.gi-1|0;a.gi=d;b=c[d];a.m1=b;e=FJ(b,a.oS);if(e!==null)while(true){if(e===null)break a;c=a.pL.data;f=a.gi;a.gi=f+1|0;c[f]=e;e=Ez(e,a.oS);}}if(a.m1===a.ti)a.gi=0;return a.m1;}
function AM4(a){return Po(a);}
function Qz(){var a=this;C.call(a);a.en=null;a.jS=null;a.nO=null;a.n0=null;a.q3=0;a.i8=0;a.dy=0;a.bs=0;a.eR=0;a.jc=0;a.gZ=0;a.eJ=0;a.xl=0;a.g_=0;a.ih=0;}
function B0(a,b,c){a.jS.data[b]=c;}
function Dk(a,b){return a.jS.data[b];}
function If(a){return OV(a,0);}
function OV(a,b){ON(a,b);return a.en.data[(b*2|0)+1|0];}
function Dq(a,b,c){a.en.data[b*2|0]=c;}
function IF(a,b,c){a.en.data[(b*2|0)+1|0]=c;}
function Fl(a,b){return a.en.data[b*2|0];}
function HV(a,b){return a.en.data[(b*2|0)+1|0];}
function W8(a,b){var c,d;c=Fl(a,b);d=HV(a,b);if((d|c|(d-c|0))>=0&&d<=O(a.n0))return BK(a.n0,c,d);return null;}
function Y$(a){return MW(a,0);}
function MW(a,b){ON(a,b);return a.en.data[b*2|0];}
function XL(a){if(a.en.data[0]==(-1)){a.en.data[0]=a.eR;a.en.data[1]=a.eR;}a.g_=If(a);}
function Lm(a,b){return a.nO.data[b];}
function D4(a,b,c){a.nO.data[b]=c;}
function ON(a,b){var c;if(!a.i8){c=new Dv;R(c);H(c);}if(b>=0&&b<a.q3)return;c=new BB;Bb(c,PL(b));H(c);}
function ABm(a){a.i8=1;}
function AMI(a){return a.i8;}
function R2(a,b,c,d){a.i8=0;a.ih=2;G2(a.en,(-1));G2(a.jS,(-1));if(b!==null)a.n0=b;if(c>=0){a.dy=c;a.bs=d;}a.eR=a.dy;}
function UN(a){R2(a,null,(-1),(-1));}
function ZJ(a,b){a.eR=b;if(a.g_>=0)b=a.g_;a.g_=b;}
function AD7(a){return a.dy;}
function AIt(a){return a.bs;}
function AFw(a,b){a.ih=b;}
function AGn(a){return a.ih;}
function AGX(a){return a.gZ;}
function ACP(a){return a.jc;}
function ADj(a){return a.g_;}
function JX(){var a=this;C.call(a);a.wH=0;a.fM=null;a.cm=null;a.dM=null;a.fB=0;a.e0=null;a.gy=null;a.gI=null;a.hc=null;a.ke=null;a.cG=null;}
var AUC=null;var AUD=null;function APE(a){var b=new JX();SR(b,a);return b;}
function AUE(a,b,c){var d=new JX();Ob(d,a,b,c);return d;}
function SR(a,b){Ob(a,null,b,null);}
function Ob(a,b,c,d){var e,f,g,h,i,j,k,$$je;a.fB=(-1);a.cG=d;if(c===null){b=new EG;R(b);H(b);}d=Ev(c);a:{try{e=D6(d,58);break a;}catch($$e){$$je=D($$e);if($$je instanceof Dm){f=$$je;}else{throw $$e;}}b=new EG;Bb(b,f.df());H(b);}g=D6(d,91);if(e>=0&&!(g!=(-1)&&e>=g)){b:{c:{a.cm=BK(d,0,e);h=M(a.cm,0);if(!(97<=h&&h<=122)){if(65>h)break c;if(h>90)break c;}i=1;break b;}i=0;}j=1;while(i&&j<O(a.cm)){i=M(a.cm,j);i=!(97<=i&&i<=122)&&!(65<=i&&i<=90)&&!(48<=i&&i<=57)&&i!=43&&i!=45&&i!=46?0:1;j=j+1|0;}if(i)a.cm=IT(a.cm);else
{a.cm=null;e=(-1);}}if(a.cm===null){if(b===null){b=new EG;R(b);H(b);}HC(a,b.cm,b.dM,b.fB,b.e0,b.gy,b.gI,b.hc,null);if(a.cG===null)a.cG=b.cG;}else if(b!==null&&BR(a.cm,b.cm)){k=b.gI;if(k!==null&&k.vO(B(23)))HC(a,a.cm,b.dM,b.fB,b.e0,b.gy,k,b.hc,null);if(a.cG===null)a.cG=b.cG;}if(a.cG===null){Zn(a);if(a.cG===null){b=new EG;R(b);H(b);}}d:{try{VE(a.cG,a,d,e+1|0,O(d));break d;}catch($$e){$$je=D($$e);if($$je instanceof J){f=$$je;}else{throw $$e;}}b=new EG;Bb(b,AAw(f));H(b);}if(a.fB>=(-1))return;b=new EG;R(b);H(b);}
function V4(a,b){var c,d;if(a.dM!==null&&O(a.dM)>0){a.e0=a.dM;if(a.fB!=(-1)){c=new W;Ba(c);a.e0=X(S(E(E(c,a.e0),B(314)),a.fB));}}if(b){d=(-1);if(a.dM!==null)d=Hm(a.dM,64);if(d<0)a.gy=null;else{a.gy=BK(a.dM,0,d);a.dM=DM(a.dM,d+1|0);}}d=(-1);if(a.fM!==null)d=D6(a.fM,63);if(d<0){a.hc=null;a.gI=a.fM;}else{a.hc=DM(a.fM,d+1|0);a.gI=BK(a.fM,0,d);}}
function YB(a,b,c,d,e,f){if(a.cm===null)a.cm=b;a.dM=c;a.fM=e;a.fB=d;a.ke=f;a.wH=0;V4(a,1);}
function Zn(a){var b,c;a.cG=Ek(AUC,a.cm);if(a.cG!==null)return;if(AUD!==null){a.cG=AUD.Bz(a.cm);if(a.cG!==null){DA(AUC,a.cm,a.cG);return;}}a:{b=a.cm;c=(-1);switch(JV(b)){case 101730:if(!BR(b,B(606)))break a;c=2;break a;case 3213448:if(!BR(b,B(607)))break a;c=0;break a;case 99617003:if(!BR(b,B(608)))break a;c=1;break a;default:}}b:{switch(c){case 0:case 1:a.cG=new LP;break b;case 2:break;default:a.cG=ADo((-1));break b;}a.cG=ADo(21);}}
function ABn(a){return a.cG.tg(a);}
function AEA(a){return Pi(a);}
function Pi(a){var b;if(a.cG!==null)return Yk(a.cG,a);b=new W;Ba(b);return X(E(E(E(E(E(b,B(609)),a.cm),B(610)),a.dM),a.fM));}
function AHn(a){return a.fM;}
function AI3(a){return a.dM;}
function AGA(a){return a.fB;}
function AC_(a){return a.cm;}
function AKy(a){return a.ke;}
function AFQ(a){return a.hc;}
function AHh(a){return a.gI;}
function ALA(a){return a.gy;}
function ADL(a){return a.e0;}
function HC(a,b,c,d,e,f,g,h,i){var j;if(h===null)j=g;else if(C8(h))j=g;else if(g===null){j=new W;Ba(j);j=X(E(E(j,B(611)),h));}else{j=new W;Ba(j);j=X(E(E(E(j,g),B(611)),h));}YB(a,b,c,d,j,i);a.e0=e;a.gy=f;a.gI=g;a.hc=h;}
function Xf(){AUC=C9();}
function PA(){KV.call(this);}
function Q6(){var a=this;CC.call(a);a.sf=null;a.sb=null;a.v5=0;a.dB=null;a.lQ=0;}
function AEI(a){Ep(a.bi);ZE(1);Bg(a.bi,CY(0,(a.bw/2|0)-100|0,(a.bT/4|0)+120|0,B(612)));Bg(a.bi,CY(1,(a.bw/2|0)-100|0,(a.bT/4|0)+144|0,B(592)));Br(a.bi,0).d2=O(Ev(a.dB))<=1?0:1;}
function ANq(a){ZE(0);}
function AHG(a){a.lQ=a.lQ+1|0;}
function VL(a,b){if(b.d2){if(!b.cy&&O(Ev(a.dB))>1){Ev(a.dB);BA(a.bF,null);D3(a.bF);}if(b.cy==1)BA(a.bF,a.sf);}}
function ALL(a,b,c){var d;if(c==14&&O(a.dB)>0)a.dB=BK(a.dB,0,O(a.dB)-1|0);if(D6(B(613),b)>=0&&O(a.dB)<64){d=new W;Ba(d);d=E(d,a.dB);CL(d,b);a.dB=X(d);}Br(a.bi,0).d2=O(Ev(a.dB))<=1?0:1;}
function ABr(a,b,c){var d,e,f,g,h,i,j,k,l,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:D1(0,0,a.bw,a.bT,1610941696,(-1607454624));d=a.ei;e=a.sb;f=a.bw/2|0;g=40;h=16777215;$p=1;case 1:ACZ(d,e,f,g,h);if(N()){break _;}f=(a.bw/2|0)-100|0;g=(a.bT/2|0)-10|0;i=f-1|0;j=g-1|0;k=f+200|0;h=k+1|0;l=g+20|0;AA4(i,j,h,l+1|0,(-6250336));AA4(f,g,k,l,(-16777216));e=a.ei;d=new W;Ba(d);d=X(E(E(d,
a.dB),(a.lQ/6|0)%2|0?B(3):B(614)));h=f+4|0;f=g+6|0;g=14737632;$p=2;case 2:ABg(e,d,h,f,g);if(N()){break _;}$p=3;case 3:WT(a,b,c);if(N()){break _;}return;default:FI();}}De().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function FG(){var a=this;C.call(a);a.qP=null;a.vh=Long_ZERO;a.xV=0;a.pF=0;a.v9=0;a.vK=0;a.oG=null;}
var AUF=0;var AUG=0;function ABw(a){var b,c,d,e,f;if(a.pF){b=new Dv;R(b);H(b);}b=C9();c=M$(a.oG).eP();while(c.b9()){d=c.b2();e=Ek(a.oG,d);f=new ML;f.nv=e;DA(b,d,f);}c=new MN;c.t_=b;return c;}
function Ut(){AUG=1;}
function IY(){DJ.call(this);}
var AUH=0.0;var AUI=null;function Uq(){AUH=NaN;AUI=F($rt_doublecls());}
function Kb(){C.call(this);}
var AUJ=null;var AUK=null;function WL(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.qx=Long_eq(Long_and(d,new Long(0, 2147483648)),Long_ZERO)?0:1;e=Long_and(d,new Long(4294967295, 1048575));f=Long_shr(d,52).lo&2047;if(Long_eq(e,Long_ZERO)&&!f){c.n8=Long_ZERO;c.mA=0;return;}g=0;if(f)e=Long_or(e,new Long(0, 1048576));else{e=Long_shl(e,1);while(Long_eq(Long_and(e,new Long(0, 1048576)),Long_ZERO)){e=Long_shl(e,1);f=f+(-1)|0;g=g+1|0;}}h=Yg(AUK,f);if(h<0)h= -h-2|0;i=12+(f-AUK.data[h]|0)|0;j=Oy(e,AUJ.data[h],
i);if(Long_ge(j,new Long(2808348672, 232830643))){h=h+1|0;i=12+(f-AUK.data[h]|0)|0;j=Oy(e,AUJ.data[h],i);}k=Long_shru(AUJ.data[h],(63-i|0)-g|0);l=Long_shr(Long_add(k,Long_fromInt(1)),1);m=Long_shr(k,1);if(Long_eq(e,new Long(0, 1048576)))m=Long_shr(m,2);n=Long_fromInt(10);while(Long_le(n,m)){n=Long_mul(n,Long_fromInt(10));}if(Long_ge(Long_rem(j,n),Long_div(m,Long_fromInt(2))))n=Long_div(n,Long_fromInt(10));o=Long_fromInt(1);while(Long_le(o,l)){o=Long_mul(o,Long_fromInt(10));}if(Long_gt(Long_sub(o,Long_rem(j,
o)),Long_div(l,Long_fromInt(2))))o=Long_div(o,Long_fromInt(10));f=Long_compare(n,o);e=f>0?Long_mul(Long_div(j,n),n):f<0?Long_add(Long_mul(Long_div(j,o),o),o):Long_mul(Long_div(Long_add(j,Long_div(o,Long_fromInt(2))),o),o);if(Long_ge(e,new Long(2808348672, 232830643))){h=h+1|0;e=Long_div(e,Long_fromInt(10));}else if(Long_lt(e,new Long(1569325056, 23283064))){h=h+(-1)|0;e=Long_mul(e,Long_fromInt(10));}c.n8=e;c.mA=h-330|0;}
function Oy(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=Long_and(b,Long_fromInt(65535));f=Long_and(Long_shru(b,16),Long_fromInt(65535));g=Long_and(Long_shru(b,32),Long_fromInt(65535));h=Long_and(Long_shru(b,48),Long_fromInt(65535));i=Long_and(c,Long_fromInt(65535));j=Long_and(Long_shru(c,16),Long_fromInt(65535));k=Long_and(Long_shru(c,32),Long_fromInt(65535));l=Long_and(Long_shru(c,48),Long_fromInt(65535));m=Long_add(Long_add(Long_mul(k,e),Long_mul(j,f)),Long_mul(i,g));n=Long_add(Long_add(Long_add(Long_mul(l,e),Long_mul(k,
f)),Long_mul(j,g)),Long_mul(i,h));o=Long_add(Long_add(Long_shl(Long_mul(l,h),32+d|0),Long_shl(Long_add(Long_mul(l,g),Long_mul(k,h)),16+d|0)),Long_shl(Long_add(Long_add(Long_mul(l,f),Long_mul(k,g)),Long_mul(j,h)),d));return Long_add(d>16?Long_add(o,Long_shl(n,d-16|0)):Long_add(o,Long_shru(n,16-d|0)),Long_shru(m,32-d|0));}
function Wb(){var b,c,d,e,f,g,h,i,j,k;AUJ=$rt_createLongArray(660);AUK=$rt_createIntArray(660);b=new Long(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=AUJ.data;g=d+330|0;f[g]=Kv(e,Long_fromInt(80));AUK.data[g]=c;e=Kv(e,Long_fromInt(10));h=Tq(e,Long_fromInt(10));while(Long_le(e,b)&&Long_eq(Long_and(e,new Long(0, 2147483648)),Long_ZERO)){e=Long_shl(e,1);c=c+1|0;h=Long_shl(h,1);}e=Long_add(e,Long_div(h,Long_fromInt(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(Long_gt(e,new Long(3435973836, 214748364)))
{e=Long_shr(e,1);j=j+1|0;d=d+(-1)|0;}k=Long_mul(e,Long_fromInt(10));b=j<=0?k:Long_add(k,Long_shr(Long_mul(Long_and(b,Long_fromInt((1<<j)-1|0)),Long_fromInt(10)),j));f=AUJ.data;g=(330-i|0)-1|0;f[g]=Kv(b,Long_fromInt(80));AUK.data[g]=d;i=i+1|0;}}
function EG(){BI.call(this);}
function F1(){C.call(this);}
function VE(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$$je;if(e>=d&&e>=0){f=BK(c,d,e);d=e-d|0;g=0;h=b.dM;i=b.fB;j=b.ke;k=b.gI;l=b.hc;m=b.e0;n=b.gy;o=C_(f,35,0);if(D8(f,B(615))&&!D8(f,B(616))){p=2;i=(-1);e=C_(f,47,p);g=C_(f,63,p);if(g==(-1))g=e;else if(e!=(-1)&&e<=g)g=e;if(g==(-1)){k=B(3);g=d;}e=o==(-1)?g:o<g?o:g;q=Do(f,64,e);m=BK(f,p,e);r=BN(q,(-1));if(r>0){n=BK(f,p,q);p=q+1|0;}if(!r)q=p;a:{s=C_(f,58,q);t=D6(f,93);if(t==(-1))r=s;else{try{u=s;v=O(f);r=t+1|0;if(v<=r){u=s;r=(-1);u=r;}else{u=s;if(M(f,
r)==58){u=r;u=s;}else{u=s;r=(-1);u=r;}u=r;}break a;}catch($$e){$$je=D($$e);if($$je instanceof J){}else{throw $$e;}}r=u;}}if(r!=(-1)&&r<=g){h=BK(f,p,r);w=BK(f,r+1|0,e);i=O(w)?IV(w):(-1);}else h=BK(f,p,e);}e=BN(o,(-1));if(e>0)j=BK(f,o+1|0,d);r=e?o:d;v=Do(f,63,r);u=0;if(v<=(-1)){if(!o)v=r;else{l=null;v=r;}}else{l=BK(f,v+1|0,r);if(!v&&k!==null){if(BR(k,B(3)))k=B(23);else if(D8(k,B(23)))u=1;k=BK(k,0,Hm(k,47)+1|0);}}if(g>(-1)){if(g<d&&M(f,g)==47)k=BK(f,g,v);else if(v>g){if(k===null)k=B(3);else if(BR(k,B(3)))k=B(23);else if
(D8(k,B(23)))u=1;x=Hm(k,47)+1|0;if(!x)k=BK(f,g,v);else{c=new W;Ba(c);k=X(E(E(c,BK(k,0,x)),BK(f,g,v)));}}}if(k===null)k=B(3);if(h===null)h=B(3);if(u)k=AJH(k);HC(b,b.cm,h,i,m,n,k,l,j);return;}b:{if(e<=(-2147483647)){if(d>=O(c))break b;if(d<0)break b;}if(!(J6(c,B(615),d)&&C_(c,47,d+2|0)==(-1)))return;}b=new FB;c=new W;Ba(c);Bb(b,X(S(E(c,B(617)),e)));H(b);}
function AJH(b){var c,d,e;while(true){c=PZ(b,B(618));if(c<0)break;d=new W;Ba(d);b=X(E(E(d,BK(b,0,c+1|0)),DM(b,c+3|0)));}if(NB(b,B(619)))b=BK(b,0,O(b)-1|0);while(true){e=PZ(b,B(620));if(e<0)break;if(!e){b=DM(b,e+3|0);continue;}d=new W;Ba(d);b=X(E(E(d,BK(b,0,Do(b,47,e-1|0))),DM(b,e+3|0)));}if(NB(b,B(621))&&O(b)>3)b=BK(b,0,Do(b,47,O(b)-4|0)+1|0);return b;}
function AJ$(a,b,c,d,e,f,g,h,i,j){HC(b,c,d,e,f,g,h,i,j);}
function Yk(a,b){var c,d,e,f;c=new W;Ba(c);E(c,b.cm);CL(c,58);d=b.e0;if(d!==null&&O(d)>0){E(c,B(615));E(c,b.e0);}e=b.fM;f=b.ke;if(e!==null)E(c,e);if(f!==null){CL(c,35);E(c,f);}return X(c);}
function OY(){DJ.call(this);}
var AUL=null;function Kv(b,c){return Long_udiv(b, c);}
function Tq(b,c){return Long_urem(b, c);}
function Wa(){AUL=F($rt_longcls());}
function LP(){F1.call(this);}
function AM8(a,b){var c,d,e;c=new Mg;c.vh=Long_fromInt(-1);c.xV=AUG;c.v9=1;c.vK=AUF;c.oG=C9();c.qP=b;d=I(Ca,7);e=d.data;e[0]=B(622);e[1]=B(151);e[2]=B(623);e[3]=B(624);e[4]=B(625);e[5]=B(626);e[6]=B(627);c.vp=d;c.qD=B(622);c.fP=(-1);c.wZ=AUM;c.xF=(-1);c.wF=(-1);c.pj=C9();c.km=C9();return c;}
function WZ(){F1.call(this);this.vZ=0;}
function ADo(a){var b=new WZ();AHE(b,a);return b;}
function AHE(a,b){a.vZ=b;}
function AFg(a,b){var c,d;c=new BI;d=new W;Ba(d);Bb(c,X(E(E(d,B(628)),b.cm)));H(c);}
function RA(){}
function LC(){var a=this;C.call(a);a.eD=0;a.qB=0;a.fA=null;}
function W$(a,b,c,d){d=CB(0,BY(a.fA.lN-a.eD|0,d));if(d>0){CM(a.fA.gP,a.eD,b,c,d);a.eD=a.eD+d|0;}return d;}
function TM(a,b,c,d){var e,f;e=a.fA;f=a.eD+d|0;if(f>e.gP.data.length){f=(CB(f,e.gP.data.length)*3|0)/2|0;e.gP=H5(e.gP,f);}CM(b,c,a.fA.gP,a.eD,d);a.eD=a.eD+d|0;if(a.eD>a.fA.lN)a.fA.lN=a.eD;Nn(a.fA);}
function AHX(a){return;}
function AKZ(a){return;}
function H_(){var a=this;FG.call(a);a.vp=null;a.qD=null;a.fP=0;a.oc=null;a.wZ=0;a.xF=0;a.wF=0;}
var AUM=0;function Zs(){AUM=1;}
function Mg(){var a=this;H_.call(a);a.eq=null;a.t2=null;a.ix=null;a.uf=null;a.pj=null;a.u9=null;a.uD=null;a.km=null;a.qd=0;}
function ACa(a){var b,c,d,e,f,g;if(a.pF)return;a.eq=new XMLHttpRequest();b=a.eq;c=a.qD;d=Pi(a.qP);b.open($rt_ustr(c),$rt_ustr(d));b=ZB(AAN(ABw(a)));while(Vy(b)){c=RK(b);e=G$(c.me);while(HJ(e)){f=H2(e);g=a.eq;d=c.oH;g.setRequestHeader($rt_ustr(d),$rt_ustr(f));}}b=a.eq;c="arraybuffer";b.responseType=c;a.pF=1;}
function SC(a){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.wA=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.wV=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=AOV(callback);return thread.suspend(function(){try{AJz(a,callback);}catch($e){callback.wV($rt_exception($e));}});}
function AJz(a,b){var c,d,e,f,g,h;c=a.eq;d=new NS;d.s2=a;d.s3=b;b=Cy(d,"stateChanged");c.onreadystatechange=b;if(a.t2===null)a.eq.send();else{e=a.t2.wJ().data;f=e.length;c=new Int8Array(f);g=0;while(g<f){h=e[g];c[g]=h;g=g+1|0;}b=a.eq;c=c.buffer;b.send(c);}}
function XJ(a){var b,c,d,$p,$z;$p=0;if(F5()){var $T=De();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:ACa(a);if(a.qd){b=a.fP/100|0;if(b!=4&&b!=5)return a.ix;a.ix=Nb($rt_createByteArray(0));c=new BI;d=new W;Ba(d);Bb(c,X(E(E(S(E(d,B(629)),a.fP),B(630)),a.oc)));H(c);}a.qd=1;$p=1;case 1:SC(a);if(N()){break _;}b=a.fP/100|0;if(b!=4&&b!=5)return a.ix;a.ix=Nb($rt_createByteArray(0));c=new BI;d=new W;Ba(d);Bb(c,X(E(E(S(E(d,B(629)),a.fP),B(630)),a.oc)));H(c);default:FI();}}De().s(a,b,
c,d,$p);}
function NS(){var a=this;C.call(a);a.s2=null;a.s3=null;}
function UU(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;b=a.s2;c=a.s3;if(b.eq.readyState==4){b.fP=b.eq.status;b.oc=$rt_str(b.eq.statusText);if(!b.fP)b.fP=(-1);d=new Int8Array(b.eq.response);e=$rt_createByteArray(d.length);f=e.data;g=0;h=f.length;while(g<h){f[g]=d[g];g=g+1|0;}i=Nb(e);d=$rt_str(b.eq.getAllResponseHeaders());j=0;k=CU();l=CU();b.pj=C9();b.km=C9();while(j<O(d)){g=IZ(d,B(631),j);if(g<0)g=O(d);h=C_(d,58,j);if(h<0)h=O(d);m=BN(h,g);n=m>=0?BK(d,j,g):BK(d,j,h);o=m>=0?B(3):Ev(BK(d,h+1|0,g));n=Ev(n);Bg(k,n);Bg(l,
o);p=Ek(b.km,n);if(p===null){p=CU();DA(b.km,n,p);}p.lg(o);n=IT(n);DA(b.pj,n,o);j=g+2|0;}b.u9=I7(k,I(Ca,k.X));b.uD=I7(l,I(Ca,l.X));j=b.fP/100|0;if(j!=4&&j!=5){b.ix=i;b.uf=null;}else{b.uf=i;b.ix=null;}CZ(c,AUN);}}
function AJa(a){UU(a);}
function Yi(){DT.call(this);}
function TT(){C.call(this);}
function Hq(){C.call(this);this.xS=0;}
var AUN=null;var AUO=null;var AUP=null;function AJ5(a){var b=new Hq();Y0(b,a);return b;}
function Y0(a,b){a.xS=b;}
function TQ(){AUN=AJ5(1);AUO=AJ5(0);AUP=F($rt_booleancls());}
function Fx(){C.call(this);}
var AUQ=null;var AUR=null;var AUS=null;var AUT=null;var AUU=null;function X5(){AUQ=new QO;AUR=new QN;AUS=new QQ;AUT=new QZ;AUU=new QY;}
function MN(){DH.call(this);this.t_=null;}
function AAN(a){var b,c;b=Zu(a.t_);c=new MM;c.r6=b;return c;}
function ML(){DF.call(this);this.nv=null;}
function ANa(a,b){return a.nv.h1(b);}
function AI0(a){return a.nv.ex();}
function QZ(){C.call(this);}
function QY(){C.call(this);}
function QO(){CK.call(this);}
function QN(){DH.call(this);}
function QQ(){DF.call(this);}
function MM(){CK.call(this);this.r6=null;}
function ZB(a){var b,c;b=TU(a.r6);c=new MO;c.pY=b;return c;}
function Qq(){CK.call(this);this.r0=null;}
function TU(a){var b;b=new Qh;Pd(b,a.r0);return b;}
function MO(){C.call(this);this.pY=null;}
function Vy(a){return LD(a.pY);}
function RK(a){var b,c,d;b=new Rw;c=Pl(a.pY);d=c.e3;c=c.d0;b.oH=d;b.me=c;return b;}
function ALt(a){return RK(a);}
function Qh(){Gr.call(this);}
function Pl(a){Qb(a);return a.gR;}
function ANe(a){return Pl(a);}
function Rw(){var a=this;C.call(a);a.oH=null;a.me=null;}
function AJZ(a){return a.me;}
function AE7(a){return a.oH;}
$rt_packages([-1,"com",0,"mojang",1,"minecraft",0,"jcraft",3,"jzlib",-1,"java",5,"util",6,"regex",5,"nio",8,"charset",5,"io",5,"net",5,"lang"]);
$rt_metadata([C,"Object",12,0,[],0,3,0,["jA",function(){return AE$(this);},"dv",function(b){return XR(this,b);},"df",function(){return AEf(this);}],Hr,0,C,[],0,3,0,0,Ly,0,C,[],3,3,0,0,Re,0,C,[Ly],0,3,0,0,Uw,0,C,[],4,0,0,0,T9,0,C,[],4,3,0,0,B6,0,C,[],3,3,0,0,C0,0,C,[],3,3,0,0,H9,0,C,[],3,3,0,0,Ca,0,C,[B6,C0,H9],0,3,0,["df",function(){return AEd(this);},"dv",function(b){return BR(this,b);},"jA",function(){return JV(this);},"p2",function(b){return AGb(this,b);}],D9,0,C,[],0,3,0,["gv",function(){return AK1(this);
},"df",function(){return AAw(this);}],DN,0,D9,[],0,3,0,0,GJ,0,DN,[],0,3,0,0,Wk,0,GJ,[],0,3,0,0,F4,0,C,[B6,H9],0,0,0,["jU",function(b){IE(this,b);},"df",function(){return X(this);}],F6,0,C,[],3,3,0,0,W,0,F4,[F6],0,3,0,["oA",function(b,c,d,e){return AHS(this,b,c,d,e);},"nq",function(b,c,d){return AFr(this,b,c,d);},"df",function(){return Bf(this);},"jU",function(b){AH1(this,b);},"pl",function(b,c){return AIl(this,b,c);}],DJ,0,C,[B6],1,3,0,0,Er,0,DJ,[C0],0,3,0,["jA",function(){return ACB(this);},"dv",function(b)
{return ANp(this,b);},"p2",function(b){return AHY(this,b);}],Gx,0,GJ,[],0,3,0,0,YF,0,Gx,[],0,3,0,0,V0,0,Gx,[],0,3,0,0,J,"Exception",12,D9,[],0,3,0,0,BQ,"RuntimeException",12,J,[],0,3,0,0,CG,0,C,[],3,3,0,0,Fd,0,C,[CG],3,3,0,0,Ng,0,C,[Fd],3,3,0,0,Ou,0,C,[Fd],3,3,0,0,Ok,0,C,[Fd],3,3,0,0,PI,0,C,[Fd],3,3,0,0,Qo,0,C,[Fd,Ng,Ou,Ok,PI],3,3,0,0,ME,0,C,[],3,3,0,0,IN,0,C,[CG],3,3,0,0,Ts,0,C,[CG,Qo,ME,IN],1,3,0,["EH",function(b,c){return AIg(this,b,c);},"GZ",function(b,c){return AIB(this,b,c);},"yw",function(b){return ADq(this,
b);},"Dl",function(b,c,d){return AJB(this,b,c,d);},"Bv",function(b){return AMH(this,b);},"BD",function(){return AEu(this);},"z2",function(b,c,d){return ACJ(this,b,c,d);}],Bi,0,C,[],0,3,T,0,R9,0,C,[],3,3,0,0,Gg,0,C,[R9],3,3,0,0,J_,0,C,[],3,3,0,0,En,0,C,[F6,Gg,J_],1,3,0,0,Jh,0,En,[],0,3,0,["eT",function(){AC5(this);},"jm",function(){AFY(this);},"nQ",function(b,c,d){AJ8(this,b,c,d);}],Vi,0,En,[],0,3,0,0,ZH,0,C,[],4,3,0,0,AAl,0,C,[CG],1,3,0,0,HO,0,C,[],3,3,0,0,NL,0,C,[HO],4,3,0,["fo",function(){Z7(this);}],Ug,0,
C,[],0,3,0,0,IL,0,C,[],4,3,Gq,0,Ey,0,C,[HO],0,3,0,["fo",function(){ABd(this);}],C2,0,C,[CG],3,3,0,0,RI,0,C,[C2],0,0,0,["ec",function(b){return AMK(this,b);}]]);
$rt_metadata([RQ,0,C,[C2],0,0,0,["ec",function(b){return AHW(this,b);}],RR,0,C,[C2],0,0,0,["ec",function(b){return AC7(this,b);}],RO,0,C,[C2],0,0,0,["ec",function(b){return ACo(this,b);}],RP,0,C,[C2],0,0,0,["ec",function(b){return ADi(this,b);}],RM,0,C,[C2],0,0,0,["ec",function(b){return ANt(this,b);}],RN,0,C,[C2],0,0,0,["ec",function(b){return AG7(this,b);}],RL,0,C,[C2],0,0,0,["ec",function(b){return AEb(this,b);}],OE,0,C,[C2],0,0,0,["ec",function(b){return AH5(this,b);}],OD,0,C,[C2],0,0,0,["ec",function(b)
{return AI9(this,b);}],J1,0,C,[],0,3,0,0,VK,0,C,[CG],1,3,0,0,N2,0,C,[],0,3,0,0,BI,"IOException",10,J,[],0,3,0,0,Md,0,F4,[F6],0,3,0,["oA",function(b,c,d,e){return AF8(this,b,c,d,e);},"nq",function(b,c,d){return ADU(this,b,c,d);},"jU",function(b){AEj(this,b);},"pl",function(b,c){return ALM(this,b,c);}],EM,0,C,[],3,3,0,0,PW,0,C,[EM],0,3,0,0,Ec,0,C,[C0],0,3,0,0,O9,0,C,[],4,3,0,0,Rx,0,C,[],4,3,0,0,Pu,0,C,[],4,3,0,0,Nz,0,C,[],4,3,0,0,Lt,0,C,[],4,3,0,0,ZI,0,C,[],4,3,0,0,NQ,0,Ey,[],4,0,0,["fo",function(){Wm(this);}],L7,
0,C,[],0,3,0,0,Gb,0,C,[],0,3,0,0,Ox,0,Gb,[],4,3,0,["ms",function(){AED(this);}],NP,0,Gb,[],4,3,0,["ms",function(){AIv(this);}],Q7,0,C,[],3,3,0,0,FO,0,C,[Q7],3,3,0,0,Gd,0,C,[FO],1,3,0,0,Im,0,C,[FO],3,3,0,0,DF,0,Gd,[Im],1,3,0,["lg",function(b){return Fr(this,b);},"pT",function(b,c){AL8(this,b,c);},"dv",function(b){return AI_(this,b);}],KF,0,DF,[],1,3,0,["pT",function(b,c){AKr(this,b,c);}],K$,0,C,[FO],3,3,0,0,R3,0,C,[K$],3,3,0,0,Y4,0,KF,[R3],0,3,0,["ex",function(){return AKD(this);}],X3,0,C,[CG],1,3,0,0,DT,0,C,
[CG],1,3,0,0,Wq,0,DT,[],1,3,0,0,U7,0,DT,[],1,3,0,0,G6,0,C,[FO],3,3,0,0,CK,0,Gd,[G6],1,3,0,["dv",function(b){return AGp(this,b);}],Dy,0,C,[],3,3,0,0,AAa,0,CK,[Dy,B6],0,3,0,0,HD,0,C,[],3,3,0,0,DH,0,C,[HD],1,3,0,0,Jt,0,DH,[Dy,B6],0,3,0,["mG",function(b){return AGF(this,b);}],UF,0,DT,[],1,3,0,0,Tx,0,C,[],0,3,0,0]);
$rt_metadata([Zv,0,C,[],0,3,0,0,GH,0,C,[C0,B6],1,3,0,0,DR,0,GH,[],12,3,0,0,Ov,0,C,[],3,3,0,0,Od,0,C,[Ov],0,0,0,["wA",function(b){CZ(this,b);},"wV",function(b){ANk(this,b);}],AAB,0,C,[CG],1,3,0,0,KU,0,C,[CG],3,3,0,0,RH,0,C,[KU],0,0,0,["x$",function(){return AM1(this);}],EC,0,C,[Gg],1,3,0,0,Z5,0,EC,[],0,3,0,["f$",function(b,c,d){return ANi(this,b,c,d);},"mU",function(){return AFP(this);},"eT",function(){AG0(this);}],GC,0,EC,[],0,3,0,0,Mh,0,C,[],3,3,0,0,NE,0,GC,[Mh],0,3,0,0,It,0,C,[C0],1,3,0,0,Rg,0,GC,[],0,3,0,
["f$",function(b,c,d){return AGG(this,b,c,d);},"mU",function(){return AK5(this);}],IQ,0,C,[],1,3,0,0,Pv,0,IQ,[],0,3,0,0,TE,0,C,[],0,3,0,0,J4,0,C,[],4,3,0,0,FH,0,C,[],0,3,0,0,ABT,0,FH,[],0,3,0,0,HK,0,C,[B6],0,3,0,0,Vq,0,C,[],4,3,0,0,P9,0,C,[],3,3,0,0,TL,0,DF,[Dy,B6,P9],0,3,0,["h1",function(b){return Br(this,b);},"ex",function(){return HQ(this);},"lg",function(b){return Bg(this,b);},"pT",function(b,c){WP(this,b,c);}],Bl,0,C,[],0,3,Bj,["hY",function(b,c,d,e,f,g){return AGq(this,b,c,d,e,f,g);},"hk",function(b,c,
d,e){return ACU(this,b,c,d,e);},"fx",function(b,c,d,e,f,g){return Jc(this,b,c,d,e,f,g);},"ou",function(b){return AIj(this,b);},"fE",function(b,c,d,e,f){Z_(this,b,c,d,e,f);},"i6",function(b,c,d){return ANF(this,b,c,d);},"jf",function(){return AMV(this);},"gU",function(){return AKs(this);},"id",function(b,c,d,e,f){AJV(this,b,c,d,e,f);},"bd",function(){return AHA(this);},"lr",function(b,c,d,e,f){AEn(this,b,c,d,e,f);},"nR",function(b,c,d,e){AG2(this,b,c,d,e);},"sg",function(){return ADv(this);},"rE",function(b,
c,d,e){AMg(this,b,c,d,e);},"qq",function(b,c,d,e){AGw(this,b,c,d,e);}],GN,0,C,[CG],3,3,0,0,LW,0,C,[GN],0,0,0,["q1",function(){return AGv(this);}],LV,0,C,[GN],0,0,0,["q1",function(){return ACN(this);}],LU,0,C,[GN],0,0,0,["q1",function(){return AJR(this);}],LT,0,C,[C2],0,0,0,["ec",function(b){return AHj(this,b);}],Rr,0,C,[],0,0,0,0,BW,"IllegalArgumentException",12,BQ,[],0,3,0,0,On,"UnsupportedCharsetException",9,BW,[],0,3,0,0,Dm,"NullPointerException",12,BQ,[],0,3,0,0,VZ,0,C,[CG],4,3,0,0,DS,0,C,[],1,3,0,0,IM,
0,DS,[C0],1,3,0,0,ZG,"IllegalCharsetNameException",9,BW,[],0,3,0,0,Is,0,C,[],128,3,0,0,M6,0,Is,[],4,3,0,0,J8,0,DS,[C0],1,3,0,0,IO,0,DS,[C0],1,3,0,0,Jl,0,C,[],4,3,0,0,DE,0,GH,[],12,3,0,0,XI,0,Bl,[],4,3,0,["ou",function(b){return AJe(this,b);},"id",function(b,c,d,e,f){ANv(this,b,c,d,e,f);}],WW,0,Bl,[],4,3,0,0,U1,0,Bl,[],4,3,0,["id",function(b,c,d,e,f){AMW(this,b,c,d,e,f);},"hY",function(b,c,d,e,f,g){return ADn(this,b,c,d,e,f,g);},"i6",function(b,c,d){return AFR(this,b,c,d);},"jf",function(){return ALK(this);},
"gU",function(){return AGL(this);}],Jd,0,Bl,[],0,3,0,["nR",function(b,c,d,e){AIe(this,b,c,d,e);},"id",function(b,c,d,e,f){ALb(this,b,c,d,e,f);},"hk",function(b,c,d,e){return ALr(this,b,c,d,e);},"fx",function(b,c,d,e,f,g){return AGZ(this,b,c,d,e,f,g);},"fE",function(b,c,d,e,f){AKt(this,b,c,d,e,f);},"i6",function(b,c,d){return AHU(this,b,c,d);},"jf",function(){return ALH(this);},"gU",function(){return AFp(this);},"bd",function(){return AEJ(this);},"lr",function(b,c,d,e,f){AFk(this,b,c,d,e,f);},"sg",function()
{return ALn(this);}],Fo,0,C,[],4,3,0,0]);
$rt_metadata([YD,0,Jd,[],4,3,0,["id",function(b,c,d,e,f){ANn(this,b,c,d,e,f);},"lr",function(b,c,d,e,f){AGk(this,b,c,d,e,f);}],Zf,0,Bl,[],4,3,0,["nR",function(b,c,d,e){AIS(this,b,c,d,e);},"lr",function(b,c,d,e,f){AHH(this,b,c,d,e,f);}],Xk,0,Bl,[],4,3,0,["ou",function(b){return AI7(this,b);}],VB,0,Bl,[],4,3,0,["gU",function(){return AE5(this);},"fx",function(b,c,d,e,f,g){return AKI(this,b,c,d,e,f,g);},"jf",function(){return AM0(this);}],Yl,0,Bl,[],4,3,0,["rE",function(b,c,d,e){AFA(this,b,c,d,e);},"qq",function(b,
c,d,e){AE1(this,b,c,d,e);}],Xo,0,Bl,[],4,3,0,["gU",function(){return AKK(this);},"fx",function(b,c,d,e,f,g){return AJ0(this,b,c,d,e,f,g);},"jf",function(){return AKj(this);}],AB7,0,It,[],0,3,0,0,F8,0,IM,[],1,0,0,0,NZ,0,F8,[],0,0,0,["pG",function(b){return Yv(this,b);},"ok",function(b,c){XA(this,b,c);},"hH",function(){return ACu(this);}],ABb,0,IO,[],0,0,0,0,O6,0,C,[],3,3,0,0,JP,0,DS,[C0,F6,H9,O6],1,3,0,0,NK,"GZIPException",4,BI,[],0,3,0,0,I6,0,J8,[],1,0,0,0,Rf,0,I6,[],0,0,0,0,Ke,0,C,[],3,0,0,0,AAV,0,C,[Ke],4,
3,0,["t6",function(b){ACC(this,b);},"gH",function(){AJ1(this);},"pQ",function(){return ADT(this);},"gS",function(b,c,d){AJp(this,b,c,d);}],QU,"CloneNotSupportedException",12,J,[],0,3,0,0,EQ,0,C,[],3,3,0,0,Ju,0,C,[EQ,Dy],0,0,0,["dv",function(b){return AFc(this,b);}],HF,0,Ju,[],0,0,0,0,BB,"IndexOutOfBoundsException",12,BQ,[],0,3,0,0,FB,"StringIndexOutOfBoundsException",12,BB,[],0,3,0,0,EW,0,C,[],3,3,0,0,QL,0,C,[EW],0,3,0,["fo",function(){Ty(this);}],FP,"EOFException",10,BI,[],0,3,0,0,DO,0,C,[],4,3,0,0,D$,0,C,
[],4,3,0,0,Js,0,C,[],4,0,0,0,Dj,0,C,[Gg,J_],1,3,0,0,Iz,0,Dj,[],0,3,0,0,VV,0,Iz,[],0,3,0,0,Na,0,Dj,[],0,0,0,["qv",function(b){AGK(this,b);}],X$,0,C,[],4,3,0,0,Ww,0,C,[],4,3,0,0,US,0,C,[CG],1,3,0,0,Nd,0,C,[CG],3,3,0,0,Tm,0,C,[CG,Nd],1,3,0,0,HL,0,C,[],4,0,0,0,Yd,0,C,[],4,3,0,0,DY,0,C,[],4,0,0,0,Ji,0,C,[],4,0,0,0,FC,"UTFDataFormatException",10,BI,[],0,3,0,0,Sl,"NegativeArraySizeException",12,BQ,[],0,3,0,0,VR,0,C,[IN],1,3,0,["GR",function(b){return AND(this,b);},"Gk",function(){return AEs(this);}],Hg,"IllegalMonitorStateException",
12,BQ,[],0,3,0,0,M5,0,C,[],0,0,0,0,Dv,"IllegalStateException",12,J,[],0,3,0,0,S9,0,C,[CG],1,3,0,0,R5,0,C,[EW],0,3,0,["fo",function(){AA5(this);}]]);
$rt_metadata([Pr,0,C,[EW],0,3,0,0,G8,0,C,[],0,3,0,0,FA,0,BI,[],0,3,0,0,RB,"AssertionError",12,DN,[],0,3,0,0,E4,0,J,[],0,3,0,0,KH,0,C,[],1,3,0,0,Q2,0,C,[],3,3,0,0,Ra,0,C,[],3,3,0,0,Mb,0,C,[EW,Q2,Ra],0,0,0,["fo",function(){Y_(this);}],I0,0,JP,[],1,0,0,0,WA,0,I0,[],0,0,0,0,JE,0,C,[],1,3,0,0,Kt,0,C,[],0,3,0,0,Jp,0,KH,[],1,3,0,0,PE,0,Jp,[],0,3,0,0,C6,"Inflate$Return",4,J,[],0,0,0,0,Xr,0,C,[Dy],0,3,0,0,Lx,0,C,[Ke],4,3,0,["gS",function(b,c,d){ANK(this,b,c,d);},"gH",function(){AG4(this);},"t6",function(b){ALu(this,
b);},"pQ",function(){return AIC(this);}],Oj,0,C,[],3,3,0,0,Bk,0,Bi,[Oj],0,3,Bz,0,OX,0,C,[],4,3,0,0,RX,0,EC,[],0,3,0,["f$",function(b,c,d){return ADt(this,b,c,d);},"eT",function(){AE8(this);}],EX,0,C,[B6,C0],0,3,0,["df",function(){return AMk(this);}],Ym,0,C,[],4,3,0,0,AAG,0,C,[],4,3,0,0,Oo,0,C,[],4,3,0,0,Et,0,C,[B6],0,3,0,["sX",function(b,c){Tu(this,b,c);}],ABa,0,Et,[],0,3,0,0,I_,0,C,[],0,3,0,0,VF,0,I_,[],4,3,0,0,EA,0,C,[],0,3,0,0,Wc,0,EA,[],4,3,0,0,Bs,"StopGameException",2,DN,[],0,3,0,0,Ub,0,C,[],0,3,0,0,Km,
0,C,[],4,3,0,0,M9,0,C,[G6],3,3,0,0,QV,0,C,[M9],3,3,0,0,Sj,0,CK,[QV],0,3,0,0,AAg,0,C,[EM],4,3,0,["gr",function(b,c){return AHN(this,b,c);}],Gs,0,C,[],4,3,Cp,0,CC,0,EA,[],0,3,0,["lG",function(b,c){Tt(this,b,c);},"xe",function(b,c,d){UJ(this,b,c,d);},"gz",function(b){SG(this,b);},"gk",function(){AMM(this);},"ft",function(){AK7(this);},"sC",function(){AIZ(this);}],E3,0,CC,[],4,3,0,["gk",function(){AKe(this);},"f6",function(b,c){UO(this,b,c);},"lG",function(b,c){AEC(this,b,c);}],JC,0,JE,[],1,3,0,0,Nl,0,JC,[],0,3,
0,0,ABS,0,Dj,[],0,3,0,0,H4,"ArrayStoreException",12,BQ,[],0,3,0,0,Lj,0,C,[],0,3,0,0,I5,0,C,[],0,3,C4,0,AAD,0,C,[],4,3,0,0,EU,"FileNotFoundException",10,BI,[],0,3,0,0]);
$rt_metadata([O1,0,C,[],4,3,0,0,Ni,0,C,[],4,3,0,0,Y1,0,C,[],4,3,0,0,Xh,0,C,[],0,3,0,0,L3,0,C,[],4,3,0,0,ZY,0,C,[B6],0,3,0,0,QI,0,Et,[],0,3,0,["ft",function(){ADX(this);},"sX",function(b,c){YL(this,b,c);}],T$,0,CC,[],4,3,0,["f6",function(b,c){ABQ(this,b,c);},"xe",function(b,c,d){ABA(this,b,c,d);}],Ks,0,C,[B6],1,3,0,0,Go,0,Ks,[B6],0,3,0,0,RY,0,C,[HD],3,3,0,0,Lw,0,C,[RY],3,3,0,0,M0,0,DH,[Dy,B6,Lw],0,3,0,0,PO,0,C,[],0,0,0,0,RS,0,Dj,[],0,0,0,["qv",function(b){AIA(this,b);}],ZN,0,C,[],0,3,0,0,Ku,0,C,[],3,3,0,0,GL,
0,C,[B6,Ku],1,3,0,0,Ql,0,C,[Ku],3,3,0,0,Kd,0,C,[Ql],3,3,0,0,QE,0,C,[],3,3,0,0,Kh,0,C,[QE],3,3,0,0,N8,0,GL,[B6,Kd,Kh],0,3,0,0,Qi,0,C,[Kd],3,3,0,0,Qy,0,C,[Kh],3,3,0,0,E1,0,GL,[B6,Qi,Qy],0,3,0,0,GR,0,C,[],0,3,0,0,F0,0,C,[Gg],1,3,0,0,Px,0,F0,[],0,3,0,0,GX,0,F0,[],0,3,0,0,Yb,0,GX,[],0,3,0,0,O3,0,C,[EM],0,0,0,["gr",function(b,c){return AMP(this,b,c);}],Rq,0,C,[],4,3,0,0,L4,0,C,[],4,3,0,0,Sc,0,C,[EW],0,3,0,["fo",function(){S$(this);}],OH,0,C,[C2],0,0,0,["ec",function(b){return AIu(this,b);}],OG,0,C,[C2],0,0,0,["ec",
function(b){return AIO(this,b);}],Qa,0,C,[],4,3,0,0,Ri,0,C,[],4,3,0,0,YO,0,C,[B6],0,3,0,0,Dp,"NumberFormatException",12,BW,[],0,3,0,0,P0,0,C,[],4,3,0,0,PV,0,C,[],4,3,0,0,RW,0,C,[],4,3,0,0,Qg,0,C,[],3,3,0,0,NH,0,C,[Qg],0,3,0,0,Gp,0,C,[],1,3,0,0,WI,0,Gp,[],0,3,0,["oX",function(){return AJ9(this);},"oK",function(){return AL5(this);},"tA",function(b){return Zp(this,b);},"mB",function(b,c,d){return AFU(this,b,c,d);},"qm",function(b){return AFM(this,b);},"qW",function(b){return ADC(this,b);}],PK,0,Jt,[HD],0,3,0,["mG",
function(b){return AD0(this,b);}],UT,0,C,[],4,0,0,0]);
$rt_metadata([T8,0,C,[],4,3,0,0,QA,0,C,[],0,3,0,0,Wd,0,C,[],4,3,0,0,EH,"BufferUnderflowException",8,BQ,[],0,3,0,0,Gt,0,F8,[],1,0,0,["hH",function(){return AH4(this);}],L6,0,Gt,[],0,0,0,["pG",function(b){return AGg(this,b);},"ok",function(b,c){ACt(this,b,c);}],Py,0,Gt,[],0,0,0,["pG",function(b){return ALO(this,b);},"ok",function(b,c){ADu(this,b,c);}],Kz,0,HF,[],4,0,0,0,Ef,0,C,[],3,3,0,0,Nj,0,C,[Ef],3,3,0,0,XG,0,C,[Nj],0,0,0,0,Qc,0,C,[],0,0,0,0,L5,0,Dj,[],0,3,0,0,Jg,0,CC,[],4,3,0,["gk",function(){ACK(this);},
"gz",function(b){Xi(this,b);},"f6",function(b,c){Xp(this,b,c);}],O7,0,C,[EM],4,3,0,0,Kp,0,CC,[],4,3,0,0,Z3,0,Et,[],0,3,0,["ft",function(){XU(this);}],Es,"UnsupportedOperationException",12,BQ,[],0,3,0,0,DU,"ReadOnlyBufferException",8,Es,[],0,3,0,0,E6,"BufferOverflowException",8,BQ,[],0,3,0,0,J7,0,En,[],0,3,0,["eT",function(){AHw(this);},"jm",function(){UE(this);},"nQ",function(b,c,d){AJk(this,b,c,d);}],Xj,0,J7,[],0,3,0,0,KN,0,C,[CG],3,3,0,0,OF,0,C,[KN],0,0,0,["we",function(){return AMG(this);}],EP,0,C,[],1,3,
0,0,Ux,0,EP,[],4,3,0,0,Su,0,EP,[],4,3,0,0,Rl,0,C,[],3,3,0,0,Oa,0,C,[Rl],0,3,0,0,R1,0,CK,[],0,0,0,["eP",function(){return AFL(this);}],LN,0,C,[Ef],0,0,0,0,Of,0,C,[B6],4,3,0,0,Id,"NoSuchElementException",6,BQ,[],0,3,0,0,LI,0,C,[KN],0,0,0,["we",function(){return ANy(this);}],Gw,"ConcurrentModificationException",6,BQ,[],0,3,0,0,KV,0,EA,[],0,3,0,0,Jk,0,EP,[],4,3,0,0,Ij,0,C,[],0,3,0,0,JN,0,C,[],0,3,0,0,BT,0,C,[],1,0,0,["dq",function(b,c,d){return G7(this,b,c,d);},"dt",function(b,c,d,e){return Hh(this,b,c,d,e);},"jI",
function(){return AD8(this);},"bR",function(b){AMj(this,b);},"cO",function(b){return AMi(this,b);},"g6",function(){return AM$(this);},"fO",function(){Ig(this);}],C$,0,BT,[],0,0,0,["b",function(b,c,d){return ADw(this,b,c,d);},"bM",function(b){return ADV(this,b);}],Gi,0,C,[],0,0,0,0,AA8,"PatternSyntaxException",7,BW,[],0,3,0,["gv",function(){return AM5(this);}],OM,0,C$,[],0,0,0,["b",function(b,c,d){return AC1(this,b,c,d);},"bM",function(b){return AK8(this,b);}],R4,0,C$,[],0,0,0,["b",function(b,c,d){return AET(this,
b,c,d);}],Nu,0,C$,[],0,0,0,["b",function(b,c,d){return AD5(this,b,c,d);}],Pk,0,C$,[],0,0,0,["b",function(b,c,d){return AC6(this,b,c,d);},"bM",function(b){return AJY(this,b);}],Fe,0,C$,[],0,0,0,["b",function(b,c,d){return AMz(this,b,c,d);}],Cb,0,BT,[],1,0,0,["b",function(b,c,d){return ANB(this,b,c,d);},"cR",function(){return ALN(this);},"bM",function(b){return AHo(this,b);}],AAm,0,Cb,[],0,0,0,["co",function(b,c){return ALj(this,b,c);},"dq",function(b,c,d){return AF3(this,b,c,d);},"dt",function(b,c,d,e){return AEH(this,
b,c,d,e);},"bM",function(b){return AC4(this,b);}]]);
$rt_metadata([B8,0,BT,[],0,0,0,["b",function(b,c,d){return AGC(this,b,c,d);},"bR",function(b){AJQ(this,b);},"cO",function(b){return AIa(this,b);},"bM",function(b){return AKn(this,b);},"fO",function(){AEy(this);}],Ib,0,B8,[],0,0,0,["b",function(b,c,d){return AJE(this,b,c,d);},"bM",function(b){return AKJ(this,b);}],DC,0,Ib,[],0,0,0,["b",function(b,c,d){return AFj(this,b,c,d);},"bR",function(b){AKu(this,b);}],Lc,0,DC,[],0,0,0,["b",function(b,c,d){return AJL(this,b,c,d);},"bM",function(b){return AMp(this,b);}],Q4,
0,DC,[],0,0,0,["b",function(b,c,d){return ADO(this,b,c,d);},"bM",function(b){return ALT(this,b);}],Oh,0,DC,[],0,0,0,["b",function(b,c,d){return AEv(this,b,c,d);},"bM",function(b){return ANR(this,b);}],PG,0,DC,[],0,0,0,["b",function(b,c,d){return ACE(this,b,c,d);},"bM",function(b){return AKX(this,b);}],Ga,0,B8,[],0,0,0,["b",function(b,c,d){return ACT(this,b,c,d);},"dq",function(b,c,d){return AIn(this,b,c,d);},"dt",function(b,c,d,e){return AK$(this,b,c,d,e);},"cO",function(b){return AH9(this,b);},"g6",function()
{return AJT(this);},"fO",function(){ANd(this);}],Gj,0,C,[],1,0,0,0,Be,0,Gj,[],1,0,0,["eA",function(){return ADS(this);},"gl",function(){return ADd(this);},"lc",function(){return ALG(this);},"iL",function(){return AM7(this);}],Un,"CharClass",7,Be,[],0,0,0,["K",function(b){return Dc(this,b);},"eA",function(){return Db(this);},"gl",function(){return AFV(this);},"lc",function(){return AL_(this);},"df",function(){return AJc(this);},"iL",function(){return AF7(this);}],Io,"MissingResourceException",6,BQ,[],0,3,0,0,DQ,
0,BT,[],1,0,0,["cO",function(b){return ALa(this,b);},"bM",function(b){return AMw(this,b);},"fO",function(){AIM(this);}],Dd,0,DQ,[],0,0,0,["b",function(b,c,d){return ACG(this,b,c,d);}],ES,0,Dd,[],0,0,0,["b",function(b,c,d){return ADA(this,b,c,d);}],Da,0,DQ,[],0,0,0,["b",function(b,c,d){return ACS(this,b,c,d);}],Em,0,Dd,[],0,0,0,["b",function(b,c,d){return AIs(this,b,c,d);},"bR",function(b){ANV(this,b);}],Rd,0,Dd,[],0,0,0,["b",function(b,c,d){return ANu(this,b,c,d);},"dq",function(b,c,d){return AJb(this,b,c,d);
}],Ls,"Quantifier",7,Gj,[Dy],0,0,0,["df",function(){return AJh(this);}],Me,0,BT,[],0,0,0,["b",function(b,c,d){return AHP(this,b,c,d);},"bM",function(b){return AJP(this,b);}],Rt,0,C,[Dy,B6],0,3,0,0,Lk,0,B8,[],0,0,0,0,NR,0,B8,[],0,0,0,["b",function(b,c,d){return ADs(this,b,c,d);},"bR",function(b){AJC(this,b);},"bM",function(b){return AEa(this,b);},"cO",function(b){return ADQ(this,b);}],Dt,0,B8,[],0,0,0,["b",function(b,c,d){return AFN(this,b,c,d);},"K",function(b){return AGf(this,b);},"cO",function(b){return ADl(this,
b);},"bR",function(b){ALB(this,b);},"bM",function(b){return AFZ(this,b);}],Ik,0,Dt,[],0,0,0,["K",function(b){return AHp(this,b);}],Ua,0,Cb,[],0,0,0,["co",function(b,c){return AHQ(this,b,c);}],D7,0,Cb,[],0,0,0,["co",function(b,c){return K5(this,b,c);},"cO",function(b){return AJS(this,b);}],MF,0,B8,[],0,0,0,["bR",function(b){AIr(this,b);},"b",function(b,c,d){return ACw(this,b,c,d);},"cO",function(b){return AD1(this,b);},"bM",function(b){return AMc(this,b);}],Ee,0,Cb,[],0,0,0,["cR",function(){return AHz(this);
},"co",function(b,c){return AGN(this,b,c);},"dq",function(b,c,d){return AFK(this,b,c,d);},"dt",function(b,c,d,e){return AHF(this,b,c,d,e);},"cO",function(b){return AL9(this,b);}],ABt,0,Cb,[],0,0,0,["co",function(b,c){return ACp(this,b,c);}],SO,0,Cb,[],0,0,0,["co",function(b,c){return ACO(this,b,c);}],E2,0,B8,[],0,0,0,["bR",function(b){ANb(this,b);},"b",function(b,c,d){return AJD(this,b,c,d);},"cO",function(b){return AHR(this,b);},"bM",function(b){return AKw(this,b);}],RJ,0,E2,[],0,0,0,0,PX,0,E2,[],0,0,0,0,Sm,
0,Da,[],0,0,0,["b",function(b,c,d){return AEZ(this,b,c,d);}],Ns,0,Da,[],0,0,0,["b",function(b,c,d){return AIY(this,b,c,d);}],FD,0,Da,[],0,0,0,["b",function(b,c,d){return ALx(this,b,c,d);},"bR",function(b){AMC(this,b);}],M_,0,FD,[],0,0,0,["b",function(b,c,d){return AHB(this,b,c,d);},"bR",function(b){AJi(this,b);}],EZ,0,Da,[],0,0,0,["b",function(b,c,d){return ANN(this,b,c,d);}],Lz,0,EZ,[],0,0,0,["b",function(b,c,d){return AG9(this,b,c,d);}],OA,0,Da,[],0,0,0,["b",function(b,c,d){return ANo(this,b,c,d);}],NX,0,
FD,[],0,0,0,["b",function(b,c,d){return AEc(this,b,c,d);}],Qs,0,EZ,[],0,0,0,["b",function(b,c,d){return AC8(this,b,c,d);}],OC,0,DQ,[],0,0,0,["b",function(b,c,d){return ANG(this,b,c,d);},"dq",function(b,c,d){return ALI(this,b,c,d);}],Mk,0,DQ,[],0,0,0,["b",function(b,c,d){return AJU(this,b,c,d);},"dq",function(b,c,d){return ACA(this,b,c,d);}],Ew,0,C,[],1,0,0,0,Sn,0,Dd,[],0,0,0,["b",function(b,c,d){return ADa(this,b,c,d);}],Q9,0,Em,[],0,0,0,["b",function(b,c,d){return AIW(this,b,c,d);}],MX,0,ES,[],0,0,0,["b",function(b,
c,d){return ALd(this,b,c,d);}],NV,0,Dd,[],0,0,0,["b",function(b,c,d){return AJM(this,b,c,d);}]]);
$rt_metadata([P2,0,Em,[],0,0,0,["b",function(b,c,d){return ADh(this,b,c,d);}],Oi,0,ES,[],0,0,0,["b",function(b,c,d){return ALk(this,b,c,d);}],Wy,0,BT,[],4,0,0,["b",function(b,c,d){return AH$(this,b,c,d);},"bM",function(b){return AHg(this,b);}],U$,0,BT,[],0,0,0,["b",function(b,c,d){return ADN(this,b,c,d);},"bM",function(b){return ADZ(this,b);}],T1,0,BT,[],0,0,0,["b",function(b,c,d){return AHs(this,b,c,d);},"bM",function(b){return ANJ(this,b);}],Ry,0,BT,[],4,0,0,["b",function(b,c,d){return AKh(this,b,c,d);},"bM",
function(b){return AEM(this,b);}],AA0,0,BT,[],0,0,0,["b",function(b,c,d){return AJy(this,b,c,d);},"bM",function(b){return ACn(this,b);}],Th,0,BT,[],0,0,0,["b",function(b,c,d){return AEx(this,b,c,d);},"bM",function(b){return AGt(this,b);}],AAU,0,B8,[],0,0,0,["b",function(b,c,d){return ANr(this,b,c,d);},"bR",function(b){AD4(this,b);},"jI",function(){return AJn(this);},"bM",function(b){return AD2(this,b);}],Uj,0,B8,[],4,0,0,["b",function(b,c,d){return AJv(this,b,c,d);},"bR",function(b){AK2(this,b);},"jI",function()
{return ACk(this);},"bM",function(b){return ANA(this,b);}],AAH,0,BT,[],4,0,0,["b",function(b,c,d){return AHV(this,b,c,d);},"bM",function(b){return AGm(this,b);}],XZ,0,BT,[],0,0,0,["b",function(b,c,d){return AJx(this,b,c,d);},"bM",function(b){return AGd(this,b);}],SI,0,BT,[],0,0,0,["b",function(b,c,d){return AHb(this,b,c,d);},"bM",function(b){return AES(this,b);}],Gz,0,B8,[],0,0,0,["b",function(b,c,d){return ADb(this,b,c,d);},"bR",function(b){AKq(this,b);},"bM",function(b){return AKL(this,b);}],AAM,0,Gz,[],0,
0,0,["b",function(b,c,d){return AEY(this,b,c,d);},"dq",function(b,c,d){return AMl(this,b,c,d);},"dt",function(b,c,d,e){return AC2(this,b,c,d,e);},"cO",function(b){return AIT(this,b);}],Wn,0,Gz,[],0,0,0,["b",function(b,c,d){return AIi(this,b,c,d);}],W0,0,Cb,[],0,0,0,["co",function(b,c){return AFh(this,b,c);},"dq",function(b,c,d){return ADJ(this,b,c,d);},"dt",function(b,c,d,e){return AGs(this,b,c,d,e);},"cO",function(b){return AGY(this,b);}],SE,0,Cb,[],0,0,0,["co",function(b,c){return AIp(this,b,c);}],LE,0,Cb,
[],0,0,0,["co",function(b,c){return ALf(this,b,c);}],Gy,0,C,[],4,0,0,0,Bm,0,C,[],1,0,0,0,K8,0,Cb,[],0,0,0,["co",function(b,c){return ALi(this,b,c);}],JK,0,B8,[],0,0,0,["bR",function(b){AJK(this,b);},"b",function(b,c,d){return AEN(this,b,c,d);},"dq",function(b,c,d){return AGV(this,b,c,d);},"dt",function(b,c,d,e){return AFo(this,b,c,d,e);},"cO",function(b){return ACY(this,b);},"bM",function(b){return ALW(this,b);}],JW,0,B8,[],0,0,0,["bR",function(b){AEi(this,b);},"b",function(b,c,d){return ACF(this,b,c,d);},"dq",
function(b,c,d){return AJ3(this,b,c,d);},"dt",function(b,c,d,e){return ALe(this,b,c,d,e);},"cO",function(b){return AFi(this,b);},"bM",function(b){return AJ7(this,b);}],DI,0,Cb,[],0,0,0,["co",function(b,c){return AKM(this,b,c);},"dq",function(b,c,d){return AJd(this,b,c,d);},"dt",function(b,c,d,e){return AEh(this,b,c,d,e);},"cO",function(b){return AKz(this,b);}],QF,0,Ew,[],4,0,0,["jt",function(b){return AEr(this,b);},"sR",function(b,c){return AKF(this,b,c);}],QG,0,Ew,[],4,0,0,["jt",function(b){return ALm(this,
b);},"sR",function(b,c){return AM3(this,b,c);}],Zc,0,C,[],0,0,0,0,Tg,0,C,[],0,0,0,0,JI,0,Bm,[],0,0,0,["bK",function(){return Wv(this);}],IW,0,Bm,[],0,0,0,["bK",function(){return XD(this);}],Y6,0,Bm,[],0,0,0,["bK",function(){return AK6(this);}],ZR,0,Bm,[],0,0,0,["bK",function(){return ALZ(this);}],ZX,0,Bm,[],0,0,0,["bK",function(){return AFO(this);}],JD,0,Bm,[],0,0,0,["bK",function(){return Up(this);}],Ka,0,JD,[],0,0,0,["bK",function(){return VN(this);}],ACd,0,Bm,[],0,0,0,["bK",function(){return AGU(this);}],K0,
0,Ka,[],0,0,0,["bK",function(){return SB(this);}],WV,0,K0,[],0,0,0,["bK",function(){return AIN(this);}],Xq,0,Bm,[],0,0,0,["bK",function(){return AFa(this);}],U0,0,Bm,[],0,0,0,["bK",function(){return AII(this);}],UB,0,Bm,[],0,0,0,["bK",function(){return AM6(this);}],Z2,0,Bm,[],0,0,0,["bK",function(){return AJj(this);}],ACj,0,Bm,[],0,0,0,["bK",function(){return ACx(this);}],Zd,0,Bm,[],0,0,0,["bK",function(){return AHe(this);}],YW,0,Bm,[],0,0,0,["bK",function(){return AKO(this);}],AAs,0,Bm,[],0,0,0,["bK",function()
{return AE9(this);}],TC,0,Bm,[],0,0,0,["bK",function(){return AFs(this);}],S4,0,Bm,[],0,0,0,["bK",function(){return AMZ(this);}],Zr,0,Bm,[],0,0,0,["bK",function(){return ACq(this);}]]);
$rt_metadata([ZD,0,Bm,[],0,0,0,["bK",function(){return AHZ(this);}],VC,0,Bm,[],0,0,0,["bK",function(){return AFy(this);}],Xy,0,Bm,[],0,0,0,["bK",function(){return AGu(this);}],ABF,0,Bm,[],0,0,0,["bK",function(){return AH2(this);}],ZA,0,Bm,[],0,0,0,["bK",function(){return AMf(this);}],Wh,0,Bm,[],0,0,0,["bK",function(){return AKf(this);}],VA,0,Bm,[],0,0,0,["bK",function(){return AJf(this);}],ACi,0,Bm,[],0,0,0,["bK",function(){return AKY(this);}],Ix,0,Bm,[],0,0,0,["bK",function(){return Xs(this);}],AAy,0,Ix,[],
0,0,0,["bK",function(){return AI5(this);}],W1,0,JI,[],0,0,0,["bK",function(){return ADH(this);}],Vn,0,IW,[],0,0,0,["bK",function(){return AGI(this);}],UL,0,Bm,[],0,0,0,["bK",function(){return AIc(this);}],Vf,0,Bm,[],0,0,0,["bK",function(){return AMO(this);}],WH,0,Bm,[],0,0,0,["bK",function(){return AF_(this);}],WX,0,Bm,[],0,0,0,["bK",function(){return ACr(this);}],LH,0,C,[],0,3,0,0,YI,"CoderMalfunctionError",9,DN,[],0,3,0,0,KO,0,DJ,[C0],0,3,0,0,QS,0,C,[],4,3,0,0,PP,0,C,[Ef],0,0,0,["b9",function(){return AKo(this);
},"b2",function(){return AHD(this);}],M8,0,CK,[],0,0,0,["eP",function(){return AId(this);}],Q_,"AbstractCharClass$1",7,Be,[],0,0,0,["K",function(b){return AFT(this,b);}],Q$,"AbstractCharClass$2",7,Be,[],0,0,0,["K",function(b){return ACQ(this,b);}],Mp,"CharClass$18",7,Be,[],0,0,0,["K",function(b){return AH8(this,b);},"df",function(){return AGz(this);}],Mv,0,Be,[],0,0,0,["K",function(b){return AKN(this,b);}],Mt,0,Be,[],0,0,0,["K",function(b){return ALh(this,b);}],Mu,0,Be,[],0,0,0,["K",function(b){return AIo(this,
b);}],My,0,Be,[],0,0,0,["K",function(b){return AFv(this,b);}],Mz,0,Be,[],0,0,0,["K",function(b){return ACl(this,b);}],Mw,0,Be,[],0,0,0,["K",function(b){return AGE(this,b);}],Mx,0,Be,[],0,0,0,["K",function(b){return AIq(this,b);}],MB,0,Be,[],0,0,0,["K",function(b){return AMr(this,b);}],MC,0,Be,[],0,0,0,["K",function(b){return AE4(this,b);}],Mo,0,Be,[],0,0,0,["K",function(b){return ANY(this,b);}],M1,0,Be,[],0,0,0,["K",function(b){return AGH(this,b);}],Mm,0,Be,[],0,0,0,["K",function(b){return AE3(this,b);}],Mn,
0,Be,[],0,0,0,["K",function(b){return AGi(this,b);}],Ms,0,Be,[],0,0,0,["K",function(b){return AHv(this,b);}],Ml,0,Be,[],0,0,0,["K",function(b){return AL7(this,b);}],Mq,0,Be,[],0,0,0,["K",function(b){return ADW(this,b);}],Mr,0,Be,[],0,0,0,["K",function(b){return AJ6(this,b);}],KY,0,C,[EQ,B6],0,3,0,["dv",function(b){return AFF(this,b);}],FM,0,KY,[],0,0,0,0,Fj,0,C,[],0,0,0,0,I2,0,C,[],4,3,0,0,QM,0,C,[],0,3,0,0,P6,0,C,[],0,3,0,0,Lv,0,Ga,[],0,0,0,["dq",function(b,c,d){return AGc(this,b,c,d);},"dt",function(b,c,d,
e){return ANL(this,b,c,d,e);},"g6",function(){return AEL(this);}],Gr,0,C,[],0,0,0,["b9",function(){return LD(this);}]]);
$rt_metadata([Pj,0,Gr,[Ef],0,0,0,["b2",function(){return AEF(this);}],NJ,"BufferUnderflowException",9,BQ,[],0,3,0,0,RD,"BufferOverflowException",9,BQ,[],0,3,0,0,QC,"MalformedInputException",9,FA,[],0,3,0,["gv",function(){return AFX(this);}],NC,"UnmappableCharacterException",9,FA,[],0,3,0,["gv",function(){return AFn(this);}],Qw,0,C,[],0,3,0,0,LQ,0,C,[],0,3,0,0,NO,0,CK,[],0,0,0,0,LF,0,CC,[],4,3,0,["gk",function(){AKT(this);},"gz",function(b){Zm(this,b);},"f6",function(b,c){Um(this,b,c);}],OB,0,CC,[],4,3,0,["gk",
function(){ADf(this);},"gz",function(b){Sv(this,b);},"f6",function(b,c){Sz(this,b,c);}],I$,0,CC,[HO],0,3,0,["fo",function(){Zg(this);},"ul",function(b){ADc(this,b);},"gk",function(){ALq(this);},"gz",function(b){AAL(this,b);},"vT",function(b){AA_(this,b);},"f6",function(b,c){AAR(this,b,c);}],O5,0,I$,[],4,3,0,["ul",function(b){ALc(this,b);},"vT",function(b){AAF(this,b);}],Ky,0,C,[],3,3,0,0,Pa,0,C,[Ky],4,3,0,0,Ps,"AbstractCharClass$LazyJavaLowerCase$1",7,Be,[],0,0,0,["K",function(b){return AMy(this,b);}],Lf,"AbstractCharClass$LazyJavaUpperCase$1",
7,Be,[],0,0,0,["K",function(b){return ADE(this,b);}],OU,"AbstractCharClass$LazyJavaWhitespace$1",7,Be,[],0,0,0,["K",function(b){return ADg(this,b);}],OT,"AbstractCharClass$LazyJavaMirrored$1",7,Be,[],0,0,0,["K",function(b){return AF$(this,b);}],Rm,"AbstractCharClass$LazyJavaDefined$1",7,Be,[],0,0,0,["K",function(b){return AHm(this,b);}],MT,"AbstractCharClass$LazyJavaDigit$1",7,Be,[],0,0,0,["K",function(b){return AMA(this,b);}],L_,"AbstractCharClass$LazyJavaIdentifierIgnorable$1",7,Be,[],0,0,0,["K",function(b)
{return AJI(this,b);}],N_,"AbstractCharClass$LazyJavaISOControl$1",7,Be,[],0,0,0,["K",function(b){return AKU(this,b);}],La,"AbstractCharClass$LazyJavaJavaIdentifierPart$1",7,Be,[],0,0,0,["K",function(b){return ANx(this,b);}],Le,"AbstractCharClass$LazyJavaJavaIdentifierStart$1",7,Be,[],0,0,0,["K",function(b){return AFl(this,b);}],LX,"AbstractCharClass$LazyJavaLetter$1",7,Be,[],0,0,0,["K",function(b){return AMN(this,b);}],Nh,"AbstractCharClass$LazyJavaLetterOrDigit$1",7,Be,[],0,0,0,["K",function(b){return AIF(this,
b);}],No,"AbstractCharClass$LazyJavaSpaceChar$1",7,Be,[],0,0,0,["K",function(b){return AKp(this,b);}],PU,"AbstractCharClass$LazyJavaTitleCase$1",7,Be,[],0,0,0,["K",function(b){return AMs(this,b);}],Pb,"AbstractCharClass$LazyJavaUnicodeIdentifierPart$1",7,Be,[],0,0,0,["K",function(b){return ANh(this,b);}],Lp,"AbstractCharClass$LazyJavaUnicodeIdentifierStart$1",7,Be,[],0,0,0,["K",function(b){return AE_(this,b);}],KQ,"UnicodeCategory",7,Be,[],0,0,0,["K",function(b){return AJJ(this,b);}],OP,"UnicodeCategoryScope",
7,KQ,[],0,0,0,["K",function(b){return ALC(this,b);}],RU,0,Gp,[],0,3,0,["oX",function(){return AGO(this);},"oK",function(){return ANc(this);},"tA",function(b){return AEQ(this,b);},"mB",function(b,c,d){return AFx(this,b,c,d);},"qm",function(b){return ALw(this,b);},"qW",function(b){return AKb(this,b);}],LZ,0,CC,[],4,3,0,["gk",function(){AK0(this);},"gz",function(b){VQ(this,b);},"lG",function(b,c){AMd(this,b,c);},"f6",function(b,c){ABI(this,b,c);}],Sq,0,C,[Ef],0,0,0,0,Qz,0,C,[Ky],0,0,0,0,JX,0,C,[B6],4,3,0,0,PA,
0,KV,[],4,3,0,0,Q6,0,CC,[],4,3,0,["gk",function(){AEI(this);},"sC",function(){ANq(this);},"ft",function(){AHG(this);},"gz",function(b){VL(this,b);},"lG",function(b,c){ALL(this,b,c);},"f6",function(b,c){ABr(this,b,c);}],FG,0,C,[],1,3,0,0,IY,0,DJ,[C0],0,3,0,0,Kb,0,C,[],4,3,0,0,EG,"MalformedURLException",11,BI,[],0,3,0,0,F1,0,C,[],1,3,0,0,OY,0,DJ,[C0],0,3,0,0,LP,0,F1,[],0,3,0,["tg",function(b){return AM8(this,b);}],WZ,0,F1,[],0,3,0,["tg",function(b){return AFg(this,b);}],RA,0,C,[],3,3,0,0,LC,0,C,[RA],0,0,0,0,H_,
0,FG,[],1,3,0,0]);
$rt_metadata([Mg,0,H_,[],0,3,0,0,NS,0,C,[KU],0,3,0,["x$",function(){return AJa(this);}],Yi,0,DT,[],1,3,0,0,TT,0,C,[],0,0,0,0,Hq,0,C,[B6,C0],0,3,0,0,Fx,0,C,[],0,3,0,0,MN,0,DH,[],4,0,0,0,ML,0,DF,[],4,0,0,["h1",function(b){return ANa(this,b);},"ex",function(){return AI0(this);}],QZ,0,C,[EM],0,3,0,0,QY,0,C,[EM],0,3,0,0,QO,0,CK,[],4,0,0,0,QN,0,DH,[],4,0,0,0,QQ,0,DF,[],4,0,0,0,MM,0,CK,[],4,0,0,0,Qq,0,CK,[],0,0,0,0,MO,0,C,[Ef],4,0,0,0,Qh,0,Gr,[Ef],0,0,0,0,Rw,0,C,[EQ,B6],0,3,0,0]);
function $rt_array(cls,data){this.bW=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","@","0","","Player","webgl","NTrYpeNT","Minecraft main thread","null","Patter is null",": ","    at ","Caused by: ","  at ","false","true","Index out of bounds","String contains invalid digits: ","String contains digits out of radix ","The value is too big for int type: ","String is null or empty","Illegal radix: ","#version 300 es","/",
"UTF-8","overflow-x:hidden;overflow-y:hidden;","WebGL 2.0 is not supported in your browser (",")","NONE","ESCAPE","1","2","3","4","5","6","7","8","9","MINUS","EQUALS","BACK","TAB","Q","W","E","R","T","Y","U","I","O","P","LBRACKET","RBRACKET","RETURN","LCONTROL","A","S","D","F","G","H","J","K","L","SEMICOLON","APOSTROPHE","GRAVE","LSHIFT","BACKSLASH","Z","X","C","V","B","N","M","COMMA","PERIOD","SLASH","RSHIFT","MULTIPLY","LMENU","SPACE","CAPITAL","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","NUMLOCK",
"SCROLL","NUMPAD7","NUMPAD8","NUMPAD9","SUBTRACT","NUMPAD4","NUMPAD5","NUMPAD6","ADD","NUMPAD1","NUMPAD2","NUMPAD3","NUMPAD0","DECIMAL","F11","F12","F13","F14","F15","F16","F17","F18","KANA","F19","CONVERT","NOCONVERT","YEN","NUMPADEQUALS","CIRCUMFLEX","AT","COLON","UNDERLINE","KANJI","STOP","AX","UNLABELED","NUMPADENTER","RCONTROL","SECTION","NUMPADCOMMA","DIVIDE","SYSRQ","RMENU","FUNCTION","PAUSE","HOME","UP","PRIOR","LEFT","RIGHT","END","DOWN","NEXT","INSERT","DELETE","CLEAR","LMETA","RMETA","APPS","POWER",
"SLEEP","\n","GL_INVALID_ENUM","GL_INVALID_VALUE","GL_INVALID_OPERATION","GL_OUT_OF_MEMORY","Unknown Error","CONTEXT_LOST_WEBGL","########## GL ERROR ##########","@ ","level.dat","Pre startup","Startup","/default.png","PeytonPlayz585/","minecraft","The working directory could not be created: ","Post startup","Pre render","Client error","The game broke! [","]"," fps, "," chunk updates","Post render","/terrain.png","anonymous","main","_net_peytonplayz585_minecraft_infdev_IndexedDBFilesystem","Initialization Failed",
"EAGPKG!!","invalid epk file","<file>"," end","invalid file hash for ","</file>","/dirt.png","Generating level","Raising..","Eroding..","Soiling..","Carving..","Watering..","Flood filled "," tiles in "," ms","Melting..","Growing..","Planting..","A Nice World","LavaCount: ","IT HAPPENED!","hoooly fuck","!!","window.indexedDB was null or undefined","OPENED","LOCKED","ERROR","yee","End of stream reached","Malformed UTF-8 sequence","charsetName is null","Should never been thrown","Stream closed","footer is not found",
"Unexpected end of ZLIB input stream","Either src or dest is null","open error","path","New position "," is outside of range [0;","New limit ","The last float in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","The last byte in dst ","The last byte in src ","BIG_ENDIAN","LITTLE_ENDIAN","none","-","grass","cloth","gravel","stone","metal","wood","�","Replacement preconditions do not hold","Index ","Capacity is negative: ","The last char in dst ","The last char in src "," is outside of string of size ",
"Start "," must be before end ","need dictionary","unknown compression method","unknown header flags set","incorrect data check","incorrect length check","incorrect header check","invalid window size","bad extra field length","header crc mismatch","invalid stored block lengths","invalid block type","too many length or distance symbols","invalid bit length repeat","oversubscribed dynamic bit lengths tree","incomplete dynamic bit lengths tree","oversubscribed distance tree","incomplete distance tree","empty distance tree with lengths",
"oversubscribed literal/length tree","incomplete literal/length tree","invalid distance code","invalid literal/length code","IGNORE","REPLACE","REPORT","newAction must be non-null","Action must be non-null","matrix is not supported while recording display list use tessellator class instead","projection matrix stack overflow","texture matrix stack overflow","modelview matrix stack overflow","projection matrix stack underflow","texture matrix stack underflow","modelview matrix stack underflow","only GL_QUADS supported in a display list",
"vertex format inconsistent in display list","0123456789abcdef","This stream is already closed","/rock.png","/water.png","/clouds.png","Forward","Left","Back","Right","Jump","Build","Chat","Toggle fog","Save location","Load location","options.txt","Music: ","OFF","ON","Sound: ","Invert mouse: ","Render distance: ","Show FPS: ",":","music","sound","invertYMouse","showFrameRate","viewDistance","key_","Failed to load options","music:","sound:","invertYMouse:","showFrameRate:","viewDistance:","Failed to save options",
"FAR","NORMAL","SHORT","TINY","/gui.png","0.0.23a_01","mousedown","wheel","keyup","/char.png","Select block","/glsl/core.glsl","\n#define CC_a_color\n","#define CC_a_texture0\n","#define CC_lighting\n","#define CC_fog\n","#define CC_alphatest\n","#define CC_unit0\n","\n#define CC_VERT\n","\n\n","\n[/glsl/core.glsl][CC_VERT] ","broken shader file","\n#define CC_FRAG\n","\n[/glsl/core.glsl][CC_FRAG] ","a_position","a_texture0","a_color","\n[LINKER] ","matrix_m","matrix_p","matrix_t","colorUniform","normalUniform",
"light0Pos","light1Pos","fogColor","fogMode","fogStart","fogEnd","fogDensity","fogPremultiply","alphaTestF","tex0","texCoordV0","array size does not equal image size","Directory is read-only","File "," already exists","Invalid file name","Options...","Generate new level...","Save level..","Load level..","Back to game","Options","Save level","Game menu","Writer already closed","Directory does not exist","could not load: ","Is","In",", ","{",",","}","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph",
"Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","s","d","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic",
"CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement",
"LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B",
"SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs",
"YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","Nd","Nl","No","IsZ","Zs","Zl","Zp",
"IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","Malformed input of length ","Unmappable characters of length ","Controls...","Done","Controls","Small","Normal","Huge","Cancel","Generate new level","Load level","Getting level list..","http://","/listmaps.jsp?user=","Failed to load levels",";","---","Enter level name:","Can\'t create file "," since parent path denotes regular file","> "," <","ftp","http","https","unknown protocol(",")://","?","Save","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ,.:-_\'*!\"#%/()=+?[]{}<>",
"_","//","////","String index out of bounds: ","/./","/.","/../","/..","GET","HEAD","OPTIONS","POST","PUT","TRACE","Unsupported protocol: ","HTTP status: "," ","\r\n"]);
Ca.prototype.toString=function(){return $rt_ustr(this);};
Ca.prototype.valueOf=Ca.prototype.toString;C.prototype.toString=function(){return $rt_ustr(AEf(this));};
C.prototype.__teavm_class__=function(){return $dbg_class(this);};
function Long_eq(a,b){return a.hi===b.hi&&a.lo===b.lo;}function Long_ne(a,b){return a.hi!==b.hi||a.lo!==b.lo;}function Long_gt(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);}function Long_ge(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);}function Long_lt(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>
1;var y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);}function Long_le(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);}function Long_add(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo+b.lo);}else if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)+Long_toNumber(b));}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi
=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo+b_lolo|0;var lohi=a_lohi+b_lohi+(lolo>>16)|0;var hilo=a_hilo+b_hilo+(lohi>>16)|0;var hihi=a_hihi+b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);}function Long_inc(a){var lo=a.lo+1|0;var hi=a.hi;if(lo===0){hi=hi+1|0;}return new Long(lo,hi);}function Long_dec(a){var lo=a.lo -1|0;var hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new Long(lo,hi);}function Long_neg(a)
{return Long_inc(new Long(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));}function Long_sub(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo -b.lo);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo -b_lolo|0;var lohi=a_lohi -b_lohi+(lolo>>16)|0;var hilo=a_hilo -b_hilo+(lohi>>16)|0;var hihi=a_hihi -b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<
16,hilo&0xFFFF|(hihi&0xFFFF)<<16);}function Long_compare(a,b){var r=a.hi -b.hi;if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}function Long_mul(a,b){var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi
=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=0;var lohi=0;var hilo=0;var hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo
+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;var result=new Long(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:Long_neg(result);}function Long_div(a,b){if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_divRem(a,b))[0];}function Long_udiv(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[0];}function Long_rem(a,
b){if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)%Long_toNumber(b));}return (Long_divRem(a,b))[1];}function Long_urem(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[1];}function Long_divRem(a,b){if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if
(Long_isNegative(b)){b=Long_neg(b);}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return positive?[q,a]:[Long_neg(q),Long_neg(a)];}function Long_udivRem(a,b){if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return [q,a];}function Long_shiftLeft16(a){return new Long(a.lo<<16,a.lo>>>16|a.hi<<16);}function Long_shiftRight16(a)
{return new Long(a.lo>>>16|a.hi<<16,a.hi>>>16);}function Long_and(a,b){return new Long(a.lo&b.lo,a.hi&b.hi);}function Long_or(a,b){return new Long(a.lo|b.lo,a.hi|b.hi);}function Long_xor(a,b){return new Long(a.lo^b.lo,a.hi^b.hi);}function Long_shl(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new Long(0,a.lo);}else {return new Long(0,a.lo<<b -32);}}function Long_shr(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi
<<32 -b,a.hi>>b);}else if(b===32){return new Long(a.hi,a.hi>>31);}else {return new Long(a.hi>>b -32,a.hi>>31);}}function Long_shru(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new Long(a.hi,0);}else {return new Long(a.hi>>>b -32,0);}}function LongInt(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}function LongInt_mul(a,b){var a_lolo=(a.lo&0xFFFF)*b|0;var a_lohi=(a.lo>>>16)*b|0;var a_hilo=(a.hi&0xFFFF)*b|0;var a_hihi=(a.hi>>>16)*b|0;var sup
=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;}function LongInt_sub(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -
b_hihi+(a_hilo>>16)|0;var sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_add(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;var sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF
|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_inc(a){a.lo=a.lo+1|0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}}function LongInt_dec(a){a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi=== -1){a.sup=a.sup -1&0xFFFF;}}}function LongInt_ucompare(a,b){var r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function LongInt_numOfLeadingZeroBits(a)
{var n=0;var d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;}function LongInt_shl(a,b){if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}}function LongInt_shr(a,b){if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup
=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}}function LongInt_copy(a){return new LongInt(a.lo,a.hi,a.sup);}function LongInt_div(a,b){var bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;var sz=1+(bits/16|0);var dividentBits=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);var q
=new LongInt(0,0,0);while(sz-->0){LongInt_shl(q,16);var digitA=(a.hi>>>16)+0x10000*a.sup;var digitB=b.hi>>>16;var digit=digitA/digitB|0;var t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while(LongInt_ucompare(t,a)>0){LongInt_sub(t,b); --digit;}}else {while(true){var nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,bits+16);return q;}function TeaVMThread(runner){this.status=3;this.stack
=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}TeaVMThread.prototype.push=function(){for(var i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};TeaVMThread.prototype.s=TeaVMThread.prototype.push;TeaVMThread.prototype.pop=function(){return this.stack.pop();};TeaVMThread.prototype.l=TeaVMThread.prototype.pop;TeaVMThread.prototype.isResuming=function(){return this.status===2;};TeaVMThread.prototype.isSuspending=function(){return this.status
===1;};TeaVMThread.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};TeaVMThread.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if($rt_currentNativeThread!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:function(result){if(result instanceof Error){throw result;}};this.run();};TeaVMThread.prototype.resume=function(){if($rt_currentNativeThread!==null){throw new Error("Another thread is running");}this.status
=2;this.run();};TeaVMThread.prototype.run=function(){$rt_currentNativeThread=this;var result;try {result=this.runner();}catch(e){result=e;}finally {$rt_currentNativeThread=null;}if(this.suspendCallback!==null){var self=this;var callback=this.suspendCallback;this.suspendCallback=null;callback(function(){self.resume();});}else if(this.status===0){this.completeCallback(result);}};function $rt_suspending(){var thread=$rt_nativeThread();return thread!=null&&thread.isSuspending();}function $rt_resuming(){var thread
=$rt_nativeThread();return thread!=null&&thread.isResuming();}function $rt_suspend(callback){var nativeThread=$rt_nativeThread();if(nativeThread===null){throw new Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);}function $rt_startThread(runner,callback){(new TeaVMThread(runner)).start(callback);}var $rt_currentNativeThread=null;function $rt_nativeThread(){return $rt_currentNativeThread;}function $rt_invalidPointer(){throw new Error("Invalid recorded state");}main
=$rt_mainStarter(AAY);
(function(){var c;c=Ts.prototype;c.dispatchEvent=c.Bv;c.addEventListener=c.EH;c.removeEventListener=c.GZ;c.getLength=c.BD;c.get=c.yw;c.addEventListener=c.z2;c.removeEventListener=c.Dl;c=RI.prototype;c.handleEvent=c.ec;c=RQ.prototype;c.handleEvent=c.ec;c=RR.prototype;c.handleEvent=c.ec;c=RO.prototype;c.handleEvent=c.ec;c=RP.prototype;c.handleEvent=c.ec;c=RM.prototype;c.handleEvent=c.ec;c=RN.prototype;c.handleEvent=c.ec;c=RL.prototype;c.handleEvent=c.ec;c=OE.prototype;c.handleEvent=c.ec;c=OD.prototype;c.handleEvent
=c.ec;c=RH.prototype;c.stateChanged=c.x$;c=LW.prototype;c.handleEvent=c.q1;c=LV.prototype;c.handleEvent=c.q1;c=LU.prototype;c.handleEvent=c.q1;c=LT.prototype;c.handleEvent=c.ec;c=VR.prototype;c.getLength=c.Gk;c.get=c.GR;c=OH.prototype;c.handleEvent=c.ec;c=OG.prototype;c.handleEvent=c.ec;c=OF.prototype;c.onTimer=c.we;c=LI.prototype;c.onTimer=c.we;c=NS.prototype;c.stateChanged=c.x$;})();
})();

//# sourceMappingURL=app.js.map