YUI.add("aui-event-input",function(e,t){var n=e.Node.DOM_EVENTS;if(e.Features.test("event","input")){n.input=1;return}n.cut=1,n.dragend=1,n.paste=1;var r=e.Event.KeyMap,i="~~aui|input|event~~",s=["keydown","paste","drop","cut"],o={cut:1,drop:1,paste:1};e.Event.define("input",{on:function(t,n,r){var i=this;n._handler=t.on(s,e.bind(i._dispatchEvent,i,n,r))},delegate:function(t,n,r,o){var u=this;n._handles=[],n._handler=t.delegate("focus",function(t){var o=t.target,a=o.getData(i);a||(a=o.on(s,e.bind(u._dispatchEvent,u,n,r)),n._handles.push(a),o.setData(i,a))},o)},detach:function(e,t){t._handler.detach()},detachDelegate:function(t,n){e.Array.each(n._handles,function(t){var n=e.one(t.evt.el);n&&n.setData(i,null),t.detach()}),n._handler.detach()},_dispatchEvent:function(t,n,i){var s=this,u,a;u=i.target,(o[i.type]||u.get("ownerDocument").get("activeElement")===u)&&r.isModifyingKey(i.keyCode)&&(t._timer&&(t._timer.cancel(),t._timer=null),a=r.isKey(i.keyCode,"WIN_IME")?null:u.get("value"),t._timer=e.soon(e.bind("_fireEvent",s,t,n,i,a)))},_fireEvent:function(e,t,n,r){var i=n.target;e._timer=null,i.get("value")!==r&&t.fire(n)}})},"3.1.0-deprecated.25",{requires:["aui-event-base","event-delegate","event-synthetic","timers"]});
