const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function(req,res){
    burger.all(function(data){
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req,res){
    burger.create(req.body.name,function(result){
        //res.json({ id: res.insertId});
        res.status(200).end();
    });
});

router.put("/api/burgers/:id", function(req,res){
    burger.update(req.params.id,function(result){
        if(result.changedRows == 0){ // ID doesn't exist
            return res.status(404).end();
        } else{
            res.status(200).end();
        }
    });
});
module.exports = router;