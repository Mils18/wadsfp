const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const User = require("../models/user");

router.post("/signup", (req, res, next) => {
  console.log("finding")
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "e-mail exists"
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              message: hashingerror,
              error: errs
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              password: hash,
              storeName: "",
              idCardNumber: "",
            });
            user
              .save()
              .then(result => {
                console.log(result);
                res.status(201).json({
                  message: "User created"
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    });
});

router.post("/login", (req, res, next)=>{
  User.find({email: req.body.email})
  .exec()
  .then(user => {
    if (user.length <1 ) {
      return res.status(401).json({
        message : 'Auth failed',
        email: req.body.email,
        password: req.body.password
      });
    }
    bcrypt.compare(req.body.password, user[0].password, (err, result) => {
      if (err) {
        return res.status(401).json({
          error: 'Auth failed'
        });
      } 
      if (result) {
        const token = jwt.sign(
          {
            email: user[0].email,
            userId: user[0]._id
          },
          process.env.JWT_KEY,
          {
            expiresIn: "1h"
          }
        );
        return res.status(200).json({
          id: user[0]._id,
          firstName: user[0].firstName,
          lastName: user[0].lastName,
          token: token,
          storeName :user[0].storeName
        });
      }
      res.status(401).json({
        message: 'Auth failed'
      })
    });  
  })
  .catch()
});

router.put("/:userId", (req, res, next) => {
  User.findByIdAndUpdate({ _id: req.params.userId }, { 
    $set:
      {
        storeName: req.body.storeName,
        idCardNumber: req.body.idCardNumber
      }
        })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Store has been registered",
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});


module.exports = router;