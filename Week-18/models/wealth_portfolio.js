const mongoose = require('mongoose');

// Define the asset schema
const assetSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    value: { type: Number, required: true },
    userId: { type: String, required: true },
});

// Define the financial schema
const financialSchema = new mongoose.Schema({
    income: { type: Number},
    expenses: { type: Number},
    savings: { type: Number},
    userId: { type: String, required: true },
    year: { type: Number, required: true },
    month: { type: Number, required: true },
});

// Define the breakdown schema
const breakdownSchema = new mongoose.Schema({
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    userId: { type: String, required: true },
    year: { type: Number, required: true },
    month: { type: Number, required: true },
});

// Define the invoice schema
const invoiceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    userId: { type: String, required: true },
    invoice: { type: Buffer, required: true },
});


const Asset = mongoose.model('assets', assetSchema);
const Financial = mongoose.model('financial', financialSchema);
const Breakdown = mongoose.model('breakdown', breakdownSchema);
const Invoice = mongoose.model('invoice', invoiceSchema);


module.exports = {
    Asset,
    Financial,
    Breakdown,
    Invoice,
}