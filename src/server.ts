import express from "express";

import { AppDataSource } from "./database";
import { router } from "./routes";
import "reflect-metadata";
import "./shared/container";

const app = express();

app.use(express.json());
app.use(router);

AppDataSource.initialize().then(async () => {
    await AppDataSource.runMigrations();

    app.listen(3333, () => console.log("Server is running! 🚀 "));
});
