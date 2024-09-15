import mongoose from "mongoose";
import { genreSchema } from "./Genre.js";
import { engineSchema } from "./Engine.js";

const gameSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    summary: { type: String, required: true },
    description: { type: String, required: true },
    genre: [{ type: mongoose.Schema.Types.ObjectId, ref: 'genre' }],
    status: { type: String, required: true },
    engine: { type: mongoose.Schema.Types.ObjectId, ref: 'engine', required: true },
    stores: [{ url: { type: String, required: true }, gamingPlatforms: { type: mongoose.Schema.Types.ObjectId, ref: 'gaming_Platforms', required: true }, _id: false }],
    images: [{ name: { type: String, required: true }, url: { type: String, required: true }, _id: false }],
}, { versionKey: false });

const game = mongoose.model("game", gameSchema);

export default game;