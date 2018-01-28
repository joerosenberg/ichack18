if (self.CavalryLogger) { CavalryLogger.start_js(["aNpa1"]); }

__d("MessengerTypeaheadView.react",["cx","Bootloader","immutable","MessengerContactAdapters","MessengerContactList.react","MessengerSearchFunnelLoggerConstants","MessengerTypeaheadUtils","React","joinClasses"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=c("React").PropTypes;i=babelHelpers.inherits(l,c("React").PureComponent);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.state={isExpectingEntriesUpdate:false},this.$MessengerTypeaheadView1=function(r,event){this.props.onSelect&&this.props.onSelect(r,event)}.bind(this),n}l.prototype.componentDidUpdate=function(m,n){__p&&__p();if(m.isLoading&&!this.props.isLoading){this.$MessengerTypeaheadView2({name:c("MessengerSearchFunnelLoggerConstants").FETCHED_STATE_IMPRESSION_LIST,queryString:this.props.queryString,entries:this.props.entries.map(function(o){return o.getUniqueID()})});this.setState({isExpectingEntriesUpdate:false})}else if(m.isLoading&&this.state.isExpectingEntriesUpdate){this.$MessengerTypeaheadView2({name:c("MessengerSearchFunnelLoggerConstants").LOADING_STATE_IMPRESSION_LIST,queryString:this.props.queryString,entries:this.props.entries.map(function(o){return o.getUniqueID()})});this.setState({isExpectingEntriesUpdate:false})}if(m.queryString!==this.props.queryString)this.setState({isExpectingEntriesUpdate:true})};l.prototype.render=function(){return c("React").createElement(c("MessengerContactList.react"),{controlleeID:this.props.controlleeID,className:c("joinClasses")(this.props.className,"_4p-s"),contactAdapter:c("MessengerContactAdapters").fromSearchableEntry,hasHoverState:this.props.hasHoverState,highlightedEntry:this.props.highlightedEntry,isLoading:this.props.isLoading,listSections:c("MessengerTypeaheadUtils").buildListSections(this.props.entries,this.props.queryString),onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight,onScrollIntoView:this.props.onScrollIntoView,onSelect:this.$MessengerTypeaheadView1,originalEntryIDs:this.props.originalEntryIDs,invitedEntryIDs:this.props.invitedEntryIDs,queryString:this.props.queryString,selectedEntryIDs:this.props.selectedEntryIDs,showPresence:false,viewer:this.props.viewer})};l.prototype.$MessengerTypeaheadView2=function(event){c("Bootloader").loadModules(["MessengerSearchFunnelLogger"],function(m){switch(event.name){case c("MessengerSearchFunnelLoggerConstants").LOADING_STATE_IMPRESSION_LIST:m.logLoadingStateQuery(c("MessengerSearchFunnelLoggerConstants").NAME,event.queryString,event.entries);break;case c("MessengerSearchFunnelLoggerConstants").FETCHED_STATE_IMPRESSION_LIST:m.logUpdateQuery(c("MessengerSearchFunnelLoggerConstants").NAME,c("MessengerSearchFunnelLoggerConstants").FETCHED_STATE_IMPRESSION_LIST,event.queryString,event.entries);break}},"MessengerTypeaheadView.react")};l.propTypes={controlleeID:k.string,entries:k.array.isRequired,hasHoverState:k.bool,highlightedEntry:k.object,isLoading:k.bool,onHighlight:k.func,onRenderHighlight:k.func,onScrollIntoView:k.func,onSelect:k.func,originalEntryIDs:k.instanceOf(c("immutable").Set),invitedEntryIDs:k.instanceOf(c("immutable").Set),queryString:k.string,selectedEntryIDs:k.instanceOf(c("immutable").Set),viewer:k.string.isRequired};f.exports=l}),null);
__d("XPlacesMapController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/places/map/",{id:{type:"Int"},latitude:{type:"Float",defaultValue:0},longitude:{type:"Float",defaultValue:0},address:{type:"StringVector",defaultValue:[]},name:{type:"String"},zoom:{type:"Int"},message_location_id:{type:"Int"},message_live_location_id:{type:"Int"},polygon_page_id:{type:"Int"},dialog_width:{type:"Int"},map_width:{type:"Int"},map_height:{type:"Int"},hide_footer:{type:"Int"},__asyncDialog:{type:"Int"}})}),null);