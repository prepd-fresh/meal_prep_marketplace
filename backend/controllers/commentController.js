import mongoose from 'mongoose';
import Schema from '../models/commentModel'
import mongodb from 'mongodb'
import User from '../models/userModel';

const commentModel = mongoose.model('Comment', Schema.commentSchema)

function comment() {
    var comment = new commentModel({
        email: "test@test.com",
        companyName: "Clean Bite",
        content: "greate food perfect meals",
        date: "1/11/2020",
        rating: 5
    });
    comment.save((err) => {
        if (err) throw err
    })

}

export const addTestComment = (req, res) => {
    comment();
    res.send("comment Added")
}

export const addComment = async (req, res) => {
    const commentData = JSON.parse(req.body.newComment)

    var commentValidator = await validateComment(req.user.email, commentData.companyName).catch(() => "promis rejected")
    if (commentValidator === null) {
            var data = new commentModel({
                email: req.user.email,
                companyName: commentData.companyName,
                content: commentData.content,
                date: Date.now(),
                rating: commentData.rating
            })
            data.save((err) =>{
                if(err) throw err
            })
        res.status(200).json({ message: "added", email: req.user.email, date: Date.now(), content: commentData.message })
        res.end();
    }
    else {
        res.status(200).json({ message: "AlreadyCommented" })
    }
}
export const deleteAllComments = (req, res) => {
    commentModel.deleteMany({}, (err) => {
        if (err) {
            res.send(err)
        }
        res.send("deleted all comments")
        res.end();
    });
}

export const allCommentsByCompany = (req, res) => {
    const name = JSON.parse(req.body.companyName)

    commentModel.collection.find({ companyName: name }).toArray(function (err, comments) {
        if (err) res.send(err)
        else {
            res.send(comments)
        }
    });
}

export const allCommentsAdmin = (req, res) => {
    commentModel.collection.find({}).toArray(function (err, comments) {
        if (err) {
            res.send(err)
        } else {
            res.send(comments)
        }
    });
}
export const deleteCommentById = (req,res)=>{
    const commentId = JSON.parse(req.body.commentID)
    commentModel.deleteOne({_id: new mongodb.ObjectID(commentId)}, (err, company) =>{
        if(err) res.send(err)
    })
    res.status(200).json({message:"true"})
}

async function validateComment(checkerEmail, checkerCompanyName) {
    var response

    await commentModel.findOne({ email: checkerEmail, companyName: checkerCompanyName }, function(err, comment){
        if(err) return err

        response = comment
        console.log(comment)
    }).catch((err) => console.log(err)).then();
    return response;
}
