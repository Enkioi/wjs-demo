/*
 * 自己的JS脚步
 * @Author: iceStone
 * @Date:   2015-12-12 10:59:26
 * @Last Modified by:   iceStone
 * @Last Modified time: 2015-12-12 11:01:38
 */
 $(function () {

 	function resize() {
 		var windowWidth = $(window).width();
 		var isSmallScreen = windowWidth < 768;

 		$('#main_ad > .carousel-inner > .item').each(function(i,item){
 			var $item = $(item);
 			var imgSrc = isSmallScreen ? $item.data('img-xs') : $item.data('img-lg');
 			$item.css('backgroundImage','url("'+imgSrc+'")');
 			if(isSmallScreen){
 				$item.html('<img src="'+imgSrc+'" alt="" />');
 			}else{
 				$item.html("");
 			}
 			/*产品区域*/
 			var width = 30;
 			$('.nav-tabs').children().each(function(index,elements) {
 				width += elements.clientWidth;
 			});
 			if (width > windowWidth) {
 				$('.nav-tabs').css('width',width).parent().css('overflow-x','scroll');
 			}
 		});
 	}

 	$(window).on('resize',resize).trigger("resize");


 	/*轮播图手滑效果*/
 	var startX,endX; var offset = 30;
 	$('.carousel').on('touchstart',function(e){
 		startX = e.originalEvent.touches[0].clientX;
 	});
 	$('.carousel').on('touchmove',function(e){
 		endX = e.originalEvent.touches[0].clientX;
 	});
 	$('.carousel').on('touchend',function(e){
 		var distance = Math.abs(startX - endX);
 		if(distance > offset){
 			$(this).carousel(startX > endX ? 'next' : 'prev');
 		}
 	});
 	/*京泸提示框*/
 	$('[data-toggle="tooltip"]').tooltip();

 	/*新闻区域*/
 	$('#navs .nav-pills li a').on('click',function(){
 		var title = $(this).data('title');
 		$('#navs .navs-title').text(title);
 	});

 });