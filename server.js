const express = require("express");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/product.routes");
const mailRoutes = require("./routes/mail.routes");
const path = require("path");

require("dotenv").config({
  path: "./config/.env",
});
require("./config/db");
const { checkUser, requireAuth } = require("./middleware/auth.middleware");
const cors = require("cors");
const app = express();

//cors
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};
app.use(cors(corsOptions));

//body & cookieparer
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.static(path.join(__dirname, "../client/build")));

app.use(cookieParser());

app.use((req, res, next) => {
  res.status(404).json({
    message: `the ressource you're trying to request doesn't exist. Method: ${req.method} path: ${req.originalUrl}`,
  });
});

if (process.env.NODE_ENV === "production") {
  app.use("*", (req, res, next) => {
    // If no routes match, send them the React HTML.
    res.sendFile(__dirname + "/public/index.html");
  });
}
//jwt
app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});

//Routes
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/mail", mailRoutes);

//Server
app.listen("ttps://lili-vous-fait-les-poches.herokuapp.com", () => {
  console.log(`Listenning server port "${process.env.SERVER_PORT}"`);
});
