const ProductModel = require("../models/product.model.js");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.createProduct = async function (req, res) {
  console.log(req.body);
  const {
    title,
    price,
    description_part_one,
    description_part_two,
    height,
    width,
    depth,
    type,
    fabric_description,
    available,
    main_picture,
    pattern_picture,
    carrousel_one_picture,
    carrousel_two_picture,
    mood,
  } = req.body;

  try {
    const product = await ProductModel.create({
      title,
      price,
      description_part_one,
      description_part_two,
      height,
      width,
      depth,
      type,
      fabric_description,
      available,
      main_picture,
      pattern_picture,
      carrousel_one_picture,
      carrousel_two_picture,
      mood,
    });
    res.status(201).json({
      product: product._id,
    });
  } catch (err) {
    res.status(200).send({
      err,
    });
    console.log("createProduct Error : ", err);
  }
};

module.exports.getAllProducts = async function (req, res) {
  const products = await ProductModel.find().select();
  res.status(200).json(products);
};

module.exports.productInfo = async function (req, res) {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("product id unknow : " + res.params.id);

  ProductModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("product id unknow : " + err);
  });
};

module.exports.updateProduct = function (req, res) {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("product id unknow : " + res.params.id);

  const data = {
    title: req.body.title,
    price: req.body.price,
    description_part_one: req.body.description_part_one,
    description_part_two: req.body.description_part_two,
    height: req.body.height,
    width: req.body.width,
    depth: req.body.depth,
    type: req.body.type,
    fabric_description: req.body.fabric_description,
    available: req.body.available,
    main_picture: req.body.main_picture,
    pattern_picture: req.body.pattern_picture,
    carrousel_one_picture: req.body.carrousel_one_picture,
    carrousel_two_picture: req.body.carrousel_two_picture,
    mood: req.body.mood,
  };

  ProductModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: data,
    },
    {
      new: true,
      upsert: true,
      setDefaultsOnInsert: true,
    },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update error : " + err);
    }
  );
};

module.exports.delectProduct = async function (req, res) {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("product id unknow : " + res.params.id);
  try {
    await ProductModel.remove({
      _id: req.params.id,
    }).exec();
    res.status(200).json({
      message: "Product delected",
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};
