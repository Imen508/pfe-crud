module.exports = app => {
    const produits = require("../controllers/produit.controller.js");
  
    var router = require("express").Router();
  
    // Create a new produit
    router.post("/", produits.create);
  
    // Retrieve all produits
    router.get("/", produits.findAll);
  
  
    // Retrieve a single produit with id
    router.get("/:id", produits.findOne);
  
    // Update a produit with id
    router.put("/:id", produits.update);
  
    // Delete a produit with id
    router.delete("/:id", produits.delete);
  
    // Create a new produit
    router.delete("/", produits.deleteAll);
  
    app.use('/api/produits', router);
  };