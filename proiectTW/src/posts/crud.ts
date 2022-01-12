import { query } from '../db';
import { PostAndMedia } from './types';

export const queryAllPosts = async (from: number, size: number) => {
  const response = await query(
    `SELECT p.PostId, p.UserId, p.MediaId, P.MediaCollectionId, p.Type, p.Description_en, p.Post_en, p.Visibility, p.CreationDate, p.VideoUrl,
            m.MediaId, m.Type, m.Title, m.Url
     FROM Posts p
     LEFT JOIN Media m on p.MediaId=m.MediaId
     ORDER BY p.CreationDate DESC
     LIMIT ${from},${size};
  `
  );
  return response as PostAndMedia[];
};
