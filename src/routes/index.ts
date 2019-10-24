import {Router} from 'express';

const router = Router();

import { createQuote, welcome } from '../controllers/quote.controller';

// Solo se importa multer si vamos a subir imagenes
// import multer from '../libs/multer';

router.route('/quotes')
  // Solo si el formularaio traera imagenes
  //.post(multer.single('image'), createQuote)
  .post(createQuote)
  .get(welcome);

export default router;