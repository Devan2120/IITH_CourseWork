try{
var s_mKb=function(a){this.Uk=a};

}catch(e){_DumpException(e)}
try{
var s_Em=function(a){s_J.call(this,a.Ka);var b=this;this.window=a.service.window.get();this.wa=this.Uk();this.oa=window.orientation;this.ka=function(){var c=b.Uk(),d=b.Nib()&&90===Math.abs(window.orientation)&&b.oa===-1*window.orientation;b.oa=window.orientation;if(c!==b.wa||d){b.wa=c;d=s_e(b.Ee);for(var e=d.next();!e.done;e=d.next()){e=e.value;var f=new s_mKb(c);try{e(f)}catch(g){s_ca(g)}}}};this.Ee=new Set;this.window.addEventListener("resize",this.ka);this.Nib()&&this.window.addEventListener("orientationchange",
this.ka)};s_w(s_Em,s_J);s_Em.nb=s_J.nb;s_Em.Fa=function(){return{service:{window:s_nj}}};s_Em.prototype.addListener=function(a){this.Ee.add(a)};s_Em.prototype.removeListener=function(a){this.Ee.delete(a)};
s_Em.prototype.Uk=function(){if(s_nKb()){var a=s_Ch(this.window);a=new s_jh(a.width,Math.round(a.width*this.window.innerHeight/this.window.innerWidth))}else a=this.wc()||(s_na()?s_nKb():this.window.visualViewport)?s_Ch(this.window):new s_jh(this.window.innerWidth,this.window.innerHeight);return a.height<a.width};s_Em.prototype.destroy=function(){this.window.removeEventListener("resize",this.ka);this.window.removeEventListener("orientationchange",this.ka)};
var s_nKb=function(){return s_na()&&s_kf.nG()&&!navigator.userAgent.includes("GSA")};s_Em.prototype.wc=function(){return s_oKb};s_Em.prototype.Nib=function(){return"orientation"in window};var s_oKb=!1;s_oj(s_zKa,s_Em);

s_oKb=!0;

}catch(e){_DumpException(e)}
try{
s_a("aLUfP");


s_b();

}catch(e){_DumpException(e)}
// Google Inc.
