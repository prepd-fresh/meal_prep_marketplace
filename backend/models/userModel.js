import bcrypt from 'bcrypt'
import {Document, Schema, Model, model} from "mongoose";

export var userSchema = new Schema({
    email: String,
    name: String,
    password: String
});

userSchema.pre("save", function(next){
    let user = this;
  
      // only hash the password if it has been modified (or is new)
      if (!user.isModified('password')) return next();
  
      // generate a salt
      bcrypt.hash(user.password,10,function(err, hash){
          if(err){
              console.log(err)
              next()
          }else{
            user.password = hash
            console.log(user.password)
            next();
          }
    })
});

const User = model('User', userSchema);

export default User