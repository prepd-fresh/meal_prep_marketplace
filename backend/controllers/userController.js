import mongoose from 'mongoose';
import Schema  from '../models/userModel';
import bcrypt  from 'bcrypt'

const userModel = mongoose.model('User', Schema.userSchema)

function testUser(){
    var user = new userModel({
        email: "test@test.com",
        name: "testUName",
        password: "testpassword"
    })
    user.save((err)=>{
        if(err) throw err;
    })
}

export const createTestUser = (req, res) =>{
    testUser();
    res.send("added user successfully")
}

export const showAllUsers = (req,res) =>{
    userModel.find({}, function (err, user) {
        var userMap = {};
        user.forEach((users) => {
            userMap[users._id] = user;
        });
        if (err) {
            res.send(err);
        }
        console.log("test all users")
        res.send(JSON.stringify(userMap))
    });

    
}
export const register = (req, res) =>{
    console.log(req.user)
}
/*
Login controller
*/
export const loginUser = (req, res) =>{
    console.log(req.body)
    res.send(req.body)
}
/*
delete all users
*/
export const deleteAllUsers = (req,res) =>{
    userModel.deleteMany({ email: 'test@test.com' }, (err) => {
        if (err) {
            res.send(err);
        }
        res.send("deleted all users")
        res.end();
    })
}