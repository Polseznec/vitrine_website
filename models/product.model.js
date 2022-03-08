const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    main_picture: {
        type: String,
        required: true,
        default: "./uploads/product/product_default.png"
    }
}, {
    timestamps: true,
})


const ProductModel = mongoose.model("product", productSchema)

module.exports = ProductModel