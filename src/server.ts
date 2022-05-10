import express from "express";

import "express-async-errors";
import "reflect-metadata";

import { AppDataSource } from "./database";
import { errors } from "./middlewares/errors";
import { router } from "./routes";

import "./shared/container";

const app = express();

app.use(express.json());
app.use(router);

app.use(errors);

AppDataSource.initialize().then(async () => {
    await AppDataSource.runMigrations();

    app.listen(3333, () => console.log("Server is running! 🚀 "));
});
