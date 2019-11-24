// ==UserScript==
// @name        URL AND Title Copy
// @namespace
// @description Copy text including URL and title to clipboard
// @include     http://*
// @include     https://*
// @version     1
// @grant       GM_xmlhttpRequest
// @grant       GM_setClipboard
// command + u で起動
// ==/UserScript==


(function(){

document.addEventListener('keydown', function(event){
    if(!event.metaKey || event.keyCode != 85) return;
    event.stopPropagation();
    var loc = window.location;
    var title = document.title;

     var txt = "1."+title + "\n" + loc;
    GM_setClipboard(txt);
    alert('Copied');
});


})();
