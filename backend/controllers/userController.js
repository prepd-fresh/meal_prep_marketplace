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
        res.send(JSON.stringify(userMap))
    });
}
