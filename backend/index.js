
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes'
import comapnyRoutes from './routes/comapnyRoutes'
const app = express();


//this connects to the database
const uri = "mongodb+srv://MealPRepMarketplace:MealPrepPassword$99@cluster0-9ly9m.azure.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(console.log("connected to database")).catch((err)=>console.log(err)) ;

userRoutes(app)
comapnyRoutes(app)

app.get('/',(req, res) =>{
    res.send("hello world");
})

app.listen(3000, ()=>{
    console.log(`server is running on`)
})


