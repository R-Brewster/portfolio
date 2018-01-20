$(document).ready(initialize);

function initialize() {
    //Add click handler
    $("#scroll_up_glyph").on('click', scrollUp);
    $("#scroll_down_glyph").on('click', scrollDown);
}

function scrollUp() {
    $("#development_text")[0].scrollTop -= 100;
}

function scrollDown() {
    $("#development_text")[0].scrollTop += 100;
}
