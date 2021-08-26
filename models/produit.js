
module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50, 
        },
       
        price: {
            type: Number,
            required: true
        },
        inStock: {
            type: Boolean,
            required: true,
            default: true
        },
        new_product: {
            type: Boolean,
            required: true,
            default: true
        },
        SKU: { 
            type: Number,
            required: true
        },
        Barcode: {
            type: Number,
            required: true
    
        }
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Produit = mongoose.model("produit", schema);
    return Produit;
  };