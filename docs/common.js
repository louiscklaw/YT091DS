
function backToHome() {
    console.log(window.location.href);
    if (window.location.href.search('127') > -1) {
        window.location.href = "/";
    } else {
        // https://louiscklaw.github.io/YT091DS/
        window.location.href = "https://louiscklaw.github.io/YT091DS/";
    }

}