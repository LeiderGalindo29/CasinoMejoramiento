const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
  })  

router.get('/jugar', (req, res) => {
    res.render('jugar')
})  



  module.exports=router;