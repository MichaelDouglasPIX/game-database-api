import game from "../models/Game.js";

class GameController {
    static async listGames(req, res, next) {
        try {
            const listGames = await game.find({}).populate("genre engine stores.gamingPlatforms").exec();
            res.status(200).json(listGames);
        } catch (error) {
            next(error);
        }
    };

    static async registerGame(req, res, next) {
        try {
            const newGame = await game.create(req.body);
            res.status(201).json({ message: "successfuly created gaming platform.", game: newGame });
        } catch (error) {
            next(error);
        }
    };

    static async listGameById(req, res, next) {
        try {
            const id = req.params.id;
            const gameFound = await game.findById(id).populate("genre engine").exec();
            res.status(200).json(gameFound);
        } catch (error) {
            next(error);
        }
    };

    static async updateGameById(req, res, next) {
        try {
            const id = req.params.id;
            await game.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: `updated game` });
        } catch (error) {
            next(error);
        }
    };

    static async deleteGameById(req, res, next) {
        try {
            const id = req.params.id;
            await game.findByIdAndDelete(id);
            res.status(200).json({ message: `deleted game` });
        } catch (error) {
            next(error);
        }
    };

    static async listGameByStatus(req, res, next) {
        const status = req.query.status;
        try {
            const gamesByStatus = await game.find({ status}).populate("genre engine").exec();
            res.status(200).json(gamesByStatus);
        } catch (error) {
            next(error);
        }
    }
}

export default GameController;