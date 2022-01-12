import { NextFunction, Request, Response } from 'express';
import { ObjectSchema } from 'joi';

export const validateBody = async (
  req: Request,
  res: Response,
  next: NextFunction,
  schema: ObjectSchema
) => {
  const validation = await schema.validate(req.body);

  if (!validation.error) return next();
  return res.status(422).send({
    message: 'Validation error.',
    error: validation.error.message,
  });
};
