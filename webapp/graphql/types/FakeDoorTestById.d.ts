/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FakeDoorTestById
// ====================================================

export interface FakeDoorTestById_fakeDoorTest {
  __typename: "FakeDoorTest";
  id: string;
  name: string | null;
}

export interface FakeDoorTestById {
  fakeDoorTest: FakeDoorTestById_fakeDoorTest | null;
}

export interface FakeDoorTestByIdVariables {
  testId?: string | null;
}
