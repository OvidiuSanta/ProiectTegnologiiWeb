import { Image, MediaDb, PostAndMedia, PostResponse } from './types';

export const mediaCollectionToImages = (medias: MediaDb[]): Image[] => {
  return medias.map((media) => {
    return {
      imageId: media.MediaId,
      path: media.Url,
    } as Image;
  });
};

export const convertFromDbType = (
  post: PostAndMedia,
  images?: Image[]
): PostResponse => {
  return {
    id: post.PostId,
    title: post.Title,
    text: post.Post,
    images: images,
    type: post.Type,
    video_url: post.VideoUrl,
  } as PostResponse;
};
