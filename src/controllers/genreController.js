import { genre } from "../models/Genre.js";

class GenreController {
    static async listGenres(req, res, next) {
        try {
            const listGenres = await genre.find({});
            res.status(200).json(listGenres);
        } catch (error) {
            next(error);
        }
    };

    static async registerGenre(req, res, next) {
        try {
            const newGenre = await genre.create(req.body);
            res.status(201).json({ message: "successfuly created genre.", genre: newGenre });
        } catch (error) {
            next(error);
        }
    };

    static async listGenreById(req, res, next) {
        try {
            const id = req.params.id;
            const genreFound = await genre.findById(id);

            if(genreFound !== null){
                res.status(200).json(genreFound);
            }else {
                res.status(404).json({ message: `genre not found` });
            }
        } catch (error) {
            next(error);
        }
    };

    static async updateGenreById(req, res, next) {
        try {
            const id = req.params.id;
            await genre.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: `updated genre` });
        } catch (error) {
            next(error);
        }
    };

    static async deleteGenreById(req, res, next) {
        try {
            const id = req.params.id;
            await genre.findByIdAndDelete(id);
            res.status(200).json({ message: `deleted genre` });
        } catch (error) {
            next(error);
        }
    };
};

export default GenreController;