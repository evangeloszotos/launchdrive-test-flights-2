import {
  createAction,
  createSlice,
  PayloadAction,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import { RootState, AppDispatch } from './store';

interface FakeDoor {
  id: string;
  name: string;
  variants: Variant[];
  //variantIds: string[];
}

interface Variant {
  id: string;
  name: string;
  tempate: string;
}

// Define a type for the slice state
interface FakeDoorState {
  id: string;
  name: string;
  value: number;
}

interface AddVariantPayload {
  fakeDoorId: string;
  variantData: Omit<Variant, 'id'>;
}

const fakeDoorAdapter = createEntityAdapter<FakeDoor>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (fakeDoor) => fakeDoor.id,
  // Keep the "all IDs" array sorted based on book titles
  //sortComparer: (a, b) => a.title.localeCompare(b.title),
});

export const { selectById } = fakeDoorAdapter.getSelectors();

export const fakeDoorSlice = createSlice({
  name: 'fakeDoor',
  // `createSlice` will infer the state type from the `initialState` argument
  //initialState,
  initialState: fakeDoorAdapter.getInitialState(),
  reducers: {
    fakeDoorAdded(state, action: PayloadAction<string>) {
      fakeDoorAdapter.addOne(state, {
        id: Math.random() + 'id',
        variants: [],
        name: action.payload,
      });
    },
    variantAddedToFakeDoor(state, action: PayloadAction<AddVariantPayload>) {
      const fakeDoor = selectById(state, action.payload.fakeDoorId);

      if (fakeDoor) {
        const variant: Variant = {
          ...action.payload.variantData,
          id: Math.random() + 'id',
        };

        fakeDoorAdapter.updateOne(state, {
          id: fakeDoor.id,
          changes: {
            variants: [...fakeDoor.variants, variant],
          },
        });
        // console.log(fakeDoor?.variants);
        // fakeDoor.variants.push(variant);
      }
    },
    variantUpdated(state, action: PayloadAction<AddVariantPayload>) {
      const fakeDoor = selectById(state, action.payload.fakeDoorId);

      const variant: Variant = { ...action.payload.variantData, id: 'MyId' };
      fakeDoor?.variants.push(variant);
    },
  },
});

export const { variantAddedToFakeDoor, variantUpdated, fakeDoorAdded } =
  fakeDoorSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export const { selectAll: selectAllFakedoors } =
  fakeDoorAdapter.getSelectors<RootState>((state) => state.fakeDoors);

export default fakeDoorSlice.reducer;
