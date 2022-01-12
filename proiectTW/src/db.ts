import mysql from 'mysql';
export type TableRow = Record<string, number | string>;
import * as env from './env';

type ColumnValue = {
  column: string;
  value: string | number;
};

export const pool = mysql.createPool({
  connectionLimit: 5,
  host: env.MYSQLDB_HOST,
  port: env.MYSQLDB_PORT,
  user: env.MYSQLDB_USERNAME,
  password: env.MYSQLDB_USER_PASSWORD,
  database: env.MYSQLDB_DATABASE,
  multipleStatements: true,
});

export const findById = async (
  tableName: String,
  primaryKey: ColumnValue
): Promise<TableRow | undefined> => {
  const response = await findWhere(tableName, primaryKey);
  if (response.length == 0) return undefined;
  return response[0];
};

export const findWhere = async (
  tableName: String,
  filter: ColumnValue
): Promise<TableRow[]> => {
  const response = await query(
    `SELECT * FROM ${tableName} WHERE ?? = ? ORDER BY CreationDate DESC `,
    [filter.column, filter.value]
  );
  return response;
};

export const insert = async (tableName: string, object: TableRow) => {
  Object.keys(object).forEach((key) =>
    object[key] === undefined ? delete object[key] : {}
  );
  const response = await query(`INSERT INTO ${tableName}  SET ? `, object);
  return response;
};

export const updateById = async (
  tableName: string,
  primaryKey: ColumnValue,
  object: TableRow
) => {
  Object.keys(object).forEach((key) =>
    object[key] === undefined ? delete object[key] : {}
  );

  const response = await query(`UPDATE ${tableName} SET ? WHERE ?? = ? `, [
    object,
    primaryKey.column,
    primaryKey.value,
  ]);
  return parseInt(response.affectedRows);
};

export const deleteById = async (
  tableName: string,
  primaryKey: ColumnValue
) => {
  const response = await query(`DELETE FROM ${tableName} WHERE ?? = ? `, [
    primaryKey.column,
    primaryKey.value,
  ]);
  return parseInt(response.affectedRows);
};

export const findAll = async (tableName: string) => {
  const response = await query(
    `SELECT * FROM ${tableName} ORDER BY CreationDate DESC`
  );
  if (response.length < 1) return undefined;
  return response;
};

export const deleteWhere = async (
  tableName: String,
  filter: ColumnValue
): Promise<TableRow[]> => {
  const response = await query(`DELETE * FROM ${tableName} WHERE ?? = ? `, [
    filter.column,
    filter.value,
  ]);
  return response;
};

export const query = (sqlQuery: string, values?: Array<any> | Object) => {
  return new Promise<any>((resolve, reject) => {
    pool.query(sqlQuery, values, (error, results) => {
      if (error) {
        console.log(error);

        reject(error);
      }
      resolve(results);
    });
  });
};
