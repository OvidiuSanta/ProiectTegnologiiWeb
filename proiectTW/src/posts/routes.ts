import express from 'express';
import {
  getPostsWithPagination,
  deletePostById,
  insertPost,
} from './controller';
import * as validators from './validators';

const router = express.Router();

router.get('/posts', getPostsWithPagination);
router.post('/posts', insertPost);
router.delete('/posts/:postId', deletePostById);

export default router;
