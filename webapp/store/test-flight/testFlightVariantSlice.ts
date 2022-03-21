import {
  createSlice,
  PayloadAction,
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { selectedVariantId } from './variantSelectionSlice';

export interface TestFlightVariant {
  id: string;
  testFlight: string; // parentId
  name?: string;
  tempate?: string;
}

interface CreateVariantPayload {
  id: string;
  testFlight: string;
}

const testFlightVariantAdapter = createEntityAdapter<TestFlightVariant>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (entity) => entity.id,
  // Keep the "all IDs" array sorted based on book titles
  //sortComparer: (a, b) => a.title.localeCompare(b.title),
});

export const testFlightVariantSlice = createSlice({
  name: 'testFlightVariant',
  // `createSlice` will infer the state type from the `initialState` argument
  //initialState,
  initialState: testFlightVariantAdapter.getInitialState(),
  reducers: {
    created(state, action: PayloadAction<CreateVariantPayload>) {
      testFlightVariantAdapter.addOne(state, action.payload);
    },
  },
});

export const { selectById: selectedTestFlightVariant } =
  testFlightVariantAdapter.getSelectors<RootState>(
    (state) => state.testFlightVariants
  );

export const selectTax = createSelector(
  (state) => state,
  selectedVariantId,
  (state, id) => selectedTestFlightVariant(state, id)
);

export default testFlightVariantSlice;
