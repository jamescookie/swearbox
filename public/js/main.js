var swearboxHandler = function () {
    var $result = $('#result');
    var prev = [];
    var pushed = false;

    var init = function() {
        var phrase = swearbox.swear();
        prev.push(phrase);
        pushed = true;
        $result.text(phrase);
    };
    var previous = function() {
        if (pushed) {
            prev.pop();
            pushed = false;
        }
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