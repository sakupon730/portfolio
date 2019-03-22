// //moreのクリック処理
// $(function(){
//     $('.click-more').on('click', function(e){
//         e.preventDefault();
//         $('.modal-area').fadeIn();//※修正
//     })
//     $('.close, .modal-bg').on('click', function(e){
//         $('.modal-area').fadeOut();//※修正
//     });
// });

//1ページ目のスクロールボタン
$(function(){
    $('#arrow-btn-ft').click(function(e){
        e.preventDefault();
        $('html').animate({
            scrollTop:667//※数値修正
        }, 800);
    });
});


//2ページ目のスクロールボタン
$(function(){
    $('#arrow-btn-sd').click(function(e){
        e.preventDefault();
        $('html').animate({
            scrollTop:1334//※数値修正
        }, 800);
    });
});



//ハンバーガーメニュー
$(function(){
    $('#menu-btn, #menu-bg').on('click',function(){
      $(this).toggleClass('active');
      $('#hbg-menu').toggleClass('active');
    });
});



/* スクロールアニメーション */
$('.contents-index').css('visibility', 'visible');
$(window).scroll(function(){
    var windowHeight = $(window).height();
    var topWindow = $(window).scrollTop();

    $('.down-button-bk').each(function(){
        var targetPosition = $(this).offset().top;
        if(topWindow > targetPosition - windowHeight + 30){
            $(this).addClass("bkButtonFadeInUp");
        }
    });

    $('.contents-index, .title, .intro-txt, .ct-ttl, .pf-img, .profile, .comment, .works-item, .contact').each(function(){
        var targetPosition = $(this).offset().top;
        if(topWindow > targetPosition - windowHeight + 80){
            $(this).addClass("scrollFadeInUp");
        }
    });
});
