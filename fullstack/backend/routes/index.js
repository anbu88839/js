const express = require('express');
const router = express.Router();
const Product = require('../models/products');
require('../models/db');

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// router.get('/search', async (req, res) => {
//   try {
//     const query = req.query.q;
//     const products = await Product.find({
//       $or: [
//         { name: { $regex: query, $options: 'i' } },
//         { description: { $regex: query, $options: 'i' } }
//       ]
//     });
//     res.json(products);
//   } catch (err) {
//     res.status(500).send('Server Error');
//   }
// });

// router.get('/category/:category', async (req, res) => {
//   try {
//     const products = await Product.find({ category: req.params.category });
//     res.json(products);
//   } catch (err) {
//     res.status(500).send('Server Error');
//   }
// });

router.post('/', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// // router.put('/:id', async (req, res) => {
// //   try {
// //     const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
// //     res.json(updated);
// //   } catch (err) {
// //     res.status(500).send('Server Error');
// //   }
// // });

router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;