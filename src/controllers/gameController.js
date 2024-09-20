import IncorrectRequest from "../errors/IncorrectRequest.js";
import NotFound from "../errors/NotFound.js";
import { game } from "../models/index.js";
import { engine } from "../models/index.js";
import { gamingPlatforms } from "../models/index.js";

class GameController {
    static async listGames(req, res, next) {
        try {
            let { limit, page } = req.query;

            limit = parseInt(limit);
            page = parseInt(page);

            if(limit > 0 && page > 0){
                const listGames = await game.find({}).skip((page - 1) * limit).limit(limit).populate("genre engine stores.gamingPlatforms").exec();
                res.status(200).json(listGames);
            }else {
                next(new IncorrectRequest());
            }
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
            const gameFound = await game.findById(id).populate("genre engine stores.gamingPlatforms").exec();

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

    static async listGameByFilter(req, res, next) {
        try {
            const search = await formatSearch(req.query);

            if (search !== null) {
                const gamesByStatus = await game.find(search).populate("genre engine stores.gamingPlatforms").exec();
                res.status(200).json(gamesByStatus);
            } else {
                res.status(200).send([]);
            }
        } catch (error) {
            next(error);
        }
    };
};

async function formatSearch(params) {
    const { status, title, engineName, platform } = params;

    let search = {};

    if (status) search.status = { $regex: status, $options: "i" };
    if (title) search.title = { $regex: title, $options: "i" };

    if (engineName) {
        const engineFound = await engine.findOne({ name: engineName });

        if (engineFound !== null) {
            search.engine = engineFound._id;
        } else {
            search = null;
        }
    }
    console.log(search)
    return search;
}

export default GameController;