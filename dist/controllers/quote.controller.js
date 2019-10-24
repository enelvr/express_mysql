"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
//import { connect } from 'mongoose';
function welcome(req, res) {
    return res.send('Welcome');
}
exports.welcome = welcome;
// POST store
async function createQuote(req, res) {
    try {
        const db = await database_1.connect();
        const { name, phone, email, description } = req.body;
        const newRequestQuotation = {
            name: name,
            phone: phone,
            email: email,
            description: description
        };
        await db.query('INSERT INTO request_quotation set ?', [newRequestQuotation]);
        return res.json({
            message: 'Cotización Solicitada con éxito'
        });
    }
    catch (err) {
        return res.json({
            message: 'Error al solicitar la Cotización'
        });
    }
    // Insertando con MOGODB
    /*
    // Extraigo los datos desde req.body
    const { name, phone, email, description } = req.body;
  
    // creo unas costante cons los datos a guardar, en caso de tener imagen agregamos : images:req.file.path
    const newQuote = {
      name: name,
      phone: phone,
      email: email,
      description: description
    }
  
    const quote = new Quote(newQuote);
    await quote.save();
  
    return res.json({
      message: 'Cotización Solicitada con éxito',
      quote
    })
  
    */
}
exports.createQuote = createQuote;
