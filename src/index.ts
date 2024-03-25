import dotenv from "dotenv";
import "dotenv/config";
import express from "express";
import { router } from "./routers/router";
import { main } from "./database/database";
import { handleError } from "./errors/errorHandler";
dotenv.config();

const app = express();

app.use(express.json());

app.use("/", router);

main();

app.use(handleError);
const port = process.env.PORT;

app.listen(port, () => console.log("Server is running"+ port));
