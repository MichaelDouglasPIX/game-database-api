import express from "express";
import genre from "./genreRoutes.js";
import gamingPlatforms from "./gamingPlataformsRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Game-Database-Api"));

    app.use(express.json(), genre);
    app.use(express.json(), gamingPlatforms);
};

export default routes;