if (self.CavalryLogger) { CavalryLogger.start_js(["iPtoM"]); }

__d("StorySpeedLogger",["cx","Banzai","NavigationMetrics","PageletEventConstsJS","PageletEventsHelper","ListestandStreamTailStoryPlaceholderVisbilityTracker","Run","getObjectValues","onRectIsWithinViewport","performanceAbsoluteNow"],(function a(b,c,d,e,f,g,h){__p&&__p();var i="story_speed",j={},k={},l={},m={},n={},o=0,p=c("getObjectValues")(c("PageletEventConstsJS")),q=document.getElementsByClassName("_5jmm");c("NavigationMetrics").addListener(c("NavigationMetrics").Events.NAVIGATION_DONE,function(s,t){__p&&__p();var u=t.tti,v=t.e2e,w=t.start,x=t.serverLID,y=t.all_pagelets_displayed,z=t.page,A=t.pageType,B=j[x];if(!B)return;Object.assign(m[x],{start:w,tti:u-w,e2e:v-w,dd:y-w,page:z,page_type:A});B.forEach(function(C){__p&&__p();var D=C.pageletID,E=C.storyID,F=document.getElementById(D),G=c("PageletEventsHelper").getMetrics(x);if(!F||!G)return;var H=l[E],I=G.pagelets[D],J=H.data;for(var K=p,L=Array.isArray(K),M=0,K=L?K:K[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var N;if(L){if(M>=K.length)break;N=K[M++]}else{M=K.next();if(M.done)break;N=M.value}var O=N;if(I[O]&&O!=="setup")J[O]=I[O]-w}if(!J.prearrive)delete J.arrive;J.insert_position=[].indexOf.call(q,F);if(A==="normal"&&J.insert_position<o)J.placeholder_visible_duration=J.display;else J.placeholder_visible_duration=c("ListestandStreamTailStoryPlaceholderVisbilityTracker").getStoryPlaceholderVisibleDuration(D);if(H.serverOnOldRevision||H.viewedAt)r(x,E)});n[x]=true});function r(s,t){__p&&__p();var u=l[t];if(!u)return;var v=m[s];u.data.viewed=u.viewedAt?u.viewedAt-u.data.display-v.start:null;c("Banzai").post(i,babelHelpers["extends"]({stories:[u.data]},v),c("Banzai").VITAL);delete l[t];if(++k[s]===j[s].length){delete m[s];delete j[s];delete n[s]}}f.exports={registerStory:function s(t,u,v,w,x,y){__p&&__p();var z;m[t]=m[t]||{lid:t};k[t]=k[t]||0;j[t]=j[t]||[];j[t].push({pageletID:u,storyID:v});l[v]=l[v]||{data:{}};Object.assign(l[v].data,w);if(x)m[t].weight=x;if(y)(function(){__p&&__p();var A=c("onRectIsWithinViewport")(function(){return y.getBoundingClientRect()},function(C){var D=c("PageletEventsHelper").getMetrics(t),E=D&&D.pagelets[u]&&D.pagelets[u].display;if(!C||!E)return;A.remove();l[v].viewedAt=c("performanceAbsoluteNow")();if(n[t])r(t,v)}),B=function B(){A.remove();r(t,v)};setTimeout(B,6e4);c("Run").onBeforeUnload(B,true)})();else l[v].serverOnOldRevision=true},registerServerStoryData:function s(t){l[t.id]=l[t.id]||{data:{}};Object.assign(l[t.id].data,t);delete t.id},setPlaceholdersInitiallyShown:function s(t){o=t}}}),null);
__d("XRightsManagerEnrollmentPostController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/rights_manager/enroll/",{})}),null);