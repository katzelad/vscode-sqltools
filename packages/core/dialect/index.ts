import MSSQL from './mssql';
import MySQL from './mysql';
import OracleDB from './oracle';
import PostgreSQL from './pgsql';
import SQLite from './sqlite';
import SAPHana from './saphana';
import ExampleDialect from './example-dialect';

const dialects = {
  MSSQL,
  MySQL,
  PostgreSQL,
  'AWS Redshift': PostgreSQL, // alias
  OracleDB,
  SQLite,
  SAPHana,
  ExampleDialect, // add your dialect here to make it availeble for usage
};

export default dialects;
