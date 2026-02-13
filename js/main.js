window.onload = function onLoad(){
    
    var bar = new ProgressBar.Circle('#one', {
          strokeWidth: 6,
          easing: 'easeInOut',
          duration: 1400,
          color: '#187972',
          trailColor: '#eee',
          trailWidth: 1,
          svgStyle: null
    });

    var bar2 = new ProgressBar.Circle('#two', {
          strokeWidth: 6,
          easing: 'easeInOut',
          duration: 1400,
          color: '#c9cd60',
          trailColor: '#eee',
          trailWidth: 1,
          svgStyle: null
    });

    
    var bar3 = new ProgressBar.Circle('#three', {
          strokeWidth: 6,
          easing: 'easeInOut',
          duration: 1400,
          color: '#db8100',
          trailColor: '#eee',
          trailWidth: 1,
          svgStyle: null
    });
    
    
    var bar4 = new ProgressBar.Circle('#four', {
          strokeWidth: 6,
          easing: 'easeInOut',
          duration: 1400,
          color: '#d39f2a',
          trailColor: '#eee',
          trailWidth: 1,
          svgStyle: null
    });
   
    var bar5 = new ProgressBar.Circle('#five', {
          strokeWidth: 6,
          easing: 'easeInOut',
          duration: 1400,
          color: '#444',
          trailColor: '#eee',
          trailWidth: 1,
          svgStyle: null
    });
    
    document.addEventListener('scroll', function() {
        var scroll = document.documentElement.scrollTop;
        var skill_offset = document.getElementById('skill').offsetTop - 300;
        
        if(scroll >= skill_offset){
              bar.animate(0.8);
              bar2.animate(0.8);
              bar3.animate(0.7);
              bar4.animate(0.7);
              bar5.animate(0.7);
        }
    });
    
 
       
};


      
$(function(){


    $('.toggle').on('click', function(){
        $('#header').toggleClass('on');
        $('main').toggleClass('on');

        
        
            $(this).toggleClass('on');
            
            if(  $('.toggle').hasClass('on') ){
                $(this).children('i').removeClass('fa-bars').addClass('fa-times');
            }else{
                $(this).children('i').removeClass('fa-times').addClass('fa-bars');
            }
            
    });


  
    
    var base_line = -300, 
        win_w = $(window).width(),  
        sec_pos = [];    
   
    
    var tmp_html = '';
    
    //텍스트.replace('찾을문자','바꿀문자');    
    // n = n+10;    →     n+=10;
    // 텍스트 + 텍스트 or 숫자 + 텍스트 = 이어붙이기
 
     
    $('#gnb>li').each(function(){
        var this_txt= $(this).children('a').text();  // 해당 자식요소 a의 text를 불러오기      
        tmp_html += '<a href="#">' + this_txt + '</a>'; // 태그를 누적하여 생성
        
    });
    $('.page_btn').html(tmp_html); // 생성된 태그를 .page_btn의 자식요소로 넣어준다(기존내용 변경)
    
   
    // 프로그램 상에서 만들어준 태그- 가상으로 만들어준 것 
    // 생성 전에 이벤트 발생하면 - 실행x
    // 이벤트 전파
    // $('부모요소 선택자').on('이벤트','하위요소 선택자', function(){});
    
    $('.page_btn').on('click', 'a', function(){
        var i = $(this).index();
        $('html, body').stop().animate({scrollTop : sec_pos[i]}, 1000);
    });
    
    
    function section_offset_save(){
        sec_pos = []; 
        
        $('section').each(function(){
            sec_pos.push( $(this).offset().top ); 
        });

        sec_pos.push( $('section').last().offset().top + $('section').last().height() );
        
        sec_pos[0] = 0;
    }
    
    section_offset_save();
    
    $(window).on('resize', function(){
        win_w = $(this).width();
        section_offset_save(); 
    });
     
    
   $(window).on('scroll', function(){
       
       var scroll = $(this).scrollTop();
       $('section').each(function(i){    
           if( scroll >= sec_pos[i] + base_line &&  scroll < sec_pos[i+1]){
                $(this).addClass('on');
            }
       });
       
           
   });
    
  
    $('#gnb>li').on('click', function(){
        var i = $(this).index();  // 현재 클릭한 #gnb>li가 몇번째냐? 순번 구해주기.
        $('html, body').stop().animate({scrollTop : sec_pos[i]}, 1000);
    });
    
    
    
    var base_line = -300, 
        win_w = $(window).width(),  
        sec_pos = [];    
   
    
    var tmp_html = '';
    
    //텍스트.replace('찾을문자','바꿀문자');    
    // n = n+10;    →     n+=10;
    // 텍스트 + 텍스트 or 숫자 + 텍스트 = 이어붙이기
 
     
    $('#gnb>li').each(function(){
        var this_txt= $(this).children('a').text();  // 해당 자식요소 a의 text를 불러오기      
        tmp_html += '<a href="#">' + this_txt + '</a>'; // 태그를 누적하여 생성
        
    });
    $('.page_btn').html(tmp_html); // 생성된 태그를 .page_btn의 자식요소로 넣어준다(기존내용 변경)
    
   
    // 프로그램 상에서 만들어준 태그- 가상으로 만들어준 것 
    // 생성 전에 이벤트 발생하면 - 실행x
    // 이벤트 전파
    // $('부모요소 선택자').on('이벤트','하위요소 선택자', function(){});
    
    $('.page_btn').on('click', 'a', function(){
        var i = $(this).index();
        $('html, body').stop().animate({scrollTop : sec_pos[i]}, 1000);
    });
    
    
    function section_offset_save(){
        sec_pos = []; 
        
        $('section').each(function(){
            sec_pos.push( $(this).offset().top ); 
        });

        sec_pos.push( $('section').last().offset().top + $('section').last().height() );
        
        sec_pos[0] = 0;
    }
    
    section_offset_save();
    
    $(window).on('resize', function(){
        win_w = $(this).width();
        section_offset_save(); 
    });
     
    
   $(window).on('scroll', function(){
       
       var scroll = $(this).scrollTop();
       $('section').each(function(i){    
           if( scroll >= sec_pos[i] + base_line &&  scroll < sec_pos[i+1]){
//                $('section').eq(i).addClass('on');
                $(this).addClass('on');
            }
       });
       
   });
    
  
    $('#gnb>li').on('click', function(){
        var i = $(this).index();  // 현재 클릭한 #gnb>li가 몇번째냐? 순번 구해주기.
        $('html, body').stop().animate({scrollTop : sec_pos[i]}, 1000);
    });
    
    
    //home
     $('.box').on('click', function(){
        
        $(this).toggleClass('on').siblings().removeClass('on');
        
    });
    
    
    
    
    
    //portfolio
    // $('.tab>li>a').on('click', function(e){
    //     e.preventDefault();
    //     $('.pannel').stop().fadeOut();
    //     $(this).next('.pannel').stop().fadeIn();
        
    //     $(this).parent('li').addClass('on').siblings().removeClass('on');
        
    // });
    // $('.tab>li>a').first().trigger('click');

    var swiper = new Swiper("#portfolio .swiper-container", {
        // 옵션
        loop: true,
        navigation: {
            nextEl: "#portfolio .swiper-button-next",
            prevEl: "#portfolio .swiper-button-prev",
        },
        pagination: {
            el: "#portfolio .swiper-pagination",
          },
    });


  //design
  $('.list>li').each(function(){

    var label_for = $(this).children('.thumnail').attr('for'); // label_for 값 불러오기
    var img_src  = $(this).find('img').attr('src'); // img src 값 불러오기
    var tag = '<div class="detail"><label for="' + label_for + '"><img src="' + img_src + '" alt=""></label></div>' ; //태그 생성

    $(this).append(tag); // 해당 선택자에 태그를 마지막 자식요소로 추가
});  

    
    
    
    
    
    
});




