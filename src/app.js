import express from "express";
import connectDB from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await connectDB();

connection.on("error", (erro) => {
    console.error("connection error", erro);
});

connection.once("open", () => {
    console.log("connection to the database made successfuly");
})

const app = express();
routes(app);

export default app;