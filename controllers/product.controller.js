const ProductModel = require('../models/product.model.js')
const ObjectId = require('mongoose').Types.ObjectId

module.exports.createProduct = async function (req, res) {
    console.log(req.body);
    const {
        title,
        description,
        main_picture
    } = req.body

    try {
        const product = await ProductModel.create({
            title,
            description,
            main_picture
        })
        res.status(201).json({
            product: product._id
        })
    } catch (err) {
        res.status(200).send({
            err
        })
        console.log("createProduct Error : ", err);
    }
}

module.exports.getAllProducts = async function (req, res) {
    const products = await ProductModel.find().select();
    res.status(200).json(products);
}

module.exports.productInfo = async function (req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('product id unknow : ' + res.params.id)

    ProductModel.findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs)
        else console.log('product id unknow : ' + err)
    })
}

module.exports.updateProduct = async function (req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('product id unknow : ' + res.params.id)

    try {
        await ProductModel.findByIdAndUpdate({
            _id: req.params.id
        }, {
            $set: {
                title: req.body.title
            }
        }, {
            new: true,
            upsert: true,
            setDefaultsOnInsert: true
        }, (err, docs) => {
            if (!err) return res.send(docs)
            if (err) return res.status(500).send({
                message: err
            })
        })
    } catch (err) {
        return res.status(500).json({
            message: err
        })
    }
}

module.exports.delectProduct = async function (req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('product id unknow : ' + res.params.id)
    try {
        await ProductModel.remove({
            _id: req.params.id
        }).exec();
        res.status(200).json({
            message: "Product delected"
        })

    } catch (err) {
        return res.status(500).json({
            message: err
        })
    }
}