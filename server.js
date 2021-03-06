const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
 


var corsOptions = {
  origin: "http://localhost:4200"
};
 
app.use(cors(corsOptions));
 
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to WamiaExpress application." });
});

const db = require("./models")


db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
  require("./routes/produit.route")(app);
  require("./routes/vendeur.route")(app);
  require("./routes/entrepot.route")(app);
  require("./routes/demande.route")(app);
// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});