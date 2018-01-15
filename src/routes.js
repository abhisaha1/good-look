import React from "react";
import Main from "./containers/Main";
// stateless
const Welcome = () => {
    return <div>"Welcome component"</div>;
};
const routes = [
    {
        path: "/",
        component: Main,
        exact: true
    },
    {
        path: "/welcome",
        component: Welcome,
        exact: true
    }
];

export default routes;
