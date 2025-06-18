import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null, isLoggedIn: false };
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      return { ...state, user: action.payload, isLoggedIn: true };
    },
    setLogout(state) {
      return { ...state, user: null, isLoggedIn: false };
    },
  },
});

export const { setUser, setLogout } = userSlice.actions;

export default userSlice.reducer;
