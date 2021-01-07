const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function(collection) {

    const router = express.Router();

    router.get('/', (req, res)=>{
        collection
        .find()
        .toArray()
        .then((docs)=>res.json(docs))
    })

    router.get("/:id", (req, res)=>{
        const id = req.params.id;
        collection
        .findOne({_id: ObjectID(id)})
        .then((docs)=>res.json(docs))
    });

    router.post("/", (req, res)=>{
        const newData = req.body;
        collection
        .insertOne(newData)
        .then((docs)=>res.json(docs.ops[0]))
    });

    router.delete("/:id", (req, res)=>{
        const id = req.params.id;
        collection
        .deleteOne({_id: ObjectID(id)})
        .then((docs)=>res.json(docs))
    });

    router.put("/:id", (req, res)=>{
        const id = req.params.id;
        const newData = req.body;
        collection
        .updateOne({_id: ObjectID(id)}, {$set: newData})
        .then((docs)=>res.json(docs))
    })


    return router;
} 

module.exports = createRouter;
