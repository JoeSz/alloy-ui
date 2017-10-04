YUI.add("aui-ace-autocomplete-base",function(e,t){var n=e.Lang,r=e.Array,i=e.Do,s=e.DOM,o=1,u=0,a=function(){};a.prototype={initializer:function(){var t=this,n;t._editorCommands=[],e.after(t._bindUIACBase,t,"renderUI"),n=t.get("processor"),n&&!n.get("host")&&n.set("host",t),t._onResultsErrorFn=e.bind("_onResultsError",t),t._onResultsSuccessFn=e.bind("_onResultsSuccess",t)},_addSuggestion:function(e){var t=this,n,r,s,o,u,f,l,c;return t._lockEditor=!0,s=t._getEditor(),r=t.get("processor").getSuggestion(t._matchParams.match,e),t.get("fillMode")===a.FILL_MODE_OVERWRITE?(o=t._matchParams,c=o.row,l=o.column-o.match.content.length,n=s.getCursorPosition(),f=ace.require("ace/range").Range,u=new f(c,l,n.row,n.column),s.getSession().replace(u,r)):s.insert(r),s.focus(),t._lockEditor=!1,t.fire("addSuggestion",r),new i.Halt(null)},_bindUIACBase:function(){var t=this,n;t.publish("cursorChange",{defaultFn:t._defaultCursorChangeFn}),n=t._getEditor(),t._onChangeFn=e.bind("_onEditorChange",t),n.on("change",t._onChangeFn),n.commands.addCommand({name:"showAutoComplete",bindKey:e.merge(t.get("showListKey"),{sender:"editor|cli"}),exec:function(){var e=n.getCursorPosition();t._processAutoComplete(e.row,e.column)}}),t._onEditorChangeCursorFn=e.bind("_onEditorChangeCursor",t),n.getSelection().on("changeCursor",t._onEditorChangeCursorFn),t.on("destroy",t._destroyUIACBase,t)},_defaultCursorChangeFn:function(){var e=this,t,n,r,i,s;r=e._getEditor(),n=r.getCursorPosition(),s=n.row,t=n.column,i=e._matchParams,(s!==i.row||t<i.match.start)&&e.fire("cursorOut")},_destroyUIACBase:function(){var e=this,t;t=e._getEditor(),t.commands.removeCommand("showAutoComplete"),t.removeListener("change",e._onChangeFn),t.getSelection().removeListener("changeCursor",e._onEditorChangeCursorFn),e._removeAutoCompleteCommands()},_getEditor:function(){var e=this;return e.get("host").getEditor()},_filterResults:function(e,t){var n=this,r,i,s,o;r=n.get("filters");for(i=0,s=r.length;i<s;++i){t=r[i].call(n,e,t.concat());if(!t.length)break}o=n.get("sorters");for(i=0,s=o.length;i<s;++i){t=o[i].call(n,e,t.concat());if(!t.length)break}return t},_handleEnter:function(e){var t=this,n;if(e==="\n"||e==="	")return n=t._getSelectedEntry(),t._addSuggestion(n)},_onEditorChange:function(e){var t=this,n,r,i,s,o,u;r=e.data,i=r.action,!t._lockEditor&&(i==="insertText"||i==="removeText")&&(s=r.range,n=s.start.column,o=s.end.row,u=s.start.row,i==="insertText"&&u===o&&t._processAutoComplete(u,n+1),t.fire(i,{column:n,dataRange:s,endRow:o,startRow:u}))},_onEditorChangeCursor:function(){var e=this;e.fire("cursorChange",e._getEditor().getCursorPosition())},_onResultsError:function(e){var t=this;t.fire("resultsError",e)},_onResultsSuccess:function(e){var t=this;t.set("results",e)},_overwriteCommands:function(){var e=this,t,n;n=e._getEditor(),t=n.commands.commands,e._editorCommands.push(i.before(e._handleEnter,n,"onTextInput",e),i.before(e._handleKey,t.golinedown,"exec",e,40),i.before(e._handleKey,t.golineup,"exec",e,38),i.before(e._handleKey,t.gotoend,"exec",e,35),i.before(e._handleKey,t.gotolineend,"exec",e,35),i.before(e._handleKey,t.gotolinestart,"exec",e,36),i.before(e._handleKey,t.gotopagedown,"exec",e,34),i.before(e._handleKey,t.gotopageup,"exec",e,33),i.before(e._handleKey,t.gotostart,"exec",e,36))},_phraseMatch:function(e,t,n){return e?r.filter(t,function(t){var r=!0;return t===e?r=!1:(n||(t=t.toLowerCase(),e=e.toLowerCase()),t.indexOf(e)===-1&&(r=!1)),r}):t},_processAutoComplete:function(e,t){var r=this,i,o,u,a,f,l;i=t,u=r._getEditor(),a=u.getSession().getLine(e),a=a.substring(0,t),l=r.get("processor"),f=l.getMatch(a),n.isObject(f)&&(o=u.renderer.textToScreenCoordinates(e,t),o.pageX+=s.docScrollX(),o.pageY+=s.docScrollY(),r._matchParams={column:t,match:f,row:e},l.getResults(f,r._onResultsSuccessFn,r._onResultsErrorFn)),r.fire("match",{column:t,coords:o,line:a,match:f,row:e})},_removeAutoCompleteCommands:function(){var t=this;(new e.EventHandle(t._editorCommands)).detach(),t._editorCommands.length=0},_sortAscLength:function(e,t,n){return t.sort(function(t,r){var i,s,o;return o=0,n||(t=t.toLowerCase(),r=r.toLowerCase()),i=t.indexOf(e),s=r.indexOf(e),i===0&&s===0?o=t.localeCompare(r):i===0?o=-1:s===0?o=1:o=t.localeCompare(r),o})},_validateFillMode:function(e){return e===a.FILL_MODE_OVERWRITE||e===a.FILL_MODE_INSERT}},a.FILL_MODE_INSERT=o,a.FILL_MODE_OVERWRITE=u,a.NAME="ace-autocomplete-base",a.NS="ace-autocomplete-base",a.ATTRS={fillMode:{validator:"_validateFillMode",value:a.FILL_MODE_OVERWRITE},filters:{valueFn:function(){var e=this;return[e._phraseMatch]}},processor:{validator:function(e){return n.isObject(e)||n.isFunction(e)}},showListKey:{validator:n.isObject,value:{mac:"Alt-Space",win:"Ctrl-Space"}},sorters:{valueFn:function(){var e=this;return[e._sortAscLength]}}},e.AceEditor.AutoCompleteBase=a},"3.1.0-deprecated.25",{requires:["aui-ace-editor"]});
