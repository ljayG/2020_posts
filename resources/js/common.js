$(document).ready(function() {
    deviceView();
    // desktopNoscroll();

    function deviceView(){
        var windowWidth = $( window ).width();
        if(windowWidth < 1024) {
            $("#wrapper").addClass("mobileView").removeClass("deskView");
        } else {
            $("#wrapper").addClass("deskView").removeClass("mobileView");
        }
    }
    $(window).resize(function(){
        deviceView();
    });

    // 퀵메뉴, 상단바로가기 버튼
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$('#btnTop').fadeIn();
		} else {
			$('#btnTop').fadeOut();
		}
	});
    
	// scroll body to 0px on click
	$('#btnTop').bind("click", function(e) {
		// Prevents the default action to be triggered.
		e.preventDefault();

		$('body,html').animate({
			scrollTop: 0
		}, 500);
	});

	// 탭메뉴
    $(".main_tabmenu .tab > a").bind('click', function (e) {
        e.preventDefault();

        var $status = $(this).parent('li');
        var $index = $(this).attr('data-controls');

        if($status.hasClass('active') == false){
            $(".main_tabmenu .tab").removeClass('active');
            $status.addClass('active');
        }

        $(".tabpanel").removeClass('show');
        $(".tabpanel#" + $index).addClass('show');
    });

	$('#displaySlide').owlCarousel({
		margin: 10,
		loop: false,
		dots: false,
		autoWidth: true,
		items: 4,
		center: true,
		responsive: {
			1024 : {
				center: false,
			}
		}
	});

	$('#poetrySlider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		mobileFirst: true,
		initialSlide: initSlider, // 현 강사 위치 슬라이드 처음으로 위치 0~부터 시작
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					arrows: true,
					slidesToShow: 5,
					slidesToScroll: 1,
				}
			},
		]
	});
});