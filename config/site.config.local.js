var config = new function() {
    this.debug = true;
    this.getBaseUrl = () => {
        return "http://localhost:4040/api";
    };
}();

module.exports = config;
