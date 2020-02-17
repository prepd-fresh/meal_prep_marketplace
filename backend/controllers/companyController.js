import mongoose from 'mongoose';
import Schema from '../models/companyModel'

const comapnyModel = mongoose.model('Comapny', Schema.companySchema)

export const createComapny = (req, res) =>{
    //create company logic here

    res.send("company created")
}


export const searchComapny = (req, res) =>{
    //create company logic here

    res.send("company created")
}
