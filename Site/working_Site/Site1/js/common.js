//menu
var mouseover_tid = [];
var mouseout_tid = [];
$(document).ready(function(){
	$('.nav li').each(function(index){
		$(this).hover( 
			function(){
				var _self = this;
				clearTimeout(mouseout_tid[index]);
				mouseover_tid[index] = setTimeout(function() {
					$(_self).find('.menu').slideDown(200);
				}, 200);
				$(this).addClass("hover")
			},
 			function(){
				var _self = this;
				clearTimeout(mouseover_tid[index]);
				mouseout_tid[index] = setTimeout(function() {
					$(_self).find('.menu').slideUp("fast");
				}, 50);
				$(this).removeClass("hover")
			}
		);
	});
});

//pic slide
function Slide(container, options, callback, obj){
	var len = $(".slides li").length; 
	var btn = "<div class='trigger-bg'></div><ul class='slide-trigger'>";
	for(var i=0; i < len; i++) {
		btn += "<li>" + (i+1) + "</li>";
	}
	btn += "</ul>"
	$(".home-slide").append(btn);	
		
	this.container=$(container);
	this.list=$(container+' .slides');
	this.handle=$(container+' .slide-trigger li');
	this.item=$(container+' .slides li');
	this.itemWH=0;
	this.count=this.handle.length;
	this.timer=null;
	this.eTime=null;
	this.options=$.extend({
		auto:true,
		delay:6,
		duration:500,
		effect:'fade',
		event:'mouseover',
		firstDelay:null,
		index:1,
		vertical:false
		},options);
	this.init();
	if(callback){
		callback.call(this, obj);
		}
	}	
Slide.prototype={
	init:function(){
	var ulLen=$(".slides li").length
	var ulWidth=$(".slides li").width()*ulLen+"px"
	$(".slides").css({"width":ulWidth})
		var slideClip, itemW, itemH, itemWH,
			that=this,
			list=this.list, item=this.item, count=this.count,
			op=this.options, auto=!!op.auto, vertical=!!op.vertical;
		if(op.effect==='fade'){
			list.css({position:'relative'});
			item.css({position:'absolute'});
			}
		if(op.effect==='slide'){
			list.css({position:'absolute'});
			if(!list.parent().hasClass('slidebox')){
				list.wrap('<div class="slidebox"></div>');
				}
			itemW=item.outerWidth(true);
			itemH=item.outerHeight(true);
			this.container.find('.slidebox').css({position:'relative',overflow:'hidden',height:itemH,width:itemW});
			this.itemWH=vertical?itemH:itemW;
			}
		this.handle.bind(op.event, function(){that._trigger(this)});
		if(op.index==='r'){
			op.index=this._random(count);
			}
		if(op.index> count||op.index<1){
			op.index=1;
			}
		this._showFirst(op.index);
		if(auto){
			this._auto(op.firstDelay);
			this.container.hover(function(){that._stop();},function(){that._auto();});
			}
		},
	_random:function(max){
		return parseInt(Math.random() * max + 1);
		},
	_trigger:function(o){
		var index, op=this.options, handle=this.handle;
		if(op.index===(handle.index(o)+1)){
			return;
			}
		index=op.index=handle.index(o)+1;
		this._show(index);
		},
	_show:function(i){
		var that=this, op=this.options, vertical=!!op.vertical;
		this.handle.removeClass('current').eq(i-1).addClass('current');
		if(op.effect==='fade'){
			clearTimeout(this.eTime);
			this.eTime=setTimeout(function(){that.item.not(that).css({zIndex:1}).eq(i-1).css({zIndex:9}).animate({opacity:1},that.options.duration,function(){
				that.item.not(this).css({opacity:0})
				});},150);
			}
		if(op.effect==='slide'){
			itemWH=this.itemWH;
			this.list.stop().animate({left:-itemWH*(i-1)},this.options.duration);
			}
		},
	_showFirst:function(i){
		var op=this.options, vertical=!!op.vertical;
		this.handle.removeClass('current').eq(i-1).addClass('current');
		if(op.effect==='fade'){
			this.item.not(this).css({zIndex:1, opacity:0}).eq(i-1).css({zIndex:9, opacity:1});
			}
		if(op.effect==='slide'){
			itemWH=this.itemWH;
			this.list.css({left:-itemWH*(i-1)});
			}
		},
	_auto:function(delay){
		var that=this,
			op=that.options;
		this.timer=setTimeout(function(){
			op.index = op.index< that.count? ++op.index: 1;
			that._show(op.index);
			that._auto();
			}, delay ? delay*1000 : op.delay*1000);
		},
	_stop:function(){
		clearTimeout(this.timer);
		}
	};
