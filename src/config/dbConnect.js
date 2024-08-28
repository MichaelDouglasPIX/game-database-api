import mongoose, { mongo } from "mongoose";

const url = process.env.DB_CONNECTION_STRING;

async function connectDB() {
    mongoose.connect(url);

    return mongoose.connection;
}

export default connectDB;