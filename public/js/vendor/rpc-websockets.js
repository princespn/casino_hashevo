"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3567],{66855:(e,t,n)=>{var r=n(48764).Buffer,o=n(64836);t.Z=void 0;var c=o(n(64687)),i=o(n(17156)),u=o(n(18698)),s=o(n(56690)),a=o(n(89728)),f=o(n(61655)),l=o(n(94993)),d=o(n(73808)),p=n(26729);function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,d.default)(e);if(t){var o=(0,d.default)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,l.default)(this,n)}}var v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},m=function(e){(0,f.default)(p,e);var t,n,o,l,d=h(p);function p(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ws://localhost:8080",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;(0,s.default)(this,p);var c=r.autoconnect,i=void 0===c||c,u=r.reconnect,a=void 0===u||u,f=r.reconnect_interval,l=void 0===f?1e3:f,h=r.max_reconnects,m=void 0===h?5:h,y=v(r,["autoconnect","reconnect","reconnect_interval","max_reconnects"]);return(t=d.call(this)).webSocketFactory=e,t.queue={},t.rpc_id=0,t.address=n,t.autoconnect=i,t.ready=!1,t.reconnect=a,t.reconnect_timer_id=void 0,t.reconnect_interval=l,t.max_reconnects=m,t.rest_options=y,t.current_reconnects=0,t.generate_request_id=o||function(){return++t.rpc_id},t.autoconnect&&t._connect(t.address,Object.assign({autoconnect:t.autoconnect,reconnect:t.reconnect,reconnect_interval:t.reconnect_interval,max_reconnects:t.max_reconnects},t.rest_options)),t}return(0,a.default)(p,[{key:"connect",value:function(){this.socket||this._connect(this.address,Object.assign({autoconnect:this.autoconnect,reconnect:this.reconnect,reconnect_interval:this.reconnect_interval,max_reconnects:this.max_reconnects},this.rest_options))}},{key:"call",value:function(e,t,n,r){var o=this;return r||"object"!==(0,u.default)(n)||(r=n,n=null),new Promise((function(c,i){if(!o.ready)return i(new Error("socket not ready"));var u=o.generate_request_id(e,t),s={jsonrpc:"2.0",method:e,params:t||null,id:u};o.socket.send(JSON.stringify(s),r,(function(e){if(e)return i(e);o.queue[u]={promise:[c,i]},n&&(o.queue[u].timeout=setTimeout((function(){delete o.queue[u],i(new Error("reply timeout"))}),n))}))}))}},{key:"login",value:(l=(0,i.default)(c.default.mark((function e(t){var n;return c.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("rpc.login",t);case 2:if(n=e.sent){e.next=5;break}throw new Error("authentication failed");case 5:return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)})},{key:"listMethods",value:(o=(0,i.default)(c.default.mark((function e(){return c.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("__listMethods");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"notify",value:function(e,t){var n=this;return new Promise((function(r,o){if(!n.ready)return o(new Error("socket not ready"));var c={jsonrpc:"2.0",method:e,params:t||null};n.socket.send(JSON.stringify(c),(function(e){if(e)return o(e);r()}))}))}},{key:"subscribe",value:(n=(0,i.default)(c.default.mark((function e(t){var n;return c.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"string"==typeof t&&(t=[t]),e.next=3,this.call("rpc.on",t);case 3:if(n=e.sent,"string"!=typeof t||"ok"===n[t]){e.next=6;break}throw new Error("Failed subscribing to an event '"+t+"' with: "+n[t]);case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"unsubscribe",value:(t=(0,i.default)(c.default.mark((function e(t){var n;return c.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"string"==typeof t&&(t=[t]),e.next=3,this.call("rpc.off",t);case 3:if(n=e.sent,"string"!=typeof t||"ok"===n[t]){e.next=6;break}throw new Error("Failed unsubscribing from an event with: "+n);case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"close",value:function(e,t){this.socket.close(e||1e3,t)}},{key:"_connect",value:function(e,t){var n=this;clearTimeout(this.reconnect_timer_id),this.socket=this.webSocketFactory(e,t),this.socket.addEventListener("open",(function(){n.ready=!0,n.emit("open"),n.current_reconnects=0})),this.socket.addEventListener("message",(function(e){var t=e.data;t instanceof ArrayBuffer&&(t=r.from(t).toString());try{t=JSON.parse(t)}catch(e){return}if(t.notification&&n.listeners(t.notification).length){if(!Object.keys(t.params).length)return n.emit(t.notification);var o=[t.notification];if(t.params.constructor===Object)o.push(t.params);else for(var c=0;c<t.params.length;c++)o.push(t.params[c]);return Promise.resolve().then((function(){n.emit.apply(n,o)}))}if(!n.queue[t.id])return t.method&&t.params?Promise.resolve().then((function(){n.emit(t.method,t.params)})):void 0;"error"in t=="result"in t&&n.queue[t.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.')),n.queue[t.id].timeout&&clearTimeout(n.queue[t.id].timeout),t.error?n.queue[t.id].promise[1](t.error):n.queue[t.id].promise[0](t.result),delete n.queue[t.id]})),this.socket.addEventListener("error",(function(e){return n.emit("error",e)})),this.socket.addEventListener("close",(function(r){var o=r.code,c=r.reason;n.ready&&setTimeout((function(){return n.emit("close",o,c)}),0),n.ready=!1,n.socket=void 0,1e3!==o&&(n.current_reconnects++,n.reconnect&&(n.max_reconnects>n.current_reconnects||0===n.max_reconnects)&&(n.reconnect_timer_id=setTimeout((function(){return n._connect(e,t)}),n.reconnect_interval)))}))}}]),p}(p.EventEmitter);t.Z=m},89062:(e,t,n)=>{var r=n(64836);t.Z=function(e,t){return new f(e,t)};var o=r(n(56690)),c=r(n(89728)),i=r(n(61655)),u=r(n(94993)),s=r(n(73808));function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,s.default)(e);if(t){var o=(0,s.default)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,u.default)(this,n)}}var f=function(e){(0,i.default)(n,e);var t=a(n);function n(e,r,c){var i;return(0,o.default)(this,n),(i=t.call(this)).socket=new window.WebSocket(e,c),i.socket.onopen=function(){return i.emit("open")},i.socket.onmessage=function(e){return i.emit("message",e.data)},i.socket.onerror=function(e){return i.emit("error",e)},i.socket.onclose=function(e){i.emit("close",e.code,e.reason)},i}return(0,c.default)(n,[{key:"send",value:function(e,t,n){var r=n||t;try{this.socket.send(e),r()}catch(e){r(e)}}},{key:"close",value:function(e,t){this.socket.close(e,t)}},{key:"addEventListener",value:function(e,t,n){this.socket.addEventListener(e,t,n)}}]),n}(n(26729).EventEmitter)}}]);