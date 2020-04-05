import mongoose from 'mongoose';
import Schema from '../models/userModel';
import bcrypt from 'bcrypt'
import User from '../models/userModel';
import jwt from 'jsonwebtoken'
//add .env file FUCK



//required for the session token generation
require('dotenv').config();
const userModel = mongoose.model('User', Schema.userSchema)

function testUser() {
    var user = new userModel({
        email: "test@test.com",
        name: "testUName",
        password: "testpassword",
        role:"user"
    })
    user.save((err) => {
        if (err) throw err;
    })
}
function testAdmin(){
    var user = new userModel({
        email:"admin@gmail.com",
        name:"Adamin",
        password:"admin",
        role:"admin"
    })
    user.save((err) =>{
        if(err) throw err
    })
}

export const createTestUser = (req, res) => {
    testUser();
    res.send("added user successfully")
}
export const  createAdminUser = (req, res) => {
    testAdmin();
    res.send("created Admin")
}
export const showAllUsers = (req, res) => {
    userModel.collection.find().toArray(function (err, user) {
        if(err){
            res.send("error")
        }else{
            res.send(user)
        }
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

    //checks if the email exists
    try {
        var user = await validateEmail(email)
    } catch (err) {
        console.log(err)
    }


    if (user !== null) {
        try {
            if(user.password == null){
                user.password = "0"
            }
            console.log(password)
            console.log(user.password)
            await bcrypt.compare(password, await user.password, (err, value) => {
                if (err) {
                    res.send(err)
                } else {
                    if (value === true) {
                       const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_TOKEN)
                       res.status(200).json({ message: "true" , token: accessToken, role: user.role})
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
export const deleteAllAdmins = (req, res) => {
    userModel.deleteMany({ email: 'admin@gmail.com' }, (err) => {
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
