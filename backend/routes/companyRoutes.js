import {
    createCompany,
    allCompany,
    deleteComapny
}from '../controllers/companyController'

const routes = (app) =>{
    app.route('/api/company')
    .get((req,res,next) =>{
        next();
    },createCompany),

    app.route('/api/allCompanys')
    .get((req,res,next) =>{
        next();
    },allCompany)

    app.route('/api/deleteComapny')
    .get((req,res,next) =>{
        next();
    },deleteComapny)
}
export default routes