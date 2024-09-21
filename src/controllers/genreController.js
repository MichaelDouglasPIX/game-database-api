import NotFound from '../errors/NotFound.js';
import { genre } from '../models/index.js';

class GenreController {
  static async listGenres(req, res, next) {
    try {
      const listGenres = genre.find();
      req.result = listGenres;
      next();
    } catch (error) {
      next(error);
    }
  }

  static async registerGenre(req, res, next) {
    try {
      const newGenre = await genre.create(req.body);
      res
        .status(201)
        .json({ message: 'successfuly created genre.', genre: newGenre });
    } catch (error) {
      next(error);
    }
  }

  static async listGenreById(req, res, next) {
    try {
      const id = req.params.id;
      const genreFound = await genre.findById(id);

      if (genreFound !== null) {
        res.status(200).json(genreFound);
      } else {
        next(new NotFound('genre not found'));
      }
    } catch (error) {
      next(error);
    }
  }

  static async updateGenreById(req, res, next) {
    try {
      const id = req.params.id;
      const updatedGenre = await genre.findByIdAndUpdate(id, req.body);

      if (updatedGenre !== null) {
        res.status(200).json({ message: 'updated genre' });
      } else {
        next(new NotFound('genre not found'));
      }
    } catch (error) {
      next(error);
    }
  }

  static async deleteGenreById(req, res, next) {
    try {
      const id = req.params.id;
      const deletedGenre = await genre.findByIdAndDelete(id);

      if (deletedGenre !== null) {
        res.status(200).json({ message: 'deleted genre' });
      } else {
        next(new NotFound('genre not found'));
      }
    } catch (error) {
      next(error);
    }
  }
}

export default GenreController;
