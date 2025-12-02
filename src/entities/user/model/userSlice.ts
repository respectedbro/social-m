import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import type {User} from '@/entities/user/model/types.ts';


interface UserState {
    user: User | null;
    loading: boolean;
}

const initialState: UserState = {
    user: null,
    loading: true
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User | null>) {
            state.user = action.payload;
            state.loading = false;
        },
        logout(state) {
            state.user = null;
            state.loading = true;
        }
    }
});

export const {setUser, logout} = userSlice.actions;
export default userSlice.reducer;
