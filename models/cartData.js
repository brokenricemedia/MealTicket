const mongoose = require("mongoose");

let Schema = mongoose.Schema;

const cartSchema = new Schema ({
    image: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
    title: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
    price: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    }
});

export default mongoose.model('cart', cartSchema);