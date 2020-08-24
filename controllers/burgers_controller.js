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
    console.log(req.body);
    burger.create("burger_name",function(req,res){
        res.json({ id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req,res){
    const condition = "id = " + req.params.id;
    burger.update(req.params.id,function(res){
        if(res.changedRows == 0){ // ID doesn't exist
            return res.status(404).end();
        } else{
            res.status(200).end();
        }
    });
});
module.exports = router;