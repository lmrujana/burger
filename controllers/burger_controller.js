const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get("/", function(req, res){
    burger.all(function(data){
        const hbsObject = {
            burgers: data
        }
        res.render("index", hbsObject);
    });
});

router.post('/api/burger', function(req, res){
    burger.insertOne(req.body.burgerName, function(results){
        res.json(results);
    });
});

router.put('/api/burger/:id', function(req, res){
    let burgerId = req.params.id;

    burger.updateOne(burgerId, function(results){
        if (results.changedRows === 0) {
            return res.status(404).end();
          }
          res.status(200).end();
    })
})

module.exports = router;