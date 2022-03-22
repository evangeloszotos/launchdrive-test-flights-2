import {
  createSlice,
  PayloadAction,
  createEntityAdapter,
} from '@reduxjs/toolkit';

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

export const testFlightVariantAdapter = createEntityAdapter<TestFlightVariant>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (entity) => entity.id,
  // Keep the "all IDs" array sorted based on book titles
  // sortComparer: (a, b) => a.title.localeCompare(b.title),
});

export const testFlightVariantSlice = createSlice({
  name: 'testFlightVariant',
  // `createSlice` will infer the state type from the `initialState` argument
  // initialState,
  initialState: testFlightVariantAdapter.getInitialState(),
  reducers: {
    created(state, action: PayloadAction<CreateVariantPayload>) {
      testFlightVariantAdapter.addOne(state, action.payload);
    },
  },
});

export default testFlightVariantSlice;
