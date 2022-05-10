import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "database_ignite",
    port: 5432,
    username: "docker",
    password: "developer@guilherme",
    database: "ignite",
    migrations: ["./src/database/migrations/*.ts"],
    entities: ["./src/modules/**/entities/*.ts"],
});

export { AppDataSource };
