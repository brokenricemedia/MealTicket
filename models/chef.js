const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require("bcrypt");
const chefSchema = new Schema({

    firstname:{
    type: String,
    required: true
    },
    lastname: {
    type: String,
    required: true
    },
    email:{
      type: String,
      required: true,
      unique: true
    },
    username:{
      type: String,
      required: true
      },
    password:{
      type: String,
      required: true
      }    
});

// chefSchema.methods.generateHash = function(password){
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
// }

// chefSchema.methods.validPassword = function(password){
//   return bcrypt.compareSync(password, this.local.password);
// }

// This creates our model from the above schema, using mongoose's model method
const Chef = mongoose.model("Chef", chefSchema);

// Export the Article model
module.exports = Chef;


// note: {
//     type: Schema.Types.ObjectId,
//     ref: "Note"
//   }
