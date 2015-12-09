if (typeof exports !== "undefined") {
    var _ = require('underscore');
}

(function (exports, _) {
    exports.swear = function () {
        var verbs = ['licking', 'fucking', 'wanking', 'bashing', 'sucking', 'slapping', 'leaking', 'spitting', 'munching', 'gobbling'];
        var common = ['lick', 'bash', 'suck', 'slapp', 'spitt', 'munch', 'gobbl', 'juggl'];
        var adjectives = ['shit', 'arse', 'scrotum', 'tit', 'fart', 'piss', 'cock', 'fuck', 'cunt', 'wank', 'bollock', 'spunk', 'twat', 'minge'];
        var nouns = ['face', 'stain', 'nose', 'juggler', 'monkey', 'juice', 'candle', 'licker', 'sack', 'knob', 'worm', 'whale', 'jockey', 'flaps', 'bubble', 'whore'];
        var rand = function (it) {
            return it[Math.floor(Math.random() * it.length)]
        };
        var adj = rand(adjectives);
        adjectives.splice(_.contains(adjectives, adj), 1);
        return adj + "-" + rand(verbs) + " " + rand(adjectives) + " " + rand(nouns);
    };
})(typeof exports === 'undefined' ? this['swearbox'] = {} : exports, _);
