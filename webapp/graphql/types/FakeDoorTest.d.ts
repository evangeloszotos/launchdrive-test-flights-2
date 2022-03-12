/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FakeDoorTestCreateInput } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: FakeDoorTest
// ====================================================

export interface FakeDoorTest_createFakeDoorTest {
  __typename: "FakeDoorTest";
  id: string;
  name: string | null;
}

export interface FakeDoorTest {
  createFakeDoorTest: FakeDoorTest_createFakeDoorTest | null;
}

export interface FakeDoorTestVariables {
  data: FakeDoorTestCreateInput;
}
