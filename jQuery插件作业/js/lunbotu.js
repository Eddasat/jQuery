$(function () {
    var index = 0,
        timer = null,
        main = $('.main'),
        pics = $('.banner-slide'),
        len = pics.length,
        dots = $('.dots>span'),
        prev = $('.prev'),
        next = $('.next')


    function slideimg() {
        main.mouseover(function () {
            stopplay()
            console.log('111')
        }).mouseout(function () {
            startplay()
        })
        main.mouseout();
    }

    function startplay() {
        timer = setInterval(function () {
            index++;
            if (index >= len) index = 0;
            changeImg()
        }, 2000)
    }

    function stopplay() {
        if (timer) clearInterval(timer)
    }
    function changeImg() {
        pics.eq(index).addClass('slide-active').parent().siblings().children().removeClass('slide-active');
        dots.eq(index).addClass('active').siblings().removeClass('active');
    }



    prev.click(function () {
        index--;
        if (index<0) index=len-1
        changeImg()
    })
    next.click(function(){
        index++;
        if(index>=len) index=0;
        changeImg();
    })
    dots.click(function () {
        index=$(this).index()
        changeImg()
    })


    slideimg();



})
