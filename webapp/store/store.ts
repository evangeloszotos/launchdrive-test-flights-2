import createSagaMiddleware from 'redux-saga';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import testFlightSlice from './test-flight/testFlightSlice';
import testFlightVariantSlice from './test-flight/testFlightVariantSlice';
import testFlightSaga from './test-flight/testFlightSaga';
import selectedVariantSlice from './test-flight/variantSelectionSlice';
import templatePreviewSlice from './test-flight/templatePreviewSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  middleware: [sagaMiddleware],
  devTools: true,
  reducer: combineReducers({
    testFlights: testFlightSlice.reducer,
    testFlightVariants: testFlightVariantSlice.reducer,
    selectedVariantId: selectedVariantSlice.reducer,
    templatePreview: templatePreviewSlice.reducer,
  }),
});

sagaMiddleware.run(testFlightSaga);
