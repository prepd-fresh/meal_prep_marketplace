
import jwt from 'jsonwebtoken'
require('dotenv').config();

export const authenticateToke = (req, res, next) =>{
    const authHeader = req.headers['authorization']
    const header = authHeader.split(' ')
    const token = header[1];
    if(token === null) res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (err, user) => {
        if(err) return res.sendStatus(403)
        req.user = user
        next();
    })
}