import express from "express";
import GamingPlatformsController from "../controllers/gamingPlatformsController.js";
import pagination from "../middlewares/pagination.js";

const routes = express.Router();

routes.get("/gaming-platforms", GamingPlatformsController.listGamingPlatforms, pagination);
routes.get("/gaming-platforms/:id", GamingPlatformsController.listGamingPlatformById);
routes.post("/gaming-platforms", GamingPlatformsController.registerGamingPlatform);
routes.put("/gaming-platforms/:id", GamingPlatformsController.updateGamingPlatformById);
routes.delete("/gaming-platforms/:id", GamingPlatformsController.deleteGamingPlatformById);

export default routes;