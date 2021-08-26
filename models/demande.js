
module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        Date: {
            type: Date,
            default : Date.now(),
            
            
        }
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Demande = mongoose.model("Demande", schema);
    return Demande;
  };