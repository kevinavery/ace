define(function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var Tokenizer = require("../tokenizer").Tokenizer;
var EnglishHighlightRules = require("./english_highlight_rules").EnglishHighlightRules;
var EnglishFoldMode = require("./folding/english").FoldMode;

var Mode = function() {
    this.$tokenizer = new Tokenizer(new EnglishHighlightRules().getRules());
    this.foldingRules = new EnglishFoldMode();
};
oop.inherits(Mode, TextMode);

(function() {
    
    this.createWorker = function(session) {
        return null;
    };

}).call(Mode.prototype);

exports.Mode = Mode;
});
