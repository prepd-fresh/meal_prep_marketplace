import {
    createCompany,
    showAllCompanies,
    deleteAllCompanies
}from '../controllers/companyController'

const routes = (app) =>{
    app.route('/api/createCompany')
    .post((req,res,next) =>{
        next();
    }, createCompany);

    app.route('/api/allcompanies')
    .get((req,res,next) =>{
        next();
    }, showAllCompanies);

    app.route('/api/deletecompanies')
    .get((req,res,next) =>{
        next();
    }, deleteAllCompanies);
}
export default routes