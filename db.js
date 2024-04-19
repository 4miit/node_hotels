const mongoose = require('mongoose');

//define  the mongodb connection Url
//const mongoURL = 'mongodb://localhost:27017/hotels';      //hotel is the name of my database
const mongoURL = 'mongodb+srv://amitkumarrvm123:<hBDmFn4sbG5fyX8r>@cluster0.mv3l3z0.mongodb.net/'
//set mongoDB connection
mongoose.connect(mongoURL,{
    useNewUrlParser : true,          
    useUnifiedTopology : true,
})

//get the default connection
//mongoose maintain a default connection object representing the mongoDB connection
const db = mongoose.connection;

db.on('connected', () =>{
    console.log('connected to mongoDB srever');
});


db.on('err', (err) =>{
    console.err('mongoDB connection err' , err);
});



db.on('disconnected', () =>{
    console.log('mongoDB disconnected ');
});


//export the database connection
module.exports = db;

