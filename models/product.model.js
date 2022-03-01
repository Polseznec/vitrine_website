const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    bio: {
        type: String,
        required: true,
        trim: true,
    },
    picture: {
        type: String,
        required: true,
        default: "./uploads/profil/random-product.png"
    }
})


const ProductModel = mongoose.model("product", productSchema)

module.export = ProductModel