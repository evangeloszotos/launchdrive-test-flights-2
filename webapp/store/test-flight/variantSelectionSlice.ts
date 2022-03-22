import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const selectedVariantSlice = createSlice({
  name: 'selectedVariant',
  initialState: '',
  reducers: {
    changed(state, action: PayloadAction<string>) {
      return action.payload;
    },
  },
});

export default selectedVariantSlice;
