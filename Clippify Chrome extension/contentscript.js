(function () {
    // Currently this file is inluded only on Microsoft domains, no need to use regex
    // var regex = /microsoft/i;

    // Test the text of the body element against our regular expression.
    // if (regex.test(document.body.innerText)) {
    addCss("/clippy.css");

    if (!window.jQuery) {
        addScript("/jquery.min.js");
    }

    addScript("/clippy.min.js");
    addScript("/initializeClippy.js");
    // }

    function addCss(src) {
        var s = document.createElement("LINK");
        s.href = chrome.extension.getURL(src);
        s.rel = "stylesheet";
        s.type = "text/css";
        document.body.appendChild(s);
    }

    function addScript(src) {
        var s = document.createElement("SCRIPT");
        s.src = chrome.extension.getURL(src);
        document.body.appendChild(s);
    }
}());