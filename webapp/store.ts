import { configureStore, combineReducers } from '@reduxjs/toolkit';
import testFlightSlice from './store/test-flight/testFlightSlice';
import testFlightVariantSlice from './store/test-flight/testFlightVariantSlice';
import createSagaMiddleware from 'redux-saga';
import testFlightSaga from './store/test-flight/testFlightSaga';
import selectedVariantSlice from './store/test-flight/variantSelectionSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  middleware: [sagaMiddleware],
  devTools: true,
  reducer: combineReducers({
    testFlights: testFlightSlice.reducer,
    testFlightVariants: testFlightVariantSlice.reducer,
    selectedVariantId: selectedVariantSlice.reducer,
  }),
});

sagaMiddleware.run(testFlightSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
