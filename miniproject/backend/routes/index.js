var express = require('express');
var router = express.Router();
var product = require('../models/product')
require('../models/db');


router.get('/',async (req,res)=>{
  try{
    const products = await product.find();
    res.json(products);
  }
  catch(err){
    res.status(500).send('server error')
  }
});



router.post('/',async(req,res)=>{
  try{
    const newproduct = new product(req.body);
    await newproduct.save();
    res.status(201).json(newproduct);
  }
  catch(err){
    res.status(500).send('server error');
  }
  });

  router.delete('/:id',async(req,res)=>{
    try{
      await product.findByIdAndDelete(req.params.id);
      res.sendstatus(200)

    }
    catch(err){
      res.status(500).send('server error');
    }
  })

module.exports = router;
