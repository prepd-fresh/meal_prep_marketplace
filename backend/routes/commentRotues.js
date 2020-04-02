import { addTestComment, deleteAllComments, allCommentsByCompany, addComment, allCommentsAdmin } from '../controllers/commentController'

import authentication from './middleWare'

const routes = (app) => {
    //creates a test component
    app.route('/api/addTestComment')
        .get((req, res, next) => {
            next();
        }, addTestComment),
        //deletes all components
        app.route('/api/deleteComments')
            .get((req, res, next) => {
                next()
            }, deleteAllComments),
        //get comments by company
        app.route('/api/allComments')
            .post((req, res, next) => {
                next();
            }, allCommentsByCompany),
        //add comment
        app.route('/api/addComment')
            .get((req, res, next) => {
                next();
            }, addComment),
        app.route('/api/abc')
            .get((req, res, next) => {
                next();
            }, allCommentsAdmin)


}
export default routes