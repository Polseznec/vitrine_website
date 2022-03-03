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
        default: "./uploads/profil/random-product.png"
    }
})


const ProductModel = mongoose.model("product", productSchema)

module.exports = ProductModel