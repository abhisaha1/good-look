/*-------------------------------------------------------------------*
 * This file is responsible for performing isomorphic javascript
 * rendering which means the code will be executed in the server and
 * then will be passed down to the client
 *-------------------------------------------------------------------*/

import React from "react";
import ReactDOM from "react-dom/server";
import { StaticRouter, Route } from "react-router";
import { matchPath } from "react-router-dom";
import routes from "./routes";

import App from "./containers/App";

module.exports = function(req, res) {
    var bundle =
        process.env.NODE_ENV == "production"
            ? "/js/src-bundle.js"
            : "/static/src-bundle.js";
    const HTML = `
            <!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no" />
                <link rel="stylesheet" href="/css/bootstrap.min.css">
                <title>Ajaxtown</title>
                <meta name="apple-mobile-web-app-capable" content="yes">
                <meta name="mobile-web-app-capable" content="yes">
              </head>
              <body id="client">
                <div id="app"></div>
                <script type="application/javascript">
                   window.ENV = "${process.env.NODE_ENV}";
                </script>
                <script src="${bundle}"></script>
                <script type="text/javascript">
                    window.saveData = function (data) {
                        //  clear the localstorage
                        delete localStorage.data;
                        //  send this data to the server
                        //  {data}
                        alert(JSON.stringify(data));
                    }
                </script>
              </body>
            </html>
        `;
    res.send(HTML);
};
