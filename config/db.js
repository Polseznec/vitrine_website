const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_KEY_USERNAME}:${process.env.DB_KEY_PASSWORD}@cluster0.vmk37.mongodb.net/test`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((self) => console.log(`Connected to "Mongodb/${self.connection.name}"`))
  .catch((err) => console.log(`Connect to mongoDb failed, error :"${err}"`));
