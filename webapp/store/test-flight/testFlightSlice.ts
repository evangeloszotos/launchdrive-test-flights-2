import {
  createSlice,
  PayloadAction,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface TestFlight {
  id: string;
  name: string;
}

interface TestFlightVariant {
  id: string;
  name: string;
  tempate: string;
}

interface CreateTestFlightPayload {
  id: string;
  name: string;
}

interface AddVariantPayload {
  fakeDoorId: string;
  variantData: Omit<TestFlightVariant, 'id'>;
}

const testFlightAdapter = createEntityAdapter<TestFlight>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (entity) => entity.id,
  // Keep the "all IDs" array sorted based on book titles
  //sortComparer: (a, b) => a.title.localeCompare(b.title),
});

export const testFlightSlice = createSlice({
  name: 'testFlight',
  // `createSlice` will infer the state type from the `initialState` argument
  //initialState,
  initialState: testFlightAdapter.getInitialState(),
  reducers: {
    created(state, action: PayloadAction<CreateTestFlightPayload>) {
      testFlightAdapter.addOne(state, action.payload);
    },
  },
});

export const { selectAll: selectAllFakedoors } =
  testFlightAdapter.getSelectors<RootState>((state) => state.testFlights);

export const { selectById } = testFlightAdapter.getSelectors<RootState>(
  (state) => state.testFlights
);

export default testFlightSlice;
