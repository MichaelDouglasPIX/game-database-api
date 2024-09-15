import gamingPlatforms from "../models/GamingPlatforms.js";

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
            res.status(200).json(gamingPlatformFound);
        } catch (error) {
            next(error);
        }
    };

    static async updateGamingPlatformById(req, res, next) {
        try {
            const id = req.params.id;
            await gamingPlatforms.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: `updated gaming platform` });
        } catch (error) {
            next(error);
        }
    };

    static async deleteGamingPlatformById(req, res, next) {
        try {
            const id = req.params.id;
            await gamingPlatforms.findByIdAndDelete(id);
            res.status(200).json({ message: `deleted gaming platform` });
        } catch (error) {
            next(error);
        }
    };
}

export default GamingPlatformsController;