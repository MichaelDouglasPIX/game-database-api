import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: [true, "title is mandatory"] },
    summary: { type: String, required: [true, "summary is mandatory"] },
    description: { type: String },
    genre: [{ type: mongoose.Schema.Types.ObjectId, ref: 'genre', required: [true, "genre is mandatory"] }],
    status: { type: String, required: [true, "status is mandatory"] },
    engine: { type: mongoose.Schema.Types.ObjectId, ref: 'engine', required: [true, "engine is mandatory"] },
    stores: [{ url: { type: String, required: [true, "store url is mandatory"] }, gamingPlatforms: { type: mongoose.Schema.Types.ObjectId, ref: 'gaming_Platforms', required: [true, "store gaming platforms is mandatory"] }, _id: false }],
    images: [{ name: { type: String, required: [true, "image name is mandatory"] }, url: { type: String, required: [true, "image url is mandatory"] }, _id: false }],
}, { versionKey: false });

const game = mongoose.model("game", gameSchema);

export default game;