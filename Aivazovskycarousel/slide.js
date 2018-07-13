$(document).ready(function () {
    var l = $('.slide').length;
    var i = 0;
    $('.inner').css('width', l * 100 + "%")
    $('.slide').css('width', 100 / l + "%")
    $('.select .pht').click(function () {
        $('.carusel').css("display", "block");
        $('.inner').css("left", $(this).index() * (-100) + "%");
        i = $(this).index() * (-100);
    });
    $('#close').click(function () {
        $('.carusel').css("display", "none");
    });
    $('#right').click(function () {
        right();
    });
    $('#left').click(function () {
        left();
    });
    $(document).keydown(function (event) {
        if (event.keyCode == 39) {
            right();
        } else if (event.keyCode == 37) {
            left();
        } else if (event.keyCode == 27) {
            $('.carusel').css("display", "none");
        }
    });
    function right() {
        if (i > -(l - 1) * 100) {
            i -= 100;
            $('.inner').css("left", i + "%");
        } else {
            i = 0;
            $('.inner').css("left", i + "%");
        }
    }
    function left() {
        if (i < 0) {
            i += 100;
            $('.inner').css("left", i + "%");
        } else {
            i = -(l - 1) * 100;
            $('.inner').css("left", i + "%");
        }
    }
});