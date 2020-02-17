import {Document, Schema, Model, model} from "mongoose";


export const comapnySchema = new Schema({
    ComapnyName:String,
    DeliveryLocations:[],
    DeliveryTimes:[],
    OrderTimes:[],
    OrderOptions:[{
        Subscription: Boolean,
        OneTimeOrder: Boolean,
        MYO: Boolean,
    }],
    PrceRange:Number,
    BulkDiscount:Boolean,
    NumberOfMeals:Number,
    OptionsMeals:[{
        BreakFast:Number,
        Lunch:Number,
        Dinner:Number,
        Snacks:Number,
    }],
    SizeOptions:Boolean,
    SizeDescription:String,
    OfferVegeraian:Boolean,
    PaymentMethod:String,
    DeliverCosts:Number,
    DeliverCostDescription:String,
    OtherProducts:Boolean,
    OtherProductDescription:String
})

const Comapny = model('Comapny', comapnySchema)

export default Comapny