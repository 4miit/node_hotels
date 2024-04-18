const mongoose = require('mongoose');

//define the person schema 
const personSchema = new mongoose.Schema({
    name :{
        type :String,
        required : true
    },
    age :{
        type: Number
    },
    work: {
        type :String,
        enum: ['chef','waiter','manager'],
        required: true
    },
    mobile : {
        type : String,
        required : false
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    address : {
        type : String,
        required : false
    },
    salary : {
        type : Number,
        required : false
    }
})

//create person model
const person = mongoose.model('oneman',personSchema);   //oneman yaha pe database m ja kr ek folder k naam se save hota hai
module.exports = person;