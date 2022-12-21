// ==UserScript==
// @name         591pagebook
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       You
// @match        https://sale.591.com.tw/*
// @grant        none
// ==/UserScript==

//console.log("591pagebook")
//var x = document.querySelector("#imageCen > div > div.big-picture-right")
//x.click()

window.onload = function() {
    document.onkeydown = pagebook;
};


function pagebook(e) {
    var lefturl="", righturl="";
    var leftvalue, rightvalue;

    e = e || window.event;
    switch (e.keyCode) {
        case 37:
            //alert('left');
            var x = document.querySelector("#imageCen > div > div.big-picture-left")
            x.click()
            break;
        case 38:
            //alert('up');
            break;
        case 39:
            //alert('right');
            var y = document.querySelector("#imageCen > div > div.big-picture-right")
            y.click()
            break;
        case 40:
            //alert('down');
            break;
    }
}