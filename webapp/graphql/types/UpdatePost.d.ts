/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PostUpdateInput } from './../../types/globalTypes';

// ====================================================
// GraphQL mutation operation: UpdatePost
// ====================================================

export interface UpdatePost_updatePost {
  __typename: 'Post';
  name: string | null;
}

export interface UpdatePost {
  updatePost: UpdatePost_updatePost | null;
}

export interface UpdatePostVariables {
  id: string;
  data: PostUpdateInput;
}
