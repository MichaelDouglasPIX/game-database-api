import mongoose from "mongoose";

const genresSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true }
}, { versionKey: false } );

const genres = mongoose.model("genres", genresSchema);

export default genres;