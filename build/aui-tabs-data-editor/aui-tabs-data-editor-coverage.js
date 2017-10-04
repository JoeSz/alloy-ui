if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-tabs-data-editor/aui-tabs-data-editor.js']) {
   __coverage__['build/aui-tabs-data-editor/aui-tabs-data-editor.js'] = {"path":"build/aui-tabs-data-editor/aui-tabs-data-editor.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":32},"end":{"line":1,"column":51}}},"2":{"name":"(anonymous_2)","line":31,"loc":{"start":{"line":31,"column":17},"end":{"line":31,"column":28}}},"3":{"name":"(anonymous_3)","line":43,"loc":{"start":{"line":43,"column":16},"end":{"line":43,"column":27}}},"4":{"name":"(anonymous_4)","line":53,"loc":{"start":{"line":53,"column":29},"end":{"line":53,"column":40}}},"5":{"name":"(anonymous_5)","line":64,"loc":{"start":{"line":64,"column":34},"end":{"line":64,"column":50}}},"6":{"name":"(anonymous_6)","line":77,"loc":{"start":{"line":77,"column":20},"end":{"line":77,"column":31}}},"7":{"name":"(anonymous_7)","line":99,"loc":{"start":{"line":99,"column":27},"end":{"line":99,"column":43}}},"8":{"name":"(anonymous_8)","line":118,"loc":{"start":{"line":118,"column":17},"end":{"line":118,"column":28}}},"9":{"name":"(anonymous_9)","line":133,"loc":{"start":{"line":133,"column":23},"end":{"line":133,"column":39}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":192,"column":76}},"2":{"start":{"line":9,"column":0},"end":{"line":10,"column":81}},"3":{"start":{"line":21,"column":0},"end":{"line":189,"column":3}},"4":{"start":{"line":32,"column":8},"end":{"line":32,"column":70}},"5":{"start":{"line":33,"column":8},"end":{"line":33,"column":56}},"6":{"start":{"line":44,"column":8},"end":{"line":44,"column":37}},"7":{"start":{"line":54,"column":8},"end":{"line":54,"column":56}},"8":{"start":{"line":65,"column":8},"end":{"line":65,"column":61}},"9":{"start":{"line":67,"column":8},"end":{"line":67,"column":63}},"10":{"start":{"line":78,"column":8},"end":{"line":79,"column":20}},"11":{"start":{"line":81,"column":8},"end":{"line":83,"column":11}},"12":{"start":{"line":84,"column":8},"end":{"line":84,"column":33}},"13":{"start":{"line":86,"column":8},"end":{"line":86,"column":90}},"14":{"start":{"line":88,"column":8},"end":{"line":88,"column":23}},"15":{"start":{"line":100,"column":8},"end":{"line":101,"column":36}},"16":{"start":{"line":103,"column":8},"end":{"line":107,"column":9}},"17":{"start":{"line":104,"column":12},"end":{"line":106,"column":13}},"18":{"start":{"line":105,"column":16},"end":{"line":105,"column":25}},"19":{"start":{"line":119,"column":8},"end":{"line":121,"column":9}},"20":{"start":{"line":120,"column":12},"end":{"line":120,"column":50}},"21":{"start":{"line":123,"column":8},"end":{"line":123,"column":29}},"22":{"start":{"line":134,"column":8},"end":{"line":134,"column":54}},"23":{"start":{"line":136,"column":8},"end":{"line":138,"column":9}},"24":{"start":{"line":137,"column":12},"end":{"line":137,"column":50}}},"branchMap":{"1":{"line":104,"type":"if","locations":[{"start":{"line":104,"column":12},"end":{"line":104,"column":12}},{"start":{"line":104,"column":12},"end":{"line":104,"column":12}}]},"2":{"line":119,"type":"if","locations":[{"start":{"line":119,"column":8},"end":{"line":119,"column":8}},{"start":{"line":119,"column":8},"end":{"line":119,"column":8}}]},"3":{"line":136,"type":"if","locations":[{"start":{"line":136,"column":8},"end":{"line":136,"column":8}},{"start":{"line":136,"column":8},"end":{"line":136,"column":8}}]}},"code":["(function () { YUI.add('aui-tabs-data-editor', function (A, NAME) {","","/**"," * The Tabs Data Editor Component"," *"," * @module aui-tabs-data-editor"," */","","var CSS_TABS_DATA_EDITOR = A.getClassName('tabs', 'data', 'editor'),","    CSS_TABS_DATA_EDITOR_TABS = A.getClassName('tabs', 'data', 'editor', 'tabs');","","/**"," * A base class for Tabs Data Editor."," *"," * @class A.TabsDataEditor"," * @extends A.DataEditor"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","A.TabsDataEditor = A.Base.create('tabs-data-editor', A.DataEditor, [], {","    TPL_EDITOR_CONTENT: '<div class=\"' + CSS_TABS_DATA_EDITOR + '\">' +","        '<div class=\"' + CSS_TABS_DATA_EDITOR_TABS + '\"></div></div>',","","    /**","     * Constructor for the `A.TabsDataEditor`. Lifecycle.","     *","     * @method initializer","     * @protected","     */","    initializer: function() {","        this.after('editedValueChange', this._afterEditedValueChange);","        this._uiSetEditedValue(this.get('editedValue'));","    },","","    /**","     * Destructor lifecycle implementation for the `A.TabsDataEditor` class.","     * Lifecycle.","     *","     * @method destructor","     * @protected","     */","    destructor: function() {","        this._getTabView().destroy();","    },","","    /**","     * Fired after the `editedValue` attribute is set.","     *","     * @method _afterEditedValueChange","     * @protected","     */","    _afterEditedValueChange: function() {","        this._uiSetEditedValue(this.get('editedValue'));","    },","","    /**","     * Fires after the `selectionChange` event from the tab view is triggered.","     *","     * @method _afterTabViewSelectionChange","     * @param {EventFacade} event","     * @protected","     */","    _afterTabViewSelectionChange: function(event) {","        var index = this._getTabView().indexOf(event.newVal);","","        this.set('editedValue', this.get('tabs')[index].value);","    },","","    /**","     * Creates the `A.TabView` widget that will handle this editor's tabs.","     *","     * @method _createTabView","     * @return {Node}","     * @protected","     */","    _createTabView: function() {","        var tabsNode = this.get('node').one('.' + CSS_TABS_DATA_EDITOR_TABS),","            tabView;","","        tabView = new A.TabView({","            children: this.get('tabs')","        });","        tabView.render(tabsNode);","","        tabView.after('selectionChange', A.bind(this._afterTabViewSelectionChange, this));","","        return tabView;","    },","","    /**","     * Looks for a tab that is represented by the given value and returns its","     * index on the tab view.","     *","     * @method _findTabIndexForValue","     * @param {String} value","     * @return {Number}","     */","    _findTabIndexForValue: function(value) {","        var i,","            tabs = this.get('tabs');","","        for (i = 0; i < tabs.length; i++) {","            if (tabs[i].value === value) {","                return i;","            }","        }","    },","","    /**","     * Returns the `A.TabView` widget that handles this editor's tabs, creating","     * it if it hasn't been created yet.","     *","     * @method _getTabView","     * @return {A.TabView}","     * @protected","     */","    _getTabView: function() {","        if (!this._tabView) {","            this._tabView = this._createTabView();","        }","","        return this._tabView;","    },","","    /**","     * Updates the ui according to the value of the `editedValue` attribute.","     *","     * @method _uiSetEditedValue","     * @param {String} value","     * @protected","     */","    _uiSetEditedValue: function(value) {","        var index = this._findTabIndexForValue(value);","","        if (index !== undefined) {","            this._getTabView().selectChild(index);","        }","    }","}, {","    /**","     * Static property used to define the default attribute configuration","     * for the `A.TabsDataEditor`.","     *","     * @property ATTRS","     * @type Object","     * @static","     */","    ATTRS: {","        /**","         * The value after edition.","         *","         * @attribute editedValue","         * @default ''","         * @type String","         */","        editedValue: {","            value: ''","        },","","        /**","         * The value to be edited.","         *","         * @attribute originalValue","         * @default ''","         * @type String","         */","        originalValue: {","            value: ''","        },","","        /**","         * Information about each tab that this editor should show as an option.","         * Each tab should be an object representing with the following keys:","         *     label -> Text that will be shown for the tab","         *     panelNode (Optional) -> Content that should show up when the tab","         *         is selected.","         *     value -> Value that represents the tab. Will be set as `editedValue`","         *         when the tab is selected.","         *","         * @attribute tabs","         * @default []","         * @type Array","         */","        tabs: {","            value: []","        }","    }","});","","","}, '3.1.0-deprecated.25', {\"requires\": [\"aui-data-editor\", \"aui-tabview\"]});","","}());"]};
}
var __cov_kl7A4t_DcNc6SiWStu2pnw = __coverage__['build/aui-tabs-data-editor/aui-tabs-data-editor.js'];
__cov_kl7A4t_DcNc6SiWStu2pnw.s['1']++;YUI.add('aui-tabs-data-editor',function(A,NAME){__cov_kl7A4t_DcNc6SiWStu2pnw.f['1']++;__cov_kl7A4t_DcNc6SiWStu2pnw.s['2']++;var CSS_TABS_DATA_EDITOR=A.getClassName('tabs','data','editor'),CSS_TABS_DATA_EDITOR_TABS=A.getClassName('tabs','data','editor','tabs');__cov_kl7A4t_DcNc6SiWStu2pnw.s['3']++;A.TabsDataEditor=A.Base.create('tabs-data-editor',A.DataEditor,[],{TPL_EDITOR_CONTENT:'<div class="'+CSS_TABS_DATA_EDITOR+'">'+'<div class="'+CSS_TABS_DATA_EDITOR_TABS+'"></div></div>',initializer:function(){__cov_kl7A4t_DcNc6SiWStu2pnw.f['2']++;__cov_kl7A4t_DcNc6SiWStu2pnw.s['4']++;this.after('editedValueChange',this._afterEditedValueChange);__cov_kl7A4t_DcNc6SiWStu2pnw.s['5']++;this._uiSetEditedValue(this.get('editedValue'));},destructor:function(){__cov_kl7A4t_DcNc6SiWStu2pnw.f['3']++;__cov_kl7A4t_DcNc6SiWStu2pnw.s['6']++;this._getTabView().destroy();},_afterEditedValueChange:function(){__cov_kl7A4t_DcNc6SiWStu2pnw.f['4']++;__cov_kl7A4t_DcNc6SiWStu2pnw.s['7']++;this._uiSetEditedValue(this.get('editedValue'));},_afterTabViewSelectionChange:function(event){__cov_kl7A4t_DcNc6SiWStu2pnw.f['5']++;__cov_kl7A4t_DcNc6SiWStu2pnw.s['8']++;var index=this._getTabView().indexOf(event.newVal);__cov_kl7A4t_DcNc6SiWStu2pnw.s['9']++;this.set('editedValue',this.get('tabs')[index].value);},_createTabView:function(){__cov_kl7A4t_DcNc6SiWStu2pnw.f['6']++;__cov_kl7A4t_DcNc6SiWStu2pnw.s['10']++;var tabsNode=this.get('node').one('.'+CSS_TABS_DATA_EDITOR_TABS),tabView;__cov_kl7A4t_DcNc6SiWStu2pnw.s['11']++;tabView=new A.TabView({children:this.get('tabs')});__cov_kl7A4t_DcNc6SiWStu2pnw.s['12']++;tabView.render(tabsNode);__cov_kl7A4t_DcNc6SiWStu2pnw.s['13']++;tabView.after('selectionChange',A.bind(this._afterTabViewSelectionChange,this));__cov_kl7A4t_DcNc6SiWStu2pnw.s['14']++;return tabView;},_findTabIndexForValue:function(value){__cov_kl7A4t_DcNc6SiWStu2pnw.f['7']++;__cov_kl7A4t_DcNc6SiWStu2pnw.s['15']++;var i,tabs=this.get('tabs');__cov_kl7A4t_DcNc6SiWStu2pnw.s['16']++;for(i=0;i<tabs.length;i++){__cov_kl7A4t_DcNc6SiWStu2pnw.s['17']++;if(tabs[i].value===value){__cov_kl7A4t_DcNc6SiWStu2pnw.b['1'][0]++;__cov_kl7A4t_DcNc6SiWStu2pnw.s['18']++;return i;}else{__cov_kl7A4t_DcNc6SiWStu2pnw.b['1'][1]++;}}},_getTabView:function(){__cov_kl7A4t_DcNc6SiWStu2pnw.f['8']++;__cov_kl7A4t_DcNc6SiWStu2pnw.s['19']++;if(!this._tabView){__cov_kl7A4t_DcNc6SiWStu2pnw.b['2'][0]++;__cov_kl7A4t_DcNc6SiWStu2pnw.s['20']++;this._tabView=this._createTabView();}else{__cov_kl7A4t_DcNc6SiWStu2pnw.b['2'][1]++;}__cov_kl7A4t_DcNc6SiWStu2pnw.s['21']++;return this._tabView;},_uiSetEditedValue:function(value){__cov_kl7A4t_DcNc6SiWStu2pnw.f['9']++;__cov_kl7A4t_DcNc6SiWStu2pnw.s['22']++;var index=this._findTabIndexForValue(value);__cov_kl7A4t_DcNc6SiWStu2pnw.s['23']++;if(index!==undefined){__cov_kl7A4t_DcNc6SiWStu2pnw.b['3'][0]++;__cov_kl7A4t_DcNc6SiWStu2pnw.s['24']++;this._getTabView().selectChild(index);}else{__cov_kl7A4t_DcNc6SiWStu2pnw.b['3'][1]++;}}},{ATTRS:{editedValue:{value:''},originalValue:{value:''},tabs:{value:[]}}});},'3.1.0-deprecated.25',{'requires':['aui-data-editor','aui-tabview']});
