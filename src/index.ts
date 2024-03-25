import dotenv from "dotenv";
import "dotenv/config";
import express from "express";
import cors from 'cors';
import { router } from "./routers/router";
import { main } from "./database/database";
import { handleError } from "./errors/errorHandler";
import { limiterResend } from "./middleware/rateLimit";
dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use(limiterResend);

app.use("/", router);

main();

const port = process.env.PORT;

app.listen(port, () => console.log("Server is running " + port));
app.use(handleError);