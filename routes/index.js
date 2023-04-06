import express from "express";

import home from './homeRoute.js';

const routes = (app) => {
    app.use(
        express.urlencoded({ extended: true }),
        home,
    );
}

export default routes;