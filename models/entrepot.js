module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50, 
        },
        
    Lieux: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50, 
    },
   
    Route: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50, 
    },
    Quantitejour: {
        type: Number,
        required: true
    },
    
    Codepostale: {
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

const Entrepot = mongoose.model("entrepot", schema);
return Entrepot ;
};