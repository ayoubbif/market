const mongoose = require('mongoose');
require('dotenv').config();

const db_link = process.env.DB_LINK
mongoose.connect(
    db_link,
    {useNewUrlParser: true, useUnifiedTopology: true}
);

const paymentSchema = new mongoose.Schema({
    id: String,
    itemId: String,
    paid: Boolean
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = {
    Payment
};
