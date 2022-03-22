import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../storeTypes';
import { testFlightAdapter } from './testFlightSlice';
import { testFlightVariantAdapter } from './testFlightVariantSlice';

// TestFlight
export const { selectById: testFlightById } =
  testFlightAdapter.getSelectors<RootState>((state) => state.testFlights);

// TestFlightVariant
export const { selectById: testFlightVariantById } =
  testFlightVariantAdapter.getSelectors(
    (state: RootState) => state.testFlightVariants
  );

// Selection
export const selectedVariantId = (state: RootState) => state.selectedVariantId;
export const selectTestFlightVariant = createSelector(
  (state) => state,
  selectedVariantId,
  (state, id) => testFlightVariantById(state, id)
);
