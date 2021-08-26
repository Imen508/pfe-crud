module.exports = app => {
    const vendeurs = require("../controllers/vendeur.controller.js");
  
    var router = require("express").Router();
  
    // Create a new vendeur
    router.post("/", vendeurs.create);
  
    // Retrieve all vendeurs
    router.get("/", vendeurs.findAll);
  
  
    // Retrieve a single vendeur with id
    router.get("/:id", vendeurs.findOne);
  
    // Update a vendeur with id
    router.put("/:id", vendeurs.update);
  
    // Delete a vendeur with id
    router.delete("/:id", vendeurs.delete);
  
    app.use('/api/vendeurs', router);
  };