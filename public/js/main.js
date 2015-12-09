var swearboxHandler = function () {
    var $result = $('#result');
    var prev = [];

    var init = function() {
        var phrase = swearbox.swear();
        prev.push(phrase);
        $result.text(phrase);
    };
    var previous = function() {
        prev.pop();
        var phrase = prev.pop();
        if (!phrase) {
            init();
        } else {
            $result.text(phrase);
        }
    };
    return {
        init: init,
        previous: previous
    }
}();

$(swearboxHandler.init());

$('#swear').click(swearboxHandler.init);
$('#previous').click(swearboxHandler.previous);