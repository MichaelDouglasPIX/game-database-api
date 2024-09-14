import express from "express";
import GenreController from "../controllers/genreController.js";

const routes = express.Router();

routes.get("/genres", GenreController.listGenres);
routes.get("/genres/:id", GenreController.listGenreById);
routes.post("/genres", GenreController.registerGenre);
routes.put("/genres/:id", GenreController.updateGenreById);
routes.delete("/genres/:id", GenreController.deleteGenreById);

export default routes;