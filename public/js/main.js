var swearbox = function () {
    var $result = $('#result');
    var prev = [];
    var swear = function() {
        var verbs = ['licking', 'fucking', 'wanking', 'bashing', 'sucking', 'slapping', 'leaking', 'spitting'];
        var adjectives = ['shit', 'arse', 'scrotum', 'tit', 'fart', 'piss', 'cock', 'fuck', 'cunt', 'wank', 'bollock', 'spunk', 'twat'];
        var nouns = ['face', 'stain', 'nose', 'juggler', 'monkey', 'juice', 'candle', 'licker', 'sack', 'knob', 'worm', 'whale', 'jockey', 'flaps', 'bubble'];
        var rand = function (it) {
            return it[Math.floor(Math.random() * it.length)]
        };
        var adj = rand(adjectives);
        adjectives.splice($.inArray(adj, adjectives), 1);
        return adj + "-" + rand(verbs) + " " + rand(adjectives) + " " + rand(nouns);
    };
    var init = function() {
        var phrase = swear();
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
        swear: swear,
        init: init,
        previous: previous
    }
}();

$(swearbox.init());

$('#swear').click(swearbox.init);
$('#previous').click(swearbox.previous);