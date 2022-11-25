const mongoose = require('mongoose');

const product = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        stock: Number,
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model('Product', product);
