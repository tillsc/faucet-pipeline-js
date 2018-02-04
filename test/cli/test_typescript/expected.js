(function () {
'use strict';

if(typeof global === "undefined" && typeof window !== "undefined") {
	window.global = window;
}

var Util = /** @class */ (function () {
    function Util() {
    }
    return Util;
}());
var FOO = "lorem ipsum";
var BAR = "dolor sit amet";

console.log("~~ " + Util + " ~~ " + FOO + " ~~ " + BAR + " ~~");

}());
