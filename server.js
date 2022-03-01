const express = require("express")
const bodyParser = require("body-parser")
const userRoutes = require('./routes/user.routes')
const productRoutes = require('./routes/product.routes')
require('dotenv').config({
    path: './config/.env'
})
require('./config/db')
const app = express();

//bodyparser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

//Routes
app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);

//Server
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Listenning server port "${process.env.SERVER_PORT}"`);
})