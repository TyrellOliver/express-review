const express = require('express');
// Setting up router for our juice
const juice = express.Router();
const juiceArr = require('../models/juice');

// GET all the juices
juice.get('/',(req,res)=>{
    res.json(juiceArr);
})

// GET one of the juices
juice.get("/:id",(req,res)=>{
    const {id}= req.params
    res.json(juiceArr[id])
})

// POST a new juice to the juice array
juice.post('/',(req,res)=>{
    juiceArr.push(req.body)
    res.json(juiceArr)
})


//Update
juice.put('/:id',(req,res)=>{
    const id = req.params.id
    juiceArr.splice(id, 1, req.body)
    res.json(juiceArr)
})


// DELETE one of the juices
juice.delete('/:id', (req,res)=>{
    const id = req.params.id
    //Splice helps us to remove an element that us not at the end or beginning 
    juiceArr.splice(id,1)
    res.json(juiceArr);
})



module.exports = juice