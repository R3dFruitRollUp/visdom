!function(e){function t(o){if(n[o])return n[o].exports;var a=n[o]={exports:{},id:o,loaded:!1};return e[o].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(6)},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(e){function t(){var e,a,r,i;n(this,t);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return a=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.close=function(){r.props.onClose(r.props.id)},r.focus=function(){r.props.onFocus(r.props.id)},r.download=function(){r.props.handleDownload&&r.props.handleDownload()},r.resize=function(){r.props.resize&&r.props.onResize()},r.getWindowSize=function(){return{h:r._windowRef.clientHeight,w:r._windowRef.clientWidth}},r.getContentSize=function(){return{h:r._windowRef.clientHeight-r._barRef.scrollHeight,w:r._windowRef.clientWidth}},i=a,o(r,i)}return a(t,e),r(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.contentID!==e.contentID||(this.props.h!==e.h||this.props.w!==e.w||this.props.children!==e.children)}},{key:"render",value:function(){var e=this,t=classNames({window:!0}),n=classNames({bar:!0,focus:this.props.isFocused});return React.createElement("div",{className:t,ref:function(t){return e._windowRef=t}},React.createElement("div",{className:n,onClick:this.focus,ref:function(t){return e._barRef=t}},React.createElement("button",{title:"close",onClick:this.close},"X"),React.createElement("button",{title:"save",onClick:this.download},"⤓"),React.createElement("div",null,this.props.title)),React.createElement("div",{className:"content"},this.props.children))}}]),t}(React.Component);e.exports=i},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(1),l=function(e){function t(){var e,n,r,i;o(this,t);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r._paneRef=null,r.state={scale:1},r.handleDownload=function(){var e=document.createElement("a");e.download=(r.props.title||"visdom_image")+".jpg",e.href=r.props.content.src,e.click()},r.handleZoom=function(e){var t=e.deltaMode===e.DOM_DELTA_PIXEL?e.deltaY:40*e.deltaY,n=Math.exp(-t/5e3);r.setState({scale:r.state.scale*n}),e.stopPropagation(),e.preventDefault()},r.resetZoom=function(e){r.setState({scale:1})},i=n,a(r,i)}return r(t,e),s(t,[{key:"render",value:function(){var e=this,t=this.props.content;return React.createElement(c,i({},this.props,{handleDownload:this.handleDownload,ref:function(t){return e._paneRef=t}}),React.createElement("img",{className:"content-image",src:t.src,width:Math.ceil(1+this.props.width*this.state.scale)+"px",height:Math.ceil(1+this.props.height*this.state.scale)+"px",onWheel:this.handleZoom.bind(this),onDoubleClick:this.resetZoom.bind(this)}),React.createElement("p",{className:"caption"},t.caption))}}]),t}(React.Component);e.exports=l},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(1),l=function(e){function t(){var e,n,r,i;o(this,t);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r._paneRef=null,r._plotlyRef=null,r._width=null,r._height=null,r.newPlot=function(){Plotly.newPlot(r.props.contentID,r.props.content.data,r.props.content.layout,{showLink:!0,linkText:" "})},r.handleDownload=function(){Plotly.downloadImage(r._plotlyRef,{format:"svg",filename:r.props.contentID})},r.resize=function(){r.componentDidUpdate()},i=n,a(r,i)}return r(t,e),s(t,[{key:"componentDidMount",value:function(){this.newPlot()}},{key:"componentDidUpdate",value:function(e,t){this.newPlot()}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.contentID!==e.contentID||(this.props.h!==e.h||this.props.w!==e.w)}},{key:"render",value:function(){var e=this;return React.createElement(c,i({},this.props,{handleDownload:this.handleDownload,ref:function(t){return e._paneRef=t}}),React.createElement("div",{id:this.props.contentID,style:{height:"100%",width:"100%"},className:"plotly-graph-div",ref:function(t){return e._plotlyRef=t}}))}}]),t}(React.Component);e.exports=l},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(1),l=function(e){function t(){var e,n,r,i;o(this,t);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.handleDownload=function(){var e=new Blob([r.props.content],{type:"text/plain"}),t=window.URL.createObjectURL(e),n=document.createElement("a");n.download="visdom_text.txt",n.href=t,n.click()},i=n,a(r,i)}return r(t,e),s(t,[{key:"render",value:function(){return React.createElement(c,i({},this.props,{handleDownload:this.handleDownload}),React.createElement("div",{className:"content-text"},React.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.content}})))}}]),t}(React.Component);e.exports=l},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=function(e){return function(t){function s(){var e,t,a,r;n(this,s);for(var i=arguments.length,c=Array(i),l=0;l<i;l++)c[l]=arguments[l];return t=a=o(this,(e=s.__proto__||Object.getPrototypeOf(s)).call.apply(e,[this].concat(c))),a.state={width:1280,cols:100},a.mounted=!1,a.resizeTimer=null,a.onWindowResizeStop=function(){if(a.mounted){var e=a.state.width,t=ReactDOM.findDOMNode(a);a.setState({width:t.offsetWidth,cols:t.offsetWidth/e*a.state.cols},function(){a.props.onWidthChange(a.state.width,a.state.cols)})}},a.onWindowResize=function(e){a.resizeTimer&&clearTimeout(a.resizeTimer),a.resizeTimer=setTimeout(a.onWindowResizeStop,200)},r=t,o(a,r)}return a(s,t),i(s,[{key:"componentDidMount",value:function(){this.mounted=!0,window.addEventListener("resize",this.onWindowResize),this.onWindowResize()}},{key:"componentWillUnmount",value:function(){this.mounted=!1,window.removeEventListener("resize",this.onWindowResize)}},{key:"render",value:function(){return this.props.measureBeforeMount&&!this.mounted?React.createElement("div",{className:this.props.className,style:this.props.style}):React.createElement(e,r({},this.props,this.state))}}]),s}(React.Component)};t.default=s},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(){ReactDOM.render(React.createElement(E,null),document.getElementById("app")),document.removeEventListener("DOMContentLoaded",i)}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(4),u=n(2),f=n(3),p=n(5).default,d=p(ReactGridLayout),h=ReactGridLayout.utils.sortLayoutItemsByRowCol,v=ReactGridLayout.utils.getLayoutItem,m=5,y=10,b={image:u,plot:f,text:l},w={image:[20,20],plot:[30,24],text:[20,20]},g={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},E=function(e){function t(){var e,n,r,i;o(this,t);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.state={connected:!1,sessionID:null,panes:{},focusedPaneID:null,envID:ACTIVE_ENV,saveText:ACTIVE_ENV,layoutID:"",envList:ENV_LIST.slice(),filter:"",filterField:"",layout:[],cols:100,width:1280,layoutList:[],showEnvModal:!1,showViewModal:!1,modifyEnv:null},r._bin=null,r._socket=null,r._envFieldRef=null,r._filterFieldRef=null,r._timeoutID=null,r._pendingPanes=[],r.colWidth=function(){return(r.state.width-y*(r.state.cols-1)-2*y)/r.state.cols},r.p2w=function(e){var t=r.colWidth();return(e+y)/(t+y)},r.p2h=function(e){return(e+y)/(m+y)},r.keyLS=function(e){return r.state.envID+"_"+e},r.correctPathname=function(){var e=window.location.pathname;return"/"!=e.slice(-1)&&(e+="/"),e},r.addPaneBatched=function(e){r._timeoutID||(r._timeoutID=setTimeout(r.processBatchedPanes,100)),r._pendingPanes.push(e)},r.processBatchedPanes=function(){var e=Object.assign({},r.state.panes),t=r.state.layout.slice();r._pendingPanes.forEach(function(n){r.processPane(n,e,t)}),r._pendingPanes=[],r._timeoutID=null,r.setState({panes:e,layout:t})},r.processPane=function(e,t,n){var o=e.id in t;if(t[e.id]=e,o){var a=v(n,e.id);e.width&&(a.w=r.p2w(e.width)),e.height&&(a.h=Math.ceil(r.p2h(e.height+14))),e.content.caption&&(a.h+=1)}else{var i=JSON.parse(localStorage.getItem(r.keyLS(e.id)));if(i){var s=i;r._bin.content.push(s)}else{var c=w[e.type][0],l=w[e.type][1];e.width&&(c=r.p2w(e.width)),e.height&&(l=Math.ceil(r.p2h(e.height+14))),e.content.caption&&(l+=1),r._bin.content.push({width:c,height:l});var u=r._bin.position(n.length,r.state.cols),s={i:e.id,w:c,h:l,width:c,height:l,x:u.x,y:u.y,static:!1}}n.push(s)}},r.connect=function(){if(!r._socket){var e=window.location,t=new WebSocket("ws://"+e.host+r.correctPathname()+"socket");t.onmessage=r._handleMessage,t.onopen=function(){r.setState({connected:!0})},t.onerror=t.onclose=function(){r.setState({connected:!1},function(){r._socket=null})},r._socket=t}},r._handleMessage=function(e){var t=JSON.parse(e.data);switch(t.command){case"register":r.setState({sessionID:t.data},function(){r.selectEnv(r.state.envID)});break;case"pane":case"window":r.addPaneBatched(t);break;case"reload":for(var n in t.data)localStorage.setItem(r.keyLS(n),JSON.stringify(t.data[n]));break;case"close":r.closePane(t.data);break;case"layout":r.relayout();break;case"env_update":r.setState({envList:t.data});break;default:console.error("unrecognized command",t)}},r.disconnect=function(){r._socket.close()},r.closePane=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=Object.assign({},r.state.panes);if(delete o[e],t||(localStorage.removeItem(r.keyLS(r.id)),r.sendSocketMessage({cmd:"close",data:e,eid:r.state.envID})),n){var a=r.state.focusedPaneID,i=r.state.layout.filter(function(t){return t.i!==e});r.setState({layout:i,panes:o,focusedPaneID:a===e?null:a},function(){r.relayout()})}},r.closeAllPanes=function(){Object.keys(r.state.panes).map(function(e){r.closePane(e,!1,!1)}),r.rebin(),r.setState({layout:[],panes:{},focusedPaneID:null})},r.selectEnv=function(e){var t=e===r.state.envID;r.setState({envID:e,saveText:e,panes:t?r.state.panes:{},layout:t?r.state.layout:[],focusedPaneID:t?r.state.focusedPaneID:null}),$.post(r.correctPathname()+"env/"+e,JSON.stringify({sid:r.state.sessionID}))},r.deleteEnv=function(){r.sendSocketMessage({cmd:"delete_env",prev_eid:r.state.envID,eid:r.state.modifyEnv})},r.saveEnv=function(){if(r.state.connected){r.updateLayout(r.state.layout);var e=r._envFieldRef.value,t={};Object.keys(r.state.panes).map(function(e){t[e]=JSON.parse(localStorage.getItem(r.keyLS(e)))}),r.sendSocketMessage({cmd:"save",data:t,prev_eid:r.state.envID,eid:e});var n=r.state.envList;n.indexOf(e)===-1&&n.push(e),r.setState({envList:n,envID:e})}},r.focusPane=function(e){r.setState({focusedPaneID:e})},r.resizePane=function(e,t,n){r.focusPane(n.i),r.updateLayout(e)},r.movePane=function(e,t,n){r.updateLayout(e)},r.rebin=function(e){e=e?e:r.state.layout;var t=e.map(function(e,t){return{width:e.w,height:e.h}});r._bin=new Bin.ShelfFirst(t,r.state.cols)},r.relayout=function(e){r.rebin();var t=h(r.state.layout),n=Object.assign({},r.state.panes),o=r.state.filter,a=t.slice();t=t.sort(function(e,t){var r=(null!=n[e.i].title.match(o))-(null!=n[t.i].title.match(o));return 0!=r?-r:a.indexOf(e)-a.indexOf(t)});var i=t.map(function(e,t){var o=r._bin.position(t,r.state.cols);return!n[e.i],n[e.i].i=t,Object.assign({},e,o)});r.setState({panes:n}),r.updateLayout(i)},r.toggleOnlineState=function(){r.state.connected?r.disconnect():r.connect()},r.updateLayout=function(e){r.setState({layout:e},function(e){r.state.layout.map(function(e,t){localStorage.setItem(r.keyLS(e.i),JSON.stringify(e))})})},r.updateToLayout=function(e){r.setState({layoutID:e}),""!==e&&r.updateLayout(r.state.layoutList[e])},r.onWidthChange=function(e,t){r.setState({cols:t,width:e},function(){r.relayout()})},i=n,a(r,i)}return r(t,e),c(t,[{key:"sendSocketMessage",value:function(e){if(this._socket){var t=JSON.stringify(e);return this._socket.send(t)}}},{key:"componentDidMount",value:function(){this.connect()}},{key:"openEnvModal",value:function(){this.setState({showEnvModal:!0})}},{key:"afterOpenEnvModal",value:function(){}},{key:"closeEnvModal",value:function(){this.setState({showEnvModal:!1})}},{key:"openViewModal",value:function(){this.setState({showViewModal:!0})}},{key:"afterOpenViewModal",value:function(){}},{key:"closeViewModal",value:function(){this.setState({showViewModal:!1})}},{key:"renderEnvModal",value:function(){var e=this;return React.createElement(ReactModal,{isOpen:this.state.showEnvModal,onAfterOpen:this.afterOpenEnvModal.bind(this),onRequestClose:this.closeEnvModal.bind(this),contentLabel:"Environment Management Modal",ariaHideApp:!1,style:g},React.createElement("span",{className:"visdom-title"},"Manage Environments"),React.createElement("br",null),"Save or fork current environment:",React.createElement("br",null),React.createElement("div",{className:"form-inline"},React.createElement("input",{className:"form-control",type:"text",onChange:function(t){e.setState({saveText:t.target.value})},value:this.state.saveText,ref:function(t){return e._envFieldRef=t}}),React.createElement("button",{className:"btn btn-default",disabled:!this.state.connected,onClick:this.saveEnv},this.state.envList.indexOf(this.state.saveText)>=0?"save":"fork")),React.createElement("br",null),"Delete selected environment:",React.createElement("br",null),React.createElement("div",{className:"form-inline"},React.createElement("select",{className:"form-control",disabled:!this.state.connected,onChange:function(t){e.setState({modifyEnv:t.target.value})},value:this.state.modifyEnv},this.state.envList.map(function(e){return React.createElement("option",{key:e,value:e},e)})),React.createElement("button",{className:"btn btn-default",disabled:!this.state.connected||!this.state.modifyEnv||"main"==this.state.modifyEnv,onClick:this.deleteEnv.bind(this)},"Delete")))}},{key:"renderViewModal",value:function(){return null}},{key:"render",value:function(){var e=this,t=Object.keys(this.state.panes).map(function(t){var n=e.state.panes[t],o=b[n.type];if(!o)return console.error("unrecognized pane type: ",n),null;var a=v(e.state.layout,t);return React.createElement("div",{key:n.id,style:n.title.match(e.state.filter)?{}:{display:"none"}},React.createElement(o,s({},n,{key:n.id,onClose:e.closePane,onFocus:e.focusPane,onInflate:e.onInflate,isFocused:n.id===e.state.focusedPaneID,w:a.w,h:a.h})))}),n=this.renderEnvModal();return React.createElement("div",null,n,React.createElement("div",{className:"navbar navbar-default"},React.createElement("div",{className:"form-inline"},React.createElement("span",{className:"visdom-title"},"visdom"),React.createElement("button",{className:"btn btn-default",onClick:this.relayout},React.createElement("span",{className:"glyphicon glyphicon-th"})),React.createElement("select",{className:"form-control",disabled:!this.state.connected,onChange:function(t){e.selectEnv(t.target.value)},value:this.state.envID},this.state.envList.map(function(e){return React.createElement("option",{key:e,value:e},e)})),React.createElement("button",{className:"btn btn-default",disabled:!this.state.connected,onClick:this.openEnvModal.bind(this)},"manage envs"),React.createElement("button",{className:"btn btn-default",disabled:!this.state.connected,onClick:this.closeAllPanes},"clear env"),React.createElement("select",{className:"form-control",disabled:!this.state.connected,onChange:function(t){e.updateToLayout(t.target.value)},value:this.state.layoutID},this.state.layoutList.map(function(e){return React.createElement("option",{key:e,value:e},e)})),React.createElement("button",{className:"btn btn-default",disabled:!this.state.connected,onClick:function(t){e.renderLayoutDialog()}},"manage layouts"),React.createElement("input",{className:"form-control",type:"text",onChange:function(t){e.setState({filterField:t.target.value})},value:this.state.filterField,ref:function(t){return e._filterFieldRef=t}}),React.createElement("button",{className:"btn btn-default",disabled:!this.state.connected,onClick:function(t){e.setState({filter:e.state.filterField},function(){Object.keys(e.state.panes).map(function(t){e.focusPane(t)}),e.relayout()})}},"filter"),React.createElement("button",{style:{float:"right"},className:classNames({btn:!0,"btn-success":this.state.connected,"btn-danger":!this.state.connected}),onClick:this.toggleOnlineState},this.state.connected?"online":"offline"))),React.createElement("div",null,React.createElement(d,{className:"layout",rowHeight:m,autoSize:!1,margin:[y,y],layout:this.state.layout,draggableHandle:".bar",onLayoutChange:this.handleLayoutChange,onWidthChange:this.onWidthChange,onResizeStop:this.resizePane,onDragStop:this.movePane},t)))}}]),t}(React.Component);document.addEventListener("DOMContentLoaded",i)}]);