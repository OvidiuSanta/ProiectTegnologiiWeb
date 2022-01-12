import { nanoid } from 'nanoid';
import path from 'path';
import { readdir } from 'fs/promises';
import { UploadedFile } from 'express-fileupload';
import { findWhere, insert } from '../db';
import {
  MediaCollection,
  MediaDb,
  PostsDb,
  Image,
  PostAndMedia,
} from './types';
import { queryAllPosts } from './crud';
import { convertFromDbType, mediaCollectionToImages } from './convertor';

const UPLOAD_PATH = path.resolve(__dirname, '../..', 'public');

export const queryPosts = async (from: number, size: number) => {
  const response = await queryAllPosts(from, size);

  const posts = [];
  for (const post of response) {
    const images = await getImagesForPost(post);
    posts.push(convertFromDbType(post, images));
  }

  return posts;
};

const getImagesForPost = async (post: PostAndMedia) => {
  if (post.MediaId && post.MediaId > 0) {
    return [
      {
        imageId: post.MediaId,
        path: post.Url,
      } as Image,
    ];
  }

  if (post.MediaCollectionId && post.MediaCollectionId > 0) {
    const collection = await queryMediasForCollection(post.MediaCollectionId);
    return mediaCollectionToImages(collection);
  }

  return [] as Image[];
};

const queryMediasForCollection = (collectionId: number) => {
  return findWhere(`Media`, {
    column: `MediaCollectionId`,
    value: collectionId,
  }) as Promise<MediaDb[]>;
};

export const storeImages = async (
  insertBody: PostsDb,
  images?: UploadedFile[]
) => {
  if (!images) return [];

  const storedImages = [] as Image[];

  if (images.length == 1) {
    const image = await uploadImage(images[0]);
    insertBody.MediaId = image.imageId;
    storedImages.push(image);
  }

  if (images.length > 1) {
    const response = await uploadImages(images, insertBody);
    insertBody.MediaCollectionId = response.mediaCollectionId;
    storedImages.push(...response.images);
  }

  return storedImages;
};

const uploadImages = async (arrayImages: UploadedFile[], post: PostsDb) => {
  const mediaCollection = {
    Type: `image`,
    Title: post.Title_en,
    Title_en: post.Title_en,
    Description: post.Title_en,
    Description_en: post.Title_en,
    Tags: `CMS`,
  } as MediaCollection;

  const results = await insert('MediaCollection', mediaCollection);

  const mediaCollectionId = results.insertedId;

  const uploadedImages = [];
  for (const image of arrayImages) {
    const uploadedImage = await uploadImage(image, mediaCollectionId);
    uploadedImages.push(uploadedImage);
  }

  return {
    mediaCollectionId: mediaCollectionId,
    images: uploadedImages,
  };
};

const uploadImage = async (image: UploadedFile, collectionId?: number) => {
  const extension = image.mimetype.split('/')[1];
  const filePath = await getUploadPath(UPLOAD_PATH, image.name, extension);

  const mediaBody = {
    Type: image.mimetype.split(`/`)[0],
    Url: filePath,
    Title: image.name,
  } as MediaDb;

  if (collectionId) {
    mediaBody.MediaCollectionId = collectionId;
  }
  const results = await insert(`Media`, mediaBody);
  console.log(mediaBody);
  await image.mv(filePath);

  return {
    imageId: results.insertedId,
    path: filePath,
  } as Image;
};

const getUploadPath = async (
  uploadFolder: string,
  name: string,
  type: string
) => {
  let imageGeneratedId = nanoid(5);

  const files = await readdir(uploadFolder);

  while (files.indexOf(`${imageGeneratedId}`) > -1) {
    imageGeneratedId = nanoid(5);
  }

  return path.resolve(
    uploadFolder,
    `${name}`,
    '-',
    `${imageGeneratedId}.${type}`
  );
};
