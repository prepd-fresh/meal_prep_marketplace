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


var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('/home/ubuntu/meal_prep_marketplace/backend/sslcert/key.pem', 'utf8');
var certificate = fs.readFileSync('/home/ubuntu/meal_prep_marketplace/backend/sslcert/cert.pem', 'utf8');

var credentials = {key: privateKey, cert: certificate};

// your express configuration here

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(3000);

app.get('/',(req, res) =>{
    res.send("hello world");
})
console.log("Server is running...")
/* Redirect http to https */

/*
var port = 3000;
app.listen(port, ()=>{
    console.log(`server is running on port: ` + port)
})
*/
