import "dotenv/config";
import { Options } from "sequelize";

const { MYSQLDB_PASSWORD, MYSQLDB_PORT, MYSQLDB_DATABASE, MYSQLDB_USER } = process.env;

const config: Options = {
  username: MYSQLDB_USER,
  password: MYSQLDB_PASSWORD,
  database: MYSQLDB_DATABASE,
  port: parseInt(MYSQLDB_PORT as string),
  dialect: "mysql"
};

export = config;
