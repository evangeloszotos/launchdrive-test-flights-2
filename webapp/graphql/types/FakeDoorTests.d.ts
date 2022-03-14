/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FakeDoorTests
// ====================================================

export interface FakeDoorTests_fakeDoorTests {
  __typename: "FakeDoorTest";
  id: string;
  name: string | null;
}

export interface FakeDoorTests_posts {
  __typename: "Post";
  name: string | null;
}

export interface FakeDoorTests {
  fakeDoorTests: FakeDoorTests_fakeDoorTests[] | null;
  posts: FakeDoorTests_posts[] | null;
}
