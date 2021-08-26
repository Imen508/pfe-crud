module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
       name: {
          type: String,
          required: true,
          minlength: 3,
          maxlength: 10, 
           
        },

        email: {
          type: String,
          required: true,
          minlength: 5,
          maxlength: 255,
        },

        NuméroTéléphone: {
          type: Number,
          required: true

        },

        Pays :{
          type: String,
          required: true,
          minlength: 5,
          maxlength: 50, 

        },

        VendeurDepuis: {
          type: Number,
          required: true
            
        },

        StatuVendeur: {
          type: String,
          required: true,
          minlength: 5,
          maxlength: 50,
        },
     },
        { timestamps: true }
    ); 

      schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      });
    
      const Vendeur = mongoose.model("vendeur", schema);
      return Vendeur;
};









