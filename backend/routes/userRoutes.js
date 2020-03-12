import{
    showAllUsers,
    createTestUser,
    deleteAllUsers,
    register,
    loginUser
} from '../controllers/userController'

const routes = (app) =>{
    app.route('/api/user')
    .get((req,res,next) => {
        next();
    },createTestUser)

    app.route('/api/register')
    .put((req,res,next) =>{
        next();
        
    },register)
    app.route('/api/login')
    .get((req,res,next) =>{
        next();
    },loginUser)
    
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