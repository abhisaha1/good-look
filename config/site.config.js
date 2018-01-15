var config = new function() {
    this.debug = false;
    this.getBaseUrl = () => {
        return typeof window !== "undefined" && window.BASEURL
            ? window.BASEURL
            : "https://www.ajaxtown.com";
    };
}();

module.exports = config;
