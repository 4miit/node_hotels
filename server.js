/*
console.log("server file is running");

function abc(a,b){
    return a+b;
}

let res=abc(7,8);
console.log(res);


function abc(a,b){
    return a+b;
}

let res=abc(6,35);
console.log(res);




function abc(a,b){
    return a+b;
}

let res=abc(7,8);
console.log(res);



let v = (a,b) =>{
    return a+b;
}
let g=v(7,6);
console.log(g);


function callback(){
    console.log("hi i am amit");
}

const add = function(a,b,callback){
        var result = a+b;
        console.log("result :" + result);
        callback();
}
add(7,7,callback);


function callback(){
    console.log("hi i am amit");
}

const add = function(a,b,callback){
    var result = a+b;
    console.log("result :" + result);
    callback();
}
add(7,7,callback);




(function (a,j){
    console.log("hi i am amit");
    console.log(a+j);
})(9,8);




function callback(){
    console.log("hi i am amit");
}

( function(a,b,callback){
    var result = a+b;
    console.log("result :" + result);
    callback();
})(7,8,callback);


function callback(){
    console.log("hi i am amit");
}
let u=6,v=9;
( function(a,b,callback){
    var result = a+b;
    console.log("result :" , result);
    callback();
})(v,u,callback);


function callback(){
    console.log("hi i am amit");
    console.log(u,v);
}

{var u=6,v=9;}

( function(a,b,callback){
    var result = a+b;
    console.log("result :" , result);
    console.log(u,v);
    callback();
})(v,u,callback);



function callback(){
    console.log("hi i am amit");
    var u=6,v=9;
    console.log(u,v);
}





( function(a,b,callback){
    var result = a+b;
    console.log("result :" , result);
    console.log(u,v);
    callback();
})(v,u,callback);





const add = function (a,b,callback){
    let result = a+b;
    console.log(result);
    callback(7,90);
}

add(6,87,(v,n)=>{
    console.log(v+n)
})

const add = function (a,b,callback){
    let result = a+b;
    console.log(result);
    callback(7,90);
}

add(6,87,(v,n)=>console.log(v+n))






var fs = require("fs");
var os = require("os");

var user = os.userInfo();
console.log(user.username);

fs.appendFile("greeting.txt", "hello node js"   + user.username + "!\n" ,()=>{
    console.log("file is created");
});
console.log(os);
console.log(fs);



const notes =require("./notes.js");
var _ = require("lodash");
                                                                  
let age = notes.age;
console.log(age);

var result = notes.addnumber(age+18,10)
console.log(age);
console.log("result is :", result);

var data = ["person","amit","amit",1,2,4,1,4,2,"hello","9"];
var filter= _.uniq(data);
console.log(filter);

console.log(_.isString("prince"));
console.log(_.isString(9));
console.log(_.isString(true));

const jsonString = '{"name":"john","age": 23,"city": "new York"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
console.log(jsonObject.name);
console.log(typeof jsonObject);


objectToconvert = {
    name : 'amit kumar',
    age: 23,
};
const json =JSON.stringify(objectToconvert);
console.log(json)
console.log(json.name)

console.log(typeof json);



const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('welcome to my hotel how i can help you')
})

app.get('/chicken',(req,res) =>{
    res.send('sure sir , i would love to serve chicken')
})                              

app.get('/idli',(req,res) =>{
    var customizedIdli = {
        name : 'rava idli',
        size : '10 cm diameter',
        is_sambhar : true,
        coconutChutny : false
    };
    res.send(customizedIdli)
})

app.listen(3000,() =>{
    console.log('listen on port 3000');
})





const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('welcome to my hotel how i can help you')
})

app.get('/chicken',(req,res) =>{
    res.send('sure sir , i would love to serve chicken')
})                              

app.get('/idli',(req,res) =>{
    var customizedIdli = {
        name : 'rava idli',
        size : '10 cm diameter',
        is_sambhar : true,
        coconutChutny : false
    };
    res.send(customizedIdli)
})


app.post('/person', (req,res) => {
    res.send('data is saved');
})

app.listen(3000,() =>{
    console.log('listen on port 3000');
})


*/

const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send(
    "welcome to my hotel... how i can help you ? we have listen of menus");
});

//import the router files
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');

//use the router files
app.use('/person' , personRoutes);
app.use('/menu' ,menuRoutes);

app.listen(PORT, () => {
  console.log("listen on port 3000");
});
