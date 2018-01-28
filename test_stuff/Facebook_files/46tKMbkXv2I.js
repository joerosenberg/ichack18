if (self.CavalryLogger) { CavalryLogger.start_js(["fSrrE"]); }

__d("FantaReducersGetMessages",["AsyncRequest","FantaGetMessageActions","FantaTabActions","FantaTypeJoinableThread","immutable","ImmutableObject","MercuryIDs","MercuryLogMessageType","MercuryMessageStore","MercuryThreadActions","MercuryThreads","TimeSlice","UserActivity","XMNCommercePageNullStateCTAController","getPageIDFromThreadID","gkx","setImmediate"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=c("MercuryThreadActions").get(),i=c("MercuryThreads").get(),j=c("FantaTabActions").Types,k=c("FantaGetMessageActions").Types,l={},m={};function n(I,J){switch(J.type){case j.OPEN_TAB:case k.CLEAR_PARTICIPANTS:I=y(I,J.tabID);break}return I}function o(I,J){switch(J.type){case j.OPEN_TAB_WITH_INTERSTITIAL_DATA:I=z(I,J.interstitialData);break}return I}function p(I,J){switch(J.type){case j.REPLACE_TAB:I=y(I,J.newTabID);break}return I}function q(I,J){__p&&__p();switch(J.type){case k.CLEAR_PREVIEW:var K=J.tabID,L=J.tokens,M=I.mercury.tabContents.get(K);if(!M)return I;var N=L.map(function(O){var P=O.info.uid;if(c("MercuryIDs").isValid(P))return P;return c("MercuryIDs").getParticipantIDFromUserID(P)});M.messageStore&&M.messageStore.destroy();M=M.merge({messages:c("immutable").List(),hasFetchedAll:false,messageStore:null,threadPreviewID:null,threadPreviewRecipients:c("immutable").List(N)});I=I.setIn(["mercury","tabContents",K],M);i.getThreadMeta(K,function(O){c("setImmediate")(function(){return c("FantaGetMessageActions").onGetThreadPreviewResponse(K,O)})});break}return I}function r(I,J){switch(J.type){case k.ADD_PARTICIPANTS:I=u(I,J.tabID,J.previewTabID);break}return I}function s(I,J){__p&&__p();switch(J.type){case j.LOAD_FROM_DATA:var K=I.tabGroup,L=J.tabData,M=L.interstitialData;if(K.updatedTime>=L.updatedTime||L.updatedTime===undefined){for(var N=I.tabGroup.tabs.keys(),O=Array.isArray(N),P=0,N=O?N:N[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var Q;if(O){if(P>=N.length)break;Q=N[P++]}else{P=N.next();if(P.done)break;Q=P.value}var R=Q,S=I.mercury.tabContents.get(R).messageStore;if(!S){var T=c("MercuryIDs").getThreadFBIDFromThreadID(R);if(M&&M[T]){M[T].threadID=R;I=z(I,M[T])}else I=y(I,R)}}return I}else for(var U=I.tabGroup.tabs.keys(),V=Array.isArray(U),W=0,U=V?U:U[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var X;if(V){if(W>=U.length)break;X=U[W++]}else{W=U.next();if(W.done)break;X=W.value}var Y=X,Z=c("MercuryIDs").getThreadFBIDFromThreadID(Y);if(M&&M[Z]){M[Z].threadID=Y;I=z(I,M[Z])}else I=y(I,Y)}break}return I}function t(I,J){switch(J.type){case k.FETCH_MORE_MESSAGES:var K=J.threadID,L=I.mercury.tabContents.get(K).messageStore;if(L&&!m[K]){m[K]=true;L.fetchMoreMessages()}break}return I}function u(I,J,K){i.getThreadMeta(K,function(L){c("setImmediate")(function(){return c("FantaGetMessageActions").onGetThreadPreviewResponse(J,L)})});return I}function v(I,J){switch(J.type){case k.ON_GET_THREAD_PREVIEW_RESPONSE:var K=J.tabID,L=J.thread;return w(I,K,L)}return I}function w(I,J,K){__p&&__p();var L=K.thread_id,M=new(c("MercuryMessageStore"))(L),N=I.mercury.tabContents.get(J);if(m[L]||!N)return I;m[L]=true;N&&N.messageStore&&N.messageStore.destroy();N=N.merge({thread:K,messageStore:M});I=I.setIn(["mercury","tabContents",J],N);var O=setTimeout(function(){m[L]=false;c("FantaGetMessageActions").onShowContextBannerTimer(J)},6e3);M.subscribe(function(P){m[L]=false;var Q=P.messages&&P.messages[0];if(Q&&Q.log_message_type&&Q.log_message_type===c("MercuryLogMessageType").SERVER_ERROR&&N.messages.size===0)M.fetchMoreMessages();else{clearTimeout(O);c("setImmediate")(function(){c("FantaGetMessageActions").onMessageStoreResponse(P.messages,J)})}});return I}function x(I,J){switch(J.type){case k.REFRESH_THREAD:return y(I,J.threadID)}return I}function y(I,J){__p&&__p();if(!l[J]){var K=c("getPageIDFromThreadID")(J);if(K){var L=c("XMNCommercePageNullStateCTAController").getURIBuilder();new(c("AsyncRequest"))().setURI(L.getURI()).setMethod("POST").setData({page_id:K}).setHandler(function(M){if(M&&M.payload)c("FantaGetMessageActions").onPageNullResponse(J,M.payload)}).send()}l[J]=true;i.getThreadMeta(J,function(M){c("setImmediate")(function(){return c("FantaGetMessageActions").onGetThreadResponse(M)})})}return I}function z(I,J){var K=new(c("FantaTypeJoinableThread"))(J),L=J.threadID,M=L&&I.mercury.tabContents.get(L);if(M){M=M.merge({joinableInterstitialData:K});I=I.setIn(["mercury","tabContents",L],M)}return I}function A(I,J){switch(J.type){case k.ON_PAGE_NULL_RESPONSE:var K=J.threadID,L=J.nullStateCTA,M=I.mercury.tabContents.get(K);if(M){M=M.merge({nullStateCTA:new(c("ImmutableObject"))(L)});I=I.setIn(["mercury","tabContents",K],M)}break}return I}function B(I,J){switch(J.type){case k.ON_GET_THREAD_RESPONSE:var K=J.thread;I=C(I,K);break}return I}function C(I,J){__p&&__p();var K=J.thread_id;l[K]=false;var L=I.mercury.tabContents.get(K);if(!L)return I;var M=L.messageStore;if(!M)I=w(I,K,J);else{L=L.merge({thread:J});I=I.setIn(["mercury","tabContents",K],L)}return I}function D(I,J){switch(J.type){case k.THREADS_UPDATED:J.threads.forEach(function(K){I=C(I,new(c("ImmutableObject"))(K))})}return I}function E(I,J){switch(J.type){case k.ON_MESSAGE_STORE_RESPONSE:var K=J.messages,L=J.tabID,M=I.mercury.tabContents.get(L),N=M&&M.messageStore;if(N){var O=N.hasFetchedAll();M=M.merge({hasFetchedAll:O,messages:c("immutable").List(K)});I=I.setIn(["mercury","tabContents",L],M)}break}return I}function F(I,J){switch(J.type){case k.ON_SHOW_CONTEXT_BANNER_TIMER:var K=I.mercury.tabContents.get(J.threadID);if(!K)return I;K=K.merge({showContextBanner:true});I=I.setIn(["mercury","tabContents",J.threadID],K);break}return I}function G(I,J){__p&&__p();switch(J.type){case j.CLOSE_AND_TAB_NEXT:case j.FOCUS_NEXT_TAB:case j.FOCUS_PREVIOUS_TAB:case j.FOCUS_TAB:case j.SCROLL_BOTTOM_CHANGED:case j.UNMINIMIZE_TAB:case k.ON_GET_THREAD_RESPONSE:case k.ON_MESSAGE_STORE_RESPONSE:case k.REFRESH_THREAD:case k.THREADS_UPDATED:var K=I.tabGroup.focusedTabID;if(K){var L=I.tabGroup.tabs.get(K);if(L&&!L.isMinimized&&c("UserActivity").isOnTab()&&c("UserActivity").isActive()){var M=I.mercury.tabContents.get(K);if(M&&M.isScrolledToBottom)H(K)}}break}return I}function H(I){var J=function J(){h.markSeen(I);h.markRead(I)};if(c("gkx")("AT45Q0YAtTF77a1x8ZT9-rWfsF83gTI5tMuldZujY0KaNI6icTW09jBEE5BSuvPKdZtVIIdleK4appEhrvQPrVOyhvdXTeLDSdYEXUe9KmbS3Q"))c("TimeSlice").guard(J,"superfluous request to first open DD",{propagationType:c("TimeSlice").PropagationType.ORPHAN})();else J()}f.exports={addParticipants:r,clearPreview:q,fetchMoreMessages:t,loadFromData:s,onFocusChange:G,onGetThreadPreviewResponse:v,onGetThreadResponse:B,onMessageStoreResponse:E,onPageNullResponse:A,onShowContextBannerTimer:F,openInterstitialTab:o,openTab:n,refreshThread:x,replaceTab:p,threadsUpdated:D}}),null);
__d("MessengerThreadsWebGraphQLQuery",["WebGraphQLQueryBase"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();f.exports=function(){__p&&__p();var h,i;h=babelHelpers.inherits(j,c("WebGraphQLQueryBase"));i=h&&h.prototype;j.__getDocID=function(){"use strict";return"1534015370052277"};j.getQueryID=function(){"use strict";return"2044634392421518"};function j(){"use strict";h.apply(this,arguments)}return j}()}),null);
__d("MessengerGraphQLThreadFetcher.bs",["Promise","bs_array","BanzaiODS","bs_caml_array","bs_pervasives","WebGraphQL","bs_js_null_undefined","MessengerThreadsWebGraphQLQuery","MessengerServerPayloadTransformer.bs"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(k,l,m,n,o){__p&&__p();if(k==null)if(n!==0)return{actions:null,thread:undefined,end_of_history:{type:"user",fbid:l},roger:null};else return{actions:null,thread:undefined,end_of_history:undefined,roger:null};else{var p=c("MessengerServerPayloadTransformer.bs").getThreadFBID(k),q=c("MessengerServerPayloadTransformer.bs").getOtherUserID(k),r=q==null?p==null?c("bs_pervasives").failwith("No thread ID"):p:q;if(r!==l)c("bs_pervasives").failwith("Thread ID mismatch");var s=c("MessengerServerPayloadTransformer.bs").transformThread(m,k,o),t=c("bs_js_null_undefined").from_opt(c("MessengerServerPayloadTransformer.bs").transformMessages(m,k,o)),u=c("MessengerServerPayloadTransformer.bs").transformReadReceipts(m,k),v;if(u){var w={};w[l]=u[0];v=w}else v=null;var x=c("MessengerServerPayloadTransformer.bs").getMessagePageInfo(k);if(x)if(x[0].has_previous_page)return{actions:t,thread:s,end_of_history:undefined,roger:v};else return{actions:t,thread:s,end_of_history:{type:"thread",fbid:l},roger:v};else return{actions:t,thread:s,end_of_history:undefined,roger:v}}}function i(k){return new(c("MessengerThreadsWebGraphQLQuery"))({id:k.id,message_limit:k.limit,load_messages:+(k.limit>0),load_read_receipts:k.loadReadReceipts,before:k.timestamp})}function j(k,l,m){var n=c("bs_array").map(i,l);return c("Promise").all(c("WebGraphQL").execAll(n,{actorID:m?k:null,batchName:"MessengerGraphQLThreadFetcher"}))["catch"](function(o){c("BanzaiODS").bumpEntityKey("messenger_webgraphql","fetch_thread.failure");return c("Promise").reject(o)}).then(function(o){c("BanzaiODS").bumpEntityKey("messenger_webgraphql","fetch_thread.success");return c("bs_array").mapi(function(p,q){var r=q.message_thread,s=c("bs_caml_array").caml_array_get(l,p);return h(r,s.id,k,s.isCanonical,m)},o)})}g._transformPayload=h;g._getQuery=i;g.fetchAll=j}),null);