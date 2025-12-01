import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: string | null;
  email: string | null;
  loading: boolean;
}

const initialState: UserState = {
  id: null,
  email: null,
  loading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(
      state,
      action: PayloadAction<{ id: string; email: string | null }>
    ) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.loading = false;
    },
    clearUser(state) {
      state.id = null;
      state.email = null;
    },
    stopLoading(state) {
      state.loading = false;
    },
  },
});

export const { setUser, clearUser, stopLoading } = userSlice.actions;
export default userSlice.reducer;
