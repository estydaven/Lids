$(document).ready(function() {
    $('#main_nav_ul').click(function (event) {
        if (event.target.tagName.toLowerCase() === 'a') {
            var target = $(event.target.hash);
            target = target.length ? target : $('[name=' + event.target.hash + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 54
                }, 2000);
                return false;
            }
        }
    });
})

$('.down__pic').click(function (){
    var $div = $(this).data('div');
    $('html, body').animate({
        scrollTop: $('#'+$div).offset().top
    }, 1000);
});

var updownElem = document.getElementById('updown');

var pageYLabel = 0;

updownElem.onclick = function() {
    var pageY = window.pageYOffset || document.documentElement.scrollTop;

    switch (this.className) {
        case 'up':
            pageYLabel = pageY;
            window.scrollTo(0, 0);
            this.className = 'down';
            break;

        case 'down':
            window.scrollTo(0, pageYLabel);
            this.className = 'up';
    }

}

window.onscroll = function() {
    var pageY = window.pageYOffset || document.documentElement.scrollTop;
    var innerHeight = document.documentElement.clientHeight;

    switch (updownElem.className) {
        case '':
            if (pageY > innerHeight) {
                updownElem.className = 'up';
            }
            break;

        case 'up':
            if (pageY < innerHeight) {
                updownElem.className = '';
            }
            break;

        case 'down':
            if (pageY > innerHeight) {
                updownElem.className = 'up';
            }
            break;

    }
}

$(document).ready(function () {
    $('input,textarea').focus(function(){
        $(this).data('placeholder',$(this).attr('placeholder'))
        $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
    });
});