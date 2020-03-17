import mongoose from 'mongoose';
import Schema from '../models/companyModel'

const companyModel = mongoose.model('Company', Schema.companySchema)

function company(){
    console.log("tester")
    var company = new companyModel({
        CompanyName: "Test company",
        DeliveryLocations: ["GTA", "HAMILTON"],
        DeliveryTimes: ["sundays", "fridays"],
        OrderCutoff: ["7pm"],
        OrderOptions: [{
            Subscription: true,
            OneTimeOrder: false,
            MYO: true
        }],
        PriceRange: [{
            lowest: "5.29",
            highest: "11.99"
        }],
        BulkDiscount: true,
        NumberOfMeals: 20,
        OptionsMeals: [{
            BreakFast: 5,
            Lunch: 5,
            Dinner: 5,
            Snacks: 5
        }],
        MenuChanges:true,
        SizeOptions: true,
        SizeDescription: "Extra protien",
        OfferVegeraian: true,
        PaymentMethod:["stripe", "paypal"],
        DeliverCosts: 15.99,
        DeliverCostDescription: "delivery only on saturdays",
        OtherProducts: true,
        OtherProductDescription:"catering for offices",
        InstagramFollowers: 21000,
        AdvancedSearch:["vegan", "vegie", "subscription"]
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

