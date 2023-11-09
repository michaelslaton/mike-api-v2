require("dotenv").config();
import path from 'path';

const { REMAZON_DATABASE } = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: REMAZON_DATABASE,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },


  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },


  production: {
    client: "postgresql",
    connection: REMAZON_DATABASE,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};