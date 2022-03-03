const express = require("express");
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
require('dotenv').config({
    path: './config/.env'
})
require('./config/db')
const {
    checkUser,
    requireAuth
} = require('./middleware/auth.middleware')

const app = express();

//bodyparser & cookieparer
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser())

//jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id)
});

//Routes
app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);

//Server
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Listenning server port "${process.env.SERVER_PORT}"`);
})