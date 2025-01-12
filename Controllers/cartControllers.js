const { CartModel } = require('../Models/cart.model');
const { ProductModel } = require('../Models/product.model'); 


const seeCart = async (req, res) => {
  try {
    const { userID,fullname } = req.body;
    if (!userID || !fullname) {
      return res.status(401).json({ message: 'Please log in.' });
    }
console.log("ud",userID)
    const cart = await CartModel.find({userID});
    if (!cart || cart.Products.length === 0) {
      return res.status(200).json(cart); 
    }
      console.log(res.status,cart)
    res.status(200).json(cart);
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

const addToCart = async (req, res) => {
  try {
   
    const { userID,fullname,productId,title,price,image,quantity } = req.body;
    console.log("newProduct",req.body)

    // if (!userID) {
    //   return res.status(400).json({ message: 'Missing required fields.' });
    // }
    // if (quantity === 0) {
    //   return res.status(400).json({ error: 'Quantity cannot be zero.' });
    // }
    let cart = await CartModel.findOne({userID});
     //let product = await ProductModel.findById(productId);
     const newProduct=req.body.Products[0]
     console.log("Its there",newProduct);
    if (!cart) {
      cart = new CartModel(
        { userID,fullname, 
        Products: [
        {productId: newProduct.ProductId,
          title: newProduct.title,
          price: newProduct.price,
          image: newProduct.image,
          quantity: newProduct.quantity || 1,}
      ] });
      await cart.save();
      console.log("cart",cart)
    }
   else {
    const existingProductIndex = cart.Products.findIndex(
      (p) => p.productId.toString() === productId
    );
    if (existingProductIndex !== -1) {
      // If product exists, update the quantity
      cart.Products[existingProductIndex].quantity += quantity || 1;
    } else {
      // If product does not exist, add it to the cart
      console.log("Its not there",product);
    const newProduct=req.body.Products[0]
      cart.Products.push({
        productId: newProduct.productId,
        title: newProduct.title,
        price: newProduct.price,
        image: newProduct.image,
        quantity:  newProduct.quantity || 1,
      });
    }
  }
  await cart.save();
  console.log("cart",cart)
  res.status(200).json({ message: 'Product added to cart.', cart });
   
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};





module.exports = { addToCart, seeCart };
