import mongosse from 'mongoose';
import {Schema, User} from '../models/userModel';
import bcrypt  from 'bcrypt'

const user = mongosse.model('User', Schema.user)
function testUser(){
    var user = new User({
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
    user.find({}, function (err, user) {
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