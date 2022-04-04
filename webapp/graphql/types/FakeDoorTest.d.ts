/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TestFlightCreateInput } from './../../types/globalTypes';

// ====================================================
// GraphQL mutation operation: FakeDoorTest
// ====================================================

export interface FakeDoorTest_createTestFlight {
  __typename: 'TestFlight';
  id: string;
  name: string | null;
}

export interface FakeDoorTest {
  createTestFlight: FakeDoorTest_createTestFlight | null;
}

export interface FakeDoorTestVariables {
  data: TestFlightCreateInput;
}
