import{
    showAllUsers,
    createTestUser,
    deleteAllUsers,
    register,
    loginUser,
    deleteAllAdmins,
    createAdminUser
} from '../controllers/userController'

import authentication from './middleWare'

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

    //Delete all Admins
    app.route('/api/deleteAdmin')
    .get((req,res,next) =>{
        next();
    }, deleteAllAdmins)

    //Registers router
    app.route('/api/register')
    .put((req,res,next) =>{
        next();    
    },register)

    //Login user 
    app.route('/api/login')
    .post((req,res,next) =>{
        next();
    },loginUser)
    
    //Displays all users
    
    app.route('/api/allusers')
    .get((req,res,next) =>{
        next();
    },showAllUsers)
    
    app.route('/api/delete')
    .get((req,res,next) =>{
        next();
    },deleteAllUsers)


}
export default routes