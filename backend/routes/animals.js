var express = require('express');
var router = express.Router();
var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var animalSchema =  Schema({
  isAvailable: {type: Boolean, default: true, required: true},
  kind: String,
  variety: String,
  gender: {type: String, default: "not provided"},
  age: {type: String, default: "unknown"},
  name: String,
  description: String,
  isGoodwithChildren: Boolean,
  isGoodwithAnimals: Boolean
});

var animal = Mongoose.model('animal', animalSchema);

/* GET users listing. */
router.get('/', function(req, res, next) {
  animal.find({}, function(err, found){ //where second arg is success
    res.send(err || found);
  });
});

router.post('/', function(req, res) {
  var newAnimal = new animal(req.body);
  newAnimal.save(function(err, saved) {
    res.send(err || saved);
    })
  });

router.put('/:animalId', function(req, res) {
  animal.findByIdAndUpdate(req.params.animalId, { isAvailable: 'false'}, function(err, updated){
    if (err || !updated) {
      res.status(404).send(err || "animal not found in database.");
    } else {
        updated.save(function(err, saved) {
          // if (err){
          //   res.send("error saving.");
          // } else {
          res.send(err || saved);
//          }
        })
      }
  })
});

router.delete('/:animalId', function(req, res) {
  animal.findByIdAndRemove(req.params.animalId, function(err, deletedAnimal) {
      if (err || !deletedAnimal ){
        res.status(400).send(err || "no such ID.");
      } else {
        res.send('completed removal of: ', deletedAnimal);
      }
  });
});
module.exports = router;
