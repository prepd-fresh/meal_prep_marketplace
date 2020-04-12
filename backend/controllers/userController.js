import mongoose from 'mongoose';
import Schema from '../models/userModel';
import bcrypt from 'bcrypt'
import User from '../models/userModel';
import mongodb from 'mongodb'
import jwt from 'jsonwebtoken'
import e from 'express';

//required for the session token generation
require('dotenv').config();
const userModel = mongoose.model('User', Schema.userSchema)

function testUser() {
    var user = new userModel({
        email: "test@test.com",
        name: "testUName",
        password: "testpassword",
        role: "user"
    })
    user.save((err) => {
        if (err) throw err;
    })
}
function testAdmin() {
    var user = new userModel({
        email: "adam.kita99@gmail.com",
        name: "Adamin",
        password: "pielikei",
        role: "admin"
    })
    user.save((err) => {
        if (err) throw err
    })
}

export const createTestUser = (req, res) => {
    testUser();
    res.send("added user successfully")
}
export const createAdminUser = (req, res) => {
    testAdmin();
    res.send("created Admin")
}
export const showAllUsers = (req, res) => {
    userModel.collection.find().toArray(function (err, user) {
        if (err) {
            res.send("error")
        } else {
            res.send(user)
        }
    });
}
/*
Login controller
*/
export const loginUser = async (req, res) => {
    var data = JSON.parse(req.body.user)
    var email = data.email
    var password = data.password
    let dbUser
    //checks if the email exists
    await User.findOne({ email: email }, function (err, user) {
        if (err) {
            console.log(err)
        } 
        dbUser = user
        
    }).then(async (response) => {
          if (response !== null) {
              console.log(dbUser.password)
              console.log(password)
               await comparePasswords(password, await dbUser.password).then((result) =>{
                console.log(result)
                if (result === true) {
                    const accessToken = jwt.sign(dbUser.toJSON(), process.env.ACCESS_SECRET_TOKEN)
                    res.status(200).json({ message: "true", token: accessToken, role: dbUser.role })
                }
                else {
                    res.status(200).json({ message: "false" })
                }
              }).catch((err) => {console.log(err)})
          }
       
    })
}

async function comparePasswords(currentPassword, dbPassword) {
    let flag = false
    await bcrypt.compare(currentPassword, dbPassword)
    .then((result) =>{
        return flag = result
    })
    return flag
}
export const registerAdmin = async (req,res) =>{
    var body = JSON.parse(req.body.newAdmin);
    let userRole = req.user.role
    if(userRole === 'admin'){
    await User.findOne({ email: body.email }, function (err, user) {
        if (err) {
            console.log(err)
        } else {
            //if there is no user with that email 
            if (user === null) {
                var addUser = new userModel({
                    email: body.email,
                    name: body.name,
                    password: body.password,
                    role: "admin"
                })
                addUser.save(function (err) {
                    if (err) throw err
                })
                res.status(200).json({ message: "added" })
            } else if (user != null) {
                res.status(200).json({ message: "emailTaken" })
            } else {
                res.status(200).json({ message: "unreachable" })
            }
        }
    })
}else{
    res.status(200).json({ message: "notAdmin" })
}
}
export const registerUser = async (req, res) => {
    var body = JSON.parse(req.body.newUser);
    //checks if users email exists already
    await User.findOne({ email: body.email }, function (err, user) {
        if (err) {
            console.log(err)
        } else {
            //if there is no user with that email 
            if (user === null) {
                var addUser = new userModel({
                    email: body.email,
                    name: body.name,
                    password: body.password,
                    role: "user"
                })
                addUser.save(function (err) {
                    if (err) throw err
                })
                res.status(200).json({ message: "added" })
            } else if (user != null) {
                res.status(200).json({ message: "emailTaken" })
            } else {
                res.status(200).json({ message: "unreachable" })
            }
        }
    })
}

export const deleteUserByID = (req, res) =>{
    var userId = JSON.parse(req.body.userID)
  
    userModel.deleteOne({_id: new mongodb.ObjectID(userId)}, (err, user) =>{
        if(err) res.send(err)
    })
    res.status(200).json({message:"true"})
}
export const deleteAllUsers = (req,res) =>{
    userModel.delete({}, (err)=>{
        if(err){
            res.send(err)
        }
        res.send("deletedAllUsers")
        res.end()
    })
}



