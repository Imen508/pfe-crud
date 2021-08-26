const db = require("../models");
const Vendeur = db.vendeurs;

// Create and Save a new Vendeur
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Vendeur
    const vendeur = new Vendeur ({
        name: req.body.name,
        email: req.body.email,
        NuméroTéléphone: req.body.NuméroTéléphone,
        Pays: req.body.Pays,
        VendeurDepuis: req.body.VendeurDepuis,
        StatuVendeur: req.body.StatuVendeur
    });
  
    // Save Vendeur in the database
    vendeur
      .save(vendeur)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Vendeur."
        });
      });
  };

  
// Retrieve all vendeurs from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

  Vendeur.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving vendeurs."
      });
    });
};


// Find a single Vendeur with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Vendeur.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Vendeur with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Vendeur with id=" + id });
      });
  };

// Update a Vendeur by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Vendeur.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Vendeur with id=${id}. Maybe Vendeur was not found!`
          });
        } else res.send({ message: "Vendeur was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Vendeur with id=" + id
        });
      });
  };


// Delete a Vendeur with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Vendeur.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Vendeur with id=${id}. Maybe Vendeur was not found!`
          });
        } else {
          res.send({
            message: "Vendeur was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Vendeur with id=" + id
        });
      });
  };


