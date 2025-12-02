import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {LoginPage} from '@/pages/auth/ui/LoginPage.tsx'
import {RegisterPage} from '@/pages/auth/ui/RegisterPage.tsx';
import {PrivateRoute} from '@/shared/routing/PrivateRoute.tsx';
import {PublicRoute} from '@/shared/routing/PublicRoute.tsx';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                           <div>Главная</div>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <LoginPage />
                        </PublicRoute>
                    }
                />
                <Route
                    path="/register"
                    element={
                        <PublicRoute>
                            <RegisterPage />
                        </PublicRoute>
                    }
                />

            </Routes>
        </BrowserRouter>
    )
}