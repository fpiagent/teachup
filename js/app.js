$(document).foundation();

$(document).ready(function() {
    // Actions
    $('#submit').click(function() {
        $('#begin').hide();
        $('#exercise').show();
        fillSelect();
    });

    $('#back').click(function() {
        $('#begin').show();
        $('#exercise').hide();
    });

    $('#finish').click(function() {
        $('#begin').show();
        $('#exercise').hide();
    });

});

function fillSelect() {
    $('.select').append(new Option('tu vieja', 'tu vieja'))
    $('.select').append(new Option('tu vieja', 'tu vieja'))
    $('.select').append(new Option('tu vieja', 'tu vieja'))
}
