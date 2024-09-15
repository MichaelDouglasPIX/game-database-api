import mongoose from "mongoose";

const engineSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true }
}, { versionKey: false });

const engine = mongoose.model("engine", engineSchema);

export { engine, engineSchema };