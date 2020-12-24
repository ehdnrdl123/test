$(document).ready(function(){
    $("#nav>.mainmenu").mouseover(function(){
        $(".submenu").stop().slideDown();
    });
    $("#nav").mouseleave(function(){
        $(".submenu").stop().slideUp();
    });
    var bxSlide=$("#visual").bxSlider({
         mode:"horizontal",    // 가로 수평으로 슬라이드된다.
            speed:500,        // 이동 속도를 설정한다.
            pager:true,    // 현재 위치 페이지 표시 여부를 설정한다.
            moveSlides:1,    // 슬라이드 이동 시 개수를 설정한다.
            minSlides:1,    // 최소 노출 개수를 설정한다.
            maxSlides:1,    // 최대 노출 개수를 설정한다.
            slideMargin:0, // 슬라이드 간의 간격을 설정한다.
            auto:true,         // 자동으로 흐를지 여부를 설정한다.
            controls:false    // 이전 버튼, 다음 버튼 노출 여부를 설정한다.
    });
    $("#nextBtn").on("click",function(){
        bxSlide.goToNextSlide();
    });
        $("#prevBtn").on("click",function(){
        bxSlide.goToPrevSlide();
    });
});