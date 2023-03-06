// ==UserScript==
// @name         FastChangeImg591
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  an plugin to Sinyi website, can use keyboard to change left/right img.
// @author       You
// @match        https://sale.591.com.tw/*
// @grant        none
// ==/UserScript==

window.onload = function() {
    document.onkeydown = FastChangeImg591;
};

function FastChangeImg591(e) {
    var leftvalue, rightvalue;
    //var an = document.querySelectorAll('a[href]');
    var cprev = document.querySelector('.big-picture-left');
    var cnext = document.querySelector('.big-picture-right');


    e = e || window.event;
    switch (e.keyCode) {
        case 37:
            //alert('left');
            //$(".carousel-control-prev").click();
            cprev.click();
            break;
        case 38:
            //alert('up');
            break;
        case 39:
            //$(".carousel-control-next").click();
            cnext.click();
            break;
        case 40:
            //alert('down');
            break;
    }
}
