import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppDispatch } from "./store";

// Define a type for the slice state
interface UserState {
  email: string;
  name: string;
}

// Define the initial state using that type
const initialState: UserState = {
  email: "lars@launch.io",
  name: "Lars Weimar",
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setUserState: (state, action: PayloadAction<UserState>) => {
      return action.payload;
    },
  },
});

export const { setEmail, setUserState } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;
export const selectUserEmail = (state: RootState) => state?.user?.email;

export default userSlice.reducer;
