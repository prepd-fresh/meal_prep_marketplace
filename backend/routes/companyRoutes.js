import {
    singleCompany,
    createCompany,
    allCompany,
    deleteCompany,
    deleteAllComapny,
    updateCompany,
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

    app.route('/api/update-company')
    .put((req, res, next) =>{
        next();
    }, updateCompany)

    app.route('/api/singleCompany')
    .post((req, res, next) =>{
        next();
    }, singleCompany)
}
export default routes