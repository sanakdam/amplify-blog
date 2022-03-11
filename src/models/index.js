// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const BlogsSortField = {
  "ID": "id",
  "NAME": "name",
  "CREATED_AT": "createdAt",
  "UPDATED_AT": "updatedAt"
};

const SortDirection = {
  "ASC": "ASC",
  "DESC": "DESC"
};

const { Blog, Post, Comment, BlogsSortQuery, ModelBlogConnection } = initSchema(schema);

export {
  Blog,
  Post,
  Comment,
  BlogsSortField,
  SortDirection,
  BlogsSortQuery,
  ModelBlogConnection
};