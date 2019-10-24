import { Request, Response } from 'express';

import { connect } from '../database';

import { IQuote } from '../interfaces/Iquote';
//import { connect } from 'mongoose';

export function welcome(req: Request, res: Response): Response {
  return res.send('Welcome');
}

// POST store
export async function createQuote(req:Request, res:Response) {
  try {
    const db = await connect();
    const { name, phone, email, description } = req.body;

    const newRequestQuotation:IQuote = {
      name: name,
      phone: phone,
      email: email,
      description: description
    }

    await db.query('INSERT INTO request_quotation set ?', [newRequestQuotation]);

    return res.json({
      message: 'Cotización Solicitada con éxito'
    })

  } catch (err) {

      return res.json({
        message: 'Error al solicitar la Cotización'
      })
      
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