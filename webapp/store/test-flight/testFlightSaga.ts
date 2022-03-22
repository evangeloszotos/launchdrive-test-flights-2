import cuid from 'cuid';
import { select, call, put, takeLeading } from 'redux-saga/effects';
import { createAction, PayloadAction } from '@reduxjs/toolkit';
import testFlightSlice from './testFlightSlice';
import testFlightVariantSlice from './testFlightVariantSlice';
import routerRef from '../sagaRouterReference';
import selectedVariantSlice from './variantSelectionSlice';

export const testFlightCreated = createAction<string>('*/testFlight/create');

function* createTestFlight(action: PayloadAction<string>) {
  try {
    console.log('createTestFlight:', action);

    // Create TestFlight
    const testFlightId = cuid();
    yield put(
      testFlightSlice.actions.created({
        id: testFlightId,
        name: action.payload,
      })
    );

    // Create TestFlightVariant
    const testFlightVariantId = cuid();
    yield put(
      testFlightVariantSlice.actions.created({
        id: testFlightVariantId,
        testFlight: testFlightId,
      })
    );

    // Select Created Variant
    yield put(selectedVariantSlice.actions.changed(testFlightVariantId));

    // Navigate
    routerRef.router?.push(`variant/${testFlightVariantId}`);
  } catch (e) {}
}

function* testFlightSaga() {
  yield takeLeading(testFlightCreated.type, createTestFlight);
}

export default testFlightSaga;
