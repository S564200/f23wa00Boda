var express = require('express');
var router = express.Router();
var random=(Math.random()).toFixed(2);
var result=0;
router.get('/', function(req, res, next) {

    var log=Math.log(random).toFixed(2);
    var fround=Math.fround(random).toFixed(2);
    var log10=Math.log10(random).toFixed(2);
    res.send(`Math.random value is f(${random}}) is ${log} and Math.fround(${random}) is ${fround} and Math.log10(${random}) is ${log10}`);

});

module.exports=router;