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
    OrderTimes: [],
    OrderOptions: [{
        Subscription: Boolean,
        OneTimeOrder: Boolean,
        MYO: Boolean
    }],
    PrceRange: String,
    BulkDiscount: Boolean,
    NumberOfMeals: Number,
    OptionsMeals: [{
        BreakFast: Number,
        Lunch: Number,
        Dinner: Number,
        Snacks: Number
    }],
    SizeOptions: Boolean,
    SizeDescription: String,
    OfferVegeraian: Boolean,
    PaymentMethod: String,
    DeliverCosts: Number,
    DeliverCostDescription: String,
    OtherProducts: Boolean,
    OtherProductDescription: String
});

var Company = (0, _mongoose.model)('Company', companySchema);

exports.default = Company;