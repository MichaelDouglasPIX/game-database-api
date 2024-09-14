import mongoose from "mongoose";

const gamingPlatformsSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    platform: { type: String, required: true }
}, { versionKey: false });

const gamingPlatforms = mongoose.model("gaming_Platforms", gamingPlatformsSchema);

export default gamingPlatforms;