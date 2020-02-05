const express = require('express')
const app = express();
const mongoose = require('mongoose')
const port = 3000;

const uri = "mongodb+srv://MealPRepMarketplace:MealPrepPassword$99@cluster0-9ly9m.azure.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(console.log("Connected to database"))


app.get('/',(req, res) =>{
    res.send("hello world");
})


app.listen(3000, ()=>{
    console.log(`server is running on`)
})

