"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const quote_controller_1 = require("../controllers/quote.controller");
router.route('/quotes')
    // Solo si el formularaio traera imagenes
    //.post(multer.single('image'), createQuote)
    .post(quote_controller_1.createQuote)
    .get(quote_controller_1.welcome);
exports.default = router;
