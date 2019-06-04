(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1959:function(e,t,n){"use strict";n.d(t,"b",function(){return w}),n.d(t,"a",function(){return y});var a=n(0),r=n.n(a),o=n(1),s=n.n(o),i=n(3),c=n.n(i),l=n(31),u=n(26),d=n(27),p=n(4),h=n.n(p),m=n(2243),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var y=function(e){function t(){return f(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return v(t,r.a.Component),g(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.index,a=e.changeTab,o=e.title,s=e.className,i=e.updatedTab,l=e.disabled,u=e.subText,d=c()({"is-active":t},s);return"string"==typeof o&&o.indexOf(".")>0&&(o=h.a.translate(o)),this.props.collapsed?("string"==typeof u&&(u=u.trim()),"span"===o.type&&(o=o.props.children[2]),r.a.createElement("option",{value:n,"data-is-link-to":this.props.isLinkTo},o,i?"*":"",u&&" (",u&&u,u&&")")):r.a.createElement("li",{className:d,onClick:l?null:a.bind(this,n,this.props.isLinkTo)},r.a.createElement("a",null,r.a.createElement("span",{className:"tab-title"},o,i?"*":""),u&&r.a.createElement("div",{className:"tab-subtext"},u)))}}]),t}();y.propTypes={changeTab:s.a.func,isActive:s.a.bool.isRequired,index:s.a.number.isRequired,className:s.a.string,isLinkTo:s.a.string,subText:s.a.oneOfType([s.a.object,s.a.string])},y.defaultProps={isActive:!1,index:0,className:"",isLinkTo:"",subText:null};var w=function(e){function t(e){f(this,t);var n=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab,width:window.innerWidth},n._setDimensions=n._setDimensions.bind(n),n}return v(t,r.a.Component),g(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_changeTab",value:function(e,t){e!==this.state.activeTab&&(""!==t&&this.props.history.push(t),this.props.setting&&u.a.changeViewSetting(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},this.props.setting,e)),this.setState({activeTab:e}),this.props.onChangeTab&&this.props.onChangeTab(e))}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.contentClass,o=t.tabsClass,s=t.style,i=t.segmented,l=this.state.width<900&&r.a.Children.count(n)>2,u=null,d=r.a.Children.map(n,function(t,n){if(!t)return null;if(l&&t.props.disabled)return null;var a=n===e.state.activeTab;return a&&(u=t.props.children),r.a.cloneElement(t,{collapsed:l,isActive:a,changeTab:e._changeTab.bind(e),index:n})}).filter(function(e){return null!==e});return u||(u=d[0].props.children),r.a.createElement("div",{className:c()(this.props.actionButtons?"with-buttons":"",this.props.className)},r.a.createElement("div",{className:"service-selector"},r.a.createElement("ul",{style:s,className:c()("button-group no-margin",o,{segmented:i})},l?r.a.createElement("li",{style:{paddingLeft:10,paddingRight:10,minWidth:"15rem"}},r.a.createElement("select",{value:this.state.activeTab,style:{marginTop:10,marginBottom:10},className:"bts-select",onChange:function(t){var n=parseInt(t.target.value,10);e._changeTab(n,t.target[n].attributes["data-is-link-to"].value)}},d)):d,this.props.actionButtons?r.a.createElement("li",{className:"tabs-action-buttons"},this.props.actionButtons):null)),r.a.createElement("div",{className:c()("tab-content",a)},u))}}]),t}();w.propTypes={setting:s.a.string,defaultActiveTab:s.a.number,segmented:s.a.bool},w.defaultProps={active:0,defaultActiveTab:0,segmented:!0,contentClass:"",style:{}},w=Object(l.a)(w,{listenTo:function(){return[d.a]},getProps:function(){return{viewSettings:d.a.getState().viewSettings}}}),w=Object(m.a)(w)},2246:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),s=n.n(o),i=n(14),c=n(2),l=n.n(c),u=n(31),d=n(27),p=n(109),h=n(39),m=n(42),g=n(26),f=n(40),b=n(23),v=n(5),y=n(580),w=n(25),_=n(4),E=n.n(_),A=n(19),k=n(2243),S=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var x=function(e){function t(e){T(this,t);var n=C(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={inverseSort:e.viewSettings.get("dashboardSortInverse",!0),sortBy:e.viewSettings.get("dashboardSort","star"),dashboardFilter:e.viewSettings.get("dashboardFilter","")},n}return O(t,r.a.Component),S(t,[{key:"shouldComponentUpdate",value:function(e,t){return!i.a.are_equal_shallow(e.accounts,this.props.accounts)||e.isContactsList!==this.props.isContactsList||e.showMyAccounts!==this.props.showMyAccounts||e.width!==this.props.width||e.showIgnored!==this.props.showIgnored||e.locked!==this.props.locked||e.passwordAccount!==this.props.passwordAccount||!i.a.are_equal_shallow(e.starredAccounts,this.props.starredAccounts)||!i.a.are_equal_shallow(t,this.state)}},{key:"_onStar",value:function(e,t,n){n.preventDefault(),t?f.a.removeStarAccount(e):f.a.addStarAccount(e)}},{key:"_goAccount",value:function(e,t){this.props.history.push("/account/"+e),g.a.changeViewSetting({overviewTab:t})}},{key:"_createAccount",value:function(){this.props.history.push("/create-account/wallet")}},{key:"_onFilter",value:function(e){this.setState({dashboardFilter:e.target.value.toLowerCase()}),g.a.changeViewSetting({dashboardFilter:e.target.value.toLowerCase()})}},{key:"_setSort",value:function(e){var t=e===this.state.sortBy?!this.state.inverseSort:this.state.inverseSort;this.setState({sortBy:e,inverseSort:t}),g.a.changeViewSetting({dashboardSort:e,dashboardSortInverse:t})}},{key:"_onAddContact",value:function(e){f.a.addAccountContact(e)}},{key:"_onRemoveContact",value:function(e){f.a.removeAccountContact(e)}},{key:"_renderList",value:function(e,t){var n=this,a=this.props,o=a.width,c=a.starredAccounts,l=a.isContactsList,u=a.passwordAccount,d=this.state,p=d.dashboardFilter,h=d.sortBy,m=d.inverseSort,g=s.a.List();return e.filter(function(e){if(!e)return!1;var t=e.get("name"),a=w.a.isMyAccount(e)||t===u;return!!l||a===n.props.showMyAccounts}).filter(function(e){return!!e&&-1!==e.get("name").toLowerCase().indexOf(p)}).sort(function(e,t){switch(h){case"star":return function(e,t,n,a){var r=e.get("name"),o=t.get("name"),s=a.has(r),c=a.has(o);return s&&!c?n?-1:1:c&&!s?n?1:-1:r>o?n?1:-1:r<o?n?-1:1:i.a.sortText(r,o,!n)}(e,t,m,c);case"name":return i.a.sortText(e.get("name"),t.get("name"),m)}}).map(function(e){if(e){var a={},s={},i={};g=g.clear();var d=e.get("name"),p=e.get("lifetime_referrer_name")===d;e.get("orders")&&e.get("orders").forEach(function(e,t){var n=v.ChainStore.getObject(e);if(n){var a=n.getIn(["sell_price","base","asset_id"]);i[a]?i[a]+=parseInt(n.get("for_sale"),10):i[a]=parseInt(n.get("for_sale"),10)}}),e.get("call_orders")&&e.get("call_orders").forEach(function(e,t){var n=v.ChainStore.getObject(e);if(n){var r=n.getIn(["call_price","base","asset_id"]);a[r]?a[r]+=parseInt(n.get("collateral"),10):a[r]=parseInt(n.get("collateral"),10);var o=n.getIn(["call_price","quote","asset_id"]);s[o]?s[o]+=parseInt(n.get("debt"),10):s[o]=parseInt(n.get("debt"),10)}});var h=e.get("balances");e.get("balances")&&h.forEach(function(e){var t=v.ChainStore.getObject(e);if(!t||!t.get("balance"))return null;g=g.push(e)});var m=w.a.isMyAccount(e)||d===u,f=c.has(d),_=f?"gold-star":"grey-star";return r.a.createElement("tr",{key:d},r.a.createElement("td",{className:"clickable",onClick:n._onStar.bind(n,d,f)},r.a.createElement(b.a,{className:_,name:"fi-star",title:"icons.fi_star.account"})),l?t&&r.a.createElement("td",{onClick:n._onAddContact.bind(n,d)},r.a.createElement(b.a,{name:"plus-circle",title:"icons.plus_circle.add_contact"}))||r.a.createElement("td",{onClick:n._onRemoveContact.bind(n,d)},r.a.createElement(b.a,{name:"minus-circle",title:"icons.minus_circle.remove_contact"})):null,r.a.createElement("td",{style:{textAlign:"left"}},e.get("id")),r.a.createElement("td",{style:{textAlign:"left",paddingLeft:10},onClick:n._goAccount.bind(n,d,0),className:"clickable"+(m?" my-account":"")},r.a.createElement("span",{className:p?"lifetime":""},d)),r.a.createElement("td",{className:"clickable",onClick:n._goAccount.bind(n,d,1),style:{textAlign:"right"}},r.a.createElement(y.a,{noTip:!0,balances:[],openOrders:i})),o>=750?r.a.createElement("td",{className:"clickable",onClick:n._goAccount.bind(n,d,2),style:{textAlign:"right"}},r.a.createElement(y.a,{noTip:!0,balances:[],collateral:a})):null,o>=1200?r.a.createElement("td",{className:"clickable",onClick:n._goAccount.bind(n,d,2),style:{textAlign:"right"}},r.a.createElement(y.a,{noTip:!0,balances:[],debt:s})):null,r.a.createElement("td",{className:"clickable",onClick:n._goAccount.bind(n,d,0),style:{textAlign:"right"}},r.a.createElement(y.a,{noTip:!0,balances:g,collateral:a,debt:s,openOrders:i})))}})}},{key:"render",value:function(){var e=this.props,t=e.width,n=e.showIgnored,a=e.isContactsList,o=this.state.dashboardFilter,s=this._renderList(this.props.accounts),i=this._renderList(this.props.ignoredAccounts,!0),c=a?E.a.translate("explorer.accounts.filter_contacts"):E.a.translate("explorer.accounts.filter");c+="...";var u=!!A.a.getWallet();return r.a.createElement("div",{style:this.props.style},this.props.compact?null:r.a.createElement("section",{style:{paddingTop:"1rem",paddingLeft:"2rem"}},r.a.createElement("input",{placeholder:c,style:{maxWidth:"20rem",display:"inline-block"},type:"text",value:o,onChange:this._onFilter.bind(this)}),u&&!a?r.a.createElement("div",{onClick:this._createAccount.bind(this),style:{display:"inline-block",marginLeft:5,marginBottom:"1rem"},className:"button small"},r.a.createElement(l.a,{content:"header.create_account"})):null,i&&i.length?r.a.createElement("div",{onClick:this.props.onToggleIgnored,style:{display:"inline-block",float:"right",marginRight:"20px"},className:"button small"},r.a.createElement(l.a,{content:"account."+(this.props.showIgnored?"hide_ignored":"show_ignored")})):null),r.a.createElement("table",{className:"table table-hover dashboard-table",style:{fontSize:"0.85rem"}},this.props.compact?null:r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{onClick:this._setSort.bind(this,"star"),className:"clickable"},r.a.createElement(b.a,{className:"grey-star",name:"fi-star",title:"icons.fi_star.sort_accounts"})),a?r.a.createElement("th",null,r.a.createElement(b.a,{name:"user",title:"icons.user.account"})):null,r.a.createElement("th",{style:{textAlign:"left"}},"ID"),r.a.createElement("th",{style:{textAlign:"left",paddingLeft:10},onClick:this._setSort.bind(this,"name"),className:"clickable"},r.a.createElement(l.a,{content:"header.account"})),r.a.createElement("th",{style:{textAlign:"right"}},r.a.createElement(l.a,{content:"account.open_orders"})),t>=750?r.a.createElement("th",{style:{textAlign:"right"}},r.a.createElement(l.a,{content:"account.as_collateral"})):null,t>=1200?r.a.createElement("th",{style:{textAlign:"right"}},r.a.createElement(l.a,{content:"transaction.borrow_amount"})):null,r.a.createElement("th",{style:{textAlign:"right",marginRight:20}},r.a.createElement(l.a,{content:"account.total_value"})))),r.a.createElement("tbody",null,s,n&&i.length?r.a.createElement("tr",{className:"dashboard-table--hiddenAccounts",style:{backgroundColor:"transparent"},key:"hidden"},r.a.createElement("td",{colSpan:"8"},E.a.translate("account.hidden_accounts_row"),":")):null,n&&i)))}}]),t}();x.propTypes={accounts:h.a.ChainAccountsList.isRequired,ignoredAccounts:h.a.ChainAccountsList},x.defaultProps={width:2e3,compact:!1},x=Object(m.a)(x);var N=function(e){function t(){return T(this,t),C(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return O(t,r.a.Component),S(t,[{key:"render",value:function(){return r.a.createElement(x,this.props)}}]),t}();N=Object(k.a)(N);var j=Object(u.a)(N,{listenTo:function(){return[d.a,p.a,w.a]},getProps:function(){return{locked:p.a.getState().locked,starredAccounts:w.a.getState().starredAccounts,viewSettings:d.a.getState().viewSettings}}}),L=n(854),I=n(41),P=n(595),D=n(185),R=n(1959),B=n(112),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},W=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function q(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function z(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var V=function(e){function t(){return M(this,t),q(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return z(t,r.a.Component),W(t,[{key:"render",value:function(){return r.a.createElement(B.a,{stores:[w.a,d.a,D.a],inject:{contacts:function(){return w.a.getState().accountContacts},myActiveAccounts:function(){return w.a.getState().myActiveAccounts},myHiddenAccounts:function(){return w.a.getState().myHiddenAccounts},accountsReady:function(){return w.a.getState().accountsLoaded&&w.a.getState().refsLoaded},passwordAccount:function(){return w.a.getState().passwordAccount},currentEntry:d.a.getState().viewSettings.get("dashboardEntry","accounts")}},r.a.createElement(H,this.props))}}]),t}(),H=function(e){function t(e){M(this,t);var n=q(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={width:null,showIgnored:!1,currentEntry:e.currentEntry},n._setDimensions=n._setDimensions.bind(n),n}return z(t,r.a.Component),W(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"shouldComponentUpdate",value:function(e,t){return e.myActiveAccounts!==this.props.myActiveAccounts||e.contacts!==this.props.contacts||e.ignoredAccounts!==this.props.ignoredAccounts||e.passwordAccount!==this.props.passwordAccount||t.width!==this.state.width||e.accountsReady!==this.props.accountsReady||t.showIgnored!==this.state.showIgnored||t.currentEntry!==this.state.currentEntry}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_onToggleIgnored",value:function(){this.setState({showIgnored:!this.state.showIgnored})}},{key:"_onSwitchType",value:function(e){this.setState({currentEntry:e}),g.a.changeViewSetting({dashboardEntry:e})}},{key:"render",value:function(){var e=this.props,t=e.myActiveAccounts,n=e.myHiddenAccounts,a=e.accountsReady,o=e.passwordAccount,i=this.state,c=i.width,l=i.showIgnored;o&&!t.has(o)&&(t=t.add(o));var u=t.toArray().sort();o&&-1===u.indexOf(o)&&u.push(o);var d=n.toArray().sort(),p=t.size+n.size+(o?1:0);if(!a)return r.a.createElement(I.a,null);if(!p)return r.a.createElement(P.a,null);var h=this.props.contacts.toArray();return r.a.createElement("div",{ref:"wrapper",className:"grid-block page-layout vertical"},r.a.createElement("div",{ref:"container",className:"tabs-container generic-bordered-box"},r.a.createElement(R.b,{setting:"accountTab",className:"account-tabs",defaultActiveTab:1,segmented:!1,tabsClass:"account-overview no-padding bordered-header content-block"},r.a.createElement(R.a,{title:"account.accounts"},r.a.createElement("div",{className:"generic-bordered-box"},r.a.createElement("div",{className:"box-content"},r.a.createElement(j,{accounts:s.a.List(u),ignoredAccounts:s.a.List(d),width:c,onToggleIgnored:this._onToggleIgnored.bind(this),showIgnored:l,showMyAccounts:!0})))),r.a.createElement(R.a,{title:"account.contacts"},r.a.createElement("div",{className:"generic-bordered-box"},r.a.createElement("div",{className:"box-content"},r.a.createElement(j,{accounts:h,passwordAccount:o,ignoredAccounts:s.a.List(d),width:c,onToggleIgnored:this._onToggleIgnored.bind(this),showIgnored:l,isContactsList:!0})))),r.a.createElement(R.a,{title:"account.recent"},r.a.createElement(L.a,{accountsList:t,limit:10,compactView:!1,fullHeight:!0,showFilters:!0,dashboard:!0})))))}}]),t}();t.default=function(e){return r.a.createElement(V,F({},e,{onlyAccounts:!0}))}}}]);
//# sourceMappingURL=dashboard-accounts.js.map