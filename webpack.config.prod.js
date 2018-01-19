const path = require("path");
const webpack = require("webpack");
const BabiliPlugin = require("babili-webpack-plugin");
var autoprefixer = require("autoprefixer");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "../css/style.css"
});

module.exports = {
    entry: {
        src: ["babel-polyfill", "./src/app"]
    },
    output: {
        path: path.join(__dirname, "public/js"),
        filename: "[name]-bundle.js",
        publicPath: "/static/"
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: "'production'"
            },
            ASSETS: "public/"
        }),
        new BabiliPlugin(),
        extractSass,
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: {
                safe: true
            }
        })
    ],
    module: {
        rules: [
            // js
            {
                test: /\.js$/,
                loaders: ["babel-loader"],
                include: [
                    path.join(__dirname, "src"),
                    path.join(__dirname, "config")
                ],
                exclude: /node_modules/
            },
            // CSS
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader", "postcss-loader"],
                    publicPath: path.join(__dirname, "public/css")
                }),
                include: path.join(__dirname, "public/scss")
            },
            {
                test: /\.(svg|eot|ttf|woff|woff2)?$/,
                loaders: [{ loader: "url-loader" }]
            }
        ]
    }
};
