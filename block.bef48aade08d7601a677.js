"use strict";(this.webpackChunkBitShares2_light=this.webpackChunkBitShares2_light||[]).push([[584],{12474:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var s=n(67294),o=n(38216),l=n(59851),r=n(45697),a=n.n(r),i=n(62254),c=n(43393),p=n.n(c),h=n(72034),m=n(85158),u=n(58074),d=n.n(u),b=n(23037),g=n(82267),k=n(19305),E=n(66261);class x extends s.Component{shouldComponentUpdate(e){return e.block.id!==this.props.block.id}render(){let{block:e}=this.props,t=null;return t=[],e.transactions.length>0&&(t=[],e.transactions.forEach(((n,o)=>{t.push(s.createElement(E.W_,{key:o,id:`tx_${o}`,name:`tx_${o}`},s.createElement(m.Z,{block:e,key:o,trx:n,index:o})))}))),s.createElement("div",null,t)}}class y extends s.Component{static propTypes={dynGlobalObject:b.Z.ChainObject.isRequired,blocks:a().object.isRequired,height:a().number.isRequired};static defaultProps={dynGlobalObject:"2.1.0",blocks:{},height:1};constructor(e){super(e),this.state={showInput:!1},this.scrollToTop=this.scrollToTop.bind(this)}componentDidMount(){this._getBlock(this.props.height),E.zW.scrollEvent.register("begin",(()=>{})),E.zW.scrollEvent.register("end",(()=>{this.setState({scrollEnded:!0})}))}UNSAFE_componentWillReceiveProps(e){e.height!==this.props.height&&this._getBlock(e.height)}shouldComponentUpdate(e,t){return!p().is(e.blocks,this.props.blocks)||e.height!==this.props.height||e.dynGlobalObject!==this.props.dynGlobalObject||t.showInput!==this.state.showInput}scrollToTop(){E.NY.scrollToTop({duration:1500,delay:100,smooth:!0,containerId:"blockContainer"})}_getBlock(e){e&&(e=parseInt(e,10),this.props.blocks.get(e)||h.Z.getBlock(e))}_nextBlock(){let e=this.props.match.params.height,t=Math.min(this.props.dynGlobalObject.get("head_block_number"),parseInt(e,10)+1);this.props.history.push(`/block/${t}`)}_previousBlock(){let e=this.props.match.params.height,t=Math.max(1,parseInt(e,10)-1);this.props.history.push(`/block/${t}`)}toggleInput(e){e.preventDefault(),this.setState({showInput:!0})}_onKeyDown(e){e&&13===e.keyCode&&(this.props.history.push(`/block/${e.target.value}`),this.setState({showInput:!1}))}_onSubmit(){const e=this.refs.blockInput.value;e&&this._onKeyDown({keyCode:13,target:{value:e}})}componentDidUpdate(){let{blocks:e}=this.props,t=parseInt(this.props.height,10),n=e.get(t);this.props.scrollToIndex&&!this.state.scrollEnded&&n&&E.OK.scrollTo(`tx_${this.props.scrollToIndex}`,{duration:1500,delay:100,smooth:!0,offset:-100,containerId:"blockContainer"})}render(){const{showInput:e}=this.state;let{blocks:t}=this.props,n=parseInt(this.props.height,10),o=t.get(n),l=e?s.createElement("span",{className:"inline-label"},s.createElement("input",{ref:"blockInput",type:"number",onKeyDown:this._onKeyDown.bind(this)}),s.createElement("button",{onClick:this._onSubmit.bind(this),className:"button"},s.createElement(d(),{content:"explorer.block.go_to"}))):s.createElement("span",null,s.createElement(d(),{style:{textTransform:"uppercase"},component:"span",content:"explorer.block.title"}),s.createElement("a",{onClick:this.toggleInput.bind(this)}," #",n));return s.createElement("div",{className:"grid-block page-layout"},s.createElement("div",{className:"grid-block main-content"},s.createElement("div",{className:"grid-content",id:"blockContainer"},s.createElement("div",{className:"grid-content no-overflow medium-offset-2 medium-8 large-offset-3 large-6 small-12"},s.createElement("h4",{className:"text-center"},l),s.createElement("ul",null,s.createElement("li",null,s.createElement(d(),{component:"span",content:"explorer.block.date"}),":"," ",o?s.createElement(i.Ji,{value:o.timestamp,format:"full"}):null),s.createElement("li",null,s.createElement(d(),{component:"span",content:"explorer.block.witness"}),":"," ",o?s.createElement(k.Z,{witness:o.witness}):null),s.createElement("li",null,s.createElement(d(),{component:"span",content:"explorer.block.previous"}),": ",o?o.previous:null),s.createElement("li",null,s.createElement(d(),{component:"span",content:"explorer.block.transactions"}),": ",o?o.transactions.length:null)),s.createElement("div",{className:"clearfix",style:{marginBottom:"1rem"}},s.createElement("div",{className:"button float-left outline",onClick:this._previousBlock.bind(this)},"←"),s.createElement("div",{className:"button float-right outline",onClick:this._nextBlock.bind(this)},"→")),o?s.createElement(x,{block:o}):null,s.createElement("div",{style:{textAlign:"center",marginBottom:20}},s.createElement("a",{onClick:this.scrollToTop},s.createElement(d(),{content:"global.return_to_top"})))))))}}const v=(0,g.Z)(y);function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},_.apply(this,arguments)}class f extends s.Component{render(){let e=parseInt(this.props.match.params.height,10),t=this.props.match.params.txIndex?parseInt(this.props.match.params.txIndex):0;return s.createElement(l.Z,{stores:[o.Z],inject:{blocks:()=>o.Z.getState().blocks}},s.createElement(v,_({},this.props,{height:e,scrollToIndex:t})))}}const I=f},19305:(e,t,n)=>{n.d(t,{Z:()=>i});var s=n(67294),o=n(23037),l=n(82267),r=n(3841);class a extends s.Component{static propTypes={witness:o.Z.ChainObject.isRequired};render(){let e=this.props.witness.get("witness_account");return s.createElement(r.Z,{account:e})}}const i=a=(0,l.Z)(a)}}]);