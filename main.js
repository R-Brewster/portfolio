$(document).ready(initialize);

function initialize() {
    //Add click handler
    $("#scroll_up_glyph").on('click', scrollUp);
    $("#scroll_down_glyph").on('click', scrollDown);
    $(".topic_tile").on('click', modalData);
}

function scrollUp() {
    $("#development_text")[0].scrollTop -= 100;
}

function scrollDown() {
    $("#development_text")[0].scrollTop += 100;
}

function modalData(event) {
        var tile = $(event.target);
        var topic = tile.data('whatever')
        // modal.find('.modal-title').text('test' + topic)
        $("#about_modal_title").text(topic)
        $("#about_modal").modal('show')
}
