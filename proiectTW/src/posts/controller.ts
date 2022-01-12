import { Request, Response, NextFunction } from 'express';
import { deleteById, deleteWhere, findById, insert } from '../db';

import { queryPosts, storeImages } from './services';
import { PostCreateRequest, PostsDb, PostResponse } from './types';

const POST_TABLE_NAME = 'Posts';
const POST_PK = 'PostId';

export const getPostsWithPagination = async (req: Request, res: Response) => {
  const from = parseInt((req.query.from as string) || '0');
  const size = parseInt((req.query.size as string) || '10');

  const posts = await queryPosts(from, size);

  res.status(200).send(posts);
};

export const insertPost = async (req: Request, res: Response) => {
  const postBody = req.body as PostCreateRequest;

  const insertBody = {
    Title_en: postBody.title,
    Post_en: postBody.text,
    Type: postBody.type,
    VideoUrl: postBody.video_url,
    Description_en: '',
  } as PostsDb;

  const storedImages = await storeImages(insertBody, postBody.images);
  console.log('test', storedImages);
  await storedImages.forEach((element) => console.log(element));
  const resultsPost = await insert(POST_TABLE_NAME, insertBody);

  const response = {
    id: resultsPost.insertId,
    title: insertBody.Title_en,
    text: insertBody.Post_en,
    type: insertBody.Type,
    video_url: insertBody.VideoUrl,
    images: storedImages,
  } as PostResponse;

  res.status(200).send(response);
};

export const deletePostById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.postId);

  const post = await findById(POST_TABLE_NAME, { column: POST_PK, value: id });

  if (!post) {
    return res
      .status(404)
      .send({ message: `No post with id: ${id} to be deleted` });
  }

  if (post.MediaCollectionId > 0) {
    await deleteWhere(`Media`, {
      column: `MediaCollectionId`,
      value: post.MediaCollectionId,
    });
    await deleteById(`MediaCollection`, {
      column: `CollectionId`,
      value: post.MediaCollectionId,
    });
  }

  if (post.MediaId > 0) {
    await deleteById(`Media`, {
      column: `MediaId`,
      value: post.MediaId,
    });
  }

  const response = await deleteById(POST_TABLE_NAME, {
    column: `PostId`,
    value: id,
  });

  if (response != 1) {
    return res
      .status(500)
      .send({ message: `Number of rows affected: ${response}` });
  }
  return res.status(200).send({ message: `Deleted Successfully` });
};

export const handleUpdatePost = async (req: Request, res: Response) => {
  const id = parseInt(req.params.postId);

  const postTitle = req.body.title;
  const postText = req.body.text;

  const body = {
    title: postTitle,
    text: postText,
  };
  // const convertedBody = convertTypeToPostsDb(body);

  // const response = await updateById(
  //   TABLE_NAME,
  //   { column: idType, value: id },
  //   convertedBody
  // );

  // if (response != 1)
  //   return res
  //     .status(500)
  //     .send({ message: `Multiple Rows Affected ${response}` });

  // const updatedBody = await findById(TABLE_NAME, { column: idType, value: id });
  // return res.status(200).send(updatedBody);
};
