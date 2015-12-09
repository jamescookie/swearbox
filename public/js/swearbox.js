if (typeof exports !== "undefined") {
    var _ = require('underscore');
}

(function (exports, _) {
    exports.swear = function () {
        var verbs = ['fucking', 'wanking', 'leaking'];
        var common = ['lick', 'bash', 'suck', 'slapp', 'spitt', 'munch', 'gobbl', 'juggl'];
        var adjectives = ['shit', 'arse', 'scrotum', 'tit', 'fart', 'piss', 'cock', 'fuck', 'cunt', 'wank', 'bollock', 'spunk', 'twat', 'minge'];
        var nouns = ['face', 'stain', 'nose', 'monkey', 'juice', 'candle', 'sack', 'knob', 'worm', 'whale', 'jockey', 'bubble', 'whore'];
        var rand = function (it) {
            return it[Math.floor(Math.random() * it.length)]
        };
        var findFrom = function(list, common, suffix) {
            var found = rand(_.union(list, common));
            var fromCommon = _.contains(common, found);
            return {
                word: found + (fromCommon ? suffix : ''),
                fromCommon: fromCommon
            }
        };
        var adjective = rand(adjectives);
        var verbContainer = findFrom(verbs, common, 'ing');
        var noun = verbContainer.fromCommon ? rand(nouns) : findFrom(nouns, common, 'er').word;
        return adjective + "-" + verbContainer.word + " " + rand(_.without(adjectives, adjective)) + " " + noun;
    };
})(typeof exports === 'undefined' ? this['swearbox'] = {} : exports, _);
