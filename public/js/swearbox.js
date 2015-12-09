if (typeof exports !== "undefined") {
    var _ = require('underscore');
}

(function (exports, _) {
    exports.swear = function () {
        var verbs = ['fucking', 'wanking', 'leaking'];
        var common = ['lick', 'bash', 'suck', 'slapp', 'spitt', 'munch', 'gobbl', 'juggl'];
        var commonWithVerbs = ['fuck', 'wank'];
        var adjectives = ['shit', 'arse', 'scrotum', 'tit', 'fart', 'piss', 'cock', 'cunt', 'bollock', 'spunk', 'twat', 'minge'];
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
        adjectives = _.without(adjectives, adjective);
        var verbContainer = findFrom(verbs, common, 'ing');
        var noun = verbContainer.fromCommon ? rand(nouns) : findFrom(nouns, common, 'er').word;
        return adjective + "-" + verbContainer.word + " " + (verbContainer.fromCommon ? rand(_.union(adjectives, commonWithVerbs)) : rand(adjectives)) + " " + noun;
    };
})(typeof exports === 'undefined' ? this['swearbox'] = {} : exports, _);
