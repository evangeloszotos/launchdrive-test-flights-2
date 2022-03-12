/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface CommentCreateInput {
  name?: string | null;
  content?: string | null;
  product?: ProductRelateToOneForCreateInput | null;
  post?: PostRelateToOneForCreateInput | null;
}

export interface CommentRelateToManyForCreateInput {
  create?: CommentCreateInput[] | null;
  connect?: CommentWhereUniqueInput[] | null;
}

export interface CommentRelateToManyForUpdateInput {
  disconnect?: CommentWhereUniqueInput[] | null;
  set?: CommentWhereUniqueInput[] | null;
  create?: CommentCreateInput[] | null;
  connect?: CommentWhereUniqueInput[] | null;
}

export interface CommentWhereUniqueInput {
  id?: string | null;
}

export interface FakeDoorTestCreateInput {
  name?: string | null;
}

export interface PostCreateInput {
  name?: string | null;
  content?: string | null;
  viewsCount?: number | null;
  comments?: CommentRelateToManyForCreateInput | null;
}

export interface PostRelateToOneForCreateInput {
  create?: PostCreateInput | null;
  connect?: PostWhereUniqueInput | null;
}

export interface PostUpdateInput {
  name?: string | null;
  content?: string | null;
  viewsCount?: number | null;
  comments?: CommentRelateToManyForUpdateInput | null;
}

export interface PostWhereUniqueInput {
  id?: string | null;
}

export interface ProductCreateInput {
  name?: string | null;
  comments?: CommentRelateToManyForCreateInput | null;
}

export interface ProductRelateToOneForCreateInput {
  create?: ProductCreateInput | null;
  connect?: ProductWhereUniqueInput | null;
}

export interface ProductWhereUniqueInput {
  id?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
