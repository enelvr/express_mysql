"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// MYSQL
const promise_1 = require("mysql2/promise");
async function connect() {
    const connection = promise_1.createPool({
        host: 'localhost',
        user: 'root',
        password: 'syscode',
        database: 'enelv',
        connectionLimit: 10
    });
    return connection;
}
exports.connect = connect;
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
