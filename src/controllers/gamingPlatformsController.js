import NotFound from "../errors/NotFound.js";
import { gamingPlatforms } from "../models/index.js";

class GamingPlatformsController {
    static async listGamingPlatforms(req, res, next) {
        try {
            const listGamingPlatforms = await gamingPlatforms.find({});
            res.status(200).json(listGamingPlatforms);
        } catch (error) {
            next(error);
        }
    };

    static async registerGamingPlatform(req, res, next) {
        try {
            const newGamingPlatform = await gamingPlatforms.create(req.body);
            res.status(201).json({ message: "successfuly created gaming platform.", gamingPlatform: newGamingPlatform });
        } catch (error) {
            next(error);
        }
    };

    static async listGamingPlatformById(req, res, next) {
        try {
            const id = req.params.id;
            const gamingPlatformFound = await gamingPlatforms.findById(id);

            if(gamingPlatformFound !== null){
                res.status(200).json(gamingPlatformFound);
            }else {
                next(new NotFound("gaming platform not found"));
            }
        } catch (error) {
            next(error);
        }
    };

    static async updateGamingPlatformById(req, res, next) {
        try {
            const id = req.params.id;
            const updatedPlataform = await gamingPlatforms.findByIdAndUpdate(id, req.body);

            if(updatedPlataform !== null){
                res.status(200).json({ message: `updated gaming platform` });
            }else {
                next(new NotFound("gaming platform not found"));
            }
        } catch (error) {
            next(error);
        }
    };

    static async deleteGamingPlatformById(req, res, next) {
        try {
            const id = req.params.id;
            const deletedPlataform = await gamingPlatforms.findByIdAndDelete(id);

            if(deletedPlataform !== null){
                res.status(200).json({ message: `deleted gaming platform` });
            }else {
                next(new NotFound("gaming platform not found"));
            }
        } catch (error) {
            next(error);
        }
    };
}

export default GamingPlatformsController;