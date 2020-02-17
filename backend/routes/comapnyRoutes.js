import {
    createComapny
}from '../controllers/companyController'

const routes = (app) =>{
    app.route('/api/createComapny')
    .post((req,res,next) =>{
        next();
    },createComapny)
}
export default routes