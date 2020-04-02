  import {Document, Schema, Model, model} from "mongoose";

export var commentSchema = new Schema({
    email:String,
    companyName:String,
    contents: String,
    date: Date,
    rating: Number,
  
});

const Comment = model('Comment', commentSchema);

export default Comment