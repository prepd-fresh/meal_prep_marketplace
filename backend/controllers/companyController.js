import mongoose from 'mongoose';
import Schema from '../models/companyModel'

const companyModel = mongoose.model('Company', Schema.companySchema)

export const createCompany = (req, res) =>{
    //create company logic here

    res.send("company created")
}


export const searchCompany = (req, res) =>{
    //create company logic here

    res.send("company created")
}
