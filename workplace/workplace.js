$(function() {
    $("#welfare-button").on('click', function() {
        if ($("#welfare-checkbox").prop('checked')) {
            $("#welfare-detail-section").show("slow");
            $("#welfare-yajirusi").text("expand_less");
        } else {
            $("#welfare-detail-section").hide("slow");
            $("#welfare-yajirusi").text("expand_more");
        }
    });
})

$(function() {
    $("#culture-button").on('click', function() {
        if ($("#culture-checkbox").prop('checked')) {
            $("#culture-detail-section").show("slow");
            $("#culture-yajirusi").text("expand_less");
        } else {
            $("#culture-detail-section").hide("slow");
            $("#culture-yajirusi").text("expand_more");
        }
    });
})

$(function() {
    $("#followup-button").on('click', function() {
        if ($("#followup-checkbox").prop('checked')) {
            $("#followup-detail-section").show("slow");
            $("#followup-yajirusi").text("expand_less");
        } else {
            $("#followup-detail-section").hide("slow");
            $("#followup-yajirusi").text("expand_more");
        }
    });
})
