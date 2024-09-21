import mongoose from 'mongoose';
import autopopulate from 'mongoose-autopopulate';

const gameSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: [true, 'title is mandatory'] },
    summary: { type: String, required: [true, 'summary is mandatory'] },
    description: { type: String },
    genre: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'genre',
        required: [true, 'genre is mandatory'],
        autopopulate: { select: 'name' }
      }
    ],
    status: {
      type: String,
      required: [true, 'status is mandatory'],
      enum: {
        values: ['released', 'beta', 'alpha', 'demo', 'developing'],
        message:
          'status {VALUE} is not allowed, allowed statuses: released, beta, alpha, demo and developing'
      }
    },
    releaseDate: {
      type: Date,
      min: ['2000-01-01', 'the date {VALUE} is lower than allowed 2000-01-01'],
      max: ['2050-01-01', 'the date {VALUE} is greater than allowed 2050-01-01']
    },
    engine: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'engine',
      required: [true, 'engine is mandatory'],
      autopopulate: true
    },
    stores: [
      {
        url: { type: String, required: [true, 'store url is mandatory'] },
        gamingPlatforms: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'gaming_Platforms',
          required: [true, 'store gaming platforms is mandatory'],
          autopopulate: true
        },
        _id: false
      }
    ],
    images: [
      {
        name: { type: String, required: [true, 'image name is mandatory'] },
        url: { type: String, required: [true, 'image url is mandatory'] },
        _id: false
      }
    ]
  },
  { versionKey: false }
);

gameSchema.plugin(autopopulate);
const game = mongoose.model('game', gameSchema);

export default game;
