const UserModel = require('../models/user.model.js');
const ObjectId = require('mongoose').Types.ObjectId

module.exports.getAllUsers = async (req, res) => {
    const users = await UserModel.find().select('-password');
    res.status(200).json(users);
}

module.exports.userInfo = async (req, res) => {
    //console.log(req.params);
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('User id unknow : ' + req.params.id)

    UserModel.findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs)
        else console.log('User id unknow : ' + err)
    }).select('-password')
}