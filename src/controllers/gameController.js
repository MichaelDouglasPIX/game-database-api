import NotFound from "../errors/NotFound.js";
import { game } from "../models/index.js";

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

            if (gameFound !== null) {
                res.status(200).json(gameFound);
            } else {
                next(new NotFound("game not found"));
            }
        } catch (error) {
            next(error);
        }
    };

    static async updateGameById(req, res, next) {
        try {
            const id = req.params.id;
            const updatedGame = await game.findByIdAndUpdate(id, req.body);

            if (updatedGame !== null) {
                res.status(200).json({ message: `updated game` });
            } else {
                next(new NotFound("game not found"));
            }
        } catch (error) {
            next(error);
        }
    };

    static async deleteGameById(req, res, next) {
        try {
            const id = req.params.id;
            const deletedGame = await game.findByIdAndDelete(id);

            if (deletedGame !== null) {
                res.status(200).json({ message: `deleted game` });
            } else {
                next(new NotFound("game not found"));
            }
        } catch (error) {
            next(error);
        }
    };

    static async listGameByStatus(req, res, next) {
        const status = req.query.status;
        try {
            const gamesByStatus = await game.find({ status }).populate("genre engine").exec();
            res.status(200).json(gamesByStatus);
        } catch (error) {
            next(error);
        }
    }
}

export default GameController;