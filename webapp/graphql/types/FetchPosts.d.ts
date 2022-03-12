/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchPosts
// ====================================================

export interface FetchPosts_posts_comments {
  __typename: "Comment";
  id: string;
  name: string | null;
}

export interface FetchPosts_posts {
  __typename: "Post";
  id: string;
  name: string | null;
  viewsCount: number | null;
  comments: FetchPosts_posts_comments[] | null;
}

export interface FetchPosts {
  posts: FetchPosts_posts[] | null;
}
