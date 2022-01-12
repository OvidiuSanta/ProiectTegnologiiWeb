import { Request, Response } from 'express';
import { NextFunction } from 'express';
import { UploadedFile } from 'express-fileupload';
import Joi from 'joi';
import { validateBody } from '../util';
const IMAGES_REGEX = /\.(jpg|jpeg|png|gif)$/i;
export const validateImageUpload = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.files && Object.keys(req.files).length > 0) {
    if (Object.keys(req.files).length == 1) {
      const image = req.files.images as UploadedFile;
      if (!image.name.match(IMAGES_REGEX)) {
        return res
          .status(400)
          .send({ message: `Only images files are allowed` });
      }
    }
    if (Object.keys(req.files).length > 1) {
      const images = req.files.images as UploadedFile[];
      for (const image of images) {
        if (!image.name.match(IMAGES_REGEX)) {
          return res
            .status(400)
            .send({ message: `Only images files are allowed` });
        }
      }
    }
  }
  return next();
};

export const schema = Joi.object().keys({
  title: Joi.string().required(),
  text: Joi.string().required(),
  type: Joi.string(),
  video_url: Joi.string(),
});

export const validation = (req: Request, res: Response, next: NextFunction) => {
  return validateBody(req, res, next, schema);
};
