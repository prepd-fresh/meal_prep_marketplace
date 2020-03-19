import mongoose from 'mongoose';
import Schema from '../models/companyModel'

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
        mealOptions: [{
            breakFast: '1',
            lunch: 'none',
            dinner: '8',
            snacks: '1'
        }],
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


export const allCompany = (req, res) =>{
    companyModel.collection.find({}).toArray(function(err,company){
        if(err){
            res.send("error")
        }else{
            res.send(company)
        }
    })
}

export const deleteComapny = (req, res) =>{
    companyModel.deleteMany({}, (err) =>{
        if(err){
            res.send(err)
        }
        res.send("deleted all companys")
        res.send();
    });
}

