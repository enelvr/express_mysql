"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    name: String,
    phone: Number,
    email: String,
    description: String
});
exports.default = mongoose_1.model('Quote', schema);
