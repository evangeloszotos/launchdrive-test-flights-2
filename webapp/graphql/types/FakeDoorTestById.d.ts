/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FakeDoorTestById
// ====================================================

export interface FakeDoorTestById_testFlight {
  __typename: 'TestFlight';
  id: string;
  name: string | null;
}

export interface FakeDoorTestById {
  testFlight: FakeDoorTestById_testFlight | null;
}

export interface FakeDoorTestByIdVariables {
  testId?: string | null;
}
