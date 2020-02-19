"use strict";var t=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t){function e(t){if(t)return function(t){for(var s in e.prototype)t[s]=e.prototype[s];return t}(t)}t.exports=e,e.prototype.on=e.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},e.prototype.once=function(t,e){function s(){this.off(t,s),e.apply(this,arguments)}return s.fn=e,this.on(t,s),this},e.prototype.off=e.prototype.removeListener=e.prototype.removeAllListeners=e.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var s,i=this._callbacks["$"+t];if(!i)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var n=0;n<i.length;n++)if((s=i[n])===e||s.fn===e){i.splice(n,1);break}return 0===i.length&&delete this._callbacks["$"+t],this},e.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),s=this._callbacks["$"+t],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(s){i=0;for(var n=(s=s.slice(0)).length;i<n;++i)s[i].apply(this,e)}return this},e.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},e.prototype.hasListeners=function(t){return!!this.listeners(t).length}}));class e extends t{constructor(e){super(),this._socketMock=e,this._emitFn=t.prototype.emit}emit(t,e,s){"function"==typeof e&&(s=e=null),(s||function(){})(this._socketMock.emitEvent(t,e))}fireEvent(t,e){this._emitFn(t,e)}}const s=function(t){return t?JSON.parse(JSON.stringify(t)):void 0};module.exports=class extends t{constructor(){super(),this.joinedRooms=this.rooms=[],this.socketClient=new e(this),this._emitFn=t.prototype.emit,this.generalCallbacks={},this.broadcast={to:t=>({emit:(e,i)=>{this.generalCallbacks[e]&&this.generalCallbacks[e](s(i),t)}})}}emitEvent(t,e){this._emitFn(t,s(e))}onEmit(t,e){this.generalCallbacks[t]=e}emit(t,e){this.socketClient.fireEvent(t,e)}join(t){this.joinedRooms.push(t)}leave(t){const e=this.joinedRooms.indexOf(t);this.joinedRooms.splice(e,1)}monitor(t){return t}};