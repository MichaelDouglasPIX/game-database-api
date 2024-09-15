import game from "../models/Game.js";
import { genre } from "../models/Genre.js";
import { engine } from "../models/Engine.js";

class GameController {
    static async listGames(req, res) {
        try {
            const listGames = await game.find({}).populate("genre engine stores.gamingPlatforms").exec();
            res.status(200).json(listGames);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failure to obtain games` });
        }
    };

    static async registerGame(req, res) {
        try {
            const newGame = await game.create(req.body);
            res.status(201).json({ message: "successfuly created gaming platform.", game: newGame });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to register game` });
        }
    };

    static async listGameById(req, res) {
        try {
            const id = req.params.id;
            const gameFound = await game.findById(id).populate("genre engine").exec();
            res.status(200).json(gameFound);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failure to obtain game` });
        }
    };

    static async updateGameById(req, res) {
        try {
            const id = req.params.id;
            await game.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: `updated game` });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to update game` });
        }
    };

    static async deleteGameById(req, res) {
        try {
            const id = req.params.id;
            await game.findByIdAndDelete(id);
            res.status(200).json({ message: `deleted game` });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to delete game` });
        }
    };

    static async listGameByStatus(req, res) {
        const status = req.query.status;
        try {
            const gamesByStatus = await game.find({ status}).populate("genre engine").exec();
            res.status(200).json(gamesByStatus);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failure to obtain games` });
        }
    }
}

export default GameController;