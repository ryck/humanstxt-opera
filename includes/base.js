// ==UserScript==
// @include http://*
// ==/UserScript==

// Background scripts can't directly interact with web pages.
// To solve this, we create this UserJS to send messages to the background script.
window.addEventListener('load', function(){
	window.opera.postError('Sending message to background.js');
	opera.extension.postMessage(document.URL);
}, false);
