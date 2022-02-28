const express = require("express")
const userRoutes = require('./routes/user.routes')
require('dotenv').config({
    path: './config/.env'
})
require('./config/db')
const app = express();




//Routes
app.use('/api/user', userRoutes);

//Server
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Listenning server port "${process.env.SERVER_PORT}"`);
})