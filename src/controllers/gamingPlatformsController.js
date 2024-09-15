import gamingPlatforms from "../models/GamingPlatforms.js";

class GamingPlatformsController {
    static async listGamingPlatforms(req, res) {
        try {
            const listGamingPlatforms = await gamingPlatforms.find({});
            res.status(200).json(listGamingPlatforms);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failure to obtain gaming platforms` });
        }
    };

    static async registerGamingPlatform(req, res) {
        try {
            const newGamingPlatform = await gamingPlatforms.create(req.body);
            res.status(201).json({ message: "successfuly created gaming platform.", gamingPlatform: newGamingPlatform });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to register gaming platform` });
        }
    };

    static async listGamingPlatformById(req, res) {
        try {
            const id = req.params.id;
            const gamingPlatformFound = await gamingPlatforms.findById(id);
            res.status(200).json(gamingPlatformFound);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failure to obtain gaming platform` });
        }
    };

    static async updateGamingPlatformById(req, res) {
        try {
            const id = req.params.id;
            await gamingPlatforms.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: `updated gaming platform` });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to update gaming platform` });
        }
    };

    static async deleteGamingPlatformById(req, res) {
        try {
            const id = req.params.id;
            await gamingPlatforms.findByIdAndDelete(id);
            res.status(200).json({ message: `deleted gaming platform` });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to delete gaming platform` });
        }
    };
}

export default GamingPlatformsController;