module.exports = app => {
    const entrepots = require("../controllers/entrepot.controller.js");
  
    var router = require("express").Router();
  
    // Create a new entrepot
    router.post("/", entrepots.create);
  
    // Retrieve all entrepots
    router.get("/", entrepots.findAll);
  
  
    // Retrieve a single entrepot with id
    router.get("/:id", entrepots.findOne);
  
    // Update a entrepot with id
    router.put("/:id", entrepots.update);
  
  
  
    app.use('/api/entrepots', router);
  };