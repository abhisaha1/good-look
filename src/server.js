import express from "express";
var bodyParser = require("body-parser");
import serverRendering from "./serverRendering";

const app = express();

const multipart = require("connect-multiparty");
const multipartMiddleware = multipart({ encoding: "binary" });
app.use(multipartMiddleware);
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());
app.use(express.static("public"));

if (process.env.NODE_ENV == "dev") {
    // start a webpack-dev-server
    var webpack = require("webpack");
    var wpConfigFile = "../webpack.config.dev";
    var webpackConfig = require(wpConfigFile);
    var compiler = webpack(webpackConfig);
    app.use(
        require("webpack-dev-middleware")(compiler, {
            noInfo: true,
            publicPath: webpackConfig.output.publicPath
        })
    );
    app.use(
        require("webpack-hot-middleware")(compiler, {
            log: console.log,
            path: "/__webpack_hmr",
            heartbeat: 10 * 1000
        })
    );
}

app.use(serverRendering);

let port = 4040;
app.listen(port, function() {
    console.log("====> Client listening on", port);
});
