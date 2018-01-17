function size() {
    var height = ($(window).height() - 20);
    $(".jumbotron-top, .about, .contact").css("height", height + "px");
    if($(window).width() > 560) {
        $(".container-mid").css("height", (height/2) + "px");
    }
}

$(document).ready(function() {
    size();
    $(window).resize(size);

    $("#btn-top").click(function() {scrollTo("#top")});
    $("#btn-languages").click(function() {scrollTo("#languages")});
    $("#btn-about").click(function() {scrollTo("#about")});
    $("#btn-contact").click(function() {scrollTo("#contact")});
});

function scrollTo(place) {
    var offset = $(place).offset();
    offset.left -= 20;
    offset.top -=20;
    $("html, body").animate({
        scrollTop: offset.top,
        scrollLeft: offset.left
    }, 800);
}
