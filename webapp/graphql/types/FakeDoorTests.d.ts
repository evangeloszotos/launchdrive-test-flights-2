/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FakeDoorTests
// ====================================================

export interface FakeDoorTests_testFlights {
  __typename: "TestFlight";
  id: string;
  name: string | null;
}

export interface FakeDoorTests {
  testFlights: FakeDoorTests_testFlights[] | null;
}
