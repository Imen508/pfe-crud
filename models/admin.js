module.exports= mongoose => {
const Joi = require('joi');//mnin jibtiha heth??? men el code le9dem hiya eli ta3tic kifech lazem yetkteb l'adress expemble

const adminSchema =  mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50, 
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    }, 
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    NuméroTéléphone: {
        type: Number,
        required: true

    }
    
});


const Admin = mongoose.model('Admin', adminSchema);

const validateAdmin = (admin) => {
    const schema = {
        Idadmin: Joi.number().required(),
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(50).required().email(),
        password: Joi.string().min(5).max(1024).required(),
        NuméroTéléphone: Joi.number().required()
    }

    return Joi.validate(admin, schema);
}


exports.Admin = Admin;
exports.validate = validateAdmin;
}