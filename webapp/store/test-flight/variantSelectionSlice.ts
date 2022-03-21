import {
  createSlice,
  PayloadAction,
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface VariantSelection {
  testFlightVariant;
}

export const selectedVariantSlice = createSlice({
  name: 'selectedVariant',
  // `createSlice` will infer the state type from the `initialState` argument
  //initialState,
  initialState: '',
  reducers: {
    changed(state, action: PayloadAction<string>) {
      return action.payload;
    },
  },
});

export const selectedVariantId = (state: RootState) => state.selectedVariantId;

export default selectedVariantSlice;
