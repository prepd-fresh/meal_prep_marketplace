import mongoose from 'mongoose';
import Schema from '../models/commentModel'
import mongodb from 'mongodb'

const commentModel = mongoose.model('Comment', Schema.commentSchema)

function comment(){
    var comment = new commentModel({
        email:"test@test.com",
        companyName:"Clean Bite",
        content:"greate food perfect meals",
        date:"1/11/2020",
        rating: 5
    });
    comment.save((err) =>{
        if(err) throw err
    })
    
}

export const addTestComment = (req,res) =>{
    comment();
    res.send("comment Added")
}

export const addComment = (req,res) =>{
    const commentData = JSON.parse(req.body.comment)
    console.log(comment)

    var data = new commentModel({
        email: commentData.email,
        companyName: commentData.companyName,
        content: commentData.content,
        date: commentData.date,
        rating: commentData.rating
    })
    data.save((err) =>{
        if(err) throw err
    })
    res.status(200).json({message:"true"})
    res.end(); 
}
export const deleteAllComments = (req,res) => {
    commentModel.deleteMany({}, (err) =>{
        if(err){
            res.send(err)
        }
        res.send("deleted all comments")
        res.end();
    });
}

export const allCommentsByCompany = (req,res) => {  
    const name = JSON.parse(req.body.companyName)

    commentModel.collection.find({companyName : name}).toArray(function(err, comments){
        if(err) res.send(err)
        else{
            res.send(comments)
        }
    });
}

export const allCommentsAdmin = (req,res) =>{ 
    commentModel.collection.find({}).toArray(  function(err, comments){
        if(err){
            res.send(err)
        }else{
            res.send(comments)
        }
    });
}