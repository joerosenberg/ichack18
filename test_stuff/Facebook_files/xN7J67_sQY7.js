if (self.CavalryLogger) { CavalryLogger.start_js(["zWwAu"]); }

__d("BanzaiLoginAndLogoutListener",["Banzai","Event"],(function a(b,c,d,e,f,g){var h={listen:function i(j){var k=function k(event){c("Banzai").flush()};c("Event").listen(j,"submit",k)}};f.exports=h}),null);
__d("LogoutMenu",["csx","DOMQuery","Event","QE2Logger","URI","ReactXUIMenu","emptyFunction","requireWeak"],(function a(b,c,d,e,f,g,h){__p&&__p();var i;c("requireWeak")("MenuItem",function(k){i=k});function j(k,l,m,n){__p&&__p();var o=void 0;if(l)l.subscribe("confirm",function(){c("Event").fire(o,"submit");o.submit()});if(m)m.subscribe("confirm",function(){c("Event").fire(o,"submit");o.submit()});k.subscribe("itemclick",function(p,q){__p&&__p();switch(q.item.getValue()){case"logout":o=c("DOMQuery").find(k.getRoot(),"._w0d");break;case"createnewaccount":o=c("DOMQuery").find(k.getRoot(),"._3eei");break;case"switchaccount":o=c("DOMQuery").find(k.getRoot(),"._3eeq");break;case"help":if(i)i.prototype.hasAction=c("emptyFunction").thatReturnsFalse;break;default:break}if(o){var r=false,s="/confirmemail.php",t=c("URI").getRequestURI().getPath();if(t===s&&m){m.show();r=true}else if(t!==s&&l){l.show();r=true}if(n)c("QE2Logger").logExposureForUser("confirmation_www");if(!r){c("Event").fire(o,"submit");o.submit()}}})}f.exports.init=j}),null);
__d("ServiceWorkerLoginAndLogoutListener",["Event","ServiceWorkerLoginAndLogout"],(function a(b,c,d,e,f,g){var h={listen:function i(j,k){var l=function l(){if(k==="login")c("ServiceWorkerLoginAndLogout").login();else if(k==="logout")c("ServiceWorkerLoginAndLogout").logout();else throw new Error("bad login type given")};c("Event").listen(j,{click:l,submit:l})}};f.exports=h}),null);