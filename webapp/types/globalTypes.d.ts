/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface TestFlightCreateInput {
  name?: string | null;
  variants?: TestFlightVariantRelateToManyForCreateInput | null;
}

export interface TestFlightRelateToOneForCreateInput {
  create?: TestFlightCreateInput | null;
  connect?: TestFlightWhereUniqueInput | null;
}

export interface TestFlightVariantCreateInput {
  name?: string | null;
  testFlight?: TestFlightRelateToOneForCreateInput | null;
}

export interface TestFlightVariantRelateToManyForCreateInput {
  create?: TestFlightVariantCreateInput[] | null;
  connect?: TestFlightVariantWhereUniqueInput[] | null;
}

export interface TestFlightVariantWhereUniqueInput {
  id?: string | null;
}

export interface TestFlightWhereUniqueInput {
  id?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
