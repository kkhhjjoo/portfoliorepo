$(function(){
  
 //header  
      
    //1. 브라우저의 너비 체크
    
    var win_w = $(window).width();
    
    $(window).on('resize', function(){
        win_w = $(this).width();
        
        if(win_w>980){
             $('.sub_wrap').removeAttr('style');
             $('.depth_2').removeAttr('style');
        }
        
    });
    
    
    //2. gnb이벤트
    $('#gnb>li').on('mouseenter', function(){
        // .stop(true, true) 옵션 mouseenter, mouseleave일때만 적용
        if(win_w>980){
            $(this).children('.sub_wrap').css('z-index','1').stop(true, true).fadeIn(); 
        }else{
            
            $('#gnb>li>a').off('click');
            $('#gnb>li>a').on('click', function(){
                $('.sub_wrap').stop().slideUp();
                $('.depth_2').stop().slideUp();
                $(this).next('.sub_wrap').stop().slideToggle();
            });
            
            $('.depth_1>li>a').off('click');
            $('.depth_1>li>a').on('click', function(){
                $('.depth_2').stop().slideUp();
                $(this).next('.depth_2').stop().slideToggle();
            });
        
        }
        
    });
    
    $('#gnb>li').on('mouseleave', function(){
        if(win_w>980){
            $(this).children('.sub_wrap').css('z-index','0');
        }
        
    });
    
    $('#gnb').on('mouseleave', function(){
        if(win_w>980){
            $('.sub_wrap').stop(true, true).fadeOut(); 
        }
    });
    
    $('.toggle').on('click', function () {
        $('.nav_wrap').toggleClass('on');
    });
    
    
//scroll
    
    
    
    var base_line = -300;
    var win_w = $(window).width();
    var sec_pos = []; 
    function section_offset_save(){
        sec_pos = []; // 기존 값 비우기
// 새로 저장
        $('section').each(function(){
            sec_pos.push( $(this).offset().top );
        });

        sec_pos.push( $('section').last().offset().top + $('section').last().height() );
        sec_pos[0] = 0; // 첫번째 값을 문서 최상단인 0으로 설정
    }
    
    section_offset_save(); // 최초 실행시 위치값 구해주기 - 함수 호출
    
   
    $(window).on('resize', function(){
        win_w = $(this).width();
        section_offset_save();  // resize될때마다 업데이트
    });
     
    
   $(window).on('scroll', function(){
       
       var scroll = $(this).scrollTop();
       
       $('section').each(function(index){    
           if( scroll >= sec_pos[index] + base_line &&  scroll < sec_pos[index+1]){
                $('section').removeClass('on').eq(index).addClass('on');
            }
       });
       
   });
    

    
    
    
  //best  
    
    
    var swiper = new Swiper('#best .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 50,
        freeMode: true,
        hide:true,
        navigation: {
            nextEl: '#best .swiper-button-next', // 넥스트 버튼 - 선택자 지정
            prevEl: '#best .swiper-button-prev', // 프리뷰 버튼 - 선택자 지정
          },
    });
   
    
    
    
    
    
    
    
    
    
//recommend  
 
    $('#recommend .box').on('mouseenter', function(){
        
        var img_src = $(this).find('img').attr('src'); // src 현재 값 불러오기
        img_src = img_src.replace('.jpg','-hover.jpg');                 
        // img_src에 있는 .jpg 문자를 -hover.png로 바꾼다. 그리고 다시 img_src에 저장한다(경로수정)
        $(this).find('img').attr('src', img_src); // src에 img_src변수 값 저장
        
    });
    
    
    $('#recommend .box').on('mouseleave', function(){
        
        var img_src = $(this).find('img').attr('src');
        img_src = img_src.replace('-hover.jpg','.jpg');
        $(this).find('img').attr('src', img_src);
        
    });
    
    
 //지속가능한 내일을 위한 솔루션(sustainable)  
    
    
    var swiper = new Swiper('#sustainable .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 50,
        freeMode: true,
        hide:true,
        scrollbar: {
            el: '#sustainable .swiper-scrollbar',
            hide: true,
        },
    });   
    
    
    
    
    
    
    
    
});

