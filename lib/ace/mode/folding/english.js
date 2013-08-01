
define(function(require, exports, module) {
"use strict";

var oop = require("../../lib/oop");
var Range = require("../../range").Range;
var BaseFoldMode = require("./fold_mode").FoldMode;

var FoldMode = exports.FoldMode = function() {};

oop.inherits(FoldMode, BaseFoldMode);

(function() {

    // This are only needed to satisfy BaseFoldMode
    this.foldingStartMarker = /\[.*/;
    this.foldingStopMarker = /\]/;

    this.getFoldWidgetRange = function(session, foldStyle, row) {
        var line = session.doc.getLine(row);
        var regex = /\[([^ \[\]]+ )+[^ \[\]]+\]/;

        var ranges = new Array();
        var column = 0;
        var match = null;
        while (match = regex.exec(line)) {
            column += match.index;
            matchLen = match[0].length;

            ranges.push(new Range(row, column, row, column + matchLen));

            line = line.substring(match.index + matchLen);
            column += matchLen;
        }
        
        return ranges;
    };

}).call(FoldMode.prototype);

});
