var express = require('express');
var router = express.Router();
var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var animalSchema =  Schema({
  isAvailable: Boolean,
  kind: String,
  variety: String,
  gender: String,
  Age: Number,
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
  console.log(req.body);
  // this.kind ??? =
  // var default_value = $(this).attr("placeholder").replace(/\r/g, "");
  // if (default_value == $(this).val())
  //     $(this).val('');

  newAnimal.save(function(err, saved) {
    res.send(err || saved);
    })
  });
//
// router.delete('/:animalId', function(req, res){ //colon just means this will be a value
//   animal.findByIdAndRemove(req.params.animalId, function(err, deletedAnimal) { //findByAndRemove is a built in mongoose function. Use the params of the request to find and remove the item with that value in the database.
//     if (err || !deletedAnimal){
//       res.status(400).send(err || "item not found");
//     } else {
//       res.send(deletedAnimal);
//     }
//   })
// });
//
// router.put('/:animalId/toggle', function(req, res){
//   animal.findById(req.params.animalId, function(err, foundAnimal){
//     if (err || !foundAnimal) {
//       res.send(err || "animal not found.");
//     } foundAnimal.save(function(err, updatedAnimal){
//       res.send("Animal has been updated.", updatedAnimal);
//     })
//   })
// });
module.exports = router;
