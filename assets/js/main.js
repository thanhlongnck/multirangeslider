$(function () {
    // Range slider
    $("#slider-range").slider({
        range: true, 
        min: 0,
        max: 1439,
        step: 1,
        create: function(event, ui){
            $(this).slider("option", "values", [479,959]);
        },
        slide: function( event, ui ) {
            var startValue = ui.values[0];
            var endValue = ui.values[1];

            startValue = moment("00:00", "HH:mm").add(startValue, "minutes");
            endValue = moment("00:00", "HH:mm").add(endValue, "minutes");

            $( "#min-price").html(startValue.format("HH:mm"));
            $( "#max-price").html(endValue.format("HH:mm"));
        }
    });
});