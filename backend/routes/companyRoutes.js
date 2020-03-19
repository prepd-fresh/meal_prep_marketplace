import {
    createCompany,
    allCompany,
    deleteCompany,
    deleteAllComapny,
    addCompany
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
    },deleteAllComapny)

    app.route('/api/addcompany')
    .post((req,res,next) =>{
        next();
    },addCompany)

    app.route('/api/delete-company')
    .post((req, res, next) =>{
        next();
    }, deleteCompany)
}
export default routes