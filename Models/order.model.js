const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  isPaid: { type: Boolean, default: false },
  paymentMethod: { type: String, required: true },
}, { timestamps: true });


const OrderModel = mongoose.model('Order', orderSchema);

module.exports = { OrderModel };
