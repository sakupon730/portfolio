/********** メニュークリック時のスムーススクロールの記述 **********/
$(function(){
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
});



/********** スムーススクロールの記述 **********/
$(function(){
    var current;
    var w = $(window).width();

    if(w >= 601 && 960 >= w){//横幅601~960pxの時のスムーススクロール
        $.scrollify({
            section: '.large',
            setHeights:false,
            easing:'swing',
            scrollSpeed:1000,
            before:function(i,large){
            current = i;
            },
        });
        $(window).on('resize',function(){
            if(current){
                var currentScrl = $('.large').eq(current).offset().top;
                $(window).scrollTop(currentScrl);
            }
        });    
    }else if(w >= 481 && 600 >= w){//横幅481~600pxの時のスムーススクロール
        $.scrollify({
            section: '.midi',
            setHeights:false,
            easing:'swing',
            scrollSpeed:1000,
            before:function(i,midi){
            current = i;
            },
        });
        $(window).on('resize',function(){
            if(current){
                var currentScrl = $('.midi').eq(current).offset().top;
                $(window).scrollTop(currentScrl);
            }
        });    
    }else if(w <= 480){//横幅480px以下時のスムーススクロール
        $.scrollify({
            section: '.small',
            setHeights:false,
            easing:'swing',
            scrollSpeed:1000,
            before:function(i,small){
            current = i;
            },
        });
        $(window).on('resize',function(){
            if(current){
                var currentScrl = $('.small').eq(current).offset().top;
                $(window).scrollTop(currentScrl);
            }
        });    
    }else{//通常サイズ時のスムーススクロール
        $.scrollify({
            section: '.nomal',
            setHeights:false,
            easing:'swing',
            scrollSpeed:1000,
            before:function(i,nomal){
            current = i;
            },
        });
        $(window).on('resize',function(){
            if(current){
                var currentScrl = $('.nomal').eq(current).offset().top;
                $(window).scrollTop(currentScrl);
            }
        });    
    }
});    




/********** ハンバーガーメニューの記述 **********/
$(function(){
    $('#menu-btn').on('click',function(){
      $(this).toggleClass('active');
      $('#hbg-menu').toggleClass('active');

      //ページ内リンクがクリックされた時にハンバーガーメニューを消す処理
      $('#ab-link, #wo-link, #co-link').on('click', function(){
        $('#menu-btn, #hbg-menu').removeClass('active');
      });
    });
});




/********** moreのクリック処理 **********/
$(function(){

    //開くときの処理
    $('.click-more').on('click', function(e){
        e.preventDefault();
        $('.modal-area').toggleClass('active');
    });

    //閉じるときの処理
    $('.modal-bg, .close').on('click', function(e){
        e.preventDefault();
        $('.modal-area').removeClass('active');
    });

});






/********** スクロールアニメーションの記述 **********/
$('.contents-index').css('visibility', 'visible');
$(window).scroll(function(){
    var windowHeight = $(window).height();
    var topWindow = $(window).scrollTop();
    var windowWidth = $(window).width();

    if(windowWidth >= 960){
        //通常サイズ時のアニメーション
        $('.contents-index, .title, .intro-txt, .ct-ttl, .pf-img, .profile, .comment, .works-item, .contact, .down-button-bk, .btnOfSmall').each(function(){
            var targetPosition = $(this).offset().top;
            if(topWindow > targetPosition - windowHeight + 40){
                $(this).addClass('scrollFadeInUp');
            }
        });
    }else{
        //レスポンシブ時のアニメーション
        $('.contents-index, .title, .intro-txt, .ct-ttl, .pf-img, .profile, .comment, .works-item, .contact, .down-button-bk, .btnOfSmall').each(function(){
            var targetPosition = $(this).offset().top;
            if(topWindow > targetPosition - windowHeight + 120){
                $(this).addClass('scrollFadeInUp');
            }
        });
        $('.title, .intro-txt, .btnOfSmall').each(function(){
            var targetPosition = $(this).offset().top;
            if(topWindow > targetPosition - windowHeight + 40){
                $(this).addClass('scrollFadeInUp');
            }
        });
    }
});