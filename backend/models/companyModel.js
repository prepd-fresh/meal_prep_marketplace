"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.companySchema = undefined;

var _mongoose = require("mongoose");

var companySchema = exports.companySchema = new _mongoose.Schema({
    CompanyName: String,
    DeliveryLocations: [],
    DeliveryTimes: [],
    OrderCutoff: [],
    OrderOptions: [{
        Subscription: Boolean,
        OneTimeOrder: Boolean,
        MYO: Boolean
    }],
    PriceRange: [{
        lowest: String,
        highest: String
    }],
    BulkDiscount: Boolean,
    NumberOfMeals: String,
    OptionsMeals: [{
        //changes these to strings **maybe
        BreakFast: Number,
        Lunch: Number,
        Dinner: Number,
        Snacks: Number
    }],
    MenuChanges: Boolean,
    SizeOptions: Boolean,
    SizeDescription: String,
    OfferVegeraian: Boolean,
    PaymentMethod:[],
    DeliverCosts: Number,
    DeliverCostDescription: String,
    OtherProducts: Boolean,
    OtherProductDescription: String,
    InstagramFollowers:Number,
    AdvancedSearch:[]
});

var Company = (0, _mongoose.model)('Company', companySchema);

exports.default = Company;