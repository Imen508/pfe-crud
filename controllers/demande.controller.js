const db = require("../models");
const Demande = db.demandes;

// Create and Save a new demande
exports.create = (req, res) => {
    // Validate request
    if (!req.body.Date) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a demande
    const demande = new Demande ({
        Date: req.body.Date,
        
    });
  
    // Save Demande in the database
    demande
      .save(demande)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the demande."
        });
      });
  };

// Retrieve all demandes from the database.
exports.findAll = (req, res) => {
    const Date = req.query.Date;
    var condition = Date ? { Date: { $regex: new RegExp(Date), $options: "i" } } : {};
  
    Demande.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Demandes."
        });
      });
  };

// Find a single Demande with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Demande.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Demande with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Demande with id=" + id });
      });
  };

// Update a Demande by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Demande.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Demande with id=${id}. Maybe Demande was not found!`
          });
        } else res.send({ message: "Demande was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Demande with id=" + id
        });
      });
  };


// Delete a Demande with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Demande.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Demande with id=${id}. Maybe Demande was not found!`
          });
        } else {
          res.send({
            message: "Demande was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Demande with id=" + id
        });
      });
  };

// Delete all Demandes from the database.
exports.deleteAll = (req, res) => {
  Demande.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Demandes were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Demandes."
      });
    });
};