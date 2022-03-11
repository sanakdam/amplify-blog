import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum BlogsSortField {
  ID = "id",
  NAME = "name",
  CREATED_AT = "createdAt",
  UPDATED_AT = "updatedAt"
}

export enum SortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export declare class BlogsSortQuery {
  readonly items?: (Blog | null)[];
  readonly nextToken?: string;
  readonly scannedCount?: number;
  constructor(init: ModelInit<BlogsSortQuery>);
}

export declare class ModelBlogConnection {
  readonly items?: (Blog | null)[];
  readonly nextToken?: string;
  readonly scannedCount?: number;
  constructor(init: ModelInit<ModelBlogConnection>);
}

type BlogMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Blog {
  readonly id: string;
  readonly name: string;
  readonly type?: string;
  readonly posts?: (Post | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Blog, BlogMetaData>);
  static copyOf(source: Blog, mutator: (draft: MutableModel<Blog, BlogMetaData>) => MutableModel<Blog, BlogMetaData> | void): Blog;
}

export declare class Post {
  readonly id: string;
  readonly title: string;
  readonly blog?: Blog;
  readonly comments?: (Comment | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class Comment {
  readonly id: string;
  readonly post?: Post;
  readonly content: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}