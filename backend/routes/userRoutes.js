import{
    showAllUsers,
    createTestUser,
    deleteAllUsers
} from '../controllers/userController'

const routes = (app) =>{
    app.route('/api/user')
    .get((req,res,next) => {
        next();
    },createTestUser)

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