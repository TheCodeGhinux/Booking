import jwt from 'jsonwebtoken'
import { createError } from './error.js'


export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if(!token) {
    return next(createError(401, "You're not authorized") )
}

jwt.verify(token, process.env.jwt_secret, (err, user) => {
  if (err) {
    return next(createError(403, "Invalid user token"))
  }
  req.user = user;
  next()
})
}

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You're not authorized"));
    }
  })
}

export const verifyAdmin = (req, res, next) => {

  
  verifyToken(req, res, next, () => {
    if ( req.user.isAdmin) {
      console.log(req.user); 
      next();
    } else {
      return next(createError(403, "You're not authorized, not an admin"));
    }
  });
};