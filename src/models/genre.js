import mongoose from 'mongoose';

const genreSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: [true, 'name is mandatory'] }
  },
  { versionKey: false }
);

const genre = mongoose.model('genre', genreSchema);

export default genre;
