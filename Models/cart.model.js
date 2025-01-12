const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  userID:{type:String,ref:'user',required:true},
  fullname:{type:String,ref:'user',required:true},
  Products:[
    {
      productId:{ type:Number,ref:'Product' },
      title: { type: String, required: true }, 
      price: { type: Number, required: true }, 
      image: { type: String },
      quantity: { type: Number, required: true, default: 1 }, 
    },
  ]
},{
    versionKey:false,
    timestamps: true,
});

const CartModel = mongoose.model('Cart', cartSchema);

module.exports = {CartModel};

