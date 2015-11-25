// 'use strict';
//
// var Mongoose = require('mongoose');
//
// var clientSchema = Mongoose.Schema({
//   name: {type: String, required: true},
//   pets: [{type: Mongoose.Schema.ObjectId, ref:}]//this is a special type that refers to the ID mongo creates. THis allows featurues to be taken advantage of because this is a built in and Mongo-recognized type.
// });
//
// //populate example: Client.find({}).populate('pets').exec(function(err, clients){
// //
// //
// // });
//
// var Client = Mongoose.model('Client', clientSchema);
// module.exports = Client;
//
//
// //js to find client, find pet and then pair them in db
// // Client.findById({:clientId}), function(err, client){
// //   Animal.findById({:animalId}), function(err, animal) {
// //     client.petspush(pet._id); //Mongo will generate the id with an underscore?
// //     pet.isAvailable = false; //pet is now going to be unavailble because its paired.
// //     client.save(function(err, savedClient){
// //       pet.save(function(err, savedPet){
// //         res.send();
// //       })
// //     })
// //   }
// // }
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('client serverside route works.');
});

router.put('/', function(req, res, next) {
  res.send('client serverside PUT route works.');
});

router.post('/', function(req, res, next) {
  res.send('client serverside POST route works.');
});

router.delete('/', function(req, res, next) {
  res.send('client serverside DELETE route works.');
});

module.exports = router;
