import express from "express";
import connectDB from "./config/dbConnect.js";
import genres from "./models/genres.js";

const connection = await connectDB();

connection.on("error", (erro) => {
    console.error("connection error", erro);
});

connection.once("open", () => {
    console.log("connection to the database made successfuly");
})

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({status: "ok"});
});

app.get("/genres", async (req, res) => {
    const listGenres = await genres.find({});
    res.status(200).json(listGenres);
});

export default app;