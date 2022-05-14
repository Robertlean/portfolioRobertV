var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Roberto Veintemilla' });
});

router.post('/', function(req, res, next){
  res.redirect('/')
  console.log(req.body)
})

module.exports = router;
