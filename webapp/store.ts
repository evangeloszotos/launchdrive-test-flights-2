import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { counterSlice } from "./counter-slice";
import { fakeDoorSlice } from "./fake-door-slice";
import { userSlice } from "./user-slice";

export const store = configureStore({
  devTools: true,
  reducer: combineReducers({
    counter: counterSlice.reducer,
    user: userSlice.reducer,
    fakeDoors: fakeDoorSlice.reducer,
  }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
