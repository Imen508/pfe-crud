const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
/* db.admins = require("./admin.js")(mongoose);*/

/* 
 */
db.produits = require("./produit.js")(mongoose);
db.vendeurs = require("./vendeur.js")(mongoose);
db.entrepots = require("./entrepot.js")(mongoose);
db.demandes = require("./demande.js")(mongoose);

module.exports = db;