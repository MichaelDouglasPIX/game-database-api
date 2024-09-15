import express from "express";
import connectDB from "./config/dbConnect.js";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";

const connection = await connectDB();

connection.on("error", (erro) => {
    console.error("connection error", erro);
});

connection.once("open", () => {
    console.log("connection to the database made successfuly");
})

const app = express();
routes(app);
app.use(errorHandler);

export default app;