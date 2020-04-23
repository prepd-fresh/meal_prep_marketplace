import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes'
import companyRoutes from './routes/companyRoutes'
import commentRoutes from './routes/commentRotues'
import bodyParser from 'body-parser';
import  cors from 'cors'
require('dotenv').config()
const app = express();


//this connects to the database
const uri = "mongodb+srv://MealPRepMarketplace:MealPrepPassword$99@cluster0-9ly9m.azure.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(console.log("connected to database")).catch((err)=>console.log(err)) ;
app.use(cors())

app.use(bodyParser.json())

userRoutes(app)
companyRoutes(app)
commentRoutes(app)


app.get('/',(req, res) =>{
    res.send("hello world");
})


app.listen(3000, ()=>{
    console.log(`server is running on`)
})


