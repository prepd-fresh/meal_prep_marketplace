import {
    createCompany
}from '../controllers/companyController'

const routes = (app) =>{
    app.route('/api/createCompany')
    .post((req,res,next) =>{
        next();
    },createCompany)
}
export default routes