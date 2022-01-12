// import { Request, Response, NextFunction } from 'express';
// import * as admin from 'firebase-admin'

// import logger from './logger';
// import { toRestCallString } from './util';
// import { findUserByFirebaseUid } from './auth/user-db';
// import { NODE_ENV, SKIP_AUTH } from './env'

// export const required = async (req: Request, res: Response, next: NextFunction) => {
//   if (NODE_ENV === 'dev' && SKIP_AUTH) {
//     return next();
//   }
//   const token = getTokenFromHeaders(req)
//   if (!token) {
//     logger.log('info', `Authentication: could not find authorization header for call ${toRestCallString(req)}`);
//     return res.boom.unauthorized('Missing token for authentication');
//   }

//   const decodedToken = await admin.auth().verifyIdToken(token);
//   if (!decodedToken) {
//     logger.log('info', `Authentication: wrong authorization header passed for call ${toRestCallString(req)}`);
//     return res.boom.unauthorized('Wrong token for authentication');
//   }

//   logger.log('info', `FirebaseUID ${decodedToken.uid}`);
//   const user = await findUserByFirebaseUid(decodedToken.uid);
//   res.locals.user = user;

//   return next();
// }

// export const optional = (_req: Request, _res: Response, next: NextFunction) => {
//   return next()
// }

// const getTokenFromHeaders = (req: Request) => {
//   const authorization = req.headers.authorization
//   if (authorization && authorization.split(' ')[0] === 'Bearer') {
//     return authorization.split(' ')[1]
//   }
//   return undefined
// }
