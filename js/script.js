//네비게이션 호버시 풀 배경
{
const $gnb = $('header > .header-continer > nav > ul.gnb');
const $lnbs = $('header > .header-continer > nav > ul.gnb > li > ol.lnb');
const $bg_lnb = $('.bg_lnb');

	const navFadeIn = function(){
		$bg_lnb.stop().slideDown(500);
		$lnbs.stop().slideDown(500);
	};
	
	const navFadeOut = function(){
		$lnbs.stop().slideUp(500);
		$bg_lnb.stop().slideUp(500);
	};
	
	$gnb.on('mouseenter', function(){
		navFadeIn();
	});
	
	$gnb.on('mouseleave', function(){
		navFadeOut();
	});
	
	
	$bg_lnb.on('mouseenter', function(){
		navFadeIn();
	});
	
	$bg_lnb.on('mouseleave', function(){
		navFadeOut();
	});
	
	}

//비주얼 영역 슬라이드
{
	const $indicator = $('#visual .slides > .slides-pagination > li > a');
	const $container = $('#visual .slides > .slides-container > div');

	const $btnPrev = $('.slides > .visual-navigation.prev');
	const $btnNext = $('.slides > .visual-navigation.next');

	let nowIdx = 0;
	let intervalKey1 = null;

	const moveFn = function(){
		// $container.stop().animate({
			// left:-(100*nowIdx) + '%'},3000);
		// $container.eq(100*nowIdx + '%').stop().fadeIn(800).siblings().fadeOut();
		console.log($container.eq(nowIdx));
		$container.eq(nowIdx).stop().fadeIn(1000).siblings().fadeOut();

		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
	};


	$indicator.on('click',function(evt){
		evt.preventDefault();

		nowIdx = $indicator.index(this);
		moveFn();
	});

	$btnPrev.on('click',function(evt){
		evt.preventDefault();
		if(nowIdx>0){
			nowIdx--;
		}else{
			nowIdx=2;
		}
		moveFn();
	});

	$btnNext.on('click',function(evt){
		evt.preventDefault();
		if(nowIdx<2){	
			nowIdx++;
		}else{
			nowIdx=0;
		}
		moveFn();
	});


	// 자동 재생 확인하기 
	$(window).on('load', function(){
		intervalKey1 = setInterval(function(){
			$btnNext.trigger('click');
		},3000);
	});

}

//product 슬라이드 
{
  const $PbtnPrev = $('.cont1 > .slides-navigation.prev');
  const $PbtnNext = $('.cont1 > .slides-navigation.next');
  
  const $Pcontainer = $('.cont1 > .slides > .slides-container');

  $PbtnPrev.on('click', function(evt){
		evt.preventDefault();

		$Pcontainer.stop().animate({
				left:379
		},400,'easeInOutCubic',function(){
				$Pcontainer.children('li').eq(4).prependTo($Pcontainer);
				$Pcontainer.css('left',0);
		});
});


$PbtnNext.on('click', function(evt){
		evt.preventDefault();

		$Pcontainer.stop().animate({
				left:-379
		},400,'easeInOutCubic',function(){
				$Pcontainer.children('li').eq(0).appendTo($Pcontainer);
				$Pcontainer.css('left',0);
		});
})

}

// search-container 돋보기 클릭시 alert 창 
$(document).ready(function(){
	$('#searchbtn').click(function(){
		alert('검색어를 입력해주세요');
	});
});


//햄버거 버튼 클릭시 풀 네비게이션 나오게
$('.header-continer > .btn-box .menu > a').on('click',function(){
	if ($(this).hasClass('open')) {
		$(this).removeClass('open')
		$('header > .full-nav').slideUp(800);
	} else {
		$(this).addClass('open')
		$('header > .full-nav').slideDown(800);
	}
});


