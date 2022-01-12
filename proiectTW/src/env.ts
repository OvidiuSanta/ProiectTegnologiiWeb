import dotenv from 'dotenv';

dotenv.config();

export const PORT = Number.parseInt(process.env.PORT as string);
export const MYSQLDB_HOST = process.env.MYSQLDB_HOST as string;
export const MYSQLDB_USERNAME = process.env.MYSQLDB_USERNAME as string;
export const MYSQLDB_USER_PASSWORD = process.env
  .MYSQLDB_USER_PASSWORD as string;
export const MYSQLDB_DATABASE = process.env.MYSQLDB_DATABASE as string;
export const MYSQLDB_PORT = Number.parseInt(process.env.MYSQLDB_PORT as string);
