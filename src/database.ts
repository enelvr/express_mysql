// MYSQL
import { createPool } from 'mysql2/promise';

export async function connect() {

  const connection = createPool({
    host:'localhost',
    user: 'root',
    password: 'syscode',
    database: 'enelv',
    connectionLimit: 10
  });
  return connection;
}

// MONGODB
/*
import { connect } from 'mongoose';

export async function startConnection() {
 await connect('mongodb://localhost/enel-db', {
    useNewUrlParser:true
  });
  console.log('Database is connected');
}
*/