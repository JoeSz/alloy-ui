YUI.add("aui-carousel-swipe",function(e,t){function n(){}n.prototype={WIDGET_INDEX_ATTRIBUTE:"currentIndex",WIDGET_ITEM_SELECTOR:".image-viewer-base-image-container",initializer:function(){e.after(this._afterAttachSwipeEvents,this,"_attachSwipeEvents")},_afterAttachSwipeEvents:function(){this._swipeEventHandles.push(this.on("animate",this._onAnimate))},_onAnimate:function(e){this._scrollView&&this._scrollView.pages.get("index")===this.get(this.WIDGET_INDEX_ATTRIBUTE)&&e.preventDefault()}},e.Base.mix(e.Carousel,[e.WidgetSwipe,n])},"3.1.0-deprecated.25",{requires:["aui-carousel","aui-widget-swipe","base-build"],skinnable:!0});
