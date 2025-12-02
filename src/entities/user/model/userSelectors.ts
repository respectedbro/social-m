import type {RootState} from '@/app/store.ts';

export const selectUser = (state:RootState) => state.user.user
export const selectIsLoading = (state:RootState) => state.user.loading
export const selectIsAuth = (state:RootState) => Boolean(state.user.user)