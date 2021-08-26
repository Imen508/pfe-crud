module.exports = app => {
    const demandes = require("../controllers/demande.controller.js");
  
    var router = require("express").Router();
  
    // Create a new demande
    router.post("/", demandes.create);
  
    /* // Retrieve all demandes
    router.get("/", demandes.findAll);
  
  
    // Retrieve a single demande with id
    router.get("/:id", demandes.findOne);
  
    // Update a demande with id
    router.put("/:id", demandes.update);
  
    // Delete a demande with id
    router.delete("/:id", demandes.delete);
  
    // Delete all demande
    router.delete("/", demandes.deleteAll); */
  
    app.use('/api/demandes', router);
  };