const express = require("express");
const router = express.Router();
const person = require("./../models/person");
const { findByIdAndDelete } = require("../models/menu");

//post route to add a person
router.post("/", async (req, res) => {
  try {
    const data = req.body; // assuming the request body contains the person data

    //create a new person document using the mongoose model
    const newPerson = new person(data);

    //save the new person to the database
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "internal server error" });
  }
});

//get method to get all the person
router.get("/", async (req, res) => {
  try {
    const data = await person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "internal server error" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "waiter" || workType == "manager") {
      const response = await person.find({ work: workType });
      console.log("data fetched succesfully");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "invalid work type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "internal serveer err" });
  }
});

router.put("/:iduweyduergf8389", async (req, res) => {
  try {
    const personId = req.params.iduweyduergf8389; //extract the id from the URL parameter
    const updatePersonData = req.body; //update data for the person

    const response = await person.findByIdAndUpdate(
      personId,
      updatePersonData,
      {
        new: true, //return the updated document
        runValidators: true,
      }
    );

    if(!response){
        res.status(404).json({err : 'person not found'});
    }

    console.log('data updated suvvesfylly');
    res.status(200).json(response);

  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "internal serveer err" });
  }
})

router.delete('/:id' , async(req,res) =>{
    try{
        const personId = req.params.id;
        const response = await person.findByIdAndDelete(personId);

        if(!response){
           return res.status(404).json({err : 'person not found'})
        }
      console.log('data deleted');
      res.status(200).json({message : 'data deleted successfully'});      
    }catch(err){
        console.log(err);
        res.status(500).json({ err: "internal serveer err" });
            
    }
})

module.exports = router;
