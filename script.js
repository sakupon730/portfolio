/********** メニュークリック時のスムーススクロールの記述 **********/
$(function(){
    $('a[href^="#"]').click(function(){
      var speed = 800;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
});



/********** ハンバーガーメニューの記述 **********/
$(function () {
    $('#menu-btn').on('click', function () {
        $(this).toggleClass('active');
        $('#hbg-menu').toggleClass('active');

        //ページ内リンクがクリックされた時にハンバーガーメニューを消す処理
        $('#ab-link, #wo-link, #co-link, #top-link').on('click', function () {
            $('#menu-btn, #hbg-menu').removeClass('active');
        });
    });
});




/********** モーダルウィンドウの処理 **********/
$(function(){

    //開くときの処理
    $('.click-more').on('click', function(e){
        e.preventDefault();

        var modal = '#' + $(this).attr('data-target');
        $(modal).toggleClass('active');
    });
    
    //閉じるときの処理
    $('.modal-bg, .close').on('click', function(e){
        e.preventDefault();

        $('.modal-close').removeClass('active');
    });

});




/********** スクロールアニメーションの記述 **********/
$('.contents-index').css('visibility', 'visible');
$(window).scroll(function(){
    var windowHeight = $(window).height();
    var topWindow = $(window).scrollTop();
    var windowWidth = $(window).width();

    if(windowWidth >= 960){
        //横幅960px以上のアニメーション
        $('.contents-index, .title, .intro-txt, .down-button-bk').each(function(){
            var targetPosition = $(this).offset().top;
            if(topWindow > targetPosition - windowHeight + 50){
                $(this).addClass('scrollFadeInUp');
            }
        });
        $('.ct-ttl, .pf-img, .profile, .comment, .works-item, .contact, .form-amt').each(function(){
            var targetPosition = $(this).offset().top;
            if(topWindow > targetPosition - windowHeight + 150){
                $(this).addClass('scrollFadeInUp');
            }
        });
    }else if(windowWidth >= 601 && 960 >= windowWidth){
        //横幅601~960pxの時のアニメーションの処理
        $('.contents-index, .title, .intro-txt, .down-button-bk, .ct-ttl, .pf-img, .profile, .comment, .works-item, .contact, .form-amt').each(function(){
            var targetPosition = $(this).offset().top;
            if(topWindow > targetPosition - windowHeight + 150){
                $(this).addClass('scrollFadeInUp');
            }
        });
    }else{
        //introductionのアニメーションの処理
        $('.title, .intro-txt').each(function(){
            var targetPosition = $(this).offset().top;
            if(topWindow > targetPosition - windowHeight + 50){
                $(this).addClass('scrollFadeInUp');
                $('.btnOfSmall').addClass('fadeInUp');
            }
        });
        //横幅480px以下, 横幅481~600pxのアニメーション
        $('.contents-index, .ct-ttl, .pf-img, .profile, .comment, .works-item').each(function(){
            var targetPosition = $(this).offset().top;
            if(topWindow > targetPosition - windowHeight + 150){
                $(this).addClass('scrollFadeInUp');
            }
        });

        $('.contact, .form-amt').each(function(){
            var targetPosition = $(this).offset().top;
            if(topWindow > targetPosition - windowHeight + 100){
                $(this).addClass('scrollFadeInUp');
            }
        });
    }
});