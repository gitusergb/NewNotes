const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    productId:{ type:String },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String, 
    },
    quantity: {
      type: Number,
      required: true,
      default: 1, 
    },
  },
  {
    versionKey: false,
    timestamps: true, 
  }
);

const ProductModel = mongoose.model('Product', productSchema);

module.exports = { ProductModel };
