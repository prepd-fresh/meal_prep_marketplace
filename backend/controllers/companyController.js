import mongoose from 'mongoose';
import Schema from '../models/companyModel'
import mongodb from 'mongodb'
const companyModel = mongoose.model('Company', Schema.companySchema)

function company(){
    console.log("tester")
    var company = new companyModel({
        name: 'Test',
        deliveryLocations: [`GTA`,`Brampton`],
        deliveryDays: ['Monday',`Wednesday`],
        cutOff: "Add time and Time Zone values togehter ",
        paymentOptions: ['cash', 'Credit card'],
        priceRange: {
            lowest: '9.99',
            highest: '15.99'
        },
        bulkDiscount: 'true',
        numberOfMeals: '10',
        mealOptions: {
            breakFast: '1',
            lunch: 'none',
            dinner: '8',
            snacks: '1'
        },
        menuChanges: 'true',
        sizeOptions: 'false',
        vegetarian: 'true',
        extraProtien: 'true',
        vegan: 'false',
        instagramFollowers: '100000'
    });
    company.save((err) =>{
        if(err) throw err
    })
    
}
export const createCompany = (req, res) =>{
    company()
    res.send("company created")
}
export const addCompany = (req,res) =>{
    const company = JSON.parse(req.body.company)
    console.log(company)
    var companyData = new companyModel({
        name: company.name,
        deliveryLocations: company.deliveryLocations,
        deliveryDays: company.deliveryDays,
        cutOff: {
            time: company.cutOff.time,
            zone: company.cutOff.zone
        },
        paymentOptions: company.paymentOptions,
        priceRange: {
            lowest: company.priceRange.lowest,
            highest: company.priceRange.highest
        },
        bulkDiscount: company.bulkDiscount,
        numberOfMeals: company.numberOfMeals,
        mealOptions: [{
            breakFast: company.mealOptions.breakFast,
            lunch: company.mealOptions.lunch,
            dinner: company.mealOptions.dinner,
            snacks: company.mealOptions.snacks
        }],
        menuChanges: company.menuChanges,
        sizeOptions: company.menuChanges,
        vegetarian: company.vegetarian,
        extraProtien: company.extraProtien,
        vegan: company.vegan,
        averageRating: 0,
        instagramFollowers: company.instagramFollowers
    });
    companyData.save((err) =>{
        if(err) throw err
    });
    res.status(200).json({ message: "true" })
    res.end();
}


export const allCompany = (req, res) =>{
    companyModel.collection.find({}).toArray( function(err,company){
        if(err){
            res.send("error")
        }else{
            res.send(company)
        }
    });
}

export const deleteAllComapny = (req, res) =>{
    companyModel.deleteMany({}, (err) =>{
        if(err){
            res.send(err)
        }
        res.send("deleted all companys")
        res.send();
    });
}


export const deleteCompany = (req,  res )=>{
    const companyID = JSON.parse(req.body.companyID)
    companyModel.deleteOne({_id: new mongodb.ObjectID(companyID)}, (err) =>{
        if(err){
            res.send(err)
        }
        res.status(200).json({ message: "true" })
        
    });
}

