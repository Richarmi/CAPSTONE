const express = require('express');
// Next we set up the Router
const router = express.Router();
// require Our Model - Remember Model is
// a representation of our data
// The model should capitalized
const Gif = require('../models/gif');
// Creating the index route
// index route should show all the fruits
 router.get('/', async (req, res, next) => {
  console.log(req.session, ' this is get all')
     try  {

      const allGifs = await Gif.find();

      res.json({
        status: 200,
        data: allGifs
      })

    } catch (err){

      res.send(err)

    }
});


router.post('/', async (req, res) => {
  console.log('===================================================')
  console.log(req.session, ' this is req.session in the post route')
  console.log('===================================================')
  try {
    console.log(req.body, ' this is req.body');
    const createdGif = await Gif.create(req.body);

    res.json({
      status: 200,
      data: createdGif
    });

  } catch(err){
    console.log(err);
    res.send(err);
  }
});





router.get('/:id', async (req, res, next) => {

     try  {

        const foundGif = await Gif.findById(req.params.id);
        res.json({
          status: 200,
          data: foundGif
        });

      } catch (err){
        res.send(err);
      }



});

router.put('/:id', async (req, res) => {

  try {
    console.log("Invoking the PUT route of the BackEnd")
    console.log(req.body, "This is req.body in the PUT route");
    console.log(req.params, "This is req.params in the PUT route");
    const updatedGif = await Gif.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({
      status: 200,
      data: updatedGif
    });
  } catch(err){
    res.send(err)
  }
});


// Delete route
router.delete('/:id', async (req, res) => {

  try {
     const deletedGif = await Gif.findByIdAndRemove(req.params.id);
      res.json({
        status: 200,
        data: deletedGif
      });
  } catch(err){
    res.send(err);
  }
});



module.exports = router;
