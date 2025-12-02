import type {JSX} from 'react';
import {useAppSelector} from '@/shared/hooks/reduxHooks.ts';
import {selectIsAuth, selectIsLoading} from '@/entities/user/model/userSelectors.ts';
import {Navigate} from 'react-router-dom';

export const PrivateRoute = ({children}: { children: JSX.Element }) => {
    const isAuth = useAppSelector(selectIsAuth);
    const loading = useAppSelector(selectIsLoading);

    if (loading) {
        return <div>Loading...</div>
    }

    return isAuth ? children : <Navigate to='/login'/>
};