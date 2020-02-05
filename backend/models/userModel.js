import { Schema, Mongoose } from 'mongoose';
import { String } from 'prop-types';
import bcrypt from 'bcrypt';
import { runInNewContext } from 'vm';

const Document, Shema, Model = require("mongoose")

/*
    Creates a Schema for the User object and what
    values the user object will store
*/
export const userSchema = new Schema({
    email: String,
    name:String,
    password:String,
    date: {type: Date, default: Date.now}

})

userSchema.pre("save",()=>{

    //creates instances of the user
    const user = this

    // only hash the password if it has been modified (or is new)
    if(!user.isModified('password')) return next();

        // generate a salt
        bcrypt.genSalt(10, function(err, salt) {
            if (err) return next(err);
    
            // hash the password using our new salt
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) return next(err);
    
                // override the cleartext password with the hashed one
                user.password = hash;
                console.log(user.password)
                next();
    
            });
        });
});

const User = Mongoose.model('User', userSchema);

export  {User}