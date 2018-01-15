/*-------------------------------------------------------------------*
 * This file is responsible for performing isomorphic javascript
 * rendering which means the code will be executed in the server and
 * then will be passed down to the client
 *-------------------------------------------------------------------*/

import React from "react";
import ReactDOM from "react-dom/server";
import { StaticRouter, Route } from "react-router";
import { matchPath } from "react-router-dom";
import { Provider } from "react-redux";
import routes from "./routes";
import store from "./redux/createStore";

import App from "./containers/App";

module.exports = function(req, res) {
    let promises_ = [];
    const matches = routes.reduce((matches, route) => {
        const match = matchPath(req.url, route.path, route);
        if (match) {
            if (
                route.component.fetchData &&
                route.component.fetchData(match).length > 0
            ) {
                promises_ = route.component
                    .fetchData(match)
                    .map(req => req(store.dispatch, store.getState()));
            } else {
                promises_ = [Promise.resolve({})];
            }
        }
        return matches;
    }, []);

    if (matches.length === 0) {
        res.status(404);
    }
    //const promises = matches.map(match => match.promise);
    var bundle =
        process.env.NODE_ENV == "production"
            ? "/js/src-bundle.js"
            : "/static/src-bundle.js";
    Promise.all(promises_).then(
        () => {
            const data = store.getState();
            const context = {};
            const renderedComponent = ReactDOM.renderToString(
                <StaticRouter context={context} location={req.url}>
                    <Provider store={store}>
                        <App routes={routes} initialData={data} />
                    </Provider>
                </StaticRouter>
            );

            if (context.url) {
                res.redirect(context.url);
            } else {
                const HTML = `
                <!DOCTYPE html>
                <html lang="en">
                  <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no" />
                    <link rel="stylesheet" href="/css/bootstrap.min.css">
                    <link rel='stylesheet' href='/css/font-awesome.min.css' type='text/css' media='all'/>
                    <title>Ajaxtown</title>
                    <link rel="stylesheet" href="/css/style.css">
                    <meta name="apple-mobile-web-app-capable" content="yes">
                    <meta name="mobile-web-app-capable" content="yes">
                  </head>
                  <body id="client">
                    <div id="app">${renderedComponent}</div>
                    <script type="application/javascript">
                       window.__INITIAL_STATE__ = ${JSON.stringify(data)};
                       window.ENV = "${process.env.NODE_ENV}";
                    </script>
                    <script src="${bundle}"></script>
                  </body>
                </html>
            `;
                res.send(HTML);
            }
        },
        error => {
            //TODO: Better error handling
            console.log(error);
            //handleError(res, error);
        }
    );
};
