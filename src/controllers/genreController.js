import genre from "../models/genre.js";

class GenreController {
    static async listGenres (req, res) {
        try {
            const listGenres = await genre.find({});
            res.status(200).json(listGenres);
        } catch (error) {
            res.status(500).json({ message: `${erro.message} - failure to obtain genres`});
        }
    };

    static async registerGenre (req, res) {
        try {
            const newGenre = await genre.create(req.body);
            res.status(201).json({ message: "successfuly created genre.", genre: newGenre });
        } catch (error) {
            res.status(500).json({ message: `${erro.message} - failed to register genrer`});
        }
    };

    static async listGenreById (req, res) {
        try {
            const id = req.params.id;
            const genreFound = await genre.findById(id);
            res.status(200).json(genreFound);
        } catch (error) {
            res.status(500).json({ message: `${erro.message} - failure to obtain genre`});
        }
    };

    static async updateGenreById (req, res) {
        try {
            const id = req.params.id;
            await genre.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: `updated genre`});
        } catch (error) {
            res.status(500).json({ message: `${erro.message} - failed to update genre`});
        }
    };

    static async deleteGenreById (req, res) {
        try {
            const id = req.params.id;
            await genre.findByIdAndDelete(id);
            res.status(200).json({ message: `deleted genre`});
        } catch (error) {
            res.status(500).json({ message: `${erro.message} - failed to delete genre`});
        }
    };
};

export default GenreController;