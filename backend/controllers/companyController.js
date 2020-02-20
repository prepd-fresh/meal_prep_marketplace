import mongoose from 'mongoose';
import Schema from '../models/companyModel'

const companyModel = mongoose.model('Company', Schema.companySchema)

export const createCompany = (req, res) =>{
    var company = new companyModel({
        CompanyName: req.CompanyName,
        DeliveryLocations: req.DeliverLocations,
        DeliveryTimes: req.DeliveryTimes,
        OrderTimes: req.OrderTimes,
        PriceRange: req.PriceRange,
        BulkDiscount: req.BulkDiscount,
        NumberOfMeals: req.NumberOfMeals,        
        SizeOptions: req.SizeOptions,
        SizeDescription: req.SizeDescription,
        OfferVegeraian: req.OfferVegeraian,
        PaymentMethod: req.PaymentMethod,
        DeliverCosts: req.DeliverCosts,
        DeliverCostDescription: req.DeliverCostDescription,
        OtherProducts: req.OtherProducts,
        OtherProductDescription: req.OtherProductDescription
    });

    if(req.OrderOptions) {        
        company.OrderOptions = {
            Subscription: req.OrderOptions.Subscription,
            OneTimeOrder: req.OrderOptions.OneTimeOrder,
            MYO: req.OrderOptions.MYO
        }
    }

    if(req.OptionsMeals) {
        company.OptionsMeals = {
            BreakFast: req.OptionsMeals.BreakFast,
            Lunch: req.OptionsMeals.Lunch,
            Dinner: req.OptionsMeals.Dinner,
            Snacks: req.OptionsMeals.Snacks,
        }
    }

    company.save((err) => {
        if(err) throw err;
        res.send(company);
    });
}

export const showAllCompanies = (req, res) => {
    companyModel.find({}, (err, document) => {
        var companyMap = [];

        document.forEach((company) => {
            companyMap.push({
                company
            });
        });

        if(err) {
            console.log(err);
            res.send(err);
        }

        res.send(companyMap);
    });
}

export const searchCompany = (req, res) =>{
    //create company logic here

    res.send("company created")
}

export const deleteAllCompanies = (req, res) => {
    companyModel.deleteMany({}, (err) => {
        if (err) {
            res.send(err);
        }
        res.send("deleted all companies")
        res.end();
    });
}