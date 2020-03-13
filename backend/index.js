
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes'
import companyRoutes from './routes/companyRoutes'
import bodyParser from 'body-parser';
import  cors from 'cors'

const app = express();


//this connects to the database
const uri = "mongodb+srv://MealPRepMarketplace:MealPrepPassword$99@cluster0-9ly9m.azure.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(console.log("connected to database")).catch((err)=>console.log(err)) ;
userRoutes(app)
companyRoutes(app)

app.use(cors())
app.options('*', cors());  // enable pre-flight
app.use(bodyParser.json())

app.get('/',(req, res) =>{
    res.send("hello world");
})
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });

app.listen(3000, ()=>{
    console.log(`server is running on`)
})


