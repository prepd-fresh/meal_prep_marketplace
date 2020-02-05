import{
    showAllUsers,
    createTestUser
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

}
export default routes