import{
    showAllUsers,
    createTestUser,
    loginUser,
    createAdminUser,
    registerUser,
    registerAdmin,
    deleteUserByID
} from '../controllers/userController'
import {authenticateToke} from './middleWare.js'

const routes = (app) =>{
    //Creates a User
    app.route('/api/user')
    .get((req,res,next) => {
        next();
    },createTestUser)

    //create Admin user
    app.route('/api/createAdmin')
    .get((req,res,next) =>{
        next();
    }, createAdminUser)

    //Registers router
    app.route('/api/register')
    .post((req,res,next) =>{
        next();    
    },registerUser)

    //Login user 
    app.route('/api/login')
    .post((req,res,next) =>{
        next();
    },loginUser)
    
    //Displays all users-
    app.route('/api/allusers')
    .get((req,res,next) =>{
        next();
    },showAllUsers)
    
    app.route('/api/deleteuser')
    .post(authenticateToke, (req,res,next) =>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    },deleteUserByID)

    app.route('/api/registerAdmin')
    .post(authenticateToke, (req,res,next) =>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    },registerAdmin)



}
export default routes