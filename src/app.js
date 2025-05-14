import express from "express";
import morgan from "morgan";
import { config } from "./config/config.js";
import { libroRouter } from "./routes/libro.router.js";

const app = express();

app.use(
	morgan(":method :url :status :res[content-length] - :response-time ms"),
);

app.use(express.json());

app.use("/api", libroRouter);

app.listen(config.PORT, () => {
	const message = `🚀 SERVER is UP at http://${config.HOST}:${config.PORT}`;
	console.log(message);
});