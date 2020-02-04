const express = require('express')
const app = express();
const mongoose = require('mongoose')
const port = 3000;

const databaseConnection = "mongodb+srv://MealPrepMarketDB:MealprepMarket$99@mealprepmarketplace-yc2s2.azure.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(databaseConnection,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log(err)
})


app.get('/',(req, res) =>{
    res.send("hello world");
})


app.listen(3000, ()=>{
    console.log(`server is running on`)
})
