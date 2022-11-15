export interface IResponse<T> {
  status: number;
  data: T;
}

export interface IPost {
  commentcount: number;
  viewcount: number;
  imgsLink: string[];
  status: number;
  _id: string;
  title: string;
  wordcount: number;
  author: IAuthor;
  abstract: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAuthor {
  gender: string;
  bio: string;
  avatar: string;
  following_count: number;
  follower_count: number;
  private_post_count: number;
  _id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
