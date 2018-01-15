import dev from "./site.config.local";
import production from "./site.config";

var env = "dev";

if (typeof window !== "undefined") {
    env = window.ENV;
}

if (env === "dev") {
    env = dev;
} else if (env === "production") {
    env = production;
}

var config = new function(env = dev) {
    this.debug = env.debug;
    this.baseUrl = env.getBaseUrl();
}(env);

export default config;
