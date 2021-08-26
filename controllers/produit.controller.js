const db = require("../models");
const Produit = db.produits;

// Create and Save a new produit
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a produit
    const produit = new Produit ({
        name: req.body.name,
        price: req.body.price,
        inStock: req.body.inStock,
        new_product: req.body.new_product,
        SKU: req.body.SKU,
        Barcode: req.body.Barcode
    });
  
    // Save Produit in the database
    produit
      .save(produit)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Produit."
        });
      });
  };

// Retrieve all produits from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
    Produit.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving produits."
        });
      });
  };

// Find a single produit with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Produit.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Produit with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Produit with id=" + id });
      });
  };

// Update a produit by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Produit.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Produit with id=${id}. Maybe Produit was not found!`
          });
        } else res.send({ message: "Produit was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Produit with id=" + id
        });
      });
  };


// Delete a produit with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Produit.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Produit with id=${id}. Maybe Produit was not found!`
          });
        } else {
          res.send({
            message: "Produit was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Produit with id=" + id
        });
      });
  };

// Delete all produits from the database.
exports.deleteAll = (req, res) => {
  Produit.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Produits were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Produits."
      });
    });
};