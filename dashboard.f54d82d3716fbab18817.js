(this.webpackJsonp=this.webpackJsonp||[]).push([[13],{2030:function(e,t,n){"use strict";n.d(t,"b",(function(){return k})),n.d(t,"a",(function(){return y}));var a=n(0),r=n.n(a),i=n(1),o=n.n(i),s=n(3),l=n.n(s),c=n(29),u=n(22),p=n(21),h=n(5),d=n.n(h),f=n(83),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var y=function(e){function t(){return b(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return v(t,e),m(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.index,a=e.changeTab,i=e.title,o=e.className,s=e.updatedTab,c=e.disabled,u=e.subText,p=l()({"is-active":t},o);return"string"==typeof i&&i.indexOf(".")>0&&(i=d.a.translate(i)),this.props.collapsed?("string"==typeof u&&(u=u.trim()),"span"===i.type&&(i=i.props.children[2]),r.a.createElement("option",{value:n,"data-is-link-to":this.props.isLinkTo},i,s?"*":"",u&&" (",u&&u,u&&")")):r.a.createElement("li",{className:p,onClick:c?null:a.bind(this,n,this.props.isLinkTo)},r.a.createElement("a",null,r.a.createElement("span",{className:"tab-title"},i,s?"*":""),u&&r.a.createElement("div",{className:"tab-subtext"},u)))}}]),t}(r.a.Component);y.propTypes={changeTab:o.a.func,isActive:o.a.bool.isRequired,index:o.a.number.isRequired,className:o.a.string,isLinkTo:o.a.string,subText:o.a.oneOfType([o.a.object,o.a.string])},y.defaultProps={isActive:!1,index:0,className:"",isLinkTo:"",subText:null};var k=function(e){function t(e){b(this,t);var n=g(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab,width:window.innerWidth},n._setDimensions=n._setDimensions.bind(n),n}return v(t,e),m(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_changeTab",value:function(e,t){e!==this.state.activeTab&&(""!==t&&this.props.history.push(t),this.props.setting&&u.a.changeViewSetting(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},this.props.setting,e)),this.setState({activeTab:e}),this.props.onChangeTab&&this.props.onChangeTab(e))}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.contentClass,i=t.tabsClass,o=t.style,s=t.segmented,c=this.state.width<900&&r.a.Children.count(n)>2,u=null,p=r.a.Children.map(n,(function(t,n){if(!t)return null;if(c&&t.props.disabled)return null;var a=n===e.state.activeTab;return a&&(u=t.props.children),r.a.cloneElement(t,{collapsed:c,isActive:a,changeTab:e._changeTab.bind(e),index:n})})).filter((function(e){return null!==e}));return u||(u=p[0].props.children),r.a.createElement("div",{className:l()(this.props.actionButtons?"with-buttons":"",this.props.className)},r.a.createElement("div",{className:"service-selector"},r.a.createElement("ul",{style:o,className:l()("button-group no-margin",i,{segmented:s})},c?r.a.createElement("li",{style:{paddingLeft:10,paddingRight:10,minWidth:"15rem"}},r.a.createElement("select",{value:this.state.activeTab,style:{marginTop:10,marginBottom:10},className:"bts-select",onChange:function(t){var n=parseInt(t.target.value,10);e._changeTab(n,t.target[n].attributes["data-is-link-to"].value)}},p)):p,this.props.actionButtons?r.a.createElement("li",{className:"tabs-action-buttons"},this.props.actionButtons):null)),r.a.createElement("div",{className:l()("tab-content",a)},u))}}]),t}(r.a.Component);k.propTypes={setting:o.a.string,defaultActiveTab:o.a.number,segmented:o.a.bool},k.defaultProps={active:0,defaultActiveTab:0,segmented:!0,contentClass:"",style:{}},k=Object(c.a)(k,{listenTo:function(){return[p.a]},getProps:function(){return{viewSettings:p.a.getState().viewSettings}}}),k=Object(f.g)(k)},2038:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(5),o=n.n(i),s=n(4),l=(n(2063),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}),c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={pageSize:e.pageSize},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),u(t,[{key:"render",value:function(){var e=this,t=this.state.pageSize,n=this.props,a=n.header,i=n.rows,u=n.extraRow,p=n.loading,h=[10,20,30,40,50,100].filter((function(t){return t<Math.max(e.props.pageSize,i.length)}));h.push(Math.max(this.props.pageSize,i.length));var d=null;return null!==this.props.label?d=function(t){return o.a.translate(e.props.label,{count:t})}:"string"==typeof this.props.totalLabel?d=function(t){return o.a.translate(e.props.totalLabel,{count:t})}:"object"===c(this.props.totalLabel)&&(d=function(t){return o.a.translate(e.props.totalLabel.key,l({count:t},e.props.totalLabel.args))}),r.a.createElement("div",{className:"paginated-list",style:this.props.style},r.a.createElement(s.Table,{loading:p,dataSource:i,uns:!0,columns:Array.isArray(a)?a:[],footer:function(){return u||r.a.createElement("span",null," ")},onChange:this.props.toggleSortOrder,pagination:{showSizeChanger:!0,hideOnSinglePage:!1,defaultPageSize:t,pageSizeOptions:h.map((function(e){return e.toString()})),showTotal:function(e,t){return d(e)}},rowClassName:null==this.props.rowClassName?void 0:function(t,n){return e.props.rowClassName(t,n)},rowSelection:this.props.rowSelection}),this.props.children)}}]),t}(r.a.Component);p.defaultProps={rows:[],pageSize:20,className:"table",extraRow:null,style:{paddingBottom:"1rem"},loading:!1,totalLabel:"utility.total_x_items",label:null},t.a=p},2063:function(e,t,n){},2700:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(29),o=n(42),s=n(618),l=n(23),c=n(21),u=n(2030),p=n(13),h=n(14),d=n(200),f=n(6),m=n(2),b=n.n(m),g=n(3),v=n.n(g),y=n(22),k=n(2038),w=n(4),_=n(34),E=n(95),S=n(35),O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},T=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var C=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));for(var n in e.sortFunctions={alphabetic:function(e,t,n){return e.key>t.key?n?1:-1:e.key<t.key?n?-1:1:0},priceValue:function(e,t){var n=e.price.props.children,a=t.price.props.children;return n&&a?this.sort(n,a):this.sortFunctions.alphabetic(e,t,!0)},volumeValue:function(e,t){var n=e.volume||0,a=t.volume||0,r=0;return n&&a&&(r=n-a),0==r?this.sortFunctions.alphabetic(e,t,!0):r},changeValue:function(e,t){var n=parseFloat(e.hour_24),a=parseFloat(t.hour_24),r=0;return n&&a&&!isNaN(n)&&!isNaN(a)&&(r=n-a),0==r?this.sortFunctions.alphabetic(e,t,!0):r}},e.state={filter:"",showFlip:!1,showHidden:!1,markets:[]},e.update=e.update.bind(e),e.sortFunctions)e.sortFunctions[n]=e.sortFunctions[n].bind(e);return e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),T(t,[{key:"componentWillReceiveProps",value:function(e){this.update(e)}},{key:"componentWillMount",value:function(){this.update(),f.ChainStore.subscribe(this.update)}},{key:"componentWillUnmount",value:function(){f.ChainStore.unsubscribe(this.update)}},{key:"update",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=t||this.props,a=n.forceDirection;if(n.markets&&n.markets.size>0){var r=n.markets.toArray().map((function(t){var a=f.ChainStore.getAsset(t.quote),r=f.ChainStore.getAsset(t.base);if(!r||!a)return null;var i=t.base+"_"+t.quote;return{key:i,inverted:void 0,quote:t.quote,base:t.base,basePrecision:r.get("precision"),isHidden:n.hiddenMarkets.includes(i),isFavorite:n.isFavorite,marketStats:n.allMarketStats.get(i,{}),isStarred:e.props.starredMarkets.has(i)}})).filter((function(e){return null!==e}));this.setState({showFlip:a,markets:r})}}},{key:"_toggleShowHidden",value:function(e){this.state.showHidden!==e&&this.setState({showHidden:e})}},{key:"_handleFilterInput",value:function(e){e.preventDefault(),this.setState({filter:e.target.value.toUpperCase()})}},{key:"_handleHide",value:function(e,t){if(this.props.handleHide)return this.props.handleHide(e,t);y.a.hideMarket(e.key,t)}},{key:"_handleFlip",value:function(e,t){if(this.props.handleFlip)return this.props.handleFlip(e,t);var n,a,r;y.a.changeMarketDirection((n={},a=e.key,r=t,a in n?Object.defineProperty(n,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[a]=r,n))}},{key:"sort",value:function(e,t){var n=function(e){return(e=e.replace(/\,/g,"")).includes("k")&&(e=1e3*e.replace(/k/g,"")),e.includes("M")&&(e=1e3*e.replace(/M/g,"")*1e3),e};return e=n(e),t=n(t),null===e&&null!==t?1:null!==e&&null===t?-1:e-t}},{key:"getHeader",value:function(){var e=this.state,t=e.showFlip,n=e.showHidden;return[{dataIndex:"star",align:"right",width:"75px",render:function(e){return r.a.createElement("span",{style:{whiteSpace:"nowrap",cursor:"pointer"}},e)}},{title:r.a.createElement(b.a,{content:"account.asset"}),dataIndex:"asset",render:function(e){return r.a.createElement("span",{style:{whiteSpace:"nowrap"}},e)}},this.props.isFavorite?{}:{title:r.a.createElement(b.a,{content:"account.user_issued_assets.quote_name"}),dataIndex:"quote_name",align:"right",render:function(e){return r.a.createElement("span",{style:{whiteSpace:"nowrap"}},e)}},{title:r.a.createElement(b.a,{content:"exchange.price"}),dataIndex:"price",align:"right",sorter:this.sortFunctions.priceValue,render:function(e){return r.a.createElement("span",{style:{whiteSpace:"nowrap"}},e)}},{title:r.a.createElement(b.a,{content:"account.hour_24_short"}),dataIndex:"hour_24",align:"right",sorter:this.sortFunctions.changeValue,render:function(e,t,n){var a=parseFloat(t.hour_24)>0?"change-up":parseFloat(t.hour_24)<0?"change-down":"";return r.a.createElement("span",{style:{whiteSpace:"nowrap",textAlign:"right"},className:a},t.hour_24,"%")}},{title:r.a.createElement(b.a,{content:"exchange.volume"}),dataIndex:"volume",align:"right",sorter:this.sortFunctions.volumeValue,defaultSortOrder:"descend",render:function(e,t,n){return r.a.createElement("span",{style:{whiteSpace:"nowrap"}},h.a.format_volume(t.volume,t.basePrecision))}},t?{title:r.a.createElement(b.a,{content:"exchange.flip"}),dataIndex:"flip",render:function(e){return r.a.createElement("span",{className:"column-hide-small",style:{whiteSpace:"nowrap"}},e)}}:{},{title:r.a.createElement(b.a,{content:n?"account.perm.show":"exchange.hide"}),dataIndex:"hide",render:function(e){return r.a.createElement("span",{style:{whiteSpace:"nowrap"}},e)}}]}},{key:"_setInterval",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=e||this.props,n=t.base,a=t.quote;this.statsChecked=new Date,this.statsInterval=MarketsActions.getMarketStatsInterval(35e3,n,a)}},{key:"_clearInterval",value:function(){this.statsInterval&&this.statsInterval()}},{key:"_onError",value:function(e){this.state.imgError||this.setState({imgError:!0})}},{key:"_toggleFavoriteMarket",value:function(e,t){var n=e+"_"+t;this.props.starredMarkets.has(n)?y.a.removeStarMarket(e,t):y.a.addStarMarket(e,t)}},{key:"getTableData",value:function(e){var t=e.base,n=e.quote,a=e.marketStats,i=e.isHidden,o=e.inverted,s=e.basePrecision;var l=function(e){if("OPEN.BTC"===e||"GDEX.BTC"===e)return e;if(e.startsWith("RUDEX."))return e;var t=e.split(".");return 2===t.length?t[1]:t[0]}(n),c=n+"_"+t,u=this.props.starredMarkets.has(c)?"gold-star":"grey-star",p=this.state.imgError?"/asset-symbols/"+l.toLowerCase()+".png":"/asset-symbols/bts.png";return{key:c,star:r.a.createElement("div",{onClick:this._toggleFavoriteMarket.bind(this,n,t)},r.a.createElement(_.a,{style:{cursor:"pointer"},className:u,name:"fi-star",title:"icons.fi_star.market"})),asset:r.a.createElement(S.b,{to:"/market/"+n+"_"+t},r.a.createElement("img",{className:"column-hide-small",onError:this._onError.bind(this,l),style:{maxWidth:20,marginRight:10},src:p}),r.a.createElement(E.a,{dataPlace:"top",name:n})," ",this.props.isFavorite?r.a.createElement("span",null,": ",r.a.createElement(E.a,{dataPlace:"top",name:t})):null),quote_name:this.props.isFavorite?null:r.a.createElement("span",{style:{textAlign:"right"}},r.a.createElement(E.a,{noTip:!0,name:t})),price:r.a.createElement("div",{className:"column-hide-small",style:{textAlign:"right"}},a&&a.price?h.a.price_text(a.price.toReal(!0),f.ChainStore.getAsset(n),f.ChainStore.getAsset(t)):null),hour_24:a&&a.change&&"0.00"!==a.change?a.change:0,volume:a&&a.volumeQuote?a.volumeQuote:0,flip:null!==o&&this.props.isFavorite?r.a.createElement("span",{className:"column-hide-small"},r.a.createElement("a",{onClick:this._handleFlip.bind(this,e,!e.inverted)},r.a.createElement(_.a,{name:"shuffle",title:"icons.shuffle"}))):null,hide:r.a.createElement(w.Tooltip,{title:i?r.a.createElement(b.a,{content:"icons.plus_circle.show_market"}):r.a.createElement(b.a,{content:"icons.cross_circle.hide_market"}),style:{marginRight:0},onClick:this._handleHide.bind(this,e,!e.isHidden)},r.a.createElement(_.a,{name:i?"plus-circle":"cross-circle",title:i?"icons.plus_circle.show_market":"icons.cross_circle.hide_market",className:"icon-14px"})),basePrecision:s}}},{key:"render",value:function(){var e=this,t=this.state,n=t.markets,a=t.showHidden,i=t.filter,o=n.filter((function(t){return!(!i&&!t.isStarred)||(!(e.props.onlyLiquid||t.marketStats&&"volumeBase"in t.marketStats)||(!!t.marketStats.volumeBase||!1))})).map((function(t){var n=!0;if(t.isHidden!==e.state.showHidden)n=!1;else if(i){var a=f.ChainStore.getAsset(t.quote),r=f.ChainStore.getAsset(t.base),o=h.a.replaceName(a).isBitAsset,s=h.a.replaceName(r).isBitAsset,l=t.quote,c=t.base;if(o&&(l="bit"+l),s&&(c="bit"+c),i.includes(":")){var u=i.split(":")[0].trim(),p=i.split(":")[1].trim();n=l.toLowerCase().includes(String(u).toLowerCase())&&c.toLowerCase().includes(String(p).toLowerCase())}else n=l.toLowerCase().includes(String(i).toLowerCase())||c.toLowerCase().includes(String(i).toLowerCase())}return n?e.getTableData(O({},t)):null})).filter((function(e){return!!e}));return r.a.createElement("div",null,r.a.createElement("div",{className:"header-selector"},r.a.createElement("div",{className:"filter inline-block"},r.a.createElement(w.Input,{type:"text",placeholder:"Filter...",onChange:this._handleFilterInput.bind(this),addonAfter:r.a.createElement(w.Icon,{type:"search"})})),r.a.createElement("div",{className:"selector inline-block",style:{position:"relative",top:"6px"}},r.a.createElement("div",{className:v()("inline-block",{inactive:a}),onClick:this._toggleShowHidden.bind(this,!1)},r.a.createElement(b.a,{content:"account.hide_hidden"})),r.a.createElement("div",{className:v()("inline-block",{inactive:!a}),onClick:this._toggleShowHidden.bind(this,!0)},r.a.createElement(b.a,{content:"account.show_hidden"}))),r.a.createElement("div",{style:{paddingTop:"0.5rem"}},r.a.createElement("label",{style:{margin:"3px 0 0",width:"fit-content"}},r.a.createElement("input",{style:{position:"relative",top:3},className:"no-margin",type:"checkbox",checked:this.props.onlyLiquid,onChange:function(){y.a.changeViewSetting({onlyLiquid:!e.props.onlyLiquid})}}),r.a.createElement("span",{style:{paddingLeft:"0.4rem"}},r.a.createElement(b.a,{content:"exchange.show_only_liquid"}))))),r.a.createElement(k.a,{style:{paddingLeft:0,paddingRight:0},className:"table dashboard-table table-hover",header:this.getHeader(),rows:o.length?o:[],pageSize:20,label:"utility.total_x_markets",leftPadding:"1.5rem"}))}}]),t}(r.a.Component),P=Object(i.a)(C,{listenTo:function(){return[c.a,d.a]},getProps:function(){var e=c.a.getState();return{marketDirections:e.marketDirections,hiddenMarkets:e.hiddenMarkets,allMarketStats:d.a.getState().allMarketStats,starredMarkets:c.a.getState().starredMarkets,onlyLiquid:c.a.getState().viewSettings.get("onlyLiquid",!0)}}}),j=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function A(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var F=function(e){function t(){return N(this,t),x(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return A(t,e),j(t,[{key:"render",value:function(){return r.a.createElement(P,{markets:this.props.starredMarkets,forceDirection:!0,isFavorite:!0})}}]),t}(r.a.Component);F=Object(i.a)(F,{listenTo:function(){return[c.a]},getProps:function(){return{starredMarkets:c.a.getState().starredMarkets}}});var M=function(e){function t(){N(this,t);var e=x(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),n=p.Apis.instance().chain_id;return n&&(n=n.substr(0,8)),e.state={chainID:n,markets:[]},e._getMarkets=e._getMarkets.bind(e),e.update=e.update.bind(e),e}return A(t,e),j(t,[{key:"_getMarkets",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props,n=e.chainID;return"4018d784"===n?t.markets:[["TEST","PEG.FAKEUSD"],["TEST","BTWTY"]]}},{key:"shouldComponentUpdate",value:function(e){return!h.a.are_equal_shallow(e,this.props)}},{key:"componentWillMount",value:function(){this.update()}},{key:"componentWillReceiveProps",value:function(e){this.update(e)}},{key:"update",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=this._getMarkets(this.state,e);t=t.filter((function(t){return e.quotes[0]===t.base}));for(var n=1;n<e.quotes.length;n++)t.forEach((function(a){var r={quote:a.quote,base:e.quotes[n]},i=r.quote+"_"+r.base;r.quote===r.base||t.has(i)||(t=t.set(i,r))}));this.setState({markets:t})}},{key:"render",value:function(){return r.a.createElement(P,{markets:this.state.markets,showFlip:!1,isFavorite:!1})}}]),t}(r.a.Component);M=Object(i.a)(M,{listenTo:function(){return[d.a,c.a]},getProps:function(){var e=c.a.getState().userMarkets,t=c.a.getState().defaultMarkets;return e.size&&e.forEach((function(e,n){t.has(n)||(t=t.set(n,e))})),{markets:t}}});!function(e){function t(){return N(this,t),x(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}A(t,e),j(t,[{key:"render",value:function(){return r.a.createElement(P,{markets:[]})}}])}(r.a.Component);var L=n(89),q=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function H(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var I=function(e){function t(){return H(this,t),D(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),q(t,[{key:"render",value:function(){var e=this.props,t=e.myActiveAccounts,n=e.myHiddenAccounts,a=e.accountsReady,i=e.passwordAccount,l=e.preferredBases;return a?t.size+n.size+(i?1:0)?r.a.createElement("div",{className:"grid-block page-layout"},r.a.createElement("div",{className:"grid-block no-padding"},r.a.createElement("div",{className:"grid-content app-tables no-padding",ref:"appTables"},r.a.createElement("div",{className:"content-block small-12"},r.a.createElement("div",{className:"tabs-container generic-bordered-box"},r.a.createElement(u.b,{defaultActiveTab:1,segmented:!1,setting:"dashboardTab",className:"account-tabs",tabsClass:"account-overview no-padding bordered-header content-block"},r.a.createElement(u.a,{title:"dashboard.starred_markets"},r.a.createElement(F,null)),l.map((function(e){var t=r.a.createElement("span",null,r.a.createElement("img",{className:"column-hide-small",style:{maxWidth:30,marginRight:5},src:"/asset-symbols/"+e.replace(/^BTC/,"OPEN.BTC").toLowerCase()+".png"})," ",e);return r.a.createElement(u.a,{key:e,title:t},r.a.createElement(M,{quotes:[e].concat(Object(L.d)([e]))}))})))))))):r.a.createElement(s.a,null):r.a.createElement(o.a,null)}}]),t}(r.a.Component);t.default=Object(i.a)(I,{listenTo:function(){return[l.a,c.a]},getProps:function(){var e=l.a.getState(),t=e.myActiveAccounts,n=e.myHiddenAccounts,a=e.passwordAccount,r=e.accountsLoaded,i=e.refsLoaded;return{myActiveAccounts:t,myHiddenAccounts:n,passwordAccount:a,accountsReady:r&&i,preferredBases:c.a.getState().preferredBases}}})}}]);
//# sourceMappingURL=dashboard.js.map