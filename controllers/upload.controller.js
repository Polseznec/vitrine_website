const ProductModel = require('../models/product.model')
const fs = require('fs');
const {
    promisify
} = require('util')
const pipeline = promisify(require('stream').pipeline)
const {
    uploadErrors
} = require('../utils/errors.utils.js')

module.exports.uploadProduct = async (req, res) => {
    try {
        if (
            req.file.detectedMimeType != "image/jpg" &&
            req.file.detectedMimeType != "image/png" &&
            req.file.detectedMimeType != "image/jpeg"
        )
            throw Error("INVALID_FILE");

        if (req.file.size > 600000) throw Error("MAX_SIZE");
    } catch (err) {
        const errors = uploadErrors(err);
        return res.status(201).json({
            errors
        });
    }
    const fileName = req.body.name + ".jpg";

    await pipeline(
        req.file.stream,
        fs.createWriteStream(
            `${__dirname}/../client/public/uploads/product/${fileName}`
        )
    );

    try {
        await ProductModel.findByIdAndUpdate(
            req.body.productId, {
                $set: {
                    main_picture: "./uploads/product/" + fileName
                }
            }, {
                new: true,
                upsert: true,
                setDefaultsOnInsert: true
            }.then((data) => res.send(data)).catch((err) => res.status(500).send({
                message: err
            }))
        );

    } catch (err) {
        return res.status(500).send({
            message: err
        });
    }
}