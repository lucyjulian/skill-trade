const db = require("../database/models");

module.exports = {
    findMessages: function(req, res) {
        db.User.findById({ _id: req.params.id })
        .populate("messages")
        .then(function(dbUser){
            res.json(dbUser);
        })
        .catch(function(err){
            res.json(err)
        });

    },
    getUser: function(req, res) {
        console.log("HERE:CONTROLLERS")
        db.User.findOne({ username: req.params.username })
        .populate("messages")
        .then(function(dbUser){
            console.log(dbUser)
            res.json(dbUser);
        })
        .catch(function(err){
            res.json(err)
        });

    },
    sendMessage: function(req, res) {
        console.log("!!!!HERE:CONTROLLERS" + req.body.receiver)
        db.Message.create(req.body)
        .then(function(dbMessage){
            console.log(dbMessage);
            return db.User.findOneAndUpdate({username: dbMessage.receiver},{ $push: {message: dbMessage._id}}, {new: true});
        })
        .catch(function(err){
            res.json(err)
        });
    },
    getMessageBody: function(req, res) {
        console.log("HERE MESSAGE BODY CONTROLLER" + req.params.id)
        return db.Message.findOne({ _id: req.params.id} )
        .then(function(dbMessage) {
            console.log(dbMessage + "??????");
        })
        .catch(function(err){
            res.json(err)
        });
    }
    // collection.findOneAndUpdate(
    //     {_id: req.query.id},
    //     {$push: {items: item}},
    //     {safe: true, upsert: true},
    //     function(err, model) {
    //         console.log(err);
    //     }
}

