if (self.CavalryLogger) { CavalryLogger.start_js(["JspOH"]); }

__d("FBLoadShimmer.react",["cx","React","joinClasses"],(function a(b,c,d,e,f,g,h){"use strict";function i(j){var k=j.className,l=j.height,m=j.style,n=j.width,o=j.disableAnimation,p=j.noAnimOptimization,q=babelHelpers.objectWithoutProperties(j,["className","height","style","width","disableAnimation","noAnimOptimization"]),r="_1tt";if(o)r=c("joinClasses")(r,"_300z");if(p)r=c("joinClasses")(r,"_43z2");return c("React").createElement("div",babelHelpers["extends"]({},q,{className:c("joinClasses")(k,r),style:babelHelpers["extends"]({height:l!=null?l+"px":undefined,width:n!=null?n+"px":undefined},m)}))}f.exports=i}),null);
__d("VideoWithLoopingPlayback",["setImmediate","VideoPlayerLoggerSource","VideoPlayerReason"],(function a(b,c,d,e,f,g){__p&&__p();function h(i){__p&&__p();var j=arguments.length<=1||arguments[1]===undefined?-1:arguments[1];"use strict";this.$VideoWithLoopingPlayback5=function(){var k=this.$VideoWithLoopingPlayback1.getOption("FeedAutoplay","isVisibleForAutoplay"),l=this.$VideoWithLoopingPlayback1.getOption("WatchAndScroll","isActive"),m=this.$VideoWithLoopingPlayback1.getIsInChannel(),n=this.$VideoWithLoopingPlayback1.getSource()===c("VideoPlayerLoggerSource").TAHOE;if((k||k===undefined)&&!l&&!m&&!n&&(!this.$VideoWithLoopingPlayback4||this.$VideoWithLoopingPlayback3<this.$VideoWithLoopingPlayback4)){c("setImmediate")(function(){return this.$VideoWithLoopingPlayback1.play(c("VideoPlayerReason").LOOP)}.bind(this));this.$VideoWithLoopingPlayback3++;if(this.$VideoWithLoopingPlayback4&&this.$VideoWithLoopingPlayback3===this.$VideoWithLoopingPlayback4-1)this.$VideoWithLoopingPlayback1.setOption("Looping","isLooping",false)}}.bind(this);this.$VideoWithLoopingPlayback1=i;this.$VideoWithLoopingPlayback2=true;this.$VideoWithLoopingPlayback3=1;this.$VideoWithLoopingPlayback4=j>-1?j:null;this.$VideoWithLoopingPlayback1.addListener("finishPlayback",this.$VideoWithLoopingPlayback5);this.$VideoWithLoopingPlayback1.registerOption("Looping","isLooping",function(){return this.$VideoWithLoopingPlayback2}.bind(this),function(k){return this.$VideoWithLoopingPlayback6(k)}.bind(this))}h.prototype.isLooping=function(){"use strict";return this.$VideoWithLoopingPlayback2};h.prototype.getLoopCount=function(){"use strict";return this.$VideoWithLoopingPlayback3};h.prototype.getMaxLoopCount=function(){"use strict";return this.$VideoWithLoopingPlayback4};h.prototype.setMaxLoopCount=function(i){"use strict";this.$VideoWithLoopingPlayback4=i>-1?i:null};h.prototype.$VideoWithLoopingPlayback6=function(i){"use strict";this.$VideoWithLoopingPlayback2=i};f.exports=h}),null);
__d("AdBreakInsertionDisabledReason",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({BRANDED_CONTENT:"branded_content",BROADCAST:"broadcast",HAS_LIVE_AD_BREAKS:"has_live_ad_breaks",NO_PERMISSION:"no_permission",NOT_ONBOARDED:"not_onboarded",NOT_ORGANIC_UPLOAD:"not_organic_upload",VIDEO_TOO_SHORT:"video_too_short"})}),null);
__d("VideoInstreamUtils",["fbt","AdBreakInsertionDisabledReason","DateConsts","Set","VideoInstreamAdsConstants"],(function a(b,c,d,e,f,g,h){__p&&__p();var i={convertFormattedTimeToSeconds:function j(k){__p&&__p();var l=0,m=k.split(".");if(m.length>2)return null;if(m.length===2){if(m[1].length===0)return null;var n=m[1];while(n.length<3)n+="0";var o=Number(n);if(isNaN(o)||o<0||o>=c("DateConsts").MS_PER_SEC)return null;l+=o/c("DateConsts").MS_PER_SEC}var p=m[0].split(":");if(p.length>3)return null;for(var q=0;q<p.length;q++){if(p[q].length===0)return null;var r=Number(p[q]);if(isNaN(r)||r<0||r>=60)return null;l+=r*Math.pow(60,p.length-q-1)}return l},convertTimestampToFormattedString:function j(k){k=Math.round(k*c("DateConsts").MS_PER_SEC)/c("DateConsts").MS_PER_SEC;var l=Math.floor(k/c("DateConsts").SEC_PER_HOUR),m=k-l*c("DateConsts").SEC_PER_HOUR,n=Math.floor(m/c("DateConsts").SEC_PER_MIN),o=Math.floor(m-n*c("DateConsts").SEC_PER_MIN),p=Math.round(m*c("DateConsts").MS_PER_SEC),q=("0"+l).slice(-2),r=("0"+n).slice(-2),s=("0"+o).slice(-2),t=("00"+p).slice(-3),u="";if(l>0)u+=q+":";return u+=r+":"+s+"."+t},getMaxPossibleAdBreaks:function j(k,l){var m=Math.ceil(k)*c("DateConsts").MS_PER_SEC;if(m<c("VideoInstreamAdsConstants").AD_INSERTION_MINIMUM_VIDEO_LENGTH_MS)return 0;if(!l)return c("VideoInstreamAdsConstants").AD_INSERTION_MAXIMUM_NUMBER_OF_AD_BREAKS;var n=(m-c("VideoInstreamAdsConstants").AD_INSERTION_END_TIME_OFFSET_MS-c("VideoInstreamAdsConstants").AD_INSERTION_START_TIME_OFFSET_MS)/c("VideoInstreamAdsConstants").AD_INSERTION_INTERVAL_MS;return Math.max(0,Math.floor(n)+1)},getEligibleTimeSegments:function j(k,l,m){__p&&__p();var n=i.getMaxPossibleAdBreaks(l,m);if(n===0||!m&&k.length>=n)return[];var o=c("VideoInstreamAdsConstants").AD_INSERTION_START_TIME_OFFSET_MS/c("DateConsts").MS_PER_SEC,p=l-c("VideoInstreamAdsConstants").AD_INSERTION_END_TIME_OFFSET_MS/c("DateConsts").MS_PER_SEC,q=c("VideoInstreamAdsConstants").AD_INSERTION_INTERVAL_MS/c("DateConsts").MS_PER_SEC;if(k.length===0||!m)return[{start:o,end:p}];var r=[];k.forEach(function(s,t){__p&&__p();if(t===0){var u=s.timeOffset-q;if(u>=o)r.push({start:o,end:u})}if(t-1>=0){var v=k[t-1].timeOffset+q,w=s.timeOffset-q;if(v<=w)r.push({start:v,end:w})}if(t===k.length-1){var x=s.timeOffset+q;if(x<=p)r.push({start:x,end:p})}});return r},isInEligibleTimeSegments:function j(k,l,m,n){if(k===null||k===undefined)return false;var o=i.getEligibleTimeSegments(m,l,n);for(var p=0;p<o.length;p++)if(k>=o[p].start&&k<=o[p].end)return true;return false},isAdBreakViolatingInsertionRules:function j(k,l,m,n){__p&&__p();var o=k[l];if(o.timeOffset*c("DateConsts").MS_PER_SEC<c("VideoInstreamAdsConstants").AD_INSERTION_START_TIME_OFFSET_MS)return true;if((m-o.timeOffset)*c("DateConsts").MS_PER_SEC<c("VideoInstreamAdsConstants").AD_INSERTION_END_TIME_OFFSET_MS)return true;if(n)for(var p=0;p<k.length;p++){if(p===l||k[p].timeOffset>=o.timeOffset)continue;if((o.timeOffset-k[p].timeOffset)*c("DateConsts").MS_PER_SEC<c("VideoInstreamAdsConstants").AD_INSERTION_INTERVAL_MS)return true}return false},getAdBreakTabState:function j(k,l,m,n){var o=new(c("Set"))(k);if(i.getMaxPossibleAdBreaks(m,n)===0)o.add(c("AdBreakInsertionDisabledReason").VIDEO_TOO_SHORT);if(l)o.add(c("AdBreakInsertionDisabledReason").BRANDED_CONTENT);return this._getAdBreakTabStateFromDisabledReasons(o)},_getAdBreakTabStateFromDisabledReasons:function j(k){if(k.size===0)return{disabled:false,errorMessageHeader:null,errorMessageContent:null};else if(k.has(c("AdBreakInsertionDisabledReason").VIDEO_TOO_SHORT))return{disabled:true,errorMessageHeader:h._({"*":"Videos must be {insertion interval} seconds or longer"},[h.param("insertion interval",c("VideoInstreamAdsConstants").AD_INSERTION_MINIMUM_VIDEO_LENGTH,[0])]),errorMessageContent:h._("Your video is too short to include ad breaks.")};else if(k.has(c("AdBreakInsertionDisabledReason").NOT_ORGANIC_UPLOAD))return{disabled:true,errorMessageHeader:h._("Ad breaks are not available"),errorMessageContent:h._("Ad breaks can only be placed in original videos, not crossposted or reshared videos.")};else if(k.has(c("AdBreakInsertionDisabledReason").BRANDED_CONTENT))return{disabled:true,errorMessageHeader:h._("Ad breaks are not available"),errorMessageContent:h._("Ad breaks can't be used in this video because it contains tagged business partners.")};return{disabled:true,errorMessageHeader:h._("Ad breaks are not available"),errorMessageContent:null}}};f.exports=i}),null);
__d("FeedbackReactionType",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({NONE:0,LIKE:1,LOVE:2,WOW:3,HAHA:4,YAY:5,OUCH:6,SORRY:7,ANGER:8,JACKO:9,CONFUSED:10,DOROTHY:11,TOTO:12,SELFIE:13,FLAME:14,PLANE:15})}),null);
__d("VideoStereoFormat",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({MONO:"mono",LEFT_RIGHT:"left-right",TOP_BOTTOM:"top-bottom"})}),null);
__d("ReactCSSTransitionGroupChild",["React","ReactDOM","ReactTransitionEvents","fbjs/lib/CSSCore"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=17,i=c("React").createClass({displayName:"ReactCSSTransitionGroupChild",propTypes:{name:c("React").PropTypes.oneOfType([c("React").PropTypes.string,c("React").PropTypes.shape({enter:c("React").PropTypes.string,leave:c("React").PropTypes.string,active:c("React").PropTypes.string}),c("React").PropTypes.shape({enter:c("React").PropTypes.string,enterActive:c("React").PropTypes.string,leave:c("React").PropTypes.string,leaveActive:c("React").PropTypes.string,appear:c("React").PropTypes.string,appearActive:c("React").PropTypes.string})]).isRequired,appear:c("React").PropTypes.bool,enter:c("React").PropTypes.bool,leave:c("React").PropTypes.bool,appearTimeout:c("React").PropTypes.number,enterTimeout:c("React").PropTypes.number,leaveTimeout:c("React").PropTypes.number},transition:function j(k,l,m){__p&&__p();var n=c("ReactDOM").findDOMNode(this);if(!n){if(l)l();return}var o=this.props.name[k]||this.props.name+"-"+k,p=this.props.name[k+"Active"]||o+"-active",q=null,r=function r(s){if(s&&s.target!==n)return;clearTimeout(q);c("fbjs/lib/CSSCore").removeClass(n,o);c("fbjs/lib/CSSCore").removeClass(n,p);c("ReactTransitionEvents").removeEndEventListener(n,r);if(l)l()};c("fbjs/lib/CSSCore").addClass(n,o);this.queueClassAndNode(p,n);if(m){q=setTimeout(r,m);this.transitionTimeouts.push(q)}else c("ReactTransitionEvents").addEndEventListener(n,r)},queueClassAndNode:function j(k,l){this.classNameAndNodeQueue.push({className:k,node:l});if(!this.timeout)this.timeout=setTimeout(this.flushClassNameAndNodeQueue,h)},flushClassNameAndNodeQueue:function j(){if(this.isMounted())this.classNameAndNodeQueue.forEach(function(k){c("fbjs/lib/CSSCore").addClass(k.node,k.className)});this.classNameAndNodeQueue.length=0;this.timeout=null},componentWillMount:function j(){this.classNameAndNodeQueue=[];this.transitionTimeouts=[]},componentWillUnmount:function j(){if(this.timeout)clearTimeout(this.timeout);this.transitionTimeouts.forEach(function(k){clearTimeout(k)});this.classNameAndNodeQueue.length=0},componentWillAppear:function j(k){if(this.props.appear)this.transition("appear",k,this.props.appearTimeout);else k()},componentWillEnter:function j(k){if(this.props.enter)this.transition("enter",k,this.props.enterTimeout);else k()},componentWillLeave:function j(k){if(this.props.leave)this.transition("leave",k,this.props.leaveTimeout);else k()},render:function j(){return c("React").Children.only(this.props.children)}});f.exports=i}),null);
__d("ReactTransitionChildMapping",["React","emptyFunction","warning"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=c("emptyFunction"),i={getChildMapping:function j(k){if(!k)return k;var l={};c("React").Children.toArray(k).forEach(function(m){var n=m.key,o=l[n]===undefined;if(o)l[n]=m});return l},mergeChildMappings:function j(k,l){__p&&__p();k=k||{};l=l||{};function m(u){if(Object.prototype.hasOwnProperty.call(l,u))return l[u];else return k[u]}var n={},o=[];for(var p in k)if(Object.prototype.hasOwnProperty.call(l,p)){if(o.length){n[p]=o;o=[]}}else o.push(p);var q,r={};for(var s in l){if(Object.prototype.hasOwnProperty.call(n,s))for(q=0;q<n[s].length;q++){var t=n[s][q];r[n[s][q]]=m(t)}r[s]=m(s)}for(q=0;q<o.length;q++)r[o[q]]=m(o[q]);return r}};f.exports=i}),null);
__d("ReactTransitionGroup",["React","ReactTransitionChildMapping","fbjs/lib/emptyFunction"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i;h=babelHelpers.inherits(j,c("React").Component);i=h&&h.prototype;function j(){__p&&__p();var k,l;for(var m=arguments.length,n=Array(m),o=0;o<m;o++)n[o]=arguments[o];return l=(k=i.constructor).call.apply(k,[this].concat(n)),this.state={children:c("ReactTransitionChildMapping").getChildMapping(this.props.children)},this.performAppear=function(p){this.currentlyTransitioningKeys[p]=true;var q=this.refs[p];if(q.componentWillAppear)q.componentWillAppear(this.$ReactTransitionGroup1.bind(this,p));else this.$ReactTransitionGroup1(p)}.bind(this),this.$ReactTransitionGroup1=function(p){var q=this.refs[p];if(q.componentDidAppear)q.componentDidAppear();delete this.currentlyTransitioningKeys[p];var r=c("ReactTransitionChildMapping").getChildMapping(this.props.children);if(!r||!Object.prototype.hasOwnProperty.call(r,p))this.performLeave(p)}.bind(this),this.performEnter=function(p){this.currentlyTransitioningKeys[p]=true;var q=this.refs[p];if(q.componentWillEnter)q.componentWillEnter(this.$ReactTransitionGroup2.bind(this,p));else this.$ReactTransitionGroup2(p)}.bind(this),this.$ReactTransitionGroup2=function(p){var q=this.refs[p];if(q.componentDidEnter)q.componentDidEnter();delete this.currentlyTransitioningKeys[p];var r=c("ReactTransitionChildMapping").getChildMapping(this.props.children);if(!r||!Object.prototype.hasOwnProperty.call(r,p))this.performLeave(p)}.bind(this),this.performLeave=function(p){this.currentlyTransitioningKeys[p]=true;var q=this.refs[p];if(q.componentWillLeave)q.componentWillLeave(this.$ReactTransitionGroup3.bind(this,p));else this.$ReactTransitionGroup3(p)}.bind(this),this.$ReactTransitionGroup3=function(p){__p&&__p();var q=this.refs[p];if(q.componentDidLeave)q.componentDidLeave();delete this.currentlyTransitioningKeys[p];var r=c("ReactTransitionChildMapping").getChildMapping(this.props.children);if(r&&Object.prototype.hasOwnProperty.call(r,p))this.performEnter(p);else this.setState(function(s){var t=Object.assign({},s.children);delete t[p];return{children:t}})}.bind(this),l}j.prototype.componentWillMount=function(){this.currentlyTransitioningKeys={};this.keysToEnter=[];this.keysToLeave=[]};j.prototype.componentDidMount=function(){var k=this.state.children;for(var l in k)if(k[l])this.performAppear(l)};j.prototype.componentWillReceiveProps=function(k){__p&&__p();var l=c("ReactTransitionChildMapping").getChildMapping(k.children),m=this.state.children;this.setState({children:c("ReactTransitionChildMapping").mergeChildMappings(m,l)});var n;for(n in l){var o=m&&Object.prototype.hasOwnProperty.call(m,n);if(l[n]&&!o&&!this.currentlyTransitioningKeys[n])this.keysToEnter.push(n)}for(n in m){var p=l&&Object.prototype.hasOwnProperty.call(l,n);if(m[n]&&!p&&!this.currentlyTransitioningKeys[n])this.keysToLeave.push(n)}};j.prototype.componentDidUpdate=function(){var k=this.keysToEnter;this.keysToEnter=[];k.forEach(this.performEnter);var l=this.keysToLeave;this.keysToLeave=[];l.forEach(this.performLeave)};j.prototype.render=function(){__p&&__p();var k=[];for(var l in this.state.children){var m=this.state.children[l];if(m)k.push(c("React").cloneElement(this.props.childFactory(m),{ref:l,key:l}))}var n=Object.assign({},this.props);delete n.transitionLeave;delete n.transitionName;delete n.transitionAppear;delete n.transitionEnter;delete n.childFactory;delete n.transitionLeaveTimeout;delete n.transitionEnterTimeout;delete n.transitionAppearTimeout;delete n.component;return c("React").createElement(this.props.component,n,k)};j.displayName="ReactTransitionGroup";j.propTypes={component:c("React").PropTypes.any,childFactory:c("React").PropTypes.func};j.defaultProps={component:"span",childFactory:c("fbjs/lib/emptyFunction").thatReturnsArgument};f.exports=j}),null);
__d("ReactCSSTransitionGroup",["React","ReactCSSTransitionGroupChild","ReactTransitionGroup"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i;function j(l){var m="transition"+l+"Timeout",n="transition"+l;return function(o){if(o[n])if(o[m]==null)return new Error(m+" wasn't supplied to ReactCSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");else if(typeof o[m]!=="number")return new Error(m+" must be a number (in milliseconds)")}}h=babelHelpers.inherits(k,c("React").Component);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.$ReactCSSTransitionGroup1=function(q){return c("React").createElement(c("ReactCSSTransitionGroupChild"),{name:this.props.transitionName,appear:this.props.transitionAppear,enter:this.props.transitionEnter,leave:this.props.transitionLeave,appearTimeout:this.props.transitionAppearTimeout,enterTimeout:this.props.transitionEnterTimeout,leaveTimeout:this.props.transitionLeaveTimeout},q)}.bind(this),m}k.prototype.render=function(){return c("React").createElement(c("ReactTransitionGroup"),Object.assign({},this.props,{childFactory:this.$ReactCSSTransitionGroup1}))};k.displayName="ReactCSSTransitionGroup";k.propTypes={transitionName:c("ReactCSSTransitionGroupChild").propTypes.name,transitionAppear:c("React").PropTypes.bool,transitionEnter:c("React").PropTypes.bool,transitionLeave:c("React").PropTypes.bool,transitionAppearTimeout:j("Appear"),transitionEnterTimeout:j("Enter"),transitionLeaveTimeout:j("Leave")};k.defaultProps={transitionAppear:false,transitionEnter:true,transitionLeave:true};f.exports=k}),null);