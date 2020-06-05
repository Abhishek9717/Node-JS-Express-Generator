var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());
var people = {"people":[ {"name":"Aman" }] }

router.post('/',function(req,res){
  console.log(req.body);
  if(req.body && req.body.name){ 
    people.people.push({name:req.body.name})
  }
  res.json(people);
  res.end();
})


router.get('/:name',function(req,res){
  res.json({name:req.params.name});
  res.end();
})
module.exports = router;
