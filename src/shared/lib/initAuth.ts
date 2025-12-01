import { onAuthStateChanged } from "@firebase/auth";
import type { AppDispatch } from "@/app/store.ts";
import { auth } from "../api/firebase.ts";
import {
  clearUser,
  setUser,
  stopLoading,
} from "@/entities/user/model/userSlice.ts";

export const initAuth = (dispatch: AppDispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        setUser({
          id: user.uid,
          email: user.email,
        })
      );
    } else {
      dispatch(clearUser());
    }

    dispatch(stopLoading());
  });
};
