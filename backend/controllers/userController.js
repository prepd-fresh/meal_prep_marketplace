import mongoose from 'mongoose';
import Schema from '../models/userModel';
import bcrypt from 'bcrypt'
import User from '../models/userModel';
import jwt from 'jsonwebtoken'

//required for the session token generation
require('dotenv').config();
const ACCESS_SECRET_TOKEN = "yw3foDi547kQEHu2oCFZwd2tZBHYHBNLTWKgqs9v2B6ItEXgoegE0MQCB2NVzJcXaOzECo4gX7PT7iIYkkgH2Q"
const userModel = mongoose.model('User', Schema.userSchema)

function testUser() {
    var user = new userModel({
        email: "test@test.com",
        name: "testUName",
        password: "testpassword"
    })
    user.save((err) => {
        if (err) throw err;
    })
}

export const createTestUser = (req, res) => {
    testUser();
    res.send("added user successfully")
}

export const showAllUsers = (req, res) => {
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
export const register = (req, res) => {
    console.log(req.user)
}
/*
Login controller
*/
export const loginUser = async (req, res) => {
    var data = JSON.parse(req.body.user)
    var email = data.email
    var password = data.password

    console.log(email)
    console.log(password)

    //checks if the email exists
    try {
        var user = await validateEmail(email)
    } catch (err) {
        console.log(err)
    }
    //if the email exists then check if password match



    ///IMPORTANT CHECK IF USER IS AN ADMIN HERE TOO 
    //CHANGE USER MODAL TO HAVE AN ADMIN FEATURE AS WELL
    //COMPANY ADD FORM 
    //DISPLAY COMPANY 
    //AND ALL ADMIN FEATURES
    if (user !== null) {
        try {
            //compares the two passwords togther one passwed from the user one gotten from the database
            await bcrypt.compare(password, user.password, (err, value) => {
                if (err) {
                    res.send(err)
                } else {
                    if (value === true) {
                       const accessToken = jwt.sign(user.toJSON(), ACCESS_SECRET_TOKEN)
                       res.status(200).json({ message: "true" , token: accessToken})
                    } else {
                        res.status(200).json({ message: "false" })
                    }
                }
            })
        } catch (err) {
            console.log(err)
        }
    }else{
        res.status(200).json({ message: "false" })
    }
}
/*
delete all users
*/
export const deleteAllUsers = (req, res) => {
    userModel.deleteMany({ email: 'test@test.com' }, (err) => {
        if (err) {
            res.send(err);
        }
        res.send("deleted all users")
        res.end();
    })
}




//checks if the email exists
async function validateEmail(email) {
    var responses

    await User.findOne({ email: email }, function (err, user) {
        if (err) {
            return err
        }
        responses = user
    })
    return responses;
}
