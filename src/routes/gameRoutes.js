import express from "express";
import GameController from "../controllers/gameController.js";

const routes = express.Router();

routes.get("/game", GameController.listGames);
routes.get("/game/search", GameController.listGameByFilter);
routes.get("/game/:id", GameController.listGameById);
routes.post("/game", GameController.registerGame);
routes.put("/game/:id", GameController.updateGameById);
routes.delete("/game/:id", GameController.deleteGameById);

export default routes;