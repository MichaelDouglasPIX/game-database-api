import express from "express";
import genre from "./genreRoutes.js";
import gamingPlatforms from "./gamingPlataformsRoutes.js";
import engine from "./engineRoutes.js";
import game from "./gameRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Game-Database-Api"));

    app.use(express.json(), genre, gamingPlatforms, engine, game);
};

export default routes;