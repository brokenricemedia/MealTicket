const mongoose = require("mongoose");
const url = require("mongoose-type-url");


const Schema = mongoose.Schema;


const cartSchema = new Schema({

    title: {
      type: String,
      required: true
    },
    price:{
      type: Number,
    }

  });


 const Cart = mongoose.model("Cart", cartSchema);


module.exports = Cart;



// {
//   id: '001',
//   image: 'https://farm5.staticflickr.com/4703/26320286878_48aecce23b.jpg',
//   title: 'Durian Cheesecake',
//   price: '$40.00', 
// },


