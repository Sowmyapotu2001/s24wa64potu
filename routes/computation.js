var express = require('express');
var router = express.Router();
 
/* Computation end point. */
router.get('/', function(req, res, next) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
 
  const x = req.query.x ? parseFloat(req.query.x) : randomNumber;
 
 
  res.send(`Math.atan() of ${x} is ${Math.atan(x)}<br> Math.exp() applied to ${x} is ${Math.exp(x)}<br> Math.expm1() applied to ${x} is ${Math.expm1(x)}`);
 
 
});

// const express = require('express');
// const router = express.Router();

// // New endpoint for computation
// router.get('/computation', function(req, res, next) {
//   // Generate a random value or use the query parameter 'x' if provided
//   const randomNumber = Math.floor(Math.random() * 100) + 1;
//   const x = req.query.x ? parseFloat(req.query.x) : randomNumber;

 
//   // Send the response with the computed result using existing functions
//   res.send(`
//     Math.atan of ${x} is ${Math.atan(x)}<br>
//     Math.exp() applied to ${x} is ${Math.exp(x)}<br>
//     Math.${fn}() applied to ${x} is ${result}
//   `);
// });

module.exports = router;
