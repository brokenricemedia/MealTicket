const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const chefSchema = new Schema({
  
    lastName: {
    type: String,
    required: true
    },
    firstname:{
      type: String
    }
    DBA:{
      type: String
    },
    
    contactPhone: {
      type: Number,
      required: true
    },
    
    contactEmail: {
      type: String,
      required: true,
      unique: true
    },
    contactWebsite: {
      type: String
    },
  
     foodVendorLicense: {
      type: String,
      required: true
    },  
    productType:{
      type: String
    },
    deliveryPickupOptions:{
      type: String
    },
    food: {
    type: Schema.Types.contactEmail,
    ref: "Food"
    }


});

// This creates our model from the above schema, using mongoose's model method
const Chef = mongoose.model("Chef", chefSchema);

// Export the Article model
module.exports = Chef;



