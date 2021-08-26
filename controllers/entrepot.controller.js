const db = require("../models");
const Entrepot = db.entrepots;

// Create and Save a new Entrepot
exports.create = (req, res) => {
    // Validate request


    if (!req.body.name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Entrepot
    const entrepot = new Entrepot ({
        name:req.body.name,
        Lieux: req.body.Lieux,
        Route: req.body.Route,
        Quantitejour: req.body.Quantitejour,
        Codepostale: req.body.Codepostale
    });
  
    // Save entrepot in the database
    entrepot
      .save(entrepot)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the entrepot."
        });
      });
  };

  // Retrieve all entrepots from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

  Entrepot.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving entrepots."
      });
    });
};


// Find a single entrepot with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Entrepot.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Entrepot with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Entrepot with id=" + id });
      });
  };

// Update a Entrepot by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Entrepot.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Entrepot with id=${id}. Maybe Entrepot was not found!`
          });
        } else res.send({ message: "Entrepot was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Entrepot with id=" + id
        });
      });
  };


