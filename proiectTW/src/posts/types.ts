import { UploadedFile } from 'express-fileupload';

export enum PostType {
  Article = 'article',
  Video = 'video',
  Image = 'image',
}

export enum PostVisibility {
  NotVisible = 0,
  Visible = 1,
}
export type Image = {
  imageId: number;
  path: string;
};

export type PostsDb = {
  PostId?: number;
  MediaId: number;
  MediaCollectionId?: number;
  Type: PostType;
  Title_en: string;
  Description_en: string;
  Description: string;
  Post_en: string;
  Post: string;
  VideoUrl: string;
};

export type PostCreateRequest = {
  type: PostType;
  title: string;
  text: string;
  video_url?: string;
  images?: UploadedFile[];
};

export type PostResponse = {
  id: number;
  title: string;
  text: string;
  images: Image[];
  type: PostType;
  video_url?: string;
};

export type MediaDb = {
  Type: string;
  MediaId: number;
  MediaCollectionId?: number;
  Title: string;
  Url: string;
};

export type Media = {
  title: string;
  information: string;
  extension: string;
  mediaCollection: number;
  imagePath: string;
  imageId: number;
  url: string;
};

export type MediaCollection = {
  Type: string;
  Title: string;
  Title_en: string;
  Description: string;
  Description_en: string;
  Tags: string;
};

export type PostAndMedia = PostsDb & MediaDb;
