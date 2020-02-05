import bcrypt from 'bcrypt'
import {Document, Schema, Model, model} from "mongoose";

export var userSchema = new Schema({
    email: String,
    name: String,
    password: String
})

userSchema.pre("save", ()=> {
    const user = this;
  
      // only hash the password if it has been modified (or is new)
      if (!user.isModified('password')) return next();
  
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
  
const User = model('User', userSchema);

export default User