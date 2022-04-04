$(document).ready(function () {
    // RWD 漢堡選單
    $(".showmenu").click(function (e) {
        e.preventDefault();
        $(".menu").toggleClass("menu-show");
        $('i', this).toggleClass('fas fa-bars fa-solid fa-xmark');
    });

    // Scroll to top 效果
    $(".scroll-top a").click(function (e) {
        e.preventDefault();
        $("html,body").animate({ scrollTop: 0 }, 500);
    });

    // 到一定高度顯示 Scroll to top 按鈕
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.scroll-top a').fadeIn();
        } else {
            $('.scroll-top a').fadeOut();
        }
    });

    // Click點擊收藏商品
    $('.favorite').click(function (e) {
        e.preventDefault();
        $('i', this).toggleClass('fa-solid fa-heart fa-regular fa-heart');
    });
});