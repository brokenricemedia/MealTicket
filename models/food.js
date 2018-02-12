const mongoose = require("mongoose");
const url = require("mongoose-type-url");


const Schema = mongoose.Schema;


const foodSchema = new Schema({

    foodCategory: {
      type: String,
      required: true
    },
    productName:{
      type:String,
    },
    foodDescription:{
      type: String,
    },
    
    price: {
      type: Number,
      required: true
    },
    delivery: {
      type: String
    },
    foodPhoto:{
      type: mongoose.SchemaTypes.Url

    },
    date:{
      type: Date,
      default: Date.now

    }

  });


 const Food = mongoose.model("Food", foodSchema);


module.exports = Food;






